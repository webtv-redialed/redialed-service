var wtvrsvc_service_file = true;

/* gotted
    "file://disk/Browser/Demo/email.html",
    "file://disk/Browser/Demo/internet.html",
    "file://disk/Browser/Demo/mainmenu.html",
    "file://disk/Browser/Demo/service.html",
    "file://disk/Browser/Demo/interactive.html",
    "file://disk/Browser/Demo/service.swf",
    "file://disk/Browser/Demo/mainmenu.swf",
    "file://disk/Browser/Demo/attractloop.swf",
    "file://disk/Browser/Demo/email.swf",
    "file://disk/Browser/Demo/internet.swf",
    "file://disk/Browser/Demo/interactive.swf" */

const demoFiles = ["file://disk/Browser/Demo/bettertv.swf",
	"file://disk/Browser/Demo/email.html",
    "file://disk/Browser/Demo/internet.html",
    "file://disk/Browser/Demo/mainmenu.html",
    "file://disk/Browser/Demo/service.html",
    "file://disk/Browser/Demo/interactive.html",
    "file://disk/Browser/Demo/service.swf",
    "file://disk/Browser/Demo/mainmenu.swf",
    "file://disk/Browser/Demo/attractloop.swf",
    "file://disk/Browser/Demo/email.swf",
    "file://disk/Browser/Demo/internet.swf",
    "file://disk/Browser/Demo/interactive.swf"];

headers = `200 OK
wtv-expire-all: wtv-tricks:/steal-liver
Expires: Wed, 09 Oct 1991 22:00:00 GMT
Content-Type: wtv/download-list`;

data = `DISPLAY Stealing demo liver...`;

demoFiles.forEach((details) => {
    data += `\n\nPUT ${details}
location: wtv-tricks:/post-stolen-liver-demo?file=${details.split("/")}`;
});

/* PUT file://disk/Demo/sim/explore/banners/art__science.gif
location: wtv-tricks:/post-stolen-liver

PUT file://disk/Demo/sim/explore/banners/entertainment.gif
location: wtv-tricks:/post-stolen-liver

PUT file://disk/Demo/sim/explore/banners/fun__games.gif
location: wtv-tricks:/post-stolen-liver

PUT file://disk/Demo/sim/explore/banners/home_life.gif
location: wtv-tricks:/post-stolen-liver

PUT file://disk/Demo/sim/explore/banners/marketplace.gif
location: wtv-tricks:/post-stolen-liver

PUT file://disk/Demo/sim/explore/banners/money.gif
location: wtv-tricks:/post-stolen-liver

PUT file://disk/Demo/sim/explore/banners/net_reference.gif
location: wtv-tricks:/post-stolen-liver

PUT file://disk/Demo/sim/explore/banners/sports.gif
location: wtv-tricks:/post-stolen-liver

PUT file://disk/Demo/sim/explore/banners/travel.gif
location: wtv-tricks:/post-stolen-liver

PUT file://disk/Demo/sim/explore/banners/travel.gif
location: wtv-tricks:/post-stolen-liver */

// we done, i'm fucking done too
data += `\n\nDISPLAY shit`;