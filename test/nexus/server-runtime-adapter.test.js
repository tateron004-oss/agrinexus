"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter, requestContext, executeProductionFaultIsolation, runObjectiveProbe } = require("../../nexus/compat/server-runtime-adapter.js");

function responseCapture() {
  const result = {};
  return { result, send(_res, status, body) { result.status = status; result.body = body; } };
}

test("request context preserves tenant, identity, role, and permission boundaries", () => {
  const context = requestContext({ headers: { "x-request-id": "request-1" } }, {
    id: "user-1", tenantId: "tenant-1", role: "Standard User", permissions: ["task.execute"]
  });
  assert.equal(context.requestId, "request-1"); assert.equal(context.correlationId, "request-1");
  assert.equal(context.tenantId, "tenant-1");
  assert.equal(context.userId, "user-1"); assert.equal(context.hasRole("Standard User"), true);
  assert.equal(context.can("task.execute"), true); assert.equal(context.can("admin"), false);
});

test("behavior turns preserve one correlation identifier through governed execution", async () => {
  let observedContext;
  const runtime = { ready: Promise.resolve(), engine: { tasks: {} }, behavior: {
    turn: async ({ input, context }) => {
      observedContext = context;
      assert.equal(input.correlationId, "correlation-request-1");
      return { schema: "nexus.behavior-turn.v1", authoritative: true, legacyFallbackUsed: false, completed: true };
    }
  } };
  const adapter = createServerRuntimeAdapter({
    resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1", role: "Standard User", permissions: ["tasks:execute"] }),
    readJson: async () => ({ text: "Check maize water stress", channel: "typed" }),
    createRuntimeFn: () => runtime
  });
  const response = responseCapture();
  await adapter.handle({ method: "POST", headers: { "x-request-id": "correlation-request-1" } }, {},
    new URL("http://local/api/nexus/runtime/behavior/turn"), response.send);
  assert.equal(response.result.status, 200);
  assert.equal(observedContext.requestId, "correlation-request-1");
  assert.equal(observedContext.correlationId, "correlation-request-1");
});

test("status truthfully refuses a missing authoritative runtime without legacy fallback", async () => {
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => null, readJson: async () => ({}),
    createRuntimeFn: () => { const error = new Error("DATABASE_URL missing"); error.code = "UNSAFE_PRODUCTION_CONFIG"; throw error; } });
  const capture = responseCapture();
  assert.equal(await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/status"), capture.send), true);
  assert.equal(capture.result.status, 503); assert.equal(capture.result.body.authoritative, true);
  assert.equal(capture.result.body.durable, false); assert.match(capture.result.body.message, /no legacy write fallback/i);
});

test("task endpoints require an authenticated Nexus user before database access", async () => {
  let runtimeCreated = false;
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => null, readJson: async () => ({}),
    createRuntimeFn: () => { runtimeCreated = true; return {}; } });
  const capture = responseCapture();
  await adapter.handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/tasks"), capture.send);
  assert.equal(capture.result.status, 401); assert.equal(runtimeCreated, false);
});

test("five production objective probes require acceptance authentication and the exact release", async () => {
  const releaseSha = "a".repeat(40); let runtimeCreated = false;
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: "b".repeat(40) }),
    createRuntimeFn: () => { runtimeCreated = true; return { ready: Promise.resolve() }; } });
  for (const probe of ["consolidated-brain", "realtime-voice", "documents-lifecycle", "healthcare-controls", "predictive-model"]) {
    runtimeCreated = false; const unauthorized = responseCapture();
    await adapter.handle({ method: "POST", headers: {} }, {},
      new URL(`http://local/api/nexus/runtime/production-acceptance/probes/${probe}`), unauthorized.send);
    assert.equal(unauthorized.result.status, 401); assert.equal(runtimeCreated, false);
    const stale = responseCapture();
    await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {},
      new URL(`http://local/api/nexus/runtime/production-acceptance/probes/${probe}`), stale.send);
    assert.equal(stale.result.status, 409); assert.equal(stale.result.body.code, "evidence_sha_mismatch");
  }
});

test("consolidated brain probe verifies one authoritative object graph without a legacy fallback", async () => {
  const principal = { tenantId: "tenant-1", userId: "user-1", role: "admin", permissions: ["acceptance:identity"] };
  const planner = {}; const tasks = {}; const engine = { executeTask() {} }; const agent = { planner, engine };
  const behavior = { agent, engine, tasks, turn() {} };
  const active = { ready: Promise.resolve(), db: { query: async () => ({ rows: [principal] }) }, planner, tasks, engine, agent, behavior,
    tools: { list() {} }, applications: { list() {} } };
  const result = await runObjectiveProbe("consolidated-brain", { active, env: {}, releaseSha: "a".repeat(40) });
  assert.equal(result.ok, true); assert.equal(result.singleRuntime, true); assert.equal(result.legacyFallbackUsed, false);
});

test("realtime voice probe requires configured Realtime and identical governed typed and voice plans", async () => {
  const principal = { tenantId: "tenant-1", userId: "user-1", role: "admin", permissions: ["acceptance:identity"] };
  const active = { db: { query: async () => ({ rows: [principal] }) }, planner: { plan: async ({ command }) => ({
    application: "documents", riskTier: "low", steps: [{ toolId: "documents.create", input: { title: "Farming plan" }, dependsOn: [] }], channel: command.channel
  }) } };
  const result = await runObjectiveProbe("realtime-voice", { active,
    env: { OPENAI_API_KEY: "configured", OPENAI_REALTIME_MODEL: "gpt-realtime-2" }, releaseSha: "a".repeat(40) });
  assert.equal(result.ok, true); assert.equal(result.equivalent, true); assert.equal(result.configured, true);
});

test("documents lifecycle probe reads the verified provider output from the workspace data contract", async () => {
  const principal = { tenantId: "tenant-1", userId: "user-1", role: "admin", permissions: ["acceptance:identity"] };
  const active = { db: { query: async () => ({ rows: [principal] }) }, behavior: { turn: async () => ({
    application: "documents", state: "render_required", render: { data: { documentId: "doc-1", savedVersion: 1, reopenVerified: true } },
    receipts: [{ verification: { evidence: [{ savedVersion: 1, reopenVerified: true }] } }]
  }) } };
  const result = await runObjectiveProbe("documents-lifecycle", { active, env: {}, releaseSha: "a".repeat(40) });
  assert.equal(result.ok, true); assert.equal(result.documentId, "doc-1"); assert.equal(result.fullLifecycle, true);
});

