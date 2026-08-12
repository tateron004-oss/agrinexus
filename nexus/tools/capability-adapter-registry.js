"use strict";

class CapabilityAdapterRegistry {
  constructor(entries = []) {
    this.entries = new Map();
    for (const entry of entries) this.register(entry);
  }

  register(input = {}) {
    const toolId = required(input.toolId, "Adapter toolId");
    if (this.entries.has(toolId)) throw coded("adapter_already_registered", `Capability adapter ${toolId} is already registered.`);
    if (typeof input.execute !== "function") throw coded("adapter_execute_required", `Capability adapter ${toolId} requires an execute function.`);
    const adapter = Object.freeze({
      schema: "nexus.capability-adapter.v1",
      toolId,
      version: Math.max(1, Number(input.version || 1)),
      implementation: required(input.implementation || toolId, "Adapter implementation"),
      provider: String(input.provider || "nexus").trim(),
      execute: input.execute,
      metadata: Object.freeze({ ...(input.metadata || {}) })
    });
    this.entries.set(toolId, adapter);
    return adapter;
  }

  has(toolId) { return this.entries.has(String(toolId || "")); }
  get(toolId) { return this.entries.get(String(toolId || "")) || null; }
  list() { return [...this.entries.values()]; }

  require(toolId) {
    const adapter = this.get(toolId);
    if (!adapter) throw coded("authoritative_adapter_missing", `No authoritative capability adapter owns ${toolId}.`);
    return adapter;
  }
}

function required(value, label) {
  const normalized = String(value || "").trim();
  if (!normalized) throw coded("invalid_adapter_contract", `${label} is required.`);
  return normalized;
}
function coded(code, message) { const error = new Error(message); error.code = code; error.status = 503; return error; }

module.exports = Object.freeze({ CapabilityAdapterRegistry });
