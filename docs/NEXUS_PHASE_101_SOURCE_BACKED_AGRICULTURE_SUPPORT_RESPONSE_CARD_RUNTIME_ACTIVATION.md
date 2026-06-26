# Nexus Phase 101 Source-Backed Agriculture Support Response Card Runtime Activation

Phase 101 begins the first controlled runtime activation lane after the Nexus 100 completion audit: a Standard User-safe agriculture support response card that provides useful farmer guidance while preserving no-execution boundaries.

## Phase 100 baseline

Nexus 100 completed the readiness foundation for AgriNexus powered by Nexus. The completion audit identified source-backed agriculture support response cards as the safest first activation lane because the feature can help farmers while remaining non-executing.

## What Phase 101 adds

Phase 101 adds `public/nexus-agriculture-support-response-card.js`, a browser/Node-compatible runtime module that can classify safe agriculture-support prompts, build a structured card, render it into an existing Standard User assistant panel when loaded, label guidance truthfully, and show uncertainty, freshness, confidence, local-expert escalation, chemical safety, marketplace boundaries, and no-execution disclosures.

The module is intentionally narrow. It does not call live sources, providers, maps, location, cameras, microphones, messaging services, payment services, marketplace services, medical systems, pharmacy systems, or emergency systems.

## Runtime activation boundary

The Phase 101 module installs a browser listener when loaded. It listens to existing typed assistant surfaces and renders only when the prompt qualifies as low-risk agriculture support. It only appends an informational card to an existing UI target.

As of Phase 101B/101C readiness, the module is present and runtime-capable, but normal-build browser activation still requires a safe local checkout patch that loads the module from `public/index.html` or another already-loaded shell file.

## Feature flag

Flag name: `NEXUS_PHASE_101_AGRICULTURE_SUPPORT_RESPONSE_CARD_ENABLED`

Default: `enabled` for this controlled activation lane, with an immediate disable path through the browser global or local storage value set to `false`, `off`, or `disabled`.

This is not an execution flag. Enabling the card only enables informational rendering.

## Eligible prompts

Examples that qualify:

- `My maize leaves are turning yellow`
- `My crops have spots on the leaves`
- `How do I improve irrigation?`
- `How do I prepare for drought?`
- `What should I do about pests eating my crops?`
- `I need help with crop issues`

## Excluded prompts

The module blocks prompts involving calls, phone, SMS, WhatsApp, Telegram, email, messaging, provider contact, appointment booking, buying, selling, payment, checkout, ordering, buyer/seller contact, location, maps, GPS, nearby lookup, camera, photo, upload, image, microphone, medical, pharmacy, clinical, telehealth, prescription, emergency action, pesticide poisoning, guaranteed diagnosis, and unsafe chemical instructions such as applying, spraying, mixing, dosing, or choosing restricted chemicals.

## Card model

The card includes title, detected agriculture support category, plain-language summary, likely general possibilities rather than diagnosis, safe first checks, source status, confidence and freshness disclosure, local expert escalation guidance, chemical/pesticide/fertilizer warning, marketplace review-only boundary when relevant, no-execution disclosure, and disabled review-only action metadata.

## Source and freshness strategy

When no verified source is connected, the card says `general guidance`, `No verified live source connected`, `Unavailable — no live source lookup was performed`, and `Limited — general agriculture guidance only`.

The card says `source-backed guidance` only when a verified source contract object includes a source name, freshness label, and contract ID. The module does not create fake citations, fake local provider availability, or fake source freshness.

## Crop, pest, and disease risk handling

The card never claims a definitive diagnosis. It uses uncertainty language and suggests safe observation steps first. Severe, spreading, or unclear issues are escalated to a qualified local agriculture extension worker, agronomist, cooperative advisor, or trusted local expert.

## Chemical, pesticide, and fertilizer risk handling

The card does not give restricted chemical recommendations, dose rates, mixture instructions, or application instructions. It advises users to follow the product label, local regulations, PPE requirements, and qualified local guidance.

## Marketplace risk handling

The card does not buy, sell, contact buyers or sellers, create listings, start payments, place orders, or arrange delivery. Marketplace references are review-only.

## Safety guarantees

Phase 101 preserves these guarantees: no provider contacted; no message sent; no purchase made; no location shared; no appointment scheduled; no payment or marketplace transaction started; no camera, microphone, map, location, medical, pharmacy, or emergency execution; no live source lookup; no backend behavior change; no storage or network side effects from the module.

## QA coverage

The deterministic QA script `scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js` validates safe agriculture prompts, excluded and high-risk prompts, pesticide and fertilizer safety boundaries, source-backed label requirements, general guidance fallback, no forbidden controls or execution flags, and absence of live fetch, geolocation, media, payment, phone, mail, or navigation execution paths.

## Browser validation plan

Standard User browser validation should use the normal standard user build. Validate Start as User, safe agriculture prompts rendering the Phase 101 agriculture card, excluded/high-risk prompts not rendering the card, and no provider handoff, permission prompt, navigation side effect, storage/network side effect, console warn/error, call, message, payment, location, camera, health, pharmacy, or emergency execution.

## Known limitations

This phase does not connect a live source registry, live extension provider, live local expert directory, marketplace provider, payment provider, location provider, camera flow, or backend action path.

Normal-build browser activation is intentionally deferred until a complete local checkout can safely insert the loader line and run full local QA/browser validation.

## Recommended Phase 102

Phase 102 should perform Standard User browser validation and then harden the agriculture source registry so real extension sources can be connected with truthful citation, freshness, confidence, and stale-source handling while preserving the same no-execution boundary.
