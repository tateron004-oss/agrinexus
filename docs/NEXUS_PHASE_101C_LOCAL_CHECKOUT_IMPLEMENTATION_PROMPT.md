# Nexus Phase 101C Local Checkout Implementation Prompt

Use this prompt in Codex/local checkout to complete the normal Standard User runtime wiring safely.

## Context

Current remote work through Phase 101B/101C readiness has added:

- `public/nexus-agriculture-support-response-card.js`
- `docs/NEXUS_PHASE_101_SOURCE_BACKED_AGRICULTURE_SUPPORT_RESPONSE_CARD_RUNTIME_ACTIVATION.md`
- `scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js`
- `docs/NEXUS_PHASE_101B_STANDARD_USER_RUNTIME_WIRING_READINESS.md`
- `scripts/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js`
- `scripts/apply-phase-101c-local-wiring.js`
- `scripts/phase-101c-local-wiring-patcher-qa.js`
- `scripts/phase-101c-local-wiring-patcher-fixture-qa.js`
- `scripts/phase-101c-post-wiring-validation-qa.js`

The Phase 101 card module is present and runtime-capable, but the normal Standard User build still needs a safe local loader patch.

## Objective

Wire `public/nexus-agriculture-support-response-card.js` into the normal Standard User build with the smallest safe change, add npm/QA-suite wiring, run full local-safe QA, and perform Standard User browser validation.

## Fast safe path

From a complete local checkout, run:

```bash
node --check scripts/apply-phase-101c-local-wiring.js
node --check scripts/phase-101c-local-wiring-patcher-qa.js
node --check scripts/phase-101c-local-wiring-patcher-fixture-qa.js
node --check scripts/phase-101c-post-wiring-validation-qa.js
node scripts/phase-101c-local-wiring-patcher-qa.js
node scripts/phase-101c-local-wiring-patcher-fixture-qa.js
node scripts/apply-phase-101c-local-wiring.js
node scripts/phase-101c-post-wiring-validation-qa.js
```

Then inspect the diff carefully before running the full QA list below.

## Required implementation

1. Audit the current files:
   - `public/index.html`
   - `public/app.js`
   - `public/nexus-voice-demo-shell.js`
   - `public/nexus-agriculture-support-response-card.js`
   - `package.json`
   - `scripts/qa-suite.js`
   - existing low-risk renderer QA scripts

2. Insert the loader in `public/index.html` near the existing script stack. Preferred insertion:

```html
<script src="/nexus-agriculture-support-response-card.js?v=nexus-phase-101"></script>
<script src="/app.js?v=nexus-behavior-305"></script>
```

If repo audit shows a safer already-loaded shell insertion point, document why and keep it local/static only.

3. Add package alias:

```json
"qa:nexus-phase-101-agriculture-support-response-card-runtime": "node scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js",
"qa:nexus-phase-101b-standard-user-runtime-wiring-readiness": "node scripts/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js"
```

4. Update `scripts/qa-suite.js`:
   - Add both Phase 101 QA scripts to `nexus-workforce` if deterministic and safe.
   - Add both Phase 101 QA scripts to `all-safe` if deterministic and safe.
   - Once the loader is inserted, update or replace the Phase 101B guard assertion that currently expects `index.html` not to include the loader. It should then expect the loader to be present exactly once and before `/app.js`.

5. Confirm no unsafe execution behavior is added:
   - no provider handoff
   - no call/message/WhatsApp/SMS/Telegram/email
   - no appointment scheduling
   - no marketplace transaction/payment
   - no location/map permission
   - no camera/microphone activation beyond existing explicit voice UI
   - no health/pharmacy/emergency execution
   - no live source lookup
   - no storage/network side effects beyond loading the local static JS file

## Required QA

Run:

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

## Browser validation

Use the normal standard user build:

```bash
node server.js
```

Open the normal local URL and validate:

- Start as User path works.
- Safe agriculture prompts render the agriculture support response card:
  - `My maize leaves are turning yellow`
  - `My crops have spots on the leaves`
  - `How do I improve irrigation?`
  - `How do I prepare for drought?`
  - `What should I do about pests eating my crops?`
  - `I need help with crop issues`
- Excluded/high-risk prompts do not render the card:
  - `Call an agronomist`
  - `Message the supplier`
  - `Open WhatsApp`
  - `Use my location`
  - `Diagnose this plant disease from my camera`
  - `Pay for seeds`
  - `Apply pesticide now`
  - `Emergency pesticide poisoning`
- No provider handoff appears.
- No permission prompt appears.
- No navigation side effect occurs unless already existing and explicitly review-only.
- No storage/network side effect occurs beyond loading local static assets.
- No console warn/error entries appear.
- No call/message/payment/location/camera/health/pharmacy/emergency execution occurs.

## Commit and push

Commit message:

```text
Wire Phase 101 agriculture card into Standard User build
```

Push to `origin/main`.

Final report must include:

- files changed
- summary of runtime behavior added
- safety boundaries preserved
- QA commands run and results
- Standard User browser validation results
- commit hash
- push result
- final local HEAD
- final remote HEAD
- final git status
- remaining unpushed commits
