# Nexus Sprint K1 - Personalization Runtime Activation Readiness Gate

Current base: `5e8818ec7eeb16b3fce06e34aa2705ddf2ba6d17`

Sprint K1 defines the readiness gate that must be satisfied before any Personalization runtime activation can begin. This phase is documentation and deterministic QA only. It does not personalize the Standard User runtime, save preferences, load preferences, infer hidden preferences, mutate risk tiers, alter routing, change assistant behavior, write storage, write audit events, contact providers, or grant execution authority.

## Relationship To Prior Lanes

Sprint K1 starts after:

- Sprint J5 - User Profile Lane Closeout;
- Phase 63 - Personalization Readiness Contract.

User Profile readiness is not personalization authority. Future personalization must still earn explicit consent, visible purpose, visible preference fields, edit/delete/reset controls, retention rules, redaction rules, audit coverage, and a clear non-authoritative preference boundary.

## Runtime Activation Preconditions

Personalization runtime activation must remain blocked until all of these conditions are complete:

- product owner approval for a visible personalization surface;
- privacy and compliance review;
- explicit personalization consent;
- visible personalization purpose;
- visible preference fields;
- preference source ownership model;
- preference access scope model;
- preference retention policy;
- preference redaction policy;
- preference edit control;
- preference delete control;
- preference reset control;
- consent revocation path;
- user override control;
- source attribution when preferences affect source-backed guidance;
- audit event contract before preference persistence or sharing;
- non-authoritative preference rule;
- no preference based execution;
- no hidden personalization;
- no risk tier changes from preferences;
- no profile-derived execution;
- no provider handoff from preferences;
- no health, payment, location, marketplace, emergency, identity, account, or role authority from preferences;
- browser validation plan;
- rollback plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Until those preconditions are complete, the following must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-personalization-readiness-contract.js`;
- any future Personalization feature flag module;
- any future Personalization fixture harness;
- Sprint K QA scripts.

The existing Phase 63 contract may be loaded by deterministic QA only.

## Blocked Runtime Behavior

Sprint K1 does not authorize:

- visible personalization center UI;
- preference buttons;
- preference forms;
- preference event handlers;
- hidden personalization;
- automatic personalization;
- preference persistence;
- preference sync;
- profile-derived execution;
- preference-derived provider handoff;
- risk tier mutation;
- storage writes;
- network calls;
- backend writes;
- audit writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- preference-based routing;
- preference-based confirmation bypass;
- preference-based permission bypass;
- role or permission elevation;
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

## Standard User Boundary

The Standard User build must keep:

- existing visible behavior unchanged;
- existing low-risk previews and controlled action behavior unchanged;
- no Personalization runtime surface;
- no preference storage or mutation from Personalization artifacts;
- no automatic response tailoring from preference context;
- no execution authority from profile or preference context;
- no provider/contact/payment/health/location/marketplace/emergency authority from preferences;
- existing confirmation and permission gates untouched.

## Required Contract Invariants

The Phase 63 Personalization Readiness Contract must continue to preserve:

- `preferenceEngineEnabled: false`;
- `automaticPersonalizationEnabled: false`;
- `hiddenPersonalizationEnabled: false`;
- `preferencePersistenceEnabled: false`;
- `preferenceSyncEnabled: false`;
- `profileDerivedExecutionEnabled: false`;
- `providerHandoffEnabled: false`;
- `riskTierMutationEnabled: false`;
- `standardUserPreferenceMutationAllowed: false`;
- `executionAllowed: false`;
- `liveActionEnabled: false`.

Future overrides must not be able to turn those fields on until a later approved activation phase changes the contract intentionally with new QA.

## Browser Validation Implication

Sprint K1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads Personalization artifacts, renders personalization UI, stores preferences, mutates preferences, personalizes from preference context, changes routing, changes Standard User visible behavior, or changes assistant response behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Personalization artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Phase 63 contract no-execution defaults.
3. Restore `preferenceEngineEnabled: false`, `automaticPersonalizationEnabled: false`, `hiddenPersonalizationEnabled: false`, `preferencePersistenceEnabled: false`, `providerHandoffEnabled: false`, `riskTierMutationEnabled: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 63 Personalization readiness QA.
5. Re-run Sprint K1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint K2 - Personalization Feature Flag Contract`

Sprint K2 should remain inert. It may define a default-off Personalization feature flag contract, but it must not load UI, store preferences, mutate preferences, personalize automatically, write audit events, use credentials, request permissions, or grant execution authority.
