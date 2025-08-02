var wtvrsvc_service_file = true;
var gourl = null;
const fetch = require("node-fetch");
const timeInterpreter = require("@onereach/time-interpreter");
const converter = new timeInterpreter();

request_is_async = true; // Make us async

// Get the user's time zone from IP geolocation since we don't have ANI or the user's billing address
async function getTimezone() {
    // proper error handling is for bitches
    try {
        const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${wtvrsvc_config.config.geolocationApiKey}&ip=${socket.remoteAddress}&fields=time_zone`);
        const locdata = await response.json();
        if (locdata.time_zone) {
            return locdata.time_zone.offset_with_dst;
        } else if (locdata.message == "Provided API key is not valid. Contact technical support for assistance at support@ipgeolocation.io") {
            console.log(" # Geolocation API key expired, shit's fucked")
            return "-0";
        } else {
            console.log(" # I think shit might be fucked, check login-stage-two")
            return "-0";
        }
    } catch (e) {
        console.log(" # I think shit might be fucked, check login-stage-two", e)
        return "-0";
    }
}

function doShit(timezone) {
    if (session_data.isRegistered())
        var accounts = session_data.listPrimaryAccountUsers();

    // Take unregistered users to registration
    if (!session_data.isRegistered())
        gourl = "wtv-register:/splash?";
    var home_url = "wtv-home:/home?";

    // On the real service, message check also occurs during datadownload, we currently have nothing for users to download
    if (request_headers.query.MessageWatch || request_headers.query.DataDownload == 1) {
        var mailcount = ssid_sessions[socket.ssid].getAccountTotalUnreadMessages();
        console.log(`Box is making MessageWatch/DataDownload request. All of their accounts in total have ${mailcount} message(s).`);
        headers = `200 OK
Connection: Keep-Alive
wtv-encrypted: true
wtv-country: US
wtv-language-header: en-US,en
wtv-${request_headers.query.MessageWatch ? "messagewatch" : "datadownload"}-checktimeoffset: off
wtv-boot-message-led-state: ${mailcount != 0 ? "on" : "off"}
wtv-visit: client:hangupphone`;
        data = '<meta http-equiv="refresh" content="1;URL=client:hangupphone" />'; //yes hangupphone really does need HTML to actually do it on some clients.
    } else if (gourl) {
        headers = `200 OK
wtv-open-isp-disabled: false
`;
        if (!session_data.isRegistered()) {
            headers += `wtv-encrypted: true
${getServiceString("wtv-register")}
${getServiceString("wtv-head-waiter")}
${getServiceString("wtv-star")}
wtv-boot-url: wtv-head-waiter:/relogin?
`;
        }
        headers += `wtv-visit: ${gourl}
Content-type: text/html`;
        data = "";
    } else {
        if (session_data.lockdown) {
            home_url = wtvrsvc_config.config.unauthorized_url;
        } else if (!session_data.getSessionData("registered")) {
            var errpage = wtvshared.doErrorPage(400);
            headers = errpage[0];
            data = errpage[1];
        } else { // where shit happens
            var userid = session_data.getSessionData("subscriber_userid");
            var nickname = session_data.getSessionData("subscriber_username");
            var human_name = session_data.getSessionData("subscriber_name") || nickname;
            var messenger_enabled = session_data.getSessionData("messenger_enabled") || 0;
            var messenger_authorized = session_data.getSessionData("messenger_authorized") || 1;
            var messenger_email = session_data.getSessionData("messenger_email");
            // generate printer setup value from sessionstore
            var printer_options = "";
            printer_options += session_data.getSessionData("subscriber_print_black_text") == true ? "1," : "0,";
            printer_options += session_data.getSessionData("subscriber_print_headers") == true ? "1," : "0,";
            printer_options += session_data.getSessionData("subscriber_print_background_images") == true ? "1," : "0,";
            printer_options += session_data.getSessionData("subscriber_uses_black_pen") == true ? "1" : "0";
            // Prompt for an upgrade on LC2 since everything else released with a half decent upgrade apart from bf0 which we can't upgrade
            // TODO: perhaps change this to only occur if no etude
            if (session_data.get("wtv-system-version") < 3454 && session_data.get("wtv-client-rom-type") == "US-LC2-disk-0MB-8MB" && !request_headers.query.noupdate) var gourl = "wtv-flashrom:/ask-for-upgrade?fromheadwaiter=true";
            else var gourl = "wtv-home:/splash?";
        }
        var limitedLogin = session_data.lockdown;
        var limitedLoginRegistered =
            limitedLogin ||
            (session_data.isRegistered() &&
                !session_data.isUserLoggedIn() &&
                session_data.getUserPasswordEnabled());
        if (!session_data.getUserPasswordEnabled())
            session_data.setUserLoggedIn(true);
        var offline_user_list = null;
        if (session_data.isRegistered()) {
            // check for SMTP Password
            if (session_data.getSessionData("subscriber_smtp_password") === null) {
                session_data.setUserSMTPPassword(wtvshared.generatePassword(16));
            }
            if (session_data.user_id == 0) {
                var accounts = session_data.listPrimaryAccountUsers();
                var num_accounts = session_data.getNumberOfUserAccounts();
                var offline_user_list_str = "<user-list>\n";
                var i = 0;
                Object.keys(accounts).forEach((k) => {
                    var account_display_name = accounts[k].subscriber_name
                        ? accounts[k].subscriber_name
                        : accounts[k].subscriber_username;
                    offline_user_list_str +=
                        "\t" +
                        '<user userid="' +
                        i +
                        '" user-name="' +
                        accounts[k].subscriber_username +
                        '" first-name="' +
                        account_display_name +
                        '"  last-name="" passsword="" mail-enabled=true />' +
                        "\n";
                    i++;
                });
                offline_user_list_str += "</user-list>\n";
                offline_user_list = CryptoJS.enc.Latin1.parse(
                    offline_user_list_str
                ).toString(CryptoJS.enc.Base64);
            }
        }

        // Handle users with password
        if (limitedLoginRegistered) {
            home_url = "wtv-head-waiter:/password?";
            gourl = home_url;
        }

        data = "";

        headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-head-waiter:
`;
        // strftime fucking sucks, this gives us UTC time because it's impossible to even conceptualize a world where date.UTC works properly
        var WORKGODDAMMIT = strftime.timezone("-0000");

        // what the fuck this is presentable now???
        var offset;
        try {
            offset = timezone ? converter.formatTimezone(timezone.toString()).replaceAll(":", "") : "+0000"
        } catch (e) {
            console.log(" # shit's on fire yo: " + e)
            offset = "+0000"
        }

        // Handle a registered user
        if (!limitedLogin && !limitedLoginRegistered) {
            headers += `wtv-client-time-zone: GMT ${offset}
wtv-client-time-dst-rule: GMT
wtv-client-date: ${WORKGODDAMMIT("%a, %d %b %Y %H:%M:%S", new Date(new Date().setHours(new Date().getHours())))} GMT
wtv-country: US
wtv-language-header: en-US,en
wtv-noback-all: wtv-
wtv-visit: client:closeallpanels
wtv-expire-all: client:closeallpanels
wtv-transition-override: off
wtv-smartcard-inserted-message: Contacting service
wtv-smartcard-inserted-url: wtv-smartcard:/insert
wtv-smartcard-removed-url: wtv-smartcard:/remove
wtv-addresses-url: wtv-mail:/addresslist
wtv-ssl-timeout: 240
wtv-login-timeout: 7200
`;
            if (!limitedLogin && !limitedLoginRegistered) {
                session_data.assignMailStore();
                headers += getServiceString("all", { exceptions: ["wtv-register"] });
                if (offline_user_list)
                    headers += "wtv-offline-user-list: " + offline_user_list + "\n";
                headers += `wtv-messenger-authorized: ${messenger_authorized}
wtv-messenger-enable: ${messenger_enabled}
wtv-messenger-login-url: wtv-passport:/messengerlogin
wtv-messenger-server: ${session_data.getSessionData("messenger_server")}
wtv-messenger-connect-timeout: 240
wtv-messenger-retry-interval: 20
wtv-messenger-passportd-timeout: 240
wtv-messenger-open-conversation-timeout: 240
wtv-user-name: ${session_data.getSessionData("messenger_email")}
`;
            } else {
                headers += getServiceString("wtv-1800") + "\n";
                headers += getServiceString("wtv-head-waiter") + "\n";
                headers += getServiceString("wtv-log") + "\n";
                headers += getServiceString("wtv-star") + "\n";
                headers += getServiceString("wtv-flashrom") + "\n";
                headers += getServiceString("wtv-content") + "\n";
                headers += `wtv-messenger-authorized: 0
wtv-messenger-enable: 0
`;
            }

            // TODO: phone log
            headers += `wtv-log-url: wtv-log:/log
wtv-ssl-log-url: wtv-log:/log
wtv-print-log-url: wtv-log:/log
`;

            if (!limitedLogin && !limitedLoginRegistered) {
                headers += `wtv-bypass-proxy: false
user-id: ${userid}
wtv-human-name: ${human_name}
${session_data.setIRCNick(nickname)}
wtv-domain: ${session_data.getSessionData("messenger_domain")}
passport-domain: ${session_data.getSessionData("messenger_domain")}
wtv-mail-url: wtv-mail:/listmail
wtv-favorite-url: wtv-favorite:/favorite
wtv-search-url: wtv-center:/search-page
wtv-printer-model: 4,0
wtv-printer-setup: ${printer_options}
wtv-offline-mail-enable: true
wtv-messagewatch-checktimeoffset: ${accounts.subscriber["messagewatch-offset"] || "off"}
wtv-messagewatch-url: wtv-head-waiter:/login-stage-two?MessageWatch=1
wtv-datadownload-url: wtv-disk:/download-list
wtv-datadownload-login-url: wtv-head-waiter:/login-stage-two?DataDownload=1
wtv-favorites-folders-url: wtv-favorite:/list-folders
wtv-input-timeout: 600
wtv-connection-timeout: 1440
wtv-fader-timeout: 900
wtv-inactive-timeout: 0
`;
            }
            /*
              else {
                  headers += `wtv-bypass-proxy: true
          user-id: 0
          wtv-human-name: Unauthorized User
          wtv-domain: ${wtvrsvc_config.config.domain_name}
          wtv-input-timeout: 30
          wtv-connection-timeout: 60
          wtv-fader-timeout: 60
          wtv-inactive-timeout: 60`;
              }
              */

            if (!limitedLogin && !limitedLoginRegistered) {
                headers += "\nwtv-relogin-url: wtv-head-waiter:/relogin?relogin=true";

                headers += "\nwtv-reconnect-url: wtv-head-waiter:/login-stage-two?reconnect=true";

                headers += "\nwtv-boot-url: wtv-head-waiter:/relogin?relogin=true";
                headers += "\nwtv-home-url: " + home_url;
            }

            if (session_data.get("wtv-need-upgrade") != "true" && !request_headers.query.reconnect && !limitedLogin && !limitedLoginRegistered) // Give settings URL if appropriate
                headers += "\nwtv-settings-url: wtv-setup:/get\n";

            if (!limitedLogin && !limitedLoginRegistered) {
                headers += `wtv-force-lightweight-targets: webtv.net:/
wtv-show-time-enabled: true
wtv-allow-dsc: true
wtv-tourist-enabled: true
wtv-open-isp-disabled: false
wtv-demo-mode: 0
wtv-wink-deferrer-retries: 3
wtv-name-server: 8.8.8.8`;
            }
        }
        if (!request_headers.query.reconnect) headers += "\nwtv-visit: " + gourl;
        headers += "\nContent-Type: text/html";
    }
    return headers;
}

(async () => {
    let timezone = await getTimezone();
    sendToClient(socket, doShit(timezone), "");
})();
