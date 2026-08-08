var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2//EN">

<html>
<head>
	<title>Try It: The Simulator</title>
</head>

<body background="images/TryIt0_bkg.swf" bgcolor=2e1722 fontsize=medium hspace=0 vspace=0 text=e5c0c0 link=e5c0c0 alink=e5c0c0 vlink=e5c0c0>
	<!-- INSTRUCTIONS:
			To change the link color, you need to make the link=, 
			vlink=, and alink= all the same. -->

<display noscroll>

<table height=100% width=100% border=0 cellpadding=0 cellspacing=0>
	<tr>
		<td height=78 valign=top>
		<!--Logo -->
		<img src="wtv-home:/ROMCache/spacer.gif" width=1 height=10><br>
		<img src="wtv-home:/ROMCache/spacer.gif" width=5 height=1>
		<a href="wtv-tricks:/home"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67></a><br>
		</td>
	</tr>
	
	
	<tr>
		<td align=left valign=top width=425>
		<table cellpadding=0 cellspacing=0 border=0>
		<tr>
			<td>
			<spacer type=horizontal width=105>
			
			</td>
			
			<td>
			<spacer type=vertical height=5><br>
			<font size=5 color=b5b1e3><blackface>Simulate the year 1997</blackface></font>
			</td>
		</tr>
		
		<tr>
			<td colspan=2>
			<spacer type=vertical height=40>
			</td>
		</tr>
		
		<tr>
			<td>
			<spacer type=horizontal width=105><spacer type=vertical height=40>
			</td>
			
			<td>

			<font size=5>

			<!--- INSERT INTRODUCTORY LINE OR SENTENCE HERE, BUT COMPENSATE BY REDUCING THE 'VERTICAL HEIGHT" BELOW !--->
			<spacer type=vertical height=5><br>
			You're already reliving the 90s, why not go all the way!

			<p><b>The Simulator</b> is a "life simulator" from 1997, recreating a day in the life of the average American at the time.

			<p>Go ahead, eat your Shreddies!
			</font>
			</td>
			
			<td>
			<spacer type=horizontal width=10>
			</td>
		</tr>
		</table>
		</td>
	</tr>
		
	<tr align=right valign=bottom>
		<td>
		<form>
		<font color=ffcf69><shadow>
		<input action="http://conceptlab.com/simulator/" value="Try It" selected type=button borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=105>
		&nbsp;
		<input action="javascript:location=history.go(-1);" value="Done" selected type=button borderimage="file://ROM/Borders/ButtonBorder2.bif" usestyle width=105>
		</shadow></font>
		&nbsp;
		</form>
		<br><img src="wtv-home:/ROMCache/spacer.gif" width=1 height=5>
		</td>
	</tr>
</table>

</body>
</html>
`