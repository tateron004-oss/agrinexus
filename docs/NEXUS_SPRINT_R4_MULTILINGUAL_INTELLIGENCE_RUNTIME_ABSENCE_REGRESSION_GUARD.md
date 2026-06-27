# Nexus Sprint R4 - Multilingual Intelligence Runtime Absence Regression Guard

Current base: `aa7ad22959b35a579a23a91e3494560d0046fa05`

Sprint R4 adds a deterministic regression guard proving the Multilingual Intelligence readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, language engine replacement, automatic language switching, live translation provider calls, clinical interpretation claims, provider claims, completed action claims, network calls, storage writes, backend writes, permission prompts, audit writes, provider execution, or execution behavior.

## Purpose

Prevent accidental drift where Multilingual Intelligence readiness artifacts become runtime activation.

Sprint R4 protects:

- R1 Multilingual Intelligence runtime activation readiness gate;
- R2 Multilingual Intelligence feature flag contract;
- R3 Multilingual Intelligence flag contract harness;
- Phase 70 Multilingual Intelligence readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-multilingual-intelligence-readiness-contract.js`;
- `public/nexus-multilingual-intelligence-feature-flag.js`;
- `scripts/nexus-sprint-r3-multilingual-intelligence-flag-contract-harness.js`;
- `fixtures/nexus/multilingual-intelligence-feature-flags.json`;
- Sprint R QA scripts.

The guard checks exact Multilingual Intelligence artifact names and helpers. It intentionally does not ban generic words such as `language`, `locale`, `translate`, `voice`, `route`, `settings`, `Spanish`, `French`, `Arabic`, `Portuguese`, or `Swahili`, because existing language, voice, accessibility, route, and settings behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint R artifacts must not introduce:

- live translation provider;
- active multilingual intelligence runtime;
- multilingual intelligence runtime UI;
- language engine replacement;
- automatic language switching;
- generated translated response replacement;
- language review buttons;
- source trace language preview UI;
- localized response preview UI;
- source retrieval runtime;
- clinical interpretation claims;
- medical translation certification claims;
- source-backed answer claims without sources;
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
- event handlers;
- typed route mutation;
- voice route mutation;
- automatic route changes from translated text;
- policy bypass from translated text;
- confirmation bypass from translated text;
- permission bypass from translated text;
- ambiguous prompt execution;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- fetch or network calls;
- provider handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- payment execution;
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

## Required Contract Invariants

The guard confirms the R2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
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

The guard confirms the R3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Multilingual Intelligence runtime is active;
- no Multilingual Intelligence review surface appears from Sprint R artifacts;
- no source trace language preview surface appears from Sprint R artifacts;
- no localized response preview surface appears from Sprint R artifacts;
- no live translation provider is loaded by Sprint R artifacts;
- no language engine replacement is performed by Sprint R artifacts;
- no automatic language switch is performed by Sprint R artifacts;
- no typed or voice route is changed by Sprint R artifacts;
- no source retrieval runtime is performed by Sprint R artifacts;
- no clinical interpretation or medical certification claim is possible from Sprint R artifacts;
- no unsupported live data claim is possible from Sprint R artifacts;
- no provider connection claim is possible from Sprint R artifacts;
- no completed action claim is possible from Sprint R artifacts;
- no diagnosis, prescription, payment, transaction, dispatch, call, message, or location-sharing claim is possible from Sprint R artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint R artifacts;
- no audit event is written by Sprint R artifacts;
- existing language selector, voice, accessibility, login, confirmation, session memory, route, planner, source-backed agriculture, and permission behavior remains separate from Multilingual Intelligence runtime authority.

## Browser Validation Implication

Sprint R4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Multilingual Intelligence artifacts, renders multilingual UI, activates a live translation provider, changes typed routing, changes voice routing, changes source-backed answer behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- supported language prompt checks;
- language-switch prompt checks;
- source-backed answer checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- language review/cancel checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint R4 QA must verify:

- this regression guard exists;
- R1, R2, R3, and Phase 70 artifacts exist;
- runtime files do not load Multilingual Intelligence contracts, feature flags, fixtures, or harnesses;
- R2 default and unsafe-attempt behavior remains no-execution;
- R3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint R5 - Multilingual Intelligence Lane Closeout`

Sprint R5 should close the Multilingual Intelligence readiness lane, summarize R1-R4, and recommend the next safe inert lane without activating runtime behavior.
