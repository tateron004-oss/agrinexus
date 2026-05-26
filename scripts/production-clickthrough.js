const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

const pages = ["index.html", "status.html", "terms.html", "privacy.html", "refund.html", "manifest.webmanifest", "sw.js", "icons/agri-nexus-icon.svg", "icons/agri-nexus-192.png", "icons/agri-nexus-512.png"];
for (const page of pages) {
  assert(fs.existsSync(path.join(root, "public", page)), `Missing public page: ${page}`);
}

const clickTargets = [
  "startActiveCourseBtn",
  "completeLessonBtn",
  "quizBtn",
  "certBtn",
  "droneMissionBtn",
  "droneScanBtn",
  "droneInterventionBtn",
  "billingCheckoutBtn",
  "startOnboardingBtn",
  "openSupportBtn",
  "inviteSubscriberBtn",
  "globalListenBtn",
  "globalRunBtn",
  "globalVoiceFirstBtn",
  "globalYesBtn",
  "globalNoBtn",
  "globalReadBtn",
  "globalVoiceHelpBtn",
  "globalInstallBtn",
  "simpleContinueBtn",
  "personaFarmerBtn",
  "personaLearnerBtn",
  "personaWorkerBtn",
  "personaHealthBtn",
  "personaGovernmentBtn",
  "personaPartnerBtn",
  "guideCommandTourBtn",
  "guideTelehealthBtn",
  "guideTrainingBtn",
  "guideWorkforceBtn",
  "guideFarmerMissionBtn",
  "guideEnginesBtn",
  "pilotRuralAccessBtn",
  "pilotFarmerMarketBtn",
  "pilotHealthWorkforceBtn",
  "adminHealthCheck",
  "agentPlanBtn",
  "agentExecuteBtn",
  "agentBriefingBtn",
  "voiceRunBtn",
  "voiceFirstBtn",
  "voiceHelpBtn",
  "voiceHelpCloseBtn",
  "jarvisRunBtn",
  "workflowConfirm"
];

for (const id of clickTargets) {
  assert(html.includes(`id="${id}"`), `Missing clickable control #${id}`);
  const isPresetCommand = html.includes(`id="${id}"`) && html.slice(Math.max(0, html.indexOf(`id="${id}"`) - 250), html.indexOf(`id="${id}"`) + 250).includes("data-command-preset");
  const isPilotScenario = html.includes(`id="${id}"`) && html.slice(Math.max(0, html.indexOf(`id="${id}"`) - 250), html.indexOf(`id="${id}"`) + 250).includes("data-pilot-scenario");
  const isPersona = html.includes(`id="${id}"`) && html.slice(Math.max(0, html.indexOf(`id="${id}"`) - 250), html.indexOf(`id="${id}"`) + 250).includes("data-persona");
  const isSimpleAction = html.includes(`id="${id}"`) && html.slice(Math.max(0, html.indexOf(`id="${id}"`) - 250), html.indexOf(`id="${id}"`) + 250).includes("data-simple-action");
  assert(app.includes(`#${id}`) || app.includes(`"${id}"`) || app.includes(`'${id}'`) || (isPresetCommand && app.includes("[data-command-preset]")) || (isPilotScenario && app.includes("[data-pilot-scenario]")) || (isPersona && app.includes("[data-persona]")) || (isSimpleAction && app.includes("[data-simple-action]")), `Missing handler for #${id}`);
}

const endpoints = [
  "/api/learning/start",
  "/api/learning/lesson",
  "/api/workforce/action",
  "/api/health/action",
  "/api/trade/drone-mission",
  "/api/trade/drone-scan",
  "/api/trade/drone-intervention",
  "/api/trade/buyer-contact",
  "/api/agent/command",
  "/api/agent/briefing",
  "/api/voice/transcribe",
  "/api/voice/speak",
  "/api/translate",
  "/api/auth/password-reset",
  "/api/billing/checkout",
  "/api/onboarding/start",
  "/api/support/ticket",
  "/api/pilot/run",
  "/api/admin/subscriber",
  "/api/engines/manifest",
  "/api/production/complete-check"
];

assert(app.includes('event.target.closest("[data-voice-example]")'), "Ask AgriNexus guide buttons need delegated click handling");
assert(html.includes("voiceHelpPanel"), "Voice command help panel must be present for non-technical users");
assert(app.includes("function openVoiceHelp"), "Voice command help button must open the command help panel");
assert(app.includes("runJarvisCommand();"), "Jarvis dock Run button must read the dock command input");
assert(app.includes("function runAdminHealthCheckDirect"), "Admin top health check button must execute directly");

for (const endpoint of endpoints) {
  assert(server.includes(endpoint), `Missing backend endpoint ${endpoint}`);
}

const legalLinks = ["/terms.html", "/privacy.html", "/refund.html"];
for (const link of legalLinks) {
  assert(html.includes(link) || fs.readFileSync(path.join(root, "public", "status.html"), "utf8").includes(link), `Missing legal link ${link}`);
}

assert(html.includes('rel="manifest"'), "Missing web app manifest link");
assert(app.includes("serviceWorker.register"), "Missing service worker registration");
assert(app.includes("installAgriNexusApp"), "Missing in-app install handler");
assert(server.includes(".webmanifest"), "Missing webmanifest MIME type");
assert(server.includes(".png"), "Missing PNG MIME type");

console.log("Production click-through audit passed");
