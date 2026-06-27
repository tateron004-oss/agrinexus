# Nexus Sprint S1 - Farmer Agriculture Intelligence Runtime Activation Readiness Gate

Current base: `874bc1669178fe006bf7ad8e76097f32c797c658`

Sprint S1 creates the runtime activation readiness gate for future Farmer Agriculture Intelligence work. This phase is documentation and deterministic QA only. It does not import an agriculture intelligence runtime, change active agriculture command routing, replace source-backed agriculture previews, call live agriculture providers, write storage, write audit events, request permissions, make unsourced agronomy claims, make chemical application claims, make provider claims, or execute actions.

## Relationship To Prior Lanes

Sprint S1 starts after:

- Sprint R5 - Multilingual Intelligence Lane Closeout;
- Phase 71 - Farmer Agriculture Intelligence Readiness Contract.

Multilingual readiness is not farmer agriculture authority. Farmer Agriculture Intelligence must never become source authority, operational agronomy authority, chemical application authority, extension provider authorization, marketplace transaction approval, payment completion, insurance filing authority, location sharing approval, communication completion, or execution approval.

## Runtime Activation Preconditions

Future Farmer Agriculture Intelligence runtime work must not activate until all of the following are true:

- product owner approval for an agriculture intelligence runtime change;
- verified agriculture source registry;
- source attribution;
- freshness label;
- confidence label;
- regional context boundary;
- crop or livestock context boundary;
- plain-language farmer summary copy;
- extension service escalation copy;
- marketplace transaction boundary;
- payment boundary;
- weather or pest source trace;
- human expert escalation path;
- audit decision record for high-risk agriculture guidance;
- no diagnosis or chemical application claim;
- no unsourced crop or livestock claim;
- no marketplace buy or sell execution;
- no payment execution;
- no provider or extension contact execution;
- no weather or pest live-data claim without source trace;
- no location sharing for field visits;
- no insurance or regulated filing action;
- Standard User runtime agriculture brain mutation approval;
- representative prompt set;
- crop issue prompt coverage;
- livestock prompt coverage;
- training prompt coverage;
- AgriTrade prompt coverage;
- source-backed answer prompt coverage;
- stale source fallback coverage;
- confidence fallback coverage;
- ambiguity fallback;
- regression suite coverage;
- browser validation plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Sprint S1 must not load or activate:

- `public/nexus-farmer-agriculture-intelligence-readiness-contract.js`;
- any future Farmer Agriculture Intelligence feature flag;
- any future Farmer Agriculture Intelligence fixture harness;
- any future live agriculture advisor runtime;
- any future agriculture source retrieval runtime;
- any future extension provider handoff runtime;
- any provider execution runtime;
- Sprint S QA scripts.

These artifacts must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Blocked Runtime Behavior

Sprint S1 must not introduce:

- live agriculture advisor execution;
- unsourced crop or livestock claims;
- unsourced agronomy recommendations;
- chemical application instructions;
- diagnosis or treatment claims for crops or livestock;
- marketplace buy or sell execution;
- payment execution;
- provider or extension contact execution;
- weather or pest live-data claims without source trace;
- location sharing for field visits;
- insurance or regulated filing actions;
- Standard User runtime agriculture brain mutation;
- hidden agriculture intelligence metadata UI;
- unsupported live data claims;
- provider connection claims;
- completed action claims;
- prescription or refill claims;
- payment completion claims;
- marketplace transaction claims;
- emergency dispatch claims;
- location sharing claims;
- call or message sent claims;
- source-backed answer claims without sources;
- stale data claims without freshness labels;
- confidence-free source-backed claims;
- regulated advice without a boundary;
- automatic route changes from agriculture intelligence metadata;
- typed route mutation;
- voice route mutation;
- policy bypass from agriculture intelligence metadata;
- confirmation bypass from agriculture intelligence metadata;
- permission bypass from agriculture intelligence metadata;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- fetch or network calls;
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

The Standard User build must remain unchanged in Sprint S1:

- no Farmer Agriculture Intelligence runtime surface;
- no farmer agriculture readiness contract module loaded;
- no agriculture brain replacement;
- no live agriculture advisor;
- no automatic source retrieval;
- no provider or extension handoff;
- no generated agriculture advice route mutation;
- no agriculture response risk tier mutation;
- no agriculture response execution, staging, or confirmation bypass;
- no chemical application or diagnosis claim;
- no unsupported live data claim;
- no completed action claim;
- no provider connection claim;
- existing source-backed agriculture preview behavior remains governed by its current activation lane;
- existing confirmation and permission gates remain untouched.

## Required Contract Invariants

The Phase 71 Farmer Agriculture Intelligence contract must continue to preserve:

- `liveAgricultureAdvisorEnabled: false`;
- `unsourcedAgricultureAdviceAllowed: false`;
- `chemicalApplicationInstructionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `paymentExecutionAllowed: false`;
- `providerOrExtensionContactAllowed: false`;
- `weatherOrPestLiveClaimAllowed: false`;
- `standardUserAgricultureBrainMutationAllowed: false`;
- `executionAllowed: false`;
- `liveActionEnabled: false`.

## Restricted Domains

Farmer Agriculture Intelligence must not infer or claim execution authority in:

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
- regulated_chemical_application;
- crop_insurance_claims.

## Safe Copy Boundary

Allowed posture:

> I can help explain agriculture options using source-backed guidance, but I need verified agricultural sources before treating advice as current or operational.

Disallowed posture:

- "I diagnosed your field."
- "Apply this chemical now."
- "I contacted the extension officer."
- "I sold your crop."
- "Your payment is complete."
- "I shared your field location."
- "I filed your insurance claim."
- "This advice is current without a source."

## Browser Validation Implication

Sprint S1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that changes visible agriculture intelligence behavior, imports Farmer Agriculture Intelligence artifacts, calls an agriculture provider, changes typed routing, changes voice routing, changes Standard User visible behavior, writes audit events, changes permission prompts, or changes source-backed agriculture answer behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk agriculture prompt checks;
- crop issue prompt checks;
- source-backed answer checks;
- stale source fallback checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Sprint S artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Phase 71 contract to no-execution defaults.
3. Restore `liveAgricultureAdvisorEnabled: false`, `unsourcedAgricultureAdviceAllowed: false`, `chemicalApplicationInstructionAllowed: false`, `marketplaceTransactionAllowed: false`, `paymentExecutionAllowed: false`, `providerOrExtensionContactAllowed: false`, `weatherOrPestLiveClaimAllowed: false`, `standardUserAgricultureBrainMutationAllowed: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 71 Farmer Agriculture Intelligence readiness QA.
5. Re-run Sprint S1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint train:

`Sprint S2 - Farmer Agriculture Intelligence Feature Flag Contract`

Sprint S2 should remain inert unless explicitly approved. It should define a default-off feature flag contract for future permissioned farmer agriculture intelligence visibility without live advisor execution, unsupported source claims, provider execution, hidden execution, storage writes, network calls, or granting execution authority.
