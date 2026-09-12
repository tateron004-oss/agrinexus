const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const multilingual = require("../server/nexus-n100-multilingual-command-assistant.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-multilingual-command-assistant.js");
  const doc = read("docs", "NEXUS_N100_13_MULTILINGUAL_COMMAND_ASSISTANT.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-multilingual-command-assistant.js"), "N100-13 multilingual module must exist.");
  assert(exists("docs", "NEXUS_N100_13_MULTILINGUAL_COMMAND_ASSISTANT.md"), "N100-13 documentation must exist.");
  assert(exists("scripts", "nexus-n100-13-multilingual-command-assistant-qa.js"), "N100-13 QA must exist.");

  [
    "SUPPORTED_LANGUAGES",
    "HIGH_RISK_TERMS_BY_LANGUAGE",
    "createN100MultilingualCommandDecision",
    "noTranslationApiUsed",
    "noClinicalInterpretationClaim",
    "noBackendTranslationServiceUsed"
  ].forEach(term => assert(source.includes(term), `N100-13 source must include ${term}.`));

  [
    "multilingual typed or user-initiated voice-style command understanding",
    "does not change the Standard User build",
    "does not activate any new language runtime behavior",
    "does not"
  ].forEach(term => assert(doc.includes(term), `N100-13 documentation must include ${term}.`));

  [
    "nexus-n100-multilingual-command-assistant",
    "createN100MultilingualCommandDecision",
    "SUPPORTED_LANGUAGES"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-13 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-13 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-13 runtime term: ${term}.`);
  });

  [
    "translate.google",
    "deepl",
    "fetch(",
    "getUserMedia(",
    "SpeechRecognition.start",
    "speechSynthesis.speak",
    "window.open",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-13 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-13-multilingual-command-assistant"],
    "node scripts/nexus-n100-13-multilingual-command-assistant-qa.js",
    "N100-13 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-13-multilingual-command-assistant-qa.js"), "N100-13 QA must be wired into local-safe suites.");
}

function assertLanguageCommand(command, locale, expectedLanguage, expectedIntent) {
  const decision = multilingual.createN100MultilingualCommandDecision({
    command,
    locale,
    nowIso: "2026-06-28T19:00:00.000Z"
  });
  assert.equal(multilingual.isSafeN100MultilingualCommandDecision(decision), true, `${command} must be safe.`);
  assert.equal(decision.detectedLanguage, expectedLanguage, `${command} language mismatch.`);
  assert.equal(decision.intent, expectedIntent, `${command} intent mismatch.`);
  assert.equal(decision.canExecute, false, `${command} must not execute.`);
  assert.equal(decision.executionAuthority, "none", `${command} must have no execution authority.`);
  assert.equal(decision.languageBoundary.noTranslationApiUsed, true, `${command} must not use translation API.`);
  assert.equal(decision.languageBoundary.noClinicalInterpretationClaim, true, `${command} must not claim clinical interpretation.`);
}

function assertSupportedLanguages() {
  assert.deepEqual(multilingual.SUPPORTED_LANGUAGES, ["en", "es", "fr", "ar", "pt", "sw"], "Six supported demo languages must be present.");
  assertLanguageCommand("Nexus, find farm jobs near Stockton.", "en-US", "en", "source_lookup_preview");
  assertLanguageCommand("Nexus, buscar trabajo agricola.", "es", "es", "source_lookup_preview");
  assertLanguageCommand("Nexus, comparer les deux meilleurs.", "fr", "fr", "compare_current_results");
  assertLanguageCommand("Nexus, قارن الخيارين.", "ar", "ar", "compare_current_results");
  assertLanguageCommand("Nexus, lista para treinamento.", "pt", "pt", "checklist_preparation");
  assertLanguageCommand("Nexus, nini ijayo.", "sw", "sw", "proactive_next_step");
}

function assertHighRiskBlocking() {
  [
    ["Nexus, call the provider.", "en"],
    ["Nexus, llama al proveedor.", "es"],
    ["Nexus, appelle le fournisseur.", "fr"],
    ["Nexus, اتصل بالطبيب.", "ar"],
    ["Nexus, ligar para o provedor.", "pt"],
    ["Nexus, piga daktari.", "sw"]
  ].forEach(([command, locale]) => {
    const decision = multilingual.createN100MultilingualCommandDecision({ command, locale });
    assert.equal(multilingual.isSafeN100MultilingualCommandDecision(decision), true, `${command} must be safe.`);
    assert.equal(decision.intent, "blocked_high_risk_voice_command", `${command} must be blocked.`);
    assert.equal(decision.status, "blocked_no_voice_execution", `${command} must not execute.`);
    assert.equal(decision.voiceDecision.safetyPosture.noCallAuthorized, true, `${command} must not authorize call.`);
  });
}

function runN100MultilingualCommandAssistantQa() {
  assertStaticSafety();
  assertSupportedLanguages();
  assertHighRiskBlocking();

  console.log(JSON.stringify({
    phase: "N100-13",
    supportedLanguages: multilingual.SUPPORTED_LANGUAGES,
    standardUserRuntimeActivated: false,
    translationApiUsed: false,
    noClinicalInterpretationClaim: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-13-multilingual-command-assistant-qa] passed");
}

if (require.main === module) {
  try {
    runN100MultilingualCommandAssistantQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100MultilingualCommandAssistantQa
});
