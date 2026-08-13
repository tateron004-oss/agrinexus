"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { sanitizeErrorRecord, buildDiagnostic } = require("../../scripts/nexus-diagnose-browser-login-binding.js");

test("sanitizes browser startup errors without retaining multiline output", () => {
  assert.deepEqual(sanitizeErrorRecord({
    type: "unhandledrejection",
    name: "TypeError",
    message: "first line\nsecond line",
    source: "https://example.test/app.js",
    line: 42,
    column: 7
  }), {
    type: "unhandledrejection",
    name: "TypeError",
    message: "first line second line",
    source: "https://example.test/app.js",
    line: 42,
    column: 7
  });
});

test("records the login binding boundary separately from the login HTTP boundary", () => {
  const result = buildDiagnostic({
    releaseSha: "a".repeat(40),
    beforeClick: { url: "https://example.test/", readyState: "complete", loginSubmitListenerRegistrations: 0,
      startupErrors: [{ name: "TypeError", message: "binding stopped", line: 17 }] },
    afterClick: { url: "https://example.test/?", loginViewVisible: true, appViewVisible: false },
    loginRequest: { observed: false, status: 0 }
  });
  assert.equal(result.beforeClick.loginSubmitListenerRegistrations, 0);
  assert.equal(result.beforeClick.startupErrors[0].message, "binding stopped");
  assert.equal(result.loginRequest.observed, false);
  assert.equal(result.afterClick.url, "https://example.test/?");
});

test("production workflow runs the isolated diagnostic before the protected browser verifier", () => {
  const workflow = fs.readFileSync(path.join(__dirname, "../../.github/workflows/nexus-protected-production-deploy.yml"), "utf8");
  const diagnostic = workflow.indexOf("node scripts/nexus-diagnose-browser-login-binding.js");
  const verifier = workflow.indexOf("node scripts/nexus-run-browser-capability-probes.js");
  assert.ok(diagnostic > -1);
  assert.ok(verifier > diagnostic);
});
