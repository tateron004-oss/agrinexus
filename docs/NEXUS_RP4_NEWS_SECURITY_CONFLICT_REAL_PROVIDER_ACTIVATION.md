# Nexus RP4 News/Security/Conflict Real Provider Activation

RP4 adopts the news/security/conflict provider lane for controlled read-only current-information retrieval. It prepares real source adoption while preserving safe skipped/mock behavior when source credentials or endpoints are not configured.

## Activation Scope

- Provider category: News/security/conflict
- Provider id: `news-security`
- Mode: developer/QA-only provider validation
- Runtime status: Standard User remains default-off and unchanged
- Live action status: no execution authorized

## Required Configuration

```powershell
$env:NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED="true"
$env:NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED="true"
$env:NEXUS_NEWS_SECURITY_PROVIDER_ENABLED="true"
$env:NEXUS_NEWS_SECURITY_PROVIDER_API_KEY="<news-security-api-key>"
```

Optional future source endpoint:

```powershell
$env:NEXUS_NEWS_SECURITY_PUBLIC_SOURCE_ENDPOINT="<read-only-news-security-source-endpoint>"
```

Candidate sources include ReliefWeb, GDELT, ACLED, UN/OCHA public sources, trusted news/search providers, and government travel/security advisories.

## Test Queries

- `What security issues are affecting farmers right now?`
- `What current conflict risks may affect agriculture logistics?`
- `Summarize recent agriculture supply chain security news.`

## Allowed Results

- current information lookup
- source-backed summary
- citations/source metadata when a real source is configured
- retrievedAt/freshness policy
- low-confidence warning and uncertainty disclosure
- safe awareness-only summary

## Blocked Behavior

RP4 must not provide tactical harm guidance, violence facilitation, panic-inducing claims, political persuasion tooling, targeted political influence, emergency dispatch, calls/messages, provider contact, location permission, travel clearance, or safety certainty.

## Current Validation Status

The current provider module supports deterministic safe states: missing topic asks for an area/topic, missing config returns provider-unavailable, mock mode returns a cautious source-shaped result, conflict fixtures disclose uncertainty, and live-ready config returns a future read-only query-ready state without performing a network request.

## RP4 QA Expectations

RP4 QA verifies all test queries normalize into safe read-only news/security results, missing input is handled safely, mock and conflict modes remain source-shaped and cautionary, live-ready mode does not execute network behavior, Standard User runtime is not wired to this provider rollout, and all output preserves no-execution/no-contact/no-location/no-backend-write boundaries.
