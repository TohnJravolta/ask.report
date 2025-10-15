---
# ENTROGENIC PAPER STANDARD FIELDS
title: "✦ Information Architecture - Entrogenic Data Standards"
subtitle: "A Specification for Organizing and Encoding Knowledge"
author: "Tohn Burray Travolta (Entrogenic Research Collective)"
collaboration: "Co-synthesized with large-language systems (GPT-5, Claude, Gemini Apex) under the Cyclic-6 and Kybernōsis protocols"
series: "Entrogenic Papers | Adaptive Systems Kollektive | ask.report Research Institute"
version: "v1.0 — October 2025"
license: "CC BY-SA 4.0"
repository: "github.com/entrogenics/ask.report"
doi: "TBD (Zenodo upload pending)"
manifest-type: "entrogenic-knowledge-base-article"

# RESEARCH HUB CATEGORIZATION
type: data-architecture-specification
category: data-systems
status: active
tags: [information-architecture, data-standards, metadata, citation, encoding, entrogenics]
created: 2025-10-14
updated: 2025-10-14
public: true
web-priority: high
aliases: ["Entrogenic Data Standards", "Information Architecture"]
description: "The official specification for the Entrogenic information architecture, including metadata standards, citation systems, symbolic notation, and encoding requirements."
keywords: [information architecture, data standards, metadata, citation, symbolic notation, encoding, entrogenics]

# RESEARCH INSTITUTE INTEGRATION
research-area: [information-systems]
audience: [researchers, developers, data-scientists]
prerequisite-knowledge: [["Entrogenic Core Thesis"]]
related-documents: [["Symbolic Grammar Standards"], ["Data Analysis Frameworks"]]
parent-framework: [["Data Systems Division"]]

# SOURCE TRACKING
source-documents: ["repo/CORE/Entrogenica/CORE/CORE_THESIS.md", "repo/CORE/ENTROGENIC-PAPER-STANDARD-FRONT_MATTER_&_INTRO BLOCK.md"]
original-version: "N/A"
transformation-notes: "Synthesized from the metadata and encoding standards present in the Core Thesis and the Entrogenic Paper Standard document to create a unified information architecture specification."
---

## Research Institute Context

**Division**: Data Systems
**Research Area**: Information Systems
**Purpose**: This document provides the definitive specification for the information architecture used across the ask.report Research Institute, ensuring consistency, clarity, and machine-readability of all knowledge artifacts.
**Integration**: This standard is the backbone of the [[Data Systems Division]] and is essential for the proper creation and maintenance of all documents in the knowledge hub.

**Navigation**:
- ← [[Data Systems Division]]
- → [[Data Analysis Frameworks]]
- ⌂ [[🏠 Research Hub Home]]

---

## 1. Introduction

A robust and consistent information architecture is essential for a healthy knowledge ecosystem. The Entrogenic Data Standards provide a unified framework for organizing, encoding, and citing information, ensuring that all knowledge artifacts are clear, discoverable, and interoperable.

Adherence to these standards is mandatory for all documents within the research hub.

---

## 2. Metadata Standards: The Unified Front Matter

Every knowledge base document MUST begin with a YAML front matter block containing the following fields. This metadata is critical for categorization, discovery, and automated processing.

```yaml
---
# ENTROGENIC PAPER STANDARD FIELDS
title: "✦ [Document Title]"
subtitle: "[Descriptive subtitle relating to research area]"
author: "Tohn Burray Travolta (Entrogenic Research Collective)"
collaboration: "Co-synthesized with large-language systems (GPT-5, Claude, Gemini Apex) under the Cyclic-6 and Kybernōsis protocols"
series: "Entrogenic Papers | Adaptive Systems Kollektive | ask.report Research Institute"
version: "v1.0 — October 2025"
license: "CC BY-SA 4.0"
repository: "github.com/entrogenics/ask.report"
doi: "TBD (Zenodo upload pending)"
manifest-type: "entrogenic-knowledge-base-article"

# RESEARCH HUB CATEGORIZATION
type: [research-paper | framework-documentation | methodology | protocol | introduction | reference]
category: [universal-grammar | simulation-frameworks | ecology-studies | data-systems | collaborative-research | public-interface]
status: active
tags: [domain-specific-tags, framework-tags, topic-tags]
created: YYYY-MM-DD
updated: YYYY-MM-DD
public: true
web-priority: [highest | high | medium | low]
aliases: [Alternative Names, Common References, Abbreviations]
description: "[One-sentence description of document purpose and content]"
keywords: [keyword1, keyword2, keyword3, relevant-search-terms]

# RESEARCH INSTITUTE INTEGRATION
research-area: [consciousness-research | systems-ecology | universal-communication | information-systems | collaborative-science]
audience: [researchers | practitioners | students | general-public | academic-partners]
prerequisite-knowledge: [required-background-topics]
related-documents: []
parent-framework: [[Higher-level framework if applicable]]

# SOURCE TRACKING
source-documents: ["repo/CORE/path/to/source.md"]
original-version: "[Link to original if different from this version]"
transformation-notes: "[How this document was adapted for knowledge base]"
---
```

---

## 3. Citation System

To maintain a clean and readable body text while ensuring academic rigor, the Entrogenic framework uses a two-part citation system.

### In-text Stub Markers

Citations within the text are marked with a simple, non-intrusive stub: `[Stub XX]`.

**Example:**
> The polycrisis implies a deep, structural entanglement between global systems [Stub 03].

### The Citation Ledger

These stubs correspond to a central citation ledger file (e.g., `citation-stubs.md`) where the full bibliographic information for each source is maintained. This keeps the main articles clean and focused on the content, while providing a centralized, easily manageable repository for all references.

---

## 4. Symbolic Notation and Encoding

The integrity of the [[Entrogenic Grammar]] is paramount. This requires strict adherence to encoding standards.

### The Catalytic Star (✡)

The most critical symbol is the **Catalytic Star (✡)**. Its preservation is non-negotiable.

-   **Required Encoding**: All documents MUST use **UTF-8** encoding.
-   **Canonical Glyph**: The only acceptable character is **✡** (Unicode Codepoint: U+2721).
-   **Prohibited Substitutions**: Never replace the Catalytic Star with `*`, `★`, or any other character.

For a full explanation of the symbol's meaning and importance, see the [[Symbolic Grammar Standards]] document.

### HTML Encoding

All HTML pages generated from these markdown files must include the following meta tag in the `<head>` section to ensure proper rendering of all symbols:

```html
<meta charset="UTF-8">
```

---

## 5. File Naming and Structure

-   **File Names**: File names should be descriptive and use hyphens to separate words (e.g., `Information-Architecture-Entrogenic-Data-Standards.md`).
-   **Directory Structure**: All knowledge base articles must be placed in the appropriate subdirectory within `research-knowledge-hub/` corresponding to their `category` in the front matter.
