const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const styles = read("public/styles.css");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} missing: ${token}`);
  console.log(`PASS ${label} ${token}`);
}

[
  "let nexusApprovedMemoryRecords = [];",
  "NEXUS_APPROVED_MEMORY_TYPES",
  "function buildNexusApprovedMemoryRecord",
  "function renderNexusApprovedMemoryPanel",
  "function handleNexusApprovedMemoryAction",
  "nexus-approved-memory-record.v1"
].forEach(token => includes(app, token, "approved memory runtime"));

[
  "Current turn context",
  "Current mission context",
  "Current session memory",
  "Saved preference",
  "Saved contact",
  "Saved profile",
  "Saved organization",
  "Saved patient record",
  "Saved buyer or seller",
  "Saved shipment",
  "Saved learning history",
  "Saved employment profile",
  "Sensitive health data",
  "Provider-backed record"
].forEach(token => includes(app, token, "separated memory category"));

[
  "Save approved memory",
  "Decline save",
  "Clear session context",
  "review",
  "edit",
  "correct",
  "forget",
  "deactivate",
  "archive",
  "delete"
].forEach(token => includes(app, token, "memory control"));

[
  "I approve saving this memory locally in this browser.",
  "Nexus did not save this memory because approval was not checked.",
  "noSilentPersistence: true",
  "modelTraining: false",
  "noExternalExecutionAuthorized: true",
  "Stored in this browser only",
  "Provider-backed storage is not active",
  "not model training",
  "does not authorize execution"
].forEach(token => includes(app, token, "memory safety boundary"));

[
  "deceased patient",
  "closed business",
  "buyer leaving platform",
  "seller leaving platform",
  "user-requested deletion",
  "provider-managed retention rules"
].forEach(token => includes(app, token, "authorized handling"));

[
  'localStorage.setItem("nexusApprovedMemoryRecords"',
  'localStorage.getItem("nexusApprovedMemoryRecords"',
  'localStorage.removeItem("nexusApprovedMemoryRecords"',
  "renderNexusApprovedMemoryPanel()",
  'data-nexus-approved-memory-action',
  'data-nexus-approved-memory-panel="true"',
  'data-nexus-approved-memory-storage-scope="true"',
  'data-model-training="false"',
  'data-execution-authority="false"'
].forEach(token => includes(app, token, "approved memory integration"));

[
  ".nexus-approved-memory-panel",
  ".nexus-approved-memory-form",
  ".nexus-approved-memory-list",
  ".nexus-approved-memory-record-actions"
].forEach(token => includes(styles, token, "approved memory styles"));

[
  "sent externally successfully",
  "external send completed",
  "payment completed",
  "provider contacted successfully",
  "provider contact completed",
  "appointment booked successfully",
  "appointment booking completed",
  "diagnosis saved successfully",
  "prescription changed successfully"
].forEach(unsafe => {
  assert(!new RegExp(unsafe, "i").test(app), `unsafe memory/execution claim found: ${unsafe}`);
  console.log(`PASS unsafe claim absent ${unsafe}`);
});

assert(
  pkg.scripts["qa:nexus-os-approved-memory-forgetting"] === "node scripts/nexus-os-approved-memory-forgetting-qa.js",
  "package alias missing"
);
console.log("PASS package alias exists");

assert(qaSuite.includes("scripts/nexus-os-approved-memory-forgetting-qa.js"), "qa-suite wiring missing");
console.log("PASS safe QA suite includes Rail 14 QA");

console.log("Nexus OS approved memory and forgetting QA passed.");
