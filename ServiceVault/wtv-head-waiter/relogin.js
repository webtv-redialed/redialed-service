var minisrv_service_file = true;
session_data.setUserLoggedIn(false);

var gourl = "wtv-1800:/preregister?";
if (request_headers.query.relogin) gourl += "relogin=true";
else if (request_headers.query.reconnect) gourl += "reconnect=true";

if (request_headers.query.guest_login) {
    if (request_headers.query.relogin || request_headers.query.reconnect)
        gourl += "&";
    gourl += "guest_login=true";
    if (request_headers.query.skip_splash) gourl += "&skip_splash=true";
}

if (request_headers.query.needTMPfilesystem) {
	gourl = `wtv-flashrom:/get-tmp?needTMPfilesystem=${request_headers.query.needTMPfilesystem}`; // Handle FCS pants shitting
}

headers = `200 OK
Connection: Keep-Alive
Expires: Wed, 09 Oct 1991 22:00:00 GMT
wtv-expire-all: wtv-head-waiter:
wtv-expire-all: wtv-1800:
wtv-service: reset
${getServiceString("wtv-1800")}
${getServiceString("wtv-flashrom")}
wtv-visit: ${gourl}
Content-type: text/html`;
data = "";
