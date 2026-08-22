with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the max-w classes with inline style because Tailwind isn't compiling them
old_logo = '<img src="images/square.jpeg" alt="Square Commerce" class="max-w-[163px] lg:max-w-[300px] h-auto object-contain" />'
new_logo = '<img src="images/square.jpeg" alt="Square Commerce" class="h-auto object-contain" style="max-width: 300px; width: 100%; margin: 0 auto;" />'
content = content.replace(old_logo, new_logo)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

