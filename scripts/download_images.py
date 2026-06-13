import os
import re
import urllib.parse
import requests

BASE_URL = "https://pgatkk.by"
TARGET_DIR = os.path.join(os.path.dirname(__file__), "public")
PAGES_DIR = os.path.join(os.path.dirname(__file__), "pages")

# Ищем все пути, которые начинаются с /images/ (внутри кавычек)
regex = re.compile(r'["\'](/images/[^"\']+)["\']')

def download_file(url, dest):
    if os.path.exists(dest):
        print(f"[ПРОПУСК] Уже существует: {dest}")
        return
    
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    try:
        response = requests.get(url, stream=True)
        if response.status_code == 200:
            with open(dest, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            print(f"[СКАЧАНО] {url} -> {dest}")
        else:
            print(f"[ОШИБКА] HTTP {response.status_code} для {url}")
    except Exception as e:
        print(f"[ОШИБКА СЕТИ] {e} для {url}")

def main():
    if not os.path.exists(PAGES_DIR):
        print("Папка pages не найдена!")
        return

    unique_paths = set()
    for filename in os.listdir(PAGES_DIR):
        if filename.endswith(".tsx") or filename.endswith(".ts"):
            with open(os.path.join(PAGES_DIR, filename), "r", encoding="utf-8") as f:
                content = f.read()
                matches = regex.findall(content)
                for match in matches:
                    unique_paths.add(match)

    print(f"Найдено {len(unique_paths)} уникальных картинок/документов.")

    for path in unique_paths:
        # Корректно кодируем URL (на случай пробелов или кириллицы)
        safe_path = urllib.parse.quote(path)
        file_url = BASE_URL + safe_path
        
        # Локальный путь (убираем первый слеш и декодируем для нормальных названий папок)
        local_rel = path[1:] if path.startswith('/') else path
        local_dest = os.path.join(TARGET_DIR, urllib.parse.unquote(local_rel).replace('/', os.sep))
        
        download_file(file_url, local_dest)

    print("Готово!")

if __name__ == "__main__":
    main()
