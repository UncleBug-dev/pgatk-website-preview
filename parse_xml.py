import re

xml_path = r"C:\Users\Отчайнный\.gemini\antigravity\brain\2e6af04f-b692-43a8-8b42-b4ef11005e69\.system_generated\steps\2337\content.md"

with open(xml_path, 'r', encoding='utf-8') as f:
    content = f.read()

scenes = re.findall(r'<scene name="(pano\d+)"', content)
print(f"Found {len(scenes)} scenes: {scenes}")

includes = re.findall(r'<include url="(.*?)"', content)
print(f"Found includes: {includes}")
