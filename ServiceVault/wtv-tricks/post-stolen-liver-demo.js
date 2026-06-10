var minisrv_service_file = true;

const authorizedPOSTers = wtvshared.getDynamicConfig(`authorizedPOSTers`);
const file = request_headers.query.file

// make sure user has the authorization to POST to this directory
if (authorizedPOSTers.includes(session_data.getSessionData("subscriber_username"))) {
    headers = `200 OK`;

    var POST = request_headers.post_data;
    const buffer = Buffer.from(POST, "hex")
    var filename = `ServiceDiskPost/${file}`;

    fs.writeFile(filename, buffer, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(` * Stolen liver can be found at ${filename}`);
    });
} else {
    console.log(` * User ${session_data.getSessionData("subscriber_username")} is not authorized to POST misc files (e.g. Tellyscripts)`);
    headers = `403 Forbidden`;
}

data = ``;