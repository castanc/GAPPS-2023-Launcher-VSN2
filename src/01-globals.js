var finished = false;
var logsOpen = false;

var msg = "";

var configChanges = false;



//https://www.technewstoday.com/not-allowed-to-load-local-resource/
function doCreateFileLink(divId, value, text) {
	if (value.trim().length > 0) {
		configChanged();
		if (location.protocol == "file:")
			createLink(divId, `file://${value}`, text)
		// else 
		// 	createLink(divId, `http://localhost:8080//${value}`, text)
	}
}

function doCreateLocalFileLink(divId, value, text) {
	if (value.trim().length > 0) {
		configChanged();
		if (location.protocol == "file:")
			createLink(divId, `file://${value}`, text)
		else
			createLink(divId, `http://localhost:8080//${value}`, text)
	}
}

