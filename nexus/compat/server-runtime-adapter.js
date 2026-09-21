"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { createBusinessApi } = require("../business/api.js");
const { createRuntime } = require("../runtime/create-runtime.js");
const { checkRuntimeHealth } = require("../runtime/health.js");
const { createTaskApi } = require("./task-api.js");
const { createControlApi } = require("./control-api.js");
const { createSyncApi } = require("./sync-api.js");
const { NexusRuntimeError } = require("../runtime/authoritative-task-engine.js");
const { MemoryRepository } = require("../memory/repository.js");
const { evaluateObservabilityAlerts } = require("../observability/alert-evaluator.js");
const { executeProductionCase } = require("../path2/production-case.js");
const { classifyRuntimeError } = require("../runtime/error-taxonomy.js");
const { createWorkspaceOutcome } = require("../contracts/workspace-outcome.js");
const { createNavigationService } = require("../navigation/service.js");

function safeDatabaseIdentifier(value) {
  return String(value || "").replace(/[^a-zA-Z0-9_.-]/g, "").slice(0, 128);
}

function createServerRuntimeAdapter({ env = process.env, resolveUser, readJson, logger = console,
  createRuntimeFn = createRuntime, checkHealthFn = checkRuntimeHealth } = {}) {
  let runtimePromise = null;
  // The GPS's place search, reverse lookup and routing (see navigation/service.js). Position is never logged or stored.
  const navigation = createNavigationService({ env });
  async function runtime() {
    if (!runtimePromise) runtimePromise = Promise.resolve().then(() => createRuntimeFn({ env, logger })).catch(error => { runtimePromise = null; throw error; });
    return runtimePromise;
  }
  async function status() {
    try { const active = await runtime(); await active.ready; return await checkHealthFn(active, { env }); }
    catch (error) { const failure = classifyRuntimeError(error); return { ok: false, authoritative: true, durable: false,
      category: failure.category, code: failure.code, retryable: failure.retryable,
      message: `${failure.message} No legacy write fallback was used.`,
      legacyWriteFallbackUsed: false, releaseSha: env.RENDER_GIT_COMMIT || env.GIT_SHA || "development" }; }
  }
  async function handle(req, res, url, send) {
    if (!url.pathname.startsWith("/api/nexus/runtime")) return false;
    if (url.pathname === "/api/nexus/runtime/status" && req.method === "GET") { const result = await status(); send(res, result.ok ? 200 : 503, result); return true; }
    if (url.pathname === "/api/nexus/runtime/production-acceptance" && req.method === "GET") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      let acceptanceStage = "runtime-create";
      try {
        const active = await runtime();
        acceptanceStage = "runtime-ready"; await active.ready;
        acceptanceStage = "runtime-health"; const health = await checkHealthFn(active, { env });
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        acceptanceStage = "acceptance-report";
        const report = await active.acceptance.report({ releaseSha, applications: active.applications, health });
        send(res, report.ok ? 200 : 503, report);
      } catch (error) {
        const code = error.code || "acceptance_evidence_unavailable";
        const stage = String(error.stage || acceptanceStage || "runtime-initialization").replace(/[^a-z0-9-]/gi, "").slice(0, 64);
        logger.error?.("authoritative.acceptance.unavailable", { code, stage });
        send(res, 503, { ok: false, authoritative: true, releaseSha: env.RENDER_GIT_COMMIT || env.GIT_SHA || "development", code, stage,
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
    if (url.pathname === "/api/nexus/runtime/path2/usability-sessions" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try { const active = await runtime(); await active.ready; const body = await readJson(req);
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Usability evidence SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const session = await active.path2Evidence.recordUsabilitySession(body); send(res, 201, { ok: true, session });
      } catch (error) { send(res, 400, { error: error.message, code: error.code || "usability_evidence_rejected" }); } return true;
    }
    if (url.pathname === "/api/nexus/runtime/path2/lane-evidence" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try { const active = await runtime(); await active.ready; const body = await readJson(req);
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Path 2 lane evidence SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const evidence = await active.path2Evidence.recordLaneEvidence({ ...body, releaseSha });
        send(res, 201, { ok: true, evidence });
      } catch (error) { send(res, 400, { error: error.message, code: error.code || "path2_lane_evidence_rejected" }); } return true;
    }
    if (url.pathname === "/api/nexus/runtime/path2/machine-cases" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try { const active = await runtime(); await active.ready; const body = await readJson(req);
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Path 2 machine case SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const machineCase = await active.path2Evidence.recordMachineCase({ ...body, releaseSha });
        send(res, 201, { ok: true, machineCase });
      } catch (error) { send(res, 400, { error: error.message, code: error.code || "path2_machine_case_rejected" }); } return true;
    }
    if (url.pathname === "/api/nexus/runtime/path2/production-case" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try { const active = await runtime(); await active.ready; const body = await readJson(req); const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Path 2 case SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const evidence = await executeProductionCase({ active, principal: await acceptancePrincipal(active), input: body, releaseSha });
        const deferRecording = body.deferRecording === true && ["crossApplication", "verification"].includes(body.lane);
        let duplicate = false; try { if (!deferRecording) await active.path2Evidence.recordMachineCase(evidence); }
        catch (error) { if (error.code !== "duplicate_machine_case") throw error; duplicate = true; }
        send(res, evidence.passed ? (duplicate ? 200 : 201) : 422, { ok: evidence.passed, evidence, duplicate, deferred: deferRecording });
      } catch (error) { send(res, 400, { error: error.message, code: error.code || "path2_production_case_rejected" }); } return true;
    }
    if (url.pathname === "/api/nexus/runtime/path2/stability-passes" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try { const active = await runtime(); await active.ready; const body = await readJson(req);
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Path 2 stability receipt SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const stabilityPass = await active.path2Evidence.recordStabilityPass({ ...body, releaseSha });
        send(res, 201, { ok: true, stabilityPass });
      } catch (error) { send(res, 400, { error: error.message, code: error.code || "path2_stability_evidence_rejected" }); } return true;
    }
    if (url.pathname === "/api/nexus/runtime/path2/certification" && req.method === "GET") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try { const active = await runtime(); await active.ready; const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        const report = await active.path2Evidence.durableReport({ releaseSha, path1Baseline: url.searchParams.get("path1Baseline") });
        send(res, report.certified ? 200 : 503, report);
      } catch (error) { send(res, 400, { error: error.message, code: error.code || "path2_certification_unavailable" }); } return true;
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
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/behavior-turn" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try {
        const active = await runtime(); await active.ready; const body = await readJson(req);
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        if (!active.behavior?.turn) { send(res, 503, { ok: false, releaseSha, code: "behavior_planner_unavailable", error: "The authoritative behavior planner is unavailable." }); return true; }
        const principal = await acceptancePrincipal(active); const marker = crypto.randomUUID();
        const correlationId = `acceptance-${marker}`;
        const acceptancePreCutover = body.phase === "pre-cutover";
        const result = await active.behavior.turn({ input: { text: String(body.text || ""), channel: body.channel === "voice" ? "voice" : "typed",
          locale: body.locale || "en", correlationId, conversationId: `cnv_acceptance_${marker.replace(/-/g, "").slice(0, 20)}` },
          context: acceptanceContext(principal, { actorId: principal.userId,
            requestId: correlationId, correlationId, roles: principal.roles || [principal.role].filter(Boolean),
            permissions: acceptanceExecutionPermissions(principal), acceptancePreCutover,
            acceptanceApplication: acceptancePreCutover ? body.application : null }) });
        const applicationMatched = !body.application || result.application === body.application;
        send(res, applicationMatched ? 200 : 422, { ok: applicationMatched, releaseSha, expectedApplication: body.application || null, result });
      } catch (error) { const failure = classifyRuntimeError(error); send(res, failure.status || 503,
        { ok: false, releaseSha: env.RENDER_GIT_COMMIT || env.GIT_SHA || "development", code: failure.code, category: failure.category,
          stage: String(error.stage || "behavior-execution").replace(/[^a-z0-9-]/gi, "-").slice(0, 64), error: String(error.message || failure.message).slice(0, 300) }); }
      return true;
    }
    const continuationName = url.pathname.startsWith("/api/nexus/runtime/production-acceptance/probes/")
      ? url.pathname.slice("/api/nexus/runtime/production-acceptance/probes/".length) : "";
    const consentedContinuation = Object.hasOwn(CONSENTED_CONTINUATIONS, continuationName) ? CONSENTED_CONTINUATIONS[continuationName] : null;
    if (consentedContinuation && req.method === "POST") {
      const { application, label, toolId, scope, codeKey, purpose, finished } = consentedContinuation;
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try {
        const active = await runtime(); await active.ready; const body = await readJson(req);
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        if (body.confirmed !== true || body.consented !== true) { send(res, 422, { error: "Explicit " + label + " confirmation and consent are required.", code: "acceptance_" + codeKey + "_authorization_required" }); return true; }
        const principal = await acceptancePrincipal(active);
        const task = await active.tasks.get({ tenantId: principal.tenantId, taskId: body.taskId, includeSteps: true });
        const step = (task?.steps || []).find(item => item.step_id === body.stepId);
        if (!task || task.ownerId !== principal.userId || task.application !== application ||
            task.commandId !== body.commandId || task.correlationId !== body.correlationId ||
            !step || step.tool_id !== toolId || step.confirmation_state !== "required") {
          send(res, 409, { error: label + " continuation does not match the pending acceptance transaction.", code: "acceptance_" + codeKey + "_transaction_mismatch" }); return true;
        }
        const tool = await active.tools.get(step.tool_id);
        if (!tool || tool.consent_scope !== scope || tool.confirmation_required !== true) {
          send(res, 409, { error: "The governed " + label + " tool contract does not match the continuation.", code: "acceptance_" + codeKey + "_contract_mismatch" }); return true;
        }
        const consent = await active.consents.grant({ tenantId: principal.tenantId, subjectId: principal.userId,
          taskId: task.taskId, scope: tool.consent_scope, purpose, policyVersion: "production-acceptance-v1",
          receipt: { source: "production-acceptance", releaseSha,
            taskId: task.taskId, stepId: step.step_id, commandId: task.commandId, correlationId: task.correlationId } });
        await active.engine.approve({ tenantId: principal.tenantId, taskId: task.taskId, stepId: step.step_id,
          actorId: principal.userId, approved: true });
        const context = acceptanceContext(principal, { actorId: principal.userId,
          requestId: "acceptance-" + codeKey + "-" + task.commandId, correlationId: task.correlationId,
          roles: principal.roles || [principal.role].filter(Boolean), permissions: acceptanceExecutionPermissions(principal) });
        const execution = await active.engine.executeTask({ context, taskId: task.taskId });
        const resumedTask = await active.tasks.get({ tenantId: principal.tenantId, taskId: task.taskId, includeSteps: true });
        if (execution.state !== "awaiting_render") {
          send(res, 503, { ok: false, releaseSha, code: "acceptance_" + codeKey + "_render_not_reached", error: label + " continuation did not reach renderer verification." }); return true;
        }
        const command = { commandId: task.commandId, correlationId: task.correlationId, conversationId: task.conversationId,
          text: task.goal, channel: body.channel === "voice" ? "voice" : "typed" };
        const plan = { application, steps: (resumedTask.steps || []).map(item => ({ input: item.input || {} })) };
        const render = createWorkspaceOutcome({ command, plan, task: resumedTask, state: "render_required",
          response: "Nexus completed the confirmed " + finished + " and is rendering the verified result.",
          outcome: { verified: true, reason: "renderer_acknowledgement_required" } });
        await active.workspaceStates.stage({ tenantId: principal.tenantId, ownerId: principal.userId,
          taskId: task.taskId, outcome: render });
        send(res, 200, { ok: true, releaseSha, consentId: consent.consent_id, result: { state: "render_required",
          completed: false, application, taskId: task.taskId, commandId: task.commandId,
          correlationId: task.correlationId, render, receipts: execution.receipts || [] } });
      } catch (error) { const failure = classifyRuntimeError(error); send(res, failure.status || 503,
        { ok: false, releaseSha: env.RENDER_GIT_COMMIT || env.GIT_SHA || "development", code: failure.code,
          category: failure.category, error: String(error.message || failure.message).slice(0, 300) }); }
      return true;
    }
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/offline-queue-continuation" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try {
        const active = await runtime(); await active.ready; const body = await readJson(req);
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        if (body.confirmed !== true) { send(res, 422, { error: "Explicit Offline Queue confirmation is required.", code: "acceptance_offline_queue_confirmation_required" }); return true; }
        const principal = await acceptancePrincipalForTask(active, body.taskId);
        const task = await active.tasks.get({ tenantId: principal.tenantId, taskId: body.taskId, includeSteps: true });
        const step = (task?.steps || []).find(item => item.step_id === body.stepId);
        if (!task || task.ownerId !== principal.userId || task.application !== "offline-queue" ||
            task.commandId !== body.commandId || task.correlationId !== body.correlationId ||
            !step || step.tool_id !== "offline.sync" || step.confirmation_state !== "required") {
          send(res, 409, { error: "Offline Queue continuation does not match the pending acceptance transaction.", code: "acceptance_offline_queue_transaction_mismatch" }); return true;
        }
        const tool = await active.tools.get(step.tool_id);
        if (!tool || tool.tool_id !== "offline.sync" || tool.consent_scope || tool.confirmation_required !== true) {
          send(res, 409, { error: "The governed Offline Queue tool contract does not match the continuation.", code: "acceptance_offline_queue_contract_mismatch" }); return true;
        }
        await active.engine.approve({ tenantId: principal.tenantId, taskId: task.taskId, stepId: step.step_id,
          actorId: principal.userId, approved: true });
        const context = acceptanceContext(principal, { actorId: principal.userId,
          requestId: `acceptance-offline-queue-${task.commandId}`, correlationId: task.correlationId,
          roles: principal.roles || [principal.role].filter(Boolean), permissions: acceptanceExecutionPermissions(principal) });
        const execution = await active.engine.executeTask({ context, taskId: task.taskId });
        const resumedTask = await active.tasks.get({ tenantId: principal.tenantId, taskId: task.taskId, includeSteps: true });
        if (execution.state !== "awaiting_render") {
          send(res, 503, { ok: false, releaseSha, code: "acceptance_offline_queue_render_not_reached", error: "Offline Queue continuation did not reach renderer verification." }); return true;
        }
        const command = { commandId: task.commandId, correlationId: task.correlationId, conversationId: task.conversationId,
          text: task.goal, channel: body.channel === "voice" ? "voice" : "typed" };
        const plan = { application: "offline-queue", steps: (resumedTask.steps || []).map(item => ({ input: item.input || {} })) };
        const render = createWorkspaceOutcome({ command, plan, task: resumedTask, state: "render_required",
          response: "Nexus completed the confirmed Offline Queue transaction and is rendering the verified server acknowledgement.",
          outcome: { verified: true, reason: "renderer_acknowledgement_required" } });
        await active.workspaceStates.stage({ tenantId: principal.tenantId, ownerId: principal.userId,
          taskId: task.taskId, outcome: render });
        send(res, 200, { ok: true, releaseSha, result: { state: "render_required", completed: false,
          application: "offline-queue", taskId: task.taskId, commandId: task.commandId,
          correlationId: task.correlationId, render, receipts: execution.receipts || [] } });
      } catch (error) { const failure = classifyRuntimeError(error); send(res, failure.status || 503,
        { ok: false, releaseSha: env.RENDER_GIT_COMMIT || env.GIT_SHA || "development", code: failure.code,
          category: failure.category, error: String(error.message || failure.message).slice(0, 300) }); }
      return true;
    }
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/browser-acknowledgement" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try {
        const active = await runtime(); await active.ready; const body = await readJson(req);
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const receipt = body.receipt || {};
        if (receipt.rendered !== true || (receipt.visible !== true && receipt.audible !== true)) {
          send(res, 422, { ok: false, releaseSha, code: "browser_outcome_unverified", error: "The browser did not verify a visible or audible outcome." }); return true;
        }
        const principal = await acceptancePrincipal(active);
        const result = await active.behavior.acknowledge({ input: { taskId: body.taskId, commandId: body.commandId,
          correlationId: body.correlationId, workspace: body.workspace, rendered: true, visible: receipt.visible === true,
          audible: receipt.audible === true, evidence: { ...receipt.evidence, releaseSha, browserObservedAt: receipt.observedAt } },
          context: acceptanceContext(principal, { actorId: principal.userId,
            requestId: `acceptance-browser-${body.commandId}`, correlationId: body.correlationId,
            roles: principal.roles || [principal.role].filter(Boolean), permissions: acceptanceExecutionPermissions(principal) }) });
        send(res, result.completed === true ? 200 : 503, { ok: result.completed === true, releaseSha, result });
      } catch (error) { const failure = classifyRuntimeError(error); send(res, failure.status || 503,
        { ok: false, releaseSha: env.RENDER_GIT_COMMIT || env.GIT_SHA || "development", code: failure.code, category: failure.category, error: failure.message }); }
      return true;
    }
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/fault-isolation" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
      try {
        const active = await runtime(); await active.ready; const body = await readJson(req);
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const result = await executeProductionFaultIsolation({ active, principal: await acceptancePrincipal(active),
          releaseSha, acceptanceToken: env.NEXUS_ACCEPTANCE_TOKEN });
        send(res, result.ok ? 200 : 503, result);
      } catch (error) {
        const failure = classifyRuntimeError(error);
        logger.error?.("authoritative.acceptance.fault_isolation_probe_failed", { code: failure.code, category: failure.category });
        send(res, 503, { ok: false, releaseSha, code: failure.code, category: failure.category,
          error: failure.message });
      }
      return true;
    }
    const objectiveProbe = url.pathname.match(/^\/api\/nexus\/runtime\/production-acceptance\/probes\/(consolidated-brain|realtime-voice|documents-lifecycle|healthcare-controls|predictive-model)$/);
    if (objectiveProbe && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      let active; let body; const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
      try {
        active = await runtime(); await active.ready; body = await readJson(req);
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const result = await runObjectiveProbe(objectiveProbe[1], { active, env, releaseSha });
        send(res, result.ok ? 200 : 503, { releaseSha, ...result });
      } catch (error) {
        logger.error?.("authoritative.acceptance.objective_probe_failed", { probe: objectiveProbe[1], code: error.code || error.name });
        send(res, 503, { ok: false, releaseSha, probe: objectiveProbe[1], code: error.code || "objective_probe_failed",
          error: String(error.message || "The production objective probe failed.").slice(0, 300) });
      }
      return true;
    }
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/task-engine" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      let probeStage = "runtime";
      try {
        const active = await runtime(); await active.ready;
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        const body = await readJson(req);
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        probeStage = "identity";
        const marker = crypto.randomUUID(); const principal = await acceptancePrincipal(active);
        const command = { commandId: `cmd_${marker}`, correlationId: `acceptance-${marker}`, conversationId: `cnv_${marker}`,
          tenantId: principal.tenantId, actorId: principal.userId, channel: "release", locale: "en", text: "Verify authoritative task persistence" };
        probeStage = "create";
        const created = await active.engine.create({ command, goal: `Exact-release task-engine probe ${releaseSha}`,
          application: "general", riskTier: "low", steps: [{ title: "Verify durable task lifecycle" }] });
        probeStage = "transition";
        const transitioned = await active.engine.transition({ tenantId: command.tenantId, taskId: created.taskId,
          actorId: command.actorId, nextState: "cancelled", reason: "Production acceptance probe completed" });
        probeStage = "readback";
        const persisted = await active.tasks.get({ tenantId: command.tenantId, taskId: created.taskId, includeSteps: true });
        const passed = transitioned.state === "cancelled" && persisted?.state === "cancelled" && Array.isArray(persisted.steps) && persisted.steps.length === 1;
        send(res, passed ? 200 : 503, { ok: passed, releaseSha, taskId: created.taskId, state: persisted?.state,
          durable: Boolean(persisted), steps: persisted?.steps?.length || 0 });
      } catch (error) {
        const code = error.code || error.name || "task_engine_probe_failed";
        logger.error?.("authoritative.acceptance.task_engine_probe_failed", { code, stage: probeStage });
        send(res, 503, { ok: false, releaseSha: env.RENDER_GIT_COMMIT || env.GIT_SHA || "development",
          code, stage: probeStage, error: String(error.message || "The authoritative task-engine probe failed.").slice(0, 300) });
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
        const marker = crypto.randomUUID(); const embedding = new Array(1536).fill(0); embedding[0] = 1; const principal = await acceptancePrincipal(active);
        const scope = { tenantId: principal.tenantId, principalId: principal.userId, memoryClass: "semantic", purpose: `acceptance-${marker}` };
        const stored = await active.memory.remember({ ...scope, content: { marker }, searchableText: `acceptance ${marker}`,
          embedding, embeddingModel: "acceptance-deterministic-v1", provenance: { source: "production-acceptance", releaseSha },
          importance: 0, confidence: 1, verificationState: "source_verified", sensitivity: "internal" });
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
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/consent-audit" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try {
        const active = await runtime(); await active.ready;
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        const body = await readJson(req);
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const marker = crypto.randomUUID(); const principal = await acceptancePrincipal(active); const tenantId = principal.tenantId;
        const subjectId = principal.userId; const correlationId = `acceptance-consent-${marker}`;
        const receipt = { source: "production-acceptance", releaseSha, marker };
        const granted = await active.consents.grant({ tenantId, subjectId, scope: `acceptance:${marker}`,
          purpose: "Verify immutable consent and audit receipts", policyVersion: "acceptance-v1", receipt });
        await active.audit.record({ tenantId, actorId: principal.userId, correlationId,
          eventType: "consent.granted", outcome: "success", metadata: { consentId: granted.consent_id, releaseSha } });
        const revoked = await active.consents.revoke({ tenantId, subjectId, consentId: granted.consent_id });
        await active.audit.record({ tenantId, actorId: principal.userId, correlationId,
          eventType: "consent.revoked", outcome: "success", metadata: { consentId: granted.consent_id, releaseSha } });
        const consentResult = await active.db.query("select * from nexus_consents where tenant_id=$1 and subject_id=$2 and consent_id=$3", [tenantId, subjectId, granted.consent_id]);
        const auditResult = await active.db.query("select * from nexus_audit_events where tenant_id=$1 and correlation_id=$2 order by occurred_at,event_id", [tenantId, correlationId]);
        const persisted = (consentResult.rows || consentResult)[0]; const events = auditResult.rows || auditResult;
        const preservedReceipt = persisted?.receipt?.marker === marker && persisted?.receipt?.releaseSha === releaseSha;
        const immutableReceipts = persisted?.state === "revoked" && Boolean(persisted?.granted_at) && Boolean(persisted?.revoked_at) &&
          preservedReceipt && events.length === 2 && events[0]?.event_type === "consent.granted" && events[1]?.event_type === "consent.revoked" &&
          events.every(event => event.release_sha === releaseSha);
        send(res, immutableReceipts ? 200 : 503, { ok: immutableReceipts, releaseSha, immutableReceipts,
          consentState: persisted?.state, auditEventCount: events.length, receiptPreserved: preservedReceipt });
      } catch (error) {
        logger.error?.("authoritative.acceptance.consent_audit_probe_failed", { code: error.code || error.name });
        send(res, 503, { ok: false, code: error.code || "consent_audit_probe_failed", error: "The authoritative consent-audit probe failed." });
      }
      return true;
    }
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/offline-sync" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      let active; let tenantId; let deviceId; let operationId;
      try {
        active = await runtime(); await active.ready;
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        const body = await readJson(req);
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const marker = crypto.randomUUID(); const principal = await acceptancePrincipal(active); tenantId = principal.tenantId;
        const userId = principal.userId; deviceId = `acceptance-${marker}`; operationId = `conflict-${marker}`;
        const conflict = await active.sync.apply({ tenantId, userId, deviceId, operationId,
          entityType: "record", entityId: `acceptance-${marker}`, baseVersion: 1,
          payload: { releaseSha, marker } }, async ({ phase }) => phase === "inspect" ? { version: 2, releaseSha } : null);
        const durableConflict = conflict?.state === "conflict" && conflict?.conflict?.serverVersion === 2;
        const resolved = await active.sync.resolve({ tenantId, userId, deviceId, syncId: conflict.sync_id,
          resolution: "accept-server", expectedServerVersion: 2 });
        const changes = await active.sync.changes({ tenantId, userId, deviceId, since: new Date(0), limit: 10 });
        const recovered = resolved?.state === "rejected" && resolved?.conflict?.resolution === "accept-server" &&
          changes.some(item => item.sync_id === conflict.sync_id && item.state === "rejected");
        await active.db.query("delete from nexus_sync_operations where tenant_id=$1 and device_id=$2 and operation_id=$3", [tenantId, deviceId, operationId]);
        const cleanup = await active.sync.changes({ tenantId, userId, deviceId, since: new Date(0), limit: 10 });
        const cleanedUp = !cleanup.some(item => item.sync_id === conflict.sync_id);
        const conflictRecovery = durableConflict && recovered && cleanedUp;
        send(res, conflictRecovery ? 200 : 503, { ok: conflictRecovery, releaseSha, conflictRecovery,
          durableConflict, resolution: resolved?.conflict?.resolution, cleanedUp });
      } catch (error) {
        if (active?.db && tenantId && deviceId && operationId) {
          try { await active.db.query("delete from nexus_sync_operations where tenant_id=$1 and device_id=$2 and operation_id=$3", [tenantId, deviceId, operationId]); } catch {}
        }
        logger.error?.("authoritative.acceptance.offline_sync_probe_failed", { code: error.code || error.name });
        send(res, 503, { ok: false, code: error.code || "offline_sync_probe_failed", error: "The authoritative offline-sync probe failed." });
      }
      return true;
    }
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/identity" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try {
        const active = await runtime(); await active.ready;
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        const body = await readJson(req);
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const membership = await acceptancePrincipal(active);
        const permission = membership.role === "admin" || (membership.permissions || []).includes("*")
          ? "acceptance:identity" : (membership.permissions || [])[0];
        if (!permission) { send(res, 503, { ok: false, releaseSha, code: "identity_probe_permission_unavailable", error: "The active membership has no probeable permission." }); return true; }
        const sameTenant = await active.access.authorize({ tenantId: membership.tenantId, actorId: membership.userId,
          permission, purpose: `Exact-release identity isolation probe ${releaseSha}` });
        let crossTenantDenied = false;
        try {
          await active.access.authorize({ tenantId: crypto.randomUUID(), actorId: membership.userId,
            permission, purpose: `Exact-release cross-tenant denial probe ${releaseSha}` });
        } catch (error) { crossTenantDenied = error?.code === "tenant_membership_required"; }
        const tenantIsolation = sameTenant?.authorized === true && crossTenantDenied;
        send(res, tenantIsolation ? 200 : 503, { ok: tenantIsolation, releaseSha, tenantIsolation,
          sameTenantAuthorized: sameTenant?.authorized === true, crossTenantDenied });
      } catch (error) {
        logger.error?.("authoritative.acceptance.identity_probe_failed", { code: error.code || error.name });
        send(res, 503, { ok: false, code: error.code || "identity_probe_failed", error: "The authoritative identity isolation probe failed." });
      }
      return true;
    }
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/observability" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try {
        const active = await runtime(); await active.ready;
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        const body = await readJson(req);
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        const membership = await acceptancePrincipal(active);
        const marker = crypto.randomUUID(); const traceId = `acceptance-observability-${marker}`;
        await active.observability.record({ tenantId: membership.tenantId, actorId: membership.userId, traceId,
          correlationId: traceId, component: "production-acceptance", eventType: "threshold-probe", outcome: "error",
          durationMs: 1250, provider: "authoritative-runtime", costMicros: 7, releaseSha, metadata: { releaseSha, marker } });
        const persistedResult = await active.db.query(`select trace_id,outcome,duration_ms,cost_micros,release_sha from nexus_observability_events
          where tenant_id=$1 and trace_id=$2 and release_sha=$3`, [membership.tenantId, traceId, releaseSha]);
        const events = persistedResult.rows || persistedResult; const alerts = evaluateObservabilityAlerts(events);
        const tracesReady = events.length === 1 && events[0].trace_id === traceId && events[0].release_sha === releaseSha;
        const costsReady = tracesReady && Number(events[0].cost_micros) === 7;
        const alertsReady = ["execution-failure", "latency-budget", "cost-threshold"].every(kind => alerts.some(alert => alert.kind === kind && alert.traceId === traceId));
        const passed = tracesReady && costsReady && alertsReady;
        send(res, passed ? 200 : 503, { ok: passed, releaseSha, tracesReady, costsReady, alertsReady, alertCount: alerts.length });
      } catch (error) {
        logger.error?.("authoritative.acceptance.observability_probe_failed", { code: error.code || error.name });
        send(res, 503, { ok: false, code: error.code || "observability_probe_failed", error: "The authoritative observability probe failed." });
      }
      return true;
    }
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/object-storage" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try {
        const active = await runtime(); await active.ready;
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        const body = await readJson(req);
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        if (!active.objectStorage) { send(res, 503, { ok: false, releaseSha, code: "object_storage_unavailable", error: "Shared object storage is unavailable." }); return true; }
        const key = "nexus/production-acceptance/object-storage/redeploy-marker.json";
        let previous = null;
        try { const stored = await active.objectStorage.get(key); previous = JSON.parse(stored.body.toString("utf8")); }
        catch (error) { if (!["NoSuchKey", "NotFound", "NoSuchObject"].includes(error?.name) && !["NoSuchKey", "NotFound"].includes(error?.Code)) throw error; }
        const priorHistory = Array.isArray(previous?.releases)
          ? previous.releases.filter(item => item && /^[0-9a-f]{40}$/.test(item.releaseSha || ""))
          : /^[0-9a-f]{40}$/.test(previous?.releaseSha || "")
            ? [{ releaseSha: previous.releaseSha, writtenAt: previous.writtenAt || null }]
            : [];
        const priorRelease = priorHistory.find(item => item.releaseSha !== releaseSha) || null;
        const releases = priorHistory.some(item => item.releaseSha === releaseSha)
          ? priorHistory
          : [...priorHistory, { releaseSha, writtenAt: new Date().toISOString() }];
        const marker = Buffer.from(JSON.stringify({ schema: "nexus.object-storage-release-history.v1", releases }));
        const written = await active.objectStorage.put({ key, body: marker, contentType: "application/json",
          metadata: { purpose: "production-acceptance", release: releaseSha } });
        const reread = await active.objectStorage.get(key); const current = JSON.parse(reread.body.toString("utf8"));
        const currentWriteVerified = Array.isArray(current.releases) && current.releases.some(item => item.releaseSha === releaseSha) && written.sizeBytes === marker.length;
        const priorReleaseSha = priorRelease?.releaseSha || null;
        const redeployPersistent = Boolean(priorReleaseSha) && currentWriteVerified;
        send(res, redeployPersistent ? 200 : 202, { ok: true, releaseSha, currentWriteVerified, redeployPersistent,
          priorReleaseObserved: Boolean(priorReleaseSha), priorReleaseDifferent: Boolean(priorReleaseSha && priorReleaseSha !== releaseSha) });
      } catch (error) {
        logger.error?.("authoritative.acceptance.object_storage_probe_failed", { code: error.code || error.name });
        send(res, 503, { ok: false, code: error.code || "object_storage_probe_failed", error: "The authoritative object-storage probe failed." });
      }
      return true;
    }
    if (url.pathname === "/api/nexus/runtime/business/webhooks/stripe" && req.method === "POST") {
      if (env.NEXUS_REAL_PROVIDER_EXECUTION_ENABLED !== "true" || env.NEXUS_BUSINESS_BILLING_ENABLED !== "true" || !env.STRIPE_WEBHOOK_SECRET) {
        send(res, 503, { code: "business_provider_unavailable", error: "Business billing webhooks are disabled or unconfigured." }); return true;
      }
      try { const active = await runtime(); await active.ready; const result = await createBusinessApi(active, { env }).webhook(req); send(res, 200, result); }
      catch (error) { send(res, error.status || 503, { code: error.code || "business_webhook_unavailable", error: error.status ? error.message : "Business webhook processing is unavailable." }); }
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
      if (url.pathname.startsWith("/api/nexus/runtime/business/")) {
        result = await createBusinessApi(active, { env }).handle({ method: req.method, pathname: url.pathname, context, body });
      } else if (url.pathname === "/api/nexus/runtime/behavior/turn" && req.method === "POST") {
        if (!active.behavior) { send(res, 503, { error: "The authoritative behavior spine is unavailable; no legacy fallback was used.", code: "behavior_spine_unavailable" }); return true; }
        // The device's own time zone, when the app sends one and it is a real IANA zone, so "7am" means 7am where the person is.
        const turnContext = validIanaZone(body.timeZone) ? Object.freeze({ ...context, timeZone: body.timeZone }) : context;
        const result = await active.behavior.turn({ input: { correlationId: request.context.requestId,
          conversationId: body.conversationId, taskId: body.taskId, channel: request.channel,
          locale: request.locale, text: body.text }, context: turnContext });
        send(res, result.completed ? 200 : 202, result); return true;
      } else if (url.pathname === "/api/nexus/runtime/behavior/confirm" && req.method === "POST") {
        if (!active.behavior?.confirm) { send(res, 503, { error: "The authoritative behavior spine is unavailable; no legacy fallback was used.", code: "behavior_spine_unavailable" }); return true; }
        const result = await active.behavior.confirm({ input: { correlationId: request.context.requestId,
          taskId: body.taskId, stepId: body.stepId, approved: body.approved === true,
          channel: request.channel, text: body.text }, context });
        send(res, result.completed ? 200 : 202, result); return true;
      } else if (url.pathname === "/api/nexus/runtime/behavior/conversation" && req.method === "GET") {
        const conversationId = String(request.query.conversationId || "").trim();
        if (!conversationId) { send(res, 400, { error: "Conversation ID is required.", code: "conversation_id_required" }); return true; }
        // A conversationId is only tenant-scoped in storage, not owner-scoped --
        // without this, any authenticated tenant member could read another
        // user's full message history by supplying a conversationId they saw
        // returned elsewhere (task creation, behavior-turn responses).
        const conversationOwnerId = await active.conversations.owner({ tenantId: context.tenantId, conversationId });
        if (conversationOwnerId && conversationOwnerId !== context.userId && !context.hasRole("admin")) {
          send(res, 403, { error: "Only the conversation owner may view its history.", code: "conversation_owner_required" }); return true;
        }
        const turns = await active.conversations.recent({ tenantId: context.tenantId, conversationId,
          limit: Math.min(Math.max(Number(request.query.limit) || 24, 1), 100) });
        send(res, 200, { schema: "nexus.behavior-conversation.v1", authoritative: true,
          conversationId, turns: turns.map(turn => ({ role: turn.role, content: turn.content,
            occurredAt: turn.created_at || turn.occurredAt, provenance: turn.provenance || {} })) }); return true;
      } else if (url.pathname === "/api/nexus/runtime/behavior/readiness" && req.method === "GET") {
        const database = active.db && typeof active.db.query === "function"
          ? await active.db.query("select 1 as authoritative_runtime_ready")
          : null;
        send(res, database ? 200 : 503, { schema: "nexus.behavior-readiness.v1", authoritative: true,
          releaseSha: env.RENDER_GIT_COMMIT || env.GIT_SHA || "development", databaseConnected: Boolean(database), behaviorSpineReady: Boolean(active.behavior),
          conversationRecoveryReady: Boolean(active.conversations?.recent) }); return true;
      } else if (url.pathname === "/api/nexus/runtime/behavior/acknowledgements" && req.method === "POST") {
        if (!active.behavior?.acknowledge) { send(res, 503, { error: "The authoritative renderer acknowledgement path is unavailable.", code: "behavior_acknowledgement_unavailable" }); return true; }
        const acknowledged = await active.behavior.acknowledge({ input: {
          taskId: body.taskId, commandId: body.commandId, correlationId: body.correlationId,
          workspace: body.workspace, rendered: body.rendered === true, visible: body.visible === true,
          audible: body.audible === true, evidence: body.evidence || {}
        }, context });
        send(res, acknowledged.completed ? 200 : 422, acknowledged); return true;
      } else if (url.pathname === "/api/nexus/runtime/commands" && req.method === "POST") {
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
      } else if (url.pathname === "/api/nexus/runtime/audit/events" && req.method === "GET") {
        // The review surface Phase 3 of the JARVIS-mode plan calls for: a
        // list of everything Kyro (or anyone else) did, tenant-wide -- not
        // just what one task's owner can see, so it's gated the same way
        // as the other tenant-wide operational views above.
        if (!context.can("observability:read") && !context.hasRole("admin")) { send(res, 403, { error: "Observability permission is required.", code: "permission_denied" }); return true; }
        const events = await active.audit.list({ tenantId: context.tenantId, actorId: request.query.actorId,
          taskId: request.query.taskId, eventType: request.query.eventType, limit: Number(request.query.limit) || 100 });
        send(res, 200, { authoritative: true, events }); return true;
      } else if (url.pathname === "/api/nexus/runtime/autonomy/pause" && req.method === "GET") {
        if (!context.can("observability:read") && !context.hasRole("admin")) { send(res, 403, { error: "Observability permission is required.", code: "permission_denied" }); return true; }
        send(res, 200, { authoritative: true, ...(await active.autonomyControl.status({ tenantId: context.tenantId })) }); return true;
      } else if (url.pathname === "/api/nexus/runtime/autonomy/pause" && req.method === "POST") {
        // Gated on the admin role alone, not a permission string -- this is a
        // tenant-wide kill switch for every future autonomous task, a step
        // above read-only operational visibility.
        if (!context.hasRole("admin")) { send(res, 403, { error: "The admin role is required to change autonomy pause state.", code: "permission_denied" }); return true; }
        const status = await active.autonomyControl.setPaused({ tenantId: context.tenantId, actorId: context.userId,
          paused: body.paused === true, reason: body.reason || "" });
        send(res, 200, { authoritative: true, ...status.data }); return true;
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
      } else if (url.pathname === "/api/nexus/runtime/documents" && req.method === "GET") {
        const list = await active.documents.list({ tenantId: context.tenantId, ownerId: context.userId, limit: Number(request.query.limit) || 50 });
        send(res, 200, { authoritative: true, documents: list.map(row => formatDocumentSummary(row)) }); return true;
      } else if (/^\/api\/nexus\/runtime\/documents\/[^/]+$/.test(url.pathname) && req.method === "DELETE") {
        // Archive (hide) one of the caller's own documents; the file and its versions are kept. Owner scoping is in the query, so a
        // document that is not the caller's is reported exactly like one that does not exist.
        const documentId = decodeURIComponent(url.pathname.split("/").pop());
        const archived = await active.documents.archive({ tenantId: context.tenantId, ownerId: context.userId, documentId });
        if (!archived) { send(res, 404, { error: "Document not found.", code: "document_not_found" }); return true; }
        await active.audit.record({ tenantId: context.tenantId, actorId: context.userId, correlationId: context.correlationId || crypto.randomUUID(),
          eventType: "document.archived", outcome: "completed", metadata: { documentId: archived.document_id, title: archived.title } });
        send(res, 200, { authoritative: true, archived: true, document: { documentId: archived.document_id, title: archived.title } }); return true;
      } else if (/^\/api\/nexus\/runtime\/documents\/[^/]+$/.test(url.pathname) && req.method === "GET") {
        const documentId = decodeURIComponent(url.pathname.split("/").pop());
        const document = await active.documents.get({ tenantId: context.tenantId, ownerId: context.userId, documentId });
        if (!document) { send(res, 404, { error: "Document not found.", code: "document_not_found" }); return true; }
        // documents.create today writes real bytes to local disk (no S3
        // credentials configured) rather than the shared object store, so
        // object_key carries a "local:<filename>" reference instead of an S3
        // key -- this is the one place that distinction is resolved back
        // into real content, tenant/owner-scoped exactly like the artifacts
        // download route above.
        if (String(document.object_key || "").startsWith("local:")) {
          const filename = document.object_key.slice("local:".length);
          if (!/^[0-9a-f-]+\.(json|txt|md|pdf|docx)$/i.test(filename)) { send(res, 404, { error: "Document not found.", code: "document_not_found" }); return true; }
          const exportRoot = path.resolve(String(env.NEXUS_EXPORT_DIR || "").trim() || path.join(process.cwd(), "output", "nexus-exports"));
          const filePath = path.join(exportRoot, filename);
          if (!filePath.startsWith(exportRoot)) { send(res, 403, { error: "Forbidden.", code: "path_traversal_rejected" }); return true; }
          try {
            const bytes = fs.readFileSync(filePath);
            send(res, 200, { authoritative: true, document: formatDocumentSummary(document),
              contentBase64: bytes.toString("base64"), contentType: contentTypeForFormat(document.document_type) });
          } catch {
            send(res, 404, { error: "The document record exists but its file is unavailable.", code: "document_file_missing" });
          }
          return true;
        }
        if (!active.objectStorage) { send(res, 503, { error: "Shared object storage is unavailable.", code: "object_storage_unavailable" }); return true; }
        const object = await active.objectStorage.get(document.object_key);
        send(res, 200, { authoritative: true, document: formatDocumentSummary(document), contentBase64: object.body.toString("base64"), contentType: object.contentType });
        return true;
      } else if (url.pathname === "/api/nexus/runtime/workspaces" && req.method === "GET") {
        const statuses = await Promise.all(active.applications.list().map(async application => ({ ...application,
          migration: await active.workspaceMigrations.status(application.applicationId) })));
        send(res, 200, { authoritative: true, workspaces: statuses }); return true;
      }
      else if (url.pathname === "/api/nexus/runtime/devices" && req.method === "GET") result = await controls.listDevices(request);
      else if (/^\/api\/nexus\/runtime\/devices\/[^/]+\/(lifecycle|push)$/.test(url.pathname) && req.method === "POST") {
        request.params.deviceId = decodeURIComponent(url.pathname.split("/").at(-2));
        result = url.pathname.endsWith("/lifecycle") ? await controls.deviceLifecycle(request) : await controls.registerPush(request);
      }
      else if (url.pathname === "/api/nexus/runtime/observability" && req.method === "GET") {
        if (!context.can("observability:read") && !context.hasRole("admin")) { send(res, 403, { error: "Observability permission is required.", code: "permission_denied" }); return true; }
        result = { status: 200, body: { authoritative: true, ...(await active.observability.snapshot({ tenantId: context.tenantId })) } };
      }
      else if (/^\/api\/nexus\/runtime\/tasks\/[^/]+\/progress$/.test(url.pathname) && req.method === "GET") {
        const taskId = decodeURIComponent(url.pathname.split("/").at(-2));
        const task = await active.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: false });
        if (!task) { send(res, 404, { error: "Task not found.", code: "task_not_found" }); return true; }
        if (task.ownerId !== context.userId && !context.hasRole("admin")) { send(res, 403, { error: "Task owner is required.", code: "permission_denied" }); return true; }
        // Ordinary owners receive only task progress, never tenant-wide alerts or costs.
        const snapshot = await active.observability.snapshot({ tenantId: context.tenantId, taskId });
        result = { status: 200, body: { authoritative: true, progress: snapshot.progress } };
      }
      else if (url.pathname === "/api/nexus/runtime/navigation" && req.method === "POST") result = await navigation.handle(request);
      else if (url.pathname === "/api/nexus/runtime/devices" && req.method === "POST") result = await controls.registerDevice(request);
      else if (/^\/api\/nexus\/runtime\/devices\/[^/]+$/.test(url.pathname) && req.method === "DELETE") { request.params.deviceId=decodeURIComponent(url.pathname.split("/").pop()); result=await controls.revokeDevice(request); }
      else if (url.pathname === "/api/nexus/runtime/schedules" && req.method === "POST") result = await controls.createSchedule(request);
      else if (url.pathname === "/api/nexus/runtime/notifications" && req.method === "POST") result = await controls.createNotification(request);
      else if (url.pathname === "/api/nexus/runtime/privacy/deletions" && req.method === "POST") result = await controls.requestDeletion(request);
      else if (url.pathname === "/api/nexus/runtime/sync/push" && req.method === "POST") result=await syncApi.push(request);
      else if (url.pathname === "/api/nexus/runtime/sync/pull" && req.method === "GET") result=await syncApi.pull(request);
      else if (/^\/api\/nexus\/runtime\/sync\/conflicts\/[^/]+$/.test(url.pathname) && req.method === "POST") { request.params.syncId=decodeURIComponent(url.pathname.split("/").pop()); result=await syncApi.resolve(request); }
      else {
        const match = url.pathname.match(/^\/api\/nexus\/runtime\/tasks\/([^/]+)(?:\/(execute|transition|steps\/([^/]+)\/(approve|execute)))?$/);
        if (!match) { send(res, 404, { error: "Authoritative runtime route not found." }); return true; }
        request.params.taskId = decodeURIComponent(match[1]);
        if (!match[2] && req.method === "GET") result = await api.get(request);
        else if (match[2] === "execute" && req.method === "POST") result = await api.executeTask(request);
        else if (match[2] === "transition" && req.method === "POST") result = await api.transition(request);
        else if (match[3] && match[4] === "approve" && req.method === "POST") { request.params.stepId = decodeURIComponent(match[3]); result = await api.approve(request); }
        else if (match[3] && match[4] === "execute" && req.method === "POST") { request.params.stepId = decodeURIComponent(match[3]); result = await api.execute(request); }
        else { send(res, 405, { error: "Method not allowed." }); return true; }
      }
      send(res, result.status, result.body);
    } catch (error) {
      if (process.env.NODE_ENV !== "production") console.error("[debug] authoritative runtime error:", url.pathname, error.message, error.stack);
      logger.error?.("authoritative.runtime.request_failed", {
          code: error.code || error.name,
          requestId: req.headers["x-request-id"] || "",
          schema: safeDatabaseIdentifier(error.schema),
          table: safeDatabaseIdentifier(error.table),
          column: safeDatabaseIdentifier(error.column),
          constraint: safeDatabaseIdentifier(error.constraint),
          routine: safeDatabaseIdentifier(error.routine)
        });
      if (error instanceof NexusRuntimeError || error.status) send(res, error.status, { error: error.message, code: error.code, details: error.details });
      else send(res, 503, { error: "The authoritative Nexus runtime is unavailable; no legacy write fallback was used.", code: error.code || "authoritative_runtime_unavailable" });
    }
      return true;
    }
  async function businessRequest({ method, pathname, body = {}, user }) {
    const active = await runtime(); await active.ready;
    const context = requestContext({ headers: {} }, user);
    return createBusinessApi(active, { env }).handle({ method, pathname, context, body });
  }
  // Mirrors the /api/nexus/runtime/behavior/turn and .../acknowledgements
  // HTTP handling above, but callable in-process with a plain user object
  // instead of raw req/res -- the same pattern businessRequest already uses.
  // This is what lets a non-HTTP caller (the legacy server.js voice/native
  // tool dispatcher) reach the real, authoritative task engine for a
  // capability (e.g. lists) that only exists in this runtime, instead of
  // duplicating its logic.
  async function behaviorTurnRequest({ text, channel = "api", locale = "en", user, conversationId, taskId }) {
    const active = await runtime(); await active.ready;
    if (!active.behavior) throw Object.assign(new Error("The authoritative behavior spine is unavailable; no legacy write fallback was used."), { code: "behavior_spine_unavailable", status: 503 });
    const context = requestContext({ headers: {} }, user);
    return active.behavior.turn({ input: { correlationId: context.requestId, conversationId, taskId, channel, locale, text }, context });
  }
  async function behaviorAcknowledgeRequest({ taskId, commandId, correlationId, workspace, rendered, visible, audible, evidence = {}, user }) {
    const active = await runtime(); await active.ready;
    if (!active.behavior?.acknowledge) throw Object.assign(new Error("The authoritative renderer acknowledgement path is unavailable."), { code: "behavior_acknowledgement_unavailable", status: 503 });
    const context = requestContext({ headers: {} }, user);
    return active.behavior.acknowledge({ input: { taskId, commandId, correlationId, workspace, rendered, visible, audible, evidence }, context });
  }
  // Mirrors POST /api/nexus/runtime/behavior/confirm in-process: resumes a task a behavior turn left in
  // confirmation_required (for example cancelling a reminder), for the same non-HTTP caller.
  async function behaviorConfirmRequest({ taskId, stepId, approved = true, text, channel = "api", user }) {
    const active = await runtime(); await active.ready;
    if (!active.behavior?.confirm) throw Object.assign(new Error("The authoritative behavior spine is unavailable; no legacy write fallback was used."), { code: "behavior_spine_unavailable", status: 503 });
    const context = requestContext({ headers: {} }, user);
    return active.behavior.confirm({ input: { correlationId: context.requestId, taskId, stepId, approved: approved === true, channel, text }, context });
  }
  return Object.freeze({ handle, status, businessRequest, behaviorTurnRequest, behaviorAcknowledgeRequest, behaviorConfirmRequest });
}

