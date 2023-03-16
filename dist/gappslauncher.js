const divMenu = "divMainMenu";

var localVersion = 'gapps launcher 7.0.144'; //3/16/2023 3:00:49 PM

var config={};
const configKey = "gapps launcher-config";
var configChanged = false;



function getConfig(){
    let json = localStorage.getItem(configKey);
    if ( config == null )
    {
        config = {};
        config.Lenguage = lang;
        config.DarkMode = "system";
        localStorage.setItem(configKey,JSON.stringify(config));
    }
    else cfg = JSON.parse(json)
    return config;
}

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


const cards = document.querySelectorAll('.st-card');
let zIndex = cards.length;

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.zIndex = zIndex++;
  });
});
'use strict'
var autoRun = 'false';
var data = {};
var fileMode = 'Binary';
var readBase64 = true;
var fileName = '';
var selFile = {};
var readedData = '';
var fileTypeReading = '';
var usingFile = false;
var localMode = false;
var resultFiles = [];
var isGoolgeVersion=false
var config = {}
var CAPSLockOn = false
var IP = ''
var userEmail = '<?!= getLoggedUser(); ?>';
var debugText = '<?!= getDebug(); ?>';
var cssRoot = document.querySelector(':root');
var lang = 'en'
var lastOpen = ''
var isGoogleUser = false;
var mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
window.addEventListener('load', entryPoint);
window.onerror = function (msg, url, line) {
  logDebug(msg);
  logDebug(url);
  logDebug(line);
   dangerMessage(`${msg}</br>${url}</br>Line:${ line}`);
   console.log('window.onerror', msg, url, line);
}

    window.addEventListener('keyup', function (e) {
        clearMessages();
        if (e.keyCode == 27) { }
        {
            if ( lastOpen != '' ) {
                hideControl(lastOpen);
                document.getElementById(divMenu).scrollIntoView();
            }

        }

        if (e.getModifierState('CapsLock')) {
            warnMessage("CAPS Lock");
            CAPSLockOn = true;
        }
        else {
            CAPSLockOn = false;
        }
    });
function startUp(){
   IP = getLocalIP()
   debugMode = debugText=='debug';
   document.getElementById('files').addEventListener('change', handleFileSelect, false);
   lang = getBrowserLanguage();
   setFileOpen();
   if ( mobile ) cssRoot.style.setProperty('--fsBase', '36px');
}

function entryPoint() {
    config = getConfig();
	startUp();
	setFileOpen();
	writeVersion();	
	document.getElementById('files').addEventListener('change', handleFileSelect, false);
	if ( location.protocol == "https:")
		callGS();
	else buildStackedMenuCards();
}



