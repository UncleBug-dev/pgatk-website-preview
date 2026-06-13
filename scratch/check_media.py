import re
with open(r'd:\Workspace\Web\PGATK Website\stop_narkotik.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see what's in the first uk-scope
start = text.find('<div class="uk-scope')
if start != -1:
    end = text.find('</div>', text.find('</script>', start))
    scope = text[start:end+6]
    images = re.findall(r'<img[^>]*src="([^"]+)"[^>]*>', scope)
    print('Gallery 1 images:', images)

# Let's check AllVideos
av = text.find('<!-- JoomlaWorks')
if av != -1:
    print('AllVideos found at', av)
    player = text.rfind('<div class="avPlayerWrapper', 0, av)
    if player != -1:
        print('Player found at', player)
        snippet = text[player:av+300]
        print('Player snippet:', snippet)
