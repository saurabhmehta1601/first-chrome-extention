window.onload = () => {
    const $startButton = document.querySelector('.startButton')

    $startButton.onclick = () => {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {injectApp: true},
                response => window.close()
            )
        })
    }
}