# Nexus WEATHER2 - Real API-Key Weather Smoke Test

## Purpose

WEATHER2 adds a developer/test-only smoke path for one real read-only weather provider call when the required environment flags and API key are present.

This phase does not activate Standard User runtime behavior. It proves that Nexus can safely validate a real weather source through the existing WEATHER1/LIVE5/LIVE11 contracts while preserving explicit-location-only, read-only behavior.

## Required Configuration

The smoke test attempts a live provider call only when all values are present:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
- `NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=true`
- `NEXUS_WEATHER_PROVIDER_ENABLED=true`
- `NEXUS_WEATHER_PROVIDER_API_KEY`

If any value is missing, the smoke test exits successfully with a skipped/missing-config result.

## Test Location

The default explicit test location is:

- `Stockton, CA`

An operator may override it with:

- `NEXUS_WEATHER_VALIDATION_LOCATION`

The test never uses browser geolocation, device location, inferred location, stored location, or location permission APIs.

## Harness

The WEATHER2 smoke harness is:

- `scripts/nexus-weather-live-provider-smoke-qa.js`

The harness reuses the WEATHER1 read-only lookup contract:

- `runOpenWeatherReadOnlyLookup`
- `runWeatherLiveProviderValidationQa`
- `isLiveWeatherValidationConfigured`

## Expected Output

The smoke result includes:

- provider name
- explicit query/location text
- retrievedAt
- normalized current conditions summary
- source/result metadata
- citation/source fields
- confidence
- safety posture
- audit event
- `noExecutionAuthorized`
- `noLocationPermissionRequested`
- `noDispatchAuthorized`
- `noProviderContactAuthorized`
- `noBackendWritePerformed`
- `providerError` when the provider fails safely
- `skippedMissingConfig` when config is absent

## Safety Boundary

WEATHER2 must remain:

- developer/QA-only
- read-only
- explicit-location-only
- default-off
- isolated from Standard User runtime
- secret-safe
- non-executing

WEATHER2 must not introduce:

- browser geolocation
- location permission requests
- inferred or stored user location
- Standard User visible behavior
- provider handoff
- provider contact
- dispatch
- calls or messages
- scheduling or booking
- payments
- marketplace execution
- medical or pharmacy execution
- emergency behavior
- backend writes
- pending real-world actions
- secret logging

## Live Provider Failure

If the live provider call fails after configuration is present, the harness returns a safe provider-error object and still validates that no fallback execution occurred.

Provider failures must not become routing, dispatch, provider contact, location permission, or other real-world behavior.
