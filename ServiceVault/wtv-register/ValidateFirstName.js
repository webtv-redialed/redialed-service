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

    if (errpage) {
        headers = errpage[0];
        data = errpage[1];
    } else {
        headers = `200 OK
Content-Type: text/html`;

        const firstName = request_headers.query.subscriber_first_name;

        const formItems = [
            { name: "registering", value: true },
            { name: "brand", value: request_headers.query.brand },
            { name: "controller", value: request_headers.query.controller },
            { name: "subscriber-sex", value: "not likely" }
        ]

        if (minisrv_config.config.serviceType == "Debug") {
            const randN = wtvshared.getDynamicConfig(`randomNoun`);
            const randomName = randN[Math.floor(Math.random() * randN.length)]
            data = engine.renderFileSync('wtv-register/lastName', { firstName, randomName, isJapaneseClient: session_data.isJapaneseClient(), formItems });
        } else {
            data = engine.renderFileSync('wtv-register/lastName', { firstName, isJapaneseClient: session_data.isJapaneseClient(), formItems });
        }
    }
}