// Confirmed: this probe used to also accept a `reopenVerified`/`savedVersion`
// key merely APPEARING in the serialized result (JSON.stringify(result)
// .includes(...)), regardless of its actual value -- a provider honestly
// reporting reopenVerified: false still made the field name present in the
// JSON, so the probe could never actually catch a dishonest or missing
// verification.
test("documents lifecycle probe fails closed when reopenVerified/savedVersion are present but false, not fooled by the field name alone", async () => {
  const principal = { tenantId: "tenant-1", userId: "user-1", role: "admin", permissions: ["acceptance:identity"] };
  const active = { db: { query: async () => ({ rows: [principal] }) }, behavior: { turn: async () => ({
    application: "documents", state: "render_required", render: { data: { documentId: "doc-1", savedVersion: 1, reopenVerified: false } },
    receipts: [{ verification: { evidence: [{ savedVersion: 1, reopenVerified: false }] } }]
  }) } };
  const result = await runObjectiveProbe("documents-lifecycle", { active, env: {}, releaseSha: "a".repeat(40) });
  assert.equal(result.reopened, false);
  assert.equal(result.ok, false);
  assert.equal(result.fullLifecycle, false);
});

// Confirmed live: the real documents.create executor's verifier
// (nexus/documents/executor.js's verifyDocumentsCreateOutcome) never
// produces a receipt.verification.evidence array at all -- only
// {verified, method, reason} -- so a receipt-evidence-only check always
// saw an empty array in production, even though the executor's real
// output (savedVersion/reopenVerified) reached nexus.workspace-outcome.v2's
// render.data via mergeStepObjects. This is the exact shape a real
// production run produces; the fix must pass this without any evidence array.
test("documents lifecycle probe passes on the real production shape: no receipt evidence array, only workspace-outcome render data", async () => {
  const principal = { tenantId: "tenant-1", userId: "user-1", role: "admin", permissions: ["acceptance:identity"] };
  const active = { db: { query: async () => ({ rows: [principal] }) }, behavior: { turn: async () => ({
    application: "documents", state: "render_required", render: { data: { documentId: "doc-1", savedVersion: 3, reopenVerified: true } },
    receipts: [{ verification: { verified: true, method: "real_local_export", reason: null } }]
  }) } };
  const result = await runObjectiveProbe("documents-lifecycle", { active, env: {}, releaseSha: "a".repeat(40) });
  assert.equal(result.ok, true); assert.equal(result.documentId, "doc-1");
  assert.equal(result.saved, true); assert.equal(result.reopened, true); assert.equal(result.fullLifecycle, true);
});

test("documents lifecycle probe still fails closed on the real production shape when reopenVerified is honestly false", async () => {
  const principal = { tenantId: "tenant-1", userId: "user-1", role: "admin", permissions: ["acceptance:identity"] };
  const active = { db: { query: async () => ({ rows: [principal] }) }, behavior: { turn: async () => ({
    application: "documents", state: "render_required", render: { data: { documentId: "doc-1", savedVersion: 3, reopenVerified: false } },
    receipts: [{ verification: { verified: true, method: "real_local_export", reason: null } }]
  }) } };
  const result = await runObjectiveProbe("documents-lifecycle", { active, env: {}, releaseSha: "a".repeat(40) });
  assert.equal(result.ok, false); assert.equal(result.reopened, false); assert.equal(result.fullLifecycle, false);
});

test("authenticated users see only their tenant-owned task status", async () => {
  let listInput; const capture = responseCapture();
  const runtime = { engine: { tasks: { list: async input => { listInput = input; return [{ taskId: "task-1", state: "running" }]; } } },
    applications: { list: () => [] }, workspaceMigrations: {}, observability: {} };
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1" }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/tasks?state=running&limit=10"), capture.send);
  assert.equal(capture.result.status, 200); assert.deepEqual(listInput, { tenantId: "tenant-1", ownerId: "user-1", state: "running", limit: "10" });
});

test("behavior turn enters one authoritative spine without a caller-selected workspace", async () => {
  let turnInput;
  const runtime = { ready: Promise.resolve(), engine: { tasks: {} },
    behavior: { turn: async input => { turnInput = input; return { schema: "nexus.behavior-turn.v1",
      completed: true, application: "live-knowledge", legacyFallbackUsed: false }; } } };
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1",
    permissions: ["tasks:execute"] }), readJson: async () => ({ text: "Why do leaves change color?", channel: "typed" }),
    createRuntimeFn: () => runtime });
  const response = responseCapture();
  await adapter.handle({ method: "POST", headers: { "x-request-id": "request-1" } }, {},
    new URL("http://local/api/nexus/runtime/behavior/turn"), response.send);
  assert.equal(response.result.status, 200);
  assert.equal(turnInput.input.text, "Why do leaves change color?");
  assert.equal(turnInput.input.workspaceId, undefined);
  assert.equal(response.result.body.legacyFallbackUsed, false);
});

test("behavior confirm resumes a pending task+step through the authoritative spine instead of a fresh turn", async () => {
  let confirmInput;
  const runtime = { ready: Promise.resolve(), engine: { tasks: {} },
    behavior: { confirm: async input => { confirmInput = input; return { schema: "nexus.behavior-turn.v1",
      completed: true, state: "completed", taskId: "tsk_1", application: "health", legacyFallbackUsed: false }; } } };
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1",
    permissions: ["tasks:execute"] }), readJson: async () => ({ taskId: "tsk_1", stepId: "stp_1", approved: true, text: "Yes, confirm it." }),
    createRuntimeFn: () => runtime });
  const response = responseCapture();
  await adapter.handle({ method: "POST", headers: { "x-request-id": "request-2" } }, {},
    new URL("http://local/api/nexus/runtime/behavior/confirm"), response.send);
  assert.equal(response.result.status, 200);
  assert.equal(confirmInput.input.taskId, "tsk_1");
  assert.equal(confirmInput.input.stepId, "stp_1");
  assert.equal(confirmInput.input.approved, true);
  assert.equal(response.result.body.legacyFallbackUsed, false);
});

test("behavior confirm fails closed when the behavior spine has no confirm method", async () => {
  const runtime = { ready: Promise.resolve(), engine: { tasks: {} }, behavior: {} };
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1",
    permissions: ["tasks:execute"] }), readJson: async () => ({ taskId: "tsk_1", stepId: "stp_1", approved: true }),
    createRuntimeFn: () => runtime });
  const response = responseCapture();
  await adapter.handle({ method: "POST", headers: { "x-request-id": "request-3" } }, {},
    new URL("http://local/api/nexus/runtime/behavior/confirm"), response.send);
  assert.equal(response.result.status, 503);
  assert.equal(response.result.body.code, "behavior_spine_unavailable");
});

