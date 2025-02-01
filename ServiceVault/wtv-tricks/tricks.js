var minisrv_service_file = true;

var date = new Date();
var month = parseInt(date.getMonth()) + 1;
var day = date.getDate();
var today = month + "/" + day;
var notAllowedMessage =
    "client:showalert?message=You%20are%20not%20allowed%20to%20access%20this%20area.";
var wtvt = new WTVTricks(minisrv_config);

const messages = [
    "And they said evolution's a myth",
    "Now with 10% less leaks!",
    "LC2.5 doesn't deserve this.",
    "At least it isn't WebTV Dreamcast",
    "Ask about our family discount!",
    "And it wouldn't be possible without soup",
    "Approved by Joe Britt",
    "<a href=client:poweroff>i power off yer box with my l33t hacking skillz!!!11!!!!1</a>",
    "But does it run Doom?",
    "Watch yourself on that fuse",
    "WebTV - The web browser that cares<br>April fools!",
    "Back for more, huh?",
    "Too bad your message light wasn't on",
    "If WebTV can survive USPS, it can survive anything",
    "We don't need IDE where we're going",
    "undefined",
    "Make sure you flash the correct build",
    "I can't believe it's not AOL TV!",
    "Good thing these boxes don't come with Maxtor drives",
    "Pineapple does not belong on the Solo chip",
    "$20 says you're using DreamPi",
    "Your Internet terminal is connecting to WebTV to check for the latest update.",
    "All time travel to the year 2038 is prohibited",
    "Campbell soup.",
    "WebTV watch",
    "MICROSOFT HAVE DETECTED VIRUS INFECTION<br>PLEASE CALL 1-800-469-3288",
    "This page is too big to be shown completely.",
    "Nice connection speed, grandpa",
    "<tt>wl#wo4kJAmiVjc<br>8qMAqyKG3NpLJu</tt>",
    "Mr. OnLive",
    "I'm going to 55325532 you so hard",
    "<embed src=sink.mp3 autostart=true> SINK RATE!",
    "WebTV is immune to cap issues",
    "WebTV - The toughest set-top box since 1992",
    "At least it's not Wiimmfi",
    "Snaking is not cheating.",
    "vaccums suck",
    "Exploit free for over 5 weeks",
    "click, click, click",
    "WebTV - The answer to life, the universe, and everything",
    "No Comment.",
    "The Philips box is scary",
    "The real Threadripper was the friends we made along the way",
    "Do not touch Willie",
    "The Flashrommer 5000 will be remembered",
    "SurfWatch has blocked access to the requested page.",
    "<b>SEVERE THUNDERSTORM WARNING</b>",
    "I am suffering from mental illinois",
    "Hey look, it's Mr. Doesn't Own An EchoStar",
    "Sent from my Verizon Wireless Droid",
    "hey you should cancel your spotify premium",
    "<a href=wtv-home:/content/index_shows.html>Access the super-ultra secret Weblitzer!!!!!!!</a>",
    "<b>GREETINGS, PROFESSOR " + session_data.getSessionData("subscriber_last_name").toUpperCase() + "</b>",
    "FIX ME HOOK HAT",
    "You call that knife? <b>This</b> is a knife:<br>https://aliexpress.us/item/3256802483880276.html",
    "<img src=images/autism.gif>",
    "This is the sign you've been looking for",
    "Hey Lois, I'm in wtv-tricks:/tricks",
    "<embed src=sounds/noway.mid autostart=true><marquee>GET BLUE SPHERES!</marquee>",
    "Let the record show that <a href='mailto:ultra0@WebTV?subject=you%20got%20a%20small%20microwave%20my%20guy'>ultra0</a> has a small microwave",
    "<a href='http://frogfind.com/?q=florida+man+" + month + "%2F" + day + "'>Florida is not real.</a>",
    "Brought to you by the letter T",
    "The Polyzoot admin command is not real",
    "Jarvis, set this guy's access number to 911",
    "Ran by the meanest sons of bitches in the state of Maryland"
];

var motd = messages[Math.floor(Math.random() * messages.length)];

if (today == "12/25") {
    motd = "<embed src=sounds/christmas.xm autostart=true> Merry Christmas!";
} else if (today == "10/31") {
    motd = "<embed src=sounds/adams.mid autostart=true> BOO!";
}

/*  even index placed at the left, odd gets placed on the right.
    remember that the index starts at 0 and not 1 and to include
    the high tricks pw as part of the URL **ONLY** when highOnly 
    is also included. additionally, the kinds of links we should 
    restrict are ones that could cause oddities, since webtv was
    designed on the principle that you can't break it by pushing 
    the wrong button, willie's being 1 exception. additionally, 
    16 options will fill the entire screen w/o the password box */