async function runObjectiveProbe(probe, { active, env, releaseSha }) {
  const principal = await acceptancePrincipal(active);
  if (probe === "consolidated-brain") {
    const singleRuntime = active.behavior?.agent === active.agent && active.agent?.planner === active.planner &&
      active.agent?.engine === active.engine && active.behavior?.engine === active.engine && active.behavior?.tasks === active.tasks;
    const authoritativeRegistries = Boolean(active.tools?.list && active.applications?.list && active.engine?.executeTask && active.behavior?.turn);
    return { ok: singleRuntime && authoritativeRegistries, singleRuntime, authoritativeRegistries,
      legacyFallbackUsed: false, runtimeIdentity: "authoritative-behavior-spine" };
  }
  if (probe === "realtime-voice") {
    const configured = Boolean(env.OPENAI_API_KEY) && /^gpt-realtime/i.test(String(env.OPENAI_REALTIME_MODEL || "gpt-realtime-2"));
    const base = { tenantId: principal.tenantId, actorId: principal.userId, locale: "en",
      correlationId: `acceptance-voice-${crypto.randomUUID()}`, conversationId: `cnv_acceptance_voice_${crypto.randomUUID().replace(/-/g, "").slice(0, 16)}`,
      text: "Create a document farming plan, save it, and reopen it" };
    const context = acceptanceContext(principal, { actorId: principal.userId, roles: principal.roles || [principal.role].filter(Boolean),
      permissions: acceptanceExecutionPermissions(principal) });
    const typed = await active.planner.plan({ command: { ...base, commandId: `cmd_${crypto.randomUUID()}`, channel: "typed" }, context });
    const voice = await active.planner.plan({ command: { ...base, commandId: `cmd_${crypto.randomUUID()}`, channel: "voice" }, context });
    const typedContract = planContract(typed); const voiceContract = planContract(voice);
    const equivalent = JSON.stringify(typedContract) === JSON.stringify(voiceContract);
    return { ok: configured && equivalent, configured, equivalent, typedContract, voiceContract,
      realtimeModel: env.OPENAI_REALTIME_MODEL || "gpt-realtime-2" };
  }
  if (probe === "documents-lifecycle") {
    const marker = crypto.randomUUID(); const correlationId = `acceptance-documents-${marker}`;
    const result = await active.behavior.turn({ input: { text: `Create a document farming plan ${marker}, save it, and reopen it`, channel: "typed",
      locale: "en", correlationId, conversationId: `cnv_acceptance_documents_${marker.replace(/-/g, "").slice(0, 12)}` },
      context: acceptanceContext(principal, { actorId: principal.userId, requestId: correlationId, correlationId,
        roles: principal.roles || [principal.role].filter(Boolean), permissions: acceptanceExecutionPermissions(principal) }) });
    const evidence = (result.receipts || []).flatMap(item => item.verification?.evidence || item.evidence || []);
    const renderData = result.render?.data || {};
    const documentId = evidence.find(item => item?.documentId)?.documentId || renderData.documentId || null;
    // Confirmed: the JSON.stringify(result).includes(...) fallbacks checked
    // for the FIELD NAME appearing anywhere in the serialized result, not
    // its value -- JSON.stringify({reopenVerified:false}).includes(
    // "reopenVerified") is also true, so this acceptance gate could never
    // actually fail on a dishonest or missing verification, only on the key
    // being entirely absent. Rely only on the typed evidence check.
    //
    // renderData is the same typed fallback documentId already used above,
    // not a repeat of that bug: nexus.workspace-outcome.v2's data field
    // merges each completed step's real raw output
    // (nexus/contracts/workspace-outcome.js's mergeStepObjects), so
    // documents.create's real executor (nexus/documents/executor.js)
    // landing savedVersion/reopenVerified there is genuine typed evidence,
    // checked by exact value (=== true / a real version number), never by
    // key presence.
    const saved = evidence.some(item => item?.savedVersion || item?.persisted === true)
      || Boolean(renderData.savedVersion) || renderData.persisted === true;
    const reopened = evidence.some(item => item?.reopenVerified === true) || renderData.reopenVerified === true;
    const fullLifecycle = result.application === "documents" && result.state === "render_required" && Boolean(documentId) && saved && reopened;
    return { ok: fullLifecycle, fullLifecycle, documentId, saved, reopened, signedReceiptCount: (result.receipts || []).length };
  }
  if (probe === "healthcare-controls") return governedModelProbe(active, principal, releaseSha, { domain: "health", confidence: 0.98, healthcare: true });
  if (probe === "predictive-model") return governedModelProbe(active, principal, releaseSha, { domain: "agriculture", confidence: 0.92, healthcare: false });
  throw Object.assign(new Error("Unknown production objective probe."), { code: "objective_probe_unknown" });
}

