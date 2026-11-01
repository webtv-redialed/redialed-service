var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

const formItems = [
    { name: "brand", value: request_headers.query.brand },
    { name: "controller", value: request_headers.query.controller },
    { name: "subscriber-sex", value: "not likely" }
]

data = engine.renderFileSync('wtv-register/signingUp', { isJapaneseClient: session_data.isJapaneseClient(), formItems });