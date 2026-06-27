# Nexus Sprint Q2 - Natural Response Generation Feature Flag Contract

Current base: `b984b9d1835eed03399ddc123a20600103088008`

Sprint Q2 defines a default-off Natural Response Generation feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, replace assistant responses, call a live model, retrieve sources, render a natural response UI, write storage, write audit events, request permissions, make provider claims, claim completed actions, or execute actions.

## Purpose

Sprint Q2 turns the Sprint Q1 runtime activation readiness gate into a concrete default-off flag vocabulary for future Natural Response Generation work.

The flag exists so a later approved sprint can reason about a visible or local/test-safe Natural Response Generation review surface without confusing:

- feature flag readiness;
- visible response review UI permission;
- source trace preview permission;
- plain language preview permission;
- live response model permission;
- source retrieval runtime permission;
- unsupported claim authority;
- provider connection claim authority;
- completed action claim authority;
- medical diagnosis claim authority;
- prescription or refill claim authority;
- payment completion claim authority;
- marketplace transaction claim authority;
- emergency dispatch claim authority;
- location sharing claim authority;
- call or message sent claim authority;
- policy bypass;
- confirmation bypass;
- permission bypass;
- first-turn or later-turn execution;
- Standard User response mutation;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Feature Flag Name

`NEXUS_NATURAL_RESPONSE_GENERATION_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `responseReviewAllowed: false`;
- `plainLanguagePreviewAllowed: false`;
- `sourceTraceReviewAllowed: false`;
- `responseRuntimeAllowed: false`;
- `liveResponseModelAllowed: false`;
- `unsupportedClaimAllowed: false`;
- `providerConnectionClaimAllowed: false`;
- `completedActionClaimAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `prescriptionClaimAllowed: false`;
- `paymentCompletionClaimAllowed: false`;
- `transactionCompletionClaimAllowed: false`;
- `emergencyDispatchClaimAllowed: false`;
- `locationSharingClaimAllowed: false`;
- `callMessageSentClaimAllowed: false`;
- `sourceRetrievalRuntimeAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserResponseGeneratorMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

The inert contract module is:

`public/nexus-natural-response-generation-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate Natural Response Generation authority.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps:

- `responseReviewAllowed: false`;
- `plainLanguagePreviewAllowed: false`;
- `sourceTraceReviewAllowed: false`;
- `responseRuntimeAllowed: false`;
- `liveResponseModelAllowed: false`;
- `unsupportedClaimAllowed: false`;
- `providerConnectionClaimAllowed: false`;
- `completedActionClaimAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `prescriptionClaimAllowed: false`;
- `paymentCompletionClaimAllowed: false`;
- `transactionCompletionAllowed: false`;
- `emergencyDispatchClaimAllowed: false`;
- `locationSharingClaimAllowed: false`;
- `callMessageSentClaimAllowed: false`;
- `sourceRetrievalRuntimeAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserResponseGeneratorMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

This means flag-on visibility can only ever mean review-only readiness until a separate approved sprint changes source registry, evidence rules, response policy, permission, consent, approval, audit, browser validation, and rollback boundaries.

## Prohibited Behavior

Sprint Q2 must not add:

- runtime imports;
- script tags;
- event handlers;
- live response model;
- natural response runtime UI;
- generated response replacement;
- source retrieval runtime;
- source-backed answer claims without source traces;
- stale data claims without freshness labels;
- confidence-free source-backed claims;
- unsupported live data claims;
- provider connection claims;
- completed action claims;
- medical diagnosis claims;
- prescription or refill claims;
- payment completion claims;
- marketplace transaction claims;
- emergency dispatch claims;
- location sharing claims;
- call or message sent claims;
- regulated advice without a boundary;
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
- real pending action creation;
- execution authority.

## Relationship To Sprint Q1

Sprint Q1 remains the activation gate. Sprint Q2 only defines the default-off flag contract. Future visible or runtime Natural Response Generation work still requires every Sprint Q1 precondition, including product owner approval, evaluated response generator version, approved response generation scope, source-backed answer availability for factual claims, citation or source trace, freshness label, confidence label, unsupported claim filtering, regulated advice boundaries, policy review, permission and consent review, audit decision record for high-risk responses, no action completion claims, no provider connection claims, no diagnosis or prescription claims, browser validation, and deterministic QA coverage.

## QA Expectations

Sprint Q2 QA must verify:

- the feature flag contract doc exists;
- the feature flag module exists;
- the flag defaults off;
- flag-on test input can only expose `visibleUiAllowed: true`;
- flag-on test input cannot grant response review, plain language preview, source trace review, runtime authority, live response model, unsupported claim authority, provider connection claims, completed action claims, diagnosis claims, prescription claims, payment completion claims, transaction completion claims, emergency dispatch claims, location sharing claims, call/message sent claims, source retrieval runtime, policy bypass, confirmation bypass, permission bypass, first-turn or later-turn execution, Standard User response mutation, backend write, storage write, network, audit write, or execution authority;
- runtime files do not load the module;
- no unsafe API or execution hook is introduced;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint Q3 - Natural Response Generation Flag Contract Harness`

Sprint Q3 should add deterministic fixtures for flag-off, flag-on-review-only, and unsafe attempted authority states. It should remain local-safe and non-runtime.
