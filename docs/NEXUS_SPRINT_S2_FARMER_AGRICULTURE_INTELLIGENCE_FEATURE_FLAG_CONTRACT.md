# Nexus Sprint S2 - Farmer Agriculture Intelligence Feature Flag Contract

Current base: `a80ae71258285234072df8e27aef4265adb476ef`

Sprint S2 defines a default-off Farmer Agriculture Intelligence feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, change agriculture command routing, replace source-backed agriculture previews, call agriculture providers, render a farmer agriculture intelligence UI, write storage, write audit events, request permissions, make unsourced agriculture claims, make chemical application claims, make provider claims, claim completed actions, or execute actions.

## Purpose

Sprint S2 turns the Sprint S1 runtime activation readiness gate into a concrete default-off flag vocabulary for future Farmer Agriculture Intelligence work.

The flag exists so a later approved sprint can reason about a visible or local/test-safe agriculture review surface without confusing:

- feature flag readiness;
- visible agriculture review UI permission;
- source-backed guidance preview permission;
- farmer summary preview permission;
- extension escalation preview permission;
- live agriculture advisor permission;
- source retrieval runtime permission;
- unsourced agriculture advice authority;
- chemical application instruction authority;
- diagnosis claim authority;
- marketplace transaction authority;
- payment execution authority;
- provider or extension contact authority;
- weather or pest live claim authority;
- location sharing authority;
- crop insurance filing authority;
- policy bypass;
- confirmation bypass;
- permission bypass;
- first-turn or later-turn execution;
- Standard User agriculture brain mutation;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Feature Flag Name

`NEXUS_FARMER_AGRICULTURE_INTELLIGENCE_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `agricultureReviewAllowed: false`;
- `sourceBackedGuidancePreviewAllowed: false`;
- `farmerSummaryPreviewAllowed: false`;
- `extensionEscalationPreviewAllowed: false`;
- `agricultureRuntimeAllowed: false`;
- `liveAgricultureAdvisorAllowed: false`;
- `sourceRetrievalRuntimeAllowed: false`;
- `unsourcedAgricultureAdviceAllowed: false`;
- `chemicalApplicationInstructionAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `paymentExecutionAllowed: false`;
- `providerOrExtensionContactAllowed: false`;
- `weatherOrPestLiveClaimAllowed: false`;
- `locationSharingAllowed: false`;
- `cropInsuranceFilingAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserAgricultureBrainMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

The inert contract module is:

`public/nexus-farmer-agriculture-intelligence-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate Farmer Agriculture Intelligence authority.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps every authority field false. Flag-on visibility can only ever mean review-only readiness until a separate approved sprint changes source verification, freshness, confidence, regional context, extension escalation, marketplace, payment, provider contact, audit, browser validation, and rollback boundaries.

## Prohibited Behavior

Sprint S2 must not add:

- runtime imports;
- script tags;
- event handlers;
- live agriculture advisor;
- agriculture intelligence runtime UI;
- generated agriculture advice replacement;
- agriculture brain replacement;
- source retrieval runtime;
- unsourced agriculture claims;
- chemical application claims;
- unsupported live data claims;
- provider connection claims;
- completed action claims;
- marketplace transaction claims;
- payment completion claims;
- location sharing claims;
- call or message sent claims;
- crop insurance filing claims;
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

## Relationship To Sprint S1

Sprint S1 remains the activation gate. Sprint S2 only defines the default-off flag contract. Future visible or runtime Farmer Agriculture Intelligence work still requires every Sprint S1 precondition, including product owner approval, verified agriculture source registry, source attribution, freshness and confidence labels, regional context, crop or livestock context, plain-language farmer summary, extension escalation copy, marketplace and payment boundaries, weather or pest source trace, human expert escalation, audit decision record, no diagnosis or chemical application claim, browser validation, and deterministic QA coverage.

## QA Expectations

Sprint S2 QA must verify:

- the feature flag contract doc exists;
- the feature flag module exists;
- the module defaults to disabled and no-execution;
- visible-only enabled state does not grant authority fields;
- unsafe authority attempts normalize back to false;
- the module does not include browser, storage, network, native bridge, route, provider, permission, marketplace, payment, location, camera, or execution APIs;
- `public/index.html`, `public/app.js`, and `server.js` do not load the module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint S3 - Farmer Agriculture Intelligence Flag Contract Harness`
