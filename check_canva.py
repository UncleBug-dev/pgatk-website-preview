import urllib.request

url = "https://media.canva.com/1/MAGarEbpTRE/1/screen_2x.jpg"
try:
    req = urllib.request.Request(url, method='HEAD')
    with urllib.request.urlopen(req) as response:
        print(response.status)
except Exception as e:
    print(e)
