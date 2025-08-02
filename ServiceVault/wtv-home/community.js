var wtvrsvc_service_file = true;

var accounts = session_data.listPrimaryAccountUsers();

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

function atCase(str) {
    // ZCS returns all uppercase, so we manually make the first character of each word uppercase

    return str
        .toLowerCase()
        .split(" ")
        .map(function (item) {
            return item[0].toUpperCase() + item.substring(1);
        })
        .join(" ");
}

const {getByZip} = require("zcs");
let cityZIP = getByZip(accounts.subscriber.subscriber_zip_code || "98052");
let cityname = atCase(cityZIP.city);

data = `<html>

	<head>
		<meta http-equiv="content-type" content="text/html;charset=iso-8859-1">
		<meta name="generator" content="GoLive CyberStudio 3">
		<title>Community</title>
		<display hspace="0" vspace="0" fontsize="${session_data.isJapaneseClient() ? `small` : `medium`}" nologo noscroll showwhencomplete>
	</head>

	<body bgcolor="#191919" text="#44cc55" link="#189cd6" vlink="#189cd6" hspace="0" vspace="0" fontsize="${session_data.isJapaneseClient() ? `small` : `medium`}">
		<sidebar width="110"><table cellspacing="0" cellpadding="0" bgcolor=235E56>
			<tr>
				<td colspan="3" abswidth="104" absheight="4"></td>
				<td rowspan="6" width="6" absheight="420" valign="top" align="left"><img src="file://ROM/Cache/Shadow.gif" width="6" height="420"> </td>
			</tr>
			<tr>
				<td abswidth="6"></td>
				<td abswidth="92" absheight="76"><table href="wtv-home:/home" absheight="76" cellspacing="0" cellpadding="0">
						<tr>
							<td align="right"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width="87" height="67"> </td>
						</tr>
					</table></td>
				<td abswidth="6"></td>
			</tr>
			<tr>
				<td absheight="5" colspan="3"><table cellspacing="0" cellpadding="0">
						<tr>
							<td abswidth="104" absheight="2" bgcolor="black" transparency="64"><spacer type="horizontal" size="32"></td>
						</tr>
						<tr>
							<td abswidth="104" absheight="1"></td>
						</tr>
						<tr>
							<td abswidth="104" absheight="2" bgcolor="black" transparency="88"><spacer type="horizontal" size="32"></td>
						</tr>
					</table></td>
			</tr>
			<tr>
				<td absheight="54"></td>
				<td></td>
				<td></td>
			</tr>
			<tr> <!--Would technically be possible to use ROMCache here, however different builds can vary between the green banner and the orange banner-->
				<td absheight="242" align="right" colspan="3"><img src="wtv-home:/images/CommunityBanner.gif" width="55" height="242"> </td>
			</tr>
			<tr>
				<td absheight="39"></td>
				<td></td>
				<td></td>
			</tr>
		</table></sidebar><table cellspacing="0" cellpadding="0" height="100%" valign="top" bgcolor="#191919">
			<tr height="18">
				<td width="25" rowspan="15"></td>
				<td height="18"></td>
				<td width="18" height="18"></td>
			<tr>
			<td><table cellspacing="0" cellpadding="0" bgcolor=191919 valign=top href="wtv-author:/documents" selected>
						<tr>
							<td><table cellspacing="0" cellpadding="0" bgcolor="#191919" valign="top">
									<tr>
										<td width="95"><img src="images/pagebuildertools.gif" width="70" height="67"> </td>
										<td width="28"></td>
										<td width="285"><font color="#FFFFFF"><blackface><limittext width="280" value="Page Builder"></blackface></font><br>
											Create and publish your own web pages.</td>
									</tr>
								</table></td>
						</tr>
					</table></td>
				<td width="18"></td>
			</tr>
			<tr height="5">
				<td height="5"></td>
				<td width="18" height="5"></td>
			</tr>
			<tr>
				<td><table cellspacing="0" cellpadding="0" bgcolor=191919 valign=top href="wtv-center:/center?info=AroundTown" selected>
						<tr>
							<td><table cellspacing="0" cellpadding="0" bgcolor="#191919" valign="top">
									<tr>
										<td width="95"><img src="wtv-home:/ROMCache/AroundTown.gif" width="66" height="59"> </td>
										<td width="28"></td>
										<td width="285"><font color="#FFFFFF"><blackface><limittext width="280" value="Around ${cityname}"></blackface></font><br>
											Get local information: movies, entertainment, weather. Or choose a different city. </td>
									</tr>
								</table></td><br>
						</tr>
					</table></td>
				<td width="18"></td>
			</tr>
			<tr height="5">
				<td height="5"></td>
				<td width="18" height="5"></td>
			</tr>
			<tr>
				<td><table cellspacing="0" cellpadding="0" href="wtv-chat:/home" valign="top">
						<tr>
							<td><table cellspacing="0" cellpadding="0" bgcolor="#191919" valign="top">
									<tr>
										<td width="95"><img src="images/chat.gif"> </td>
										<td width="28"></td>
										<td><font color="#FFFFFF"><blackface>Chat</blackface></font><br>
											Meet and interact with other people on your TV screen. </td>
									</tr>
								</table></td><br>
						</tr>
					</table></td>
				<td width="18"></td>
			</tr>
			<tr height="5">
				<td height="5"></td>
				<td width="18" height="5"></td>
			</tr>
			<tr>
				<td><table cellspacing="0" cellpadding="0" href="wtv-news:/lobby" valign="top">
						<tr height="7">
							<td height="7"></td>
						</tr>
						<tr>
							<td><table cellspacing="0" cellpadding="0" bgcolor="#191919" valign="top">
									<tr>
										<td width="95"><img src="images/discuss.gif"> </td>
										<td width="28"></td>
										<td width="285"><font color="#FFFFFF"><blackface>Discuss</blackface></font><br>
											Share opinions and pictures in<br>
											thousands of discussion groups. </td>
									</tr>
								</table></td><br>
						</tr>
						<tr height="12">
							<td height="12"></td>
						</tr>
					</table></td>
				<td width="18"></td>
			</tr>
			<tr height="10">
				<td height="10"></td>
				<td width="18" height="10"></td>
			</tr>
		</table>
	</body>

</html>`;
