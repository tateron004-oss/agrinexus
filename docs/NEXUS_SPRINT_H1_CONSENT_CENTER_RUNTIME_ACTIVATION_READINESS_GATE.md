# Nexus Sprint H1 - Consent Center Runtime Activation Readiness Gate

Current base: `f15daeb378b4a12533a926cbf254f6a7b763bcfa`

Sprint H1 defines the readiness gate that must be satisfied before any Consent Center runtime activation can begin. This phase is documentation and deterministic QA only. It does not create a consent store, display a Consent Center, persist consent records, write audit events, contact providers, request permissions, share data, or grant execution authority.

## Existing Foundation

Sprint H1 builds on:

- Phase 47 Consent Center Contract;
- Phase 48 Audit Log Runtime Contract;
- Phase 49 Approval Center Contract;
- Sprint E staged-action approval/audit lane;
- Sprint F Approval Center readiness lane;
- Sprint G Approval Audit Persistence readiness lane.

The existing Phase 47 contract remains inert and no-execution by default.

## Activation Is Blocked Until

Consent Center runtime activation must remain blocked until all of these conditions are complete:

1. product owner approval;
2. privacy and compliance review;
3. purpose-specific consent language;
4. supported-language review;
5. user-visible purpose and scope display;
6. explicit user approval path;
7. cancellation path;
8. revocation path;
9. retention policy;
10. redaction policy;
11. consent store design;
12. consent store security review;
13. audit persistence design;
14. audit persistence approval;
15. role and identity policy;
16. provider policy review;
17. high-risk domain restrictions;
18. browser validation plan;
19. rollback plan;
20. deterministic QA coverage.

## Runtime Must Remain Disabled

Until the readiness gate is satisfied, Nexus must keep these disabled:

- `consentStoreEnabled: false`;
- `consentPersistenceEnabled: false`;
- `consentUiEnabled: false`;
- `runtimeConsentAuthorityEnabled: false`;
- `providerContactEnabled: false`;
- `healthActionEnabled: false`;
- `telehealthActionEnabled: false`;
- `pharmacyActionEnabled: false`;
- `medicalRecordAccessEnabled: false`;
- `locationSharingEnabled: false`;
- `transportationDispatchEnabled: false`;
- `paymentExecutionEnabled: false`;
- `marketplaceTransactionEnabled: false`;
- `workforceSubmissionEnabled: false`;
- `emergencyDispatchEnabled: false`;
- `accountMutationEnabled: false`;
- `externalNavigationEnabled: false`;
- `liveActionEnabled: false`;
- `noExecution: true`.

## What H1 Does Not Enable

Sprint H1 does not authorize or introduce:

- visible Consent Center UI;
- consent buttons or forms;
- consent persistence;
- consent revocation execution;
- audit writes;
- backend writes;
- localStorage writes;
- sessionStorage writes;
- IndexedDB writes;
- network calls;
- fetch or sendBeacon calls;
- provider handoff;
- native bridge dispatch;
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
- account or identity mutation;
- external navigation;
- execution authority.

## Standard User Safety Posture

The Standard User build must remain unchanged:

- `public/nexus-consent-center-contract.js` is not loaded by `public/index.html`;
- `public/nexus-consent-center-contract.js` is not consumed by `public/app.js`;
- `public/nexus-consent-center-contract.js` is not consumed by `server.js`;
- existing health consent workflows remain separate from Consent Center runtime authority;
- existing browser permission prompts remain explicit and user initiated;
- low-risk previews remain governed by their existing lanes;
- high-risk and regulated actions remain blocked, permission-gated, or confirmation-gated.

## Consent Is Not Execution

Future Consent Center runtime must preserve this rule:

Consent can document a user's purpose-scoped permission boundary, but it is not a provider handoff, payment authorization, medical action, location share, call, message, prescription action, marketplace transaction, appointment scheduling action, emergency dispatch, or account mutation by itself.

Every high-risk workflow still requires the relevant connector, permission, approval, provider confirmation where applicable, audit coverage, and execution gate.

## Browser Validation Implication

Sprint H1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads a Consent Center runtime, displays Consent Center UI, persists consent, revokes consent, writes audit events, changes permission prompts, or changes visible Standard User behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Consent Center artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore `consentStoreEnabled: false`, `consentPersistenceEnabled: false`, `consentUiEnabled: false`, `runtimeConsentAuthorityEnabled: false`, `liveActionEnabled: false`, and `noExecution: true`.
3. Re-run Phase 47 Consent Center contract QA.
4. Re-run Sprint H1 QA.
5. Re-run `node scripts/qa-suite.js nexus-workforce`.
6. Re-run `node scripts/qa-suite.js all-safe`.
7. Browser validate the Standard User path if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint H2 - Consent Center Feature Flag Contract`

Sprint H2 should remain inert. It may define a default-off Consent Center feature flag contract, but it must not load UI, persist consent, write audit events, request permissions, or grant execution authority.
