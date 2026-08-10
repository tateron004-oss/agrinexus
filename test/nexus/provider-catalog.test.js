"use strict";
const assert = require("node:assert/strict");
const crypto = require("crypto");
const test = require("node:test");
const { createProviderCatalog, canonicalReceipt } = require("../../nexus/tools/provider-catalog.js");

function config(overrides = {}) { return JSON.stringify([{ toolId: "knowledge.search", description: "Live source search", domain: "knowledge",
  endpoint: "https://provider.example/search", receiptSecret: "test-secret", ...overrides }]); }

test("configured HTTPS providers become authoritative governed tools", async () => {
  const registered = []; const catalog = createProviderCatalog({ env: { NEXUS_TOOL_PROVIDERS_JSON: config() }, fetchFn: async () => ({ ok: true, json: async () => ({}) }) });
  await catalog.register({ register: async row => { registered.push(row); return row; } });
  assert.equal(registered[0].toolId, "knowledge.search");
  assert.equal(registered[0].availability, "available");
  assert.equal(registered[0].verificationMethod, "signed_provider_receipt");
  assert.equal(registered[0].metadata.authoritativeState, true);
});

test("provider execution carries durable correlation and verifies only a signed matching receipt", async () => {
  let request; const receipt = { schema: "nexus.provider-receipt.v1", receiptId: "provider-1", toolId: "knowledge.search",
    tenantId: "tenant-1", taskId: "task-1", stepId: "step-1", outcome: "completed", occurredAt: "2026-08-07T12:00:00.000Z", evidence: [{ source: "https://example.org" }] };
  receipt.signature = crypto.createHmac("sha256", "test-secret").update(canonicalReceipt(receipt)).digest("hex");
  const catalog = createProviderCatalog({ env: { NEXUS_TOOL_PROVIDERS_JSON: config() }, fetchFn: async (_url, options) => { request = options; return { ok: true, json: async () => ({ receipt, result: [] }) }; } });
  const result = await catalog.executors["knowledge.search"]({ input: { query: "maize" }, context: { tenantId: "tenant-1", userId: "user-1" }, taskId: "task-1", stepId: "step-1", idempotencyKey: "once" });
  assert.equal(request.headers["idempotency-key"], "once");
  assert.equal(request.headers["x-nexus-request-signature"], crypto.createHmac("sha256", "test-secret").update(request.body).digest("hex"));
  assert.equal(JSON.parse(request.body).tenantId, "tenant-1");
  const verification = await catalog.verify({ tool: { tool_id: "knowledge.search" }, result, context: { tenantId: "tenant-1" }, taskId: "task-1", stepId: "step-1" });
  assert.equal(verification.verified, true); assert.equal(verification.evidence.length, 1);
  result.receipt.signature = "0".repeat(64);
  assert.equal((await catalog.verify({ tool: { tool_id: "knowledge.search" }, result, context: { tenantId: "tenant-1" }, taskId: "task-1", stepId: "step-1" })).verified, false);
});

test("provider configuration fails closed for insecure, unsigned, or duplicate tools", () => {
  assert.equal(createProviderCatalog({ env: {} }).definitions.length, 0);
  assert.throws(() => createProviderCatalog({ env: { NEXUS_TOOL_PROVIDERS_JSON: config({ endpoint: "http://provider.example" }) } }), /HTTPS/);
  assert.throws(() => createProviderCatalog({ env: { NEXUS_TOOL_PROVIDERS_JSON: "not-json" } }), /valid JSON/);
});
