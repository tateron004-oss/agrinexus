const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const dialogue = require("../public/nexus-assistant-dialogue-engine-contract.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_LIVE4_ASSISTANT_DIALOGUE_ENGINE_CONTRACT.md";
const moduleName = "nexus-assistant-dialogue-engine-contract.js";
const fixtureName = "assistant-dialogue-chains.json";
const qaName = "nexus-sprint-live4-assistant-dialogue-engine-contract-qa.js";

assert(exists("docs", docName), "LIVE4 doc must exist.");
assert(exists("public", moduleName), "LIVE4 dialogue module must exist.");
assert(exists("fixtures", "nexus", fixtureName), "LIVE4 dialogue fixtures must exist.");
assert(exists("scripts", qaName), "LIVE4 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const fixtures = JSON.parse(read("fixtures", "nexus", fixtureName));
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "Nexus Sprint LIVE4",
  "Assistant Dialogue Engine Contract",
  "classifyAssistantDialogueIntent(input, context)",
  "resolveAssistantFollowUp(input, context)",
  "requiresAssistantClarification(classification)",
  "buildAssistantClarificationQuestion(classification)",
  "buildAssistantDialoguePreview(input, context)",
  "isSafeAssistantDialoguePreview(preview)",
  "general question answering",
  "weather",
  "conflict/security awareness",
  "shipment tracking",
  "job search",
  "job application preparation",
  "music/media",
  "payment/mobile money intent",
  "emergency intent",
  "medical/pharmacy intent",
  "dialoguePreviewId",
  "spokenSummary",
  "detailedAnswerAvailable",
  "displayDetails",
  "evidenceSummary",
  "clarificationQuestion",
  "safetyNotice",
  "nextSafeOptions",
  "`noExecutionRequired: true`",
  "`executionAuthority: false`",
  "Fixture Dialogue Chains",
  "No-Execution Boundary",
  "LIVE5"
].forEach(term => assert(doc.includes(term), `LIVE4 doc must include: ${term}`));

[
  "classifyAssistantDialogueIntent",
  "resolveAssistantFollowUp",
  "requiresAssistantClarification",
  "buildAssistantClarificationQuestion",
  "buildAssistantDialoguePreview",
  "isSafeAssistantDialoguePreview"
].forEach(fn => assert.equal(typeof dialogue[fn], "function", `LIVE4 module must export ${fn}`));

assert.equal(fixtures.length, 11, "LIVE4 must include 11 dialogue chains.");
[
  "live4-weather-chain",
  "live4-conflict-security-chain",
  "live4-shipment-chain",
  "live4-job-search-chain",
  "live4-job-application-preparation-chain",
  "live4-music-chain",
  "live4-contact-message-chain",
  "live4-simplification-language-chain",
  "live4-blocked-execution-chain",
  "live4-ambiguous-clarification-chain",
  "live4-general-question-chain"
].forEach(id => assert(fixtures.some(chain => chain.chainId === id), `LIVE4 fixtures must include ${id}`));

fixtures.forEach(chain => {
  assert(Array.isArray(chain.turns) && chain.turns.length > 0, `${chain.chainId} must include turns.`);
  chain.turns.forEach(turn => {
    const classification = dialogue.classifyAssistantDialogueIntent(turn.input, chain.context);
    assert.equal(classification.intentType, turn.expectedIntentType, `${chain.chainId}/${turn.input} intent mismatch`);
    assert.equal(dialogue.requiresAssistantClarification(classification), turn.expectedClarification, `${chain.chainId}/${turn.input} clarification mismatch`);
    const preview = dialogue.buildAssistantDialoguePreview(turn.input, chain.context);
    assert.equal(dialogue.isSafeAssistantDialoguePreview(preview), true, `${chain.chainId}/${turn.input} preview must be safe`);
    assert.equal(preview.noExecutionRequired, true, `${chain.chainId}/${turn.input} must require no execution`);
    assert.equal(preview.executionAuthority, false, `${chain.chainId}/${turn.input} must have no execution authority`);
    if (turn.riskCautionRequired === true) assert.equal(preview.riskCautionRequired, true, `${chain.chainId}/${turn.input} must require risk caution`);
    if (turn.expectedLanguage) assert.equal(preview.responseLanguage, turn.expectedLanguage, `${chain.chainId}/${turn.input} language mismatch`);
  });
});

const weatherWithoutLocation = dialogue.classifyAssistantDialogueIntent("Weather", {});
assert.equal(dialogue.requiresAssistantClarification(weatherWithoutLocation), true, "weather without location must ask clarification.");
assert.equal(dialogue.buildAssistantClarificationQuestion(weatherWithoutLocation), "Which city or country should I check?", "weather clarification copy must be safe.");

const highRiskPayment = dialogue.buildAssistantDialoguePreview("Pay the provider now", {});
assert.equal(highRiskPayment.riskCautionRequired, true, "payment preview must require risk caution.");
assert(highRiskPayment.safetyNotice.includes("will not execute"), "high-risk safety notice must avoid execution.");
assert(highRiskPayment.blockedExecutionChannels.includes("payment"), "payment channel must be blocked.");
assert(highRiskPayment.blockedExecutionChannels.includes("provider-dispatch"), "provider dispatch must be blocked.");

[
  "fetch(",
  "XMLHttpRequest",
  "http.request",
  "https.request",
  "writeFile",
  "appendFile",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "document.",
  "querySelector",
  "addEventListener",
  "createElement",
  "innerHTML",
  "navigator.geolocation",
  "mediaDevices",
  "window.open",
  "location.href",
  "sendBeacon",
  "db.json"
].forEach(term => assert(!moduleSource.includes(term), `LIVE4 module must not include side-effect API: ${term}`));

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load LIVE4 module.`);
});

const alias = "qa:nexus-sprint-live4-assistant-dialogue-engine-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include LIVE4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-live3-mock-source-provider-harness-qa.js"), "LIVE4 requires LIVE3 QA to remain in qa-suite.");

console.log("[nexus-sprint-live4-assistant-dialogue-engine-contract-qa] passed");
