var minisrv_service_file = true;

if (!request_headers.query.registering) {
    var errpage = wtvshared.doErrorPage(400);
    headers = errpage[0];
    data = errpage[1];
} else {
    var wtvr = new WTVRegister(minisrv_config, SessionStore);

    if (wtvr.checkUserNameOk(request_headers.query.subscriber_username))
        errpage = wtvr.checkUserNameOk(request_headers.query.subscriber_username);

    if (errpage) {
        headers = errpage[0];
        data = errpage[1];
    } else {
        headers = `200 OK
Content-Type: text/html`;

        const formItems = [
            { name: "registering", value: true },
            { name: "brand", value: request_headers.query.brand },
            { name: "controller", value: request_headers.query.controller },
            { name: "subscriber_first_name", value: request_headers.query.subscriber_first_name },
            { name: "subscriber_last_name", value: request_headers.query.subscriber_last_name },
            { name: "subscriber_username", value: request_headers.query.subscriber_username },
            { name: "subscriber-sex", value: "not likely" }
        ]

        data = engine.renderFileSync('wtv-register/dob', { isJapaneseClient: session_data.isJapaneseClient(), formItems });
    }
}
