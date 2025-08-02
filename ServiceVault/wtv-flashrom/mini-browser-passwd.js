var wtvrsvc_service_file = true;

const messages = [
        "Bzzzzt! Thank you for playing!",
        "WRONG!",
        "Try that again, homeslice.",
        "That is correct.  NOT!"
];

var randomMessage = messages[Math.floor(Math.random() * messages.length)];

// this serves as the means for entering codes in minibrowser to get access to certain pages
switch (request_headers.query.password) {
        case "gowebtv":
                goToTheDamnURL(`wtv-head-waiter:/login-stage-two?noupdate=true`); // log in as if we aren't in minibrowser
                break;
        case "touchwillie":
                goToTheDamnURL(`wtv-flashrom:/willie`); // go to willie's
                break;
        case "landline":
                goToTheDamnURL(`wtv-flashrom:/willie?label=LittleWillie`); //go to willie's flashrom restarter
                break;
        default:
                headers = `400 ${randomMessage}`; // wrong or none specified
}

function goToTheDamnURL(url) {
        if (url) headers = `302 Moved temporarily
Location: ${url}`;
        else headers = `400 ${randomMessage}`;
}