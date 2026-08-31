import re
import json

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

ids_to_clone = ["BFBDD_MINI_200MM", "BFBDD2MINI", "BFBDD366MINI"]

blocks = re.findall(r'(\{[^{}]*\})', content)
new_blocks = []

for block in blocks:
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    if id_match and id_match.group(1) in ids_to_clone:
        # Create a Bancada clone
        clone = block
        
        # Change ID
        old_id = id_match.group(1)
        new_id = old_id + "_BANCADA"
        clone = clone.replace(f'id: "{old_id}"', f'id: "{new_id}"')
        
        # Change category
        clone = clone.replace('category: "Esguichos de Parede"', 'category: "Esguichos de Bancada"')
        
        # Change instalacao
        clone = clone.replace('instalacao: "Parede"', 'instalacao: "Bancada"')
        
        # Change description 'de PAREDE' to 'de BANCADA'
        clone = clone.replace('de PAREDE COM MISTURADOR', 'de BANCADA COM MISTURADOR')
        
        # Change name (if it has Parede, swap to Bancada, else append)
        name_match = re.search(r'name:\s*"([^"]+)"', clone)
        if name_match:
            old_name = name_match.group(1)
            if "Parede" in old_name:
                new_name = old_name.replace("Parede", "Bancada")
            else:
                new_name = old_name + " Bancada"
            clone = clone.replace(f'name: "{old_name}"', f'name: "{new_name}"')
        
        new_blocks.append((block, clone))

# Now we insert the clones into the content
for orig, clone in new_blocks:
    content = content.replace(orig, orig + ",\n  " + clone)

with open("products.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Created {len(new_blocks)} clones.")
