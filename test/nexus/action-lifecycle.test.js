"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { computeIdempotencyKey, withActionLifecycle, ensureNexusActionLedger, resetActionLedgerForTests } = require("../../server/action-lifecycle.js");

test.beforeEach(() => resetActionLedgerForTests());

function fixtureDb() {
  return {};
}

function ok(data = {}) {
  return { httpStatus: 200, body: { ok: true, provider: "twilio", action: "sms.send", status: "completed", message: "sent", data } };
}

function blocked(message = "blocked") {
  return { httpStatus: 400, body: { ok: false, provider: "twilio", action: "sms.send", status: "blocked", message } };
}

test("computeIdempotencyKey is deterministic for the same meaningful fields regardless of key order", () => {
  const a = computeIdempotencyKey("twilio", "sms.send", { to: "+15550001111", message: "hi" });
  const b = computeIdempotencyKey("twilio", "sms.send", { message: "hi", to: "+15550001111" });
  assert.equal(a, b);
});

test("computeIdempotencyKey ignores confirmed/confirmation/confirm fields", () => {
  const a = computeIdempotencyKey("twilio", "sms.send", { to: "x", message: "hi" });
  const b = computeIdempotencyKey("twilio", "sms.send", { to: "x", message: "hi", confirmed: true });
  assert.equal(a, b);
});

test("computeIdempotencyKey differs for different meaningful fields", () => {
  const a = computeIdempotencyKey("twilio", "sms.send", { to: "x", message: "hi" });
  const b = computeIdempotencyKey("twilio", "sms.send", { to: "x", message: "bye" });
  assert.notEqual(a, b);
});

test("withActionLifecycle executes once and returns the real result on a fresh action", async () => {
  const db = fixtureDb();
  let calls = 0;
  const result = await withActionLifecycle(db, {
    provider: "twilio", action: "sms.send", body: { to: "+1", message: "hi" },
    execute: async () => { calls += 1; return ok({ sid: "SM123" }); }
  });
  assert.equal(calls, 1);
  assert.equal(result.body.data.sid, "SM123");
  const ledger = ensureNexusActionLedger(db);
  assert.equal(ledger.length, 1);
  assert.equal(ledger[0].status, "completed");
});

test("withActionLifecycle short-circuits an immediate duplicate completed request without re-executing", async () => {
  const db = fixtureDb();
  let calls = 0;
  const body = { to: "+1", message: "hi" };
  const execute = async () => { calls += 1; return ok({ sid: `SM${calls}` }); };
  const first = await withActionLifecycle(db, { provider: "twilio", action: "sms.send", body, execute });
  const second = await withActionLifecycle(db, { provider: "twilio", action: "sms.send", body, execute });
  assert.equal(calls, 1, "execute must not run a second time for the same idempotency key");
  assert.equal(second.body.data.sid, first.body.data.sid);
});

test("withActionLifecycle awaits the SAME real execution for a duplicate that arrives while the original is still in flight, instead of guessing with a timeout", async () => {
  const db = fixtureDb();
  let calls = 0;
  let releaseFirst;
  const gate = new Promise(resolve => { releaseFirst = resolve; });
  const body = { to: "+1", message: "hi" };
  const execute = async () => { calls += 1; await gate; return ok({ sid: "SM-inflight" }); };

  const firstPromise = withActionLifecycle(db, { provider: "twilio", action: "sms.send", body, execute });
  // Let the first call reach and pass its synchronous reserve step before firing the duplicate.
  await Promise.resolve();
  const secondPromise = withActionLifecycle(db, { provider: "twilio", action: "sms.send", body, execute });

  releaseFirst();
  const [first, second] = await Promise.all([firstPromise, secondPromise]);

  assert.equal(calls, 1, "the in-flight duplicate must not call execute a second time");
  assert.equal(first.body.data.sid, "SM-inflight");
  assert.equal(second.body.data.sid, "SM-inflight", "the duplicate must receive the SAME real result once it resolves, not a synthetic placeholder");
  assert.equal(first, second, "both callers should be awaiting the exact same result object");
});

test("withActionLifecycle shares its ledger across different db object instances -- the ledger is not scoped to any single request's db", async () => {
  // Regression test: server.js's readDb()/writeDb() re-read the whole app
  // state fresh on every HTTP request, so two different `db` objects here
  // stand in for two different (possibly concurrent) requests. Duplicate
  // suppression must still work even though neither db object is the same
  // reference and neither has been "written back" anywhere.
  const dbForRequestA = { requestId: "A" };
  const dbForRequestB = { requestId: "B" };
  let calls = 0;
  const body = { to: "+1", message: "hi" };
  const execute = async () => { calls += 1; return ok({ sid: "SM-shared" }); };

  const first = await withActionLifecycle(dbForRequestA, { provider: "twilio", action: "sms.send", body, execute });
  const second = await withActionLifecycle(dbForRequestB, { provider: "twilio", action: "sms.send", body, execute });

  assert.equal(calls, 1, "a duplicate arriving under a different db object (a different request) must still be deduped");
  assert.equal(second.body.data.sid, first.body.data.sid);
});

