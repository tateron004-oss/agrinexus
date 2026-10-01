"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4738;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-drone-agent-ownership-cap-party-reopen-db.json");

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
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function post(pathname, body, cookie = adminCookie) {
  const res = await fetch(`${base}${pathname}`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body || {})
  });
  return { status: res.status, body: await res.json() };
}

async function opsAction(body, cookie = adminCookie) {
  const res = await post("/api/nexus/operations/action", body, cookie);
  return { status: res.status, json: res.body.nexusOperationsResult || res.body };
}

// Found live (drone/cloud-agent audit): unlike the already-fixed /api/trade/drone-scan and
// /api/trade/drone-mission REST routes (source: user.email), the cloud agent's own drone.field_scan/
// drone.flight_plan/drone.intervention_task tool branches hardcoded the literal string "agent" into
// createdBy -- a value that matches no real account, so the resulting droneScans/droneMissions/
// fieldInterventions record was silently excluded from that user's /api/account/export and survived
// /api/account/erase untouched, forever.
test("cloud-agent drone steps stamp createdBy with the real signed-in user's email, and those records are exported/erased", async () => {
  // A goal that doesn't match the health/job keyword branches of buildAutopilotPlan falls into the
  // default "farmer mission" plan, which includes drone.flight_plan/drone.field_scan/
  // drone.intervention_task among its steps.
  const result = await post("/api/cloud-agent/run", { goal: "review the farm and market situation", execute: true, approved: true });
  assert.equal(result.status, 200, JSON.stringify(result.body));
  const run = result.body.cloudAgentResult.run;
  const scanStep = run.steps.find(step => step.tool === "drone.field_scan");
  const missionStep = run.steps.find(step => step.tool === "drone.flight_plan");
  const taskStep = run.steps.find(step => step.tool === "drone.intervention_task");
  assert.equal(scanStep.status, "executed", JSON.stringify(scanStep));
  assert.equal(missionStep.status, "executed", JSON.stringify(missionStep));
  assert.equal(taskStep.status, "executed", JSON.stringify(taskStep));

  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.equal(db.profile.droneScans[0].createdBy, "admin@agrinexus.org", "drone scan createdBy must be the real user's email, not the literal 'agent'");
  assert.equal(db.profile.droneMissions[0].createdBy, "admin@agrinexus.org");
  assert.equal(db.profile.fieldInterventions[0].createdBy, "admin@agrinexus.org");

  const exportRes = await fetch(`${base}/api/account/export`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie } });
  const exportBody = await exportRes.json();
  assert.equal(exportRes.status, 200, JSON.stringify(exportBody));
  assert.ok(exportBody.recordCounts.droneScans >= 1, "droneScans must be included in the export");
  assert.ok(exportBody.recordCounts.droneMissions >= 1, "droneMissions must be included in the export");
  assert.ok(exportBody.recordCounts.fieldInterventions >= 1, "fieldInterventions must be included in the export");
});

// Found live (real-estate/parties sibling audit): mark_party_closed explicitly stops outreach to a
// buyer/seller ("Nexus did not contact the party ... stopped outreach"), but create_shipment/
// create_transaction's buyerPartyId/sellerPartyId fallback (when the caller doesn't name a party) used
// latestParty()'s own mine[0] fallback, which has no status exclusion -- silently reattaching a new
// shipment/transaction to that same closed party, undermining the close action's own guarantee.
test("creating a shipment/transaction without naming a seller does not silently attach to a closed seller", async () => {
  const seller = await opsAction({ action: "add_seller", businessName: "Closed Test Farm Co" });
  assert.equal(seller.json.ok, true, JSON.stringify(seller));
  const sellerPartyId = seller.json.record.partyId;

  const closed = await opsAction({ action: "mark_party_closed", partyId: sellerPartyId });
  assert.equal(closed.json.ok, true, JSON.stringify(closed));
  assert.equal(closed.json.record.status, "closed");

  const shipment = await opsAction({ action: "create_shipment" });
  assert.equal(shipment.json.ok, true, JSON.stringify(shipment));
  assert.notEqual(shipment.json.record.sellerPartyId, sellerPartyId, "a new shipment must not silently attach to the closed seller");

  const transaction = await opsAction({ action: "create_transaction" });
  assert.equal(transaction.json.ok, true, JSON.stringify(transaction));
  assert.notEqual(transaction.json.record.sellerPartyId, sellerPartyId, "a new transaction must not silently attach to the closed seller");
});

