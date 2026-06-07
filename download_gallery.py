import os
import re
import json
import urllib.request
from concurrent.futures import ThreadPoolExecutor

with open(r"C:\Users\Отчайнный\.gemini\antigravity\brain\2e6af04f-b692-43a8-8b42-b4ef11005e69\.system_generated\steps\3275\content.md", "r", encoding="utf-8") as f:
    content = f.read()

media_urls = list(set(re.findall(r'media/[a-zA-Z0-9_]+\.(?:jpg|png|webp|gif)', content)))

base_url = "https://remonto.my.canva.site/dagarmjdr0s/"
target_dir = r"d:\Workspace\Web\PGATK Website\public\images\gallery"
os.makedirs(target_dir, exist_ok=True)

def download_image(url_path):
    url = base_url + url_path
    filename = url_path.split("/")[-1]
    save_path = os.path.join(target_dir, filename)
    if not os.path.exists(save_path):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response, open(save_path, 'wb') as out_file:
                out_file.write(response.read())
            return filename
        except Exception as e:
            print(f"Failed {url}: {e}")
            return None
    return filename

print(f"Downloading {len(media_urls)} images...")
downloaded = []
with ThreadPoolExecutor(max_workers=10) as executor:
    results = executor.map(download_image, media_urls)
    for r in results:
        if r:
            downloaded.append(f"/images/gallery/{r}")

print(f"Downloaded {len(downloaded)} images.")

# Let's extract texts too just to have them
texts = re.findall(r'window\[\'__canva_website_bootstrap__\'\] = JSON\.parse\(\'(.+?)\'\);', content, re.DOTALL)
# It's too complex to map them. Let's just create a nice gallery data.
gallery_items = []
for idx, path in enumerate(downloaded):
    gallery_items.append({
        "image": path,
        "title": f"Фото {idx+1}",
    })

with open(r"d:\Workspace\Web\PGATK Website\src\data\galleryData.json", "w", encoding="utf-8") as f:
    json.dump(gallery_items, f, ensure_ascii=False, indent=2)

print("Created galleryData.json")
