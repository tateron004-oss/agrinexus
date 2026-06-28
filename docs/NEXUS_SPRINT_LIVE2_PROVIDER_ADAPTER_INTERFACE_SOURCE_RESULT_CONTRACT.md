# Nexus Sprint LIVE2 - Provider Adapter Interface and Source Result Contract

## Purpose

LIVE2 adds the inert contract for source-backed answers. It defines the common source result shape that future weather, news/security, shipment, job, agriculture, music/media, and provider-status adapters must return.

This phase does not wire provider retrieval into the Standard User runtime, does not add network calls, and does not execute real-world actions.

## Contract Module

The inert contract lives at:

- `public/nexus-live-source-result-contract.js`

It is not loaded by `public/index.html`, `public/app.js`, or `server.js` in this phase. Future runtime work must remain feature-flagged and must preserve read-only source behavior.

## Helper Functions

The module provides:

- `normalizeSourceResult(providerResult)`
- `buildProviderUnavailableResult(providerName, reason)`
- `buildProviderErrorResult(providerName, errorType)`
- `isSafeReadOnlySourceResult(result)`
- `validateReadOnlySourceResult(result)`
- `getConfiguredProviderMode(providerName, env)`
- `redactSensitiveProviderInput(input)`
- `classifySourceRequestType(query, context)`

## Required Source Result Fields

Every source result must include:

- `sourceResultId`
- `requestType`
- `providerName`
- `providerMode`
- `sourceName`
- `sourceCategory`
- `sourceUrl`
- `query`
- `resultSummary`
- `rawResultAvailable`
- `retrievedAt`
- `lastUpdated`
- `freshnessStatus`
- `confidenceLevel`
- `limitationNotes`
- `evidenceStatus`
- `sourceStatus`
- `readOnly`
- `noExecutionRequired`
- `executionAuthority`

Every safe source result must preserve:

- `readOnly: true`
- `noExecutionRequired: true`
- `executionAuthority: false`

## Provider Modes

Provider mode must be explicit:

- `fixture`
- `mock`
- `sandbox`
- `live`

Live mode may only be reported when all of the following are true:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
- the provider-specific enable flag is true
- the required provider key or config value exists

If those requirements are not met, providers must return `provider-not-configured`, `provider-required`, `provider-not-connected`, or another safe unavailable state.

## Source Request Classification

The contract may classify source request types such as:

- `weather`
- `news-security`
- `shipment-tracking`
- `job-search`
- `job-application-preparation`
- `agriculture-context`
- `music-media`
- `provider-status`
- `general-question`
- `unsupported`

Classification is advisory only. It must not trigger network calls, provider handoff, browser navigation, backend writes, or real-world execution.

## Redaction Rules

Provider inputs may include user-provided text. Before logging or passing to future provider adapters, sensitive values must be redacted where practical:

- phone numbers
- email addresses
- long shipment or tracking-like identifiers
- obvious account or secret tokens

The contract provides `redactSensitiveProviderInput(input)` as a deterministic helper. It is a safety baseline, not a replacement for provider-specific privacy review.

## Provider Unavailable and Error States

Unavailable and error results must remain safe source results. They must still include source metadata, freshness status, limitations, evidence status, and no-execution fields.

Recommended safe statuses include:

- `provider-not-configured`
- `provider-not-connected`
- `source-unavailable`
- `source-rate-limited`
- `source-error`
- `fallback-source-required`

## No-Execution Boundary

LIVE2 must not introduce:

- calls, SMS, WhatsApp, Telegram, or email sending
- payments or money movement
- purchases, checkout, or marketplace transactions
- appointment booking
- location sharing or browser geolocation
- camera or image capture
- emergency dispatch
- medical diagnosis, prescription, dispensing, or pharmacy execution
- job application submission, employer contact, account creation, or resume upload
- backend real-world action writes
- pending real-world actions

The source result contract is read-only, inert, deterministic, and safe to test locally.

## LIVE3 Readiness

LIVE3 should add a mock/fixture provider harness that reads fixture source results, validates the LIVE2 contract, confirms provider unavailable/error/rate-limited states, and proves job application authority remains disabled.
