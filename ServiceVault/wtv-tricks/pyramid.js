var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-type: image/jpg`;

var index = Math.floor(Math.random() * 3);
var imageArray = ["0", "1", "2"];

var image = imageArray[index];
if (image == "0") {
    var image0 = new Buffer(
        "base64"
    );
    data = image0;
} else if (image == "1") {
    var image1 = new Buffer(
        "base64"
    );
    data = image1;
} else if (image == "2") {
    var image2 = new Buffer(
        "base64"
    );
    data = image2;
}