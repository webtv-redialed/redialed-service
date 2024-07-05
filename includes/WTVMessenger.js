class WTVMessenger {
    minisrv_config = [];
    type = null;

    //i would NEVER copy this code from another file, that would be programatical malpractice!
    constructor(minisrv_config = null) {
        this.minisrv_config = minisrv_config;
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