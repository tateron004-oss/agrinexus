const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4549;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-ambiguous-cancel-match-safety-db.json");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

let server;
let cookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function callTool(name, command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name, arguments: { command, ...extra } })
  });
  return res.json();
}

test("an ambiguous field visit cancel query refuses to guess, and both plans survive", async () => {
  await callTool("nexus_workflow", "Save this field visit plan from Stockton to Lodi.", { confirmed: true });
  await callTool("nexus_workflow", "Save this field visit plan from Stockton to Lodi Junction.", { confirmed: true });

  const result = await callTool("nexus_workflow", "Cancel my field visit plan to Lodi.", { confirmed: true });
  assert.equal(result.status, "field-visit-ambiguous");

  const after = await callTool("nexus_workflow", "Show my field visit plans.");
  assert.equal(after.response.match(/Lodi/gi)?.length >= 2, true, "both plans must still exist after an ambiguous cancel attempt");
});

test("an ambiguous reminder cancel query refuses to guess, and both reminders survive", async () => {
  await callTool("nexus_automation_reminder", "Remind me to check the irrigation pump tomorrow.", { confirmed: true });
  await callTool("nexus_automation_reminder", "Remind me to check the irrigation pump filter next week.", { confirmed: true });

  const result = await callTool("nexus_automation_reminder", "Cancel my reminder about the irrigation pump.", { confirmed: true });
  assert.equal(result.status, "reminder-ambiguous");

  const after = await callTool("nexus_automation_reminder", "What are my reminders?");
  assert.equal((after.response.match(/irrigation pump/gi) || []).length >= 2, true, "both reminders must still exist after an ambiguous cancel attempt");
});

test("an ambiguous marketplace listing cancel query refuses to guess, and both listings survive", async () => {
  await callTool("nexus_marketplace_logistics", "List 50kg of maize seeds for sale.", { crop: "Maize seeds", quantity: "50kg", confirmed: true });
  await callTool("nexus_marketplace_logistics", "List 100kg of maize seeds for planting.", { crop: "Maize seeds for planting", quantity: "100kg", confirmed: true });

  const result = await callTool("nexus_marketplace_logistics", "Cancel my listing for maize seeds.", { confirmed: true });
  assert.equal(result.status, "blocked");
  assert.match(result.response, /Found 2 matching/i);

  const after = await callTool("nexus_marketplace_logistics", "What is listed on AgriTrade?");
  assert.equal(after.providerData?.realListingCount, 2, "both listings must still exist after an ambiguous cancel attempt");
});

test("a genuine single-match cancel is unaffected by the ambiguity guard, for all three record types", async () => {
  await callTool("nexus_workflow", "Save this field visit plan from Stockton to Galt.", { confirmed: true });
  const fieldVisit = await callTool("nexus_workflow", "Cancel my field visit plan to Galt.", { confirmed: true });
  assert.equal(fieldVisit.status, "field-visit-canceled");

  await callTool("nexus_automation_reminder", "Remind me to pay the water bill tomorrow.", { confirmed: true });
  const reminder = await callTool("nexus_automation_reminder", "Cancel my reminder about the water bill.", { confirmed: true });
  assert.equal(reminder.status, "reminder-canceled");

  await callTool("nexus_marketplace_logistics", "List some tomatoes for sale.", { crop: "Tomatoes", confirmed: true });
  const listing = await callTool("nexus_marketplace_logistics", "Cancel my listing for tomatoes.", { confirmed: true });
  assert.equal(listing.status, "completed");
  assert.match(listing.response, /Removed the saved AgriTrade listing/i);
});