test("creating a shipment still attaches to a genuinely active seller, unaffected by the fix", async () => {
  const seller = await opsAction({ action: "add_seller", businessName: "Active Test Farm Co" });
  assert.equal(seller.json.ok, true);
  const sellerPartyId = seller.json.record.partyId;

  const shipment = await opsAction({ action: "create_shipment" });
  assert.equal(shipment.json.ok, true);
  assert.equal(shipment.json.record.sellerPartyId, sellerPartyId, "a real active seller must still be picked up by the fallback");
});

// Found live (nexus-operations sweep): droneProviders/droneEquipment/droneMissionRequests/
// droneMissionEvents/droneImageryReports/heatRiskReports were never capped, unlike every sibling
// collection in this same shared store.
test("drone/heat-risk operations collections stay capped at 1000 across repeated writes", async () => {
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  const store = db.nexusPersistentOperations;
  const filler = (extra = {}) => ({ ownerId: "filler-owner", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), ...extra });
  for (let i = 0; i < 1000; i += 1) {
    store.droneProviders.push(filler({ droneProviderId: `filler-drp-${i}`, status: "candidate" }));
    store.droneEquipment.push(filler({ droneEquipmentId: `filler-dre-${i}` }));
    store.droneMissionRequests.push(filler({ droneMissionId: `filler-drn-${i}`, status: "draft" }));
    store.droneMissionEvents.push(filler({ droneEventId: `filler-drev-${i}` }));
    store.droneImageryReports.push(filler({ droneImageryReportId: `filler-dimg-${i}` }));
    store.heatRiskReports.push(filler({ heatReportId: `filler-heat-${i}` }));
  }
  fs.writeFileSync(tempDbPath, JSON.stringify(db));

  await opsAction({ action: "add_drone_provider", providerName: "Cap Test Provider" });
  await opsAction({ action: "add_drone_equipment", equipmentName: "Cap Test Equipment" });
  const mission = await opsAction({ action: "create_drone_mission_request", missionType: "crop scouting", locationText: "Cap Test Field" });
  await opsAction({ action: "create_agriculture_expert_packet_from_drone", droneMissionId: mission.json.record.droneMissionId });
  await opsAction({ action: "log_heat_risk_report", region: "Cap Test Region" });

  const after = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  const afterStore = after.nexusPersistentOperations;
  assert.ok(afterStore.droneProviders.length <= 1000, `droneProviders got ${afterStore.droneProviders.length}`);
  assert.ok(afterStore.droneEquipment.length <= 1000, `droneEquipment got ${afterStore.droneEquipment.length}`);
  assert.ok(afterStore.droneMissionRequests.length <= 1000, `droneMissionRequests got ${afterStore.droneMissionRequests.length}`);
  assert.ok(afterStore.droneMissionEvents.length <= 1000, `droneMissionEvents got ${afterStore.droneMissionEvents.length}`);
  assert.ok(afterStore.droneImageryReports.length <= 1000, `droneImageryReports got ${afterStore.droneImageryReports.length}`);
  assert.ok(afterStore.heatRiskReports.length <= 1000, `heatRiskReports got ${afterStore.heatRiskReports.length}`);
});

// Found live (nexus-operations sweep): droneMissionEvents/droneImageryReports/heatRiskReports never set
// ownerId, unlike every sibling record type in this same store -- silently excluded from both
// /api/account/export and /api/account/erase with no disclosed gap.
test("drone-mission events/imagery reports and heat-risk reports are owned, exported, and erased", async () => {
  const mission = await opsAction({ action: "create_drone_mission_request", missionType: "crop scouting", locationText: "Owner Test Field" });
  assert.equal(mission.json.ok, true, JSON.stringify(mission));
  const packet = await opsAction({ action: "create_agriculture_expert_packet_from_drone", droneMissionId: mission.json.record.droneMissionId });
  assert.equal(packet.json.ok, true, JSON.stringify(packet));
  const heat = await opsAction({ action: "log_heat_risk_report", region: "Owner Test Region" });
  assert.equal(heat.json.ok, true, JSON.stringify(heat));

  const exportRes = await fetch(`${base}/api/account/export`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie } });
  const exportBody = await exportRes.json();
  assert.equal(exportRes.status, 200, JSON.stringify(exportBody));
  assert.ok(exportBody.recordCounts.droneMissionEvents >= 1, "droneMissionEvents must be included in the export");
  assert.ok(exportBody.recordCounts.droneImageryReports >= 1, "droneImageryReports must be included in the export");
  assert.ok(exportBody.recordCounts.heatRiskReports >= 1, "heatRiskReports must be included in the export");
});
