# Nexus Sprint O1 - Tool Provider Selection Runtime Activation Readiness Gate

Current base: `ebd18ae983161ba5691c3ed4457c48386cc69d4c`

Sprint O1 defines the readiness gate that must be satisfied before Tool/Provider Selection can affect the Standard User runtime. This phase is documentation and deterministic QA only. It does not add a live provider selection engine, connector picker UI, raw adapter calls, provider calls from raw intent, silent provider handoff, automatic connector execution, provider credential use, typed route mutation, voice route mutation, storage writes, network calls, backend writes, audit writes, permission prompts, route changes, or execution behavior.

## Relationship To Prior Lanes

Sprint O1 starts after:

- Sprint N5 - Task Planning Lane Closeout;
- Phase 67 - Tool/Provider Selection Readiness Contract.

Task Planning readiness is not provider selection authority. Future tool/provider selection may help Nexus identify safe connector paths, but a selected provider path must never become consent, permission, provider authorization, credential use, handoff approval, or execution approval.

## Runtime Activation Preconditions

Tool/Provider Selection runtime activation must remain blocked until all of these conditions are complete:

- product owner approval for a selection runtime change;
- evaluated selection engine version;
- connector registry entry for every selectable provider;
- selected tool id trace;
- provider availability state;
- policy gate decision;
- risk tier for selected connector;
- permission state for selected connector;
- consent state for selected connector;
- visible provider display;
- visible action type display;
- visible purpose and consequence display;
- fallback provider path;
- unsupported provider path;
- explicit approval for high-risk handoff;
- cancellation path;
- audit decision record;
- no raw adapter calls;
- no provider selection from raw intent;
- no silent provider handoff;
- no first-turn provider execution;
- no later-turn provider execution without current approval;
- representative prompt set;
- multilingual prompt coverage;
- Standard User prompt coverage;
- voice prompt coverage;
- typed prompt coverage;
- ambiguity fallback;
- rollback plan;
- regression suite coverage;
- browser validation plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Until those preconditions are complete, the following must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-tool-provider-selection-readiness-contract.js`;
- any future Tool/Provider Selection runtime engine module;
- any future provider selection adapter;
- any future tool/provider selection feature flag module;
- any future tool/provider selection fixture harness;
- Sprint O QA scripts.

The existing Phase 67 contract may be loaded by deterministic QA only.

## Blocked Runtime Behavior

Sprint O1 does not authorize:

- live provider selection engine;
- connector picker runtime UI;
- raw adapter calls;
- provider calls from raw intent;
- silent provider handoff;
- automatic connector execution;
- provider credential use;
- payment provider selection;
- medical or pharmacy provider execution;
- emergency provider dispatch;
- transportation dispatch provider execution;
- contact or message provider execution;
- location or camera provider activation;
- plan-based provider selection;
- context-based provider selection;
- selectedToolId execution authority;
- policy bypass from selected provider metadata;
- confirmation bypass from selected provider metadata;
- permission bypass from selected provider metadata;
- source-backed answer claims without sources;
- medical diagnosis from a selected provider;
- pharmacy or prescription execution from a selected provider;
- payment or marketplace transaction execution from a selected provider;
- emergency dispatch from a selected provider;
- contact or message execution from a selected provider;
- location or camera activation from a selected provider;
- identity verification from a selected provider;
- role or permission elevation from a selected provider;
- Standard User runtime provider selection changes;
- storage writes;
- fetch or network calls;
- backend writes;
- audit writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
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
- existing typed and voice command routing unchanged;
- existing low-risk previews and controlled action behavior unchanged;
- existing clarification behavior for ambiguous prompts;
- no Tool/Provider Selection runtime surface;
- no provider selection engine module loaded;
- no provider selection adapter loaded;
- no selectedToolId-driven route mutation;
- no selectedToolId-driven risk tier mutation;
- no selectedToolId-driven provider handoff;
- no selectedToolId-driven execution, staging, or confirmation bypass;
- no provider/contact/payment/health/location/marketplace/emergency authority from selected provider metadata;
- existing confirmation and permission gates untouched.

## Required Contract Invariants

The Phase 67 Tool/Provider Selection Readiness Contract must continue to preserve:

- `liveSelectionEngineEnabled: false`;
- `rawAdapterCallsEnabled: false`;
- `providerCallsFromRawIntentEnabled: false`;
- `silentProviderHandoffEnabled: false`;
- `automaticConnectorExecutionEnabled: false`;
- `providerCredentialUseEnabled: false`;
- `standardUserSelectionMutationAllowed: false`;
- `executionAllowed: false`;
- `liveActionEnabled: false`.

Future overrides must not be able to turn those fields on until a later approved activation phase changes the contract intentionally with new QA.

## Restricted Domains

Future tool/provider selection improvements must not infer execution authority in:

- healthcare;
- medical records;
- pharmacy;
- payments;
- location;
- communications;
- provider contact;
- marketplace transactions;
- emergency;
- transportation dispatch;
- identity;
- account profile;
- role authorization;
- minors and family support.

## Safe Copy Boundary

Nexus may say:

> I can identify a possible provider path, but I will not contact or open a provider until the required gates are satisfied.

Nexus must not say:

- I selected and opened the provider;
- I contacted that provider;
- I used this connector automatically;
- I used provider metadata as permission;
- I already called, messaged, paid, scheduled, shared, dispatched, or opened a provider.

## Browser Validation Implication

Sprint O1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads provider selection runtime artifacts, changes typed routing, changes voice routing, changes Standard User visible behavior, renders provider selection UI, stages actions from selected providers, writes audit events, changes permission prompts, changes risk classification, or opens a provider path must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- provider review/cancel checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Tool/Provider Selection artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Phase 67 contract no-execution defaults.
3. Restore `liveSelectionEngineEnabled: false`, `rawAdapterCallsEnabled: false`, `providerCallsFromRawIntentEnabled: false`, `silentProviderHandoffEnabled: false`, `automaticConnectorExecutionEnabled: false`, `providerCredentialUseEnabled: false`, `standardUserSelectionMutationAllowed: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 67 Tool/Provider Selection readiness QA.
5. Re-run Sprint O1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior or routing changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint O2 - Tool Provider Selection Feature Flag Contract`

Sprint O2 should remain inert. It may define a default-off Tool/Provider Selection feature flag contract, but it must not load provider selection runtime, call raw adapters, open providers, use credentials, request permissions, write audit events, or grant execution authority.
