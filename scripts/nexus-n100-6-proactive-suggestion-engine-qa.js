const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const suggestions = require("../server/nexus-n100-proactive-suggestion-engine.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-proactive-suggestion-engine.js");
  const doc = read("docs", "NEXUS_N100_6_PROACTIVE_SUGGESTION_ENGINE.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-proactive-suggestion-engine.js"), "N100-6 suggestion module must exist.");
  assert(exists("docs", "NEXUS_N100_6_PROACTIVE_SUGGESTION_ENGINE.md"), "N100-6 doc must exist.");
  assert(exists("scripts", "nexus-n100-6-proactive-suggestion-engine-qa.js"), "N100-6 QA must exist.");

  [
    "suggestionId",
    "safeActionType",
    "requiresConfirmation",
    "blockedActions",
    "noExecutionAuthorized",
    "backgroundGenerated: false"
  ].forEach(term => assert(source.includes(term), `N100-6 module must include ${term}.`));

  [
    "controlled proactive suggestions",
    "Not allowed",
    "background monitoring",
    "no background autonomy"
  ].forEach(term => assert(doc.includes(term), `N100-6 doc must include ${term}.`));

  [
    "nexus-n100-proactive-suggestion-engine",
    "buildN100ProactiveSuggestions",
    "blockN100ProactiveSuggestionContext"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-6 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-6 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-6 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "setInterval",
    "setTimeout",
    "Notification",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "getUserMedia",
    "window.open",
    "location.href",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-6 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-6-proactive-suggestion-engine"],
    "node scripts/nexus-n100-6-proactive-suggestion-engine-qa.js",
    "N100-6 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-6-proactive-suggestion-engine-qa.js"), "N100-6 QA must be wired into local-safe suites.");
}

function assertSuggestion(context, expectedType) {
  const list = suggestions.buildN100ProactiveSuggestions(context);
  assert(list.length >= 1, `${JSON.stringify(context)} should produce suggestions.`);
  assert(list.some(item => item.safeActionType === expectedType), `Expected ${expectedType} suggestion.`);
  list.forEach(item => {
    assert.equal(suggestions.isSafeN100ProactiveSuggestion(item), true, `${item.safeActionType} suggestion must be safe.`);
    assert.equal(item.requiresConfirmation, true, "Suggestion must require user confirmation.");
    assert.equal(item.backgroundGenerated, false, "Suggestion must not be background generated.");
    assert.equal(item.notificationAllowed, false, "Suggestion must not send notifications.");
  });
}

function assertAllowedContexts() {
  assertSuggestion({ eventType: "user_result", domain: "agriculture" }, "observation_checklist");
  assertSuggestion({ eventType: "workflow_step", domain: "workforce" }, "application_prep_checklist");
  assertSuggestion({ eventType: "provider_failure", domain: "weather" }, "retry_or_refine");
  assertSuggestion({ eventType: "stale_data", domain: "crop" }, "refresh_source");
  assertSuggestion({ eventType: "saved_plan", domain: "training" }, "review_saved_plan");
}

function assertUnsupportedContextNoSuggestion() {
  const list = suggestions.buildN100ProactiveSuggestions({ eventType: "background_tick", domain: "agriculture" });
  assert.equal(list.length, 0, "Background tick must produce no proactive suggestions.");
}

function assertBlockedContext() {
  const blocked = suggestions.blockN100ProactiveSuggestionContext({ eventType: "emergency" });
  assert.equal(suggestions.isSafeN100ProactiveSuggestion(blocked), true, "Blocked suggestion context must still be safe.");
  suggestions.NOT_ALLOWED_AUTONOMY.forEach(action => {
    assert(blocked.blockedActions.includes(action), `${action} must be blocked.`);
  });
  assert.equal(blocked.canExecute, false, "Blocked context must not execute.");
}

function runN100ProactiveSuggestionEngineQa() {
  assertStaticSafety();
  assertAllowedContexts();
  assertUnsupportedContextNoSuggestion();
  assertBlockedContext();

  console.log(JSON.stringify({
    phase: "N100-6",
    safeActionTypes: suggestions.SAFE_ACTION_TYPES,
    notAllowed: suggestions.NOT_ALLOWED_AUTONOMY,
    standardUserRuntimeActivated: false,
    noBackgroundAutonomy: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-6-proactive-suggestion-engine-qa] passed");
}

if (require.main === module) {
  try {
    runN100ProactiveSuggestionEngineQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100ProactiveSuggestionEngineQa
});
