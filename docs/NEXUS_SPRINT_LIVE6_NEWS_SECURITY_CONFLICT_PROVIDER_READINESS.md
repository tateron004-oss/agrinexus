# Nexus Sprint LIVE6 - News/Security/Conflict Provider Readiness

## Purpose

LIVE6 adds an inert news, security, and conflict provider readiness module for read-only source-backed awareness. It prepares Nexus for future ReliefWeb, GDELT, ACLED, UN/OCHA-style public sources, trusted news/search providers, and government travel/security advisory adapters.

This phase does not wire news/security retrieval into Standard User runtime and does not make network requests.

## Files

- `server/nexus-news-security-source-provider.js`
- `scripts/nexus-sprint-live6-news-security-conflict-provider-readiness-qa.js`

## Supported Behavior

- build a read-only news/security source query from user-provided region/topic text
- require caution language for conflict/security and travel-risk topics
- prefer multi-source evidence for conflict/security answers
- return provider-not-configured when flags or provider config are missing
- return mock fixture-style results when flags are enabled but credentials are missing
- return source-query-ready when live flags and config are present, without making a network call in this readiness phase
- represent stale, conflicting, rate-limited, unavailable, and error states safely
- normalize output through the LIVE2 source result contract

## Provider Candidates

- ReliefWeb
- GDELT
- ACLED, if configured
- UN/OCHA-style public source adapter when configured
- trusted news/search provider when configured
- government travel/security advisories when configured

## Provider Configuration

Live news/security readiness requires all of:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
- `NEXUS_NEWS_SECURITY_PROVIDER_ENABLED=true`
- `NEXUS_NEWS_SECURITY_PROVIDER_API_KEY` or a configured public-source endpoint identifier

Missing config must return provider-not-configured, provider-required, or mock mode instead of failing.

## Safety Boundary

LIVE6 must not:

- dispatch emergency help
- call authorities
- contact providers
- claim travel is safe with certainty
- hide stale or conflicting sources
- provide certainty when sources conflict
- encourage risky travel
- perform network calls in local-safe QA
- write backend state
- create pending real-world actions
- trigger medical, pharmacy, payment, marketplace, location, camera, call, or message behavior

All results preserve `readOnly: true`, `noExecutionRequired: true`, and `executionAuthority: false`.

## LIVE7 Readiness

LIVE7 should add shipment tracking provider readiness with tracking-number privacy, provider-not-configured fallback, and no delivery-instruction changes.
