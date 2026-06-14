"""
find_broken_images.py — Находит все ссылки на картинки в коде,
которые указывают на НЕ существующие файлы (ни оригинал, ни .webp).
"""
import os, re
from pathlib import Path

ROOT   = Path(__file__).parent
PUBLIC = ROOT / "public"
CODE_EXTS   = {".ts", ".tsx", ".js", ".jsx", ".json", ".html"}
SKIP_DIRS   = {"node_modules", "dist", ".git", "_originals"}
IMG_PATTERN = re.compile(r'["\`\']((?:/[^\s"\`\'<>]+\.(?:jpg|jpeg|png|gif)))["\`\']', re.IGNORECASE)

broken_refs = {}   # file -> set of missing paths
all_missing = set()

for dirpath, dirs, files in os.walk(ROOT):
    dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
    for fname in files:
        fp = Path(dirpath) / fname
        if fp.suffix not in CODE_EXTS:
            continue
        try:
            text = fp.read_text(encoding="utf-8", errors="replace")
        except Exception:
            continue
        for m in IMG_PATTERN.finditer(text):
            img_path = m.group(1).lstrip("/")
            full     = PUBLIC / img_path
            webp     = full.with_suffix(".webp")
            if not webp.exists() and not full.exists():
                key = str(fp.relative_to(ROOT))
                broken_refs.setdefault(key, set()).add(img_path)
                all_missing.add(img_path)

print(f"Всего уникальных несуществующих путей: {len(all_missing)}")
print(f"Файлов кода с проблемами: {len(broken_refs)}")
print()
for fpath, paths in sorted(broken_refs.items()):
    print(f"  {fpath}  ({len(paths)} проблем):")
    for p in sorted(paths)[:8]:
        print(f"      -> /{p}")
    if len(paths) > 8:
        print(f"      ... и ещё {len(paths)-8}")
    print()

print("\n--- Все уникальные отсутствующие пути ---")
for p in sorted(all_missing):
    print(f"  /{p}")
