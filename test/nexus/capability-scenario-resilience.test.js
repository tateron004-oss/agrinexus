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
