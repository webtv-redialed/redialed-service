var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

// i have copied far too much code
if (session_data.getSessionData("infocenter_cache") == null) {
    var object = new Object()
    session_data.setSessionData("infocenter_cache", object);
    session_data.saveSessionData();
}

request_is_async = true; // Make us async

var accounts = session_data.listPrimaryAccountUsers()

const fetch = require('node-fetch');

async function loadCurrentData() {
    if (session_data.getSessionData("infocenter_cache").currentWeather == null) {
        var cache = new Object();

        Object.assign(cache, session_data.getSessionData("infocenter_cache"));

        cache.currentWeather = {
            data: "You shouldn't be seeing this, either stop looking in peoples sessionstore or report this as a bug if you're a user",
            time: 0,
        };
        session_data.setSessionData("infocenter_cache", cache);
        session_data.saveSessionData();
    }

    // Grab ZIP from user's account, then grab current data from TWC's API
    try {
        if (
            parseInt(
                session_data.getSessionData("infocenter_cache").currentWeather.time
            ) +
            3600 >=
            Math.floor(Date.now() / 1000)
        ) {
            console.log("* Using cached weather data");
            return session_data.getSessionData("infocenter_cache").currentWeather
                .data;
        } else {
            console.log("* Using new weather data");
            const response = await fetch(
                "https://api.weather.com/v3/wx/observations/current?postalKey=" +
                (accounts.subscriber.subscriber_zip_code || "98052") +
                ":US&units=e&language=en-US&format=json&apiKey=" + minisrv_config.config.weatherApiKey
            );
            const weather = await response.json();

            const currentData = {
                temp: weather.temperature,
                cond: weather.wxPhraseMedium.toLowerCase(),
                highToday: weather.temperatureMax24Hour,
                lowToday: weather.temperatureMin24Hour,
            };

            var cache = new Object();

            Object.assign(cache, session_data.getSessionData("infocenter_cache"));

            cache.currentWeather = {
                data: currentData,
                time: Math.floor(Date.now() / 1000),
            };
            session_data.setSessionData("infocenter_cache", cache);
            session_data.saveSessionData();
            return currentData;
        }
    } catch (e) {
        console.log(e);
        return null;
    }
}

function titleCase(str) {
    // ZCS returns all uppercase, so we manually make the first character of each word uppercase

    return str
        .toLowerCase()
        .split(" ")
        .map(function (item) {
            return item[0].toUpperCase() + item.substring(1);
        })
        .join(" ");
}

function renderPage(weatherData) {
    data = `<html><head><script language="JavaScript">
var whichWeather = 0;
var theWeather = new Array(`;
try {
    data += `"<shadow><blackface>Today</blackface> ${titleCase(weatherData.cond)}</shadow>", "<shadow><blackface>Today</blackface> High ${weatherData.highToday}</shadow>", "<shadow><blackface>Tonight</blackface> Some Clouds</shadow>", "<shadow><blackface>Tonight</blackface> Low 58</shadow>", "<shadow><blackface>Weds.</blackface> Partly Sunny</shadow>", "<shadow><blackface>Weds.</blackface> High 76</shadow>"`;
} catch (e) {
    data += `"<shadow><blackface>fuck</blackface>"`;
}
data += `);
function InsertWeather() {	
 document.embeds[0].document.embeds[0].document.open();
 document.embeds[0].document.embeds[0].document.write("<html><body bgcolor=3a3e64></body></html>");
 document.embeds[0].document.embeds[0].document.close();
 if (rotationPaused == true) {
  setTimeout("InsertWeather(theWeather)", 5000);
  return;
 }
 var counter = document.embeds[0].document.embeds.length;
 if (whichWeather >= theWeather.length) { whichWeather = 0; }
 document.embeds[0].document.embeds[0].document.open();
 document.embeds[0].document.embeds[0].document.write("<html><body bgcolor=3a3e64><table cellspacing=0 cellpadding=0><tr><td height=3><tr><td width=200 align=left><font color=dedede>");
 document.embeds[0].document.embeds[0].document.write(theWeather[whichWeather]);
 document.embeds[0].document.embeds[0].document.write("</table></font></body></html>");
 document.embeds[0].document.embeds[0].document.close();
 whichWeather = whichWeather + 1; 
 setTimeout("InsertWeather(theWeather)", 5000); 
}
</script>
</head>
<body bgcolor=3a3e64 fontsize=medium onLoad="InsertWeather(theWeather)">
<table cellspacing=0 cellpadding=0>
<tr><td><embed src="file://ROM/HTMLs/Empty.html">
</table>
</body>
</html>`;
console.log(data)
    return data;
}

(async () => {
    sendToClient(socket, headers, renderPage(await loadCurrentData()));
})();