test("withActionLifecycle does not dedupe a blocked/failed attempt -- a retry after fixing input must run", async () => {
  const db = fixtureDb();
  let calls = 0;
  const body = { to: "", message: "hi" };
  const first = await withActionLifecycle(db, {
    provider: "twilio", action: "sms.send", body,
    execute: async () => { calls += 1; return blocked("recipient required"); }
  });
  assert.equal(first.body.status, "blocked");
  const second = await withActionLifecycle(db, {
    provider: "twilio", action: "sms.send", body,
    execute: async () => { calls += 1; return ok({ sid: "SM-after-fix" }); }
  });
  assert.equal(calls, 2, "a non-completed attempt must not be cached, so a corrected retry executes for real");
  assert.equal(second.body.data.sid, "SM-after-fix");
});

test("withActionLifecycle calls verify() on success and records a real verified flag, not a fabricated one", async () => {
  const db = fixtureDb();
  const result = await withActionLifecycle(db, {
    provider: "twilio", action: "sms.send", body: { to: "+1", message: "hi" },
    execute: async () => ok({ sid: "SM999" }),
    verify: async executeResult => ({ verified: Boolean(executeResult.body.data.sid), note: "Twilio response contained a real message SID." })
  });
  assert.equal(result.body.data.sid, "SM999");
  assert.equal(result.body.nexusLifecycleVerified, true, "the real verified flag must be attached to the returned result, not left only on the internal ledger entry");
  const ledger = ensureNexusActionLedger(db);
  assert.equal(ledger[0].verified, true);
  assert.match(ledger[0].verificationNote, /real message SID/);
});

test("withActionLifecycle defaults verified to false honestly when no verify function is given", async () => {
  const db = fixtureDb();
  const result = await withActionLifecycle(db, {
    provider: "twilio", action: "sms.send", body: { to: "+1", message: "hi" },
    execute: async () => ok({ sid: "SM1" })
  });
  assert.equal(result.body.nexusLifecycleVerified, false);
  const ledger = ensureNexusActionLedger(db);
  assert.equal(ledger[0].verified, false);
  assert.match(ledger[0].verificationNote, /No independent verification/);
});

test("withActionLifecycle records verified: false when verify() itself throws, instead of crashing the action", async () => {
  const db = fixtureDb();
  const result = await withActionLifecycle(db, {
    provider: "twilio", action: "sms.send", body: { to: "+1", message: "hi" },
    execute: async () => ok({ sid: "SM1" }),
    verify: async () => { throw new Error("network error checking status"); }
  });
  assert.equal(result.body.data.sid, "SM1", "a verify() failure must not block the already-successful result from reaching the caller");
  const ledger = ensureNexusActionLedger(db);
  assert.equal(ledger[0].verified, false);
  assert.match(ledger[0].verificationNote, /Verification check failed/);
});

test("withActionLifecycle marks the ledger entry failed and re-throws when execute() itself throws", async () => {
  const db = fixtureDb();
  await assert.rejects(
    () => withActionLifecycle(db, {
      provider: "twilio", action: "sms.send", body: { to: "+1", message: "hi" },
      execute: async () => { throw new Error("network down"); }
    }),
    /network down/
  );
  const ledger = ensureNexusActionLedger(db);
  assert.equal(ledger[0].status, "failed");
});

test("withActionLifecycle keys are scoped per provider+action, not just body", async () => {
  const db = fixtureDb();
  let calls = 0;
  const body = { to: "+1", message: "hi" };
  await withActionLifecycle(db, { provider: "twilio", action: "sms.send", body, execute: async () => { calls += 1; return ok(); } });
  await withActionLifecycle(db, { provider: "twilio", action: "whatsapp.send", body, execute: async () => { calls += 1; return ok(); } });
  assert.equal(calls, 2, "a different action must not be deduped against a different action's identical body");
});

test("ensureNexusActionLedger caps the ledger size", async () => {
  const db = fixtureDb();
  for (let i = 0; i < 5; i += 1) {
    await withActionLifecycle(db, {
      provider: "twilio", action: "sms.send", body: { to: "+1", message: `msg-${i}` },
      execute: async () => ok({ sid: `SM${i}` })
    });
  }
  const ledger = ensureNexusActionLedger(db);
  assert.equal(ledger.length, 5);
  assert.equal(ledger[0].result.body.data.sid, "SM4", "most recent entry must be first");
});
