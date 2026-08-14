class WTVRegister {
    fs = require("fs");
    path = require("path");
    minisrv_config = [];
    session_store_dir = null;

    constructor(minisrv_config, session_store_dir = null) {
        this.minisrv_config = minisrv_config;
        this.session_store_dir =
            session_store_dir || this.minisrv_config.config.SessionStore;
        var WTVShared = require("./WTVShared.js")["WTVShared"];
        this.wtvshared = new WTVShared(minisrv_config);
    }

    checkUsernameSanity(username) {
        var regex_str =
            "^([A-Za-z0-9-_]{" +
            this.minisrv_config.config.userAccounts.minUsernameLength +
            "," +
            this.minisrv_config.config.userAccounts.maxUsernameLength +
            "})$";
        var regex = new RegExp(regex_str);
        return regex.test(username);
    }

    checkDoorsOpen(ssid) {
        // Check whether this service is open for registrations and if an exception has been made for the user
        return (!this.minisrv_config.services["wtv-register"].doorsOpen && !this.minisrv_config.services["wtv-register"].doorsOpenTo.includes(ssid) ? false : true);
    }

    checkUsernameAvailable(username, directory = null) {
        var self = this;
        var return_val = false;
        // returns the user's ssid, and user_id and userid in an array if true, false if not

        if (return_val) return !return_val;

        // check against user accounts
        directory = directory
            ? directory
            : this.session_store_dir + this.path.sep + "accounts";

        if (this.fs.existsSync(directory)) {
            this.fs.readdirSync(directory).forEach((file) => {
                if (
                    self.fs.lstatSync(directory + self.path.sep + file).isDirectory() &&
                    !return_val
                ) {
                    return_val = !self.checkUsernameAvailable(
                        username,
                        directory + self.path.sep + file
                    );
                }
                if (!file.match(/user.*\.json/gi)) return;
                try {
                    var temp_session_data_file = self.fs.readFileSync(
                        directory + self.path.sep + file,
                        "Utf8"
                    );
                    var temp_session_data = JSON.parse(temp_session_data_file);
                    if (temp_session_data.subscriber_username) {
                        if (
                            temp_session_data.subscriber_username.toLowerCase() ==
                            username.toLowerCase()
                        ) {
                            return_val = true;
                        }
                    }
                } catch (e) {
                    console.error(
                        " # Error parsing Session Data JSON",
                        search_dir + self.path.sep + file,
                        e
                    );
                }
            });
        }
        return !return_val;
    }

    // this function only produces a response when there is a problem with the username
    checkUserNameOk(username) {
        if (!username)
            return this.wtvshared.doErrorPage(400, "You must choose an Internet Name.");
        else if (this.wtvshared.getDynamicConfig('nonoWords').some((v) => username.match(new RegExp(v, "ig"))))
            return this.wtvshared.doErrorPage(400, "Your Internet Name contains a bad word. Please change it and try again.");
        else if (this.wtvshared.getDynamicConfig('reservedWords').some((v) => username.match(new RegExp(v, "ig"))))
            return this.wtvshared.doErrorPage(400, "That Internet Name is reserved. Please choose another one.");
        else if (username.length < 5)
            return this.wtvshared.doErrorPage(400, "Please choose an Internet name with 5 or more characters.");
        else if (username.length > 16)
            return this.wtvshared.doErrorPage(400, "Please choose an Internet Name with 16 or less characters.");
        else if (!this.checkUsernameSanity(username))
            return this.wtvshared.doErrorPage(400, "You can only use letters, numbers, hyphens, and underscores in your Internet Name. It must also begin with a letter.");
        else if (!this.checkUsernameAvailable(username))
            return this.wtvshared.doErrorPage(400, "That Internet Name is already in use. Please choose another one.");
    }

    // this function only produces a response when there is a problem with the password
    checkPasswordOk(password, password2) {
        if (password) {
            if (password.length < this.minisrv_config.config.passwords.minLength)
                return this.wtvshared.doErrorPage(400, "Your password must contain at least " + this.minisrv_config.config.passwords.minLength + " characters.");
            else if (password.length > this.minisrv_config.config.passwords.maxLength)
                return this.wtvshared.doErrorPage(400, "Your password must contain no more than than " + this.minisrv_config.config.passwords.maxLength + " characters.");
            else if (password !== password2)
                return this.wtvshared.doErrorPage(400, "The passwords you entered did not match. Please check them and try again.");
        }
    }
}

module.exports = WTVRegister;
