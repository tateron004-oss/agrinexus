# Nexus N100-4 Deep Multi-Step Workflow Engine

Sprint N100-4 upgrades Nexus workflow planning from simple step lists into controlled deep workflows. This phase is server-side and QA-only. It does not wire the engine into the Standard User runtime, browser UI, provider execution, backend writes, or any live connector.

## What Was Added

The new deep workflow engine defines reusable workflow templates with:

- multi-provider workflows
- branching
- dependency tracking
- wait-for-user-answer steps
- compare-and-recommend steps
- prepare-final-package steps
- progress timelines
- resume metadata only when the user allows resume
- approval checkpoints
- cancel, restart, recover, and safe retry after provider failure

The engine is implemented in `server/nexus-n100-deep-workflow-engine.js` and tested by `scripts/nexus-n100-4-deep-workflow-engine-qa.js`.

## Supported Templates

N100-4 includes controlled templates for these user goals:

- "Help me get a farm job."
- "Help me become an agriculture technician."
- "Help me prepare for agriculture training."
- "Help me solve this crop issue."
- "Help me start a small farm plan."
- "Help me compare training programs."
- "Help me plan around weather."
- "Help me find agriculture resources near me using typed location."
- "Help me browse AgriTrade safely."

Each template uses at least two read-only providers or sources and includes a user-answer step, branch step, compare-and-recommend step, final-package step, and approval checkpoint.

## Safety Posture

Every workflow state includes:

- `canExecute: false`
- `executionAuthority: "none"`
- `noExecutionAuthorized: true`
- `noProviderContactAuthorized: true`
- `noProviderHandoffAuthorized: true`
- `noLocationPermissionRequested: true`
- `noBackendWritePerformed: true`
- `noAutoRetry: true`
- `noAutoOpen: true`
- `noDispatchAuthorized: true`

Resume support is metadata-only. If the user does not allow resume, no resume token is created. If the user allows resume, the token is an inert non-persistent identifier and does not imply storage or execution.

## Approval Checkpoints

Approval checkpoints are review gates, not execution gates. They let the workflow stop and explain what would require a future final execution gate. Reviewing a checkpoint may allow the preview workflow to continue, but it never authorizes a real-world action.

Still blocked:

- application submission
- call/message
- provider contact
- payment/purchase
- booking
- dispatch
- send location
- medical or pharmacy execution

## Provider Failure Recovery

Read-only provider failures produce safe fallback state. Nexus records a safe recovery event and exposes user-initiated retry context only. It does not retry in the background, contact providers, escalate to execution, or silently switch to another live action path.

## Runtime Boundary

N100-4 is not imported by:

- `public/index.html`
- `public/app.js`
- `server.js`

There is no Standard User behavior change in this phase. No visible controls, routing, provider handoff, storage, network call, location prompt, camera access, marketplace transaction, health action, payment, booking, dispatch, call, or message behavior is added.

## QA Coverage

The focused QA verifies:

- the module, doc, and QA files exist
- templates cover the required deep workflow features
- prompt-to-template mapping works
- workflows progress across dependency-tracked steps
- workflows stop at approval checkpoints
- reviewed checkpoints remain non-executing
- final packages remain preview-only
- provider failure creates safe fallback and no auto-retry
- cancel, restart, and recover remain safe
- resume remains user-allowed and non-persistent
- N100-3 memory can hold workflow context without becoming authoritative
- blocked actions remain enumerated
- Standard User runtime remains unwired

Package alias:

```bash
npm run qa:nexus-n100-4-deep-workflow-engine
```

The QA is also wired into the local-safe Nexus Workforce suite.
