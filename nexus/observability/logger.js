const RELEASE_SHA = process.env.RENDER_GIT_COMMIT || process.env.GIT_SHA || "development";

function createLogger({ service = "nexus", sink = console } = {}) {
  function write(level, message, fields = {}) {
    const record = { timestamp: new Date().toISOString(), level, service, releaseSha: RELEASE_SHA,
      message, ...redact(fields) };
    const target = level === "error" ? "error" : level === "warn" ? "warn" : "log";
    sink[target](JSON.stringify(record));
    return record;
  }
  return Object.freeze({
    info: (message, fields) => write("info", message, fields),
    warn: (message, fields) => write("warn", message, fields),
    error: (message, fields) => write("error", message, fields)
  });
}

function redact(value) {
  const sensitive = /authorization|cookie|password|secret|token|api.?key|medical|health/i;
  if (Array.isArray(value)) return value.map(redact);
  if (!value || typeof value !== "object") return value;
  return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, sensitive.test(key) ? "[REDACTED]" : redact(entry)]));
}

module.exports = Object.freeze({ createLogger, redact, RELEASE_SHA });
