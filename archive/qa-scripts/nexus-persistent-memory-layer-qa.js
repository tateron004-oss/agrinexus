const fs = require("fs");
const path = require("path");
const memory = require("../public/nexus-persistent-memory.js");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");
const app = read("public/app.js");
const server = read("server.js");
const index = read("public/index.html");
const pkg = JSON.parse(read("package.json"));
const suite = read("scripts/qa-suite.js");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function includesAll(source, tokens, label) {
  for (const token of tokens) {
    assert(source.includes(token), `${label} missing: ${token}`);
  }
}

const localStatus = memory.persistenceStatus({}, "local_browser");
assert(localStatus.persistenceScope === "local_browser", "local browser fallback should be truthful");
assert(localStatus.database.configured === false, "database must not be reported configured without env");
assert(localStatus.message.includes("Production database not connected"), "missing database message should be visible");

const dbStatus = memory.persistenceStatus({ DATABASE_URL: "postgres://configured.example/db" }, "local_file_or_dev_store");
assert(dbStatus.database.configured === true, "DATABASE_URL should be detected as configured");
assert(!JSON.stringify(dbStatus).includes("postgres://configured.example/db"), "database status must not expose secret values");

const store = memory.createMemoryStore(null, { persistenceScope: "local_browser", ownerRole: "Standard User" });
const health = store.createRecord({
  type: "health_patient_intake",
  title: "Patient intake memory",
  payload: { symptoms: ["headache"], chronicConditions: ["hypertension"] },
  riskLevel: "moderate"
});
assert(health.ok, "health memory record should be created");
assert(health.record.id && health.record.createdAt && health.record.updatedAt, "record required fields missing");
assert(health.record.persistenceScope === "local_browser", "record persistence scope should be local_browser");
assert(health.receipt.receiptId && health.receipt.relatedRecordId === health.record.id, "create receipt should be attached");

const update = store.updateRecord(health.record.id, { payload: { symptoms: ["headache"], followUpStatus: "needs_review" } });
assert(update.ok && update.record.payload.followUpStatus === "needs_review", "record update should work");

const archived = store.archiveRecord(health.record.id, "deceased", "Owner marked patient deceased locally");
assert(archived.ok && archived.record.status === "deceased" && archived.record.archivedAt, "deceased/archive status should be preserved");

const buyer = store.createRecord({ type: "buyer_profile", title: "Buyer profile", payload: { paymentStatus: "payment_pending" } });
const seller = store.createRecord({ type: "seller_profile", title: "Seller profile" });
const inactiveSeller = store.archiveRecord(seller.record.id, "closed", "Seller out of business");
assert(buyer.ok && inactiveSeller.record.status === "closed", "buyer/seller inactive workflow should work");

const transaction = store.createRecord({ type: "transaction_record", title: "Transaction record", status: "queued", payload: { paymentStatus: "payment_pending", providerState: "blocked_by_payment_provider" } });
assert(transaction.record.status === "queued", "transaction should save as queued without fake payment verification");
assert(transaction.record.payload.paymentStatus !== "payment_verified", "payment verification must not be faked");

const shipment = store.createRecord({ type: "shipment_record", title: "Shipment record", payload: { trackingProviderState: "missing_config", liveGpsTracking: false } });
assert(shipment.record.payload.liveGpsTracking === false, "shipment must not fake live GPS tracking");

const pharmacy = store.createRecord({ type: "pharmacy_profile", title: "Local pharmacy profile", payload: { referralState: "provider_blocked" } });
const mobileClinic = store.createRecord({ type: "mobile_clinic_profile", title: "Mobile clinic profile", payload: { capacityStatus: "unknown" } });
const provider = store.createRecord({ type: "provider_profile", title: "Provider profile", payload: { credentialStatus: "not_verified" } });
assert(pharmacy.ok && mobileClinic.ok && provider.ok, "provider/pharmacy/mobile clinic local records should be saved");

const drone = store.createRecord({ type: "drone_mission_record", title: "Drone mission", payload: { providerState: "provider_blocked", dispatchStatus: "not_dispatched" } });
assert(drone.record.payload.dispatchStatus === "not_dispatched", "drone dispatch must not be faked");

const predictive = store.predictiveContext();
assert(predictive.signals.length >= 6, "predictive hooks should expose memory records");
assert(predictive.noExternalExecutionAuthorized === true, "predictive hooks must remain no-execution");

includesAll(index, [
  "/nexus-persistent-memory.js"
], "index script wiring");

includesAll(app, [
  "NEXUS_PERSISTENT_MEMORY_STORAGE_KEY",
  "nexusPersistentMemoryService",
  "function nexusPersistentMemoryStore",
  "function routeNexusPersistentMemoryCommand",
  "function renderNexusPersistentMemoryPanel",
  "function renderNexusMemoryUtilityPanel",
  "data-nexus-persistent-memory-layer",
  "data-nexus-memory-utility-card",
  "data-nexus-memory-status-card",
  "data-nexus-memory-recent-records",
  "data-nexus-memory-recent-receipts",
  "Local memory active. Production database not connected.",
  "not a production medical, financial, legal",
  "Save patient intake memory.",
  "Save crop issue record.",
  "Save buyer profile.",
  "Save shipment record.",
  "Show predictive context."
], "browser persistent memory layer");

includesAll(server, [
  "nexusPersistentMemory",
  "function nexusPersistentMemoryStore",
  "/api/nexus/persistent-memory/status",
  "/api/nexus/persistent-memory/records",
  "/api/nexus/persistent-memory/receipts",
  "/api/nexus/persistent-memory/predictive-context",
  "confirmedLocalClear",
  "noSecretsExposed",
  "noExternalExecutionAuthorized"
], "server persistent memory routes");

for (const unsafe of [
  "payment verified successfully",
  "provider referral submitted successfully",
  "live gps tracking active",
  "drone dispatched successfully",
  "production database active"
]) {
  assert(!app.toLowerCase().includes(unsafe), `app includes unsafe memory claim: ${unsafe}`);
  assert(!server.toLowerCase().includes(unsafe), `server includes unsafe memory claim: ${unsafe}`);
}

assert(pkg.scripts["qa:nexus-persistent-memory-layer"] === "node scripts/nexus-persistent-memory-layer-qa.js", "package alias missing");
assert(suite.includes("scripts/nexus-persistent-memory-layer-qa.js"), "qa-suite wiring missing");

console.log("Nexus persistent memory layer QA passed.");
