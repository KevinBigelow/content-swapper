$(document).on('submit', '.content-swapper', function(e) {
    e.preventDefault();
    
    var queryInfo = {
        active: true,
        currentWindow: true
    };
    
    chrome.tabs.query(queryInfo, gotTabs);
    
    var contentType = $('.content-type').val(),
        customContent = $('.custom-content').val(),
        targetElement = $('.target-element').val();
    
    function gotTabs(tab) {
        var message = {'contentType': contentType, 'customContent': customContent, 'targetElement': targetElement}
        chrome.tabs.sendMessage(tab[0].id, message)
    }
});

$(document).on('change', '.content-type', function() {
    if ($(this).val() == 'custom') {
        $('.custom-content-wrap').fadeIn();
    }
});
