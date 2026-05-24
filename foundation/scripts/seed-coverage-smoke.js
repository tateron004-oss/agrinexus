const fs = require("fs");
const path = require("path");

const seed = fs.readFileSync(path.join(__dirname, "..", "migrations", "002_seed_demo.sql"), "utf8");

const requiredTables = [
  "tenants",
  "countries",
  "roles",
  "users",
  "program_metrics",
  "routes",
  "route_checkpoints",
  "facilities",
  "courses",
  "learner_profiles",
  "candidate_profiles",
  "workforce_roles",
  "job_applications",
  "patient_intakes",
  "products",
  "trade_orders",
  "wallet_accounts",
  "wallet_transactions",
  "ai_runs",
  "audit_events"
];

for (const table of requiredTables) {
  if (!new RegExp(`insert into\\s+${table}\\b`, "i").test(seed)) {
    throw new Error(`Missing seed insert for ${table}.`);
  }
}

const expectedFragments = [
  "Lagos Care and Produce Hub",
  "Nairobi Telehealth Hub",
  "Telehealth Intake Operator",
  "AN-PAT-NG-001",
  "Premium Cassava Flour",
  "AN-ORD-0002",
  "ai.command_center",
  "health.care_plan_generated"
];

for (const fragment of expectedFragments) {
  if (!seed.includes(fragment)) throw new Error(`Missing seed scenario: ${fragment}`);
}

const checkpointCoordinateUpdates = (seed.match(/when '[^']+' then [-0-9.]+/g) || []).length;
if (checkpointCoordinateUpdates < 32) throw new Error("Expected latitude and longitude updates for route checkpoints.");

console.log("Seed coverage smoke passed");
