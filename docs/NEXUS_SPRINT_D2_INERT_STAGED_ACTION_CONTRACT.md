# Nexus Sprint D2 - Inert Staged Action Contract

## Purpose

Sprint D2 adds a deterministic, inert contract for controlled staged actions. It follows the Sprint D1 product boundary and gives future stages a single local validator for review-only staged action metadata.

Current base after D1: `9190b1687a50f169390cee7336dc6a9c0462f2a7`.

Sprint D2 continues the post-AO3 Sprint D train. The audit train ended at AO3, and D2 does not reopen AO4, AO5, or any additional audit phase.

This phase does not wire staged actions into Standard User runtime. It does not render UI, mutate the DOM, attach event listeners, fetch data, write storage, call providers, create backend records, or execute actions.

## Contract Module

Module: `public/nexus-staged-action-contract.js`

The module defines:

- allowed staged action types;
- blocked execution channels;
- required staged action fields;
- `isSafeReviewOnlyStagedAction(action)`;
- `validateReviewOnlyStagedAction(action)`;
- `createReviewOnlyStagedAction(input)`.

The contract is local and deterministic. It may be loaded by QA or future explicitly gated code, but D2 itself does not import it into `public/app.js`, `public/index.html`, or `server.js`.

## Allowed Staged Action Types

Allowed staged action types are:

- `agriculture.training.review`
- `agriculture.irrigation.learning.review`
- `workforce.farm_jobs.review`
- `marketplace.agritrade.browse.review`
- `agriculture.crop_issue.observation_review`
- `agriculture.field_support.review`
- `agriculture.source_backed_guidance.review`
- `blocked.high_risk.request_review`

These are review categories only. They are not commands, workflow launchers, provider handoff payloads, or executable tasks.

## Required Fields

Every staged action must include:

- `stagedActionId`
- `stagedActionType`
- `title`
- `summary`
- `reviewOnly`
- `requiresUserApproval`
- `executionAuthority`
- `riskTier`
- `blockedExecutionChannels`
- `evidenceRequirement`
- `sourcePacketRequirement`
- `createdFromPromptFamily`
- `safeUseNotes`
- `limitations`

## Required Invariants

Every valid staged action must set:

- `reviewOnly: true`
- `requiresUserApproval: true`
- `executionAuthority: false`

The validator must return `true` only when all required fields are present and every required blocked execution channel is included.

## Required Blocked Execution Channels

Every valid staged action must block:

- `call`
- `message`
- `payment`
- `location`
- `camera`
- `provider`
- `emergency`
- `medical`
- `pharmacy`
- `backend-write`
- `pending-action`

Additional blocked channels are allowed when the prompt family requires stricter limits.

## Validator Behavior

`isSafeReviewOnlyStagedAction(action)` returns `true` only when:

- the input is an object;
- `stagedActionType` is in the allowed list;
- every required field is present;
- `reviewOnly === true`;
- `requiresUserApproval === true`;
- `executionAuthority === false`;
- `blockedExecutionChannels` is an array;
- every required blocked execution channel is present;
- text fields are non-empty strings.

It returns `false` for malformed actions, missing fields, unapproved types, executable authority, or incomplete blocked channels.

## Non-Execution Boundaries

The D2 contract module must never:

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

D2 does not load the contract into active Standard User runtime. The Standard User build must remain unchanged. Future runtime-visible staged action work must pass browser validation and remain default-off unless explicitly approved.

## QA Guard

QA script: `scripts/nexus-sprint-d2-inert-staged-action-contract-qa.js`

The QA guard validates:

- module and document existence;
- required constants and helpers;
- safe sample staged action passes;
- unsafe samples fail;
- blocked execution channels are complete;
- module source does not contain DOM, event, network, storage, navigation, provider execution, backend write, or permission APIs;
- package alias and safe-suite wiring exist.

## Conclusion

Sprint D2 establishes the inert staged action data contract only. It is safe to continue to fixture-only harnessing in D3, provided staged actions remain review-only, approval-required, and non-executing.
