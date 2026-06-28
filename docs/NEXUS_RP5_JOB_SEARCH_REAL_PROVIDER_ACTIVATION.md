# Nexus RP5 Job Search/Application Preparation Real Provider Activation

RP5 adopts the job-search provider lane for controlled read-only workforce and agriculture job discovery. It prepares real source adoption while preserving safe skipped/mock behavior when source credentials or endpoints are not configured.

## Activation Scope

- Provider category: Job search/application preparation
- Provider id: `job-search`
- Mode: developer/QA-only provider validation
- Runtime status: Standard User remains default-off and unchanged
- Live action status: no execution authorized

## Required Configuration

```powershell
$env:NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED="true"
$env:NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED="true"
$env:NEXUS_JOB_SEARCH_PROVIDER_ENABLED="true"
$env:NEXUS_JOB_SEARCH_PROVIDER_API_KEY="<job-search-api-key>"
```

Optional future source endpoint:

```powershell
$env:NEXUS_JOB_SEARCH_PUBLIC_SOURCE_ENDPOINT="<read-only-job-search-source-endpoint>"
```

Candidate sources include job board provider adapters, employer career page adapters, public job feeds, workforce program/job board adapters, NGO/government workforce opportunity sources, and agriculture employment/training opportunity sources.

## Test Queries

- `Find farm jobs near Stockton, CA.`
- `Find agriculture training jobs.`
- `Find workforce development jobs in agriculture.`
- `Show me EV or agriculture technician jobs.`

## Allowed Results

- read-only job listing discovery
- source-backed job or workforce opportunity summary
- citations/source metadata when a real source is configured
- retrievedAt/freshness policy
- fit summary and application preparation preview
- safe next steps that require user review outside Nexus

## Blocked Behavior

RP5 must not submit applications, contact employers, send messages, upload resumes, create accounts, book interviews, fill forms, process payment, share personal information, or create backend job-tracking state.

## Current Validation Status

The current provider module supports deterministic safe states: missing role/location asks for clarification, missing config returns provider-unavailable, mock mode returns a source-shaped job result, application preparation creates a checklist/draft preview only, and live-ready config returns a future read-only query-ready state without performing a network request.

## RP5 QA Expectations

RP5 QA verifies all test queries normalize into safe read-only job search results, missing input is handled safely, application preparation remains preview-only, live-ready mode does not execute network behavior, Standard User runtime is not wired to this provider rollout, and all output preserves no-application/no-employer-contact/no-account/no-upload/no-payment/no-backend-write boundaries.
