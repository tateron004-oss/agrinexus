"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const probe = fs.readFileSync("scripts/nexus-run-browser-capability-probes.js", "utf8");

test("production browser evidence classifies the registered login boundary before shell proof", () => {
  assert.match(probe, /function submitRegisteredStandardUserLogin/);
  assert.match(probe, /url\.pathname === "\/api\/login"/);
  assert.match(probe, /response\.request\(\)\.method\(\) === "POST"/);
  assert.match(probe, /Registered Standard User login request was not observed within 30000ms/);
  assert.match(probe, /Registered Standard User login returned HTTP \$\{response\.status\(\)\}/);
  assert.match(probe, /Login boundary: requestObserved=true, status=\$\{loginBoundary\.status\}/);
  assert.doesNotMatch(probe, /loginBoundary[^\n]*(password|cookie|authorization)/i);
});
