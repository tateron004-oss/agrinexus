const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.VOICE_PHASE1_QA_PORT || 4461);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-voice-phase1-qa-db.json");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const bridge = JSON.parse(fs.readFileSync(path.join(root, "public", "native-bridge.json"), "utf8"));
let cookie = "";

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
  throw new Error("Voice phase 1 QA server did not become reachable");
}

async function jsonCall(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json();
  if (!response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return json;
}

async function twilioPost(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(body)
  });
  const text = await response.text();
  if (!response.ok) throw new Error(`${route}: ${text}`);
  return text;
}

(async () => {
  assert(serverSource.includes("async function runCompanionSafeAgentCommand"), "server should expose shared Companion-safe command wrapper");
  assert(!serverSource.includes("runAgentCommand(db, phoneUser, command, { confirm: true"), "phone gather must not directly execute with unconditional confirm:true");
  assert(serverSource.includes('inputMode: "phone"'), "phone gather should preserve inputMode=phone");
  assert(serverSource.includes('operationalMode: "conversation-only"') && serverSource.includes("canExecuteWorkflows: false"), "realtime status should be conversation-only");
  assert(serverSource.includes("This Realtime session is conversational only"), "realtime model instructions should not claim tool execution");
  assert(appSource.includes('localStorage.getItem("agrinexusRealtimeVoice") === "on"'), "realtime should be explicit opt-in, not the default mic path");
  assert.equal(bridge.apiEndpoints.voice, "/api/voice/speak", "native bridge voice endpoint should reference the implemented TTS route");

  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: "",
      PUBLIC_BASE_URL: base
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await jsonCall("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    await twilioPost("/api/voice/phone/incoming", { From: "+15555550123", CallSid: "CA-phase1-phone" });
    await twilioPost("/api/voice/phone/gather?step=name", { SpeechResult: "Ron", From: "+15555550123", CallSid: "CA-phase1-phone" });
    await twilioPost("/api/voice/phone/gather?step=language", { SpeechResult: "English", From: "+15555550123", CallSid: "CA-phase1-phone" });

    const staged = await twilioPost("/api/voice/phone/gather?step=command", { SpeechResult: "call the provider", From: "+15555550123", CallSid: "CA-phase1-phone" });
    assert.match(staged, /Before I call anyone|confirm/i, "phone risky command should stage confirmation instead of executing immediately");

    let state = await jsonCall("/api/state");
    const latest = state.profile.agentCommands[0];
    assert.equal(latest.metadata.inputMode, "phone", "phone command record should preserve inputMode metadata");
    assert.equal(latest.metadata.companionUnderstanding.source, "phone", "Companion Understanding source should be phone");
    assert.equal(latest.metadata.confirmationRequired, true, "phone risky command should require confirmation");
    assert.equal(latest.metadata.executionDeferred, true, "phone risky command should defer execution");
    assert(state.profile.agentPendingAction, "phone risky command should create a pending action");

    const confirmed = await twilioPost("/api/voice/phone/gather?step=command", { SpeechResult: "yes", From: "+15555550123", CallSid: "CA-phase1-phone" });
    assert.doesNotMatch(confirmed, /do not have a pending action/i, "phone yes should only act on the staged pending action");
    state = await jsonCall("/api/state");
    assert.equal(state.profile.agentCommands[0].metadata.inputMode, "phone", "phone confirmation command should preserve inputMode metadata");

    console.log("Voice phase 1 alignment QA passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) {
      try {
        fs.unlinkSync(tempDb);
      } catch {
        // Best effort cleanup for Windows file locks.
      }
    }
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) {
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Best effort cleanup for Windows file locks.
    }
  }
  console.error(error.message || error);
  process.exit(1);
});