test("behavior-turn database failures log only safe diagnostic identifiers", async () => {
  const secret = "private-row-value-must-not-leak"; const logCalls = [];
  const databaseError = new Error(`null value contains ${secret}`);
  Object.assign(databaseError, { code: "23502", schema: "public", table: "nexus_tasks",
    column: "owner_id", constraint: "nexus_tasks_owner_id_not_null", routine: "ExecConstraints",
    detail: `Failing row contains ${secret}` });
  const runtime = { ready: Promise.resolve(), engine: { tasks: {} },
    behavior: { turn: async () => { throw databaseError; } } };
  const adapter = createServerRuntimeAdapter({
    resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1", permissions: ["tasks:execute"] }),
    readJson: async () => ({ text: "Diagnose safely", channel: "typed" }),
    logger: { error: (...args) => logCalls.push(args) }, createRuntimeFn: () => runtime
  });
  const response = responseCapture();
  await adapter.handle({ method: "POST", headers: { "x-request-id": "request-safe-1" } }, {},
    new URL("http://local/api/nexus/runtime/behavior/turn"), response.send);
  assert.equal(response.result.status, 503);
  assert.deepEqual(response.result.body, {
    error: "The authoritative Nexus runtime is unavailable; no legacy write fallback was used.", code: "23502"
  });
  assert.equal(logCalls.length, 1); assert.equal(logCalls[0][0], "authoritative.runtime.request_failed");
  assert.deepEqual(logCalls[0][1], { code: "23502", requestId: "request-safe-1", schema: "public",
    table: "nexus_tasks", column: "owner_id", constraint: "nexus_tasks_owner_id_not_null", routine: "ExecConstraints" });
  assert.doesNotMatch(JSON.stringify(logCalls), /private-row-value-must-not-leak|null value|Failing row/);
});

test("authenticated refresh recovery returns only authoritative tenant conversation turns", async () => {
  let recentInput; const runtime = { ready: Promise.resolve(), engine: { tasks: {} },
    conversations: { owner: async () => "user-1", recent: async input => { recentInput = input; return [{ role: "assistant", content: "Your route is still open.", created_at: "2026-08-12T00:00:00Z", provenance: { taskId: "tsk_1" } }]; } } };
  const adapter = createServerRuntimeAdapter({ env: { RENDER_GIT_COMMIT: "a".repeat(40) },
    resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1" }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  const response = responseCapture(); await adapter.handle({ method: "GET", headers: {} }, {},
    new URL("http://local/api/nexus/runtime/behavior/conversation?conversationId=cnv_12345678&limit=24"), response.send);
  assert.equal(response.result.status, 200); assert.equal(response.result.body.authoritative, true);
  assert.deepEqual(recentInput, { tenantId: "tenant-1", conversationId: "cnv_12345678", limit: 24 });
  assert.equal(response.result.body.turns[0].content, "Your route is still open.");
});

test("runtime readiness proves the authoritative database with a live query", async () => {
  let queried = false; const runtime = { ready: Promise.resolve(), engine: { tasks: {} }, behavior: {}, conversations: { recent() {} },
    db: { query: async sql => { queried = /select 1/.test(sql); return { rows: [{ authoritative_runtime_ready: 1 }] }; } } };
  const adapter = createServerRuntimeAdapter({ env: { RENDER_GIT_COMMIT: "b".repeat(40) },
    resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1" }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  const response = responseCapture(); await adapter.handle({ method: "GET", headers: {} }, {},
    new URL("http://local/api/nexus/runtime/behavior/readiness"), response.send);
  assert.equal(response.result.status, 200); assert.equal(queried, true);
  assert.equal(response.result.body.databaseConnected, true); assert.equal(response.result.body.conversationRecoveryReady, true);
});

test("renderer acknowledgement completes the same authoritative command transaction", async () => {
  let ackInput;
  const runtime = { ready: Promise.resolve(), behavior: { acknowledge: async value => {
    ackInput = value; return { schema: "nexus.behavior-acknowledgement.v1", completed: true };
  } } };
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1",
    permissions: ["tasks:execute"] }), readJson: async () => ({ taskId: "tsk_1", commandId: "cmd_1",
      correlationId: "trace-1", workspace: "map", rendered: true, visible: true }), createRuntimeFn: () => runtime });
  const response = responseCapture();
  await adapter.handle({ method: "POST", headers: {} }, {},
    new URL("http://local/api/nexus/runtime/behavior/acknowledgements"), response.send);
  assert.equal(response.result.status, 200);
  assert.equal(ackInput.input.correlationId, "trace-1");
  assert.equal(ackInput.input.workspace, "map");
});

test("workspace cutover and observability status are authenticated and permission governed", async () => {
  const runtime = { engine: { tasks: {} }, applications: { list: () => [{ applicationId: "maps" }] },
    workspaceMigrations: { status: async id => ({ workspace_id: id, state: "authoritative" }) },
    observability: { summary: async input => ({ ...input, series: [] }) } };
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "admin-1", tenantId: "tenant-1", permissions: ["observability:read"] }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  const workspaces = responseCapture(); await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/workspaces"), workspaces.send);
  assert.equal(workspaces.result.body.workspaces[0].migration.state, "authoritative");
  const telemetry = responseCapture(); await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/observability/summary?windowMinutes=15"), telemetry.send);
  assert.equal(telemetry.result.status, 200); assert.equal(telemetry.result.body.windowMinutes, "15");
});

test("audit event review requires observability permission or the admin role", async () => {
  let listInput;
  const runtime = { engine: { tasks: {} }, applications: { list: () => [] }, workspaceMigrations: {}, observability: {},
    audit: { list: async input => { listInput = input; return [{ eventType: "task.created", outcome: "planned" }]; } } };
  const denied = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1", permissions: [] }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  const deniedResponse = responseCapture();
  await denied.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/audit/events"), deniedResponse.send);
  assert.equal(deniedResponse.result.status, 403);
  const allowed = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "admin-1", tenantId: "tenant-1", permissions: ["observability:read"] }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  const allowedResponse = responseCapture();
  await allowed.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/audit/events?taskId=tsk_1&limit=10"), allowedResponse.send);
  assert.equal(allowedResponse.result.status, 200);
  assert.equal(allowedResponse.result.body.events[0].eventType, "task.created");
  assert.deepEqual(listInput, { tenantId: "tenant-1", actorId: undefined, taskId: "tsk_1", eventType: undefined, limit: 10 });
});

