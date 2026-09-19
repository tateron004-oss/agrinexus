"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const probe = fs.readFileSync(path.join(__dirname, "../../scripts/nexus-run-browser-capability-probes.js"), "utf8");

test("one capability scenario's failure does not stop later scenarios from getting their own cutover attempt", () => {
  // Confirmed live in production: this loop used to let one scenario's
  // failure (most often "maps", which has had several distinct flaky
  // failure modes) throw straight out of the whole run, skipping every
  // scenario listed after it in SCENARIOS -- and since the per-scenario
  // cutover POST only ever fires for a scenario the loop actually reaches,
  // every later capability (including "lists", last in SCENARIOS) silently
  // never got its own chance to cut over, on every affected deploy,
  // regardless of whether its own code was correct.
  const runScenarioStart = probe.indexOf("async function runScenario(application, text)");
  assert.notEqual(runScenarioStart, -1, "runScenario must exist as its own function so the loop can catch its failures individually");

  const loopStart = probe.indexOf("for (const [application, text] of Object.entries(SCENARIOS))");
  assert.notEqual(loopStart, -1);
  const loopRegionEnd = probe.indexOf("const voiceText = SCENARIOS", loopStart);
  const loopBody = probe.slice(loopStart, loopRegionEnd);

  assert.match(loopBody, /try\s*\{\s*await runScenario\(application, text\);\s*\}\s*catch \(error\) \{/,
    "each scenario must be individually try/caught so one failure cannot prevent later scenarios from running");
  const catchStart = loopBody.indexOf("} catch (error) {");
  const catchBody = loopBody.slice(catchStart, loopBody.indexOf("}", catchStart + 1));
  assert.doesNotMatch(catchBody, /\bthrow\b/, "the catch block must not re-throw inside the loop -- that would still stop later scenarios");
  assert.doesNotMatch(catchBody, /\breturn\b/, "the catch block must not return -- that would still stop later scenarios");
  assert.match(catchBody, /scenarioFailures\.push\(\{ application, error:/);

  const afterLoop = probe.slice(loopRegionEnd);
  assert.match(afterLoop, /if \(scenarioFailures\.length\) \{/,
    "the overall step must still fail when any scenario failed, so a genuinely broken capability keeps blocking the release");
  assert.ok(afterLoop.indexOf("fs.writeFileSync(probeFile") < afterLoop.indexOf("if (scenarioFailures.length)"),
    "evidence for scenarios that DID succeed must still be written before the step fails for the ones that didn't");
});

test("the earlier visible-ingress loop is also resilient, not just the cutover loop", () => {
  // Confirmed live in production: this separate, EARLIER loop runs before
  // the SCENARIOS/runScenario loop and had the exact same bug -- no
  // per-item recovery, so one flaky application (again, "maps") threw
  // straight out of the whole run before the cutover loop -- and every
  // capability cutover it performs, including "lists" -- ever started.
  const ingressLoopStart = probe.indexOf('for (const application of ["live-knowledge", "maps", "workforce", "documents", "images"])');
  assert.notEqual(ingressLoopStart, -1);
  const ingressLoopEnd = probe.indexOf("await reloadAuthenticatedShell(page);", ingressLoopStart);
  const ingressLoopBody = probe.slice(ingressLoopStart, ingressLoopEnd);
  assert.match(ingressLoopBody, /try\s*\{\s*visibleIngress\.push\(await submitVisibleCommand\(page, SCENARIOS\[application\], application\)\);\s*\}\s*catch \(error\) \{/,
    "each visible-ingress application must be individually try/caught so one failure cannot prevent the cutover loop from running at all");
  const catchStart = ingressLoopBody.indexOf("} catch (error) {");
  const catchBody = ingressLoopBody.slice(catchStart, ingressLoopBody.indexOf("}", catchStart + 1));
  assert.doesNotMatch(catchBody, /\bthrow\b/);
  assert.doesNotMatch(catchBody, /\breturn\b/);
  assert.match(catchBody, /scenarioFailures\.push\(/);
});

test("the post-reload typed-ingress readiness check gets a second reload-and-wait attempt before failing", () => {
  // Confirmed live in production: reloadAuthenticatedShell's reload
  // navigation can settle ("networkidle") before the client app's own
  // async boot/render work finishes, so the typed-entry/microphone UI
  // requireVisibleAuthoritativeTypedIngress waits for is not always ready
  // on the very next check. A single reload attempt was not a reliable
  // enough signal for that separate readiness, and this failure sat before
  // the SCENARIOS loop, so it blocked every capability cutover exactly like
  // the other loops fixed alongside it.
  const start = probe.indexOf("await reloadAuthenticatedShell(page);\n  //");
  assert.notEqual(start, -1, "the post-reload retry comment must immediately follow the first reload call");
  const end = probe.indexOf("const capabilityProbes = [];", start);
  const region = probe.slice(start, end);
  assert.match(region, /try\s*\{\s*await requireVisibleAuthoritativeTypedIngress\(page\);\s*\}\s*catch \(error\) \{/);
  assert.match(region, /catch \(error\) \{\s*await reloadAuthenticatedShell\(page\);\s*try \{\s*await requireVisibleAuthoritativeTypedIngress\(page\);\s*\} catch \(retryError\) \{/,
    "the second attempt must be caught, not thrown out of run()");
  assert.match(region, /scenarioFailures\.push\(\{ application: "typed-ingress:post-reload"/);
  assert.doesNotMatch(region, /catch \(retryError\) \{[^}]*\bthrow\b/, "a missing composer must never abort the run");
});

test("the post-login typed-ingress readiness check also gets a reload-and-retry attempt before failing", () => {
  // Confirmed live in production: the FIRST occurrence of this same check,
  // right after login, never got the reload-and-retry protection the LATER
  // occurrence (above) received in PR #441 -- even though it hits the exact
  // same cold-start render race (/api/state alone is a ~1.6MB payload).
  // Deploys kept showing a red X on this specific check because only one of
  // its two call sites was ever hardened.
  const start = probe.indexOf("await waitForAuthenticatedStandardUserShell(page, base);\n    // The same reload-and-retry protection");
  assert.notEqual(start, -1, "the post-login retry comment must immediately follow the first waitForAuthenticatedStandardUserShell call");
  const end = probe.indexOf("const diagnosticError = loginBoundary", start);
  const region = probe.slice(start, end);
  assert.match(region, /try\s*\{\s*await requireVisibleAuthoritativeTypedIngress\(page\);\s*\}\s*catch \(error\) \{/);
  assert.match(region, /catch \(error\) \{\s*await reloadAuthenticatedShell\(page\);\s*await waitForAuthenticatedStandardUserShell\(page, base\);\s*try \{\s*await requireVisibleAuthoritativeTypedIngress\(page\);\s*\} catch \(retryError\) \{/);
  assert.match(region, /scenarioFailures\.push\(\{ application: "typed-ingress:post-login"/);
  assert.doesNotMatch(region, /catch \(retryError\) \{[^}]*\bthrow\b/, "a missing composer must never abort the run");
});

test("a missing typed-entry composer is recorded but never blocks workspace activation", () => {
  // Confirmed from the 2026-09-18 CI logs: after a SUCCESSFUL login the app
  // was signed in but the composer was absent, and the run aborted before the
  // SCENARIOS loop -- so business/lists/images never attempted their cutover.
  // Activation (runScenario) needs only a signed-in page and the capture hook.
  const failureCallIndex = probe.indexOf('scenarioFailures.push({ application: "typed-ingress:post-login"');
  const loginCatchIndex = probe.indexOf("const diagnosticError = loginBoundary");
  assert.ok(failureCallIndex > 0 && loginCatchIndex > failureCallIndex, "the composer failure is recorded inside the login try, ahead of the fatal login catch");
  assert.match(probe, /let typedIngressAvailable = true;/);
  assert.match(probe, /if \(typedIngressAvailable\) for \(const application of \["live-knowledge"/,
    "composer-dependent visible-ingress commands are skipped, not timed out one by one, when it is unavailable");
  const hookWait = probe.indexOf('window.__NEXUS_CAPTURE_PRODUCTION_OUTCOME__ === "function"', probe.indexOf("typed-ingress:post-reload"));
  const scenarioLoop = probe.indexOf("for (const [application, text] of Object.entries(SCENARIOS))");
  assert.ok(hookWait > 0 && hookWait < scenarioLoop, "the capture hook the activation loop needs is awaited explicitly before it");
  // The step must still end red: the recorded failure reaches the final throw.
  assert.match(probe.slice(scenarioLoop), /if \(scenarioFailures\.length\) \{/);
});

test("the composer diagnostic records why the composer is absent", () => {
  for (const field of ["composerContainerPresent", "trueExperienceMode", "experienceMode", "appViewText", "textareaCount"]) {
    assert.ok(probe.includes(field), `captureTypedIngressDiagnostic must record ${field}`);
  }
});
