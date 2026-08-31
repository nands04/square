import re

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

print("=== All items in Esguichos de Bancada ===")
blocks = re.findall(r'\{[^{}]*\}', content)
for block in blocks:
    cat_match = re.search(r'category:\s*"Esguichos de Bancada"', block)
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    if cat_match and id_match:
        print(id_match.group(1))

print("\n=== Finding BFBD items ===")
for block in blocks:
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    if id_match and "BFBD" in id_match.group(1).upper():
        cat_match = re.search(r'category:\s*"([^"]+)"', block)
        cat = cat_match.group(1) if cat_match else "None"
        print(f"{id_match.group(1)} -> {cat}")

print("\n=== Finding DMFB items ===")
for block in blocks:
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    if id_match and "DMFB" in id_match.group(1).upper():
        cat_match = re.search(r'category:\s*"([^"]+)"', block)
        cat = cat_match.group(1) if cat_match else "None"
        print(f"{id_match.group(1)} -> {cat}")