test("autonomy pause status is readable with observability permission, admin role, or neither refused", async () => {
  const runtime = { engine: { tasks: {} }, applications: { list: () => [] }, workspaceMigrations: {}, observability: {},
    autonomyControl: { status: async () => ({ paused: true, reason: "manual hold" }) } };
  const denied = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1", permissions: [] }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  const deniedResponse = responseCapture();
  await denied.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/autonomy/pause"), deniedResponse.send);
  assert.equal(deniedResponse.result.status, 403);
  const allowed = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "admin-1", tenantId: "tenant-1", role: "admin", permissions: [] }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  const allowedResponse = responseCapture();
  await allowed.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/autonomy/pause"), allowedResponse.send);
  assert.equal(allowedResponse.result.status, 200);
  assert.equal(allowedResponse.result.body.paused, true);
  assert.equal(allowedResponse.result.body.reason, "manual hold");
});

test("toggling the autonomy pause switch requires the admin role, not just any permission", async () => {
  let setPausedInput;
  const runtime = { engine: { tasks: {} }, applications: { list: () => [] }, workspaceMigrations: {}, observability: {},
    autonomyControl: { setPaused: async input => { setPausedInput = input; return { data: { paused: input.paused, reason: input.reason, changedBy: input.actorId, changedAt: "2026-09-16T00:00:00.000Z" } }; } } };
  const nonAdmin = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1", permissions: ["observability:read"] }), readJson: async () => ({ paused: true }), createRuntimeFn: () => runtime });
  const nonAdminResponse = responseCapture();
  await nonAdmin.handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/autonomy/pause"), nonAdminResponse.send);
  assert.equal(nonAdminResponse.result.status, 403);
  assert.equal(setPausedInput, undefined);
  const admin = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "admin-1", tenantId: "tenant-1", role: "admin", permissions: [] }), readJson: async () => ({ paused: true, reason: "investigating a bad trigger" }), createRuntimeFn: () => runtime });
  const adminResponse = responseCapture();
  await admin.handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/autonomy/pause"), adminResponse.send);
  assert.equal(adminResponse.result.status, 200);
  assert.equal(setPausedInput.tenantId, "tenant-1"); assert.equal(setPausedInput.actorId, "admin-1");
  assert.equal(setPausedInput.paused, true); assert.equal(setPausedInput.reason, "investigating a bad trigger");
  assert.equal(adminResponse.result.body.paused, true);
});

test("document listing and download are strictly scoped to the caller's own tenant/owner", async () => {
  const fs = require("node:fs");
  const os = require("node:os");
  const path = require("node:path");
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-doc-route-test-"));
  const filename = "11111111-1111-1111-1111-111111111111.txt";
  fs.writeFileSync(path.join(tmpDir, filename), "real file content");

  const own = { document_id: "doc_own", title: "My report", document_type: "txt", version: 1,
    object_key: `local:${filename}`, created_at: "2026-09-01T00:00:00.000Z", updated_at: "2026-09-01T00:00:00.000Z" };
  const runtime = { engine: { tasks: {} },
    documents: {
      list: async () => [own],
      get: async ({ documentId }) => (documentId === "doc_own" ? own : null)
    } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_EXPORT_DIR: tmpDir },
    resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1" }), readJson: async () => ({}), createRuntimeFn: () => runtime });

  const list = responseCapture();
  await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/documents"), list.send);
  assert.equal(list.result.status, 200);
  assert.equal(list.result.body.documents.length, 1);
  assert.equal(list.result.body.documents[0].documentId, "doc_own");
  assert.equal(list.result.body.documents[0].downloadPath, undefined); // summary shape has no raw path, just metadata

  const download = responseCapture();
  await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/documents/doc_own"), download.send);
  assert.equal(download.result.status, 200);
  assert.equal(download.result.body.contentType, "text/plain");
  assert.equal(Buffer.from(download.result.body.contentBase64, "base64").toString("utf8"), "real file content");

  const notOwned = responseCapture();
  await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/documents/doc_someone_elses"), notOwned.send);
  assert.equal(notOwned.result.status, 404);
  assert.equal(notOwned.result.body.code, "document_not_found");

  fs.rmSync(tmpDir, { recursive: true, force: true });
});

test("document download rejects a malformed local object key instead of reading an arbitrary path", async () => {
  const traversal = { document_id: "doc_bad", title: "x", document_type: "txt", object_key: "local:../../etc/passwd" };
  const runtime = { engine: { tasks: {} }, documents: { get: async () => traversal } };
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1" }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  const response = responseCapture();
  await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/documents/doc_bad"), response.send);
  assert.equal(response.result.status, 404);
  assert.equal(response.result.body.code, "document_not_found");
});

test("document download reports a real 'file missing' error rather than a fake success when the local file is gone", async () => {
  const missing = { document_id: "doc_gone", title: "x", document_type: "txt", object_key: "local:22222222-2222-2222-2222-222222222222.txt" };
  const runtime = { engine: { tasks: {} }, documents: { get: async () => missing } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_EXPORT_DIR: require("node:os").tmpdir() },
    resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1" }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  const response = responseCapture();
  await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/documents/doc_gone"), response.send);
  assert.equal(response.result.status, 404);
  assert.equal(response.result.body.code, "document_file_missing");
});

test("document download falls back to shared object storage for a non-local object key", async () => {
  const s3Doc = { document_id: "doc_s3", title: "x", document_type: "pdf", object_key: "nexus/tenant-1/user-1/doc_s3/report.pdf" };
  const runtime = { engine: { tasks: {} }, documents: { get: async () => s3Doc },
    objectStorage: { get: async key => { assert.equal(key, s3Doc.object_key); return { body: Buffer.from("s3 bytes"), contentType: "application/pdf" }; } } };
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1" }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  const response = responseCapture();
  await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/documents/doc_s3"), response.send);
  assert.equal(response.result.status, 200);
  assert.equal(Buffer.from(response.result.body.contentBase64, "base64").toString("utf8"), "s3 bytes");
});

test("production acceptance requires its machine token before runtime access", async () => {
  let runtimeCreated = false; const capture = responseCapture();
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "secret" }, resolveUser: async () => null,
    readJson: async () => ({}), createRuntimeFn: () => { runtimeCreated = true; return {}; } });
  await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/production-acceptance"), capture.send);
  assert.equal(capture.result.status, 401); assert.equal(runtimeCreated, false);
});

