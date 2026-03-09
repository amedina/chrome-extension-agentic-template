# CLAUDE.md — Chrome AI Playground

## Project Overview

Chrome Extension (Manifest V3) scaffold for experimenting with Chrome built-in AI APIs (Gemini Nano). Vanilla HTML/CSS/JS — no frameworks, no build step.

## Architecture

```
manifest.json             MV3 config — permissions, UI surfaces, service worker
scripts/service-worker.js Background event handler, message router
scripts/content.js        Injected into pages — grabs selected text
sidepanel/                Primary AI interaction surface (persistent panel)
popup/                    Quick-access: API status + open side panel
styles/shared.css         CSS custom properties, reset, shared components
```

## Key Conventions

- **No build step** — all files are plain HTML/CSS/JS, loaded directly by Chrome
- **Feature-detect APIs before use** — always check `'APIName' in self` first
- **Handle all 4 availability states**: `readily` (ready now), `after-download` (needs download), `downloading` (in progress), `no` (not supported)
- **Monitor model downloads** — use the `monitor` callback on `create()` to track progress
- **Use streaming APIs** — `promptStreaming`, `summarizeStreaming`, `writeStreaming`, `rewriteStreaming` for long outputs
- **Destroy sessions when done** — call `.destroy()` to free resources
- **Content scripts cannot use AI APIs** — only extension pages (popup, side panel, service worker) have access

## File Guide

| File | Purpose |
|------|---------|
| `sidepanel/sidepanel.js` | Action button handlers — wire up AI APIs here |
| `scripts/service-worker.js` | Message routing, add background AI processing here |
| `scripts/content.js` | Page text extraction, add context menu items here |
| `styles/shared.css` | Theming via CSS custom properties, dark mode support |

## Skills (in `.claude/skills/`)

| Skill | API | When to Use |
|-------|-----|-------------|
| `prompt-api` | `LanguageModel` | Open-ended queries, multi-turn chat, multimodal, JSON output |
| `summarizer-api` | `Summarizer` | Key points, TL;DR, teasers, headlines |
| `writer-api` | `Writer` | Generate new content (emails, posts, reviews) |
| `rewriter-api` | `Rewriter` | Revise tone, length, structure |
| `translator-api` | `Translator` | On-device translation between languages |
| `proofreader-api` | `Proofreader` | Grammar, spelling, punctuation correction |

## Common Tasks

### Adding an AI feature to a button
1. Open `sidepanel/sidepanel.js`
2. Find the button's click handler (marked with `TODO` comments)
3. Use the matching skill to implement the feature
4. Use `showOutput()` or `showStreamingOutput()` to display results

### Testing the extension
1. Load unpacked at `chrome://extensions`
2. Click the extension icon to open the side panel
3. Debug service worker: `chrome://extensions` → Inspect views
4. Debug side panel: right-click inside → Inspect

### Adding new UI
- Add HTML elements to `sidepanel/sidepanel.html`
- Style with CSS custom properties from `styles/shared.css`
- Keep JS in `sidepanel/sidepanel.js`

## Important Notes

- The `minimum_chrome_version` is set to `138` in the manifest
- All event listeners in the service worker must be registered synchronously at the top level (MV3 requirement)
- No inline scripts allowed in HTML files (MV3 CSP restriction)
- `chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })` is set in the service worker — clicking the icon opens the side panel by default
