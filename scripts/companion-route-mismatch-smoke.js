const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = Number(process.env.COMPANION_ROUTE_MISMATCH_SMOKE_PORT || 4457);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-companion-route-mismatch-smoke-db.json");
let cookie = "";

const cases = [
  { prompt: "Work", companionIntent: "conversation.clarify", mismatch: false, workflowDeferred: true },
  { prompt: "Medicine", companionIntent: "conversation.clarify", mismatch: false, workflowDeferred: true },
  { prompt: "I need medicine", companionIntent: "conversation.need", mismatch: false, workflowDeferred: true },
  { prompt: "My crops are failing", companionIntent: "conversation.need", mismatch: false, workflowDeferred: true },
  { prompt: "Help me sell maize", companionIntent: "conversation.need", mismatch: false, workflowDeferred: true },
  { prompt: "Open map", companionIntent: "workflow.stage", mismatch: false },
  { prompt: "Start health intake", companionIntent: "workflow.stage", mismatch: false },
  { prompt: "Can you explain AgriNexus?", companionIntent: "conversation.question", mismatch: false },
  { prompt: "My baby is sick and not breathing", companionIntent: "safety.escalation", mismatch: false, allowedRouteTypes: ["safety"] }
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
  throw new Error("Companion route mismatch smoke server did not become reachable");
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

(async () => {
  const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
  assert(serverSource.includes("function companionRouteOutcomeMetadata"), "server needs Companion Route Mismatch metadata");
  assert(serverSource.includes("routeMismatch"), "server route outcome should expose mismatch flags");

  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  const mismatches = [];
  try {
    await waitForServer();
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
    for (const item of cases) {
      const state = await call("/api/agent/command", {
        command: item.prompt,
        inputMode: "voice",
        outputMode: "voice",
        conversational: true,
        mode: "user",
        targetLanguage: "en"
      });
      const understanding = state.companionUnderstanding || state.commandResult?.metadata?.companionUnderstanding;
      const outcome = state.companionRouteOutcome || state.commandResult?.metadata?.companionRouteOutcome;
      assert(understanding, `${item.prompt} should include companion understanding metadata`);
      assert(outcome, `${item.prompt} should include companion route outcome metadata`);
      assert.strictEqual(understanding.intent, item.companionIntent, `${item.prompt} should classify as ${item.companionIntent}, got ${understanding.intent}`);
      assert.strictEqual(outcome.companionIntent, item.companionIntent, `${item.prompt} route outcome should carry companion intent`);
      assert.strictEqual(outcome.routeMismatch, item.mismatch, `${item.prompt} mismatch should be ${item.mismatch}, got ${outcome.routeMismatch}: ${outcome.mismatchReason}`);
      if (item.workflowDeferred) {
        assert.strictEqual(state.commandResult?.metadata?.workflowDeferred, true, `${item.prompt} should defer the workflow`);
        assert.strictEqual(state.commandResult?.metadata?.constitutionPhase, "phase-3-workflow-offer", `${item.prompt} should carry Phase 3 metadata`);
      }
      if (item.allowedRouteTypes) {
        assert(item.allowedRouteTypes.includes(outcome.actualRouteType), `${item.prompt} should route through ${item.allowedRouteTypes.join(" or ")}, got ${outcome.actualRouteType}`);
      }
      if (outcome.routeMismatch) mismatches.push({ prompt: item.prompt, outcome });
    }
    console.log("Companion route mismatch smoke passed");
    for (const item of cases) {
      const marker = item.workflowDeferred ? "deferred" : item.mismatch ? "mismatch" : "aligned";
      console.log(`- ${item.prompt} -> ${item.companionIntent} (${marker})`);
    }
    console.log(`Detected mismatches: ${mismatches.length}`);
    for (const item of mismatches) {
      console.log(`- ${item.prompt}: ${item.outcome.mismatchReason}`);
    }
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
