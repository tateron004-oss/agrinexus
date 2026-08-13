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

test("production browser evidence captures same-context login binding and navigation diagnostics", () => {
  assert.match(probe, /installLoginLifecycleDiagnostics\(page, base\)/);
  assert.match(probe, /loginSubmitListenerRegistrations/);
  assert.match(probe, /currentFormWasRegisteredTarget/);
  assert.match(probe, /defaultPreventedAtCapture/);
  assert.match(probe, /defaultPreventedAfterDispatch/);
  assert.match(probe, /window\.addEventListener\("error"/);
  assert.match(probe, /window\.addEventListener\("unhandledrejection"/);
  assert.match(probe, /page\.on\("request"/);
  assert.match(probe, /page\.on\("response"/);
  assert.match(probe, /page\.on\("framenavigated"/);
  assert.match(probe, /nexus-browser-login-lifecycle-context\.json/);
  assert.doesNotMatch(probe, /lifecycle\.(requests|responses|navigations)[^\n]*(postData|headers|cookies)/i);
});
