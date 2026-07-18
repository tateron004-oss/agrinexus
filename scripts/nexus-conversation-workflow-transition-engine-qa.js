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

const requiredWorkflowIds = [
  "health.patient-risk-checklist",
  "health.public-health-briefing",
  "health.heat-risk-response",
  "health.provider-discovery-prep",
  "pharmacy.counseling-guide",
  "pharmacy.caregiver-handout",
  "pharmacy.community-medication-outreach",
  "agriculture.field-inspection-checklist",
  "agriculture.source-backed-briefing",
  "agriculture.local-expert-questions",
  "agriculture.delivery-planning",
  "learning.literacy-support-path",
  "learning.training-provider-questions",
  "workforce.interview-coaching",
  "workforce.apprenticeship-path",
  "marketplace.buyer-readiness-checklist",
  "marketplace.seller-listing-prep",
  "logistics.shipment-intake",
  "logistics.tracking-provider-readiness",
  "communications.phone-script-prep",
  "communications.multichannel-message-prep",
  "drone.safety-readiness-checklist",
  "drone.crop-scan-prep",
  "daily-life.caregiver-routine",
  "daily-life.reminder-proposal"
];
const registryIds = new Set(engine.WORKFLOW_REGISTRY.map(workflow => workflow.workflowId));
for (const workflowId of requiredWorkflowIds) {
  assert(registryIds.has(workflowId), `workflow registry must include ${workflowId}`);
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
assert(accepted.trustRailReceipt.schemaVersion === "nexus-workflow-transition-trust-rail-receipt.v1", "accepted workflow includes trust rail receipt");
assert(accepted.trustRailReceipt.consent.workflowOfferedNotForced === true, "trust rail receipt proves workflows are offered");
assert(accepted.trustRailReceipt.contextTransfer.excluded.includes("unrelated topic data"), "trust rail receipt preserves context-transfer exclusions");
assert(accepted.trustRailReceipt.sourceContinuity.fakeCitationsAllowed === false, "trust rail receipt blocks fake citations");
assert(accepted.trustRailReceipt.executionIntegrity.executionAuthorized === false, "trust rail receipt blocks execution");
assert(accepted.trustRailReceipt.progressiveDisclosure.highRiskFieldsDeferred === true, "trust rail receipt defers high-risk fields");

const acting = engine.buildTransitionProposal("Send it to the provider now.", {});
assert(acting.classification.state === "acting", "send request is acting");
assert(acting.executionAuthorized === false, "acting request remains execution-blocked");
assert(/cannot execute|confirmation|provider readiness/i.test(acting.message), "acting message explains gates");

const ag = engine.buildTransitionProposal("My maize is turning yellow. I need something I can take into the field.", {});
assert(ag.options.some(workflow => workflow.domain === "agriculture"), "agriculture concern offers field workflow");

const publicHealth = engine.buildTransitionProposal("Create a public health briefing for community health workers about hypertension RPM.", {});
assert(publicHealth.options[0]?.workflowId === "health.public-health-briefing", "public-health briefing routes to health briefing workflow");
assert(publicHealth.options[0].safetyClass === "clinical_review_required", "public-health briefing keeps clinical review gate");

const heatRisk = engine.buildTransitionProposal("Prepare a heat risk response workflow for older adults with diabetes during extreme heat.", {});
assert(heatRisk.options.some(workflow => workflow.workflowId === "health.heat-risk-response"), "heat-risk command offers heat-risk workflow");

const providerDiscovery = engine.buildTransitionProposal("Find provider discovery criteria for a nearby clinic and pharmacy using typed location only.", {});
assert(providerDiscovery.options.some(workflow => workflow.workflowId === "health.provider-discovery-prep"), "provider discovery prep is available");
assert(providerDiscovery.options.find(workflow => workflow.workflowId === "health.provider-discovery-prep").executionCapability === "local_prepare_only", "provider discovery remains local-only");

const caregiverHandout = engine.buildTransitionProposal("Make a caregiver medication handout with pharmacist questions.", {});
assert(caregiverHandout.options[0]?.workflowId === "pharmacy.caregiver-handout", "caregiver medication handout routes to pharmacy handout workflow");
assert(/pharmacist|clinician|pharmacy/i.test(caregiverHandout.options[0].verificationRequirements.join(" ")), "caregiver handout requires pharmacy/clinical review");

const medicationOutreach = engine.buildTransitionProposal("Create a community medication outreach plan for refill support.", {});
assert(medicationOutreach.options.some(workflow => workflow.workflowId === "pharmacy.community-medication-outreach"), "medication outreach workflow is available");

const agBriefing = engine.buildTransitionProposal("Create a source-backed agriculture briefing using extension sources for tomato blight.", {});
assert(agBriefing.options[0]?.workflowId === "agriculture.source-backed-briefing", "source-backed agriculture briefing routes correctly");
assert(/local expert|source/i.test(agBriefing.options[0].verificationRequirements.join(" ")), "agriculture briefing preserves local/source verification");

const expertQuestions = engine.buildTransitionProposal("Prepare agronomist questions for a local agriculture specialist about yellow maize.", {});
assert(expertQuestions.options.some(workflow => workflow.workflowId === "agriculture.local-expert-questions"), "local expert question workflow is available");

const deliveryPlan = engine.buildTransitionProposal("Prepare agriculture delivery planning for produce transport to market without payment.", {});
assert(deliveryPlan.options.some(workflow => workflow.workflowId === "agriculture.delivery-planning"), "agriculture delivery planning workflow is available");
assert(deliveryPlan.options.find(workflow => workflow.workflowId === "agriculture.delivery-planning").confirmationRequirements.join(" ").includes("payment"), "delivery planning keeps payment/dispatch confirmation gate");

const literacyPath = engine.buildTransitionProposal("Create a literacy support path in Swahili for someone with low literacy.", {});
assert(literacyPath.options[0]?.workflowId === "learning.literacy-support-path", "literacy support routes to language-aware support path");

const trainingQuestions = engine.buildTransitionProposal("Prepare training provider questions about certificate costs and enrollment.", {});
assert(trainingQuestions.options.some(workflow => workflow.workflowId === "learning.training-provider-questions"), "training provider question workflow is available");
assert(trainingQuestions.options.find(workflow => workflow.workflowId === "learning.training-provider-questions").receiptBehavior.includes("No enrollment") || /no enrollment/i.test(trainingQuestions.options.find(workflow => workflow.workflowId === "learning.training-provider-questions").receiptBehavior), "training workflow does not claim enrollment");

const interviewCoaching = engine.buildTransitionProposal("Turn this into interview coaching for a farm logistics job.", {});
assert(interviewCoaching.options.some(workflow => workflow.workflowId === "workforce.interview-coaching"), "interview coaching workflow is available");

const apprenticeshipPath = engine.buildTransitionProposal("Create an apprenticeship pathway with transport and equipment support.", {});
assert(apprenticeshipPath.options[0]?.workflowId === "workforce.apprenticeship-path", "apprenticeship path routes correctly");
assert(/provider|employer/i.test(apprenticeshipPath.options[0].verificationRequirements.join(" ")), "apprenticeship path requires provider/employer evidence for live placement");

const buyerReadiness = engine.buildTransitionProposal("Prepare a buyer readiness checklist for maize market access.", {});
assert(buyerReadiness.options[0]?.workflowId === "marketplace.buyer-readiness-checklist", "buyer readiness workflow routes correctly");
assert(/payment|dispatch|buyer contact/i.test(buyerReadiness.options[0].confirmationRequirements.join(" ")), "buyer readiness keeps transaction gates");

const listingPrep = engine.buildTransitionProposal("Create a seller listing draft to list my crop without publishing.", {});
assert(listingPrep.options.some(workflow => workflow.workflowId === "marketplace.seller-listing-prep"), "seller listing prep workflow is available");
assert(/no listing receipt/i.test(listingPrep.options.find(workflow => workflow.workflowId === "marketplace.seller-listing-prep").receiptBehavior), "seller listing does not fake publication receipt");

const shipmentIntake = engine.buildTransitionProposal("Prepare shipment intake for cold chain cargo from the farm to market.", {});
assert(shipmentIntake.options[0]?.workflowId === "logistics.shipment-intake", "shipment intake workflow routes correctly");
assert(/booking|dispatch|location sharing/i.test(shipmentIntake.options[0].confirmationRequirements.join(" ")), "shipment intake keeps dispatch/location gates");

const trackingReadiness = engine.buildTransitionProposal("Prepare tracking provider readiness for a shipment tracking number.", {});
assert(trackingReadiness.options.some(workflow => workflow.workflowId === "logistics.tracking-provider-readiness"), "tracking-provider readiness workflow is available");
assert(/provider result/i.test(trackingReadiness.options.find(workflow => workflow.workflowId === "logistics.tracking-provider-readiness").verificationRequirements.join(" ")), "tracking readiness requires provider result");

const phoneScript = engine.buildTransitionProposal("Prepare a phone call script with talking points, but do not call.", {});
assert(phoneScript.options.some(workflow => workflow.workflowId === "communications.phone-script-prep"), "phone script workflow is available");
assert(/no call receipt/i.test(phoneScript.options.find(workflow => workflow.workflowId === "communications.phone-script-prep").receiptBehavior), "phone script does not fake call receipt");

const messagePrep = engine.buildTransitionProposal("Prepare an SMS draft and WhatsApp draft for the provider, but do not send.", {});
assert(messagePrep.options.some(workflow => workflow.workflowId === "communications.multichannel-message-prep"), "multichannel message prep workflow is available");
assert(/provider message id/i.test(messagePrep.options.find(workflow => workflow.workflowId === "communications.multichannel-message-prep").verificationRequirements.join(" ")), "message prep requires provider message ID before sent claim");

const droneSafety = engine.buildTransitionProposal("Create a drone safety checklist for a licensed operator and safe flight window.", {});
assert(droneSafety.options.some(workflow => workflow.workflowId === "drone.safety-readiness-checklist"), "drone safety readiness workflow is available");
assert(/licensed provider|jurisdiction/i.test(droneSafety.options.find(workflow => workflow.workflowId === "drone.safety-readiness-checklist").confirmationRequirements.join(" ")), "drone safety keeps licensed/jurisdiction gate");

const cropScan = engine.buildTransitionProposal("Prepare a crop scan for my field without launching a drone.", {});
assert(cropScan.options.some(workflow => workflow.workflowId === "drone.crop-scan-prep"), "crop scan prep workflow is available");
assert(/no imagery|no scan/i.test(cropScan.options.find(workflow => workflow.workflowId === "drone.crop-scan-prep").receiptBehavior), "crop scan does not fake imagery receipt");

const caregiverRoutine = engine.buildTransitionProposal("Create a caregiver routine to help my mother remember daily care steps.", {});
assert(caregiverRoutine.options.some(workflow => workflow.workflowId === "daily-life.caregiver-routine"), "caregiver routine workflow is available");
assert(/without scheduling or messaging/i.test(caregiverRoutine.options.find(workflow => workflow.workflowId === "daily-life.caregiver-routine").conversationalPurpose), "caregiver routine does not auto-schedule or message");

const reminderProposal = engine.buildTransitionProposal("Prepare a reminder proposal to help me remember medication questions.", {});
assert(reminderProposal.options.some(workflow => workflow.workflowId === "daily-life.reminder-proposal"), "reminder proposal workflow is available");
assert(/no scheduled reminder receipt/i.test(reminderProposal.options.find(workflow => workflow.workflowId === "daily-life.reminder-proposal").receiptBehavior), "reminder proposal does not fake scheduling");

includes(index, "/nexus-conversation-workflow-transition-engine.js", "index script loading");
includes(index, "/app.js?v=nexus-behavior-464", "app cache version bump");
includes(app, "nexusConversationWorkflowTransitionState", "app state");
includes(app, "function handleNexusConversationWorkflowTransitionCommand", "app handler");
includes(app, "renderNexusConversationWorkflowTransitionCard()", "same-conversation renderer");
includes(app, "handleNexusConversationWorkflowTransitionCommand(command)", "standard user routing");
includes(app, "data-nexus-conversation-workflow-transition=\"true\"", "transition card marker");
includes(app, "data-nexus-conversation-workflow-surface=\"true\"", "workflow surface marker");
includes(app, "data-execution-authority=\"false\"", "no execution marker");
includes(app, "data-provider-handoff-authorized=\"false\"", "no provider handoff marker");
includes(app, "Trust rails", "trust rail UI marker");
includes(app, "Workflows are offered, not forced", "consent language");
includes(app, "Here is what I carried into this workflow from our conversation", "context transfer summary");
excludes(app, "workflowOpened: true,\n    executionAuthorized: true", "no auto execution authority");

assert(pkg.scripts["qa:nexus-conversation-workflow-transition-engine"] === "node scripts/nexus-conversation-workflow-transition-engine-qa.js", "package alias must exist");
assert(qaSuite.includes("scripts/nexus-conversation-workflow-transition-engine-qa.js"), "qa-suite must include transition QA");

console.log("Nexus conversation-to-workflow transition engine QA passed.");
