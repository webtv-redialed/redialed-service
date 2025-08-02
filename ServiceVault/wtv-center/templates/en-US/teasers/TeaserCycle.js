var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`

var nextTeaser = request_headers.query.nextTeaser;

switch (nextTeaser) {
    case "News":
        data = `<html>
<head>
<script>
function loadTeaser(){
    window.location.replace("wtv-center:/templates/en-US/teasers/TeaserCycle?nextTeaser=Shopping");
}
function startTimer(){
setTimeout("loadTeaser()", 7000);
}
</script>
<display></head>
<body onload=startTimer()>
<table cellspacing=0 cellpadding=0 width=373 height=193 bgcolor=949484><tr><td><table border=0 cellspacing=0 cellpadding=0 width=373 height=193 background=wtv-content:/ROMCache/BackgroundNews.swf><tr height=44><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=44><tr height=40><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=40><td width=267><SPACER TYPE=BLOCK WIDTH=267 HEIGHT=40><td width=6><tr height=60><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=60><td maxlines=2 valign=top align=left width=267><font size=+2><B>fuck you</B></font><br><font size=+2><b>no news</b></font><td width=6><tr height=49><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=49><td width=267 valign=middle align=right><td width=6></table></table>
</body>
</html>`;
        break;
    case "Shopping":
        data = `<html>
<head>
<script>
function loadTeaser(){
    window.location.replace("wtv-center:/templates/en-US/teasers/TeaserCycle?nextTeaser=WebTVToday");
}
function startTimer(){
setTimeout("loadTeaser()", 7000);
}
</script>
<display></head>
<body onload=startTimer()>
<display></head>
<body><table cellspacing=0 cellpadding=0 width=373 height=193 bgcolor=949484><tr><td><table border=0 cellspacing=0 cellpadding=0 width=373 height=193 background=wtv-content:/ROMCache/BackgroundShopping.swf><tr><td colspan=2 height=44></tr><tr><td abswidth=60><td><h2>News Headlines Currently Unavailable</h2><p><p><spacer type=horizontal width=100><font size=-1 color=#313939><b>news provided by MSNBC</b></font></tr></table></td></tr></table>
</body>
</html>`;
        break;
    default:
        data = `<html>
<head>
<script>
function loadTeaser(){
    window.location.replace("wtv-center:/templates/en-US/teasers/TeaserCycle?nextTeaser=News");
}
function startTimer(){
setTimeout("loadTeaser()", 7000);
}
</script>
<display></head>
<body onload=startTimer()>
<table cellspacing=0 cellpadding=0 width=373 height=193 bgcolor=949484><tr><td><table border=0 cellspacing=0 cellpadding=0 width=373 height=193 background=wtv-content:/ROMCache/BackgroundWebTVToday_a.swf><tr height=44><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=44><tr height=40><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=40><td width=267><SPACER TYPE=BLOCK WIDTH=267 HEIGHT=40><td width=6><tr height=60><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=60><td maxlines=2 valign=top align=left width=267><font size=+2><B>fuck you</B></font><br><font size=+2><b>no news</b></font><td width=6><tr height=49><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=49><td width=267 valign=middle align=right><td width=6></table></table>
</body>
</html>`;
        break;
}