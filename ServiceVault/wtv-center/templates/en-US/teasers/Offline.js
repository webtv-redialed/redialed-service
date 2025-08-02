var wtvrsvc_service_file = true;
// We should be expiring all service pages, but that would wipe the preloaded offline teaser as well
headers = `200 OK
Connection: Keep-Alive
wtv-expire-all: wtv-center:/center
wtv-expire-all: wtv-center:/templates/en-US/teasers/Entertainment
wtv-expire-all: wtv-center:/templates/en-US/teasers/Money
wtv-expire-all: wtv-center:/templates/en-US/teasers/News
wtv-expire-all: wtv-center:/templates/en-US/teasers/Shopping
wtv-expire-all: wtv-center:/templates/en-US/teasers/Sports
wtv-expire-all: wtv-center:/templates/en-US/teasers/Weather
wtv-expire-all: wtv-center:/templates/en-US/teasers/Weather2
wtv-expire-all: wtv-center:/templates/en-US/teasers/WebTVToday
Content-Type: text/html`

data = `<html>
<head>
<display></head>
<body>
<table cellspacing=0 cellpadding=0 width=373 height=193 bgcolor=949484><tr><td><table border=0 cellspacing=0 cellpadding=0 width=373 height=193 background=wtv-content:/ROMCache/BackgroundWebTVToday.swf><tr height=44><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=44><tr height=40><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=40><td width=267><SPACER TYPE=BLOCK WIDTH=267 HEIGHT=40><td width=6><tr height=60><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=60><td maxlines=2 valign=top align=left width=267><font size=+2><B>Get the latest in</B></font><br><font size=+2><b>WebTV Today</b></font><td width=6><tr height=49><td width=100><SPACER TYPE=BLOCK WIDTH=100 HEIGHT=49><td width=267 valign=middle align=right><td width=6></table></table>
</body>
</html>`;
