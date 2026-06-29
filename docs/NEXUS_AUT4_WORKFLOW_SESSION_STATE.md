# NEXUS-AUTONOMY-1 AUT4 Workflow Session State

AUT4 adds session-only workflow state helpers so Nexus can eventually continue a controlled workflow without treating memory as authority. This module is not wired into Standard User runtime, backend routes, storage, provider dispatch, permissions, or UI.

## State Fields

- `activeWorkflowId`
- `workflowType`
- `userGoal`
- `currentStepIndex`
- `completedSteps`
- `pendingSafeArtifacts`
- `lastProviderResultsSummary`
- `selectedItem`
- `safeNextSteps`
- `blockedActions`
- `createdAt`
- `updatedAt`
- `expiresAt`
- `sessionOnly`

The state also carries `executionAuthority: false` and `noExecutionAuthorized: true`.

## Supported Commands

- `continue`
- `next step`
- `go back`
- `restart`
- `cancel`
- `use the second one`
- `compare the top two`
- `turn that into a checklist`
- `draft questions`
- `what should I do next?`

## Blocked Commands

- `apply now`
- `send it`
- `call them`
- `buy it`
- `book it`
- `dispatch`
- `share my location`

Blocked commands keep the workflow in preview-only mode and do not execute, contact, submit, purchase, book, dispatch, or share location.

## Safety Boundary

AUT4 does not persist state. It does not use `localStorage`, `sessionStorage`, files, databases, backend writes, provider APIs, browser permissions, or Standard User UI hooks.

## QA

`scripts/nexus-aut4-workflow-session-state-qa.js` verifies state creation, continuation, selected item references, restart, cancel, missing/expired context handling, blocked high-risk continuation commands, no sensitive persistence, package alias wiring, safe-suite wiring, and absence of runtime hooks.
