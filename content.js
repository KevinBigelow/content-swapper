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

var companiesSlugPrefix = {
    1: 'neutron-interactive_acme-corporation',
    2: 'neutron-interactive_globex-corporation',
    3: 'neutron-interactive_soylent-corp',
    4: 'neutron-interactive_initech',
    5: 'neutron-interactive_bluth-company',
    6: 'neutron-interactive_umbrella-company',
    7: 'neutron-interactive_hooli',
    8: 'neutron-interactive_vehement-capital-partners',
    9: 'neutron-interactive_massive-dynamic',
    10: 'neutron-interactive_wonka-industries',
    11: 'neutron-interactive_stark-industries',
    12: 'neutron-interactive_gekko-&-co',
    13: 'neutron-interactive_wayne-enterprises',
    14: 'neutron-interactive_bubba-gump',
    15: 'neutron-interactive_cyberdyne-systems',
    16: 'neutron-interactive_genco-pura-olive-oil-company',
    17: 'neutron-interactive_the-new-york-inquirer',
    18: 'neutron-interactive_duff-beer',
    19: 'neutron-interactive_olivia-pope-&-associates',
    20: 'neutron-interactive_sterling-cooper',
    21: 'neutron-interactive_ollivanders-wand-shop',
    22: 'neutron-interactive_cheers',
    23: 'neutron-interactive_krusty-krab',
    24: 'neutron-interactive_good-burger',
};

var companiesSlug = {
    1: 'acme-corporation',
    2: 'globex-corporation',
    3: 'soylent-corp',
    4: 'initech',
    5: 'bluth-company',
    6: 'umbrella-company',
    7: 'hooli',
    8: 'vehement-capital-partners',
    9: 'massive-dynamic',
    10: 'wonka-industries',
    11: 'stark-industries',
    12: 'gekko-&-co',
    13: 'wayne-enterprises',
    14: 'bubba-gump',
    15: 'cyberdyne-systems',
    16: 'genco-pura-olive-oil-company',
    17: 'the-new-york-inquirer',
    18: 'duff-beer',
    19: 'olivia-pope-&-associates',
    20: 'sterling-cooper',
    21: 'ollivanders-wand-shop',
    22: 'cheers',
    23: 'krusty-krab',
    24: 'good-burger',
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

var fileNames = {
    1: 'acme-corporation.8011234567.04192018.mp3',
    2: 'globex-corporation.4354561234.04192018.mp3',
    3: 'soylent-corp.8019876543.04_15_2018.mp3',
    4: 'initech.8011112222.04_17_2018.mp3',
    5: 'bluth-company.4354321234.03_20_2018.mp3',
    6: 'umbrella-company.4350129876.02_14_2018.mp3',
    7: 'hooli.8013334444.02_02_2018.mp3',
    8: 'vehement-capital-partners.16_19_41.03.8015564865.mp3',
    9: 'massive-dynamic.8015566655.01042018.mp3',
    10: 'wonka-industries.8014326543.01222018.mp3',
    11: 'stark-industries.8019998888.03032018.mp3',
    12: 'gekko-&-co.4355559854.04_01_2018.mp3',
    13: 'wayne-enterprises.2019874567.04_02_2018.mp3',
    14: 'bubba-gump.6035439872.02_11_2018.mp3',
    15: 'cyberdyne-systems.3249873333.04_06_2018.mp3',
    16: 'genco-pura-olive-oil-company.8011234567.04192018.mp3',
    17: 'the-new-york-inquirer.4354561234.04192018.mp3',
    18: 'duff-beer.8019876543.04_15_2018.mp3',
    19: 'olivia-pope-&-associates.8011112222.04_17_2018.mp3',
    20: 'sterling-cooper.4354321234.03_20_2018.mp3',
    21: 'ollivanders-wand-shop.4350129876.02_14_2018.mp3',
    22: 'cheers.8013334444.02_02_2018.mp3',
    23: 'krusty-krab.16_19_41.03.8015564865.mp3',
    24: 'good-burger.8015566655.01042018.mp3',
};

function gotMessage(message, sender, sendResponse) {

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
}
