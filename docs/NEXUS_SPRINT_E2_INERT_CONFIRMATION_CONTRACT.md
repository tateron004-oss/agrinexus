# Nexus Sprint E2 - Inert Confirmation Contract

## Purpose

Sprint E2 adds a deterministic, inert contract for user confirmation objects. It follows the Sprint E1 product boundary and gives future stages a single local validator for approval-intent-only confirmation metadata.

Current base after E1: `4210bc3837acf6de948e56aa11f87a6fd102e041`.

Sprint E2 continues the User Confirmation and Approval Framework. It does not reopen Sprint D, and it does not change Standard User runtime behavior.

This phase does not render UI, mutate the DOM, attach event listeners, fetch data, write storage, call providers, create backend records, create pending real-world actions, or execute actions.

## Contract Module

Module: `public/nexus-confirmation-contract.js`

The module defines:

- allowed confirmation types;
- blocked execution channels;
- required confirmation fields;
- `isSafeApprovalIntentConfirmation(confirmation)`;
- `validateApprovalIntentConfirmation(confirmation)`;
- `createApprovalIntentConfirmation(input)`.

The contract is local and deterministic. It may be loaded by QA or future explicitly gated code, but E2 itself does not import it into `public/app.js`, `public/index.html`, or `server.js`.

## Allowed Confirmation Types

Allowed confirmation types are:

- `reviewAcknowledgement`
- `prepareNextStep`
- `sourceReview`
- `riskDisclosureAcknowledgement`
- `cancelConfirmation`
- `notNow`

These types are approval-intent categories only. They are not executable commands, provider handoff payloads, workflow launchers, or real-world action tasks.

## Required Fields

Every confirmation object must include:

- `confirmationId`
- `relatedStagedActionId`
- `confirmationType`
- `title`
- `summary`
- `approvalIntentOnly`
- `requiresFinalExecutionGate`
- `executionAuthority`
- `riskTier`
- `riskDisclosure`
- `blockedExecutionChannels`
- `evidenceRequirement`
- `sourcePacketRequirement`
- `userFacingLanguage`
- `safeUseNotes`
- `limitations`

## Required Invariants

Every valid confirmation object must set:

- `approvalIntentOnly: true`
- `requiresFinalExecutionGate: true`
- `executionAuthority: false`

The validator must return `true` only when all required fields are present and every required blocked execution channel is included.

## Required Blocked Execution Channels

Every valid confirmation object must block:

- `provider`
- `call`
- `message`
- `payment`
- `location`
- `camera`
- `emergency`
- `medical`
- `pharmacy`
- `backend-write`
- `pending-action`

Additional blocked channels are allowed when the prompt family requires stricter limits.

## Validator Behavior

`isSafeApprovalIntentConfirmation(confirmation)` returns `true` only when:

- the input is an object;
- `confirmationType` is in the allowed list;
- every required field is present;
- `approvalIntentOnly === true`;
- `requiresFinalExecutionGate === true`;
- `executionAuthority === false`;
- `blockedExecutionChannels` is an array;
- every required blocked execution channel is present;
- text fields are non-empty strings.

It returns `false` for malformed confirmations, missing fields, unapproved types, executable authority, missing final execution gate, or incomplete blocked channels.

## Non-Execution Boundaries

The E2 contract module must never:

- mutate the DOM;
- add event listeners;
- call `fetch`;
- use network APIs;
- read or write `localStorage` or `sessionStorage`;
- write cookies;
- write backend state;
- call providers;
- create pending real-world actions;
- navigate;
- open URLs;
- request permissions;
- call, message, pay, schedule, dispatch, diagnose, prescribe, refill, buy, sell, or share location.

## Runtime Boundary

E2 does not load the contract into active Standard User runtime. The Standard User build must remain unchanged. Future runtime-visible confirmation work must pass browser validation and remain default-off unless explicitly approved.

## QA Guard

QA script: `scripts/nexus-sprint-e2-inert-confirmation-contract-qa.js`

The QA guard validates:

- module and document existence;
- required constants and helpers;
- safe sample confirmation passes;
- unsafe samples fail;
- blocked execution channels are complete;
- module source does not contain DOM, event, network, storage, navigation, provider execution, backend write, or permission APIs;
- package alias and safe-suite wiring exist.

## Conclusion

Sprint E2 establishes the inert confirmation data contract only. It is safe to continue to fixture-only confirmation harnessing in E3, provided confirmations remain approval-intent-only, final-execution-gate-required, and non-executing.
