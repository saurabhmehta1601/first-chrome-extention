import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <div>App is correctly injected to DOM</div>;
}

// listen for message
chrome.runtime.onMessage.addListener((req, sender, res) => {
  if (req.injectApp) {
    injectApp();
    res({
      startedExtention: true,
    });
  }
});

function injectApp() {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "chromeExtentionReactApp");
  document.body.appendChild(newDiv);
  ReactDOM.render(<App />, newDiv);
}
