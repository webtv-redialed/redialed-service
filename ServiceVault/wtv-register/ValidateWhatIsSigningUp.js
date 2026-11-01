var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

const formItems = [
    { name: "registering", value: true },
    { name: "brand", value: request_headers.query.brand },
    { name: "controller", value: request_headers.query.controller },
    { name: "subscriber-sex", value: "not likely" }
]

if (minisrv_config.config.serviceType == "Debug") {
    const randAdj = wtvshared.getDynamicConfig(`randomAdjective`);
    const randomName = randAdj[Math.floor(Math.random() * randAdj.length)]
    data = engine.renderFileSync('wtv-register/firstName', { randomName, isJapaneseClient: session_data.isJapaneseClient(), formItems });
} else {
    data = engine.renderFileSync('wtv-register/firstName', { isJapaneseClient: session_data.isJapaneseClient(), formItems });
}