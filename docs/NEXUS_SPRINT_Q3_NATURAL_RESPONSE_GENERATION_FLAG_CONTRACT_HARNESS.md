# Nexus Sprint Q3 - Natural Response Generation Flag Contract Harness

Current base: `08f1fae5e79e44b127ab56fed1e93175c81dd6a2`

Sprint Q3 adds fixture, harness, documentation, and QA only for the Sprint Q2 Natural Response Generation feature flag. It does not add runtime imports, Standard User UI, generated response replacement, live model calls, source retrieval, provider claims, completed action claims, storage writes, network calls, audit writes, permission prompts, or execution authority.

## Harness Artifacts

- `fixtures/nexus/natural-response-generation-feature-flags.json`
- `scripts/nexus-sprint-q3-natural-response-generation-flag-contract-harness.js`
- `scripts/nexus-sprint-q3-natural-response-generation-flag-contract-harness-qa.js`

## Fixture Coverage

The deterministic fixture set covers:

- default-off state;
- flag-on review-only visibility;
- unsafe attempted claim and execution authority fields;
- enabled without explicit visible UI permission.

## Protected Fields

Every fixture must preserve:

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

## Runtime Boundary

The harness may load `public/nexus-natural-response-generation-feature-flag.js` from Node-based deterministic QA only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Prohibited Behavior

Sprint Q3 must not introduce:

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

## QA Expectations

Sprint Q3 QA must verify:

- the Q3 documentation exists;
- the fixture file exists;
- the harness exists;
- the fixture set includes four representative cases;
- unsafe claim and execution authority attempts are represented and neutralized;
- every protected field stays false;
- `noExecution` stays true;
- the harness contains no unsafe or mutating APIs;
- Standard User runtime files do not load Q2/Q3 artifacts;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint Q4 - Natural Response Generation Runtime Absence Regression Guard`

Sprint Q4 should add a broader runtime absence guard proving the Natural Response Generation lane remains disconnected from Standard User runtime until the Sprint Q1 activation gate is explicitly satisfied.
