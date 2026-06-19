const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = Number(process.env.COMPANION_WORKFLOW_OFFER_SMOKE_PORT || 4458);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-companion-workflow-offer-smoke-db.json");
let cookie = "";

const deferredCases = [
  {
    prompt: "Work",
    companionIntent: "conversation.clarify",
    mustInclude: ["work opportunities", "what type of work"],
    deferredWorkflowName: "workforce.guided-search"
  },
  {
    prompt: "Medicine",
    companionIntent: "conversation.clarify",
    mustInclude: ["medicine-related guidance", "child", "trouble breathing"],
    deferredWorkflowName: "health.medicine-support"
  },
  {
    prompt: "I need medicine",
    companionIntent: "conversation.need",
    mustInclude: ["safe step", "can't prescribe"],
    deferredWorkflowName: "health.medicine-support"
  },
  {
    prompt: "My crops are failing",
    companionIntent: "conversation.need",
    mustInclude: ["what crop", "symptoms"],
    deferredWorkflowName: "trade.crop-support"
  },
  {
    prompt: "Help me sell maize",
    companionIntent: "conversation.need",
    mustInclude: ["how much maize", "where is it located"],
    deferredWorkflowName: "trade.crop-sale"
  }
];

const explicitCases = [
  { prompt: "Open map", companionIntent: "workflow.stage" },
  { prompt: "Start health intake", companionIntent: "workflow.stage" },
  { prompt: "Show workforce dashboard", companionIntent: "workflow.stage" },
  { prompt: "Contact the buyer", allowedIntents: ["trade.buyer_contact", "conversation.pending_action"] },
  { prompt: "Message the buyer", allowedIntents: ["trade.buyer_seller_message", "trade.buyer_contact", "conversation.pending_action"] },
  { prompt: "Draft a buyer message", allowedIntents: ["trade.buyer_contact", "trade.buyer_seller_message", "conversation.pending_action"] }
];

const buyerConversationCases = [
  "Can AgriTrade talk to me about selling crops and contacting buyers?",
  "Can you explain how to contact buyers?",
  "Tell me about selling crops.",
  "How do I find buyers?",
  "What should I say to a buyer?",
  "Help me understand crop selling."
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
  throw new Error("Companion workflow offer smoke server did not become reachable");
}

async function call(route, body) {
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
  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });

    for (const item of deferredCases) {
      const state = await command(item.prompt);
      const understanding = state.companionUnderstanding || state.commandResult?.metadata?.companionUnderstanding;
      const outcome = state.companionRouteOutcome || state.commandResult?.metadata?.companionRouteOutcome;
      const metadata = state.commandResult?.metadata || {};
      const response = String(state.commandResult?.response || "").toLowerCase();
      assert.strictEqual(understanding?.intent, item.companionIntent, `${item.prompt} should classify as ${item.companionIntent}`);
      assert.notStrictEqual(state.commandResult?.intent, "workflow.offer", `${item.prompt} should preserve the existing route intent while adding workflow-offer metadata`);
      assert.strictEqual(metadata.workflowDeferred, true, `${item.prompt} should defer workflow`);
      assert.strictEqual(metadata.workflowOffered, true, `${item.prompt} should offer workflow`);
      assert.strictEqual(metadata.deferredWorkflowName, item.deferredWorkflowName, `${item.prompt} should name deferred workflow`);
      assert.strictEqual(metadata.constitutionPhase, "phase-3-workflow-offer", `${item.prompt} should carry Phase 3 constitution marker`);
      assert.strictEqual(outcome?.routeMismatch, false, `${item.prompt} should no longer be a route mismatch`);
      assert.strictEqual(outcome?.workflowOpened, false, `${item.prompt} should not open workflow immediately`);
      for (const phrase of item.mustInclude) {
        assert(response.includes(phrase), `${item.prompt} response should include "${phrase}"`);
      }
    }

    for (const item of explicitCases) {
      const state = await command(item.prompt);
      const understanding = state.companionUnderstanding || state.commandResult?.metadata?.companionUnderstanding;
      const metadata = state.commandResult?.metadata || {};
      const outcome = state.companionRouteOutcome || state.commandResult?.metadata?.companionRouteOutcome;
      if (item.companionIntent) assert.strictEqual(understanding?.intent, item.companionIntent, `${item.prompt} should remain ${item.companionIntent}`);
      if (item.allowedIntents) assert(item.allowedIntents.includes(state.commandResult?.intent), `${item.prompt} should remain an explicit buyer workflow route, got ${state.commandResult?.intent}`);
      assert.notStrictEqual(metadata.workflowDeferred, true, `${item.prompt} should not be deferred as a workflow offer`);
      assert.strictEqual(outcome?.routeMismatch, false, `${item.prompt} should stay aligned`);
    }

    for (const prompt of buyerConversationCases) {
      const state = await command(prompt);
      const metadata = state.commandResult?.metadata || {};
      const outcome = state.companionRouteOutcome || metadata.companionRouteOutcome;
      assert.strictEqual(state.commandResult?.intent, "conversation.open_reasoning", `${prompt} should route conversation-first`);
      assert.strictEqual(metadata.workflowDeferred, true, `${prompt} should defer buyer workflow`);
      assert.strictEqual(metadata.deferredWorkflowName, "trade.buyer-contact", `${prompt} should offer buyer-contact as deferred workflow`);
      assert.strictEqual(outcome?.actualRouteType, "conversation", `${prompt} should have conversation route outcome`);
      assert.strictEqual(outcome?.executionAttempted, false, `${prompt} should not attempt execution`);
      assert.strictEqual(outcome?.workflowOpened, false, `${prompt} should not open workflow`);
    }

    const safety = await command("My baby is sick and not breathing");
    assert.strictEqual(safety.companionUnderstanding?.intent || safety.commandResult?.metadata?.companionUnderstanding?.intent, "safety.escalation", "safety phrase should remain safety escalation");
    assert.notStrictEqual(safety.commandResult?.metadata?.workflowDeferred, true, "safety escalation should not be deferred as a workflow offer");

    console.log("Companion workflow offer smoke passed");
    for (const item of deferredCases) console.log(`- ${item.prompt} -> workflow deferred (${item.deferredWorkflowName})`);
    for (const item of explicitCases) console.log(`- ${item.prompt} -> explicit workflow preserved`);
    for (const prompt of buyerConversationCases) console.log(`- ${prompt} -> buyer conversation first`);
    console.log("- My baby is sick and not breathing -> safety preserved");
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
