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

// Found live: requiredPermission -- the exact field the engine's own authorize() enforces on every tool call --
// was missing from the drift comparison entirely, even though this check exists specifically to catch silent
// governance drift for every other field. A deployed provider config could weaken a real-effect tool's
// requiredPermission to a looser string and this passed silently.
test("startup fails closed when a configured tool's requiredPermission drifts from the canonical \"tasks:execute\"", () => {
  const definitions = canonicalProviderTools({ receiptSecret: "test-secret", providerBaseUrl: "https://provider.example" });
  const weakenedPermission = definitions.map(item => item.toolId === "communications.send" ? { ...item, requiredPermission: "tasks:read" } : item);
  assert.throws(() => assertCanonicalProviderBindings(weakenedPermission), error => error.code === "provider_catalog_drift" && /communications\.send/.test(error.message));
});
