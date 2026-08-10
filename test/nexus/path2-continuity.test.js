"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { ConversationRepository } = require("../../nexus/data/conversation-repository.js");
const { MemoryRepository } = require("../../nexus/memory/repository.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { ApplicationRegistry } = require("../../nexus/apps/registry.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");

test("recent conversation context is tenant scoped, bounded, and chronological", async () => {
  let observed;
  const repository = new ConversationRepository({ query: async (sql, params) => {
    observed = { sql, params };
    return { rows: [{ role: "assistant", content: "second" }, { role: "user", content: "first" }] };
  } });
  const turns = await repository.recent({ tenantId: "tenant-a", conversationId: "cnv_test", limit: 500 });
  assert.match(observed.sql, /tenant_id=\$1 and conversation_id=\$2/);
  assert.deepEqual(observed.params, ["tenant-a", "cnv_test", 100]);
  assert.deepEqual(turns.map(turn => turn.content), ["first", "second"]);
});

test("conversation provenance crosses the PostgreSQL boundary as explicit JSON", async () => { let observed;
  const repository = new ConversationRepository({ query: async (sql, params) => { observed = { sql, params }; return { rows: [{}] }; } });
  await repository.append({ tenantId: "tenant-a", conversationId: "cnv_test", actorId: "user-a", role: "user", content: "hello", provenance: { channel: "voice" } });
  assert.match(observed.sql, /\$7::jsonb/); assert.equal(observed.params[6], '{"channel":"voice"}');
});

test("planning memory search stays purpose scoped and hides health memory by default", async () => {
  let observed;
  const repository = new MemoryRepository({ query: async (sql, params) => { observed = { sql, params }; return { rows: [] }; } });
  await repository.search({ tenantId: "tenant-a", userId: "user-a", purpose: "task_planning",
    query: "Nakuru agronomy", roles: ["standard_user"], limit: 8 });
  assert.match(observed.sql, /principal_id=\$2 and purpose=\$3/);
  assert.match(observed.sql, /sensitivity <> 'health'/);
  assert.deepEqual(observed.params, ["tenant-a", "user-a", "task_planning", "Nakuru agronomy", 8, false]);
});

test("planner carries corrections, locale, prior task, and recent turns into one model request", async () => {
  let request;
  const planner = new OpenEndedPlanner({
    model: { plan: async input => { request = input; return { goal: "Use Kisumu, not Nakuru", application: "maps",
      riskTier: "low", clarification: null, steps: [{ id: "map", title: "Correct map", toolId: null,
        input: { location: "Kisumu" }, dependsOn: [], fallbackToolIds: [], requiredPermission: null }] }; } },
    tools: { list: async () => [] }, applications: new ApplicationRegistry(defaultApplicationManifests()),
    memory: { search: async () => [] }
  });
  const command = { tenantId: "tenant-a", actorId: "user-a", text: "No, use Kisumu instead",
    locale: "sw", channel: "voice" };
  const priorTask = { taskId: "tsk_prior", goal: "Map Nakuru", application: "maps", state: "planned" };
  const plan = await planner.plan({ command, context: { roles: [], can: () => true }, priorTask,
    conversationHistory: [{ role: "user", content: "Show Nakuru" }, { role: "assistant", content: "Opening Nakuru" }] });
  assert.equal(plan.application, "maps"); assert.equal(request.locale, "sw");
  assert.equal(request.priorTask.taskId, "tsk_prior"); assert.equal(request.conversationHistory.length, 2);
});
