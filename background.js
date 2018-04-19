chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    message = {
        div: '<div class="swappycopy__popup"></div>',
        popup: 'popup.html',
        stylesheet: 'style.css'
    }
    chrome.tabs.sendMessage(tab.id, message)
}
