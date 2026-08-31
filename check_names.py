import re
import collections

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

names = collections.defaultdict(list)

blocks = re.findall(r'\{[^{}]*\}', content)
for block in blocks:
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    name_match = re.search(r'name:\s*"([^"]+)"', block)
    if id_match and name_match:
        pid = id_match.group(1)
        name = name_match.group(1)
        names[name].append(pid)

for name, pids in names.items():
    if len(pids) > 1:
        print(f"Name {name} used by: {pids}")

