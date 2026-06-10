var minisrv_service_file = true;

var group = request_headers.request_url;
group = group.substring(group.indexOf(":") + 1);

headers = `302 Moved temporarily
Content-Type: text/html
Location: wtv-news:/news?group=${group}`;
