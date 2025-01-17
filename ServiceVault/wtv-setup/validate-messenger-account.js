var minisrv_service_file = true;
var errpage;

if (request_headers.query.email) {
    const [email, domain] = request_headers.query.email.split('@');
    request_headers.query.email = email;
    request_headers.query.domain = domain;
}

else if (request_headers.query.password.length < 6)
    errpage = wtvshared.doErrorPage(
        400,
        "Your password includes at least 6 characters."
    );
else if (request_headers.query.password.length > 20)
    errpage = wtvshared.doErrorPage(
        400,
        "Your password includes less than 21 characters."
    );
else if (request_headers.query.password !== request_headers.query.verify)
    errpage = wtvshared.doErrorPage(
        400,
        "The passwords you entered did not match. Please check them any try again."
    );

if (errpage) {
    headers = errpage[0];
    data = errpage[1];
} else {
    var encryptedpass = session_data.encryptPassword(
        request_headers.query.password
    );

    session_data.setSessionData("messenger_password", encryptedpass);
    session_data.setSessionData("messenger_email", request_headers.query.email);
    session_data.setSessionData("messenger_domain", request_headers.query.domain);
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