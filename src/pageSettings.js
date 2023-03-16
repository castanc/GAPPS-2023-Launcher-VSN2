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




