"""fix_remaining_refs.py - обновляет оставшиеся ссылки в коде на .webp"""
import re
from pathlib import Path

ROOT = Path(__file__).parent
PUBLIC = ROOT / 'public'

FILES = [
    'pages/CorruptionPrevention.tsx',
    'pages/Facilities.tsx',
    'pages/OrganizationalStructure.tsx',
    'pages/Specialties.tsx',
    'components/Footer.tsx',
    'components/OptimizedImage.tsx',
    'pages/UncleBug.tsx',
    'data/importantData.ts',
]

IMG_RE = re.compile(r"(['\"`])([^'\"`\s{}<>\\]+\.(?:jpg|jpeg|png|gif))\1", re.IGNORECASE)

for frel in FILES:
    fp = ROOT / frel
    if not fp.exists():
        print(f'  SKIP: {frel}')
        continue
    text = fp.read_text(encoding='utf-8', errors='replace')
    new_text = text
    for m in IMG_RE.finditer(text):
        img = m.group(2)
        if '${' in img:
            continue
        # Пробуем найти webp - ищем файл по нескольким возможным путям
        webp_exists = False
        for base in [PUBLIC, PUBLIC / 'images', PUBLIC / 'downloads']:
            candidate = base / img
            if candidate.with_suffix('.webp').exists():
                webp_exists = True
                break
            # Проверяем и сам путь
            full = PUBLIC / img.lstrip('/')
            if full.with_suffix('.webp').exists():
                webp_exists = True
                break
        if webp_exists:
            new_img = img.rsplit('.', 1)[0] + '.webp'
            new_text = new_text.replace(f"'{img}'", f"'{new_img}'")
            new_text = new_text.replace(f'"{img}"', f'"{new_img}"')
    if new_text != text:
        fp.write_text(new_text, encoding='utf-8')
        print(f'  fixed: {frel}')
    else:
        print(f'  no change: {frel}')

print('Done.')
