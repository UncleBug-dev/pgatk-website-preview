import re
with open(r'd:\Workspace\Web\PGATK Website\stop_narkotik.txt', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Clean UIkit galleries safely
while True:
    start_idx = html_content.find('<div class="uk-scope')
    if start_idx == -1:
        break
    script_end_idx = html_content.find('</script>', start_idx)
    if script_end_idx == -1:
        div_end_idx = html_content.find('</div>', start_idx)
        if div_end_idx == -1:
            break
        html_content = html_content[:start_idx] + html_content[div_end_idx + 6:]
    else:
        div_end_idx = html_content.find('</div>', script_end_idx)
        html_content = html_content[:start_idx] + html_content[div_end_idx + 6:]

print('iframes after uk-scope:', len(re.findall(r'<iframe', html_content)))

# Clean JoomlaWorks AllVideos safely
while True:
    start_idx = html_content.find('<!-- JoomlaWorks')
    if start_idx == -1:
        break
    end_idx = html_content.find('-->', start_idx)
    if end_idx == -1:
        break
    
    player_start = html_content.rfind('<div class="avPlayerWrapper', 0, start_idx)
    if player_start != -1 and (start_idx - player_start) < 2000:
        html_content = html_content[:player_start] + html_content[end_idx + 3:]
    else:
        html_content = html_content[:start_idx] + html_content[end_idx + 3:]

print('iframes after AllVideos:', len(re.findall(r'<iframe', html_content)))
