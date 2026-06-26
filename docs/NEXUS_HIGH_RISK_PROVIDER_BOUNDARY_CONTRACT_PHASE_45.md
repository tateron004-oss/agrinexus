# Nexus High-Risk Provider Boundary Contract - Phase 45

Status: inert communication, payment, and emergency partner boundary contract; no live action by default.

Phase 45 prepares the future contract surface for high-risk communication, payment, and emergency partners. These partners may eventually support provider handoff, calls, messages, WhatsApp or SMS flows, payment processing, wallet actions, public-safety routing, emergency partner handoff, or crisis-line guidance, but none of those actions are live in this phase.

This phase does not call, message, open WhatsApp, send SMS, send email, process payments, charge wallets, contact providers, contact public safety partners, dispatch emergency help, open external provider links, use credentials, request location, activate camera or microphone, store runtime state, or change backend behavior.

## Roadmap Alignment

Roadmap row:

`Phase 45 | Communication/payment/emergency partners | Prepare high-risk providers | provider contracts | future | restricted | communications, payment, emergency partners | strict consent/audit | provider QA | no live action by default`

Phase 45 is a contract and QA phase only. It keeps provider readiness explicit while preserving the current Standard User safety posture.

## Provider Statuses

- `not_configured`
- `communications_provider_review_required`
- `payment_provider_review_required`
- `emergency_partner_review_required`
- `credential_review_required`
- `consent_policy_review_required`
- `audit_policy_review_required`
- `handoff_policy_review_required`
- `sandbox_testing_required`
- `approved_not_live`
- `rejected_or_blocked`
- `inactive`

`approved_not_live` means a future partner may be reviewed, but live action still remains disabled until a later phase explicitly approves execution, credentials, consent, audit logging, and final user confirmation.

## Provider Categories

- `outbound_call_provider`
- `outbound_message_provider`
- `whatsapp_handoff_provider`
- `sms_provider`
- `email_provider`
- `payment_processor`
- `wallet_provider`
- `marketplace_payment_provider`
- `emergency_response_partner`
- `public_safety_partner`
- `crisis_line_directory`
- `restricted_provider_boundary`

These categories are descriptive. They must not imply a call was placed, a message was sent, a payment was processed, an emergency partner was contacted, a provider handoff was opened, or any external action happened.

## Contract Fields

- `connectorId`
- `providerName`
- `sourceOwner`
- `providerStatus`
- `providerCategories`
- `supportedRegions`
- `supportedLanguages`
- `credentialReviewStatus`
- `consentPolicyStatus`
- `auditPolicyStatus`
- `handoffPolicyStatus`
- `sandboxTestingStatus`
- `freshnessModel`
- `regionalScope`
- `languageScope`
- `allowedResponseStates`
- `consentGate`
- `highRiskExecutionGate`
- `auditRequirements`
- `auditEvent`
- `communicationContextAllowed`
- `paymentContextAllowed`
- `emergencyContextAllowed`
- `providerContactEnabled`
- `callExecutionEnabled`
- `messageExecutionEnabled`
- `paymentExecutionEnabled`
- `emergencyDispatchEnabled`
- `liveActionEnabled`
- `noExecution`

## Consent Gate

The `consentGate` must require:

- `requiresExplicitUserApproval`
- `requiresPurposeDisclosure`
- `requiresProviderVerification`
- `requiresCredentialReview`
- `requiresAuditLogging`
- `requiresPartnerConfirmation`
- `requiresNoFirstTurnExecution`
- `requiresCancellationPath`

The consent gate must keep these false by default:

- `allowsCommunicationProviderContact`
- `allowsPaymentProcessing`
- `allowsEmergencyDispatch`
- `allowsExternalNavigation`
- `allowsCredentialUse`

## High-Risk Execution Gate

The `highRiskExecutionGate` must require:

- `requiresRiskReview`
- `requiresPolicyApproval`
- `requiresUserConfirmation`
- `requiresProviderConfirmation`
- `requiresCredentialReadiness`
- `requiresAuditLogging`
- `requiresRoleAuthorization`
- `requiresNoFirstTurnExecution`
- `requiresFallback`

The high-risk execution gate must keep these false by default:

