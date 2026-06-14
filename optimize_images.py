"""
optimize_images.py — Оптимизация картинок сайта ПГАТК
======================================================
Что делает:
  1. Конвертирует все .png / .jpg / .jpeg / .gif → .webp
  2. Сохраняет оригиналы в public/images/_originals/ (как резервная копия)
  3. Обновляет все ссылки в .ts / .tsx / .js / .json / .html файлах
  4. Выводит подробный отчёт

Запуск:
  python optimize_images.py

Параметры (можно менять):
"""

import os, sys, shutil, re, json
from pathlib import Path
from PIL import Image

# ── Настройки ───────────────────────────────────────────────────────────────
PROJECT_ROOT   = Path(__file__).parent
IMAGES_DIR     = PROJECT_ROOT / "public" / "images"
ORIGINALS_DIR  = PROJECT_ROOT / "public" / "images" / "_originals"
WEBP_QUALITY   = 82          # 0–100, 82 — хороший баланс качества и размера
MAX_WIDTH      = 1920        # пикселей — картинки шире этого будут уменьшены
MAX_HEIGHT     = 1920
SKIP_DIRS      = {"_originals"}   # папки, которые пропускаем
SOURCE_EXTS    = {".png", ".jpg", ".jpeg", ".gif"}

# Файлы с кодом, где надо заменить ссылки
CODE_DIRS = [
    PROJECT_ROOT,          # ts, tsx, html, js на верхнем уровне
    PROJECT_ROOT / "components",
    PROJECT_ROOT / "pages",
    PROJECT_ROOT / "layouts",
    PROJECT_ROOT / "data",
    PROJECT_ROOT / "utils",
    PROJECT_ROOT / "context",
    PROJECT_ROOT / "src",
]
CODE_EXTS = {".ts", ".tsx", ".js", ".jsx", ".json", ".html"}
EXCLUDE_FILES = {"package-lock.json", "package.json"}
EXCLUDE_DIRS  = {"node_modules", "dist", ".git", "_originals"}
# ────────────────────────────────────────────────────────────────────────────

stats = {
    "converted": 0,
    "skipped":   0,
    "errors":    0,
    "saved_kb":  0,
    "refs_updated": 0,
}
conversion_map: dict[str, str] = {}  # old_rel_path → new_rel_path


def should_skip(path: Path) -> bool:
    return any(part in SKIP_DIRS for part in path.parts)


def convert_image(src: Path) -> bool:
    """Конвертирует одну картинку в WebP. Возвращает True при успехе."""
    dst = src.with_suffix(".webp")

    # Если WebP уже есть и свежее оригинала — пропускаем
    if dst.exists() and dst.stat().st_mtime >= src.stat().st_mtime:
        stats["skipped"] += 1
        return False

    try:
        with Image.open(src) as img:
            # GIF → берём первый кадр
            if getattr(img, "is_animated", False) or img.format == "GIF":
                img.seek(0)

            # Конвертируем в RGB (WebP не поддерживает палитру/CMYK напрямую)
            if img.mode in ("RGBA", "LA", "P"):
                img = img.convert("RGBA")
            elif img.mode != "RGB":
                img = img.convert("RGB")

            # Уменьшаем если слишком большая
            w, h = img.size
            if w > MAX_WIDTH or h > MAX_HEIGHT:
                img.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.LANCZOS)

            img.save(dst, "WEBP", quality=WEBP_QUALITY, method=6)

        old_kb = src.stat().st_size // 1024
        new_kb = dst.stat().st_size // 1024
        saved  = old_kb - new_kb
        stats["saved_kb"]  += saved
        stats["converted"] += 1

        # Запоминаем маппинг для замены ссылок
        rel_old = "/" + src.relative_to(PROJECT_ROOT / "public").as_posix()
        rel_new = "/" + dst.relative_to(PROJECT_ROOT / "public").as_posix()
        conversion_map[rel_old] = rel_new

        # Сохраняем оригинал
        orig_dst = ORIGINALS_DIR / src.relative_to(IMAGES_DIR)
        orig_dst.parent.mkdir(parents=True, exist_ok=True)
        if not orig_dst.exists():
            shutil.copy2(src, orig_dst)

        # Удаляем оригинал
        src.unlink()

        print(f"  ✓ {src.relative_to(IMAGES_DIR)}  {old_kb} KB → {new_kb} KB  (−{saved} KB)")
        return True

    except Exception as e:
        print(f"  ✗ ОШИБКА {src.name}: {e}")
        stats["errors"] += 1
        return False


