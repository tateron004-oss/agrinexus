# Nexus RP3 Agriculture Context Real Provider Activation

RP3 adopts the agriculture context provider lane for controlled read-only rollout. It prepares real source adoption while preserving safe skipped/mock behavior when source credentials or endpoints are not configured.

## Activation Scope

- Provider category: Agriculture context
- Provider id: `agriculture-context`
- Mode: developer/QA-only provider validation
- Runtime status: Standard User remains default-off and unchanged
- Live action status: no execution authorized

## Required Configuration

```powershell
$env:NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED="true"
$env:NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED="true"
$env:NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED="true"
$env:NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY="<agriculture-context-api-key>"
```

Optional future source endpoint:

```powershell
$env:NEXUS_AGRICULTURE_CONTEXT_PUBLIC_SOURCE_ENDPOINT="<read-only-agriculture-source-endpoint>"
```

Secrets must remain environment-only. The provider may be configured later for FAO, FEWS NET, NASA POWER, a local ministry/public agriculture source, or another approved read-only agriculture source.

## Test Queries

- `What crop disease updates should tomato farmers know?`
- `What irrigation guidance is current for small farms?`
- `Find agriculture training resources.`
- `What should farmers know about heat stress in crops?`

## Allowed Results

- read-only crop/agriculture information retrieval
- source-backed guidance
- citations/source metadata when a real source is configured
- confidence/freshness/trust policy
- safe general agricultural education
- safe unavailable or fixture/mock result when credentials are absent

## Blocked Behavior

RP3 must not provide unsafe pesticide/chemical instructions, diagnosis-as-certainty, purchases, provider contact, emergency farming/health claims, form submissions, account login, location permission, marketplace transactions, camera/image diagnosis, payment behavior, dispatch, or backend writes.

## Current Validation Status

The current provider module supports deterministic safe states: missing topic asks for the topic, missing config returns provider-unavailable, mock mode returns a source-shaped mock result, and live-ready config returns a future read-only query-ready state without performing a network request. This is acceptable for RP3 until a credentialed agriculture source is selected.

## RP3 QA Expectations

RP3 QA verifies all test queries normalize into safe read-only agriculture context results, missing input is handled safely, mock mode remains source-shaped, live-ready mode does not execute network or marketplace behavior, Standard User runtime is not wired to this provider rollout, and all output preserves no-execution/no-contact/no-location/no-backend-write boundaries.
