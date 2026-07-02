# Nexus Media/Music Mode Provider Integration

## Purpose

Nexus Media/Music Mode gives Standard User commands a safe entertainment lane for music requests such as R&B, Afrobeats, Nigerian music, amapiano, highlife, gospel, relaxing music, study music, and background music.

This is implemented as a safe provider handoff and search experience. Nexus does not pretend to own or stream music that belongs to external services.

## Current Capability

- Detects music commands in the agentic brain runtime.
- Adds Media/Music as a Standard User command-center mode.
- Produces provider search cards for YouTube, Spotify, and Apple Music.
- Opens provider search links only through user action.
- Supports voice-routed music requests through the existing guarded voice shell bridge.
- Keeps the existing local Kenya-inspired browser-generated rhythm as a separate local demo audio path.
- Provides pause/stop handling that does not claim to control external provider playback.

## Safe Provider Boundary

No hosting, downloading, scraping, ripping, caching, or redistributing copyrighted music is allowed.

Nexus must not:

- download tracks or videos,
- scrape provider audio,
- cache provider media,
- rip audio from YouTube or any other service,
- claim to stream music from a provider without a real provider integration,
- autoplay external media,
- expose provider credentials in frontend code,
- use third-party music APIs without explicit credential and licensing review.

## Provider Posture

### YouTube

Current behavior: open a user-clicked search handoff link.

Future behavior: possible embed or official API integration only after terms, privacy, consent, and UI review.

### Spotify

Current behavior: open a user-clicked Spotify search handoff link.

Future behavior: credentialed playback can only be added through official Spotify authorization, user account consent, and provider status checks.

### Apple Music

Current behavior: open a user-clicked Apple Music search handoff link.

Future behavior: official MusicKit or provider-authorized integration only after credentials, terms, consent, and QA gates are complete.

## User-Facing Safety Copy

Nexus should say:

- "I prepared safe provider search options."
- "Nexus is not hosting, downloading, scraping, caching, or streaming copyrighted music."
- "Provider playback requires user action in the provider app or site."

Nexus should not say:

- "I am streaming this song."
- "I downloaded this track."
- "I can play any copyrighted song directly."
- "I opened provider playback automatically."

## Supported Commands

- "Play R&B."
- "Play African music."
- "Play Afrobeats."
- "Play Nigerian music."
- "Play amapiano."
- "Play highlife."
- "Play gospel."
- "Play relaxing music."
- "Pause music."
- "Stop music."
- "Open this in YouTube."
- "Open this in Spotify."
- "Use music while I study."
- "Play background music."

## Standard User Runtime Impact

Media/Music Mode is active only as a low-risk provider search handoff. It does not activate calls, messages, payments, marketplace transactions, provider contact, location, camera, healthcare, pharmacy, emergency behavior, or backend music services.

## QA Contract

The media QA guard verifies:

- supported commands are recognized,
- provider URLs are safe search handoffs,
- no execution authority is granted,
- no download/cache/scrape/fake playback path exists,
- Media/Music appears in the command center,
- voice shell routes media commands through the guarded bridge,
- package and safe-suite aliases include the media QA.
