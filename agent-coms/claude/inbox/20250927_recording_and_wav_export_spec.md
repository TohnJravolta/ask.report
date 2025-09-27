## Context
Help lists recording [r] and WAV export [w], but these actions are not implemented in `index.html`. An older variant (`RIP/SANCTUM(NO_TOUCH)/OG/666.html`) shows a viable MediaRecorder approach we can port.

## Requested action
- Review and approve this implementation plan, or request adjustments.

## Implementation outline
- Recording (video+audio)
  - Use `canvas.captureStream(60)` for video and route audio via `AnalyserNode` to `MediaStreamDestination`.
  - Combine into `MediaStream` and record with `MediaRecorder` (`video/webm;codecs=vp9,opus`).
  - Add `toggleRecording()` with keyboard [r] and `#recbtn` click bindings; show toast state; auto-stop on second [r] or when closing page.
  - Save blob as `ask-report-<timestamp>.webm` via object URL.
- WAV export (audio only)
  - If audio hasn’t started, call `tryStartAudio()` or show a toast hint.
  - Render recent audio buffer into WAV (16‑bit PCM) and download as `ask-report-<timestamp>.wav`.
  - For cross-browser stability, prefer OfflineAudioContext or encode from a rolling buffer we maintain.
- UI and help
  - Wire `#recbtn` and `#wavbtn` handlers; add keyboard [r]/[w] into the unified handler.
  - Keep mobile unaffected; feature gates run only when audio context exists.

## Quality gates
- No crashes when MediaRecorder unsupported; show helpful toast fallback.
- Mobile performance unchanged; no autoplay violations (user gesture required).
- Files save correctly; recording includes both canvas visuals and generated audio.
- Works in Chromium and Firefox; Safari gracefully degrades if needed.

## Testing
- Manual: start audio [a], record [r], stop [r], open saved webm; verify audio present.
- Export WAV [w] plays expected audio snippet.
- Try without audio started; confirm helpful messaging.

## Links/paths
- app: ASK/ask.report/repo/index.html
- reference: ASK/ask.report/repo/RIP/SANCTUM(NO_TOUCH)/OG/666.html

## Owner
Codex Prime

## Priority/Due
Priority: Medium
Due: 2025-09-30

