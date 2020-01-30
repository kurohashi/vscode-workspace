import requests
try:
  from googlesearch import search
except ImportError:
  print("No module named 'google' found")

websites = []
valid = []
red_flags = ['intercom', 'fibotalk']
green_flags = ['login', 'sign in', 'signup', 'signin']
queries = [
  "practice management softwares",
  "accounting softwares"
]
ignore = ["google", "youtube", "capterra", "softwareadvice", "wikipedia", "techopedia", "techradar", "businessnewsdaily", "hubspot", "softwaresuggest", "justdial", "indiamart", "linkedin", "quora", "facebook", "twitter", "zoho"]

# create list of websites
for query in queries:
  print(query)
  for url in search(query, tld = "co.in", stop = 50, pause = 2):
    if url not in websites:
      j = len(ignore) - 1
      for k, domain in enumerate(ignore):
        if domain in url:
          print("Ignore " + domain)
          break
        if k == j:
          print("Seems valid " + url)
          websites.append(url)

  # scrape websites for finding the ones without intended words
for website in websites:
  r = requests.get(website)
  s = len(red_flags) - 1
  for i, bad_word in enumerate(red_flags):
    if bad_word in r.text:
      print(bad_word + " present in " + website + ". Ignoring it")
      break
    if i == s:
      for j, good_word in enumerate(green_flags):
        if good_word in r.text:
          with open("leads.csv", "a") as myfile:
            myfile.write(website + '\n')
            print("Lead found: " + website)
      break
