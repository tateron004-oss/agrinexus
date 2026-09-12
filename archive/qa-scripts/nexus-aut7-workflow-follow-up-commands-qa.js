const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const planner = require("../server/nexus-autonomy-workflow-planner.js");
const session = require("../server/nexus-autonomy-workflow-session-state.js");
const followUps = require("../server/nexus-autonomy-workflow-follow-up-commands.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertSafeResult(result, label) {
  assert.equal(followUps.isSafeAutonomyWorkflowFollowUpResult(result), true, `${label} must be a safe follow-up result.`);
  assert.equal(result.executionAuthority, false, `${label} must not carry execution authority.`);
  assert.equal(result.noExecutionAuthorized, true, `${label} must not authorize execution.`);
  assert.equal(result.noProviderContactAuthorized, true, `${label} must not authorize provider contact.`);
  assert.equal(result.noProviderHandoff, true, `${label} must not authorize provider handoff.`);
  assert.equal(result.noPermissionPromptAuthorized, true, `${label} must not authorize permissions.`);
  assert.equal(result.noLocationPermissionRequested, true, `${label} must not request location.`);
  assert.equal(result.noBackendActionWritePerformed, true, `${label} must not write backend actions.`);
  assert.equal(result.noNavigationAuthorized, true, `${label} must not authorize navigation.`);
  assert(!/"executionAuthority":true|"providerHandoff":true|"paymentAllowed":true|"bookingAllowed":true|"sendAllowed":true/i.test(JSON.stringify(result)), `${label} must not include executable metadata.`);
}

function activeState() {
  const plan = planner.buildAutonomyWorkflowPlan("Help me get a farm job near Stockton.");
  return session.createAutonomyWorkflowSession(plan, { now: 1000 });
}

function assertSupportedNaturalCommands() {
  const state = activeState();
  [
    ["next", "continued"],
    ["continue", "continued"],
    ["show me the checklist", "artifact_requested"],
    ["compare them", "artifact_requested"],
    ["use the second one", "selected_item"],
    ["make it simpler", "simplified"],
    ["what should I do next?", "continued"],
    ["draft questions", "artifact_requested"],
    ["start over", "restarted"],
    ["cancel this", "cancelled"]
  ].forEach(([command, status], index) => {
    const result = followUps.applyAutonomyWorkflowFollowUpCommand(state, command, { now: 2000 + index });
    assertSafeResult(result, command);
    assert.equal(result.status, status, `${command} status mismatch.`);
    assert.equal(result.classification.hasActiveWorkflow, true, `${command} must use active workflow context.`);
  });
}

function assertMissingContextSafe() {
  [
    "next",
    "show me the checklist",
    "compare them",
    "draft questions"
  ].forEach(command => {
    const result = followUps.applyAutonomyWorkflowFollowUpCommand(null, command, { now: 5000 });
    assertSafeResult(result, `missing context ${command}`);
    assert.equal(result.status, "missing_context", `${command} without context must ask for a supported workflow first.`);
    assert.equal(result.classification.allowed, false, `${command} without context must not be allowed.`);
  });
}

function assertBlockedNaturalCommands() {
  const state = activeState();
  [
    ["apply for me", "apply_submit"],
    ["send the message", "send_message"],
    ["call them", "call_provider"],
    ["book it", "book_schedule"],
    ["buy it", "buy_pay_purchase"],
    ["pay for it", "buy_pay_purchase"],
    ["dispatch someone", "dispatch_help"],
    ["use my location", "send_location"]
  ].forEach(([command, blockedAction]) => {
    const result = followUps.applyAutonomyWorkflowFollowUpCommand(state, command, { now: 7000 });
    assertSafeResult(result, command);
    assert.equal(result.status, "blocked", `${command} must be blocked.`);
    assert.equal(result.blocked, true, `${command} must be downgraded.`);
    assert.equal(result.classification.blockedAction, blockedAction, `${command} blocked action mismatch.`);
    assert(result.response.includes("cannot"), `${command} must explain no execution.`);
  });
}

function assertStaticSafety() {
  const moduleSource = read("server", "nexus-autonomy-workflow-follow-up-commands.js");
  const appSource = read("public", "app.js");
  const indexSource = read("public", "index.html");
  const serverSource = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const suite = read("scripts", "qa-suite.js");

  [
    "next",
    "continue",
    "show me the checklist",
    "compare them",
    "use the second one",
    "make it simpler",
    "what should I do next?",
    "draft questions",
    "start over",
    "cancel this",
    "apply for me",
    "send the message",
    "call them",
    "book it",
    "buy it",
    "pay for it",
    "dispatch someone",
    "use my location"
  ].forEach(term => assert(moduleSource.includes(term), `AUT7 module must cover natural command: ${term}`));

  [
    "fetch(",
    "requestWithTimeout(",
    "http://",
    "https://",
    "localStorage",
    "sessionStorage",
    "navigator.geolocation",
    "getCurrentPosition",
    "window.open",
    "location.href",
    "child_process",
    "fs.writeFile",
    "writeFileSync",
    "createOutboundCallWorkflow",
    "openWorkflowModal"
  ].forEach(term => assert(!moduleSource.includes(term), `AUT7 follow-up module must not introduce unsafe behavior: ${term}`));

  [
    "nexus-autonomy-workflow-follow-up-commands.js",
    "applyAutonomyWorkflowFollowUpCommand",
    "classifyAutonomyWorkflowFollowUpCommand"
  ].forEach(term => {
    assert(!appSource.includes(term), `AUT7 must not wire follow-up commands into public/app.js yet: ${term}`);
    assert(!indexSource.includes(term), `AUT7 must not load follow-up commands in index.html: ${term}`);
    assert(!serverSource.includes(term), `AUT7 must not add route behavior in server.js: ${term}`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-aut7-workflow-follow-up-commands"],
    "node scripts/nexus-aut7-workflow-follow-up-commands-qa.js",
    "AUT7 package alias must exist."
  );
  assert(suite.includes("scripts/nexus-aut7-workflow-follow-up-commands-qa.js"), "AUT7 QA must be wired into local-safe suites.");
}

function runAut7WorkflowFollowUpCommandsQa() {
  assertSupportedNaturalCommands();
  assertMissingContextSafe();
  assertBlockedNaturalCommands();
  assertStaticSafety();
  console.log(JSON.stringify({
    naturalCommandsRouteCorrectly: true,
    activeWorkflowContextUsed: true,
    missingContextHandledSafely: true,
    blockedCommandsDowngraded: true,
    noExecutionAuthority: true,
    runtimeWiring: "none"
  }, null, 2));
  console.log("[nexus-aut7-workflow-follow-up-commands-qa] passed");
}

if (require.main === module) {
  try {
    runAut7WorkflowFollowUpCommandsQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAut7WorkflowFollowUpCommandsQa
});
