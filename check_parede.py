import re

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

target_ids = ["DBFP90", "DBFP9D", "DMAP90", "DMAP9D", "MINIDMAPAREDE"]
# "BFBD MIN", "BFBDD MINI", "BFBDD2 MINI" are probably partial IDs or names. Let's find IDs matching these
# We'll just print out all items in "Esguichos de Parede" and their IDs
print("=== Current items in Esguichos de Parede ===")
blocks = re.findall(r'\{[^{}]*\}', content)
for block in blocks:
    cat_match = re.search(r'category:\s*"Esguichos de Parede"', block)
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

