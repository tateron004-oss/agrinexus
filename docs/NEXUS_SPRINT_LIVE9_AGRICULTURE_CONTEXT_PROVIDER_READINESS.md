# Nexus Sprint LIVE9 - Agriculture Context Provider Readiness

## Purpose

LIVE9 adds an inert agriculture context provider readiness module. It prepares Nexus for source-backed agriculture weather, market, crop, soil, irrigation, and food-security context while preserving no-execution boundaries.

This phase does not wire agriculture context retrieval into Standard User runtime and does not make network requests.

## Files

- `server/nexus-agriculture-context-source-provider.js`
- `scripts/nexus-sprint-live9-agriculture-context-provider-readiness-qa.js`

## Supported Categories

- agriculture weather context
- market context
- crop public source context
- soil public source context
- irrigation public source context
- food security context

## Provider Candidates

- FAO data sources where available
- FEWS NET
- NASA POWER
- local ministry/public agriculture sources
- source-backed fixture/mocked market data until real providers are selected

## Provider Configuration

Live agriculture context readiness requires:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
- `NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED=true`
- `NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY` or configured public source endpoint

Missing config must return provider-not-configured, provider-required, or mock mode instead of failing.

## Safety Boundary

LIVE9 must not:

- buy or sell crops
- create marketplace listings
- process payments
- place orders
- contact buyers or sellers
- diagnose crop disease from images
- request camera or location
- write backend action state
- create pending real-world actions
- make network calls in local-safe QA

All agriculture context results preserve `readOnly: true`, `noExecutionRequired: true`, and `executionAuthority: false`.

## LIVE10 Readiness

LIVE10 should add music/media provider readiness with provider availability and playlist/genre preview only, without authentication, streaming, playback, or account changes.
