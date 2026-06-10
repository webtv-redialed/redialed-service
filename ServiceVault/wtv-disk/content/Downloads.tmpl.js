var minisrv_service_file = true;

headers = `200 OK
Content-Type: text/html`;

data = `<html><head></head><body vspace="0" vlink="36d5ff" text="#44cc55" link="36d5ff" bgcolor="#191919">
<title>
Download-O-Rama
</title>
<br><br>
<h1>
Download-O-Rama!
</h1>
<br>
Welcome to Download-O-Rama.
<p>
Download any of our fine file sets:
</p><h2>Demos</h2>
<ul>
<li><a href="wtv-disk:/content/Demos.tmpl">
The Best of TVML Demos, Vol. 1
</a>
</li><li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=bhphoto&amp;group=diskcache-bhphoto">
BH Photo
</a>
</li><li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=Demo2&amp;group=Demo2">
NAPTE '98 Crossover Demo Data
</a>
</li><li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=Demo&amp;group=Demo">
Crossover Demo Data from the Plus launch.
</a> (See the <a href="wtv-disk:/content/Demo/index.html">index</a>, from the service.)
</li><li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=DealerDemo&amp;group=DealerDemo">
Dealer Demo
</a> </li><li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=DealerDemo-JP&amp;group=DealerDemo-JP">
Dealer Demo JP
</a> </li>
<li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=DealerDemo-BPS&amp;group=DealerDemo">
Dealer Demo BPS
</a> </li>
<li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=PhilEmail&amp;group=PhilEmail">
Phil Video E-mail Demo Data
</a> (also, don't forget to send yourself a
<a href="wtv-tricks:/sendvideoemail?message=PhilEmailDemo.tmpl">phil video mail</a> message)
</li><li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=VideoEmail&amp;group=VideoEmail">
Japan Video E-mail Demo Data
</a> (also, don't forget to send yourself a
<a href="wtv-tricks:/sendvideoemail">demo video mail</a> message)
</li><li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=VideoFlash&amp;group=VideoFlash">VideoFlash Demos</a>
(Test the downloaded <a href="file://Disk/Browser/VideoFlash/Index.html">movies</a>.)
</li></ul>
<h2>Offline Games</h2>
<ul><li><a href="wtv-setup:/setupgames">Subscribe to offline games.</a>
</li><li><a href="wtv-setup:/setupgames-reset">Erase subscription to offline games.</a>
</li></ul>
<h2>Tests</h2>
<ul>
<li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=CacheDownloadTest&amp;group=diskcache-g1">
<i>DiskCache download test</i></a>
</li><li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=GiantsDemo&amp;group=diskcache-GiantsDemo">
<i>Giants Demo Disk Cache Preload</i></a>
</li><li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=Emmys&amp;group=diskcache-Emmys">
<i>Emmys ITV Demo Disk Cache Preload</i></a>
</li></ul>
<h2>Music</h2>
<li><a href="wtv-disk:/sync?diskmap=Music&amp;group=Music&amp;Throttle=no">
<i>All Music</i> (can take a very long time)</a>

</li><li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=Karaoke&amp;group=Karaoke">
<i>Karaoke</i></a>

<!-- <h2>Japan Dictionaries</h2>
</li><li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=dictdown">
<i>Force dictionaries from service</i></a>
</li><li><a href="wtv-disk:/content/DownloadScreen.tmpl?diskmap=dictsync">
<i>Synchronize dictionaries with service</i></a>

<h2>UserStore (USE WITH CAUTION)</h2>
<form action="wtv-disk:/content/DownloadScreen.tmpl?diskmap=Upload&amp;Upload=true">
<li>
Synchronize userstore:
<input name="root" type="text" value="file://Disk/" bgcolor="#444444" text="#ffdd33" cursor="#cc9933" size="30"><br>
<input type="checkbox" name="useSubscriber" value="true">Associate these files with subscriber
</li></form> -->
</body></html>`;