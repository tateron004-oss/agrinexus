# Nexus Sprint B Runtime Intent + Planner Preview Integration

## Purpose

Sprint B integrates the inert autonomous brain helpers into the normal Standard User runtime as preview-only intelligence. Nexus can now classify typed or spoken prompts, prepare a visible plan preview, and explain permission-required or blocked requests without executing any real-world action.

## Files Changed

- `public/index.html`
- `public/app.js`
- `public/styles.css`
- `public/nexus-agriculture-support-response-card.js`
- `public/nexus-voice-text-intent-router.js`
- `scripts/nexus-autonomous-runtime-preview-integration-qa.js`
- `scripts/nexus-phase-104-voice-text-intent-router-qa.js`
- `package.json`
- `scripts/qa-suite.js`

## Runtime Behavior Added

- Loads the source registry, permission-gated action contract, voice/text intent router, planner preview contract, and agriculture support card before `app.js`.
- Adds a visible `Nexus Plan Preview` card for typed and spoken Standard User prompts.
- Shows intent/domain, status, risk label, visible next steps, and a no-action disclosure.
- Keeps the existing Phase 101 agriculture support card path intact.
- Uses the source registry for truthful default agriculture source, freshness, and confidence labels when no verified source exists.
- Uses the permission-gated action contract for risky prompt previews.
- Uses the planner preview contract for visible review-only steps.

## Safety Boundaries Preserved

Sprint B does not enable:

- provider contact
- phone calls
- messages, WhatsApp, SMS, Telegram, or email sends
- appointment scheduling
- marketplace purchase or sale
- payment
- location sharing
- camera, photo, upload, or media capture
- medical, pharmacy, or health execution
- emergency dispatch
- live source lookup
- backend mutation from assistant helpers
- hidden staged action
- background execution
- silent side effects
- fake source names, experts, freshness, confidence, or local recommendations

Every Sprint B preview keeps `executionAllowed: false` and displays `No action has been taken.`

## QA Results

Required QA was run for the Sprint B implementation:

- `git diff --check`
- `node --check server.js`
- `node --check public/app.js`
- `node --check public/nexus-agriculture-support-response-card.js`
- `node --check public/nexus-agriculture-source-registry.js`
- `node --check public/nexus-permission-gated-action-contract.js`
- `node --check public/nexus-voice-text-intent-router.js`
- `node --check public/nexus-planner-preview-contract.js`
- `node --check scripts/nexus-autonomous-runtime-preview-integration-qa.js`
- `node --check scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js`
- `node --check scripts/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js`
- `node --check scripts/nexus-phase-102-agriculture-source-registry-hardening-qa.js`
- `node --check scripts/nexus-phase-102-to-105-autonomous-foundation-batch-qa.js`
- `node --check scripts/nexus-phase-104-voice-text-intent-router-qa.js`
- `node --check scripts/qa-suite.js`
- `node scripts/nexus-autonomous-runtime-preview-integration-qa.js`
- `node scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js`
- `node scripts/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js`
- `node scripts/nexus-phase-102-agriculture-source-registry-hardening-qa.js`
- `node scripts/nexus-phase-102-to-105-autonomous-foundation-batch-qa.js`
- `node scripts/nexus-phase-104-voice-text-intent-router-qa.js`
- `npm.cmd run qa:nexus-autonomous-runtime-preview-integration`
- `npm.cmd run qa:nexus-phase-102-agriculture-source-registry-hardening`
- `npm.cmd run qa:nexus-phase-102-to-105-autonomous-foundation-batch`
- `npm.cmd run qa:nexus-phase-104-voice-text-intent-router`
- `node scripts/qa-suite.js nexus-workforce`
- `node scripts/qa-suite.js all-safe`

## Browser Validation Results

Browser validation was performed in the normal Standard User build with:

- command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- path: `Start as User`

Validated agriculture prompts:

- `My maize leaves are turning yellow`
- `My crops have spots on the leaves`
- `How do I improve irrigation?`
- `How do I prepare for drought?`
- `What should I do about pests eating my crops?`
- `I need help with crop issues`

Result: agriculture prompts rendered `Agriculture Support Review` and/or `Nexus Plan Preview` with review-only status, general-guidance source labels, no live lookup, and `No action has been taken.`

Validated source/freshness prompts:

- `Nexus, explain the source`
- `Nexus, how fresh is this guidance?`
- `Nexus, what confidence do you have?`

Result: source/freshness prompts rendered `Nexus Plan Preview` with source-review framing and no fabricated source, freshness, confidence, provider, or live lookup claim.

Validated risky prompts:

- `Nexus, call an agronomist`
- `Nexus, message the supplier`
- `Nexus, book an appointment`
- `Nexus, buy seeds`
- `Nexus, pay for fertilizer`
- `Nexus, use my location`
- `Nexus, open my camera`
- `Nexus, upload a crop photo`
- `Nexus, get medical help`
- `Nexus, dispatch emergency help`

Result: risky prompts rendered blocked or permission-required `Nexus Plan Preview` cards. They showed the no-action disclosure and did not contact providers, call, send messages, schedule appointments, start payments, start marketplace transactions, request location, request camera/media, execute medical actions, or dispatch emergency help.

Additional browser notes:

- Voice demo shell loaded in Standard User.
- Caption and global Ask Nexus typed paths remained usable.
- Phase 101 agriculture support card survived route repaint and delayed repaint.
- No hidden/debug-only selected-tool, action, source-record, or planner metadata was visible.
- Browser console showed no Sprint B warnings or errors.

## Known Limitations

- Sprint B does not perform live source lookup.
- Sprint B does not connect to real providers.
- Sprint B does not execute actions.
- Sprint B does not persist autonomous preview state.
- Sprint B previews are a safety layer, not a permission grant.

## Next Sprint Recommendation

Sprint C should build the permission UI and audit trail foundation. It should remain preview-only unless an explicit future execution phase adds a verified connector, user approval, audit logging, and browser validation.
