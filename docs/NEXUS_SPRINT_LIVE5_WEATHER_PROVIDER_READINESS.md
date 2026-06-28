# Nexus Sprint LIVE5 - Weather Provider Readiness

## Purpose

LIVE5 adds an inert weather provider readiness module for source-backed weather answers. It prepares the contract for future OpenWeather, WeatherAPI, Tomorrow.io, Meteomatics, or NASA POWER integration while keeping all live calls default-off.

This phase does not wire weather retrieval into the Standard User runtime and does not make network requests.

## Files

- `server/nexus-weather-source-provider.js`
- `scripts/nexus-sprint-live5-weather-provider-readiness-qa.js`

## Supported Weather Behavior

- classify weather by user-provided city or country string
- build a read-only current or forecast request shape
- return fixture/mock weather source results without credentials
- return provider-not-configured when live flags or keys are missing
- return source-query-ready when live flags and config are present, without making a network call in this readiness phase
- normalize all results through the LIVE2 source result contract
- include source, freshness, confidence, evidence, and limitation metadata

## Provider Configuration

Live weather readiness requires all of:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
- `NEXUS_WEATHER_PROVIDER_ENABLED=true`
- `NEXUS_WEATHER_PROVIDER_API_KEY` present

When any requirement is missing, the module must return fixture/mock/provider-not-configured states instead of failing the app.

## Safety Boundary

LIVE5 must not:

- ask browser geolocation
- share user location
- store location
- use precise device location
- write backend action state
- create pending real-world actions
- open maps or navigation
- contact providers
- book appointments
- trigger emergency, medical, pharmacy, payment, marketplace, call, or message behavior
- make network calls in local-safe QA

All weather results preserve `readOnly: true`, `noExecutionRequired: true`, and `executionAuthority: false`.

## Future Provider Testing

Future live provider testing should happen only after credentials are configured in environment variables, feature flags are explicitly enabled, timeout/error handling is active, and QA verifies read-only behavior.

## LIVE6 Readiness

LIVE6 should add the same default-off readiness posture for news, security, and conflict source providers with stronger caution language for travel and safety topics.
