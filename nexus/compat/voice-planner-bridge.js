"use strict";

// Spoken requests reach the server through the legacy voice tool dispatcher (server.js dispatchNexusRealtimeTool), which never
// consulted the planner that owns notes, lists, calendar, the farm log, remembered facts, "that was wrong", the morning brief, the
// trusted circle, check-ins, medicine reminders, the wellness log and the community desk. Every one of those worked typed and answered
// a generic "AI copilot recommends..." line when spoken, saving nothing.
//
// This asks the real planner (through the same authoritative behavior spine the typed path uses) for ONLY the answers it can give and
// save itself, with no AI model and no tool steps (context.deterministicOnly). If it has none -- or anything at all goes wrong, or it is
// slow -- this returns null and the caller carries on with the old pipeline exactly as before, so voice can never get worse than it was.

const DEFAULT_TIMEOUT_MS = 5000;

async function deterministicVoiceAnswer({ runtime, user, text, language = "en", timeoutMs = DEFAULT_TIMEOUT_MS }) {
  const command = String(text || "").trim();
  if (!runtime || typeof runtime.behaviorTurnRequest !== "function" || !user || !command) return null;
  let timer = null;
  try {
    const turn = await Promise.race([
      runtime.behaviorTurnRequest({ text: command, channel: "voice", locale: language, user, deterministicOnly: true }),
      new Promise((_, reject) => { timer = setTimeout(() => reject(new Error("voice planner bridge timed out")), timeoutMs); })
    ]);
    if (!turn || turn.deferred === true || turn.completed !== true || turn.state !== "completed") return null;
    if (turn.outcome?.modelAnswered === true) return null;
    const response = String(turn.response || "").trim();
    if (!response) return null;
    return { response, verified: turn.outcome?.verified === true, correlationId: turn.correlationId || null };
  } catch {
    return null;
  } finally {
    if (timer) clearTimeout(timer);
  }
}

module.exports = Object.freeze({ deterministicVoiceAnswer, DEFAULT_TIMEOUT_MS });
