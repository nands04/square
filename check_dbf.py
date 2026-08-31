import re

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

ids = ["DBFB90", "DBFB9D"]

blocks = re.findall(r'\{[^{}]*\}', content)
for block in blocks:
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    if id_match and id_match.group(1) in ids:
        print(block)
