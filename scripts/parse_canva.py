import json
import re

with open(r"C:\Users\Отчайнный\.gemini\antigravity\brain\2e6af04f-b692-43a8-8b42-b4ef11005e69\.system_generated\steps\3275\content.md", "r", encoding="utf-8") as f:
    content = f.read()

# Find the JSON data inside the script tag
match = re.search(r"window\['bootstrap'\] = JSON\.parse\('(.+?)'\);</script>", content, re.DOTALL)
if match:
    # It's a string literal, we might need to process escape characters or we can just regex the image IDs directly
    # Wait, the JSON inside JSON.parse('...') is escaped.
    pass

# Let's just find all image IDs. They look like "MAGarENb6jc"
# Wait, look at the snippet:
# {"A":{"A":"MAGarEbpTRE","B":1}
# {"A":{"A":"MAGarNcbWaQ","B":1}
# Let's extract all strings starting with "MAG" and having length ~ 11.
mag_ids = re.findall(r'MAG[a-zA-Z0-9\-_]{8}', content)
mag_ids = list(set(mag_ids))
print("Found IDs:", mag_ids)

# We can form Canva image URLs. The standard Canva export URL format is:
# https://media.canva.com/1/MAGarENb6jc/1/screen_2x.jpg
# Or maybe:
# https://media.canva.com/v2/image-resize/format:webp/MAGarENb6jc.png
# Let's print them out to test via curl
for mid in mag_ids:
    print(f"https://media.canva.com/1/{mid}/1/screen_2x.jpg")
