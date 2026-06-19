const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = Number(process.env.COMPANION_UNDERSTANDING_SMOKE_PORT || 4456);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-companion-understanding-smoke-db.json");
let cookie = "";

const cases = [
  { prompt: "Hello Nexus", classification: "conversation.greeting" },
  { prompt: "Can you explain AgriNexus?", classification: "conversation.question" },
  { prompt: "I need medicine.", classification: "conversation.need" },
  { prompt: "Work", classification: "conversation.clarify" },
  { prompt: "I am confused and cannot read this.", classification: "conversation.support" },
  { prompt: "Can you prepare that for me?", classification: "workflow.offer" },
  { prompt: "Open Workforce Dashboard", classification: "workflow.stage" },
  { prompt: "Yes, send it", classification: "execution.confirmed" },
  { prompt: "Diagnose me", classification: "execution.blocked" },
  { prompt: "My baby is sick and not breathing", classification: "safety.escalation" },
  { prompt: "Change language to Spanish", classification: "language.change" }
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
  throw new Error("Companion understanding smoke server did not become reachable");
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

(async () => {
  const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
  assert(serverSource.includes("function companionUnderstandingClassification"), "server needs the Companion Understanding classifier");
  assert(appSource.includes("function companionUnderstandingClassification"), "web voice needs the Companion Understanding classifier before routers");
  const handleStart = appSource.indexOf("async function handleVoiceCommandCore");
  const companionCall = appSource.indexOf("rememberCompanionUnderstanding(rawCommand", handleStart);
  const fastLaneCall = appSource.indexOf("const fastLaneIntent = nexusFastLaneIntent", handleStart);
  assert(companionCall > -1 && fastLaneCall > -1 && companionCall < fastLaneCall, "web classifier should run before fast-lane routing");

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
      assert(understanding, `${item.prompt} should include companion understanding metadata`);
      assert.strictEqual(understanding.intent, item.classification, `${item.prompt} should classify as ${item.classification}, got ${understanding.intent}`);
      assert.strictEqual(understanding.routeImpact, "visibility-only", `${item.prompt} classification must not change routing`);
      assert(state.commandResult?.intent, `${item.prompt} should still return the existing command result`);
    }
    console.log("Companion understanding smoke passed");
    for (const item of cases) console.log(`- ${item.prompt} -> ${item.classification}`);
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
