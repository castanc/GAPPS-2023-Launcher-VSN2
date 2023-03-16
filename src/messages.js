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

	

