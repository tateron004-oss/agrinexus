# Nexus Sprint O2 - Tool Provider Selection Feature Flag Contract

Current base: `24d8797dc62ab32cfcf02d9c7bb11b435f540da0`

Sprint O2 defines a default-off Tool/Provider Selection feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, activate a provider selection engine, open provider paths, call raw adapters, use provider credentials, select providers from raw intent, hand off silently, write storage, write audit events, contact providers, request permissions, or execute actions.

## Purpose

Sprint O2 turns the Sprint O1 runtime activation gate into a concrete default-off flag vocabulary for future work.

The flag exists so a later approved sprint can reason about a visible or local/test-safe provider selection readiness surface without confusing:

- feature flag readiness;
- visible provider review UI permission;
- provider path preview;
- live selection runtime;
- live selection engine;
- raw adapter calls;
- provider calls from raw intent;
- silent provider handoff;
- automatic connector execution;
- provider credential use;
- payment provider selection;
- regulated provider execution;
- emergency provider dispatch;
- transportation dispatch provider execution;
- communication provider execution;
- location or camera provider activation;
- selectedToolId route mutation;
- selectedToolId risk mutation;
- selectedToolId provider handoff;
- policy bypass;
- confirmation bypass;
- permission bypass;
- first-turn or later-turn execution;
- Standard User selection mutation;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Feature Flag Name

`NEXUS_TOOL_PROVIDER_SELECTION_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `selectionReviewAllowed: false`;
- `providerPathPreviewAllowed: false`;
- `selectionRuntimeAllowed: false`;
- `liveSelectionEngineAllowed: false`;
- `rawAdapterCallsAllowed: false`;
- `providerCallsFromRawIntentAllowed: false`;
- `silentProviderHandoffAllowed: false`;
- `automaticConnectorExecutionAllowed: false`;
- `providerCredentialUseAllowed: false`;
- `paymentProviderSelectionAllowed: false`;
- `regulatedProviderExecutionAllowed: false`;
- `emergencyProviderDispatchAllowed: false`;
- `transportationDispatchProviderExecutionAllowed: false`;
- `communicationProviderExecutionAllowed: false`;
- `locationCameraProviderActivationAllowed: false`;
- `selectedToolIdRouteMutationAllowed: false`;
- `selectedToolIdRiskMutationAllowed: false`;
- `selectedToolIdProviderHandoffAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserSelectionMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

The inert contract module is:

`public/nexus-tool-provider-selection-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate Tool/Provider Selection authority.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps:

- `selectionReviewAllowed: false`;
- `providerPathPreviewAllowed: false`;
- `selectionRuntimeAllowed: false`;
- `liveSelectionEngineAllowed: false`;
- `rawAdapterCallsAllowed: false`;
- `providerCallsFromRawIntentAllowed: false`;
- `silentProviderHandoffAllowed: false`;
- `automaticConnectorExecutionAllowed: false`;
- `providerCredentialUseAllowed: false`;
- `paymentProviderSelectionAllowed: false`;
- `regulatedProviderExecutionAllowed: false`;
- `emergencyProviderDispatchAllowed: false`;
- `transportationDispatchProviderExecutionAllowed: false`;
- `communicationProviderExecutionAllowed: false`;
- `locationCameraProviderActivationAllowed: false`;
- `selectedToolIdRouteMutationAllowed: false`;
- `selectedToolIdRiskMutationAllowed: false`;
- `selectedToolIdProviderHandoffAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserSelectionMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

This means flag-on visibility can only ever mean review-only readiness until a separate approved sprint changes connector registry, provider availability, policy, permission, consent, approval, audit, browser validation, and rollback boundaries.

## Prohibited Behavior

Sprint O2 must not add:

- runtime imports;
- script tags;
- event handlers;
- live provider selection engine;
- connector picker runtime UI;
- provider selection adapters;
- route mutation;
- voice route mutation;
- typed route mutation;
- raw adapter calls;
- provider calls from raw intent;
- silent provider handoff;
- automatic connector execution;
- provider credential use;
- selectedToolId route mutation;
- selectedToolId risk mutation;
- selectedToolId provider handoff;
- payment provider selection;
- regulated provider execution;
- emergency provider dispatch;
- transportation dispatch provider execution;
- communication provider execution;
- location or camera provider activation;
- policy bypass;
- confirmation bypass;
- permission bypass;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- fetch or network calls;
- native bridge calls;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- payments;
- marketplace transactions;
- location sharing;
- camera or microphone activation;
- health, medical, pharmacy, prescription, or FHIR execution;
- appointment scheduling;
- transportation dispatch;
- emergency dispatch;
- external navigation;
- execution authority.

## Relationship To Sprint O1

Sprint O1 remains the activation gate. Sprint O2 only defines the default-off flag contract. Future visible or runtime Tool/Provider Selection work still requires every Sprint O1 precondition, including product owner approval, evaluated selection engine version, connector registry entries, selected tool id trace, provider availability state, policy gate decision, risk tier, permission state, consent state, visible provider/action display, fallback and unsupported provider paths, explicit approval for high-risk handoff, cancellation path, audit decision record, no raw adapter calls, no provider selection from raw intent, no silent provider handoff, rollback planning, browser validation, and deterministic QA coverage.

## QA Expectations

Sprint O2 QA must verify:

- the flag contract doc exists;
- the feature flag module exists;
- the flag defaults off;
- flag-on test input cannot grant selection review, provider path preview, selection runtime authority, live selection engine, raw adapter calls, provider calls from raw intent, silent provider handoff, automatic connector execution, credential use, payment provider selection, regulated provider execution, emergency dispatch, transportation dispatch, communication execution, location or camera activation, selectedToolId route/risk/handoff mutation, policy bypass, confirmation bypass, permission bypass, first-turn or later-turn execution, Standard User selection mutation, backend write, storage write, network, audit write, or execution authority;
- runtime files do not load the module;
- no unsafe API or execution hook is introduced;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint O3 - Tool Provider Selection Flag Contract Harness`

Sprint O3 should add deterministic fixtures for flag-off, flag-on-review-only, and unsafe attempted authority states. It should remain local-safe and non-runtime.
