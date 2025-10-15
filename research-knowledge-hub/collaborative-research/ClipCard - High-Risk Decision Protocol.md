---
# ENTROGENIC PAPER STANDARD FIELDS
title: "✦ ClipCard - High-Risk Decision Protocol"
subtitle: "A Triggered, Blame-Safe Add-On for High-Risk Decisions Across Ops Patterns"
author: "Tohn Burray Travolta (Entrogenic Research Collective)"
collaboration: "Based on operational safety research (Bennett, Buhrman, Tromp, Vitányi) and synthesized with large-language systems under Cyclic-6 and Kybernōsis protocols"
series: "Entrogenic Papers | Adaptive Systems Kollektive | ask.report Research Institute"
version: "v1.0 — October 2025"
license: "CC BY-SA 4.0"
repository: "github.com/entrogenics/ask.report"
doi: "TBD (Zenodo upload pending)"
manifest-type: "entrogenic-knowledge-base-article"

# RESEARCH HUB CATEGORIZATION
type: operational-protocol
category: collaborative-research
status: active
tags: [clipcard, decision-protocol, risk-assessment, blame-safe, high-risk, two-key-approval, authority-window, kill-criteria, recheck-steward, kanban, sbar, adr, ooda, stepped-wedge-trial, operational-safety]
created: 2025-10-14
updated: 2025-10-15
public: true
web-priority: high
aliases: ["ClipCard Protocol", "High-Risk Decision Protocol", "Risk & Recheck Protocol"]
description: "Lightweight, triggered intervention for high-risk operational decisions. Attaches to Kanban, SBAR, ADR, or OODA workflows when Impact × Uncertainty ≥ 18, mandating structured hazard analysis, recheck plans, kill criteria, and blame-safe learning."
keywords: [clipcard, risk management, triggered intervention, operational safety, blame-safe culture, two-person rule, authority window, kill switch, recheck protocol, near-miss capture, DevOps safety, clinical safety, stepped-wedge trial]

# RESEARCH INSTITUTE INTEGRATION
research-area: [collaborative-science]
audience: [practitioners, researchers]
prerequisite-knowledge: [["NEXUS Codex - Collective Intelligence"]]
related-documents: [["NEXUS Codex - Collective Intelligence"], ["Synthetic Co-Authorship Protocols"]]
parent-framework: [["Collaborative Research Division"]]

# SOURCE TRACKING
source-documents: ["repo/CORE/Entrogenica/adaptive_systems/Clipcard/ClipCard (Risk & Recheck).pdf"]
original-version: "N/A"
transformation-notes: "Content extracted and synthesized from comprehensive 39-page research paper covering ClipCard intervention, trigger rules, integration patterns, evaluation methodology, and blame-safe culture principles."
---

## Research Institute Context

**Division**: Collaborative Research
**Research Area**: Collaborative Science
**Purpose**: This document outlines the ClipCard protocol, a specialized methodology for navigating high-risk, high-stakes decisions within a blame-safe environment.
**Integration**: This protocol is a key tool for the [[NEXUS Codex - Collective Intelligence|NEXUS collective intelligence framework]], providing a formal process for choices that require a higher level of scrutiny and accountability.

**Navigation**:
- ← [[Synthetic Co-Authorship Protocols]]
- ↑ [[Collaborative Research Division]]
- ⌂ [[🏠 Research Hub Home]]

---

## Abstract

High-risk operational decisions—whether in software deployments, clinical handoffs, or policy actions—often bypass thorough scrutiny due to time pressure or complacency. Traditional safety checks (e.g., static checklists) can suffer from poor compliance (~54% on critical steps) and create a false sense of security.

**ClipCard** is a lightweight intervention triggered **only when risk is high** to bolster decision rigor without burdening routine workflow. A ClipCard is a one-page add-on attached to an existing task when **Impact × Uncertainty ≥ 18** (on 1–5 scales) or when a safety/legal/irreversible red flag is present.

The card mandates structured fields:
- **Hazard**: "If X then Y fails [in context Z]"
- **Recheck** plan (date or conditional "jump")
- Named **Recheck Steward** responsible for follow-up
- **Authority Window** limiting initial scope (e.g., rollout ≤10%)
- **Two-Key approval or TTL** for high-impact actions
- Explicit **Kill Criteria** (trigger threshold + abort action)
- **Evidence Links** (snapshotted references)

**Evaluation**: Stepped-wedge cluster trial and time-series analysis across domains (DevOps, clinical operations, Trust & Safety), measuring false approval rate, on-time rechecks, near-miss capture, and cycle time impact.

