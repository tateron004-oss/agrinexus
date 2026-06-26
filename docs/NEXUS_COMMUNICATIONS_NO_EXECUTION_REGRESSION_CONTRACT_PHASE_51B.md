# Nexus Communications No-Execution Regression Contract

Phase: 51B - Communications No-Execution Regression Contract
Status: inert regression contract and deterministic QA only
Related roadmap row: `| Phase 51 | Communications send after approval | Enable messages/calls through providers | comm adapter | future | high | WhatsApp/SMS/email/native provider | explicit approval/audit | comm QA | no first-turn sending |`

## Scope Decision

Phase 51B protects the communication prompt boundary before any later provider execution work. It defines representative raw prompts that must remain blocked, staged, clarified, or preview-only. It does not enable communications execution.

This phase does not add:

- live calls
- live messages
- WhatsApp, Telegram, SMS, email, native phone, or browser phone execution
- provider APIs
- provider handoff opening
- background communication
- silent communication
- Standard User communication execution
- backend behavior changes
- storage or network side effects

## Contract Artifact

The inert contract lives in:

- `public/nexus-communications-no-execution-regression-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

The module exposes:

- `COMMUNICATIONS_NO_EXECUTION_PROMPTS`
- `COMMUNICATIONS_NO_EXECUTION_ALLOWED_OUTCOMES`
- `COMMUNICATIONS_NO_EXECUTION_FORBIDDEN_OUTCOMES`
- `COMMUNICATIONS_NO_EXECUTION_REQUIRED_BOUNDARIES`
- `COMMUNICATIONS_NO_EXECUTION_REGRESSION_CONTRACT`
- `createCommunicationsNoExecutionRegressionCase(...)`

## Prompt Matrix

The contract covers raw prompts such as:

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

These prompts may produce safe outcomes only:

- `clarify_recipient`
- `resolve_recipient`
- `permission_required`
- `approval_required`
- `preview_only`
- `blocked`
- `unsupported_provider`

## Forbidden Outcomes

Raw communication prompts must never cause:

- `communication_executed`
- `provider_opened`
- `phone_opened`
- `whatsapp_opened`
- `telegram_opened`
- `sms_sent`
- `email_sent`
- `background_communication`
- `hidden_provider_handoff`
- `silent_call`
- `silent_send`
- `emergency_dispatched`
- `payment_processed`
- `marketplace_transaction_started`
- `location_shared`
- `camera_started`

## Required Boundaries

Each prompt case must preserve:

- `noFirstTurnExecution`
- `requiresResolvedRecipient`
- `requiresVisibleProvider`
- `requiresPurposePreview`
- `requiresLanguageConfirmation`
- `requiresExplicitApproval`
- `requiresCancellationPath`
- `requiresAuditEvent`
- `requiresPermissionState`
- `requiresProviderAvailability`
- `blocksVagueConfirmation`
- `blocksBackgroundExecution`
- `blocksSilentSend`
- `blocksSilentCall`
- `blocksHiddenProviderHandoff`

## Relationship To 50A And 51A

Phase 50A keeps the communications provider execution readiness gate blocked.

Phase 51A defines a prepared action preview contract that is high-risk and non-executing by default.

Phase 51B adds the regression matrix that raw communications prompts must satisfy before any future approval or provider handoff phase can be considered.

## QA Expectations

The deterministic QA lives in:

- `scripts/nexus-communications-no-execution-regression-contract-qa.js`

The package alias is:

- `qa:nexus-communications-no-execution-regression-contract`

The QA verifies:

- the Phase 51 roadmap row remains present;
- Phase 50A remains blocked;
- Phase 51A remains non-executing;
- representative raw communications prompts are enumerated;
- safe outcomes are limited;
- forbidden outcomes are enumerated and absent from allowed outcomes;
- required boundaries are present for every prompt case;
- factory overrides cannot make a case executable;
- the contract is not loaded by `public/index.html`, `public/app.js`, or `server.js`;
- no network, storage, provider, native, permission, navigation, call, message, or execution behavior is introduced.

## Future Phase 51 Progression

Phase 51C should define how a prepared communication action can hand off to approval and audit records without executing communication.

Live communications execution remains disabled until a separately approved later implementation satisfies readiness, approval, consent, provider availability, audit, and domain restrictions.
