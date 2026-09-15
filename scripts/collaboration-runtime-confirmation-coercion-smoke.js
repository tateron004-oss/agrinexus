const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4507;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-collaboration-runtime-confirmation-coercion-smoke-db.json");

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

async function call(route, body, cookie) {
  const res = await fetch(`${base}${route}`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body)
  });
  return { status: res.status, json: await res.json() };
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDbPath,
      OPENAI_API_KEY: "",
      NEXUS_PRESERVE_EMPTY_ENV: "1",
      NEXUS_AGRICULTURE_ENABLED: "true",
      NEXUS_AGRICULTURE_LIVE_SOURCES_ENABLED: "true",
      NEXUS_AGRICULTURE_DRONE_ENABLED: "true",
      DRONEDEPLOY_API_KEY: "test-key"
    },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);
    const cookie = await login("user@agrinexus.org", "User2026!");

    // Real bug fix: /api/agriculture-collaboration/(action|execute) and
    // /api/healthcare-collaboration/(action|execute) converted
    // confirmed/expertReviewed/humanPilotApproved/clinicianReviewed via
    // Boolean(body.X) -- truthy coercion, not a real boolean check -- before
    // passing them into the runtime's own gates, which only ever check
    // truthiness (!options.humanPilotApproved etc). A caller sending the
    // STRING "false" (truthy in JS) for humanPilotApproved was treated as a
    // real licensed human pilot's approval for a drone flight.
    const droneResult = await call("/api/agriculture-collaboration/execute", {
      command: "Prepare a drone field observation and launch drone",
      confirmed: "false",
      expertReviewed: "false",
      humanPilotApproved: "false"
    }, cookie);
    assert.equal(droneResult.status, 409, "an unapproved drone execution must not be authorized");
    assert.equal(droneResult.json.noExecutionAuthorized, true, "a string 'false' for humanPilotApproved must not be treated as real approval");
    assert.equal(droneResult.json.status, "blocked_drone_execution");

    const pharmacyResult = await call("/api/healthcare-collaboration/execute", {
      command: "Prepare a pharmacy prescription refill handoff",
      confirmed: "false",
      clinicianReviewed: "false"
    }, cookie);
    assert.equal(pharmacyResult.status, 409, "an unreviewed provider-level healthcare execution must not be authorized");
    assert.equal(pharmacyResult.json.noExecutionAuthorized, true, "a string 'false' for clinicianReviewed must not be treated as real review");

    // A genuine JSON boolean true must still work exactly as before.
    const droneApproved = await call("/api/agriculture-collaboration/action", {
      command: "Prepare a drone field observation and launch drone",
      confirmed: true,
      expertReviewed: true,
      humanPilotApproved: true
    }, cookie);
    assert.equal(droneApproved.status, 200);
    assert.equal(droneApproved.json.confirmationCaptured, true, "a real boolean true must still be honored");

    // Separate, co-discovered bug fix: /api/communication/prepare-message,
    // /api/message-preparation/prepare, and .../attempt-send read
    // user.language before the route's own auth check ran, so an
    // unauthenticated request (user === null) crashed with a 500 instead of
    // being handled normally.
    const unauthRes = await fetch(`${base}/api/communication/prepare-message`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({})
    });
    assert.notEqual(unauthRes.status, 500, "an unauthenticated request must not crash with a null-dereference 500");

    console.log("Collaboration runtime confirmation coercion smoke test passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
