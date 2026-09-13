const test = require("node:test");
const assert = require("node:assert/strict");
const pgAuditEvents = require("../../server/pg-audit-events.js");

function stubPool(handlers) {
  const calls = [];
  return {
    calls,
    query: async (sql, params = []) => {
      calls.push({ sql, params });
      for (const [pattern, respond] of handlers) {
        if (pattern.test(sql)) return respond(params, calls);
      }
      throw new Error(`stubPool: no handler for query: ${sql}`);
    }
  };
}

test("recordAuditEvent requires action and entityType", async () => {
  const pool = stubPool([]);
  await assert.rejects(() => pgAuditEvents.recordAuditEvent(pool, { entityType: "pilot" }), /action and entityType are required/);
  await assert.rejects(() => pgAuditEvents.recordAuditEvent(pool, { action: "x.y" }), /action and entityType are required/);
  assert.equal(pool.calls.length, 0);
});

test("recordAuditEvent defaults to the seeded demo tenant and nulls out a non-UUID entityId", async () => {
  const pool = stubPool([
    [/^insert into audit_events/, params => {
      assert.equal(params[0], pgAuditEvents.DEMO_TENANT_ID);
      assert.equal(params[1], null, "user_id left null when not supplied");
      assert.equal(params[5], null, "a non-UUID entityId must be nulled, not passed to a uuid column");
      return { rows: [{ id: "evt-1", action: params[3] }] };
    }]
  ]);
  const created = await pgAuditEvents.recordAuditEvent(pool, {
    action: "record_created",
    entityType: "pilot",
    entityId: "case-123-not-a-uuid",
    metadata: { actor: "Standard User" }
  });
  assert.equal(created.action, "record_created");
});

test("recordAuditEvent passes through a genuinely valid UUID entityId", async () => {
  const realId = "cd98df4e-009b-4eb0-8e9f-e3d5ce053bf6";
  const pool = stubPool([
    [/^insert into audit_events/, params => {
      assert.equal(params[5], realId);
      return { rows: [{ id: "evt-2" }] };
    }]
  ]);
  await pgAuditEvents.recordAuditEvent(pool, { action: "record_created", entityType: "pilot", entityId: realId });
});

test("recordAiRun requires runType, provider, and responseText", async () => {
  const pool = stubPool([]);
  await assert.rejects(() => pgAuditEvents.recordAiRun(pool, { provider: "openai", responseText: "hi" }), /runType, provider, and responseText are required/);
  await assert.rejects(() => pgAuditEvents.recordAiRun(pool, { runType: "x", responseText: "hi" }), /runType, provider, and responseText are required/);
  await assert.rejects(() => pgAuditEvents.recordAiRun(pool, { runType: "x", provider: "openai" }), /runType, provider, and responseText are required/);
  assert.equal(pool.calls.length, 0);
});

test("recordAiRun inserts real prompt/response data against the seeded demo tenant", async () => {
  const pool = stubPool([
    [/^insert into ai_runs/, params => {
      assert.equal(params[0], pgAuditEvents.DEMO_TENANT_ID);
      assert.equal(params[3], "openai");
      assert.equal(params[4], "gpt-5.4-mini");
      assert.equal(JSON.parse(params[5]).command, "what's 2 plus 2");
      assert.equal(params[6], "4");
      return { rows: [{ id: "run-1" }] };
    }]
  ]);
  const created = await pgAuditEvents.recordAiRun(pool, {
    runType: "openai_native.conversation",
    provider: "openai",
    model: "gpt-5.4-mini",
    prompt: { command: "what's 2 plus 2" },
    responseText: "4"
  });
  assert.equal(created.id, "run-1");
});
