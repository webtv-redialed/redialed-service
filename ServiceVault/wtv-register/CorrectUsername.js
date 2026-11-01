var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

const username = request_headers.query.subscriber_username;

const formItems = [
    { name: "registering", value: true },
    { name: "brand", value: request_headers.query.brand },
    { name: "controller", value: request_headers.query.controller },
    { name: "subscriber_first_name", value: request_headers.query.subscriber_first_name },
    { name: "subscriber_last_name", value: request_headers.query.subscriber_last_name },
    { name: "subscriber_birth_month", value: request_headers.query.subscriber_birth_month },
    { name: "subscriber_birth_date", value: request_headers.query.subscriber_birth_date },
    { name: "subscriber-sex", value: "not likely" }
]

data = engine.renderFileSync('wtv-register/internetName', { correcting: true, username, isJapaneseClient: session_data.isJapaneseClient(), formItems });