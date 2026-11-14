var minisrv_service_file = true;

if (!request_headers.query.registering) {
    var errpage = wtvshared.doErrorPage(400);
    headers = errpage[0];
    data = errpage[1];
} else {
    var wtvr = new WTVRegister(minisrv_config, SessionStore);
    var errpage = null;
    var month = request_headers.query.subscriber_birth_month;
    var day = request_headers.query.subscriber_birth_date;

    if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
        if (month == 1 && day > 28) {
            day == 28;
        }
    } else {
        var errpage = wtvshared.doErrorPage(400);
        headers = errpage[0];
        data = errpage[1];
    }

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
            { name: "subscriber_birth_month", value: request_headers.query.subscriber_birth_month },
            { name: "subscriber_birth_date", value: request_headers.query.subscriber_birth_date },
            { name: "subscriber-sex", value: "not likely" }
        ]

        data = engine.renderFileSync('wtv-register/agreeIntro', { isJapaneseClient: session_data.isJapaneseClient(), formItems });
    }
}
