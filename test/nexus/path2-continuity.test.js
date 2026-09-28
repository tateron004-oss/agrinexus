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

test("owner() looks up the conversation's owner scoped by tenant, and returns null when not found", async () => {
  let observed;
  const found = new ConversationRepository({ query: async (sql, params) => { observed = { sql, params }; return { rows: [{ owner_id: "user-a" }] }; } });
  assert.equal(await found.owner({ tenantId: "tenant-a", conversationId: "cnv_test" }), "user-a");
  assert.match(observed.sql, /tenant_id=\$1 and conversation_id=\$2/);
  assert.deepEqual(observed.params, ["tenant-a", "cnv_test"]);
  const missing = new ConversationRepository({ query: async () => ({ rows: [] }) });
  assert.equal(await missing.owner({ tenantId: "tenant-a", conversationId: "cnv_missing" }), null);
});

test("conversation content and provenance cross the PostgreSQL boundary explicitly", async () => { let observed;
  // append() now checks the conversation's real owner first (see its own
  // comment) -- this fake conversation was never ensure()'d, so owner()
  // correctly returns no row (null), and the append proceeds as before.
  const repository = new ConversationRepository({ query: async (sql, params) => {
    if (/select owner_id/.test(sql)) return { rows: [] };
    observed = { sql, params }; return { rows: [{}] };
  } });
  await repository.append({ tenantId: "tenant-a", conversationId: "cnv_test", actorId: "user-a", role: "user", content: "hello", provenance: { channel: "voice" } });
  assert.match(observed.sql, /to_jsonb\(\$6::text\)/); assert.match(observed.sql, /\$7::jsonb/);
  assert.equal(observed.params[5], "hello"); assert.equal(observed.params[6], '{"channel":"voice"}');
});

// Found live (production outage): actorId: null is Nexus's own trusted,
// hardcoded signal for a system/assistant-authored message -- every real
// caller (agent-service.js, behavior-spine.js) either passes the real
// user's own id for their own message, or the literal `null` for its own
// reply. Without this exemption, EVERY assistant reply into a conversation
// ensure() had just given a real owner (which is every conversation,
// always) hit the ownership guard and threw conversation_owner_mismatch --
// so every single conversational turn that produced any response at all
// failed, the moment the conversation had a real owner.
test("append() allows a system/assistant reply (actorId: null) into a conversation with a real owner, but still rejects a genuine cross-user mismatch", async () => {
  const repository = new ConversationRepository({ query: async (sql, params) => {
    if (/select owner_id/.test(sql)) return { rows: [{ owner_id: "user-a" }] };
    return { rows: [{}] };
  } });
  await assert.doesNotReject(() => repository.append({ tenantId: "tenant-a", conversationId: "cnv_test", actorId: null, role: "assistant", content: "reply", provenance: {} }),
    "a system/assistant message must be allowed into a conversation that already has a real owner");

  await assert.rejects(
    () => repository.append({ tenantId: "tenant-a", conversationId: "cnv_test", actorId: "user-b", role: "user", content: "hi", provenance: {} }),
    error => { assert.equal(error.code, "conversation_owner_mismatch"); return true; },
    "a genuinely different real user must still be rejected"
  );
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
      riskTier: "low", clarification: null, steps: [{ id: "map", title: "Correct map", toolId: "maps.view",
        input: { origin: "Kisumu", destination: "Nakuru" }, dependsOn: [], fallbackToolIds: [], requiredPermission: null }] }; } },
    tools: { list: async () => [{ tool_id: "maps.view", availability: "available" }] }, applications: new ApplicationRegistry(defaultApplicationManifests()),
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
