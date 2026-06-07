import json
import os

with open(r"d:\Workspace\Web\PGATK Website\canva_elements.json", "r", encoding="utf-8") as f:
    elements = json.load(f)

# The layout is usually an image followed by its texts underneath it.
# We want to group an image with text elements that are directly below it.
# Or, since it's a grid, we can just find the nearest text below the image.
# Actually, since elements are sorted by Y, we can just group them by rows!
# Let's iterate and group text elements to their closest image visually.

images = [e for e in elements if e['type'] == 'img']
texts = [e for e in elements if e['type'] == 'text']

# First, remove intro texts which are at the very top.
# Usually intro text doesn't have an image above it, or its Y is very small.
# Actually, the intro text is large.

gallery_items = []
seen_image_urls = set()

for img in images:
    # We want to remove duplicate images based on URL!
    url = img['src']
    if url in seen_image_urls:
        continue # skip duplicate images!
        
    # Find all texts that are visually below this image, and horizontally aligned.
    # The image has x, y.
    # Text belongs to image if text.y > img.y and text.y < img.y + 800 (arbitrary)
    # AND text is horizontally near the image (abs(text.x - img.x) < 200).
    
    img_texts = []
    for t in texts:
        if t['y'] >= img['y'] - 50 and t['y'] <= img['y'] + 600:
            if abs(t['x'] - img['x']) < 250:
                img_texts.append(t)
                
    # Sort them by Y to get title and subtitle
    img_texts.sort(key=lambda t: t['y'])
    
    # We only care if we found text.
    if img_texts:
        title = img_texts[0]['text']
        subtitle = img_texts[1]['text'] if len(img_texts) > 1 else ""
        
        # Clean up the URL to point to our local downloaded file
        filename = url.split('/')[-1]
        local_path = f"/images/gallery/{filename}"
        
        gallery_items.append({
            "image": local_path,
            "title": title,
            "subtitle": subtitle
        })
        seen_image_urls.add(url)

print(f"Generated {len(gallery_items)} unique gallery items!")

with open(r"d:\Workspace\Web\PGATK Website\src\data\galleryData.json", "w", encoding="utf-8") as f:
    json.dump(gallery_items, f, ensure_ascii=False, indent=2)
