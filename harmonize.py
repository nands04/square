import re

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

replacements = {
    r"PEDAL COMPLETO SEM MISTURADOR": "pedal completo sem misturador",
    r"PAREDE COM MISTURADOR E TORNEIRA EXTRA": "parede com misturador e torneira extra",
    r"BANCADA COM MISTURADOR E TORNEIRA EXTRA": "bancada com misturador e torneira extra",
    r"PAREDE COM TORNEIRA EXTRA, COM MISTURADOR": "parede com torneira extra, com misturador",
    r"BANCADA COM TORNEIRA EXTRA, COM MISTURADOR": "bancada com torneira extra, com misturador",
    r"BANCADA COM TORNEIRA EXTRA SEM MISTURADOR": "bancada com torneira extra sem misturador",
    r"PAREDE COM TORNEIRA EXTRA, SEM MISTURADOR": "parede com torneira extra, sem misturador",
    r"BANCADA COM MISTURADOR FURO ÚNICO": "bancada com misturador furo único",
    r"PAREDE SEM MISTURADOR ALAVANCA CLÍNICA": "parede sem misturador alavanca clínica",
    r"BANCADA COM MISTURADOR ALAVANCA CLÍNICA FURO ÚNICO": "bancada com misturador alavanca clínica furo único",
    r"PAREDE COM MISTURADOR": "parede com misturador",
    r"BANCADA COM MISTURADOR": "bancada com misturador",
    r"PAREDE SEM MISTURADOR": "parede sem misturador",
    r"BANCADA SEM MISTURADOR": "bancada sem misturador",
    r"ECONOMIA 100 % DE ÁGUA": "Economia de 100% de água",
    r"BICA: 250 MM OU BICA: 300 MM": "Bica: 250 mm ou 300 mm",
    r"BICA EM LAT CROMADO L.300 mm. L.250 mm.": "Bica em latão cromado L.300 mm ou L.250 mm.",
    r"BICA EM LATÃO CROMADO 18 mm. L.300 mm. L.250 mm.": "Bica em latão cromado 18 mm. L.300 mm ou L.250 mm.",
    r"BICA EM LATÃO CROMADO 18 mm. L.300 mm. L.250 mm": "Bica em latão cromado 18 mm. L.300 mm ou L.250 mm",
    r"DISPONÍVEL: 1 METRO E MEIO OU 1 METRO": "Disponível: 1 metro e meio ou 1 metro",
    r"MINI MOLA DE BALANCEAMENTO EM AÇO INOX": "Mini mola de balanceamento em aço inox",
    r"CANOPLA 1/4 DE VOLTA ÁGUA QUENTE E FRIA": "Canopla 1/4 de volta água quente e fria",
    r"DUCHA REGISTRO EM LATÃO ÁGUA QUENTE OU FRIA VEDAÇÃO EM CERÂMICA 1/4 DE VOLTA": "Ducha registro em latão, água quente ou fria, vedação em cerâmica 1/4 de volta"
}

for old, new in replacements.items():
    content = content.replace(old, new)

# Let's also fix capitalization in 'name' fields if they have weird ALL CAPS
def fix_name(m):
    name = m.group(1)
    # If it's something like "Modelo DMAB9D BANCADA" -> "Modelo DMAB9D Bancada"
    if " BANCADA" in name:
        name = name.replace(" BANCADA", " Bancada")
    if " PAREDE" in name:
        name = name.replace(" PAREDE", " Parede")
    return f'name: "{name}"'

content = re.sub(r'name:\s*"([^"]+)"', fix_name, content)

with open("products.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Text harmonized successfully.")
