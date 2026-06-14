"""
fix_all_images.py — Финальное исправление ВСЕХ сломанных картинок
==================================================================
1. Проходит по всем кодовым файлам
2. Для каждой ссылки .jpg/.png/.gif проверяет:
   a) есть ли уже .webp — тогда обновляет ссылку в коде
   b) есть ли оригинал в _originals — тогда конвертирует и обновляет
   c) есть ли оригинал по тому же пути — тогда конвертирует и обновляет
3. Выводит итоговый отчёт
"""

import os, re, shutil
from pathlib import Path
from PIL import Image

ROOT      = Path(__file__).parent
PUBLIC    = ROOT / "public"
ORIGINALS = PUBLIC / "images" / "_originals"
CODE_EXTS = {".ts", ".tsx", ".js", ".jsx", ".json", ".html"}
SKIP_DIRS = {"node_modules", "dist", ".git", "_originals", "pgatkk.by old"}
IMG_RE    = re.compile(r'(?<=["\`\'])((?:/[^\s"\`\'<>{}\\]+\.(?:jpg|jpeg|png|gif)))(?=["\`\'])', re.IGNORECASE)
WEBP_Q    = 82

stats = {"converted": 0, "refs_fixed": 0, "not_found": 0}
not_found_list = []

def convert_to_webp(src: Path) -> Path | None:
    """Конвертирует src → src.webp. Возвращает путь к webp или None при ошибке."""
    dst = src.with_suffix(".webp")
    if dst.exists():
        return dst
    try:
        with Image.open(src) as img:
            if img.mode not in ("RGB", "RGBA"):
                img = img.convert("RGBA" if "transparency" in img.info or img.mode == "P" else "RGB")
            img.save(dst, "WEBP", quality=WEBP_Q, method=4)
        print(f"  + convert  {src.relative_to(PUBLIC)}")
        stats["converted"] += 1
        return dst
    except Exception as e:
        print(f"  ! error converting {src}: {e}")
        return None

def find_original(img_path: str) -> Path | None:
    """Ищет оригинальный файл по пути (с .jpg/.png/etc).
    Проверяет: public/ напрямую, и _originals/ как запасной."""
    rel = img_path.lstrip("/")
    
    # Пробуем разные расширения
    base_no_ext = (PUBLIC / rel).with_suffix("")
    for ext in [".jpg", ".jpeg", ".png", ".gif", ".JPG", ".JPEG", ".PNG", ".GIF"]:
        candidate = base_no_ext.with_suffix(ext)
        if candidate.exists():
            return candidate
    
    # Ищем в _originals (оригиналы из images/)
    if rel.startswith("images/"):
        rel_in_images = rel[len("images/"):]
        base_no_ext2 = (ORIGINALS / rel_in_images).with_suffix("")
        for ext in [".jpg", ".jpeg", ".png", ".gif", ".JPG", ".JPEG", ".PNG", ".GIF"]:
            candidate = base_no_ext2.with_suffix(ext)
            if candidate.exists():
                return candidate
    
    return None

def get_webp(img_path: str) -> str | None:
    """Возвращает .webp путь если файл существует или можно создать."""
    rel = img_path.lstrip("/")
    webp_full = (PUBLIC / rel).with_suffix(".webp")
    
    # Уже есть webp — отлично
    if webp_full.exists():
        return "/" + str(webp_full.relative_to(PUBLIC)).replace("\\", "/")
    
    # Ищем оригинал и конвертируем
    orig = find_original(img_path)
    if orig:
        # Если оригинал в _originals — конвертируем в нужное место
        if ORIGINALS in orig.parents:
            rel_from_orig = orig.relative_to(ORIGINALS)
            target_dir = PUBLIC / "images" / rel_from_orig.parent
            target_dir.mkdir(parents=True, exist_ok=True)
            # Сначала восстанавливаем оригинал во временное место
            temp_orig = target_dir / orig.name
            if not temp_orig.exists():
                shutil.copy2(orig, temp_orig)
            converted = convert_to_webp(temp_orig)
            if converted:
                # Удаляем временный оригинал
                if temp_orig.exists():
                    temp_orig.unlink()
                return "/" + str(converted.relative_to(PUBLIC)).replace("\\", "/")
        else:
            converted = convert_to_webp(orig)
            if converted:
                return "/" + str(converted.relative_to(PUBLIC)).replace("\\", "/")
    
    return None

def process_file(fp: Path):
    try:
        text = fp.read_text(encoding="utf-8", errors="replace")
    except Exception:
        return
    
    new_text = text
    changed = False
    
    for m in IMG_RE.finditer(text):
        img_path = m.group(1)
        
        # Пропускаем шаблонные пути (${...})
        if "${" in img_path:
            continue
        
        webp_path = get_webp(img_path)
        if webp_path and webp_path != img_path:
            new_text = new_text.replace(img_path, webp_path)
            changed = True
        elif not webp_path:
            if img_path not in not_found_list:
                not_found_list.append(img_path)
                stats["not_found"] += 1
    
    if changed:
        fp.write_text(new_text, encoding="utf-8")
        stats["refs_fixed"] += 1
        print(f"  ✎ {fp.relative_to(ROOT)}")

def main():
    print("=" * 60)
    print("  ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ ВСЕХ КАРТИНОК")
    print("=" * 60)
    print()
    
    for dirpath, dirs, files in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for fname in files:
            fp = Path(dirpath) / fname
            if fp.suffix in CODE_EXTS:
                process_file(fp)
    
    print()
    print("=" * 60)
    print("  ИТОГ")
    print("=" * 60)
    print(f"  Сконвертировано новых файлов: {stats['converted']}")
    print(f"  Файлов кода обновлено:        {stats['refs_fixed']}")
    print(f"  Ненайденных оригиналов:       {stats['not_found']}")
    
    if not_found_list:
        print()
        print("  Файлы которых нет нигде:")
        for p in not_found_list:
            print(f"    {p}")

if __name__ == "__main__":
    main()
