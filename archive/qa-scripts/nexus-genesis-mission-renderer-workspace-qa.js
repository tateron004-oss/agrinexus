const fs = require("fs");
const path = require("path");

const app = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const start = app.indexOf("function renderNexusAgenticMissionWorkspace()");
const end = app.indexOf("function renderNexusPremiumActivityReceiptsPanel", start);
if (start < 0 || end < 0) throw new Error("Mission renderer boundary was not found.");
const renderer = app.slice(start, end);
const checks = [
  ["voice source gate", renderer.includes('nexusActiveWorkflowState?.source === "openai-realtime"')],
  ["active workflow identity gate", renderer.includes("nexusActiveWorkflowState?.id || nexusActiveWorkflowState?.functionId")],
  ["existing function window renderer", renderer.includes("return renderNexusActiveWorkflowWorkspaceSafe();")],
  ["generic mission fallback preserved", renderer.includes("const mission = nexusCurrentMissionSnapshot();")]
];
const failed = checks.filter(([, passed]) => !passed);
if (failed.length) throw new Error(`Mission renderer QA failed: ${failed.map(([label]) => label).join(", ")}`);
console.log("Nexus Genesis mission renderer workspace QA passed.");
