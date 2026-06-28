# Nexus Sprint AE1 - Education Mode Runtime Activation Readiness Gate

Current base: `ad7492d4f3672261dfc71051938d14813258772c`

Sprint AE1 defines the minimum conditions before Education Mode may move from inert readiness into any runtime-visible or runtime-connected behavior. This phase is documentation and deterministic QA only. It does not add Education Mode runtime, live education connector runtime, education content provider connector runtime, training provider connector runtime, certification provider connector runtime, enrollment connector runtime, identity connector runtime, payment connector runtime, communications connector runtime, transportation connector runtime, health connector runtime, course enrollment, course registration, certificate issuance, provider contact, training provider contact, education partner contact, location sharing, camera activation, microphone activation, payment execution, marketplace transaction execution, communications execution, transportation dispatch, emergency dispatch, medical records/FHIR runtime, medical advice, diagnosis claims, prescription instructions, identity/account/profile mutation, provider handoff, permission prompt, audit write, storage write, backend write, network call, typed route mutation, voice route mutation, or execution behavior.

## Relationship To Prior Lanes

Sprint AE1 follows:

- Sprint AD5 - Workforce Mode Lane Closeout;
- Phase 83 - Education Mode Readiness Contract.

Education Mode readiness is not enrollment authority, course registration authority, certification authority, content provider authority, training provider authority, identity authority, payment authority, communications authority, transportation authority, emergency authority, medical authority, location consent, product owner approval, user consent, provider confirmation, training partner confirmation, human review approval, audit approval, or execution authority.

## Runtime Activation Preconditions

Education Mode runtime must remain blocked until all of these are true:

- product owner approval for an Education Mode runtime change;
- verified education, learning, training, certification, content, or regulated source;
- verified live education connector or partner availability state;
- source attribution;
- freshness label;
- confidence label;
- user consent boundary;
- identity verification boundary when needed;
- role and permission check;
- explicit user approval for high-risk or partner-dependent actions;
- provider, training partner, certification partner, content partner, or education partner confirmation before any partner-facing workflow;
- visible cancellation path;
- audit decision record;
- safe fallback path;
- no unsupported live claim;
- no completed action claim;
- no course enrollment, course registration, certificate issuance, provider contact, training provider contact, education partner contact, payment, medical, pharmacy, prescription, refill, transportation dispatch, emergency dispatch, location sharing, camera, microphone, marketplace execution, or account/profile mutation from Education Mode;
- no communications execution;
- regression suite coverage;
- browser validation plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Sprint AE1 must not load or activate:

- `public/nexus-education-mode-readiness-contract.js`;
- `NexusEducationModeReadinessContract`;
- `EDUCATION_MODE_READINESS_CONTRACT`;
- `education-mode.readiness.phase_83`;
- Education Mode runtime helpers;
- live connector helpers;
- enrollment, registration, certification, payment, location, provider, training provider, transportation, emergency, communications, or medical execution helpers.

## Blocked Runtime Behavior

Sprint AE1 must not introduce:

- active Education Mode runtime;
- live education connector activation;
- education content provider connector runtime;
- training provider connector runtime;
- certification provider connector runtime;
- enrollment connector runtime;
- identity connector runtime;
- payment connector runtime;
- communications connector runtime;
- transportation connector runtime;
- health connector runtime;
- course enrollment runtime;
- course registration runtime;
- certificate issuance runtime;
- payment runtime;
- transportation dispatch runtime;
- emergency dispatch runtime;
- medical records or FHIR access runtime;
- medical advice;
- diagnosis claims;
- prescription instructions;
- education action execution claims;
- provider contact claims;
- training provider contact claims;
- education partner contact claims;
- enrollment execution claims;
- registration execution claims;
- certificate issuance claims;
- payment execution claims;
- location sharing claims;
- camera activation claims;
- microphone activation claims;
- source-backed education claims without sources;
- stale data claims without freshness labels;
- confidence-free education claims;
- unsupported live data claims;
- provider connection claims;
- training partner connection claims;
- completed action claims;
- account or profile mutation claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass from Education Mode metadata;
- confirmation bypass from Education Mode metadata;
- permission bypass from Education Mode metadata;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- fetch or network calls;
- provider handoff;
- training partner handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- external navigation;
- real pending action creation;
- execution authority.

## Standard User Boundary

The Standard User build may continue to explain existing safe learning and training guidance through existing app behavior, but Sprint AE1 must not add Education Mode UI, new typed routing, new voice routing, enrollment execution, registration execution, certificate issuance, provider handoff, training partner handoff, payment handling, identity/account/profile mutation, or backend writes.

## Required Contract Invariants

The Phase 83 readiness contract must remain:

- `readinessStatus: "blocked"`;
- `riskTier: "low"`;
- `acceptanceTarget: "learning available"`;
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

Education Mode must preserve restricted boundaries around:

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

- "I can help prepare learning options."
- "Education Mode is not connected yet."
- "This requires a verified education source or partner."
- "This requires consent and approval."
- "I cannot enroll you in a course yet."
- "I cannot contact a provider or training partner yet."
- "No action has been taken."

Blocked posture:

- "I enrolled you in the course."
- "I registered you for the program."
- "I contacted the provider."
- "I contacted the training partner."
- "I issued your certificate."
- "I processed your payment."
- "I changed your account."
- "I completed the action."

## Browser Validation Implication

Sprint AE1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Education Mode artifacts, renders Education Mode UI, activates live connectors, changes typed routing, changes voice routing, changes provider/training partner/contact/location/camera/microphone/payment/identity behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation.

## Rollback Strategy

If a future sprint accidentally turns Sprint AE artifacts into runtime authority:

1. Revert runtime wiring first.
2. Restore the Phase 83 readiness contract to blocked/no-execution defaults.
3. Restore every Education Mode runtime, connector, enrollment, registration, certification, provider contact, training provider contact, education partner contact, location, payment, camera, microphone, communications, storage, network, audit, and authority field to `false`.
4. Re-run Phase 83 Education Mode readiness QA.
5. Re-run Sprint AE1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AE2 - Education Mode Feature Flag Contract`

Sprint AE2 should add a default-off, no-execution feature flag contract for any future Education Mode visibility or review surface. It must not activate course enrollment, course registration, certification issuance, provider contact, training partner contact, payments, communications, identity mutation, or Standard User runtime behavior.
