import re

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

# Define the models to update
models_to_update = [
    "DMAB90",
    "DMAB9D_BANCADA",
    "DMAP90",
    "DMAP9D"
]

append_text = " Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."

def repl(match):
    prefix = match.group(1)
    prod_id = match.group(2)
    suffix = match.group(3)
    if prod_id in models_to_update:
        # Check if text is already there to prevent duplication
        if "Entrada: 1/2" not in suffix:
            # We want to append before the closing quote
            # match.group(3) includes the string up to the closing quote
            # It's better to just regex the description field itself
            pass

# Let's do it block by block
def replace_block(m):
    block = m.group(0)
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    if id_match and id_match.group(1) in models_to_update:
        desc_match = re.search(r'(description:\s*"[^"]+)(")', block)
        if desc_match and "Entrada: 1/2" not in desc_match.group(1):
            new_desc = desc_match.group(1) + append_text + desc_match.group(2)
            block = block.replace(desc_match.group(0), new_desc)
    return block

new_content = re.sub(r'\{[^{}]*\}', replace_block, content)

with open("products.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Descriptions appended.")
