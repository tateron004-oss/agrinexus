const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const css = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

[
  "learningProfiles",
  "trainingRecords",
  "learningPlans",
  "skillAssessments",
  "lmsHandoffRecords",
  "certificationPathways",
  "applicantProfiles",
  "resumePackets",
  "employerProfiles",
  "jobOpportunities",
  "jobApplications",
  "interviewFollowUps",
  "hiringPipelineRecords",
  "droneProviders",
  "droneEquipment",
  "droneMissionRequests",
  "droneMissionEvents",
  "droneImageryReports",
  "noFakeTrainingEnrollment",
  "noFakeJobPlacement",
  "noFakeDroneDispatch"
].forEach(token => includes(server, token, `server remaining operations ${token}`));

[
  "create_learning_profile",
  "prepare_training_referral",
  "prepare_lms_handoff",
  "create_learning_plan",
  "create_skill_assessment_packet",
  "track_training_interest",
  "track_enrollment_status",
  "archive_learning_profile",
  "delete_training_data_if_allowed",
  "create_applicant_profile",
  "prepare_resume_packet",
  "create_employer_profile",
  "add_job_opportunity",
  "prepare_application_packet",
  "track_application_status",
  "add_interview_follow_up",
  "mark_employer_closed",
  "archive_applicant",
  "no_contact_applicant",
  "delete_applicant_data_if_allowed",
  "create_drone_mission_request",
  "prepare_drone_mission_packet",
  "add_drone_provider",
  "add_drone_equipment",
  "match_drone_mission_provider",
  "queue_drone_mission",
  "track_drone_mission_status",
  "add_drone_mission_event",
  "cancel_drone_mission",
  "archive_drone_record",
  "create_drone_training_referral",
  "create_agriculture_expert_packet_from_drone"
].forEach(token => includes(server, token, `operation action ${token}`));

[
  "data-nexus-learning-development-window=\"true\"",
  "data-nexus-applicant-career-window=\"true\"",
  "data-nexus-employer-hiring-window=\"true\"",
  "data-nexus-drone-mission-window=\"true\"",
  "Learning Ops",
  "Applicant Career",
  "Employer Hiring",
  "Drone Support",
  "Create learning profile",
  "Create applicant profile",
  "Add hiring company",
  "Create drone mission request"
].forEach(token => includes(app, token, `app remaining operations ${token}`));

[
  ".nexus-operations-domain-window",
  ".nexus-operations-action-grid"
].forEach(token => includes(css, token, `css remaining operations ${token}`));

const operationsBlock = server.slice(
  server.indexOf("function ensureNexusPersistentOperations"),
  server.indexOf("async function api(")
) + app.slice(
  app.indexOf("function isNexusPersistentOperationsCommand"),
  app.indexOf("function renderNexusActiveWorkflowWorkspace")
);

[
  "job placement confirmed",
  "employer accepted",
  "training enrollment confirmed",
  "certificate awarded",
  "drone dispatched",
  "flight executed",
  "imagery captured",
  "payment completed",
  "shipment GPS confirmed",
  "diagnosis confirmed",
  "refill approved"
].forEach(token => excludes(operationsBlock, token, "remaining operations safety"));

assert.equal(
  packageJson.scripts["qa:nexus-remaining-modes-operations"],
  "node scripts/nexus-remaining-modes-operations-qa.js",
  "package.json must expose qa:nexus-remaining-modes-operations"
);
assert(qaSuite.includes("scripts/nexus-remaining-modes-operations-qa.js"), "qa-suite.js must include remaining modes operations QA.");

async function waitForHealth(port, child) {
  const deadline = Date.now() + 12000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error(`server exited early with ${child.exitCode}`);
    try {
      const response = await fetch(`http://127.0.0.1:${port}/api/health`);
      if (response.ok) return;
    } catch {
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }
  throw new Error("server did not become healthy");
}

