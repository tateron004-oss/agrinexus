(function installNexusBrowserActionController(global) {
  const seen = new Map();
  const replayWindowMs = 10000;
  function text(value) { return String(value || "").trim(); }
  function handleFinalUserTranscript(input = {}, actionBuilder) {
    const transcript = text(input.transcript);
    const role = text(input.role || "user").toLowerCase();
    const sessionId = text(input.sessionId || "unknown-session");
    const transcriptId = text(input.transcriptId || (sessionId + ":" + transcript));
    if (!transcript || role !== "user" || input.isFinal !== true) return { handled: false };
    const now = Date.now();
    for (const [key, at] of seen) if (now - at > replayWindowMs) seen.delete(key);
    if (seen.has(sessionId + ":" + transcriptId)) return { handled: false, duplicate: true };
    const action = typeof actionBuilder === "function" ? actionBuilder(transcript) : null;
    if (!action) return { handled: false };
    seen.set(sessionId + ":" + transcriptId, now);
    return { handled: true, ...action, transcriptId, sessionId, originalTranscript: transcript };
  }
  global.NexusBrowserActionController = Object.freeze({ handleFinalUserTranscript });
})(window);
