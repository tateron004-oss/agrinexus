const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_POLICY_OBSERVATION_PORT || 4493);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-nexus-policy-observation-db.json");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const policyPath = path.join(root, "public", "nexus-policy-engine.js");
const docPath = path.join(root, "docs", "NEXUS_POLICY_OBSERVATION_MODEL.md");
let cookie = "";

const requiredPolicyFields = [
  "decisionId",
  "intentId",
  "toolId",
  "domain",
  "risk",
  "actionType",
  "status",
  "allowed",
  "requiresPermission",
  "permissionType",
  "requiresConfirmation",
  "confirmationType",
  "blocked",
  "blockReason",
  "clarificationRequired",
  "clarificationPrompt",
  "previewOnly",
  "canRoute",
  "canExecute",
  "executionStatus",
  "nextSafeStep",
  "policySource",
  "notes"
];

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function seedDb() {
  const db = JSON.parse(fs.readFileSync(sourceDb, "utf8"));
  db.profile = db.profile || {};
  db.profile.phoneContacts = [
    { id: "policy-maria", name: "Maria", lookup: "maria", phone: "+15555550101", relationship: "saved contact", source: "nexus-policy-observation-qa" }
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
  throw new Error("Nexus policy observation server did not become reachable");
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

function assertPolicyDecision(state, prompt) {
  const result = state.commandResult || {};
  const metadata = result.metadata || {};
  const agentAction = metadata.agentAction || {};
  const policyDecision = metadata.policyDecision || agentAction.policyDecision;

  assert(result.intent, `${prompt} should keep commandResult.intent`);
  assert.strictEqual(typeof result.response, "string", `${prompt} should keep visible response text`);
  assert(result.response.length > 0, `${prompt} response text should not be replaced by metadata`);
  assert(agentAction && agentAction.schemaVersion === "agent-action.v1", `${prompt} should keep agent action metadata`);
  assert(policyDecision, `${prompt} should include policyDecision metadata`);
  assert.deepStrictEqual(metadata.policyDecision, agentAction.policyDecision, `${prompt} should mirror policyDecision on metadata and agentAction`);
  for (const field of requiredPolicyFields) {
    assert(Object.prototype.hasOwnProperty.call(policyDecision, field), `${prompt} policyDecision missing ${field}`);
  }
  assert.strictEqual(policyDecision.canExecute, false, `${prompt} policyDecision must never execute`);
  assert(Array.isArray(policyDecision.notes), `${prompt} policyDecision notes must be an array`);
  assert(policyDecision.notes.some(note => /non-executing|cannot be executed|must not proceed|metadata/i.test(note)), `${prompt} policyDecision should describe non-execution`);
  assert(agentAction.policyObservation, `${prompt} should include policyObservation metadata`);
  assert.strictEqual(agentAction.policyObservation.schemaVersion, "policy-observation.v1", `${prompt} policyObservation version mismatch`);
  assert.strictEqual(agentAction.policyObservation.observationOnly, true, `${prompt} policyObservation must be observation-only`);
  assert.strictEqual(agentAction.policyObservation.runtimeAuthority, "existing-router", `${prompt} existing router must remain authority`);
  assert.strictEqual(agentAction.policyObservation.policyValidation.ok, true, `${prompt} policy validation must pass`);
  assert(!/policyDecision[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|camera|geolocation|payment)/i.test(result.response), `${prompt} should not expose raw policy metadata in visible text`);
  return { result, agentAction, policyDecision };
}

function assertStaticGuards() {
  const app = fs.readFileSync(appPath, "utf8");
  const server = fs.readFileSync(serverPath, "utf8");
  const policy = fs.readFileSync(policyPath, "utf8");
  const doc = fs.readFileSync(docPath, "utf8");

  assert.match(server, /const \{ buildNexusPolicyDecision, validateNexusPolicyDecision \} = require\("\.\/public\/nexus-policy-engine\.js"\)/, "server should load policy engine for observation metadata");
  assert.match(server, /policyDecision,[\s\S]{0,240}policyObservation:/, "agentAction should include policyDecision and policyObservation");
  assert.match(server, /policyDecision,[\s\S]{0,240}language: commandLanguage/, "response metadata should expose additive policyDecision");
  assert.match(app, /policyDecision metadata is also observation-only/i, "frontend should document policy observation as observation-only");
  assert.match(app, /const policyDecision = response\?\.metadata\?\.policyDecision \|\| agentAction\.policyDecision \|\| null/, "frontend should observe policyDecision metadata");
  assert.match(app, /policyDecision,[\s\S]{0,240}controlledActionMetadata/, "frontend observation log should include policyDecision");

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
    assert.ok(!helperBody.includes(forbidden), `policy observation helper must not call ${forbidden}`);
  }
  assert(!/policyDecision\.[\s\S]{0,240}(openWorkflow|goSection|mutate|request\(|confirm|execute|stage|dispatch|permission|geolocation|getUserMedia)/i.test(helperBody), "policyDecision must not trigger UI, routing, permissions, or execution");
  assert.match(policy, /canExecute:\s*false/, "policy engine should still force canExecute false");
  assert.match(doc, /metadata is not execution authority/i, "policy observation doc should state metadata is not execution authority");
  assert.match(doc, /Normal users should not see raw policy metadata/i, "policy observation doc should document normal-user visibility boundary");
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
      { prompt: "Help me find agriculture training", statuses: ["allow_route", "allow_preview"], risk: "low" },
      { prompt: "Teach me how irrigation works", statuses: ["allow_route", "allow_preview"], risk: "low" },
      { prompt: "Nexus, use my location", statuses: ["require_permission"], permissionType: "location" },
      { prompt: "open video for provider to show injury", statuses: ["require_permission"], permissionType: "camera" },
      { prompt: "Call John", statuses: ["clarify", "require_permission", "require_confirmation"] },
      { prompt: "Buyer Pay", statuses: ["require_permission", "require_confirmation", "not_implemented", "blocked"] },
      { prompt: "launch the moon tractor", statuses: ["clarify", "unsupported"] }
    ];

    for (const testCase of cases) {
      const state = await command(testCase.prompt);
      const { policyDecision } = assertPolicyDecision(state, testCase.prompt);
      assert(testCase.statuses.includes(policyDecision.status), `${testCase.prompt} policy status ${policyDecision.status} should be one of ${testCase.statuses.join(", ")}`);
      if (testCase.risk) assert.strictEqual(policyDecision.risk, testCase.risk, `${testCase.prompt} risk mismatch`);
      if (testCase.permissionType) assert.strictEqual(policyDecision.permissionType, testCase.permissionType, `${testCase.prompt} permission type mismatch`);
      if (["require_permission", "require_confirmation", "blocked", "not_implemented"].includes(policyDecision.status)) {
        assert.strictEqual(policyDecision.allowed, false, `${testCase.prompt} guarded policy should not be allowed`);
      }
    }

    const callState = await command("Call Maria");
    const { result: callResult, policyDecision: callPolicy } = assertPolicyDecision(callState, "Call Maria");
    assert(["needs-confirmation", "needs-input"].includes(callResult.status), "Call Maria existing router should remain guarded");
    if (callResult.status === "needs-confirmation") {
      assert.strictEqual(callResult.metadata.confirmationRequired, true, "Call Maria should keep existing confirmation metadata when staged");
    }
    assert.strictEqual(callPolicy.canExecute, false, "Call Maria policy must not execute");
    assert.strictEqual((callState.profile?.outboundCalls || []).length, 0, "Call Maria should not execute outbound call without confirmation");
    if (callResult.status === "needs-confirmation") await command("no");

    console.log(`Nexus policy observation QA passed (${cases.length + 1} prompts).`);
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) {
      try {
        fs.unlinkSync(tempDb);
      } catch {
        // Best effort cleanup for Windows file locks.
      }
    }
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) {
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Best effort cleanup for Windows file locks.
    }
  }
  console.error(error);
  process.exit(1);
});
