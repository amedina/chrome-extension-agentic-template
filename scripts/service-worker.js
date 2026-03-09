// ============================================================
// Chrome AI Playground — Service Worker
// ============================================================

// Open the side panel when the extension icon is clicked.
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });

// Extension lifecycle --------------------------------------------------------

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    console.log("[AI Playground] Extension installed.");
  }
});

// Message routing between content scripts and UI surfaces --------------------

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.type) {
    case "getSelectedText": {
      // Forward to the active tab's content script
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
          chrome.tabs.sendMessage(tabs[0].id, message, sendResponse);
        } else {
          sendResponse({ text: "" });
        }
      });
      return true; // keep the message channel open for async response
    }

    // TODO: Add more message handlers here as you build AI features.
    // For example, you might route "summarize" or "translate" messages
    // to coordinate between content scripts and the side panel.
  }
});
