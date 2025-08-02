class WTVTricks {
    wtvrsvc_config = [];
    type = null;

    //i would NEVER copy this code from another file, that would be programatical malpractice!
    constructor(wtvrsvc_config = null) {
        this.wtvrsvc_config = wtvrsvc_config;
    }

    getPasswordByType(type) {
        if ((type == "high" && this.wtvrsvc_config.services["wtv-tricks"].password_high) || this.wtvrsvc_config.config.serviceType == "Debug") {
            return this.wtvrsvc_config.services["wtv-tricks"].password_high;
        } else {
            throw ` * Tricks password type "${type}" not known or undefined in config, THIS IS BAD!`; // password type not known, should not reach this code
        }
    }

    // yea this sucks but it's better than repeating the HTML all over again, just ask our friend Michael Huntington
    highTricksUnauthorized() {
        return `<html><head></head><body vspace="0" vlink="36d5ff" text="#44cc55" link="36d5ff" bgcolor="#191919"><label nicetry="">
<display nosave="" nosend="" skipback="">
<title>Tricks and Traps</title>

<sidebar width="20%">
		<img src="images/About_bg.jpg">
</sidebar>

<!-- Keep your filthy word-smithing mitts off my template -->


<br>
<br>
<br>
<h1>Tricks and Traps</h1>

<br>
<br>
<p>
Your attempt to subvert security has been recorded.  Please stay where
you are.  Someone will come by to pick you up.
</p><p>
If you aren't supposed to have access to these pages, this would be
a fine time to stop trying.
</p><p>
Remember, the computer is your friend!

</p></display></label></body></html>`;
    }
}

module.exports = WTVTricks;
