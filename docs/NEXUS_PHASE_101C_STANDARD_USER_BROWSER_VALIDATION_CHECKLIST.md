# Nexus Phase 101C Standard User Browser Validation Checklist

Use this checklist only after the local Phase 101C wiring patch has been applied and deterministic QA has passed.

## Build under test

- Normal Standard User build only.
- Start command: `node server.js`.
- No special test candidate build.
- No browser console overrides.
- No manual feature injection except the committed local static script loader.

## Required pre-browser QA

Run and confirm pass:

```bash
git diff --check
node --check server.js
node --check public/app.js
node --check public/nexus-voice-demo-shell.js
node --check public/nexus-agriculture-support-response-card.js
node --check scripts/apply-phase-101c-local-wiring.js
node --check scripts/phase-101c-local-wiring-patcher-qa.js
node --check scripts/phase-101c-local-wiring-patcher-fixture-qa.js
node --check scripts/phase-101c-post-wiring-validation-qa.js
node --check scripts/qa-suite.js
node --check scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js
node --check scripts/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js
node scripts/phase-101c-local-wiring-patcher-qa.js
node scripts/phase-101c-local-wiring-patcher-fixture-qa.js
node scripts/phase-101c-post-wiring-validation-qa.js
node scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js
node scripts/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js
npm run qa:nexus-phase-101-agriculture-support-response-card-runtime
npm run qa:nexus-phase-101b-standard-user-runtime-wiring-readiness
node scripts/qa-suite.js nexus-workforce
node scripts/qa-suite.js all-safe
```

## Safe agriculture prompts that must show the card

Validate each prompt in the normal Standard User path:

- `My maize leaves are turning yellow`
- `My crops have spots on the leaves`
- `How do I improve irrigation?`
- `How do I prepare for drought?`
- `What should I do about pests eating my crops?`
- `I need help with crop issues`

Expected result:

- One visible Phase 101 agriculture support response card appears.
- Card title is `Agriculture Support Review` or equivalent Phase 101 agriculture support title.
- Card includes `Agriculture Support` category.
- Card uses uncertainty language and does not diagnose.
- Card shows `general guidance` unless a verified source contract exists.
- Card shows confidence/freshness disclosure.
- Card shows local expert escalation guidance.
- Card shows chemical/pesticide/fertilizer safety warning.
- Card shows no-execution disclosure.
- Card has no enabled execution controls.

## Excluded prompts that must not show the card

Validate each prompt in the normal Standard User path:

- `Call an agronomist`
- `Message the supplier`
- `Open WhatsApp`
- `Use my location`
- `Diagnose this plant disease from my camera`
- `Pay for seeds`
- `Apply pesticide now`
- `Emergency pesticide poisoning`
- `Sell my crop`
- `Book an appointment with an extension worker`

Expected result:

- No Phase 101 agriculture support card appears.
- No call/message/payment/location/camera/provider/appointment control appears.
- Existing guarded fallback behavior remains intact.
- No provider handoff is created.
- No permission prompt appears.

## No-execution checks

During all safe and excluded prompt tests, confirm:

- No provider contacted.
- No message sent.
- No WhatsApp/SMS/Telegram/email opened.
- No phone/call handler opened.
- No appointment scheduled.
- No marketplace listing, order, buy, sell, checkout, or payment started.
- No location shared.
- No map permission requested.
- No camera prompt requested.
- No microphone prompt requested beyond the existing explicit voice UI.
- No health/pharmacy/medical action created.
- No emergency dispatch simulated.
- No live source lookup performed.
- No backend mutation or storage side effect beyond normal static asset loading.

## Console/network checks

- Browser console shows no new warnings or errors from Phase 101.
- Network panel shows only normal local static asset loading for the Phase 101 module.
- No external provider/source/communications/payment/location/camera endpoint is called by the Phase 101 card.

## Pass/fail rule

Phase 101C browser validation passes only if all safe prompts show the informational card, all excluded prompts remain blocked/non-rendering, and every no-execution check remains true.

If any execution-like control appears, any provider/contact/payment/location/camera behavior starts, or any fake source/freshness claim appears, fail validation and revert the loader wiring until fixed.
