# Nexus Sprint LIVE1 - Live Source Retrieval and Assistant Product Boundary

## Current HEAD

Starting repository HEAD for this sprint train: `38ec17378a6865a9305728bb47c8330a7626da93`.

If later phases advance the branch, this document remains the LIVE1 product boundary created from that clean starting point.

## Purpose

Nexus is becoming a real assistant layer for Nexus Workforce AI and AgriNexus. LIVE1 defines how Nexus may answer assistant-style questions, prepare dialogue, and retrieve source-backed information without crossing into real-world execution.

The goal is to let Nexus safely support:

- general assistant questions
- weather and forecast questions
- current events, security, and conflict awareness
- shipment status explanation and tracking readiness
- job search and job application preparation
- agriculture weather, market, crop, soil, and irrigation context
- music and media provider availability readiness
- provider and service status lookup
- follow-up questions, clarifying questions, and simplified or multilingual explanations

## Read-Only Retrieval vs Execution

Read-only retrieval means Nexus may request or normalize information from a configured source provider, mock provider, sandbox provider, or fixture provider. A read-only result never changes the outside world.

Execution means Nexus sends a message, makes a call, books an appointment, submits an application, changes shipment instructions, processes a payment, shares a location, opens a camera, dispatches help, writes a real backend action, or contacts a provider. Execution is not allowed in this sprint.

Every live source or fixture result must include:

- `sourceName`
- `sourceCategory`
- `sourceUrl` or safe provider identifier
- `providerMode`
- `retrievedAt`
- `freshnessStatus`
- `confidenceLevel`
- `limitationNotes`
- `evidenceStatus`
- `userFacingSummary`
- `noExecutionRequired: true`
- `executionAuthority: false`

## Supported Source Categories

- weather
- forecast
- current events and news
- conflict and security awareness
- shipment tracking status
- job search and workforce opportunity retrieval
- job application preparation sources
- agriculture weather and market context
- agriculture public source context
- music and media provider availability
- provider and service status lookup
- general source-backed answers

## Supported Nexus Assistant Functions

Nexus may classify and prepare answers for:

- assistant-style command recognition, including "Nexus", "Hey Nexus", "Can you", "What is", "Track", "Find", "Tell me", "Explain", and "Say it in"
- intent routing
- short-term conversation context
- follow-up handling
- clarification questions
- spoken summary responses
- detailed answer expansion
- source, freshness, confidence, and limitation disclosure
- multilingual and simple-language readiness
- safe next options

## Supported General Questions

LIVE1 supports the product boundary for questions such as:

- "What is the weather in Nairobi?"
- "What about tomorrow?"
- "Will it rain?"
- "Is there fighting in Congo?"
- "What about near Goma?"
- "Is it safe to travel?"
- "Track my shipment."
- "What does in transit mean?"
- "Help me find jobs in Kenya."
- "Find farm jobs near Nairobi."
- "Help me apply for this job."
- "Update my resume for this job."
- "Draft a cover letter."
- "Play R&B music."
- "Use Spotify."
- "Explain that simply."
- "Say it in Swahili."

## Job Search and Application Help

Nexus may retrieve or normalize source-backed job postings from configured, sandbox, mock, or fixture providers. It may summarize job requirements, compare roles, identify missing skills from user-provided skills, prepare application checklists, draft cover letters, draft recruiter messages as drafts only, and suggest resume edits.

Nexus must not submit applications, contact employers, create accounts, upload resumes, log into job boards, send email, pay fees, or store sensitive personal data unless a later approved execution and storage lane enables those actions.

Job source results must include:

- `jobResultId`
- `jobTitle`
- `employerName`
- `jobLocation`
- `country`
- `applicationUrl`
- `sourceName`
- `sourceUrl`
- `providerMode`
- `retrievedAt`
- `freshnessStatus`
- `confidenceLevel`
- `limitationNotes`
- `evidenceStatus`
- `applicationActionAllowed: false`
- `applicationSubmissionAuthority: false`
- `noExecutionRequired: true`
- `executionAuthority: false`

## Source, Freshness, and Evidence Rules

Nexus must never fabricate source names, hide stale data, hide conflicting sources, or pretend a live lookup occurred. For factual or current answers, Nexus must represent:

- `sourceRequirement`
- `sourceStatus`
- `sourceName`
- `sourceCategory`
- `freshnessRequirement`
- `freshnessStatus`
- `lastUpdated`
- `confidenceLevel`
- `limitationNotes`
- `evidenceRequirement`
- `evidenceStatus`

Allowed retrieval states include `provider-connected`, `provider-not-connected`, `source-query-ready`, `source-result-available`, `source-unavailable`, `source-stale`, `source-conflict-detected`, `source-rate-limited`, `source-error`, and `fallback-source-required`.

If no live provider is connected, Nexus must use `sourceStatus: provider-required` or `provider-not-connected`, `freshnessStatus: unavailable`, and `evidenceStatus: source-unavailable` or `not-source-backed`.

## Provider Mode Rules

Provider mode must be explicit:

- `fixture`
- `mock`
- `sandbox`
- `live`

Live providers are default-off. Provider adapters must return provider-not-configured or provider-required when credentials or feature flags are missing. Network requests, when later implemented, must be read-only, timeout-bounded, error-handled, and normalized into the common Nexus source result shape.

## Secret and Config Rules

Secrets must never be hardcoded or committed. Real provider keys must come from environment variables only. Default configuration must keep live retrieval off:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=false`
- `NEXUS_WEATHER_PROVIDER_ENABLED=false`
- `NEXUS_NEWS_SECURITY_PROVIDER_ENABLED=false`
- `NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED=false`
- `NEXUS_JOB_SEARCH_PROVIDER_ENABLED=false`
- `NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED=false`
- `NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED=false`
- `NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=false`

## No-Execution Rules

LIVE1 does not enable:

- autonomous execution
- provider dispatch
- calls, SMS, WhatsApp, Telegram, or email sending
- payments, purchases, checkout, or money movement
- order placement or marketplace transactions
- appointment booking
- location sharing or browser geolocation
- camera/image capture
- emergency dispatch
- medical diagnosis, prescription, dispensing, or pharmacy execution
- employer contact, resume upload, account creation, or application submission
- backend real-world action writes
- pending real-world actions

All source-backed answers must preserve `readOnly: true`, `noExecutionRequired: true`, and `executionAuthority: false`.

## Fallback Behavior When Provider Is Missing

When a provider is missing, unconfigured, stale, conflicting, rate-limited, or unavailable, Nexus must say what source or provider is needed and avoid guessing. It may use fixture, mock, or sandbox data only when clearly labeled with provider mode, freshness, confidence, and limitations.

## High-Risk Caution Behavior

Conflict/security, emergency, health, travel, payment, location, camera, medical, and pharmacy topics require caution language. Nexus may explain limitations and suggest safe next steps, but it must not diagnose, prescribe, dispatch emergency help, process money, share location, open camera, or contact providers.

## Browser Validation Requirements

Browser validation is required only when runtime-visible behavior changes. LIVE1 is documentation and deterministic QA only, so no browser validation is required for this phase.

## Rollback Strategy

Rollback is straightforward because LIVE1 adds only documentation, a QA script, package alias, and safe-suite references. Revert the commit if the boundary language or QA is incorrect.

## LIVE2 Readiness Recommendation

LIVE2 should add an inert provider adapter/source result contract with helpers for normalization, unavailable/error results, read-only validation, provider mode resolution, input redaction, and source request classification. LIVE2 must remain no-execution by default.
