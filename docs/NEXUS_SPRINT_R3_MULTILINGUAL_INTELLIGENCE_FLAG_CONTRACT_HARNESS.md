# Nexus Sprint R3 - Multilingual Intelligence Flag Contract Harness

Current base: `dbe6ce4e3ade19b9fafd51bfd070f37f1b26059f`

Sprint R3 adds fixture, harness, documentation, and QA only for the Sprint R2 Multilingual Intelligence feature flag. It does not add runtime imports, Standard User UI, language engine replacement, automatic language switching, live translation providers, clinical interpretation claims, provider claims, completed action claims, storage writes, network calls, audit writes, permission prompts, or execution authority.

## Harness Artifacts

- `fixtures/nexus/multilingual-intelligence-feature-flags.json`
- `scripts/nexus-sprint-r3-multilingual-intelligence-flag-contract-harness.js`
- `scripts/nexus-sprint-r3-multilingual-intelligence-flag-contract-harness-qa.js`

## Fixture Coverage

The deterministic fixture set covers:

- default-off state;
- flag-on review-only visibility;
- unsafe attempted language, claim, provider, and execution authority fields;
- enabled without explicit visible UI permission.

## Protected Fields

Every fixture must preserve:

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

## Runtime Boundary

The harness may load `public/nexus-multilingual-intelligence-feature-flag.js` from Node-based deterministic QA only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Prohibited Behavior

Sprint R3 must not introduce:

- runtime imports;
- script tags;
- event handlers;
- live translation provider;
- automatic language switching;
- multilingual intelligence runtime UI;
- language engine replacement;
- generated translated response replacement;
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

## QA Expectations

Sprint R3 QA must verify:

- the R3 documentation exists;
- the fixture file exists;
- the harness exists;
- the fixture set includes four representative cases;
- unsafe language, clinical, provider, and execution authority attempts are represented and neutralized;
- every protected field stays false;
- `noExecution` stays true;
- the harness contains no unsafe or mutating APIs;
- Standard User runtime files do not load R2/R3 artifacts;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint R4 - Multilingual Intelligence Runtime Absence Regression Guard`

Sprint R4 should add a broader runtime absence guard proving the Multilingual Intelligence lane remains disconnected from Standard User runtime until the Sprint R1 activation gate is explicitly satisfied.
