# Telehealth Production Boundary

Status date: June 22, 2026

Current remote checkpoint: `origin/main` at `36d614fe18f5e77ea16979e64786816679e833af`

Latest confirmed remote commit: `36d614f Strengthen Nexus visible assistant responses`

## Purpose

This document defines the current production boundary for AgriNexus / Nexus Telehealth Mode.

Telehealth is currently a controlled local-safe demo, workflow, and handoff platform. It supports health workflows, visible emergency guidance, provider-style routing, local camera preview, and confirmation-gated handoffs. It is not a production clinical telehealth service and must not be described as one until live provider, compliance, privacy, security, and operational integrations are designed, reviewed, and validated.

## Implemented Capabilities

The current Telehealth implementation includes:

- Health mode entry points for user-facing health workflows.
- Patient intake support through local-safe health workflow endpoints.
- Provider readiness guidance and provider-style workflow evidence.
- Provider/help/call handoff behavior with confirmation gates for risky actions.
- Explicit video/camera command routing for telehealth video-preview requests.
- A rich local camera preview modal with `Open camera` and `Stop camera` controls.
- Camera denied/error handling that keeps the app usable when permission is blocked.
- Local and non-live handoff wording that separates camera preview from live care.
- Mobile clinic support routing for local workflow/demo scenarios.
- Pharmacy, clinic, and hospital access routing for guidance and map/location-style assistance.
- Emergency health visible response boundaries that lead with emergency-services guidance.
- Confirmation gates for calls, handoffs, and other risky outbound actions.
- Local-safe QA coverage for video handoff, camera discoverability, call confirmation, app behavior, voice routing, and grouped QA suites.

## Production Boundaries

The following are not currently implemented as production/live medical services:

- No confirmed live provider network.
- No real WebRTC provider room or signaling service.
- No live emergency dispatch.
- No live mobile clinic dispatch.
- No production pharmacy transaction or prescription fulfillment integration.
- No production EHR integration.
- No production payment or insurance integration for clinical care.
- No replacement for emergency services.
- No claim that camera preview starts a real telehealth visit.

The camera preview is local and user controlled. It may support a future live workflow, but current behavior remains local preview plus handoff/demo metadata unless explicitly upgraded through a reviewed production architecture.

Any future live integration requires a separate compliance, privacy, provider, and security review before it can be treated as production telehealth.

## Safety And Privacy Requirements

Future Telehealth work must preserve these boundaries:

- Do not imply live medical care when only demo, guidance, or handoff behavior exists.
- Emergency phrases must lead with emergency-services guidance and must not claim live dispatch.
- Health data must be treated as sensitive even in demo workflows.
- Camera access must remain permission-based and user initiated.
- Calls, handoffs, and risky outbound actions must remain confirmation-gated.
- Do not store or expose secrets in frontend config, public JSON, logs, demo data, or client-side bundles.
- Do not expose full health records to roles that should only see redacted or demo-safe projections.
- Production telehealth use in the United States would require HIPAA/privacy/security review; other jurisdictions require equivalent health-data compliance review.

## Developer Continuation Notes

The main runtime remains `server.js` and `public/app.js`; do not migrate Telehealth work into `foundation/` unless a separate migration is explicitly approved.

Primary Telehealth areas to inspect before changing behavior:

- `server.js`: health action routes, video session route, role permissions, public state projection, demo provenance, encounter lifecycle, and provider workflow handling.
- `public/app.js`: Health mode rendering, camera-preview modal behavior, typed/global command routing, visible assistant responses, and telehealth workflow button handlers.
- `public/index.html`: modal and panel containers used by Telehealth UI.
- `public/native-bridge.json`: native bridge API contract for supported health endpoints.
- `docs/TELEHEALTH_PLATFORM_AUDIT.md`: readiness and platform audit context.
- `docs/TELEHEALTH_E2E_TEST_PLAN.md`: end-to-end validation plan.
- `docs/TELEHEALTH_E2E_TEST_RESULTS.md`: recorded E2E results.
- `docs/TELEHEALTH_MANUAL_BROWSER_E2E_RESULTS.md`: manual browser results.
- `docs/TELEHEALTH_VIDEO_CAMERA_MANUAL_RESULTS.md`: camera/video manual validation history.

Suggested future production phases:

1. Strengthen visible demo boundary wording anywhere users could confuse a handoff/demo with live care.
2. Add reviewed provider directory and care partner integration boundaries.
3. Design secure live video architecture, including signaling, authorization, consent, and auditability.
4. Add consent records, audit logs, retention policy, privacy/security review, and jurisdiction-specific compliance review.
5. Add production mobile clinic, pharmacy, provider, EHR, notification, and payment integrations only after provider and compliance contracts are in place.

## QA Coverage

Relevant local-safe commands:

```powershell
node scripts\telehealth-camera-discoverability-qa.js
node scripts\telehealth-video-handoff-qa.js
node scripts\confirmed-call-handoff-qa.js
node scripts\call-intent-smoke.js
node scripts\companion-confirmation-gate-smoke.js
node scripts\voice-response-regression.js
node scripts\qa-suite.js core
node scripts\qa-suite.js app
node scripts\qa-suite.js voice
node scripts\qa-suite.js all-safe
```

Recommended manual validation before promoting any Telehealth change:

- Verify Health mode opens for the intended role.
- Verify explicit camera/video commands open the local camera-preview workflow when expected.
- Verify `Open camera` and `Stop camera` remain visible and user controlled.
- Verify denied camera permission produces a safe fallback without crashing.
- Verify emergency health prompts lead with emergency services guidance.
- Verify handoffs and calls remain confirmation-gated.
- Verify no record is created merely by opening the camera preview.
- Verify Investor or restricted roles do not receive sensitive health details.
- Verify browser console output does not reveal sensitive data or secrets.

## Readiness Statement

Telehealth is appropriate today as a local-safe demo, workflow, provider-readiness, rural-health guidance, and handoff platform. It is not a production clinical telehealth platform. The current implementation is stronger because video/camera behavior is explicitly local and non-live, but the system still requires live-provider architecture, compliance review, privacy/security hardening, operational integrations, and production E2E validation before any production telehealth claim.
