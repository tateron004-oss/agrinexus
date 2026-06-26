# Nexus Sprint C Permission UI + Audit Trail Foundation

## Purpose

Sprint C adds the trust layer required before Nexus can safely move toward real-world actions. It introduces preview-only permission review and audit event contracts, then surfaces those contracts inside the existing Standard User `Nexus Plan Preview` path for blocked or permission-required prompts.

Sprint C remains non-executing. It does not grant permission, stage actions, write audit records, contact providers, open device permissions, or mutate backend state.

## Files Changed

- `public/index.html`
- `public/app.js`
- `public/styles.css`
- `public/sw.js`
- `server.js`
- `public/nexus-permission-review-contract.js`
- `public/nexus-audit-event-contract.js`
- `scripts/nexus-sprint-c-permission-audit-foundation-qa.js`
- `package.json`
- `scripts/qa-suite.js`
- `docs/NEXUS_SPRINT_C_PERMISSION_UI_AUDIT_TRAIL_FOUNDATION.md`

## Helper Contracts

### Permission Review Contract

`public/nexus-permission-review-contract.js` exports:

- `PERMISSION_REVIEW_STATUS`
- `buildPermissionReview(request)`
- `assertPermissionReviewSafe(review)`

The contract builds a preview-only permission review object with:

- action type
- intent/domain
- risk level
- user-visible summary
- data needed
- future confirmation requirement
- cancel availability
- disabled confirm state
- execution disabled
- side effects disabled
- provider handoff disabled
- backend write disabled
- audit write disabled
- informational-only permission prompt disclosure

Unsafe requests that attempt to enable execution, side effects, backend writes, audit writes, hidden execution, background execution, or enabled confirmation are downgraded to a blocked but still inert review object.

### Audit Event Contract

`public/nexus-audit-event-contract.js` exports:

- `AUDIT_EVENT_STATUS`
- `buildAuditEventPreview(eventRequest)`
- `assertAuditEventPreviewSafe(event)`

The contract builds audit-ready preview metadata without writing it anywhere. It includes:

- event type
- risk level
- intent/domain
- action type
- source status
- permission status
- summary-only redaction policy
- no backend write
- no storage write
- no network call
- no execution

Redaction rules explicitly exclude secrets, credentials, tokens, payment data, health details, precise location, raw uploaded media, and contact details unless a future explicit permission phase allows them.

## Runtime Behavior

Sprint C extends the Sprint B preview renderer:

1. Nexus classifies a typed or spoken prompt.
2. Nexus builds the preview-only plan.
3. If the route is blocked or permission-required, Nexus builds a permission review preview.
4. Nexus builds an audit event preview.
5. The Standard User preview card shows:
   - `Nexus Plan Preview`
   - `Permission Review Preview`
   - `Audit Event Preview`
   - data needed
   - disabled confirm control
   - enabled `Cancel preview` control
   - `No action has been taken`

Purely informational agriculture/source prompts keep the Sprint B behavior and do not show a false permission requirement.

## Safety Boundaries

Sprint C does not enable:

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
- audit backend writes
- hidden staged action
- background execution
- silent side effects
- fake source names, experts, providers, freshness, confidence, or local recommendations

The confirm control is disabled. The cancel control only removes the local preview card.

## QA Results

Required QA for Sprint C:

- `git diff --check`
- `node --check server.js`
- `node --check public/app.js`
- `node --check public/nexus-agriculture-support-response-card.js`
- `node --check public/nexus-agriculture-source-registry.js`
- `node --check public/nexus-permission-gated-action-contract.js`
- `node --check public/nexus-voice-text-intent-router.js`
- `node --check public/nexus-planner-preview-contract.js`
- `node --check public/nexus-permission-review-contract.js`
- `node --check public/nexus-audit-event-contract.js`
- `node --check scripts/nexus-sprint-c-permission-audit-foundation-qa.js`
- `node --check scripts/nexus-autonomous-runtime-preview-integration-qa.js`
- `node --check scripts/nexus-phase-102-agriculture-source-registry-hardening-qa.js`
- `node --check scripts/nexus-phase-102-to-105-autonomous-foundation-batch-qa.js`
- `node --check scripts/nexus-phase-104-voice-text-intent-router-qa.js`
- `node --check scripts/qa-suite.js`
- `node scripts/nexus-sprint-c-permission-audit-foundation-qa.js`
- `node scripts/nexus-autonomous-runtime-preview-integration-qa.js`
- `node scripts/nexus-phase-102-agriculture-source-registry-hardening-qa.js`
- `node scripts/nexus-phase-102-to-105-autonomous-foundation-batch-qa.js`
- `node scripts/nexus-phase-104-voice-text-intent-router-qa.js`
- `npm.cmd run qa:nexus-sprint-c-permission-audit-foundation`
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

Validated low-risk agriculture prompts:

- `My maize leaves are turning yellow`
- `My crops have spots on the leaves`
- `How do I improve irrigation?`
- `How do I prepare for drought?`
- `What should I do about pests eating my crops?`
- `I need help with crop issues`

Result: agriculture prompts remained preview-only and did not show false permission or audit requirements. Crop-support prompts continued to preserve the Phase 101 agriculture support card/workflow behavior.

Validated source/freshness prompts:

- `Nexus, explain the source`
- `Nexus, how fresh is this guidance?`
- `Nexus, what confidence do you have?`

Result: source prompts remained preview-only and did not claim live source lookup, provider validation, or executed action.

Validated permission-required prompts:

- `Nexus, call an agronomist`
- `Nexus, message the supplier`
- `Nexus, book an appointment`
- `Nexus, use my location`
- `Nexus, open my camera`
- `Nexus, upload a crop photo`
- `Nexus, buy seeds`

Result: permission-required prompts showed the `Permission Review Preview` and `Audit Event Preview` sections. The confirm control remained disabled. The cancel control was visible and removed the preview without executing anything.

Validated blocked prompts:

- `Nexus, pay for fertilizer`
- `Nexus, get medical help`
- `Nexus, dispatch emergency help`

Result: blocked prompts showed the blocked preview, permission review preview, and audit event preview. No payment, medical, or emergency action was executed.

Final browser validation confirmed:

- no provider, call, message, appointment, payment, transaction, location, camera/media, health, medical, pharmacy, emergency, backend write, audit write, storage write, network call, or hidden action occurred
- no hidden/debug metadata was exposed in the user-facing surface
- no browser permission prompt opened
- no Sprint C console warning or error was introduced
- the temporary browser-validation `db.json` change was restored before commit

## Limitations

- Sprint C does not write audit events.
- Sprint C does not request permissions.
- Sprint C does not persist permission state.
- Sprint C does not activate provider adapters.
- Sprint C does not make confirmation executable.

## Next Sprint Recommendation

Sprint D should define the approval and audit record lifecycle for future execution, still without enabling execution. It should establish how a future provider connector would receive a confirmed, audited, permission-approved action object once the required real integrations exist.
