import re

with open(r"C:\Users\Отчайнный\.gemini\antigravity\brain\2e6af04f-b692-43a8-8b42-b4ef11005e69\.system_generated\steps\3275\content.md", "r", encoding="utf-8") as f:
    content = f.read()

media_urls = re.findall(r'media/[a-zA-Z0-9_]+\.(?:jpg|png|webp|gif)', content)
print("Found media URLs:", list(set(media_urls)))
