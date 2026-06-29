# NEXUS-AUTONOMY-1 AUT3 Workflow Step Runner

AUT3 adds a controlled step runner for safe workflow plan steps. It executes only local, deterministic, preparation-focused step logic. It does not call providers, write backend state, navigate, request permissions, or execute real-world actions.

## Allowed Step Execution

- provider/source lookup intent handling
- result normalization
- summarization
- comparison
- checklist generation
- draft text generation
- safe next-step suggestion
- source review

In AUT3, provider/source lookup is represented as read-only local result metadata. Real provider/source calls remain in existing source-backed lanes and future controlled integration phases.

## Blocked Step Execution

- call
- message
- submit
- apply
- buy
- pay
- book
- dispatch
- send location
- account login/create

Blocked steps return a blocked result and never create a provider handoff, pending action, permission request, backend write, or navigation.

## Step Result Contract

Every step result includes:

- `stepId`
- `stepType`
- `status`
- `providerStatus`
- `resultSummary`
- `citations`
- `artifacts`
- `blockedActions`
- `safeNextSteps`
- `noExecutionAuthorized`

Provider unavailable and provider error states return `safe_fallback` results. No unsafe retry loop or execution fallback is allowed.

## Runtime Boundary

AUT3 is not wired into `public/app.js`, `public/index.html`, or `server.js`. It creates no Standard User visible behavior.

## QA

`scripts/nexus-aut3-workflow-step-runner-qa.js` verifies safe provider/source lookup metadata, comparison, checklist, draft generation, blocked action handling, provider unavailable fallback, provider error fallback, package alias wiring, safe-suite wiring, and absence of runtime hooks.
