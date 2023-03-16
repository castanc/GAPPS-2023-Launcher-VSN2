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
