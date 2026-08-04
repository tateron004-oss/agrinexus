"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  CANONICAL_PRODUCTION_URL,
  productionUrlFromEnv,
  requireCanonicalProductionUrl
} = require("../../scripts/nexus-canonical-production-target");

assert.equal(productionUrlFromEnv({}), CANONICAL_PRODUCTION_URL);
assert.equal(productionUrlFromEnv({ NEXUS_CANONICAL_PRODUCTION_URL: CANONICAL_PRODUCTION_URL }), CANONICAL_PRODUCTION_URL);
assert.throws(
  () => productionUrlFromEnv({ NEXUS_CLEAN_BASE_URL: "https://nexus-genesis-certified.onrender.com" }),
  /CANONICAL_HOST_MISMATCH/
);
assert.throws(() => requireCanonicalProductionUrl("https://example.com"), /CANONICAL_HOST_MISMATCH/);

const workflowDirectory = path.resolve(".github/workflows");
const certificationFiles = fs.readdirSync(workflowDirectory)
  .filter(name => /certification|acceptance|proof|deploy/.test(name) && name.endsWith(".yml"));
const forbiddenHost = "nexus-genesis-certified.onrender.com";
for (const name of certificationFiles) {
  const source = fs.readFileSync(path.join(workflowDirectory, name), "utf8");
  assert.ok(!source.includes(forbiddenHost), `${name} must not target the retired production host`);
}

console.log(`Nexus canonical production target: PASS (${certificationFiles.length} workflows)`);
