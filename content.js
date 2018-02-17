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

    var targetElement = message.targetElement,
        contentType = message.contentType;

    if (contentType == 'custom') {
        $(targetElement).text(message.customContent);

    } else if (contentType == 'numbers') {
        var digits = message.digitCount,
            prefix = message.numberPrefix,
            suffix = message.numberSuffix;

        $(targetElement).each(function(){
            var number = Math.round(Math.random() * digits);

            if (prefix != '') {
                number = prefix.concat(number);
            }

            if (suffix != '') {
                number = number.concat(suffix);
            }

            $(this).text(number);
        });

    } else {
        var i = 1,
            contentItems = window[contentType];

        $(targetElement).each(function(){
            $(this).text(contentItems[i]);
            if (i === Object.keys(contentItems).length) {
                i = 1;
            } else {
                i++;
            }
        });
    }
}
