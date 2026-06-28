# Nexus Sprint AG1 - Field Agent Mode Runtime Activation Readiness Gate

Current base: `04f03608ef392015904fee3f800b8c5e86f34c77`

Sprint AG1 defines the minimum conditions before Field Agent Mode may move from inert readiness into any runtime-visible or runtime-connected behavior. This phase is documentation and deterministic QA only. It does not add Field Agent Mode runtime, live field connector runtime, field source connector runtime, offline capture runtime, survey connector runtime, case intake connector runtime, task assignment connector runtime, location connector runtime, camera connector runtime, microphone connector runtime, provider connector runtime, communications connector runtime, transportation connector runtime, health connector runtime, marketplace connector runtime, field dispatch execution, offline capture submission, case creation, task assignment, location sharing, camera activation, microphone activation, provider contact, call execution, message execution, WhatsApp execution, payment execution, marketplace transaction execution, healthcare action, pharmacy action, prescription action, emergency dispatch, medical records/FHIR runtime, identity/account/profile mutation, provider handoff, permission prompt, audit write, storage write, backend write, network call, typed route mutation, voice route mutation, or execution behavior.

## Relationship To Prior Lanes

Sprint AG1 follows:

- Sprint AF5 - AgriTrade Marketplace Mode Lane Closeout;
- Phase 85 - Field Agent Mode Readiness Contract.

Field Agent Mode readiness is not field dispatch authority, offline capture authority, case intake authority, task assignment authority, location authority, camera authority, microphone authority, provider authority, communications authority, transportation authority, emergency authority, medical authority, marketplace authority, identity authority, product owner approval, user consent, provider confirmation, field supervisor approval, human review approval, audit approval, or execution authority.

## Runtime Activation Preconditions

Field Agent Mode runtime must remain blocked until all of these are true:

- product owner approval for a Field Agent Mode runtime change;
- verified field source, partner, supervisor, program, case, task, or regulated source;
- verified live field connector or partner availability state;
- source attribution;
- freshness label;
- confidence label;
- user consent boundary;
- field worker role and permission check;
- supervisor or admin review path when needed;
- explicit user approval for every field, location, camera, microphone, contact, dispatch, submission, or partner-dependent action;
- provider, supervisor, program partner, transportation partner, or field operations confirmation before any partner-facing workflow;
- visible cancellation path;
- audit decision record;
- safe fallback path;
- no unsupported live claim;
- no completed action claim;
- no auto field dispatch;
- no offline capture submission;
- no case creation, task assignment, location sharing, camera activation, microphone activation, provider contact, call, message, payment, marketplace transaction, healthcare, pharmacy, prescription, refill, transportation dispatch, emergency dispatch, or account/profile mutation from Field Agent Mode;
- no communications execution;
- regression suite coverage;
- browser validation plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Sprint AG1 must not load or activate:

- `public/nexus-field-agent-mode-readiness-contract.js`;
- `NexusFieldAgentModeReadinessContract`;
- `FIELD_AGENT_MODE_READINESS_CONTRACT`;
- `field-agent-mode.readiness.phase_85`;
- Field Agent Mode runtime helpers;
- live field connector helpers;
- offline capture, case, task, location, camera, microphone, provider, transportation, emergency, communications, marketplace, or regulated execution helpers.

## Blocked Runtime Behavior

Sprint AG1 must not introduce:

- active Field Agent Mode runtime;
- live field connector activation;
- field source connector runtime;
- offline capture runtime;
- survey connector runtime;
- case intake connector runtime;
- task assignment connector runtime;
- location connector runtime;
- camera connector runtime;
- microphone connector runtime;
- provider connector runtime;
- communications connector runtime;
- transportation connector runtime;
- health connector runtime;
- marketplace connector runtime;
- field dispatch runtime;
- offline capture submission runtime;
- case creation runtime;
- task assignment runtime;
- location sharing runtime;
- camera activation runtime;
- microphone activation runtime;
- provider contact runtime;
- call execution runtime;
- message execution runtime;
- payment runtime;
- marketplace transaction runtime;
- transportation dispatch runtime;
- emergency dispatch runtime;
- medical records or FHIR access runtime;
- medical advice;
- diagnosis claims;
- prescription instructions;
- field action execution claims;
- provider contact claims;
- supervisor contact claims;
- program partner contact claims;
- location sharing claims;
- camera activation claims;
- microphone activation claims;
- source-backed field claims without sources;
- stale data claims without freshness labels;
- confidence-free field claims;
- unsupported live data claims;
- completed action claims;
- account or profile mutation claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass from Field Agent Mode metadata;
- confirmation bypass from Field Agent Mode metadata;
- permission bypass from Field Agent Mode metadata;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- fetch or network calls;
- provider handoff;
- supervisor handoff;
- field partner handoff;
- transportation partner handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- external navigation;
- real pending action creation;
- execution authority.

## Standard User Boundary

The Standard User build may continue to explain existing field support, agriculture support, crop issue guidance, workforce support, map permission, and safe source-backed agriculture support through existing app behavior, but Sprint AG1 must not add Field Agent Mode UI, new typed routing, new voice routing, field dispatch, offline capture submission, case creation, task assignment, location sharing, camera activation, microphone activation, provider handoff, identity/account/profile mutation, storage writes, or backend writes.

## Required Contract Invariants

The Phase 85 readiness contract must remain:

- `readinessStatus: "blocked"`;
- `riskTier: "high"`;
- `acceptanceTarget: "offline capture safe"`;
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

Field Agent Mode must preserve restricted boundaries around:

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

- "I can help prepare field support options."
- "Field Agent Mode is not connected yet."
- "This requires a verified field source or partner."
- "This requires role permission, consent, and approval."
- "I cannot submit field capture yet."
- "I cannot share location, use the camera, or contact a provider yet."
- "No action has been taken."

Blocked posture:

- "I dispatched a field agent."
- "I submitted your field report."
- "I created the case."
- "I assigned the task."
- "I shared your location."
- "I opened your camera."
- "I contacted the provider."
- "I sent the message."
- "I arranged transportation."
- "I completed the action."

## Browser Validation Implication

Sprint AG1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Field Agent Mode artifacts, renders Field Agent Mode UI, activates live connectors, changes typed routing, changes voice routing, changes provider/supervisor/contact/location/camera/microphone/payment/identity behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation.

## Rollback Strategy

If a future sprint accidentally turns Sprint AG artifacts into runtime authority:

1. Revert runtime wiring first.
2. Restore the Phase 85 readiness contract to blocked/no-execution defaults.
3. Restore every Field Agent Mode runtime, connector, offline capture, field source, survey, case, task, location, camera, microphone, provider contact, supervisor contact, field partner contact, transportation, marketplace, communications, storage, network, audit, and authority field to `false`.
4. Re-run Phase 85 Field Agent Mode readiness QA.
5. Re-run Sprint AG1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AG2 - Field Agent Mode Feature Flag Contract`

Sprint AG2 should add a default-off, no-execution feature flag contract for any future Field Agent Mode visibility or review surface. It must not activate field dispatch, offline capture submission, case creation, task assignment, provider contact, location sharing, camera activation, microphone activation, payments, communications, identity mutation, or Standard User runtime behavior.
