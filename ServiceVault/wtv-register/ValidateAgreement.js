var minisrv_service_file = true;

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const days = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
    "19th",
    "20th",
    "21st",
    "22nd",
    "23rd",
    "24th",
    "25th",
    "26th",
    "27th",
    "28th",
    "29th",
    "30th",
    "31st",
];

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
    else if (wtvr.checkUserNameOk(request_headers.query.subscriber_username))
        errpage = wtvr.checkUserNameOk(request_headers.query.subscriber_username);

    const month = request_headers.query.subscriber_birth_month;
    const day = request_headers.query.subscriber_birth_date;

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

        data = engine.renderFileSync('wtv-register/review', { birthday: `${months[month]} ${days[parseInt(day) - 1]}`, isJapaneseClient: session_data.isJapaneseClient(), formItems });
    }
}
