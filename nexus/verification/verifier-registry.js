"use strict";

class OutcomeVerifierRegistry {
  constructor(entries = []) {
    this.entries = new Map();
    for (const entry of entries) this.register(entry);
  }

  register(input = {}) {
    const toolId = required(input.toolId, "Verifier toolId");
    if (this.entries.has(toolId)) throw coded("verifier_already_registered", `Outcome verifier ${toolId} is already registered.`);
    if (typeof input.verify !== "function") throw coded("verifier_function_required", `Outcome verifier ${toolId} requires a verify function.`);
    const verifier = Object.freeze({
      schema: "nexus.outcome-verifier.v1",
      toolId,
      version: Math.max(1, Number(input.version || 1)),
      method: required(input.method || "provider_receipt", "Verification method"),
      verify: input.verify,
      metadata: Object.freeze({ ...(input.metadata || {}) })
    });
    this.entries.set(toolId, verifier);
    return verifier;
  }

  has(toolId) { return this.entries.has(String(toolId || "")); }
  get(toolId) { return this.entries.get(String(toolId || "")) || null; }
  list() { return [...this.entries.values()]; }

  require(toolId) {
    const verifier = this.get(toolId);
    if (!verifier) throw coded("authoritative_verifier_missing", `No authoritative outcome verifier owns ${toolId}.`);
    return verifier;
  }
}

function required(value, label) {
  const normalized = String(value || "").trim();
  if (!normalized) throw coded("invalid_verifier_contract", `${label} is required.`);
  return normalized;
}
function coded(code, message) { const error = new Error(message); error.code = code; error.status = 503; return error; }

module.exports = Object.freeze({ OutcomeVerifierRegistry });
