# Live Issue Management

This directory contains all active issues for the `ask.report` project, categorized by their resolution horizon.

## Horizons

- **`short-horizon/`**: Immediate issues, bugs, and blockers that must be addressed in the current work cycle (days to weeks). The primary focus for the MVP milestone is here.
- **`medium-horizon/`**: Important but less urgent issues that require analysis and planning. These will be tackled in future work cycles (weeks to months).
- **`long-horizon/`**: Strategic concerns, research topics, and major architectural questions that will shape the long-term future of the project (months to quarters).

## Workflow

1.  **Creation**: New issues are created in the appropriate horizon folder using the provided template.
2.  **Resolution**: Once an issue is resolved, tested, and validated, it should be moved from the `live/` directory to the `deprecated-or-fixed/` directory.
3.  **Re-classification**: If an issue's priority or timeline changes, it may be moved between horizon folders. This should be done by the lead agent (Gemini).
