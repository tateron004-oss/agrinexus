"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter, requestContext } = require("../../nexus/compat/server-runtime-adapter.js");

function responseCapture() {
  const result = {};
  return { result, send(_res, status, body) { result.status = status; result.body = body; } };
}

test("request context preserves tenant, identity, role, and permission boundaries", () => {
  const context = requestContext({ headers: { "x-request-id": "request-1" } }, {
    id: "user-1", tenantId: "tenant-1", role: "Standard User", permissions: ["task.execute"]
  });
  assert.equal(context.requestId, "request-1"); assert.equal(context.tenantId, "tenant-1");
  assert.equal(context.userId, "user-1"); assert.equal(context.hasRole("Standard User"), true);
  assert.equal(context.can("task.execute"), true); assert.equal(context.can("admin"), false);
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
