var minisrv_service_file = true;
var userSession = null;

session_data.loadSessionData();

const wtvr = new WTVRegister(minisrv_config, SessionStore);

var user_id = null;
if (request_headers.query.user_id) {
    user_id = request_headers.query.user_id;
} else {
    var errpage = doErrorPage(400, "User was not specified.");
    headers = errpage[0];
    data = errpage[1];
}

if (
    session_data.user_id != 0 &&
    session_data.user_id != request_headers.query.user_id
) {
    user_id = null; // force unset
    var errpage = doErrorPage(
        400,
        "You are not authorized to edit the selected user."
    );
    headers = errpage[0];
    data = errpage[1];
}

if (user_id && !errpage) {
    headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;
    var userSession = null;
    if (session_data.user_id == request_headers.query.user_id)
        userSession = session_data;
    else {
        userSession = new WTVClientSessionData(minisrv_config, socket.ssid);
        userSession.user_id = user_id;
    }

    if (!userSession.loadSessionData()) {
        var errpage = doErrorPage(400, "Invalid user ID.");
        headers = errpage[0];
        data = errpage[1];
    } else {
        if (
            request_headers.query.password.length == 0 &&
            request_headers.query.password_verify.length == 0
        ) {
            userSession.setSessionData("subscriber_password", null);
            userSession.saveSessionData();
            headers = `302 Moved temporarily
Content-type: text/html
wtv-expire: wtv-setup:/setup
`;
            if (request_headers.query.return_to) {
                headers += `wtv-expire: ${request_headers.query.return_to}
Location: ${request_headers.query.return_to}`;
            } else
                headers +=
                    "Location: " + (session_data.user_id === user_id)
                        ? "wtv-setup:/setup"
                        : "wtv-setup:/accounts";
        } else if (wtvr.checkPasswordOk(request_headers.query.password, request_headers.query.password_verify))
            errpage = wtvr.checkPasswordOk(request_headers.query.password, request_headers.query.password_verify)
        else {
            if (errpage) {
                headers = errpage[0];
                data = errpage[1];
            } else {
                userSession.setUserPassword(request_headers.query.password);
                userSession.setUserLoggedIn(true);
                headers = `302 Moved temporarily
Content-type: text/html
wtv-expire: wtv-setup:/setup
`;
                if (request_headers.query.return_to) {
                    headers += `wtv-expire: ${request_headers.query.return_to}
Location: ${request_headers.query.return_to}`;
                } else
                    headers +=
                        "Location: " + (session_data.user_id === user_id)
                            ? "wtv-setup:/setup"
                            : "wtv-setup:/accounts";
            }
        }
    }
}

if (errpage) {
    headers = errpage[0];
    data = errpage[1];
}

if (userSession) userSession = null;
