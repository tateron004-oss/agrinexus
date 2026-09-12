const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.CONFIRMED_CALL_HANDOFF_QA_PORT || 4472);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-confirmed-call-handoff-qa-db.json");
let cookie = "";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function assertContains(source, needle, message) {
  assert(source.includes(needle), message || `Expected source to include ${needle}`);
}

function seedDb() {
  const db = JSON.parse(fs.readFileSync(path.join(root, "db.json"), "utf8"));
  db.profile = db.profile || {};
  db.profile.phoneContacts = [
    { id: "handoff-maria", name: "Maria", lookup: "maria", phone: "+15555550301", relationship: "saved contact", source: "confirmed-call-handoff-qa" },
    { id: "handoff-amina", name: "Amina", lookup: "amina", phone: "+15555550302", relationship: "saved contact", source: "confirmed-call-handoff-qa", telegramHandle: "amina_agri" },
    { id: "handoff-john-a", name: "John", lookup: "john", phone: "+15555550303", relationship: "saved contact", source: "confirmed-call-handoff-qa-a" },
    { id: "handoff-john-b", name: "John", lookup: "john", phone: "+15555550304", relationship: "saved contact", source: "confirmed-call-handoff-qa-b" }
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
  throw new Error("Confirmed call handoff QA server did not become reachable");
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

function assertStagedOnly(state, label) {
  assert.equal(state.commandResult?.status, "needs-confirmation", `${label} should stage for confirmation`);
  assert.equal(state.commandResult?.metadata?.executionDeferred, true, `${label} should defer execution`);
  assert.notEqual(state.commandResult?.metadata?.executionConfirmed, true, `${label} should not be confirmed on first utterance`);
  assert.equal((state.profile?.outboundCalls || []).length, 0, `${label} should not create a Twilio call on first utterance`);
}

(async () => {
  const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
  const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
  assertContains(app, "function renderConfirmedCallHandoffCard", "Confirmed handoff card should exist");
  assertContains(app, "function isConfirmedCallHandoffResult", "Confirmed handoff card should require confirmed metadata");
  assertContains(app, "const providerLabel = callProviderDisplayLabel(result)", "Confirmed handoff card should prefer providerMetadata label for display");
  assertContains(app, "metadata.executionConfirmed", "Confirmed handoff must key off executionConfirmed");
  assertContains(app, "data-confirmed-call-handoff=\"true\"", "Confirmed handoff should expose a user-clicked link only");
  assertContains(app, "safeConfirmedCallHandoffUrl", "Confirmed handoff URLs should be sanitized");
  assertContains(app, "No browser-launchable handoff link is available", "Unsupported providers should show instruction fallback");
  assertContains(styles, ".confirmed-call-handoff-card", "Confirmed handoff styles should exist");
  const confirmedBlock = app.slice(app.indexOf("function renderConfirmedCallHandoffCard"), app.indexOf("function renderPendingCallActionCard"));
  assert(!/window\.location\s*=|location\.href\s*=|\.click\(\)/.test(confirmedBlock), "Confirmed handoff UI must not auto-launch provider links");
  const nativePayloadBlock = app.slice(app.indexOf("function confirmedNativeCallHandoffPayload"), app.indexOf("function nativeCallLaunchBridgeAvailable"));
  assert(!nativePayloadBlock.includes("providerMetadata"), "Native call dispatch safety must not rely on providerMetadata");

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

    const nativeStaged = await command("call Maria on native phone dialer");
    assertStagedOnly(nativeStaged, "native phone handoff");
    assert.equal(nativeStaged.profile.agentPendingAction.handoff.url, "tel:+15555550301", "native phone should stage a tel URL only inside pending metadata");
    const vague = await command("okay");
    assert.equal(vague.commandResult?.intent, "conversation.confirmation_required", "okay should not confirm a high-risk call");
    assert.equal((vague.profile?.outboundCalls || []).length, 0, "okay should not handoff or call");
    const nativeConfirmed = await command("yes");
    assert.equal(nativeConfirmed.commandResult?.intent, "conversation.confirmed", "allowed confirmation should execute staged handoff");
    assert.equal(nativeConfirmed.commandResult?.metadata?.executionConfirmed, true, "confirmed handoff should expose executionConfirmed");
    assert.equal(nativeConfirmed.commandResult?.metadata?.handoff?.url, "tel:+15555550301", "confirmed native phone should return tel handoff metadata");
    assert.equal(nativeConfirmed.commandResult?.metadata?.providerMetadata?.nativeEligible, true, "confirmed native phone should expose native eligibility metadata");
    assert.equal(nativeConfirmed.commandResult?.metadata?.providerMetadata?.browserEligible, true, "confirmed native phone should expose browser eligibility metadata");
    assert.equal(nativeConfirmed.commandResult?.metadata?.liveCallPlaced, false, "native phone handoff should not place a live call");

    const missing = await command("call Unknown Person");
    assert.equal(missing.commandResult?.intent, "call.number_needed", "missing number should ask for input");
    assert(!missing.profile?.agentPendingAction, "missing number should not stage executable call");

    const duplicate = await command("call John");
    assert.equal(duplicate.commandResult?.intent, "call.multiple_matches", "duplicate names should ask for a choice");
    assert(!duplicate.profile?.agentPendingAction, "duplicate names should not stage executable call");

    const whatsapp = await command("call Maria on WhatsApp");
    assertStagedOnly(whatsapp, "WhatsApp handoff");
    const whatsappConfirmed = await command("confirm");
    assert.equal(whatsappConfirmed.commandResult?.metadata?.provider, "whatsapp", "WhatsApp confirmation should return provider metadata");
    assert.match(whatsappConfirmed.commandResult?.metadata?.handoff?.fallbackText || "", /not reliable/i, "WhatsApp should keep safe fallback language");
    assert.equal(whatsappConfirmed.commandResult?.metadata?.liveCallPlaced, false, "WhatsApp should not place a live call");

    const telegram = await command("call Amina on Telegram");
    assertStagedOnly(telegram, "Telegram handoff");
    const telegramConfirmed = await command("do it");
    assert.equal(telegramConfirmed.commandResult?.metadata?.provider, "telegram", "Telegram confirmation should return provider metadata");
    assert.equal(telegramConfirmed.commandResult?.metadata?.providerMetadata?.fallbackMode, "known-handle-only", "Telegram provider metadata should remain known-handle-only");
    assert.match(telegramConfirmed.commandResult?.metadata?.handoff?.fallbackText || "", /known Telegram/i, "Telegram should keep safe fallback language");
    assert.equal(telegramConfirmed.commandResult?.metadata?.handoff?.url, "https://t.me/amina_agri", "Telegram handoff should use known handle only");

    const twilio = await command("call Maria");
    assertStagedOnly(twilio, "Twilio call");
    const twilioConfirmed = await command("yes");
    assert.equal(twilioConfirmed.commandResult?.metadata?.provider, "twilio", "Twilio confirmation should return provider metadata");
    assert.equal(twilioConfirmed.commandResult?.metadata?.liveCallPlaced, false, "missing Twilio config should not place a live call");
    assert.equal(twilioConfirmed.profile?.outboundCalls?.[0]?.status, "needs-twilio-call-config", "Twilio missing config should remain safe");

    console.log("Confirmed call handoff QA passed");
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
