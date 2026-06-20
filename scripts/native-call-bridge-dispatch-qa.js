const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NATIVE_CALL_BRIDGE_DISPATCH_QA_PORT || 4474);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-native-call-bridge-dispatch-qa-db.json");
let cookie = "";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function sourceBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert.notEqual(start, -1, `Missing source start: ${startNeedle}`);
  const end = source.indexOf(endNeedle, start + startNeedle.length);
  assert.notEqual(end, -1, `Missing source end after ${startNeedle}: ${endNeedle}`);
  return source.slice(start, end);
}

function seedDb() {
  const db = JSON.parse(fs.readFileSync(path.join(root, "db.json"), "utf8"));
  db.profile = db.profile || {};
  db.profile.phoneContacts = [
    { id: "native-bridge-maria", name: "Maria", lookup: "maria", phone: "+15555550401", relationship: "saved contact", source: "native-call-bridge-dispatch-qa" },
    { id: "native-bridge-amina", name: "Amina", lookup: "amina", phone: "+15555550402", relationship: "saved contact", source: "native-call-bridge-dispatch-qa", telegramHandle: "amina_bridge" },
    { id: "native-bridge-john-a", name: "John", lookup: "john", phone: "+15555550403", relationship: "saved contact", source: "native-call-bridge-dispatch-qa-a" },
    { id: "native-bridge-john-b", name: "John", lookup: "john", phone: "+15555550404", relationship: "saved contact", source: "native-call-bridge-dispatch-qa-b" }
  ];
  db.profile.agentPendingAction = null;
  db.profile.outboundCalls = [];
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
  throw new Error("Native call bridge dispatch QA server did not become reachable");
}

async function call(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return json;
}

async function command(prompt) {
  return call("/api/agent/command", {
    command: prompt,
    inputMode: "voice",
    outputMode: "voice",
    conversational: true,
    mode: "user",
    targetLanguage: "en"
  });
}

function assertNotNativeDispatchable(state, label) {
  const metadata = state.commandResult?.metadata || {};
  assert.notEqual(metadata.executionConfirmed, true, `${label} should not expose confirmed execution`);
}

(async () => {
  const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
  const shim = fs.readFileSync(path.join(root, "native-mobile", "bridge", "agrinexus-native-voice.js"), "utf8");
  const bridge = JSON.parse(fs.readFileSync(path.join(root, "public", "native-bridge.json"), "utf8"));

  assert(bridge.webCommands.includes("call.launch"), "Bridge contract should list call.launch");
  assert.equal(bridge.confirmedCallHandoff?.command, "call.launch", "Bridge contract should document confirmed call handoff command");
  assert(bridge.confirmedCallHandoff?.requirements?.some(item => /executionConfirmed must be true/.test(item)), "Bridge contract should require executionConfirmed");
  assert(shim.includes("launchCall(payload)") && shim.includes('command: "call.launch"'), "Native web shim should expose call.launch dispatch");

  const payloadSource = sourceBetween(app, "function confirmedNativeCallHandoffPayload", "function nativeCallLaunchBridgeAvailable");
  assert(payloadSource.includes("if (!metadata.executionConfirmed) return null"), "Native call payload should require backend confirmation");
  assert(payloadSource.includes('if (provider !== "native-phone") return null'), "Native call payload should allow only native-phone");
  assert(payloadSource.includes('if (handoff.nativeCommand !== "call.launch") return null'), "Native call payload should require call.launch native command");
  assert(payloadSource.includes('if (!safeUrl || !safeUrl.startsWith("tel:")) return null'), "Native call payload should require sanitized tel URL");
  assert(payloadSource.includes('source: "confirmed-call-handoff"'), "Native call payload should mark confirmed source");

  const dispatchSource = sourceBetween(app, "function maybeDispatchConfirmedNativeCallHandoff", "function renderConfirmedCallHandoffCard");
  assert(dispatchSource.includes("confirmedNativeCallHandoffPayload(result)"), "Dispatch should use strict payload builder");
  assert(dispatchSource.includes("nativeCallLaunchBridgeAvailable()"), "Dispatch should require native bridge availability");
  assert(dispatchSource.includes("agrinexusLastNativeCallDispatch"), "Dispatch should dedupe repeated renders/results");
  assert(app.includes("maybeDispatchConfirmedNativeCallHandoff(result);"), "Backend command result handling should invoke confirmed native dispatch");

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

    const staged = await command("call Maria on native phone dialer");
    assert.equal(staged.commandResult?.metadata?.executionDeferred, true, "Initial native call utterance should stage only");
    assertNotNativeDispatchable(staged, "initial native call utterance");

    const vague = await command("okay");
    assert.equal(vague.commandResult?.intent, "conversation.confirmation_required", "okay should not confirm high-risk native call");
    assertNotNativeDispatchable(vague, "okay");

    const confirmed = await command("yes");
    assert.equal(confirmed.commandResult?.metadata?.executionConfirmed, true, "Allowed confirmation should expose confirmed metadata");
    assert.equal(confirmed.commandResult?.metadata?.provider, "native-phone", "Confirmed native call should use native-phone provider");
    assert.equal(confirmed.commandResult?.metadata?.handoff?.nativeCommand, "call.launch", "Confirmed native call should expose call.launch");
    assert.equal(confirmed.commandResult?.metadata?.handoff?.url, "tel:+15555550401", "Confirmed native call should expose sanitized tel URL");

    const missing = await command("call Unknown Person");
    assert.equal(missing.commandResult?.intent, "call.number_needed", "Missing number should ask for input");
    assert(!missing.profile?.agentPendingAction, "Missing number should not stage native dispatch");
    assertNotNativeDispatchable(missing, "missing number");

    const duplicate = await command("call John");
    assert.equal(duplicate.commandResult?.intent, "call.multiple_matches", "Duplicate contact should ask for choice");
    assert(!duplicate.profile?.agentPendingAction, "Duplicate contact should not stage native dispatch");
    assertNotNativeDispatchable(duplicate, "duplicate contact");

    const whatsapp = await command("call Maria on WhatsApp");
    await command("confirm");
    assert.equal((await command("yes")).commandResult?.intent, "conversation.no_pending_action", "Stale confirmation should not execute after WhatsApp confirmation");
    assert.equal(whatsapp.profile?.agentPendingAction?.provider, "whatsapp", "WhatsApp should stage as WhatsApp, not native-phone");

    const telegram = await command("call Amina on Telegram");
    assert.equal(telegram.profile?.agentPendingAction?.provider, "telegram", "Telegram should stage as Telegram, not native-phone");
    await command("no");

    console.log("Native call bridge dispatch QA passed");
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
  console.error(error);
  process.exit(1);
});
