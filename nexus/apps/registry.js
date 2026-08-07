"use strict";

const REQUIRED_PROOFS = Object.freeze(["contract", "tenant-isolation", "durable-write", "receipt", "browser-outcome"]);

class ApplicationRegistry {
  constructor(manifests = []) {
    this.entries = new Map();
    for (const manifest of manifests) this.register(manifest);
  }

  register(manifest) {
    const normalized = normalize(manifest);
    if (this.entries.has(normalized.applicationId)) throw new Error(`Application ${normalized.applicationId} is already registered.`);
    this.entries.set(normalized.applicationId, normalized);
    return normalized;
  }

  get(applicationId) { return this.entries.get(applicationId) || null; }
  list() { return [...this.entries.values()]; }

  candidates({ capabilities = [], riskTier } = {}) {
    const wanted = new Set(capabilities);
    return this.list().filter(entry => (!riskTier || entry.riskTiers.includes(riskTier)) &&
      (!wanted.size || entry.capabilities.some(capability => wanted.has(capability))));
  }
}

function normalize(input = {}) {
  for (const field of ["applicationId", "title", "description"]) {
    if (!String(input[field] || "").trim()) throw new Error(`Application ${field} is required.`);
  }
  if (!Array.isArray(input.capabilities) || !input.capabilities.length) throw new Error("Application capabilities are required.");
  return Object.freeze({
    schema: "nexus.application.v1",
    applicationId: input.applicationId.trim(), title: input.title.trim(), description: input.description.trim(),
    capabilities: Object.freeze([...new Set(input.capabilities)]),
    riskTiers: Object.freeze([...new Set(input.riskTiers || ["low"])]),
    requiredPermissions: Object.freeze([...new Set(input.requiredPermissions || [])]),
    artifactKinds: Object.freeze([...new Set(input.artifactKinds || [])]),
    verificationMethods: Object.freeze([...new Set(input.verificationMethods || ["result_schema"])]),
    migrationProofs: Object.freeze([...new Set(input.migrationProofs || REQUIRED_PROOFS)]),
    metadata: Object.freeze({ ...(input.metadata || {}) })
  });
}

module.exports = Object.freeze({ ApplicationRegistry, REQUIRED_PROOFS });
