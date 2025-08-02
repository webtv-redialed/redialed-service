var wtvrsvc_service_file = true;

var pagename = session_data.pagestore.createPage(
    request_headers.query.styleName.replace(" ", "_")
);

headers = `302 Moved temporarily
Connection: Keep-Alive
Content-Type: text/html
wtv-expire-all: wtv-author:/documents
Location: wtv-author:/show-blocks?docName=${pagename}`;
