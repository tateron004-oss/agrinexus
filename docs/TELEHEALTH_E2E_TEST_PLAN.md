# Telehealth End-to-End Test Plan

Document date: June 21, 2026

Current remote checkpoint: `origin/main` at `f9f91c7cbd9dfb47e57b90d510cf9a1bc63024ce`

## Purpose

This plan gives testers a practical way to validate AgriNexus Telehealth Mode end to end as a controlled local/demo workflow. It covers the user journey, provider queue journey, health record lifecycle, local video handoff clarity, role privacy, and local-safe QA commands.

## Safety Boundary

Telehealth Mode is not production clinical telehealth.

- Use demo or synthetic test data only.
- Do not enter real patient names, phone numbers, symptoms, vitals, prescriptions, insurance data, or clinical notes.
- Do not use this workflow for diagnosis, treatment, emergency response, prescribing, billing, or live clinical operations.
- The video path is a local browser camera preview plus handoff record only.
- There is no real live provider room.
- There is no real WebRTC, signaling, or production video session engine.
- There is no HIPAA or equivalent compliance claim.
- Provider workflow evidence is local/demo evidence unless a future production provider integration is explicitly built and approved.

## Scope

In scope:

- Standard User and Admin local/demo telehealth workflows.
- Intake, consent, vitals, appointment, provider assignment, referral, follow-up, escalation, outcome review, and provider workflow actions.
- Encounter lifecycle and provider queue display.
- Local camera preview and video handoff metadata.
- Investor redaction and forbidden mutation behavior.
- Unauthorized and unsupported-action API behavior.
- Existing local-safe QA scripts.

Out of scope:

- Real WebRTC/video rooms.
- Live clinical provider network validation.
- Production EHR/FHIR integration.
- Production payment/billing integration.
- HIPAA or regulatory compliance validation.
- Native mobile compile validation.
- Real emergency dispatch.
- Real patient data testing.

## Files Inspected

- `server.js`
- `public/index.html`
- `public/app.js`
- `public/native-bridge.json`
- `docs/TELEHEALTH_PLATFORM_AUDIT.md`
- `scripts/telehealth-contract-qa.js`
- `scripts/telehealth-privacy-role-qa.js`
- `scripts/telehealth-demo-boundary-qa.js`
- `scripts/telehealth-encounter-lifecycle-qa.js`
- `scripts/telehealth-provider-workflow-qa.js`
- `scripts/telehealth-provider-ui-qa.js`
- `scripts/telehealth-video-handoff-qa.js`
- `scripts/workflow-button-audit.js`
- `scripts/app-behavior-audit.js`
- `scripts/qa-suite.js`
- `scripts/confirmed-call-handoff-qa.js`
- `scripts/native-call-bridge-dispatch-qa.js`
- `package.json`

## Environment Setup

Recommended local setup:

```powershell
npm install
node server.js
```

Then open the local app URL shown by the server, commonly `http://localhost:3000`.

If PowerShell blocks npm scripts, use direct Node commands from this document. The local-safe QA scripts use temporary DB files and should not modify `db.json`.

## Roles and Test Personas

Use only demo accounts and synthetic data:

- Admin: validates full health workflow, provider queue, role permission, and detailed state.
- Standard User: validates patient/user-facing local telehealth workflow.
- Investor: validates read-only safe summaries, redaction, and forbidden health/provider mutations.

Role expectations:

- Admin and Standard User can create health records when their role has health write permission.
- Investor can view safe redacted summaries but cannot mutate health, rural health, provider workflow, or healthcare video records.
- Unauthenticated requests to health/video/provider routes must return `401`.

## Test Data Guidance

Use obviously synthetic values:

- Patient: `E2E Demo Patient`
- Symptoms: `Demo fever and headache for workflow validation only`
- Vitals: synthetic temperature, pulse, and blood pressure values
- Provider: `E2E Demo Provider`
- Care note: `Synthetic note for local demo testing only`

Do not use real patient names, real symptoms, real phone numbers, real diagnoses, or actual provider identities.

## Manual E2E Test Cases

### A. Standard User Local/Demo Telehealth Visit

Classification: manual browser test, partially automated by `telehealth-encounter-lifecycle-qa.js`, `telehealth-provider-workflow-qa.js`, `telehealth-provider-ui-qa.js`, and `telehealth-video-handoff-qa.js`.

