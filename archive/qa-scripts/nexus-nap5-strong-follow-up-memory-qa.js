const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const memory = require("../server/nexus-strong-follow-up-memory.js");
const prep = require("../server/nexus-safe-action-preparation.js");
const planner = require("../server/nexus-agent-task-planner.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function runNap5StrongFollowUpMemoryQa() {
  const source = read("server", "nexus-strong-follow-up-memory.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "lastUserGoal",
    "lastProviderCategory",
    "lastQuery",
    "lastResultsSummary",
    "selectedItem",
    "activePlan",
    "activeChecklistOrDraft",
    "blockedActions",
    "safeNextStep",
    "sessionOnly",
    "noPersistence",
    "noExecutionAuthorized"
  ].forEach(term => assert(source.includes(term), `NAP5 memory must include ${term}.`));

  [
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "getUserMedia",
    "executionAuthority: true",
    "providerHandoffAllowed: true"
  ].forEach(term => assert(!source.includes(term), `NAP5 memory must not introduce unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-nap5-strong-follow-up-memory"],
    "node scripts/nexus-nap5-strong-follow-up-memory-qa.js",
    "NAP5 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-nap5-strong-follow-up-memory-qa.js"), "NAP5 QA must be wired into local-safe suites.");

  const activePlan = planner.buildAgentTaskPlan("Help me get a farm job.");
  const activePreparation = prep.buildSafeActionPreparation("Draft questions for that program.");
  const mem = memory.buildStrongFollowUpMemory({
    userGoal: "Find farm jobs near Stockton.",
    providerCategory: "job-search",
    query: "Find farm jobs near Stockton.",
    resultsSummary: "Three public job options were found.",
    selectedItem: { index: 2, label: "Farm Workforce Coordinator", source: "Remotive" },
    activePlan,
    activePreparation,
    blockedActions: ["apply", "call"]
  });

  assert.equal(memory.isSafeStrongFollowUpMemory(mem), true, "Strong follow-up memory must be safe.");
  assert.equal(mem.sessionOnly, true);
  assert.equal(mem.noPersistence, true);
  assert.equal(mem.noExecutionAuthorized, true);
  assert.equal(mem.selectedItem.index, 2);
  assert.equal(mem.activePlan.goalType, "farm-job");
  assert.equal(mem.activeChecklistOrDraft.preparationType, "provider-questions");

  [
    ["Use the second one.", "use-selected-item"],
    ["Make it simpler.", "simplify"],
    ["Only show entry-level jobs.", "filter-entry-level"],
    ["Turn that into a checklist.", "checklist"],
    ["Draft questions for that program.", "draft-questions"],
    ["Compare the top two.", "compare-top-two"],
    ["What should I do next?", "next-best-step"]
  ].forEach(([prompt, expected]) => {
    const result = memory.classifyStrongFollowUp(prompt, mem);
    assert.equal(result.allowed, true, `${prompt} must be allowed.`);
    assert.equal(result.followUpType, expected, `${prompt} must classify as ${expected}.`);
    const response = memory.buildStrongFollowUpResponse(prompt, mem);
    assert.equal(response.noExecutionAuthorized, true, `${prompt} response must not authorize execution.`);
    assert.match(response.answer, /preparation-only|read-only/i, `${prompt} response must preserve safe posture.`);
  });

  ["Apply now.", "Call them.", "Send it.", "Book it.", "Pay for it.", "Dispatch someone."].forEach(prompt => {
    const result = memory.classifyStrongFollowUp(prompt, mem);
    assert.equal(result.allowed, false, `${prompt} must be blocked.`);
    assert.equal(result.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
  });

  console.log(JSON.stringify({
    sessionOnlyMemory: true,
    selectedItemMemory: true,
    activePlanMemory: true,
    draftMemory: true,
    safeFollowUpsSupported: true,
    blockedFollowUpsProtected: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-nap5-strong-follow-up-memory-qa] passed");
}

if (require.main === module) {
  try {
    runNap5StrongFollowUpMemoryQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runNap5StrongFollowUpMemoryQa
});
