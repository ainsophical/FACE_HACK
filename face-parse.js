function parseUrl(url){
    return uri.includes("facebook.com");
}

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {

        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            if(parseUrl(tabs[0].url)){
                return { requestHeaders: details.requestHeaders };
            } 
        });

        for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'Origin') {
                if(parseUrl(details.requestHeaders[i].value)){
                    alert(details.requestHeaders[i].value);
                }
                // details.requestHeaders[i].value ="https://example.com";
                break;
            }
        }
        return { requestHeaders: details.requestHeaders };
    },
    {urls: ['*://*']},
    ['blocking', 'requestHeaders']
);
