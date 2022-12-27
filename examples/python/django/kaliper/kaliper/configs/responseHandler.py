from django.http import JsonResponse

class Resp:
    def ok(self, data = {}, message = "Success"):
        return genResp(200, data, message)
    def notImplemented(self, message = "Method not implemented"):
        return genResp(501, None, message)
    def invalid(self, message = "Bad request"):
        return genResp(400, None, message)
    def serverError(self, message = "Internal server error"):
        return genResp(500, None, message)
    
def genResp(status, data = {}, message = "", extra = {}):
    if (not status):
        return None
    extra["statusCode"] = status
    extra["data"] = data
    extra["message"] = message
    return JsonResponse(extra, status = status)