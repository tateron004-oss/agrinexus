# NEXUS-AUTONOMY-1 AUT6 Standard User Workflow Card

AUT6 exposes controlled multi-step workflow previews inside the existing Standard User assistant runtime preview surface.

## Flag Boundary

Default flags off:

- no workflow card
- no provider calls
- no visible behavior change
- no unsafe controls

Flags on through the existing assistant runtime preview gate:

- supported low-risk goals may include a `nexus.aut6.standardUserWorkflowCard.v1` object
- the card renders only after the existing `/api/nexus/assistant-runtime-preview` response passes safety checks
- high-risk prompts do not receive a workflow card

## Card Content

The card shows:

- goal
- workflow type
- current step
- progress steps
- safe artifacts
- safe next steps
- read-only source details
- blocked actions note
- read-only safety note

## Controls

Allowed controls are shown as disabled review controls in AUT6:

- continue
- next step
- back
- restart
- cancel
- make checklist
- compare
- draft questions
- explain

Blocked controls remain listed as blocked, not rendered as executable controls:

- call
- message
- apply
- buy
- pay
- book
- dispatch
- send location
- submit

## Safety Markers

The workflow card preserves:

- `data-read-only="true"`
- `data-execution-authority="false"`
- `data-provider-handoff="false"`

AUT6 does not add backend action writes, provider contact, permission prompts, auto-navigation, calls, messages, purchases, booking, dispatch, submissions, location sharing, camera access, medical/pharmacy execution, or marketplace transactions.

## QA

`scripts/nexus-aut6-standard-user-workflow-card-qa.js` verifies flag-off absence, flag-on low-risk workflow card creation, progress/step and artifact contract fields, disabled safe controls, blocked unsafe controls, read-only attributes, no backend write, no provider contact, no permission prompt, no auto-navigation, package alias wiring, and local-safe suite wiring.
