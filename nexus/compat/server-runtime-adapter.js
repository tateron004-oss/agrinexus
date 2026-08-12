"use strict";

const crypto = require("crypto");
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

function createServerRuntimeAdapter({ env = process.env, resolveUser, readJson, logger = console,
  createRuntimeFn = createRuntime, checkHealthFn = checkRuntimeHealth } = {}) {
  let runtimePromise = null;
  async function runtime() {
    if (!runtimePromise) runtimePromise = Promise.resolve().then(() => createRuntimeFn({ env, logger })).catch(error => { runtimePromise = null; throw error; });
    return runtimePromise;
  }
  async function status() {
    try { const active = await runtime(); await active.ready; return await checkHealthFn(active); }
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
      try {
        const active = await runtime(); await active.ready;
        const health = await checkHealthFn(active);
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        const report = await active.acceptance.report({ releaseSha, applications: active.applications, health });
        send(res, report.ok ? 200 : 503, report);
      } catch (error) {
        const code = error.code || "acceptance_evidence_unavailable";
        const stage = String(error.stage || "runtime-initialization").replace(/[^a-z0-9-]/gi, "").slice(0, 64);
        logger.error?.("authoritative.acceptance.unavailable", { code, stage });
        send(res, 503, { ok: false, authoritative: true, code, stage,
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
          error: String(error.message || failure.message).slice(0, 300) }); }
      return true;
    }
    if (url.pathname === "/api/nexus/runtime/production-acceptance/probes/health-continuation" && req.method === "POST") {
      if (!acceptanceAuthorized(req, env.NEXUS_ACCEPTANCE_TOKEN)) { send(res, 401, { error: "A valid production acceptance token is required.", code: "acceptance_authentication_required" }); return true; }
      try {
        const active = await runtime(); await active.ready; const body = await readJson(req);
        const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
        if (body.releaseSha !== releaseSha) { send(res, 409, { error: "Probe SHA does not match the active release.", code: "evidence_sha_mismatch" }); return true; }
        if (body.confirmed !== true || body.consented !== true) { send(res, 422, { error: "Explicit Health confirmation and consent are required.", code: "acceptance_health_authorization_required" }); return true; }
        const principal = await acceptancePrincipal(active);
        const task = await active.tasks.get({ tenantId: principal.tenantId, taskId: body.taskId, includeSteps: true });
        const step = (task?.steps || []).find(item => item.step_id === body.stepId);
        if (!task || task.ownerId !== principal.userId || task.application !== "health" ||
            task.commandId !== body.commandId || task.correlationId !== body.correlationId ||
            !step || step.tool_id !== "health.record" || step.confirmation_state !== "required") {
          send(res, 409, { error: "Health continuation does not match the pending acceptance transaction.", code: "acceptance_health_transaction_mismatch" }); return true;
        }
        const tool = await active.tools.get(step.tool_id);
        if (!tool || tool.consent_scope !== "health:record:write" || tool.confirmation_required !== true) {
          send(res, 409, { error: "The governed Health tool contract does not match the continuation.", code: "acceptance_health_contract_mismatch" }); return true;
        }
        const consent = await active.consents.grant({ tenantId: principal.tenantId, subjectId: principal.userId,
          taskId: task.taskId, scope: tool.consent_scope, purpose: "Exact-release production Health transaction proof",
          policyVersion: "production-acceptance-v1", receipt: { source: "production-acceptance", releaseSha,
            taskId: task.taskId, stepId: step.step_id, commandId: task.commandId, correlationId: task.correlationId } });
        await active.engine.approve({ tenantId: principal.tenantId, taskId: task.taskId, stepId: step.step_id,
          actorId: principal.userId, approved: true });
        const context = acceptanceContext(principal, { actorId: principal.userId,
          requestId: `acceptance-health-${task.commandId}`, correlationId: task.correlationId,
          roles: principal.roles || [principal.role].filter(Boolean), permissions: acceptanceExecutionPermissions(principal) });
        const execution = await active.engine.executeTask({ context, taskId: task.taskId });
        const resumedTask = await active.tasks.get({ tenantId: principal.tenantId, taskId: task.taskId, includeSteps: true });
        if (execution.state !== "awaiting_render") {
          send(res, 503, { ok: false, releaseSha, code: "acceptance_health_render_not_reached", error: "Health continuation did not reach renderer verification." }); return true;
        }
        const command = { commandId: task.commandId, correlationId: task.correlationId, conversationId: task.conversationId,
          text: task.goal, channel: body.channel === "voice" ? "voice" : "typed" };
        const plan = { application: "health", steps: (resumedTask.steps || []).map(item => ({ input: item.input || {} })) };
        const render = createWorkspaceOutcome({ command, plan, task: resumedTask, state: "render_required",
          response: "Nexus completed the confirmed Health transaction and is rendering the verified result.",
          outcome: { verified: true, reason: "renderer_acknowledgement_required" } });
        send(res, 200, { ok: true, releaseSha, consentId: consent.consent_id, result: { state: "render_required",
          completed: false, application: "health", taskId: task.taskId, commandId: task.commandId,
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
    const user = await resolveUser(req);
    if (!user) { send(res, 401, { error: "Authentication is required for authoritative Nexus tasks." }); return true; }
    try {
      const active = await runtime(); await active.ready; const api = createTaskApi(active.engine); const controls = createControlApi(active); const syncApi=createSyncApi(active); const context = requestContext(req, user);
      const body = ["POST", "PUT", "PATCH"].includes(req.method) ? await readJson(req) : {};
      const request = { context, body, channel: body.channel || "api", locale: body.locale || user.language || "en", params: {},
        query: Object.fromEntries(url.searchParams.entries()) };
      let result = null;
      if (url.pathname === "/api/nexus/runtime/behavior/turn" && req.method === "POST") {
        if (!active.behavior) { send(res, 503, { error: "The authoritative behavior spine is unavailable; no legacy fallback was used.", code: "behavior_spine_unavailable" }); return true; }
        const result = await active.behavior.turn({ input: { correlationId: request.context.requestId,
          conversationId: body.conversationId, taskId: body.taskId, channel: request.channel,
          locale: request.locale, text: body.text }, context });
        send(res, result.completed ? 200 : 202, result); return true;
      } else if (url.pathname === "/api/nexus/runtime/behavior/conversation" && req.method === "GET") {
        const conversationId = String(request.query.conversationId || "").trim();
        if (!conversationId) { send(res, 400, { error: "Conversation ID is required.", code: "conversation_id_required" }); return true; }
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
      logger.error?.("authoritative.runtime.request_failed", { code: error.code || error.name, requestId: req.headers["x-request-id"] || "" });
      if (error instanceof NexusRuntimeError || error.status) send(res, error.status, { error: error.message, code: error.code, details: error.details });
      else send(res, 503, { error: "The authoritative Nexus runtime is unavailable; no legacy write fallback was used.", code: error.code || "authoritative_runtime_unavailable" });
    }
      return true;
    }
  return Object.freeze({ handle, status });
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
    const documentId = evidence.find(item => item?.documentId)?.documentId || result.render?.data?.documentId || null;
    const saved = evidence.some(item => item?.savedVersion || item?.persisted === true) || JSON.stringify(result).includes("savedVersion");
    const reopened = evidence.some(item => item?.reopenVerified === true) || JSON.stringify(result).includes("reopenVerified");
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

function acceptanceAuthorized(req, expected) {
  if (!expected) return false;
  const supplied = String(req.headers?.authorization || "").replace(/^Bearer\s+/i, "");
  const left = Buffer.from(supplied); const right = Buffer.from(String(expected));
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

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

function requestContext(req, user) {
  const roles = new Set([user.role, ...(user.roles || [])].filter(Boolean)); const permissions = new Set([...(user.permissions || [])].filter(Boolean));
  return Object.freeze({ requestId: String(req.headers["x-request-id"] || crypto.randomUUID()), tenantId: String(user.tenantId || user.organizationId || "tenant_default"), userId: String(user.id), roles: [...roles], permissions: [...permissions], hasRole: role => roles.has(role), can: permission => permissions.has(permission) });
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
  acceptanceContext, acceptanceExecutionPermissions, runObjectiveProbe, governedModelProbe, planContract });
