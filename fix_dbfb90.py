import re

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

def replace_dbfb90(m):
    block = m.group(0)
    if 'id: "DBFB90"' in block:
        block = block.replace('category: "Esguichos de Parede"', 'category: "Esguichos de Bancada"')
        block = block.replace('instalacao: "Parede"', 'instalacao: "Bancada"')
        block = block.replace('de PAREDE COM MISTURADOR', 'de BANCADA COM MISTURADOR')
    return block

new_content = re.sub(r'\{[^{}]*\}', replace_dbfb90, content)

with open("products.js", "w", encoding="utf-8") as f:
    f.write(new_content)
print("DBFB90 fixed")
