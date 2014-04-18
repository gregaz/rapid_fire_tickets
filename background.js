console.log('background loaded');
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
    {
      chrome.storage.sync.get({
          pword: '',
          isPassword: true
        }, function(items) {
          sendResponse({data: { pword: items.pword, isPassword: items.isPassword } });
        });
    }
    else
      sendResponse({}); // snub them.
    return true;
});