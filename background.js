chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
    console.log(JSON.stringify(details));
    for( var i = 0, l = headers.length; i < l; ++i ) {
        if (details.requestHeaders[i].name === 'Origin') {
            if(details.requestHeaders[i].value.includes(facebook)){
                console.log(details.requestHeaders[i].value);
            }
            // details.requestHeaders[i].value ="https://example.com";
            break;
        }
    }
    return { requestHeaders: details.requestHeaders };
  },
  {urls: [ "<all_urls>" ]},['requestHeaders','blocking']);
