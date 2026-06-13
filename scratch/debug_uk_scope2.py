import re
with open(r'd:\Workspace\Web\PGATK Website\Родителям.txt', 'r', encoding='utf-8') as f:
    text = f.read()

parts = re.split(r'<div class="uk-scope', text)
print(parts[1][:500])
print("="*50)
print(parts[2][:500])
