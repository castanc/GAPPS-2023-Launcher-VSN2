

function writeInnerHTML(divId, html) {
	let ctl = document.getElementById(divId);
	if (ctl)
		ctl.innerHTML = html;
	// else
	// 	console.error("writeInnerHTML() ERROR:", divId);
}

function showControl(ctl) {
	let control = document.getElementById(ctl);
	if (control)
		control.style.display = "block";
	// else {
	// 	console.error(`showControl(${ctl}) doesnt exist`);
	// }
}



function IsEmpty(val, title) {
	let result = val == null || val.length == 0;
	if (result)
		dangerMessage(`Invalid ${title}`);
	return result;
}




function setFocus(fieldId) {
	let ctl = document.getElementById(fieldId);
	if (ctl) ctl.focus();
}




function showSpinner(value = true, msg = "Loading...") {
	//TODO: NOT WORKING THE SPINNER
	if (value) {
		showControl("spinner");
	}
	else {
		hideControl("spinner");
	}
}

function hideControl(ctl) {
	let control = document.getElementById(ctl);
	if (control)
		control.style.display = "none";
	else {
		console.log(`hideControl(${ctl}) invalid control`);
		// try
		// {
		// 	throw new Error(`hideControl(${ctl}) invalid control`);
		// }
		// catch(ex)
		// {
		// 	showException(ex);
		// }
	}

}



function setCtlValue(id, val) {
	let ctl = document.getElementById(id);
	if (ctl)
		ctl.value = val;
	else {
		//console.error(`setCtlValue() Invalid control: ${id}`);
		try
		{
			throw new Error(`setCtlValue() Invalid control: ${id}`);
		}
		catch(ex)
		{
			showException(ex,"setCtlValue");
		}
	}

}

function getCtlValue(id) {
	let ctl = document.getElementById(id);
	if (ctl)
		return ctl.value;
	else {
		//console.error(`Invalid control ${ctl}`);
		try
		{
			throw new Error(`getCtlValue() Invalid control: ${id}`);
		}
		catch(ex)
		{
			showException(ex,"setCtlValue");
		}
		return "";
	}

}




function getBoolean(divId) {
	let ctl = document.getElementById(divId);
	if (ctl)
		return ctl.checked;
	return false;
}

function setBoolean(divId, value) {
	let ctl = document.getElementById(divId);
	if (ctl)
		ctl.checked = value;
}


function fieldFocused(id, value) {
	//copyToClipboard(value);
	clearMessages();
	//infoMessage(`Field ${id} copied to clipboard.`);
}


function setFontSize(isMobile)
{
	if ( window.innerWidth > window.innerHeight)
		cssRoot.style.setProperty('--colWidth', '12%');
	else
		cssRoot.style.setProperty('--fontSize', '24px');
}

function createLink(divId, url, text) {
	if (url.trim().length > 0) {
		configChanged();
		let html = `<a id="link${divId}" href="${url}" target="_blank">${text}</a>`;
		writeInnerHTML(divId, html);
	}
}


function showData()
{
	console.log("show data");
	data = JSON.parse(readedData);
	buildStackedMenuCards();

}


function doAction(sourceId,targetId)
{
	hideControl(sourceId);
	showControl(targetId);
}
function closePage(divId)
{
	hideControl(divId);
	showControl(divMenu);
}