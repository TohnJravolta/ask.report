---
type: template
category: messaging
status: active
tags: [agents, messaging, inbox, outbox, coordination]
created: 2025-09-26
updated: 2025-09-26
---

# Agent Message Template

Filename: `YYYYMMDD_<short-topic>.md`

Header
- Date: YYYY-MM-DD
- Owner: <Target agent>
- From: <Sender agent>
- Priority: High | Normal | Low

Sections
## Context
Brief background in 2–4 sentences. Link concrete file paths.

## Requested Action
1) Clear, single-owner action
2) Optional sub-steps (keep minimal)

## Links/Paths
- <repo-relative-path>
- <repo-relative-path>

## Due / Priority
- Due: <YYYY-MM-DD or ASAP>
- Priority rationale (if High)

## CC (optional)
- <other agent(s)>

## Notes (optional)
- Constraints, assumptions, or acceptance criteria

Lifecycle
- Sender places this file in receiver’s `inbox/` and a copy in sender’s `outbox/`
- Receiver acts and replies via sender’s `inbox/` if needed
- Both delete their copies after completion

