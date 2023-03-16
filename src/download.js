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






