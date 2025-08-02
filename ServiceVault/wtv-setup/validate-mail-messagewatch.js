var wtvrsvc_service_file = true;

session_data.setSessionData(
    "messagewatch-offset",
    request_headers.query.messageWatchHour
);
session_data.saveSessionData();
var messagewatch_offset = request_headers.query.messageWatchHour;
headers = `302 Moved temporarily
Connection: Keep-Alive
wtv-expire-all: wtv-mail:
wtv-messagewatch-checktimeoffset: ${messagewatch_offset}
wtv-messagewatch-url: wtv-head-waiter:/login-stage-two?MessageWatch=1
Expires: Wed, 09 Oct 1991 22:00:00 GMT
Location: client:GoBack`;