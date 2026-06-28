# Nexus WEATHER1 - Read-Only Weather Provider Live Validation

## Purpose

WEATHER1 adds the first real-provider validation lane for Nexus source-backed answers. Weather is the lowest-risk provider category because it can be tested as read-only information retrieval with explicit user-provided location text.

This lane validates live weather readiness only. It does not broadly activate the assistant, wire uncontrolled Standard User behavior, request browser/device location, or execute any real-world action.

## Existing Architecture Audited

- Provider adapter contract: `public/nexus-live-source-result-contract.js`
- Source result normalization: `normalizeSourceResult`
- Source metadata: provider name, provider mode, source name, source category, source URL, retrieved time, freshness, confidence, limitations, evidence status, and source status
- Assistant dialogue preview: `server/nexus-assistant-live-source-preview.js`
- Weather provider readiness: `server/nexus-weather-source-provider.js`
- Default-off flags:
  - `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=false`
  - `NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=false`
  - `NEXUS_WEATHER_PROVIDER_ENABLED=false`
- QA suite wiring: LIVE1 through LIVE12 are already included in `nexus-workforce` and `all-safe`

## Validation Harness

The focused harness is:

- `scripts/nexus-weather-live-provider-validation-qa.js`

It validates:

- disabled flag path
- missing API key path
- missing explicit location path
- optional live provider path when config is present
- safe provider-error path if the live request fails
- no browser geolocation usage
- no Standard User runtime activation
- no execution, provider handoff, backend write, dispatch, call, message, payment, camera, location sharing, medical/pharmacy, emergency, marketplace, or appointment behavior

## Required Live Configuration

Live validation runs only when all of these are present:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
- `NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=true`
- `NEXUS_WEATHER_PROVIDER_ENABLED=true`
- `NEXUS_WEATHER_PROVIDER_API_KEY`

Optional:

- `NEXUS_WEATHER_PROVIDER_BASE_URL`

Default base URL if omitted:

- `https://api.openweathermap.org/data/2.5/weather`

## Explicit Test Location

The validation harness uses explicit user-provided location text only. Default test location:

- `Stockton, CA`

Override:

- `NEXUS_WEATHER_VALIDATION_LOCATION`

## Structured Output

The harness returns a structured validation object with:

- provider name
- query/location text
- retrievedAt
- source/result metadata
- normalized weather summary
- confidence
- citation/source fields where available
- safety posture
- audit event
- `noExecutionAuthorized`
- `noLocationPermissionRequested`
- `noDispatchAuthorized`

## Missing Config and Provider Error Behavior

If config or API key is missing, the harness returns a safe skipped/missing-config result and exits successfully.

If a live provider request fails, the harness returns a normalized provider-error object with `sourceStatus: source-error`, `readOnly: true`, `noExecutionRequired: true`, and `executionAuthority: false`.

## Safety Boundary

WEATHER1 does not activate:

- general live browsing
- general assistant autonomy
- Standard User runtime weather UI
- location permission or browser geolocation
- routing
- dispatch
- provider contact
- calls or messages
- payments
- marketplace behavior
- medical/pharmacy behavior
- emergency behavior
- backend writes
- pending real-world actions

All validation output remains read-only and audit-friendly.
