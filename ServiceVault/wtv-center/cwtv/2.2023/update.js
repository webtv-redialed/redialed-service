var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`


data = `<html><head>
<title>
Club WebTV: Latest news
</title>
</head><body fontsize="medium" vspace="0" hspace="0" vlink="#ABA6EF" text="#dbdbd1" link="#189BD5" bgcolor="#171F30" alink="#ABA6EF"><display>
<style><!-- A{text-decoration:none} no underline --></style>



<sidebar width="152" text="#E6E8AF" link="#E6E8AF" vlink="#E6E8AF" alink="#E6E8AF" fontsize="medium">

<table width="152" cellspacing="0" cellpadding="0" border="0" align="left">
<!--LOGO BOX-->
  <tbody><tr>
    <td><table absheight="85" width="152" cellspacing="0" cellpadding="0" border="0" bgcolor="#101821" background="wtv-center:/cwtv/images/founders_left_green.jpg">      <tbody><tr>        <td width="6"></td>
        <td width="140" align="center"><table width="140" cellspacing="0" cellpadding="0">
          <tbody><tr>            <td height="6"></td>          </tr>          <tr>
		  
            <td href="wtv-home:/home" width="140" height="73" align="center"><img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width="87" height="67"></td>
          </tr>          <tr>            <td height="6"></td>          </tr>
        </tbody></table>        </td>        <td width="6"></td>      </tr>    </tbody></table>
    </td>  </tr>

		
<!--TABLE OF CONTENTS-->  <tr>
    <td><table cellspacing="0" cellpadding="0" border="0" bgcolor="#101821">
      <tbody><tr>
        <td colspan="3" height="9"></td>
      </tr>
      <tr>
        <td width="6" valign="top"></td>



        <td width="140" valign="top" align="left"><table width="100%" cellspacing="0" cellpadding="3" border="0"><tbody>
		<tr><td><!--<a href="archive.html"><font size="+1" color="#E6E8AF"><blackface>Home</blackface></font></a>--></td></tr>
		<tr><td><!--<a href="archive.html"><font size="+1" color="#E6E8AF"><blackface>Archive</blackface></font></a>--></td></tr></tbody></table></td>




        <td abswidth="6"><img src="wtv-home:/ROMCache/spacer.gif" width="1" height="299"></td>
      </tr>
    </tbody></table>
    </td>
  </tr></tbody></table></sidebar>


<table cellspacing="0" cellpadding="0" border="0" align="left">  <tbody><tr>    <td><table width="408" height="85" cellspacing="0" cellpadding="0" border="0" background="wtv-center:/cwtv/images/section_title_green.jpg">      <tbody><tr>
        <td absheight="85" colspan="1" valign="top"><spacer type="block" width="408" height="14"><br clear="all">
<spacer type="block" width="16" height="66" align="left"><font size="+3" color="#E6CD4A"><blackface><shadow>Latest news</shadow></blackface></font>

</spacer></spacer></td>
      </tr>
    </tbody></table>
    </td>
  </tr>
  <tr>
    <td><table width="408" cellspacing="0" cellpadding="0" border="0">
      <tbody><tr>
        <td colspan="3" height="18"></td>
      </tr>
      <tr>
        <td abswidth="40"></td>
        <td valign="top">
<b><font size="+5" color="#C0F9A3">An upgrade with no issues whatsoever</font><font size="5" color="#C0F9A3">
</font></b>

<br>
<br>
<font size="4">

<p>

Nothing at all went wrong in the latest edition of JarHead's Debugging On Production Adventures&trade;
</p><p>
That big update that I've been teasing you all about over the past few months is finally live, so let's jump right in and see what's new!
</p><p>
<blackface>Discuss (again)</blackface>
</p><p>
Discuss has finally been migrated to the new backend, which means new features, such as searching for groups, and new groups, such as the incredibly active <a href="wtv-news:/news?group=alt.discuss.gaming.3do">alt.discuss.gaming.3do</a>.
</p><p>
<blackface>A Mail update</blackface>
</p><p>
Unfortunately, plans for external Mail have been put on hold, as there were too many things to go wrong and not a big enough priority. It may happen at some point still, but it won't be there at launch.
</p><p>
<blackface>ProtoWeb</blackface>
</p><p>
This one's really cool. You can now use "proto://" in the Go To box to access ProtoWeb sites! What is ProtoWeb? It's essentially The Old Net, but all the sites are manually rebuilt by contributors. You can access a directory of all sites by visiting <a href="proto://www.inode.com">proto://www.inode.com</a>. Go ahead, try and visit "proto://www.webtv.net".
</p><p>
<blackface>Centers overhaul</blackface>
</p><p>
I've made some major backend changes to Centers, so they now cache their data. For example, if you visit the WebTV Today center, then the News center, it'll load a bit faster. As for changes you can see, I've redone the News center, and added its custom topics feature, so you can now choose which topics you want to view.
</p><p>
<blackface>Halen is watching your messages.</blackface>
</p><p>
MessageWatch now works properly thanks to Halen (nitrate92) trying all the stupid things that everyone else was too scared to, which was the solution because WebTV.
</p><p>
<blackface>Changes to testing</blackface>
</p><p>
With this update, we've finally entered the final stage of testing! From now on, make sure you report every single issue you find. Click on every link, on every page, and just try to break things through any means necessary.
</p><p>
Remember, debugging on production is always the answer.
</p><p>
</p></font><p><font size="4">
Have fun!





<br>
<br>
<br>
<br>
</font>

            </p>
          
        
        </td>
        <td abswidth="20"><img src="wtv-home:/ROMCache/spacer.gif" width="26" height="1"></td>
      </tr>
      <tr>
        <td colspan="3" height="20"></td>
      </tr>
    </tbody></table>
    </td>
  </tr>
</tbody></table>






















</display></body></html>
`;