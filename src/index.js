



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



