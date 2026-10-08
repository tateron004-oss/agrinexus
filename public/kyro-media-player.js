// Kyro media player: real music, radio and video playback with honest status.
//
//   * One persistent mini-player bar (title, artist/station, source, play/pause, stop, next, previous, volume, close) that survives navigation.
//   * Audio and video play through the phone's own <audio>/<video> from the provider's own URL; YouTube plays only in its official IFrame player
//     (adapter supplied by app.js), or is handed off to the YouTube app/site. Nothing is downloaded, extracted or relayed.
//   * Kyro only says "Playing ..." after the player's own `playing` event and the clock moving. Autoplay blocked -> a big Play button and "Tap play
//     to start". A candidate that fails -> "That stream is not available, trying another". A YouTube hand-off is only ever "queued".
//   * Commands (English and Kiswahili, typed or spoken) are understood by public/kyro-media-commands.js.
//
// The state machine below is plain JavaScript driven by injected dependencies, so test/nexus/media-player-client.test.js runs it in a vm with
// fake elements. app.js wires the real ones (see "Kyro media player" in app.js).
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(require("./kyro-media-commands.js"));
  else root.KyroMediaPlayer = factory(root.KyroMediaCommands);
})(typeof self !== "undefined" ? self : this, function (Commands) {
  "use strict";

  // ---- words (English / Kiswahili). New Kiswahili is listed in the pull request for a fluent speaker to check. ----------------------------------
  const STRINGS = {
    en: {
      looking: "Looking for {q}...", lookingLocal: "Finding a radio station for you...",
      playingTrack: "Playing {title} by {artist} on {provider}.", playingTitle: "Playing {title} on {provider}.",
      playingStation: "Playing {title} live on {provider}.", playingVideo: "Playing the video {title} on {provider}.",
      playingPreview: "Playing a 30-second preview of {title} by {artist}. The full song is not available from my free sources.",
      orSong: "Or tell me a song.", lastChoice: "Playing your last choice, {title}.",
      tapToPlay: "Tap play to start.", trying: "That stream is not available, trying another.", streamStopped: "The stream stopped. Trying another.",
      tryYoutube: "You can also say: play {q} on YouTube.",
      playInLabel: "Play music in", playInKyro2: "Kyro", playInYoutube2: "YouTube",
      foundButFailed: "I found {title}, but it would not start on this device. Please try again.",
      noneFound: "I could not find anything to play for {q}.", noYoutube: "YouTube is not set up on this server.",
      resolverDown: "I could not reach the music service right now. Please try again.",
      paused: "Paused.", resumed: "Playing again.", stopped: "Stopped.", nothingPlaying: "Nothing is playing right now.",
      nextNone: "I could not find another one.", previousNone: "There is no earlier one.", volume: "Volume {pct} percent.",
      muted: "Muted.", unmuted: "Sound is back on.", ended: "That one has finished.",
      queued: "I've queued {title} on YouTube. Tap Open to play it.", queuedSearch: "I've opened a YouTube search for {title}. Tap Open to choose and play it.",
      queuedHome: "Tap Open to go to YouTube.", adsNote: "YouTube may show ads unless you have YouTube Premium.",
      openYoutube: "Open in YouTube", queuedLabel: "Queued on YouTube",
      videoData: "Video uses a lot of mobile data. Say 'audio only' to save data.",
      audioOnlyOn: "Audio only is on. I will prefer radio and audio.", audioOnlyOff: "Audio only is off.",
      playInKyro: "Music will play inside Kyro.", playInYoutube: "Music will open in YouTube.",
      live: "LIVE", preview: "30-second preview", source: "Source", license: "Licence", buffering: "Buffering...",
      play: "Play", pause: "Pause", stop: "Stop", next: "Next", previous: "Previous", close: "Close", volumeLabel: "Volume", audioOnly: "Audio only",
      region: "Kyro media player"
    },
    sw: {
      looking: "Natafuta {q}...", lookingLocal: "Natafuta kituo cha redio kwa ajili yako...",
      playingTrack: "Ninacheza {title} ya {artist} kupitia {provider}.", playingTitle: "Ninacheza {title} kupitia {provider}.",
      playingStation: "Ninacheza {title} moja kwa moja kupitia {provider}.", playingVideo: "Ninacheza video {title} kupitia {provider}.",
      playingPreview: "Ninacheza sehemu ya sekunde 30 ya {title} ya {artist}. Wimbo mzima haupatikani kwenye vyanzo vyangu vya bure.",
      orSong: "Au niambie wimbo.", lastChoice: "Ninacheza chaguo lako la mwisho, {title}.",
      tapToPlay: "Gusa cheza ili kuanza.", trying: "Hiyo haipatikani, ninajaribu nyingine.", streamStopped: "Mtiririko umesimama. Ninajaribu nyingine.",
      tryYoutube: "Unaweza pia kusema: cheza {q} kwenye YouTube.",
      playInLabel: "Cheza muziki kwenye", playInKyro2: "Kyro", playInYoutube2: "YouTube",
      foundButFailed: "Nimepata {title}, lakini haikuanza kwenye simu hii. Tafadhali jaribu tena.",
      noneFound: "Sikuweza kupata kitu cha kucheza kwa {q}.", noYoutube: "YouTube haijawekwa kwenye seva hii.",
      resolverDown: "Siwezi kufikia huduma ya muziki sasa hivi. Tafadhali jaribu tena.",
      paused: "Imesitishwa.", resumed: "Inaendelea kucheza.", stopped: "Imesimamishwa.", nothingPlaying: "Hakuna kinachochezwa sasa hivi.",
      nextNone: "Sikuweza kupata nyingine.", previousNone: "Hakuna ya awali.", volume: "Sauti ni asilimia {pct}.",
      muted: "Sauti imenyamazishwa.", unmuted: "Sauti imerudi.", ended: "Imekwisha.",
      queued: "Nimeweka {title} kwenye YouTube. Gusa Fungua ili kuicheza.", queuedSearch: "Nimeandaa utafutaji wa YouTube wa {title}. Gusa Fungua ili uchague na kucheza.",
      queuedHome: "Gusa Fungua ili uende YouTube.", adsNote: "YouTube inaweza kuonyesha matangazo isipokuwa una YouTube Premium.",
      openYoutube: "Fungua kwenye YouTube", queuedLabel: "Imewekwa kwenye YouTube",
      videoData: "Video hutumia data nyingi za simu. Sema 'sauti pekee' ili kuokoa data.",
      audioOnlyOn: "Sauti pekee imewashwa. Nitapendelea redio na sauti.", audioOnlyOff: "Sauti pekee imezimwa.",
      playInKyro: "Muziki utachezwa ndani ya Kyro.", playInYoutube: "Muziki utafunguliwa kwenye YouTube.",
      live: "MOJA KWA MOJA", preview: "Sekunde 30 tu", source: "Chanzo", license: "Leseni", buffering: "Inapakia...",
      play: "Cheza", pause: "Sitisha", stop: "Simamisha", next: "Inayofuata", previous: "Iliyopita", close: "Funga", volumeLabel: "Sauti", audioOnly: "Sauti pekee",
      region: "Kicheza muziki cha Kyro"
    }
  };

  function say(lang, key, vars) {
    const table = STRINGS[lang === "sw" ? "sw" : "en"];
    return String(table[key] || STRINGS.en[key] || key).replace(/\{(\w+)\}/g, (_, name) => (vars && vars[name] != null ? String(vars[name]) : ""));
  }

  const EVIDENCE_SCHEMA = "nexus.media-playback-evidence.v1";
  const MAX_FULL_ATTEMPTS = 3;
  const VOLUME_STEP = 0.15;

  const TIME_ZONE_COUNTRY = {
    "Africa/Nairobi": "Kenya", "Africa/Lagos": "Nigeria", "Africa/Dar_es_Salaam": "Tanzania", "Africa/Kampala": "Uganda", "Africa/Accra": "Ghana",
    "Africa/Kigali": "Rwanda", "Africa/Addis_Ababa": "Ethiopia", "Africa/Johannesburg": "South Africa", "Africa/Lusaka": "Zambia", "Africa/Harare": "Zimbabwe",
    "Africa/Blantyre": "Malawi", "Africa/Maputo": "Mozambique", "Africa/Dakar": "Senegal", "Africa/Abidjan": "Cote d Ivoire", "Africa/Douala": "Cameroon",
    "Africa/Kinshasa": "DR Congo", "Africa/Lubumbashi": "DR Congo", "Africa/Bujumbura": "Burundi", "Africa/Mogadishu": "Somalia", "Africa/Juba": "South Sudan",
    "Africa/Khartoum": "Sudan", "Africa/Cairo": "Egypt", "Africa/Casablanca": "Morocco"
  };
  // Which country's radio to offer: the person's own choice on this device, else their phone's time zone, else the region of their language
  // (en-KE), else whatever the app was last pointed at. Never sent anywhere except as the "country" of a resolve request.
  function detectCountry(env) {
    const e = env || {};
    try { const chosen = e.storage && e.storage.getItem("kyro.media.country"); if (chosen) return String(chosen); } catch (_) { /* private mode */ }
    if (e.timeZone && TIME_ZONE_COUNTRY[e.timeZone]) return TIME_ZONE_COUNTRY[e.timeZone];
    for (const language of e.languages || []) {
      const region = /^[a-z]{2,3}-([A-Z]{2})$/.exec(String(language || ""));
      if (region) return region[1];
    }
    return e.fallback || "";
  }

  function createKyroMediaPlayer(deps) {
    const now = deps.now || (() => Date.now());
    const sleep = deps.sleep || (ms => new Promise(resolve => setTimeout(resolve, ms)));
    const storage = deps.storage || null;
    const doc = deps.document || null;
    const listeners = new Set();

    let generation = 0;
    let state = "idle"; // idle | resolving | loading | playing | paused | blocked | queued | failed | ended
    let current = null; // { candidate, engine, query, kind, lang, startedAt }
    let history = []; // candidates played this session, for "previous"
    let tried = []; // candidate ids tried for the current request
    let lastRequest = null; // { query, kind, lang }
    let lastEvidence = null;
    let volume = 0.8;
    let muted = false;
    let ui = null;
    let notedVideoData = false;
    let notedAds = false;
    let youtubeConfigured = null;
    let sessionLang = "en";

    // ---- small storage helpers (per device; never the server) -------------------------------------------------------------------------------
    function readPref(key, fallback) {
      try { const value = storage && storage.getItem(`kyro.media.${key}`); return value == null ? fallback : value; } catch (_) { return fallback; }
    }
    function writePref(key, value) {
      try { if (storage) { if (value == null) storage.removeItem(`kyro.media.${key}`); else storage.setItem(`kyro.media.${key}`, String(value)); } } catch (_) { /* private mode */ }
    }
    function audioOnly() { return readPref("audioOnly", "0") === "1"; }
    function playIn() { return readPref("playIn", "kyro") === "youtube" ? "youtube" : "kyro"; }
    function lastChoice() {
      try { const raw = readPref("last", ""); const value = raw ? JSON.parse(raw) : null; return value && value.query ? value : null; } catch (_) { return null; }
    }

    function langFor(options) {
      const lang = options && options.lang ? options.lang : (deps.getLanguage ? deps.getLanguage() : sessionLang);
      return lang === "sw" ? "sw" : "en";
    }
    function t(key, vars, lang) { return say(lang || sessionLang, key, vars); }

    function emit() {
      const snapshot = getState();
      if (ui) ui.render(snapshot, sessionLang);
      for (const fn of listeners) { try { fn(snapshot); } catch (_) { /* a listener must not break playback */ } }
    }
    function setState(next, extra) {
      state = next;
      if (extra && extra.status !== undefined) statusText = extra.status;
      emit();
    }
    let statusText = "";
    function status(text) { statusText = text; emit(); }
    function announce(text, options) {
      statusText = text;
      emit();
      if (!(options && options.silent) && deps.say) { try { deps.say(text); } catch (_) { /* speech failure must not stop playback */ } }
    }

    function getState() {
      const candidate = current ? current.candidate : null;
      return {
        state, status: statusText, volume, muted, audioOnly: audioOnly(), playIn: playIn(), active: isActive(),
        title: candidate ? candidate.title : "", artist: candidate ? candidate.artist : "", provider: candidate ? candidate.providerName || candidate.provider : "",
        live: Boolean(candidate && candidate.live), isPreview: Boolean(candidate && candidate.isPreview), delivery: candidate ? candidate.delivery : "",
        playbackClass: candidate ? candidate.playbackClass : "", attribution: candidate ? candidate.attribution : "", license: candidate ? candidate.license : "",
        handoff: current && current.handoff ? current.handoff : null, hasPrevious: history.length > 1
      };
    }
    function isActive() { return ["loading", "playing", "paused", "blocked", "queued"].includes(state); }
    function hasPlayer() { return Boolean(current && current.engine) && ["loading", "playing", "paused", "blocked"].includes(state); }

    // ---- the player bar -----------------------------------------------------------------------------------------------------------------------
    function ensureUi() {
      if (!ui && deps.createUi) ui = deps.createUi({ onAction: action => handleUiAction(action), getHost: () => (ui ? ui.stage : null) });
      return ui;
    }
    function handleUiAction(action) {
      if (action === "toggle") return state === "paused" || state === "blocked" ? resumeNow() : pauseNow();
      if (action === "play") return resumeNow();
      if (action === "pause") return pauseNow();
      if (action === "stop" || action === "close") return stopAll({ announce: action === "stop" });
      if (action === "next") return nextTrack();
      if (action === "previous") return previousTrack();
      if (action === "volume-up" || action === "volume-down") return setVolumeStep(action === "volume-up" ? VOLUME_STEP : -VOLUME_STEP);
      if (action === "audio-only") { writePref("audioOnly", audioOnly() ? "0" : "1"); emit(); return undefined; }
      if (typeof action === "string" && action.startsWith("play-in:")) { writePref("playIn", action.slice(8) === "youtube" ? "youtube" : "kyro"); emit(); return undefined; }
      return undefined;
    }

    // ---- engines -------------------------------------------------------------------------------------------------------------------------------
    function wireMediaSession(candidate) {
      const session = deps.mediaSession;
      if (!session || !candidate) return;
      try {
        if (deps.MediaMetadata) {
          session.metadata = new deps.MediaMetadata({
            title: candidate.title || "", artist: candidate.artist || "", album: candidate.providerName || candidate.provider || "",
            artwork: candidate.artworkUrl ? [{ src: candidate.artworkUrl, sizes: "512x512" }] : []
          });
        }
        const bind = (name, fn) => { try { session.setActionHandler(name, fn); } catch (_) { /* unsupported action */ } };
        bind("play", () => resumeNow());
        bind("pause", () => pauseNow());
        bind("stop", () => stopAll({ announce: false }));
        bind("nexttrack", () => nextTrack());
        bind("previoustrack", history.length > 1 ? () => previousTrack() : null);
        session.playbackState = "playing";
      } catch (_) { /* Media Session is a nicety */ }
    }
    function setSessionPlaybackState(value) { try { if (deps.mediaSession) deps.mediaSession.playbackState = value; } catch (_) { /* ignore */ } }

    function evidenceFor(element, candidate, initialTime) {
      const currentTime = Number(element.currentTime || 0);
      return {
        schema: EVIDENCE_SCHEMA, provider: candidate.provider, playbackClass: candidate.isPreview ? "preview" : candidate.playbackClass,
        title: candidate.title, artist: candidate.artist, live: candidate.live === true, playResolved: true, paused: element.paused === true,
        muted: element.muted === true, volume: Number(element.volume), readyState: Number(element.readyState), initialTime, currentTime,
        advancedSeconds: Math.max(0, currentTime - initialTime), duration: Number.isFinite(element.duration) ? Number(element.duration) : null,
        observedAt: new Date(now()).toISOString()
      };
    }

    // Plays one candidate in an <audio>/<video>. Resolves { ok, blocked, reason, telemetry }.
    function startElementEngine(candidate, token, timeoutMs, minAdvance, onStartedHook) {
      const wantVideo = candidate.playbackClass === "video";
      const element = deps.createMedia(wantVideo ? "video" : "audio");
      const engine = {
        kind: wantVideo ? "video" : "audio", element,
        pause() { try { element.pause(); } catch (_) { /* ignore */ } },
        resume() { try { const result = element.play(); if (result && result.catch) result.catch(() => {}); } catch (_) { /* ignore */ } },
        stop() { try { element.pause(); element.removeAttribute("src"); element.load && element.load(); } catch (_) { /* ignore */ } try { element.remove && element.remove(); } catch (_) { /* ignore */ } },
        setVolume(v) { element.volume = Math.max(0, Math.min(1, v)); },
        setMuted(m) { element.muted = m === true; }
      };
      const host = ui && ui.stage;
      return new Promise(resolve => {
        let finished = false;
        let playingSeen = false;
        let started = false;
        const initialTime = Number(element.currentTime || 0);
        const done = result => { if (finished) return; finished = true; resolve({ engine, ...result }); };
        const failNow = reason => { cleanupTimer(); done({ ok: false, reason }); };
        let timer = null;
        const cleanupTimer = () => { if (timer) { deps.clearTimeout ? deps.clearTimeout(timer) : clearTimeout(timer); timer = null; } };

        const check = () => {
          if (finished) return;
          if (token !== generation) { cleanupTimer(); done({ ok: false, reason: "cancelled" }); return; }
          const advanced = Number(element.currentTime || 0) - initialTime;
          if (playingSeen && element.paused === false && Number(element.readyState) >= 2 && advanced >= 0.5 && !started) {
            started = true;
            if (onStartedHook) onStartedHook();
          }
          if (started && advanced >= minAdvance && element.paused === false) {
            cleanupTimer();
            done({ ok: true, telemetry: evidenceFor(element, candidate, initialTime) });
            return;
          }
          if (now() - begun > timeoutMs) { failNow(playingSeen ? "no-progress" : "timeout"); return; }
          timer = (deps.setTimeout || setTimeout)(check, 200);
        };
        const begun = now();

        element.addEventListener("playing", () => {
          playingSeen = true;
          if (finished && state === "blocked") { setState("playing"); announceStarted(); }
        });
        element.addEventListener("error", () => {
          const code = element.error && element.error.code ? element.error.code : 0;
          if (!finished) failNow(`media-error-${code}`);
          else if (token === generation && (state === "playing" || state === "loading")) onStreamFailure("error");
        });
        element.addEventListener("ended", () => { if (token === generation && finished) onEnded(); });
        element.addEventListener("pause", () => { if (token === generation && finished && state === "playing" && !element.ended) { setState("paused"); setSessionPlaybackState("paused"); } });
        element.addEventListener("play", () => { if (token === generation && finished && state === "paused") { setState("playing"); setSessionPlaybackState("playing"); } });
        element.addEventListener("stalled", () => { if (token === generation && finished && state === "playing") scheduleStallCheck(element, token); });
        element.addEventListener("waiting", () => { if (token === generation && finished && state === "playing") scheduleStallCheck(element, token); });

        element.preload = "auto";
        element.controls = true;
        element.autoplay = true;
        try { element.setAttribute("playsinline", ""); } catch (_) { /* ignore */ }
        element.volume = volume;
        element.muted = muted;
        if (!wantVideo) element.dataset.nexusProviderAudio = "true";
        else element.dataset.kyroMediaVideo = "true";
        element.dataset.provider = candidate.provider;
        element.setAttribute("aria-label", `${candidate.title}${candidate.artist ? ` - ${candidate.artist}` : ""}`);
        element.src = candidate.url;
        if (host) host.appendChild(element);

        let playResult;
        try { playResult = element.play(); } catch (error) { playResult = Promise.reject(error); }
        if (playResult && playResult.catch) {
          playResult.catch(error => {
            if (finished) return;
            if (error && (error.name === "NotAllowedError")) { cleanupTimer(); done({ ok: false, blocked: true, reason: "autoplay-blocked" }); }
            else if (error && error.name === "AbortError") { /* a newer load replaced this one; the timeout decides */ }
            else failNow(`play-rejected-${error && error.name ? error.name : "error"}`);
          });
        }
        check();
      });
    }

    let stallTimer = null;
    function scheduleStallCheck(element, token) {
      if (stallTimer) return;
      const before = Number(element.currentTime || 0);
      stallTimer = (deps.setTimeout || setTimeout)(() => {
        stallTimer = null;
        if (token !== generation || state !== "playing") return;
        if (Number(element.currentTime || 0) - before < 0.2 && element.paused === false) onStreamFailure("stalled");
      }, 12000);
    }

    function startYoutubeEngine(candidate, token, timeoutMs) {
      const adapter = deps.youtube;
      if (!adapter) return Promise.resolve({ ok: false, reason: "youtube-player-unavailable" });
      return Promise.resolve(adapter.start({ videoId: candidate.videoId, title: candidate.title, query: lastRequest ? lastRequest.query : candidate.title }, timeoutMs, ui ? ui.stage : null))
        .then(result => {
          const engine = {
            kind: "youtube",
            pause() { adapter.command("pauseVideo"); },
            resume() { adapter.command("playVideo"); },
            stop() { try { adapter.command("stopVideo"); } catch (_) { /* ignore */ } adapter.close(); },
            setVolume(v) { adapter.command("setVolume", [Math.round(Math.max(0, Math.min(1, v)) * 100)]); },
            setMuted(m) { adapter.command(m ? "mute" : "unMute"); }
          };
          if (result && result.ok) {
            if (adapter.watch) adapter.watch(code => { if (token === generation && code === 0) onEnded(); else if (token === generation && code === 2 && state === "playing") { setState("paused"); } else if (token === generation && code === 1 && state === "paused") { setState("playing"); } });
            return { engine, ok: true, telemetry: result.telemetry };
          }
          try { adapter.close(); } catch (_) { /* ignore */ }
          return { engine, ok: false, reason: result && result.reason ? result.reason : "youtube-not-playable" };
        })
        .catch(error => ({ ok: false, reason: `youtube-error-${(error && error.message) || "unknown"}`.slice(0, 80) }));
    }

    // ---- candidate selection ---------------------------------------------------------------------------------------------------------------------
    function playable(candidate) {
      if (!candidate) return false;
      if (candidate.delivery === "youtube") return Boolean(deps.youtube) && Boolean(candidate.videoId);
      if (!/^https:\/\//i.test(String(candidate.url || "")) && !(deps.allowHttp && /^http:\/\//i.test(String(candidate.url || "")))) return false;
      if (candidate.hls && !deps.nativeHls) return false;
      if (candidate.playbackClass === "video" && candidate.mimeType && deps.canPlayType) {
        if (deps.canPlayType("video", candidate.mimeType) === "") return false;
      }
      return true;
    }

    function stopCurrentEngine() {
      stopStall();
      if (current && current.engine) { try { current.engine.stop(); } catch (_) { /* ignore */ } }
    }
    function stopStall() { if (stallTimer) { (deps.clearTimeout || clearTimeout)(stallTimer); stallTimer = null; } }

    // ---- main flow ----------------------------------------------------------------------------------------------------------------------------------
    async function play(rawQuery, options = {}) {
      const lang = langFor(options);
      sessionLang = lang;
      ensureUi();
      let query = String(rawQuery || "").trim();
      let kind = ["music", "radio", "video"].includes(options.kind) ? options.kind : "music";
      const token = ++generation;
      lastEvidence = null;
      let remembered = false;

      if (!query && kind === "music") {
        const last = lastChoice();
        if (last && options.useLast !== false) { query = last.query; kind = last.kind || "music"; remembered = true; }
        else kind = "radio";
      }
      lastRequest = { query, kind, lang };
      tried = options.keepTried ? tried : [];
      history = options.keepHistory ? history : [];

      stopCurrentEngine();
      current = null;
      const wantsHandoff = options.handoff === true || (playIn() === "youtube" && kind !== "radio" && Boolean(query));
      setState("resolving", { status: query ? t("looking", { q: query }, lang) : t("lookingLocal", {}, lang) });

      if (kind === "video" && !notedVideoData && isMobileData()) {
        notedVideoData = true;
        status(t("videoData", {}, lang));
        if (deps.say && options.announce !== false) { try { deps.say(t("videoData", {}, lang)); } catch (_) { /* ignore */ } }
      }

      let attempts = 0;
      let fullAttempts = 0;
      let sawCandidate = null;
      let previewRoundDone = false;
      const attemptLog = [];
      let spokeTrying = false;
      let earlyAnnounced = 0;
      let lastResolve = null;
      // Up to three rounds of the normal chain, then one last round that asks only for the Apple 30-second preview (the one source that is verified on the
      // server and plays everywhere): as long as that lookup works, the person is never told nothing was found.
      for (let round = 0; round < 4; round += 1) {
        const previewRound = round === 3 || fullAttempts >= MAX_FULL_ATTEMPTS;
        if (previewRound && (previewRoundDone || kind !== "music" || !query || wantsHandoff)) break;
        if (previewRound) previewRoundDone = true;
        let resolved;
        try {
          resolved = await deps.request("/api/media/resolve", {
            method: "POST",
            body: { query, kind, country: deps.getCountry ? deps.getCountry() : "", language: lang, audioOnly: audioOnly(), excludeIds: tried.slice(0, 60), handoff: wantsHandoff,
              ...(previewRound ? { onlyProviders: ["apple-itunes-preview"] } : {}) },
            ...(typeof AbortSignal !== "undefined" && AbortSignal.timeout ? { signal: AbortSignal.timeout(22000) } : {})
          });
        } catch (error) {
          if (token !== generation) return { ok: false, cancelled: true };
          setState("failed", { status: t("resolverDown", {}, lang) });
          return { ok: false, resolverUnavailable: true, message: t("resolverDown", {}, lang), error: String(error && error.message || error).slice(0, 160) };
        }
        if (token !== generation) return { ok: false, cancelled: true };
        lastResolve = resolved;
        if (resolved && resolved.youtube) youtubeConfigured = resolved.youtube.configured === true;

        if (wantsHandoff && resolved && resolved.handoff) return queueHandoff(resolved.handoff, lang, options, token);

        const candidates = ((resolved && resolved.candidates) || []).filter(candidate => !tried.includes(candidate.id));
        if (!candidates.length) { if (previewRound) break; round = 2; continue; }
        for (const candidate of candidates) {
          if (token !== generation) return { ok: false, cancelled: true };
          if (!sawCandidate) sawCandidate = candidate;
          if (!playable(candidate)) { tried.push(candidate.id); attemptLog.push({ id: candidate.id, provider: candidate.provider, result: "unsupported-on-this-device" }); continue; }
          // After a few full-length candidates have failed, skip the rest of them and go to the preview rather than keep the person waiting.
          if (!candidate.isPreview && fullAttempts >= MAX_FULL_ATTEMPTS) continue;
          if (!candidate.isPreview) fullAttempts += 1;
          attempts += 1;
          tried.push(candidate.id);
          setState("loading", { status: `${candidate.title}${candidate.artist ? ` - ${candidate.artist}` : ""}` });
          current = { candidate, engine: null, query, kind, lang, remembered, queryNamed: Boolean(query) && !remembered };
          const result = candidate.delivery === "youtube"
            ? await startYoutubeEngine(candidate, token, Math.min(Number(options.verificationTimeoutMs || 10000), 10000))
            : await startElementEngine(candidate, token, candidate.isPreview ? Number(options.verificationTimeoutMs || 15000) : Math.min(Number(options.verificationTimeoutMs || 12000), 12000), Number.isFinite(options.minAdvanceSeconds) ? options.minAdvanceSeconds : 3, () => {
              // The audio is really playing (the `playing` event fired and the clock moved): say so now, not 3 seconds later.
              if (token !== generation || !current || current.candidate !== candidate) return;
              earlyAnnounced = token;
              history.push(candidate);
              setState("playing");
              setSessionPlaybackState("playing");
              wireMediaSession(candidate);
              if (options.announce !== false) announceStarted(); else status(playingMessage(candidate, lang, remembered));
            });
          if (token !== generation) { if (result.engine) try { result.engine.stop(); } catch (_) { /* ignore */ } return { ok: false, cancelled: true }; }
          current = { candidate, engine: result.engine || null, query, kind, lang, remembered, queryNamed: Boolean(query) && !remembered };
          if (result.ok) {
            lastEvidence = result.telemetry;
            return finishStarted(candidate, result, lang, options, remembered, attemptLog, earlyAnnounced === token);
          }
          if (result.blocked) {
            history.push(candidate);
            setState("blocked", { status: t("tapToPlay", {}, lang) });
            announce(t("tapToPlay", {}, lang), {});
            setSessionPlaybackState("paused");
            wireMediaSession(candidate);
            return { ok: false, blocked: true, engine: "kyro-media-player", provider: candidate.provider, message: t("tapToPlay", {}, lang), candidate };
          }
          attemptLog.push({ id: candidate.id, provider: candidate.provider, result: result.reason });
          if (result.engine) { try { result.engine.stop(); } catch (_) { /* ignore */ } }
          current = null;
          if (!spokeTrying) { spokeTrying = true; announce(t("trying", {}, lang), {}); } else status(t("trying", {}, lang));
        }
      }

      if (token !== generation) return { ok: false, cancelled: true };
      // A candidate WAS offered but would not start here: say that, never "could not find anything".
      const parts = sawCandidate
        ? [t("foundButFailed", { title: sawCandidate.title }, lang)]
        : [t("noneFound", { q: query || (kind === "radio" ? "radio" : "that") }, lang)];
      if (!sawCandidate && lastResolve && lastResolve.youtube && lastResolve.youtube.configured === false && kind !== "radio") parts.push(t("noYoutube", {}, lang));
      if (query && kind !== "radio" && !wantsHandoff) parts.push(t("tryYoutube", { q: query }, lang));
      const message = parts.join(" ");
      setState("failed", { status: message });
      announce(message, {});
      return { ok: false, exhausted: true, candidatesOffered: Boolean(sawCandidate), message, attempts: attemptLog, tried: lastResolve ? lastResolve.tried : [], reason: lastResolve ? lastResolve.reason : "" };
    }

    function playingMessage(candidate, lang, remembered) {
      if (candidate.isPreview) return t("playingPreview", { title: candidate.title, artist: candidate.artist }, lang);
      const provider = candidate.providerName || candidate.provider;
      if (candidate.live) return `${t("playingStation", { title: candidate.title, provider }, lang)}`;
      if (candidate.playbackClass === "video") return t("playingVideo", { title: candidate.title, provider }, lang);
      const base = candidate.artist ? t("playingTrack", { title: candidate.title, artist: candidate.artist, provider }, lang) : t("playingTitle", { title: candidate.title, provider }, lang);
      return remembered ? `${t("lastChoice", { title: candidate.title }, lang)}` : base;
    }

    function announceStarted() {
      if (!current) return;
      const candidate = current.candidate;
      const message = playingMessage(candidate, current.lang, current.remembered);
      announce(current.kind === "radio" && !current.queryNamed ? `${message} ${t("orSong", {}, current.lang)}` : message, {});
    }

    function finishStarted(candidate, result, lang, options, remembered, attemptLog, alreadyAnnounced) {
      if (!alreadyAnnounced) history.push(candidate);
      current = { candidate, engine: result.engine, query: lastRequest.query, kind: lastRequest.kind, lang, remembered, queryNamed: Boolean(lastRequest.query) && !remembered };
      if (!alreadyAnnounced) { setState("playing"); setSessionPlaybackState("playing"); wireMediaSession(candidate); }
      try { writePref("last", JSON.stringify({ query: lastRequest.query, kind: lastRequest.kind, title: candidate.title })); } catch (_) { /* ignore */ }
      if (candidate.provider === "radio-browser" && deps.request) {
        const id = String(candidate.id).replace(/^radio-browser:/, "");
        Promise.resolve(deps.request("/api/media/played", { method: "POST", body: { provider: "radio-browser", id } })).catch(() => {});
      }
      if (!alreadyAnnounced) { if (options.announce !== false) announceStarted(); else status(playingMessage(candidate, lang, remembered)); }
      return {
        ok: true, engine: "kyro-media-player", provider: candidate.provider, providerName: candidate.providerName, playbackClass: candidate.isPreview ? "preview" : candidate.playbackClass,
        delivery: candidate.delivery, title: candidate.title, artist: candidate.artist, live: candidate.live === true, isPreview: candidate.isPreview === true,
        videoId: candidate.videoId, playbackVerified: true, audible: true, telemetry: result.telemetry, attempts: attemptLog, candidate, message: statusText
      };
    }

    function queueHandoff(handoff, lang, options, token) {
      stopCurrentEngine();
      history = [];
      const title = handoff.title || (lastRequest && lastRequest.query) || "YouTube";
      current = { candidate: { id: `youtube-handoff:${handoff.url}`, provider: "youtube", providerName: "YouTube", playbackClass: "video", delivery: "handoff", title, artist: handoff.artist || "", live: false, isPreview: false, attribution: "Opens in YouTube", license: "" }, engine: null, handoff, query: lastRequest.query, kind: lastRequest.kind, lang };
      const message = handoff.kind === "video" ? t("queued", { title }, lang) : handoff.kind === "search" ? t("queuedSearch", { title }, lang) : t("queuedHome", {}, lang);
      setState("queued", { status: message });
      // A phone only lets a page open another app when the tap came from the person; try once, only where the platform allows it.
      let opened = false;
      const activation = deps.userActivationActive ? deps.userActivationActive() : false;
      if (activation && deps.openUrl) { try { opened = deps.openUrl(handoff.url) === true; } catch (_) { opened = false; } }
      const adsLine = notedAds ? "" : ` ${t("adsNote", {}, lang)}`;
      notedAds = true;
      announce(`${message}${adsLine}`, {});
      return { ok: true, handoff: true, queued: true, opened, provider: "youtube", providerName: "YouTube", playbackClass: "handoff", url: handoff.url, title, kind: handoff.kind, playbackVerified: false, message };
    }


    async function onStreamFailure(reason) {
      if (!current || !isActive()) return;
      const lang = current.lang;
      announce(t("streamStopped", {}, lang), {});
      await nextTrack({ silentIfNone: false });
    }

    function onEnded() {
      if (!current) return;
      const candidate = current.candidate;
      if (candidate.live) { onStreamFailure("ended"); return; }
      setState("ended", { status: t("ended", {}, current.lang) });
      setSessionPlaybackState("none");
    }

    // ---- controls --------------------------------------------------------------------------------------------------------------------------------------
    function pauseNow() {
      if (!hasPlayer()) return false;
      current.engine.pause();
      setState("paused", { status: t("paused", {}, current.lang) });
      setSessionPlaybackState("paused");
      return true;
    }
    function resumeNow() {
      if (!hasPlayer() && state !== "ended") return false;
      if (state === "ended" && current && current.engine) { try { current.engine.resume(); } catch (_) { /* ignore */ } return true; }
      current.engine.resume();
      if (state === "paused") { setState("playing", { status: t("resumed", {}, current.lang) }); setSessionPlaybackState("playing"); }
      return true;
    }
    function stopAll(options = {}) {
      const lang = options.lang || (current ? current.lang : sessionLang);
      const wasActive = isActive() || state === "ended" || state === "failed";
      generation += 1;
      stopCurrentEngine();
      current = null;
      history = [];
      tried = [];
      setSessionPlaybackState("none");
      setState("idle", { status: "" });
      if (ui && ui.hide) ui.hide();
      if (options.announce !== false && wasActive) announce(t("stopped", {}, lang), {});
      return wasActive;
    }
    function setVolumeStep(delta) {
      volume = Math.max(0, Math.min(1, Math.round((volume + delta) * 100) / 100));
      muted = false;
      if (hasPlayer()) { current.engine.setMuted(false); current.engine.setVolume(volume); }
      emit();
      return volume;
    }

    async function nextTrack(options = {}) {
      if (!lastRequest) return false;
      const lang = options.lang || (current ? current.lang : sessionLang);
      const query = lastRequest.query;
      const kind = lastRequest.kind;
      const skipIds = [...tried];
      const result = await play(query, { kind, lang, keepHistory: true, keepTried: true, useLast: false, announce: true });
      if (result && result.ok) return true;
      if (result && result.cancelled) return false;
      if (!options.silentIfNone && !(result && (result.exhausted || result.resolverUnavailable))) announce(t("nextNone", {}, lang), {});
      tried = skipIds;
      return false;
    }
    async function previousTrack(options = {}) {
      const lang = options.lang || (current ? current.lang : sessionLang);
      if (history.length < 2) { announce(t("previousNone", {}, lang), {}); return false; }
      history.pop();
      const previous = history.pop();
      const token = ++generation;
      stopCurrentEngine();
      const result = previous.delivery === "youtube"
        ? await startYoutubeEngine(previous, token, 14000)
        : await startElementEngine(previous, token, 15000, 3);
      if (token !== generation) return false;
      if (result.ok) { lastEvidence = result.telemetry; finishStarted(previous, result, lang, { announce: true }, false, []); return true; }
      announce(t("previousNone", {}, lang), {});
      return false;
    }

    function control(action, options = {}) {
      const lang = langFor(options);
      const active = isActive() || state === "ended";
      if (!active) {
        if (action === "resume" && lastRequest && state !== "queued") { /* "play" with nothing open: nothing to resume */ }
        return { handled: false, message: t("nothingPlaying", {}, lang) };
      }
      sessionLang = lang;
      switch (action) {
        case "pause": { const ok = pauseNow(); announce(ok ? t("paused", {}, lang) : t("nothingPlaying", {}, lang), {}); return { handled: true, ok }; }
        case "resume": { const ok = resumeNow(); announce(ok ? t("resumed", {}, lang) : t("nothingPlaying", {}, lang), {}); return { handled: true, ok }; }
        case "stop": return { handled: true, ok: stopAll({ announce: true, lang }) };
        case "next": nextTrack({ lang }); return { handled: true, ok: true, async: true };
        case "previous": previousTrack({ lang }); return { handled: true, ok: true, async: true };
        case "volume-up": case "volume-down": {
          const level = setVolumeStep(action === "volume-up" ? VOLUME_STEP : -VOLUME_STEP);
          announce(t("volume", { pct: Math.round(level * 100) }, lang), {});
          return { handled: true, ok: true, volume: level };
        }
        case "mute": muted = true; if (hasPlayer()) current.engine.setMuted(true); emit(); announce(t("muted", {}, lang), {}); return { handled: true, ok: true };
        case "unmute": muted = false; if (hasPlayer()) { current.engine.setMuted(false); current.engine.setVolume(volume); } emit(); announce(t("unmuted", {}, lang), {}); return { handled: true, ok: true };
        default: return { handled: false };
      }
    }

    // Parses a typed or spoken sentence. Resolves true when it was a media command (so the caller stops there), false to let the rest of Kyro handle it.
    async function handleCommand(text, options = {}) {
      const parsed = Commands.parse(text);
      if (!parsed) return false;
      const lang = parsed.lang === "sw" ? "sw" : langFor(options);
      if (parsed.type === "preference") {
        sessionLang = lang;
        if (parsed.key === "audioOnly") { writePref("audioOnly", parsed.value ? "1" : "0"); emit(); announce(t(parsed.value ? "audioOnlyOn" : "audioOnlyOff", {}, lang), {}); }
        if (parsed.key === "playIn") { writePref("playIn", parsed.value); emit(); announce(t(parsed.value === "youtube" ? "playInYoutube" : "playInKyro", {}, lang), {}); }
        return true;
      }
      if (parsed.type === "control") {
        const active = isActive() || state === "ended";
        if (!active && !parsed.explicit) return false;
        if (!active) { sessionLang = lang; announce(t("nothingPlaying", {}, lang), {}); return true; }
        control(parsed.control, { lang });
        return true;
      }
      if (parsed.type === "play") {
        if (parsed.openOnly) { const result = await play("", { kind: "music", lang, handoff: true, announce: true }); return Boolean(result); }
        await play(parsed.query, { kind: parsed.kind, lang, handoff: parsed.handoff, announce: true, ...(options.playOptions || {}) });
        return true;
      }
      return false;
    }

    // Duck the music while Kyro speaks (only where the page can tell: see docs/MEDIA_PLAYBACK.md "Ducking").
    let duckedFrom = null;
    function duck() {
      if (duckedFrom !== null || !hasPlayer() || state !== "playing") return false;
      duckedFrom = volume;
      current.engine.setVolume(Math.max(0, volume * 0.25));
      return true;
    }
    function unduck() {
      if (duckedFrom === null) return false;
      const restore = duckedFrom;
      duckedFrom = null;
      if (hasPlayer()) current.engine.setVolume(restore);
      return true;
    }

    function isMobileData() {
      try {
        const connection = deps.connection || {};
        if (connection.saveData === true) return true;
        if (/^(slow-2g|2g|3g)$/.test(String(connection.effectiveType || ""))) return true;
        return deps.isMobile ? deps.isMobile() === true : false;
      } catch (_) { return false; }
    }

    return {
      play, handleCommand, control, stop: stopAll, pause: pauseNow, resume: resumeNow, next: nextTrack, previous: previousTrack,
      getState, subscribe: fn => { listeners.add(fn); return () => listeners.delete(fn); }, isActive, hasPlayer,
      getLastEvidence: () => lastEvidence, setAudioOnly: value => { writePref("audioOnly", value ? "1" : "0"); emit(); },
      setPlayIn: value => { writePref("playIn", value); emit(); }, forgetLast: () => writePref("last", null), duck, unduck,
      isYoutubeConfigured: () => youtubeConfigured, STRINGS
    };
  }

  // ---- the real bar (browser only) -----------------------------------------------------------------------------------------------------------------
  const ICONS = {
    prev: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 6h2v12H6zM20 6v12L9.5 12z" fill="currentColor"/></svg>',
    play: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>',
    pause: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor"/></svg>',
    stop: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 6h12v12H6z" fill="currentColor"/></svg>',
    next: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M16 6h2v12h-2zM4 6l10.5 6L4 18z" fill="currentColor"/></svg>',
    close: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>',
    vdown: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 9v6h4l5 4V5L9 9zM16 9.5a4 4 0 0 1 0 5" stroke="currentColor" stroke-width="1.6" fill="currentColor"/></svg>',
    vup: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 9v6h4l5 4V5L9 9zM16 8a6 6 0 0 1 0 8M18.5 5.5a10 10 0 0 1 0 13" stroke="currentColor" stroke-width="1.6" fill="currentColor"/></svg>'
  };

  function createBarUi(document, { onAction }) {
    const bar = document.createElement("section");
    bar.className = "kyro-mp";
    bar.hidden = true;
    bar.dataset.kyroMediaPlayer = "true";
    bar.setAttribute("role", "region");
    const mk = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text != null) el.textContent = text; return el; };
    const button = (action, icon, className) => {
      const el = mk("button", `kyro-mp-btn ${className || ""}`);
      el.type = "button";
      el.dataset.kyroMp = action;
      el.innerHTML = icon;
      el.addEventListener("click", () => onAction(action));
      return el;
    };
    const row = mk("div", "kyro-mp-row");
    const meta = mk("div", "kyro-mp-meta");
    const title = mk("strong", "kyro-mp-title");
    const sub = mk("span", "kyro-mp-sub");
    meta.append(title, sub);
    const badge = mk("span", "kyro-mp-badge");
    badge.hidden = true;
    const controls = mk("div", "kyro-mp-controls");
    const prev = button("previous", ICONS.prev);
    const toggle = button("toggle", ICONS.pause, "kyro-mp-main");
    const stop = button("stop", ICONS.stop);
    const next = button("next", ICONS.next);
    const close = button("close", ICONS.close, "kyro-mp-close");
    controls.append(prev, toggle, stop, next, close);
    row.append(meta, badge, controls);
    const statusLine = mk("div", "kyro-mp-status");
    statusLine.setAttribute("role", "status");
    statusLine.setAttribute("aria-live", "polite");
    const stage = mk("div", "kyro-mp-stage");
    const bigPlay = mk("button", "kyro-mp-bigplay");
    bigPlay.type = "button";
    bigPlay.hidden = true;
    bigPlay.dataset.kyroMp = "play";
    bigPlay.addEventListener("click", () => onAction("play"));
    const open = mk("a", "kyro-mp-open");
    open.hidden = true;
    open.target = "_blank";
    open.rel = "noopener noreferrer";
    open.dataset.kyroMp = "open-youtube";
    const extra = mk("div", "kyro-mp-extra");
    const vdown = button("volume-down", ICONS.vdown, "kyro-mp-small");
    const vup = button("volume-up", ICONS.vup, "kyro-mp-small");
    const vlabel = mk("span", "kyro-mp-vol");
    const audioLabel = mk("label", "kyro-mp-audioonly");
    const audioBox = mk("input");
    audioBox.type = "checkbox";
    audioBox.dataset.kyroMp = "audio-only";
    audioBox.addEventListener("change", () => onAction("audio-only"));
    const audioText = mk("span");
    audioLabel.append(audioBox, audioText);
    const playInLabel = mk("label", "kyro-mp-playin");
    const playInText = mk("span");
    const playInSelect = mk("select");
    playInSelect.dataset.kyroMp = "play-in";
    const optionKyro = mk("option"); optionKyro.value = "kyro";
    const optionYoutube = mk("option"); optionYoutube.value = "youtube";
    playInSelect.append(optionKyro, optionYoutube);
    playInSelect.addEventListener("change", () => onAction(`play-in:${playInSelect.value}`));
    playInLabel.append(playInText, playInSelect);
    const attribution = mk("div", "kyro-mp-attr");
    extra.append(vdown, vlabel, vup, audioLabel);
    bar.append(row, statusLine, stage, bigPlay, open, extra, playInLabel, attribution);
    document.body.appendChild(bar);

    function render(snapshot, lang) {
      const s = (key) => STRINGS[lang === "sw" ? "sw" : "en"][key];
      const visible = snapshot.state !== "idle";
      bar.hidden = !visible;
      bar.dataset.state = snapshot.state;
      bar.dataset.delivery = snapshot.delivery || "";
      bar.setAttribute("aria-label", s("region"));
      document.body.classList.toggle("kyro-mp-open", visible);
      title.textContent = snapshot.title || (snapshot.state === "resolving" ? "..." : "");
      sub.textContent = [snapshot.artist, snapshot.provider].filter(Boolean).join(" Â· ");
      badge.hidden = !(snapshot.live || snapshot.isPreview);
      badge.textContent = snapshot.live ? s("live") : s("preview");
      badge.dataset.kind = snapshot.live ? "live" : "preview";
      statusLine.textContent = snapshot.status || "";
      toggle.innerHTML = snapshot.state === "playing" || snapshot.state === "loading" ? ICONS.pause : ICONS.play;
      toggle.setAttribute("aria-label", snapshot.state === "playing" ? s("pause") : s("play"));
      prev.setAttribute("aria-label", s("previous")); prev.disabled = !snapshot.hasPrevious;
      stop.setAttribute("aria-label", s("stop"));
      next.setAttribute("aria-label", s("next"));
      close.setAttribute("aria-label", s("close"));
      vdown.setAttribute("aria-label", `${s("volumeLabel")} -`); vup.setAttribute("aria-label", `${s("volumeLabel")} +`);
      vlabel.textContent = snapshot.muted ? "0%" : `${Math.round(snapshot.volume * 100)}%`;
      audioText.textContent = s("audioOnly");
      audioBox.checked = snapshot.audioOnly === true;
      playInText.textContent = s("playInLabel");
      optionKyro.textContent = s("playInKyro2"); optionYoutube.textContent = s("playInYoutube2");
      playInSelect.value = snapshot.playIn === "youtube" ? "youtube" : "kyro";
      playInLabel.hidden = snapshot.state === "queued" || snapshot.state === "failed";
      bigPlay.hidden = snapshot.state !== "blocked";
      bigPlay.textContent = s("play");
      const queued = snapshot.state === "queued" && snapshot.handoff;
      open.hidden = !queued;
      if (queued) { open.href = snapshot.handoff.url; open.textContent = s("openYoutube"); }
      stage.hidden = snapshot.state === "queued";
      extra.hidden = snapshot.state === "queued" || snapshot.state === "failed";
      attribution.textContent = snapshot.attribution ? `${s("source")}: ${snapshot.attribution}${snapshot.license ? ` Â· ${s("license")}: ${snapshot.license}` : ""}` : "";
    }
    return { render, stage, element: bar, hide() { bar.hidden = true; document.body.classList.remove("kyro-mp-open"); stage.textContent = ""; } };
  }

  return Object.freeze({ createKyroMediaPlayer, createBarUi, detectCountry, STRINGS, say, EVIDENCE_SCHEMA });
});
