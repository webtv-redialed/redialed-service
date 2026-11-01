var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

var ssid = ssid_sessions[socket.ssid].get("wtv-client-serial-number");
var romType = ssid_sessions[socket.ssid].get("wtv-client-rom-type");
var wtvr = new WTVRegister(minisrv_config, SessionStore);
var canRegister = wtvr.checkDoorsOpen(ssid);
var brand = session_data.getManufacturer();

// Correct paths for clients that shipped with different peripherals under the same brand
if (brand == "Philips" && ssid_sessions[socket.ssid].hasCap("client-has-tuner")) {
    brand = "Philips-Plus";
} else if (brand == "Sony" && romType == "US-DTV-disk-0MB-32MB-softmodem-CPU5230") {
    brand = "Sony/DirecTV";
} else if (brand == "Thomson" && romType == "US-DTV-disk-0MB-32MB-softmodem-CPU5230") {
    brand = "Thomson/DirecTV";
}

// see whether or not the folder for the button images exists for the given brand
try {
    if (!fs.existsSync(`./ServiceVault/wtv-register/images/${brand}`)) {
        console.log(`* Couldn't find button images for ${brand}, sticking with defaults.`)
        brand = "WebTV";
    }
} catch (e) {
    console.log(" # Brand ID code did a bad, should never reach here");
}

const formItems = [
    { name: "brand", value: brand },
    { name: "subscriber-sex", value: "not likely" }
]

data = engine.renderFileSync('wtv-register/intro', { formItems, canRegister })