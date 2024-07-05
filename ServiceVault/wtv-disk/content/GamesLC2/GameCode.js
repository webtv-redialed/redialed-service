function docSearch() {
    var a = document.location;
    var questionIndex = a.indexOf("?");
    if (questionIndex > 0) {
        var search = a.substring(questionIndex, a.length);
        return search;
    }
    return "";
}

function go(a) {
    var target = a + docSearch();
    document.location = target;
}

function getProp(name, defaultValue) {
    var a = docSearch();
    var val = defaultValue;
    if (a != null) {
        var ni = a.indexOf(name + "=");
        if (ni >= 0) {
            var start = a.indexOf("=", ni) + 1;
            var end = a.indexOf("&", start);
            if (0 > end) {
                end = a.length;
            }
            val = a.substring(start, end);
        }
    }
    return val;
}

function jackRatingClickDone() {
    var anchor = getProp("JackRatingAnchor", null);
    var target = getProp("JackRatingTarget", "");
    if (anchor != null) {
        target = target + "#" + anchor;
    }
    document.location = target;
}

function doomRatingClickDone() {
    go(getProp("DoomRatingTarget", ""));
}

function playDoom() {
    if (navigator.isDebugBuild == true) {
        document.location = "client:boota?partition=DoomROM&amp;size=5242880&amp;source=file://disk/Doom/approm.o&amp;onfail=file://Disk/Browser/Games/bootfail.html";
    } else {
        document.location = "client:boota?partition=DoomROM&amp;size=5242880&amp;source=file://disk/Doom/approm.o&amp;onfail=file://Disk/Browser/Games/bootfail.html";
    }
}


function playJack() {
    if (navigator.isDebugBuild == true) {
        document.location = "client:boota?partition=JackROM&amp;size=5242880&amp;source=file://disk/Jack2/approm.o&amp;onfail=file://Disk/Browser/Games/bootfail.html";
    } else {
        document.location = "client:boota?partition=JackROM&amp;size=5242880&amp;source=file://disk/Jack2/approm.o&amp;onfail=file://Disk/Browser/Games/bootfail.html";
    }
}


function playSolitaire() {
    if (navigator.isDebugBuild == true) {
        document.location = "client:boota?args=-solitaire&partition=DoomROMD&size=5242880&source=file://disk/Doom/appromESD.o&onfail=file://Disk/Browser/Games/bootfail.html";
    } else {
        document.location = "client:boota?args=-solitaire&partition=DoomROM&size=5242880&source=file://disk/Doom/appromES.o&onfail=file://Disk/Browser/Games/bootfail.html";
    }
}

function esrbRatingCurrentlyAllowed(level) {
    // Must match logic in setup-locks.html
    if (TVAccess.getCurrentGamesLocked()) {
        return false;
    }
    var limit = TVAccess.getCurrentESRBRatingLimit();
    if (limit == -1 || limit > level) {
        return true;
    }
    return false;
}
