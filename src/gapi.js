

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