**Anticipated Findings**: ClipCard will reduce costly reversions/incidents while ensuring ≥80% of scheduled rechecks occur on time and catching more near-misses, all without materially slowing low-risk throughput.

**Conclusion**: ClipCard offers a falsifiable, cross-domain safety mechanism that integrates into existing processes to improve high-risk decision outcomes in a blameless, systematic fashion.

---

## Introduction: The Memory-Time-Risk Tradeoff

High-risk decisions in operational settings too often rely on ad-hoc judgment or incomplete checks. From software **Site Reliability Engineering (SRE)** to **clinical care**, teams face a dilemma: strict process safeguards improve safety, but applied universally they bog down work and get circumvented.

### The Problem: Why Obvious Safety Protocols Fail

**WHO surgical safety checklist**: Saved lives in trials, yet real-world compliance is only ~54% on critical steps. Researchers ask: **if checklists are skipped nearly half the time, do they truly make us safer, or might patchy use create a false sense of security?**

Two dynamic forces underlie this problem:

1. **Normalization of deviance**: If parts of a checklist are seen as low-value, people gradually omit them without immediate consequence, eroding the safety margin
2. **Efficiency–Thoroughness Trade-off (ETTO)**: Teams "continually adjust between efficiency and thoroughness," and systems inherently "strive to be as efficient as possible"

**The Risk**: A flawed safety routine plus omission of other checks (assuming "the checklist covers it") creates **hollow safeguards** — the organization believes it is safe when reality differs.

### The ClipCard Solution: Triggered Micro-Intervention

ClipCard delivers thorough scrutiny **only when and where needed**. Rather than apply a heavy checklist to every task, ClipCard is a **triggered, micro-scale intervention** attached when risk warrants extra caution.

**Design principles addressing why obvious checks fail**:

- **Triggering on quantified risk** (Impact × Uncertainty ≥ 18): Focuses on riskiest 5–10% of cases, avoiding fatigue from overuse
- **"Clipping on" to existing workflows**: Preserves familiar process for low-risk work, not inviting daily workarounds
- **Blame-safe, learning-oriented culture**: Emphasizes capturing hazards and mitigations without personal fault, aligning with Just Culture principles

**Applications**:
1. **Deep learning**: Activation checkpointing for training large neural networks
2. **Zero-knowledge proofs**: Merkle-tree commitments with space constraints
3. **Clinical operations**: Patient transfers, critical procedures, high-risk medications
4. **Software reliability**: Production deployments, infrastructure changes, architecture decisions
5. **Trust & Safety**: Content moderation, policy rollouts, high-profile user actions

---

## ClipCard Intervention Specification

### The Six Mandatory Fields

Each ClipCard is a structured mini-document (physical card or digital form) with required fields capturing the risk mitigation plan:

#### 1. Hazard
**Format**: "If X, then Y fails [in Z]"

A concise, specific statement forcing clarity. Not merely a risk rating but a narrative of how things could go wrong.

**Example**: "If the new database deployment script fails on step 4, then customer data may become corrupted in the accounts table."

**Effective hazards are**:
- Concrete and testable (avoid vague language)
- Identify triggering condition (X)
- State failure outcome (Y)
- Optionally specify scope (Z)

#### 2. Recheck/Jumps
**Two forms** (often both):

- **Dated recheck**: "Recheck results on 2025-11-01 by 17:00"
- **Conditional jump**: "If error monitoring alert ALERT_DB_CORRUPTION fires, do immediate recheck"

The team commits to **when** and **under what conditions** they will revisit to verify everything is as expected.

#### 3. Recheck Steward
**Named person (or role)** responsible for carrying out the recheck and coordinating any further action.

- Not necessarily the decision-maker
- Could be separate reliability engineer, team lead, or on-call individual
- **Encourage listing a backup steward**
- Establishes clear ownership for follow-up

#### 4. Authority Window
**Predefined limits** on authority or scope before additional review is needed:

- **Scope limit**: Affect ≤10% of users, process ≤100 records, run in sandbox first
- **Time window**: Change automatically reverts or pauses after 2 hours unless extended

**Two purposes**:
1. Reduces potential blast radius (if something goes wrong, impact is constrained)
2. Creates natural pause point for recheck (e.g., if we set 2-hour window, recheck should happen by then to decide on full rollout)

