---
type: documentation-guide
category: issues-tracking
status: active
tags: [obsidian, issues, templates, mobile-first, quality-assurance, ssg-portfolio]
created: 2024-09-26
updated: 2024-09-26
mobile-first-priority: Medium
project-plan-integration: [Quality Assurance, Core Features]
consciousness-layer: project
ask-integration: adaptive-systems-kollektive
aliases: [Issues Obsidian Guide, Mobile-First Issues Templates, ask.report Issues Standards]
---

# 📋 Obsidian Issues Tracking Guide for ask.report

**Complete guide for tracking [[Mobile-First Platform]] issues using [[SSG Portfolio]] [[Obsidian Standards]]**

---

## 🧿 Issues Template Usage

### **Primary Template for Issues**
**Use**: `[[Issue Template]]` from `[[TEMPLATES_AND_GUIDES]]`

**Template Location**:
`C:/Users/jarde/Documents/projects/TEMPLATES_AND_GUIDES/obsidian-templates/project-artifacts/issue-template.md`

### **Mobile-First Issues Metadata**
```yaml
---
type: issue
category: mobile-first-platform | performance | user-experience | accessibility | cross-device
status: open | in-progress | resolved | closed
priority: critical | high | medium | low
mobile-first-priority: Critical | High | Medium | Low
user-experience-impact: High | Medium | Low | None
performance-implications: Critical | Significant | Minor | None
affects-touch-interface: true | false
affects-accessibility: true | false
cross-device-compatibility: Required | Preferred | Optional
project-plan-integration: [relevant-planning-folder]
consciousness-layer: project
ask-integration: adaptive-systems-kollektive
aliases: [Issue Short Name, Bug Reference]
---
```

---

## 🌊 Mobile-First Vocabulary for Issues

### **Issue Description Standards**
All issues must use [[Mobile-First Development]] vocabulary in descriptions:

**Correct Terminology:**
- **[[Touch Interface]]** not responding properly (NOT "mobile UI broken")
- **[[Performance Budget]]** exceeded on mobile (NOT "site is slow")
- **[[Cross-Device Compatibility]]** issue (NOT "responsive design broken")
- **[[Accessibility Standards]]** violation (NOT "a11y problem")
- **[[Progressive Enhancement]]** not working (NOT "feature doesn't work on mobile")
- **[[Performance Optimization]]** needed (NOT "speed improvements required")
- **[[Touch Targets]]** too small (NOT "buttons hard to click")

### **User Impact Language**
Use clear, user-focused language for mobile issues:
- "Touch targets difficult to tap accurately" instead of "button hit areas insufficient"
- "Page loads too slowly on mobile networks" instead of "performance optimization needed"
- "Content not accessible to screen readers" instead of "accessibility violation"

---

## ⚡ Issue Categories & Templates

### **Mobile-First Platform Issues**
**Focus**: [[Touch Interface]], [[Performance]], [[Cross-Device Compatibility]]
**Required Links**:
- [[Mobile-First Development]]
- [[Touch Design]]
- [[Performance Budget]]
- [[Cross-Device Testing]]

### **Performance Issues**
**Focus**: [[Performance Optimization]], [[Mobile Networks]], [[Battery Efficiency]]
**Required Links**:
- [[Performance Budget]]
- [[Mobile Performance]]
- [[Loading Speed]]
- [[Network Optimization]]

### **User Experience Issues**
**Focus**: [[Touch Interface]], [[Accessibility]], [[Mobile UX Patterns]]
**Required Links**:
- [[Touch Targets]]
- [[Accessibility Standards]]
- [[Mobile Navigation]]
- [[User Journey]]

### **Cross-Device Issues**
**Focus**: [[Cross-Device Compatibility]], [[Progressive Enhancement]], [[Responsive Design]]
**Required Links**:
- [[Device Capabilities]]
- [[Screen Sizes]]
- [[Progressive Enhancement]]
- [[Responsive Patterns]]

---

## 🏛️ Issue Quality Standards

### **Required Issue Elements**
```markdown
## Issue Description
Clear description using [[Mobile-First Development]] vocabulary and user-focused language

## Steps to Reproduce
1. Specific steps with proper terminology
2. Expected behavior using [[Mobile-First]] concepts
3. Actual behavior observed

## Impact Assessment
- **[[User Experience]] Impact**: How this affects mobile user experience
- **[[Performance Impact]]**: Any mobile performance implications
- **[[Accessibility Impact]]**: Effects on users with disabilities
- **[[Cross-Device Impact]]**: Issues across different device types

## Technical Context
- **[[Platform]] Component**: Which system is affected
- **[[Performance]]**: Performance budget or optimization involvement
- **[[Touch Interface]]**: Any touch interaction implications
- **[[Progressive Enhancement]]**: Progressive enhancement considerations

## Resolution Requirements
- **[[Performance Validation]]**: Performance testing required
- **[[Cross-Device Testing]]**: Multi-device validation needed
- **[[UX Validation]]**: User experience verification required
- **[[Accessibility Testing]]**: Accessibility compliance validation needed
```

### **Mandatory Mobile-First Assessment**
For all issues, evaluate:
- **[[Performance Impact]]**: Does this affect mobile performance budget?
- **[[Touch Interface]]**: Could this impact touch interaction quality?
- **[[Accessibility]]**: Does this maintain accessibility standards?
- **[[Cross-Device]]**: Does this work consistently across devices?

