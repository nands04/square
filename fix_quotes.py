with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

# We need to replace `1/2" ` with `1/2\" ` but only where it's not already escaped
# But since I know I appended exactly `Entrada: 1/2" (padrão brasileiro)`
# Let's just do a string replacement
content = content.replace('Entrada: 1/2" (padrão', r'Entrada: 1/2\" (padrão')

with open("products.js", "w", encoding="utf-8") as f:
    f.write(content)
print("Quotes fixed.")
