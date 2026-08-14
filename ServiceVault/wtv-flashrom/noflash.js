var minisrv_service_file = true;

const WTVFlashrom = require(classPath + "/WTVFlashrom.js");
request_is_async = true;

// this build can be local or on zefie's server
// to get the path from zefie's server, browse
// https://archive.midnightchannel.net/zefie/files/wtv-flashrom/content/artemis-webtv-000/
// and put everything from 'content/' onwards, including the part000.rom filename
// example is below
var default_build_to_send = minisrv_config.services[serviceName].bf0appDefaultRom || "content/artemis-webtv-000/build1235/external-nondebug/bf0app-part000.rom";

var request_path = "";
var bf0app_update = true;
if (request_headers.query.path) request_path = request_headers.query.path;
else request_path = default_build_to_send;

if (
    session_data.get("wtv-client-rom-type") == "bf0app" &&
    session_data.get("wtv-client-bootrom-version") == "105"
) {
    // assume old classic in flash mode, override user setting and send tellyscript
    // because it is required to proceed in flash mode
    bf0app_update = true;
    session_data.set("bf0app_update", bf0app_update);
}

if (!session_data.data_store.WTVFlashrom) {
    session_data.data_store.WTVFlashrom = new WTVFlashrom(
        minisrv_config,
        service_vaults,
        serviceName,
        0,
        minisrv_config.services[serviceName].useZefieServer,
        bf0app_update,
        minisrv_config.services[serviceName].debug
    );
}

session_data.data_store.WTVFlashrom.getFlashRom(
    request_path,
    function (data, headers) {
        sendToClient(socket, headers, data);
    }
);
