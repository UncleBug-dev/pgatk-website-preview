import json
import re

log_path = r"C:\Users\Отчайнный\.gemini\antigravity\brain\2e6af04f-b692-43a8-8b42-b4ef11005e69\.system_generated\logs\transcript.jsonl"

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'USER_INPUT':
                content = data.get('content', '')
                if 'Теперь Общежитие' in content:
                    print("Found user input!")
                    # Extract all a href links
                    links = re.findall(r'<a[^>]+href=["\'](.*?)["\'][^>]*>(.*?)</a>', content, re.IGNORECASE | re.DOTALL)
                    for link, text in links:
                        print(f"LINK: {link} TEXT: {text.strip()}")
        except:
            pass
