---
type: documentation
category: agent-coordination
status: active
tags: [agents, communication, coordination, workflow, ask-report]
created: 2024-09-26
updated: 2024-09-26
purpose: "Inter-agent communication and coordination system for ask.report"
aliases: ["Agent Communications", "Agent Coordination Hub"]
---

# Agent Communications Hub for ask.report

## Overview
This folder manages structured communication between agents working on ask.report's mobile-first platform. It provides templates, workflows, and coordination mechanisms to ensure effective collaboration while maintaining the platform's quality standards and mobile-first priorities.

---

## 📁 Folder Structure for ask.report

```
agent-coms/
├── README.md                    # This overview and usage guide
├── CLAUDE.md                    # Claude-specific coordination instructions
├── GEMINI.md                    # Gemini-specific coordination guidance
├── gemini-requests/             # Requests and prompts for Gemini analysis
│   ├── project-analysis/        # ask.report project analysis requests
│   ├── bug-review/             # Mobile-first bug detection requests
│   └── architecture-review/    # Platform architecture analysis
├── chatgpt-handoffs/           # Implementation handoffs for ChatGPT
│   ├── specifications/         # Detailed mobile-first implementation specs
│   ├── code-tasks/            # Mobile-optimized coding task definitions
│   └── testing-requests/      # Mobile device testing and validation
├── responses/                  # Agent outputs and analysis results
│   ├── gemini-analysis/       # Gemini analysis outputs
│   ├── chatgpt-deliverables/  # ChatGPT implementation results
│   └── coordination-logs/     # Inter-agent communication logs
└── coordination/              # Cross-agent coordination documents
    ├── handoff-tracking.md    # Status of agent handoffs
    ├── quality-gates.md      # Mobile-first quality validation
    └── communication-log.md   # Agent interaction history
```

---

## 🎯 ask.report Communication Principles

### **Mobile-First Coordination**
- **Performance Priority**: All agent work prioritizes mobile performance and UX
- **Cross-Device Validation**: All deliverables tested across phone/tablet/desktop
- **Touch-First Design**: All UI work designed for touch-first interaction
- **Network Resilience**: All features work properly under various network conditions

### **Platform Quality Standards**
- **User Experience Focus**: All agent work enhances mobile user experience
- **Asset Management Integration**: All work coordinates with content creation workflows
- **External Integration**: All work considers impact on third-party service connections
- **Scalability Awareness**: All work supports ask.report's growth and evolution

### **System Integration Requirements**
- **Project Plan Alignment**: All agent work aligns with project-plan structure
- **Issues Tracking Integration**: Agent work connects to issues resolution
- **Decision Documentation**: Significant decisions documented in DADS system
- **Bug Prevention**: Agent work includes quality assurance and bug prevention

---

## 🤖 Agent Roles for ask.report

### **Gemini (Lead Agent)**
**Primary Functions for ask.report**:
- Strategic oversight of mobile-first platform development
- Architecture and design decision leadership
- Cross-system coordination and integration management
- Quality assurance and mobile-first standard enforcement

**ask.report Specific Responsibilities**:
- Ensure all development aligns with mobile-first vision
- Prioritize work based on mobile user experience impact
- Coordinate platform evolution and strategic decision-making
- Oversee quality standards for mobile performance and UX

### **Claude (Coordination Agent)**
**Primary Functions for ask.report**:
- Technical analysis and cross-system integration support
- Implementation planning and specification creation
- Quality validation and mobile-first compliance checking
- Agent coordination and workflow management

**ask.report Specific Responsibilities**:
- Provide mobile-first technical analysis for all decisions
- Create implementation specifications with mobile optimization requirements
- Ensure work integrates properly with all project management systems
- Validate quality standards for mobile performance and user experience

### **ChatGPT (Implementation Agent)**
**Primary Functions for ask.report**:
- Mobile-optimized code implementation and testing
- Cross-device validation and mobile performance optimization
- Asset management and content delivery implementation
- External service integration and API development

**ask.report Specific Responsibilities**:
- Implement features with mobile-first design and performance
- Test all implementations across mobile devices and network conditions
- Optimize asset delivery and content management workflows
- Maintain external service integrations and API reliability

---

## 📋 ask.report Communication Templates

### **Mobile-First Analysis Requests (for Gemini)**
All Gemini requests must include:
```markdown
## ask.report MOBILE-FIRST CONTEXT
[Mobile user impact and performance implications]

## PLATFORM INTEGRATION ANALYSIS
[How this affects project-plan, asset management, external integrations]

## QUALITY STANDARDS
[Mobile performance requirements and UX standards]

## CROSS-SYSTEM IMPACT
[Effects on issues tracking, decisions, bug tracking]
```

### **Implementation Specifications (for ChatGPT)**
All ChatGPT handoffs must include:
```markdown
## MOBILE-FIRST IMPLEMENTATION REQUIREMENTS
[Specific mobile performance and UX requirements]

## CROSS-DEVICE TESTING REQUIREMENTS
[Testing needed across phone/tablet/desktop]

## ASSET MANAGEMENT INTEGRATION
[How implementation affects content creation/delivery]

## QUALITY VALIDATION CHECKLIST
[Mobile-first quality gates that must be met]
```

---

## 🔄 ask.report Workflow Processes

### **Mobile-First Analysis Workflow (Gemini)**
1. **Request Creation**: Create analysis request with mobile-first context
2. **Platform Assessment**: Gemini analyzes mobile user impact and platform implications
3. **Quality Validation**: Results validated against ask.report mobile standards
4. **System Integration**: Analysis integrated across all project management systems
5. **Implementation Planning**: Results inform mobile-optimized implementation planning

