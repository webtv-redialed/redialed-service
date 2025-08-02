var wtvrsvc_service_file = true;

headers = `400 tough luck, try again never`;

/* var wtvt = new WTVTricks(wtvrsvc_config);

// TODO: make this not broken
const WTVRegister = require("./WTVRegister.js");
var wtvr = new WTVRegister(wtvrsvc_config, SessionStore);

const nonoWords = wtvshared.getDynamicConfig(`nonoWords`);
var lowerusername = request_headers.query.subscriber_username.toLowerCase();
var lowerircname = request_headers.query.subscriber_irc.toLowerCase();

// TODO: add a reserved check. probably not necessary because this is only meant to be accessed by those with the highest level password
if (!request_headers.query.subscriber_username)
    errpage = wtvshared.doErrorPage(
        400,
        "You cannot make your Internet name blank."
    );
else if (!request_headers.query.subscriber_irc)
    errpage = wtvshared.doErrorPage(400, "You cannot make your IRC name blank.");
else if (nonoWords.some((v) => lowerusername.includes(v)))
    errpage = wtvshared.doErrorPage(
        400,
        "Your Internet Name contains a bad word. Please change it and try again."
    );
else if (nonoWords.some((v) => lowerircname.includes(v)))
    errpage = wtvshared.doErrorPage(
        400,
        "Your IRC Name contains a bad word. Please change it and try again."
    );
else if (!wtvr.checkUsernameSanity(request_headers.query.subscriber_username))
    errpage = wtvshared.doErrorPage(
        400,
        "You can only use letters, numbers, hyphens, and underscores in your Internet Name. It must also begin with a letter."
    );
else if (!wtvr.checkUsernameSanity(request_headers.query.subscriber_irc))
    errpage = wtvshared.doErrorPage(
        400,
        "You can only use letters, numbers, hyphens, and underscores in your Internet Name. It must also begin with a letter."
    );
else if (
    !wtvr.checkUsernameAvailable(
        request_headers.query.subscriber_username,
        ssid_sessions
    )
)
    errpage = wtvshared.doErrorPage(
        400,
        "That Internet Name is already in use. Please choose another one."
    );
else {
    session_data.setSessionData(
        "subscriber_irc_nick",
        request_headers.query.subscriber_irc
    );
    session_data.setSessionData(
        "subscriber_username",
        request_headers.query.subscriber_username
    );
}

headers = `302 Moved temporarily
wtv-expire: wtv-tricks:/namechange
Location: wtv-tricks:/tricks-passwd?password=${wtvt.getPasswordByType("high")}`; */