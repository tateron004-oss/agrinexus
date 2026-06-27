# Nexus Sprint U1 - Workforce Intelligence Runtime Activation Readiness Gate

Current base: `e8dadcc83fc6359fee1571c7c3fc43828252bd31`

Sprint U1 creates the runtime activation readiness gate for future Workforce Intelligence work. This phase is documentation and deterministic QA only. It does not import a workforce intelligence runtime, change active workforce or learning routing, replace existing job/training guidance, contact programs, submit applications, issue credentials, write storage, write audit events, request permissions, make placement claims, make eligibility claims, make provider connection claims, or execute actions.

## Relationship To Prior Lanes

Sprint U1 starts after:

- Sprint T5 - Healthcare Access Intelligence Lane Closeout;
- Phase 73 - Workforce Intelligence Readiness Contract.

Healthcare Access Intelligence readiness is not workforce authority. Workforce Intelligence must never become application submission authority, referral authority, credential issuance authority, employer/program contact authority, payment authority, identity authority, account/profile authority, communication completion, or execution approval.

## Runtime Activation Preconditions

Future Workforce Intelligence runtime work must not activate until all of the following are true:

- product owner approval for a workforce intelligence runtime change;
- verified workforce source or partner;
- source attribution;
- freshness label;
- confidence label;
- user consent boundary;
- role and permission check;
- explicit user approval for high-risk actions;
- cancellation path;
- audit decision record;
- fallback path;
- no unsupported live claim;
- no completed action claim;
- no job application submission;
- no referral or program contact without active partner integration;
- no credential, certificate, or enrollment claim without approved provider integration;
- no employer or workforce provider contact without consent, confirmation, and audit;
- no payment, fee, or marketplace transaction execution;
- no identity/account/profile action without identity and consent controls;
- no location sharing without user permission and visible scope;
- Standard User runtime workforce brain mutation approval;
- representative prompt set;
- job pathway prompt coverage;
- training pathway prompt coverage;
- certification prompt coverage;
- application boundary prompt coverage;
- provider contact boundary prompt coverage;
- stale source fallback coverage;
- confidence fallback coverage;
- ambiguity fallback;
- regression suite coverage;
- browser validation plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Sprint U1 must not load or activate:

- `public/nexus-workforce-intelligence-readiness-contract.js`;
- any future Workforce Intelligence feature flag;
- any future Workforce Intelligence fixture harness;
- any future live workforce advisor runtime;
- any future workforce source retrieval runtime;
- any future workforce provider handoff runtime;
- any provider execution runtime;
- Sprint U QA scripts.

These artifacts must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Blocked Runtime Behavior

Sprint U1 must not introduce:

- live workforce advisor execution;
- job application submission;
- referral submission;
- training enrollment execution;
- credential, certificate, or eligibility issuance;
- employer, provider, program, or workforce partner contact execution;
- calls or messages to programs;
- payment execution;
- marketplace transactions;
- identity, account, or profile execution;
- transportation dispatch;
- emergency dispatch;
- location sharing;
- camera or microphone activation;
- unsupported live data claims;
- completed action claims;
- source-backed workforce answer claims without sources;
- stale data claims without freshness labels;
- confidence-free source-backed claims;
- regulated or high-impact advice without a boundary;
- automatic route changes from workforce intelligence metadata;
- typed route mutation;
- voice route mutation;
- policy bypass from workforce intelligence metadata;
- confirmation bypass from workforce intelligence metadata;
- permission bypass from workforce intelligence metadata;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- fetch or network calls;
- provider handoff;
- native bridge dispatch;
- WhatsApp, Telegram, SMS, or email sending;
- external navigation;
- real pending action creation;
- execution authority.

## Standard User Boundary

The Standard User build must remain unchanged in Sprint U1:

- no Workforce Intelligence runtime surface;
- no workforce readiness contract module loaded;
- no workforce brain replacement;
- no live workforce advisor;
- no automatic source retrieval;
- no provider, employer, program, certification, enrollment, referral, or application handoff;
- no generated workforce response route mutation;
- no workforce response risk tier mutation;
- no workforce response execution, staging, or confirmation bypass;
- no job application, referral, enrollment, credential, certificate, provider contact, or completed action claim;
- existing workforce, learning, jobs, training, call, confirmation, and permission gates remain untouched.

## Required Contract Invariants

The Phase 73 Workforce Intelligence contract must continue to preserve:

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

## Restricted Domains

Workforce Intelligence must not infer or claim execution authority in:

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

> I can help compare workforce pathways and prepare next steps using verified sources, but applications, referrals, credentials, provider contact, and payments require configured partners, your approval, and audit controls.

Disallowed posture:

- "I submitted your job application."
- "You are enrolled in the program."
- "I contacted the employer."
- "I issued your certificate."
- "I verified your eligibility."
- "I paid the training fee."
- "I shared your profile."
- "This job information is current without a source."

## Browser Validation Implication

Sprint U1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that changes visible workforce intelligence behavior, imports Workforce Intelligence artifacts, contacts a workforce provider, changes typed routing, changes voice routing, changes Standard User visible behavior, writes audit events, changes permission prompts, or changes source-backed workforce answer behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk workforce prompt checks;
- training pathway prompt checks;
- job pathway prompt checks;
- application boundary prompt checks;
- provider contact prompt checks;
- certification boundary prompt checks;
- source-backed answer checks;
- stale source fallback checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Sprint U artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Phase 73 contract to no-execution defaults.
3. Restore `liveConnectorEnabled: false`, `providerExecutionEnabled: false`, `regulatedActionEnabled: false`, `silentActionAllowed: false`, `backgroundExecutionAllowed: false`, `standardUserRuntimeMutationAllowed: false`, `storageSideEffectAllowed: false`, `networkSideEffectAllowed: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 73 Workforce Intelligence readiness QA.
5. Re-run Sprint U1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint train:

`Sprint U2 - Workforce Intelligence Feature Flag Contract`

Sprint U2 should remain inert unless explicitly approved. It should define a default-off feature flag contract for future permissioned workforce intelligence visibility without application submission, referral execution, credential issuance, provider contact, hidden execution, storage writes, network calls, or granting execution authority.
