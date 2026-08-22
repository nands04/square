import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Extract the header
header_match = re.search(r'<header class="header top-0 fixed w-full">.*?</header>', html, re.IGNORECASE | re.DOTALL)
if header_match:
    header_html = header_match.group(0)
    
    # Make header background blue
    header_html = header_html.replace('bg-white-100', 'bg-[#08254D]')
    
    # Change text colors in header to white
    header_html = header_html.replace('text-black-900', 'text-white')
    header_html = header_html.replace('text-black-600', 'text-white')
    
    # Replace the Eisku logo SVG with the img tag. 
    # The eisku SVG is the first SVG in the intro-animation-timer div.
    # It has width="82" height="28"
    eisku_svg_pattern = r'<svg width="82" height="28".*?</svg>'
    logo_img = '<img src="images/logo.png" alt="Square Commerce" class="h-10 lg:h-14 object-contain" />'
    header_html = re.sub(eisku_svg_pattern, logo_img, header_html, flags=re.IGNORECASE)
    
    # Remove the time symbol. It's the second SVG in an a tag with class "hidden lg:block absolute left-[calc(50%-6px)]"
    time_symbol_pattern = r'<a aria-current="page" class="hidden lg:block absolute left-\[calc\(50%-6px\)\] intro-animation-timer top-\[-150px\] text-[^"]+" href="index\.html" data-discover="true"><svg width="26" height="40".*?</svg></a>'
    header_html = re.sub(time_symbol_pattern, '', header_html, flags=re.IGNORECASE)
    
    # Replace the old header with the new one
    html = html[:header_match.start()] + header_html + html[header_match.end():]
    print("Header updated successfully.")
else:
    print("Header not found.")

# Let's also change any global buttons or footer background to #08254D
# In eisku, primary buttons are usually bg-black-900 or text-black-900
# And footer is usually bg-black-900
# Let's replace bg-black-900 with bg-[#08254D]
html = html.replace('bg-black-900', 'bg-[#08254D]')
html = html.replace('bg-black-800', 'bg-[#08254D]') # just in case

# If there are buttons with text-black-900 and border-black-900, let's make them #08254D
html = html.replace('border-black-900', 'border-[#08254D]')
# Be careful with text-black-900, if we change all text-black-900 to text-[#08254D], all typography becomes blue, which the user didn't want ("não quero ele todo azul").
# We should keep text-black-900 for normal text, but change hover:text-black-900? No, let's just leave text-black-900 alone to keep it clean.

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
