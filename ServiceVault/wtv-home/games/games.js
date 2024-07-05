var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`

data = `
<html>

<head>
<title>Play a game</title>
<DISPLAY noscroll nologo>
</head>

<body bgcolor="#281f26" background="wtv-home:/games/ROMCache/Pattern_Games.gif" text="#cbcbcb" link="#4489a8"
hspace="0" vspace="0" fontsize="large" noscroll hideoptions>

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


  <table cellspacing="0" cellpadding="0">
    <tr>
      <td absheight="254" abswidth="555" valign="top" align="left">
	    <table cellspacing="0" cellpadding="0">
          <tr>
            <td absheight="25"></td>
          </tr>
          <tr>
            <td abswidth="62"></td>
            <td valign=top>
		      <table cellspacing="0" cellpadding="0">
                <tr>
                  <td valign="top" absheight="40"><font size="+2" color="#ffcf69"><shadow>Play a game</shadow></font> </td>
                </tr>
				<tr>
			<td width="198" height="80" valign="top" align="left"><font size="-1" color="#989898">Choose
          a game to play.<p>
          Choose <b>Setup</b> to<br>
          change the settings of<br>
          games.</font></td>
		      </tr>
              </table>
            </td>
            <td width="26"></td>
            <td width="198" valign="top" align="center">
		      <table>
	  		    <tr>
                  <td height="23"></td>
                </tr>
                <tr>
                  <td></td>
                  <td valign="top"><a HREF="wtv-home:/games/PlayJack" selected><img
                    src="wtv-home:/games/ROMCache/JackLogo.gif"></a> </td>
                  <td></td>
                </tr>
                <tr>
                  <td height="15"></td>
                </tr>
                <tr>
                  <td bgcolor=#77ddee></td>
                    <td valign="top"><a HREF="wtv-home:/games/PlayDoom"><img
                    src="wtv-home:/games/ROMCache/DoomLogo.gif"></a></td>
                  <td></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
<form>
  <table cellspacing="0" cellpadding="0">
    <tr>
      <td width="60"></td>
      <td valign="top" align="right"><font size="-1" color="#ffcf69"><shadow><input type=submit
      BORDERIMAGE="file://ROM/tvimages/TVButtonBorder.bif" Value="About Games" name="About"
	  action="AboutGames.html?JackRatingTarget=AboutGames.html&JackRatingButtonValue=Continue&DoomRatingTarget=AboutGames.html"
      usestyle width="156"> </shadow></font> </td>

      <td width="44"></td>

      <td valign="top" align="right"><font size="-1" color="#ffcf69"><shadow> <input
      type=submit BORDERIMAGE="file://ROM/tvimages/TVButtonBorder.bif" Value="Setup"
      action=wtv-setup:/setupgames
	  name="Setup" usestyle width="135"> </shadow></font> </td>
      <td width="13"></td>


      <td valign="top" align="right"><font size="-1" color="#ffcf69"><shadow> <input type=submit
      BORDERIMAGE="file://ROM/tvimages/TVButtonBorder.bif" Value="Done" name="Done" usestyle
	  action=wtv-home:/home"
      width="135"> </shadow></font> </td>

    </tr>
  </table>
</form>
</body>
</html>
`;