data = {
    "OutResult": 0,
    "OutMessage": "",
    "ProjectName": "GAPPSLauncher",
    "Url": "https://docs.google.com/spreadsheets/d/1ugPJ0IasfvMjBjJc45-jpnst6l_Ie5qTD4UJtz6RRZc/edit#gid=0",
    "Tabs": [
        {
            "Name": "Apps",
            "Data": [
                [
                    "Title",
                    "Version",
                    "VersionDate",
                    "Link",
                    "Description",
                    "Profile",
                    "Image"
                ],
                [
                    "Safe Words",
                    2,
                    "2022-12-31T03:00:00.000Z",
                    "https://script.google.com/macros/s/AKfycbwYVWp_9QbXVag1nnfnCGU_8Urx64e-cPZe4lD68avdybicXqtFt7I8JbizxUPUdLBb/exec?user=castanc%22",
                    "Encrypt and decrypts messages and files",
                    "",
                    "https://images.idgesg.net/images/article/2020/07/protected_padlock_with_checkmark_amid_encrypted_data_cybersecurity_data_security_encryption_by_matejmo_gettyimages-872829036_cso_nw_2400x1600-100853298-large.jpg"
                ],
                [
                    "Safe Words 2023",
                    6,
                    "2023-01-31T03:00:00.000Z",
                    "https://script.google.com/macros/s/AKfycbyAAFI4-1mnXRNOJ3aKGRj1GFwVhdaEpRtcL3504ft-9M3MTfg6boA5XJcEe_Fjx-JKFQ/exec",
                    "Encrypt and decrypts messages and files",
                    "DEV",
                    "https://www.bytebacklaw.com/wp-content/uploads/sites/242/2015/06/key-digitaliStock_000022243984_Large.jpg"
                ],
                [
                    "Safe Words",
                    7,
                    "2023-03-13T03:00:00.000Z",
                    "https://script.google.com/macros/s/AKfycbzeNXtmQr08U5T3hibUZpTKzlZbaRsv8sWNyxkTBCi_xix4PwHj5DBN4IyRu7844m2n/exec",
                    "",
                    "DEV",
                    "https://www.bytebacklaw.com/wp-content/uploads/sites/242/2015/06/key-digitaliStock_000022243984_Large.jpg"
                ],
                [
                    "My Passwords",
                    1,
                    "2023-03-10T03:00:00.000Z",
                    "https://docs.google.com/document/d/1xGW0EF1r9jhvgPmtSyiEHSpuRWlYq8ckBq7qcB6WyaA/edit",
                    "Passwords",
                    "DEV",
                    "https://tse4.mm.bing.net/th?id=OIP.cURd8nKTnfOOeLoQ0tQd8wHaEc&pid=Api"
                ],
                [
                    "Decryptify",
                    0.1,
                    "2022-01-18T03:00:00.000Z",
                    "https://script.google.com/macros/s/AKfycbx81up9mGf7Kc4N_y5yNNQxHXdJdpEiDIMUJQnUGfhlOQ5Sa9gggyLhSrXUt_rjUkdZ/exec",
                    "FREE Decrypt Only",
                    "",
                    "data:image/jpeg;base64,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"
                ],
                [
                    "Password Vault",
                    1,
                    "2022-01-09T03:00:00.000Z",
                    "https://script.google.com/macros/s/AKfycbxXem0pCoioB-CtPejj0iIQH5iPjYLjG29ACASt9Ny9f1KQawe9n_STivwANdN_0329/exec",
                    "Password Manager",
                    "",
                    "https://tse2.mm.bing.net/th?id=OIP.ovndBPEX8KCOLMmhC-hOmwHaD4&pid=Api"
                ],
                [
                    "Z Links",
                    1,
                    "2022-12-31T03:00:00.000Z",
                    "https://docs.google.com/forms/d/e/1FAIpQLSfhLHj7SvDKTH1CQp0EXrxZVgbZvPnwZFvlqt0za64wbcQ3jg/viewform",
                    "Z Links",
                    "DEV",
                    "https://i.pinimg.com/564x/03/1f/19/031f19debef43da5edfbf8ea044211cf.jpg"
                ],
                [
                    "Cesar Links",
                    1,
                    "2022-12-31T03:00:00.000Z",
                    "https://docs.google.com/spreadsheets/d/1PCJ8Aa0W9z2N6n1ZbVnN6-YlkPX-siI7XKQfOsSjWHo/edit?resourcekey#gid=1907269246",
                    "Cesar Links",
                    "DEC",
                    "https://upload.wikimedia.org/wikipedia/commons/8/83/Queensboro_Bridge_from_Manhattan_side.jpg"
                ],
                [
                    "Casa Robledo",
                    1,
                    "2022-12-31T03:00:00.000Z",
                    "https://docs.google.com/forms/d/e/1FAIpQLSdpCKRcCeiiDgyAU5tIbGNTHY1Eh8iE0TLIYo0E-6nNvVtTUg/viewform",
                    "Documentos Casa Robledo",
                    "",
                    "https://upload.wikimedia.org/wikipedia/commons/8/83/Queensboro_Bridge_from_Manhattan_side.jpg"
                ]
            ],
            "Result": 0,
            "Message": null
        },
        {
            "Name": "Profiles",
            "Data": [
                [
                    "Profile",
                    "User"
                ],
                [
                    "DEV",
                    "castanc@gmail.com"
                ],
                [
                    "DEV",
                    "ccastanouy@gmail.com"
                ],
                [
                    "DEV",
                    "kryptiguy@gmail.com"
                ]
            ],
            "Result": 0,
            "Message": null
        }
    ]
}


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
var fileInfo = {};
var readBase64=false;

function setFileOpen() {
	document.getElementById('files').addEventListener('change', handleFileSelect, false);

}

