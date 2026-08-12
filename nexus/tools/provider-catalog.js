"use strict";

const crypto = require("crypto");
const { assertCanonicalProviderBindings } = require("./canonical-provider-definitions.js");

const PROVIDER_ENV = "NEXUS_TOOL_PROVIDERS_JSON";

function createProviderCatalog({ env = process.env, fetchFn = globalThis.fetch } = {}) {
  const definitions = parseDefinitions(env[PROVIDER_ENV]);
  if (env.NODE_ENV === "production" || env.NEXUS_ENFORCE_CANONICAL_PROVIDER_CATALOG === "true") {
    assertCanonicalProviderBindings(definitions);
  }
  const executors = {};
  for (const definition of definitions) executors[definition.toolId] = createExecutor(definition, { fetchFn });
  return Object.freeze({
    definitions,
    executors,
    async register(registry) {
      const rows = [];
      for (const definition of definitions) {
        try {
          rows.push(await registry.register(toolRecord(definition)));
        } catch (error) {
          error.stage = `provider-registration-${String(definition.toolId).replace(/[^a-z0-9-]/gi, "-").slice(0, 48)}`;
          error.code = error.code || "provider_registration_failed";
          throw error;
        }
      }
      return rows;
    },
    async verify({ tool, result, context, taskId, stepId }) {
      const definition = definitions.find(item => item.toolId === tool.tool_id);
      if (!definition) return { verified: false, method: "provider_not_configured" };
      return verifyReceipt({ definition, result, context, taskId, stepId });
    }
  });
}

function parseDefinitions(raw) {
  if (!raw) return [];
  let value;
  try { value = JSON.parse(raw); } catch { throw coded("provider_config_invalid", `${PROVIDER_ENV} must be valid JSON.`); }
  if (!Array.isArray(value)) throw coded("provider_config_invalid", `${PROVIDER_ENV} must be an array.`);
  const ids = new Set();
  return value.map((item, index) => {
    for (const field of ["toolId", "description", "domain", "endpoint", "receiptSecret"]) {
      if (!String(item?.[field] || "").trim()) throw coded("provider_config_invalid", `Provider ${index + 1} requires ${field}.`);
    }
    if (!/^https:\/\//i.test(item.endpoint)) throw coded("provider_config_invalid", `Provider ${item.toolId} endpoint must use HTTPS.`);
    if (ids.has(item.toolId)) throw coded("provider_config_invalid", `Duplicate provider tool ${item.toolId}.`);
    ids.add(item.toolId);
    return Object.freeze({ ...item, timeoutMs: Math.min(Math.max(Number(item.timeoutMs || 30000), 100), 900000),
      riskTier: item.riskTier || "low", maxAttempts: Number(item.maxAttempts || 3),
      confirmationRequired: Boolean(item.confirmationRequired), receiptSecret: String(item.receiptSecret) });
  });
}

function toolRecord(item) {
  return { toolId: item.toolId, description: item.description, domain: item.domain,
    implementation: `https-provider:${new URL(item.endpoint).host}`, availability: "available",
    requiredPermission: item.requiredPermission || "tasks:execute", requiredRole: item.requiredRole || null,
    riskTier: item.riskTier, confirmationRequired: item.confirmationRequired,
    consentScope: item.consentScope || null, timeoutMs: item.timeoutMs, maxAttempts: item.maxAttempts,
    verificationMethod: "signed_provider_receipt", dataClassification: item.dataClassification || "internal",
    costLimitCents: item.costLimitCents || null, metadata: { authoritativeState: true, provider: item.provider || new URL(item.endpoint).host } };
}

function createExecutor(definition, { fetchFn }) {
  if (typeof fetchFn !== "function") throw coded("provider_fetch_unavailable", "A provider HTTP client is required.");
  return async ({ input, context, taskId, stepId, idempotencyKey }) => {
    const request = { schema: "nexus.provider-request.v1", toolId: definition.toolId,
      tenantId: context.tenantId, actorId: context.userId, taskId, stepId, idempotencyKey, input };
    const requestBody = JSON.stringify(request); const requestSignature = crypto.createHmac("sha256", definition.receiptSecret).update(requestBody).digest("hex");
    let lastError;
    for (let attempt = 1; attempt <= definition.maxAttempts; attempt += 1) {
      let response;
      try {
        response = await fetchFn(definition.endpoint, { method: "POST", headers: {
          "content-type": "application/json", "accept": "application/json", "idempotency-key": idempotencyKey,
          "x-nexus-tenant-id": context.tenantId, "x-nexus-task-id": taskId, "x-nexus-step-id": stepId,
          "x-nexus-request-signature": requestSignature
        }, body: requestBody });
      } catch (error) {
        lastError = coded(error.code || "provider_request_failed", "Provider request could not be completed.");
        if (attempt === definition.maxAttempts) throw providerFailure(lastError, definition.toolId);
        await retryDelay(attempt);
        continue;
      }
      const body = await response.json().catch(() => ({}));
      if (response.ok) return body;
      lastError = coded(body.code || "provider_request_failed", body.message || `Provider returned HTTP ${response.status}.`);
      if (![408, 429].includes(response.status) && response.status < 500) throw providerFailure(lastError, definition.toolId);
      if (attempt === definition.maxAttempts) throw providerFailure(lastError, definition.toolId);
      await retryDelay(attempt);
    }
    throw providerFailure(lastError || coded("provider_request_failed", "Provider request could not be completed."), definition.toolId);
  };
}

function providerFailure(error, toolId) { error.stage = `provider-execution-${String(toolId).replace(/[^a-z0-9-]/gi, "-").slice(0, 48)}`; return error; }

function retryDelay(attempt) {
  return new Promise(resolve => setTimeout(resolve, Math.min(250 * (2 ** (attempt - 1)), 1000)));
}

function verifyReceipt({ definition, result, context, taskId, stepId }) {
  const receipt = result?.receipt;
  if (!receipt || receipt.schema !== "nexus.provider-receipt.v1" || receipt.toolId !== definition.toolId ||
      receipt.tenantId !== context.tenantId || receipt.taskId !== taskId || receipt.stepId !== stepId ||
      receipt.outcome !== "completed" || !receipt.receiptId || !receipt.occurredAt) {
    return { verified: false, method: "signed_provider_receipt", reason: "receipt_contract_mismatch" };
  }
  const payload = canonicalReceipt(receipt);
  const expected = crypto.createHmac("sha256", definition.receiptSecret).update(payload).digest("hex");
  const supplied = String(receipt.signature || "");
  const verified = supplied.length === expected.length && crypto.timingSafeEqual(Buffer.from(supplied), Buffer.from(expected));
  return { verified, method: "signed_provider_receipt", providerReceiptId: receipt.receiptId,
    evidence: verified ? receipt.evidence || [] : [], reason: verified ? null : "signature_invalid" };
}

function canonicalReceipt(receipt) {
  return [receipt.schema, receipt.receiptId, receipt.toolId, receipt.tenantId, receipt.taskId,
    receipt.stepId, receipt.outcome, receipt.occurredAt, JSON.stringify(receipt.evidence || [])].join("\n");
}

function coded(code, message) { const error = new Error(message); error.code = code; return error; }

module.exports = Object.freeze({ PROVIDER_ENV, createProviderCatalog, parseDefinitions, canonicalReceipt });
