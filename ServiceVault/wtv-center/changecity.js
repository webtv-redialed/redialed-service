var wtvrsvc_service_file = true;

try {
    const {
        getByStateCity,
        getByCityState,
        getByZip,
        zipLookAhead,
        cityLookAhead,
        stateLookAhead,
    } = require("zcs");
    var cityZIP = getByZip(request_headers.query.newchoice);
    var cityname = cityZIP.city;
    // save any data that changed
    session_data.setSessionData(
        "subscriber_zip_code",
        request_headers.query.newchoice
    );
    session_data.saveSessionData();

    // make sure you expire all pages that show weather info, or the user will still be shown the old city, which is not cool
    headers = `302 Moved temporarily
Content-type: text/html
wtv-expire-all: wtv-center:/center
wtv-expire-all: wtv-center:/custom-info-teaser
wtv-expire: wtv-home:/community
Location: ${request_headers.query.redirect}`;
} catch (error) {
	console.log(error)
    headers =
        "500 That ZIP code was not recognized. Please check it and try again.";
}