test("production acceptance returns PostgreSQL-backed evidence for the exact release", async () => {
  const capture = responseCapture(); let reportInput;
  const runtime = { ready: Promise.resolve(), applications: { list: () => [] },
    acceptance: { report: async input => { reportInput = input; return { ok: true, releaseSha: input.releaseSha, components: {}, workspaces: [] }; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "secret", RENDER_GIT_COMMIT: "release-1" },
    resolveUser: async () => null, readJson: async () => ({}), createRuntimeFn: () => runtime,
    checkHealthFn: async () => ({ ok: true, pgvector: true, migrationsCurrent: true }) });
  await adapter.handle({ method: "GET", headers: { authorization: "Bearer secret" } }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance"), capture.send);
  assert.equal(capture.result.status, 200); assert.equal(capture.result.body.releaseSha, "release-1");
  assert.equal(reportInput.applications, runtime.applications); assert.equal(reportInput.health.pgvector, true);
});

test("production acceptance exposes a safe failing stage without leaking database details", async () => {
  const failure = Object.assign(new Error("password=secret table detail"), { code: "acceptance_query_failed", stage: "workspace-migrations" });
  const runtime = { ready: Promise.resolve(), applications: {}, acceptance: { report: async () => { throw failure; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: "a".repeat(40) },
    resolveUser: async () => null, readJson: async () => ({}), checkHealthFn: async () => ({ ok: true }), createRuntimeFn: () => runtime });
  const response = responseCapture();
  await adapter.handle({ method: "GET", headers: { authorization: "Bearer token" } }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance"), response.send);
  assert.equal(response.result.status, 503);
  assert.equal(response.result.body.code, "acceptance_query_failed");
  assert.equal(response.result.body.stage, "workspace-migrations");
  assert.doesNotMatch(JSON.stringify(response.result.body), /password|secret|table detail/);
});

test("production acceptance classifies a runtime health failure and binds it to the active SHA", async () => {
  const releaseSha = "c".repeat(40);
  const runtime = { ready: Promise.resolve(), applications: {}, acceptance: { report: async () => ({}) } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({}), checkHealthFn: async () => { throw new Error("database unavailable"); }, createRuntimeFn: () => runtime });
  const response = responseCapture();
  await adapter.handle({ method: "GET", headers: { authorization: "Bearer token" } }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance"), response.send);
  assert.equal(response.result.status, 503);
  assert.equal(response.result.body.releaseSha, releaseSha);
  assert.equal(response.result.body.stage, "runtime-health");
});

test("machine evidence rejects a stale release SHA before recording",async()=>{let recorded=false;const runtime={ready:Promise.resolve(),acceptance:{recordEvidence:async()=>{recorded=true;}},applications:{get:()=>({})},workspaceMigrations:{activate:async()=>({})}};const adapter=createServerRuntimeAdapter({env:{NEXUS_ACCEPTANCE_TOKEN:"token",RENDER_GIT_COMMIT:"active"},resolveUser:async()=>null,readJson:async()=>({releaseSha:"stale",component:"testing"}),createRuntimeFn:()=>runtime});
 const response=responseCapture();await adapter.handle({method:"POST",headers:{authorization:"Bearer token"}},{},new URL("http://local/api/nexus/runtime/production-acceptance/evidence"),response.send);assert.equal(response.result.status,409);assert.equal(recorded,false);});

test("workspace activation forwards rollback evidence into the authoritative repository",async()=>{let input;const releaseSha="a".repeat(40);const runtime={ready:Promise.resolve(),applications:{get:()=>({applicationId:"health"})},workspaceMigrations:{activate:async value=>{input=value;return {state:"authoritative"};}}};const adapter=createServerRuntimeAdapter({env:{NEXUS_ACCEPTANCE_TOKEN:"token",RENDER_GIT_COMMIT:releaseSha},resolveUser:async()=>null,readJson:async()=>({releaseSha,rollbackRef:"refs/tags/nexus-before-health",proofs:{}}),createRuntimeFn:()=>runtime});
 const response=responseCapture();await adapter.handle({method:"POST",headers:{authorization:"Bearer token"}},{},new URL("http://local/api/nexus/runtime/production-acceptance/workspaces/health"),response.send);assert.equal(response.result.status,201);assert.equal(input.rollbackRef,"refs/tags/nexus-before-health");});

test("production behavior probe preserves exact release, channel, and authoritative application", async () => {
  const releaseSha = "a".repeat(40); let turnInput;
  const runtime = { ready: Promise.resolve(), db: { query: async () => ({ rows: [{ tenant_id: "tenant-1", user_id: "user-1", role: "admin", permissions: ["acceptance:identity"] }] }) },
    behavior: { turn: async input => { turnInput = input; return { application: "maps", state: "render_required", render: { taskId: "task-1" } }; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha, application: "maps", text: "Route Nairobi to Nakuru", channel: "voice" }), createRuntimeFn: () => runtime });
  const response = responseCapture(); await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance/probes/behavior-turn"), response.send);
  assert.equal(response.result.status, 200); assert.equal(response.result.body.releaseSha, releaseSha);
  assert.equal(turnInput.input.channel, "voice"); assert.equal(turnInput.input.text, "Route Nairobi to Nakuru");
  assert.match(turnInput.input.correlationId, /^acceptance-/);
  assert.equal(turnInput.context.correlationId, turnInput.input.correlationId);
  assert.equal(turnInput.context.can("acceptance:identity"), true);
  assert.equal(turnInput.context.can("tasks:execute"), true);
  assert.equal(turnInput.context.can("admin:write"), false);
  assert.equal(turnInput.context.hasRole("admin"), true);
});

test("production behavior probe grants pre-cutover authority only through the authenticated exact-SHA lane", async () => {
  const releaseSha = "c".repeat(40); let turnInput;
  const runtime = { ready: Promise.resolve(), db: { query: async () => ({ rows: [{ tenant_id: "tenant-1", user_id: "user-1", role: "admin", permissions: ["acceptance:identity"] }] }) },
    behavior: { turn: async input => { turnInput = input; return { application: "agriculture", state: "render_required", render: { taskId: "task-1" } }; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha }, resolveUser: async () => null,
    readJson: async () => ({ releaseSha, application: "agriculture", text: "Assess maize", phase: "pre-cutover" }), createRuntimeFn: () => runtime });
  const response = responseCapture(); await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance/probes/behavior-turn"), response.send);
  assert.equal(response.result.status, 200); assert.equal(turnInput.context.acceptancePreCutover, true);
  assert.equal(turnInput.context.acceptanceApplication, "agriculture");
  assert.ok(turnInput.context.permissions.includes("acceptance:identity"));
});

test("authenticated production behavior probe preserves the safe underlying failure message", async () => {
  const releaseSha = "b".repeat(40);
  const runtime = { ready: Promise.resolve(), db: { query: async () => ({ rows: [{ tenant_id: "tenant-1", user_id: "user-1", role: "admin", permissions: ["acceptance:identity"] }] }) },
    behavior: { turn: async () => { throw new Error("Workspace agriculture has not completed authoritative cutover."); } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha, application: "agriculture", text: "Assess maize" }), createRuntimeFn: () => runtime });
  const response = responseCapture(); await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance/probes/behavior-turn"), response.send);
  assert.equal(response.result.status, 503);
  assert.equal(response.result.body.error, "Workspace agriculture has not completed authoritative cutover.");
});

