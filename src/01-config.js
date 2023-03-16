
var config={};
const configKey = "gapps launcher-config";
var configChanged = false;



function getConfig(){
    let json = localStorage.getItem(configKey);
    if ( config == null )
    {
        config = {};
        config.Lenguage = lang;
        config.DarkMode = "system";
        localStorage.setItem(configKey,JSON.stringify(config));
    }
    else cfg = JSON.parse(json)
    return config;
}
