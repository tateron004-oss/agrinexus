# Nexus Sprint LIVE7 - Shipment Tracking Provider Readiness

## Purpose

LIVE7 adds an inert shipment tracking provider readiness module. It prepares Nexus for future AfterShip, EasyPost, Shippo, and carrier-specific adapters while preserving tracking-number privacy and no-execution boundaries.

This phase does not wire shipment tracking into Standard User runtime and does not make network requests.

## Files

- `server/nexus-shipment-tracking-source-provider.js`
- `scripts/nexus-sprint-live7-shipment-tracking-provider-readiness-qa.js`

## Supported Behavior

- build a read-only shipment tracking query
- detect missing tracking number and ask for the number
- redact tracking numbers in result summaries and query strings
- detect optional carrier preference without contacting carriers
- return provider-not-configured when flags or keys are missing
- return mock shipment status when flags are enabled but credentials are missing
- return source-query-ready when live flags and config are present, without making a network call in this readiness phase
- normalize output through the LIVE2 source result contract

## Provider Candidates

- AfterShip
- EasyPost
- Shippo
- carrier-specific adapters for DHL, FedEx, UPS, postal services, and local carriers when configured later

## Provider Configuration

Live shipment tracking readiness requires all of:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
- `NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED=true`
- `NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY` present

Missing config must return provider-not-configured, provider-required, or mock mode instead of failing.

## Privacy and Safety Boundary

LIVE7 must not:

- expose full tracking number values
- change delivery instructions
- contact carriers
- create shipment changes
- open provider pages
- write backend action state
- create pending real-world actions
- send calls, messages, SMS, WhatsApp, Telegram, or email
- process payments
- share location
- trigger camera, emergency, medical, pharmacy, marketplace, or appointment behavior
- make network calls in local-safe QA

All shipment results preserve `readOnly: true`, `noExecutionRequired: true`, and `executionAuthority: false`.

## LIVE8 Readiness

LIVE8 should add job search and application assistance provider readiness, keeping application submission, employer contact, account creation, resume upload, and backend job tracking disabled by default.
