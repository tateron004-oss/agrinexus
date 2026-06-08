const fs = require("fs");

const server = fs.readFileSync("server.js", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");
const html = fs.readFileSync("public/index.html", "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`Women/family workflow QA failed: ${message}`);
    process.exit(1);
  }
}

const checks = [
  ["backend model", server.includes("function womenFamilyAgricultureModel") && server.includes("womenFamilySupport: womenFamilyAgricultureModel")],
  ["backend runner", server.includes("function runWomenFamilyAgricultureWorkflow") && server.includes("women_family.workflow_created")],
  ["backend endpoint", server.includes('url.pathname === "/api/women-family/workflow"')],
  ["agent tool registry", server.includes('tool: "women_family.support_path"') && server.includes("Start women and family agriculture support")],
  ["agent tool execution", server.includes('step.tool === "women_family.support_path"')],
  ["child safety guardrail", server.includes("not child labor") && server.includes("without diagnosis")],
  ["impact dashboard evidence", server.includes("Women & family support") && server.includes("womenFamilyRuns")],
  ["frontend workflow button", html.includes("womenFamilyWorkflowBtn") && html.includes('data-workflow="women-family"')],
  ["frontend evidence panel", html.includes("womenFamilyPanel") && app.includes("womenFamilyPanel")],
  ["frontend workflow config", app.includes('workflow === "women-family"') && app.includes("/api/women-family/workflow")],
  ["user mode mapping", app.includes("help my family on the farm") && app.includes('workflow: "women-family"')],
  ["translation-ready UI text", app.includes("translateText") && app.includes("Women and family farm support is ready")]
];

for (const [label, ok] of checks) {
  assert(ok, label);
}

console.log(`Women/family workflow QA passed (${checks.length} checks)`);
