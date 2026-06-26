# Nexus Communications Approval/Audit Handoff Contract

Phase: 51C - Communications Approval/Audit Handoff Contract
Status: inert documentation and deterministic QA only
Related roadmap row: `| Phase 51 | Communications send after approval | Enable messages/calls through providers | comm adapter | future | high | WhatsApp/SMS/email/native provider | explicit approval/audit | comm QA | no first-turn sending |`

## Scope Decision

Phase 51C defines the approval and audit handoff requirements for prepared communication actions. It does not send, call, message, open providers, or change runtime behavior.

This phase does not activate:

- live messages
- live calls
- WhatsApp, Telegram, SMS, email, native phone, or browser phone execution
- provider APIs
- provider handoff opening
- native bridge communication
- storage or network side effects
- backend behavior changes
- Standard User communication execution

## Relationship To Prior Safe Phases

Phase 50A keeps communications provider execution blocked until readiness is satisfied.

Phase 51A defines a prepared action preview with execution disabled.

Phase 51B defines raw prompt no-execution regression boundaries.

Phase 51C defines how a future prepared communication action must enter approval and audit review before any later provider adapter is considered.

## Required Handoff Preconditions

Before any future communications provider execution can be considered, the handoff must include:

- `preparedActionId`
- `approvalRequestId`
- `auditEventId`
- `resolvedRecipient`
- `recipientDisplay`
- `providerDisplay`
- `actionTypeDisplay`
- `purposePreview`
- `languageConfirmation`
- `permissionState`
- `providerAvailabilityState`
- `domainRestrictionState`
- `explicitApprovalState`
- `cancellationAvailable`
- `executionEnabled: false`
- `providerOpenAllowed: false`
- `backgroundExecutionAllowed: false`

## Approval Requirements

Approval must be:

- explicit;
- action-specific;
- provider-specific;
- recipient-specific;
- purpose-specific;
- language-confirmed;
- revocable before execution;
- blocked by vague acknowledgments such as `okay`, `sure`, `go ahead maybe`, or silence;
- unavailable when the provider is not configured or when domain restrictions are not satisfied.

Allowed future approval phrases may include:

- `yes, confirm this call`
- `yes, send this message`
- `confirm this prepared action`
- `approve this provider handoff`

Those phrases still must not execute anything in Phase 51C.

## Audit Requirements

The future audit handoff must record:

- intent classification
- risk tier
- source surface
- selected provider
- selected action type
- recipient resolution
- purpose preview
- language confirmation
- permission state
- approval state
- cancellation state
- provider availability state
- domain restriction state
- blocked/fallback reason
- timestamp
- redacted payload summary

Phase 51C does not write audit records at runtime. It only defines the required audit shape.

## Domain Restrictions

Additional approval and audit review is required for:

- healthcare
- pharmacy
- emergency
- payments
- marketplace transactions
- transportation dispatch
- minors/family support

No elevated role may bypass those restrictions.

## Standard User Expectation

Standard User may see a prepared communication action only as a review artifact in a future phase. Standard User must not be able to:

- execute communication;
- open a communications provider;
- contact a person or organization;
- contact a clinic, pharmacy, seller, buyer, transport provider, or emergency service;
- approve with vague language;
- bypass audit;
- bypass cancellation;
- run provider actions in the background.

## QA Expectations

The deterministic QA lives in:

- `scripts/nexus-communications-approval-audit-handoff-contract-qa.js`

The package alias is:

- `qa:nexus-communications-approval-audit-handoff-contract`

The QA verifies:

- Phase 50A remains blocked;
- Phase 51A remains non-executing;
- Phase 51B prompt regression remains present;
- approval and audit preconditions are documented;
- vague approval remains blocked;
- explicit approval examples do not imply execution;
- domain restrictions are present;
- Standard User communication execution remains prohibited;
- no runtime hooks, network, storage, provider, native, permission, navigation, call, message, or execution behavior is introduced.

## Future Phase 51 Progression

Phase 51D should define provider availability fallback behavior for communications provider choices.

Live communications execution remains disabled until a future approved implementation satisfies readiness, approval, audit, provider availability, consent, and domain restrictions.
