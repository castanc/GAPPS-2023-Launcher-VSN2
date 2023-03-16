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

