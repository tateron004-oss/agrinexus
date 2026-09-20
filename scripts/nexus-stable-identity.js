"use strict";

// During a Render deploy the old and new server instances overlap for a few seconds, so a single read of the release identity can
// hit either one: the health endpoint answered with the PREVIOUS build right after "Wait for exact release identity" had passed
// (deploys of #510 and #511 both failed "health must report the exact candidate SHA" this way, and passed on re-run).
//
// This is patient about WHEN, never about WHAT: `attempt` runs the full, unchanged identity assertions, and the release is accepted
// only after `requiredStreak` consecutive attempts all pass, so a mixed answer from two instances can never be accepted. If the
// identity does not settle before the deadline, the last assertion error is thrown, exactly as a single strict attempt would.
async function waitForStableIdentity({ attempt, waitMs = 0, intervalMs = 5000, requiredStreak = 1, sleep = ms => new Promise(resolve => setTimeout(resolve, ms)), now = Date.now } = {}) {
  if (typeof attempt !== "function") throw new Error("attempt is required.");
  const deadline = now() + Math.max(0, Number(waitMs) || 0);
  const needed = Math.max(1, Math.floor(Number(requiredStreak) || 1));
  let streak = 0;
  for (;;) {
    try {
      const snapshot = await attempt();
      streak += 1;
      if (streak >= needed) return snapshot;
    } catch (error) {
      streak = 0;
      if (now() >= deadline) throw error;
    }
    await sleep(intervalMs);
  }
}

// A deployed origin gets the patient check; a local candidate on loopback keeps the single strict pass it always had.
function identityPatienceFor(base, env = process.env) {
  const local = /^https?:\/\/(?:127\.0\.0\.1|localhost|\[::1\])(?::\d+)?(?:\/|$)/i.test(String(base || ""));
  const configured = env.NEXUS_BLACK_BOX_IDENTITY_WAIT_MS;
  const waitMs = configured !== undefined && configured !== "" ? Number(configured) : local ? 0 : 180000;
  return { waitMs: Number.isFinite(waitMs) && waitMs > 0 ? waitMs : 0, requiredStreak: waitMs > 0 ? 3 : 1, intervalMs: 5000 };
}

module.exports = Object.freeze({ waitForStableIdentity, identityPatienceFor });