//read text file
	//TODO: SECOND TIME INVOKED OPEN FILE TO TRIGGERERING THIS METHOD
	function handleFileSelect(evt) {
		clearMessages();
		fileMode = "Binary";
		//readBase64 = true;
		showSpinner(true);
		var files = evt.target.files; // FileList object

		// Loop through the FileList and render image files as thumbnails.
		for (var i = 0, f; f = files[i]; i++) {

			var reader = new FileReader();

			// Closure to capture the file information.
			reader.onload = (function (file) {
				fileName = file.name;
				selFile = {};
				selFile.lastModifiedDate = file.lastModifiedDate;
				selFile.lastModified = file.lastModified;
				selFile.size = file.size;
				selFile.type = file.type;
				selFile.name = file.name;
				selFile.readSize = data.length;
				return function (e) {
					let fileData = e.target.result;
					let token = "base64,";
					let ix = fileData.indexOf(token);
					if (ix > 0) {
						fileData = fileData.substr(ix + token.length);
						try {
							if ( readBase64)
								readedData = atob(fileData);
							else readedData = fileData;
						}
						catch (ex) {
							showException(ex, `Decoding base64 data JSON. for ${fielName}\n${ex.message} `)
						}

					}
					else
						readedData = fileData;
					fileData = "";
					showSpinner(false);
					usingFile = true;
					showData();
				};
			})(f);

			reader.onerror = function (error) {
				showSpinner(false);
				dangerMessage("Error reading file.", error);
				reader.abort();
			};

			reader.onabort = function (abort) {
				showSpinner(false);
				showError("File Reader operation aborted");
			}

			// Read in the image file as a data URL.
			if (readBase64)
				reader.readAsDataURL(f);
			else
				reader.readAsText(f);
		}
	}


	function openFile() {
		let ctl = document.getElementById("files");
		ctl.click();
	}



function writeVersion()
{
	writeInnerHTML("divVersion",localVersion);
}


//window.addEventListener('load', entryPoint);
/*
function entryPoint() {
	startUp();
	setFileOpen();
	writeVersion();	
	document.getElementById('files').addEventListener('change', handleFileSelect, false);
	if ( location.protocol == "https:")
		callGS();
	else buildStackedMenuCards();
}
*/

	



function copyToClipboard(message, showMessage = false) {
	if (message.length > 0) {
		navigator.clipboard.writeText(message)
			.then(() => {
				if ( showMessage)
					infoMessage(`${message} copied to clipboard.)`, divStatus);
			})
			.catch(err => {
				dangerMessage("Error copying to clipboard. " + err);
				console.error("Can not copy clipboard via AP", err);
			});
	}
	else if (showMessage) warnMessage("Empty value to show. Load Project");

}


function readClipboard(fldId)
{
	navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.getElementById(fldId).innerText += clipText)
  );
  
}


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


function doDownload() {
	clearMessages();
	let fn = getCtlValue(fieldOutFileName);
	if (fn.length > 0)
		fileName = fn;

	if (data.length > 0) {
		downloadDataFile(data, fileName);
		// //downloadDataFile(data, fileName);
		// //todo: not downloading text files
		// if (usingFile) {
		// 	if (selFile.type.includes("pdf"))
		// 		downloadFile();
		// 	else (selFile.type.includes("text"))
		// 	downloadDataFile(data, fileName);
		// }
		// else {
		// 	downloadDataFile(data, fileName);
		// }
		showControl(iconHomeSave);
		successMessage(`${saveIcon} ${translate("OK. Saved to Downloads folder")}`);
	}
	else showError("No data to download.");
}

function textToBlob(text) {

	let myblob = new Blob([text], {
		type: 'text/plain'
	});
	return myblob;
}

//https://blog.logrocket.com/programmatic-file-downloads-in-the-browser-9a5186298d5c/
function downloadBlob(blob, filename) {
	// Create an object URL for the blob object
	const url = URL.createObjectURL(blob);

	// Create a new anchor element
	const a = document.createElement('a');

	// Set the href and download attributes for the anchor element
	// You can optionally set other attributes like `title`, etc
	// Especially, if the anchor element will be attached to the DOM
	a.href = url;
	a.download = filename || 'download';

	// Click handler that releases the object URL after the element has been clicked
	// This is required for one-off downloads of the blob content
	const clickHandler = () => {
		setTimeout(() => {
			URL.revokeObjectURL(url);
			this.removeEventListener('click', clickHandler);
		}, 150);
	};

	// Add the click event listener on the anchor element
	// Comment out this line if you don't want a one-off download of the blob content
	a.addEventListener('click', clickHandler, false);

	// Programmatically trigger a click on the anchor element
	// Useful if you want the download to happen automatically
	// Without attaching the anchor element to the DOM
	// Comment out this line if you don't want an automatic download of the blob content
	//a.click();

	// Return the anchor element
	// Useful if you want a reference to the element
	// in order to attach it to the DOM or use it in some other way
	return a;
}

