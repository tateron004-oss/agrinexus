"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (cloud-agent audit): unlike every direct REST health-write route (canWriteHealth /
// userIsRestrictedFrom(user, "health-record-write")) and unlike /api/trade/wallet and
// /api/trade/advanced's quote/release actions (userIsRestrictedFrom(user, "external-transaction")),
// the legacy Cloud Agent's own tool dispatch (executeAgentTool's health.* branches, and
// createTradeLogisticsWorkflow's "settlement" branch reached via trade.wallet_payment and directly via
// /api/trade/logistics) had NO restriction check at all. /api/cloud-agent/run is gated only on
// canUse(user, "ai") -- which Investor holds -- and self-approves any run via {approved: true}, so an
// Investor account could POST a health- or payment-flavored goal with {execute:true, approved:true} and
// reach a real health-record write or a real wallet credit.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-cloud-agent-role-restriction-bypass-db.json");

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
let adminCookie;
let investorCookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const adminRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  adminCookie = adminRes.headers.get("set-cookie").split(";")[0];

  const email = "cloud-agent-restriction-bypass-test@example.com";
  const created = await fetch(`${base}/api/admin/investor-user`, {
    method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ email, password: "Investor2026!", name: "Cloud Agent Restriction Test" })
  });
  assert.equal(created.status, 200, JSON.stringify(await created.clone().json()));
  const investorLogin = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password: "Investor2026!" })
  });
  assert.equal(investorLogin.status, 200);
  investorCookie = investorLogin.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function post(pathname, body, cookie) {
  const res = await fetch(`${base}${pathname}`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body || {})
  });
  return { status: res.status, body: await res.json() };
}

test("an Investor account cannot write a real health record through a self-approved cloud-agent run", async () => {
  const before = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  const intakesBefore = (before.profile.healthIntakes || []).length;

  const result = await post("/api/cloud-agent/run", { goal: "prepare a telehealth patient intake", execute: true, approved: true }, investorCookie);
  assert.equal(result.status, 200, JSON.stringify(result.body));
  const run = result.body.cloudAgentResult.run;
  const healthStep = run.steps.find(step => step.tool && step.tool.startsWith("health."));
  assert.ok(healthStep, "expected the telehealth-flavored plan to include a health.* step");
  // A refused/thrown step can come back as "failed" or, via the cloud agent's own self-correction path
  // (an ai.copilot fallback summary, not a retry of the real action), "self-corrected" -- either way it
  // must never be "executed", and no real health record may exist.
  assert.notEqual(healthStep.status, "executed", `a health.* step must not execute for a restricted account, got: ${JSON.stringify(healthStep)}`);
  const errorText = healthStep.error || healthStep.selfCorrection?.fallbackResult || "";
  assert.match(JSON.stringify(healthStep), /cannot write real health records/i);

  const after = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.equal((after.profile.healthIntakes || []).length, intakesBefore, "no real health intake may have been created for a restricted account");

  const asAdmin = await post("/api/cloud-agent/run", { goal: "prepare a telehealth patient intake", execute: true, approved: true }, adminCookie);
  assert.equal(asAdmin.status, 200, JSON.stringify(asAdmin.body));
  const adminRun = asAdmin.body.cloudAgentResult.run;
  const adminHealthStep = adminRun.steps.find(step => step.tool && step.tool.startsWith("health."));
  assert.equal(adminHealthStep.status, "executed", `a real account must still be able to run health.* steps, got: ${JSON.stringify(adminHealthStep)}`);
  void errorText;
});

