"use strict";

const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const engine = require(path.join(root, "public", "nexus-conversation-workflow-transition-engine.js"));

function includes(source, token, label) {
  assert(source.includes(token), `${label}: missing ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label}: unexpected ${token}`);
}

assert(engine.CONVERSATIONAL_STATES.EXPLORING === "exploring", "exploring state must exist");
assert(engine.CONVERSATIONAL_STATES.CONSIDERING === "considering", "considering state must exist");
assert(engine.CONVERSATIONAL_STATES.PREPARING === "preparing", "preparing state must exist");
assert(engine.CONVERSATIONAL_STATES.ACTING === "acting", "acting state must exist");
assert(engine.CONVERSATIONAL_STATES.RETURNING === "returning_or_branching", "returning state must exist");

const requiredDomains = [
  "health",
  "pharmacy",
  "agriculture",
  "learning",
  "workforce",
  "marketplace",
  "logistics",
  "communications",
  "drone",
  "daily-life"
];
const registryDomains = new Set(engine.WORKFLOW_REGISTRY.map(workflow => workflow.domain));
for (const domain of requiredDomains) {
  assert(registryDomains.has(domain), `workflow registry must include ${domain}`);
}

for (const workflow of engine.WORKFLOW_REGISTRY) {
  assert(workflow.workflowId, "workflow must declare workflowId");
  assert(workflow.conversationalPurpose, `${workflow.workflowId}: purpose required`);
  assert(Array.isArray(workflow.transitionSignals) && workflow.transitionSignals.length, `${workflow.workflowId}: transition signals required`);
  assert(Array.isArray(workflow.requiredContext), `${workflow.workflowId}: required context required`);
  assert(Array.isArray(workflow.missingInformationQuestions) && workflow.missingInformationQuestions.length, `${workflow.workflowId}: missing info questions required`);
  assert(workflow.safetyClass, `${workflow.workflowId}: safety class required`);
  assert(Array.isArray(workflow.confirmationRequirements) && workflow.confirmationRequirements.join(" ").includes("confirmation"), `${workflow.workflowId}: confirmation requirements required`);
  assert(workflow.executionCapability === "local_prepare_only", `${workflow.workflowId}: stage 1 must remain local prepare only`);
  assert(workflow.receiptBehavior, `${workflow.workflowId}: receipt behavior required`);
  if (/success/i.test(workflow.receiptBehavior)) {
    assert(/verified|provider evidence|local prep/i.test(workflow.receiptBehavior), `${workflow.workflowId}: success receipt wording must require verification or local-prep scope`);
  }
}

const exploration = engine.buildTransitionProposal("Why are older adults with diabetes more vulnerable during extreme heat?", {});
assert(exploration.classification.state === "exploring", "clinical why question remains exploration");
assert(exploration.opensWorkflow === false, "curiosity must not auto-open workflow");
assert(exploration.executionAuthorized === false, "exploration cannot authorize execution");

const considering = engine.buildTransitionProposal("What should our clinic do with this information?", {});
assert(considering.classification.state === "considering", "clinic options are considering");
assert(considering.opensWorkflow === false, "considering offers options without opening");
assert(Array.isArray(considering.options), "considering should produce workflow options when relevant");

const preparing = engine.buildTransitionProposal("Turn this into a clinic checklist for older adults with diabetes.", {});
assert(preparing.classification.state === "preparing", "turn this into should be preparing");
assert(preparing.action === "offer_workflows", "preparing initially offers workflow choices");
assert(preparing.opensWorkflow === false, "preparing must offer before opening");

const accepted = engine.buildTransitionProposal("the first one", { lastProposal: preparing });
assert(accepted.opensWorkflow === true, "contextual acceptance opens selected workflow");
assert(accepted.executionAuthorized === false, "accepted workflow does not authorize execution");
assert(accepted.providerHandoffAuthorized === false, "accepted workflow does not authorize provider handoff");
assert(accepted.carriedContext.excluded.includes("stale confirmation"), "context transfer excludes stale confirmations");

const acting = engine.buildTransitionProposal("Send it to the provider now.", {});
assert(acting.classification.state === "acting", "send request is acting");
assert(acting.executionAuthorized === false, "acting request remains execution-blocked");
assert(/cannot execute|confirmation|provider readiness/i.test(acting.message), "acting message explains gates");

const ag = engine.buildTransitionProposal("My maize is turning yellow. I need something I can take into the field.", {});
assert(ag.options.some(workflow => workflow.domain === "agriculture"), "agriculture concern offers field workflow");

includes(index, "/nexus-conversation-workflow-transition-engine.js", "index script loading");
includes(index, "/app.js?v=nexus-behavior-425", "app cache version bump");
includes(app, "nexusConversationWorkflowTransitionState", "app state");
includes(app, "function handleNexusConversationWorkflowTransitionCommand", "app handler");
includes(app, "renderNexusConversationWorkflowTransitionCard()", "same-conversation renderer");
includes(app, "handleNexusConversationWorkflowTransitionCommand(command)", "standard user routing");
includes(app, "data-nexus-conversation-workflow-transition=\"true\"", "transition card marker");
includes(app, "data-nexus-conversation-workflow-surface=\"true\"", "workflow surface marker");
includes(app, "data-execution-authority=\"false\"", "no execution marker");
includes(app, "data-provider-handoff-authorized=\"false\"", "no provider handoff marker");
includes(app, "Workflows are offered, not forced", "consent language");
includes(app, "Here is what I carried into this workflow from our conversation", "context transfer summary");
excludes(app, "workflowOpened: true,\n    executionAuthorized: true", "no auto execution authority");

assert(pkg.scripts["qa:nexus-conversation-workflow-transition-engine"] === "node scripts/nexus-conversation-workflow-transition-engine-qa.js", "package alias must exist");
assert(qaSuite.includes("scripts/nexus-conversation-workflow-transition-engine-qa.js"), "qa-suite must include transition QA");

console.log("Nexus conversation-to-workflow transition engine QA passed.");
