var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
wtv-reconnect-url: client:poweroff?invalRAMImage&autoPowerOn
wtv-visit: client:HangupPhone?allow-reconnect=no
wtv-expire-all: client:HangupPhone
Content-type: text/html`;

data = engine.renderFileSync('wtv-flashrom/LC2DownloadFinished', { success: true, serviceNameShort: minisrv_config.config.serviceName, boxName: session_data.getBoxName() });