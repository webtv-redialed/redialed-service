var minisrv_service_file = true;

if (request_headers.query && session_data) {
    if (request_headers.query["wtv-black-text"]) {
        session_data.setSessionData("subscriber_print_black_text", true);
    } else {
        session_data.setSessionData("subscriber_print_black_text", false);
    }
    if (request_headers.query["wtv-print-headers"]) {
        session_data.setSessionData("subscriber_print_headers", true);
    } else {
        session_data.setSessionData("subscriber_print_headers", false);
    }
    if (request_headers.query["wtv-print-background-images"]) {
        session_data.setSessionData("subscriber_print_background_images", true);
    } else {
        session_data.setSessionData("subscriber_print_background_images", false);
    }
    if (request_headers.query["wtv-black-pen-installed"]) {
        session_data.setSessionData("subscriber_print_uses_black_pen", true);
    } else {
        session_data.setSessionData("subscriber_print_uses_black_pen", false);
    }
    session_data.saveSessionData();

    // generate printer setup value from sessionstore
    var printer_options = "";
    printer_options +=
        session_data.getSessionData("subscriber_print_black_text") == true
            ? "1,"
            : "0,";
    printer_options +=
        session_data.getSessionData("subscriber_print_headers") == true
            ? "1,"
            : "0,";
    printer_options +=
        session_data.getSessionData("subscriber_print_background_images") == true
            ? "1,"
            : "0,";
    printer_options +=
        session_data.getSessionData("subscriber_uses_black_pen") == true
            ? "1"
            : "0";
    headers = `302 Moved temporarily
wtv-expire: wtv-setup:/printer
Location: wtv-setup:/setup
wtv-printer-setup: ${printer_options}`;
} else {
    var outdata = doErrorPage();
    headers = outdata[0];
    data = outdata[1];
}
