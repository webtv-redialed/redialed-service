var minisrv_service_file = true;

if (session_data.getSessionData("infocenter_cache") == null) {
    var object = new Object()
    session_data.setSessionData("infocenter_cache", object);
    session_data.saveSessionData();
}

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`

request_is_async = true; // Make us async

const Parser = require('rss-parser');

let parser = new Parser();

async function loadNewsRssData() {
    if (session_data.getSessionData("infocenter_cache").newsHeadlines == null) {
        var cache = new Object();

        Object.assign(cache, session_data.getSessionData("infocenter_cache"));

        cache.newsHeadlines = {
            "data": "You shouldn't be seeing this, either stop looking in peoples sessionstore or report this as a bug if you're a user",
            "time": 0
        }
        session_data.setSessionData("infocenter_cache", cache);
        session_data.saveSessionData();
    }

// Grab data from NYT's RSS feed, then format it for the page
    try {
        if (parseInt(session_data.getSessionData("infocenter_cache").newsHeadlines.time) + 10800 >= Math.floor(Date.now() / 1000)) {
            console.log("* Using cached news headlines")
            return session_data.getSessionData("infocenter_cache").newsHeadlines.data
        } else {
            console.log("* Using new news headlines")
            let feed = await parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/World.xml');

            var currentData = feed.items.slice(0, 3).map(function (item) {
                return {
                    title: item.title.replace(/’|‘/g, "'").replace(/“|”/g, '"').replace(/—/g, '-').replace(/ /gi, ' '),
                    link: "http://frogfind.com/read.php?a=" + item.link,
                    content: item.content.replace(/’|‘/g, "'").replace(/“|”/g, '"').replace(/—/g, '-').replace(/ /gi, ' ')
                }
            });

            var cache = new Object();

            Object.assign(cache, session_data.getSessionData("infocenter_cache"));

            cache.newsHeadlines = {
                "data": currentData,
                "time": Math.floor(Date.now() / 1000)
            }
            session_data.setSessionData("infocenter_cache", cache);
            session_data.saveSessionData();
            return currentData
        }
    } catch (e) {
        console.log(e)
        return null;
    }
};

function renderPage(rssData) {
    data = `<html>
<head>
<LINK REL=next HREF="wtv-center:/templates/en-US/teasers/Weather">
<display></head>
<body>
<table cellspacing=0 cellpadding=0 width=373 height=193 bgcolor=949484><tr><td><table border=0 cellspacing=0 cellpadding=0 width=373 height=193 background=wtv-content:/ROMCache/BackgroundNews.swf><tr height=44><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=44><tr height=40><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=40><td width=267><SPACER TYPE=BLOCK WIDTH=267 HEIGHT=40><td width=6><tr height=60><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=60><td maxlines=2 valign=top align=left width=267><font size=+2><B>${rssData[0].title}</b></font><td width=6><tr height=49><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=49><td width=267 valign=middle align=right><td width=6></table></table>
</body>
</html>`;
    return data;
}

(async () => {
    // Load the RSS data
    let rssData = await loadNewsRssData();
    sendToClient(socket, headers, renderPage(rssData));
})();
