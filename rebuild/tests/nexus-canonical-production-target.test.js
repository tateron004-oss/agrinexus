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
  () => productionUrlFromEnv({ NEXUS_CLEAN_BASE_URL: "https://agrinexus-platform.onrender.com" }),
  /CANONICAL_HOST_MISMATCH/
);
assert.throws(() => requireCanonicalProductionUrl("https://example.com"), /CANONICAL_HOST_MISMATCH/);

const workflowDirectory = path.resolve(".github/workflows");
const certificationFiles = fs.readdirSync(workflowDirectory)
  .filter(name => /certification|acceptance|proof|deploy/.test(name) && name.endsWith(".yml"));
const forbiddenHost = "agrinexus-platform.onrender.com";
for (const name of certificationFiles) {
  const source = fs.readFileSync(path.join(workflowDirectory, name), "utf8");
  assert.ok(!source.includes(forbiddenHost), `${name} must not target the retired production host`);
}

const integrated = fs.readFileSync(path.join(workflowDirectory, "nexus-integrated-certification.yml"), "utf8");
assert.match(integrated, /workflow_dispatch:/);
assert.match(integrated, /^\s{2}push:/m);
assert.match(integrated, /rebuild\/nexus-integrated-certification-2026-08-05/);
assert.match(integrated, /node scripts\/nexus-render-deploy\.js/);

console.log(`Nexus canonical production target: PASS (${certificationFiles.length} workflows)`);