test("production browser acknowledgement rejects invisible evidence before task completion", async () => {
  const releaseSha = "a".repeat(40); let acknowledged = false;
  const runtime = { ready: Promise.resolve(), behavior: { acknowledge: async () => { acknowledged = true; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha, receipt: { rendered: true, visible: false, audible: false } }), createRuntimeFn: () => runtime });
  const response = responseCapture(); await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance/probes/browser-acknowledgement"), response.send);
  assert.equal(response.result.status, 422); assert.equal(response.result.body.code, "browser_outcome_unverified"); assert.equal(acknowledged, false);
});

test("exact-SHA authenticated Health continuation preserves transaction identity, consent, and confirmation", async () => {
  const releaseSha = "a".repeat(40); const calls = []; const task = { taskId: "task-1", ownerId: "user-1",
    application: "health", commandId: "command-1", correlationId: "correlation-1", conversationId: "conversation-1",
    goal: "Record my blood pressure", steps: [{ step_id: "step-1", tool_id: "health.record",
      confirmation_state: "required", input: { intakeType: "blood-pressure", systolic: 140, diastolic: 90 } }] };
  const runtime = { ready: Promise.resolve(), db: { query: async () => ({ rows: [{ tenant_id: "tenant-1", user_id: "user-1",
    role: "acceptance-controller", permissions: ["acceptance:identity"] }] }) }, tasks: { get: async () => task },
    tools: { get: async () => ({ tool_id: "health.record", consent_scope: "health:record:write", confirmation_required: true }) },
    consents: { grant: async input => { calls.push(["consent", input]); return { consent_id: "consent-1" }; } },
    engine: { approve: async input => { calls.push(["approve", input]); }, executeTask: async input => {
      calls.push(["execute", input]); return { state: "awaiting_render", receipts: [{ receiptId: "receipt-1" }] }; } },
    workspaceStates: { stage: async input => { calls.push(["stage", input]); return input; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha, taskId: "task-1", stepId: "step-1",
      commandId: "command-1", correlationId: "correlation-1", confirmed: true, consented: true }), createRuntimeFn: () => runtime });
  const response = responseCapture(); await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance/probes/health-continuation"), response.send);
  assert.equal(response.result.status, 200); assert.equal(response.result.body.result.state, "render_required");
  assert.equal(response.result.body.result.render.workspace, "health"); assert.equal(calls[0][1].taskId, "task-1");
  assert.equal(calls[0][1].scope, "health:record:write"); assert.equal(calls[1][1].approved, true);
  assert.equal(calls[2][1].context.can("tasks:execute"), true);
  assert.equal(calls[3][0], "stage"); assert.equal(calls[3][1].tenantId, "tenant-1");
  assert.equal(calls[3][1].ownerId, "user-1"); assert.equal(calls[3][1].taskId, "task-1");
  assert.equal(calls[3][1].outcome.schema, "nexus.workspace-outcome.v2");
  assert.equal(calls[3][1].outcome.presentation.completionAuthority, false);
});

test("Health continuation fails closed for stale releases, missing authorization, and cross-command identity", async () => {
  const releaseSha = "a".repeat(40); let runtimeCreated = false;
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: "stale", confirmed: true, consented: true }),
    createRuntimeFn: () => { runtimeCreated = true; return { ready: Promise.resolve() }; } });
  const unauthorized = responseCapture(); await adapter.handle({ method: "POST", headers: {} }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance/probes/health-continuation"), unauthorized.send);
  assert.equal(unauthorized.result.status, 401); assert.equal(runtimeCreated, false);
  const stale = responseCapture(); await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance/probes/health-continuation"), stale.send);
  assert.equal(stale.result.status, 409); assert.equal(stale.result.body.code, "evidence_sha_mismatch");
});

test("exact-SHA authenticated Offline Queue continuation preserves transaction identity and confirmation", async () => {
  const releaseSha = "a".repeat(40); const calls = []; let principalQuery; const task = { taskId: "task-1", ownerId: "user-1",
    application: "offline-queue", commandId: "command-1", correlationId: "correlation-1", conversationId: "conversation-1",
    goal: "Synchronize the queued crop observation", steps: [{ step_id: "step-1", tool_id: "offline.sync",
      confirmation_state: "required", input: { operation: "sync" } }] };
  const runtime = { ready: Promise.resolve(), db: { query: async (sql, params) => { principalQuery = { sql, params }; return ({ rows: [{ tenant_id: "tenant-1", user_id: "user-1",
    role: "acceptance-controller", permissions: ["acceptance:identity"] }] }); } }, tasks: { get: async () => task },
    tools: { get: async () => ({ tool_id: "offline.sync", consent_scope: null, confirmation_required: true }) },
    engine: { approve: async input => { calls.push(["approve", input]); }, executeTask: async input => {
      calls.push(["execute", input]); return { state: "awaiting_render", receipts: [{ receiptId: "receipt-1" }] }; } },
    workspaceStates: { stage: async input => { calls.push(["stage", input]); return input; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha, taskId: "task-1", stepId: "step-1",
      commandId: "command-1", correlationId: "correlation-1", confirmed: true }), createRuntimeFn: () => runtime });
  const response = responseCapture(); await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance/probes/offline-queue-continuation"), response.send);
  assert.equal(response.result.status, 200); assert.equal(response.result.body.result.state, "render_required");
  assert.equal(response.result.body.result.application, "offline-queue");
  assert.equal(response.result.body.result.render.application, "offline-queue");
  assert.equal(response.result.body.result.render.workspace, "offline"); assert.equal(calls[0][1].approved, true);
  assert.match(principalQuery.sql, /join nexus_organization_memberships/); assert.deepEqual(principalQuery.params, ["task-1"]);
  assert.equal(calls[1][1].context.can("tasks:execute"), true);
  assert.equal(calls[2][0], "stage"); assert.equal(calls[2][1].tenantId, "tenant-1");
  assert.equal(calls[2][1].ownerId, "user-1"); assert.equal(calls[2][1].taskId, "task-1");
  assert.equal(calls[2][1].outcome.schema, "nexus.workspace-outcome.v2");
  assert.equal(calls[2][1].outcome.presentation.completionAuthority, false);
});

