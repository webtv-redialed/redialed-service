var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`

data = `
<html>

<head>
<title>Play Doom</title>
<DISPLAY noscroll nologo>
</head>

<body bgcolor="#281f26" background="wtv-home:/games/ROMCache/Pattern_Games.gif" text="#cbcbcb" link="#4489a8"
hspace="0" vspace="0" fontsize="large" noscroll hideoptions>

<script src="GameCode.js">
</script>
<!--<script>
	if ( ! esrbRatingCurrentlyAllowed(3) ) {
		document.location = "DoomLocked.html";
	}
</script>
-->
<table cellspacing="0" cellpadding="0" cellborder="0">
  <tr>
    <td background="wtv-home:/games/ROMCache/GamesShadowLogo.gif" width="104" height="80" valign="top" align="left"><spacer type="block" WIDTH="11" HEIGHT="11"><br>
<spacer type="block" WIDTH="10" HEIGHT="1">    <a href="wtv-home:/home"><img src="file://ROM/Cache/WebTVLogoJewel.gif" width="87"
    height="67"></a> </td>
    <td width="456" height="80" valign="top" align="center"><img src="wtv-home:/games/ROMCache/GamesBanner.gif"
    width="456" height="50"><br>
    <img src="file://rom/tvimages/Shadow_Horizontal.gif" width="456" height="6"> </td>
  </tr>
</table>
<form>
  <table cellspacing="0" cellpadding="0">
    <tr>
      <td absheight="254" abswidth="555" valign="top" align="left">
	    <table cellspacing="0" cellpadding="0">
          <tr>
            <td absheight="55"></td>
          </tr>
          <tr><td valign=top align=center width=560><img src="wtv-home:/games/ROMCache/DoomLogo.gif"></td></tr>
		  <td><td absheight=58></td></tr>
		  <tr>
		    <td>
		    <table cellspacing=0 cellpadding=0>
			  <tr>
			    <td width=60></td>
				<td>
			      <table cellspacing=0 cellpadding=0>
				    <tr><td colspan=3 bgcolor=#3e664f absheight=2></td></tr>
				    <tr>
					  <td bgcolor=#3e664f abswidth=2></td>
					  <td><table cellpadding=10><tr><td <font size=-2 color=#6cb28b><b>IMPORTANT</b>: planned TV recordings and TV<br>
				        program reminders don't work during games.</font></td></tr></table>
				      </td>
					  <td bgcolor=#3e664f abswidth=2></td>
				    </tr>
				    <tr><td colspan=3 bgcolor=#3e664f height=2></td></tr>
				  </table>
				<td>
				<td width=32></td>
				<td align=left valign=top><a href="DoomRating.html?DoomRatingTarget=PlayDoom.html"><img src="wtv-home:/games/ROMCache/RatingESRB_M.gif"></a></td>
			  </tr>
		    </table>
			</td>
		  </tr>
        </table>
      </td>
    </tr>
  </table>
  <table cellspacing="0" cellpadding="0">
    <tr>
	  <td width=55></td>
 	  <td valign="top" align="right"><font size="-1" color="#ffcf69"><shadow> <input type=submit
      BORDERIMAGE="file://ROM/tvimages/TVButtonBorder.bif" Value="Instructions" name="Instructions" usestyle
	  action="file://disk/Doom/docs2/DoomTOC.html#0"
      width="140"> </shadow></font> </td>
	  <td width=61></td>
	  <td valign="top" align="right"><font size="-1" color="#ffcf69"><shadow> <input type=submit
      BORDERIMAGE="file://ROM/tvimages/TVButtonBorder.bif" Value="Play Game" name="Play" usestyle selected
	  action="StartDoom.html"
       width="135"> </shadow></font> </td>
	  <td width=10></td>
	  <td valign="top" align="right"><font size="-1" color="#ffcf69"><shadow> <input type=submit
      BORDERIMAGE="file://ROM/tvimages/TVButtonBorder.bif" Value="Done" name="Done" usestyle selected
	  action="Games.html"
      width="135"> </shadow></font> </td>
     </tr>
  </table>
</form>
</body>
</html>
`;