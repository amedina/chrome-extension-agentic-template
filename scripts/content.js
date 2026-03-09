// ============================================================
// Chrome AI Playground — Content Script
// ============================================================

// Guard against double-injection.
if (!window.__chromeAIPlaygroundLoaded) {
  window.__chromeAIPlaygroundLoaded = true;

  // Listen for messages from the extension (popup, side panel, service worker).
  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.type === "getSelectedText") {
      sendResponse({ text: window.getSelection().toString() });
    }
  });
}
