import re
with open(r'd:\Workspace\Web\PGATK Website\Родителям.txt', 'r', encoding='utf-8') as f:
    text = f.read()
titles = re.findall(r'<dt class=\"tabs[^>]*>.*?<a[^>]*>(.*?)</a>.*?</h3>', text)
dd_matches = re.findall(r'<dd[^>]*>(.*?)</dd>', text, flags=re.DOTALL)
print('Titles:', len(titles))
for i, t in enumerate(titles):
    print(i, t)
print('DDs:', len(dd_matches))
for i, d in enumerate(dd_matches):
    print(i, 'Len:', len(d.strip()))