function planContract(plan) {
  return { application: plan?.application, riskTier: plan?.riskTier,
    steps: (plan?.steps || []).map(step => ({ toolId: step.toolId, input: step.input, dependsOn: step.dependsOn || [] })) };
}

async function governedModelProbe(active, principal, releaseSha, { domain, confidence, healthcare }) {
  const marker = crypto.randomUUID(); const modelVersionId = `modelVersion_${marker.replace(/-/g, "")}`;
  try {
    const registered = await active.models.register({ tenantId: principal.tenantId, modelVersionId,
      modelKey: `acceptance-${domain}-${marker}`, version: releaseSha.slice(0, 12), domain,
      artifactChecksum: crypto.createHash("sha256").update(`${releaseSha}:${marker}`).digest("hex"),
      trainingProvenance: { source: "exact-release-production-acceptance", releaseSha },
      confidencePolicy: { expertReviewBelow: healthcare ? 1 : 0.5 }, intendedUse: `Governed ${domain} acceptance validation`,
      limitations: ["acceptance-only synthetic record"], createdBy: principal.userId });
    const approved = await active.models.approve({ tenantId: principal.tenantId, modelVersionId,
      reviewerId: principal.userId, validationSummary: { releaseSha, checks: ["provenance", "confidence", "expert-review"] } });
    const activated = await active.models.activate({ tenantId: principal.tenantId, modelVersionId });
    const prediction = await active.models.recordPrediction({ tenantId: principal.tenantId, subjectId: principal.userId,
      modelVersionId, inputProvenance: { source: "production-acceptance", releaseSha, marker },
      output: { classification: "acceptance-validation", releaseSha }, confidence });
    const lifecycleValid = registered?.model_version_id === modelVersionId && approved?.state === "approved" && activated?.state === "active";
    const provenanceValid = prediction?.input_provenance?.releaseSha === releaseSha || prediction?.inputProvenance?.releaseSha === releaseSha;
    const expertReviewRequired = prediction?.disposition === "expert_review" && prediction?.review_state === "pending";
    const validatedModels = lifecycleValid && provenanceValid && (healthcare ? expertReviewRequired : prediction?.disposition === "informational");
    return healthcare ? { ok: validatedModels, expertValidation: validatedModels, expertReviewRequired, lifecycleValid, provenanceValid }
      : { ok: validatedModels, validatedModels, lifecycleValid, provenanceValid, disposition: prediction?.disposition };
  } finally {
    await active.db.query("delete from nexus_predictions where tenant_id=$1 and model_version_id=$2", [principal.tenantId, modelVersionId]);
    await active.db.query("delete from nexus_model_versions where tenant_id is not distinct from $1 and model_version_id=$2", [principal.tenantId, modelVersionId]);
  }
}

