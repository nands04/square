import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'background-image:url\("data:image/jpeg;base64,[^"]+"\)'
replacement = 'background-image:url("images/hero_new.png")'
new_content, count = re.subn(pattern, replacement, content)

if count > 0:
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Successfully replaced {count} occurrence(s).")
else:
    print("Pattern not found.")