function saveBlobToDisk(fileName, dataBlob) {
	//    selectNavOption(btnId);
	showError("");

	if (supported && location.protocol == "https:" && !fileHandle) {
		fileHandle = getNewTextFileHandle();
	}

	globalResult = false;
	let anchor = downloadBlob(dataBlob, fileName);

	if (anchor != null) {
		globalResult = false;
		result = false;
		anchor.click();
	}

	if (globalResult)
		infoMessage(translate("The data was saved succesfully"));
	else
		infoMessage(translate("The data was saved to your Downloads folder"));
}

function downloadDataFile(text, fName) {
	let r1 = false;
	let blob = textToBlob(text);
	let anchor = downloadBlob(blob, fName);

	if (anchor != null) {
		r1 = true;
		anchor.click();
		return true;
	}
	return false;
}

//https://stackoverflow.com/questions/32545632/how-can-i-download-a-file-using-window-fetch/55206314#55206314
function downloadFromUrl(dataurl, filename) {
	var a = document.createElement("a");
	a.href = dataurl;
	a.target = "_blank";
	a.setAttribute("download", filename);
	a.click();
	return false;
}

//download with fetch
//https://dmitripavlutin.com/fetch-with-json/#:~:text=GET%20JSON%20data&text=await%20fetch('%2Fapi%2Fnames,()%20returns%20a%20promise!).
async function downloadFetch(url) {
	const response = await fetch(url);
	data = await response.json();
	console.log(names);
	// logs [{ name: 'Joker'}, { name: 'Batman' }]
}


function doLocalFetch() {
	let value = "C:\\MyWorks\\_ADO-Migration\\PRJ04-SiteFactory\\Run05\\SiteFactory_ADO-Migration-Generated.json";
	let url = `file://${value}`;

	fetch('url')
		.then((response) => response.json())
		.then((data) => console.log(data));

}









function successCall(result) {
	console.log("succesCall");
	showSpinner(false);
	console.log("successCall()", result);
	data = JSON.parse(result);
	//downloadDataFile(result,"data.json");
	buildStackedMenuCards();
}


function failureCall(error) {
	dangerMessage("Error reading from Google Drive");
	dangerMessage(error);
	console.error(error);
	showSpinner(false);
}
function callGS() {
	clearMessages();
	console.log("calling Google funciton");
	if (location.protocol == "https:") {
		showSpinner(true);
		google.script.run.withFailureHandler(failureCall)
			.withSuccessHandler(successCall)
			.DownloadSheet("https://docs.google.com/spreadsheets/d/1ugPJ0IasfvMjBjJc45-jpnst6l_Ie5qTD4UJtz6RRZc/edit#gid=0");
	}
	else {
		debugMode = true;
	}

}







function buildStackedMenuCards0() {
	let html = "";
	let className = "st-card-portrait";
	if ( window.innerWidth > window.innerHeight)
	{
		className = "st-card-landscape";
		logDebug(`className:${className}`);
	}


	for (let i = 1; i < data.Tabs[0].Data.length; i++) {
		let title = data.Tabs[0].Data[i][0];
		let version = data.Tabs[0].Data[i][1];
		let versionDate = data.Tabs[0].Data[i][2].split("T")[0];
		let link = data.Tabs[0].Data[i][3];
		let description = data.Tabs[0].Data[i][4];
		let profile = data.Tabs[0].Data[i][5];
		let imgUrl = data.Tabs[0].Data[i][6];
		let imgHtml = "";
		let linkHtml = `<a href="${link}" target="blank">${title}</a>`;
		linkHtml = link;
		if (imgUrl.trim().length > 0)
			imgHtml = `<a href="${link}" target="blank"><img src="${imgUrl}"></a>`;

		htmlVersion = `${description} (Vsn: ${version} ${versionDate})`;

		let card = `
	<div class="${className}">
		${imgHtml}
		<h2>${title}</h2>
		<!--
		<p>${htmlVersion}</p>
		-->
	 </div>`;

		html = `${html}${card}`;

	}
	writeInnerHTML(divMenu, html);
}

