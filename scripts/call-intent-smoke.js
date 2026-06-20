const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.CALL_INTENT_SMOKE_PORT || 4468);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-call-intent-smoke-db.json");
let cookie = "";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function seedDb() {
  const db = JSON.parse(fs.readFileSync(sourceDb, "utf8"));
  db.profile = db.profile || {};
  db.profile.phoneContacts = [
    { id: "call-smoke-maria", name: "Maria", lookup: "maria", phone: "+15555550101", relationship: "saved contact", source: "call-intent-smoke" },
    { id: "call-smoke-juan", name: "Juan", lookup: "juan", phone: "+15555550102", relationship: "saved contact", source: "call-intent-smoke" },
    { id: "call-smoke-marie", name: "Marie", lookup: "marie", phone: "+15555550103", relationship: "saved contact", source: "call-intent-smoke" },
    { id: "call-smoke-amina", name: "Amina", lookup: "amina", phone: "+15555550104", relationship: "saved contact", source: "call-intent-smoke" },
    { id: "call-smoke-mohammed", name: "محمد", lookup: "محمد", phone: "+15555550105", relationship: "saved contact", source: "call-intent-smoke" },
    { id: "call-smoke-john-a", name: "John", lookup: "john", phone: "+15555550106", relationship: "saved contact", source: "call-intent-smoke-a" },
    { id: "call-smoke-john-b", name: "John", lookup: "john", phone: "+15555550107", relationship: "saved contact", source: "call-intent-smoke-b" }
  ];
  db.profile.outboundCalls = [];
  db.profile.agentPendingAction = null;
  if (db.profile.agentMemory) db.profile.agentMemory.pendingContactCall = null;
  fs.writeFileSync(tempDb, JSON.stringify(db, null, 2));
}

async function waitForServer() {
  for (let index = 0; index < 80; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Call intent smoke server did not become reachable");
}

async function call(route, body, options = {}) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json().catch(() => ({}));
  if (!options.allowError && !response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return { status: response.status, json };
}

async function command(prompt, language = "en") {
  const { json } = await call("/api/agent/command", {
    command: prompt,
    inputMode: "voice",
    outputMode: "voice",
    conversational: true,
    mode: "user",
    language,
    targetLanguage: language
  });
  return json;
}

function assertStagedCall(state, label, provider = "twilio") {
  const result = state.commandResult || {};
  const pending = state.profile?.agentPendingAction || {};
  assert.equal(result.status, "needs-confirmation", `${label} should require confirmation`);
  assert.equal(result.metadata?.confirmationRequired, true, `${label} should expose confirmationRequired`);
  assert.equal(result.metadata?.executionDeferred, true, `${label} should defer execution`);
  assert.equal(result.metadata?.pendingActionType, "outbound_call", `${label} should be an outbound_call pending action`);
  assert.equal(pending.kind, "call", `${label} should use call pending kind`);
  assert.equal(pending.tool, "communications.outbound_call", `${label} should stage outbound call tool`);
  assert.equal(pending.provider, provider, `${label} should select ${provider}`);
  assert.equal((state.profile?.outboundCalls || []).length, 0, `${label} should not create outbound call on first utterance`);
}

(async () => {
  seedDb();
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: "",
      TWILIO_ACCOUNT_SID: "",
      TWILIO_AUTH_TOKEN: "",
      TWILIO_PHONE_NUMBER: "",
      PUBLIC_BASE_URL: base,
      DEMO_CALL_TO: ""
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });

    const cases = [
      ["call Maria", "en"],
      ["llama a Juan", "es"],
      ["appelle Marie", "fr"],
      ["mpigie Amina", "sw"],
      ["اتصل بمحمد", "ar"],
      ["ligar para Maria", "pt"]
    ];
    for (const [prompt, language] of cases) {
      const state = await command(prompt, language);
      assertStagedCall(state, prompt);
      assert.equal(state.commandResult.metadata.language, language === "pt" ? "pt" : language, `${prompt} should keep canonical language metadata`);
      await command("no", language === "pt" ? "en" : language);
    }

    const direct = await command("dial +15555550108");
    assertStagedCall(direct, "direct number");
    assert.equal(direct.profile.agentPendingAction.target.e164Phone, "+15555550108", "direct number should be normalized on pending action");
    await command("no");

    const unknown = await command("call Unknown Person");
    assert.equal(unknown.commandResult.intent, "call.number_needed", "unknown name should ask for number");
    assert.equal(unknown.commandResult.status, "needs-input", "unknown name should need input");
    assert(!unknown.profile.agentPendingAction, "unknown name should not stage executable call");

    const duplicate = await command("call John");
    assert.equal(duplicate.commandResult.intent, "call.multiple_matches", "duplicate contact should ask for a choice");
    assert.equal(duplicate.commandResult.status, "needs-choice", "duplicate contact should not guess");
    assert(!duplicate.profile.agentPendingAction, "duplicate contact should not stage executable call");

    const whatsapp = await command("call Maria on WhatsApp");
    assertStagedCall(whatsapp, "WhatsApp call", "whatsapp");
    assert.equal(whatsapp.profile.agentPendingAction.handoff.type, "instruction", "WhatsApp should use instruction fallback");
    assert.match(whatsapp.profile.agentPendingAction.handoff.fallbackText, /not reliable/i, "WhatsApp should not claim direct voice-call support");
    const whatsappConfirmed = await command("yes");
    assert.equal(whatsappConfirmed.commandResult.intent, "conversation.confirmed", "WhatsApp confirmation should go through pending confirmation");
    assert.equal(whatsappConfirmed.commandResult.metadata.liveCallPlaced, false, "WhatsApp confirmation should not place a live call");
    assert.equal((whatsappConfirmed.profile.outboundCalls || []).length, 0, "WhatsApp confirmation should not invoke Twilio");

    const telegram = await command("call Maria on Telegram");
    assertStagedCall(telegram, "Telegram call", "telegram");
    assert.match(telegram.profile.agentPendingAction.handoff.fallbackText, /not available|needs a known Telegram/i, "Telegram should not claim unsupported direct calling works");
    await command("no");

    const staged = await command("call Maria");
    assertStagedCall(staged, "call before Twilio confirmation");
    const confirmed = await command("yes");
    assert.equal(confirmed.commandResult.intent, "conversation.confirmed", "yes should execute only the staged pending call");
    const outbound = confirmed.profile.outboundCalls?.[0];
    assert(outbound, "confirmed Twilio call should create an outbound call record");
    assert.equal(outbound.status, "needs-twilio-call-config", "missing Twilio credentials should be a safe setup result");
    assert.equal(outbound.delivery?.ok, false, "missing Twilio credentials should not be ok");

    const noPending = await command("yes");
    assert.equal(noPending.commandResult.intent, "conversation.no_pending_action", "yes without pending action should not execute");

    console.log("Call intent smoke passed");
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
