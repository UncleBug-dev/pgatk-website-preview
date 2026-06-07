import re
import json

with open(r"C:\Users\Отчайнный\.gemini\antigravity\brain\2e6af04f-b692-43a8-8b42-b4ef11005e69\.system_generated\steps\3275\content.md", "r", encoding="utf-8") as f:
    content = f.read()

# Find all media URLs in the order they appear in the file
media_urls = re.findall(r'media/[a-zA-Z0-9_]+\.(?:jpg|png|webp|gif)', content)

# Remove duplicates while preserving order
ordered_media = []
seen = set()
for url in media_urls:
    if url not in seen:
        ordered_media.append(url.split('/')[-1])
        seen.add(url)

print("Ordered media count:", len(ordered_media))
for i, m in enumerate(ordered_media):
    print(f"{i}: {m}")
