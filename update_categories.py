import re

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

# Define the new categories for specific IDs
updates = {
    "PDTR1AC200": "Torneiras Especiais",
    "DBFP90": "Esguichos de Parede",
    "DBFP9D": "Esguichos de Parede",
    "DMAB90": "Esguichos de Bancada",
    "DMAB9D_BANCADA": "Esguichos de Bancada",
    "DMAP90": "Esguichos de Parede",
    "DMAP9D": "Esguichos de Parede",
    "DMERB": "Torneiras Industriais Simples",
    "DMFB90B": "Esguichos de Bancada",
    "DMFBMCB": "Esguichos de Bancada",
    "DMFBMD": "Esguichos de Bancada",
    "SPBICCH": "Acessórios",
    "AV10L312": "Higienização",
    "BFBDD_MINI_200MM": "Esguichos de Parede",
    "SP300D": "Acessórios",
    "SP250A": "Acessórios",
    "RDTUBO": "Acessórios",
    "RDSTCP": "Acessórios",
    "RDFLX0B": "Acessórios",
    "RDEVML": "Acessórios",
    "RDCPNB": "Acessórios",
    "RDMOLXM": "Acessórios",
    "RIC220": "Acessórios",
    "PDTR1A": "Torneiras Especiais",
    "MINIDMAPAREDE": "Esguichos de Parede",
    "MINIDMFB90B": "Esguichos de Bancada",
    "MODFRIUO": "Torneiras Especiais",
    "DBFB90": "Esguichos de Parede",
    "DBFB9D": "Esguichos de Bancada",
    "DD28229": "Torneiras Industriais Simples",
    "DD2828": "Torneiras Industriais Simples",
    "DMAMADI": "Torneiras Industriais Simples",
    "BFBD20": "Torneiras Industriais Simples",
    "MAP9251L": "Torneiras Clínicas",
    "MFBLS1": "Torneiras Clínicas",
    "MFBU2L": "Torneiras Clínicas",
    "BFBDD2MINI": "Esguichos de Parede",
    "BFBDD366MINI": "Esguichos de Parede",
    "BFBPX30150MM": "Esguichos de Parede",
    "AV10L3": "Higienização",
    "AV10L2": "Higienização",
    "CANOPLA": "Acessórios",
    "MFBUOC": "Torneiras Industriais Simples",
    "MODELOB": "Torneiras Clínicas",
    "DUCHAMINIESGUICHO": "Acessórios",
    "02UVXA": "Acessórios",
    "DMAMAD": "Torneiras Industriais Simples"
}

# Find all blocks of products
pattern = r'(id:\s*"([^"]+)",\s*\n\s*name:\s*"[^"]+",\s*\n\s*category:\s*)"([^"]+)"'

def repl(match):
    prefix = match.group(1)
    prod_id = match.group(2)
    if prod_id in updates:
        return f'{prefix}"{updates[prod_id]}"'
    return match.group(0)

new_content = re.sub(pattern, repl, content)

with open("products.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Categories updated successfully.")
