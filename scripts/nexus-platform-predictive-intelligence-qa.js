const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const server = read("server.js");
const serviceWorker = read("public/sw.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const domains = [
  {
    mode: "marketplace",
    title: "Marketplace & Trade Predictive Intelligence Modeler",
    route: "marketplace-predictive",
    selector: "data-nexus-marketplace-predictive-modeler",
    alias: "qa:nexus-marketplace-predictive-intelligence",
    script: "scripts/nexus-marketplace-predictive-intelligence-qa.js",
    examples: [
      "Nexus, help me sell maize to a buyer.",
      "Nexus, predict transaction risk.",
      "Nexus, create a buyer summary.",
      "Nexus, show marketplace reasoning trace.",
      "Nexus, show marketplace expert checklist."
    ],
    safety: "Nexus did not contact buyers or sellers, process payment, execute a transaction, arrange delivery, or claim trade acceptance."
  },
  {
    mode: "logistics",
    title: "Logistics Predictive Intelligence Modeler",
    route: "logistics-predictive",
    selector: "data-nexus-logistics-predictive-modeler",
    alias: "qa:nexus-logistics-predictive-intelligence",
    script: "scripts/nexus-logistics-predictive-intelligence-qa.js",
    examples: [
      "Nexus, track this shipment.",
      "Nexus, predict delivery risk.",
      "Nexus, simulate what happens if the shipment is delayed two days.",
      "Nexus, create a shipment summary.",
      "Nexus, show logistics reasoning trace."
    ],
    safety: "Nexus did not run live tracking, calculate a fake provider route, contact a carrier, or update a shipment externally."
  },
  {
    mode: "workforce",
    title: "Workforce Predictive Intelligence Modeler",
    route: "workforce-predictive",
    selector: "data-nexus-workforce-predictive-modeler",
    alias: "qa:nexus-workforce-predictive-intelligence",
    script: "scripts/nexus-workforce-predictive-intelligence-qa.js",
    examples: [
      "Nexus, help me apply for a job.",
      "Nexus, assess my job readiness.",
      "Nexus, what skills am I missing?",
      "Nexus, create a candidate summary.",
      "Nexus, show workforce reasoning trace."
    ],
    safety: "Nexus did not contact an employer, submit a job application, schedule an interview, or claim job placement."
  },
  {
    mode: "learning",
    title: "Learning Predictive Intelligence Modeler",
    route: "learning-predictive",
    selector: "data-nexus-learning-predictive-modeler",
    alias: "qa:nexus-learning-predictive-intelligence",
    script: "scripts/nexus-learning-predictive-intelligence-qa.js",
    examples: [
      "Nexus, build a learning plan.",
      "Nexus, assess my learning readiness.",
      "Nexus, predict my course completion risk.",
      "Nexus, create a learning plan summary.",
      "Nexus, show learning reasoning trace."
    ],
    safety: "Nexus did not enroll the learner, issue certification, contact an instructor, or claim course completion."
  },
  {
    mode: "drone",
    title: "Drone & Field Operations Predictive Intelligence Modeler",
    route: "drone-predictive",
    selector: "data-nexus-drone-predictive-modeler",
    alias: "qa:nexus-drone-predictive-intelligence",
    script: "scripts/nexus-drone-predictive-intelligence-qa.js",
    examples: [
      "Nexus, prepare a drone field mission.",
      "Nexus, assess drone mission readiness.",
      "Nexus, predict field operation risk.",
      "Nexus, create a drone mission summary.",
      "Nexus, show drone reasoning trace."
    ],
    safety: "Nexus did not dispatch a drone, retrieve live weather, analyze imagery, or claim regulatory approval."
  },
  {
    mode: "communications",
    title: "Communications Predictive Intelligence Modeler",
    route: "communications-predictive",
    selector: "data-nexus-communications-predictive-modeler",
    alias: "qa:nexus-communications-predictive-intelligence",
    script: "scripts/nexus-communications-predictive-intelligence-qa.js",
    examples: [
      "Nexus, prepare a message to a provider.",
      "Nexus, assess this message before sending.",
      "Nexus, predict communication risk.",
      "Nexus, create a communication summary.",
      "Nexus, show communication reasoning trace."
    ],
    safety: "Nexus did not send a message, place a call, execute WhatsApp, send email, or contact anyone externally."
  }
];

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

