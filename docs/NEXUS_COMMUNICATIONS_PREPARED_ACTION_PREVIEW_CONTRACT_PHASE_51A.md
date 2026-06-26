# Nexus Communications Prepared Action Preview Contract

Phase: 51A - Communications Prepared Action Preview Contract
Status: inert contract, deterministic QA, and local-safe suite wiring only
Related roadmap row: `| Phase 51 | Communications send after approval | Enable messages/calls through providers | comm adapter | future | high | WhatsApp/SMS/email/native provider | explicit approval/audit | comm QA | no first-turn sending |`

## Scope Decision

Phase 51 remains execution-disabled. Phase 51A completes the safe preview portion of the roadmap item by defining a prepared communication action that Nexus may show for review in a future approved flow.

This phase does not enable:

- live calls
- live messages
- WhatsApp, Telegram, SMS, email, native phone, or browser phone execution
- provider APIs
- background communication
- silent sending
- silent calling
- hidden provider handoff
- Standard User communication execution
- storage, network, backend, route, native bridge, or permission behavior changes

## Prepared Action Preview Contract

The inert contract lives in:

- `public/nexus-communications-prepared-action-preview-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

The module exposes:

- `COMMUNICATION_PREVIEW_ACTION_TYPES`
- `COMMUNICATION_PREVIEW_PROVIDERS`
- `COMMUNICATION_PREVIEW_REQUIRED_FIELDS`
- `COMMUNICATION_PREVIEW_NO_EXECUTION_DEFAULTS`
- `COMMUNICATION_PREVIEW_RESTRICTED_DOMAINS`
- `COMMUNICATION_PREVIEW_CONTRACT`
- `createCommunicationsPreparedActionPreview(...)`

## Required Preview Fields

Every future prepared communication preview must include:

- `previewId`
- `phase`
- `actionType`
- `provider`
- `recipientDisplay`
- `purposePreview`
- `language`
- `riskTier`
- `permissionState`
- `auditState`
- `approvalState`
- `cancellationAvailable`
- `executionEnabled`
- `providerOpenAllowed`
- `backgroundExecutionAllowed`
- `standardUserExecutionAllowed`

## Safe Defaults

The prepared action preview defaults to:

- `riskTier: high`
- `permissionState: permission_required`
- `auditState: audit_required`
- `approvalState: approval_required`
- `cancellationAvailable: true`
- `executionEnabled: false`
- `providerOpenAllowed: false`
- `backgroundExecutionAllowed: false`
- `standardUserExecutionAllowed: false`
- `messageSendAllowed: false`
- `callStartAllowed: false`
- `whatsAppOpenAllowed: false`
- `telegramOpenAllowed: false`
- `nativePhoneOpenAllowed: false`
- `browserTelOpenAllowed: false`
- `smsSendAllowed: false`
- `emailSendAllowed: false`

The factory must not allow overrides to turn those execution defaults on.

## Allowed Preview Providers

The preview contract may describe these provider choices without opening them:

- `none`
- `native-phone`
- `browser-tel`
- `whatsapp`
- `telegram`
- `sms`
- `email`
- `approved-communications-provider`
- `unsupported`

## Restricted Domain Boundaries

Additional restrictions apply when the communication preview is related to:

- `healthcare`
- `pharmacy`
- `emergency`
- `payments`
- `marketplace_transactions`
- `transportation_dispatch`
- `minors_family_support`

Those domains require additional consent, approval, provider readiness, and audit checks before any later phase may consider execution. Phase 51A only prepares review text.

## Standard User Expectation

The Standard User build may eventually show a prepared communication preview, but it must not:

- send a message
- start a call
- open WhatsApp
- open Telegram
- open native phone
- open SMS
- open email
- open a browser phone URL
- contact a provider
- contact a buyer/seller
- contact a clinic, pharmacy, emergency service, or transport provider
- execute in the background

## QA Expectations

The deterministic QA lives in:

- `scripts/nexus-communications-prepared-action-preview-contract-qa.js`

The package alias is:

- `qa:nexus-communications-prepared-action-preview-contract`

The QA verifies:

- Phase 51A contract exists;
- the Phase 51 roadmap row remains present;
- Phase 50A readiness gate remains present and blocked;
- required preview fields are enumerated;
- execution defaults remain false;
- factory overrides cannot enable execution;
- restricted domains are represented;
- the contract is not loaded by `public/index.html`, `public/app.js`, or `server.js`;
- no network, storage, provider, native, permission, navigation, call, message, or execution behavior is introduced.

## Future Phase 51 Progression

Phase 51B should add a no-execution regression contract for raw communications prompts.

Phase 51C should define approval and audit handoff rules for prepared communication actions.

Phase 51D should define provider availability and fallback behavior.

Phase 51E should document Standard User validation expectations.

Live communications execution remains disabled until a separately approved later implementation satisfies the readiness gate, approval, consent, provider availability, and audit requirements.
