$(document).on('submit', 'form', function(e) {
    e.preventDefault();
    
    var queryInfo = {
        active: true,
        currentWindow: true
    };
    
    chrome.tabs.query(queryInfo, gotTabs);
    
    var content = $('.dummy-content').val(),
        target = $('.target-dom').val();
    
    function gotTabs(tab) {
        var message = {'content': content, 'target': target}
        chrome.tabs.sendMessage(tab[0].id, message)
    }
});
