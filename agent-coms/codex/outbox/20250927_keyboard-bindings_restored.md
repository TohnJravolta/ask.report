---
date: 2025-09-27
owner: Codex Prime
priority: HIGH
type: Implementation Update
status: Delivered
---

# Keyboard Bindings Restored (ask.report)

## Context
Users reported that desktop keyboard bindings stopped working on ask.report. Mobile hamburger menu remained functional. This restores expected shortcuts while avoiding interference when typing in inputs or interacting with UI elements.

## Completed Action
- Implemented robust keyboard event handling with UI-scope guarding.
- Restored shortcuts: h (hold) help, m mode toggle, s reseed, d show seed, c copy link, b bookmark, l open library, [ / ] speed down/up, space pause, p snapshot, a start audio.
- Prevents key handling when focus is inside inputs, textareas, contenteditable, buttons, links, or overlay/panel/modal regions.

## Files Changed
- ASK/ask.report/repo/index.html

## Validation
- Manually verified shortcuts on desktop in the index.html app:
  - h shows help on keydown; existing keyup hides it
  - Space pauses/unpauses animation without scrolling the page
  - [ / ] adjust speed via the range control (dispatches input event)
  - m toggles mode; s/d/c/b/l/p/a perform their documented actions
  - Keys ignored when typing in text inputs or interacting with UI

## Notes
- Recording (r) and WAV export (w) are listed in help but not yet implemented in this build; the keyboard handler does not bind these to avoid broken references. When implemented, add their handlers in the same keydown switch.

## Links/Paths
- app: C:/Users/jarde/Documents/projects/ASK/ask.report/repo/index.html
- request: C:/Users/jarde/Documents/projects/ASK/ask.report/repo/agent-coms/codex-requests/20240927_keyboard_functionality_fix.md

## Requested Action
- Review and confirm behavior; if accepted, close the related issue and update documentation if needed.

## Owner
Codex Prime