const theShit = [
    { name: "Info", url: `wtv-tricks:/info` },
    { name: "Run a WWW Tour", url: `wtv-home:/content/tourist.html` },
    //{ name: "Visit the Name Changer&#153;", url: `wtv-tricks:/namechange?password=${wtvt.getPasswordByType("high")}`, highOnly: true },
    { name: "Visit Big Willie's!", url: `client:showalert?message=Only%20proceed%20to%20this%20page%20if%20you%20are%20%3Cb%3EABSOLUTEY%20%3C%2Fb%3Esure%20you%20know%20what%20you%20are%20doing.%3Cbr%3E%3Cbr%3E%20You%20can%20cause%20serious%20damage%20to%20and%20even%20brick%20your%20receiver%20if%20you%20aren%27t%20careful.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Proceed to Big Willie's&buttonAction2=wtv-flashrom:/willie` },
    { name: "Server Switcher 9000", url: `wtv-tricks:/switcher` },
    { name: "Blast Backlist", url: `wtv-tricks:/blastbacklist` },
    { name: "Visit Little Willie's!", url: `wtv-flashrom:/willie?label=LittleWillie` },
    { name: "Blast NVRAM", url: `client:ResetNVAndPowerOff`, highOnly: true },
    { name: "Smart Card Factory", url: `wtv-smartcard:/content/scf.html` },
    { name: "Unregister This Box", url: `client:showalert?message=You%20are%20about%20to%20%3Cb%3Eunregister%20this%20box.%3C%2Fb%3E%3Cp%3E%0AThe%20next%20person%20to%20use%20this%20box%20will%20have%20to%20sign%20up.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Unregister&buttonAction2=wtv-head-waiter:/unregister`, highOnly: true },
    { name: "Get Debuggin'!", url: `wtv-tricks:/debugging?password=${wtvt.getPasswordByType("high")}`, highOnly: true },
    { name: "Stayin' Alive", url: `wtv-tricks:/stayconnected` },
    { name: "Download-o-Rama", url: `wtv-disk:/content/Downloads.tmpl` },
    { name: "Show Services", url: `client:showservices` },
    { name: "Show Cookies", url: `wtv-cookie:/list` },
    { name: "URL Accessor", url: `wtv-tricks:/url?password=${wtvt.getPasswordByType("high")}`, highOnly: true },
    { name: "Rare Retro Gaming", url: `wtv-tricks:/gaming` }
];
//i'm sorry
headers = `200 OK
Content-Type: text/html`;

data = `<html><head>
</head>
<display nosave nosend>
<title>WebTV Tricks</title>
<sidebar width=20%>
<img 
src="wtv-tricks:/images/Favorites_bg.jpg">
</sidebar>
<body bgcolor="#191919" text="#44cc55" 
link="36d5ff" vlink="36d5ff" vspace=0>


<br>
<br>
<h1>WebTV Tricks</h1>
<br>
<table>
<tr>
<i>
${motd}
</i>`;
    //overengineering time
    let sentence = "";

    theShit.forEach((details, index) => {
        if ((index & 1) === 0) {
            sentence += `<tr>
<td colspan=3 height=6>
<tr>
<td><a 
href="${details.highOnly && request_headers.query.password !== wtvt.getPasswordByType("high") ? notAllowedMessage : details.url}">${details.name}</a>`;
        } else {
            sentence += `<td width = 25>
<td><a 
href="${details.highOnly && request_headers.query.password !== wtvt.getPasswordByType("high") ? notAllowedMessage : details.url}">${details.name}</a>`;
        }
        if (index !== Object.keys(theShit).length - 1) sentence += `\n`; //make sure we don't newline right before the end of the table
    });

    data += `
${sentence}
</table>
<br>
<br>`
    // TODO: proper error handling
    if (request_headers.query.password !== wtvt.getPasswordByType("high")) {
        data += `
<table width=100%>
<TD VALIGN=top ALIGN=left>
Enter a password for greater access:
<tr>
<TD ALIGN=left>
<img src="/ROMCache/Spacer.gif" height=12>
<form action="wtv-tricks:/tricks">
<input name="password" id="password" bgcolor="#444444" text="#ffdd33" cursor="#cc9933" value="" type="password" size="16" maxlength="16" autocomplete="off">
</form>
</table>`;
    }
    data += `
      </body>
</html>`;