def collect_images() -> list[Path]:
    images = []
    for root, dirs, files in os.walk(IMAGES_DIR):
        # Пропускаем системные папки
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for f in files:
            p = Path(root) / f
            if p.suffix.lower() in SOURCE_EXTS:
                images.append(p)
    return images


def update_code_references():
    """Заменяет все старые расширения на .webp в исходниках."""
    print("\n── Обновление ссылок в коде ───────────────────────────────────")

    # Строим regex: /images/foo/bar.png → /images/foo/bar.webp
    # Также обрабатываем пути без ведущего слеша внутри строк
    patterns = []
    for old, new in conversion_map.items():
        # Экранируем спецсимволы regex
        old_esc = re.escape(old)
        patterns.append((old_esc, new))

        # Также без ведущего слеша
        old_no_slash = old.lstrip("/")
        new_no_slash = new.lstrip("/")
        patterns.append((re.escape(old_no_slash), new_no_slash))

    if not patterns:
        print("  Нет замен — conversion_map пустой")
        return

    def process_file(filepath: Path):
        try:
            text = filepath.read_text(encoding="utf-8", errors="replace")
        except Exception:
            return

        new_text = text
        for old_esc, new_val in patterns:
            new_text = re.sub(old_esc, new_val, new_text)

        if new_text != text:
            filepath.write_text(new_text, encoding="utf-8")
            count = sum(1 for old_esc, _ in patterns if re.search(old_esc, text))
            print(f"  ✎ {filepath.relative_to(PROJECT_ROOT)}  ({count} замен)")
            stats["refs_updated"] += 1

    for code_dir in CODE_DIRS:
        if not code_dir.exists():
            continue
        for root, dirs, files in os.walk(code_dir):
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
            # Только файлы в корне PROJECT_ROOT — не рекурсивно для него
            if Path(root) == PROJECT_ROOT and code_dir == PROJECT_ROOT:
                for f in files:
                    fp = Path(root) / f
                    if fp.suffix in CODE_EXTS and fp.name not in EXCLUDE_FILES:
                        process_file(fp)
                dirs.clear()  # не идём глубже из PROJECT_ROOT напрямую
            else:
                for f in files:
                    fp = Path(root) / f
                    if fp.suffix in CODE_EXTS and fp.name not in EXCLUDE_FILES:
                        process_file(fp)

    # Отдельно обрабатываем constants.ts и другие файлы в корне
    for fname in ["constants.ts", "App.tsx", "index.tsx", "types.ts"]:
        fp = PROJECT_ROOT / fname
        if fp.exists():
            process_file(fp)


def main():
    print("=" * 60)
    print("  ОПТИМИЗАЦИЯ КАРТИНОК — PGATK WEBSITE")
    print("=" * 60)
    print(f"  Папка: {IMAGES_DIR}")
    print(f"  Качество WebP: {WEBP_QUALITY}%")
    print(f"  Макс. размер: {MAX_WIDTH}×{MAX_HEIGHT}px")
    print()

    ORIGINALS_DIR.mkdir(parents=True, exist_ok=True)

    images = collect_images()
    total = len(images)
    print(f"Найдено {total} картинок для конвертации\n")
    print("── Конвертация ─────────────────────────────────────────────")

    for i, img in enumerate(images, 1):
        sys.stdout.flush()
        convert_image(img)

    update_code_references()

    print("\n" + "=" * 60)
    print("  ИТОГ")
    print("=" * 60)
    print(f"  Конвертировано:     {stats['converted']} файлов")
    print(f"  Пропущено:          {stats['skipped']} файлов")
    print(f"  Ошибок:             {stats['errors']}")
    print(f"  Сэкономлено места:  {stats['saved_kb'] // 1024} MB ({stats['saved_kb']} KB)")
    print(f"  Файлов с кодом обновлено: {stats['refs_updated']}")
    print(f"\n  Оригиналы сохранены в: {ORIGINALS_DIR.relative_to(PROJECT_ROOT)}")
    print()


if __name__ == "__main__":
    main()
