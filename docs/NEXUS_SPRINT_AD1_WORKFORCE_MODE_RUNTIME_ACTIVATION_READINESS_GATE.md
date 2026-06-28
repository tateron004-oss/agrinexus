# Nexus Sprint AD1 - Workforce Mode Runtime Activation Readiness Gate

Current base: `c7ee4cf81e97843421c62d6d2d7b2ff6b71e0146`

Sprint AD1 defines the minimum conditions before Workforce Mode may move from inert readiness into any runtime-visible or runtime-connected behavior. This phase is documentation and deterministic QA only. It does not add Workforce Mode runtime, live workforce connector runtime, workforce program connector runtime, training provider connector runtime, certification provider connector runtime, employer connector runtime, referral connector runtime, application connector runtime, identity connector runtime, payment connector runtime, job application submission, workforce referral execution, provider contact, employer contact, background checks, credential issuance, payments, transportation dispatch, emergency dispatch, medical records/FHIR runtime, medical advice, diagnosis claims, prescription instructions, location sharing, camera activation, microphone activation, marketplace transaction execution, communications execution, storage writes, backend writes, network calls, provider handoff, typed route mutation, voice route mutation, or execution authority.

## Relationship To Prior Lanes

Sprint AD1 follows:

- Sprint AC5 - Transportation Mode Lane Closeout;
- Phase 82 - Workforce Mode Readiness Contract.

Workforce Mode readiness is not job application authority, referral authority, employer authority, training provider authority, certification authority, identity authority, payment authority, communications authority, location consent, product owner approval, user consent, provider confirmation, employer confirmation, human review approval, audit approval, or execution authority.

## Runtime Activation Preconditions

Workforce Mode runtime must remain blocked until all of these are true:

- product owner approval for a Workforce Mode runtime change;
- verified workforce, training, certification, employer, referral, or regulated source;
- verified live workforce connector or partner availability state;
- source attribution;
- freshness label;
- confidence label;
- user consent boundary;
- identity verification boundary when needed;
- role and permission check;
- explicit user approval for high-risk or partner-dependent actions;
- provider, employer, training partner, certification partner, or workforce partner confirmation before any partner-facing workflow;
- visible cancellation path;
- audit decision record;
- safe fallback path;
- no unsupported live claim;
- no completed action claim;
- no job application submission, referral execution, provider contact, employer contact, payment, medical, pharmacy, prescription, refill, transportation dispatch, emergency dispatch, location sharing, camera, microphone, marketplace execution, or account/profile mutation from Workforce Mode;
- no communications execution;
- regression suite coverage;
- browser validation plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Sprint AD1 must not load or activate:

- `public/nexus-workforce-mode-readiness-contract.js`;
- `NexusWorkforceModeReadinessContract`;
- `WORKFORCE_MODE_READINESS_CONTRACT`;
- `workforce-mode.readiness.phase_82`;
- Workforce Mode runtime helpers;
- live connector helpers;
- referral, application, certification, payment, location, provider, employer, transportation, emergency, communications, or medical execution helpers.

## Blocked Runtime Behavior

Sprint AD1 must not introduce:

- active Workforce Mode runtime;
- live workforce connector activation;
- workforce program connector runtime;
- training provider connector runtime;
- certification provider connector runtime;
- employer connector runtime;
- referral connector runtime;
- application connector runtime;
- identity connector runtime;
- payment connector runtime;
- job application submission runtime;
- workforce referral runtime;
- credential or certification issuance runtime;
- payment runtime;
- transportation dispatch runtime;
- emergency dispatch runtime;
- medical records or FHIR access runtime;
- medical advice;
- diagnosis claims;
- prescription instructions;
- workforce action execution claims;
- provider contact claims;
- employer contact claims;
- referral execution claims;
- application submission claims;
- payment execution claims;
- location sharing claims;
- camera activation claims;
- microphone activation claims;
- source-backed workforce claims without sources;
- stale data claims without freshness labels;
- confidence-free workforce claims;
- unsupported live data claims;
- provider connection claims;
- employer connection claims;
- completed action claims;
- account or profile mutation claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass from Workforce Mode metadata;
- confirmation bypass from Workforce Mode metadata;
- permission bypass from Workforce Mode metadata;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- fetch or network calls;
- provider handoff;
- employer handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- external navigation;
- real pending action creation;
- execution authority.

## Standard User Boundary

The Standard User build may continue to explain existing safe workforce guidance through existing app behavior, but Sprint AD1 must not add Workforce Mode UI, new typed routing, new voice routing, application execution, referral execution, provider handoff, employer handoff, payment handling, identity/account/profile mutation, or backend writes.

## Required Contract Invariants

The Phase 82 readiness contract must remain:

- `readinessStatus: "blocked"`;
- `riskTier: "controlled"`;
- `acceptanceTarget: "useful job pathways"`;
- `liveConnectorEnabled: false`;
- `providerExecutionEnabled: false`;
- `regulatedActionEnabled: false`;
- `silentActionAllowed: false`;
- `backgroundExecutionAllowed: false`;
- `standardUserRuntimeMutationAllowed: false`;
- `storageSideEffectAllowed: false`;
- `networkSideEffectAllowed: false`;
- `executionAllowed: false`;
- `liveActionEnabled: false`.

The factory must force unsafe override attempts back to no-execution values.

## Restricted Domains

Workforce Mode must preserve restricted boundaries around:

- healthcare;
- medical_records;
- pharmacy;
- payments;
- location;
- communications;
- provider_contact;
- marketplace_transactions;
- emergency;
- transportation_dispatch;
- identity;
- account_profile;
- role_authorization;
- regulated_execution.

## Safe Copy Boundary

Allowed posture:

- "I can help prepare workforce pathway options."
- "Workforce Mode is not connected yet."
- "This requires a verified workforce source or partner."
- "This requires consent and approval."
- "I cannot submit an application yet."
- "I cannot contact an employer or provider yet."
- "No action has been taken."

Blocked posture:

- "I submitted your application."
- "I referred you to the program."
- "I contacted the employer."
- "I contacted the training provider."
- "I issued your certificate."
- "I processed your payment."
- "I changed your account."
- "I completed the action."

## Browser Validation Implication

Sprint AD1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Workforce Mode artifacts, renders Workforce Mode UI, activates live connectors, changes typed routing, changes voice routing, changes provider/employer/contact/location/camera/microphone/payment/identity behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation.

## Rollback Strategy

If a future sprint accidentally turns Sprint AD artifacts into runtime authority:

1. Revert runtime wiring first.
2. Restore the Phase 82 readiness contract to blocked/no-execution defaults.
3. Restore every Workforce Mode runtime, connector, referral, application, certification, provider contact, employer contact, location, payment, camera, microphone, communications, storage, network, audit, and authority field to `false`.
4. Re-run Phase 82 Workforce Mode readiness QA.
5. Re-run Sprint AD1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AD2 - Workforce Mode Feature Flag Contract`

Sprint AD2 should add a default-off, no-execution feature flag contract for any future Workforce Mode visibility or review surface. It must not activate job applications, referrals, provider contact, employer contact, payments, communications, identity mutation, or Standard User runtime behavior.
