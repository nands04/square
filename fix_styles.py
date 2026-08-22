import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix the header background and colors
header_match = re.search(r'<header class="header top-0 fixed w-full">.*?</header>', html, re.IGNORECASE | re.DOTALL)
if header_match:
    header_html = header_match.group(0)
    
    # Apply inline styles for background and text
    header_html = header_html.replace('bg-[#08254D]"', 'bg-[#08254D]" style="background-color: #08254D; color: white;"')
    
    # For every text-white, let's also add style="color: white;" but safely
    header_html = re.sub(r'class="([^"]*text-white[^"]*)"', r'class="\1" style="color: white;"', header_html)
    
    html = html[:header_match.start()] + header_html + html[header_match.end():]

# Let's also fix bg-[#08254D] globally (like footer and buttons)
html = re.sub(r'class="([^"]*bg-\[#08254D\][^"]*)"', r'class="\1" style="background-color: #08254D; color: white;"', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Styles fixed.")
