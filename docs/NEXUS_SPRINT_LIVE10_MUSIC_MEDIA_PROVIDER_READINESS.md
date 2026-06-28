# Nexus Sprint LIVE10 - Music/Media Provider Readiness

## Purpose

LIVE10 adds an inert music/media provider readiness module. It prepares Nexus to recognize media intent and report provider availability while keeping playback, streaming, authentication, account changes, playlist creation, and provider token storage disabled.

This phase does not wire music/media provider readiness into Standard User runtime and does not make network requests.

## Files

- `server/nexus-music-media-source-provider.js`
- `scripts/nexus-sprint-live10-music-media-provider-readiness-qa.js`

## Supported Behavior

- identify music/media intent
- build a playlist or genre preview request
- report provider availability status
- return provider-not-connected or provider-not-configured when flags/config are missing
- return mock provider availability when flags are enabled but credentials are missing
- return source-query-ready when live flags and config are present, without making a network call in this readiness phase
- normalize output through the LIVE2 source result contract

## Provider Candidates

- Spotify
- local media provider
- radio stream provider

## Provider Configuration

Live music/media readiness requires:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true`
- `NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED=true`
- `NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY` or configured provider endpoint

Missing config must return provider-not-connected, provider-not-configured, provider-required, or mock mode instead of failing.

## Safety Boundary

LIVE10 must not:

- play audio
- stream media
- authenticate users
- store provider tokens
- create playlists
- change account state
- open external media services
- write backend action state
- create pending real-world actions
- make network calls in local-safe QA

All music/media readiness results preserve `readOnly: true`, `noExecutionRequired: true`, and `executionAuthority: false`.

## LIVE11 Readiness

LIVE11 should connect assistant dialogue and source-provider readiness in preview/safe mode, default-off, with provider-required or source-query-ready responses and no execution.
