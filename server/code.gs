var email = Session.getActiveUser().getEmail();


function testDownload()
{
  let result = DownloadSheet("https://docs.google.com/spreadsheets/d/1GQeO3cWCaw5QgfRdd8HlWVgPfQmBia53VZTi6DT8dKI/edit#gid=0");
}

function getDebug(){
  return "";
}
function doGet(e) {
  //if (e != undefined) {
  //   Logger.log("doGet()")
  //   Logger.log(JSON.stringify(e));
  //   if (e.parameter.url) {
  // 	url = e.parameter.url;
  // 	Logger.log("url received:" + url);

  //   }

  //   if (url.length > 0 && url.startsWith("https://docs.google.com/spreadsheets"))
  // 	autoRun = true;
  //}
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function getUrl()
{
  return "";
}

function getLoggedUser() {
  Logger.log("Returning user:" + email);
  return email;
}




function DownloadSheet(url) {
  Logger.log("DownloadSheet() url received:" + url);
  let result = {};
  let resultTabs = [];
  result.OutResult = 0;
  result.OutMessage = "";
  result.ProjectName = ""
  result.Url = url;

  let workItemResult = {};
  let ss = SpreadsheetApp.openByUrl(url);
  if (ss == null) {
    result.OutResult = -1;
    result.OutMessatg = "Spreadsheet doesnt exist";
  }
  else {
    result.ProjectName = ss.getName();
    let allSheets = ss.getSheets();
    for (let i = 0; i < allSheets.length; i++) {
      workItemResult = {};
      try {
        workItemResult.Name = allSheets[i].getName();
        workItemResult.Data = allSheets[i].getDataRange().getValues().filter(x => x.join("").trim() != "");
        workItemResult.Result = 0;
        workItemResult.Message = null;
      }
      catch (ex) {
        workItemResult.Result = -1;
        workItemResult.Message = ex.message;
      }
      resultTabs.push(workItemResult);
    }
  }
  result.Tabs = resultTabs;
  return JSON.stringify(result);
}