import re

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

blocks = re.findall(r'\{[^{}]*\}', content)
for block in blocks:
    if '"Torneiras Especiais"' in block:
        name_match = re.search(r'name:\s*"([^"]+)"', block)
        if name_match:
            print(f"Produto: {name_match.group(1)}")
