const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const css = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

[
  "function ensureNexusPersistentOperations",
  "nexusPersistentOperations",
  "chronicCareProfiles",
  "rpmReadings",
  "rtmActivities",
  "healthcareIntakes",
  "medicationAdherenceNotes",
  "careTasks",
  "providers",
  "parties",
  "shipments",
  "trackingEvents",
  "transactions",
  "actionReceipts",
  "consentRecords",
  "auditLogs",
  "archiveRecords",
  "heatRiskReports",
  "deceased-stop-outreach",
  "No live illness prevalence dataset is configured. Nexus can track local reports and prepare heat-risk response packets.",
  "/api/nexus/operations/status",
  "/api/nexus/operations/action",
  "/api/nexus/operations/command"
].forEach(token => includes(server, token, `server operations ${token}`));

[
  "create_chronic_care_profile",
  "add_rpm_reading",
  "add_rtm_activity",
  "show_chronic_care_timeline",
  "create_provider_review_packet",
  "create_pharmacy_referral",
  "create_mobile_clinic_follow_up",
  "create_telehealth_encounter",
  "mark_deceased_stop_outreach",
  "add_pharmacy_provider",
  "add_mobile_clinic_provider",
  "add_buyer",
  "add_seller",
  "mark_party_closed",
  "create_shipment",
  "add_tracking_event",
  "cancel_shipment",
  "create_transaction",
  "add_transaction_item",
  "cancel_transaction",
  "log_heat_risk_report"
].forEach(token => includes(server, token, `operation action ${token}`));

[
  "data-nexus-operations-memory-window=\"true\"",
  "data-nexus-operations-action",
  "data-nexus-heat-risk-window=\"true\"",
  "data-fake-illness-prevalence-map=\"false\"",
  "isNexusPersistentOperationsCommand",
  "runNexusPersistentOperationsCommand",
  "Persistent Operations Memory",
  "Nexus did / did not do"
].forEach(token => includes(app, token, `app operations UI ${token}`));

[
  ".nexus-operations-memory-window",
  ".nexus-operations-status-grid",
  ".nexus-operations-action-grid",
  ".nexus-operations-result"
].forEach(token => includes(css, token, `operations CSS ${token}`));

const serverOperationsBlock = server.slice(
  server.indexOf("function ensureNexusPersistentOperations"),
  server.indexOf("async function api(")
);
const appOperationsBlock = app.slice(
  app.indexOf("function isNexusPersistentOperationsCommand"),
  app.indexOf("function renderNexusActiveWorkflowWorkspace")
);

[
  "diagnosis confirmed",
  "refill approved",
  "payment completed",
  "shipment GPS confirmed",
  "provider accepted",
  "illness prevalence map live"
].forEach(token => excludes(serverOperationsBlock + appOperationsBlock, token, "persistent operations safety"));

assert.equal(
  packageJson.scripts["qa:nexus-persistent-operations-chronic-care"],
  "node scripts/nexus-persistent-operations-chronic-care-qa.js",
  "package.json must expose qa:nexus-persistent-operations-chronic-care"
);
assert(qaSuite.includes("scripts/nexus-persistent-operations-chronic-care-qa.js"), "qa-suite.js must include persistent operations QA.");

async function waitForHealth(port, child) {
  const deadline = Date.now() + 12000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error(`server exited early with ${child.exitCode}`);
    try {
      const response = await fetch(`http://127.0.0.1:${port}/api/health`);
      if (response.ok) return;
    } catch {
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }
  throw new Error("server did not become healthy");
}

