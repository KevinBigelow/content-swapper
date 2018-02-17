$(document).on('submit', '.content-swapper', function(e) {
    e.preventDefault();

    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, gotTabs);

    var targetElement = $('.target-element').val(),
        contentType = $('.content-type').val(),
        customContent = $('.custom-content').val(),
        digitCount = $('.digit-count').val(),
        numberPrefix = $('.number-prefix').val(),
        numberSuffix = $('.number-suffix').val();

    function gotTabs(tab) {
        var message = {'targetElement': targetElement, 'contentType': contentType, 'customContent': customContent, 'digitCount': digitCount, 'numberPrefix': numberPrefix, 'numberSuffix': numberSuffix}
        chrome.tabs.sendMessage(tab[0].id, message)
    }
});

$(document).on('change', '.content-type', function() {

    if ($(this).val() == 'custom') {
        $('.custom-content-wrap').fadeIn();
    } else {
        $('.custom-content-wrap').fadeOut();
    }

    if ($(this).val() == 'numbers') {
        $('.number-options').fadeIn();
    } else {
        $('.number-options').fadeOut();
    }
});