async function executeProductionFaultIsolation({ active, principal, releaseSha, acceptanceToken }) {
  if (!active?.tasks?.save || !active?.engine?.create || !active?.engine?.transition || !active?.db?.query ||
      !active?.providers?.executors?.["maps.view"] || !active?.providers?.verify || !active?.tools?.get) {
    const error = new Error("The authoritative fault-isolation dependencies are unavailable.");
    error.code = "fault_isolation_dependencies_unavailable";
    throw error;
  }
  const marker = crypto.randomUUID(); const taskIdMarker = marker.replace(/-/g, "");
  const command = { commandId: `cmd_${marker}`, correlationId: `acceptance-fault-${marker}`,
    conversationId: `cnv_${taskIdMarker.slice(0, 20)}`, tenantId: principal.tenantId,
    actorId: principal.userId, channel: "release", locale: "en",
    text: "Verify exact-release production fault isolation" };
  let created; let staleTransitionRejected = false; let staleTaskUnchanged = false;
  let providerFailureObserved = false; let providerFailureCode = null; let providerFailureStage = null;
  let databaseFailureDiagnosed = false; let databaseFailureSafe = false; let databaseRecovered = false;
  let unrelatedCapabilitySurvived = false; let recoveryReceiptVerified = false;
  try {
    created = await active.engine.create({ command, goal: `Fault-isolation probe ${releaseSha}`,
      application: "general", riskTier: "low", steps: [{ title: "Reject a stale authoritative transition" }] });
    const transitioned = await active.engine.transition({ tenantId: principal.tenantId, taskId: created.taskId,
      actorId: principal.userId, nextState: "cancelled", reason: "Acceptance stale-transition baseline" });
    const staleCandidate = { ...created, state: "cancelled", version: Number(created.version) + 1,
      updatedAt: new Date().toISOString() };
    try { await active.tasks.save(staleCandidate, created.version); }
    catch (error) { staleTransitionRejected = error?.name === "ConcurrencyError"; }
    const afterRejection = await active.tasks.get({ tenantId: principal.tenantId, taskId: created.taskId, includeSteps: true });
    staleTaskUnchanged = staleTransitionRejected && afterRejection?.state === transitioned.state &&
      Number(afterRejection?.version) === Number(transitioned.version);

    const context = acceptanceContext(principal, { actorId: principal.userId,
      requestId: `acceptance-fault-${marker}`, correlationId: command.correlationId,
      roles: principal.roles || [principal.role].filter(Boolean), permissions: acceptanceExecutionPermissions(principal) });
    const executor = active.providers.executors["maps.view"];
    try {
      await executor({ input: { origin: "Nairobi", destination: "Nakuru",
        __nexusAcceptanceFault: { token: acceptanceToken, kind: "provider_failure", releaseSha } },
        context, taskId: created.taskId, stepId: `stp_fault_${taskIdMarker.slice(0, 16)}`,
        idempotencyKey: `acceptance-provider-fault-${marker}` });
    } catch (error) {
      providerFailureCode = String(error?.code || "");
      providerFailureStage = String(error?.stage || "");
      providerFailureObserved = providerFailureCode === "acceptance_provider_failure" &&
        providerFailureStage === "provider-execution-maps-view";
    }

    try { await active.db.query("select 1/0 as nexus_acceptance_fault"); }
    catch (error) {
      const diagnostic = classifyRuntimeError(Object.assign(
        new Error("PostgreSQL acceptance probe produced a controlled database error."),
        { code: `database_${String(error?.code || "query_error")}` }));
      databaseFailureDiagnosed = diagnostic.category === "database_unavailable";
      const serialized = JSON.stringify(diagnostic);
      databaseFailureSafe = !/(postgres(?:ql)?:\/\/|password|credential|NEXUS_ACCEPTANCE_TOKEN)/i.test(serialized);
    }
    const recovery = await active.db.query("select 1 as nexus_acceptance_recovered");
    databaseRecovered = Number((recovery.rows || recovery)[0]?.nexus_acceptance_recovered) === 1;

    const recoveryStepId = `stp_recovery_${taskIdMarker.slice(0, 16)}`;
    const recoveryResult = await executor({ input: { origin: "Nairobi", destination: "Nakuru",
      certificationCaseId: `p2c_fault_recovery_${taskIdMarker.slice(0, 16)}` }, context,
      taskId: created.taskId, stepId: recoveryStepId, idempotencyKey: `acceptance-provider-recovery-${marker}` });
    const tool = await active.tools.get("maps.view");
    const verification = await active.providers.verify({ tool, result: recoveryResult, context,
      taskId: created.taskId, stepId: recoveryStepId });
    recoveryReceiptVerified = verification?.verified === true;
    unrelatedCapabilitySurvived = databaseRecovered && recoveryReceiptVerified;
  } finally {
    if (created?.taskId) {
      await active.db.query("delete from nexus_task_steps where tenant_id=$1 and task_id=$2", [principal.tenantId, created.taskId]);
      await active.db.query("delete from nexus_tasks where tenant_id=$1 and task_id=$2", [principal.tenantId, created.taskId]);
    }
  }
  const ok = staleTransitionRejected && staleTaskUnchanged && providerFailureObserved &&
    databaseFailureDiagnosed && databaseFailureSafe && databaseRecovered &&
    unrelatedCapabilitySurvived && recoveryReceiptVerified;
  return Object.freeze({ ok, releaseSha, staleTransitionRejected, staleTaskUnchanged,
    providerFailureObserved, providerFailureCode, providerFailureStage,
    databaseFailureDiagnosed, databaseFailureSafe, databaseRecovered,
    unrelatedCapabilitySurvived, recoveryReceiptVerified });
}

