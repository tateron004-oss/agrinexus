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

// Voice access for Tool 5 (Project/Task Manager): add a task, and
// mark/complete/update an existing one's status. "add|create|new" vs.
// "mark|update|set|change|complete|finish" are checked so that adding a
// task and completing one never collide (wantsAddTask is excluded from
// wantsUpdateTaskStatus explicitly, since "update" alone doesn't imply
// "not adding").
test("'add a task' is recognized as creating a task, not a new workspace", async () => {
  const withTitle = await callBusinessAssistant("Add a task to call the vendor, due Friday, assign to Sarah, high priority");
  assert.equal(withTitle.status, "blocked");
  assert.match(withTitle.response, /PostgreSQL/i);
  const withoutTitle = await callBusinessAssistant("Add a new task");
  assert.equal(withoutTitle.status, "needs-input");
  assert.equal(withoutTitle.missingInformation[0], "title");
});

test("'mark/complete a task's status' is recognized as a status update, not creating a new task", async () => {
  const withStatus = await callBusinessAssistant("Complete the task to follow up with the donor");
  assert.equal(withStatus.status, "blocked");
  assert.match(withStatus.response, /PostgreSQL/i);
  const withoutStatus = await callBusinessAssistant("Update the task");
  assert.equal(withoutStatus.status, "needs-input");
  assert.equal(withoutStatus.missingInformation[0], "status");
});

// Voice access for Tool 9 (Appointment Scheduler): add a local appointment
// plan, and sync an existing one to the real, configured calendar provider.
// "sync" is checked first and excludes wantsAddAppointment explicitly, so
// "sync the appointment to my calendar" is never misread as adding a new
// appointment named "my calendar".
test("'add/schedule an appointment' is recognized as a local appointment plan, not a calendar sync or a new workspace", async () => {
  const withTitle = await callBusinessAssistant("Add an appointment called Client meeting on Friday at 2pm");
  assert.equal(withTitle.status, "blocked");
  assert.match(withTitle.response, /PostgreSQL/i);
  const withoutTitle = await callBusinessAssistant("Schedule a new appointment");
  assert.equal(withoutTitle.status, "needs-input");
  assert.equal(withoutTitle.missingInformation[0], "title");
});

test("'sync an appointment to my calendar' is recognized as a real calendar sync, not adding a new appointment", async () => {
  const result = await callBusinessAssistant("Sync the Client meeting appointment to my calendar");
  assert.equal(result.status, "blocked");
  assert.match(result.response, /PostgreSQL/i);
});

// Voice access for Tool 8 (Document/Form Builder): generate the service
// agreement, client intake form, and application checklist templates.
// Requires only the workspace (no free-text fields to extract), so a
// well-formed request always reaches the real database lookup -- the
// observable proof of routing is "blocked"/PostgreSQL, matching every other
// no-local-field sub-intent (see the invoice-PDF and appointment-sync
// tests above). Also proves this doesn't collide with the invoice-PDF
// generator, since both are triggered by a "generate" verb.
test("'create/generate a service agreement/contract/intake form/application checklist' is recognized as generating document templates, not an invoice PDF or a new workspace", async () => {
  const documents = await callBusinessAssistant("Generate a service agreement and client intake form");
  assert.equal(documents.status, "blocked");
  assert.match(documents.response, /PostgreSQL/i);
  // Neither trigger requires the other's keyword ("service agreement" etc.
  // vs. literal "invoice"), so an invoice-PDF request still reaches the
  // real lookup unaffected by this new sub-intent.
  const invoice = await callBusinessAssistant("Generate the PDF for invoice INV-1001");
  assert.equal(invoice.status, "blocked");
  assert.match(invoice.response, /PostgreSQL/i);
});

// Voice access for the Business Plan Builder: generate the real, printable
// PDF of the already-saved business plan document. Scoped to the literal
// phrase "business plan" plus a pdf/document word, so it doesn't collide
// with the invoice-PDF generator (scoped to "invoice") or the document/form
// builder (scoped to "service agreement"/"contract"/"intake form"/
// "application checklist").
test("'generate/print the business plan PDF' is recognized as exporting the business plan, not an invoice PDF or document templates", async () => {
  const plan = await callBusinessAssistant("Generate the business plan PDF");
  assert.equal(plan.status, "blocked");
  assert.match(plan.response, /PostgreSQL/i);
  const invoice = await callBusinessAssistant("Generate the PDF for invoice INV-1001");
  assert.equal(invoice.status, "blocked");
  const documents = await callBusinessAssistant("Generate a service agreement");
  assert.equal(documents.status, "blocked");
});

// Voice access for Tool 6 (Marketing Content Creator): generate a flyer,
// newsletter, and promotional email draft. Scoped to
// flyer/newsletter/promotional-email/marketing-material wording, so it
// doesn't collide with the invoice-PDF generator (literal "invoice"), the
// document/form builder (service agreement/contract/intake form/
// application checklist), or the business-plan-PDF generator (literal
// "business plan").
test("'create/generate a flyer/newsletter/promotional email' is recognized as generating marketing drafts, not any other generate action", async () => {
  const marketing = await callBusinessAssistant("Create a flyer and a promotional email");
  assert.equal(marketing.status, "blocked");
  assert.match(marketing.response, /PostgreSQL/i);
  const invoice = await callBusinessAssistant("Generate the PDF for invoice INV-1001");
  assert.equal(invoice.status, "blocked");
  const documents = await callBusinessAssistant("Generate a service agreement");
  assert.equal(documents.status, "blocked");
  const plan = await callBusinessAssistant("Generate the business plan PDF");
  assert.equal(plan.status, "blocked");
});
