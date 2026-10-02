"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { ConsentRepository } = require("../../nexus/consent/repository.js");

// Found live (consent/tasks sweep): behavior-spine.js's recordConfirmedConsent() used to call
// countGrantedSince() (per cap) and then grant() as two separate, unguarded steps -- no transaction, no
// lock, and nexus_consents has no DB constraint tying rows to a per-day count. Two confirm() calls for
// two different pending steps sharing one consent scope (a client double-submit, or two devices signed
// into the same account), arriving close together while already one under a daily send/call cap, could
// both read the same "still under the cap" count and both grant -- silently landing the account one over
// its own anti-abuse cap on real, irreversible sends/calls. grantIfUnderCap() wraps the whole
// check-then-grant sequence in one transaction under a per-subject-scope advisory lock.

function fakeConsentsDb() {
  const rows = [];
  const db = {
    rows,
    async transaction(work) { return work(db); },
    async query(sql, params) {
      if (/pg_advisory_xact_lock/.test(sql)) return { rows: [] };
      if (/^select count\(\*\)::int as count from nexus_consents/.test(sql)) {
        const [tenantId, subjectId, scope, channel] = params;
        const count = rows.filter(row => row.tenant_id === tenantId && row.subject_id === subjectId && row.scope === scope
          && (channel === null || row.receipt?.sendChannel === channel) && !row.receipt?.released).length;
        return { rows: [{ count }] };
      }
      if (/^insert into nexus_consents/.test(sql)) {
        const [consentId, tenantId, subjectId, taskId, scope, purpose, recipient, policyVersion, receipt] = params;
        const row = { consent_id: consentId, tenant_id: tenantId, subject_id: subjectId, task_id: taskId, scope, purpose, recipient, state: "granted", policy_version: policyVersion, receipt };
        rows.push(row);
        return { rows: [row] };
      }
      return { rows: [] };
    }
  };
  return db;
}

test("grantIfUnderCap refuses a grant once the cap is reached, but a released consent no longer counts against it", async () => {
  const repo = new ConsentRepository(fakeConsentsDb());
  const grantArgs = { tenantId: "t1", subjectId: "u1", scope: "communications:send:write", purpose: "p", policyVersion: "v1" };
  const caps = [{ limit: 1, channel: null, noun: "messages" }];
  const first = await repo.grantIfUnderCap({ ...grantArgs, receipt: { sendChannel: "sms" }, caps });
  assert.ok(first?.consent_id, "the first grant under the cap must succeed");
  const second = await repo.grantIfUnderCap({ ...grantArgs, receipt: { sendChannel: "sms" }, caps });
  assert.deepEqual(second, { limitReached: true, limit: 1, noun: "messages" });
  await repo.release({ tenantId: "t1", subjectId: "u1", consentId: first.consent_id, reason: "test" });
  first.receipt.released = "test"; // mirror the release in the fake's own row (release() runs a real UPDATE the fake doesn't model)
  const afterRelease = await repo.grantIfUnderCap({ ...grantArgs, receipt: { sendChannel: "sms" }, caps });
  assert.ok(afterRelease?.consent_id, "a released grant must no longer count toward the cap");
});

// A fake db whose advisory lock genuinely serializes concurrent transactions (matching real Postgres
// blocking behavior), proving the check-then-grant race is actually closed, not just checked sequentially.
function lockingConsentsDb() {
  const rows = []; const locks = new Map();
  const db = { rows,
    async transaction(fn) {
      let release = null; const trx = Object.create(db);
      trx.query = async (sql, params) => {
        if (/pg_advisory_xact_lock/.test(sql)) {
          const key = params[0]; const ahead = locks.get(key) || Promise.resolve();
          let myRelease; const held = new Promise(resolve => { myRelease = resolve; });
          locks.set(key, ahead.then(() => held)); await ahead; release = myRelease; return { rows: [] };
        }
        return db.query(sql, params);
      };
      try { return await fn(trx); } finally { if (release) release(); }
    },
    async query(sql, params) {
      if (/^select count\(\*\)::int as count from nexus_consents/.test(sql)) {
        const [tenantId, subjectId, scope] = params;
        return { rows: [{ count: rows.filter(row => row.tenant_id === tenantId && row.subject_id === subjectId && row.scope === scope).length }] };
      }
      if (/^insert into nexus_consents/.test(sql)) {
        const [consentId, tenantId, subjectId, taskId, scope, purpose, recipient, policyVersion, receipt] = params;
        const row = { consent_id: consentId, tenant_id: tenantId, subject_id: subjectId, scope, receipt };
        rows.push(row);
        return { rows: [row] };
      }
      return { rows: [] };
    } };
  return db;
}

test("two concurrent confirmations racing the last slot under a daily cap don't both grant", async () => {
  const repo = new ConsentRepository(lockingConsentsDb());
  const grantArgs = { tenantId: "t1", subjectId: "u1", scope: "communications:send:write", purpose: "p", policyVersion: "v1", receipt: {} };
  const caps = [{ limit: 3, channel: null, noun: "messages" }];
  // fill to one under the cap first, sequentially (not the race under test)
  await repo.grantIfUnderCap({ ...grantArgs, caps });
  await repo.grantIfUnderCap({ ...grantArgs, caps });
  const results = await Promise.allSettled([
    repo.grantIfUnderCap({ ...grantArgs, caps }),
    repo.grantIfUnderCap({ ...grantArgs, caps })
  ]);
  const granted = results.filter(result => result.status === "fulfilled" && result.value?.consent_id).length;
  assert.equal(granted, 1, "only one of the two racing confirmations may claim the last cap slot");
});
