const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.TELEHEALTH_PROVIDER_WORKFLOW_QA_PORT || 4523);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-telehealth-provider-workflow-qa-db.json");
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForServer() {
  for (let index = 0; index < 80; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Telehealth provider workflow QA server did not become reachable");
}

async function request(pathname, options = {}) {
  const response = await fetch(`${base}${pathname}`, {
    method: options.method || "GET",
    headers: { "content-type": "application/json", cookie: options.cookie || "" },
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  const json = await response.json().catch(() => ({}));
  return { status: response.status, ok: response.ok, json, cookie: setCookie ? setCookie.split(";")[0] : options.cookie || "" };
}

async function login(email, password) {
  const response = await request("/api/login", { method: "POST", body: { email, password } });
  assert.equal(response.status, 200, `${email} should log in`);
  return response.cookie;
}

async function post(pathname, cookie, body, expectedStatus, message) {
  const response = await request(pathname, { method: "POST", cookie, body });
  assert.equal(response.status, expectedStatus, message);
  return response.json;
}

function encounterById(profile, encounterId) {
  return (profile.telehealthEncounters || []).find(encounter => encounter.encounterId === encounterId);
}

async function createIntake(cookie, body = {}) {
  const state = await post("/api/health/action", cookie, { type: "intake", ...body }, 200, "intake should return 200");
  const intake = state.profile.healthIntakes[0];
  assert(intake.encounterId, "intake should create an encounter");
  return { state, intake, encounterId: intake.encounterId };
}

async function providerWorkflow(cookie, body, expectedStatus = 200, message = "provider workflow should return expected status") {
  return post("/api/health/provider-workflow", cookie, body, expectedStatus, message);
}

function assertLifecycle(state, encounterId, lifecycleState, label) {
  const encounter = encounterById(state.profile, encounterId);
  assert(encounter, `${label} should return the encounter`);
  assert.equal(encounter.lifecycleState, lifecycleState, `${label} should set lifecycle ${lifecycleState}`);
  return encounter;
}

function assertProviderAction(state, encounterId, action, label) {
  const record = state.providerWorkflowResult.actionRecord;
  assert(record, `${label} should return provider action record`);
  assert.equal(record.encounterId, encounterId, `${label} action should link to encounter`);
  assert.equal(record.action, action, `${label} should record action`);
  const stored = (state.profile.telehealthProviderActions || []).find(item => item.actionId === record.actionId);
  assert(stored, `${label} should persist provider action`);
  return record;
}

(async () => {
  fs.copyFileSync(sourceDb, tempDb);
  const tempData = JSON.parse(fs.readFileSync(tempDb, "utf8"));
  tempData.profile = tempData.profile || {};
  for (const key of [
    "telehealthEncounters",
    "telehealthProviderActions",
    "healthIntakes",
    "telehealthFollowUps",
    "telehealthProviderAssignments",
    "telehealthEmergencyEscalations",
    "careTeamNotes",
    "telehealthOutcomeReviews",
    "videoSessions"
  ]) {
    tempData.profile[key] = [];
  }
  fs.writeFileSync(tempDb, JSON.stringify(tempData, null, 2));

  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();

    const unauth = await request("/api/health/provider-workflow", { method: "POST", body: { action: "queue-summary" } });
    assert.equal(unauth.status, 401, "Unauthenticated provider workflow should return 401");

    const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
    const userCookie = await login("user@agrinexus.org", "User2026!");
    const investorCookie = await login("investor@agrinexus.org", "Investor2026!");

    await providerWorkflow(investorCookie, { action: "accept", encounterId: "missing" }, 403, "Investor provider workflow mutation should return 403");

    const { encounterId } = await createIntake(adminCookie);
    const summary = await providerWorkflow(adminCookie, { action: "queue-summary" }, 200, "queue summary should return 200");
    assert.equal(summary.providerWorkflowResult.action, "queue-summary", "Queue summary should identify action");
    assert.equal(summary.providerWorkflowResult.queue.mode, "local-demo-provider-queue", "Queue summary should be local/demo");
    assert(summary.providerWorkflowResult.queue.total >= 1, "Queue summary should include encounters");

    const accept = await providerWorkflow(adminCookie, {
      action: "accept",
      encounterId,
      providerName: "Phase3B Sensitive Provider",
      reason: "Phase3B Secret Reason",
      noteSummary: "Phase3B Secret Note"
    }, 200, "Admin accept should return 200");
    let encounter = assertLifecycle(accept, encounterId, "provider-accepted", "accept");
    const acceptRecord = assertProviderAction(accept, encounterId, "accept", "accept");
    assert.equal(acceptRecord.demoRecord, true, "Provider action should preserve demo provenance from default intake");
    assert.equal(acceptRecord.source, "default-workflow", "Provider action should preserve provenance source");
    assert.equal(encounter.providerActionCount, 1, "Encounter should count provider actions");

    const start = await providerWorkflow(adminCookie, { action: "start-visit", encounterId }, 200, "start visit should return 200");
    encounter = assertLifecycle(start, encounterId, "visit-active", "start visit");
    assertProviderAction(start, encounterId, "start-visit", "start visit");
    assert.equal(encounter.providerActionCount, 2, "Encounter should count start visit action");

    const complete = await providerWorkflow(adminCookie, { action: "complete-visit", encounterId }, 200, "complete visit should return 200");
    encounter = assertLifecycle(complete, encounterId, "completed", "complete visit");
    assertProviderAction(complete, encounterId, "complete-visit", "complete visit");
    assert.equal(encounter.status, "completed", "Completed encounter should have completed status");

    const followUp = await providerWorkflow(adminCookie, { action: "request-follow-up", encounterId }, 200, "request follow-up should return 200");
    encounter = assertLifecycle(followUp, encounterId, "follow-up-needed", "request follow-up");
    assertProviderAction(followUp, encounterId, "request-follow-up", "request follow-up");
    assert((followUp.profile.telehealthFollowUps || []).some(item => item.encounterId === encounterId), "Request follow-up should create linked follow-up evidence");

    const escalate = await providerWorkflow(adminCookie, { action: "escalate", encounterId }, 200, "escalate should return 200");
    encounter = assertLifecycle(escalate, encounterId, "escalated", "escalate");
    assertProviderAction(escalate, encounterId, "escalate", "escalate");
    assert.equal(encounter.status, "escalated", "Escalated encounter should have escalated status");

    const resolve = await providerWorkflow(adminCookie, { action: "resolve-escalation", encounterId }, 200, "resolve escalation should return 200");
    encounter = assertLifecycle(resolve, encounterId, "escalation-resolved", "resolve escalation");
    assertProviderAction(resolve, encounterId, "resolve-escalation", "resolve escalation");
    assert.equal(encounter.status, "resolved", "Resolved encounter should have resolved status");

    const declined = await createIntake(adminCookie, {
      patientName: "Phase3B Decline Patient",
      needSummary: "Phase3B decline path",
      contactMethod: "Phase3B callback"
    });
    const decline = await providerWorkflow(adminCookie, { action: "decline", encounterId: declined.encounterId }, 200, "decline should return 200");
    assertLifecycle(decline, declined.encounterId, "provider-declined", "decline");
    assertProviderAction(decline, declined.encounterId, "decline", "decline");

    const userIntake = await createIntake(userCookie, {
      patientName: "Phase3B Standard User Patient",
      needSummary: "Phase3B standard user provider workflow",
      contactMethod: "Phase3B standard callback"
    });
    const userAccept = await providerWorkflow(userCookie, { action: "accept", encounterId: userIntake.encounterId }, 200, "Standard User accept should return 200");
    assertLifecycle(userAccept, userIntake.encounterId, "provider-accepted", "Standard User accept");
    assertProviderAction(userAccept, userIntake.encounterId, "accept", "Standard User accept");

    const investorState = await request("/api/state", { cookie: investorCookie });
    assert.equal(investorState.status, 200, "Investor state should load");
    const providerActions = investorState.json.profile.telehealthProviderActions || [];
    assert(providerActions.length >= 1, "Investor should see safe provider action summaries");
    const projectedAction = providerActions.find(item => item.encounterId === encounterId && item.action === "accept");
    assert(projectedAction, "Investor should see accepted action summary");
    assert.equal(projectedAction.redacted, true, "Investor provider action should be marked redacted");
    assert.equal(projectedAction.providerRole, "local-demo-provider", "Investor should see safe provider role");
    assert.equal(projectedAction.providerName, undefined, "Investor should not see provider name");
    assert.equal(projectedAction.reason, undefined, "Investor should not see reason");
    assert.equal(projectedAction.noteSummary, undefined, "Investor should not see note summary");
    const serializedInvestorProfile = JSON.stringify(investorState.json.profile || {});
    for (const token of ["Phase3B Sensitive Provider", "Phase3B Secret Reason", "Phase3B Secret Note", "Phase3B Decline Patient", "Phase3B Standard User Patient"]) {
      assert(!serializedInvestorProfile.includes(token), `Investor projection should not expose ${token}`);
    }

    console.log("Telehealth provider workflow QA passed");
  } finally {
    server.kill();
    await wait(250);
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error);
  process.exit(1);
});
