# Nexus Sprint LIVE8 - Job Search and Application Assistance Provider Readiness

## Purpose

LIVE8 adds an inert job search and application assistance provider readiness module. It prepares Nexus to search configured job sources and help users prepare applications while keeping application submission, employer contact, account creation, resume upload, email sending, payments, backend writes, and persistent job tracking disabled.

This phase does not wire job retrieval into Standard User runtime and does not make network requests.

## Files

- `server/nexus-job-search-source-provider.js`
- `scripts/nexus-sprint-live8-job-search-application-provider-readiness-qa.js`

## Supported Behavior

- recognize job search intent
- recognize application preparation intent
- build a read-only job search query
- return provider-not-configured when flags/config are missing
- return mock job results when flags are enabled but credentials are missing
- return source-query-ready when live flags and config are present, without making a network call in this readiness phase
- provide application preparation preview fields
- keep `applicationActionAllowed: false`
- keep `applicationSubmissionAuthority: false`
- keep `executionAuthority: false`

## Provider Candidates

- job board provider adapter
- employer career page adapter
- public job feed adapter
- workforce program/job board adapter
- NGO/government workforce opportunity source
- agriculture employment/training opportunity source
- mock/fixture job provider until real providers are selected

## Provider Configuration

Live job search readiness requires:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
- `NEXUS_JOB_SEARCH_PROVIDER_ENABLED=true`
- `NEXUS_JOB_SEARCH_PROVIDER_API_KEY` or configured public source endpoint

Feature flag default:

- `NEXUS_JOB_SEARCH_PROVIDER_ENABLED=false`

Missing config must return provider-not-configured, provider-required, or mock mode instead of failing.

## Safety Boundary

LIVE8 must not:

- submit a job application
- contact an employer
- send email
- create accounts
- upload resumes
- log into job boards
- process application payments
- run background checks
- persist sensitive personal data
- write backend job tracking state
- create pending real-world actions
- make network calls in local-safe QA

All job source results preserve `readOnly: true`, `noExecutionRequired: true`, `applicationActionAllowed: false`, `applicationSubmissionAuthority: false`, and `executionAuthority: false`.

## LIVE9 Readiness

LIVE9 should add agriculture context provider readiness for agriculture weather, market, crop, soil, irrigation, and public food-security context without purchase, sale, payment, or marketplace execution.
