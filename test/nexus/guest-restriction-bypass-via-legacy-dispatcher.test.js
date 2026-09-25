"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4572;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-guest-restriction-bypass-db.json");

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

let server;
let guestCookie;
let adminCookie;

test.before(async () => {
  // Start with an empty healthIntakes array so the video-session branch's
  // "!intake" precondition can actually fire for a fresh guest -- the
  // shipped db.json already has intakes, which would mask the fix (the
  // branch never even attempts to create one when db.profile.healthIntakes[0]
  // already exists, regardless of restriction).
  const seedDb = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  seedDb.profile.healthIntakes = [];
  fs.writeFileSync(tempDbPath, JSON.stringify(seedDb));
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/auth/guest-session`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: "Guest Tester" })
  });
  guestCookie = res.headers.get("set-cookie").split(";")[0];
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  adminCookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function callTool(command, cookie = guestCookie) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ arguments: { command } })
  });
  return { status: res.status, body: await res.json() };
}

function healthIntakeCount() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8")).profile.healthIntakes.length;
}

// Found live (restriction-bypass follow-up audit): /api/nexus/openai-native/tool
// only checks user.restrictions for THREE named tools (nexus_communications,
// nexus_email, nexus_health_preparation). The tool name defaults to
// "nexus_general_conversation" when omitted -- a valid tool that is NOT in
// that map -- which falls through to the legacy natural-language dispatcher
// (runAgentCommand via runCompanionSafeAgentCommand), which has NO restriction
// check anywhere in its ~2,800 lines. Its "call the doctor/buyer" and video-
// session branches called createOutboundCallWorkflow/createVideoSessionWorkflow
// directly, which themselves had no restriction check either -- so a guest
// session (explicitly restricted from communications-send and
// health-record-write) could still trigger what the app believed was a real
// outbound Twilio call. Fixed by adding the restriction check INSIDE
// createOutboundCallWorkflow/createCommunicationThread/createVideoSessionWorkflow
// themselves, closing every caller (this dispatcher, /api/agent/command when
// OpenAI-native is unconfigured, and any future caller) in one place.
test("a guest session reaching the legacy dispatcher via the default tool name cannot place a real outbound call", async () => {
  const result = await callTool("call the doctor about my rash");
  assert.equal(result.status, 200);
  const outboundCall = result.body?.result?.metadata?.outboundCall;
  assert.ok(outboundCall, "expected the legacy dispatcher's call branch to fire");
  assert.equal(outboundCall.status, "restricted-account-no-real-call");
  assert.equal(outboundCall.delivery.attempted, false);
  assert.doesNotMatch(result.body.response, /needs-twilio-call-config/, "must be refused for the restriction, not just missing Twilio config");
});

// createVideoSessionWorkflow's health-intake write has the identical gap:
// the legacy dispatcher's "show my injury to a doctor"-style branch calls it
// directly with no restriction check. Ordered before the admin test below so
// both compare against the same starting healthIntakes count (0, seeded above).
test("a guest session's video-call request does not write a real health intake record", async () => {
  assert.equal(healthIntakeCount(), 0, "test fixture must start with no intakes");
  const result = await callTool("show my injury to a doctor");
  assert.equal(result.status, 200);
  assert.equal(result.body.intent, "health.video_session_ready", "expected the video-session branch to fire");
  assert.equal(healthIntakeCount(), 0, "a restricted account must not get a real health intake written");
});

test("the same request from a non-restricted account still writes a real health intake, unaffected by the fix", async () => {
  const before = healthIntakeCount();
  const result = await callTool("show my injury to a doctor", adminCookie);
  assert.equal(result.status, 200);
  assert.equal(result.body.intent, "health.video_session_ready");
  assert.equal(healthIntakeCount(), before + 1);
});

test("the dedicated /api/voice/phone/outbound-call route also refuses a restricted account, with an explicit 403", async () => {
  const res = await fetch(`${base}/api/voice/phone/outbound-call`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie: guestCookie },
    body: JSON.stringify({ purpose: "buyer callback" })
  });
  assert.equal(res.status, 403);
  const body = await res.json();
  assert.match(body.error, /cannot start a real call/i);
});
