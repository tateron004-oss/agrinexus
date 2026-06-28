# Nexus Sprint E6 - Flag-Gated Confirmation UI Preview

## Objective

Sprint E6 introduces the first controlled user confirmation preview surface for low-risk Nexus flows. It is explicitly gated by `NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED` and remains off by default.

This phase does not create execution authority. It only renders approval-intent context for eligible low-risk readiness metadata when the explicit flag is enabled.

## Flag-Off Behavior

Standard User runtime behavior remains unchanged when `NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED` is absent or false.

Flag-off mode must not:

- show the E6 confirmation preview
- create a provider handoff
- create a call or message action
- process payment
- request location or camera access
- perform medical, pharmacy, or emergency execution
- write backend state
- create a pending real-world action

## Flag-On Behavior

When the flag is explicitly set to boolean `true`, eligible low-risk readiness may render an approval-intent-only preview in the existing controlled low-risk renderer mount.

The preview may show:

- confirmation title and summary
- Evidence & Verification copy
- source packet requirement
- limitations
- blocked execution channels
- a clear statement that approval intent is not execution

The preview must not include buttons, links, forms, automatic navigation, permission prompts, provider handoff, storage writes, network calls, or backend writes.

## Confirmation vs Execution Boundary

User approval intent is not final execution.

The preview must preserve:

- `approvalIntentOnly: true`
- `requiresFinalExecutionGate: true`
- `executionAuthority: false`
- `providerHandoffAllowed: false`
- `pendingActionCreationAllowed: false`
- `backendWriteAllowed: false`

Every real-world execution path still requires a later explicit final execution gate, audit coverage, permission state, and domain-specific safety approval.

## Eligible Low-Risk Families

Sprint E6 remains limited to existing low-risk readiness families:

- agriculture training review
- irrigation learning review
- farm job pathway review
- AgriTrade browse guidance
- crop issue observation review
- field support guidance

## Blocked Channels

The preview must continue to block:

- provider
- call
- message
- payment
- location
- camera
- medical
- pharmacy
- emergency
- backend-write
- pending-action

## Browser Validation Boundary

Browser validation for this phase must use the normal Standard User build. With the flag off, no E6 confirmation preview should appear. If the flag is manually enabled for a local validation pass, the preview must remain text-only, approval-intent-only, non-executing, and free of unsafe controls.

## QA Guard

`scripts/nexus-sprint-e6-flag-gated-confirmation-ui-preview-qa.js` verifies the source-level contract, package alias, and safe-suite wiring.