---

## 🔗 Cross-Reference Integration

### **Link to Project Systems**
**Project Plan**: `[[project-plan/]]` — Connect issues to planning requirements
**Decisions**: `[[decisions/]]` — Reference relevant architectural decisions
**Bug Tracking**: `[[bug-tracking/]]` — Cross-reference with bug registry
**Agent Coordination**: `[[agent-coms/]]` — Link to coordination discussions
**Build System**: `[[BUILD/]]` — Connect to build and deployment issues

### **Issue Resolution Integration**
**Architecture Changes**: Link to `[[decisions/architecture/]]`
**Performance Updates**: Link to `[[decisions/performance/]]`
**UX Improvements**: Link to `[[project-plan/02-user-experience/]]`
**Implementation**: Link to `[[project-plan/99-implementation-ready/]]`

---

## 🚀 Issue Workflow Standards

### **Issue Creation Process**
1. **Use [[Issue Template]]**: Start with SSG portfolio template
2. **Apply Mobile Metadata**: Add ask.report-specific classification
3. **Mobile-First Vocabulary**: Use proper terminology throughout
4. **Performance Assessment**: Evaluate [[Performance Budget]] implications
5. **Touch Interface Impact**: Consider [[Touch Interface]] and [[Accessibility]] effects
6. **Quality Links**: Connect to related documentation and decisions

### **Issue Resolution Process**
1. **Root Cause Analysis**: Identify underlying [[Architecture]] or [[Implementation]] issues
2. **Mobile-First Review**: Validate any [[Performance]] or [[UX]] implications
3. **Solution Design**: Create solution respecting [[Mobile-First Development]] principles
4. **Implementation**: Use [[Agent Coordination]] for resolution execution
5. **Validation**: Test [[Cross-Device]] and [[Performance]] requirements
6. **Documentation**: Update related [[Project Plan]] and [[Decisions]]

---

## 📊 Issue Tracking Quality Standards

### **Mandatory Elements**
- **✅ [[Mobile-First Development]]**: Proper mobile terminology throughout
- **✅ [[Performance Assessment]]**: Explicit performance impact evaluation
- **✅ [[Touch Interface]]**: Touch and accessibility impact assessment
- **✅ [[User Impact]]**: Clear mobile user experience implications

### **Quality Validation Checklist**
- [ ] Used [[Issue Template]] from [[TEMPLATES_AND_GUIDES]]
- [ ] Applied mobile-first specific YAML metadata
- [ ] Used [[Mobile-First Development]] vocabulary consistently
- [ ] Assessed [[Performance Implications]] explicitly
- [ ] Considered [[Touch Interface]] requirements
- [ ] Evaluated [[Accessibility Standards]] impact
- [ ] Assessed [[Cross-Device Compatibility]]
- [ ] Linked to related [[Project Plan]] and [[Decisions]]
- [ ] Included clear [[Resolution Requirements]]

---

## 🌀 Special Issue Types

### **Critical Performance Issues**
```yaml
mobile-first-priority: Critical
performance-implications: Critical
affects-touch-interface: true
```
**Requires**: Immediate [[Performance Budget]] review and [[Architecture]] evaluation

### **Accessibility Issues**
```yaml
affects-accessibility: true
priority: high
```
**Requires**: [[Accessibility Standards]] compliance validation and [[Touch Interface]] review

### **Cross-Device Issues**
```yaml
category: cross-device
cross-device-compatibility: Required
```
**Requires**: [[Progressive Enhancement]] and [[Responsive Design]] validation across devices

### **Touch Interface Issues**
```yaml
affects-touch-interface: true
user-experience-impact: High
```
**Requires**: [[Touch Targets]] and [[Mobile UX]] validation across device types

---

## 🌊 Mobile-First Issue Examples

### **Performance Issue Example**
```markdown
# Touch Interface Performance Lag on Low-End Devices

**Category**: [[Performance Optimization]]
**Impact**: [[Touch Interface]] responsiveness below [[Performance Budget]]

## Description
[[Touch Targets]] on main navigation show 200ms+ delay on low-end Android devices,
affecting [[User Experience]] and [[Accessibility]] for users with motor impairments.

## Mobile-First Analysis
- **[[Performance Budget]]**: Exceeds 100ms touch response target
- **[[Touch Interface]]**: Impacts touch interaction quality
- **[[Accessibility]]**: Affects users requiring longer touch duration
- **[[Cross-Device]]**: Issue specific to lower-capability devices
```

### **Accessibility Issue Example**
```markdown
# Screen Reader Navigation Broken in Mobile Menu

**Category**: [[Accessibility Standards]]
**Impact**: [[Touch Interface]] not accessible to screen reader users

## Description
[[Mobile Navigation]] menu items not properly announced by screen readers,
breaking [[Accessibility Standards]] and [[User Experience]] for visually impaired users.

## Mobile-First Analysis
- **[[Accessibility Standards]]**: WCAG 2.1 AA violation
- **[[Touch Interface]]**: Touch and screen reader interaction conflict
- **[[Mobile UX]]**: Mobile-specific navigation pattern issue
- **[[Cross-Device]]**: Affects mobile screen reader usage
```

---

*This guide ensures all [[ask.report]] issues are tracked with proper [[Mobile-First Development]] context while maintaining [[SSG Portfolio]] quality standards and [[Obsidian]] knowledge graph integration.*