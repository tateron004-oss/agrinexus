(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KyroVoiceStartBackoff = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  // A page that restarts its own voice session whenever the last one ends will, if the session keeps failing (or ends at once), ask the server for a new one every few seconds without end (the live record showed
  // about one start every ten seconds from one client, 1,293 in 3.7 hours). Starts the page makes by itself (a restart after a stall, a lost connection, coming back to the tab) now wait longer after each
  // start that failed or ended within a short time: 5 s, 10 s, 20 s ... up to 2 minutes. A start the person asks for (tapping the orb or the microphone) is never held, and it clears the wait.
  const DEFAULTS = Object.freeze({ baseMs: 5000, maxMs: 120000, shortLivedMs: 30000 });
  // The sources the page itself uses when it starts voice again (stall-watchdog-restart, bounded-realtime-recovery, voice-recovery, genesis-visible-resume, genesis-speech-finished-restart ...). A tap on the orb or the
  // microphone has sources such as "nexus-primary-visible-voice-button", which must never match. "genesis-home-permission-granted-auto-start" is the page starting voice by itself the moment the browser says the microphone is
  // allowed: found counting the live page's requests (a browser with no microphone), it was read as a tap and cleared the wait, so the 5 s, 10 s, 20 s ... back-off started over every minute.
  const AUTOMATIC_SOURCE = /(?:^|-)(?:recovery|restart|resume)(?:-|$)|watchdog|(?:^|-)auto-start(?:-|$)/i;

  // Is this start one the page made by itself?
  function isAutomaticStart(options = {}) {
    if (options && options.recovery === true) return true;
    return AUTOMATIC_SOURCE.test(String((options && options.source) || ""));
  }

  function createStartBackoff({ now = () => Date.now(), baseMs = DEFAULTS.baseMs, maxMs = DEFAULTS.maxMs, shortLivedMs = DEFAULTS.shortLivedMs } = {}) {
    let bad = 0;            // starts in a row that failed or ended soon after they began
    let lastAttemptAt = 0;
    let activeSince = null;
    const waitFor = () => (bad <= 0 ? 0 : Math.min(maxMs, baseMs * 2 ** (bad - 1)));
    return {
      // { ok, waitMs }: ok is false when a start by the page itself should be held back for waitMs more.
      mayStart(options = {}) {
        if (!isAutomaticStart(options)) return { ok: true, waitMs: 0 };
        const wait = waitFor() - (now() - lastAttemptAt);
        return wait > 0 ? { ok: false, waitMs: Math.ceil(wait) } : { ok: true, waitMs: 0 };
      },
      // a start begins (by the person: the wait is cleared)
      attempt(options = {}) {
        if (!isAutomaticStart(options)) bad = 0;
        lastAttemptAt = now();
      },
      // the start worked and the session is live
      started() { activeSince = now(); },
      // the start did not work
      failed() { bad += 1; activeSince = null; },
      // the session ended: one that had lasted a while was a good one, one that ended at once counts against the next restart
      ended() {
        if (activeSince !== null) { if (now() - activeSince < shortLivedMs) bad += 1; else bad = 0; }
        activeSince = null;
      },
      snapshot() { return { consecutiveBad: bad, waitMs: waitFor() }; }
    };
  }

  return { createStartBackoff, isAutomaticStart, DEFAULTS };
});
