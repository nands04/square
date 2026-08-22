import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace logo
content = content.replace('images/logo.png', 'images/square.jpeg')

# Fix header background
old_bg = '<div class="lg:px-10 px-5 py-4 w-full relative bg-white-100">'
new_bg = '<div class="lg:px-10 px-5 py-4 w-full relative bg-[#08254D]" style="background-color: #08254D; color: white;">'
content = content.replace(old_bg, new_bg)

# Fix intro-animation-timer wrapper width and offset
old_wrapper = '<div class="flex items-center relative intro-animation-timer lg:top-0 w-[82px] lg:left-[-150px] top-[-150px]">'
new_wrapper = '<div class="flex items-center relative intro-animation-timer lg:top-0 top-[-150px] gap-8">'
content = content.replace(old_wrapper, new_wrapper)

# Fix header-menu-desktop to use flex and gap
old_nav = '<nav class="header-menu-desktop " role="navigation">'
new_nav = '<nav class="header-menu-desktop flex gap-6 items-center" role="navigation">'
content = content.replace(old_nav, new_nav)

# Make navigation text white
old_link = 'class="py-2 hover:no-underline whitespace-nowrap cursor-pointer text-navi-bar hidden lg:inline opacity-60 hover:opacity-100 transition-all text-black-900"'
new_link = 'class="py-2 hover:no-underline whitespace-nowrap cursor-pointer text-navi-bar hidden lg:inline opacity-60 hover:opacity-100 transition-all text-white" style="color: white;"'
content = content.replace(old_link, new_link)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