**Implementation**: Technical means (feature flag auto-disable, temporary access key that expires) or procedural means (require second check-in meeting before going from pilot to full scale).

#### 5. Two-Key/TTL for High-Impact
**If action is high-impact** (by magnitude or irreversibility):

- **Two-key approval**: Two independent decision-makers must approve (both engineering manager AND SRE lead must turn their "keys")
- **TTL (Time-To-Live)**: "Both approvals required and expire after 24 hours"

**Purpose**:
- Prevents single-point human error (classic risk control)
- Ensures fresh judgment if execution is delayed
- If extremely urgent (emergency fix), TTL alone might auto-revert unless continued approval is given

#### 6. Kill Criteria
**Predefined conditions** under which operation will be aborted or rolled back, along with specific kill action:

**Format**: If-then for emergency termination

**Example**: "Kill Criterion: If more than 1% of transactions error out OR any data corruption is detected in monitoring, Action: immediately rollback deployment to version v1.2 within 15 minutes"

**Requirements**:
- **Observable and measurable** triggers (thresholds, specific alert signals)
- Not subjective feelings
- Paired action must be executable quickly (rollback, code red, policy revert)

**Plus**: Evidence Links section for supporting data (test results, simulation outputs, past incident reports) in stable, snapshotted form for auditability.

---

## Trigger Rule: When ClipCard Is Required

### Default Trigger
**Impact × Uncertainty ≥ 18** (on 1–5 scales for each, where 5 is highest)

This risk scoring captures roughly the top 10–15% of risk scenarios — requires at least one factor near max and the other mid-high (e.g., 5×4, or 4×5).

**Examples**:
- Very high impact (5) × medium uncertainty (4) = 20 → **triggers**
- Medium impact (3) × high uncertainty (5) = 15 → **below threshold**
- High impact (4) × high uncertainty (5) = 20 → **triggers**

### Automatic Red Flag Triggers
Override numeric score for certain categories — ClipCard **mandated regardless of score**:

- **Safety** consequences
- **Legal** exposure
- **Regulatory** implications
- **Public trust** impact
- **Irreversible** actions

**Example**: Low-impact change touching patient privacy might be flagged for legal/public risk → gets ClipCard by policy.

**Threshold can be tuned** per organization (some may lower to 15 or raise to 20 depending on risk appetite and how frequently they want ClipCards).

---

## Contextual Integration: Clipping onto Existing Workflows

ClipCard is not a standalone approval gate but an **overlay to existing operational patterns**.

### Integration Examples

#### 1. Kanban / Software Task Management
**Placement**: When ticket is about to move from "In Review" or "Ready for Deploy" to "Done"

**Implementation**:
- If custom field "RiskScore" ≥ 18, then ClipCard fields become required
- Jira workflow condition: If high-risk labeled, ClipCard subtask must exist with all required fields
- Cannot close ticket unless "Recheck Due Date" and "Steward" fields are set

**ClipCard content**: Lives as sub-task or attached form

#### 2. SBAR (Clinical Handoff)
**Placement**: Added section after Recommendation

**Format**: SBAR+R (Risk Recheck)
- Situation, Background, Assessment, Recommendation
- **+ Risk Recheck (ClipCard)** for high-stakes cases

**Example**: Complex patient transfer with uncertain diagnosis → ClipCard outlines what to watch for (hazard), who will follow up (steward), threshold to call rapid response (kill criteria)

#### 3. Architecture Decision Records (ADR)
**Placement**: Section titled "Risk & Recheck (ClipCard)" within ADR if decision meets risk trigger

**Content**: Embedded in permanent decision log
- Hazard: "If our assumption about scaling is wrong, system could fail under load"
- Steward: "SRE team will re-test 1 month after launch"
- Kill criteria: "If CPU goes above 80% average in any week, roll back feature toggle"

**Approval**: Architecture council requires high-risk ADRs have completed ClipCard section before approval

#### 4. OODA Loop (Observe–Orient–Decide–Act)
**Placement**: Formal check between **Decide** and **Act**

**Fast OODA cycles** (emergency management, military decisions): When OODA cycle involves high-impact action, ClipCard triggered to slow down just enough to double-check key risks and exit criteria.

**Example**: Cyber incident → Decide to disconnect server from network

**ClipCard** (could be whiteboard):
- Hazard: "If wrong server, we cut off hospital's system"
- Steward: Incident commander
- Recheck: In 10 minutes if attack stops
- Kill criteria: "If any critical service fails after disconnect, plug back in within 30s"

---

## Blame-Safe Culture and Just Culture Principles

