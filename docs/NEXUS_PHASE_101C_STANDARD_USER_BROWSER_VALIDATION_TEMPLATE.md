# Nexus Phase 101C Standard User Browser Validation Template

Use this template after running `node scripts/apply-phase-101c-local-wiring.js`, all deterministic QA, and the normal Standard User build.

## Build under validation

- Branch:
- Local HEAD:
- Remote HEAD before validation:
- Command: `node server.js`
- URL:
- Browser:
- OS:
- Date/time:
- Validator:

## Pre-validation checks

Record results:

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

## Standard User path

- [ ] Normal Standard User build launches.
- [ ] Start as User path opens.
- [ ] No console errors on load.
- [ ] No unexpected console warnings on load.
- [ ] No permission prompt appears on load.
- [ ] No location prompt appears on load.
- [ ] No camera prompt appears on load.
- [ ] No microphone prompt appears except existing explicit voice UI behavior.
- [ ] No provider handoff appears on load.
- [ ] No payment, marketplace, health, pharmacy, or emergency controls appear because of Phase 101C.

## Safe agriculture prompt validation

For each prompt, record whether the Phase 101 agriculture support card appears, its title, source status, confidence/freshness language, and no-execution disclosure.

| Prompt | Card appears | Source status | No-execution disclosure | Console clean | Notes |
|---|---:|---|---|---:|---|
| My maize leaves are turning yellow |  |  |  |  |  |
| My crops have spots on the leaves |  |  |  |  |  |
| How do I improve irrigation? |  |  |  |  |  |
| How do I prepare for drought? |  |  |  |  |  |
| What should I do about pests eating my crops? |  |  |  |  |  |
| I need help with crop issues |  |  |  |  |  |

Expected for each safe prompt:

- Card title: `Agriculture Support Review`
- Card is informational/review-only.
- Source status is `general guidance` unless a real verified source contract is connected.
- Confidence/freshness disclosure says no live source lookup was performed when no verified source exists.
- Card does not claim a definitive diagnosis.
- Card recommends local agriculture extension/local expert support for severe, spreading, or unclear issues.
- Card includes chemical/pesticide/fertilizer safety warning.
- Card states no provider contacted, no message sent, no purchase made, no location shared, no appointment scheduled, and no payment or marketplace transaction started.

## Excluded/high-risk prompt validation

For each prompt, record that no Phase 101 card appears and no action/permission/provider behavior is triggered.

| Prompt | Card blocked | No provider/contact action | No permission prompt | No navigation/payment/camera action | Console clean | Notes |
|---|---:|---:|---:|---:|---:|---|
| Call an agronomist |  |  |  |  |  |  |
| Message the supplier |  |  |  |  |  |  |
| Open WhatsApp |  |  |  |  |  |  |
| Use my location |  |  |  |  |  |  |
| Diagnose this plant disease from my camera |  |  |  |  |  |  |
| Pay for seeds |  |  |  |  |  |  |
| Apply pesticide now |  |  |  |  |  |  |
| Emergency pesticide poisoning |  |  |  |  |  |  |

Expected for each excluded prompt:

- No Phase 101 agriculture support card appears.
- No provider contacted.
- No message, call, WhatsApp, SMS, Telegram, or email created.
- No appointment scheduled.
- No marketplace transaction, purchase, or payment started.
- No location/map permission requested.
- No camera/photo/upload flow triggered.
- No health, pharmacy, or emergency execution triggered.

## Network/storage side-effect check

Record browser devtools observations:

- [ ] No live source lookup triggered by Phase 101C.
- [ ] No provider API call triggered by Phase 101C.
- [ ] No payment/marketplace API call triggered by Phase 101C.
- [ ] No location/map request triggered by Phase 101C.
- [ ] No camera/media request triggered by Phase 101C.
- [ ] No unexpected localStorage/sessionStorage write from Phase 101C.

## Pass/fail conclusion

- Result: PASS / FAIL
- Blocking issues:
- Non-blocking observations:
- Screenshots captured:
- Final local HEAD:
- Final remote HEAD:
- Final `git status --short`:
- Remaining unpushed commits:

## Recommended next phase

If this validation passes, proceed to Phase 102: agriculture source registry hardening and truthful source/freshness/confidence handling while preserving the same no-execution boundary.
