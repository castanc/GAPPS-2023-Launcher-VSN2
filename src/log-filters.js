
function openLog(){
	fileTypeReading = pfLog;
	if ( config.LogsPath.length>0)
		copyToClipboard(config.LogsPath);
	else
		copyToClipboard(pfLog);
	openFile();
}


function doLoadLog()
{
	showControl(divLogs);
	setCtlValue(fldLog,readedData);
	logsOpen = true;
}

function doFilterLog()
{

}
