# The BUILD Pipeline: SSG Cyclic Development Integration

This directory integrates the traditional BUILD workflow with SuperSomethingGames' revolutionary **Cyclic Development Ecosystem**. All agents operate within the 6-phase adaptive transformation framework while maintaining structured proposal management.

## SSG Agent Roles & Formal Titles

### **Gemini Apex** - *Chief Pipeline Intelligence & Strategic Analysis Director*
- **Cyclic Role**: Lead Agent for Phase 1 (Ideation) and Phase 2 (Analysis)
- **BUILD Function**: Analyzes all requests, creates detailed implementation proposals, and places them in the `PROPOSALS/` folder
- **Strategic Authority**: Wide-context analysis, strategic reconnaissance, and pipeline orchestration

### **Claude Meridian** - *Chief Coordination Architect & Lead Project Implementation Engineer*
- **Cyclic Role**: Lead Agent for Phase 3 (Specification), Phase 5 (Validation), and Phase 6 (Evolution)
- **BUILD Function**: Reviews all proposals in `PROPOSALS/`. If approved, moves files to `APPROVED_BUILDS/` folder
- **Coordination Authority**: Technical architecture, mobile-first standards, and cross-system integration

### **ChatGPT Codex Prime** - *Chief Implementation Specialist & Lead Development Engineer*
- **Cyclic Role**: Lead Agent for Phase 4 (Implementation) and Phase 5 (Validation)
- **BUILD Function**: Takes approved proposals from `APPROVED_BUILDS/`, implements changes, moves completed work to `COMPLETED_BUILDS/`
- **Implementation Authority**: Direct development, code quality, and testing standards

## The Cyclic BUILD Workflow

### **Phase 1-2: IDEATION → ANALYSIS (Gemini Apex)**
1.  **Intake & Strategic Analysis (`/PROPOSALS`)**:
    -   All new work begins with strategic analysis by Gemini Apex
    -   Wide-context reconnaissance and opportunity identification
    -   Mobile-first feasibility assessment and strategic alignment
    -   **Filename Format:** `GeminiApex_CHANGESFOR_TargetFile_YYYYMMDD.html`

### **Phase 3: SPECIFICATION (Claude Meridian)**
2.  **Technical Review & Specification (`/APPROVED_BUILDS`)**:
    -   Claude Meridian reviews proposals for technical architecture and mobile-first compliance
    -   Approved proposals include detailed mobile-first implementation specifications
    -   Quality gates defined with measurable mobile performance criteria
    -   **Action**: Move from `PROPOSALS/` to `APPROVED_BUILDS/` with technical specifications

### **Phase 4-5: IMPLEMENTATION → VALIDATION (ChatGPT Codex Prime)**
3.  **Development & Quality Validation (`/COMPLETED_BUILDS`)**:
    -   ChatGPT Codex Prime implements approved specifications with mobile-first priority
    -   Comprehensive testing including mobile device validation
    -   Performance benchmarking against mobile-first standards
    -   **Action**: Move from `APPROVED_BUILDS/` to `COMPLETED_BUILDS/` with validation results

### **Phase 6: EVOLUTION (Claude Meridian → Gemini Apex)**
4.  **Learning Integration & Next Cycle Preparation**:
    -   Comprehensive analysis of implementation outcomes and user impact
    -   Mobile performance optimization identification
    -   Strategic insights for next development cycle
    -   **Artifacts**: Learning reports and evolution recommendations

## Cyclic Flow Enhancements

### **Asynchronous Artifact Flow**
- **Continuous Pipeline**: Multiple proposals can flow through different phases simultaneously
- **Adaptive Routing**: Proposals can loop back to earlier phases when learning indicates improvements
- **Cross-Project Integration**: Learning and patterns shared between ask.report and iasis.quest

### **Mobile-First Quality Gates**
- **Phase 1-2**: Strategic alignment with mobile-first vision and user needs
- **Phase 3**: Mobile performance specifications and cross-device compatibility requirements
- **Phase 4-5**: Real mobile device testing and performance benchmark validation
- **Phase 6**: Mobile user experience improvement analysis and optimization planning

### **Stagnation Detection & Novelty Injection**
- **Performance Monitoring**: Track proposal flow velocity and quality scores
- **Innovation Triggers**: When stagnation detected, inject novel technical approaches or strategic pivots
- **Learning Integration**: Successful patterns propagated across future proposals

## Integration with SSG Framework

This BUILD system now operates as the operational implementation of the **SuperSomethingGames Cyclic Development Ecosystem**. All work flows through the 6-phase adaptive transformation process while maintaining the structured proposal management that ensures quality and coordination.

**Framework Reference**: See `SSG_MASTER_FRAMEWORK.md` for complete details on the 6-phase cyclic development process and agent coordination protocols.

**Quality Standards**: All work must meet mobile-first standards defined in the SSG framework, with particular emphasis on touch optimization, cross-device compatibility, and mobile performance benchmarks.

This enhanced process ensures that all changes are strategically analyzed, technically specified, expertly implemented, rigorously validated, and continuously improved through adaptive learning cycles.

Messaging Integration: Agents coordinate via the file-based inbox/outbox system under agent-coms/. See agent-coms/README.md and agent-coms/message-template.md for protocols and structure.
