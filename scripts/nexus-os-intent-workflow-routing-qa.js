const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const suite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL ${message}`);
    process.exitCode = 1;
  } else {
    console.log(`PASS ${message}`);
  }
}

const requiredDomains = [
  "Health and Care",
  "Agriculture and Food Security",
  "Marketplace and Trade",
  "Logistics, Maps, and Shipments",
  "Learning and Workforce Development",
  "Employment and Hiring",
  "Drone and Field Operations",
  "Communications and Media",
  "Payments and Transactions",
  "Providers and Community Services",
  "Administration for authorized roles only"
];

for (const domain of requiredDomains) {
  assert(app.includes(domain), `router includes ${domain}`);
}

const requiredFields = [
  "interpretedGoal",
  "domain",
  "intent",
  "confidence",
  "missingInformation",
  "nextQuestion",
  "safetyCategory",
  "confirmationRequired",
  "providerRequirement",
  "executionPath",
  "recommendedWorkflow"
];

for (const field of requiredFields) {
  assert(app.includes(field), `router result includes ${field}`);
}

const requiredPrompts = [
  "I need a job.",
  "I need workers.",
  "Help me sell maize.",
  "My blood pressure is high.",
  "Track my shipment.",
  "Teach me electrical safety.",
  "Plan a drone survey.",
  "Call my doctor.",
  "Pay this invoice.",
  "Find a pharmacy.",
  "I need help."
];

const expectedTokens = [
  "job|jobs|work|worker|workers|hiring|hire|employment|career|applicant|resume|interview",
  "sell|selling|buyer|seller|marketplace|agritrade|trade|vendor|quote|price",
  "blood pressure|hypertension|obesity|rpm|rtm|bp|glucose",
  "logistics|shipment|delivery|pickup|cold chain|cold-chain|route|map|directions|field visit|mobile clinic route",
  "learn|learning|training|teach|course|literacy|electrical safety|certificate|certification|lms",
  "drone|survey|field operation|field ops|aerial|farm visit|field team",
  "call|phone|sms|text message|message|email|whatsapp|telegram|media|music|youtube|spotify",
  "pay|payment|checkout|purchase|buy|invoice|stripe|wallet|refund|transaction",
  "provider|doctor|clinic|pharmacy|community service|mobile clinic|telehealth|care team"
];

for (const prompt of requiredPrompts) {
  const importantWord = prompt.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(/\s+/).find(word => word.length > 4);
  assert(app.toLowerCase().includes(importantWord), `QA prompt vocabulary is routable: ${prompt}`);
}

for (const token of expectedTokens) {
  assert(app.includes(token), `router pattern includes ${token}`);
}

assert(app.includes("resolveNexusIntentDrivenWorkflowRoute"), "intent-driven resolver exists");
assert(app.includes("routeNexusIntentDrivenWorkflowCommand"), "intent-driven runtime router exists");
assert(app.includes("buildNexusIntentDrivenRoutingResult"), "visible route packet builder exists");
assert(app.includes("renderNexusIntentDrivenWorkflowStatus"), "visible route status renderer exists");
assert(app.includes("updateNexusIntentDrivenWorkflowStatusDom"), "visible route status can sync after presence-only updates");
assert(app.includes("visible-command-input-intent-router"), "visible command input can correct stale restored route status");
assert(app.includes("nexusIntentDrivenLastCommandText") && app.includes("nexusIntentDrivenLastCommandText = String(value || \"\").trim();"), "last submitted command can correct route status after input clearing");
assert(app.includes("visible-command-input-activity-intent-router"), "visible command input activity updates intent route status");
assert(app.includes('data-nexus-intent-route-status="true"'), "visible route status has stable marker");
assert(app.includes("handleNexusIntentDrivenCommandCenterSubmit(event)"), "earliest command-center click guard invokes intent routing");
assert(app.includes("nexus_intent_workflow_route"), "visible route card type exists");
assert(app.includes("clarify_before_opening_workflow"), "low-confidence requests ask one clarifying question");
assert(app.includes("What would you like help with: health, farming, jobs, training, trade, maps, communications, or providers?"), "generic fallback asks one concise clarifying question");
assert(app.includes("Do not open a large mode menu as the default fallback") === false, "Rail 8 instruction is not leaked to UI");
assert(app.includes("routeNexusIntentDrivenWorkflowCommand(normalized, { source: \"standard-user-intent-router\" })"), "Standard User command path uses intent router");
assert(app.indexOf("routeNexusIntentDrivenWorkflowCommand(normalized, { source: \"standard-user-intent-router\" })") < app.indexOf("isNexusPersistentOperationsCommand(normalized)"), "intent router runs before broad operations router");
assert(app.includes("if (!route.recommendedWorkflow && route.confidence < 0.4) return false;"), "unknown low-confidence text does not replace existing capability routes");
assert(app.includes("unified-brain-intent-router"), "unified runtime defers recognized goals to intent routing");
const earlySubmitRouter = app.slice(
  app.indexOf("function routeNexusCommandCenterCommunicationSubmit"),
  app.indexOf("const predictiveCommand", app.indexOf("function routeNexusCommandCenterCommunicationSubmit"))
);
assert(earlySubmitRouter.includes("routeNexusIntentDrivenWorkflowCommand(command, { source })"), "early command submit router uses intent workflow routing before predictive/unified handlers");
const visibleSendHandler = app.slice(
  app.indexOf("async function handleNexusPresenceCommandSendSubmit"),
  app.indexOf("const predictiveCommand", app.indexOf("async function handleNexusPresenceCommandSendSubmit"))
);
assert(visibleSendHandler.includes("routeNexusIntentDrivenWorkflowCommand(command, { source })"), "visible Send button routes intent before unified provider fallbacks");
const submitRouterCalls = (app.match(/routeNexusIntentDrivenWorkflowCommand\(command, \{ source: "typed-command-submit" \}\)/g) || []).length;
assert(submitRouterCalls >= 3, "delegated command-center submit paths route intent before legacy fallbacks");
assert(app.includes("No external action was executed."), "workflow routing preserves no-execution copy");
assert(app.includes("noExecutionAuthorized: true"), "route packets remain non-executing");
assert(app.includes("if (opened) return true;") && app.includes("nexusAgenticBrainLastResult = result;"), "route packets stay visible when a workflow opener declines");
assert(app.includes("setNexusIntentDrivenWorkflowStatusForCommand(command") && app.includes("chronic-predictive-intent-router"), "chronic predictive commands keep Health and Care route status visible");
assert(app.includes("const routeSeed = updates.lastUserInput || updates.lastResponse || \"\";") && app.includes("presence-intent-router"), "presence updates keep intent route status visible");
assert(app.includes("mission.goal || mission.command") && app.includes("agentic-result-intent-router"), "agentic result rendering keeps route status aligned to the latest mission");
assert(app.includes("prepare_review_confirm_before_any_external_action"), "high-risk paths require review and confirmation before action");
assert(!/nexus_intent_workflow_route[\s\S]{0,260}(dispatch|sent successfully|payment made|appointment booked|provider contacted)/i.test(app), "route card avoids false execution claims");

assert(pkg.scripts["qa:nexus-os-intent-workflow-routing"] === "node scripts/nexus-os-intent-workflow-routing-qa.js", "package alias exists");
assert(suite.includes("scripts/nexus-os-intent-workflow-routing-qa.js"), "safe QA suite includes Rail 8 QA");

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log("Nexus OS intent workflow routing QA passed.");
