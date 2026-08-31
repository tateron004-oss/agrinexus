"use strict";

const { createProviderCatalog } = require("../nexus/tools/provider-catalog.js");

const ALLOWED_DOMAINS = Object.freeze(["fao.org", "cgiar.org", "cimmyt.org", "extension.org", "edu"]);

async function runGate({ env = process.env, fetchFn = globalThis.fetch } = {}) {
  const catalog = createProviderCatalog({ env, fetchFn });
  const definition = catalog.definitions.find(item => item.toolId === "knowledge.search");
  if (!definition) throw coded("agriculture_provider_not_configured", "The authoritative knowledge provider is not configured.");
  const requestId = `agriculture-provider-gate-${Date.now()}`;
  const context = { tenantId: "provider-compatibility-gate", userId: "provider-compatibility-gate",
    requestId, correlationId: requestId };
  const result = await catalog.executors["knowledge.search"]({
    input: { query: "Why do maize leaves turn yellow?", crop: "maize", requireCurrentSources: true,
      sourcePolicy: "authoritative-agriculture", domainFilterRequired: true, includeDomains: [...ALLOWED_DOMAINS] },
    context, taskId: requestId, stepId: "filtered-agriculture-search", idempotencyKey: requestId
  });
  const verification = await catalog.verify({ tool: { tool_id: "knowledge.search" }, result, context,
    taskId: requestId, stepId: "filtered-agriculture-search" });
  if (!verification.verified) throw coded("agriculture_provider_receipt_unverified", "The provider did not return a verified receipt.");
  const sources = (verification.evidence || []).map(item => item?.source || item?.url).filter(Boolean);
  if (!sources.length) throw coded("agriculture_provider_sources_missing", "The provider returned no source evidence.");
  const rejected = sources.filter(source => !allowedSource(source));
  if (rejected.length) throw coded("agriculture_provider_domain_filter_failed", "The provider returned evidence outside the agriculture domain filter.");
  return Object.freeze({ ok: true, requestId, toolId: definition.toolId, sourceCount: sources.length,
    domainFilterVerified: true, receiptVerified: true });
}

function allowedSource(value) {
  try { const host = new URL(value).hostname.toLowerCase(); return ALLOWED_DOMAINS.some(domain => domain === "edu" ? host.endsWith(".edu") : host === domain || host.endsWith(`.${domain}`)); }
  catch { return false; }
}

function coded(code, message) { const error = new Error(message); error.code = code; return error; }

if (require.main === module) runGate().then(result => {
  process.stdout.write(`${JSON.stringify(result)}\n`);
}).catch(error => {
  process.stderr.write(`${JSON.stringify({ ok: false, code: error.code || "agriculture_provider_gate_failed",
    message: "The real agriculture provider compatibility gate failed." })}\n`);
  process.exitCode = 1;
});

module.exports = Object.freeze({ ALLOWED_DOMAINS, runGate, allowedSource });
