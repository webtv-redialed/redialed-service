var minisrv_service_file = true;

// TODO: this doesn't account for nonexistent flashrom images. flashrom probably needs a serious rewrite

const WTVFlashrom = require(classPath + "/WTVFlashrom.js");
request_is_async = true;

var bf0app_update = false;
var request_path = request_headers.query.path;
var romtype = session_data.get("wtv-client-rom-type");
var bootver = session_data.get("wtv-client-bootrom-version");

if ((romtype == "bf0app" || !romtype) && (bootver == "105" || !bootver)) {
    // assume old classic in flash mode, override user setting and send tellyscript
    // because it is required to proceed in flash mode
    bf0app_update = true;
    session_data.set("bf0app_update", bf0app_update);
}

if (request_headers.query.raw || bf0app_update) {
    if (!session_data.data_store.WTVFlashrom) {
        session_data.data_store.WTVFlashrom = new WTVFlashrom(
            minisrv_config,
            service_vaults,
            serviceName,
            minisrv_config.services[serviceName].useZefieServer,
            bf0app_update
        );
    }

    session_data.data_store.WTVFlashrom.getFlashRom(
        request_path,
        function (data, headers) {
            sendToClient(socket, headers, data);
        }
    );
} else {
    if (request_headers.query.path) {
        headers = "200 OK\n";
        headers +=
            "wtv-visit: " +
            serviceName +
            ":/initiate-lc2-download?path=" +
            request_headers.query.path +
            "\n";
        headers += "Content-type: text/html";
        data = "";
    } else {
        var errpage = wtvshared.doErrorPage(404);
        headers = errpage[0];
        data = errpage[1];
    }
    sendToClient(socket, headers, data);
}
