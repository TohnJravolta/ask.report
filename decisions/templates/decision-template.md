---
type: decision
status: "{{status}}"
category: "{{category}}"
impact: "{{impact}}"
mobile-first-priority: "{{mobile-priority}}"
tags: [decision, architecture, "{{category}}", "{{impact}}", ask-report]
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
deciders: ["{{deciders}}"]
consulted: []
informed: []
supersedes: []
superseded-by: []
project-plan-integration: "{{plan-folders}}"
aliases: []
---

# Decision: {{title}}

## Decision Status
**{{status}}** - {{date:YYYY-MM-DD}}

*Status options: proposed | under-review | accepted | implemented | deprecated | rejected*

## ask.report Context
- **Mobile-First Priority**: {{mobile-priority}} *(Critical | High | Medium | Low)*
- **User Experience Impact**: {{ux-impact}}
- **Performance Implications**: {{performance-impact}}
- **Project Plan Integration**: {{plan-folders}}

---

## Problem Statement and Context
[Describe the situation that requires a decision and how it relates to ask.report's mobile-first platform goals]

### **ask.report Specific Context**
- **Mobile User Impact**: [How this affects users on mobile devices]
- **Platform Goals**: [How this relates to ask.report's vision and objectives]
- **Current State**: [Current situation or problem that needs resolution]

## Decision Drivers
- [Mobile performance requirement that influences this decision]
- [User experience consideration that shapes the options]
- [Technical constraint specific to ask.report's platform]
- [Business requirement or goal that drives the need for this decision]

## Options Considered

### **Option 1: {{option-name}}**
[Describe the option]

**Mobile-First Analysis:**
- **Mobile Performance**: [Impact on mobile app performance]
- **Touch Interface**: [How this affects touch-based interaction]
- **Screen Adaptation**: [How this works across different screen sizes]
- **Network Impact**: [Effect on data usage and slow connections]

**Pros:**
- [Good aspects of this option for ask.report]

**Cons:**
- [Negative aspects or trade-offs]

**Implementation Effort:** [High/Medium/Low]
**Project Plan Impact:** [Which folders/tasks are affected]

### **Option 2: {{option-name}}**
[Describe the alternative option]

**Mobile-First Analysis:**
- **Mobile Performance**: [Impact on mobile app performance]
- **Touch Interface**: [How this affects touch-based interaction]
- **Screen Adaptation**: [How this works across different screen sizes]
- **Network Impact**: [Effect on data usage and slow connections]

**Pros:**
- [Good aspects of this option for ask.report]

**Cons:**
- [Negative aspects or trade-offs]

**Implementation Effort:** [High/Medium/Low]
**Project Plan Impact:** [Which folders/tasks are affected]

### **Option 3: {{option-name}}**
[Additional option if applicable]

**Mobile-First Analysis:**
- **Mobile Performance**: [Impact on mobile app performance]
- **Touch Interface**: [How this affects touch-based interaction]
- **Screen Adaptation**: [How this works across different screen sizes]
- **Network Impact**: [Effect on data usage and slow connections]

**Pros:**
- [Good aspects of this option for ask.report]

**Cons:**
- [Negative aspects or trade-offs]

**Implementation Effort:** [High/Medium/Low]
**Project Plan Impact:** [Which folders/tasks are affected]

---

## Decision Outcome

### **Chosen Option**
**Option {{chosen-number}}: {{chosen-option-name}}**

### **Decision Rationale**
[Explain why this option was selected over the alternatives, with specific focus on ask.report's mobile-first priorities]

### **Mobile-First Justification**
[Specific explanation of how this decision supports ask.report's mobile-first approach]

### **Consequences**

#### **Positive Consequences for ask.report**
- [Expected benefit for mobile users]
- [Platform improvement this enables]
- [ask.report goal this advances]

#### **Negative Consequences**
- [Accepted trade-offs or limitations]
- [Mobile performance costs]
- [User experience compromises]

#### **Neutral Consequences**
- [Changes that are neither positive nor negative]

---

## Implementation Requirements

### **Project Plan Integration**
**Affected Project Plan Folders:**
- [ ] **00-vision/**: [Vision or strategy updates needed]
- [ ] **01-infrastructure/**: [Infrastructure changes required]
- [ ] **02-ui-ux/**: [UI/UX design or implementation changes]
- [ ] **03-features/**: [Feature modifications or additions]
- [ ] **04-testing/**: [Testing strategy or implementation changes]
- [ ] **05-assets/**: [Asset creation or modification requirements]

### **Action Items**
- [ ] [Specific task needed in project-plan system]
- [ ] [Configuration or implementation change required]
- [ ] [Asset creation or update needed]
- [ ] [Documentation that needs updating]

### **Mobile-First Implementation Requirements**
- [ ] **Performance Testing**: [Mobile performance validation needed]
- [ ] **Cross-Device Testing**: [Testing across phone/tablet/desktop]
- [ ] **Accessibility Validation**: [Accessibility compliance verification]
- [ ] **Network Condition Testing**: [Testing on slow/unstable connections]

### **Success Criteria**
- [ ] [Measurable outcome that validates mobile user experience improvement]
- [ ] [Performance benchmark that must be met]
- [ ] [User experience goal that must be achieved]

### **Rollback Plan**
[How to reverse this decision if mobile performance or user experience issues arise]

---

## ask.report Integration Analysis

### **Platform Alignment**
- [ ] Aligns with [[ask.report Vision]] and mobile-first principles
- [ ] Supports [[Mobile User Experience Goals]]
- [ ] Respects [[Performance Standards]] for mobile devices
- [ ] Integrates with [[Asset Management Strategy]]

### **User Experience Validation**
- [ ] **Mobile UX**: Decision enhances mobile user experience
- [ ] **Accessibility**: Decision maintains or improves platform accessibility
- [ ] **Performance**: Decision meets mobile performance requirements
- [ ] **Cross-Platform**: Decision works consistently across devices

### **Technical Feasibility**
- [ ] **Implementation**: Can be implemented within current technical constraints
- [ ] **Performance**: Meets mobile performance requirements
- [ ] **Integration**: Integrates cleanly with existing platform architecture
- [ ] **Maintenance**: Doesn't create unsustainable maintenance burden

---

## Related Items
- Project plan category: [[{{category}}]]
- Related decisions: [[List any dependent or related decisions]]
- Issues tracking: [[Any issues this decision addresses]]
- Asset management: [[Asset implications of this decision]]

## Decision Timeline
- {{date:YYYY-MM-DD}}: Decision proposed
- {{date:YYYY-MM-DD}}: Mobile-first analysis completed
- {{date:YYYY-MM-DD}}: Stakeholder consultation completed
- {{date:YYYY-MM-DD}}: Decision accepted
-

## Long-term Review

### **Review Schedule for ask.report**
Next review: {{date:YYYY-MM-DD}}
Review frequency: [Quarterly/Semi-annually/Annually]

### **Mobile-First Monitoring Metrics**
- [Mobile performance metric to track]
- [User experience indicator to monitor]
- [Cross-device consistency measure]

### **ask.report Evolution Questions**
- Is this decision still serving ask.report's mobile-first goals?
- Have the assumed mobile performance benefits materialized?
- Are there new mobile technologies or patterns that change the landscape?
- Should this decision be evolved to better serve ask.report users?

## References
- [ask.report documentation that informed this decision]
- [Mobile-first design standards or best practices referenced]
- [Performance benchmarks or studies that guided analysis]
- [User research or feedback that influenced the decision]

---
*Decision record created for ask.report using mobile-first decision template*
*Tags: #decision #architecture #{{category}} #{{impact}} #ask-report #mobile-first*