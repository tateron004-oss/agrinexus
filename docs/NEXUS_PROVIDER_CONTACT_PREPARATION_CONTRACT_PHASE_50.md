# Nexus Provider Contact Preparation Contract - Phase 50

Phase: 50 - Provider contact preparation
Roadmap row: `| Phase 50 | Provider contact preparation | Prepare contact handoffs | contact resolver | future | high | provider contact source | provider confirmation | contact QA | no raw prompt contact |`
Status: inert provider-contact preparation contract and deterministic QA only

## Scope Decision

Phase 50 defines the contract for future provider contact preparation. It does not add a contact resolver, provider directory lookup, contact persistence, provider handoff, call, message, WhatsApp, SMS, email, health action, emergency dispatch, marketplace transaction, external navigation, storage side effect, or backend behavior change.

The roadmap mentions preparing contact handoffs. This phase only defines the data model and gates that must exist before any future contact handoff can be prepared or shown.

## Relationship To Current Contact Safety

The current repo already protects contact and call behavior through:

- `communications.outbound_call` high-risk classification;
- `agentPendingAction` staging for outbound calls;
- missing number prompts;
- duplicate-contact clarification expectations;
- blocked vague confirmations such as `okay`;
- confirmed call handoff metadata;
- native bridge validation;
- Android `ACTION_DIAL`;
- iOS `tel:` URL validation;
- provider handoff boundaries that prevent raw-intent adapter dispatch.

Phase 50 does not weaken or replace those protections.

## Contract Artifact

The inert contract lives in:

