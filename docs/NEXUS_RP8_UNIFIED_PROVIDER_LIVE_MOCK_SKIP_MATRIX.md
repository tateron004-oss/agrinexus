# Nexus RP8 Unified Provider Live/Mock/Skip Matrix

RP8 creates a single read-only validation matrix for the six real-provider adoption lanes. It documents provider readiness without activating Standard User runtime behavior or live execution.

## Matrix Scope

- Provider coverage: `weather`, `agriculture-context`, `news-security`, `job-search`, `shipment-tracking`, `music-media`
- Runtime status: Standard User remains default-off and unchanged
- Live action status: no execution authorized
- Validation method: deterministic local-safe harness over missing-input, disabled, mock, live-ready, and provider-error scenarios

## Matrix Fields

Each provider matrix row must include:

- `providerId`
- `category`
- `currentStatus`
- `credentialsRequired`
- `realCallTested`
- `lastTestTimestamp`
- `testQuery`
- `resultType`
- `safetyPosture`
- `standardUserStatus`
- `nextActivationRequirement`
- `sourceStatuses`
- `providerModes`
- `noExecutionAuthorized`
- `noBackendWritePerformed`
- `noLocationPermissionRequested`
- `noProviderContactAuthorized`

## Provider Matrix

| Provider | Category | Test Query | Current Status | Real Call Tested | Standard User Status | Next Activation Requirement |
| --- | --- | --- | --- | --- | --- | --- |
| `weather` | weather/current conditions | `Stockton, CA current weather` | configured through safe skip/mock/live-ready harness | no unless credentials are configured in a live smoke test | default-off and unchanged | verified API key, source terms review, citation/freshness display |
| `agriculture-context` | agriculture guidance/current context | `maize crop disease updates in Kenya` | prepared live-query-ready with safe skip/mock paths | no | default-off and unchanged | verified public/partner source, freshness policy, evidence display |
| `news-security` | news/security/conflict awareness | `farm security updates in Kenya` | prepared live-query-ready with safe skip/mock/conflict paths | no | default-off and unchanged | verified trusted source, uncertainty policy, low-confidence copy |
| `job-search` | job search/application preparation | `farm jobs in Nairobi` | prepared live-query-ready with safe skip/mock/application-prep paths | no | default-off and unchanged | verified job source, application no-execution guard, freshness policy |
| `shipment-tracking` | shipment tracking/logistics status | `AB12345678` | prepared live-query-ready with safe skip/mock/redaction paths | no | default-off and unchanged | verified carrier source, tracking redaction, account-free lookup boundary |
| `music-media` | music/media discovery | `Kenya farming music information` | prepared live-query-ready with safe skip/mock/media-discovery paths | no | default-off and unchanged | verified media metadata source, licensing copy, no-playback boundary |

## RP8 QA Expectations

RP8 QA builds the matrix from `server/nexus-live-provider-adoption-harness.js`, verifies all six providers are represented, verifies every scenario remains safe read-only, verifies required matrix fields are present, verifies no secrets are printed, and verifies no Standard User runtime, provider contact, backend write, location permission, payment, message, call, carrier dispatch, media playback, job application submission, or emergency behavior is introduced.
