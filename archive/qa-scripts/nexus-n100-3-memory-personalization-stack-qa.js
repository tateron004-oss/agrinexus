const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const stack = require("../server/nexus-n100-memory-personalization-stack.js");
const sessionMemory = require("../public/nexus-session-memory.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertSafeState(state, label) {
  assert.equal(stack.isSafeN100MemoryState(state), true, `${label} must be a safe N100 memory state.`);
  assert.equal(state.canExecute, false, `${label} canExecute must be false.`);
  assert.equal(state.executionAuthority, "none", `${label} executionAuthority must be none.`);
  assert.equal(state.safetyPosture.inMemoryOnly, true, `${label} must stay in-memory only.`);
  assert.equal(state.safetyPosture.noExecutionFromMemory, true, `${label} must not allow execution from memory.`);
  const serialized = JSON.stringify(state);
  assert(!serialized.includes("patient@example.com"), `${label} must not retain raw email.`);
  assert(!serialized.includes("+1 555"), `${label} must not retain raw phone.`);
  assert(!/(phoneNumberToDial|telUrl|nativeBridge|paymentIntent|messageToSend|providerUrl|openUrl|deepLink)/.test(serialized), `${label} must not retain executable payload fields.`);
}

function assertStaticSafety() {
  const moduleSource = read("server", "nexus-n100-memory-personalization-stack.js");
  const doc = read("docs", "NEXUS_N100_3_MEMORY_PERSONALIZATION_STACK.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-memory-personalization-stack.js"), "N100-3 memory stack module must exist.");
  assert(exists("docs", "NEXUS_N100_3_MEMORY_PERSONALIZATION_STACK.md"), "N100-3 doc must exist.");
  assert(exists("scripts", "nexus-n100-3-memory-personalization-stack-qa.js"), "N100-3 QA must exist.");

  [
    "createN100MemoryState",
    "saveN100Search",
    "saveN100Plan",
    "saveN100Checklist",
    "saveN100Preference",
    "saveExplicitLocationPreference",
    "clearN100SessionContext",
    "forgetN100SavedSearch",
    "answerN100MemoryPrompt",
    "executionAuthority: \"none\""
  ].forEach(term => assert(moduleSource.includes(term), `N100-3 module must include ${term}.`));

  [
    "preferred location only when explicitly provided",
    "clear session context",
    "forget a saved search",
    "must not"
  ].forEach(term => assert(doc.includes(term), `N100-3 doc must include ${term}.`));

  [
    "nexus-n100-memory-personalization-stack",
    "createN100MemoryState",
    "answerN100MemoryPrompt"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-3 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-3 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-3 runtime term: ${term}.`);
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
    "executionAuthority: \"provider\"",
    "providerHandoffAllowed: true"
  ].forEach(term => assert(!moduleSource.includes(term), `N100-3 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-3-memory-personalization-stack"],
    "node scripts/nexus-n100-3-memory-personalization-stack-qa.js",
    "N100-3 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-3-memory-personalization-stack-qa.js"), "N100-3 QA must be wired into local-safe suites.");
}

function buildSeedMemory() {
  let state = stack.createN100MemoryState({
    sessionId: "session.local.n100-3",
    currentDomain: "workforce",
    activeTopic: "farm job search"
  });
  state = stack.saveN100Search(state, {
    query: "farm jobs near Stockton, CA",
    domain: "jobs"
  });
  state = stack.saveN100Plan(state, {
    title: "Agriculture technician training plan",
    steps: ["Find verified training", "Study crop basics", "Prepare resume"]
  });
  state = stack.saveN100Checklist(state, {
    title: "Questions to ask that program",
    items: ["What certification is offered?", "Is field experience included?"]
  });
  state = stack.rememberN100ConversationEvent(state, {
    selectedItem: { ordinal: 2, title: "Second job: Farm Workforce Support Specialist", email: "patient@example.com" },
    providerResult: { sourceName: "Remotive", phoneNumberToDial: "+1 555 111 2222" }
  });
  return state;
}

