---
type: documentation
category: agent-guidance
status: active
tags: [codex, implementation, messaging, coordination]
created: 2025-09-26
updated: 2025-09-26
---

# Codex Messaging Playbook

Use the `agent-coms/` inbox/outbox system for targeted, actionable coordination.

When to message:
- Start/finish notifications for approved implementations
- Blockers or clarifications on specs/quality gates
- Cross-system changes (decisions, issues, project-plan, BUILD moves)
- Validation results requiring sign-off

How to message:
- Filename: `YYYYMMDD_<topic>.md`
- Sections: Context, Requested action, Links/paths, Owner, Priority/Due
- Place in receiver’s `inbox/` and copy to `agent-coms/codex/outbox/`
- Use concrete file paths; one message per action

Cleanup:
- Receiver removes from `inbox/` after action; Codex removes matching `outbox/` copy

References:
- `agent-coms/README.md` (system overview & protocols)
- `BUILD/CODEX.md` (role responsibilities & messaging integration)
