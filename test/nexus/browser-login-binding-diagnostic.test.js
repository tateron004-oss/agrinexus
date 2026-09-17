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

test("a stray navigation destroying the diagnostic evaluate's context does not crash the script that runs before every capability scenario", () => {
  // Confirmed live in production: this exact evaluate call failed with
  // "Execution context was destroyed, most likely because of a navigation"
  // and crashed this whole script -- since the prior test confirms this
  // script runs BEFORE nexus-run-browser-capability-probes.js in the same
  // evidence step, that crash meant every one of the 18 capability
  // scenarios (including the ones just made resilient to each other's
  // failures) never even got a chance to run at all.
  const source = fs.readFileSync(path.join(__dirname, "../../scripts/nexus-diagnose-browser-login-binding.js"), "utf8");
  const beforeClickStart = source.indexOf("const beforeClick = await page.evaluate(");
  const beforeClickEnd = source.indexOf(";", source.indexOf("}))", beforeClickStart));
  assert.notEqual(beforeClickStart, -1);
  assert.match(source.slice(beforeClickStart, beforeClickEnd), /\.catch\(\(\) => null\)/);

  const afterClickStart = source.indexOf("const afterClick = await page.evaluate(");
  const afterClickEnd = source.indexOf(";", source.indexOf("});", afterClickStart));
  assert.notEqual(afterClickStart, -1);
  assert.match(source.slice(afterClickStart, afterClickEnd), /\.catch\(\(\) => null\)/);

  // buildDiagnostic must tolerate both evaluate calls resolving to null.
  const result = buildDiagnostic({ releaseSha: "a".repeat(40), beforeClick: null, afterClick: null, loginRequest: { observed: false, status: 0 } });
  assert.equal(result.beforeClick.url, "");
  assert.equal(result.afterClick.appViewVisible, false);
});