async function post(port, body) {
  const response = await fetch(`http://127.0.0.1:${port}/api/nexus/operations/command`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  const json = await response.json();
  assert(response.ok, `operation ${body.action || body.command} should pass: ${JSON.stringify(json)}`);
  assert.equal(json.nexusOperationsResult.noExecutionAuthorized, true, "operation result must keep execution disabled");
  return json.nexusOperationsResult;
}

async function runApiQa() {
  const port = 4467 + Math.floor(Math.random() * 100);
  const tmpDb = path.join(root, `tmp-remaining-modes-operations-${Date.now()}.json`);
  fs.copyFileSync(path.join(root, "db.json"), tmpDb);
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tmpDb },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let stderr = "";
  child.stderr.on("data", chunk => { stderr += chunk.toString(); });
  try {
    await waitForHealth(port, child);
    const statusResponse = await fetch(`http://127.0.0.1:${port}/api/nexus/operations/status`);
    const status = await statusResponse.json();
    assert.equal(status.safety.noFakeTrainingEnrollment, true, "training enrollment must not be faked");
    assert.equal(status.safety.noFakeJobPlacement, true, "job placement must not be faked");
    assert.equal(status.safety.noFakeDroneDispatch, true, "drone dispatch must not be faked");

    const learning = await post(port, { action: "create_learning_profile", learningGoals: "AI literacy, farm operations" });
    assert(learning.record.learningProfileId.startsWith("NX-LRN-"), "learning profile should persist");
    const referral = await post(port, { action: "prepare_training_referral", providerName: "QA Training Provider" });
    assert.equal(referral.record.providerSubmissionEnabled, false, "training referral must not submit");
    const lms = await post(port, { action: "prepare_lms_handoff" });
    assert.equal(lms.record.providerSubmissionEnabled, false, "LMS handoff must be disabled by default");
    const assessment = await post(port, { action: "create_skill_assessment_packet" });
    assert(assessment.timeline.some(item => item.type === "skill-assessment"), "learning timeline should include skill assessment");
    const trainingProvider = await post(port, { action: "add_training_provider", name: "QA Learning Center" });
    assert.equal(trainingProvider.record.type, "training-provider", "training provider directory record should persist");

    const applicant = await post(port, { action: "create_applicant_profile", applicantName: "QA Applicant" });
    assert(applicant.record.applicantId.startsWith("NX-APP-"), "applicant profile should persist");
    const resume = await post(port, { action: "prepare_resume_packet" });
    assert.equal(resume.record.employerSubmissionEnabled, false, "resume packet must not submit");
    const employer = await post(port, { action: "create_employer_profile", companyName: "QA Employer" });
    assert(employer.record.employerId.startsWith("NX-EMP-"), "employer should persist");
    const job = await post(port, { action: "add_job_opportunity", title: "QA Farm Technician" });
    assert.equal(job.record.externalPostingEnabled, false, "job opportunity must not publish externally");
    const application = await post(port, { action: "prepare_application_packet" });
    assert.equal(application.record.employerSubmissionEnabled, false, "application packet must not submit");
    const pipeline = await post(port, { action: "show_hiring_pipeline" });
    assert(pipeline.pipeline.length >= 1, "hiring pipeline should be visible");

    const mission = await post(port, { action: "create_drone_mission_request", missionType: "crop scouting", locationText: "QA Field" });
    assert.equal(mission.record.dispatchEnabled, false, "drone mission dispatch must be disabled");
    assert.equal(mission.record.imageryCaptureEnabled, false, "drone imagery capture must be disabled");
    const droneProvider = await post(port, { action: "add_drone_provider", name: "QA Drone Provider" });
    assert.equal(droneProvider.record.dispatchEnabled, false, "drone provider dispatch must be disabled");
    const equipment = await post(port, { action: "add_drone_equipment", equipmentName: "QA Drone" });
    assert.equal(equipment.record.status, "inventory-review", "drone equipment should stay review only");
    const event = await post(port, { action: "add_drone_mission_event", notes: "Provider called back for review only." });
    assert.equal(event.event.noFlightExecuted, true, "drone event must not claim flight");
    assert.equal(event.event.noImageryCaptured, true, "drone event must not claim imagery");
    const agronomyPacket = await post(port, { action: "create_agriculture_expert_packet_from_drone" });
    assert(agronomyPacket.timeline.some(item => item.type === "drone-imagery-report"), "drone agronomy packet should include report template");
    const droneTimeline = await post(port, { action: "show_drone_mission_timeline" });
    assert(droneTimeline.timeline.length >= 1, "drone mission timeline should be visible");

    const receipts = await post(port, { action: "show_action_receipts" });
    assert(receipts.operations.collections.actionReceipts >= 1, "receipts should be retained");
    const audit = await post(port, { action: "show_audit_log" });
    assert(audit.operations.collections.auditLogs >= 1, "audit log should be retained");
  } finally {
    child.kill();
    if (fs.existsSync(tmpDb)) fs.unlinkSync(tmpDb);
  }
  if (/token|secret|password|sk_live|TWILIO_AUTH_TOKEN/.test(stderr)) {
    throw new Error("server stderr appeared to expose a secret-like value");
  }
}

runApiQa()
  .then(() => console.log("Nexus remaining modes operations QA passed."))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
