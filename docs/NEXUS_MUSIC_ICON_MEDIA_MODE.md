# Nexus Music Icon Media Mode

## What Was Built

Nexus now exposes Music/Media Mode as a visible, compact Standard User capability. It appears as one icon shortcut in the ChatGPT/Copilot-style command center and renders contextual media provider cards only when the user asks for music support.

This is not a streaming service, player replacement, download tool, or subscription workflow. Nexus prepares safe provider handoff options and explains the boundary clearly.

## Where Music Appears

- Standard User mode launcher: `Music / Media`
- Icon: compact music icon
- Example prompt: `Play Afrobeats.`
- Voice/typed command path: routed through Nexus command handling
- Result surface: contextual `Media / Music` card in the Nexus prepared-results area

Music does not appear as a giant dashboard panel, a new workflow tab wall, or a permanent embedded player.

## Icon/Button Behavior

Clicking the Music/Media icon routes a safe music request through the Nexus command center. The default command is:

`Play Afrobeats.`

The app then shows a compact contextual card with safe provider handoff options. It does not navigate away automatically, autoplay audio, open provider accounts silently, or claim playback has started.

## Media Card Behavior

The Media/Music card includes:

- requested music type
- detected provider preference when present
- playback/provider status
- provider option links
- copyright/safety note

Provider option labels include:

- Open in YouTube
- Open in Spotify
- Open in Apple Music

The card is compact and appears only after a music request.

## Supported Music Commands

Nexus recognizes these examples:

- `Play R&B.`
- `Play African music.`
- `Play Afrobeats.`
- `Play Nigerian music.`
- `Play amapiano.`
- `Play highlife.`
- `Play African gospel.`
- `Play gospel.`
- `Play jazz.`
- `Play relaxing music.`
- `Play study music.`
- `Play workout music.`
- `Open R&B in Spotify.`
- `Play Afrobeats on YouTube.`
- `Open gospel music on YouTube.`
- `Pause music.`
- `Stop music.`
- `Resume music.`

If there is no active Nexus local playback, pause/stop/resume commands respond safely and tell the user to control playback in the provider app if the music was opened there.

## Provider Behavior

### YouTube

YouTube is a safe provider search handoff. Nexus can prepare an `Open in YouTube` link. It does not autoplay YouTube, control YouTube playback, download YouTube audio, cache YouTube media, or claim that YouTube playback started.

### Spotify

Spotify is a provider search handoff or future credential-gated playback lane. Nexus can prepare an `Open in Spotify` link. It does not control Spotify playback or expose Spotify credentials.

Potential future configuration names, if a real authorized integration is added later:

- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REDIRECT_URI`

### Apple Music

Apple Music is a provider search handoff or future credential-gated playback lane. Nexus can prepare an `Open in Apple Music` link. It does not fake Apple Music playback.

## Voice Behavior

Voice commands can route music requests through the existing Nexus voice shell where supported. Examples:

- `Nexus, play R&B.`
- `Nexus, play African music.`
- `Nexus, play Afrobeats on YouTube.`
- `Nexus, open R&B in Spotify.`
- `Nexus, stop music.`

If browser/provider playback requires a user gesture, Nexus explains that the user must tap the provider/play option.

## Language Behavior

Music Mode remains compatible with the existing language switch layer. Mixed commands such as `Switch to Swahili and play African music` should remain safe: language handling remains user-initiated and media handling remains provider-handoff only.

## Safety And Copyright Boundaries

Nexus does not:

- download music
- rip audio
- cache copyrighted tracks
- host copyrighted music
- redistribute copyrighted music
- silently autoplay provider media
- claim Spotify, Apple Music, or YouTube playback started without a real authorized integration
- process music subscriptions or payments

Music Mode does not change existing safety gates for calls, messages, provider contact, medical/pharmacy execution, payments, location sharing, camera access, drone dispatch, appointment booking, or emergency dispatch.

## All Modes Preserved

Music/Media was added without removing or weakening:

- Health
- Providers
- Agriculture
- AgriTrade
- Jobs
- Learning
- Maps
- Messages
- Reminders
- Language
- Offline
- Safety
- Voice
- Multilingual support

## QA Commands And Results

Required QA for this phase:

- `git diff --check`
- `node --check server.js`
- `node --check public/app.js`
- `node --check public/nexus-voice-demo-shell.js`
- `node --check scripts/qa-suite.js`
- `node --check scripts/nexus-music-icon-media-mode-qa.js`
- `node scripts/nexus-music-icon-media-mode-qa.js`
- `npm.cmd run qa:nexus-music-icon-media-mode`
- existing command center, onboarding, all-modes, language, performance, safety, chronic/provider/agriculture/workforce/multilingual QA
- `node scripts/qa-suite.js nexus-workforce`
- `node scripts/qa-suite.js all-safe`

## Browser Validation Results

Browser validation should confirm:

- Music icon is visible and compact.
- Ask Nexus remains the primary focus.
- No giant music panel appears by default.
- Clicking Music shows or routes to a contextual Media/Music card.
- Provider options appear only contextually.
- Console warn/error count is recorded.
- Runtime-mutated files are restored before commit.

## Known Limitations

- No real Spotify playback control is active.
- No Apple Music playback control is active.
- No YouTube playback control is active.
- No copyrighted audio is hosted, downloaded, cached, or redistributed.
- Provider links are search handoffs, not account-authorized playback control.

## Recommended Next Setup Steps

If real provider media integrations are desired later:

1. Define provider credential configuration and OAuth scopes.
2. Add explicit account authorization and consent.
3. Add provider-specific playback capability detection.
4. Add audit logging for provider handoff and playback state.
5. Keep provider controls opt-in, reversible, and user-initiated.
