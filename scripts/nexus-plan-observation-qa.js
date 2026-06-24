const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_PLAN_OBSERVATION_PORT || 4494);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-nexus-plan-observation-db.json");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const plannerPath = path.join(root, "public", "nexus-planner.js");
const docPath = path.join(root, "docs", "NEXUS_PLAN_OBSERVATION_MODEL.md");
let cookie = "";

const requiredPlanFields = [
  "planId",
  "sourceText",
  "intentId",
  "toolId",
  "domain",
  "risk",
  "policyStatus",
  "summary",
  "steps",
  "requiredInputs",
  "permissionGates",
  "confirmationGates",
  "blockedActions",
  "safeAlternatives",
  "nextSafeStep",
  "canExecute",
  "executionMode",
  "plannerSource",
  "createdAt",
  "notes"
];

const requiredStepFields = [
  "stepId",
  "order",
  "label",
  "description",
  "intentId",
  "toolId",
  "risk",
  "status",
  "requiresPermission",
  "requiresConfirmation",
  "canExecute",
  "blockedReason",
  "userVisible",
  "notes"
];

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function seedDb() {
  const db = JSON.parse(fs.readFileSync(sourceDb, "utf8"));
  db.profile = db.profile || {};
  db.profile.phoneContacts = [
    { id: "plan-maria", name: "Maria", lookup: "maria", phone: "+15555550101", relationship: "saved contact", source: "nexus-plan-observation-qa" }
  ];
  db.profile.outboundCalls = [];
  db.profile.agentPendingAction = null;
  fs.writeFileSync(tempDb, JSON.stringify(db, null, 2));
}

