 /* var url = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostSuffix: 'chase.com' }
    })
  ],
  actions: [ 
  	new chrome.declarativeContent.ShowPageAction(),
  	new chrome.pageAction.hide(integer tabId) ]
};

chrome.runtime.onInstalled.addListener(function(details) {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([url]);
  });
}); */