test("Offline Queue continuation fails closed without acceptance auth, exact release, or explicit confirmation", async () => {
  const releaseSha = "a".repeat(40); let runtimeCreated = false;
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: "stale", confirmed: true }),
    createRuntimeFn: () => { runtimeCreated = true; return { ready: Promise.resolve() }; } });
  const unauthorized = responseCapture(); await adapter.handle({ method: "POST", headers: {} }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance/probes/offline-queue-continuation"), unauthorized.send);
  assert.equal(unauthorized.result.status, 401); assert.equal(runtimeCreated, false);
  const stale = responseCapture(); await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance/probes/offline-queue-continuation"), stale.send);
  assert.equal(stale.result.status, 409); assert.equal(stale.result.body.code, "evidence_sha_mismatch");
});

test("Path 2 machine lane evidence requires the acceptance token and exact active release", async () => {
  const releaseSha = "a".repeat(40); let recorded;
  const runtime = { ready: Promise.resolve(), path2Evidence: { recordLaneEvidence: async input => { recorded = input; return input; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha, lane: "planning" }), createRuntimeFn: () => runtime });
  const unauthorized = responseCapture();
  await adapter.handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/path2/lane-evidence"), unauthorized.send);
  assert.equal(unauthorized.result.status, 401); assert.equal(recorded, undefined);
  const accepted = responseCapture();
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {}, new URL("http://local/api/nexus/runtime/path2/lane-evidence"), accepted.send);
  assert.equal(accepted.result.status, 201); assert.equal(recorded.releaseSha, releaseSha); assert.equal(recorded.lane, "planning");
});

test("Path 2 stability evidence rejects a stale release before repository access", async () => {
  const releaseSha = "a".repeat(40); let recorded = false;
  const runtime = { ready: Promise.resolve(), path2Evidence: { recordStabilityPass: async () => { recorded = true; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: "b".repeat(40), passNumber: 1 }), createRuntimeFn: () => runtime });
  const response = responseCapture();
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {}, new URL("http://local/api/nexus/runtime/path2/stability-passes"), response.send);
  assert.equal(response.result.status, 409); assert.equal(recorded, false);
});

test("Path 2 machine cases require the acceptance token and exact active release", async () => {
  const releaseSha = "a".repeat(40); let recorded;
  const runtime = { ready: Promise.resolve(), path2Evidence: { recordMachineCase: async input => { recorded = input; return input; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha, caseId: "p2c_planning_0001", lane: "planning" }), createRuntimeFn: () => runtime });
  const unauthorized = responseCapture();
  await adapter.handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/path2/machine-cases"), unauthorized.send);
  assert.equal(unauthorized.result.status, 401); assert.equal(recorded, undefined);
  const accepted = responseCapture();
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {}, new URL("http://local/api/nexus/runtime/path2/machine-cases"), accepted.send);
  assert.equal(accepted.result.status, 201); assert.equal(recorded.releaseSha, releaseSha);
});

test("Path 2 production cases cannot reach the planner without acceptance authentication", async () => {
  const releaseSha = "a".repeat(40); let planned = false;
  const runtime = { ready: Promise.resolve(), planner: { plan: async () => { planned = true; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha }, resolveUser: async () => null,
    readJson: async () => ({ releaseSha }), createRuntimeFn: () => runtime }); const response = responseCapture();
  await adapter.handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/path2/production-case"), response.send);
  assert.equal(response.result.status, 401); assert.equal(planned, false);
});


test("fault-isolation probe requires acceptance authentication and the exact release before execution", async () => {
  const releaseSha = "a".repeat(40); let runtimeCreated = false;
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "acceptance-secret", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: "b".repeat(40) }),
    createRuntimeFn: () => { runtimeCreated = true; return { ready: Promise.resolve() }; } });
  const unauthorized = responseCapture();
  await adapter.handle({ method: "POST", headers: {} }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance/probes/fault-isolation"), unauthorized.send);
  assert.equal(unauthorized.result.status, 401); assert.equal(runtimeCreated, false);
  const stale = responseCapture();
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer acceptance-secret" } }, {},
    new URL("http://local/api/nexus/runtime/production-acceptance/probes/fault-isolation"), stale.send);
  assert.equal(stale.result.status, 409); assert.equal(stale.result.body.code, "evidence_sha_mismatch");
});

test("fault-isolation execution proves stale rejection, typed provider failure, safe database diagnosis, and recovery", async () => {
  const releaseSha = "a".repeat(40); const acceptanceToken = "acceptance-secret";
  const principal = { tenantId: "tenant-1", userId: "user-1", role: "admin", permissions: ["acceptance:identity"] };
  const created = { taskId: "tsk_acceptance_fault", tenantId: principal.tenantId, ownerId: principal.userId,
    state: "planned", version: 1, updatedAt: "2026-08-12T00:00:00.000Z" };
  const transitioned = { ...created, state: "cancelled", version: 2, updatedAt: "2026-08-12T00:00:01.000Z" };
  const providerInputs = []; const queries = []; let saveExpectedVersion;
  const active = {
    engine: {
      create: async () => created,
      transition: async () => transitioned
    },
    tasks: {
      save: async (_task, expectedVersion) => {
        saveExpectedVersion = expectedVersion;
        const error = new Error("stale"); error.name = "ConcurrencyError"; throw error;
      },
      get: async () => ({ ...transitioned, steps: [{ step_id: "stp_1" }] })
    },
    tools: { get: async toolId => ({ tool_id: toolId }) },
    providers: {
      executors: { "maps.view": async invocation => {
        providerInputs.push(invocation.input);
        if (invocation.input.__nexusAcceptanceFault) {
          const error = new Error("Acceptance-injected provider failure.");
          error.code = "acceptance_provider_failure"; error.stage = "provider-execution-maps-view"; throw error;
        }
        return { receipt: { schema: "nexus.provider-receipt.v1" } };
      } },
      verify: async () => ({ verified: true })
    },
    db: { query: async (sql, params) => {
      queries.push({ sql, params });
      if (sql.includes("1/0")) { const error = new Error("division by zero"); error.code = "22012"; throw error; }
      if (sql.includes("nexus_acceptance_recovered")) return { rows: [{ nexus_acceptance_recovered: 1 }] };
      return { rows: [], rowCount: 1 };
    } }
  };
  const result = await executeProductionFaultIsolation({ active, principal, releaseSha, acceptanceToken });
  assert.equal(result.ok, true); assert.equal(result.releaseSha, releaseSha);
  assert.equal(saveExpectedVersion, 1); assert.equal(result.staleTransitionRejected, true);
  assert.equal(result.staleTaskUnchanged, true); assert.equal(result.providerFailureObserved, true);
  assert.equal(result.providerFailureCode, "acceptance_provider_failure");
  assert.equal(result.databaseFailureDiagnosed, true); assert.equal(result.databaseFailureSafe, true);
  assert.equal(result.databaseRecovered, true); assert.equal(result.unrelatedCapabilitySurvived, true);
  assert.equal(result.recoveryReceiptVerified, true);
  assert.deepEqual(providerInputs[0].__nexusAcceptanceFault, {
    token: acceptanceToken, kind: "provider_failure", releaseSha
  });
  assert.equal(providerInputs[1].__nexusAcceptanceFault, undefined);
  assert.doesNotMatch(JSON.stringify(result), new RegExp(acceptanceToken));
  assert.equal(queries.some(item => item.sql.includes("delete from nexus_task_steps")), true);
  assert.equal(queries.some(item => item.sql.includes("delete from nexus_tasks")), true);
});

