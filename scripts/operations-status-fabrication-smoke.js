const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4472;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-operations-status-fabrication-smoke-db.json");
let userCookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

async function call(route, { method, body, cookie } = {}) {
  const res = await fetch(`${base}${route}`, {
    method: method || (body ? "POST" : "GET"),
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const json = await res.json();
  return { status: res.status, json };
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);
    userCookie = await login("user@agrinexus.org", "User2026!");

    // Real bug fix: track_enrollment_status / track_application_status /
    // track_drone_mission_status used to accept a caller-supplied
    // `manualConfirmation: true` flag in the SAME untrusted request body as
    // an escape hatch that skipped the downgrade to "manual-status-review"
    // for outcome-claiming statuses (certified/hired/flown/etc). Nothing in
    // this codebase ever legitimately sets that flag, so any API caller
    // could fabricate a "hired"/"certified"/"flown" outcome record with no
    // real verification behind it. These calls must now be downgraded
    // regardless of the manualConfirmation flag.
    const enrollment = await call("/api/nexus/operations/action", {
      body: { action: "track_enrollment_status", status: "certified", manualConfirmation: true },
      cookie: userCookie
    });
    assert.equal(enrollment.status, 200);
    assert.equal(enrollment.json.nexusOperationsResult.record.status, "manual-status-review",
      "a caller-supplied manualConfirmation flag must not fabricate a certified training outcome");

    const employer = await call("/api/nexus/operations/action", {
      body: { action: "create_employer_profile", employerName: "Fabrication Smoke Employer" },
      cookie: userCookie
    });
    assert.equal(employer.status, 200);
    const job = await call("/api/nexus/operations/action", {
      body: { action: "add_job_opportunity", employerId: employer.json.nexusOperationsResult.record.employerId, title: "Fabrication Smoke Role" },
      cookie: userCookie
    });
    assert.equal(job.status, 200);
    const application = await call("/api/nexus/operations/action", {
      body: {
        action: "track_application_status",
        employerId: employer.json.nexusOperationsResult.record.employerId,
        jobOpportunityId: job.json.nexusOperationsResult.record.jobOpportunityId,
        status: "hired",
        manualConfirmation: true
      },
      cookie: userCookie
    });
    assert.equal(application.status, 200);
    assert.equal(application.json.nexusOperationsResult.record.status, "manual-status-review",
      "a caller-supplied manualConfirmation flag must not fabricate a hired job-placement outcome");

    const drone = await call("/api/nexus/operations/action", {
      body: { action: "create_drone_mission_request", missionType: "crop scouting" },
      cookie: userCookie
    });
    assert.equal(drone.status, 200);
    const droneStatus = await call("/api/nexus/operations/action", {
      body: {
        action: "track_drone_mission_status",
        droneMissionId: drone.json.nexusOperationsResult.record.droneMissionId,
        status: "flown",
        manualConfirmation: true
      },
      cookie: userCookie
    });
    assert.equal(droneStatus.status, 200);
    assert.equal(droneStatus.json.nexusOperationsResult.record.status, "manual-status-review",
      "a caller-supplied manualConfirmation flag must not fabricate a flown drone-mission outcome");

    console.log("Operations status fabrication smoke test passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
