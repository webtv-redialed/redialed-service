var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

var ssid = ssid_sessions[socket.ssid].get("wtv-client-serial-number");
var wtvr = new WTVRegister(minisrv_config, SessionStore);
var canRegister = wtvr.checkDoorsOpen(ssid);

// make sure everything actually checks out before we write to sessionstore
if (canRegister == true) {
    var birthdaydata;
    var month = request_headers.query.subscriber_birth_month;
    var day = request_headers.query.subscriber_birth_date;

    if (
        !request_headers.query.registering ||
        !request_headers.query.subscriber_username ||
        !request_headers.query.subscriber_first_name ||
        !request_headers.query.subscriber_last_name ||
        !request_headers.query.subscriber_birth_date ||
        !request_headers.query.subscriber_birth_month ||
        !session_data.session_store ||
        !session_data ||
        !socket.ssid
    ) {
        var errpage = wtvshared.doErrorPage(400);
        headers = errpage[0];
        data = errpage[1];
    } else if (wtvr.checkUserNameOk(request_headers.query.subscriber_username)) {
        var errpage = wtvr.checkUserNameOk(request_headers.query.subscriber_username);
        headers = errpage[0];
        data = errpage[1];
    } else if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
        if (month == 1 && day > 28) {
            day == 28;
        }
        birthdaydata = {month: month, day: day};
        session_data.setSessionData(
            "subscriber_first_name",
            request_headers.query.subscriber_first_name,
            true
        );
        session_data.setSessionData(
            "subscriber_last_name",
            request_headers.query.subscriber_last_name,
            true
        );
        session_data.setSessionData(
            "subscriber_username",
            request_headers.query.subscriber_username,
            true
        );
        session_data.setSessionData(
            "subscriber_name",
            request_headers.query.subscriber_first_name +
            " " +
            request_headers.query.subscriber_last_name,
            true
        );
        session_data.setSessionData("subscriber_birthday", birthdaydata, true);
        session_data.setSessionData("subscriber_userid", 0, true);
		// store signup IP to assist with bans
		session_data.setSessionData("signup_ip", socket.remoteAddress, true);
        session_data.setSessionData("registered", true, true);
        var mailstore_exists = session_data.mailstore.mailstoreExists();
        var mailbox_exists = false;
        if (!mailstore_exists)
            mailstore_exists = session_data.mailstore.createMailstore();
        if (mailstore_exists) {
            if (!session_data.mailstore.mailboxExists(0)) {
                // mailbox does not yet exist, create it
                mailbox_exists = session_data.mailstore.createMailbox(0);
            }
            if (mailbox_exists) {
                // Just created Inbox for the first time, so create the welcome message
                session_data.mailstore.createWelcomeMessage();
            }
        }
        if (!session_data.saveSessionData(true, true)) {
            var errpage = wtvshared.doErrorPage(400);
            headers = errpage[0];
            data = errpage[1];
        }
    }
}

const formItems = [
    { name: "wants-byoisp", value: "OFF" }
]

data = engine.renderFileSync('wtv-register/finished', { canRegister, isJapaneseClient: session_data.isJapaneseClient(), formItems });