- `allowsCallExecution`
- `allowsMessageExecution`
- `allowsPaymentExecution`
- `allowsEmergencyDispatch`
- `allowsPublicSafetyDispatch`
- `allowsLiveProviderConnection`
- `allowsExternalNavigation`

## No-Execution Defaults

The contract must keep:

- `communicationContextAllowed: false`
- `paymentContextAllowed: false`
- `emergencyContextAllowed: false`
- `liveProviderConnectionEnabled: false`
- `providerContactEnabled: false`
- `callExecutionEnabled: false`
- `messageExecutionEnabled: false`
- `whatsAppExecutionEnabled: false`
- `smsExecutionEnabled: false`
- `emailExecutionEnabled: false`
- `paymentExecutionEnabled: false`
- `walletExecutionEnabled: false`
- `marketplacePaymentEnabled: false`
- `emergencyDispatchEnabled: false`
- `publicSafetyDispatchEnabled: false`
- `externalNavigationEnabled: false`
- `credentialUseEnabled: false`
- `liveActionEnabled: false`
- `providerContacted: false`
- `callPlaced: false`
- `messageSent: false`
- `whatsAppOpened: false`
- `smsSent: false`
- `emailSent: false`
- `paymentProcessed: false`
- `walletCharged: false`
- `marketplacePaymentProcessed: false`
- `emergencyDispatched: false`
- `publicSafetyDispatched: false`
- `externalActionExecuted: false`
- `noExecution: true`

## Audit Event Fields

- `eventType`
- `connectorId`
- `providerStatus`
- `providerCategories`
- `communicationContextAllowed`
- `paymentContextAllowed`
- `emergencyContextAllowed`
- `providerContactEnabled`
- `callExecutionEnabled`
- `messageExecutionEnabled`
- `paymentExecutionEnabled`
- `emergencyDispatchEnabled`
- `publicSafetyDispatchEnabled`
- `credentialUseEnabled`
- `noExecution`
- `createdAt`

Audit events must not include full phone numbers, message bodies, payment details, card data, wallet identifiers, account secrets, precise location, emergency contact details, provider credentials, or executable provider payloads.

## Source Universe Alignment

The provider source universe already marks:

- `finance.payment_processors` as `approved_high_risk` with default execution disabled.
- `emergency.public_safety_partners` as `approved_high_risk` with default execution disabled.

Communication provider readiness remains governed by the existing call/contact/provider handoff QA. Phase 45 adds the restricted partner boundary needed before future communications, payment, or emergency execution phases.

## Runtime Boundary

The Phase 45 module must not be loaded by `public/index.html`, consumed by `public/app.js`, or consumed by `server.js`. Normal static-file availability is acceptable, but no runtime hook, dynamic import, route handler, provider adapter, fetch call, credential path, storage write, navigation, call/message path, payment path, emergency path, permission prompt, camera, microphone, location access, or dispatch behavior may be introduced.

## User-Facing Language Boundary

Nexus may say a provider connection is not configured yet, requires a verified provider, requires explicit approval, requires consent, requires audit logging, or requires partner confirmation. Nexus must not say it placed a call, sent a message, opened WhatsApp, processed a payment, contacted public safety, dispatched emergency help, charged a wallet, or completed a high-risk action unless a later approved execution phase enables that behavior.

## QA Expectations

`scripts/nexus-high-risk-provider-boundary-contract-qa.js` verifies:

- the Phase 45 roadmap row remains present;
- provider source universe payment and emergency partner categories remain execution-disabled by default;
- communication provider safety guardrails remain present;
- the contract exports the required statuses, categories, fields, gates, audit fields, and no-execution defaults;
- created provider boundaries are frozen and force unsafe overrides back to disabled;
- no provider API, credential path, storage write, permission prompt, navigation, call/message, payment, emergency dispatch, or execution behavior exists;
- the module is not wired into `index.html`, `app.js`, or `server.js`;
- package and QA suite entries include the new local-safe QA guard.

## Future Work

Later phases may add provider-specific communication, payment, and emergency readiness only after credential review, provider approval, consent design, audit logging, role authorization, sandbox testing, and explicit user confirmation are complete. Phase 45 intentionally stops at the boundary contract.