const DOCUMENT_CONTENT_TYPES = Object.freeze({ json: "application/json", txt: "text/plain", md: "text/markdown",
  pdf: "application/pdf", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
function contentTypeForFormat(format) { return DOCUMENT_CONTENT_TYPES[String(format || "").toLowerCase()] || "application/octet-stream"; }
function formatDocumentSummary(row) {
  return { documentId: row.document_id, title: row.title, documentType: row.document_type,
    version: row.version || null, createdAt: row.created_at, updatedAt: row.updated_at };
}

function acceptanceAuthorized(req, expected) {
  if (!expected) return false;
  const supplied = String(req.headers?.authorization || "").replace(/^Bearer\s+/i, "");
  const left = Buffer.from(supplied); const right = Buffer.from(String(expected));
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

// Acceptance continuations that approve ONE confirmation-gated, consent-scoped
// step so the exact-release probe can prove the confirmed transaction end to
// end. Each entry pins the application, the single tool it may approve and that
// tool's consent scope; anything else is rejected as a contract mismatch.
const CONSENTED_CONTINUATIONS = Object.freeze({
  "health-continuation": Object.freeze({ application: "health", label: "Health", toolId: "health.record", scope: "health:record:write", codeKey: "health",
    purpose: "Exact-release production Health transaction proof", finished: "Health transaction" }),
  "telehealth-continuation": Object.freeze({ application: "telehealth", label: "Telehealth", toolId: "telehealth.prepare", scope: "health:telehealth-intake:write", codeKey: "telehealth",
    purpose: "Exact-release production Telehealth intake proof", finished: "Telehealth intake" })
});

async function acceptancePrincipal(active) {
  const result = await active.db.query(`select tenant_id,user_id,role,permissions from nexus_organization_memberships
    where state='active' and 'acceptance:identity'=any(permissions) order by updated_at desc limit 1`);
  const row = (result.rows || result)[0];
  if (!row) { const error = new Error("No active production acceptance identity is available."); error.code = "acceptance_identity_unavailable"; throw error; }
  return Object.freeze({ tenantId: row.tenant_id, userId: row.user_id, role: row.role, permissions: row.permissions || [] });
}

async function acceptancePrincipalForTask(active, taskId) {
  const result = await active.db.query(`select m.tenant_id,m.user_id,m.role,m.permissions
    from nexus_tasks t join nexus_organization_memberships m
      on m.tenant_id=t.tenant_id and m.user_id=t.owner_id
    where t.task_id=$1 and m.state='active' and 'acceptance:identity'=any(m.permissions)
    order by m.updated_at desc limit 1`, [taskId]);
  const row = (result.rows || result)[0];
  if (!row) { const error = new Error("The pending task has no active production acceptance owner."); error.code = "acceptance_transaction_owner_unavailable"; throw error; }
  return Object.freeze({ tenantId: row.tenant_id, userId: row.user_id, role: row.role, permissions: row.permissions || [] });
}

// A real IANA time zone name (like "Africa/Nairobi"); anything else, including non-strings, is ignored.
function validIanaZone(value) {
  if (typeof value !== "string" || !/^[A-Za-z][A-Za-z0-9_+-]*(?:\/[A-Za-z0-9_+-]+){0,2}$/.test(value)) return false;
  try { new Intl.DateTimeFormat("en", { timeZone: value }); return true; } catch { return false; }
}

function requestContext(req, user) {
  const roles = new Set([user.role, ...(user.roles || [])].filter(Boolean)); const permissions = new Set([...(user.permissions || [])].filter(Boolean));
  const requestId = String(req.headers["x-request-id"] || crypto.randomUUID());
  return Object.freeze({ requestId, correlationId: requestId, tenantId: String(user.tenantId || user.organizationId || "tenant_default"), userId: String(user.id), roles: [...roles], permissions: [...permissions], hasRole: role => roles.has(role), can: permission => permissions.has(permission) });
}

function acceptanceContext(principal, values = {}) {
  const roles = new Set(values.roles || principal.roles || [principal.role].filter(Boolean));
  const permissions = new Set(values.permissions || principal.permissions || []);
  return Object.freeze({ tenantId: principal.tenantId, userId: principal.userId, ...values,
    roles: [...roles], permissions: [...permissions], hasRole: role => roles.has(role),
    can: permission => permissions.has("*") || permissions.has(permission) });
}

function acceptanceExecutionPermissions(principal) {
  return [...new Set([...(principal.permissions || []), "acceptance:identity", "tasks:execute"])];
}

module.exports = Object.freeze({ createServerRuntimeAdapter, requestContext, acceptanceAuthorized, acceptancePrincipal,
  acceptanceContext, acceptanceExecutionPermissions, executeProductionFaultIsolation, runObjectiveProbe, governedModelProbe, planContract });
