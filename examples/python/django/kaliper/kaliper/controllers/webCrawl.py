from ..configs import responseHandler
import requests
from bs4 import BeautifulSoup
import json
from django.views.decorators.csrf import csrf_exempt

send = responseHandler.Resp()

@csrf_exempt    # mandatory secure cookies exemption. accept all requests
def index(request):
    if (request.method != "POST"):
        return send.notImplemented()
    try:
        body = json.loads(request.body)
        if (not body["url"]):
            return send.invalid()
        r = requests.get(body["url"])

        soup = BeautifulSoup(r.content, 'html.parser')
        arr = soup.find_all("script")
        pixels = []
        for i in arr:
            src = i.get("src")
            if (src):
                pixels.append(src)
        return send.ok(pixels)
    except:
        return send.invalid()
