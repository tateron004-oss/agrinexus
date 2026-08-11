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
