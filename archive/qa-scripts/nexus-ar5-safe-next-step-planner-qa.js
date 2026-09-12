const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");
const nextSteps = require("../server/nexus-assistant-next-step-planner.js");

const root = path.resolve(__dirname, "..");

const UNSAFE_STEP_PATTERNS = Object.freeze([
  /\bcall\b/i,
  /\bmessage\b/i,
  /\bwhatsapp\b/i,
  /\btelegram\b/i,
  /\bbuy\b/i,
  /\bpurchase\b/i,
  /\bpay\b/i,
  /\bbook\b/i,
  /\bschedule\b/i,
  /\bapply\b/i,
  /\bsubmit\b/i,
  /\bdispatch\b/i,
  /\bsend\s+(my\s+)?location\b/i,
  /\bcreate\s+account\b/i,
  /\bupload\s+resume\b/i,
  /\bcontact\s+(a\s+)?provider\b/i
]);

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function mockProviderEnv() {
  return Object.freeze({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true"
  });
}

function assertSafeSteps(steps, label) {
  assert.equal(nextSteps.isSafeNextStepPlan(steps), true, `${label} must produce a safe next-step plan.`);
  steps.forEach(step => {
    UNSAFE_STEP_PATTERNS.forEach(pattern => {
      assert(!pattern.test(step), `${label} must not include unsafe step "${step}".`);
    });
  });
}

function assertStaticContract() {
  assert(exists("server", "nexus-assistant-next-step-planner.js"), "AR5 next-step planner module must exist.");
  assert(exists("scripts", "nexus-ar5-safe-next-step-planner-qa.js"), "AR5 QA must exist.");

  const plannerSource = read("server", "nexus-assistant-next-step-planner.js");
  const runtimeSource = read("server", "nexus-assistant-runtime-entrypoint.js");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Ask a follow-up question",
    "Compare sources",
    "Explain the result",
    "Prepare a checklist",
    "Prepare information only"
  ].forEach(term => assert(plannerSource.includes(term), `Planner must include safe next-step term: ${term}`));

  ["call", "message", "whatsapp", "buy", "pay", "book", "schedule", "apply", "submit", "dispatch", "send\\s+(my\\s+)?location"].forEach(term => {
    assert(plannerSource.includes(term), `Planner must explicitly block unsafe next-step term: ${term}`);
  });

  ["pendingAction", "providerHandoff", "window.open", "location.href", "fetch(", "localStorage.setItem", "sessionStorage.setItem"].forEach(term => {
    assert(!plannerSource.includes(term), `Planner must not create side effect or pending-action behavior: ${term}`);
  });

  assert(runtimeSource.includes("nexus-assistant-next-step-planner"), "Runtime must use AR5 next-step planner.");
  assert(runtimeSource.includes("safeNextSteps"), "Runtime responses must include safeNextSteps.");

  ["nexus-assistant-next-step-planner", "nexus-ar5-safe-next-step-planner-qa"].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load ${term} in AR5.`);
    assert(!index.includes(term), `public/index.html must not load ${term} in AR5.`);
  });
  assert(!server.includes("nexus-assistant-next-step-planner"), "server.js must not expose AR5 planner directly.");

  assert.equal(
    pkg.scripts["qa:nexus-ar5-safe-next-step-planner"],
    "node scripts/nexus-ar5-safe-next-step-planner-qa.js",
    "AR5 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-ar5-safe-next-step-planner-qa.js"), "AR5 QA must be wired into local-safe suites.");
}

function assertProviderResponseSteps() {
  const cases = [
    { label: "weather", prompt: "What is the weather in Stockton, CA?", provider: "weather" },
    { label: "agriculture", prompt: "Find agriculture training resources.", provider: "agriculture-context" },
    { label: "jobs", prompt: "Find farm jobs near Stockton, CA.", provider: "job-search" },
    { label: "news", prompt: "What current agriculture news should farmers know?", provider: "news-security" },
    { label: "media", prompt: "Find agriculture training videos.", provider: "music-media" }
  ];

  cases.forEach(testCase => {
    const response = runtime.buildAssistantRuntimeResponse(testCase.prompt, {}, mockProviderEnv());
    assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${testCase.label} response must be safe.`);
    assert.equal(response.selectedProvider, testCase.provider, `${testCase.label} response must select expected provider.`);
    assertSafeSteps(response.safeNextSteps, testCase.label);
    assertSafeSteps(response.safeFollowUps, `${testCase.label} follow-ups`);
    assert(response.safeNextSteps.length >= 3, `${testCase.label} must include useful safe next steps.`);
  });
}

function assertBlockedPromptDowngrades() {
  [
    "Call this provider.",
    "Buy fertilizer.",
    "Send my location.",
    "Book me an appointment.",
    "Apply to this job.",
    "Dispatch help."
  ].forEach(prompt => {
    const response = runtime.buildAssistantRuntimeResponse(prompt, {}, mockProviderEnv());
    assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${prompt} response must be safe.`);
    assert.equal(response.allowed, false, `${prompt} must remain blocked.`);
    assertSafeSteps(response.safeNextSteps, prompt);
    assert(response.safeNextSteps.includes("Prepare information only"), `${prompt} must downgrade to information-only preparation.`);
    assert.equal(response.auditEvent && response.auditEvent.allowed, false, `${prompt} must not create an allowed pending action.`);
  });
}

function runAr5SafeNextStepPlannerQa() {
  assertStaticContract();
  assertProviderResponseSteps();
  assertBlockedPromptDowngrades();

  console.log(JSON.stringify({
    safeNextStepPlanner: true,
    providerResponsesHaveSafeSteps: true,
    actionPromptsDowngraded: true,
    noPendingActionCreated: true,
    noProviderHandoffExecution: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-ar5-safe-next-step-planner-qa] passed");
}

if (require.main === module) {
  try {
    runAr5SafeNextStepPlannerQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAr5SafeNextStepPlannerQa
});
