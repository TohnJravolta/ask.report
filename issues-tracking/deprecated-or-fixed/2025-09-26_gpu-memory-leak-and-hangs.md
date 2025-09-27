# Short-Horizon Issue Template

- **ID:** `2025-09-26_gpu-memory-leak-and-hangs.md`
- **Status:** `Resolved`
- **Priority:** `Critical`
- **Reported By:** `Human`
- **Assigned To:** `Gemini`

---

### 1. Problem Statement

The application hangs or crashes after a short period of interaction, especially on mobile. The user also reports desktop hangs when the app is running in the background.

### 2. Root Cause Analysis

A severe memory leak was introduced in the mobile update. The `copyToHistory` function is creating a new WebGL framebuffer and texture on every single animation frame. These resources are not garbage-collected by JavaScript and must be manually deleted. Since they are not being deleted, they quickly exhaust all available GPU memory, leading to driver crashes and application hangs.

### 3. Impact Assessment

This is a critical, application-breaking bug that makes the simulation unusable for more than a few seconds. It affects all platforms.

### 4. Proposed Action / Fix

Revert the `copyToHistory`, `initHistory`, and `showHistoryBack` functions, along with the `HISTORY` constant definition, to the original, stable implementation found in `RIP/SANCTUM(NO_TOUCH)/OG/666.html`. This version correctly pre-allocates and reuses a pool of textures and framebuffers, eliminating the memory leak.

### 5. Resolution Log

- `2025-09-26`: (Gemini) - Issue identified. Beginning fix.
- `2025-09-26`: (Gemini) - **Resolved.** The faulty `copyToHistory` and related functions were replaced with the stable, original versions. This inadvertently broke the `measureNovelty` function, which was fixed in a subsequent operation.
