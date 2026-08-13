"use strict";

const CANONICAL_PROVIDER_TOOLS = Object.freeze([
  Object.freeze({ toolId: "knowledge.search", domain: "knowledge", description: "Search governed production knowledge" }),
  Object.freeze({ toolId: "images.search", domain: "images", description: "Search governed production images with source provenance" }),
  Object.freeze({ toolId: "documents.create", domain: "documents", description: "Create a governed production document" }),
  Object.freeze({ toolId: "jobs.search", domain: "jobs", description: "Search governed production jobs" }),
  Object.freeze({ toolId: "resume.create", domain: "resume", description: "Create a governed production resume" }),
  Object.freeze({ toolId: "maps.view", domain: "maps", description: "Render a governed production map" }),
  Object.freeze({ toolId: "media.play", domain: "media", description: "Play governed production media" }),
  Object.freeze({ toolId: "health.record", domain: "health", description: "Record a user-confirmed health observation",
    riskTier: "regulated", confirmationRequired: true, consentScope: "health:record:write", dataClassification: "health" }),
  Object.freeze({ toolId: "health.emergency-guidance", domain: "health", description: "Display immediate emergency guidance without claiming diagnosis or dispatch",
    riskTier: "regulated", dataClassification: "health" }),
  Object.freeze({ toolId: "telehealth.prepare", domain: "telehealth", description: "Save a governed telehealth intake" }),
  Object.freeze({ toolId: "clinic.find", domain: "health", description: "Find governed mobile clinic locations" }),
  Object.freeze({ toolId: "pharmacy.find", domain: "health", description: "Find governed pharmacy support" }),
  Object.freeze({ toolId: "marketplace.search", domain: "trade", description: "Search governed marketplace listings" }),
  Object.freeze({ toolId: "reminders.schedule", domain: "reminders", description: "Persist a governed reminder" }),
  Object.freeze({ toolId: "offline.sync", domain: "offline", description: "Synchronize a governed offline operation", confirmationRequired: true }),
  Object.freeze({ toolId: "communications.send", domain: "communications", description: "Deliver a governed communication" }),
  Object.freeze({ toolId: "drone.plan", domain: "operations", description: "Prepare a governed field operation" })
]);

function canonicalProviderTools({ receiptSecret, providerBaseUrl }) {
  if (!String(receiptSecret || "").trim()) throw coded("provider_receipt_secret_required", "A provider receipt secret is required.");
  const base = String(providerBaseUrl || "").replace(/\/$/, "");
  if (!/^https:\/\//i.test(base)) throw coded("provider_base_url_invalid", "The canonical provider base URL must use HTTPS.");
  return CANONICAL_PROVIDER_TOOLS.map(tool => Object.freeze({ ...tool,
    endpoint: `${base}/nexus/tools/${tool.toolId}`, receiptSecret,
    riskTier: tool.riskTier || "low", requiredPermission: "tasks:execute",
    confirmationRequired: Boolean(tool.confirmationRequired) }));
}

function assertCanonicalProviderBindings(definitions) {
  const configured = new Set((definitions || []).map(item => item.toolId));
  const expected = new Set(CANONICAL_PROVIDER_TOOLS.map(item => item.toolId));
  const missing = [...expected].filter(id => !configured.has(id));
  const extra = [...configured].filter(id => !expected.has(id));
  if (missing.length || extra.length) throw coded("provider_catalog_drift",
    `Provider catalog drift detected (missing: ${missing.join(",") || "none"}; extra: ${extra.join(",") || "none"}).`);
  return true;
}

function coded(code, message) { const error = new Error(message); error.code = code; return error; }

module.exports = Object.freeze({ CANONICAL_PROVIDER_TOOLS, canonicalProviderTools, assertCanonicalProviderBindings });