function telehealthContinuationHarness(taskOverrides = {}, toolOverrides = {}) {
  const releaseSha = "a".repeat(40); const calls = [];
  const task = { taskId: "task-1", ownerId: "user-1", application: "telehealth", commandId: "command-1", correlationId: "correlation-1",
    conversationId: "conversation-1", goal: "Save a telehealth intake", steps: [{ step_id: "step-1", tool_id: "telehealth.prepare",
      confirmation_state: "required", input: { concern: "blood pressure" } }], ...taskOverrides };
  const runtime = { ready: Promise.resolve(), db: { query: async () => ({ rows: [{ tenant_id: "tenant-1", user_id: "user-1",
    role: "acceptance-controller", permissions: ["acceptance:identity"] }] }) }, tasks: { get: async () => task },
    tools: { get: async () => ({ tool_id: "telehealth.prepare", consent_scope: "health:telehealth-intake:write", confirmation_required: true, ...toolOverrides }) },
    consents: { grant: async input => { calls.push(["consent", input]); return { consent_id: "consent-1" }; } },
    engine: { approve: async input => { calls.push(["approve", input]); }, executeTask: async input => {
      calls.push(["execute", input]); return { state: "awaiting_render", receipts: [] }; } },
    workspaceStates: { stage: async input => { calls.push(["stage", input]); return input; } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "token", RENDER_GIT_COMMIT: releaseSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha, taskId: "task-1", stepId: "step-1",
      commandId: "command-1", correlationId: "correlation-1", confirmed: true, consented: true }), createRuntimeFn: () => runtime });
  return { adapter, calls };
}
const telehealthUrl = name => new URL(`http://local/api/nexus/runtime/production-acceptance/probes/${name}`);

test("exact-SHA Telehealth continuation approves only the consent-scoped telehealth intake", async () => {
  const { adapter, calls } = telehealthContinuationHarness();
  const response = responseCapture(); await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {},
    telehealthUrl("telehealth-continuation"), response.send);
  assert.equal(response.result.status, 200); assert.equal(response.result.body.result.state, "render_required");
  assert.equal(response.result.body.result.render.workspace, "telehealth");
  assert.equal(calls[0][1].scope, "health:telehealth-intake:write"); assert.equal(calls[1][1].approved, true);
  assert.equal(calls[3][0], "stage");
});

test("Telehealth continuation rejects another application's task and a different tool contract", async () => {
  const wrongApp = telehealthContinuationHarness({ application: "health" });
  const a = responseCapture(); await wrongApp.adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {}, telehealthUrl("telehealth-continuation"), a.send);
  assert.equal(a.result.status, 409); assert.equal(a.result.body.code, "acceptance_telehealth_transaction_mismatch"); assert.equal(wrongApp.calls.length, 0);
  const wrongScope = telehealthContinuationHarness({}, { consent_scope: "communications:send:write" });
  const b = responseCapture(); await wrongScope.adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {}, telehealthUrl("telehealth-continuation"), b.send);
  assert.equal(b.result.status, 409); assert.equal(b.result.body.code, "acceptance_telehealth_contract_mismatch"); assert.equal(wrongScope.calls.length, 0);
});

test("only the listed continuations exist: communications can never be approved through the acceptance path", async () => {
  for (const name of ["communications-continuation", "constructor", "__proto__", "toString"]) {
    const { adapter, calls } = telehealthContinuationHarness();
    const response = responseCapture(); const handled = await adapter.handle({ method: "POST", headers: { authorization: "Bearer token" } }, {}, telehealthUrl(name), response.send);
    assert.notEqual(response.result?.status, 200, name); assert.equal(calls.length, 0, name);
    assert.ok(handled === false || response.result?.status >= 400, name);
  }
});

test("DELETE archives only the caller's own document, keeps it, and records who did it", async () => {
  const archived = []; const audited = [];
  const runtime = { engine: { tasks: {} },
    documents: { archive: async args => { archived.push(args); return args.documentId === "doc_own" && args.ownerId === "user-1" ? { document_id: "doc_own", title: "Call it a day", deleted_at: "2026-09-21T00:00:00.000Z" } : null; } },
    audit: { record: async event => { audited.push(event); } } };
  const adapter = createServerRuntimeAdapter({ env: {}, resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1" }), readJson: async () => ({}), createRuntimeFn: () => runtime });

  const own = responseCapture();
  await adapter.handle({ method: "DELETE", headers: {} }, {}, new URL("http://local/api/nexus/runtime/documents/doc_own"), own.send);
  assert.equal(own.result.status, 200);
  assert.deepEqual(own.result.body, { authoritative: true, archived: true, document: { documentId: "doc_own", title: "Call it a day" } });
  assert.equal(archived[0].tenantId, "tenant-1"); assert.equal(archived[0].ownerId, "user-1"); assert.equal(archived[0].documentId, "doc_own");
  assert.equal(audited.length, 1);
  assert.equal(audited[0].eventType, "document.archived"); assert.equal(audited[0].actorId, "user-1"); assert.equal(audited[0].outcome, "completed");
  assert.deepEqual(audited[0].metadata, { documentId: "doc_own", title: "Call it a day" });

  const someoneElses = responseCapture();
  await adapter.handle({ method: "DELETE", headers: {} }, {}, new URL("http://local/api/nexus/runtime/documents/doc_someone_elses"), someoneElses.send);
  assert.equal(someoneElses.result.status, 404); assert.equal(someoneElses.result.body.code, "document_not_found");
  assert.equal(audited.length, 1, "nothing is audited for a document that was not archived");
});
