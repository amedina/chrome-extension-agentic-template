# Bug Planning

Create a new plan in specs/*.md to resolve the `Bug` using the exact specified markdown `Plan Format`. Follow the `Instructions` to create the plan use the `Relevant Files` to focus on the right files.

## Instructions

- You're writing a plan to resolve a bug, it should be thorough and precise so we fix the root cause and prevent regressions.
- Create the plan in the `specs/*.md` file. Name it appropriately based on the `Bug`.
- Use the plan format below to create the plan.
- Research the codebase to understand the bug, reproduce it, and put together a plan to fix it.
- IMPORTANT: Replace every <placeholder> in the `Plan Format` with the requested value. Add as much detail as needed to fix the bug.
- Use your reasoning model: THINK HARD about the bug, its root cause, and the steps to fix it properly.
- IMPORTANT: Be surgical with your bug fix, solve the bug at hand and don't fall off track.
- IMPORTANT: We want the minimal number of changes that will fix and address the bug.
- This is a vanilla HTML/CSS/JS Chrome Extension (Manifest V3) — no frameworks, no build step.
- Content scripts cannot use AI APIs — only extension pages (popup, side panel, service worker) have access.
- Always feature-detect APIs before use (`'APIName' in self`).
- Respect requested files in the `Relevant Files` section.
- Start your research by reading the `README.md` and `CLAUDE.md` files.

## Relevant Files

Focus on the following files:
- `README.md` - Contains the project overview and setup instructions.
- `CLAUDE.md` - Contains codebase conventions and architecture.
- `manifest.json` - MV3 extension configuration (permissions, UI surfaces, service worker).
- `sidepanel/**` - Primary AI interaction surface (HTML, CSS, JS).
- `popup/**` - Quick-access popup for API status and opening the side panel.
- `scripts/**` - Service worker (message routing) and content script (page text extraction).
- `styles/shared.css` - Shared CSS custom properties and components.

Ignore all other files in the codebase.

## Plan Format

```md
# Bug: <bug name>

## Bug Description
<describe the bug in detail, including symptoms and expected vs actual behavior>

## Problem Statement
<clearly define the specific problem that needs to be solved>

## Solution Statement
<describe the proposed solution approach to fix the bug>

## Steps to Reproduce
<list exact steps to reproduce the bug, including how to load/reload the extension>

## Root Cause Analysis
<analyze and explain the root cause of the bug>

## Relevant Files
Use these files to fix the bug:

<find and list the files that are relevant to the bug describe why they are relevant in bullet points. If there are new files that need to be created to fix the bug, list them in an h3 'New Files' section.>

## Step by Step Tasks
IMPORTANT: Execute every step in order, top to bottom.

<list step by step tasks as h3 headers plus bullet points. use as many h3 headers as needed to fix the bug. Order matters, start with the foundational shared changes required to fix the bug then move on to the specific changes required to fix the bug. Your last step should be running the `Validation Commands` to validate the bug is fixed with zero regressions.>

## Validation Commands
Execute every command to validate the bug is fixed with zero regressions.

<list manual testing steps to validate the fix in Chrome:>
- Load/reload the unpacked extension at `chrome://extensions`
- <list specific UI interactions and expected outcomes to verify the fix>
- Check the service worker console (`chrome://extensions` → Inspect views) for errors
- Check the side panel console (right-click inside → Inspect) for errors

## Notes
<optionally list any additional notes or context that are relevant to the bug that will be helpful to the developer>
```

## Bug
$ARGUMENTS