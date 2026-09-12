const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const brain = require("../server/nexus-internal-knowledge-brain.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertSafeAnswer(answer, label) {
  assert.equal(brain.isSafeInternalKnowledgeAnswer(answer), true, `${label} must return a safe internal knowledge answer.`);
  assert.equal(answer.noExecutionAuthorized, true, `${label} must not authorize execution.`);
  assert.equal(answer.noProviderContactAuthorized, true, `${label} must not authorize provider contact.`);
  assert.equal(answer.noBackendWritePerformed, true, `${label} must not perform backend writes.`);
  assert.equal(answer.noLocationPermissionRequested, true, `${label} must not request location permission.`);
  assert(answer.retrievedAt, `${label} must include retrievedAt.`);
  assert(answer.confidence, `${label} must include confidence.`);
  assert(answer.trustTier, `${label} must include trust tier.`);
  assert(Array.isArray(answer.citations), `${label} must include citations array.`);
  assert(Array.isArray(answer.blockedActions), `${label} must include blocked actions.`);
  assert(!/action completed|called|messaged|paid|purchased|booked|scheduled|submitted|dispatched|shared your location/i.test(answer.answer), `${label} must not claim completed actions.`);
}

function assertStaticSafety() {
  const moduleSource = read("server", "nexus-internal-knowledge-brain.js");
  const doc = read("docs", "NEXUS_N100_2_INTERNAL_AGRINEXUS_KNOWLEDGE_BRAIN.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-internal-knowledge-brain.js"), "Internal knowledge brain module must exist.");
  assert(exists("docs", "NEXUS_N100_2_INTERNAL_AGRINEXUS_KNOWLEDGE_BRAIN.md"), "N100-2 doc must exist.");
  assert(exists("scripts", "nexus-n100-2-internal-knowledge-brain-qa.js"), "N100-2 QA must exist.");

  [
    "INTERNAL_KNOWLEDGE_ENTRIES",
    "searchInternalKnowledge",
    "answerInternalKnowledgeQuestion",
    "combineInternalKnowledgeWithProviderAnswer",
    "isSafeInternalKnowledgeAnswer",
    "noExecutionAuthorized",
    "noProviderContactAuthorized",
    "noBackendWritePerformed"
  ].forEach(term => assert(moduleSource.includes(term), `Internal knowledge brain must include ${term}.`));

  [
    "AgriNexus mission and platform capabilities",
    "AgriTrade marketplace browse-only behavior",
    "blocked workflows",
    "cannot unlock execution"
  ].forEach(term => assert(doc.includes(term), `N100-2 doc must include ${term}.`));

  [
    "nexus-internal-knowledge-brain",
    "answerInternalKnowledgeQuestion",
    "INTERNAL_KNOWLEDGE_ENTRIES"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-2 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-2 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-2 runtime term: ${term}.`);
  });

  [
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "getUserMedia",
    "window.open",
    "location.href",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "ACTION_CALL",
    "executionAuthority: true",
    "providerHandoffAllowed: true"
  ].forEach(term => assert(!moduleSource.includes(term), `Internal knowledge brain must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-2-internal-knowledge-brain"],
    "node scripts/nexus-n100-2-internal-knowledge-brain-qa.js",
    "N100-2 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-2-internal-knowledge-brain-qa.js"), "N100-2 QA must be wired into local-safe suites.");
}

function assertKnowledgeCoverage() {
  const requiredCategories = [
    "mission",
    "assistant-capabilities",
    "roles",
    "agritrade",
    "workforce-training",
    "app-help",
    "safety-policies",
    "provider-status",
    "supported-workflows"
  ];
  const categories = new Set(brain.INTERNAL_KNOWLEDGE_ENTRIES.map(entry => entry.category));
  requiredCategories.forEach(category => assert(categories.has(category), `Internal brain must include category: ${category}.`));

  const expectations = new Map([
    ["What can Nexus do?", /source-backed|workflow|assistant|guide/i],
    ["How do I use AgriTrade?", /browse|marketplace|buy|sell|payment/i],
    ["Find training in the app.", /training|course|workforce/i],
    ["What programs do we offer?", /workforce|training|agriculture|program/i],
    ["How do I become an agriculture technician?", /technician|crop|soil|irrigation|resume/i],
    ["What is the next step for me?", /next step|goal|training|jobs|field support|clarifying/i],
    ["What actions can Nexus perform right now?", /answer|preview|prepare|guide|source-backed/i],
    ["What actions are blocked?", /calls|messages|payments|emergency|location/i]
  ]);

  brain.TEST_QUESTIONS.forEach(question => {
    const answer = brain.answerInternalKnowledgeQuestion(question);
    assertSafeAnswer(answer, question);
    assert(answer.matches.length > 0, `${question} must match internal knowledge.`);
    assert(answer.citations.length >= 1, `${question} must include internal citations.`);
    assert.match(answer.answer, expectations.get(question), `${question} answer must include expected useful content.`);
  });
}

function assertSearchAndUnsupportedBehavior() {
  const search = brain.searchInternalKnowledge("provider feature flag status", { limit: 3 });
  assert(search.length >= 1, "Search must return provider/feature flag internal knowledge.");
  assert(search.some(result => result.category === "provider-status"), "Search must find provider-status category.");

  const unknown = brain.answerInternalKnowledgeQuestion("Explain the unsupported moon tractor financing protocol.");
  assertSafeAnswer(unknown, "unsupported question");
  assert.match(unknown.answer, /do not have enough internal knowledge|supported Nexus capabilities/i, "Unknown topics must be answered with honest limits.");
}

function assertProviderCombination() {
  const providerAnswer = Object.freeze({
    answer: "Here is source-backed weather context for Stockton.",
    citations: Object.freeze([Object.freeze({
      sourceName: "Open-Meteo",
      sourceUrl: "https://open-meteo.com/",
      evidenceStatus: "source-backed",
      freshnessStatus: "fresh"
    })]),
    noExecutionAuthorized: true
  });
  const combined = brain.combineInternalKnowledgeWithProviderAnswer("What can Nexus do with weather?", providerAnswer);
  assertSafeAnswer(combined, "combined provider answer");
  assert.equal(combined.schemaVersion, "nexus.n100.internalKnowledgePlusProvider.v1", "Combined answer must use provider-combine schema.");
  assert(combined.citations.some(citation => citation.sourceName === "Open-Meteo"), "Combined answer must retain provider citation.");
  assert.match(combined.answer, /Source-backed context/i, "Combined answer must label provider context.");
  assert.equal(combined.safetyPosture.externalProviderContextIncluded, true, "Combined answer must disclose provider context.");
}

function runN100InternalKnowledgeBrainQa() {
  assertStaticSafety();
  assertKnowledgeCoverage();
  assertSearchAndUnsupportedBehavior();
  assertProviderCombination();

  console.log(JSON.stringify({
    phase: "N100-2",
    knowledgeEntries: brain.INTERNAL_KNOWLEDGE_ENTRIES.length,
    testQuestions: brain.TEST_QUESTIONS.length,
    combinesWithProviderAnswers: true,
    standardUserRuntimeActivated: false,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  }, null, 2));
  console.log("[nexus-n100-2-internal-knowledge-brain-qa] passed");
}

if (require.main === module) {
  try {
    runN100InternalKnowledgeBrainQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100InternalKnowledgeBrainQa
});
