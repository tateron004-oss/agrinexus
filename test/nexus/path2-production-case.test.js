"use strict";
const assert = require("node:assert/strict"); const test = require("node:test");
const { executeProductionCase, promptFor, LOCALES } = require("../../nexus/path2/production-case.js");
const releaseSha = "a".repeat(40); const path1Baseline = "b".repeat(40);
test("production case binds a real planner observation to the exact release", async () => { const active = { planner: { plan: async () => ({ goal: "goal", application: "maps", clarification: null,
    planningAttempts: 1, steps: [{ clientStepId: "one", dependsOn: [], fallbackToolIds: [] }] }) }, memory: {}, conversations: {}, tools: { list: async () => [] } };
  const evidence = await executeProductionCase({ active, principal: { tenantId: "tenant", userId: "user", role: "standard_user", permissions: [] },
    input: { caseId: "p2c_intelligence_0001", lane: "intelligence", ordinal: 1, releaseSha, path1Baseline }, releaseSha });
  assert.equal(evidence.passed, true); assert.equal(evidence.production, true); assert.equal(evidence.simulated, false);
  assert.equal(evidence.receipt.releaseSha, releaseSha); assert.equal(evidence.receipt.source, "authoritative-production-runtime"); });
test("production prompts vary and multilingual cases cover every supported locale", () => { assert.notEqual(promptFor({ lane: "planning", ordinal: 1 }), promptFor({ lane: "planning", ordinal: 2 })); assert.equal(LOCALES.length, 6); });
test("a production planner rejection becomes failed evidence instead of aborting the matrix", async () => { const active = { planner: { plan: async () => { throw Object.assign(new Error("invalid"), { code: "plan_invalid" }); } } };
  const evidence = await executeProductionCase({ active, principal: { tenantId: "tenant", userId: "user", role: "standard_user", permissions: [] },
    input: { caseId: "p2c_intelligence_0002", lane: "intelligence", ordinal: 2, releaseSha, path1Baseline }, releaseSha });
  assert.equal(evidence.passed, false); assert.equal(evidence.receipt.failure, "plan_invalid"); assert.equal(evidence.receipt.failureStage, "planning"); assert.equal(evidence.production, true); });
test("a durable-memory runtime rejection becomes a failed exact-production receipt", async () => { const active = {
    planner: { plan: async () => ({ goal: "remember", application: "live-knowledge", clarification: null,
      planningAttempts: 1, steps: [{ clientStepId: "one", dependsOn: [], fallbackToolIds: [] }] }) },
    conversations: { ensure: async () => ({}), append: async () => { throw Object.assign(new Error("invalid input syntax for type json"), { code: "22P02" }); } },
    memory: { search: async () => [] }
  };
  const evidence = await executeProductionCase({ active, principal: { tenantId: "tenant", userId: "user", role: "standard_user", permissions: [] },
    input: { caseId: "p2c_memory_0002", lane: "memory", ordinal: 2, releaseSha, path1Baseline }, releaseSha });
  assert.equal(evidence.passed, false); assert.equal(evidence.receipt.failure, "22P02");
  assert.equal(evidence.receipt.failureStage, "memory"); assert.equal(evidence.falseSuccesses, 0); });