Steps:

1. Sign in as Standard User.
2. Open Health / AFAYAI Health.
3. Start Intake.
4. Confirm intake with synthetic patient data.
5. Record consent.
6. Capture vitals with synthetic values.
7. Schedule appointment.
8. Assign provider.
9. Confirm the encounter appears in the Telehealth Provider Queue - Local Demo panel.
10. Accept the encounter through provider workflow controls if visible for the role.
11. Start visit.
12. Open local camera preview for video handoff.
13. Confirm the video handoff record.
14. Complete visit.
15. Create outcome review.
16. Verify encounter lifecycle updates in the encounter status list.

Expected results:

- Intake creates a patient reference and encounter.
- Consent, vitals, appointment, provider assignment, video handoff, provider actions, and outcome link to the same encounter.
- Provider queue says local demo and not live clinical dispatch.
- Video UI says local camera preview, handoff-only demo, not connected to a live provider, no real telehealth visit started, no live provider room, and no real-time video connection.
- No browser console or API errors appear.

Pass/fail:

- PASS: Standard User completes intake -> encounter -> provider workflow -> video handoff -> outcome without console/API errors.
- FAIL: UI implies real live provider care, live clinical dispatch, or production video telehealth.
- FAIL: action buttons duplicate-submit or create contradictory encounter state.

### B. Emergency / Escalation Flow

Classification: manual browser test, partially automated by `telehealth-encounter-lifecycle-qa.js` and `telehealth-provider-workflow-qa.js`.

Steps:

1. Create or reuse a synthetic intake encounter.
2. Trigger Emergency from advanced telehealth actions.
3. Verify lifecycle becomes `escalated`.
4. Use provider workflow Resolve escalation.
5. Verify lifecycle becomes `escalation-resolved` and status is resolved.

Expected results:

- Emergency escalation record is created.
- Encounter stores escalation evidence and updates lifecycle.
- Resolution creates provider workflow evidence.
- UI remains local/demo and does not claim real emergency dispatch.

Pass/fail:

- PASS: escalation and resolution update the same encounter.
- FAIL: UI suggests real emergency dispatch or live clinical response.

### C. Referral / Follow-Up Flow

Classification: manual browser test, partially automated by `telehealth-encounter-lifecycle-qa.js` and `telehealth-provider-workflow-qa.js`.

Steps:

1. Create or reuse a synthetic intake encounter.
2. Create referral.
3. Schedule follow-up.
4. Use provider workflow Request follow-up.
5. Verify follow-up record and encounter lifecycle.
6. Confirm provider action history includes the follow-up request.

Expected results:

- Referral and follow-up records link to an encounter.
- Provider action history updates when provider workflow requests follow-up.
- UI does not imply a production referral network.

Pass/fail:

- PASS: referral, follow-up, and provider action history persist and render.
- FAIL: unsupported referral/follow-up action returns `200` or record links are missing.

### D. Rural Health Flow

Classification: manual browser test, partially automated by `telehealth-demo-boundary-qa.js`, `workflow-button-audit.js`, and `app-behavior-audit.js`.

Steps:

1. Open Rural health access.
2. Run Speak symptoms with synthetic data.
3. Run Closest clinic.
4. Run Find pharmacy.
5. Run Mobile clinic.
6. Build handoff.
7. Verify records render in rural health panels and map remains intact.

Expected results:

- Symptom guide, clinic, pharmacy, mobile clinic, and handoff records persist.
- UI retains non-diagnosis and local/demo wording.
- Leaflet/map behavior remains unchanged.

Pass/fail:

- PASS: rural records persist and render without diagnostic or production claims.
- FAIL: UI gives diagnosis, prescription, or real provider dispatch language.

### E. Investor Redaction Flow

Classification: automated already, with optional manual browser review. Covered by `telehealth-privacy-role-qa.js`, `telehealth-provider-workflow-qa.js`, and `telehealth-encounter-lifecycle-qa.js`.

Steps:

1. Create health records as Admin or Standard User with synthetic but sensitive-looking values.
2. Sign in as Investor.
3. Open dashboard and Health areas.
4. Inspect health summaries, encounters, provider actions, and video summaries.
5. Try to trigger health/provider workflow mutations.

