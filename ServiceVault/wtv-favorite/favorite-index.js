var minisrv_service_file = true;

var favstore_exists = session_data.favstore.favstoreExists();

if (favstore_exists != true) {
    session_data.favstore.createFavstore();
    headers = `302 Moved temporarily
Location: wtv-favorite:/favorite`;
} else {
    var folder_array = session_data.favstore.getFolders();
    var url = request_headers.request;
    var key = url.split("?")[1];

    headers = `400 You have not assigned a favorite to ${key}`;
}
