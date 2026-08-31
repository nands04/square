import re

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

updates = {
    "MAP9251L": r" Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12.",
    "MFBLS1": r" Entrada: 3/4\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12.",
    "MFBU2L": r" Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
}

def replace_block(m):
    block = m.group(0)
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    if id_match and id_match.group(1) in updates:
        append_str = updates[id_match.group(1)]
        desc_match = re.search(r'(description:\s*"[^"]+)(")', block)
        if desc_match and "Faixa de pressão" not in desc_match.group(1):
            new_desc = desc_match.group(1) + append_str + desc_match.group(2)
            block = block.replace(desc_match.group(0), new_desc)
    return block

new_content = re.sub(r'\{[^{}]*\}', replace_block, content)

with open("products.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Specs appended successfully.")
