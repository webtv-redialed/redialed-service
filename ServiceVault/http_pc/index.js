var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

data = `<html><head>
<meta http-equiv="Content-Language" content="en-us">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="DESCRIPTION" content="WebTV Redialed viewer generator">

<!-- ===============Tells Servers to Load Fresh Page=================== -->



<title>WebTV Redialed: Viewer Generator</title>
<script>
function generateSSID() {
    var ssidForm = document.getElementById('client_ssid');
    var ssid_template = "91xxxY0xx0b002xx";
    var ssid = ssid_template;
    while (ssid.indexOf("x") != -1) {
        ssid = ssid.replace("x",Math.floor(Math.random() * 16).toString(16))
    }
    ssid = ssid.replace("Y", Math.floor(Math.random() * 7));
    ssidForm.value = ssid;
}

function validateForm() {
    var ssidForm = document.getElementById('client_ssid');
	if (validateSSID(ssidForm.value)) {
		document.getElementById('viewergen').submit();
	}
}

function validateSSID(ssid) {
    if (ssid.length != 16) {
        alert("Please choose a valid SSID and try again.");
        return false;
    }
    if ((ssid.substr(0,1) != "0" && ssid.substr(0,1) != "8" && ssid.substr(0,1) != "9") ||
        (ssid.substr(6,1) != "0") ||
        (ssid.substr(9,5) != "0b002")) {
        alert("Your SSID is not proper, but I'll allow it.")
    }
    return true;
}
</script>
</head>

<body topmargin="4" bgcolor="#ffffff" onLoad="generateSSID()">


<!-- ========================Main Formatting Table=================== -->

<div align="center">
<center>
<table width="620" cellspacing="0" cellpadding="0" border="0">

<!-- =========================Main Navigation======================== -->

<tbody><tr><td colspan="3" width="620" align="center"><a href="http://webtv.zone/index.html
"><img src="http://webtv.zone/images/home_off.gif" alt="Home" width="150" height="45" border="0"></a><a href="http://webtv.zone/guide/index.html
"><img src="http://webtv.zone/images/guide_on.gif" alt="Guide" width="150" height="45" border="0"></a><a href="http://webtv.zone/info/index.html
"><img src="http://webtv.zone/images/info_off.gif" alt="Info" width="150" height="45" border="0"></a><a href="https://wiki.webtv.zone/
"><img src="http://webtv.zone/images/wiki_off.gif" alt="Wiki" width="150" height="45" border="0"></a></td></tr>

<!-- ===========================Left Nav Bar=========================== -->
    
<tr>
<td width="136" height="542" valign="top" nowrap="" background="http://webtv.zone/images/sidebar.gif">

<br>

<p align="center">

<a href="http://webtv.zone/index.html
">
<img src="http://webtv.zone/images/logo.gif" alt="WebTV Redialed" width="108" height="80" border="0"></a>

</p>

<br>

<p align="right">

<font size="2" face="verdana,helvetica, arial, sans-serif">

<!-- ===================================Left Nav Links========================== -->

<table>
<tr><td width=136>
<img src="http://webtv.zone/images/spacer.gif" alt="" width="40" height="0"><a href="http://webtv.zone/guide/hardware/index.html
"><font color="#000000"><b>Hardware</font></b></a><br>
</tr></td>
</table>

<table>
<tr><td width=156>
<img src="http://webtv.zone/images/spacer.gif" alt="" width="46" height="0"><a href="http://webtv.zone/guide/software/index.html
"><font color="#000000"><b>Software</font></b></a><br>
</tr></td>
</table>

<table bgcolor="#000000">
<tr><td width=136>
<font color="#FFCF02" size="2">
<img src="http://webtv.zone/images/spacer.gif" alt="" width="46" height="0"><b>Viewer</font></b><br>
</tr></td>
</table>


<!-- =================================== End Left Nav Links====================== -->


</font>

</p>

<!-- ===================AREA C:Bottom Left Nav======================= -->




</td>

      
<!-- =======================Left Gutter=============================== -->
      
   
<td width="11" valign="top" align="center">

<img src="http://webtv.zone/images/global/spacer.gif" alt="" width="11" height="1" border="0">


</td>

        




<td width="453" valign="top" align="left">


<!-- ==================================== Embedded Body Table ================= -->


<div align="center">

<center>

<table width="440" cellspacing="0" cellpadding="0" border="0">

<tbody><tr><td>
<!-- ======================Body============================ -->
			<img src="http://webtv.zone/images/guide/hd_guide_viewer_gen.gif" alt="Viewer Generator" width="351" height="37" border="0"><br><br></td>
              <td width="153" valign="top">&nbsp;</td>
              <tr> 
                <td width="400" valign="top" align="left"> 
                  <p>
                  <font size="2" face="verdana,helvetica,arial">Here, you can generate a custom WebTV Viewer for use with WebTV Redialed.
                  </font> </p><p><font size="2" face="verdana,helvetica,arial">If you don't know what these options do, you can just leave them
				  at the defaults and click <b>Download</b>.
<form method="GET" action="/viewergen/" id="viewergen">
					</font> </p><p><font size="2" face="verdana,helvetica,arial">Viewer: <select name="viewer">
<option value="0">WebTV Viewer v1.0 Build 146 (w/ B210 ROMs)</option>
<option value="1">WebTV Viewer v1.1 Build 220</option>
<option selected value="2">WebTV Viewer v2.5 Build 117</option></select></font> </p>

<p><font size="2" face="verdana,helvetica,arial">
<img src="http://webtv.zone/images/global/spacer.gif" alt="" width="7" height="1" border="0">
SSID: <input name="client_ssid" id="client_ssid" maxlength=16" value="91"></font> </p>
<p><font size="2" face="verdana,helvetica,arial">
<img src="http://webtv.zone/images/global/spacer.gif" alt="" width="9" height="1" border="0">
Build: <select name="build" id="build">
<option value="1235">Build 1235 (Old Classic)</option>
<option value="71810">Build 7181 (Old Classic)</option>
<option selected value="7352">Build 7352 (Old Plus)</option>
<option value="16276">Build 16276 (Old Plus)</option>
</select></font> </p>
<p><font size="2" face="verdana,helvetica,arial">
<img src="http://webtv.zone/images/global/spacer.gif" alt="" width="7" height="1" border="0">
cSetup<font color=red>*</font> & Messenger proxy: <select name="diskset" id="diskset">
<option value="0">Not Included</option>
<option selected value="1">Included</option>
</select></p>

<center>
<p><input type="button" onclick="validateForm()" value="Download"></p>
</form>
<p><font color=red size=1><font size=2>*</font> To enable cSetup, go to Edit -> Preferences, change Web Mode Home Page to other, enter <code>file://disk/Browser/cSetup.htm</code>, click OK, and restart WebTV Viewer.</font></p>
<p><font size="2" face="verdana,helvetica,arial"><a href=http://webtv.zone/guide/software/viewer.html>Click here to return to the WebTV Viewer guide.</a></font> </p>
</center>

              </tr>
            </tbody></table>

</center>

<!-- ==================================== End Embedded Body Table ================= -->


</td>
</tr>

<!-- ==============================Footer============================== -->

<tr>

<td colspan="3" width="620">

<p align="center">

<font size="2" face="verdana, helvetica, arial, sans-serif">

<br>

</font>

<br>

<font size="1" face="verdana, helvetica, arial, sans-serif">

WebTV Redialed is a fan project, and is in no way affiliated with Microsoft.

</font>

</p>

</td>
</tr>

</tbody></table>

</center>

</div>




</body></html>`;
