var pageSpeedApiKey = "";
// ENTER YOURS HERE AS STRING

var urls = ["https://www.google.com", "https://www.ebay.com"];
// EXAMPLES

var tabs = ["google", "ebay"];
//EXAMPLES

// URLS & TABS MUST BE ALIGNED, EQUAL AND IN SAME ORDER.

function monitor() {
  for (i = 0; i < urls.length; i++) {
    var desktop = callPageSpeed("desktop", i);
    var mobile = callPageSpeed("mobile", i);
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(tabs[i]);
    sheet.appendRow([
      Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd"),
      desktop.id,
      mobile.id
      // EXAMPLE METRICS, CHOOSE WHICHEVER YOU NEED FROM OBJECT
    ]);
  }
}

function callPageSpeed(strategy, url) {
  var pageSpeedUrl =
    "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" +
    urls[url] +
    "&key=" +
    pageSpeedApiKey +
    "&strategy=" +
    strategy;
  var response = UrlFetchApp.fetch(pageSpeedUrl);
  var json = response.getContentText();
  return JSON.parse(json);
}
