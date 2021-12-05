from PIL import Image

old = Image.open('images/footer background.png')
old = old.convert('RGBA')
old_data = old.getdata()
new_data = []
for pixel in old_data:
    if pixel[:3] == (255, 255, 255):
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(pixel)
old.putdata(new_data)
old.save('footer.png')