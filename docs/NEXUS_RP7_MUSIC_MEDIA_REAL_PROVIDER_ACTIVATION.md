# Nexus RP7 Music/Media Real Provider Activation

RP7 adopts the music/media provider lane for controlled read-only discovery of agriculture, workforce, and educational media resources. It prepares future media-source adoption while preserving safe skipped/mock behavior when source credentials or endpoints are not configured.

## Activation Scope

- Provider category: Music/media discovery
- Provider id: `music-media`
- Mode: developer/QA-only provider validation
- Runtime status: Standard User remains default-off and unchanged
- Live action status: no execution authorized

## Required Configuration

```powershell
$env:NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED="true"
$env:NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED="true"
$env:NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED="true"
$env:NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY="<music-media-api-key>"
```

Optional future source endpoint:

```powershell
$env:NEXUS_MUSIC_MEDIA_PROVIDER_ENDPOINT="<read-only-music-media-source-endpoint>"
```

Candidate sources include a music metadata provider, local media provider, radio stream metadata provider, educational media catalog, workforce training media catalog, and agriculture learning media catalog.

## Test Queries

- `Find music about farming.`
- `Find educational agriculture videos.`
- `Find media resources for agriculture training.`

## Allowed Results

- read-only media metadata lookup
- educational media summary
- agriculture/workforce media resource suggestions
- citations/source metadata when a real source is configured
- retrievedAt/freshness policy
- safe next steps that require user review outside Nexus

## Blocked Behavior

RP7 must not play copyrighted music, stream media, open paid media services, download media, bypass licensing, authenticate to accounts, create playlists, alter account state, store provider tokens, purchase media, expose lyrics, or navigate externally.

## Current Validation Status

The current provider module supports deterministic safe states: missing media request asks for a provider or request, missing config returns provider-unavailable, mock mode returns a source-shaped availability result, and live-ready config returns a future read-only query-ready state without performing a network request.

## RP7 QA Expectations

RP7 QA verifies all test queries normalize into safe read-only media discovery results, missing input is handled safely, playback and streaming remain disabled, live-ready mode does not execute network behavior, Standard User runtime is not wired to this provider rollout, and all output preserves no-playback/no-streaming/no-authentication/no-playlist/no-token-storage/no-purchase/no-external-navigation boundaries.
