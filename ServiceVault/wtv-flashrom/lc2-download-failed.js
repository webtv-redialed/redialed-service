var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Pragma: no-cache
Content-type: text/html`;

data = engine.renderFileSync('wtv-flashrom/LC2DownloadFinished', { success: false, serviceNameShort: minisrv_config.config.serviceName, boxName: session_data.getBoxName(), error: parseInt(request_headers.query.error), tryAgainUrl: 'wtv-flashrom:/get-lc2-page', startTime: Math.round(Date.now() / 1000) });