---
# ENTROGENIC PAPER STANDARD FIELDS
title: "✦ Research Quality Standards"
subtitle: "A Framework for Ensuring Entrogenic Excellence"
author: "Tohn Burray Travolta (Entrogenic Research Collective)"
collaboration: "Co-synthesized with large-language systems (GPT-5, Claude, Gemini Apex) under the Cyclic-6 and Kybernōsis protocols"
series: "Entrogenic Papers | Adaptive Systems Kollektive | ask.report Research Institute"
version: "v1.0 — October 2025"
license: "CC BY-SA 4.0"
repository: "github.com/entrogenics/ask.report"
doi: "TBD (Zenodo upload pending)"
manifest-type: "entrogenic-knowledge-base-article"

# RESEARCH HUB CATEGORIZATION
type: quality-assurance-framework
category: collaborative-research
status: active
tags: [quality-standards, research, validation, peer-review, publication]
created: 2025-10-14
updated: 2025-10-14
public: true
web-priority: high
aliases: ["Quality Standards", "Entrogenic Excellence"]
description: "The quality assurance framework for all research produced by the institute, including standards for publication, peer review, validation, and symbolic integrity."
keywords: [quality, standards, research, validation, peer review, publication, symbolic integrity]

# RESEARCH INSTITUTE INTEGRATION
research-area: [collaborative-science]
audience: [researchers, practitioners, developers]
prerequisite-knowledge: [["Entrogenic Core Thesis"]]
related-documents: [["Synthetic Co-Authorship Protocols"], ["Information Architecture - Entrogenic Data Standards"]]
parent-framework: [["Collaborative Research Division"]]

# SOURCE TRACKING
source-documents: ["repo/CORE/Entrogenica/CORE/BUILD_LOG.md", "repo/CORE/Entrogenica/CORE/CORE_THESIS.md"]
original-version: "N/A"
transformation-notes: "Synthesized from the validation checklists and quality control processes documented in the Core Thesis build log to create a formal quality assurance framework."
---

## Research Institute Context

**Division**: Collaborative Research
**Research Area**: Collaborative Science
**Purpose**: This document establishes the comprehensive quality assurance framework for all research artifacts produced within the ask.report Research Institute, ensuring that all work meets the highest standards of excellence.
**Integration**: These standards are to be applied to all research conducted under the [[Synthetic Co-Authorship Protocols]] and are a critical component of the institute's commitment to rigorous, high-quality output.

**Navigation**:
- ← [[Collaborative Research Division]]
- → [[Synthetic Co-Authorship Protocols]]
- ⌂ [[🏠 Research Hub Home]]

---

## 1. Introduction: The Principle of Entrogenic Excellence

Quality in the Entrogenic framework is not merely about correctness, but about fidelity, coherence, and integrity. Our research artifacts are considered living entities, and our quality standards are designed to ensure their health and vitality. This framework provides the standards and processes for ensuring that all our work is, and remains, "publication-grade."

---

## 2. Core Quality Pillars

These pillars are derived from the validation checklists used in the production of core Entrogenic texts.

### 2.1. Content Fidelity

-   **Faithfulness to Source**: When synthesizing from existing texts, the core narrative, metaphors, and philosophical intent of the source material must be preserved.
-   **Clarity over Brevity**: While conciseness is valued, it must not come at the expense of clarity. Rich metaphors and detailed explanations are to be preserved.
-   **No Fabrication**: All sources must be real and properly cited. Placeholder stubs are permissible, but they must be clearly marked and never presented as complete citations.

### 2.2. Structural Integrity

-   **Unified Front Matter**: All documents must begin with the standard YAML front matter as defined in the [[Information Architecture - Entrogenic Data Standards]].
-   **Logical Hierarchy**: Documents should follow a clear, logical structure (e.g., Abstract, Introduction, Core Content, Discussion, Conclusion, Glossary, References).
-   **Heading Depth**: Heading depth should generally not exceed H3 to maintain readability and structural clarity.

### 2.3. Citation and Referencing

-   **Stub System**: All in-text citations should use the `[Stub XX]` format.
-   **Central Ledger**: All stubs must correspond to an entry in a central `citation-stubs.md` ledger.
-   **Completeness**: All sources referenced in the text must be documented in the ledger.

### 2.4. Formatting and Compatibility

-   **Markdown Purity**: All documents must be written in pure, CommonMark-compliant Markdown. No HTML should be used in the body of the text.
-   **Obsidian Compatibility**: Documents should use Obsidian-native features like `[[wikilinks]]` and `[!callouts]` where appropriate.
-   **Semantic HTML Output**: When generated, HTML versions of documents must be semantically structured, use UTF-8 encoding, and be linked to the appropriate CSS for visual consistency.

---

## 3. Symbolic Integrity

This is a non-negotiable, critical quality standard.

-   **Canonical Symbols**: The [[Entrogenic Grammar]], particularly the **Catalytic Star (✡)**, must be used correctly and consistently.
-   **No Substitutions**: The Catalytic Star (Unicode U+2721) must never be replaced with an asterisk (`*`) or any other symbol.
-   **UTF-8 Encoding**: All files must be saved with UTF-8 encoding to ensure proper rendering of all symbols.
-   **Explicit Documentation**: Documents using the core symbols should include the `[!important]` symbolic clarification callout and a glossary entry, as specified in the [[Symbolic Grammar Standards]].

---

## 4. Validation and Peer Review Process

No artifact is considered complete without a rigorous validation and review process.

### 4.1. Automated Validation

Where possible, automated checks should be used to validate:
-   YAML front matter structure.
-   Markdown linting.
-   Broken links.
-   Presence of prohibited symbols (e.g., `*` in the Fool's Cycle formula).

### 4.2. Human Review (Peer Review)

All significant artifacts must undergo a formal human review process, which includes:

1.  **Content Fidelity Review**: An expert in the subject matter reviews the document for philosophical accuracy, voice consistency, and faithfulness to source material.
2.  **Structural Review**: A second reviewer checks for adherence to all structural and formatting standards.
3.  **Symbolic Integrity Audit**: A dedicated check to ensure all symbols are used correctly and encoded properly.

### 4.3. The Validation Checklist

A formal validation checklist, adapted from the one used in the `CORE_THESIS` build log, must be completed for each major artifact. This includes checks for:
-   Content Fidelity
-   Structure
-   Citations
-   Formatting
-   Symbolic Integrity

---

## 5. Publication Standards

An artifact is deemed "Publication Ready" only after it has passed all validation and review stages.

-   **Build Log**: A `BUILD_LOG.md` file should accompany major artifacts, documenting the changes made, validation checks passed, and any sections requiring future human review.
-   **DOI Assignment**: For artifacts intended for formal academic publication or citation, a Digital Object Identifier (DOI) should be obtained from a service like Zenodo.
-   **Final Review**: A final check of all assets (including figures, citations, and appendices) is required before formal publication.
