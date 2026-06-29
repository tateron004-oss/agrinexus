# Nexus N100-5 Workflow Approval Checkpoint Runner

Sprint N100-5 adds a controlled runner for N100-4 deep workflows. The runner may progress safe read-only workflow steps automatically, but it stops at approval checkpoints and never authorizes real-world execution.

This phase remains server-side and QA-only. It is not wired into the Standard User runtime, browser UI, provider dispatch, backend writes, or live connectors.

## Allowed Automatic Workflow Steps

Contract phrase: Allowed automatic workflow steps.

The runner may complete these read-only step types:

- provider/source lookup
- summarize result
- compare options
- filter options
- create checklist
- create draft text
- create source summary
- ask clarification
- prepare next-step package

In this implementation those behaviors are represented by controlled step types from the deep workflow engine:

- `provider_lookup`
- `source_lookup`
- `branch`
- `compare_and_recommend`
- `prepare_final_package`
- `complete`

Every automatic step is logged as read-only and includes:

- `canExecute: false`
- `executionAuthority: "none"`
- `noProviderContactAuthorized: true`
- `noBackendWritePerformed: true`

## Approval Checkpoint Required

Contract phrase: Approval checkpoint required.

Nexus must stop for approval before:

- saving persistent data
- exporting a file
- creating a local task or reminder
- opening an internal app section
- using a saved preference
- any connector/API write
- calendar action
- email draft creation
- provider handoff preparation

Approval in N100-5 is review-only. It can allow the preview workflow to continue, but it does not authorize a real-world action. A future final execution gate is still required.

## Blocked Without Future High-Risk Gate

Contract phrase: Blocked without future high-risk gate.

These remain blocked:

- payments
- purchases
- external booking
- application submission
- emergency dispatch
- medical/pharmacy execution

The runner can produce a blocked record for these actions, but it cannot execute them.

## No Hidden Execution

Contract phrase: no hidden execution.

The runner guarantees:

- no hidden execution
- no provider handoff
- no calls/messages
- no payment/purchase
- no booking/submission
- no emergency dispatch
- no medical/pharmacy execution
- no location permission prompt
- no backend write

## Runtime Boundary

N100-5 is not imported by:

- `public/index.html`
- `public/app.js`
- `server.js`

There is no Standard User behavior change in this phase.

## QA Coverage

Focused QA verifies:

- the runner module, doc, and QA file exist
- allowed automatic steps are enumerated
- approval-required actions are enumerated
- high-risk blocked actions are enumerated
- workflow can progress across read-only steps
- workflow stops at approval checkpoint
- user can approve review-only continuation or cancel
- high-risk action remains blocked
- N100-4 deep workflow safety remains intact
- no hidden execution, provider handoff, storage, navigation, permission, or backend write APIs are introduced

Package alias:

```bash
npm run qa:nexus-n100-5-workflow-approval-checkpoint-runner
```

The QA is wired into the local-safe Nexus Workforce suite.
