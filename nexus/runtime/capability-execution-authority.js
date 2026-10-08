"use strict";

class CapabilityExecutionAuthority {
  constructor({ adapters, verifiers, observe = null } = {}) {
    if (!adapters?.require || !verifiers?.require) throw new Error("Authoritative adapter and verifier registries are required.");
    Object.assign(this, { adapters, verifiers, observe });
  }

  has(toolId) { return this.adapters.has(toolId) && this.verifiers.has(toolId); }

  async execute(input = {}) {
    const toolId = String(input.tool?.tool_id || input.tool?.toolId || "").trim();
    if (!toolId) throw coded("authoritative_tool_required", "An authoritative tool definition is required.");
    const adapter = this.adapters.require(toolId);
    const verifier = this.verifiers.require(toolId);
    const scope = { tenantId: input.context?.tenantId || null, actorId: input.context?.userId || null,
      traceId: input.context?.traceId || input.context?.correlationId || input.taskId,
      correlationId: input.context?.correlationId || null, taskId: input.taskId, stepId: input.stepId };
    await this.emit("adapter.started", { ...scope, toolId, adapterVersion: adapter.version });
    let result;
    try {
      result = await adapter.execute({
        input: input.input || {}, context: input.context, taskId: input.taskId,
        stepId: input.stepId, idempotencyKey: input.idempotencyKey
      });
    } catch (error) {
      await this.emit("adapter.failed", { ...scope, toolId,
        code: error.code || "adapter_execution_failed", message: error.message });
      throw error;
    }
    const verification = await verifier.verify({
      tool: input.tool, result, context: input.context, taskId: input.taskId, stepId: input.stepId,
      idempotencyKey: input.idempotencyKey, adapter: { toolId, version: adapter.version, implementation: adapter.implementation }
    });
    if (verification?.verified !== true) {
      const error = coded("outcome_unverified", `The authoritative verifier rejected the ${toolId} outcome${rejectionDetail(verification)}.`, 502);
      error.details = { toolId, verification: verification || null };
      await this.emit("verification.failed", { ...scope, toolId, verification });
      throw error;
    }
    const normalized = Object.freeze({
      ...verification, verified: true, toolId,
      adapterVersion: adapter.version, verifierVersion: verifier.version,
      verificationMethod: verification.method || verifier.method
    });
    await this.emit("verification.passed", { ...scope, toolId, verification: normalized });
    return Object.freeze({ result, verification: normalized, adapter, verifier });
  }

  async emit(eventType, payload) {
    if (typeof this.observe === "function") await this.observe({ eventType, ...payload, occurredAt: new Date().toISOString() });
  }
}

// Production 2026-10: a probe was rejected with only "The authoritative verifier rejected the lists.create outcome" -- the verifier
// had a reason (and the executor knew the exact cause, a per-account cap), but neither reached the pipeline log, so the cause had
// to be guessed. The verifier's own short machine reason is now part of the message. It is copied only when it is a plain
// identifier (letters, digits, underscore, dot, dash), so free text, personal data or secrets can never ride along; the optional
// numeric limit is copied only when it is a finite number.
function rejectionDetail(verification) {
  const reason = typeof verification?.reason === "string" && /^[a-z][a-z0-9_.-]{0,63}$/i.test(verification.reason) ? verification.reason : "";
  if (!reason) return "";
  const limit = Number(verification?.limit);
  return ` (reason=${reason}${verification?.limit !== undefined && verification?.limit !== null && Number.isFinite(limit) ? ` max=${limit}` : ""})`;
}

function coded(code, message, status = 503) { const error = new Error(message); error.code = code; error.status = status; return error; }

module.exports = Object.freeze({ CapabilityExecutionAuthority });
