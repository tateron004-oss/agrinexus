# Nexus Sprint R2 - Multilingual Intelligence Feature Flag Contract

Current base: `6fb905ce30e2db7a131424809d65b522c205d975`

Sprint R2 defines a default-off Multilingual Intelligence feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, change active language switching, replace voice or typed routing, call translation providers, render a multilingual intelligence UI, write storage, write audit events, request permissions, make clinical interpretation claims, make provider claims, claim completed actions, or execute actions.

## Purpose

Sprint R2 turns the Sprint R1 runtime activation readiness gate into a concrete default-off flag vocabulary for future Multilingual Intelligence work.

The flag exists so a later approved sprint can reason about a visible or local/test-safe multilingual review surface without confusing:

- feature flag readiness;
- visible language review UI permission;
- localized response preview permission;
- source trace language review permission;
- live translation provider permission;
- automatic language switching permission;
- clinical interpretation claim authority;
- medical translation certification claim authority;
- provider execution from language switch authority;
- call or message execution from language switch authority;
- payment execution from language switch authority;
- regulated translation execution authority;
- emergency dispatch translation authority;
- location or camera activation from language switch authority;
- policy bypass;
- confirmation bypass;
- permission bypass;
- first-turn or later-turn execution;
- Standard User language engine mutation;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Feature Flag Name

`NEXUS_MULTILINGUAL_INTELLIGENCE_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `languageReviewAllowed: false`;
- `localizedResponsePreviewAllowed: false`;
- `sourceTraceLanguageReviewAllowed: false`;
- `languageRuntimeAllowed: false`;
- `liveTranslationProviderAllowed: false`;
- `automaticLanguageSwitchingAllowed: false`;
- `clinicalInterpretationClaimAllowed: false`;
- `medicalTranslationCertificationClaimAllowed: false`;
- `providerExecutionFromLanguageSwitchAllowed: false`;
- `callMessageExecutionFromLanguageSwitchAllowed: false`;
- `paymentExecutionFromLanguageSwitchAllowed: false`;
- `regulatedTranslationExecutionAllowed: false`;
- `emergencyDispatchTranslationAllowed: false`;
- `locationCameraActivationFromLanguageSwitchAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserLanguageEngineMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

The inert contract module is:

`public/nexus-multilingual-intelligence-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate Multilingual Intelligence authority.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps:

- `languageReviewAllowed: false`;
- `localizedResponsePreviewAllowed: false`;
- `sourceTraceLanguageReviewAllowed: false`;
- `languageRuntimeAllowed: false`;
- `liveTranslationProviderAllowed: false`;
- `automaticLanguageSwitchingAllowed: false`;
- `clinicalInterpretationClaimAllowed: false`;
- `medicalTranslationCertificationClaimAllowed: false`;
- `providerExecutionFromLanguageSwitchAllowed: false`;
- `callMessageExecutionFromLanguageSwitchAllowed: false`;
- `paymentExecutionFromLanguageSwitchAllowed: false`;
- `regulatedTranslationExecutionAllowed: false`;
- `emergencyDispatchTranslationAllowed: false`;
- `locationCameraActivationFromLanguageSwitchAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserLanguageEngineMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

This means flag-on visibility can only ever mean review-only readiness until a separate approved sprint changes localization partner review, source trace preservation, confidence/freshness preservation, clinical interpretation boundaries, permission, consent, approval, audit, browser validation, and rollback boundaries.

## Prohibited Behavior

Sprint R2 must not add:

- runtime imports;
- script tags;
- event handlers;
- live translation provider;
- automatic language switching;
- multilingual intelligence runtime UI;
- generated translated response replacement;
- language engine replacement;
- source retrieval runtime;
- clinical interpretation claims;
- medical translation certification claims;
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

## Relationship To Sprint R1

Sprint R1 remains the activation gate. Sprint R2 only defines the default-off flag contract. Future visible or runtime Multilingual Intelligence work still requires every Sprint R1 precondition, including product owner approval, approved supported language list, reviewed locale detection boundary, user-selected language path, translation review path, clinical interpretation boundary, source trace preservation, freshness and confidence preservation, fallback text path, human language support escalation copy, regulated language use audit decision record, no medical interpretation claim, no provider execution from language switch, browser validation, and deterministic QA coverage.

## QA Expectations

Sprint R2 QA must verify:

- the feature flag contract doc exists;
- the feature flag module exists;
- the flag defaults off;
- flag-on test input can only expose `visibleUiAllowed: true`;
- flag-on test input cannot grant language review, localized response preview, source trace language review, runtime authority, live translation provider, automatic language switching, clinical interpretation claim authority, medical translation certification authority, provider execution from language switch, call/message execution from language switch, payment execution from language switch, regulated translation execution, emergency dispatch translation, location/camera activation from language switch, policy bypass, confirmation bypass, permission bypass, first-turn or later-turn execution, Standard User language engine mutation, backend write, storage write, network, audit write, or execution authority;
- runtime files do not load the module;
- no unsafe API or execution hook is introduced;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint R3 - Multilingual Intelligence Flag Contract Harness`

Sprint R3 should add deterministic fixtures for flag-off, flag-on-review-only, and unsafe attempted authority states. It should remain local-safe and non-runtime.
