"use strict";

const CANONICAL_PROVIDER_TOOLS = Object.freeze([
  Object.freeze({ toolId: "knowledge.search", domain: "knowledge", description: "Search governed production knowledge" }),
  Object.freeze({ toolId: "images.search", domain: "images", description: "Search governed production images with source provenance" }),
  Object.freeze({ toolId: "documents.create", domain: "documents", description: "Create a governed production document" }),
  Object.freeze({ toolId: "documents.read", domain: "documents", description: "Read back a document the caller previously created" }),
  Object.freeze({ toolId: "lists.create", domain: "lists", description: "Create a governed checklist or to-do list" }),
  Object.freeze({ toolId: "lists.read", domain: "lists", description: "Read back a list the caller previously created" }),
  Object.freeze({ toolId: "lists.update", domain: "lists", description: "Add, remove, or toggle items on a list the caller previously created" }),
  Object.freeze({ toolId: "jobs.search", domain: "jobs", description: "Search governed production jobs" }),
  Object.freeze({ toolId: "resume.create", domain: "resume", description: "Create a governed production resume" }),
  Object.freeze({ toolId: "maps.view", domain: "maps", description: "Render a governed production map" }),
  Object.freeze({ toolId: "media.play", domain: "media", description: "Play governed production media" }),
  Object.freeze({ toolId: "health.record", domain: "health", description: "Record a user-confirmed health observation",
    riskTier: "regulated", confirmationRequired: true, consentScope: "health:record:write", dataClassification: "health" }),
  Object.freeze({ toolId: "health.emergency-guidance", domain: "health", description: "Display immediate emergency guidance without claiming diagnosis or dispatch",
    riskTier: "regulated", dataClassification: "health" }),
  Object.freeze({ toolId: "health.chronic-intake", domain: "health", description: "Record a chronic-disease intake for provider review",
    riskTier: "regulated", confirmationRequired: true, consentScope: "health:record:write", dataClassification: "health" }),
  Object.freeze({ toolId: "health.chronic-reading", domain: "health", description: "Record a chronic-disease vital reading for provider review",
    riskTier: "regulated", confirmationRequired: true, consentScope: "health:record:write", dataClassification: "health" }),
  Object.freeze({ toolId: "health.chronic-summary", domain: "health", description: "Read back chronic-disease readings and prepare a provider-review summary" }),
  // Confirmed live: "Save a telehealth intake for my ongoing back pain
  // concern." completed immediately with no confirmation step at all,
  // telling the user their intake was saved when nothing real happened
  // (this whole execution layer is a local simulation, per
  // scripts/provider-engines.js) -- a real health-record save with no
  // confirmation gate, unlike the otherwise-equivalent health.record below.
  Object.freeze({ toolId: "telehealth.prepare", domain: "telehealth", description: "Save a governed telehealth intake",
    riskTier: "regulated", confirmationRequired: true, consentScope: "health:telehealth-intake:write", dataClassification: "health" }),
  Object.freeze({ toolId: "clinic.find", domain: "health", description: "Find governed mobile clinic locations" }),
  Object.freeze({ toolId: "pharmacy.find", domain: "health", description: "Find governed pharmacy support" }),
  Object.freeze({ toolId: "marketplace.search", domain: "trade", description: "Search governed marketplace listings" }),
  Object.freeze({ toolId: "reminders.schedule", domain: "reminders", description: "Persist a governed reminder" }),
  Object.freeze({ toolId: "offline.sync", domain: "offline", description: "Synchronize a governed offline operation", confirmationRequired: true }),
  // Confirmed live: "Send a message to my doctor saying I'm not feeling
  // well." (a completely natural request, no "consent"/"receipt" language)
  // completed immediately with a fake-looking delivery receipt and no
  // confirmation step -- a user could reasonably believe a real message
  // reached their doctor when nothing was actually sent (this execution
  // layer is a local simulation, per scripts/provider-engines.js).
  // completeCommunicationPlan's own deterministic path already requires
  // explicit consent/receipt language before it fires, but this tool's own
  // catalog entry had no confirmationRequired gate for when the request
  // reaches the AI planner directly instead.
  Object.freeze({ toolId: "communications.send", domain: "communications", description: "Deliver a governed communication",
    riskTier: "regulated", confirmationRequired: true, consentScope: "communications:send:write", dataClassification: "communications" }),
  Object.freeze({ toolId: "drone.plan", domain: "operations", description: "Prepare a governed field operation" }),
  // Confirmed live: a real user's TYPED command ("add a donor named X", "log
  // a $75 expense", "generate the business plan PDF") never reached the
  // real nexus/business/* backend at all -- it went through this canonical
  // catalog (handleNexusUnifiedBrainRuntimeCommand calls the authoritative
  // runtime unconditionally, before any keyword gate), which had no business
  // tool, so the AI planner guessed the nearest unrelated tool
  // (documents.create) and silently created a fabricated document instead.
  // Real spoken voice was unaffected (it reaches nexus_business_assistant
  // via the separate OpenAI-native dispatcher), but typed chat -- the more
  // common path -- was completely broken for all 10 business/nonprofit
  // tools. business.query covers read-only actions (list workspaces, the
  // performance dashboard); business.manage covers every write (add a
  // customer/donor, log a transaction, invoices, grants, tasks,
  // appointments, generate documents/plan/marketing). Both delegate to
  // nexus/business/voice-dispatch.js, the same classify/extract/execute
  // logic nexus_business_assistant itself uses, via a real local executor
  // (see create-runtime.js's LOCAL_EXECUTORS) -- not this file's
  // signed-provider-receipt mock, which cannot express this domain's
  // multi-turn clarification/confirmation shape.
  Object.freeze({ toolId: "business.query", domain: "business", description: "List business/nonprofit workspaces or get a computed performance summary" }),
  Object.freeze({ toolId: "business.manage", domain: "business", description: "Create or manage a business/nonprofit workspace record (customers, donors, transactions, invoices, grants, tasks, appointments, documents, plan, marketing)",
    confirmationRequired: true })
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
