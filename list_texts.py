import re

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

blocks = re.findall(r'\{[^{}]*\}', content)
for block in blocks:
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    name_match = re.search(r'name:\s*"([^"]+)"', block)
    desc_match = re.search(r'description:\s*"([^"]+)"', block)
    if id_match and name_match and desc_match:
        print(f"[{id_match.group(1)}]")
        print(f"Name: {name_match.group(1)}")
        print(f"Desc: {desc_match.group(1)}\n")

