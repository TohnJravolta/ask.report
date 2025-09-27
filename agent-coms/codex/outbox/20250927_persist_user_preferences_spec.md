## Context
Users benefit from continuity across sessions. Mode, speed, and Lab settings (locked/novelty, f/k) can persist via localStorage without server impact.

## Requested action
- Approve persisting core UI preferences and restoring them on load.

## Implementation outline
- Persist on change: `mode`, `speedFactor`, `lab.locked`, `lab.novelty`, and when locked, `lab.f`/`lab.k`.
- Keys under a single namespace, e.g., `askreport_ui` JSON.
- Restore early during initialization; validate values and clamp to safe ranges.
- Add a small “reset preferences” control in Lab panel.

## Quality gates
- Safe defaults on first run; corrupted storage handled gracefully.
- No performance cost; writes are infrequent and small.
- Private browsing degrades gracefully with informative toast if storage disallowed.

## Testing
- Change settings, reload; confirm values restored.
- Reset control clears and reloads defaults.

## Links/paths
- app: ASK/ask.report/repo/index.html

## Owner
Codex Prime

## Priority/Due
Priority: Low
Due: 2025-10-03

