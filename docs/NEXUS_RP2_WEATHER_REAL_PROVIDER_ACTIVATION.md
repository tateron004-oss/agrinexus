# Nexus RP2 Weather Real Provider Activation

RP2 completes weather as the first controlled read-only provider in the REALPROVIDER-ACTIVATION lane. It uses the existing WEATHER1/WEATHER2 harnesses and does not activate Standard User runtime behavior.

## Activation Scope

- Provider category: Weather
- Provider id: `weather`
- Test location: `Stockton, CA`
- Mode: developer/QA-only
- Runtime status: Standard User remains default-off and unchanged
- Live action status: no execution authorized

## Required Configuration

Weather live provider validation requires all of:

```powershell
$env:NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED="true"
$env:NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED="true"
$env:NEXUS_WEATHER_PROVIDER_ENABLED="true"
$env:NEXUS_WEATHER_PROVIDER_API_KEY="<weather-api-key>"
```

Optional:

```powershell
$env:NEXUS_WEATHER_VALIDATION_LOCATION="Stockton, CA"
```

Secrets must remain environment-only. They must not be committed, printed, exposed to browser code, stored in audit payloads, or copied into fixtures.

## Required Result Shape

The weather smoke result must include:

- provider name
- explicit query/location text
- retrievedAt
- normalized current conditions or provider-unavailable summary
- source/result metadata
- citation/source fields where available
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

## Safety Boundaries

Weather activation is read-only and explicit-location-only. It must not use browser geolocation, request location permission, infer or store user location, dispatch help, route, call, message, book, buy, pay, submit forms, contact providers, write backend state, navigate externally, or expose secrets.

## Current Validation Status

If credentials are available, RP2 runs one read-only weather lookup for `Stockton, CA` and normalizes the result. If credentials are absent, the QA must pass with safe skipped/missing-config behavior. At the time of this phase, missing credentials are expected to skip safely unless local environment variables are supplied.

## RP2 QA Expectations

RP2 QA reuses the WEATHER1 validation and WEATHER2 real-provider smoke harness. It proves disabled flags skip safely, missing API key skips safely, explicit location text is required, output is redacted, Standard User runtime is not wired to provider lookup, and no executable action or provider handoff is created.
