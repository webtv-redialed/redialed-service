var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

const formItems = [
    { name: "brand", value: request_headers.query.brand },
    { name: "controller", value: "keyboard" },
    { name: "subscriber-sex", value: "not likely" }
]

const preload = [`images/${request_headers.query.brand}/ArrowButtons.gif`, `images/${request_headers.query.brand}/CenterButton.gif`, `images/${request_headers.query.brand}/DownArrowButton.gif`];

data = engine.renderFileSync('wtv-register/keyboardInstructions', { brand: request_headers.query.brand, formItems, preload });