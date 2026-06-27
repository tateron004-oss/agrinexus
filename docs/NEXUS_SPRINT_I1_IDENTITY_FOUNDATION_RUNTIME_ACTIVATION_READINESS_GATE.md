# Nexus Sprint I1 - Identity Foundation Runtime Activation Readiness Gate

Current base: `6df633e43c969d9777669dfe611d661258dda87f`

Sprint I1 defines the readiness gate that must be satisfied before any Identity Foundation runtime activation can begin. This phase is documentation and deterministic QA only. It does not verify identity, collect identity documents, mutate profiles, create accounts, delete accounts, log users in, reset passwords, elevate roles, authorize providers, authorize payments, share emergency contacts, open external identity providers, use credentials, write storage, or grant execution authority.

## Existing Foundation

Sprint I1 builds on:

- Phase 46 Identity Foundation Contract;
- Phase 47 Consent Center Contract;
- Phase 48 Audit Log Runtime Contract;
- Phase 49 Approval Center Contract;
- Sprint F Approval Center readiness lane;
- Sprint G Approval Audit Persistence readiness lane;
- Sprint H Consent Center readiness lane.

The existing Phase 46 contract remains inert and no-execution by default.

## Activation Is Blocked Until

Identity Foundation runtime activation must remain blocked until all of these conditions are complete:

1. product owner approval;
2. privacy and compliance review;
3. identity provider selection or explicit no-provider policy;
4. credential handling review;
5. identity document handling review;
6. purpose-specific identity language;
7. supported-language review;
8. user-visible identity purpose and scope display;
9. explicit user approval path;
10. cancellation path;
11. retention policy;
12. redaction policy;
13. consent policy;
14. audit persistence design;
15. audit persistence approval;
16. role authorization policy;
17. account mutation policy;
18. provider authorization policy;
19. payment authorization policy;
20. emergency contact sharing policy;
21. high-risk domain restrictions;
22. browser validation plan;
23. rollback plan;
24. deterministic QA coverage.

## Runtime Must Remain Disabled

Until the readiness gate is satisfied, Nexus must keep these disabled:

- `identityContextAllowed: false`;
- `accountContextAllowed: false`;
- `roleContextAllowed: false`;
- `identityProviderConnectionEnabled: false`;
- `identityVerificationEnabled: false`;
- `identityDocumentCollectionEnabled: false`;
- `identityDocumentSharingEnabled: false`;
- `profileMutationEnabled: false`;
- `accountCreationEnabled: false`;
- `accountDeletionEnabled: false`;
- `accountLoginEnabled: false`;
- `passwordResetEnabled: false`;
- `roleElevationEnabled: false`;
- `providerAuthorizationEnabled: false`;
- `patientAuthorizationEnabled: false`;
- `paymentAuthorizationEnabled: false`;
- `emergencyContactSharingEnabled: false`;
- `externalNavigationEnabled: false`;
- `credentialUseEnabled: false`;
- `liveActionEnabled: false`;
- `noExecution: true`.

## What I1 Does Not Enable

Sprint I1 does not authorize or introduce:

- visible Identity Center UI;
- identity buttons or forms;
- identity verification;
- identity document collection;
- identity document sharing;
- profile mutation;
- account creation;
- account deletion;
- account login;
- password reset;
- role elevation;
- provider authorization;
- patient authorization;
- payment authorization;
- emergency contact sharing;
- credential use;
- consent persistence;
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
- external navigation;
- execution authority.

## Standard User Safety Posture

The Standard User build must remain unchanged:

- `public/nexus-identity-foundation-contract.js` is not loaded by `public/index.html`;
- `public/nexus-identity-foundation-contract.js` is not consumed by `public/app.js`;
- `public/nexus-identity-foundation-contract.js` is not consumed by `server.js`;
- current login/auth behavior remains governed by the existing auth gate;
- `Verify my identity` remains high-risk and permission-gated;
- `Log into my account` remains high-risk and permission-gated;
- existing browser permission prompts remain explicit and user initiated;
- low-risk previews remain governed by their existing lanes;
- high-risk and regulated actions remain blocked, permission-gated, or confirmation-gated.

## Identity Is Not Authorization

Future Identity Foundation runtime must preserve this rule:

Identity context can help Nexus prepare a safer next step, but it is not account login, account creation, profile mutation, role elevation, provider authorization, payment authorization, emergency contact sharing, medical record access, provider handoff, call, message, or execution authority by itself.

Every high-risk workflow still requires the relevant connector, consent, approval, role policy, audit coverage, provider confirmation where applicable, and execution gate.

## Browser Validation Implication

Sprint I1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads identity artifacts, displays Identity Center UI, mutates profiles, changes account/auth behavior, uses credentials, shares identity data, changes permission prompts, or changes visible Standard User behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Identity Foundation artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore `identityProviderConnectionEnabled: false`, `identityVerificationEnabled: false`, `profileMutationEnabled: false`, `accountCreationEnabled: false`, `roleElevationEnabled: false`, `paymentAuthorizationEnabled: false`, `liveActionEnabled: false`, and `noExecution: true`.
3. Re-run Phase 46 Identity Foundation contract QA.
4. Re-run Sprint I1 QA.
5. Re-run `node scripts/qa-suite.js nexus-workforce`.
6. Re-run `node scripts/qa-suite.js all-safe`.
7. Browser validate the Standard User path if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint I2 - Identity Foundation Feature Flag Contract`

Sprint I2 should remain inert. It may define a default-off Identity Foundation feature flag contract, but it must not load UI, verify identity, mutate profiles, write audit events, use credentials, request permissions, or grant execution authority.
