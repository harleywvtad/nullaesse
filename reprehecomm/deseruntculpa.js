var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var i = 1; // Example row index
var campaignCopy = "Example Campaign Copy"; // Example value to set
sheet.getRange(i, 2).setValue(campaignCopy);