async function post(port, body) {
  const response = await fetch(`http://127.0.0.1:${port}/api/nexus/operations/command`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  const json = await response.json();
  assert(response.ok, `operation ${body.action || body.command} should pass: ${JSON.stringify(json)}`);
  return json.nexusOperationsResult;
}

async function runApiQa() {
  const port = 4297 + Math.floor(Math.random() * 100);
  const tmpDb = path.join(root, `tmp-persistent-operations-${Date.now()}.json`);
  fs.copyFileSync(path.join(root, "db.json"), tmpDb);
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tmpDb },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let stderr = "";
  child.stderr.on("data", chunk => { stderr += chunk.toString(); });
  try {
    await waitForHealth(port, child);
    const statusResponse = await fetch(`http://127.0.0.1:${port}/api/nexus/operations/status`);
    const status = await statusResponse.json();
    assert.equal(status.ok, true, "operations status should be ok");
    assert.equal(status.safety.noFakePayments, true, "safety must forbid fake payments");
    assert.equal(status.safety.noFakeIllnessPrevalenceMap, true, "safety must forbid fake prevalence maps");

    const chronic = await post(port, { action: "create_chronic_care_profile", conditionArea: "hypertension", patientId: "qa-patient" });
    assert(chronic.record.chronicCareId.startsWith("NX-CC-"), "chronic profile should get NX-CC id");
    assert.equal(chronic.receipt.noExecutionAuthorized, true, "chronic receipt must not authorize execution");

    const rpm = await post(port, { action: "add_rpm_reading", type: "blood_pressure", value: "148/92" });
    assert(rpm.record.readingId.startsWith("NX-RPM-"), "RPM reading should persist");
    assert(rpm.timeline.some(item => item.type === "rpm"), "timeline should include RPM");

    const rtm = await post(port, { action: "add_rtm_activity", type: "therapy_activity", value: "walked 15 minutes" });
    assert(rtm.record.activityId.startsWith("NX-RTM-"), "RTM activity should persist");

    const providerPacket = await post(port, { action: "create_provider_review_packet" });
    assert.equal(providerPacket.record.status, "prepared", "provider review packet should be prepared only");

    const deceased = await post(port, { action: "mark_deceased_stop_outreach" });
    assert.equal(deceased.record.noContact, true, "deceased workflow should set no-contact");
    assert.equal(deceased.record.status, "deceased-stop-outreach", "deceased workflow should stop outreach");

    const pharmacy = await post(port, { action: "add_pharmacy_provider", name: "QA Pharmacy", serviceRegion: "QA Region" });
    assert.equal(pharmacy.record.type, "pharmacy", "pharmacy provider should persist");

    const mobileClinic = await post(port, { action: "add_mobile_clinic_provider", name: "QA Mobile Clinic" });
    assert.equal(mobileClinic.record.type, "mobile-clinic", "mobile clinic provider should persist");

    const buyer = await post(port, { action: "add_buyer", businessName: "QA Buyer" });
    assert.equal(buyer.record.type, "buyer", "buyer should persist");

    const seller = await post(port, { action: "add_seller", businessName: "QA Seller" });
    assert.equal(seller.record.type, "seller", "seller should persist");

    const closed = await post(port, { action: "mark_party_closed" });
    assert.equal(closed.record.status, "closed", "closed business handling should persist");

    const shipment = await post(port, { action: "create_shipment", origin: "farm", destination: "market" });
    assert(shipment.record.shipmentId.startsWith("NX-SHIP-"), "shipment should persist");

    const tracking = await post(port, { action: "add_tracking_event", status: "picked-up" });
    assert(tracking.record.eventId.startsWith("NX-TRK-"), "tracking event should persist");

    const cancelledShipment = await post(port, { action: "cancel_shipment" });
    assert.equal(cancelledShipment.record.status, "cancelled", "shipment cancellation should persist");

    const transaction = await post(port, { action: "create_transaction", amount: "25", currency: "USD" });
    assert(transaction.record.transactionId.startsWith("NX-TXN-"), "transaction should persist");
    assert.equal(transaction.record.providerTransactionId, null, "provider transaction id should not be faked");

    const item = await post(port, { action: "add_transaction_item", name: "maize", amount: "25" });
    assert(item.record.items.length >= 1, "transaction item should persist");

    const cancelledTransaction = await post(port, { action: "cancel_transaction" });
    assert.equal(cancelledTransaction.record.status, "cancelled", "transaction cancellation should persist");

    const heat = await post(port, { action: "log_heat_risk_report", region: "QA Region" });
    assert(heat.record.datasetNotice.includes("No live illness prevalence dataset is configured"), "heat risk should not fake prevalence data");

    const receipts = await post(port, { action: "show_action_receipts" });
    assert(receipts.operations.collections.actionReceipts >= 1, "action receipts should persist");

    const audit = await post(port, { action: "show_audit_log" });
    assert(audit.operations.collections.auditLogs >= 1, "audit logs should persist");
  } finally {
    child.kill();
    if (fs.existsSync(tmpDb)) fs.unlinkSync(tmpDb);
  }
  if (/token|secret|password|sk_live|TWILIO_AUTH_TOKEN/.test(stderr)) {
    throw new Error("server stderr appeared to expose a secret-like value");
  }
}

runApiQa()
  .then(() => console.log("Nexus persistent operations chronic care QA passed."))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
