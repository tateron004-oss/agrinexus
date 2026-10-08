# Music, radio and video in Kyro

Kyro plays music, public radio and video for real, on the person's own phone, and only says it is playing after the sound or picture has actually started.
Nothing is downloaded, ripped, converted or relayed by the server: the phone plays straight from each provider's own URL, or from YouTube's official player.

## What a person can say

| English | Kiswahili |
|---|---|
| play Burna Boy Last Last | cheza Sauti Sol Melanin |
| play radio / play Capital FM / play radio Citizen | weka redio / weka redio Citizen |
| play music (nothing named) | cheza muziki |
| watch how to plant maize / show me a video of drip irrigation | angalia video ya kilimo cha mahindi |
| open YouTube and play Last Last / play Last Last on YouTube / watch drip irrigation on YouTube | fungua YouTube na cheza Sauti Sol Melanin |
| pause (or pause the music) / resume | sitisha (au sitisha muziki) / endelea |
| stop the music | simamisha muziki |
| next song / previous song | wimbo unaofuata / wimbo uliopita |
| volume up / volume down / mute / unmute | ongeza sauti / punguza sauti / nyamazisha muziki |
| audio only (low data) | sauti pekee |
| play music in YouTube from now on / play music in Kyro always | cheza muziki kwenye YouTube kuanzia sasa |

"Play music" with no song or artist starts the person's last choice if this phone remembers one, otherwise a popular LOCAL radio station for their country
(instant, free, no ads), and says what is playing and "Or tell me a song."

Typed and spoken sentences go through one parser, `public/kyro-media-commands.js`, which the phone and the server both use, so both sides agree on what is a media command.

## How it works

```
person says/types "play ..."              (typed Send box, spoken transcript, realtime voice workspace action, or the server's planner tools)
        |
        v
phone: handleNexusUnifiedBrainRuntimeCommand -> kyroMediaCommand -> public/kyro-media-player.js
        |  POST /api/media/resolve { query, kind, country, language, audioOnly, excludeIds, handoff }
        v
server: server/media/resolver.js  -> ordered, preflight-checked candidates + which providers were tried and why
        |
        v
phone: tries candidate 1 in a real <audio>/<video> (or YouTube's official IFrame player).
       "Playing X on <provider>" is said only after the `playing` event AND the clock moving.
       Fails -> "That stream is not available, trying another." -> candidate 2 ... then asks the resolver again with excludeIds for the next provider.
       Autoplay blocked -> big Play button + "Tap play to start."
```

* The mini-player bar (`public/kyro-media-player.js`, styled at the end of `public/styles.css`) stays on screen while the person moves around the app: title,
  artist or station, source, licence, play/pause, previous, stop, next, volume, "Audio only", "Play music in", and close. Live radio shows LIVE;
  previews show "30-second preview". It sets the Media Session (lock-screen title, play/pause/next).
* The older routes keep their shapes: `/api/music/providers/playback` (preview first, then one YouTube candidate), `/api/music/youtube/search`, and the
  `media.play` tool's verified outcome. They now use the same providers, quota guard and cache.
* `media.control` (pause, resume, stop, next, previous, volume, mute) is a server tool that returns an INSTRUCTION; the phone's player carries it out. Its outcome
  is "instructed", never "paused": only the phone can see whether anything was playing, and it says "Nothing is playing right now." when not.

## Provider chain

Providers are tried in order and the search stops at the first one with a playable, preflight-verified match, so YouTube's scarce quota is only spent when the
free sources cannot help (or when the phone asks again after a candidate failed).

