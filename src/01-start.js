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


