const fs = require("fs");

const files = {
  server: fs.readFileSync("server.js", "utf8"),
  app: fs.readFileSync("public/app.js", "utf8"),
  html: fs.readFileSync("public/index.html", "utf8"),
  packageJson: fs.readFileSync("package.json", "utf8")
};

const checks = [
  ["server cloud policy", files.server.includes("function cloudAgentPolicy") && files.server.includes("controlled-cloud-agent")],
  ["server tool catalog", files.server.includes("function cloudAgentToolCatalog") && files.server.includes("cloudAgentToolTemplates")],
  ["server run creation", files.server.includes("function createCloudAgentRun") && files.server.includes("transparentWorkflow")],
  ["server safe execution", files.server.includes("async function executeCloudAgentRun") && files.server.includes("blocked-awaiting-approval")],
  ["server self correction", files.server.includes("function cloudAgentSelfCorrection") && files.server.includes("cloudAgentCorrections")],
  ["server audit trail", files.server.includes("function cloudAgentAudit") && files.server.includes("cloud_agent.run_executed")],
  ["status endpoint", files.server.includes('"/api/cloud-agent/status"') && files.server.includes("cloudAgentTransparencyPacket")],
  ["run endpoint", files.server.includes('"/api/cloud-agent/run"') && files.server.includes("cloudAgentResult")],
  ["tick endpoint", files.server.includes('"/api/cloud-agent/tick"') && files.server.includes("cloudAgentTick")],
  ["approval endpoint", files.server.includes('"/api/cloud-agent/approve"') && files.server.includes("cloudAgentApproval")],
  ["template endpoint", files.server.includes('"/api/cloud-agent/tool-template"') && files.server.includes("cloudAgentToolTemplate")],
  ["voice cloud agent route", files.server.includes("cloud_agent.launched") && files.server.includes("cloud_agent.approved")],
  ["public state summary", files.server.includes("cloudAgent: cloudAgentTransparencyPacket")],
  ["html cloud panel", files.html.includes("Cloud Agent Brain") && files.html.includes("cloudAgentRunBtn")],
  ["app render panel", files.app.includes("function renderCloudAgentPanel") && files.app.includes("cloudAgentAuditPanel")],
  ["app launch action", files.app.includes("function launchCloudAgentMission") && files.app.includes('"/api/cloud-agent/run"')],
  ["app queue action", files.app.includes("function runCloudAgentQueue") && files.app.includes('"/api/cloud-agent/tick"')],
  ["app approval action", files.app.includes("function approveCloudAgentWork") && files.app.includes('"/api/cloud-agent/approve"')],
  ["app template action", files.app.includes("function createCloudAgentTemplate") && files.app.includes('"/api/cloud-agent/tool-template"')],
  ["app permissions", files.app.includes("#cloudAgentRunBtn") && files.app.includes("#cloudAgentTemplateBtn")]
];

const failed = checks.filter(([, ok]) => !ok);
checks.forEach(([name, ok]) => console.log(`${ok ? "PASS" : "FAIL"} ${name}`));

if (failed.length) {
  console.error(`Cloud agent QA failed: ${failed.map(([name]) => name).join(", ")}`);
  process.exit(1);
}

console.log("Cloud agent QA passed");
