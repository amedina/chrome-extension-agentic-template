# Feature Planning

Create a new plan in specs/*.md to implement the `Feature` using the exact specified markdown `Plan Format`. Follow the `Instructions` to create the plan and use the `Relevant Files` to focus on the right files.

## Instructions

- You're writing a plan to implement a net new feature for a Chrome Extension that uses Chrome's built-in AI APIs (Gemini Nano).
- Create the plan in the `specs/*.md` file. Name it appropriately based on the `Feature`.
- Use the `Plan Format` below to create the plan.
- Research the codebase to understand existing patterns, architecture, and conventions before planning the feature.
- IMPORTANT: Replace every <placeholder> in the `Plan Format` with the requested value. Add as much detail as needed to implement the feature successfully.
- Use your reasoning model: THINK HARD about the feature requirements, design, and implementation approach.
- Follow existing patterns and conventions in the codebase. Don't reinvent the wheel.
- This is a vanilla HTML/CSS/JS project with **no build step and no frameworks**. Do not introduce bundlers, transpilers, or frameworks.
- If the feature uses a Chrome built-in AI API, use the matching Claude Code skill (in `.claude/skills/`) for implementation guidance.
- Always feature-detect AI APIs before use (`'APIName' in self`) and handle all 4 availability states: `readily`, `after-download`, `downloading`, `no`.
- Use streaming variants of AI APIs (`promptStreaming`, `summarizeStreaming`, etc.) for long outputs.
- Remember: content scripts cannot use AI APIs — only extension pages (popup, side panel, service worker) have access.
- Respect requested files in the `Relevant Files` section.
- Start your research by reading the `README.md` and `CLAUDE.md` files.

## Relevant Files

Focus on the following files:
- `README.md` - Project overview, setup instructions, and architecture.
- `CLAUDE.md` - Conventions, file guide, and common task patterns.
- `manifest.json` - Extension configuration (Manifest V3), permissions, and UI surfaces.
- `sidepanel/sidepanel.html` - Side panel UI markup.
- `sidepanel/sidepanel.css` - Side panel styles.
- `sidepanel/sidepanel.js` - Side panel logic and action button handlers (primary place to wire up AI features).
- `popup/popup.html` - Popup UI markup.
- `popup/popup.js` - API detection and side panel opener.
- `scripts/service-worker.js` - Background message routing and event handling.
- `scripts/content.js` - Content script for grabbing selected text from pages.
- `styles/shared.css` - CSS custom properties, theming, and shared components.
- `.claude/skills/` - Claude Code skills with implementation guides for each AI API.

Ignore test frameworks and build tooling — this project has none.

## Plan Format

```md
# Feature: <feature name>

## Feature Description
<describe the feature in detail, including its purpose and value to users>

## User Story
As a <type of user>
I want to <action/goal>
So that <benefit/value>

## Problem Statement
<clearly define the specific problem or opportunity this feature addresses>

## Solution Statement
<describe the proposed solution approach and how it solves the problem>

## AI APIs Used
<list which Chrome built-in AI APIs the feature requires (Prompt, Summarizer, Writer, Rewriter, Translator, Proofreader) and reference the matching Claude Code skill. If no AI API is needed, write "None".>

## Relevant Files
Use these files to implement the feature:

<find and list the files that are relevant to the feature and describe why they are relevant in bullet points. If there are new files that need to be created to implement the feature, list them in an h3 'New Files' section.>

## Implementation Plan
### Phase 1: Foundation
<describe the foundational work needed — UI elements, permissions, message routing>

### Phase 2: Core Implementation
<describe the main implementation — AI API integration, data flow, streaming output>

### Phase 3: Integration
<describe how the feature connects with existing UI, content scripts, and service worker>

## Step by Step Tasks
IMPORTANT: Execute every step in order, top to bottom.

<list step by step tasks as h3 headers plus bullet points. Use as many h3 headers as needed to implement the feature. Order matters — start with manifest/permission changes, then shared styles, then UI markup, then JS logic. Your last step should be running the `Validation Checklist` to confirm the feature works correctly.>

## Edge Cases & Error Handling
<list edge cases to handle, including:>
- API not available (`'APIName' in self` returns false)
- Model not downloaded yet (`after-download` / `downloading` states)
- Empty or missing input text
- Session cleanup (calling `.destroy()`)
- Network or model errors during inference

## Acceptance Criteria
<list specific, measurable criteria that must be met for the feature to be considered complete>

## Validation Checklist
Manually verify each item after implementation:

- [ ] Extension loads without errors at `chrome://extensions`
- [ ] Service worker shows no errors (Inspect views → service worker)
- [ ] Side panel opens when clicking the extension icon
- [ ] Feature UI elements render correctly in the side panel
- [ ] Feature works end-to-end with valid input
- [ ] Feature handles missing/empty input gracefully
- [ ] Feature handles unavailable API gracefully
- [ ] No console errors in side panel DevTools
- [ ] No inline scripts in HTML files (MV3 CSP compliance)
<add any feature-specific validation items>

## Notes
<optionally list any additional notes, future considerations, or context that are relevant to the feature that will be helpful to the developer>
```

## Feature
$ARGUMENTS