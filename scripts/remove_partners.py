import os
import glob

pages_dir = r"d:\Workspace\Web\PGATK Website\pages"

for filepath in glob.glob(os.path.join(pages_dir, "*.tsx")):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    original_content = content
    
    # Remove the Partners tag (could have spaces)
    content = content.replace("      <Partners />\n", "")
    content = content.replace("      <Partners />", "")
    content = content.replace("<Partners />\n", "")
    content = content.replace("<Partners />", "")
    
    # Remove the import statement
    content = content.replace("import Partners from '../components/Partners';\n", "")
    
    if content != original_content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Removed Partners from {os.path.basename(filepath)}")
