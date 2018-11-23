const options = {
    url: "http://www.html-kit.com/tools/cookietester/",
    interactive: true
};
chrome.identity.launchWebAuthFlow(options, () => {});