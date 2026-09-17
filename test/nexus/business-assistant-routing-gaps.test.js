const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4559;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-business-assistant-routing-gaps-db.json");

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

async function callBusinessAssistant(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_business_assistant", arguments: { command, ...extra } })
  });
  return res.json();
}

test("an ordinary sentence mentioning 'my business'/'my nonprofit' is not misrouted into the workspace-list attempt", async () => {
  // No live Postgres in this test environment, so the real list path
  // (wantsList === true) always fails with a "blocked"/PostgreSQL response
  // instead of the local needs-input branch -- that difference is what
  // proves whether wantsList fired, without needing a real database.
  const business = await callBusinessAssistant("My business needs help with cash flow");
  assert.equal(business.status, "needs-input", "must reach local name-extraction, not the list path");
  const nonprofit = await callBusinessAssistant("My nonprofit is struggling with fundraising, what can I do?");
  assert.equal(nonprofit.status, "needs-input");
});

test("a real listing request ('list'/'show'/'which'/'what' next to the noun) still attempts the real workspace-list lookup", async () => {
  const list = await callBusinessAssistant("List my business workspaces.");
  assert.equal(list.status, "blocked");
  assert.match(list.response, /PostgreSQL/i);
  const which = await callBusinessAssistant("Which business workspace is active?");
  assert.equal(which.status, "blocked");
  assert.match(which.response, /PostgreSQL/i);
});

test("'for' in a purpose clause is not captured as the business name", async () => {
  const result = await callBusinessAssistant("Create a nonprofit for helping smallholder farmers");
  assert.equal(result.status, "needs-input");
  assert.doesNotMatch(result.response, /helping smallholder farmers/i);
});

test("'called'/'named'/'titled' still extract the real business name, unaffected by the 'for' fix", async () => {
  const called = await callBusinessAssistant("Start a business called Acme Farms Cooperative");
  assert.equal(called.status, "needs-confirmation");
  assert.match(called.response, /Acme Farms Cooperative/);
});

// Voice access for Tool 1 (Customer/Donor Tracker) and Tool 2 (Income/Expense
// Tracker): "add a customer/donor" and "log an expense/income" must be
// recognized and routed BEFORE the "start a new workspace" fallback, so they
// never get misread as a request to create a workspace named after the
// person or the amount. Local extraction (name/amount) runs before any real
// database lookup, so a missing field is testable here without live
// Postgres; once extraction succeeds, resolving which workspace to act on
// does require the database, so -- exactly like the listing tests above --
// the observable proof that routing worked is a real "blocked"/PostgreSQL
// response, not a local needs-input.
test("'add a customer/donor/lead' is recognized as adding a contact, not creating a new workspace", async () => {
  const withName = await callBusinessAssistant("Add a donor named Maria Chen");
  assert.equal(withName.status, "blocked");
  assert.match(withName.response, /PostgreSQL/i);
  const withoutName = await callBusinessAssistant("Add a new donor");
  assert.equal(withoutName.status, "needs-input");
  assert.equal(withoutName.missingInformation[0], "name");
  assert.doesNotMatch(withoutName.response, /workspace/i);
});

test("'log/record an expense or income' is recognized as a transaction entry, not creating a new workspace", async () => {
  const withAmount = await callBusinessAssistant("Log a $50 expense for supplies");
  assert.equal(withAmount.status, "blocked");
  assert.match(withAmount.response, /PostgreSQL/i);
  const withoutAmount = await callBusinessAssistant("Record an expense");
  assert.equal(withoutAmount.status, "needs-input");
  assert.equal(withoutAmount.missingInformation[0], "amount");
});