**ClipCard is explicitly designed to be blame-safe.** The focus is on improving the system, not punishing individuals.

### Core Principles

1. **Blame-Free Hazard Recording**: Identifying a hazard is a positive action for team safety, not admission of incompetence. No punitive action for hazards that materialize or were missed.

2. **Recheck Steward as Facilitator**: Steward duty is to coordinate rechecks and escalations, **not to bear personal responsibility** for outcome. Accountability remains collective at team level.

3. **Stop Work Authority**: If kill criterion triggers, team **empowered to stop the line or roll back immediately** without fear of repercussion. Management backs decisions made under pre-defined kill criteria.

4. **Team-Level Incident Review**: Incidents/near-misses reviewed in **blameless post-mortem process**. Focus on process, context, and system factors — not "who screwed up?"

5. **Protected Documentation**: ClipCard contents treated like incident post-mortems (privileged, not used for discipline). Filling a ClipCard honestly is encouraged and protected.

### Policy Excerpt

"No punitive action will be taken for hazards that are later realized, nor for hazards that in hindsight were missed on a ClipCard — these are learning opportunities. The organization believes ClipCard documents are protected under the same rules as incident post-mortems."

---

## Evaluation and Expected Outcomes

### Core Hypotheses

**H1 (False Approvals Reduction)**: Implementing ClipCard for high-risk decisions will **reduce the rate of false approvals** — decisions that proceed but later result in costly incident or reversion.

**H2 (Recheck Compliance)**: ClipCard will ensure follow-through on planned reviews, achieving **at least 80% on-time rechecks** for flagged items.

**H3 (Near-Miss Capture and Efficiency)**: Use of ClipCard will **increase capture of near-misses** by prompting hazard identification and kill criteria. Target escalation/stop rate of **~10–25%** of ClipCard-tagged actions.

**H4 (Minimal Impact on Low-Risk Flow)**: ClipCard will not materially slow down work on decisions that remain low-risk. Cycle time for routine, non-escalated tasks will remain approximately the same.

### Study Design

**Primary Approach**: **Stepped-Wedge Cluster Randomized Trial**

- All participating clusters (teams/departments) eventually receive intervention
- Order and timing of rollout are randomized
- Start with baseline (no ClipCard), then at intervals (every 2 weeks or 1 month), random subset crosses over
- Each cluster contributes both control data (before) and intervention data (after) at different times

**Alternative Approaches**:
- Alternating interventions (AB/BA crossover by time)
- Interrupted Time Series (ITS) if randomization infeasible

### Outcome Metrics

1. **False Approval Rate**: % of high-risk decisions resulting in significant incident or rollback
2. **On-Time Rechecks**: % of ClipCards where planned recheck completed by scheduled time
3. **Near-Miss Capture**: Number of near-misses caught per 100 high-risk decisions
4. **Median Fill Time**: Minutes to complete ClipCard (target ≤6 minutes)
5. **Escalation Rate**: % of ClipCards requiring escalation (target 10–25%)
6. **Low-Risk Cycle Time**: Average duration of non-ClipCard tasks (should remain steady)

### Evaluation Contexts

- **Software Reliability / DevOps**: Kanban boards, ADRs, production changes
- **Clinical Operations / Healthcare**: SBAR handoffs, critical procedures
- **Trust & Safety / Policy**: Content moderation, policy rollouts
- **(Optional) Security or Civic Domain**: Incident response, community-impact decisions

---

## Implementation Notes

### Minimal Gates and Automation

**Jira**: Workflow condition — if Risk=High, require filled ClipCard subtask before closing

**CI/CD Pipeline**: Script checks for ClipCard artifact with required fields; manual approval stage requires 2 approvers for production

**SBAR Process**: Additional section on form with mandatory fields if HighRisk box checked

**Alert Integration**: For each ClipCard kill criterion, set up corresponding alert in monitoring (Datadog, CloudWatch) configured to page steward

**Calendar Wiring**: Filling "Recheck Date/Time" automatically sends calendar invite to steward

**Evidence Snapshotting**: Version control, attachment features, or git commit hashes for code states

### Training and Onboarding

**1-hour workshop**:
- Why ClipCard exists (cases where "lack of recheck" caused failure)
- Walk through sample ClipCard
- Role-play or simulation with mock scenario
- How to write good Hazard and Kill Criteria (push for specificity)

**One-Page Cap Discipline**: Keep ClipCards to single page / few minutes to fill. Avoid process creep.
