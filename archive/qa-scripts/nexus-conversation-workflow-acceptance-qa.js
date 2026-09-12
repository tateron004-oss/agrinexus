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

const acceptanceScenarios = [
  {
    name: "curiosity stays conversational",
    prompt: "Why are older adults with diabetes more vulnerable during extreme heat?",
    expectState: "exploring",
    expectOpens: false,
    expectWorkflow: null
  },
  {
    name: "health checklist offer then acceptance",
    prompt: "Turn this into a clinic checklist for older adults with diabetes.",
    accept: "the first one",
    expectState: "preparing",
    expectOpens: false,
    expectAcceptedDomain: "health"
  },
  {
    name: "public health briefing",
    prompt: "Create a public health briefing for community health workers about hypertension RPM.",
    expectWorkflow: "health.public-health-briefing"
  },
  {
    name: "pharmacy caregiver handout",
    prompt: "Make a caregiver medication handout with pharmacist questions.",
    expectWorkflow: "pharmacy.caregiver-handout"
  },
  {
    name: "agriculture source briefing",
    prompt: "Create a source-backed agriculture briefing using extension sources for tomato blight.",
    expectWorkflow: "agriculture.source-backed-briefing"
  },
  {
    name: "learning literacy support",
    prompt: "Create a literacy support path in Swahili for someone with low literacy.",
    expectWorkflow: "learning.literacy-support-path"
  },
  {
    name: "workforce apprenticeship path",
    prompt: "Create an apprenticeship pathway with transport and equipment support.",
    expectWorkflow: "workforce.apprenticeship-path"
  },
  {
    name: "marketplace buyer readiness",
    prompt: "Prepare a buyer readiness checklist for maize market access.",
    expectWorkflow: "marketplace.buyer-readiness-checklist"
  },
  {
    name: "logistics shipment intake",
    prompt: "Prepare shipment intake for cold chain cargo from the farm to market.",
    expectWorkflow: "logistics.shipment-intake"
  },
  {
    name: "communications multichannel prep",
    prompt: "Prepare an SMS draft and WhatsApp draft for the provider, but do not send.",
    expectWorkflow: "communications.multichannel-message-prep"
  },
  {
    name: "drone crop scan prep",
    prompt: "Prepare a crop scan for my field without launching a drone.",
    expectWorkflow: "drone.crop-scan-prep"
  },
  {
    name: "daily life reminder proposal",
    prompt: "Prepare a reminder proposal to help me remember medication questions.",
    expectWorkflow: "daily-life.reminder-proposal"
  }
];

for (const scenario of acceptanceScenarios) {
  const proposal = engine.buildTransitionProposal(scenario.prompt, {});
  assert(proposal.executionAuthorized === false, `${scenario.name}: proposal must not authorize execution`);
  assert(proposal.providerHandoffAuthorized === false, `${scenario.name}: proposal must not authorize provider handoff`);
  assert(proposal.trustRailReceipt?.executionIntegrity?.externalActionBlocked === true, `${scenario.name}: trust rail must block external action`);
  assert(proposal.trustRailReceipt?.sourceContinuity?.fakeCitationsAllowed === false, `${scenario.name}: fake citations must be blocked`);
  if (scenario.expectState) assert(proposal.classification.state === scenario.expectState, `${scenario.name}: state mismatch`);
  if (typeof scenario.expectOpens === "boolean") assert(proposal.opensWorkflow === scenario.expectOpens, `${scenario.name}: open state mismatch`);
  if (scenario.expectWorkflow) {
    assert(proposal.options.some(workflow => workflow.workflowId === scenario.expectWorkflow), `${scenario.name}: expected workflow ${scenario.expectWorkflow}`);
  }
  if (scenario.accept) {
    const accepted = engine.buildTransitionProposal(scenario.accept, { lastProposal: proposal });
    assert(accepted.opensWorkflow === true, `${scenario.name}: acceptance must open workflow`);
    assert(accepted.workflow.domain === scenario.expectAcceptedDomain, `${scenario.name}: accepted domain mismatch`);
    assert(accepted.executionAuthorized === false, `${scenario.name}: accepted workflow must not execute`);
    assert(accepted.carriedContext.excluded.includes("stale confirmation"), `${scenario.name}: context transfer excludes stale confirmation`);
  }
}

const decline = engine.buildTransitionProposal("not yet", {
  lastProposal: engine.buildTransitionProposal("Turn this into a clinic checklist for older adults with diabetes.", {})
});
assert(decline.opensWorkflow === false, "not yet must not open a workflow");
assert(decline.executionAuthorized === false, "not yet must not authorize execution");

const send = engine.buildTransitionProposal("Send it to the provider now.", {});
assert(send.classification.state === "acting", "send request must classify as acting");
assert(/cannot execute|confirmation|provider readiness/i.test(send.message), "send request must explain execution gates");
assert(send.executionAuthorized === false, "send request must remain blocked");
assert(send.providerHandoffAuthorized === false, "send request must not authorize provider handoff");

assert(index.includes("/nexus-conversation-workflow-transition-engine.js"), "index must load transition engine");
assert(app.includes("Trust rails"), "Standard User workflow surface must show trust rails");
assert(app.includes("Workflows are offered, not forced"), "Standard User copy must preserve consent language");
assert(!app.includes("providerHandoffAuthorized: true"), "app must not authorize provider handoff in transition runtime");
assert(pkg.scripts["qa:nexus-conversation-workflow-acceptance"] === "node scripts/nexus-conversation-workflow-acceptance-qa.js", "package alias must exist");
assert(qaSuite.includes("scripts/nexus-conversation-workflow-acceptance-qa.js"), "qa-suite must include acceptance QA");

console.log("Nexus conversation workflow acceptance QA passed.");
