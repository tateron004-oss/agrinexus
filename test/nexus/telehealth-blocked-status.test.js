const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4564;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-telehealth-blocked-status-db.json");

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
let cookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function post(pathname, body) {
  const res = await fetch(`${base}${pathname}`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body)
  });
  return { status: res.status, body: await res.json() };
}

// Confirmed: createEncounter/createVideoRoom/prepareNotification/createFollowUp
// in server/telehealth/provider.js all returned ok: true for their
// confirmation/consent/precondition-blocked branches, unlike every other
// packet-style function in the codebase -- the REST route answers a
// genuinely blocked, un-actioned request with the same HTTP 200 a real
// completion gets, including the emergency-red-flags video-room block.

test("create-encounter without confirmation is reported as blocked (not ok, not 200)", async () => {
  const result = await post("/api/nexus/telehealth/create-encounter", { conditionArea: "general", consentToPreparePacket: true });
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-confirmation-required");
});

test("create-encounter with confirmation but no consent is reported as blocked", async () => {
  const result = await post("/api/nexus/telehealth/create-encounter", { conditionArea: "general", confirmed: true });
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-consent-required");
});

test("create-encounter with confirmation and consent actually completes", async () => {
  const result = await post("/api/nexus/telehealth/create-encounter", { conditionArea: "general", confirmed: true, consentToPreparePacket: true });
  assert.equal(result.body.ok, true);
  assert.equal(result.status, 200);
  assert.equal(result.body.encounterCreated, true);
  return result.body.encounter.id;
});

test("create-video-room against a missing encounter is reported as blocked", async () => {
  const result = await post("/api/nexus/telehealth/create-video-room", { encounterId: "does-not-exist", confirmed: true, consentToShare: true });
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "encounter_required");
});

test("create-video-room without confirmation/consent is reported as blocked", async () => {
  const created = await post("/api/nexus/telehealth/create-encounter", { conditionArea: "general", confirmed: true, consentToPreparePacket: true });
  const result = await post("/api/nexus/telehealth/create-video-room", { encounterId: created.body.encounter.id });
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-consent-and-confirmation-required");
});

test("create-video-room against an encounter with red flags is reported as blocked, not silently allowed", async () => {
  const created = await post("/api/nexus/telehealth/create-encounter", {
    conditionArea: "general", confirmed: true, consentToPreparePacket: true, redFlags: ["chest_pain"]
  });
  const result = await post("/api/nexus/telehealth/create-video-room", { encounterId: created.body.encounter.id, confirmed: true, consentToShare: true });
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-emergency-red-flags");
});

// Found live (telehealth safety audit): createEncounter marks status
// "emergency-guidance" whenever EITHER redFlags is non-empty OR
// intake.urgency === "emergency" -- but createVideoRoom's own emergency
// check only ever inspected encounter.redFlags.length, never the
// encounter's own already-computed status. An encounter created with
// urgency: "emergency" but an empty redFlags array became
// "emergency-guidance" (correctly) yet still passed the video-room check,
// creating a real room for a declared emergency.
test("create-video-room against an encounter created with urgency: emergency (but an empty redFlags array) is blocked", async () => {
  const created = await post("/api/nexus/telehealth/create-encounter", {
    conditionArea: "general", confirmed: true, consentToPreparePacket: true, urgency: "emergency"
  });
  assert.equal(created.body.encounter.redFlags.length, 0, "this encounter must have no populated redFlags array, exercising the exact gap");
  assert.equal(created.body.encounter.status, "emergency-guidance");
  const result = await post("/api/nexus/telehealth/create-video-room", { encounterId: created.body.encounter.id, confirmed: true, consentToShare: true });
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-emergency-red-flags");
});

test("follow-up without confirmation is reported as blocked (not ok, not 200)", async () => {
  const created = await post("/api/nexus/telehealth/create-encounter", { conditionArea: "general", confirmed: true, consentToPreparePacket: true });
  const result = await post("/api/nexus/telehealth/follow-up", { encounterId: created.body.encounter.id });
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-confirmation-required");
});

test("follow-up with confirmation actually completes", async () => {
  const created = await post("/api/nexus/telehealth/create-encounter", { conditionArea: "general", confirmed: true, consentToPreparePacket: true });
  const result = await post("/api/nexus/telehealth/follow-up", { encounterId: created.body.encounter.id, confirmed: true });
  assert.equal(result.body.ok, true);
  assert.equal(result.status, 200);
});

test("notify without confirmation is reported as blocked (not ok, not 200)", async () => {
  const created = await post("/api/nexus/telehealth/create-encounter", { conditionArea: "general", confirmed: true, consentToPreparePacket: true });
  const result = await post("/api/nexus/telehealth/notify", { encounterId: created.body.encounter.id, channel: "email" });
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-consent-and-confirmation-required");
});

// Confirmed: prepareNotification's own ok was folded into the route's final
// ok, but the nested real-provider send result (providerResult) was not --
// a genuine send failure (e.g. no recipient) was still reported as ok:true.
test("notify folds in a real send failure -- a missing recipient is reported as blocked, not a false success", async () => {
  const created = await post("/api/nexus/telehealth/create-encounter", { conditionArea: "general", confirmed: true, consentToPreparePacket: true });
  const result = await post("/api/nexus/telehealth/notify", {
    encounterId: created.body.encounter.id, channel: "email", confirmed: true, consentToShare: true
  });
  assert.equal(result.body.providerResult.ok, false);
  assert.equal(result.body.providerResult.error, "recipient_email_required");
  assert.equal(result.body.ok, false, "a real send failure inside providerResult must make the whole response ok:false");
  assert.equal(result.status, 400);
});
