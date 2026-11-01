var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

const formItems = [
    { name: "brand", value: request_headers.query.brand },
    { name: "controller", value: "keyboard" },
    { name: "subscriber-sex", value: "not likely" }
]

data = engine.renderFileSync('wtv-register/confirmKeyboard', { brand: request_headers.query.brand, isJapaneseClient: session_data.isJapaneseClient(), formItems });