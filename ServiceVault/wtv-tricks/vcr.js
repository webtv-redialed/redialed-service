var wtvrsvc_service_file = true;

headers = `200 OK
Content-Type: text/html`;

data = `<html>
<head>
<title>VCR</title>
</head>

<display hideoptions>

<body BC=#1a1b21 background=file://ROM/tvImages/vcr/VCRBackgroundPattern.gif text=#cbcbcb link=#4489a8 hspace=0 vspace=0 FS=medium noscroll hideoptions>

<table CS=0 CP=0 !border>

<!-- Sidebar of page -->
<tr><td AW=99 H=420 V=top>
<table CS=0 CP=0 !border>
<tr><td BC=#41505c>
<table CS=0 CP=0 !border>
<tr><td H=10>
<tr><td W=8>
<td href=client:showtvhome>
<img src=file://ROM/Cache/WebTVLogoJewel.gif W=87 H=67>
</table>
<tr><td W=100 H=240 BC=41505c gradcolor=1a1b21 gradangle=0 V=top>
<table CS=0 CP=0 !border>
<tr><td H=4>
<tr><td W=100 H=2 BC=000000 transparency=64>
<tr><td W=100 H=1>
<tr><td W=100 H=2 BC=ffffff transparency=88>
<tr><td>
<table CS=0 CP=0>
<tr><td W=7>
<td W=88 H=26>
<table name="Program" href="file://rom/tvhtmls/vcrprogram.html" CS=0 CP=0>
<tr><td>
<font C=#ffcf69><shadow>
<spacer type=block W=6>
Program
</font></shadow>
<td W=8>
</table>
</table>
<tr><td W=100 H=2 BC=000000 transparency=64>
<tr><td W=100 H=1>
<tr><td W=100 H=2 BC=ffffff transparency=88>
</table>
</table>

<!-- Main body of page -->
<td W=460 V=top>
<table CS=0 CP=0 !border>
<tr><td BC=#41505c>
<spacer type=block W=10>
<img src=file://ROM/TVImages/vcr/VCRBanner.gif W=450 H=55>
<tr><td>
<table CS=0 CP=0 !border>
<tr><td>
<table CS=0 CP=0 !border>
<tr><td AW=10 AH=3 BC=41505c>
<img src=file://ROM/tvimages/VideoBorder_TopLeft.gif W=10 H=3>
<td AW=352 AH=3 BC=41505c gradcolor=1a1b21 gradangle=90>
<img src=file://ROM/tvimages/VideoBorderEdge_Top.gif W=352 H=3>
<td AW=10 AH=3 BC=1a1b21>
<img src=file://ROM/tvimages/VideoBorder_TopRight.gif W=10 H=3>

<tr><td V=top background=file://ROM/tvimages/VideoBorderEdge_Left.gif AW=10 AH=256 BC=41505c gradcolor=1a1b21 gradangle=0>
<table CS=0 CP=0 !border>
<tr><td H=23>
<tr><td W=100 H=2 BC=000000 transparency=64>
<tr><td W=100 H=1>
<tr><td W=100 H=2 BC=ffffff transparency=88>
<tr><td H=26>
<tr><td W=100 H=2 BC=000000 transparency=64>
<tr><td W=100 H=1>
<tr><td W=100 H=2 BC=ffffff transparency=88>
</table>

<td AW=352 AH=256 BC=161d2d>
<a selected href="client:showtvfullscreen?usealtconfig" nextleft="Program">
<tv usealtconfig W=352 H=256 nosignalmessage=long>
</a>
<td AW=10 AH=256>
<img src=file://ROM/tvimages/VideoBorderEdge_Right.gif W=10 H=256>

<tr><td AW=10 AH=3>
<img src=file://ROM/tvimages/VideoBorder_BotLeft.gif W=10 H=3>
<td AW=352 AH=3 BC=1a1b21>
<img src=file://ROM/tvimages/VideoBorderEdge_Bottom.gif W=352 H=3>
<td AW=10 AH=3>
<img src=file://ROM/tvimages/VideoBorder_BotRight.gif W=10 H=3>
</table>

<td W=80 H=256 V=top AL=middle>
<table CS=0 CP=0 !border>
<tr><td AL=middle href=client:vcrcontroller?command=power>
<img src=file://ROM/tvimages/vcr/Button_Power.gif W=27 H=27>
<tr><td H=5>
<tr><td AL=middle>
<img src=file://ROM/tvimages/vcr/Label_Power.gif W=53 H=17>
<tr><td H=10>
<tr><td AL=middle href=client:vcrcontroller?key=tv-vcr>
<img src=file://ROM/tvimages/vcr/Button_TVVCR.gif W=27 H=27>
<tr><td H=5>
<tr><td AL=middle>
<img src=file://ROM/tvimages/vcr/Label_TVVCR.gif W=53 H=17>
</table>
</table>
<tr><td>

</table>
</table>
</body>
</html>`;
