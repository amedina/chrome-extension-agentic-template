// ============================================================
// Chrome AI Playground — Side Panel
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("input-text");
  const output = document.getElementById("output");
  const statusBadge = document.getElementById("status-badge");

  const btnGrabSelection = document.getElementById("btn-grab-selection");
  const btnSummarize = document.getElementById("btn-summarize");
  const btnRewrite = document.getElementById("btn-rewrite");
  const btnTranslate = document.getElementById("btn-translate");
  const btnProofread = document.getElementById("btn-proofread");
  const btnPrompt = document.getElementById("btn-prompt");

  // ------------------------------------------------------------------
  // AI Availability Detection
  // ------------------------------------------------------------------

  const apis = {
    "Prompt API": "LanguageModel" in self,
    "Summarizer API": "Summarizer" in self,
    "Writer API": "Writer" in self,
    "Rewriter API": "Rewriter" in self,
    "Translator API": "Translator" in self,
    "Proofreader API": "Proofreader" in self,
  };

  function checkAvailability() {
    const available = Object.values(apis).filter(Boolean).length;
    const total = Object.keys(apis).length;

    if (available === 0) {
      statusBadge.textContent = "No APIs detected";
      statusBadge.className = "status-badge status-unavailable";
    } else if (available === total) {
      statusBadge.textContent = "All APIs ready";
      statusBadge.className = "status-badge status-ready";
    } else {
      statusBadge.textContent = `${available}/${total} APIs`;
      statusBadge.className = "status-badge status-loading";
    }

    // Enable buttons whose APIs are detected
    btnPrompt.disabled = !apis["Prompt API"];
    btnSummarize.disabled = !apis["Summarizer API"];
    btnRewrite.disabled = !apis["Rewriter API"];
    btnTranslate.disabled = !apis["Translator API"];
    btnProofread.disabled = !apis["Proofreader API"];
  }

  checkAvailability();

  // ------------------------------------------------------------------
  // Grab selected text from the active page
  // ------------------------------------------------------------------

  btnGrabSelection.addEventListener("click", async () => {
    try {
      const response = await chrome.runtime.sendMessage({
        type: "getSelectedText",
      });
      if (response?.text) {
        inputText.value = response.text;
      }
    } catch {
      // Content script may not be injected on restricted pages
    }
  });

  // ------------------------------------------------------------------
  // Output helpers
  // ------------------------------------------------------------------

  function showOutput(text) {
    output.textContent = text;
  }

  function showPlaceholder(text) {
    output.innerHTML = `<p class="placeholder-text">${text}</p>`;
  }

  /**
   * Render a ReadableStream chunk-by-chunk into the output box.
   * Call this with the stream returned by promptStreaming, summarizeStreaming, etc.
   */
  async function showStreamingOutput(stream) {
    output.textContent = "";
    let result = "";
    for await (const chunk of stream) {
      result = chunk; // Built-in AI streams yield the full text so far
      output.textContent = result;
    }
    return result;
  }

  // ------------------------------------------------------------------
  // Action button handlers
  //
  // Each handler below is a placeholder. Ask Claude Code to implement
  // the feature using the matching skill in .claude/skills/.
  // ------------------------------------------------------------------

  btnSummarize.addEventListener("click", () => {
    const text = inputText.value.trim();
    if (!text) return showPlaceholder("Enter some text first.");

    // TODO: Implement summarization using the Summarizer API.
    // Ask Claude Code:
    //   "Add summarization to the Summarize button using the Summarizer API"
    // Skill: .claude/skills/summarizer-api/SKILL.md
    showPlaceholder("Summarize is not wired up yet. Ask Claude Code to implement it!");
  });

  btnRewrite.addEventListener("click", () => {
    const text = inputText.value.trim();
    if (!text) return showPlaceholder("Enter some text first.");

    // TODO: Implement rewriting using the Rewriter API.
    // Ask Claude Code:
    //   "Add rewriting to the Rewrite button using the Rewriter API"
    // Skill: .claude/skills/rewriter-api/SKILL.md
    showPlaceholder("Rewrite is not wired up yet. Ask Claude Code to implement it!");
  });

  btnTranslate.addEventListener("click", () => {
    const text = inputText.value.trim();
    if (!text) return showPlaceholder("Enter some text first.");

    // TODO: Implement translation using the Translator API.
    // Ask Claude Code:
    //   "Add translation to the Translate button using the Translator API"
    // Skill: .claude/skills/translator-api/SKILL.md
    showPlaceholder("Translate is not wired up yet. Ask Claude Code to implement it!");
  });

  btnProofread.addEventListener("click", () => {
    const text = inputText.value.trim();
    if (!text) return showPlaceholder("Enter some text first.");

    // TODO: Implement proofreading using the Proofreader API.
    // Ask Claude Code:
    //   "Add proofreading to the Proofread button using the Proofreader API"
    // Skill: .claude/skills/proofreader-api/SKILL.md
    showPlaceholder("Proofread is not wired up yet. Ask Claude Code to implement it!");
  });

  btnPrompt.addEventListener("click", () => {
    const text = inputText.value.trim();
    if (!text) return showPlaceholder("Enter a prompt first.");

    // TODO: Implement open-ended prompting using the Prompt API.
    // Ask Claude Code:
    //   "Add prompting to the Prompt button using the Prompt API"
    // Skill: .claude/skills/prompt-api/SKILL.md
    showPlaceholder("Prompt is not wired up yet. Ask Claude Code to implement it!");
  });
});
