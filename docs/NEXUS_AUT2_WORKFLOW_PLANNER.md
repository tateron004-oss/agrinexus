# NEXUS-AUTONOMY-1 AUT2 Multi-Step Workflow Planner

AUT2 turns AUT1 workflow classifications into safe, read-only, multi-step workflow plans. The planner is a standalone contract module and is not wired into `public/app.js`, `public/index.html`, `server.js`, provider dispatch, storage, browser permissions, or Standard User runtime behavior.

## Planner Output

Every plan includes:

- `workflowId`
- `workflowType`
- `userGoal`
- `status`
- `steps`
- `currentStepIndex`
- `providerQueries`
- `artifactsToPrepare`
- `safeUserActions`
- `blockedActions`
- `nextBestStep`
- `confidence`
- `noExecutionAuthorized`
- `noProviderContactAuthorized`
- `noLocationPermissionRequested`
- `noBackendActionWritePerformed`

`providerQueries` are read-only intent strings for later source/provider lookup phases. They do not execute in AUT2.

## Supported Plans

AUT2 provides safe plan templates for:

- job search
- agriculture training
- crop issue guidance
- workforce program comparison
- weather planning
- agriculture news awareness
- media training discovery
- marketplace browse/info
- shipment status with explicit reference text
- general assistant planning

## Safety Boundary

Plans may prepare checklists, comparison tables, source summaries, training plans, manual provider questions, draft text for user copy, crop observation checklists, marketplace browse comparisons, and shipment summaries.

Plans must not:

- apply, submit, or send forms
- call, message, or contact providers
- buy, sell, pay, checkout, or create orders
- book or schedule
- dispatch help
- request or share location
- request camera or microphone permissions
- create accounts or log in
- execute medical, pharmacy, telehealth, or emergency actions
- write backend or storage state

## QA

`scripts/nexus-aut2-workflow-planner-qa.js` verifies job, agriculture training, crop issue, marketplace browse, shipment, missing-reference, and blocked workflows. It also proves the planner remains unwired to Standard User runtime and contains no network, storage, geolocation, navigation, provider handoff, or execution hooks.
