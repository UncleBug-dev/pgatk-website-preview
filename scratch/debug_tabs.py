import re
with open(r'd:\Workspace\Web\PGATK Website\Родителям.txt', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Base HTML styling
html_content = html_content.replace('style="text-align: left;"', 'class="text-left mb-4 text-slate-700 leading-relaxed"')
html_content = re.sub(r'<script>.*?</script>', '', html_content, flags=re.DOTALL)
html_content = re.sub(r'<div class="uk-scope.*?>.*?</div>\s*</div>\s*</div>\s*</strong>\s*</div>\s*<p></p>', '', html_content, flags=re.DOTALL)
html_content = re.sub(r'<div class="uk-scope.*?<!-- JoomlaWorks.*?-->', '', html_content, flags=re.DOTALL)
    
tabs_data = []

parts = re.split(r'<dl class="tabs"', html_content, 1)
if len(parts) > 1:
    tabs_section = parts[1]
    titles = re.findall(r'<dt class="tabs[^>]*>.*?<a[^>]*>(.*?)</a>.*?</h3>', tabs_section)
    dd_matches = re.findall(r'<dd[^>]*>(.*?)</dd>', tabs_section, flags=re.DOTALL)
    print("TITLES:", len(titles), "DDS:", len(dd_matches))
    for i, title in enumerate(titles):
        idx = i + 1
        content = dd_matches[idx].strip() if idx < len(dd_matches) else ''
        print('Title:', title, 'Content:', repr(content))
