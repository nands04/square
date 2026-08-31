import re

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

# Replace specific mentions in descriptions
# Example: "(150mm)" -> "(Disponível nas versões 150 mm e 200 mm)"
# "150MM" -> "Disponível nas versões 150 mm e 200 mm"

# 1. DBFP90: "COM MISTURADOR (150mm)" -> "COM MISTURADOR (Disponível nas versões 150 mm e 200 mm)"
content = content.replace("(150mm)", "(Disponível nas versões 150 mm e 200 mm)")
content = content.replace("(200mm)", "(Disponível nas versões 150 mm e 200 mm)")

# 2. BFBDD_MINI_200MM
# Name: "Mini Esguicho de Pré-Lavagem de Parede"
# Desc: "... modelo BFBDD/MINI 200MM, de PAREDE ..."
content = content.replace("BFBDD/MINI 200MM", "BFBDD/MINI (Disponível nas versões 150 mm e 200 mm)")

# 3. MINIDMAPAREDE
# Desc: "... modelo BFBDD2/MINI 200MM, de PAREDE ..."
content = content.replace("BFBDD2/MINI 200MM", "BFBDD2/MINI (Disponível nas versões 150 mm e 200 mm)")

# 4. BFBPX30150MM
# Name: "Esguicho de Pré-Lavagem de Parede"
# Desc: "... modelo BFBPX30 150MM, de PAREDE ..."
content = content.replace("BFBPX30 150MM", "BFBPX30 (Disponível nas versões 150 mm e 200 mm)")

# Let's check for any other "150mm" or "200mm" with spaces
content = re.sub(r'\(150\s*mm\)', '(Disponível nas versões 150 mm e 200 mm)', content, flags=re.IGNORECASE)
content = re.sub(r'\(200\s*mm\)', '(Disponível nas versões 150 mm e 200 mm)', content, flags=re.IGNORECASE)

with open("products.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Updates applied.")
