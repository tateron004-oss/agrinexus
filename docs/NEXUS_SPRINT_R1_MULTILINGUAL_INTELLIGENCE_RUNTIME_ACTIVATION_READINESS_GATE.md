# Nexus Sprint R1 - Multilingual Intelligence Runtime Activation Readiness Gate

Current base: `50c0011efd09c02beb7855a19d9a5d0569cbe99e`

Sprint R1 creates the runtime activation readiness gate for future Multilingual Intelligence work. This phase is documentation and deterministic QA only. It does not import a multilingual runtime, change active language switching, replace voice or typed routing, call translation providers, write storage, write audit events, request permissions, make clinical interpretation claims, make provider claims, or execute actions.

## Relationship To Prior Lanes

Sprint R1 starts after:

- Sprint Q5 - Natural Response Generation Lane Closeout;
- Phase 70 - Multilingual Intelligence Readiness Contract.

Natural response readiness is not multilingual authority. Multilingual support must never become consent, clinical interpretation certification, provider authorization, credential use, source authority, medical advice, diagnosis, prescription, payment completion, emergency dispatch, communication completion, location sharing approval, or execution approval.

## Runtime Activation Preconditions

Future Multilingual Intelligence runtime work must not activate until all of the following are true:

- product owner approval for a multilingual runtime change;
- approved supported language list;
- reviewed locale detection boundary;
- user-selected language path;
- no automatic language switching without user signal;
- translation review path;
- clinical interpretation boundary;
- no medical interpretation certification claim;
- no clinical interpretation claim;
- source trace preserved across language;
- freshness label preserved across language;
- confidence label preserved across language;
- unsupported language fallback text path;
- human language support escalation copy;
- regulated language use audit decision record;
- no provider execution from language switch;
- no call or message execution from language switch;
- no payment execution from language switch;
- no prescription or refill translation execution;
- no emergency dispatch translation execution;
- no location or camera activation from language switch;
- Standard User runtime language engine replacement approval;
- representative prompt set;
- English prompt coverage;
- Spanish prompt coverage;
- French prompt coverage;
- Arabic prompt coverage;
- Portuguese prompt coverage;
- Swahili prompt coverage;
- voice prompt coverage;
- typed prompt coverage;
- ambiguity fallback;
- regression suite coverage;
- browser validation plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Sprint R1 must not load or activate:

- `public/nexus-multilingual-intelligence-readiness-contract.js`;
- any future Multilingual Intelligence feature flag;
- any future Multilingual Intelligence fixture harness;
- any future live translation provider runtime;
- any future clinical interpretation runtime;
- any future language engine replacement;
- any provider execution runtime;
- Sprint R QA scripts.

These artifacts must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Blocked Runtime Behavior

Sprint R1 must not introduce:

- live translation provider execution;
- automatic language switching without user signal;
- clinical interpretation claim;
- medical translation certification claim;
- provider execution from language switch;
- call or message execution from language switch;
- payment execution from language switch;
- medical record translation execution;
- prescription or refill translation execution;
- emergency dispatch translation execution;
- location or camera activation from language switch;
- Standard User runtime language engine replacement;
- hidden translated-response metadata UI;
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
- source-backed answer claims without sources;
- stale data claims without freshness labels;
- confidence-free source-backed claims;
- regulated advice without a boundary;
- automatic route changes from translated text;
- typed route mutation;
- voice route mutation;
- policy bypass from translated text;
- confirmation bypass from translated text;
- permission bypass from translated text;
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

The Standard User build must remain unchanged in Sprint R1:

- no Multilingual Intelligence runtime surface;
- no multilingual readiness contract module loaded;
- no language engine replacement;
- no automatic language switch;
- no provider handoff from language switch;
- no generated translated response replacement;
- no translated response route mutation;
- no translated response risk tier mutation;
- no translated response execution, staging, or confirmation bypass;
- no clinical interpretation or medical certification claim;
- no unsupported live data claims;
- no completed action claims;
- no provider connection claims;
- no diagnosis or prescription claims;
- existing confirmation and permission gates untouched.

## Required Contract Invariants

The Phase 70 Multilingual Intelligence contract must continue to preserve:

- `liveTranslationProviderEnabled: false`;
- `automaticLanguageSwitchingEnabled: false`;
- `clinicalInterpretationClaimAllowed: false`;
- `medicalTranslationCertificationClaimAllowed: false`;
- `providerExecutionFromLanguageSwitchEnabled: false`;
- `regulatedTranslationExecutionEnabled: false`;
- `standardUserLanguageEngineMutationAllowed: false`;
- `executionAllowed: false`;
- `liveActionEnabled: false`.

## Supported Baseline Languages

The safe baseline remains:

- English;
- Spanish;
- French;
- Arabic;
- Portuguese;
- Swahili.

## Restricted Domains

Multilingual Intelligence must not infer or claim execution authority in:

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
- role_authorization.

## Safe Copy Boundary

Allowed posture:

> I can respond in supported languages, but this does not replace a certified medical interpreter or authorize any provider action.

Disallowed posture:

- "I interpreted this medical record for clinical use."
- "I connected you to a provider."
- "Your payment is complete."
- "Your prescription is refilled."
- "I dispatched emergency help."
- "I sent the message."
- "I accessed your medical record."
- "This translation is clinically certified."

## Browser Validation Implication

Sprint R1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that changes visible language behavior, imports Multilingual Intelligence artifacts, calls a translation provider, changes typed routing, changes voice routing, changes Standard User visible behavior, writes audit events, changes permission prompts, or changes source-backed multilingual answer behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- supported language prompt checks;
- language-switch prompt checks;
- source-backed answer checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Sprint R artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Phase 70 no-execution defaults.
3. Restore live translation provider, automatic language switching, clinical interpretation claim, medical certification claim, provider execution, regulated translation execution, Standard User language engine mutation, execution, and live-action fields to false.
4. Re-run Phase 70 Multilingual Intelligence QA.
5. Re-run Sprint R QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint R2 - Multilingual Intelligence Feature Flag Contract`

Sprint R2 should define a default-off feature flag contract for future Multilingual Intelligence visibility or test-safe review, without changing active language routing or granting clinical interpretation, provider, communication, payment, location, or execution authority.
