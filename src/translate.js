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



