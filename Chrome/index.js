var baseUrl = "https://learn.uwaterloo.ca";

chrome.browserAction.onClicked.addListener(function (tab) {
    if (tab.url.indexOf(baseUrl) >= 0) {
        chrome.tabs.executeScript({
            file: 'open.js'
        });
    }
});

chrome.commands.onCommand.addListener(function (command) {
    console.log('Command:', command);
    chrome.tabs.executeScript({
        file: 'open.js'
    });
});