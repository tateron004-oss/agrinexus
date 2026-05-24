const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const requiredFiles = [
  "public/index.html",
  "public/app.js",
  "server.js",
  "scripts/workflow-button-audit.js",
  "scripts/smoke.js"
];

const requiredSourceSignals = [
  ["Backend command endpoint", "server.js", "/api/agent/command"],
  ["Voice transcription endpoint", "server.js", "/api/voice/transcribe"],
  ["Voice speech endpoint", "server.js", "/api/voice/speak"],
  ["Dynamic translation endpoint", "server.js", "/api/translate"],
  ["Capability matrix", "server.js", "function capabilityMatrix"],
  ["Drone mission endpoint", "server.js", "/api/trade/drone-mission"],
  ["Drone intervention endpoint", "server.js", "/api/trade/drone-intervention"],
  ["Telehealth continuity workflow", "server.js", "telehealth.followup_scheduled"],
  ["Global Jarvis dock", "public/index.html", "jarvisDock"],
  ["Capability UI", "public/index.html", "capabilityMatrixPanel"],
  ["Workflow audit", "scripts/workflow-button-audit.js", "Workflow button audit passed"],
  ["Production regression", "scripts/full-production-regression.js", "Full production regression passed"]
];

const prohibitedVisiblePhrases = [
  "coming soon",
  "todo",
  "lorem ipsum",
  "not wired",
  "nothing happens",
  "under construction"
];

function read(relative) {
  return fs.readFileSync(path.join(root, relative), "utf8");
}

for (const file of requiredFiles) {
  assert(fs.existsSync(path.join(root, file)), `Missing required production file: ${file}`);
}

for (const [label, file, signal] of requiredSourceSignals) {
  assert(read(file).includes(signal), `${label} is missing expected signal: ${signal}`);
}

const html = read("public/index.html")
  .replace(/\splaceholder="[^"]*"/gi, "")
  .replace(/<script[\s\S]*?<\/script>/gi, "");
const visibleText = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").toLowerCase();
for (const phrase of prohibitedVisiblePhrases) {
  assert(!visibleText.includes(phrase), `Visible placeholder phrase found: ${phrase}`);
}

const app = read("public/app.js");
const buttonHandlerSignals = [
  "runWorkflowAction",
  "workflowConfig",
  "runBackendAgentCommand",
  "runJarvisFullMission",
  "confirmPendingWorkflow",
  "reviewLatestAi",
  "sendModuleNotification"
];
for (const signal of buttonHandlerSignals) {
  assert(app.includes(signal), `Missing handler signal: ${signal}`);
}

console.log("No-placeholder production audit passed");