| Kind | Order |
|---|---|
| music | radio-browser (only when the request is a station or a genre, e.g. "play gospel", "play Capital FM") -> Audius -> YouTube (key) -> Jamendo (client id) -> Internet Archive audio -> Apple 30-second preview LAST |
| radio | radio-browser.info (a popular local station when no name is given; prefers the person's country) |
| video | YouTube (key) -> Internet Archive moving images (public-domain film collections and Creative Commons) -> Wikimedia Commons |

* **radio-browser.info** (no key): servers are discovered from `https://all.api.radio-browser.info/json/servers`, a descriptive `User-Agent` is sent, the
  stream (`url_resolved`) is preflight-checked, https is preferred (an http-only station is only used if its https form works, because an https page cannot play
  http audio), HLS-only stations are skipped on browsers that cannot play HLS. After a station really plays, the phone calls `POST /api/media/played`, which counts
  one "click" through `/json/url/{uuid}` (their etiquette), at most once a day per station from this server.
* **Audius** (no key): public API with `app_name=KyroAgriNexus`, host discovery from `https://api.audius.co`, explicit and gated tracks skipped (Audius has no
  dependable explicit flag, so the wording is checked too), and a loose title match is never played as the song asked for. The phone streams
  `/v1/tracks/{id}/stream` directly.
* **YouTube** (key): Data API v3 `search.list` with `type=video`, `videoEmbeddable=true`, `videoSyndicated=true`, `safeSearch=moderate`, `videoCategoryId=10` for
  music and the person's `regionCode`; `videos.list` for embeddable/public/region checks; the public oEmbed endpoint as the final embeddability test. Played ONLY in
  YouTube's official IFrame player (visible, inside the bar; "playing" means genuine player state 1) or handed off as a normal youtube.com link.
* **Jamendo** (client id): only when `JAMENDO_CLIENT_ID` is set.
* **Internet Archive** (no key): only items with a Creative Commons / public-domain licence (audio) or from public-domain film collections (video);
  the smaller video file is chosen for slow connections.
* **Wikimedia Commons** (no key): freely licensed video.
* **Apple iTunes preview**: official 30-second clips, always last, always labelled `isPreview:true` and spoken as a preview.

Without a YouTube key everything above still works for music and radio; "watch ..." falls back to Archive and Commons; and the person is told plainly
"YouTube is not set up on this server" when nothing is found. If YouTube is not set up, "on YouTube" requests hand off to a YouTube SEARCH page
(`https://www.youtube.com/results?search_query=...`), which needs no key.

### Hand-off to YouTube ("Open YouTube and play ...")

Kyro resolves the best match (the exact video with a key, a search page without one) and says "I've queued <title> on YouTube. Tap Open to play it.", with a large
"Open in YouTube" button (a normal https link: it opens the YouTube app on a phone that has it, a new tab on a computer). Phones and browsers only allow opening
another app from a tap, so the open is attempted automatically only when the page has a live user gesture; otherwise the person taps the button. Kyro never says
"playing" for a hand-off (it cannot see inside the YouTube app); it says "queued". It mentions once per session that YouTube may show ads unless the person has
YouTube Premium. Any in-app stream is stopped first, and nothing auto-resumes when the person comes back.

The per-device setting "Play music in" (in the bar, or by voice) is stored only in `localStorage` (`kyro.media.playIn`): `kyro` (default: radio, Audius and the
YouTube player inside Kyro; YouTube hand-off only when the person says "YouTube") or `youtube` (named songs and videos hand off to YouTube; radio always plays in
Kyro because it is instant, free and has no ads).

## Configuration

Nothing is required for music and radio. No `NEXUS_*` flag is needed for any of these providers.

| Setting | What it does | Needed? |
|---|---|---|
| `YOUTUBE_API_KEY` (aliases `NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY`, `NEXUS_MEDIA_PROVIDER_API_KEY`) | exact YouTube videos for songs and "watch ..." | optional |
| `JAMENDO_CLIENT_ID` | more Creative Commons music (free tier is non-commercial) | optional |
| `NEXUS_YOUTUBE_DAILY_QUOTA` (default 10000) | the daily unit budget the guard enforces | optional |
| `NEXUS_YOUTUBE_QUOTA_RESERVE` (default 300) | units kept back for other uses of the same key | optional |
| `AGRINEXUS_MEDIA_STATE_PATH` | where the quota counter is saved (default: in `AGRINEXUS_DATA_DIR`, or next to `AGRINEXUS_DB_PATH`; otherwise memory only) | optional |
| `NEXUS_MEDIA_ALLOW_HTTP_STREAMS=true` | allow plain-http radio streams (only useful on a local http page) | optional, dev only |

The older flags `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED`, `NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED` and `NEXUS_MUSIC_MEDIA_PUBLIC_PROVIDER_ENABLED` only affect the old
read-only "live source" preview in `server/nexus-music-media-source-provider.js`; playback no longer depends on them.

### YouTube quota

`search.list` costs 100 units and `videos.list` 1 unit of the default 10,000 per day (resets at midnight Pacific time), so about 99 searches a day. The guard
(`server/media/state.js`) counts every search (also the older "show me videos" search, which shares the key), refuses a search that would pass the limit (the other
providers answer instead), treats Google's own `quotaExceeded` answer as "used up until the next Pacific day", persists the counter when a file is writable, and
caches each successful query for 4 hours, so asking for the same song again costs nothing. On Render the file system is erased on deploy, so the counter restarts
with the process; Google's own quota answer then corrects it. To raise the limit: Google Cloud console -> APIs & Services -> YouTube Data API v3 -> Quotas ->
"Apply for higher quota" (the YouTube API Services audit and quota extension form).

### Owner tools

* `GET /api/admin/media/providers` (Admin who owns the platform): which providers are configured, how each has been doing since the server started, last error codes,
  and YouTube quota used/remaining. `recentResolves` lists the last 30 resolve attempts (kind, outcome, total time, and each provider's status, count, milliseconds and reason) so you can see why a request fell back; no query text or person is in it. `?probe=1` also pings the keyless directories. No secrets, queries, users or titles are ever in it.
* `node scripts/check-media-providers-live.js` (read-only; `--json`, `--require-youtube`): resolves a Kenyan radio station, a Nigerian one, a song and a video topic
  against the REAL providers, prints PASS/FAIL per provider with latency and quota, and lists the optional settings still missing. It spends at most two YouTube
  searches and never prints a key. Run it on your machine or in a Render shell.

## Privacy

No listening history is stored on the server: the quota file holds counters only, the result cache is in memory for a few hours and is not tied to a person, the
admin report has no queries. On the phone, `localStorage` holds only preferences (`kyro.media.audioOnly`, `playIn`, `country`, `duck`) and the single last choice
(`kyro.media.last`: query, kind, title) so "play music" can resume it; `forgetLast()` clears it.

## Licensing and terms notes

* YouTube: played only in the official embedded player, visible, with the embed controls intact; search uses `safeSearch=moderate`; no extraction of audio or video;
  ads are YouTube's. Keep the quota guard on. Follow the YouTube API Services Terms (the hand-off link is a plain youtube.com link).
* Audius: `app_name` is sent; tracks are artist uploads streamed through their API; attribution (title, artist, "on Audius") is shown in the bar.
* radio-browser.info: community directory, descriptive User-Agent, click counting as above; the station's own site is linked as the source when known.
* Jamendo: the free client id is for non-commercial use; commercial use needs a Jamendo licensing agreement.
* Internet Archive and Wikimedia Commons: only items marked public domain / Creative Commons are offered; the licence is shown in the bar.
* Apple previews: official 30-second clips from the iTunes Search API, labelled as previews.

## Not supported (on purpose or by platform limits)

* Full Spotify or Apple Music tracks for people who are not subscribers (Spotify OAuth/Premium remains separate and untouched).
* Downloading, ripping, audio extraction from video, or server-side re-streaming of copyrighted content.
* YouTube while the phone is locked or the browser is in the background (YouTube forbids background play of its embed; Android/iOS pause it). Audio from radio,
  Audius and Archive can keep playing with the screen off on most phones; iOS Safari may still pause web audio in some states.
* Ducking the music while Kyro's realtime voice talks. The player has `duck()`/`unduck()` and an optional per-device flag
  (`localStorage kyro.media.duck = "1"`) that lowers the volume while the browser's own speech synthesis talks, but Kyro's realtime WebRTC audio cannot be detected from
  outside the realtime session code, which this change deliberately does not touch. Follow-up: call `KyroMediaPlayerController.duck()` / `.unduck()` from the realtime
  session's speaking start/end events.
* A bare "stop" (without "the music") is left to Kyro's existing stop/wake-word handling; say "stop the music" / "simamisha muziki".
* HLS-only radio stations on browsers without native HLS (desktop Chrome/Firefox): skipped, not played.

## Robustness (what keeps "nothing to play" from happening)

* The Apple preview is searched at the same moment as the first provider and is always added last, so it is ready the moment it is needed.
* Every provider has a hard time budget (7 s) and the whole chain stops starting new providers after 11 s; a provider that hangs, answers garbage, runs out of quota
  or is misconfigured (for example a YouTube key whose API is not enabled) is recorded and skipped, never fatal. The route itself answers within 14 s whatever happens.
* The phone tries at most three full-length candidates, then asks the resolver for the preview alone, then (if the new path cannot even be reached) uses the older
  preview-first path. It says "I found X, but it would not start on this device" rather than "could not find anything" whenever a candidate was offered.
* The phone never decides in advance that it cannot play an audio file: a browser's `canPlayType` answers "" for labels it does not know (Apple's previews are
  labelled `audio/x-m4p`) although it plays the file. Only the real `playing` event with a moving clock counts. Only video files (webm/ogv) are skipped by `canPlayType`.

## Deploy gate

The protected deploy runs a production acceptance probe for `media.play` and a browser capability probe. `media.play` still returns a preflight-verified playable
candidate: if every new provider is down or unconfigured, the Apple preview is the final fallback, and the media executor falls back to the original
iTunes-then-YouTube lookups if the resolver itself fails. The browser probe (`scripts/nexus-run-browser-capability-probes.js`) accepts the same strict evidence
(a real playing `<audio>`, not muted, audible volume, clock advanced at least 3 seconds) from radio-browser, Audius, Jamendo and Internet Archive as it did for the
preview, and YouTube state 1 as before.

## Six-step manual phone test (a few minutes, on mobile data)

1. Sign in on the phone. Say or type **"play radio"**. Expect: the bar appears with LIVE and a station from your country, "Playing <station> live on radio-browser.info"
   only after sound starts; you hear the station.
2. Say **"pause the music"**, then **"resume"**, then **"volume down"**. Expect the sound to pause, resume, and get quieter, each with a short spoken reply.
3. Say **"play Burna Boy Last Last"** (or any song). Expect a full-length track (a time like 0:04 / 2:31 in the bar) or, if nothing is free, a clearly labelled
   30-second preview. Say **"next song"** and **"previous song"**.
4. Say **"cheza Sauti Sol Melanin"** and **"weka redio Citizen"**; replies should come back in Kiswahili. Say **"sitisha"**, **"endelea"**, **"simamisha muziki"**.
5. Say **"open YouTube and play Sauti Sol Melanin"**. Expect "I've queued ... Tap Open", a green Open in YouTube button that opens YouTube (the app if installed),
   a one-time note about ads, and no claim that it is playing; the earlier stream is stopped.
6. With a YouTube key configured, say **"watch how to plant maize"**: a YouTube video plays inside the bar (player state 1). Turn on **Audio only**, ask for music
   again and check that radio/Audius are preferred. Lock the phone: radio should keep playing, YouTube will pause (expected).

## After a deploy

```
node scripts/check-media-providers-live.js            # from a Render shell: PASS/FAIL per provider, quota, what is missing
curl -s -b <admin cookie> https://<site>/api/admin/media/providers
node scripts/nexus-preproduction-black-box.js         # identity part; the media.play probe runs in the protected deploy
```