test("an Investor account cannot post a real wallet-crediting payment through the cloud agent's trade.wallet_payment tool", async () => {
  // Set up an order that is genuinely eligible for settlement (Delivered, not yet settled) so that
  // without the restriction fix this step would actually succeed and credit the wallet -- otherwise the
  // "not Delivered yet" guard alone would make the step fail regardless of the restriction bug.
  const orderRes = await post("/api/trade/logistics", { type: "shipping-booking" }, adminCookie);
  assert.equal(orderRes.status, 200, JSON.stringify(orderRes.body));
  const orderId = orderRes.body.tradeLogisticsResult.order.id;
  const before = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  const order = before.profile.orders.find(item => item.id === orderId);
  order.stage = "Delivered";
  fs.writeFileSync(tempDbPath, JSON.stringify(before));
  const walletBefore = Number(before.profile.wallet || 0);

  const result = await post("/api/cloud-agent/run", { goal: "make a payment for the last order", execute: true, approved: true }, investorCookie);
  assert.equal(result.status, 200, JSON.stringify(result.body));
  const run = result.body.cloudAgentResult.run;
  const walletStep = run.steps.find(step => step.tool === "trade.wallet_payment");
  assert.ok(walletStep, "expected the payment-flavored plan to include a trade.wallet_payment step");
  assert.notEqual(walletStep.status, "executed", `a trade.wallet_payment step must not execute for a restricted account, got: ${JSON.stringify(walletStep)}`);

  const after = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.equal(Number(after.profile.wallet || 0), walletBefore, "the real wallet balance must be unchanged by a restricted account's cloud-agent run");
});

test("an Investor account cannot post a real settlement payment via POST /api/trade/logistics directly", async () => {
  const orderRes = await post("/api/trade/logistics", { type: "shipping-booking" }, adminCookie);
  assert.equal(orderRes.status, 200, JSON.stringify(orderRes.body));
  const orderId = orderRes.body.tradeLogisticsResult.order.id;
  await post("/api/trade/tracking", { orderId }, adminCookie);
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  const order = db.profile.orders.find(item => item.id === orderId);
  order.stage = "Delivered";
  fs.writeFileSync(tempDbPath, JSON.stringify(db));

  const asInvestor = await post("/api/trade/logistics", { type: "settlement", orderId }, investorCookie);
  assert.equal(asInvestor.status, 403, JSON.stringify(asInvestor.body));

  const asAdmin = await post("/api/trade/logistics", { type: "settlement", orderId }, adminCookie);
  assert.equal(asAdmin.status, 200, JSON.stringify(asAdmin.body));
});

test("the cloud agent's default accessibility-review mission stays within its 20-item cap across repeated runs", async () => {
  for (let i = 0; i < 25; i += 1) {
    const result = await post("/api/cloud-agent/run", { goal: "prepare accessible telehealth support", execute: true, approved: true }, adminCookie);
    assert.equal(result.status, 200, JSON.stringify(result.body));
  }
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.ok(db.profile.telehealthAccessibility.length <= 20, `telehealthAccessibility must stay capped at 20, got ${db.profile.telehealthAccessibility.length}`);
});

test("account export discloses the cloudAgentAudit gap even when none of its already-disclosed bucket-siblings (agentExecutions, cloudAgentQueue, etc.) are populated", async () => {
  // Isolate: clear every OTHER key in this disclosure bucket so only cloudAgentAudit -- populated by
  // every prior test in this file via cloudAgentAudit() -- can be the reason the gap line appears.
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.ok(Array.isArray(db.profile.cloudAgentAudit) && db.profile.cloudAgentAudit.length > 0, "expected prior tests to have already populated cloudAgentAudit");
  for (const key of ["agentExecutions", "evidenceExports", "integrationEvents", "noVendorUpgradeRuns", "localScenarioMissions", "offlineReasoningRuns", "operationalEfficiencyRuns", "autonomousOperatingLoops", "collectiveIntelligenceRuns", "collectiveEvolutionProposals", "frontierBrainRuns", "cloudAgentQueue", "cloudAgentCorrections", "workflowIntelligence", "aiRuns", "mentorNotes"]) {
    db.profile[key] = [];
  }
  // New records are now stamped with their owner when saved; the disclosure is for records saved before that (no owner), so make them look like those.
  for (const record of db.profile.cloudAgentAudit) delete record.createdBy;
  fs.writeFileSync(tempDbPath, JSON.stringify(db));

  const exportRes = await fetch(`${base}/api/account/export`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie } });
  const exportBody = await exportRes.json();
  assert.equal(exportRes.status, 200, JSON.stringify(exportBody));
  const gaps = exportBody.knownGaps.join(" | ");
  assert.match(gaps, /cloud-agent run\/correction records/i, "cloudAgentAudit alone must still trigger this disclosure bucket");
});
