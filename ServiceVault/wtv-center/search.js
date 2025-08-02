var wtvrsvc_service_file = true;
headers = `302 Moved temporarily\nLocation: `;

// Did the user enter a website domain? Did they try to enter a "wtv-" URL like a smartass?
if (/([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#\.]?[\w-]+)*\/?/gm.test(request_headers.query["search-string"]) && !/^(wtv-)/.test(request_headers.query["search-string"])) {
    if (!/^(https|http|proto?:\/\/)/.test(request_headers.query["search-string"])) headers += `http://`; // If our search string doesn't include a protocol, assume it's HTTP
    headers += request_headers.query["search-string"];
} else {
    headers += `http://frogfind.com/?q=${encodeURIComponent(request_headers.query["search-string"])}`;
}