const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_GENESIS_CONVERSATION_ROUTING_QA_PORT || 4597);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-genesis-conversation-routing-qa-db.json");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const orchestrator = require("../public/nexus-genesis-conversational-mode-orchestrator.js");
let cookie = "";

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}(`);
  assert(start >= 0, `${name} should exist`);
  const signatureEnd = source.indexOf(")", start);
  const bodyStart = source.indexOf("{", signatureEnd);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} body should be extractable`);
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForServer() {
  for (let index = 0; index < 90; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Genesis conversation routing QA server did not become reachable");
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

async function runCommand(command) {
  const state = await call("/api/agent/command", {
    command,
    inputMode: "voice",
    outputMode: "voice",
    conversational: true,
    mode: "user",
    targetLanguage: "en"
  });
  return state;
}

(async () => {
  const commandCore = extractFunction(app, "handleVoiceCommandCore");
  assert(app.includes("function nexusNormalConversationPreflightIntent"), "browser must define normal conversation preflight");
  assert(app.includes("function runNexusNormalConversationPreflight"), "browser must run normal conversation preflight");
  assert(
    commandCore.indexOf("runNexusNormalConversationPreflight(trustChainInput") <
      commandCore.indexOf("handleNexusUnifiedBrainRuntimeCommand"),
    "conversation preflight must run before broad workflow/runtime handlers"
  );
  assert(
    commandCore.indexOf("runNexusNormalConversationPreflight(trustChainInput") <
      commandCore.indexOf("launchCapabilityFromVoice"),
    "conversation preflight must run before capability/workflow launchers"
  );
  assert(app.includes("I will only open a workflow when you clearly ask me to start one."), "capability answer must preserve workflow boundary");
  assert(serverSource.includes("function companionDirectConversationIntent"), "server must preserve stable direct conversational intent names");
  assert(serverSource.includes("conversation.hearing_check"), "server must classify hearing checks as conversation");
  assert(serverSource.includes("conversation.capability_summary"), "server must classify capability questions as conversation");

  const conversationCases = [
    ["Nexus, can you hear me?", "conversation.hearing_check", "Yes, I can hear you"],
    ["Hello Nexus.", "conversation.greeting", "Hello"],
    ["Are you listening?", "conversation.hearing_check", "Nexus is listening"],
    ["Talk to me.", "conversation.small_talk", "take this slowly"],
    ["What can you do?", "conversation.capability_summary", "agriculture"],
    ["How are you?", "conversation.how_are_you", "ready to help"],
    ["Tell me about yourself.", "conversation.identity", "Nexus Genesis"]
  ];

  for (const [prompt, expectedIntent] of conversationCases) {
    const routed = orchestrator.orchestrate(prompt, { preferredLanguage: "en", userName: "Ron" });
    assert.equal(routed.responseStrategy, "direct_conversational_response", `${prompt} should be direct conversation`);
    assert(!routed.highRiskActionRequiresExactConfirmation, `${prompt} must not be treated as an action`);
    assert(routed.primaryMode.id === "presence_greeting" || routed.primaryMode.id === "casual_relational", `${prompt} should stay in conversation modes`);
    if (expectedIntent === "conversation.hearing_check") assert(routed.signals.hearingCheck, `${prompt} should set hearingCheck`);
    if (expectedIntent === "conversation.capability_summary") assert(routed.signals.capabilityQuestion, `${prompt} should set capabilityQuestion`);
  }

  const explicitWorkflowCases = [
    "Nexus, show me agriculture training.",
    "Nexus, start telehealth intake.",
    "Nexus, open pharmacy support.",
    "Nexus, prepare a WhatsApp message."
  ];
  for (const prompt of explicitWorkflowCases) {
    const routed = orchestrator.orchestrate(prompt, { preferredLanguage: "en", userName: "Ron" });
    assert.equal(routed.responseStrategy, "continue_existing_router", `${prompt} should remain eligible for workflow routing`);
  }

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
    await call("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    for (const [prompt, expectedIntent, expectedText] of conversationCases) {
      const state = await runCommand(prompt);
      const result = state.commandResult || {};
      const outcome = state.companionRouteOutcome || result.metadata?.companionRouteOutcome || {};
      const response = String(result.response || "");
      assert.equal(result.intent, expectedIntent, `${prompt} should return ${expectedIntent}, got ${result.intent}: ${response}`);
      assert.equal(result.metadata?.redirectSection, "dashboard", `${prompt} should remain on dashboard`);
      assert.equal(result.metadata?.noExecutionAuthorized, true, `${prompt} must not authorize execution`);
      assert.equal(result.metadata?.providerHandoffAuthorized, false, `${prompt} must not authorize provider handoff`);
      assert.notEqual(outcome.actualRouteType, "workflow", `${prompt} must not route as workflow`);
      assert(!outcome.workflowOpened, `${prompt} must not open workflow`);
      assert(response.toLowerCase().includes(expectedText.toLowerCase()), `${prompt} response should include ${expectedText}; got ${response}`);
    }

    for (const prompt of explicitWorkflowCases) {
      const state = await runCommand(prompt);
      const result = state.commandResult || {};
      assert(![
        "conversation.hearing_check",
        "conversation.greeting",
        "conversation.small_talk",
        "conversation.how_are_you"
      ].includes(result.intent), `${prompt} should not be swallowed by ordinary conversation intent`);
    }

    console.log(JSON.stringify({
      ok: true,
      suite: "nexus-genesis-conversation-routing-precedence",
      verifies: [
        "ordinary speech routes to Nexus dialogue",
        "hearing checks do not open workflows",
        "capability questions do not open workflows",
        "browser conversation preflight precedes broad workflow handlers",
        "explicit workflow requests remain routable"
      ]
    }, null, 2));
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
