import re
import json

with open(r"C:\Users\Отчайнный\.gemini\antigravity\brain\2e6af04f-b692-43a8-8b42-b4ef11005e69\.system_generated\steps\3275\content.md", "r", encoding="utf-8") as f:
    content = f.read()

# We can find all elements that have text and images in the Canva JSON.
# Actually, the 'bootstrap' JSON contains "document" -> "pages" -> "elements"
# Let's extract the bootstrap JSON
match = re.search(r"window\['__canva_website_bootstrap__'\] = JSON\.parse\('(.+?)'\);", content, re.DOTALL)
if match:
    raw_json = match.group(1).encode().decode('unicode_escape')
    # wait, it might be escaped. Let's just use re.findall to get all text and media near each other.
    pass

# Another approach:
# Just output an HTML file with all the downloaded images and their filenames!
# Then the user (or I) can easily map them. I will just read the HTML and write the JSON.
html = "<html><body style='display: flex; flex-wrap: wrap;'>"
import os
for f in os.listdir(r"d:\Workspace\Web\PGATK Website\public\images\gallery"):
    html += f"<div style='margin: 10px; width: 300px; border: 1px solid #ccc;'><img src='{f}' width='300'><br/><b>{f}</b></div>"
html += "</body></html>"
with open(r"d:\Workspace\Web\PGATK Website\public\images\gallery\preview.html", "w") as f:
    f.write(html)
print("Preview created!")
