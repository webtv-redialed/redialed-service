var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
wtv-encrypted: true
Expires: Wed, 09 Oct 1991 22:00:00 GMT
Content-Type: text/plain`;

const crypto = require("crypto");
var wtvMe = new WTVMessenger(wtvrsvc_config, SessionStore);
//const https = require("https");

const algorithm = "aes-256-ctr";
const secretKey = wtvMe.getMessengerLoginSecret();

const decrypt = (hash) => {
    const decipher = crypto.createDecipheriv(
        algorithm,
        secretKey,
        Buffer.from(hash.iv, "hex")
    );

    const decrpyted = Buffer.concat([
        decipher.update(Buffer.from(hash.content, "hex")),
        decipher.final(),
    ]);

    return decrpyted.toString();
};

var email =
    ssid_sessions[socket.ssid].getSessionData("messenger_email") +
    "%40" +
    ssid_sessions[socket.ssid].getSessionData("messenger_domain");
var password = decrypt(
    ssid_sessions[socket.ssid].getSessionData("messenger_password")
);
var challenge = request_headers.request.split("?")[1];
console.log(
    "HEY LOOK AT ME I'M AUTHENTICATING AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHLFJKHFJDSGHTRLY,FHVUTEOHLGURFJGFJKDHLGUITRHDLGIDLYH"
);

if (request_headers.request.split("?")[1].substring(0, 3) != "ct=") {
    console.log("Logging into Messenger via MSNP3");
    data = require("crypto")
        .createHash("md5")
        .update(request_headers.request.split("?")[1] + password)
        .digest("hex");
} else {
    const fetch = require("node-fetch");
    console.log("Logging into Messenger via MSNP8");
    request_is_async = true; // Make us async

    async function auth() {
        var response = await fetch(`https://ctas.login.ugnet.xyz/rdr/pprdr.asp`);
        var passporturls = response.headers
            .get("passporturls")
            .split("DALogin=")[1];
        var options = {
            method: "GET",
            headers: {
                Authorization:
                    "Passport1.4 OrgVerb=GET,OrgURL=http%3A%2F%2Fmessenger%2Emsn%2Ecom,sign-in=" +
                    email +
                    ",pwd=" +
                    encodeURIComponent(password) +
                    "," +
                    challenge,
            },
        };
        response = await fetch(passporturls, options);
        var pp = response.headers.get("authentication-info");
        pp = pp.split("from-PP='")[1];
        pp = pp.split("'")[0];
        return pp;
    }

    (async () => {
        let authdata = await auth();
        sendToClient(socket, headers, authdata);
    })();
}
