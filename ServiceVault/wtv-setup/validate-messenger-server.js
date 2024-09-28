var minisrv_service_file = true;
var errpage;

if (errpage) {
    headers = errpage[0];
    data = errpage[1];
} else {
    session_data.setSessionData("messenger_server", request_headers.query.server);
    session_data.saveSessionData;
    headers = `302 Moved temporarily
Location: wtv-setup:/messenger-enable-redir
wtv-domain: ${session_data.getSessionData("messenger_domain")}
passport-domain: ${session_data.getSessionData("messenger_domain")}
wtv-user-name: ${session_data.getSessionData("messenger_email")}
wtv-messenger-server: ${session_data.getSessionData("messenger_server")}
wtv-messenger-enable: 0`;
}
