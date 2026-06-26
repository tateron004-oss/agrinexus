# Nexus Phase 101B Standard User Runtime Wiring Readiness

Phase 101 added the agriculture support response-card runtime module. Phase 101B records the safe normal-build wiring requirements before the card is inserted into the loaded Standard User page.

## Current state

- `public/nexus-agriculture-support-response-card.js` exists.
- The module can classify safe agriculture support prompts.
- The module can build and render a non-executing agriculture support card when loaded.
- The module exports a Node-compatible API for deterministic QA.
- The module installs browser listeners only after it is loaded.
- A Codex/local checkout continuation prompt now exists at `docs/NEXUS_PHASE_101C_LOCAL_CHECKOUT_IMPLEMENTATION_PROMPT.md`.

## Important boundary

The normal Standard User build must not be considered fully browser-active until the module is loaded by the normal app shell.

The safe wiring target is the normal `public/index.html` script stack, or an already-loaded shell file if edited from a full local checkout. Do not replace `public/app.js`, `server.js`, or other large runtime files from partial fetched chunks.

## Phase 101C connector constraint

The continuation attempt inspected the loaded voice shell as a possible smaller wiring point. The safest implementation still requires editing a currently loaded file or `public/index.html` from a complete local checkout. Because the GitHub connector exposes whole-file replacement and not patch insertion, replacing a large loaded runtime file from partial chunks would create more risk than value.

Therefore Phase 101C is intentionally held as a local-checkout implementation step rather than a blind remote replacement.

## Required normal-build loader insertion

Preferred `public/index.html` insertion point:

```html
<script src="/nexus-agriculture-support-response-card.js?v=nexus-phase-101"></script>
<script src="/app.js?v=nexus-behavior-305"></script>
```

The agriculture support card should load before app/voice interactions can use it, but it must not create execution authority. If inserted after `app.js`, it must still install safely on `DOMContentLoaded` or immediately when the document is ready.

## Loader safety requirements

The loader must:

- Load only the local static module.
- Not call live sources.
- Not request location.
- Not request camera or microphone.
- Not contact providers.
- Not create messages, calls, appointments, payments, marketplace actions, medical actions, pharmacy actions, or emergency dispatch.
- Not mutate backend state.
- Not write local storage.
- Not create hidden staged actions.

## Standard User validation required after wiring

Run the normal standard user build and validate:

- Start as User path opens normally.
- Safe agriculture prompts render the agriculture support response card.
- Excluded/high-risk prompts do not render the card.
- Card shows general guidance unless a real verified source contract exists.
- No provider contacted.
- No message sent.
- No purchase made.
- No location shared.
- No permission prompt appears.
- No navigation side effect occurs.
- No console warnings/errors appear.
- No call/message/payment/location/camera/health/pharmacy/emergency execution occurs.

## Why this phase is separate

This repository was being updated through the GitHub contents/tree connector rather than a local checkout. Because the normal runtime files are large and safety-critical, this phase avoids replacing `public/index.html`, `public/app.js`, `public/nexus-voice-demo-shell.js`, or `server.js` from partial content. The correct next implementation step is a local checkout patch that inserts the loader line, wires the package alias, wires the QA suite, and then runs full local QA plus browser validation.

## Recommended next step

Use `docs/NEXUS_PHASE_101C_LOCAL_CHECKOUT_IMPLEMENTATION_PROMPT.md` in Codex/local checkout to perform the normal-build loader insertion and package/QA-suite wiring, then run:

```bash
git diff --check
node --check server.js
node --check public/app.js
node --check public/index.html
node --check public/nexus-agriculture-support-response-card.js
node --check scripts/qa-suite.js
node --check scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js
node scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js
npm run qa:nexus-phase-101-agriculture-support-response-card-runtime
node scripts/qa-suite.js nexus-workforce
node scripts/qa-suite.js all-safe
```

Then perform Standard User browser validation using the normal standard user build.
