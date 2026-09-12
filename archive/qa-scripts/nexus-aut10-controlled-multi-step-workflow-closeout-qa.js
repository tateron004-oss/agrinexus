const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertDoc() {
  const doc = read("docs", "NEXUS_AUT10_CONTROLLED_MULTI_STEP_WORKFLOW_CLOSEOUT.md");
  [
    "AUT1 | Complete",
    "AUT2 | Complete",
    "AUT3 | Complete",
    "AUT4 | Complete",
    "AUT5 | Complete",
    "AUT6 | Complete",
    "AUT7 | Complete",
    "AUT8 | Complete",
    "AUT9 | Complete",
    "AUT10 | Complete",
    "Active Runtime Behavior",
    "Inert and Readiness-Only Behavior",
    "No-Execution Guarantees",
    "QA Protection",
    "Browser Validation Status",
    "Next Safe Runtime Integration Candidate",
    "Session-only visible workflow progress",
    "not approval for real-world execution"
  ].forEach(term => assert(doc.includes(term), `AUT10 closeout doc must include: ${term}`));

  [
    "provider contact",
    "calls or messages",
    "job applications",
    "marketplace orders",
    "payments",
    "appointment booking",
    "transportation dispatch",
    "emergency dispatch",
    "location sharing",
    "camera or microphone activation",
    "medical diagnosis",
    "pharmacy or prescription execution",
    "backend pending real-world action writes",
    "background retry loops"
  ].forEach(term => assert(doc.includes(term), `AUT10 no-execution guarantee must include: ${term}`));
}

function assertAutLaneArtifacts() {
  [
    ["server/nexus-autonomy-workflow-goal-classifier.js", "classifyAutonomyWorkflowGoal"],
    ["server/nexus-autonomy-workflow-planner.js", "buildAutonomyWorkflowPlan"],
    ["server/nexus-autonomy-workflow-step-runner.js", "runAutonomyWorkflowStep"],
    ["server/nexus-autonomy-workflow-session-state.js", "createAutonomyWorkflowSession"],
    ["server/nexus-autonomy-workflow-artifacts.js", "createAutonomyWorkflowArtifact"],
    ["server/nexus-standard-user-agent-experience.js", "standardUserWorkflowCard"],
    ["server/nexus-autonomy-workflow-follow-up-commands.js", "applyAutonomyWorkflowFollowUpCommand"],
    ["server/nexus-autonomy-workflow-reliability-recovery.js", "buildAutonomyWorkflowRecovery"]
  ].forEach(([file, term]) => {
    const source = read(...file.split("/"));
    assert(source.includes(term), `${file} must preserve AUT lane artifact: ${term}`);
  });
}

function assertQaIndex() {
  const pkg = JSON.parse(read("package.json"));
  const suite = read("scripts", "qa-suite.js");
  const requiredScripts = [
    "scripts/nexus-aut1-workflow-goal-classifier-qa.js",
    "scripts/nexus-aut2-workflow-planner-qa.js",
    "scripts/nexus-aut3-workflow-step-runner-qa.js",
    "scripts/nexus-aut4-workflow-session-state-qa.js",
    "scripts/nexus-aut5-workflow-artifacts-qa.js",
    "scripts/nexus-aut6-standard-user-workflow-card-qa.js",
    "scripts/nexus-aut7-workflow-follow-up-commands-qa.js",
    "scripts/nexus-aut8-multi-step-workflow-browser-validation-qa.js",
    "scripts/nexus-aut9-autonomy-reliability-recovery-qa.js",
    "scripts/nexus-aut10-controlled-multi-step-workflow-closeout-qa.js"
  ];

  assert.equal(
    pkg.scripts["qa:nexus-aut10-controlled-multi-step-workflow-closeout"],
    "node scripts/nexus-aut10-controlled-multi-step-workflow-closeout-qa.js",
    "AUT10 package alias must exist."
  );

  requiredScripts.forEach(script => {
    assert(suite.includes(script), `qa-suite must include AUT lane script: ${script}`);
  });
}

function assertNoNewRuntimeActivation() {
  const app = read("public", "app.js");
  const server = read("server.js");
  [
    "NEXUS_AUT10_CONTROLLED_MULTI_STEP_WORKFLOW_CLOSEOUT",
    "nexus-aut10-controlled-multi-step-workflow-closeout",
    "Session-only visible workflow progress"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not activate AUT10 closeout artifact: ${term}`);
    assert(!server.includes(term), `server.js must not activate AUT10 closeout artifact: ${term}`);
  });
}

function runAut10ControlledMultiStepWorkflowCloseoutQa() {
  assertDoc();
  assertAutLaneArtifacts();
  assertQaIndex();
  assertNoNewRuntimeActivation();
  console.log(JSON.stringify({
    autPhasesClosed: 10,
    activeRuntimeLimitedToFlaggedPreviewCard: true,
    noExecutionGuaranteesDocumented: true,
    nextRuntimeCandidate: "session-only visible workflow progress",
    runtimeActivationAdded: false
  }, null, 2));
  console.log("[nexus-aut10-controlled-multi-step-workflow-closeout-qa] passed");
}

if (require.main === module) {
  try {
    runAut10ControlledMultiStepWorkflowCloseoutQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAut10ControlledMultiStepWorkflowCloseoutQa
});