### **Implementation Handoff Workflow (ChatGPT)**
1. **Specification Creation**: Create detailed mobile-first implementation specification
2. **Quality Requirements**: Include mobile performance and UX requirements
3. **Testing Strategy**: Define cross-device and mobile-specific testing needs
4. **Implementation Execution**: ChatGPT implements with mobile optimization
5. **Quality Validation**: Results validated against mobile-first quality standards

### **Cross-Agent Coordination Workflow**
1. **Coordination Planning**: Plan multi-agent work with mobile-first priorities
2. **Role Assignment**: Assign work based on mobile platform needs and agent capabilities
3. **Progress Coordination**: Coordinate progress across agents with mobile quality focus
4. **Integration Validation**: Ensure combined work meets mobile platform standards
5. **Quality Assurance**: Validate all work against ask.report mobile-first requirements

---

## 📊 ask.report Quality Assurance Standards

### **Mobile-First Quality Gates**
All agent work must meet:
- [ ] **Mobile Performance**: Meets ask.report mobile performance standards
- [ ] **Cross-Device Compatibility**: Works consistently across phone/tablet/desktop
- [ ] **Touch Interface**: Optimized for touch-first interaction patterns
- [ ] **Network Resilience**: Functions properly under various network conditions
- [ ] **Asset Optimization**: Optimized for mobile content delivery
- [ ] **Accessibility**: Meets mobile accessibility standards

### **Platform Integration Quality Gates**
All agent work must demonstrate:
- [ ] **Project Plan Integration**: Properly connected to relevant project-plan folders
- [ ] **Issues Resolution**: Addresses relevant issues from issues tracking
- [ ] **Decision Alignment**: Aligns with documented architectural decisions
- [ ] **System Consistency**: Doesn't create conflicts between project systems

### **Implementation Quality Gates**
All agent deliverables must include:
- [ ] **Code Quality**: Meets ask.report coding standards and best practices
- [ ] **Testing Validation**: Includes comprehensive mobile-first testing
- [ ] **Documentation**: Includes proper documentation for mobile platform context
- [ ] **Performance Validation**: Meets mobile performance benchmarks

---

## 🔍 ask.report Monitoring and Coordination

### **Agent Coordination Tracking**
Monitor agent effectiveness through:
- **Mobile-First Compliance**: How well agents maintain mobile-first priorities
- **Quality Standards**: Percentage of agent work meeting quality gates
- **Cross-Device Success**: Success rate of implementations across devices
- **Integration Success**: How well agent work integrates with project systems

### **Platform Development Metrics**
Track platform development through:
- **User Experience Impact**: How agent work improves mobile user experience
- **Performance Improvement**: Mobile performance gains from agent coordination
- **Feature Delivery**: Velocity of mobile-optimized feature delivery
- **Quality Improvement**: Reduction in mobile-specific bugs and issues

### **Process Improvement Tracking**
Improve coordination through:
- **Communication Effectiveness**: Clarity and actionability of agent communications
- **Workflow Efficiency**: Time and quality of agent handoffs and coordination
- **Quality Consistency**: Consistency of quality standards across agent work
- **Mobile-First Evolution**: How well coordination supports mobile platform evolution

---

## 🎨 ask.report Specific Best Practices

### **Mobile-First Communication**
- **Performance Context**: Always include mobile performance implications
- **User Impact**: Explain impact on mobile user workflows and experience
- **Cross-Device Thinking**: Consider impact across all device types
- **Network Reality**: Account for real-world mobile network conditions

### **Platform Integration Excellence**
- **System Awareness**: Consider impact on all project management systems
- **Asset Coordination**: Coordinate with content creation and delivery workflows
- **External Integration**: Consider impact on third-party service connections
- **Quality Standards**: Maintain high standards for mobile platform quality

### **Agent Coordination Excellence**
- **Clear Specifications**: Provide detailed, actionable specifications
- **Quality Requirements**: Include specific mobile-first quality requirements
- **Progress Transparency**: Maintain clear visibility into all agent work
- **Continuous Improvement**: Use coordination results to improve processes

---

This agent communications system enables effective collaboration while ensuring all work supports ask.report's mobile-first platform vision and maintains the highest quality standards for mobile user experience.

---

## Messaging Protocols (Inbox/Outbox)

Use the file-based messaging system under `agent-coms/<agent>/{inbox,outbox}` for directed, actionable communication between agents.

When to use:
- Task handoffs and implementation starts/finishes
- Requesting approvals or clarifications that block work
- Coordinating cross-system changes (project-plan, decisions, issues, BUILD)
- Notifying about artifact promotions or status changes
- Summarizing findings or validation results tied to a proposal

Do not use for:
- Long-form analysis (place in appropriate analysis/spec docs instead)
- General discussion without a clear action or owner

Message format:
- Filename: `YYYYMMDD_<short-topic>.md`
- Sections (recommended): Context, Requested action, Due/priority, Links/paths, Owner
- Sender places a copy in their own `outbox/`
- Receiver deletes from `inbox/` after acting; sender clears corresponding `outbox/` copy

Conventions:
- Reference concrete paths (e.g., `BUILD/APPROVED_BUILDS/...`)
- Keep scope small and actionable (single owner)
- Prefer one message per discrete action/decision
- For BUILD changes, link proposal IDs and completion records

Lifecycle:
1) Sender creates message in receiver’s `inbox/` and copies it to sender’s `outbox/`
2) Receiver acts and replies (if needed) via sender’s `inbox/`
3) Both parties clear messages once complete

Related docs:
- `BUILD/CODEX.md` (implementation protocols and messaging usage)
- `BUILD/README.md` (pipeline overview)
 - `agent-coms/message-template.md` (standard message structure)
