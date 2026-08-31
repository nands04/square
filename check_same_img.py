import re
import collections

with open("products.js", "r", encoding="utf-8") as f:
    content = f.read()

images = collections.defaultdict(list)

blocks = re.findall(r'\{[^{}]*\}', content)
for block in blocks:
    id_match = re.search(r'id:\s*"([^"]+)"', block)
    img_match = re.search(r'image:\s*"([^"]+)"', block)
    if id_match and img_match:
        pid = id_match.group(1)
        img = img_match.group(1)
        images[img].append(pid)

for img, pids in images.items():
    if len(pids) > 1:
        print(f"Image {img} used by: {pids}")

