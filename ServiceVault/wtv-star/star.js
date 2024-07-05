var minisrv_service_file = true;

const date = new Date();
var hourNow = date.getHours();
var isFixyTime = hourNow == 4

headers = `200 OK
Content-type: text/html
wtv-expire-all: wtv-`;

// Close enough
data = `<html>
<DISPLAY SWITCHTOWEBMODE>
    
<head>
    
<title>${isFixyTime ? `Closed for Maintenance` : `${minisrv_config.config.service_name} Unavailable`}</title>
<display noscroll nooptions nologo hspace=0 vspace=0>

</head>
    
<table cellspacing=0 cellpadding=0>
    
<body background="wtv-star:/images/MessageGradient.gif" bgcolor="000000" text="F5C74A" fontsize="large">
    
<table cellspacing=0 cellpadding=0>
    
<tr>
    <td rowspan=2 width=184 valign=top align=left>
        <img src="wtv-star:/ROMCache/Spacer.gif" width=184 height=63><br>
        <img src="wtv-star:/ROMCache/Spacer.gif" width=21>
        <img src="${minisrv_config.config.service_logo}">
    
    <td rowspan=2 width=40 valign=top align=left bgcolor=000000>
        <img src="wtv-star:/ROMCache/Spacer.gif" width=1 height=1>
        
    <td width=296 height=108 valign=top align=left bgcolor=000000>
        <img src="wtv-star:/ROMCache/Spacer.gif" width=1 height=1>
    
    <td rowspan=2 width=40 valign=top align=left bgcolor=000000>
        <img src="wtv-star:/ROMCache/Spacer.gif" width=1 height=1>
        
<tr>
    <td colspan=2  width=184 height=312  valign=top align=left bgcolor=000000>
        <font size="+1">`;
if (isFixyTime) {
    data += `
        <b>The ${minisrv_config.config.service_name} Network<br> 
        is closed for scheduled<br>
        maintenance.</b>
        <p>
        The Network will open by<br>
        2 a.m. Pacific time,<br>
        5 Eastern.
        <p>
        Please try connecting later<br>
        this morning.
        </font>`;
} else {
    data += `<b>
The ${minisrv_config.config.service_name} Network is temporarily unavailable.
</b>
<p>
Please try connecting later.`;
}

data += `
</table>
    
</body>
    
</html>`;