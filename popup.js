$(document).on('submit', '.content-swapper', function(e) {
    e.preventDefault();

    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, gotTabs);

    function gotTabs(tab) {
        var message = {
            'targetElement': $('.target-element').val(),
            'contentType': $('.content-type').val(),
            'customContent': $('.custom-content').val(),
            'numberMin': $('.number-min').val(),
            'numberMax': $('.number-max').val(),
            'numberPrefix': $('.number-prefix').val(),
            'numberSuffix': $('.number-suffix').val()
        }
        chrome.tabs.sendMessage(tab[0].id, message)
    }
});

$(document).on('change', '.content-type', function() {

    if ($(this).val() == 'custom') {
        $('.custom-content-fields').fadeIn();
    } else {
        $('.custom-content-fields').fadeOut();
    }

    if ($(this).val() == 'numbers') {
        $('.number-fields').fadeIn();
    } else {
        $('.number-fields').fadeOut();
    }
});
