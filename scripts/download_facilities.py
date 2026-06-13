import os
import requests
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

BASE_URL = "https://pgatkk.by"

IMAGES = [
    "/images/VEkskursiy/VEkskursiy.gif",
    "/images/Kolledg/MTB/1.jpg",
    "/images/Kolledg/MTB/2.jpg",
    "/images/Kolledg/MTB/3.jpg",
    "/images/Kolledg/MTB/3.1.jpg",
    "/images/Kolledg/MTB/4.jpg",
    "/images/Kolledg/MTB/5.jpg",
    "/images/Kolledg/MTB/6.jpg",
    "/images/Kolledg/MTB/7.jpg",
    "/images/Kolledg/MTB/7.1.jpg",
    "/images/Kolledg/MTB/8.jpg",
    "/images/Kolledg/MTB/9.jpg",
    "/images/Kolledg/MTB/10.jpg",
    "/images/Kolledg/MTB/11.jpg",
    "/images/Kolledg/MTB/12.jpg",
    "/images/Kolledg/MTB/13.jpg",
    "/images/Kolledg/MTB/14.jpg",
    "/images/Kolledg/MTB/18.jpg",
    "/images/Kolledg/MTB/19.jpg"
]

SAVE_DIR = os.path.join("public", "images", "facilities")
os.makedirs(SAVE_DIR, exist_ok=True)

print("Starting downloads...")
for path in IMAGES:
    url = BASE_URL + path
    filename = path.split("/")[-1]
    save_path = os.path.join(SAVE_DIR, filename)
    
    print(f"Downloading {filename}...")
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, verify=False, timeout=15, headers=headers)
        if response.status_code == 200:
            with open(save_path, "wb") as f:
                f.write(response.content)
            print(f"Success: {filename}")
        else:
            print(f"Failed to download {filename} (status {response.status_code})")
    except Exception as e:
        print(f"Error downloading {filename}: {e}")

print("All downloads finished.")