function buildStackedMenuCards() {
	let html = "";
	let className = "st-card";
	if ( window.innerWidth > window.innerHeight)
		cssRoot.style.setProperty('--colWidth', '20%');


	for (let i = 1; i < data.Tabs[0].Data.length; i++) {
		let title = data.Tabs[0].Data[i][0];
		let version = data.Tabs[0].Data[i][1];
		let versionDate = data.Tabs[0].Data[i][2].split("T")[0];
		let link = data.Tabs[0].Data[i][3];
		let description = data.Tabs[0].Data[i][4];
		let profile = data.Tabs[0].Data[i][5];
		let imgUrl = data.Tabs[0].Data[i][6];
		let imgHtml = "";
		let linkHtml = `<a href="${link}" target="blank">${title}</a>`;
		linkHtml = link;
		if (imgUrl.trim().length > 0)
			imgHtml = `<a href="${link}" target="blank"><img src="${imgUrl}"></a>`;

		htmlVersion = `${description} (Vsn: ${version} ${versionDate})`;

		let card = `
	<div class="${className}">
		${imgHtml}
		<h2>${title}</h2>
		<!--
		<p>${htmlVersion}</p>
		-->
	 </div>`;

		html = `${html}${card}`;

	}
	writeInnerHTML(divMenu, html);
}




//https://stackoverflow.com/questions/20194722/can-you-get-a-users-local-lan-ip-address-via-javascript
/* ES6 */
const findLocalIp = (logInfo = true) => new Promise( (resolve, reject) => {
    window.RTCPeerConnection = window.RTCPeerConnection 
                            || window.mozRTCPeerConnection 
                            || window.webkitRTCPeerConnection;

    if ( typeof window.RTCPeerConnection == 'undefined' )
        return reject('WebRTC not supported by browser');

    let pc = new RTCPeerConnection();
    let ips = [];

    pc.createDataChannel("");
    pc.createOffer()
     .then(offer => pc.setLocalDescription(offer))
     .catch(err => reject(err));
    pc.onicecandidate = event => {
        if ( !event || !event.candidate ) {
            // All ICE candidates have been sent.
            if ( ips.length == 0 )
                return reject('WebRTC disabled or restricted by browser');

            return resolve(ips);
        }

        let parts = event.candidate.candidate.split(' ');
        let [base,componentId,protocol,priority,ip,port,,type,...attr] = parts;
        let component = ['rtp', 'rtpc'];

        if ( ! ips.some(e => e == ip) )
            ips.push(ip);

        if ( ! logInfo )
            return;

        console.log(" candidate: " + base.split(':')[1]);
        console.log(" component: " + component[componentId - 1]);
        console.log("  protocol: " + protocol);
        console.log("  priority: " + priority);
        console.log("        ip: " + ip);
        console.log("      port: " + port);
        console.log("      type: " + type);

        if ( attr.length ) {
            console.log("attributes: ");
            for(let i = 0; i < attr.length; i += 2)
                console.log("> " + attr[i] + ": " + attr[i+1]);
        }

        console.log();
    };
} );

