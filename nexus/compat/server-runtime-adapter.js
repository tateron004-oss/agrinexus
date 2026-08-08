"use strict";

const crypto = require("crypto");
const { createRuntime } = require("../runtime/create-runtime.js");
const { checkRuntimeHealth } = require("../runtime/health.js");
const { createTaskApi } = require("./task-api.js");
const { createControlApi } = require("./control-api.js");
const { createSyncApi } = require("./sync-api.js");
const { NexusRuntimeError } = require("../runtime/authoritative-task-engine.js");
const { MemoryRepository } = require("../memory/repository.js");

function createServerRuntimeAdapter({ env = process.env, resolveUser, readJson, logger = console,
  createRuntimeFn = createRuntime, checkHealthFn = checkRuntimeHealth } = {}) {
  let runtimePromise = null;
  async function runtime() {
    if (!runtimePromise) runtimePromise = Promise.resolve().then(() => createRuntimeFn({ env, logger })).catch(error => { runtimePromise = null; throw error; });
    return runtimePromise;
  }
  async function status() {
    try { const active = await runtime(); await active.ready; return await checkHealthFn(active); }
    catch (error) { return { ok: false, authoritative: true, durable: false, code: error.code || "authoritative_runtime_unavailable", message: "The authoritative Nexus runtime is unavailable; no legacy write fallback was used.", releaseSha: env.RENDER_GIT_COMMIT || env.GIT_SHA || "development" }; }
  }
  async function handle(req, res, url, send) {
    if (!url.pathname.startsWith("/api/nexus/runtime")) return false;
    if (url.pathname === "/api/nexus/runtime/status" && req.method === "GET") { const result = await status(); send(res, result.ok ? 200 : 503, result); return true; }
    if (url.pathname === "/api/nexus/runtime/production-acceptance" && req.method === "GET") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try {
        const active = await runtime(); await active.ready;
        const health = await checkHealthFn(active);
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        const report = await active.acceptance.report({ releaseSha, applications: active.applications, health });
        send(res, report.ok ? 200 : 503, report);
      } catch (error) {
        logger.error?.("authoritative.acceptance.unavailable", { code: error.code || error.name });
        send(res, 503, { ok: false, authoritative: true, code: error.code || "acceptance_evidence_unavailable",
          error: "Production acceptance evidence is unavailable; no readiness value was inferred." });
      }
      return true;
    }
    if (url.pathname === "/api/nexus/runtime/production-acceptance/evidence" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try { const active=await runtime();await active.ready;const body=await readJson(req);const releaseSha=env.RENDER_GIT_COMMIT||env.GIT_SHA||"development";
        if(body.releaseSha!==releaseSha){send(res,409,{error:"Evidence SHA does not match the active release.",code:"evidence_sha_mismatch"});return true;}
        const result=await active.acceptance.recordEvidence({...body,releaseSha,sourceSha:releaseSha});send(res,201,{ok:true,evidence:result});
      } catch(error){send(res,400,{error:error.message,code:error.code||"evidence_rejected"});} return true;
    }
    const workspaceProofMatch=url.pathname.match(/^\/api\/nexus\/runtime\/production-acceptance\/workspaces\/([^/]+)$/);
    if (workspaceProofMatch && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try { const active=await runtime();await active.ready;const body=await readJson(req);const releaseSha=env.RENDER_GIT_COMMIT||env.GIT_SHA||"development";const workspaceId=decodeURIComponent(workspaceProofMatch[1]);
        if(body.releaseSha!==releaseSha){send(res,409,{error:"Workspace proof SHA does not match the active release.",code:"evidence_sha_mismatch"});return true;}
        if(!active.applications.get(workspaceId)){send(res,404,{error:"Unknown workspace.",code:"workspace_not_found"});return true;}
        const result=await active.workspaceMigrations.activate({workspaceId,proofs:body.proofs,releaseSha,rollbackRef:body.rollbackRef});send(res,201,{ok:true,migration:result});
      } catch(error){send(res,400,{error:error.message,code:error.code||"workspace_proof_rejected"});} return true;
    }
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/task-engine" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try {
        const active = await runtime(); await active.ready;
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        const body = await readJson(req);
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const marker = crypto.randomUUID();
        const command = { correlationId: `acceptance-${marker}`, conversationId: `acceptance-${marker}`,
          tenantId: "nexus-production-acceptance", actorId: "nexus-release-controller", channel: "release", locale: "en", text: "Verify authoritative task persistence" };
        const created = await active.engine.create({ command, goal: `Exact-release task-engine probe ${releaseSha}`,
          application: "general", riskTier: "low", steps: [{ title: "Verify durable task lifecycle" }] });
        const transitioned = await active.engine.transition({ tenantId: command.tenantId, taskId: created.taskId,
          actorId: command.actorId, nextState: "cancelled", reason: "Production acceptance probe completed" });
        const persisted = await active.tasks.get({ tenantId: command.tenantId, taskId: created.taskId, includeSteps: true });
        const passed = transitioned.state === "cancelled" && persisted?.state === "cancelled" && Array.isArray(persisted.steps) && persisted.steps.length === 1;
        send(res, passed ? 200 : 503, { ok: passed, releaseSha, taskId: created.taskId, state: persisted?.state,
          durable: Boolean(persisted), steps: persisted?.steps?.length || 0 });
      } catch (error) {
        logger.error?.("authoritative.acceptance.task_engine_probe_failed", { code: error.code || error.name });
        send(res, 503, { ok: false, code: error.code || "task_engine_probe_failed", error: "The authoritative task-engine probe failed." });
      }
      return true;
    }
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/semantic-memory" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try {
        const active = await runtime(); await active.ready;
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        const body = await readJson(req);
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const marker = crypto.randomUUID(); const embedding = new Array(1536).fill(0); embedding[0] = 1;
        const scope = { tenantId: "nexus-production-acceptance", principalId: `release-${releaseSha}`, memoryClass: "semantic", purpose: `acceptance-${marker}` };
        const stored = await active.memory.remember({ ...scope, content: { marker }, searchableText: `acceptance ${marker}`,
          embedding, embeddingModel: "acceptance-deterministic-v1", provenance: { source: "production-acceptance", releaseSha },
          importance: 0, confidence: 1, verificationState: "verified", sensitivity: "internal" });
        const reconstructed = new MemoryRepository(active.db);
        const recalled = await reconstructed.recall({ ...scope, embedding, roles: [], limit: 5 });
        const persisted = recalled.some(item => item.memory_id === stored.memory_id && item.content?.marker === marker);
        const cleanedUp = await reconstructed.forget({ tenantId: scope.tenantId, principalId: scope.principalId, memoryId: stored.memory_id });
        const passed = persisted && cleanedUp;
        send(res, passed ? 200 : 503, { ok: passed, releaseSha, durable: persisted, repositoryReconstructed: true, cleanedUp });
      } catch (error) {
        logger.error?.("authoritative.acceptance.semantic_memory_probe_failed", { code: error.code || error.name });
        send(res, 503, { ok: false, code: error.code || "semantic_memory_probe_failed", error: "The authoritative semantic-memory probe failed." });
      }
      return true;
    }
    const user = await resolveUser(req);
    if (!user) { send(res, 401, { error: "Authentication is required for authoritative Nexus tasks." }); return true; }
    try {
      const active = await runtime(); await active.ready; const api = createTaskApi(active.engine); const controls = createControlApi(active); const syncApi=createSyncApi(active); const context = requestContext(req, user);
      const body = ["POST", "PUT", "PATCH"].includes(req.method) ? await readJson(req) : {};
      const request = { context, body, channel: body.channel || "api", locale: body.locale || user.language || "en", params: {},
        query: Object.fromEntries(url.searchParams.entries()) };
      let result = null;
      if (url.pathname === "/api/nexus/runtime/commands" && req.method === "POST") {
        await active.cutover.requireAuthoritative(body.workspaceId);
        if (!active.agent) { send(res, 503, { error: "The authoritative planning provider is unavailable; no phrase-specific fallback was used.", code: "planning_provider_unavailable" }); return true; }
        const planned = await active.agent.command({ input: { correlationId: request.context.requestId,
          conversationId: body.conversationId, taskId: body.taskId, channel: request.channel, locale: request.locale, text: body.text }, context });
        send(res, planned.action === "clarify" ? 200 : 201, planned); return true;
      } else if (url.pathname === "/api/nexus/runtime/tasks" && req.method === "POST") { await active.cutover.requireAuthoritative(body.application); result = await api.create(request); }
      else if (url.pathname === "/api/nexus/runtime/tasks" && req.method === "GET") result = await api.list(request);
      else if (url.pathname === "/api/nexus/runtime/observability/summary" && req.method === "GET") {
        if (!context.can("observability:read") && !context.hasRole("admin")) { send(res, 403, { error: "Observability permission is required.", code: "permission_denied" }); return true; }
        send(res, 200, await active.observability.summary({ tenantId: context.tenantId, windowMinutes: request.query.windowMinutes })); return true;
      } else if (url.pathname === "/api/nexus/runtime/operations" && req.method === "GET") {
        if (!context.can("observability:read") && !context.hasRole("admin")) { send(res, 403, { error: "Observability permission is required.", code: "permission_denied" }); return true; }
        send(res, 200, await active.observability.operationalView({ tenantId: context.tenantId, windowMinutes: request.query.windowMinutes })); return true;
      } else if (url.pathname === "/api/nexus/runtime/artifacts" && req.method === "POST") {
        if (!active.objectStorage) { send(res, 503, {error:"Shared object storage is unavailable.",code:"object_storage_unavailable"}); return true; }
        const bytes=Buffer.from(String(body.contentBase64||""),"base64");
        if (!bytes.length) { send(res,400,{error:"Artifact content is required.",code:"artifact_content_required"}); return true; }
        const artifactId=`artifact_${crypto.randomUUID()}`; const key=active.objectStorage.key({tenantId:context.tenantId,ownerId:context.userId,artifactId,filename:body.filename||body.title||"artifact"});
        const stored=await active.objectStorage.put({key,body:bytes,contentType:body.contentType,metadata:{tenant:context.tenantId,owner:context.userId}});
        const artifact=await active.artifacts.create({artifactId,tenantId:context.tenantId,ownerId:context.userId,taskId:body.taskId,kind:body.kind||"document",title:body.title||body.filename||"Artifact",contentType:body.contentType,objectKey:key,checksum:stored.checksum,sizeBytes:stored.sizeBytes,metadata:body.metadata||{}});
        send(res,201,{artifact,contentStored:true}); return true;
      } else if (/^\/api\/nexus\/runtime\/artifacts\/[^/]+$/.test(url.pathname) && req.method === "GET") {
        const artifactId=decodeURIComponent(url.pathname.split("/").pop()); const artifact=await active.artifacts.get({tenantId:context.tenantId,ownerId:context.userId,artifactId});
        if(!artifact){send(res,404,{error:"Artifact not found."});return true;} if(!active.objectStorage){send(res,503,{error:"Shared object storage is unavailable.",code:"object_storage_unavailable"});return true;}
        const object=await active.objectStorage.get(artifact.object_key); send(res,200,{artifact,contentBase64:object.body.toString("base64"),contentType:object.contentType}); return true;
      } else if (url.pathname === "/api/nexus/runtime/workspaces" && req.method === "GET") {
        const statuses = await Promise.all(active.applications.list().map(async application => ({ ...application,
          migration: await active.workspaceMigrations.status(application.applicationId) })));
        send(res, 200, { authoritative: true, workspaces: statuses }); return true;
      }
      else if (url.pathname === "/api/nexus/runtime/devices" && req.method === "POST") result = await controls.registerDevice(request);
      else if (/^\/api\/nexus\/runtime\/devices\/[^/]+$/.test(url.pathname) && req.method === "DELETE") { request.params.deviceId=decodeURIComponent(url.pathname.split("/").pop()); result=await controls.revokeDevice(request); }
      else if (url.pathname === "/api/nexus/runtime/schedules" && req.method === "POST") result = await controls.createSchedule(request);
      else if (url.pathname === "/api/nexus/runtime/notifications" && req.method === "POST") result = await controls.createNotification(request);
      else if (url.pathname === "/api/nexus/runtime/privacy/deletions" && req.method === "POST") result = await controls.requestDeletion(request);
      else if (url.pathname === "/api/nexus/runtime/sync/push" && req.method === "POST") result=await syncApi.push(request);
      else if (url.pathname === "/api/nexus/runtime/sync/pull" && req.method === "GET") result=await syncApi.pull(request);
      else if (/^\/api\/nexus\/runtime\/sync\/conflicts\/[^/]+$/.test(url.pathname) && req.method === "POST") { request.params.syncId=decodeURIComponent(url.pathname.split("/").pop()); result=await syncApi.resolve(request); }
      else {
        const match = url.pathname.match(/^\/api\/nexus\/runtime\/tasks\/([^/]+)(?:\/(transition|steps\/([^/]+)\/(approve|execute)))?$/);
        if (!match) { send(res, 404, { error: "Authoritative runtime route not found." }); return true; }
        request.params.taskId = decodeURIComponent(match[1]);
        if (!match[2] && req.method === "GET") result = await api.get(request);
        else if (match[2] === "transition" && req.method === "POST") result = await api.transition(request);
        else if (match[3] && match[4] === "approve" && req.method === "POST") { request.params.stepId = decodeURIComponent(match[3]); result = await api.approve(request); }
        else if (match[3] && match[4] === "execute" && req.method === "POST") { request.params.stepId = decodeURIComponent(match[3]); result = await api.execute(request); }
        else { send(res, 405, { error: "Method not allowed." }); return true; }
      }
      send(res, result.status, result.body);
    } catch (error) {
      logger.error?.("authoritative.runtime.request_failed", { code: error.code || error.name, requestId: req.headers["x-request-id"] || "" });
      if (error instanceof NexusRuntimeError || error.status) send(res, error.status, { error: error.message, code: error.code, details: error.details });
      else send(res, 503, { error: "The authoritative Nexus runtime is unavailable; no legacy write fallback was used.", code: error.code || "authoritative_runtime_unavailable" });
    }
      return true;
    }
  return Object.freeze({ handle, status });
}

function acceptanceAuthorized(req, expected) {
  if (!expected) return false;
  const supplied = String(req.headers?.authorization || "").replace(/^Bearer\s+/i, "");
  const left = Buffer.from(supplied); const right = Buffer.from(String(expected));
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function requestContext(req, user) {
  const roles = new Set([user.role, ...(user.roles || [])].filter(Boolean)); const permissions = new Set([...(user.permissions || [])].filter(Boolean));
  return Object.freeze({ requestId: String(req.headers["x-request-id"] || crypto.randomUUID()), tenantId: String(user.tenantId || user.organizationId || "tenant_default"), userId: String(user.id), roles: [...roles], permissions: [...permissions], hasRole: role => roles.has(role), can: permission => permissions.has(permission) });
}

module.exports = Object.freeze({ createServerRuntimeAdapter, requestContext, acceptanceAuthorized });
