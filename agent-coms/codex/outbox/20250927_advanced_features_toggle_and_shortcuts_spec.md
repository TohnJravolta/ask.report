## Context
Legacy OG build includes advanced controls (rewind, focus, grain, novelty nudge) and an easter‑egg unlock via the [6] key. Current `index.html` exposes only a subset of shortcuts.

## Requested action
- Approve consolidating advanced controls into `index.html` with a simple, visible toggle and aligned shortcuts.

## Implementation outline
- Advanced mode toggle
  - Add a discrete “advanced” toggle in UI (desktop only) and expose via [6].
  - When enabled, show status toast and reveal extra shortcuts in Help.
- Shortcuts to add
  - [r] rewind toggle (existing `rewind` var is present)
  - [n] novelty nudge (kick once)
  - [f] focus toggle (visual emphasis pass; implement minimal shader flag or post‑processing blend)
  - [g] grain toggle (light noise overlay; ensure GPU‑cheap path)
  - Keep [6] as unlock/toggle; reserve long‑press or 69‑press variant as optional easter‑egg trigger (`activateDVD()` if reintroduced later)
- Help alignment
  - Update Help content to list advanced shortcuts only when advanced is on.
- Guardrails
  - No changes to mobile UX; advanced controls hidden behind width breakpoint.
  - Performance budget: < 3ms/frame overhead on mid‑range laptops.

## Quality gates
- No GPU stalls; FPS remains smooth at default speed.
- Shortcuts work only when focus is not inside UI (uses existing `isUI(e)` guard).
- Advanced toggle state clearly indicated and persists across reload (localStorage).

## Testing
- Toggle advanced; verify f/g/n/r behaviors and toasts.
- Verify Help reflects current mode.
- Toggle off; ensure effects disable and state persists after reload.

## Links/paths
- app: ASK/ask.report/repo/index.html
- reference behaviors: ASK/ask.report/repo/RIP/SANCTUM(NO_TOUCH)/OG/666.html

## Owner
Codex Prime

## Priority/Due
Priority: Medium
Due: 2025-10-02

