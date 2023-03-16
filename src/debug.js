var debugMode = false;
const fldDebug = "debug";
const divDebug = "divDebug";

function toggleDebug() {
	clearMessages();
	debugMode = ~debugMode;
	if (debugMode) showControl(divDebug);
	else hideControl(divDebug);
}


function logDebug(line) {
	let text = getCtlValue("debug");
	setCtlValue("debug", `${text}\n${line}`);

}
function clearDebug() {
	setCtlValue("debug", "");
}
function generateSelect(arr) {
	let options = "";
	for (let i = 0; i < arr.length; i++) {
		options = `${options}<option value="${arr[i]}">${arr[i]}</option>`;
	}

	return `<select onchange='selectOption(this.id,this.value)'">${options}</select> `;
}


function selectOption(id, value) {
	let debugData = "";
	if (value == "data")
		debugData = JSON.stringify(data, null, '\t');
	else if (value == "WorkItems")
		debugData = JSON.stringify(WorkItems, null, '\t');
	else if (value == "Result JSON")
		debugData = emptyjson;
	else {
		infoMessage("File path copied to clipboard.");
	}

	if (debugData.length > 0) {
		setCtlValue(fldDebug, debugData);
		//copyToClipboard(debugData);
		infoMessage("Debug data copied to clipboard");
	}
}


function openDebugFile(){
	clearMessages();
	fileTypeReading = pfOpenFile;
	openFile();
}

function doCheckError() {
	hideControl(divResultLinks);
	clearMessages();
	fileTypeReading = "-checkError";
	openFile();

}


function load() {
	let msg = `url:${url}\njson:${json}`;
	alert(msg);
}

