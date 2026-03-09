# Chrome AI Playground

A minimal Chrome Extension scaffold for experimenting with Chrome's built-in AI APIs (Gemini Nano). No frameworks, no build step — just load it and start building.

The extension provides a working side panel and popup with placeholder buttons for each AI API. **None of the AI APIs are implemented** — that's where you come in. Use the included [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skills to add features interactively.

## What's Included

| Component | Description |
|-----------|-------------|
| **Side Panel** | Primary workspace with input area, action buttons, and output display |
| **Popup** | Quick-access panel showing API availability and a button to open the side panel |
| **Service Worker** | Background message routing between content scripts and UI surfaces |
| **Content Script** | Grabs selected text from any web page |
| **Claude Code Skills** | Complete guides for all 6 Chrome built-in AI APIs |

## Prerequisites

- **Chrome 138** or later
- At least **22 GB** free disk space (for the Gemini Nano model)
- GPU with 4+ GB VRAM, **or** 16 GB RAM with 4+ CPU cores

## Setup

### 1. Enable Chrome Flags

Navigate to each URL below and set the flag to **Enabled**, then relaunch Chrome:

- `chrome://flags/#optimization-guide-on-device-model`
- `chrome://flags/#prompt-api-for-gemini-nano`
- `chrome://flags/#prompt-api-for-gemini-nano-multimodal-input`
- `chrome://flags/#writer-api-for-gemini-nano`
- `chrome://flags/#summarizer-api-for-gemini-nano`
- `chrome://flags/#rewriter-api-for-gemini-nano`
- `chrome://flags/#translator-api-for-gemini-nano`
- `chrome://flags/#proofreader-api-for-gemini-nano`
- `chrome://flags/#language-detection-api`

### 2. Verify Model Download

Open `chrome://on-device-internals` and check that the Gemini Nano model status shows **Available** or is actively downloading.

### 3. Load the Extension

1. Go to `chrome://extensions`
2. Enable **Developer mode** (toggle in the top-right corner)
3. Click **Load unpacked**
4. Select this project folder

The extension icon should appear in your toolbar. Click it to open the side panel.

## Using with Claude Code

This template includes Claude Code skills for all 6 Chrome built-in AI APIs. Open the project in Claude Code and ask it to implement features — it knows how to use each API.

**Example prompts:**

```
Add summarization to the Summarize button using the Summarizer API
```

```
Make the Translate button work using the Translator API — let the user pick a target language
```

```
Add a chat interface to the side panel using the Prompt API with streaming
```

```
Wire up the Proofread button to highlight grammar errors using the Proofreader API
```

```
Add a rewrite feature with tone selection (formal / casual) using the Rewriter API
```

## Project Structure

```
├── manifest.json            # Extension configuration (Manifest V3)
├── icons/                   # Extension icons (16, 32, 48, 128px)
├── sidepanel/
│   ├── sidepanel.html       # Side panel UI
│   ├── sidepanel.css        # Side panel styles
│   └── sidepanel.js         # Side panel logic + action button handlers
├── popup/
│   ├── popup.html           # Popup UI
│   ├── popup.css            # Popup styles
│   └── popup.js             # API detection + open side panel
├── scripts/
│   ├── service-worker.js    # Background service worker
│   └── content.js           # Content script for text selection
├── styles/
│   └── shared.css           # Shared CSS variables and base styles
└── .claude/
    └── skills/              # Claude Code skills for each AI API
        ├── prompt-api/
        ├── summarizer-api/
        ├── writer-api/
        ├── rewriter-api/
        ├── translator-api/
        └── proofreader-api/
```

## Chrome Built-in AI APIs

| API | Use Case |
|-----|----------|
| **Prompt API** | Open-ended queries, multi-turn chat, multimodal inputs, JSON-constrained output |
| **Summarizer API** | Key points, TL;DR, teasers, headlines from long text |
| **Writer API** | Draft emails, blog posts, reviews, and other new content |
| **Rewriter API** | Revise tone, length, or structure of existing text |
| **Translator API** | Translate text between languages on-device |
| **Proofreader API** | Grammar, spelling, and punctuation correction |

## Debugging

- **Service Worker**: `chrome://extensions` → find the extension → click **Inspect views: service worker**
- **Side Panel**: Right-click inside the side panel → **Inspect**
- **Popup**: Right-click the extension icon → **Inspect popup**
- **Content Script**: Open DevTools on any page → **Console** → filter by the extension name

## License

MIT