function getLocalIP()
{
    findLocalIp().then(
        ips => {
            let s = '';
            ips.forEach( ip => s += ip + '<br>' );
            return s;
        },
        err => {
            //p.innerHTML = err;
            return err;
        }
    );
}

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

	//messaages.js
	var messages = [];
	const divMessages = "divMessages";
	const divStatus = divMessages;
	
	function clearMessages() {
		messages = [];
		writeInnerHTML(divMessages, "");
		msg = "";
	}

	function showMessage(msg)
	{
		infoMessage(msg);
	}


	function infoMessage(text, divId = "divMessages") {
		if (text.length > 0) {
			addMessage(text, statusInfo, classInfo);
			renderLast(divId);
		}

	}

	function successMessageT(text, divId = "divMessages") {
		addMessage(translate(text), statusSuccess, classSuccess);
		renderLast(divId);
	}

	function warnMessageT(text, divId = "divMessages") {
		addMessage(translate(text), statusWarning, classWarning);
		renderLast(divId);
	}

	function dangerMessageT(text, divId = "divMessages") {
		addMessage(translate(text), statusDanger, classDanger);
		renderLast(divId);
	}



	function successMessage(text, divId = "divMessages") {
		if (text.length > 0) {
			addMessage(text, statusSuccess, classSuccess);
			renderLast(divId);
		}
	}

	function warnMessage(text, divId = "divMessages") {
		if (text.length > 0) {
			addMessage(text, statusWarning, classWarning);
			renderLast(divId);
		}
	}

	function dangerMessage(text, divId = "divMessages") {
		if (text.length > 0) {
			addMessage(text, statusDanger, classDanger);
			renderLast(divId);
		}
		//console.error(text);
	}




	function removeMessage(id) {
		let ctl = document.getElementById(`msg${id}`);
		if (ctl)
			ctl.innerHTML = "";

	}

	//    <button type="button" class="close" onclick="closeMessage(${messages.length})">&times;</button>
	function addMessageT(text, style, classes) {
		messages.push(`
    <div id="msg${messages.length}" class="${classes}"
    onclick="removeMessage(${messages.length})"
    ><strong>${style}</strong>${translate(text)}</div>`);
		return messages.length - 1;
	}

	function addMessage(text, style, classes) {
		console.log("addMessage", text);
		messages.push(`
    <div  id="msg${messages.length}" class="${classes}"
    onclick="removeMessage(${messages.length})"    
    ><strong>${style}</strong>${text}</div>`);
	}

	function renderLast(divId = "divMessages") {
		let ctl = document.getElementById(divId);
		let elem = document.createElement("div");
		elem.innerHTML = messages[messages.length - 1];
		ctl.appendChild(elem);
		showControl(divId);
	}

	function renderMessages(divId = "divMessages") {
		let html = ""; //
		messages.forEach(x => {
			html += x;
		});
		writeInnerHTML(divId, html);
		showControl(divId);

	}
	// function writeInnerHTML(divId, html) {
	// 	let ctl = document.getElementById(divId);
	// 	if (ctl)
	// 		ctl.innerHTML = html;
	// 	else
	// 		console.error("writeInnerHTML() ERROR:", divId);
	// }

	//messages.js

	const statusWarning = `<i class="fas fa-exclamation-triangle"></i>`;
	const statusSuccess = `<i class="fa fa-check"></i>`;
	const statusError = `<i class="fa fa-bomb"></i>`;
	const statusInfo = `<i class="fas fa-info-circle"></i>`
	const classWarning = "alert alert-warning";
	const classSuccess = "alert alert-success";
	const classDanger = "alert alert-danger";
	const classInfo = "alert alert-info";
	const statusDanger = `<i class="fa fa-bomb"></i>`;

	


const pageInfo = "pageInfo";
const modalPageInfo = "modalFileInfo";
const fldVersion = "txVersion";
const fldUser = "txUser";
const fldIP = "txIP";
const fldClipboardAPI = "txClipboardAPI";
const fldFileAPI = "txFileAPI";
const fldScreen = "txScreen";
const fldUserAgent = "txUserAgent";
const fldRAM = "txRAM";
const fldLanguage = "txLanguage";
var pageInfoOpen = false;


function loadSystemInfo()
{
    setCtlValue(fldVersion,localVersion);
    setCtlValue(fldUser,userEmail);
    setCtlValue(fldIP,IP);
    setCtlValue(fldScreen,`${window.innerWidth} x ${window.innerHeight}`);
    setCtlValue(fldRAM,`${navigator.deviceMemory} GB`);
    setCtlValue(fldLanguage,lang);
    setCtlValue(fldUserAgent,navigator.userAgent);
}

function togglePageInfo()
{
    loadSystemInfo();
    openModal(modalPageInfo);
}






const pageSettings = "pageSettings";
const fldSettingsLanguage = "txSettingsLanguage";
const fldDarkMode = "txDark";
var pageSettingsOpen = false;


function loadSettingsInfo(cfg)
{
}

function toggleSettings()
{
    pageSettingsOpen = ~pageSettingsOpen;
    if ( pageSettingsOpen)
    {
        lastOpen = pageSettings;
        loadSystemInfo();
        //hideControl(divMenu);
        showControl(pageSettings);
        document.getElementById(pageInfo).scrollIntoView();
    }
    else
    {
        hideControl(pageSettings);
        document.getElementById(divMenu).scrollIntoView();
        lastOpen = "";
        //showControl(divMenu);
    }
}





var tob = {};    //translateObject
var translations = [];
var lastLanguage = "";
var languages = [];



function getBrowserLanguage() {
    let l = navigator.language.split("-");
    if (l.length > 0)
        return l[0];
    return "en";
}


