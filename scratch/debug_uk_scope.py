import re
with open(r'd:\Workspace\Web\PGATK Website\Родителям.txt', 'r', encoding='utf-8') as f:
    text = f.read()

scopes = re.findall(r'<div class="uk-scope', text)
print('Scopes:', len(scopes))

parts = re.split(r'<div class="uk-scope', text)
for i, p in enumerate(parts[1:]):
    idx = p.find('</script>')
    print(f'Part {i}: script found at {idx}')
