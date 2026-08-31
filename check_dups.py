import re
import json

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

# Extract products array
match = re.search(r'const products = (\[.*?\]);', content, re.DOTALL)
if match:
    # It's not strictly valid JSON (missing quotes on keys), but let's do a simple regex find
    pass

products_blocks = re.findall(r'\{[^{}]*\}', match.group(1))
for block in products_blocks:
    name_match = re.search(r'name:\s*"([^"]+)"', block)
    desc_match = re.search(r'description:\s*"([^"]+)"', block)
    if name_match and desc_match:
        name = name_match.group(1)
        desc = desc_match.group(1)
        if "150" in desc or "200" in desc:
            print(f"Name: {name}\nDesc: {desc}\n---")