function translateArray(txs, lang = "") {
    if (!txs || txs.length == 0)
        return txs;

    let result = txs;
    if (lang != "en") {
        txs.forEach(x=>{
            let r = translations.filter(x => x[0] == txt);
            if (r.length > 0)
                result.push(r[0][1]); 
        });
        }

    let txt = "";
    result.forEach(x=>{
        txt += x;
    });
    return txt;
}


function translate(txt, lang = "") {
    if (!txt || txt.length == 0)
        return txt;

    let result = [];
    if (lang != "en") {
        result = translations.filter(x => x[0] == txt);
        if (result.length > 0)
            txt = result[0][1]
        else {
            //console.error(`Translation not found ${lang} ${txt}`);
            console.log("translate NotFound ",txt);
        }
    }
    return txt;
}


function translatePage(langCode = "") {


    if (langCode.length == 0)
        if ( config )
            langCode = config.Language;
        else 
            langCode = getBrowserLanguage();


    transNotFound = langCode + "\n";

    console.log(`translatePage() langCOde:${langCode}`);
    let labels = document.getElementsByTagName("label");

    for (var i = 0; i < labels.length; i++) {
        labels[i].innerText = translate(labels[i].innerText, langCode);
    }

    let buttons = document.getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerText = translate(buttons[i].innerText, langCode);
    }

    let ctls = document.getElementsByTagName("input");
    for (var i = 0; i < ctls.length; i++) {
        if (ctls[i].placeholder && ctls[i].placeholder.length > 0)
            ctls[i].placeholder = translate(ctls[i].placeholder, langCode);

    }

    ctls = document.getElementsByTagName("textarea");
    for (var i = 0; i < ctls.length; i++) {
        if (ctls[i].placeholder && ctls[i].placeholder.length > 0)
            ctls[i].placeholder = translate(ctls[i].placeholder, langCode);
    }

    // if (transNotFound.length > 0) {
    //     localStorage.setItem("transNotFound", transNotFound);
    //     console.log("NOT FOUND TRANSLATIONS", transNotFound);
    // }
}

function failureGetLanguage(error) {
    showSpinner(false);
    console.log("failureGetLanguage() failure");
    showError("Server Error reading Language:" + error);
}

function successGetLanguageTable(result) {
    console.log("successGetLanguageTable()", result);
    if ( config )
        lastLanguage = config.Language;
    translations = result;  //JSON.parse(result);
    if ( config && translations.length > 0 && translations[0].length > 1) {
        localStorage.setItem(`language-${config.Language}`, JSON.stringify(translations));
    }
    translatePage();
}

function cleanQuotes(arr) {
    for (let i = 0; i < result.length; i++) {
        arr[i] = arr[i].replace("\"", "");
        arr[i] = arr[i].replace("\"", "");
        arr[i] = arr[i].replace("[", "");
    }
    return arr;
}

function successGetLanguages(result) {
    console.log("getLangugages()", result);
    let langs = result;
    languages = langs.split(",");
    //languages = cleanQuotes(languages);
    localStorage.setItem("languages", langs);
    let htmlLang = buildLanguageSelect();
    writeInnerHTML("userLang", htmlLang);
    showWarning(` ${languages.length} ${translate("languages updated.")}`);

}

function buildLanguageSelect(id = "", excludeLang = "", defaultLang = "") {
    if (!id || id.length == 0)
        id = "userLang";

    console.log("buildLanguageSelect()", languages);
    if (!defaultLang || defaultLang.length == 0)
        defaultLang = languageCode;

    let html = `<select name="${id}" id="${id}" class="field-size form-control" onchange="languageChanged(this.id,this.value)">`;
    for (let i = 0; i < languages.length; i++) {
        if (languages[i] != excludeLang) {
            let langName = getLanguageName(languages[i]);
            if (languages[i] != defaultLang)
                html = html + `<option value="${languages[i]}">${langName}</option>`
            else
                html = html + `<option value="${languages[i]}" selected>${langName}</option>`
        }
    }
    html = html + "</select>";
    return html;
}

function getLanguages() {
    let langs = localStorage.getItem("languages");

    if (!langs) {
        if (location.protocol == "https:") {
            google.script.run.withFailureHandler(failureGetLanguage)
                .withSuccessHandler(successGetLanguages)
                .getLanguages();
        }
        else {
            let langs = "en,es,pt,fr";
            languages = langs.split(",");
            localStorage.setItem("languages", langs);
        }
    }
    else {
        languages = langs.split(",");
    }
    let htmlLang = buildLanguageSelect();
    writeInnerHTML("userLang", htmlLang);

    return languages;
}
function successTranslateText(r) {
    console.log("successTranslateText");
    showSpinner(false);
    if (r.error == 0) {
        let ctl = div = document.getElementById(r.divId);
        if (ctl)
            div.innerHTML = `<p class="corners2 field-size">${r.trans}</p`;
    }
}

