var minisrv_service_file = true;

if (!request_headers.query.registering) {
    var errpage = wtvshared.doErrorPage(400);
    headers = errpage[0];
    data = errpage[1];
} else {
    var wtvr = new WTVRegister(minisrv_config, SessionStore);
    var errpage = null;
    if (!request_headers.query.registering) errpage = wtvshared.doErrorPage(400);
    else if (!request_headers.query.subscriber_first_name)
        errpage = wtvshared.doErrorPage(400, "You must enter your first name.");
    else if (!request_headers.query.subscriber_last_name)
        errpage = wtvshared.doErrorPage(400, "You must enter your last name.");

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
            { name: "subscriber-sex", value: "not likely" }
        ]

        if (minisrv_config.config.serviceType == "Debug") {
            const randAdj = wtvshared.getDynamicConfig(`randomAdjective`);
            const randN = wtvshared.getDynamicConfig(`randomNoun`);
            const randomName = randAdj[Math.floor(Math.random() * randAdj.length)] + "-" + randN[Math.floor(Math.random() * randN.length)];
            data = engine.renderFileSync('wtv-register/internetName', { randomName, isJapaneseClient: session_data.isJapaneseClient(), formItems });
        } else {
            data = engine.renderFileSync('wtv-register/internetName', { isJapaneseClient: session_data.isJapaneseClient(), formItems });
        }
    }
}
