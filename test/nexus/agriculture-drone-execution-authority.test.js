"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const runtime = require("../../public/nexus-agriculture-collaboration-runtime.js");

// Confirmed: attemptExecution() never re-checked prepareAction()'s own
// droneExecutionBlocked flag, and its final gate (`registry.executionAuthority`)
// was `providers.some(item => item.executionCurrentlyEnabled)` -- true if ANY
// provider category anywhere is execution-enabled, not the requested action's
// own category. A caller passing confirmed:true + expertReviewed:true (but no
// humanPilotApproved) for a drone action, with an unrelated provider (e.g.
// marketplace) enabled, got noExecutionAuthorized:false -- exactly the case
// the code's own comments say must require "licensed/human pilot approval."

const marketplaceOnlyEnv = Object.freeze({
  NEXUS_AGRICULTURE_ENABLED: "true",
  NEXUS_AGRICULTURE_LIVE_SOURCES_ENABLED: "true",
  NEXUS_AGRICULTURE_MARKETPLACE_ENABLED: "true",
  AGRITRADE_PROVIDER_API_KEY: "test-key"
});

test("a drone action without humanPilotApproved is blocked, even when confirmed, expert-reviewed, and an unrelated provider (marketplace) is fully enabled", () => {
  const result = runtime.attemptExecution("Prepare a drone field observation and launch drone", {
    confirmed: true, expertReviewed: true, env: marketplaceOnlyEnv
  });
  assert.equal(result.status, "blocked_drone_execution");
  assert.equal(result.noExecutionAuthorized, true);
});

test("execution authority is scoped to the action's own provider category -- an unrelated enabled provider does not unlock a different lane", () => {
  const result = runtime.attemptExecution("Prepare a drone field observation and launch drone", {
    confirmed: true, expertReviewed: true, humanPilotApproved: true,
    env: { ...marketplaceOnlyEnv, NEXUS_AGRICULTURE_DRONE_ENABLED: "true" } // drone gate satisfied, but no drone provider configured
  });
  assert.equal(result.status, "blocked_execution_disabled");
  assert.equal(result.noExecutionAuthorized, true);
});

test("a fully configured and approved drone action still reaches the final ready state, unaffected by the fix", () => {
  const result = runtime.attemptExecution("Prepare a drone field observation and launch drone", {
    confirmed: true, expertReviewed: true, humanPilotApproved: true,
    env: { ...marketplaceOnlyEnv, NEXUS_AGRICULTURE_DRONE_ENABLED: "true", DRONEDEPLOY_API_KEY: "test-key" }
  });
  assert.equal(result.status, "ready_for_confirmed_provider_execution_but_not_sent_by_runtime");
  assert.equal(result.noExecutionAuthorized, false);
});

test("a genuinely enabled marketplace action is unaffected by the scoping fix", () => {
  const result = runtime.attemptExecution("Create a marketplace listing", { confirmed: true, env: marketplaceOnlyEnv });
  assert.equal(result.status, "ready_for_confirmed_provider_execution_but_not_sent_by_runtime");
  assert.equal(result.noExecutionAuthorized, false);
});

test("with no execution flags enabled at all, both drone and marketplace actions remain blocked as before", () => {
  const drone = runtime.attemptExecution("Prepare a drone field observation and launch drone", { confirmed: true, expertReviewed: true });
  assert.equal(drone.noExecutionAuthorized, true);
  const market = runtime.attemptExecution("Create a marketplace listing", { confirmed: true });
  assert.equal(market.noExecutionAuthorized, true);
});
