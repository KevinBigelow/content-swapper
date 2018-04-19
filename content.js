chrome.runtime.onMessage.addListener(gotMessage);

var companies = {
    1: 'Acme Corporation',
    2: 'Globex Corporation',
    3: 'Soylent Corp',
    4: 'Initech',
    5: 'Bluth Company',
    6: 'Umbrella Corporation',
    7: 'Hooli',
    8: 'Vehement Capital Partners',
    9: 'Massive Dynamic',
    10: 'Wonka Industries',
    11: 'Stark Industries',
    12: 'Gekko & Co',
    13: 'Wayne Enterprises',
    14: 'Bubba Gump',
    15: 'Cyberdyne Systems',
    16: 'Genco Pura Olive Oil Company',
    17: 'The New York Inquirer',
    18: 'Duff Beer',
    19: 'Olivia Pope & Associates',
    20: 'Sterling Cooper',
    21: 'Ollivanders Wand Shop',
    22: 'Cheers',
    23: 'Krusty Krab',
    24: 'Good Burger'
};

var names = {
    1: 'Bradley Mueller',
    2: 'Clara Heath',
    3: 'Davis Logan',
    4: 'Yosef Chase',
    5: 'Cristofer Dunlap',
    6: 'Madelynn Foley',
    7: 'Rodolfo Scott',
    8: 'Adelyn Fletcher',
    9: 'Donovan Duffy',
    10: 'Jarrett Kelley',
    11: 'Nelson Brock',
    12: 'Jaime Knight',
    13: 'Moses Wolfe',
    14: 'Alan Morgan',
    15: 'Ronin Holder',
    16: 'Kamora Rios',
    17: 'Jaidyn Walls',
    18: 'Madelyn Collier',
    19: 'Grayson Stanton',
    20: 'Kennedy Green',
    21: 'Josephine Rojas',
    22: 'Alexis Hicks',
    23: 'Andrea Church',
    24: 'Gloria Cameron',
    25: 'Noelle Carson',
    26: 'Jamar Griffith',
    27: 'Marshall Ray',
    28: 'Xander Conrad',
    29: 'Dante Burke',
    30: 'Tristian Hartman'
};

function gotMessage(message, sender, sendResponse) {

    $('body').append(message.div);
    $('.swappycopy__popup').load(chrome.runtime.getURL(message.popup));
    insertPopupCss(chrome.runtime.getURL(message.stylesheet));
}

function insertPopupCss(filename) {
    var link = $('<link />', {
        rel: "stylesheet",
        type: "text/css",
        href: filename
    })
    $('head').append(link);
}

$(document).on('submit', '.content-swapper', function(e) {
    e.preventDefault();

    var message = {
        'targetElement': $('.target-element').val(),
        'contentType': $('.content-type').val(),
        'customContent': $('.custom-content').val(),
        'numberMin': $('.number-min').val(),
        'numberMax': $('.number-max').val(),
        'numberPrefix': $('.number-prefix').val(),
        'numberSuffix': $('.number-suffix').val(),
        'numberDecimals': $('.number-decimals').val(),
        'numberThousandsSeparator': $('.number-thousands-separator').prop('checked')
    }
    var targetElement = message.targetElement,
        contentType = message.contentType;

    if (contentType == 'custom') {
        $(targetElement).text(message.customContent);

    } else if (contentType == 'numbers') {
        var numberMin = message.numberMin,
            numberMax = message.numberMax;

        $(targetElement).each(function(){
            var randomNumber = Math.random() * (numberMax - numberMin) + parseFloat(numberMin);

            // Round randomNumber to the specified decimal
            randomNumber = Number.parseFloat(randomNumber).toFixed(message.numberDecimals);

            // Add thousands separator (comma) to randomNumber
            if (message.numberThousandsSeparator == true) {
                randomNumber = randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }

            // Print randomNumber with prefix and suffix
            $(this).text(message.numberPrefix + randomNumber + message.numberSuffix);
        });

    } else {
        var contentItems = window[contentType],
            i = 1;

        $(targetElement).each(function(){
            $(this).text(contentItems[i]);

            if (i === Object.keys(contentItems).length) {
                i = 1;
            } else {
                i++;
            }
        });
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

function allElementsFromPoint(x, y) {
    var element, elements = [];
    var old_visibility = [];
    while (true) {
        element = document.elementFromPoint(x, y);
        if (!element || element === document.documentElement) {
            break;
        }
        elements.push(element);
        old_visibility.push(element.style.visibility);
        element.style.visibility = 'hidden'; // Temporarily hide the element (without changing the layout)
    }
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.visibility = old_visibility[k];
    }
    elements.reverse();
    return elements;
    $('print-element').text(elements);
}

$(document).on('click', function() {
    $('#print-element').text(document.querySelectorAll(':hover'));
    console.log(document.querySelectorAll(':hover'));
})
