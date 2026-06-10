var minisrv_service_file = true;

const clubWebTVTitle = fs.readFileSync(
		"./ServiceDeps/clubWebTVTitle.txt",
		{encoding: "utf8", flag: "r"}
	);

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`

data = `<html>
	<body onLoad="Initialize()" bgcolor=13142e>
	<table border=0 cellspacing=0 cellpadding=0>
	<tr>
		<td width=422 height=22>
		<table background="wtv-home:/ROMCache/teaser-News.gif" border=0 cellspacing=0 cellpadding=0 bgcolor=313657 gradcolor=13142e gradangle=90>
		<tr>
			<td width=422 height=2 colspan=2 bgcolor=FFFFFF transparency=80%>
			<img src=ROMCache/PromotionLeftEdge.gif width=7 height=2><tr><td width=7 height=20 rowspan=2><td width=7 height=2>
			<tr>
				<td width=415 height=18 align=left valign=center>
				<font color=bdbd8d><blackface> WebTV Today</blackface></font>
		</table>
		<tr>
			<td width=422 height=44>
			<table border=0 cellspacing=0 cellpadding=0>
			<tr>
			<td width=7 height=62 background=wtv-home:/ROMCache/PromotionLeftEdge.gif>
			<td width=415 height=44 align=left valign=center>
			<font color=bdbdbd size=-1> ${clubWebTVTitle}</font></table></table></body></html>`