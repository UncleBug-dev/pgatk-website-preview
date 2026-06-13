import re
with open(r'd:\Workspace\Web\PGATK Website\Родителям.txt', 'r', encoding='utf-8') as f:
    html_content = f.read()

while True:
    start_idx = html_content.find('<div class="uk-scope')
    if start_idx == -1:
        break
    script_end_idx = html_content.find('</script>', start_idx)
    if script_end_idx == -1:
        # If no script, just find the next </div>
        div_end_idx = html_content.find('</div>', start_idx)
        if div_end_idx == -1:
            break
        html_content = html_content[:start_idx] + html_content[div_end_idx + 6:]
    else:
        # Does the script belong to this uk-scope? 
        # Yes, for galleries.
        div_end_idx = html_content.find('</div>', script_end_idx)
        html_content = html_content[:start_idx] + html_content[div_end_idx + 6:]

parts = re.split(r'<dl class="tabs"', html_content, 1)
if len(parts) > 1:
    tabs_section = parts[1]
    titles = re.findall(r'<dt class="tabs[^>]*>.*?<a[^>]*>(.*?)</a>.*?</h3>', tabs_section)
    dd_matches = re.findall(r'<dd[^>]*>(.*?)</dd>', tabs_section, flags=re.DOTALL)
    print("TITLES:", len(titles), "DDS:", len(dd_matches))
    for i, title in enumerate(titles):
        idx = i + 1
        content = dd_matches[idx].strip() if idx < len(dd_matches) else ''
        print('Title:', title, 'Content length:', len(content))
