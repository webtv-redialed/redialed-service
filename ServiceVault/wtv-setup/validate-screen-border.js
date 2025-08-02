var wtvrsvc_service_file = true;

if (request_headers.query) {
    if (request_headers.query.shade) {
        session_data.setSessionData(
            "screen-border-shade",
            request_headers.query.shade
        );
        session_data.saveSessionData();
        headers = `302 Moved temporarily
wtv-expire: wtv-setup:/screen-border
Location: wtv-setup:/screen
wtv-visit: client:setscreenborder?shade=${request_headers.query.shade}`;
    } else {
        var errpage = wtvshared.doErrorPage(400);
        headers = errpage[0];
        data = errpage[1];
    }
} else {
    var errpage = wtvshared.doErrorPage(400);
    headers = errpage[0];
    data = errpage[1];
}
