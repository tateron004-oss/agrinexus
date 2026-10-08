"use strict";

// Client side of POST /api/nexus/runtime/production-acceptance/cleanup (nexus/acceptance/data-hygiene.js,
// docs/ACCEPTANCE_DATA_HYGIENE.md). The exact-release probes call this once, before they create any new test data, so the
// acceptance principal's leftovers from earlier runs never accumulate up to a per-account limit.
//
// Fail-safe, never fail-silent:
//   * it never throws and never alters a probe result -- the probes that follow still create fresh records and verify them
//     through the authoritative verifier exactly as before;
//   * a failure is returned as { ok:false, ... } and printed as a GitHub warning annotation plus a JSON line, so it is
//     visible in the pipeline log as a CLEANUP failure and is recorded in the probe evidence file by the caller;
//   * NEXUS_ACCEPTANCE_CLEANUP_REQUIRED=true turns a cleanup failure into a failed step (the caller throws on ok:false).
// Only counts and a sanitized code are ever printed.

function safeCode(value) { return String(value || "").replace(/[^a-z0-9_.-]/gi, "").slice(0, 64) || "unknown"; }

async function runAcceptanceCleanup({ base, token, releaseSha, env = process.env, fetchFn = globalThis.fetch, log = console, attempts = 2, delayMs = 1000 } = {}) {
  const mode = String(env.NEXUS_ACCEPTANCE_CLEANUP || "").toLowerCase();
  if (mode === "off" || mode === "skip") {
    const skipped = { ok: true, skipped: true, reason: "disabled_by_NEXUS_ACCEPTANCE_CLEANUP" };
    log.log?.(JSON.stringify({ acceptanceCleanup: skipped }));
    return skipped;
  }
  const url = `${String(base).replace(/\/$/, "")}/api/nexus/runtime/production-acceptance/cleanup`;
  const body = { releaseSha, dryRun: String(env.NEXUS_ACCEPTANCE_CLEANUP_DRY_RUN || "").toLowerCase() === "true" };
  let outcome;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetchFn(url, { method: "POST",
        headers: { authorization: `Bearer ${token}`, accept: "application/json", "content-type": "application/json" }, body: JSON.stringify(body) });
      const text = await response.text(); let parsed;
      try { parsed = JSON.parse(text); } catch { parsed = {}; }
      if (response.ok && parsed.ok === true) {
        outcome = { ok: true, status: response.status, dryRun: parsed.dryRun === true, total: parsed.total, complete: parsed.complete, counts: parsed.counts,
          olderThanMinutes: parsed.olderThanMinutes, retainPerType: parsed.retainPerType };
        break;
      }
      outcome = { ok: false, status: response.status, code: safeCode(parsed.code), message: String(parsed.error || "Cleanup request was rejected.").slice(0, 200) };
      // A definite answer from the server (4xx) will not change on retry; only a 5xx/transport failure is retried.
      if (response.status < 500) break;
    } catch (error) {
      outcome = { ok: false, status: 0, code: safeCode(error?.code || error?.cause?.code || error?.name || "cleanup_transport_failed"), message: "Cleanup request did not reach the server." };
    }
    if (attempt < attempts) await new Promise(resolve => setTimeout(resolve, delayMs));
  }
  log.log?.(JSON.stringify({ acceptanceCleanup: outcome }));
  if (!outcome.ok) {
    // GitHub Actions workflow annotation; harmless plain text anywhere else. Distinct wording so it is never mistaken for a probe failure.
    log.warn?.(`::warning title=Acceptance data CLEANUP failed::cleanup (not a probe) failed status=${outcome.status} code=${outcome.code}; probes continue and verify as usual, but test data was not cleared`);
  }
  return outcome;
}

module.exports = Object.freeze({ runAcceptanceCleanup });
