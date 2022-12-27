#This will not run on online IDE
import requests
from bs4 import BeautifulSoup
  
URL = "http://www.values.com/inspirational-quotes"
r = requests.get(URL)
  
soup = BeautifulSoup(r.content, 'html.parser')
arr = soup.find_all("script")
pixels = []
for i in arr:
    src = i.get("src")
    if (src):
        pixels.append(src)
print(pixels)