Expected results:

- Investor sees safe summaries and redaction markers.
- Investor cannot mutate health, rural health, advanced health, provider workflow, or healthcare video records.
- Patient names, symptoms, vitals, notes, provider names, reasons, note summaries, contact methods, caregiver names, and video notes are not exposed.
- Demo/simulation/default markers remain visible where safe.

Pass/fail:

- PASS: Investor sees only safe summaries and receives `403` for health/provider mutations.
- FAIL: Investor sees raw patient symptoms, vitals, notes, provider names, reasons, note summaries, or contact details.

### F. Unauthorized / Forbidden / Unsupported Behavior

Classification: automated already. Covered by `telehealth-contract-qa.js`, `telehealth-privacy-role-qa.js`, and `telehealth-provider-workflow-qa.js`.

Steps:

1. Without signing in, call health, video, and provider workflow routes.
2. As Investor, call health, rural health, advanced health, provider workflow, and healthcare video routes.
3. Send unsupported health and provider actions.

Expected results:

- Unauthenticated health/video/provider routes return `401`.
- Investor health/provider mutations return `403`.
- Unsupported health, advanced health, and provider workflow actions return `400`.

Pass/fail:

- PASS: status codes are `401`, `403`, and `400` as appropriate.
- FAIL: unsupported action returns `200`, or Investor mutation succeeds.

### G. Video Handoff Clarity Flow

Classification: automated already for metadata and static wording, manual for browser camera permission. Covered by `telehealth-video-handoff-qa.js`.

Steps:

1. Trigger healthcare video session from Health workflow or voice command.
2. Open the local camera preview only after consent.
3. Confirm the handoff record.
4. Verify UI wording and returned record metadata.

Expected metadata:

- `videoMode: "local-handoff-demo"`
- `handoffOnly: true`
- `realTimeVideo: false`
- `liveProviderConnected: false`
- `providerStatus: "local-handoff-ready"`

Expected wording:

- local camera preview
- handoff-only demo
- not connected to a live provider
- no real telehealth visit is started
- no live provider room
- no real-time video connection
- no real WebRTC/signaling engine

Pass/fail:

- PASS: video flow clearly states local handoff demo and does not imply live provider connection.
- FAIL: UI implies real live provider/video care or backend metadata claims a live provider connection.

## Automation Coverage Map

Automated already:

- Native bridge telehealth route and app/backend route contract: `scripts/telehealth-contract-qa.js`
- Unauthenticated health/video behavior: `scripts/telehealth-contract-qa.js`, `scripts/telehealth-privacy-role-qa.js`
- Unsupported health and advanced actions: `scripts/telehealth-contract-qa.js`
- Role privacy and Investor mutation blocks: `scripts/telehealth-privacy-role-qa.js`
- Demo/default provenance: `scripts/telehealth-demo-boundary-qa.js`
- Encounter lifecycle linking: `scripts/telehealth-encounter-lifecycle-qa.js`
- Provider workflow lifecycle actions: `scripts/telehealth-provider-workflow-qa.js`
- Provider queue/static UI contract: `scripts/telehealth-provider-ui-qa.js`
- Video handoff clarity and metadata: `scripts/telehealth-video-handoff-qa.js`
- Workflow button and route availability: `scripts/workflow-button-audit.js`
- App behavior and modal containment: `scripts/app-behavior-audit.js`
- App grouped sanity suite: `scripts/qa-suite.js app`
- Confirmed call handoff regression: `scripts/confirmed-call-handoff-qa.js`
- Native call bridge regression: `scripts/native-call-bridge-dispatch-qa.js`

Should be automated next:

- Browser E2E click path for Standard User intake -> consent -> vitals -> appointment -> provider assignment -> provider queue -> video handoff -> outcome.
- Browser E2E click path for emergency escalation -> resolve escalation.
- Browser E2E click path for rural symptom guide -> clinic/pharmacy/mobile clinic -> handoff packet.
- Browser console and network-error assertion during the full Health journey.
- Camera-permission denied state in the video preview modal.
- Duplicate confirm/submit guard for sensitive workflow modal actions.

Manual browser tests:

