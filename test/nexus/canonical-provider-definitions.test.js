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
