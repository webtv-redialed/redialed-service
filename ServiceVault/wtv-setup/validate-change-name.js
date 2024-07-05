var minisrv_service_file = true;
var errpage;

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
        "You are not authorized to change the selected user's password."
    );
    headers = errpage[0];
    data = errpage[1];
}

if (user_id != null) {
    var userSession;
    if (session_data.user_id == request_headers.query.user_id)
        userSession = session_data;
    else {
        userSession = new WTVClientSessionData(minisrv_config, socket.ssid);
        userSession.user_id = user_id;
    }

    if (!userSession.loadSessionData()) {
        var errpage = wtvshared.doErrorPage(400, "Invalid user ID.");
        headers = errpage[0];
        data = errpage[1];
    }
    var errpage = null;

    if (
        request_headers.query.first_name.length < 1 ||
        request_headers.query.last_name.length < 1
    )
        errpage = wtvshared.doErrorPage(
            400,
            "Please type your first and last name."
        );
    else if (
        request_headers.query.first_name.length > 18 ||
        request_headers.query.last_name.length > 18
    )
        errpage = wtvshared.doErrorPage(
            400,
            "Your name must contain fewer than 18 characters"
        );

    if (errpage) {
        headers = errpage[0];
        data = errpage[1];
    } else {
        var user_name = userSession.getSessionData("subscriber_username");
        userSession.setSessionData(
            "subscriber_name",
            request_headers.query.first_name + " " + request_headers.query.last_name
        );
        userSession.setSessionData(
            "subscriber_first_name",
            request_headers.query.first_name
        );
        userSession.setSessionData(
            "subscriber_last_name",
            request_headers.query.last_name
        );
        userSession.saveSessionData();
        headers = `302 Moved temporarily
Content-type: text/html
wtv-expire: wtv-setup:/edit-user-begin?user_id=${user_id}
wtv-expire: wtv-setup:/edit-user-name?user_id=${user_id}
Location: wtv-setup:/edit-user-begin?user_id=${user_id}`;
    }
}
if (userSession) userSession = null;
