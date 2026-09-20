"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");
const { ConsentRepository } = require("../../nexus/consent/repository.js");

// 2026-09-21: three confirmed email attempts failed because email is not set up on the server (nothing was sent), yet each used a
// slot in the person's daily cap of 10.
const SCOPE = "communications:send:write";
const input = { channel: "email", to: "a@b.co", message: "hi" };
const step = { step_id: "stp_1", tool_id: "communications.send", title: "Send an email", input };
const yes = { taskId: "tsk_1", stepId: "stp_1", approved: true, text: "Yes, send it.", channel: "typed" };
const context = { tenantId: "t1", userId: "u1", can: () => true, hasRole: () => false };

function harness({ failWith, existing = null, withRelease = true }) {
  const calls = [];
  const task = { taskId: "tsk_1", ownerId: "u1", application: "communications", goal: "send", riskTier: "regulated", conversationId: "cnv_1", steps: [step] };
  const consents = { active: async () => existing, countGrantedSince: async () => 0, grant: async args => ({ consent_id: "cns_new", ...args }),
    ...(withRelease ? { release: async args => { calls.push(["release", args]); return { consent_id: args.consentId }; } } : {}) };
  const engine = { tools: { get: async () => ({ tool_id: "communications.send", consent_scope: SCOPE }) }, approve: async () => {}, consents,
    executeTask: async () => { if (failWith) throw Object.assign(new Error("boom"), { code: failWith }); return { state: "awaiting_render", receipts: [] }; } };
  const spine = new BehaviorSpine({ agent: { command: async () => assert.fail("not used") }, engine, tasks: { get: async () => task },
    conversations: { append: async () => {} }, workspaceStates: { stage: async () => {}, acknowledge: async () => {} } });
  return { spine, calls };
}

test("a send the provider never made releases the consent recorded for it, and the error still reaches the person", async () => {
  for (const code of ["communications_provider_unavailable", "communications_send_blocked"]) {
    const { spine, calls } = harness({ failWith: code });
    await assert.rejects(() => spine.confirm({ input: yes, context }), error => error.code === code, code);
    assert.deepEqual(calls.map(call => call[0]), ["release"], code);
    assert.deepEqual(calls[0][1], { tenantId: "t1", subjectId: "u1", consentId: "cns_new", reason: code });
  }
});

test("a send the provider did try (undelivered, failed) or any other error keeps its consent and its place in the cap", async () => {
  for (const code of ["communications_provider_failed", "outcome_unverified", "task_execution_failed", undefined]) {
    const { spine, calls } = harness({ failWith: code || "x" });
    await assert.rejects(() => spine.confirm({ input: yes, context }));
    assert.equal(calls.length, 0, String(code));
  }
});

test("only a consent recorded by this confirmation is ever released, and a successful send releases nothing", async () => {
  const reused = harness({ failWith: "communications_provider_unavailable", existing: { consent_id: "cns_old" } });
  await assert.rejects(() => reused.spine.confirm({ input: yes, context }));
  assert.equal(reused.calls.length, 0, "an existing consent is never released");
  const ok = harness({});
  await ok.spine.confirm({ input: yes, context });
  assert.equal(ok.calls.length, 0);
  const noRelease = harness({ failWith: "communications_provider_unavailable", withRelease: false });
  await assert.rejects(() => noRelease.spine.confirm({ input: yes, context }), error => error.code === "communications_provider_unavailable", "a runtime without release behaves as before");
});

test("the repository releases only a granted consent, and released consents no longer count toward the cap", async () => {
  const seen = [];
  const repo = new ConsentRepository({ query: async (sql, params) => { seen.push({ sql, params }); return { rows: [{ consent_id: "cns_new", count: 4 }] }; } });
  const released = await repo.release({ tenantId: "t1", subjectId: "u1", consentId: "cns_new", reason: "communications_provider_unavailable" });
  assert.equal(released.consent_id, "cns_new");
  assert.match(seen[0].sql, /state='revoked',revoked_at=now\(\)/); assert.match(seen[0].sql, /jsonb_build_object\('released',\$4::text\)/); assert.match(seen[0].sql, /and state='granted' returning/);
  assert.deepEqual(seen[0].params, ["t1", "u1", "cns_new", "communications_provider_unavailable"]);
  assert.equal(await repo.countGrantedSince({ tenantId: "t1", subjectId: "u1", scope: SCOPE }), 4);
  assert.match(seen[1].sql, /coalesce\(receipt->>'released',''\) = ''/, "released consents are excluded from the count");
});
