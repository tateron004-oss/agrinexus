# Nexus AUT7 Workflow Follow-Up Commands

Sprint AUT7 adds a server-side natural follow-up command adapter for controlled multi-step workflows.

## Objective

Nexus can now interpret short, natural workflow follow-ups after a safe workflow exists:

- next
- continue
- show me the checklist
- compare them
- use the second one
- make it simpler
- what should I do next?
- draft questions
- start over
- cancel this

The adapter maps those phrases onto AUT4 session-state commands or safe read-only responses.

## Safety Boundary

AUT7 is not a live execution layer. It does not add routes, UI handlers, provider handoff, storage, network calls, permission prompts, navigation, or backend action writes.

Every result preserves:

- `executionAuthority: false`
- `noExecutionAuthorized: true`
- `noProviderContactAuthorized: true`
- `noProviderHandoff: true`
- `noLocationPermissionRequested: true`
- `noPermissionPromptAuthorized: true`
- `noBackendActionWritePerformed: true`
- `noNavigationAuthorized: true`

## Blocked Natural Commands

Execution-like follow-ups are downgraded and blocked:

- apply for me
- send the message
- call them
- book it
- buy it
- pay for it
- dispatch someone
- use my location

Nexus may explain what can be prepared, but it must not execute, contact, send, call, schedule, buy, pay, dispatch, or request location.

## Missing Context

Natural follow-ups require an active safe workflow session. If the user says “next” or “show me the checklist” without a workflow context, Nexus responds with a safe missing-context result and asks the user to start a supported low-risk workflow first.

## QA

`scripts/nexus-aut7-workflow-follow-up-commands-qa.js` verifies:

- supported natural commands route correctly
- active workflow context is used
- missing context is handled safely
- blocked commands are downgraded
- no execution authority is produced
- no Standard User runtime wiring was added in this phase
