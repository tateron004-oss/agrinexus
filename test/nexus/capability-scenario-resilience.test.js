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

test("an unverified browser capture reports the browser's own receipt and page state, not just the server's 422", () => {
  // 2026-09-19: 18 of 19 workspaces failed with the server's generic "The
  // browser did not verify a visible or audible outcome" although the same
  // capture succeeds in an ordinary browser; the receipt and page state that
  // would show why were discarded. They must be thrown before the
  // acknowledgement is posted.
  const receiptIndex = probe.indexOf("const receipt = await receiptPromise;");
  const ackIndex = probe.indexOf("probes/browser-acknowledgement", receiptIndex);
  const diagnosticIndex = probe.indexOf("browser capture did not verify the outcome", receiptIndex);
  assert.ok(receiptIndex > 0 && diagnosticIndex > receiptIndex && diagnosticIndex < ackIndex,
    "the diagnostic must be raised between the capture and the acknowledgement POST");
  const region = probe.slice(receiptIndex, ackIndex);
  for (const field of ["hostPresent", "surfacePresent", "surfaceVisible", "evidenceViewportPresent", "genesisMode", "voiceState", "recentBrowserEvents"]) {
    assert.ok(region.includes(field), `the failure must include ${field}`);
  }
});

test("the release parameter the capture needs is restored before every capture", () => {
  // Reproduced 2026-09-19: with the URL at "/?" (no nexusProductionEvidence)
  // the capture returns exact_release_evidence_required and renders nothing,
  // which is what 18 of 19 CI scenarios reported.
  const helper = probe.indexOf("async function ensureExactReleaseEvidenceUrl(page, releaseSha)");
  assert.ok(helper > 0);
  const helperBody = probe.slice(helper, probe.indexOf("async function reloadAuthenticatedShell", helper));
  assert.ok(helperBody.includes('searchParams.set("nexusProductionEvidence", sha)'));
  assert.ok(helperBody.includes("history.replaceState"), "restoring must not navigate or reload the page");
  const restore = probe.indexOf("await ensureExactReleaseEvidenceUrl(page, releaseSha);");
  const capture = probe.indexOf("const receiptPromise = page.evaluate(value => window.__NEXUS_CAPTURE_PRODUCTION_OUTCOME__(value), outcome);");
  assert.ok(restore > 0 && capture > restore, "the parameter is restored immediately before the capture runs");
});

const probeModule = require("../../scripts/nexus-run-browser-capability-probes.js");
const pendingTurn = (application, extra = {}) => ({ result: { state: "confirmation_required", taskId: "t", commandId: "c", correlationId: "k",
  outcome: { pendingStepId: "s" }, application, render: { workspace: application }, ...extra } });

test("telehealth and the other consent-gated tools are continued; communications never is", () => {
  assert.deepEqual(Object.keys(probeModule.CONFIRMATION_CONTINUATIONS).sort(), ["health", "offline-queue", "telehealth"]);
  assert.equal(probeModule.CONFIRMATION_CONTINUATIONS.telehealth, "telehealth-continuation");
  assert.equal(probeModule.pendingConfirmationContinuation("telehealth", pendingTurn("telehealth")), true);
  assert.equal(probeModule.pendingConfirmationContinuation("communications", pendingTurn("communications")), false,
    "approving communications.send would call a live SMS/email provider");
  assert.equal(probeModule.pendingConfirmationContinuation("constructor", pendingTurn("constructor")), false);
  assert.equal(probeModule.pendingConfirmationContinuation("telehealth", { result: { state: "render_required" } }), false);
});

test("communications is verified as a held gate, and only when nothing completed", () => {
  assert.equal(probeModule.confirmationGateHeld("communications", pendingTurn("communications")), true);
  assert.equal(probeModule.confirmationGateHeld("communications", pendingTurn("communications", { completed: true })), false);
  assert.equal(probeModule.confirmationGateHeld("communications", pendingTurn("communications", { render: null })), false, "the confirmation must be rendered");
  assert.equal(probeModule.confirmationGateHeld("communications", { result: { state: "render_required" } }), false);
  assert.equal(probeModule.confirmationGateHeld("telehealth", pendingTurn("telehealth")), false, "other applications still need the real continuation");
});

test("a held gate is captured in the browser but never acknowledged, and its receipts say so", () => {
  const execute = probe.slice(probe.indexOf("const execute = async phase =>"), probe.indexOf("const candidate = await execute("));
  const heldReturn = execute.indexOf("if (gateHeld) return { outcome, receipt, gateHeld: true };");
  const capture = execute.indexOf("const receipt = await receiptPromise;");
  const ack = execute.indexOf("probes/browser-acknowledgement");
  assert.ok(capture > 0 && heldReturn > capture && ack > heldReturn, "capture, then return before the acknowledgement POST");
  assert.doesNotMatch(execute.slice(0, ack), /communications-continuation/);
  const after = probe.slice(probe.indexOf("const candidate = await execute("));
  assert.match(after, /confirmationGateHeld=true actionExecuted=false/);
  assert.match(after, /confirmationGateHeld: true, actionExecuted: false/);
});

async function withPage(mode, text, fn) {
  const saved = { m: globalThis.nexusTrueExperienceMode, d: globalThis.document };
  if (mode === "missing") delete globalThis.nexusTrueExperienceMode; else globalThis.nexusTrueExperienceMode = () => mode;
  globalThis.document = { querySelector: () => ({ innerText: text }) };
  try { return await fn({ evaluate: async callback => callback() }); }
  finally { if (saved.m === undefined) delete globalThis.nexusTrueExperienceMode; else globalThis.nexusTrueExperienceMode = saved.m;
    if (saved.d === undefined) delete globalThis.document; else globalThis.document = saved.d; }
}
const HOME_TEXT = "Nexus Genesis home is audio-only. The orb is a non-interactive voice companion.";

test("a missing composer is only a warning when the app itself reports its audio-only home mode", async () => {
  assert.equal(await withPage("home", HOME_TEXT, page => probeModule.reportsAudioOnlyHome(page)), true);
  assert.equal(await withPage("workspace", HOME_TEXT, page => probeModule.reportsAudioOnlyHome(page)), false, "another mode must still fail");
  assert.equal(await withPage("home", "Something went wrong", page => probeModule.reportsAudioOnlyHome(page)), false, "home without the audio-only statement must still fail");
  assert.equal(await withPage("missing", HOME_TEXT, page => probeModule.reportsAudioOnlyHome(page)), false, "an app that reports no mode must still fail");
  assert.equal(await probeModule.reportsAudioOnlyHome({ evaluate: async () => { throw new Error("page closed"); } }), false, "an unreadable page must still fail");
});

test("both composer checks warn only for audio-only home and otherwise still fail the run", () => {
  for (const phase of ["post-login", "post-reload"]) {
    const at = probe.indexOf(`application: "typed-ingress:${phase}", warning:`);
    assert.ok(at > 0, phase);
    const region = probe.slice(at - 120, at + 700);
    assert.match(region, /reportsAudioOnlyHome\(page\)/);
    assert.ok(region.includes(`else scenarioFailures.push({ application: "typed-ingress:${phase}"`), `${phase} keeps the failure path`);
  }
  assert.match(probe, /Object\.assign\(document, \{ workspaceProbes, capabilityProbes, faultProbes, scenarioFailures, typedIngressWarnings,/,
    "warnings are preserved in the evidence file, not dropped");
});