async function waitForServer() {
  for (let index = 0; index < 80; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Nexus plan observation server did not become reachable");
}

async function call(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return json;
}

async function command(prompt) {
  return call("/api/agent/command", {
    command: prompt,
    conversational: true,
    inputMode: "voice",
    outputMode: "voice",
    mode: "user",
    targetLanguage: "en"
  });
}

function assertPlanMetadata(state, prompt) {
  const result = state.commandResult || {};
  const metadata = result.metadata || {};
  const agentAction = metadata.agentAction || {};
  const policyDecision = metadata.policyDecision || agentAction.policyDecision;
  const nexusPlan = metadata.nexusPlan || agentAction.nexusPlan;
  const plannerObservation = metadata.plannerObservation || agentAction.plannerObservation;

  assert(result.intent, `${prompt} should keep commandResult.intent`);
  assert.strictEqual(typeof result.response, "string", `${prompt} should keep visible response text`);
  assert(result.response.length > 0, `${prompt} response text should not be replaced by plan metadata`);
  assert(agentAction && agentAction.schemaVersion === "agent-action.v1", `${prompt} should keep agent action metadata`);
  assert(policyDecision, `${prompt} should include policyDecision metadata`);
  assert(nexusPlan, `${prompt} should include nexusPlan metadata`);
  assert(plannerObservation, `${prompt} should include plannerObservation metadata`);
  assert.deepStrictEqual(metadata.nexusPlan, agentAction.nexusPlan, `${prompt} should mirror nexusPlan on metadata and agentAction`);
  assert.deepStrictEqual(metadata.plannerObservation, agentAction.plannerObservation, `${prompt} should mirror plannerObservation on metadata and agentAction`);

  for (const field of requiredPlanFields) {
    assert(Object.prototype.hasOwnProperty.call(nexusPlan, field), `${prompt} nexusPlan missing ${field}`);
  }
  assert(Array.isArray(nexusPlan.steps) && nexusPlan.steps.length > 0, `${prompt} nexusPlan must include steps`);
  for (const item of nexusPlan.steps) {
    for (const field of requiredStepFields) {
      assert(Object.prototype.hasOwnProperty.call(item, field), `${prompt} plan step missing ${field}`);
    }
    assert.strictEqual(item.canExecute, false, `${prompt} plan step ${item.stepId} must not execute`);
  }

  assert.strictEqual(nexusPlan.canExecute, false, `${prompt} nexusPlan must never execute`);
  assert.strictEqual(nexusPlan.executionMode, "plan_only", `${prompt} nexusPlan must be plan_only`);
  assert.strictEqual(plannerObservation.schemaVersion, "planner-observation.v1", `${prompt} plannerObservation version mismatch`);
  assert.strictEqual(plannerObservation.observationOnly, true, `${prompt} plannerObservation must be observation-only`);
  assert.strictEqual(plannerObservation.routerAuthority, "existing-routers", `${prompt} existing routers must remain authority`);
  assert.strictEqual(plannerObservation.executionAuthority, "none", `${prompt} planner must have no execution authority`);
  assert.strictEqual(plannerObservation.canExecute, false, `${prompt} plannerObservation must not execute`);
  assert.strictEqual(plannerObservation.validationStatus, "valid", `${prompt} plannerObservation should validate`);
  assert.strictEqual(plannerObservation.planValidation?.ok, true, `${prompt} planner validation should pass`);
  assert.strictEqual(policyDecision.canExecute, false, `${prompt} policyDecision must still never execute`);
  assert(!/nexusPlan[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|camera|geolocation|payment)/i.test(result.response), `${prompt} should not expose raw plan metadata in visible text`);
  return { result, agentAction, policyDecision, nexusPlan, plannerObservation };
}

function assertStaticGuards() {
  const app = fs.readFileSync(appPath, "utf8");
  const server = fs.readFileSync(serverPath, "utf8");
  const planner = fs.readFileSync(plannerPath, "utf8");
  const doc = fs.readFileSync(docPath, "utf8");

  assert.match(server, /const \{ createNexusPlan, validateNexusPlan \} = require\("\.\/public\/nexus-planner\.js"\)/, "server should load planner for observation metadata");
  assert.match(server, /const nexusPlan = createNexusPlan\(/, "server should create nexusPlan metadata");
  assert.match(server, /const plannerObservation = \{[\s\S]*observationOnly:\s*true[\s\S]*executionAuthority:\s*"none"[\s\S]*canExecute:\s*false/, "server plannerObservation should be observation-only with no execution authority");
  assert.match(server, /nexusPlan,\s*\n\s*plannerObservation,\s*\n\s*policyObservation:/, "agentAction should include nexusPlan and plannerObservation before policyObservation");
  assert.match(server, /nexusPlan,\s*\n\s*plannerObservation,\s*\n\s*language: commandLanguage/, "response metadata should expose additive planner metadata");
  assert.match(app, /Phase 11F3: nexusPlan metadata is observation-only/i, "frontend should document planner observation as observation-only");
  assert.match(app, /const nexusPlan = response\?\.metadata\?\.nexusPlan \|\| agentAction\.nexusPlan \|\| null/, "frontend should observe nexusPlan metadata");
  assert.match(app, /plannerObservation,\s*\n\s*controlledActionMetadata/, "frontend observation log should include plannerObservation");
  assert.match(planner, /canExecute:\s*false/g, "planner should still force canExecute false");
  assert.match(doc, /Plan observation metadata must not:/i, "plan observation doc should describe forbidden execution behavior");
  assert.match(doc, /Normal users should not see raw `nexusPlan`/i, "plan observation doc should document normal-user visibility boundary");

  const helperStart = app.indexOf("function observeAgentActionMetadata");
  const helperEnd = app.indexOf("const countryLanguageMap", helperStart);
  assert(helperStart >= 0 && helperEnd > helperStart, "frontend observation helper should be extractable");
  const helperBody = app.slice(helperStart, helperEnd);
  const forbiddenCalls = [
    "openWorkflowModal",
    "openWorkflowByVoice",
    "executeWorkflowConfigFromVoice",
    "executeWorkflow",
    "confirmWorkflow",
    "stageAgentAction",
    "maybeDispatchConfirmedNativeCallHandoff",
    "goSection(",
    "mutate(",
    "request("
  ];
  for (const forbidden of forbiddenCalls) {
    assert.ok(!helperBody.includes(forbidden), `plan observation helper must not call ${forbidden}`);
  }
  assert(!/nexusPlan\.[\s\S]{0,240}(openWorkflow|goSection|mutate|request\(|confirm|execute|stage|dispatch|permission|geolocation|getUserMedia)/i.test(helperBody), "nexusPlan must not trigger UI, routing, permissions, or execution");
}

(async () => {
  assertStaticGuards();
  seedDb();
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: "",
      TWILIO_ACCOUNT_SID: "",
      TWILIO_AUTH_TOKEN: "",
      TWILIO_PHONE_NUMBER: "",
      PUBLIC_BASE_URL: base,
      DEMO_CALL_TO: ""
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });

    const cases = [
      { prompt: "Help me find agriculture training", statuses: ["preview_only", "informational"], risk: "low" },
      { prompt: "Teach me how irrigation works", statuses: ["preview_only", "informational"], risk: "low" },
      { prompt: "Nexus, use my location", statuses: ["permission_required"], permissionGate: "location" },
      { prompt: "open video for provider to show injury", statuses: ["permission_required"], permissionGate: "camera" },
      { prompt: "Call John", statuses: ["needs_clarification", "permission_required", "confirmation_required"] },
      { prompt: "Buyer Pay", statuses: ["permission_required", "confirmation_required", "not_implemented", "blocked"] },
      { prompt: "launch the moon tractor", statuses: ["needs_clarification", "not_implemented", "blocked"] }
    ];

    for (const testCase of cases) {
      const state = await command(testCase.prompt);
      const { policyDecision, nexusPlan } = assertPlanMetadata(state, testCase.prompt);
      assert(testCase.statuses.includes(nexusPlan.steps[nexusPlan.steps.length - 1].status), `${testCase.prompt} final plan status ${nexusPlan.steps[nexusPlan.steps.length - 1].status} should be one of ${testCase.statuses.join(", ")}`);
      assert.strictEqual(nexusPlan.policyStatus, policyDecision.status, `${testCase.prompt} plan should mirror policy status`);
      if (testCase.risk) assert.strictEqual(nexusPlan.risk, testCase.risk, `${testCase.prompt} plan risk mismatch`);
      if (testCase.permissionGate) {
        assert(nexusPlan.permissionGates.some(gate => gate.type === testCase.permissionGate), `${testCase.prompt} should include ${testCase.permissionGate} permission gate`);
      }
      if (["require_permission", "require_confirmation", "blocked", "not_implemented"].includes(policyDecision.status)) {
        assert.strictEqual(policyDecision.allowed, false, `${testCase.prompt} guarded policy should not be allowed`);
      }
    }

    const callState = await command("Call Maria");
    const { result: callResult, policyDecision: callPolicy, nexusPlan: callPlan } = assertPlanMetadata(callState, "Call Maria");
    assert(["needs-confirmation", "needs-input"].includes(callResult.status), "Call Maria existing router should remain guarded");
    if (callResult.status === "needs-confirmation") {
      assert.strictEqual(callResult.metadata.confirmationRequired, true, "Call Maria should keep existing confirmation metadata when staged");
    }
    assert.strictEqual(callPolicy.canExecute, false, "Call Maria policy must not execute");
    assert.strictEqual(callPlan.canExecute, false, "Call Maria plan must not execute");
    for (const item of callPlan.steps) assert.strictEqual(item.canExecute, false, "Call Maria plan steps must not execute");
    assert.strictEqual((callState.profile?.outboundCalls || []).length, 0, "Call Maria should not execute outbound call without confirmation");
    if (callResult.status === "needs-confirmation") await command("no");

    console.log(`Nexus plan observation QA passed (${cases.length + 1} prompts).`);
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) {
      try {
        fs.unlinkSync(tempDb);
      } catch {
        // Best-effort cleanup for Windows process handles.
      }
    }
  }
})().catch(error => {
  console.error(error.message || error);
  if (fs.existsSync(tempDb)) {
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Best-effort cleanup for Windows process handles.
    }
  }
  process.exit(1);
});
