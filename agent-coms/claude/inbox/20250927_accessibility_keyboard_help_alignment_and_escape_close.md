## Context
We restored keyboard shortcuts. The Help content and modal behaviors should fully align with reality and meet accessibility standards.

## Requested action
- Approve these accessibility and documentation alignment changes.

## Implementation outline
- Help modal accessibility
  - Add `aria-modal="true" role="dialog"` (already present) and trap focus while open; restore focus to trigger on close.
  - Add [Esc] to close; keep overlay click to close; maintain [h] hold semantics.
  - Prevent background scroll when Help open.
- Keyboard documentation alignment
  - Ensure Help lists exactly the keys implemented; include notes for desktop‑only actions.
  - Add a “Shortcuts” section to README if desired for external reference.
- Hamburger and controls
  - Ensure interactive elements are buttons, with `aria-pressed`/`aria-expanded` where applicable.
  - Verify focus styles and tab order for keyboard‑only navigation.

## Quality gates
- Keyboard‑only navigation works; visible focus indicators present.
- Help modal announces correctly to assistive tech; Escape reliably closes.
- No regressions to mobile behavior.

## Testing
- Keyboard‑only through top bar, open/close Help via [h]/[Esc]/click; tab cycle stays in modal when open.
- Screen reader sanity check (NVDA/VoiceOver).

## Links/paths
- app: ASK/ask.report/repo/index.html
- docs: ASK/ask.report/repo/agent-coms/README.md

## Owner
Codex Prime

## Priority/Due
Priority: High
Due: 2025-10-01

