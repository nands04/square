import re

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

blocks = re.findall(r'\{[^{}]*\}', content)
print("--- Checking BFBD items ---")
for block in blocks:
    if "BFBD" in block:
        id_match = re.search(r'id:\s*"([^"]+)"', block)
        if id_match:
            print(block)

print("\n--- Checking DMAB items ---")
for block in blocks:
    if "DMAB" in block:
        id_match = re.search(r'id:\s*"([^"]+)"', block)
        if id_match:
            print(block)

