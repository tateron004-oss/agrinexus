"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { CANONICAL_PROVIDER_TOOLS, canonicalProviderTools, assertCanonicalProviderBindings } =
  require("../../nexus/tools/canonical-provider-definitions.js");

test("one canonical provider catalog generates deployment and engine bindings", () => {
  const definitions = canonicalProviderTools({ receiptSecret: "test-secret", providerBaseUrl: "https://provider.example" });
  assert.equal(definitions.length, CANONICAL_PROVIDER_TOOLS.length);
  assert.equal(new Set(definitions.map(item => item.toolId)).size, definitions.length);
  assert.ok(definitions.every(item => item.endpoint === `https://provider.example/nexus/tools/${item.toolId}`));
  assert.equal(assertCanonicalProviderBindings(definitions), true);
});

test("startup fails closed when provider configuration drifts", () => {
  const definitions = canonicalProviderTools({ receiptSecret: "test-secret", providerBaseUrl: "https://provider.example" });
  assert.throws(() => assertCanonicalProviderBindings(definitions.slice(1)), error => error.code === "provider_catalog_drift");
  assert.throws(() => assertCanonicalProviderBindings([...definitions, { toolId: "legacy.extra" }]), error => error.code === "provider_catalog_drift");
});

// Found live: the drift check above only ever compared the SET of toolIds -- a deployed config with every tool
// present but a stale/edited consentScope, confirmationRequired, or riskTier for one of them passed silently,
// which would let a regulated tool run with no consent check or no confirmation gate and nothing would catch it.
test("startup fails closed when a configured tool's own governance fields drift from the canonical definition", () => {
  const definitions = canonicalProviderTools({ receiptSecret: "test-secret", providerBaseUrl: "https://provider.example" });
  const withoutConsent = definitions.map(item => item.toolId === "health.record" ? { ...item, consentScope: null } : item);
  assert.throws(() => assertCanonicalProviderBindings(withoutConsent), error => error.code === "provider_catalog_drift" && /health\.record/.test(error.message));
  const withoutConfirmation = definitions.map(item => item.toolId === "communications.send" ? { ...item, confirmationRequired: false } : item);
  assert.throws(() => assertCanonicalProviderBindings(withoutConfirmation), error => error.code === "provider_catalog_drift" && /communications\.send/.test(error.message));
  const wrongRiskTier = definitions.map(item => item.toolId === "telehealth.prepare" ? { ...item, riskTier: "low" } : item);
  assert.throws(() => assertCanonicalProviderBindings(wrongRiskTier), error => error.code === "provider_catalog_drift" && /telehealth\.prepare/.test(error.message));
});
