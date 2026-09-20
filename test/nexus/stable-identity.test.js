"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { waitForStableIdentity, identityPatienceFor } = require("../../scripts/nexus-stable-identity.js");

// Deploys of #510 and #511 both failed "health must report the exact candidate SHA": an old server instance answered right after
// the deploy had already seen the new build, and both passed when re-run.
function clock() { let t = 0; return { now: () => t, sleep: async ms => { t += ms; } }; }
const outcomes = list => { let i = 0; return async () => { const next = list[Math.min(i++, list.length - 1)]; if (next instanceof Error) throw next; return next; }; };

test("a release that settles after a few old-instance answers is accepted, but only after three clean passes in a row", async () => {
  const c = clock(); let calls = 0;
  const attempt = async () => { calls += 1; if (calls <= 3) throw new Error("health must report the exact candidate SHA"); return { health: { ok: true }, calls }; };
  const snapshot = await waitForStableIdentity({ attempt, waitMs: 60000, requiredStreak: 3, ...c });
  assert.equal(calls, 6, "three failures, then three consecutive passes"); assert.equal(snapshot.calls, 6);
});

test("a mixed answer from two instances is never accepted: one bad answer resets the streak", async () => {
  const c = clock(); let calls = 0;
  const attempt = async () => { calls += 1; if (calls === 3) throw new Error("release must report the exact candidate SHA"); return { calls }; };
  const snapshot = await waitForStableIdentity({ attempt, waitMs: 60000, requiredStreak: 3, ...c });
  assert.equal(calls, 6, "pass, pass, FAIL resets, then three more passes"); assert.equal(snapshot.calls, 6);
});

test("an identity that never settles fails with the last assertion error once the wait is over, as a strict pass would", async () => {
  const c = clock(); let calls = 0;
  await assert.rejects(() => waitForStableIdentity({ attempt: async () => { calls += 1; throw new Error(`stuck on the old build (${calls})`); }, waitMs: 20000, intervalMs: 5000, requiredStreak: 3, ...c }),
    error => /stuck on the old build/.test(error.message));
  assert.ok(calls >= 2 && calls <= 6, `it kept trying until the deadline (${calls} attempts)`);
  await assert.rejects(() => waitForStableIdentity({ attempt: outcomes([new Error("wrong sha")]), waitMs: 0, requiredStreak: 1, ...clock() }), /wrong sha/, "with no wait it is one strict attempt");
  assert.deepEqual(await waitForStableIdentity({ attempt: outcomes([{ ok: true }]), waitMs: 0, requiredStreak: 1, ...clock() }), { ok: true });
});

test("a deployed origin is patient, a local loopback candidate keeps the single strict pass, and the wait can be overridden", () => {
  assert.deepEqual(identityPatienceFor("https://nexus-genesis-certified.onrender.com", {}), { waitMs: 180000, requiredStreak: 3, intervalMs: 5000 });
  for (const local of ["http://127.0.0.1:4173", "http://localhost:3000/", "http://[::1]:8080"]) assert.deepEqual(identityPatienceFor(local, {}), { waitMs: 0, requiredStreak: 1, intervalMs: 5000 }, local);
  assert.equal(identityPatienceFor("https://x.onrender.com", { NEXUS_BLACK_BOX_IDENTITY_WAIT_MS: "0" }).requiredStreak, 1, "0 turns the patience off");
  assert.equal(identityPatienceFor("https://x.onrender.com", { NEXUS_BLACK_BOX_IDENTITY_WAIT_MS: "60000" }).waitMs, 60000);
  assert.equal(identityPatienceFor("http://127.0.0.1:1", { NEXUS_BLACK_BOX_IDENTITY_WAIT_MS: "30000" }).requiredStreak, 3);
  assert.equal(identityPatienceFor("https://x.onrender.com", { NEXUS_BLACK_BOX_IDENTITY_WAIT_MS: "junk" }).waitMs, 0, "an unusable value falls back to strict");
});

test("the black-box gate still makes every one of its original identity assertions", () => {
  const source = fs.readFileSync(path.join(__dirname, "../../scripts/nexus-preproduction-black-box.js"), "utf8");
  for (const required of ["candidate health must be ready", "${label} must report the exact candidate SHA", "${label} deployed commit must match the candidate SHA",
    "${label} web build must match the candidate SHA", "${label} cache must derive from the candidate SHA", "runtime must report the exact candidate SHA",
    "${pathname} must contain the exact candidate SHA", "${pathname} must not expose a placeholder or legacy identity", "candidate must be bound to a full commit SHA"])
    assert.ok(source.includes(required), `assertion removed: ${required}`);
  assert.match(source, /waitForStableIdentity\(\{ attempt: verifyIdentityOnce, \.\.\.identityPatienceFor\(base\) \}\)/);
});
