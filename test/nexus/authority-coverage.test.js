"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { ApplicationRegistry } = require("../../nexus/apps/registry.js");
const { CapabilityAdapterRegistry } = require("../../nexus/tools/capability-adapter-registry.js");
const { OutcomeVerifierRegistry } = require("../../nexus/verification/verifier-registry.js");
const { AuthorityCoverage } = require("../../nexus/runtime/authority-coverage.js");

test("coverage names every missing ownership layer per application", async () => {
  const applications = new ApplicationRegistry([{ applicationId: "maps", title: "Maps", description: "Maps",
    capabilities: ["maps.view", "maps.route"] }]);
  const tools = { list: async () => [{ tool_id: "maps.view", availability: "available" }] };
  const adapters = new CapabilityAdapterRegistry([{ toolId: "maps.view", implementation: "map", execute: async () => ({}) }]);
  const verifiers = new OutcomeVerifierRegistry([{ toolId: "maps.view", method: "visible_map", verify: async () => ({ verified: true }) }]);
  const coverage = new AuthorityCoverage({ applications, tools, adapters, verifiers });
  const report = await coverage.report();
  assert.equal(report.complete, false);
  assert.equal(report.applications[0].capabilities[0].authoritative, true);
  assert.deepEqual(report.applications[0].gaps[0], { toolId: "maps.route", toolAvailable: false, adapterOwned: false, verifierOwned: false, authoritative: false });
  await assert.rejects(() => coverage.requireApplication("maps"), error => error.code === "application_authority_incomplete");
});
