# Nexus RT1 - Weather Provider Credentialed/Skippable Completion

## Purpose

RT1 closes the weather provider as the first real-time/live provider adoption template. The weather lane is developer/QA-only, read-only, explicit-location-only, and safe to run without credentials.

## Existing Work Confirmed

- WEATHER1 created the read-only weather provider validation harness.
- WEATHER2 created the real API-key smoke harness.
- WEATHER3 added explicit safety reporting fields for provider contact and backend writes.
- LIVE5 defines the weather provider readiness posture.
- LIVE11 defines assistant dialogue live-source preview behavior and remains default-off.

## Credentialed Run Requirements

A real provider call is attempted only when all of these are present:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
- `NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=true`
- `NEXUS_WEATHER_PROVIDER_ENABLED=true`
- `NEXUS_WEATHER_PROVIDER_API_KEY`

The default explicit test location is `Stockton, CA`.

## Safe Skip Behavior

If config or API key is missing, the harness returns a skipped/missing-config result and exits successfully. No fallback execution occurs.

## Safety Boundary

RT1 does not activate Standard User runtime behavior, browser geolocation, location permission, routing, dispatch, provider contact, calls, messages, payments, scheduling, marketplace transactions, medical/pharmacy behavior, emergency behavior, backend writes, or pending actions.

The smoke output must include:

- `noExecutionAuthorized`
- `noLocationPermissionRequested`
- `noDispatchAuthorized`
- `noProviderContactAuthorized`
- `noBackendWritePerformed`

## Operator Notes

Credentials must be provided outside git. Do not write `.env` contents, API keys, provider tokens, or secret output into tracked files.

