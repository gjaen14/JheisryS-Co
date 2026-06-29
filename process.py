from rembg import remove
from PIL import Image

input_path = '/Users/jheisry/.gemini/antigravity/brain/443f3d7c-fcc8-4079-ba90-f2644b7d2639/media__1781633941106.jpg'
output_path = '/Applications/XAMPP/xamppfiles/htdocs/SitioWebPremiun/Jheisry_sco/public/assets/founder-couch.png'

print("Opening image...")
input_img = Image.open(input_path)
print("Removing background...")
output_img = remove(input_img)
print("Saving image...")
output_img.save(output_path)
print("Done!")
