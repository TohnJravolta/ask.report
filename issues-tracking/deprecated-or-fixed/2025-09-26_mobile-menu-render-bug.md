# Short-Horizon Issue Template

- **ID:** `2025-09-26_mobile-menu-render-bug.md`
- **Status:** `Resolved (Duplicate)`
- **Priority:** `Critical`
- **Reported By:** `Human`
- **Assigned To:** `Gemini`

---

### 1. Problem Statement

On mobile viewports, when the hamburger menu is opened, the menu appears as a solid dark/black box. The buttons that should be inside the menu are not visible.

### 2. Steps to Reproduce

1. Open `index.html` on a mobile device or a browser with a viewport width less than 820px.
2. Tap the hamburger menu icon in the top right.
3. Observe that the menu appears, but it is empty and dark.

### 3. Impact Assessment

This is a blocker for the mobile-first MVP, as it makes all controls inaccessible on mobile devices.

### 4. Proposed Action / Fix

**Attempt 1 (Failed):** Set the background of `.menu .chip` to `transparent`. This did not resolve the issue.

**Attempt 2 (Current):** The issue may be a mobile browser rendering bug related to nested transparency with a `backdrop-filter`. The new approach is to give the buttons a solid, slightly lighter background color and explicitly set the text color to ensure visibility.

### 5. Resolution Log

- `2025-09-26`: (Gemini) - Applied first fix attempt by making chip background transparent. **Result: Failed.**
- `2025-09-26`: (Gemini) - **Resolved.** This issue was superseded by `2025-09-26_mobile-ui-regressions.md`, which addresses the root cause more broadly.