[
  "const NEXUS_PREDICTIVE_ADAPTERS = Object.freeze",
  "function createPredictiveState",
  "function parsePredictiveCommand",
  "function predictiveAdapterForCommand",
  "function isNexusMultiDomainPredictiveCommand",
  "function evaluatePredictiveSignal",
  "function buildScenarioSimulations",
  "function buildExpertChecklist",
  "function buildReasoningTrace",
  "function buildExpertSummary",
  "function recordPredictiveReceipt",
  "function routePredictiveCommand",
  "function buildNexusMultiDomainPredictiveMission",
  "function renderPredictivePanel",
  "function renderNexusPredictiveIntelligenceIndex",
  "NEXUS_MULTI_DOMAIN_PREDICTIVE_STORAGE_KEY"
].forEach(token => includes(app, token, `shared frontend predictive runtime ${token}`));

[
  "const NEXUS_MULTI_DOMAIN_PREDICTIVE_API_ADAPTERS = Object.freeze",
  "function evaluateNexusMultiDomainPredictiveApiState",
  "function buildNexusMultiDomainPredictiveApiScenarios",
  "function buildNexusMultiDomainPredictiveApiChecklist",
  "function buildNexusMultiDomainPredictiveApiReasoningTrace",
  "function buildNexusMultiDomainPredictiveApiSummary",
  "multiDomainPredictiveMatch",
  "noExternalExecutionAuthorized: true",
  "noFakeProviderExecution: true"
].forEach(token => includes(server, token, `shared backend predictive API ${token}`));

domains.forEach(domain => {
  includes(app, `${domain.mode}: {`, `${domain.mode} frontend adapter`);
  includes(app, domain.title, `${domain.mode} frontend title`);
  includes(app, domain.selector, `${domain.mode} panel selector`);
  includes(app, domain.safety, `${domain.mode} frontend safety copy`);
  includes(server, `${domain.mode}: { title: "${domain.title}"`, `${domain.mode} backend adapter`);
  includes(server, `"/api/nexus/${domain.route}/status"`, `${domain.mode} status route generated`);
  ["status", "evaluate", "summary", "scenarios", "checklist"].forEach(action => {
    includes(server, `/api/nexus/${domain.route}/${action}`, `${domain.mode} ${action} API route`);
  });
  domain.examples.forEach(example => includes(app, example, `${domain.mode} command example`));
  assert.strictEqual(packageJson.scripts[domain.alias], `node ${domain.script}`, `${domain.mode} package alias should run focused QA`);
  includes(qaSuite, domain.script, `${domain.mode} QA suite wiring`);
});

[
  "isNexusMultiDomainPredictiveCommand(normalizedCommand)",
  "isNexusMultiDomainPredictiveCommand(command)",
  "isNexusMultiDomainPredictiveCommand(normalized)",
  "Object.keys(NEXUS_PREDICTIVE_ADAPTERS).map",
  "nexusMultiDomainPredictiveState?.[mode]?.riskSignals?.length",
  "data-nexus-predictive-index",
  "data-nexus-command-input-target=\"nexusCommandCenterInput\""
].forEach(token => includes(app, token, `multi-domain command routing/rendering ${token}`));

[
  "buyer readiness",
  "route-risk assessment",
  "job-readiness signal",
  "course pathway fit",
  "mission readiness",
  "recipient/contact completeness",
  "needs_confirmation",
  "blocked_missing_data",
  "localOnly: true"
].forEach(token => includes(`${app}\n${server}`, token, `multi-domain taxonomy ${token}`));

[
  "buyer contacted successfully",
  "seller contacted successfully",
  "payment processed successfully",
  "transaction completed successfully",
  "carrier contacted successfully",
  "shipment updated externally",
  "employer contacted successfully",
  "job application submitted successfully",
  "course enrolled successfully",
  "certificate issued successfully",
  "drone dispatched successfully",
  "live imagery analyzed successfully",
  "message sent successfully",
  "call placed successfully",
  "WhatsApp sent successfully"
].forEach(token => excludes(`${app}\n${server}`, token, `unsafe predictive execution claim ${token}`));

includes(serviceWorker, "agrinexus-pwa-v370", "service worker cache bump");
includes(serviceWorker, "nexus-behavior-423", "service worker build version bump");
assert.strictEqual(packageJson.scripts["qa:nexus-platform-predictive-intelligence"], "node scripts/nexus-platform-predictive-intelligence-qa.js", "platform package alias should run platform QA");
includes(qaSuite, "scripts/nexus-platform-predictive-intelligence-qa.js", "qa-suite should include platform predictive intelligence QA");

console.log("Nexus platform predictive intelligence QA passed.");
