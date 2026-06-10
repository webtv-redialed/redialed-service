var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

var infoCenter = request_headers.query.info;
switch (infoCenter) {
    case "AroundTown":
        data = `
<html>
<head>
<title>Personalize - Change city</title>
<META HTTP-EQUIV="Expires" CONTENT="0">
<script>
</script>
</head>
<display noscroll
>
<body bgcolor=2E2E2A text=cccccc link=aaaaaa vlink=aaaaaa fontsize=${session_data.isJapaneseClient() ? `small` : `medium`} hspace=0 vspace=0 onLoad='Load()'> <table cellspacing=0 cellpadding=0 bgcolor=8C8C9C background=images/centers/aroundtown/personalize_banner.gif>
<tr>
<td width=104 height=80 align=center valign=middle>
<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a>
<td width=456>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=15 bgcolor=8C8C9C>
<td width=533 bgcolor=2E2E2A gradcolor=292142 gradangle=90>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=89>
<td width=321>
<td width=135>
<tr>
<td height=25 valign=top>
<img src=wtv-center:/images/centers/aroundtown/PersonalizeCornerTopLeft.gif width=8 height=11>
<td maxlines=2>
<spacer type=vertical height=4><br>
<blackface><font size=+1 color=D1D1D3>Change city</font></blackface>
<td align=right valign=top>
<spacer type=vertical height=5><br>
<spacer type=hoizontal width=5>
</table>
<td width=12 bgcolor=292142>
<tr>
<td bgcolor=8C8C9C rowspan=2>
<td bgcolor=2E2E2A>
<form action="wtv-center:/changecity?redirect=${request_headers.query.redirect}" name="personalize-form">
<table height=279 width=533 cellspacing=0 cellpadding=0>
<tr>
<td width=40 height=20>
<td>
<tr>
<td>
<td valign=top>
<font color="#FFFFFF">
<p><dl>
<dt>If you want to get information for a different area, type a ZIP code here.</dt>
<dd><spacer type=vertical height=4><br><br>
<font color="#ffdd33"><input type=text name=newchoice size=5 maxlength=5 font=proportional nocancel bgcolor="#444444" text="#ffdd33" cursor="#cc9933" id=newchoice selected usestyle></font></dd>
</dl></p>
<tr>
<td>
<td valign=bottom align=right>
<font size=-1 color=#FFFFFF>
<input type=submit width=90
borderimage="file://ROM/Borders/ButtonBorder2.bif" name="Done" value="Done"
usestyle>
<spacer type=horizontal width=6>
</font>
<spacer type=vertical height=10><br>
</table>
</form>
<td bgcolor=2E2E2A>
</table>
</body>
</html>

`;
        break;

    case "News":
        data = `<html>
<head>
<title>Personalize - News Topics</title>
<script>
</script>
</head>
<display noscroll
>
<body bgcolor=2E2E2A text=cccccc link=aaaaaa vlink=aaaaaa fontsize=${session_data.isJapaneseClient() ? `small` : `medium`} hspace=0 vspace=0 onLoad='Load()'> <table cellspacing=0 cellpadding=0 bgcolor=84949C background=wtv-center:/images/centers/news/news_personalize_banner.gif>
<tr>
<td width=104 height=80 align=center valign=middle>
<a href="wtv-home:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a>
<td width=456>
</table>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=15 bgcolor=84949C>
<td width=533 bgcolor=2E2E2A gradcolor=384952 gradangle=90>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=89>
<td width=321>
<td width=135>
<tr>
<td height=25 valign=top>
<img src=wtv-center:/images/centers/news/TopRoundedCorner.gif width=8 height=11>
<td maxlines=2>
<spacer type=vertical height=4><br>
<blackface><font size=+1 color=D1D1D3>Add topics</font></blackface>
<td align=right valign=top>
<spacer type=vertical height=5><br>
<img src="wtv-center:/images/centers/help_arrow.gif" width=13 heigth=13>
<a href=wtv-guide:/help?topic=News&subtopic=Instructions><font color=E6CD4A><b>Help</b></font></a>
<spacer type=hoizontal width=5>
</table>
<td width=12 bgcolor=384952>
<tr>
<td bgcolor=84949C rowspan=2>
<td bgcolor=2E2E2A>
<form action="wtv-center:/save-settings?info=News" name="personalize-form">
<table height=279 width=533 cellspacing=0 cellpadding=0>
<tr>
<td width=40 height=20>
<td>
<tr>
<td>
<td valign=top>
<font color=FFFFFF>Check the topics you want to see, then choose Done.</font>
<table cellspacing=0 cellpadding=0 border=0>
<tr>
<td width=1>
<td width=28>
<td width=7>
<td width=108>
<td width=29>
<td width=28>
<td width=7>
<td width=202>
<tr><td height=6>
<tr>
<td>
<td align=right valign=center>
<input type=checkbox name="SPT" value="true" `;
        if (session_data.getSessionData("topic_sports_enabled") == true) {
            data += "checked";
        }
        data += `>
<td>
<td align=left valign=middle>
<font color=FFFFFF><b>Sports</b>
<td>
<td align=right valign=center>
<input type=checkbox name="COM" value=true `;
        if (session_data.getSessionData("topic_business_enabled") == true) {
            data += "checked";
        }
        data += `>
<td>
<td align=left valign=middle>
<font color=FFFFFF><b>Business</b>
<tr>
<td height=9>
<tr>
<td>
<td align=right valign=center>
<input type=checkbox name="TECH" value=true `;
        if (session_data.getSessionData("topic_tech_enabled") == true) {
            data += "checked";
        }
        data += `>
<td>
<td align=left valign=middle>
<font color=FFFFFF><b>Technology</b>
<td>
<td align=right valign=center>
<input type=checkbox name="LIV" value=true `;
        if (session_data.getSessionData("topic_liver_enabled") == true) {
            data += "checked";
        }
        data += `>
<td>
<td align=left valign=middle>
<font color=FFFFFF><b>Living & Travel</b>
<tr>
<td height=9>
<tr>
<td>
<td align=right valign=center>
<input type=checkbox name="HEALTH" value=true `;
        if (session_data.getSessionData("topic_health_enabled") == true) {
            data += "checked";
        }
        data += `>
<td>
<td align=left valign=middle>
<font color=FFFFFF><b>Health</b>
<td>
<td align=right valign=center>
<input type=checkbox name="OP" value=true `;
        if (session_data.getSessionData("topic_opinion_enabled") == true) {
            data += "checked";
        }
        data += `>
<td>
<td align=left valign=middle>
<font color=FFFFFF><b>Opinion</b>
<tr>
<td height=9>
<tr>
<tr>
<td height=18 valign=center>
</table>
<font color=FFFFFF>These topics are always shown: <br></font><br>
<table cellspacing=0 cellpadding=0>
<tr>
<td width=1>
<td width=28>
<td width=7>
<td width=108>
<td width=29>
<td width=28>
<td width=7>
<td width=202>
<tr>
<td>
<td>
<td>
<td valign=top><font color=FFFFFF><b>Top Stories</b>
<td>
<td>
<td>
<td valign=top><font color=FFFFFF><b>Local News & Weather</b>
</table>
<tr>
<td>
<td valign=bottom align=right>
<font size=-1 color=#FFFFFF>
<input type=submit width=90
borderimage="file://ROM/Borders/ButtonBorder2.bif" name="Done" value="Done"
usestyle>
<spacer type=horizontal width=6>
</font>
<spacer type=vertical height=10><br>
</table>
</form>
<td bgcolor=2E2E2A>
</table>
</body>
</html>
`;
        break;
}
