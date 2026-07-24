const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "public", "app.js");
const app = fs.readFileSync(file, "utf8");
const marker = "function renderNexusAgenticMissionWorkspace() {";
const repair = `${marker}
  if (
    nexusActiveWorkflowState?.source === "openai-realtime"
    && (nexusActiveWorkflowState?.id || nexusActiveWorkflowState?.functionId)
  ) {
    return renderNexusActiveWorkflowWorkspaceSafe();
  }`;

if (app.includes('nexusActiveWorkflowState?.source === "openai-realtime"')) {
  console.log("Approved mission renderer repair is already present.");
  process.exit(0);
}
if (!app.includes(marker)) throw new Error("Mission renderer marker not found.");
const updated = app.replace(marker, repair);
if (updated.length - app.length !== repair.length - marker.length) {
  throw new Error("Mission renderer repair size mismatch.");
}
fs.writeFileSync(file, updated);
console.log("Applied approved mission renderer repair.");
