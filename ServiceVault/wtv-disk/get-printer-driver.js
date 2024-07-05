var minisrv_service_file = true;

headers = `200 OK
Content-Type: wtv/download-list`;

data = `DISPLAY what?

DELETE-GROUP PDRIVER

CREATE-GROUP PDRIVER
state: invalid
service-owned: false
base: file://Disk/Browser/

GET Z11.mod
group: PDRIVER
location: wtv-content:/pdrivers/lexmark/Z11.mod?
file-permission: r
service-source-location: /webtv/content/contentd/content/pdrivers/lexmark/Z11.mod?
client-dest-location: file://Disk/Browser/DiskFlash/Modules/Z11.mod

GET printer.drv
group: PDRIVER
location: wtv-content:/pdrivers/lexmark/Z11.txt?
file-permission: r
service-source-location: /webtv/content/contentd/content/pdrivers/lexmark/Z11.txt?
client-dest-location: file://Disk/Browser/printer.drv

SET-GROUP PDRIVER
state: ok
version: 1663992354
last-checkup-time: ${strftime(
    "%a, %d %b %Y %H:%M:%S",
    new Date(new Date().toUTCString())
)} +0000

DISPLAY because`;