function assertMemoryOperations() {
  let state = buildSeedMemory();
  assertSafeState(state, "seed memory");
  assert.equal(state.savedSearches.length, 1, "Saved search should be retained.");
  assert.equal(state.savedPlans.length, 1, "Saved plan should be retained.");
  assert.equal(state.savedChecklists.length, 1, "Saved checklist should be retained.");
  assert.equal(state.preferences.preferredLanguage, undefined, "Preference should not exist before consent.");

  const deniedPreference = stack.saveN100Preference(state, "preferredLanguage", "Spanish", { explicitConsent: false });
  assert.equal(deniedPreference.preferences.preferredLanguage, undefined, "Preference writes must require explicit consent.");

  state = stack.saveN100Preference(state, "preferredLanguage", "Spanish", { explicitConsent: true });
  assert.equal(state.preferences.preferredLanguage, "Spanish", "Consented safe preference should be saved.");
  assertSafeState(state, "consented preference memory");

  const deniedLocation = stack.saveExplicitLocationPreference(state, "Stockton, CA", { explicitConsent: false });
  assert.equal(deniedLocation.explicitLocationPreference, null, "Location memory must require explicit consent.");
  state = stack.saveExplicitLocationPreference(state, "Stockton, CA", { explicitConsent: true });
  assert.equal(state.explicitLocationPreference.locationText, "Stockton, CA", "Explicit location text may be retained as read-only context.");
  assertSafeState(state, "explicit location memory");

  const forgotten = stack.forgetN100SavedSearch(state, state.savedSearches[0].searchId);
  assert.equal(forgotten.savedSearches.length, 0, "forgetN100SavedSearch must remove matching search.");
  const clearedPreference = stack.clearN100Preference(state, "preferredLanguage");
  assert.equal(clearedPreference.preferences.preferredLanguage, undefined, "clearN100Preference must remove safe preference.");
  const cleared = stack.clearN100SessionContext(state, "manual_test_clear");
  assert.equal(cleared.sessionContext.activeTopic, "", "clearN100SessionContext must clear active topic.");
  assert.equal(cleared.activeWorkflow, null, "clearN100SessionContext must clear active workflow.");
  assert.equal(cleared.lastProviderResult, null, "clearN100SessionContext must clear provider context.");
  assertSafeState(cleared, "cleared memory");
}

function assertPromptAnswers() {
  const state = stack.saveExplicitLocationPreference(buildSeedMemory(), "Stockton, CA", { explicitConsent: true });
  const expectations = new Map([
    ["Continue my farm job search.", /continue this saved search|cannot apply|contact employers/i],
    ["Show me the training plan we started.", /saved training plan|cannot enroll|submit/i],
    ["Use my usual location.", /explicitly saved location|read-only lookup|not location sharing/i],
    ["What was the second job you found?", /second selected item|cannot apply|contact/i],
    ["Remind me what I needed to ask that program.", /Saved program checklist|no message has been sent/i],
    ["Forget this search.", /forget a saved search|does not execute/i],
    ["Clear this conversation context.", /clear the current session context|does not affect providers/i]
  ]);

  expectations.forEach((pattern, prompt) => {
    const answer = stack.answerN100MemoryPrompt(prompt, state);
    assert.match(answer.answer, pattern, `${prompt} must produce expected memory answer.`);
    assert.equal(answer.canExecute, false, `${prompt} must not execute.`);
    assert.equal(answer.executionAuthority, "none", `${prompt} executionAuthority must be none.`);
    assert.equal(answer.noBackendWritePerformed, true, `${prompt} must not write backend.`);
    assert.equal(answer.noProviderContactAuthorized, true, `${prompt} must not authorize provider contact.`);
  });

  const noLocation = stack.answerN100MemoryPrompt("Use my usual location.", buildSeedMemory());
  assert.match(noLocation.answer, /do not have an explicit saved location/i, "Usual location must ask safely when missing explicit location.");
}

function assertUnderlyingSessionMemoryStillSafe() {
  const baseContext = sessionMemory.createNexusSessionContext({ activeTopic: "agriculture training" });
  const snapshot = sessionMemory.serializeNexusSessionMemory(baseContext, []);
  assert.equal(sessionMemory.validateNexusSessionMemorySnapshot(snapshot).ok, true, "Underlying session memory snapshot must still validate.");
  assert.equal(snapshot.canExecute, false, "Underlying session memory must remain non-executing.");
  assert.equal(snapshot.executionAuthority, "none", "Underlying session memory authority must remain none.");
}

function runN100MemoryPersonalizationStackQa() {
  assertStaticSafety();
  assertMemoryOperations();
  assertPromptAnswers();
  assertUnderlyingSessionMemoryStillSafe();

  console.log(JSON.stringify({
    phase: "N100-3",
    memoryLayers: ["session", "workflow", "provider-result", "selected-item", "saved-search", "saved-plan", "saved-checklist", "preferences", "explicit-location"],
    standardUserRuntimeActivated: false,
    inMemoryOnly: true,
    noExecutionAuthorized: true,
    noBackendWritePerformed: true
  }, null, 2));
  console.log("[nexus-n100-3-memory-personalization-stack-qa] passed");
}

if (require.main === module) {
  try {
    runN100MemoryPersonalizationStackQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100MemoryPersonalizationStackQa
});
