var wtvrsvc_service_file = true;

var challenge_response,
    challenge_header = "";
var gourl;
var wtvsec_login = null;
const hourNow = new Date().getHours();
const wantsMessageWatch = request_headers["wtv-request-type"] !== "datadownload" || "messagewatch";

if (request_headers.query.hangup) {
    headers = `302 Moved temporarily
Location: client:gototvhome
wtv-visit: client:hangupphone`;
} else {
    var user_id = request_headers.query.user_id
        ? request_headers.query.user_id
        : session_data.user_id;

    if (socket.ssid !== null && user_id !== null)
        session_data.switchUserID(user_id);

    if (socket.ssid !== null && !session_data.get("wtvsec_login")) {
        wtvsec_login = session_data.createWTVSecSession();
        wtvsec_login.IssueChallenge();
        wtvsec_login.set_incarnation(request_headers["wtv-incarnation"]);
        session_data.set("wtvsec_login", wtvsec_login);
    } else {
        wtvsec_login = session_data.get("wtvsec_login");
    }

    if (socket.ssid !== null) {
        if (wtvsec_login.ticket_b64 == null) {
            challenge_response = wtvsec_login.challenge_response;
            var client_challenge_response =
                request_headers["wtv-challenge-response"] || null;
            if (challenge_response && client_challenge_response) {
                if (
                    challenge_response.toString(CryptoJS.enc.Base64) ==
                    client_challenge_response
                ) {
                    console.log(
                        " * wtv-challenge-response success for " +
                        wtvshared.filterSSID(socket.ssid)
                    );
                    wtvsec_login.PrepareTicket();
                    if (
                        !session_data.getSessionData("subscriber_birthday") &&
                        session_data.isRegistered()
                    ) {
                        gourl = "wtv-head-waiter:/setbirthday";
                    } else {
                        gourl = "wtv-head-waiter:/login-stage-two?";
                    }
                } else {
                    console.log(
                        " * wtv-challenge-response FAILED for " +
                        wtvshared.filterSSID(socket.ssid)
                    );
                    if (wtvrsvc_config.config.debug_flags.debug)
                        console.log(
                            "Response Expected:",
                            challenge_response.toString(CryptoJS.enc.Base64)
                        );
                    if (wtvrsvc_config.config.debug_flags.debug)
                        console.log("Response Received:", client_challenge_response);
                    gourl = "wtv-head-waiter:/login?reissue_challenge=true";
                }
            } else {
                gourl = "wtv-head-waiter:/login?no_response=true";
            }
        } else if (!session_data.getSessionData("subscriber_birthday")) {
            gourl = "wtv-head-waiter:/setbirthday";
        } else {
            gourl = "wtv-head-waiter:/login-stage-two?";
        }
    }

    if (
        user_id != null &&
        !request_headers.query.initial_login &&
        !request_headers.query.user_login &&
        !request_headers.query.relogin
    ) {
        if (request_headers.query.password == "") {
            headers = `403 Please enter your password and try again
wtvr-no-mail-count: true
`;
        } else if (
            session_data.validateUserPassword(request_headers.query.password)
        ) {
            session_data.setUserLoggedIn(true);
			// store last used IP to assist with bans
			session_data.setSessionData("last_ip", socket.remoteAddress);
            headers = `200 OK
wtvr-no-mail-count: true
Content-Type: text/html
wtv-visit: ${gourl}
`;
        } else {
            headers = `403 The password you entered was incorrect. Please retype it and try again.
wtvr-no-mail-count: true
`;
        }
    } else {
        if (session_data.baddisk === true) {
            gourl = "wtv-head-waiter:/bad-disk?";
        } else if (
            ssid_sessions[socket.ssid].get("wtv-need-upgrade") ||
            (ssid_sessions[socket.ssid].get("wtv-used-8675309") &&
                !request_headers.query.noupdate)
        ) {
            gourl = "wtv-flashrom:/ready-to-update";
        // having to restart the server to enable maintenance mode isn't ideal
        // instead we should probably make a script that interfaces with the server to enable it (like with CrossTalk)
        } else if (wtvrsvc_config.config.maintenance_mode && wantsMessageWatch && wtvrsvc_config.config.serviceType == "Production") { // Make sure datadownload & messagewatch can still function
            gourl = `wtv-star:/star?maintenance=true`;
        } 
        else if (
            session_data.getNumberOfUserAccounts() > 1 &&
            user_id === 0 &&
            (request_headers.query.initial_login || request_headers.query.relogin)
        ) {
            gourl = "wtv-head-waiter:/choose-user?";
        }
        else if (request_headers.query.needTMPfilesystem) {
            gourl = `wtv-flashrom:/get-tmp?needTMPfilesystem=${request_headers.query.needTMPfilesystem}`; // Handle FCS pants shitting
        } else {
            if (
                !session_data.getUserPasswordEnabled() &&
                request_headers.query.user_login
            )
                session_data.setUserLoggedIn(true);
				// store last used IP to assist with bans
				session_data.setSessionData("last_ip", socket.remoteAddress);
            var limitedLogin =
                !session_data.lockdown &&
                !session_data.get("password_valid") &&
                session_data.getUserPasswordEnabled();
            var limitedLoginRegistered = limitedLogin && session_data.isRegistered();
        }
        headers = `200 OK
wtv-connection-close: true
Connection: close
wtvr-no-mail-count: true
Content-Type: text/html`;
        if (client_challenge_response) {
            headers += `
wtv-encrypted: ${request_headers["wtv-encrypted"]
                    ? wtvshared.parseBool(request_headers["wtv-encrypted"])
                    : true
                }`;
            if (wtvsec_login)
                session_data.data_store.wtvsec_login.update_ticket = true;
        }
        if (limitedLoginRegistered && session_data.getUserPasswordEnabled())
            gourl = "wtv-head-waiter:/password?";
        headers += `
wtv-visit: ${gourl}`;
    }
}
