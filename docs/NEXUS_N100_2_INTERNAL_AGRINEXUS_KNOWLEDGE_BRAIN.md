# N100-2 Internal AgriNexus Knowledge Brain

## Purpose

N100-2 adds a searchable internal knowledge brain for Nexus. It gives the assistant a maintained source for answering questions about AgriNexus/Nexus itself, app capabilities, role differences, AgriTrade, training/workforce pathways, safety policies, provider status, feature gates, supported workflows, and blocked actions.

The implementation is:

- `server/nexus-internal-knowledge-brain.js`

It is not wired into Standard User runtime in this sprint. It is callable by QA and future safe assistant layers.

## Knowledge Categories

The internal corpus covers:

- AgriNexus mission and platform capabilities
- Nexus assistant capabilities
- Standard User/Admin differences
- AgriTrade marketplace browse-only behavior
- workforce/training programs
- agriculture training resources
- Koachlearn/LMS/course catalog readiness
- app help and onboarding
- safety policies
- supported workflows
- blocked workflows
- provider status and feature flag posture

## Behavior

The brain can:

- answer questions about the app and project from internal knowledge
- return matched categories and internal citations
- combine internal knowledge with external provider answers when supplied
- explain safe next steps
- explain what Nexus can do now
- explain which actions remain blocked or gated

It must not:

- claim unsupported live integrations
- hallucinate completed actions
- contact providers
- execute calls, messages, payments, purchases, bookings, applications, location sharing, health/pharmacy actions, marketplace transactions, or emergency dispatch
- write backend or browser storage

## Required Question Coverage

QA validates:

- What can Nexus do?
- How do I use AgriTrade?
- Find training in the app.
- What programs do we offer?
- How do I become an agriculture technician?
- What is the next step for me?
- What actions can Nexus perform right now?
- What actions are blocked?

## Safety Contract

Every answer preserves:

- `noExecutionAuthorized: true`
- `noProviderContactAuthorized: true`
- `noBackendWritePerformed: true`
- `noLocationPermissionRequested: true`

The knowledge brain is read-only and non-authoritative. It can inform future planning and answers, but it cannot unlock execution.

## QA

Focused QA:

- `scripts/nexus-n100-2-internal-knowledge-brain-qa.js`

The QA verifies the corpus, required prompts, source/citation metadata, provider-combine behavior, package alias, safe-suite wiring, and absence from Standard User runtime loading.

