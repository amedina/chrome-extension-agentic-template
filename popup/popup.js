// ============================================================
// Chrome AI Playground — Popup
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const apiList = document.getElementById("api-list");
  const statusBadge = document.getElementById("status-badge");
  const btnOpen = document.getElementById("btn-open-sidepanel");

  // Chrome flags page cannot be opened programmatically due to security
  // restrictions — show it as informational text only.
  const flagsLink = document.getElementById("link-flags");
  flagsLink.addEventListener("click", (e) => {
    e.preventDefault();
  });

  // ------------------------------------------------------------------
  // API Detection
  // ------------------------------------------------------------------

  const apis = [
    { name: "Prompt API", key: "LanguageModel" },
    { name: "Summarizer API", key: "Summarizer" },
    { name: "Writer API", key: "Writer" },
    { name: "Rewriter API", key: "Rewriter" },
    { name: "Translator API", key: "Translator" },
    { name: "Proofreader API", key: "Proofreader" },
  ];

  let available = 0;

  for (const api of apis) {
    const detected = api.key in self;
    if (detected) available++;

    const item = document.createElement("div");
    item.className = "api-item";
    item.innerHTML = `
      <span class="api-icon">${detected ? "\u2705" : "\u274C"}</span>
      <span>${api.name}</span>
    `;
    apiList.appendChild(item);
  }

  // Update status badge
  if (available === 0) {
    statusBadge.textContent = "No APIs";
    statusBadge.className = "status-badge status-unavailable";
  } else if (available === apis.length) {
    statusBadge.textContent = "All ready";
    statusBadge.className = "status-badge status-ready";
  } else {
    statusBadge.textContent = `${available}/${apis.length}`;
    statusBadge.className = "status-badge status-loading";
  }

  // ------------------------------------------------------------------
  // Open Side Panel
  // ------------------------------------------------------------------

  btnOpen.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (tab?.id) {
      await chrome.sidePanel.open({ tabId: tab.id });
      window.close();
    }
  });
});
