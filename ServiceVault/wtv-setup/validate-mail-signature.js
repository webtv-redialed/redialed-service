var wtvrsvc_service_file = true;

if (request_headers.query && session_data) {
    session_data.setSessionData(
        "subscriber_signature",
        request_headers.query.mail_signature
    );
    session_data.saveSessionData();
    headers = `200 OK
wtv-expire: wtv-setup:/mail-signature`;
} else {
    var outdata = doErrorPage();
    headers = outdata[0];
    data = outdata[1];
}
