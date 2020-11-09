chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var tempUrl = details.url
        tempUrl = "https://www.google.com/search?" + (tempUrl.substring(tempUrl.indexOf("q="), tempUrl.indexOf("&")))

        return { redirectUrl: tempUrl }
    },
    {
        urls:[
            "https://www.bing.com/search*"
        ],
        types: ['main_frame']
    },
    ["blocking"]
);
