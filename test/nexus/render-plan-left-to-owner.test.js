"use strict";
// The live site's size is the owner's choice in the Render dashboard (it is his bill). The release controller set plan "starter" on every deploy: the owner moved the
// site to 2 GB on 26 Nov 2026 at 09:19, the next deploy (09:28) put it back on Starter (512 MB), and it ran out of memory at 09:31.
const test = require("node:test");
const assert = require("node:assert/strict");
const { reconcileServiceConfiguration } = require("../../scripts/nexus-render-release-controller.js");

test("a deploy does not change the live site's Render plan", async () => {
  const calls = [];
  const client = { request: async (path, options) => { calls.push({ path, options }); return { id: "srv-web", name: "nexus-genesis-certified" }; } };
  await reconcileServiceConfiguration(client, { id: "srv-web", name: "nexus-genesis-certified" });
  const body = calls[0].options.body;
  assert.equal(calls[0].options.method, "PATCH");
  assert.equal(Object.hasOwn(body.serviceDetails, "plan"), false, "the plan is left to the dashboard");
  assert.equal(body.serviceDetails.healthCheckPath, "/api/healthz", "the other settings are still set");
  assert.equal(body.serviceDetails.envSpecificDetails.startCommand, "npm start");
});
