const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = Number(process.env.COMPANION_CONFIRMATION_GATE_SMOKE_PORT || 4459);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-companion-confirmation-gate-smoke-db.json");
let cookie = "";

const gatedCases = [
  ["Send the buyer a message", "message"],
  ["Call the provider", "outbound_call"],
  ["Call John", "outbound_call"],
  ["llama a Juan", "outbound_call"],
  ["appelle Marie", "outbound_call"],
  ["mpigie Amina", "outbound_call"],
  ["اتصل بمحمد", "outbound_call"],
  ["Submit my application", "application"],
  ["Create the order", "order"],
  ["Share my information", "privacy"],
  ["Change language to Spanish", "settings"],
  ["Schedule appointment", "appointment"],
  ["Make payment", "payment"],
  ["Issue certificate", "certificate"],
  ["Run provider test", "admin_provider_test"]
];

const lowRiskCases = [
  "Open map",
  "Show workforce dashboard",
  "Open learning",
  "Open trade dashboard"
];

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
  throw new Error("Companion confirmation gate smoke server did not become reachable");
}

async function fetchWithRetry(url, options) {
  let lastError;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return await fetch(url, options);
    } catch (error) {
      lastError = error;
      const code = error?.cause?.code || error?.code;
      if (!["ECONNRESET", "ECONNREFUSED"].includes(code) || attempt === 2) throw error;
      await wait(200 + attempt * 150);
    }
  }
  throw lastError;
}

async function call(route, body) {
  const response = await fetchWithRetry(`${base}${route}`, {
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

(async () => {
  const seed = JSON.parse(fs.readFileSync(path.join(root, "db.json"), "utf8"));
  seed.profile = seed.profile || {};
  seed.profile.phoneContacts = [
    { id: "confirm-gate-john", name: "John", lookup: "john", phone: "+15555550201", relationship: "saved contact", source: "confirmation-gate-smoke" },
    { id: "confirm-gate-juan", name: "Juan", lookup: "juan", phone: "+15555550202", relationship: "saved contact", source: "confirmation-gate-smoke" },
    { id: "confirm-gate-marie", name: "Marie", lookup: "marie", phone: "+15555550203", relationship: "saved contact", source: "confirmation-gate-smoke" },
    { id: "confirm-gate-amina", name: "Amina", lookup: "amina", phone: "+15555550204", relationship: "saved contact", source: "confirmation-gate-smoke" },
    { id: "confirm-gate-mohammed", name: "محمد", lookup: "محمد", phone: "+15555550205", relationship: "saved contact", source: "confirmation-gate-smoke" }
  ];
  seed.profile.agentPendingAction = null;
  seed.profile.outboundCalls = [];
  fs.writeFileSync(tempDb, JSON.stringify(seed, null, 2));
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await wait(250);
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });

    for (const [prompt, type] of gatedCases) {
      const state = await command(prompt);
      const metadata = state.commandResult?.metadata || {};
      assert.strictEqual(state.commandResult?.status, "needs-confirmation", `${prompt} should require confirmation`);
      assert.strictEqual(metadata.confirmationRequired, true, `${prompt} should expose confirmationRequired`);
      assert.strictEqual(metadata.executionDeferred, true, `${prompt} should defer execution`);
      assert.strictEqual(metadata.pendingActionType, type, `${prompt} pendingActionType should be ${type}`);
      assert(metadata.pendingActionName, `${prompt} should expose pendingActionName`);
      assert(metadata.confirmationPrompt, `${prompt} should expose confirmationPrompt`);
      assert.deepStrictEqual(metadata.allowedConfirmations, ["yes", "confirm", "do it"], `${prompt} should expose explicit confirmations`);
      assert.strictEqual(metadata.constitutionPhase, "phase-4-confirmation-gate", `${prompt} should carry Phase 4 marker`);
      assert(state.profile?.agentPendingAction, `${prompt} should store a pending action`);
      await command("no");
    }

    for (const prompt of lowRiskCases) {
      const state = await command(prompt);
      const metadata = state.commandResult?.metadata || {};
      assert.notStrictEqual(metadata.confirmationRequired, true, `${prompt} should not require confirmation`);
      assert.notStrictEqual(metadata.executionDeferred, true, `${prompt} should not defer execution`);
    }

    for (const confirmation of ["Yes", "Confirm", "Do it"]) {
      const staged = await command("Send the buyer a message");
      assert.strictEqual(staged.commandResult?.metadata?.executionDeferred, true, `${confirmation} setup should defer`);
      const confirmed = await command(confirmation);
      assert.strictEqual(confirmed.commandResult?.intent, "conversation.confirmed", `${confirmation} should execute pending action`);
      assert(!confirmed.profile?.agentPendingAction, `${confirmation} should clear pending action`);
    }

    const vagueSetup = await command("Call the provider");
    assert.strictEqual(vagueSetup.commandResult?.metadata?.executionDeferred, true, "Call provider should stage before vague confirmation");
    const vague = await command("okay");
    assert.strictEqual(vague.commandResult?.intent, "conversation.confirmation_required", "okay should not execute high-risk action");
    assert.strictEqual(vague.commandResult?.metadata?.confirmationRequired, true, "okay should ask for explicit confirmation");
    await command("no");

    const staleCall = await command("Call John");
    assert.strictEqual(staleCall.commandResult?.metadata?.executionDeferred, true, "Call John should stage before stale confirmation checks");
    await command("no");
    const staleNoPending = await command("confirm");
    assert.strictEqual(staleNoPending.commandResult?.intent, "conversation.no_pending_action", "confirm after cancel should not execute a stale call");

    const noPending = await command("Yes");
    assert.strictEqual(noPending.commandResult?.intent, "conversation.no_pending_action", "yes without pending action should not execute");

    console.log("Companion confirmation gate smoke passed");
    for (const [prompt, type] of gatedCases) console.log(`- ${prompt} -> gated (${type})`);
    for (const prompt of lowRiskCases) console.log(`- ${prompt} -> low-risk immediate`);
    console.log("- Yes / Confirm / Do it -> execute only pending staged action");
    console.log("- okay -> explicit confirmation required");
    console.log("- Yes with no pending action -> no execution");
  } finally {
    server.kill();
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Best effort cleanup for Windows file locks.
    }
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
