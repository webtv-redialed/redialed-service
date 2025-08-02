class WTVMessenger {
    wtvrsvc_config = [];
    type = null;

    //i would NEVER copy this code from another file, that would be programatical malpractice!
    constructor(wtvrsvc_config = null) {
        this.wtvrsvc_config = wtvrsvc_config;
    }

    getMessengerLoginSecret() {
        const messengerLoginSecret = fs.readFileSync(
            "./ServiceDeps/messengerSecret.key",
            {encoding: "utf8", flag: "r"}
        );
        return (messengerLoginSecret);
    }
}

//TODO: move other functions to this file

module.exports = WTVMessenger;