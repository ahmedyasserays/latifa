from PIL import Image
old = Image.open('bg.png')
new_ = old.crop((1000, 0, 200, old.height))
new_.save('bg-py.png', "PNG")