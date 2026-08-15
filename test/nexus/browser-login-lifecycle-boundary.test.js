"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const probe = fs.readFileSync("scripts/nexus-run-browser-capability-probes.js", "utf8");
const { waitForCurrentLoginSubmitListener } = require("../../scripts/nexus-run-browser-capability-probes.js");

test("production browser evidence classifies the registered login boundary before shell proof", () => {
  assert.match(probe, /function submitRegisteredStandardUserLogin/);
  assert.match(probe, /await waitForCurrentLoginSubmitListener\(page\)/);
  assert.ok(probe.indexOf("await waitForCurrentLoginSubmitListener(page)") <
    probe.indexOf("const loginResponsePromise = page.waitForResponse"));
  assert.match(probe, /url\.pathname === "\/api\/login"/);
  assert.match(probe, /response\.request\(\)\.method\(\) === "POST"/);
  assert.match(probe, /Registered Standard User login request was not observed within 30000ms/);
  assert.match(probe, /Registered Standard User login returned HTTP \$\{response\.status\(\)\}/);
  assert.match(probe, /Login boundary: requestObserved=true, status=\$\{loginBoundary\.status\}/);
  assert.doesNotMatch(probe, /loginBoundary[^\n]*(password|cookie|authorization)/i);
});

test("login click waits for the current form's registered submit listener", async () => {
  let waitPredicate;
  let waitArgument;
  let waitOptions;
  const page = {
    waitForFunction: async (predicate, argument, options) => {
      waitPredicate = predicate;
      waitArgument = argument;
      waitOptions = options;
    },
    evaluate: async () => ({
      loginSubmitListenerRegistrations: 1,
      currentFormWasRegisteredTarget: true
    })
  };
  assert.deepEqual(await waitForCurrentLoginSubmitListener(page, 1234), {
    loginSubmitListenerRegistrations: 1,
    currentFormWasRegisteredTarget: true
  });
  assert.equal(typeof waitPredicate, "function");
  assert.equal(waitArgument, null);
  assert.deepEqual(waitOptions, { timeout: 1234 });
  assert.match(String(waitPredicate), /loginSubmitListenerRegistrations > 0/);
  assert.match(String(waitPredicate), /form === context\.registeredLoginForm/);
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
  assert.match(probe, /describeLogin\?\.\("before-click"\)/);
  assert.match(probe, /describeLogin\?\.\("after-email-fill"\)/);
  assert.match(probe, /describeLogin\?\.\("after-password-fill"\)/);
  assert.match(probe, /describeLogin\?\.\("after-click"\)/);
  assert.match(probe, /describeLogin\?\.\("after-timeout"\)/);
  assert.match(probe, /formIdentity/);
  assert.match(probe, /buttonIdentity/);
  assert.match(probe, /registeredFormIdentity/);
  assert.match(probe, /clickedButtonIdentity/);
  assert.match(probe, /clickedButtonIsCurrent/);
  assert.match(probe, /clickedButtonFormIdentity/);
  assert.match(probe, /domTransitions/);
  assert.match(probe, /passwordLength/);
  assert.doesNotMatch(probe, /lifecycle\.(requests|responses|navigations)[^\n]*(postData|headers|cookies)/i);
});

test("production browser evidence captures sanitized live-knowledge renderer boundaries", () => {
  assert.match(probe, /installLiveKnowledgeLifecycleDiagnostics\(page, base\)/);
  assert.match(probe, /\/api\/nexus\/runtime\/behavior\/turn/);
  assert.match(probe, /\/api\/nexus\/runtime\/behavior\/acknowledgements/);
  assert.match(probe, /renderPresent/);
  assert.match(probe, /acknowledgementRequest/);
  assert.match(probe, /authoritativeOutcome/);
  assert.match(probe, /relevantStatus/);
  assert.match(probe, /nexus-live-knowledge-browser-lifecycle\.json/);
  assert.doesNotMatch(probe, /liveKnowledgeLifecycle[^\n]*(headers|cookies|authorization|responseText)/i);
});
