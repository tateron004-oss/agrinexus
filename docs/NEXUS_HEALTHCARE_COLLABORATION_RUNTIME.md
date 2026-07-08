# Nexus Healthcare Collaboration Runtime

Nexus now includes a healthcare collaboration runtime for preparing provider-ready healthcare packets, source readiness evidence, FHIR/HIE requests, RPM/RTM summaries, telehealth review packets, pharmacy handoff packets, secure message drafts, and clinician review receipts.

This is production-path runtime code, not a documentation-only lane. It is still safety-gated: Nexus does not diagnose, prescribe, place orders, refill prescriptions, dispatch emergency services, submit referrals, schedule appointments, send PHI, or contact providers unless the required provider credentials, BAA/PHI gates, consent, confirmation, clinician review, and audit controls are satisfied.

## Runtime Surfaces

- Browser module: `public/nexus-healthcare-collaboration-runtime.js`
- Standard User panel: `#nexusHealthcareCollaborationRuntime`
- Status API: `GET /api/healthcare-collaboration/status`
- Source matrix API: `GET /api/healthcare-collaboration/sources`
- Provider evidence API: `GET /api/healthcare-collaboration/evidence`
- FHIR summary API: `GET /api/healthcare-collaboration/fhir/summary`
- Prepare action API: `POST /api/healthcare-collaboration/action`
- Execution gate API: `POST /api/healthcare-collaboration/execute`

## Provider Registry Categories

The runtime models provider/source readiness for:

- EHR and FHIR systems: Epic, Oracle/Cerner, generic SMART on FHIR
- HIE and national exchange systems
- Telehealth video providers
- Secure messaging and patient communication providers
- Care coordination and social care systems
- RPM, RTM, and patient-generated data providers
- Pharmacy and medication networks
- Forms, consent, and intake providers
- Labs, diagnostics, imaging, LIS/PACS/DICOM sources
- Population health and analytics systems

## Required Global Gates

Live healthcare collaboration requires explicit environment gates:

- `NEXUS_HEALTHCARE_COLLAB_ENABLED=true`
- `NEXUS_HEALTHCARE_PHI_ALLOWED=true`
- `NEXUS_HEALTHCARE_BAA_CONFIRMED=true`

Sandbox/local fixture behavior can be enabled with:

- `NEXUS_HEALTHCARE_SANDBOX_ENABLED=true`
- `NEXUS_HEALTHCARE_SYNTHETIC_DATA_ENABLED=true`

Secret values are never returned by the readiness APIs. Missing configuration is reported by environment variable name only.

## Runtime Actions

The Standard User panel exposes workflow cards for:

- Telehealth Visit
- Patient Message
- Provider Message
- Care-Team Message
- Referral Packet
- Chronic Care Escalation
- RPM Summary
- Pharmacy Handoff
- Consent / Intake
- Clinical Records / FHIR
- HIE Record Request
- Labs / Diagnostics
- Imaging Report
- Mobile Clinic Coordination
- Visit Summary Share

Every prepared action creates a local receipt and, when regulated, a clinician review queue item. External provider action remains blocked until confirmation and configured execution gates are satisfied.

## Safety Levels

- Level 1: preparation-only packet
- Level 2: provider/clinician review required
- Level 3: external provider handoff, confirmation required
- Level 4: clinical write/order boundary, blocked by default
- Level 5: emergency boundary, routine healthcare handling blocked

Emergency language directs the user to local emergency services and does not dispatch, route, message, call, or schedule.

## FHIR Sandbox and Live-Ready Adapter

The FHIR adapter returns a sandbox/local fixture summary when live FHIR configuration is missing. It can report live-ready connector status when FHIR endpoint/client credentials plus BAA/PHI gates are present, but it still does not perform clinical writes.

Supported FHIR configuration names include:

- `NEXUS_FHIR_BASE_URL`
- `NEXUS_FHIR_CLIENT_ID`
- `NEXUS_FHIR_CLIENT_SECRET`
- `NEXUS_FHIR_TOKEN_URL`

Epic and Oracle/Cerner aliases have dedicated provider entries with their own environment variables.

## Confirmation and Audit Model

Nexus prepares the packet, exposes missing provider configuration, records a receipt, and queues clinician review where appropriate. It must not silently execute. External provider communication, telehealth scheduling, PHI sharing, FHIR retrieval, pharmacy handoff, or HIE requests require:

- configured provider credentials
- BAA confirmation
- PHI allowed flag
- user consent
- explicit confirmation
- clinician review where required
- audit receipt
- provider availability/confirmation where applicable

## Current Execution Posture

The runtime can now execute preparation, source readiness, provider evidence, FHIR sandbox summary, receipt, and clinician review queue behavior. Live regulated healthcare execution remains blocked unless all gates are intentionally configured in a future activation pass.
