const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.PLATFORM_INTELLIGENCE_QA_PORT || 4406);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-platform-intelligence-qa-db.json");
let cookie = "";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForServer() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Platform intelligence QA server did not become reachable");
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

(async () => {
  fs.copyFileSync(sourceDb, tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: ""
    },
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    const initial = await call("/api/state");
    assert(initial.platformIntelligence, "public state must expose platform intelligence");
    assert(initial.platformIntelligence.readyCounts.localDirectory >= 8, "seeded local directory should be available");
    assert(initial.platformIntelligence.agentBlueprints.length >= 4, "agent blueprints should be available");

    const search = await call("/api/platform-intelligence/search", { query: "clinic in Kenya", type: "clinic", country: "Kenya" });
    assert(search.platformIntelligenceResult.matches.length >= 1, "clinic search should find a saved local record");
    assert.equal(search.platformIntelligenceResult.sourceLabel, "Saved AgriNexus directory");

    const recordState = await call("/api/platform-intelligence/record", {
      type: "pharmacy",
      name: "Nairobi County Pharmacy Desk",
      country: "Kenya",
      region: "Nairobi",
      service: "medicine request and stock callback",
      contact: "+254 700 444 555",
      language: "English, Swahili"
    });
    assert(recordState.platformIntelligenceRecord.name.includes("Nairobi"), "manual record should be saved");

    const importState = await call("/api/platform-intelligence/import", {
      csv: "type,name,country,region,service,contact,language,notes\njob,Greenhouse Assistant,Kenya,Nakuru,Farm operations role,jobs@example.com,English|Swahili,Imported pilot role"
    });
    assert.equal(importState.platformIntelligenceImport.rows, 1, "CSV import should add one record");

    const planState = await call("/api/platform-intelligence/daily-plan", { goal: "prepare user demo day" });
    assert(planState.platformIntelligenceDailyPlan.steps.length >= 3, "daily plan should include schedule and smart actions");

    const draftState = await call("/api/platform-intelligence/draft", { audience: "investor", topic: "rural clinic and pharmacy access" });
    assert(draftState.platformIntelligenceDraft.text.includes("AgriNexus"), "draft center should create reviewable message text");

    const voice = await call("/api/agent/command", {
      command: "Nexus find a clinic in Kenya from our directory",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      mode: "user"
    });
    assert.equal(voice.commandResult.intent, "platform_intelligence.directory_search");
    assert(voice.commandResult.response.includes("Saved AgriNexus directory") || voice.commandResult.response.includes("saved AgriNexus directory"), "voice answer should be source-aware");

    console.log("Platform intelligence QA passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.message || error);
  process.exit(1);
});
