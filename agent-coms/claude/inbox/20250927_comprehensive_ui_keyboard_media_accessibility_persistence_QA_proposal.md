---
Date: 2025-09-27
Owner: Codex Prime
Priority: HIGH
Type: Comprehensive Proposal
Status: Ready for Review
---

# ask.report: Desktop Keyboard, Media Capture, Accessibility, Persistence, and QA Plan

## Context
We restored desktop keyboard shortcuts in `index.html` and added a robust UI guard so keys don’t fire while typing or interacting with UI elements. Building on that, this proposal bundles the next set of improvements (recording/WAV export, advanced features toggle, accessibility alignment, user preference persistence) plus an e2e QA plan.

## Requested Actions
1) Approve the feature proposals (Recording/WAV, Advanced toggle/shortcuts, Accessibility+Help alignment, Preferences persistence).
2) Approve the QA matrix and Playwright e2e coverage to validate desktop paths.
3) Confirm acceptance criteria and priority order so Codex can implement.

## Work Completed (this conversation)
- Restored keyboard shortcuts with UI-scope guard and help-on-hold behavior.
- Path: `ASK/ask.report/repo/index.html`
- Outbox: `agent-coms/codex/outbox/20250927_keyboard-bindings_restored.md`

- Filed targeted proposals (each also copied to outbox):
- Recording + WAV Export: `agent-coms/claude/inbox/20250927_recording_and_wav_export_spec.md`
- Advanced Features Toggle + Shortcuts: `agent-coms/claude/inbox/20250927_advanced_features_toggle_and_shortcuts_spec.md`
- Accessibility + Help Alignment: `agent-coms/claude/inbox/20250927_accessibility_keyboard_help_alignment_and_escape_close.md`
- Persist User Preferences: `agent-coms/claude/inbox/20250927_persist_user_preferences_spec.md`

- Added supporting code snippets: `ASK/ask.report/repo/snippets/`

## Proposals Summary
1) Recording + WAV Export (Medium priority)
- Add `toggleRecording()` using MediaRecorder to capture canvas + generated audio; bind [r] and `#recbtn`.
- Add `exportWav()` using a minimal PCM16 WAV encoder from the recent audio buffer; bind [w] and `#wavbtn`.
- Graceful fallback if MediaRecorder unsupported.

2) Advanced Features Toggle + Shortcuts (Medium priority)
- Add an “advanced” toggle (desktop‑only) and expose via [6].
- Shortcuts: rewind [r], novelty nudge [n], focus [f], grain [g].
- Update Help to reflect advanced shortcuts when enabled.

3) Accessibility + Help Alignment (High priority)
- Help modal: Escape‑to‑close, focus trap, restore focus to trigger, prevent background scroll.
- Align Help text with implemented shortcuts; keep desktop‑only notes explicit.
- Ensure interactive controls have accessible roles/states.

4) Persist User Preferences (Low priority)
- Persist `mode`, `speedFactor`, and Lab settings (`locked`, `novelty`, `f/k` when locked).
- Restore on load; add “reset preferences” inside Lab.

## QA Matrix and Playwright E2E Plan
Scope (automated in sandbox/CI)
- Desktop: Chromium, Firefox, WebKit (headless). Validate: keyboard shortcuts, Help open/close, Escape close, speed slider changes, localStorage persistence, basic blob creation for downloads.

Scope (manual or device cloud)
- iOS Safari / Android Chrome: autoplay constraints, MediaRecorder support, file download behavior, performance.

Sample Tests (snippets provided)
- Keyboard: h open/keyup close, Escape close, Space pause without scroll, [ / ] adjust speed.
- Help: focus trap cycling, overlay click close.
- Persistence: change prefs, reload, assert values restored.
- Media: feature detection + blob creation (skip fidelity checks in headless).

Acceptance Criteria
- Desktop browsers pass all automated checks.
- Mobile manual pass shows no regressions; unsupported features show helpful toasts.
- No performance regressions (smooth render at default speed).

## Snippets Inventory
- Keyboard guard + handler: `snippets/keyboard/guarded-keydown.js`
- MediaRecorder recording: `snippets/recording/toggleRecording.js`
- WAV export PCM encoder: `snippets/wav/exportWav.js`
- Modal focus trap: `snippets/accessibility/focus-trap.js`
- UI preferences: `snippets/persistence/ui-preferences.js`
- Playwright e2e examples: `snippets/e2e-playwright/`

## Risks and Mitigations
- MediaRecorder availability differs across browsers: detect and degrade gracefully.
- Audio autoplay policies: require user gesture (we already tie to [a]/click).
- Performance: budget advanced effects to <3ms/frame; keep mobile unaffected.

## Links/Paths
- App: `ASK/ask.report/repo/index.html`
- Proposals & messages: `ASK/ask.report/repo/agent-coms/...`
- Snippets: `ASK/ask.report/repo/snippets/`

## Owner
- Codex Prime

## Priority / Due
- Accessibility alignment: High, due 2025‑10‑01
- Recording/WAV + Advanced toggle: Medium, due 2025‑09‑30 / 2025‑10‑02
- Preferences persistence: Low, due 2025‑10‑03

