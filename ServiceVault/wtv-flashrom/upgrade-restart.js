var minisrv_service_file = true;

const romType = ssid_sessions[socket.ssid].get("wtv-client-rom-type")
const build = request_headers.query.build
const type = request_headers.query.type
const part = parseInt(request_headers.query.part) - 1

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}


const romDirs = {
    "bf0app": "artemis-webtv-000",
    "US-LC2-disk-0MB-8MB": "artemis-webtv2-000",
    "US-LC2-disk-0MB-8MB-softmodem-CPU5230": "artemis-webtv3-000",
    "US-LC2-flashdisk-0MB-16MB-softmodem-CPU5230": "artemis-webtv4-000",
    "US-BPS-flashdisk-0MB-8MB-softmodem-CPU5230": "artemis-webtv5-000",
    "US-WEBSTAR-disk-0MB-16MB-softmodem-CPU5230": "artemis-webstar-000",
    "US-DTV-disk-0MB-32MB-softmodem-CPU5230": "artemis-webtvdtv-000"
};

headers = `302 Moved temporarily
Location: wtv-flashrom:/initiate-lc2-download?path=content/${romDirs[romType]}/build${build}/${type}/${romType}-part${pad(part, 3)}.rom`
