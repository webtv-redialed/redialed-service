var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

const firstName = request_headers.query.subscriber_first_name;
const lastName = request_headers.query.subscriber_last_name;

const formItems = [
    { name: "registering", value: true },
    { name: "brand", value: request_headers.query.brand },
    { name: "controller", value: request_headers.query.controller },
    { name: "subscriber_username", value: request_headers.query.subscriber_username },
    { name: "subscriber_birth_month", value: request_headers.query.subscriber_birth_month },
    { name: "subscriber_birth_date", value: request_headers.query.subscriber_birth_date },
    { name: "subscriber-sex", value: "not likely" }
]

data = engine.renderFileSync('wtv-register/lastName', { correcting: true, firstName, lastName, isJapaneseClient: session_data.isJapaneseClient(), formItems });