function successTranslateTexts(r) {
    console.log("successTranslateTexts", r);
    showSpinner(false);
    if (r.error == 0) {
        localStorage.setItem(`language-${r.langCode}`,JSON.stringify(r));
        for (let i = 0; i < r.texts.length; i++) {
            let ctl = div = document.getElementById(r.texts[i].divId);
            if (ctl)
                div.innerHTML = r.texts[i].text;
        }
    }
}


function translateText(txt, langCode, divId) {
    showSpinner();
    console.log("translateText", langCode, divId);
    if (location.protocol == "https:" && langCode != "en") {
        showSpinner();
        google.script.run.withFailureHandler(failureGetLanguage)
            .withSuccessHandler(successTranslateText)
            .translateText(txt, langCode, divId);
    }
    else {
        let ctl = div = document.getElementById(divId);
        if (ctl)
            div.innerHTML = `<p class="field-size corners2">${txt}</p`;
        showSpinner(false);
    }

}


function translateTexts() {
    console.log("translateTexts");
    if (location.protocol == "https:" && tob.langCode != "en") {
        showSpinner();
        google.script.run.withFailureHandler(failureGetLanguage)
            .withSuccessHandler(successTranslateTexts)
            .translateTexts(tob);
    }
    // else {
    //     for (let i = 0; i < tob.texts.length; i++) {
    //         let ctl = div = document.getElementById(tob.texts[i].divId);
    //         if (ctl && tob.texts[i].divId != "divLinkApp")
    //             div.innerHTML = `<p class="field-size corners2">${tob.texts[i].text}</p`;

    //     }
    //     showSpinner(false);
    // }

}


function getLanguage(langCode = "en") {
    console.log(`getLanguage(${langCode})`);
    let textTranslations = "";
    if (langCode != "en") {
        textTranslations = localStorage.getItem(`language-${langCode}`);
        if (!textTranslations) {
            console.log("getting language from server");
            if (langCode != "en") {
                if (location.protocol == "https:") {
                    google.script.run.withFailureHandler(failureGetLanguage)
                        .withSuccessHandler(successGetLanguageTable)
                        .getLanguageTable(langCode);
                }
            }
            else {
                console.log("reset language to en");
                if ( config )
                {
                    config.Language = "en";
                    saveConfig();
                }
            }
        }
        else {
            console.log("build language from localstorage");
            lastLanguage = config.Language;
            translations = JSON.parse(textTranslations);
            translatePage();
        }
    }
    else {
        console.log("reset language to en");
        translations = [];
        if ( config )
        {
            config.Language = langCode;
            saveConfig();
        }
        translatePage();
    }
}

//generic functionalioty to get translated very long texts more than 4000 bytes
function failureGetText(error) {
    showSpinner(false);
    alert("error:" + error);
    console.log("failureGetText() failure");
    showError("Server Error reading PrivacyPolicy" + error);
}


function successGetText(result) {
    showSpinner(false);
    console.log("successGetText()", result);
    let text = replaceAll(result.text, "XXXX", softwareID);
    let div = `${result.div}`;
    writeInnerHTML(div, text);
    showControl(`${result.div}`);
    showMessage(result.message);
    localStorage.setItem(`${result.id}-${lang}`, text);
}



function getText(divId, textId, successMessage, callBack) {
    console.log(`getText(${divId},${textId},${successMessage}`);

        if (location.protocol == "https:")
        {
            showSpinner(true);
            callBack(divId, textId, successMessage,lang);
        }
        
}




function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var lastModal = "";

function openModal(divId) {
  lastModal = divId;
        document.getElementById("backdrop").style.display = "block"
        document.getElementById(divId).style.display = "block"
        document.getElementById(divId).className += "show"
    }
    function closeModal() {
      if ( lastModal.length == 0) return;
        document.getElementById("backdrop").style.display = "none"
        document.getElementById(lastModal).style.display = "none"
        document.getElementById(lastModal).className += document.getElementById("exampleModal").className.replace("show", "")
        lastModal = "";
    }
    // Get the modal
    var modal = document.getElementById('exampleModal');
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal()
      }
    }

