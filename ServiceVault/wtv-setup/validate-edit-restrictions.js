var wtvrsvc_service_file = true;
var errpage = null;

session_data.loadSessionData();

var user_id = request_headers.query.user_id
    ? request_headers.query.user_id
    : session_data.user_id;

// security
if (
    session_data.user_id != 0 &&
    session_data.user_id != request_headers.query.user_id
) {
    user_id = null; // force unset
    var errpage = wtvshared.doErrorPage(
        400,
        "You are not authorized to change the selected user's restrictions."
    );
    headers = errpage[0];
    data = errpage[1];
}

if (user_id != null) {
    var userSession;
    if (session_data.user_id == request_headers.query.user_id)
        userSession = session_data;
    else {
        userSession = new WTVClientSessionData(wtvrsvc_config, socket.ssid);
        userSession.user_id = user_id;
    }

    if (!userSession.loadSessionData()) {
        var errpage = wtvshared.doErrorPage(400, "Invalid user ID.");
        headers = errpage[0];
        data = errpage[1];
    }
    if (!request_headers.query.restricted_web_access) {
        var errpage = wtvshared.doErrorPage(400);
        headers = errpage[0];
        data = errpage[1];
    }


    if (errpage) {
        headers = errpage[0];
        data = errpage[1];
    } else {
        if (request_headers.query.restricted_web_access == "surfwatch-screening") {
            userSession.setSessionData("subscriber_surfwatch_enabled", true);
        } else {
            userSession.setSessionData("subscriber_surfwatch_enabled", false);
        }
        userSession.saveSessionData();
        headers = `302 Moved temporarily
Content-type: text/html
wtv-expire: wtv-setup:/edit-user-begin?user_id=${user_id}
wtv-expire: wtv-setup:/edit-user-restrictions?user_id=${user_id}
Location: wtv-setup:/edit-user-begin?user_id=${user_id}`;
    }
}
if (userSession) userSession = null;
