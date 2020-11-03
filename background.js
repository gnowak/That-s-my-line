chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var tempUrl = details.url
        console.log("I have you in my sights: "+ JSON.stringify(details))
        console.log(tempUrl.substring(tempUrl.indexOf("q="), tempUrl.indexOf("&")))
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
