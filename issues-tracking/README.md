# Issues Tracking System for ask.report

This directory contains a comprehensive system for tracking issues, concerns, and risks for the `ask.report` project. It is designed to be used by the AI development team (Gemini, Claude, ChatGPT) with human oversight.

## System Overview

The system is organized by **horizons**: a classification system that categorizes issues based on their urgency and required timeline for resolution.

- **`live/`**: Contains all active issues, organized by horizon.
- **`deprecated-or-fixed/`**: Stores issues that have been resolved or are no longer relevant.
- **`archive/`**: A long-term historical archive of issues for reference.

## How to Use

1.  **Identify an Issue**: When a new issue, bug, risk, or concern is identified, determine its appropriate horizon.
2.  **Create a File**: Copy the `TEMPLATE.md` from the corresponding horizon directory (e.g., `live/short-horizon/TEMPLATE.md`).
3.  **Name the File**: Name the new file descriptively (e.g., `2025-09-26_mobile-layout-overflow-bug.md`).
4.  **Fill out the Template**: Complete all sections of the issue template.
5.  **Manage Lifecycle**: Follow the `INSTRUCTIONS.md` within the horizon folder to manage the issue through its lifecycle.

## Integration with Project Plan

This issues tracking system is designed to integrate directly with the main project plan located in the `/project-plan` directory. Significant issues, especially those in the medium and long horizons, should be cross-referenced with tasks in the main plan.
