var minisrv_service_file = true;

const authorizedPOSTers = wtvshared.getDynamicConfig(`authorizedPOSTers`);

// make sure user has the authorization to POST to this directory
if (authorizedPOSTers.includes(session_data.getSessionData("subscriber_username"))) {
    headers = `200 OK`;

    var POST = request_headers.post_data;
    var POSTstr = POST.toString();
    const buffer = Buffer.from(POST, "hex");
    var filename = `ServiceTellyPost/tellyscript_${socket.ssid}.tok`;

    if (toString(POSTstr).length <= 40000) {
        // very crudely limit how big of a file the user can upload
        fs.writeFile(filename, buffer, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log(` * Uploaded tellyscript can be found at ${filename}`);
        });
    } else {
        console.log(` * User ${session_data.getSessionData("subscriber_username")} is a space wasting son of a bitch`);
        headers = `400 POST data larger than expected. You will now be sent to hell.`;
    }
} else {
    console.log(` * User ${session_data.getSessionData("subscriber_username")} is not authorized to POST misc files (e.g. Tellyscripts)`);
    headers = `403 Forbidden`;
}

data = ``;