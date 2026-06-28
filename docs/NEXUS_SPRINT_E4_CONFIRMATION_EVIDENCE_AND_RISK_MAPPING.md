# Nexus Sprint E4 - Confirmation Evidence and Risk Mapping

## Purpose

Sprint E4 defines how user confirmation objects must carry evidence, source-packet, risk, limitation, and blocked-channel accountability before any future confirmation preview can become visible.

Current base after E3: `967b09de720aac4e52c14e50e072080c49e910c1`.

Sprint E4 remains documentation, inert contract logic, fixtures, and deterministic QA only. It does not change Standard User runtime behavior.

## Scope

E4 builds on:

- Sprint E1 user confirmation product boundary;
- Sprint E2 inert confirmation contract;
- Sprint E3 fixture-only confirmation harness.

The new mapping layer is `public/nexus-confirmation-evidence-risk-mapping.js`.

The mapper may be loaded by QA or future explicitly gated code, but E4 itself does not import it into `public/app.js`, `public/index.html`, or `server.js`.

## Evidence Requirement

Every confirmation must include an `evidenceRequirement`. The evidence requirement must explain what proof, source, context, or gate is needed before a user can trust the next step.

For source-backed confirmations, evidence must reference a verified source packet or source-backed review process.

For not-source-backed confirmations, evidence must disclose that the confirmation is a boundary note, safety note, or limitation notice rather than a source-backed claim.

## Source Packet Requirement

Every confirmation must include a `sourcePacketRequirement`.

Source-backed confirmations must require source packet references before any source-backed visible answer or preview is shown.

Not-source-backed confirmations must disclose limitations clearly and must not pretend that a source packet exists.

## Risk Disclosure

Every confirmation must include a `riskDisclosure`. The disclosure must make clear:

- what the user is approving for review;
- what risk tier applies;
- what has not happened;
- which execution channels remain blocked;
- which final execution gate is still required.

High-risk confirmations must remain blocked or boundary-only. They must not convert approval intent into calls, messages, payments, provider handoff, location sharing, camera access, medical/pharmacy workflows, emergency routing, backend writes, or pending real-world actions.

## Required No-Execution Mapping

Every mapped confirmation must preserve:

- `approvalIntentOnly: true`
- `requiresFinalExecutionGate: true`
- `executionAuthority: false`
- `providerHandoffAllowed: false`
- `pendingActionCreated: false`
- `backendWriteAllowed: false`

## Required Blocked Channels

Every mapped confirmation must block:

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

Additional blocked channels are allowed and encouraged for higher-risk confirmation families.

## Mapper Behavior

`mapConfirmationEvidenceRisk(confirmation)` returns a deterministic review object with:

- `confirmationId`
- `relatedStagedActionId`
- `confirmationType`
- `riskTier`
- `evidenceRequired`
- `sourcePacketRequired`
- `sourceBacked`
- `limitationsDisclosed`
- `riskDisclosurePresent`
- `approvalIntentOnly`
- `requiresFinalExecutionGate`
- `executionAuthority`
- `providerHandoffAllowed`
- `pendingActionCreated`
- `backendWriteAllowed`
- `blockedExecutionChannels`
- `safe`
- `failures`

The mapper must not mutate confirmation input.

## Runtime Boundary

E4 does not render UI, mutate the DOM, attach event listeners, fetch data, write storage, use network APIs, call providers, create backend records, create pending real-world actions, request permissions, or execute anything.

Future runtime-visible confirmation work must pass browser validation and remain default-off unless explicitly approved.

## QA Guard

QA script: `scripts/nexus-sprint-e4-confirmation-evidence-risk-mapping-qa.js`

The QA guard validates:

- documentation exists;
- mapper module exists;
- mapper exports deterministic helpers;
- every E3 fixture has evidence requirement, source packet requirement, risk disclosure, and limitations;
- source-backed confirmations require source packet references;
- not-source-backed confirmations disclose limitations;
- execution remains false;
- provider handoff remains false;
- pending actions remain false;
- backend writes remain false;
- package alias and safe-suite wiring exist.

## Conclusion

Sprint E4 proves confirmation evidence and risk accountability can be modeled without creating runtime authority. Sprint E5 can introduce a default-off flag regression guard while preserving the same no-execution posture.
