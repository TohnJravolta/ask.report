---
type: documentation
category: coordination
status: active
tags: [quality, gates, messaging, build]
created: 2025-09-26
updated: 2025-09-26
---

# Coordination Quality Gates (Messaging)

For inter-agent messaging via `agent-coms/<agent>/{inbox,outbox}`:

- Actionable: Message requests a single, clear action with an owner.
- Path-Referenced: Includes concrete repo paths to relevant artifacts.
- Scoped: Covers one decision/change; avoid multi-topic threads.
- Lifecycle: Sender copies to outbox; receiver clears inbox on completion; sender clears outbox after confirmation.
- Traceable: Significant changes reflected in `agent-coms/coordination/communication-log.md` and `handoff-tracking.md`.
- BUILD-Linked: If messaging relates to proposals or completions, include proposal ID and link to `BUILD/*` artifacts.

References
- `agent-coms/README.md` (Messaging Protocols)
- `agent-coms/message-template.md` (Template)
- `BUILD/README.md` (Pipeline overview)
- `BUILD/CODEX.md` (Codex messaging integration)

