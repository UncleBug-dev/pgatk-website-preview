import json
import sys

log_path = r"C:\Users\Отчайнный\.gemini\antigravity\brain\2e6af04f-b692-43a8-8b42-b4ef11005e69\.system_generated\logs\transcript.jsonl"

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'USER_INPUT':
                content = data.get('content', '')
                if 'Теперь Общежитие' in content:
                    print("Found user input!")
                    print(content[:1000]) # Print first 1000 chars
                    print("...")
                    
                    # Also write it to a file so we can view it
                    with open('dorm_text.txt', 'w', encoding='utf-8') as out:
                        out.write(content)
                    print("Written to dorm_text.txt")
        except:
            pass
