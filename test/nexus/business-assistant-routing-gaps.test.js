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

// Voice access for Tool 3 (Invoice/Receipt Generator): create an invoice,
// add a line item to one, and generate its real, printable PDF. All three
// must be recognized before the "start a new workspace" fallback (an
// invoice/receipt request should never be misread as "create a workspace
// called Jane's Bakery"), and the three phrasings must not collide with
// each other (an "add a line item" request must not be read as "create an
// invoice", and a "generate the PDF" request must not be read as either).
test("'create an invoice/receipt' is recognized as creating an invoice, not a new workspace", async () => {
  const result = await callBusinessAssistant("Create an invoice for Jane's Bakery");
  assert.equal(result.status, "blocked");
  assert.match(result.response, /PostgreSQL/i);
});

test("'add a line item to an invoice' is recognized as an invoice line item, not creating a new invoice or workspace", async () => {
  const withPrice = await callBusinessAssistant("Add a line item to invoice INV-1001: 2 hours of consulting at $75");
  assert.equal(withPrice.status, "blocked");
  assert.match(withPrice.response, /PostgreSQL/i);
  const withoutPrice = await callBusinessAssistant("Add a line item to the invoice");
  assert.equal(withoutPrice.status, "needs-input");
  assert.equal(withoutPrice.missingInformation[0], "unitPrice");
});

test("'generate/print the invoice PDF' is recognized as exporting a PDF, not adding a line item or creating an invoice", async () => {
  const result = await callBusinessAssistant("Generate the PDF for invoice INV-1001");
  assert.equal(result.status, "blocked");
  assert.match(result.response, /PostgreSQL/i);
});

// Voice access for Tool 4 (Grant/Funding Tracker): add a grant/funding
// opportunity, and mark/update an existing one's status. The two verb sets
// (add|create|new|log|track vs. mark|update|set|change) are disjoint, so a
// status-update command is never misread as adding a new grant and vice
// versa; both are recognized before the "start a new workspace" fallback.
test("'add/track a grant or funding opportunity' is recognized as tracking a grant, not creating a new workspace", async () => {
  const withFunder = await callBusinessAssistant("Add a grant from the Ford Foundation for $10,000");
  assert.equal(withFunder.status, "blocked");
  assert.match(withFunder.response, /PostgreSQL/i);
  const withoutFunder = await callBusinessAssistant("Track a new funding opportunity");
  assert.equal(withoutFunder.status, "needs-input");
  assert.equal(withoutFunder.missingInformation[0], "funderName");
});

test("'mark/update a grant's status' is recognized as a status update, not adding a new grant", async () => {
  const withStatus = await callBusinessAssistant("Mark the Ford Foundation grant as submitted");
  assert.equal(withStatus.status, "blocked");
  assert.match(withStatus.response, /PostgreSQL/i);
  const withoutStatus = await callBusinessAssistant("Update the grant");
  assert.equal(withoutStatus.status, "needs-input");
  assert.equal(withoutStatus.missingInformation[0], "status");
});
