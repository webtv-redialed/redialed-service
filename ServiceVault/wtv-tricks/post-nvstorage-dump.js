var wtvrsvc_service_file = true;

var POST = request_headers.post_data;
const buffer = Buffer.from(POST, "hex");
var filename = "ServiceNVPost/nvram_" + socket.ssid + ".bin";

fs.writeFile(filename, buffer, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("NVRAM saved to " + filename);
});

headers = `200 OK`;