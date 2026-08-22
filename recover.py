import re

with open('index.html.bak', 'r') as f:
    content = f.read()

# 1. Format newlines
content = re.sub(r'>\s*<', '>\n<', content)

# 2. Hero button replacement
old_hero = """<h1 class="h2 pb-7 max-w-[398px]">Equipamentos hidráulicos projetados para durabilidade extrema.</h1>
<a class="hover:no-underline" href="https://eisku.com/shop" data-discover="true">
<button type="button" class="flex items-center rounded-lg text-button transition-all disabled:opacity-35  py-3 px-5 bg-[#08254D] text-white-100 hover:bg-black-500 hover:text-black-900 active:bg-black-600 active:text-black-900 justify-between" style="background-color: #08254D; color: white;">Solicitar Orçamento</button>
</a>
</div>"""

new_hero = """<h1 class="h2 pb-7 max-w-[398px]">Equipamentos hidráulicos projetados para durabilidade extrema.</h1>
<div class="flex gap-4 mb-8 flex-wrap">
<a class="hover:no-underline" href="#produtos" data-discover="true">
<button type="button" class="flex items-center rounded-lg text-button transition-all disabled:opacity-35  py-3 px-5 bg-[#08254D] text-white-100 hover:bg-[#1B9DD4] justify-between" style="background-color: #08254D; color: white;">Conheça os produtos</button>
</a>
<a class="hover:no-underline" href="https://wa.me/5511999999999" data-discover="true">
<button type="button" class="flex items-center rounded-lg text-button transition-all disabled:opacity-35  py-3 px-5 bg-transparent border border-[#08254D] text-[#08254D] hover:bg-[#08254D] hover:text-white justify-between" style="border: 2px solid #08254D; color: #08254D; font-weight: bold; background-color: rgba(255, 255, 255, 0.8);">Fale com um especialista</button>
</a>
</div>
<div class="flex flex-wrap gap-3 max-w-[500px]">
<span class="bg-[#1B9DD4]/10 text-[#08254D] px-3 py-1 rounded-full text-sm font-semibold border border-[#1B9DD4]/20" style="background-color: rgba(255, 255, 255, 0.8); border: 1px solid #1B9DD4; color: #08254D;">Produto italiano</span>
<span class="bg-[#1B9DD4]/10 text-[#08254D] px-3 py-1 rounded-full text-sm font-semibold border border-[#1B9DD4]/20" style="background-color: rgba(255, 255, 255, 0.8); border: 1px solid #1B9DD4; color: #08254D;">Aço inox e latão cromado</span>
<span class="bg-[#1B9DD4]/10 text-[#08254D] px-3 py-1 rounded-full text-sm font-semibold border border-[#1B9DD4]/20" style="background-color: rgba(255, 255, 255, 0.8); border: 1px solid #1B9DD4; color: #08254D;">Soluções para bancada e parede</span>
<span class="bg-[#1B9DD4]/10 text-[#08254D] px-3 py-1 rounded-full text-sm font-semibold border border-[#1B9DD4]/20" style="background-color: rgba(255, 255, 255, 0.8); border: 1px solid #1B9DD4; color: #08254D;">Garantia de até 10 anos*</span>
</div>
</div>"""

content = content.replace(old_hero, new_hero)

# 3. Logo SVG replacement
# We need to find the specific SVGs. They are between top-13 intro-animation-timer and <div class="relative bg-white-100 top-[120px] lg:top-[276px]
svg_start = content.find('<div class="flex justify-between bg-white-100 px-5 lg:px-10 items-center pt-4 lg:pb-9 absolute w-full top-13 intro-animation-timer">')
if svg_start != -1:
    svg_end = content.find('<div class="relative bg-white-100 top-[120px]', svg_start)
    if svg_end != -1:
        before_svg = content[:svg_start + len('<div class="flex justify-between bg-white-100 px-5 lg:px-10 items-center pt-4 lg:pb-9 absolute w-full top-13 intro-animation-timer">\n')]
        after_svg = content[svg_end:]
        new_logo = '<img src="images/logo.png" alt="Square Commerce" class="max-w-[163px] lg:max-w-[300px] h-auto object-contain" />\n</div>\n'
        content = before_svg + new_logo + after_svg

# 4. Replace eisku with Square Commerce
content = re.sub(r'eisku', 'Square Commerce', content, flags=re.IGNORECASE)

# 5. Fix URLs
content = content.replace('Square Commerce.com', 'squarecommerce.com')
content = content.replace('Square Commerce.myshopify.com', 'squarecommerce.myshopify.com')
content = content.replace('squarecommerce.com.br', 'squarecommerce.com.br')

with open('index.html', 'w') as f:
    f.write(content)