- `public/nexus-provider-contact-preparation-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

The module exposes:

- `PROVIDER_CONTACT_PREPARATION_STATUSES`
- `PROVIDER_CONTACT_CATEGORIES`
- `NO_EXECUTION_DEFAULTS`
- `PROVIDER_CONTACT_PREPARATION_FIELDS`
- `CONTACT_RESOLUTION_GATE_FIELDS`
- `HANDOFF_PREPARATION_GATE_FIELDS`
- `CONTACT_CANDIDATE_SCHEMA_FIELDS`
- `DEFAULT_CONTACT_RESOLUTION_GATE`
- `DEFAULT_HANDOFF_PREPARATION_GATE`
- `PROVIDER_CONTACT_PREPARATION_CONTRACT`
- `createProviderContactPreparationContract(...)`

## Preparation Statuses

The contract recognizes:

- `not_configured`
- `contact_source_required`
- `resolver_required`
- `provider_confirmation_required`
- `consent_policy_required`
- `audit_policy_required`
- `role_policy_required`
- `handoff_policy_required`
- `sandbox_testing_required`
- `approved_not_live`
- `rejected_or_blocked`
- `inactive`

Invalid statuses fall back to `not_configured`.

## Contact Categories

The contract defines:

- `provider_directory_contact`
- `clinic_contact`
- `telehealth_provider_contact`
- `pharmacy_contact`
- `transportation_contact`
- `workforce_support_contact`
- `marketplace_partner_contact`
- `community_service_contact`
- `emergency_contact_boundary`
- `restricted_contact_boundary`

Invalid categories are filtered out.

## Provider Contact Preparation Fields

Future contact preparation records must account for:

- `contactPreparationId`
- `sourceOwner`
- `preparationStatus`
- `contactCategories`
- `supportedRegions`
- `supportedLanguages`
- `contactSourceStatus`
- `resolverStatus`
- `providerConfirmationStatus`
- `consentPolicyStatus`
- `auditPolicyStatus`
- `rolePolicyStatus`
- `handoffPolicyStatus`
- `freshnessModel`
- `allowedResponseStates`
- `contactResolutionGate`
- `handoffPreparationGate`
- `contactCandidateSchema`
- `auditRequirements`
- `contactResolverEnabled`
- `providerConfirmationEnabled`
- `contactHandoffPreparationEnabled`
- `providerExecutionEnabled`
- `callExecutionEnabled`
- `messageExecutionEnabled`
- `liveActionEnabled`
- `noExecution`

## Contact Resolution Gate

The contact resolution gate requires:

- `requiresKnownContactSource`
- `requiresTargetDisambiguation`
- `requiresMissingNumberPrompt`
- `requiresDuplicateSelection`
- `requiresProviderTypeValidation`
- `requiresPurposeDisclosure`
- `requiresConsentPolicy`
- `requiresAuditPolicy`
- `requiresNoRawPromptContact`

It forces these to false:

- `allowsRawPromptContact`
- `allowsAutomaticContactSelection`
- `allowsContactPersistence`
- `allowsProviderContact`
- `allowsExternalNavigation`

## Handoff Preparation Gate

The handoff preparation gate requires:

- `requiresResolvedCandidate`
- `requiresProviderConfirmation`
- `requiresExplicitUserApproval`
- `requiresHandoffPolicy`
- `requiresAuditLogging`
- `requiresNoFirstTurnExecution`
- `requiresCancellationPath`

It forces these to false:

- `allowsCallExecution`
- `allowsMessageExecution`
- `allowsWhatsAppExecution`
- `allowsSmsExecution`
- `allowsEmailExecution`
- `allowsEmergencyDispatch`
- `allowsMarketplaceTransaction`
- `allowsExternalNavigation`

## Contact Candidate Schema

Future contact candidates must include:

- `candidateId`
- `displayName`
- `contactCategory`
- `organizationName`
- `role`
- `region`
- `language`
- `sourceType`
- `sourceName`
- `freshnessStatus`
- `hasPhone`
- `hasMessageChannel`
- `redactedContactSummary`
- `consentRequired`
- `providerConfirmationRequired`
- `auditRequired`

The schema is declarative only. It does not query contacts, reveal private details, select candidates, call, message, or open providers.

## No-Execution Defaults

The contract defaults every live or high-impact behavior to disabled:

- `contactResolverEnabled: false`
- `contactSourceEnabled: false`
- `contactPersistenceEnabled: false`
- `providerConfirmationEnabled: false`
- `contactHandoffPreparationEnabled: false`
- `runtimeContactAuthorityEnabled: false`
- `providerExecutionEnabled: false`
- `callExecutionEnabled: false`
- `messageExecutionEnabled: false`
- `whatsAppExecutionEnabled: false`
- `smsExecutionEnabled: false`
- `emailExecutionEnabled: false`
- `healthActionEnabled: false`
- `locationSharingEnabled: false`
- `marketplaceTransactionEnabled: false`
- `emergencyDispatchEnabled: false`
- `externalNavigationEnabled: false`
- `liveActionEnabled: false`
- `noExecution: true`

It also defaults action-result signals to false:

- `contactResolved: false`
- `contactSelected: false`
- `providerConfirmed: false`
- `handoffPrepared: false`
- `providerContacted: false`
- `callPlaced: false`
- `messageSent: false`
- `whatsAppOpened: false`
- `smsSent: false`
- `emailSent: false`
- `healthActionPerformed: false`
- `locationShared: false`
- `marketplaceTransactionCompleted: false`
- `emergencyDispatched: false`
- `externalActionExecuted: false`

## Protected Boundaries

Phase 50 must not change:

- Standard User startup
- visible assistant behavior
- low-risk preview behavior
- approval-center readiness
- contact/call confirmation gate
- native bridge safety
- WhatsApp/Telegram/SMS/email behavior
- telehealth/video/camera routing
- marketplace/payment behavior
- health/emergency behavior
- map/location permission behavior
- backend routes
- JSON persistence behavior

## QA

The deterministic QA lives in:

- `scripts/nexus-provider-contact-preparation-contract-qa.js`

The package alias is:

- `qa:nexus-provider-contact-preparation-contract`

The QA verifies:

- Phase 50 remains represented in the Nexus 100 roadmap.
- Existing contact/call permission, contact resolution, and provider handoff boundary QA remain present.
- The contract exposes required statuses, categories, fields, gates, schema fields, and no-execution defaults.
- Contract factory overrides cannot enable raw prompt contact, automatic contact selection, provider contact, call execution, message execution, WhatsApp execution, SMS execution, email execution, emergency dispatch, marketplace transaction, or external navigation.
- The contract is not loaded by `public/index.html`, `public/app.js`, or `server.js`.
- No network, storage, provider, native, permission, navigation, contact resolver, handoff, or execution behavior is introduced.
- `qa-suite.js all-safe` and `qa-suite.js nexus-workforce` include the focused QA.

## Future Activation Requirements

Before provider contact preparation can become visible or active, a later phase must define and validate:

- approved provider contact sources
- contact resolver behavior
- missing number prompts
- duplicate-contact selection
- provider confirmation requirements
- redaction and minimization
- consent and audit policy
- role-aware projection
- handoff-specific provider boundaries
- browser and mobile regression tests
- manual Standard User validation

Until those gates exist, provider contact preparation remains source-ready, policy-ready, and execution-disabled.
