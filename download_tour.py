import os
import requests
import urllib3
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
import math
import time

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

BASE_URL = "https://pgatkk.by/images/VEkskursiy"
SAVE_DIR = os.path.join("public", "tour")
os.makedirs(SAVE_DIR, exist_ok=True)

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

STATIC_FILES = [
    "gidro.html",
    "gidrodata/gidro.js",
    "gidrodata/gidro.xml",
    "gidrodata/gidro_vr.xml",
    "gidrodata/gidro_skin.xml",
    "gidrodata/gidro_core.xml",
    "gidrodata/gidro_messages_ru.xml",
    "gidrodata/thumbnail.jpg",
    "gidrodata/lib/jquery-2.1.1.min.js",
    "gidrodata/lib/jquery-1.11.1.min.js",
    "gidrodata/lib/jquery-ui-1.11.1/jquery-ui.min.css",
    "gidrodata/lib/jquery-ui-1.11.1/jquery-ui.min.js",
    "gidrodata/lib/jquery.ui.touch-punch.min.js",
    "gidrodata/lib/Kolor/KolorTools.min.js",
    "gidrodata/graphics/KolorBootstrap.js",
    "gidrodata/graphics/cursors_move_html5.cur",
    "gidrodata/graphics/cursors_drag_html5.cur",
    "gidrodata/graphics/icontrolbar/btn_close_fs.png",
    "gidrodata/graphics/icontrolbar/btn_enter_fs.png",
    "gidrodata/graphics/icontrolbar/btn_exit_fs.png",
    "gidrodata/graphics/icontrolbar/btn_hide_controls.png",
    "gidrodata/graphics/icontrolbar/btn_show_controls.png",
    "gidrodata/graphics/icontrolbar/btn_vr.png",
    "gidrodata/graphics/icontrolbar/bg_top.png",
    "gidrodata/graphics/icontrolbar/bg_bottom.png",
    "gidrodata/graphics/icontrolbar/close.png",
    "gidrodata/graphics/icontrolbar/help_screen_bg.png",
    "gidrodata/graphics/icontrolbar/help_screen_fg.png",
    "gidrodata/graphics/icontrolbar/btn_start_autorotation.png",
    "gidrodata/graphics/icontrolbar/btn_stop_autorotation.png",
    "gidrodata/graphics/icontrolbar/btn_help.png",
    "gidrodata/graphics/icontrolbar/btn_gyroscope_off.png",
    "gidrodata/graphics/icontrolbar/btn_gyroscope.png",
    "gidrodata/graphics/icontrolbar/btn_move_to.png",
    "gidrodata/graphics/icontrolbar/btn_drag_to.png",
    "gidrodata/graphics/icontrolbar/btn_zoom_in.png",
    "gidrodata/graphics/icontrolbar/btn_zoom_out.png",
    "gidrodata/graphics/icontrolbar/btn_move_left.png",
    "gidrodata/graphics/icontrolbar/btn_move_right.png",
    "gidrodata/graphics/icontrolbar/btn_move_up.png",
    "gidrodata/graphics/icontrolbar/btn_move_down.png",
    "gidrodata/graphics/icontrolbar/btn_previous_scene.png",
    "gidrodata/graphics/icontrolbar/btn_next_scene.png",
    "gidrodata/graphics/KolorMenu/kolorMenu.css",
    "gidrodata/graphics/KolorMenu/KolorMenu.min.js",
]

def download_file(rel_path):
    url = f"{BASE_URL}/{rel_path}"
    save_path = os.path.join(SAVE_DIR, rel_path)
    os.makedirs(os.path.dirname(save_path), exist_ok=True)
    
    if os.path.exists(save_path) and os.path.getsize(save_path) > 0:
        return rel_path, 200

    max_retries = 3
    for attempt in range(max_retries):
        try:
            response = requests.get(url, verify=False, timeout=30, headers=HEADERS)
            if response.status_code == 200:
                # Catch 404s pretending to be 200 OK HTML pages
                if 'text/html' in response.headers.get('Content-Type', '') and not rel_path.endswith('.html'):
                    return rel_path, 404
                with open(save_path, "wb") as f:
                    f.write(response.content)
            return rel_path, response.status_code
        except Exception as e:
            if attempt == max_retries - 1:
                return rel_path, str(e)
            time.sleep(2)

print("="*60)
print("Downloading Virtual Tour...")
print("Please MAKE SURE YOUR VPN IS TURNED OFF before continuing!")
print("="*60)
input("Press Enter to continue...")

print("Downloading base files...")
for sf in STATIC_FILES:
    p, status = download_file(sf)
    if status != 200 and status != 404:
        print(f"Failed: {sf} -> {status}")

xml_path = os.path.join(SAVE_DIR, "gidrodata", "gidro.xml")
if not os.path.exists(xml_path):
    print("FATAL: gidro.xml failed to download. Cannot continue.")
    exit(1)

with open(xml_path, 'r', encoding='utf-8') as f:
    xml_content = f.read()

scenes = re.findall(r'<scene name="(pano\d+)"', xml_content)
print(f"Found {len(scenes)} scenes in the virtual tour.")

files_to_download = []

for scene in scenes:
    # THIS WAS THE BUG: the folder is pano_XXX, not panoXXX!
    scene_folder = scene.replace('pano', 'pano_')
    
    files_to_download.append(f"gidrodata/{scene_folder}/thumbnail.jpg")
    files_to_download.append(f"gidrodata/{scene_folder}/preview.jpg")
    for i in range(6):
        files_to_download.append(f"gidrodata/{scene_folder}/html5/{i}.jpg")
        files_to_download.append(f"gidrodata/{scene_folder}/tablet/{i}.jpg")
        files_to_download.append(f"gidrodata/{scene_folder}/mobile/{i}.jpg")
    
    for v in range(4):
        for u in range(15):
            files_to_download.append(f"gidrodata/{scene_folder}/1/{v}_{u}.jpg")
            
    for v in range(3):
        for u in range(8):
            files_to_download.append(f"gidrodata/{scene_folder}/0/{v}_{u}.jpg")

print(f"Queueing {len(files_to_download)} potential tile files...")

success = 0
failed_404 = 0
failed_other = 0

with ThreadPoolExecutor(max_workers=3) as executor:
    futures = {executor.submit(download_file, f): f for f in files_to_download}
    
    for count, future in enumerate(as_completed(futures), 1):
        f, status = future.result()
        if status == 200:
            success += 1
        elif status == 404:
            failed_404 += 1
        else:
            failed_other += 1
            print(f"Failed tile: {f} -> {status}")
            
        if count % 100 == 0:
            print(f"Progress: {count}/{len(files_to_download)}. Success: {success}, Not found (ignored): {failed_404}, Errors: {failed_other}")

print("="*60)
print(f"Download finished!")
print(f"Successfully downloaded: {success} files.")
print(f"Errors (non-404): {failed_other}")
print("="*60)
