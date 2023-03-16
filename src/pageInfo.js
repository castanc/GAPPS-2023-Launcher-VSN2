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





