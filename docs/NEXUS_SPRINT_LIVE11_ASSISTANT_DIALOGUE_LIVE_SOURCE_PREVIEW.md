# Nexus Sprint LIVE11 - Assistant Dialogue + Live Source Preview

## Purpose

LIVE11 connects the assistant dialogue contract to the live source provider readiness modules in preview/safe mode. It creates a deterministic integration layer that can classify a user request, build a safe assistant preview, and attach a read-only source result or provider-required response.

This phase does not wire the integration into Standard User runtime. The feature flag is default-off:

- `NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=false`

## Files

- `server/nexus-assistant-live-source-preview.js`
- `scripts/nexus-sprint-live11-assistant-dialogue-live-source-preview-qa.js`

## Supported Preview Examples

- weather Nairobi
- weather follow-up tomorrow
- conflict Congo
- conflict near Goma
- shipment tracking missing number
- shipment status from mock fixture
- job search farm jobs near Nairobi
- job application help for Kenya role
- resume update request
- cover letter draft request
- blocked "submit the application now"
- R&B music provider required
- explain simply
- say it in Swahili
- blocked "send money now"
- blocked "call emergency services"

## Preview Shape

Each preview includes:

- assistant dialogue preview fields
- `sourcePreviewEnabled`
- `sourceResult`
- `applicationPreparationPreview` when relevant
- `spokenSummary`
- `displayDetails`
- evidence and verification summary
- source/freshness/confidence/limitations
- clarification question when needed
- safety notice when high-risk
- next safe options
- `noExecutionRequired: true`
- `executionAuthority: false`

## Safety Boundary

LIVE11 must not execute real-world behavior. It must not dispatch providers, call/message, submit applications, upload resumes, send email, book appointments, process payments, share location, use camera, dispatch emergency help, diagnose, prescribe, write backend action state, write storage, or make network calls.

If providers are not configured, Nexus must say the provider/source is required. It must not pretend live lookup occurred.

## Browser Validation

No browser validation is required for LIVE11 because the integration is not loaded by Standard User runtime and the flag remains default-off.

## LIVE12 Readiness

LIVE12 should close out the live source retrieval assistant lane and define the first real provider testing plan, starting with read-only weather provider testing.
