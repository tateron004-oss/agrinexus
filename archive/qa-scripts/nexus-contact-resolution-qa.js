const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_CONTACT_RESOLUTION_QA_PORT || 4486);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-nexus-contact-resolution-qa-db.json");
let cookie = "";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function seedDb() {
  const db = JSON.parse(fs.readFileSync(sourceDb, "utf8"));
  db.profile = db.profile || {};
  db.profile.phoneContacts = [
    { id: "contact-resolution-maria", name: "Maria", lookup: "maria", phone: "+15555550601", relationship: "saved contact", source: "contact-resolution-qa" },
    { id: "contact-resolution-amina", name: "Amina", lookup: "amina", phone: "+15555550602", relationship: "saved contact", source: "contact-resolution-qa", telegramHandle: "amina_resolution" },
    { id: "contact-resolution-john-empty", name: "John", lookup: "john", relationship: "saved contact", source: "contact-resolution-qa" },
    { id: "contact-resolution-jordan-a", name: "Jordan", lookup: "jordan", phone: "+15555550603", relationship: "saved contact", source: "contact-resolution-qa-a" },
    { id: "contact-resolution-jordan-b", name: "Jordan", lookup: "jordan", phone: "+15555550604", relationship: "saved contact", source: "contact-resolution-qa-b" },
    { id: "contact-resolution-seller", name: "Seller", lookup: "seller", phone: "+15555550605", relationship: "buyer or trade contact", source: "contact-resolution-qa" },
    { id: "contact-resolution-support", name: "Workforce Support", lookup: "workforce support", phone: "+15555550606", relationship: "workforce contact", source: "contact-resolution-qa" }
  ];
  db.profile.outboundCalls = [];
  db.profile.agentPendingAction = null;
  db.profile.agentMemory = db.profile.agentMemory || {};
  db.profile.agentMemory.pendingContactCall = null;
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
  throw new Error("Nexus contact resolution QA server did not become reachable");
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

function assertNoProviderOpened(state, label) {
  const result = state.commandResult || {};
  const metadata = result.metadata || {};
  assert.notEqual(metadata.executionConfirmed, true, `${label} must not expose confirmed execution`);
  assert.notEqual(metadata.liveCallPlaced, true, `${label} must not place a live call`);
  assert.notEqual(metadata.handoff?.nativeCommand, "call.launch", `${label} must not expose native bridge dispatch metadata`);
  assert.equal((state.profile?.outboundCalls || []).length, 0, `${label} must not create outbound call records`);
}

function assertNoExecutablePendingAction(state, label) {
  const pending = state.profile?.agentPendingAction;
  assert(!pending, `${label} must not stage an executable provider action`);
  assertNoProviderOpened(state, label);
}

function assertStagedButNotExecuted(state, label, provider) {
  const result = state.commandResult || {};
  const pending = state.profile?.agentPendingAction || {};
  assert.equal(result.status, "needs-confirmation", `${label} should require confirmation`);
  assert.equal(result.metadata?.executionDeferred, true, `${label} should defer execution`);
  assert.equal(result.metadata?.confirmationRequired, true, `${label} should require confirmation metadata`);
  assert.equal(pending.kind, "call", `${label} should stage a call pending action`);
  assert.equal(pending.tool, "communications.outbound_call", `${label} should stage outbound call tool`);
  assert.equal(pending.provider, provider, `${label} should preserve requested provider`);
  assert.equal(pending.phase4HighRisk, true, `${label} should remain high-risk`);
  assertNoProviderOpened(state, label);
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

    for (const prompt of ["Call", "Call them", "Call someone"]) {
      const state = await command(prompt);
      assert.equal(state.commandResult?.intent, "call.target_needed", `${prompt} should ask who to call`);
      assert.equal(state.commandResult?.status, "needs-input", `${prompt} should need a target`);
      assert.match(state.commandResult?.response || "", /who should i call/i, `${prompt} should ask who to call`);
      assertNoExecutablePendingAction(state, prompt);
    }

    const john = await command("Call John");
    assert.equal(john.commandResult?.intent, "call.number_needed", "John without a phone should ask for a number");
    assert.equal(john.commandResult?.status, "needs-input", "John without a phone should need input");
    assert.match(john.commandResult?.response || "", /phone number/i, "John without a phone should mention phone number");
    assert.match(john.commandResult?.response || "", /country code/i, "John without a phone should request country code");
    assertNoExecutablePendingAction(john, "Call John without phone");

    const doctor = await command("Call my doctor");
    assert.equal(doctor.commandResult?.intent, "call.number_needed", "Doctor without a saved number should ask for a number");
    assert.equal(doctor.commandResult?.status, "needs-input", "Doctor without a saved number should need input");
    assert.match(doctor.commandResult?.response || "", /phone number/i, "Doctor without number should ask for phone number");
    assert.match(doctor.commandResult?.response || "", /country code/i, "Doctor without number should request country code");
    assertNoExecutablePendingAction(doctor, "Call my doctor without number");

    const duplicate = await command("Call Jordan");
    assert.equal(duplicate.commandResult?.intent, "call.multiple_matches", "Duplicate contact names should ask for choice");
    assert.equal(duplicate.commandResult?.status, "needs-choice", "Duplicate contact names should need choice");
    assert.match(duplicate.commandResult?.response || "", /more than one match/i, "Duplicate contact response should explain ambiguity");
    assertNoExecutablePendingAction(duplicate, "Call duplicate contact");

    const seller = await command("Call the seller");
    assertStagedButNotExecuted(seller, "Call seller", "twilio");
    assert.equal(seller.profile.agentPendingAction.section, "trade", "Seller call should resolve to trade section without marketplace transaction");
    await command("no");

    const workforce = await command("Call workforce support");
    assertStagedButNotExecuted(workforce, "Call workforce support", "twilio");
    assert.equal(workforce.profile.agentPendingAction.section, "workforce", "Workforce support call should resolve to workforce section");
    await command("no");

    const emergency = await command("Call my emergency contact");
    assert.equal(emergency.commandResult?.intent, "call.number_needed", "Emergency contact without saved number should ask for a number");
    assertNoExecutablePendingAction(emergency, "Call my emergency contact");

    const whatsapp = await command("Call Maria on WhatsApp");
    assertStagedButNotExecuted(whatsapp, "Call Maria on WhatsApp", "whatsapp");
    assert.equal(whatsapp.profile.agentPendingAction.providerMetadata.directVoiceReliable, false, "WhatsApp should remain safe handoff/instruction metadata");
    await command("no");

    const telegram = await command("Call Amina on Telegram");
    assertStagedButNotExecuted(telegram, "Call Amina on Telegram", "telegram");
    assert.equal(telegram.profile.agentPendingAction.providerMetadata.fallbackMode, "known-handle-only", "Telegram should remain known-handle-only");
    await command("no");

    const nativePhone = await command("Call Maria using phone");
    assertStagedButNotExecuted(nativePhone, "Call Maria using phone", "twilio");
    assert.notEqual(nativePhone.commandResult?.metadata?.handoff?.nativeCommand, "call.launch", "Generic phone wording should not dispatch native bridge on first utterance");
    await command("no");

    const orphanOkay = await command("okay");
    assert.equal(orphanOkay.commandResult?.intent, "conversation.no_pending_action", "okay without pending action must not execute");
    assertNoExecutablePendingAction(orphanOkay, "orphan okay");
    const orphanSure = await command("sure");
    assert.notEqual(orphanSure.commandResult?.intent, "conversation.confirmed", "sure without pending action must not execute");
    assertNoExecutablePendingAction(orphanSure, "orphan sure");
    for (const prompt of ["yes", "confirm", "do it"]) {
      const state = await command(prompt);
      assert.equal(state.commandResult?.intent, "conversation.no_pending_action", `${prompt} without pending action must not execute`);
      assertNoExecutablePendingAction(state, `orphan ${prompt}`);
    }

    const pending = await command("Call Maria");
    assertStagedButNotExecuted(pending, "Call Maria pending", "twilio");
    const vague = await command("okay");
    assert.equal(vague.commandResult?.intent, "conversation.confirmation_required", "okay must not confirm a high-risk pending call");
    assert(vague.profile?.agentPendingAction, "okay should leave the high-risk call pending");
    assert.equal((vague.profile?.outboundCalls || []).length, 0, "okay should not create outbound call records");
    const confirmed = await command("yes");
    assert.equal(confirmed.commandResult?.intent, "conversation.confirmed", "yes should confirm only the matching pending action");
    assert.equal(confirmed.commandResult?.metadata?.executionConfirmed, true, "explicit confirmation should mark confirmed metadata");

    console.log("Nexus contact resolution QA passed");
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
