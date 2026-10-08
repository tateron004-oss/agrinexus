(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KyroStallWatchdog = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  // Kyro must answer when someone speaks. If a person has finished speaking and nothing starts happening (no spoken reply, no tool running), the
  // session has stalled: it looks connected but nothing will ever come. This watches for exactly that and heals it without the person doing anything:
  //   1. after a few seconds with no response at all, ask the model to answer the turn it already heard (a "nudge");
  //   2. if there is still nothing, restart the voice session and say what happened;
  //   3. a tool that has been running far too long is treated the same way, so a request that hangs cannot leave Kyro silent.
  // It is pure logic with its timers and actions handed in, so it can be tested with a fake clock.
  //
  // Anything that shows the model is alive (a response starting, audio, a tool starting, a new user turn, an error being handled) disarms the
  // current wait. A wait that fires carries what it knows (see snapshot()) so the stall can be reported with its real timings.
  const DEFAULTS = Object.freeze({ nudgeMs: 6000, restartMs: 14000, toolMs: 25000, maxRestartsPerSession: 2 });

  function createStallWatchdog(options = {}) {
    const config = { ...DEFAULTS, ...Object.fromEntries(Object.entries(options).filter(([, value]) => Number.isFinite(value))) };
    const setTimer = options.setTimeoutFn || ((fn, ms) => setTimeout(fn, ms));
    const clearTimer = options.clearTimeoutFn || (id => clearTimeout(id));
    const now = options.now || (() => Date.now());
    const handlers = { onNudge: options.onNudge || (() => {}), onRestart: options.onRestart || (() => {}), onToolStuck: options.onToolStuck || (() => {}), onEvent: options.onEvent || (() => {}) };
    const canWatch = options.canWatch || (() => true);

    let turnTimers = []; let toolTimer = null;
    let turn = null; let toolStartedAt = 0; let toolName = "";
    let restarts = 0; let nudges = 0; let lastActivityAt = 0; let lastActivity = "";

    const clearTurn = () => { for (const id of turnTimers) clearTimer(id); turnTimers = []; turn = null; };
    const clearTool = () => { if (toolTimer !== null) clearTimer(toolTimer); toolTimer = null; toolStartedAt = 0; toolName = ""; };
    const emit = (type, extra = {}) => { try { handlers.onEvent({ type, at: now(), ...extra }); } catch { /* reporting must never break the call */ } };

    function snapshot() {
      return { waitingForResponse: Boolean(turn), waitedMs: turn ? now() - turn.committedAt : 0, nudged: Boolean(turn?.nudged), nudges, restarts,
        toolRunning: Boolean(toolStartedAt), toolName, toolRunningMs: toolStartedAt ? now() - toolStartedAt : 0, lastActivity, sinceLastActivityMs: lastActivityAt ? now() - lastActivityAt : 0 };
    }

    return {
      // The person finished a turn (the audio was committed): from here a response is owed.
      userTurnCommitted(label = "") {
        clearTurn();
        if (!canWatch()) return;
        const committedAt = now();
        turn = { committedAt, nudged: false, label };
        const mine = turn;
        turnTimers.push(setTimer(() => {
          if (turn !== mine) return;
          mine.nudged = true; nudges += 1;
          emit("nudge", { waitedMs: now() - committedAt, label });
          try { handlers.onNudge(snapshot()); } catch { /* the restart timer is still armed */ }
        }, config.nudgeMs));
        turnTimers.push(setTimer(() => {
          if (turn !== mine) return;
          const detail = snapshot();
          clearTurn();
          if (restarts >= config.maxRestartsPerSession) { emit("gave-up", { ...detail, label }); return; }
          restarts += 1;
          emit("restart", { ...detail, label });
          try { handlers.onRestart(detail); } catch { /* nothing more to do */ }
        }, config.restartMs));
      },
      // Something showed the model is alive for this turn.
      activity(label = "") {
        lastActivityAt = now(); lastActivity = label;
        if (turn) { emit("recovered-by-activity", { waitedMs: now() - turn.committedAt, nudged: turn.nudged, label }); clearTurn(); }
      },
      // The person started speaking again: whatever was owed for the earlier turn no longer matters.
      userSpeechStarted() { clearTurn(); },
      toolStarted(name = "") {
        clearTool(); toolStartedAt = now(); toolName = String(name || "");
        lastActivityAt = now(); lastActivity = `tool-start:${toolName}`;
        clearTurn();
        const startedAt = toolStartedAt;
        toolTimer = setTimer(() => {
          if (toolStartedAt !== startedAt) return;
          const detail = snapshot();
          clearTool();
          emit("tool-stuck", detail);
          try { handlers.onToolStuck(detail); } catch { /* nothing more to do */ }
        }, config.toolMs);
      },
      toolEnded() { lastActivityAt = now(); lastActivity = "tool-end"; clearTool(); },
      // The session ended or was restarted: nothing is owed to anyone any more. A fresh session gets a fresh allowance of restarts.
      reset({ keepRestarts = false } = {}) { clearTurn(); clearTool(); nudges = 0; if (!keepRestarts) restarts = 0; },
      snapshot,
      config
    };
  }

  // ---- what the report says about the stall (types and numbers only: never speech, names or other personal content) ----

  // A short memory of the last few realtime events (just their type names, with how long ago they happened), so a stall report shows what the session
  // was doing when it went quiet. Repeated events of the same type are counted instead of listed again (audio events arrive many times a second).
  function createEventRing({ cap = 10, now = () => Date.now() } = {}) {
    const items = [];
    const clean = type => String(type || "").toLowerCase().replace(/[^a-z0-9_.:-]/g, "").slice(0, 60);
    return {
      record(type) {
        const name = clean(type);
        if (!name) return;
        const last = items[items.length - 1];
        if (last && last.type === name) { last.count += 1; last.at = now(); return; }
        items.push({ type: name, at: now(), count: 1 });
        while (items.length > cap) items.shift();
      },
      snapshot() { const t = now(); return items.map(item => ({ type: item.type, ageMs: Math.max(0, t - item.at), count: item.count })); },
      clear() { items.length = 0; }
    };
  }

  const PHASES = Object.freeze(["waiting-for-tool", "waiting-for-response", "audio-suspended", "disconnected", "mic-lost", "offline", "backgrounded", "auto-response-stuck", "idle"]);

  // Which of the known ways a voice session goes quiet this looks like. The most basic cause wins: a session that is not connected cannot be "waiting for a response".
  function classifyPhase(state = {}) {
    if (state.active === false) return "disconnected";
    const dead = value => ["failed", "closed", "disconnected"].includes(String(value || "").toLowerCase());
    if (dead(state.peerState) || dead(state.iceState) || dead(state.connectionState) || (state.dataChannelState && String(state.dataChannelState) !== "open")) return "disconnected";
    if (String(state.micTrack || "").toLowerCase() === "ended") return "mic-lost";
    if (state.online === false) return "offline";
    if (String(state.audioContextState || "").toLowerCase() === "suspended") return "audio-suspended";
    if (state.autoResponseOn === false && !state.intakeActive) return "auto-response-stuck";
    if (state.toolRunning) return "waiting-for-tool";
    if (state.tabVisible === "hidden") return "backgrounded";
    if (state.waitingForResponse) return "waiting-for-response";
    return "idle";
  }

  // How the session's age compares with the lifetime of the key it started with (expiresAt is seconds or milliseconds since 1970, or null).
  // Negative keyRemainingMs means the key had already expired when the report was made. Only the numbers are reported, never the key.
  function sessionTiming({ startedAt = 0, expiresAt = null, now = Date.now() } = {}) {
    const started = Number(startedAt) || 0;
    const ageMs = started ? Math.max(0, now - started) : 0;
    let expiresMs = Number(expiresAt);
    if (!Number.isFinite(expiresMs) || expiresMs <= 0) return { sessionAgeMs: ageMs, keyRemainingMs: 0, keyKnown: false };
    if (expiresMs < 1e11) expiresMs *= 1000;
    return { sessionAgeMs: ageMs, keyRemainingMs: Math.round(expiresMs - now), keyKnown: true };
  }

  return Object.freeze({ createStallWatchdog, createEventRing, classifyPhase, sessionTiming, PHASES, DEFAULTS });
});
