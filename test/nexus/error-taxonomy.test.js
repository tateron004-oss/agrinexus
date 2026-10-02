"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { classifyRuntimeError } = require("../../nexus/runtime/error-taxonomy.js");

test("runtime failures retain precise categories instead of a generic unavailable message", () => {
  assert.equal(classifyRuntimeError({ code: "tenant_membership_required" }).category, "identity_failed");
  assert.equal(classifyRuntimeError({ message: "Postgres connection refused" }).category, "database_unavailable");
  assert.equal(classifyRuntimeError({ code: "planning_provider_unavailable" }).category, "planning_failed");
  assert.equal(classifyRuntimeError({ code: "render_timeout" }).category, "render_timeout");
});

// Found live (fresh-module audit): a render-timeout message that also names the failing tool (a realistic
// phrasing, since a render timeout is reported per-tool) used to match execution_failed's broad
// tool/executor/receipt pattern before ever reaching render_timeout's own, more specific pattern --
// reporting a genuinely transient, retryable failure as non-retryable.
test("a render-timeout message that also names the tool is still classified as the retryable render_timeout category, not execution_failed", () => {
  const result = classifyRuntimeError({ message: "Tool workspace.render_receipt render timeout after 30s" });
  assert.equal(result.category, "render_timeout");
  assert.equal(result.retryable, true);
});
