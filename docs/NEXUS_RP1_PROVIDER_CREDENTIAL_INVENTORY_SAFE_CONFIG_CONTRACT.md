# Nexus RP1 Provider Credential Inventory and Safe Config Contract

RP1 starts the REALPROVIDER-ACTIVATION lane. It inventories the provider credentials and configuration needed for controlled read-only provider rollout. It does not activate Standard User runtime behavior, provider handoff, execution, backend writes, location permission, calls, messages, payments, booking, marketplace transactions, medical/pharmacy behavior, emergency dispatch, camera, microphone, or secret exposure.

## Provider Inventory

| Provider category | Provider id | Required enable flag | Required secret | Optional config | Safe skipped behavior |
| --- | --- | --- | --- | --- | --- |
| Weather | `weather` | `NEXUS_WEATHER_PROVIDER_ENABLED=true` | `NEXUS_WEATHER_PROVIDER_API_KEY` | `NEXUS_WEATHER_VALIDATION_LOCATION`, default test location `Stockton, CA` | Return skipped/missing-config when global flags, provider flag, or API key are absent. |
| Agriculture context | `agriculture-context` | `NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED=true` | `NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY` | source/topic provider endpoint when adopted | Return provider-not-configured or fixture/safe skip unless a real read-only source is configured. |
| News/security/conflict | `news-security` | `NEXUS_NEWS_SECURITY_PROVIDER_ENABLED=true` | `NEXUS_NEWS_SECURITY_PROVIDER_API_KEY` | source endpoint or region/topic settings when adopted | Return provider-not-configured or fixture/safe skip unless a real read-only source is configured. |
| Job search/application preparation | `job-search` | `NEXUS_JOB_SEARCH_PROVIDER_ENABLED=true` | `NEXUS_JOB_SEARCH_PROVIDER_API_KEY` | source endpoint, location, page size when adopted | Return provider-not-configured or fixture/safe skip unless a real read-only source is configured. |
| Shipment tracking | `shipment-tracking` | `NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED=true` | `NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY` | carrier/provider id when adopted | Return provider-not-configured or fixture/safe skip unless a safe test/reference tracking value and credential are configured. |
| Music/media | `music-media` | `NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED=true` | `NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY` | metadata provider endpoint when adopted | Return provider-not-configured or fixture/safe skip unless a read-only metadata provider is configured. |

All provider calls also require the global read-only lane flags:

```powershell
$env:NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED="true"
$env:NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED="true"
```

## Placeholder-Only Configuration Examples

These examples intentionally use placeholder values. Do not paste real secrets into source files, committed docs, issue comments, browser console logs, or QA output.

```powershell
$env:NEXUS_WEATHER_PROVIDER_ENABLED="true"
$env:NEXUS_WEATHER_PROVIDER_API_KEY="<weather-api-key>"
$env:NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED="true"
$env:NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY="<agriculture-context-api-key>"
$env:NEXUS_NEWS_SECURITY_PROVIDER_ENABLED="true"
$env:NEXUS_NEWS_SECURITY_PROVIDER_API_KEY="<news-security-api-key>"
$env:NEXUS_JOB_SEARCH_PROVIDER_ENABLED="true"
$env:NEXUS_JOB_SEARCH_PROVIDER_API_KEY="<job-search-api-key>"
$env:NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED="true"
$env:NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY="<shipment-tracking-api-key>"
$env:NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED="true"
$env:NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY="<music-media-api-key>"
```

## Secret Safety Contract

- Credentials must come from environment variables only.
- `.env` files, if used locally, must remain untracked.
- Secrets must never be committed, printed, copied into fixtures, returned to the browser, included in audit events, or included in source-backed answer cards.
- QA output may show only provider ids, config presence booleans, skipped status, provider-error status, and redacted placeholders.
- Provider modules must preserve safe missing-config behavior.
- Provider harnesses must normalize disabled, missing-input, mock, live-ready, and provider-error paths without exposing secrets.

## Read-Only Rollout Contract

Provider rollout is limited to read-only source retrieval. Every provider category must preserve:

- explicit user-provided query/location/topic/tracking text only
- no browser geolocation
- no location permission
- no provider contact
- no calls or messages
- no payments, purchases, booking, scheduling, or form submission
- no account creation or login
- no emergency dispatch
- no medical/pharmacy execution
- no marketplace transaction
- no backend writes or pending real-world actions
- no hidden navigation or provider handoff

## Expected Safe Skip Status

When required flags or credentials are missing, Nexus should produce a skipped/missing-config or provider-not-configured state with:

- provider id
- requested category
- explicit query text where present
- retrievedAt or validation timestamp where applicable
- source/result metadata
- confidence low or unavailable
- safety posture
- audit metadata when the orchestrator path is used
- `noExecutionAuthorized`
- `noLocationPermissionRequested`
- `noDispatchAuthorized`
- `noProviderContactAuthorized`
- `noBackendWritePerformed`

## RP1 QA Expectations

RP1 QA proves the provider credential inventory covers weather, agriculture context, news/security/conflict, job search, shipment tracking, and music/media; documents environment-only secret handling; verifies placeholder-only examples; checks existing provider harness env names; confirms Standard User runtime is not wired to provider rollout modules; and ensures no unsafe execution language is introduced.
