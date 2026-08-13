"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { CANONICAL_PROVIDER_TOOLS } = require("../../nexus/tools/canonical-provider-definitions.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { completionRequirements } = require("../../nexus/apps/capability-completion-contracts.js");
const { completeImageSearchPlan } = require("../../nexus/brain/planner.js");

test("images are owned by the authoritative runtime", () => {
  assert.ok(CANONICAL_PROVIDER_TOOLS.some(tool => tool.toolId === "images.search"));
  const images = defaultApplicationManifests().find(app => app.applicationId === "images");
  assert.deepEqual(images.capabilities, ["images.search"]);
  assert.deepEqual(completionRequirements("images"), ["query", "images", "sources"]);
  const plan = completeImageSearchPlan("Show me images of healthy maize leaves", {
    tools: [{ toolId: "images.search" }], applications: [{ applicationId: "images" }]
  });
  assert.equal(plan.application, "images");
  assert.equal(plan.steps[0].toolId, "images.search");
});

test("production browser certification uses visible login and visible command ingress", () => {
  const probe = fs.readFileSync("scripts/nexus-run-browser-capability-probes.js", "utf8");
  assert.match(probe, /getByLabel\("Email"/);
  assert.match(probe, /getByRole\("button", \{ name: "Enter platform"/);
  assert.match(probe, /getByLabel\("Workflow details for Nexus"/);
  assert.match(probe, /getByRole\("button", \{ name: "Send to Nexus"/);
  assert.match(probe, /visibleAuthenticatedLogin: true/);
  assert.doesNotMatch(probe, /context\(\)\.request\.post\(\`\$\{base\}\/api\/login/);
});