- Visual confirmation that provider queue and encounter lists render clearly across desktop and mobile widths.
- Camera permission prompt and fallback copy.
- Low-bandwidth/no-camera browser behavior.
- Keyboard focus order and screen-reader landmarks in the workflow modal.

Documentation-only tester instruction:

- Do not use real patient data.
- Do not test this as production clinical telehealth.
- Do not expect real WebRTC, clinical provider room, emergency dispatch, EHR sync, or payment settlement.

Not testable yet because intentionally absent:

- Real provider joins a video room.
- Real WebRTC signaling.
- Production clinician dispatch.
- Production EHR/FHIR exchange.
- Production prescription, billing, or insurance workflows.
- HIPAA/equivalent compliance validation.

## Automated QA Command List

Run these from the repo root:

```powershell
git status --short
git diff --check
node --check server.js
node --check public\app.js
node --check scripts\telehealth-contract-qa.js
node --check scripts\telehealth-privacy-role-qa.js
node --check scripts\telehealth-demo-boundary-qa.js
node --check scripts\telehealth-encounter-lifecycle-qa.js
node --check scripts\telehealth-provider-workflow-qa.js
node --check scripts\telehealth-provider-ui-qa.js
node --check scripts\telehealth-video-handoff-qa.js
node scripts\telehealth-contract-qa.js
node scripts\telehealth-privacy-role-qa.js
node scripts\telehealth-demo-boundary-qa.js
node scripts\telehealth-encounter-lifecycle-qa.js
node scripts\telehealth-provider-workflow-qa.js
node scripts\telehealth-provider-ui-qa.js
node scripts\telehealth-video-handoff-qa.js
node scripts\workflow-button-audit.js
node scripts\app-behavior-audit.js
node scripts\qa-suite.js app
node scripts\confirmed-call-handoff-qa.js
node scripts\native-call-bridge-dispatch-qa.js
```

If a server-spawning QA command reports transient `ECONNRESET` during parallel execution, rerun it alone and record both the transient and the final result.

## Overall Pass Criteria

Telehealth controlled testing passes when:

- Standard User can complete the local/demo visit path without console or API errors.
- Encounter lifecycle updates are visible and consistent.
- Provider queue clearly says local demo and not live clinical dispatch.
- Provider workflow actions update the same encounter and preserve evidence.
- Video handoff clearly says local camera preview and no live provider room.
- Healthcare video records include non-live metadata.
- Investor sees only safe summaries and cannot mutate health/provider records.
- Unauthenticated requests return `401`.
- Investor mutations return `403`.
- Unsupported actions return `400`.
- QA commands pass.

## Overall Fail Criteria

Stop and file a blocker if:

- UI implies real live provider/video care.
- UI implies real emergency dispatch.
- UI or API exposes raw patient symptoms, vitals, notes, provider names, reasons, note summaries, contact methods, or caregiver names to Investor.
- Unsupported health/provider action returns `200`.
- Unauthenticated health/video/provider route returns anything other than `401`.
- Investor mutation succeeds.
- Confirmed workflow actions duplicate-submit or create contradictory lifecycle state.
- `db.json` is modified by a local-safe QA script.

## Known Limitations

- Telehealth remains local/demo controlled workflow software.
- No real WebRTC/video engine exists.
- No live clinical provider network exists.
- No production EHR or health payment integration is active.
- No HIPAA/equivalent compliance claim exists.
- No dedicated `qa-suite.js telehealth` group exists yet.
- Manual browser testing is still required for full UI sequencing, camera permissions, mobile responsiveness, and accessibility basics.

## Recommended Next Test Automation

1. Add a grouped `qa-suite.js telehealth` command once the Telehealth feature line stabilizes.
2. Add browser automation for the Standard User full visit path.
3. Add browser automation for escalation and rural health paths.
4. Add browser automation for camera denied/unavailable fallback copy.
5. Add duplicate-confirm prevention checks for sensitive workflow actions.
6. Add accessibility checks for modal focus, labels, status regions, and keyboard-only navigation.

## Readiness Recommendation

Telehealth Mode is ready for controlled local/demo end-to-end testing. It is not production clinical telehealth. The next testing emphasis should be manual browser journeys and browser automation around the full workflow sequence, while keeping production clinical, WebRTC, EHR, payment, compliance, and real patient data out of scope.
