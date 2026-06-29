# NEXUS-AUTONOMY-1 Workflow Goal Classifier

AUT1 adds the first controlled multi-step workflow primitive for Nexus: a deterministic goal classifier. It is intentionally inert and is not wired into the Standard User runtime, backend routes, provider dispatch, browser permissions, storage, or any execution surface.

## Scope

The classifier maps user goals into preview-only workflow categories so later AUT phases can build plans, steps, session state, artifacts, and a Standard User workflow card without guessing at execution boundaries.

Supported workflow types:

- `job_search_workflow`
- `agriculture_training_workflow`
- `crop_issue_guidance_workflow`
- `workforce_program_comparison_workflow`
- `weather_planning_workflow`
- `agriculture_news_awareness_workflow`
- `media_training_discovery_workflow`
- `marketplace_browse_workflow`
- `shipment_status_workflow`
- `general_assistant_plan_workflow`

Blocked workflow types:

- `call_provider`
- `send_message`
- `apply_submit`
- `buy_pay_purchase`
- `book_schedule`
- `dispatch_help`
- `send_location`
- `emergency_execution`
- `medical_pharmacy_execution`
- `account_login_or_creation`

## Output Contract

Every classification returns:

- `workflowType`
- `userGoal`
- `riskTier`
- `allowed`
- `blockedReason`
- `requiresProvider`
- `requiresUserInput`
- `requiresConfirmation`
- `executionProhibited`
- `safeEntryPoint`
- `blockedActions`

`executionProhibited` is always `true` in AUT1. Allowed workflow types are safe preview entry points only. Blocked workflow types remain blocked and require a future approved gate before any real-world action could be considered.

## Runtime Boundary

AUT1 does not:

- import into `public/app.js`
- load from `public/index.html`
- wire into `server.js`
- create UI
- navigate
- call providers
- send messages or calls
- buy, pay, book, submit, dispatch, or contact anyone
- request geolocation, camera, or microphone permissions
- write storage or backend state

## QA

`scripts/nexus-aut1-workflow-goal-classifier-qa.js` verifies taxonomy coverage, required output fields, supported and blocked prompt behavior, non-execution invariants, package alias wiring, and safe-suite wiring.
