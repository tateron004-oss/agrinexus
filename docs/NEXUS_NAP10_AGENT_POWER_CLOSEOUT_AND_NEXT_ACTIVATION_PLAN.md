# NAP10 - Agent Power Closeout And Next Activation Plan

## Scope

NAP10 closes the Nexus Agent Power sprint train. NAP1 through NAP9 moved Nexus closer to a working assistant by adding capability routing, multi-provider answer composition, task planning, safe preparation, stronger follow-up memory, Standard User agent experience rendering, voice command integration, provider reliability health, and browser validation of the working agent path.

This closeout remains inert. It does not activate calls, messages, WhatsApp, Telegram, email, payments, purchases, bookings, provider dispatch, location sharing, camera or microphone activation, medical/pharmacy execution, emergency dispatch, marketplace transactions, backend writes, or autonomous execution.

## Completed NAP Train

| Phase | Status | Result |
| --- | --- | --- |
| NAP1 | Complete | Assistant capability router for safe capability matching. |
| NAP2 | Complete | Multi-provider assistant expansion for read-only provider/source responses. |
| NAP3 | Complete | Agent task planner that creates non-executing plan previews. |
| NAP4 | Complete | Safe action preparation contracts with no execution authority. |
| NAP5 | Complete | Strong follow-up memory for bounded, non-authoritative context. |
| NAP6 | Complete | Standard User agent experience preview rendering behind flags. |
| NAP7 | Complete | Voice and typed command integration into the safe preview path. |
| NAP8 | Complete | Provider reliability health, timeout, unavailable, stale, retry, and cache posture. |
| NAP9 | Complete | Browser validation plus post-auth config refresh for flag-on Standard User preview. |
| NAP10 | Complete | Closeout and next activation plan. |

## Current Working Assistant Capabilities

Nexus can now safely:

- classify low-risk assistant prompts;
- route read-only prompts to the assistant runtime;
- compose source-backed or source-unavailable answers;
- preserve short follow-up context without authority;
- produce plan, checklist, comparison, draft-question, and source-review previews;
- show Standard User agent preview sections when all flags are enabled;
- report provider health and safe unavailable states;
- stay functional when provider config is missing, stale, or timed out;
- keep high-risk prompts blocked, downgraded, or informational.

## Standard User Runtime Posture

Default-off remains the normal Standard User posture:

- no visible runtime preview card;
- no provider calls;
- no permission prompts;
- no execution controls;
- no hidden/debug metadata;
- no backend action writes.

Flag-on Standard User runtime requires all of:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
- `NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=true`
- `NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED=true`

When enabled, the runtime preview remains read-only:

- `data-read-only="true"`
- `data-execution-authority="false"`
- `data-provider-handoff="false"`

The preview can show source-backed answers, safe follow-ups, task plan previews, preparation previews, and source review summaries. It cannot execute real-world actions.

## Safety Boundaries That Remain

Nexus must not perform these automatically:

- call, message, WhatsApp, Telegram, SMS, or email;
- contact a provider, buyer, seller, clinic, pharmacy, employer, or emergency responder;
- submit a job application, appointment request, order, payment, checkout, form, or account action;
- share location, request browser geolocation, activate camera, or activate microphone outside existing user-initiated voice controls;
- diagnose, prescribe, refill, schedule care, dispatch help, or access medical records;
- execute marketplace transactions;
- write backend pending real-world actions.

All future execution lanes require explicit product approval, provider integration, user consent, final confirmation, audit logging, and rollback/cancel behavior.

## QA Protection

The NAP train is protected by deterministic QA for:

- `scripts/nexus-nap1-assistant-capability-router-qa.js`
- `scripts/nexus-nap2-multi-provider-assistant-expansion-qa.js`
- `scripts/nexus-nap3-agent-task-planner-qa.js`
- `scripts/nexus-nap4-safe-action-preparation-qa.js`
- `scripts/nexus-nap5-strong-follow-up-memory-qa.js`
- `scripts/nexus-nap6-standard-user-agent-experience-qa.js`
- `scripts/nexus-nap7-voice-command-layer-integration-qa.js`
- `scripts/nexus-nap8-reliability-provider-health-qa.js`
- `scripts/nexus-nap9-browser-validation-qa.js`
- `scripts/nexus-nap10-agent-power-closeout-qa.js`

These checks are wired into local-safe QA suites and must continue to pass with `nexus-workforce` and `all-safe`.

## Recommended First Runtime Activation Lane

The safest next activation lane is still a read-only Standard User source-backed preview lane, not execution.

Recommended next lane:

1. Improve the Standard User Ask input stability and testability.
2. Expand agriculture/workforce source-backed answer cards.
3. Add clearer source freshness and provider health copy.
4. Keep preview card controls non-executing.
5. Keep high-risk prompts blocked or downgraded.
6. Continue browser validation using temp DB paths.

Do not activate communications, payments, location sharing, camera, medical/pharmacy, emergency, appointment booking, marketplace transaction, provider handoff, or backend-write behavior in the next lane.

## Closeout Conclusion

NAP1 through NAP10 establish Nexus as a safer, more capable working assistant foundation. It can reason over prompts, prepare plans, handle follow-ups, preview answers, expose reliability posture, and render a guarded Standard User agent experience. It remains intentionally non-executing and safety-gated until future approved execution lanes are ready.
