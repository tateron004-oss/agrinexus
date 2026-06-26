# Nexus Communications Standard User Validation Plan

Phase: 51E - Communications Standard User Validation Plan
Status: validation plan and deterministic QA only
Related roadmap row: `| Phase 51 | Communications send after approval | Enable messages/calls through providers | comm adapter | future | high | WhatsApp/SMS/email/native provider | explicit approval/audit | comm QA | no first-turn sending |`

## Scope Decision

Phase 51E completes the safe Phase 51 chain by documenting how the Standard User build must be validated before any future communications execution work. It does not enable provider execution or change runtime behavior.

This phase does not activate:

- live messages
- live calls
- WhatsApp, Telegram, SMS, email, native phone, or browser phone execution
- provider APIs
- provider handoff opening
- native bridge communication
- background communication
- storage or network side effects
- backend behavior changes
- Standard User communication execution

## Prior Phase 51 Chain

The safe Phase 51 chain now includes:

- Phase 50A: Communications Provider Execution Readiness Gate
- Phase 51A: Communications Prepared Action Preview Contract
- Phase 51B: Communications No-Execution Regression Contract
- Phase 51C: Communications Approval/Audit Handoff Contract
- Phase 51D: Communications Provider Availability Fallback Contract
- Phase 51E: Communications Standard User Validation Plan

Together these phases complete the safe inert form of the Phase 51 roadmap item while keeping provider execution disabled.

## Standard User Validation Prompts

Manual and future automated validation should cover:

- `Call John`
- `Call my doctor`
- `Call Maria on WhatsApp`
- `Call Maria on Telegram`
- `Text John`
- `Email John`
- `Send WhatsApp to buyer`
- `Message the seller`
- `Call workforce support`
- `Call my emergency contact`
- `okay`
- `yes`
- `confirm`
- `do it`

## Expected Standard User Behavior

For raw communications prompts, Nexus may:

- clarify the recipient;
- ask for missing contact details;
- explain that a provider connection is required;
- prepare a non-executing review summary;
- require explicit approval;
- explain that provider availability is not yet active;
- preserve cancellation.

Nexus must not:

- place a call;
- send a message;
- open WhatsApp;
- open Telegram;
- open phone, SMS, or email;
- open arbitrary provider URLs;
- contact a buyer, seller, provider, clinic, pharmacy, transport partner, emergency contact, or workforce support organization;
- execute from a vague confirmation;
- execute from an orphan confirmation;
- continue in the background;
- hide the provider handoff;
- claim the action was completed.

## High-Risk Domain Validation

The Standard User validation path must include restricted examples for:

- healthcare
- pharmacy
- emergency
- payments
- marketplace transactions
- transportation dispatch
- minors/family support

Expected result: Nexus explains the boundary, requires verified provider readiness, requires approval and audit, or blocks safely. It must not perform dispatch, payment, refill, scheduling, medical-record, marketplace transaction, or external communication behavior.

## Browser Validation Checklist

When browser validation is performed in a later phase:

1. Start the standard app with `node server.js`.
2. Open `http://127.0.0.1:4182/`.
3. Choose `Start as User`.
4. Enter the Standard User validation prompts.
5. Confirm no browser provider opens.
6. Confirm no native provider opens.
7. Confirm no permission prompt appears unless the existing app intentionally asks for a non-communications permission.
8. Confirm no hidden/debug metadata becomes visible.
9. Confirm no background communication continues after the prompt.
10. Confirm the browser console has no new communications execution errors.

## QA Expectations

The deterministic QA lives in:

- `scripts/nexus-communications-standard-user-validation-plan-qa.js`

The package alias is:

- `qa:nexus-communications-standard-user-validation-plan`

The QA verifies:

- Phase 50A through 51D artifacts remain present;
- the Standard User prompt matrix is documented;
- expected safe behaviors are documented;
- prohibited communications execution behaviors are documented;
- high-risk domain validation is documented;
- browser validation checklist is present;
- package alias and local-safe suite wiring are present;
- no runtime hooks, network, storage, provider, native, permission, navigation, call, message, or execution behavior is introduced.

## Phase 51 Safe Completion Decision

The Phase 51 roadmap item is completed only in its safe inert form. Nexus now has readiness, preview, no-execution regression, approval/audit, provider availability fallback, and Standard User validation artifacts for communications provider execution.

Live communications execution remains disabled until a later approved implementation satisfies the complete readiness gate, provider integration, user approval, consent, audit, and restricted-domain requirements.
