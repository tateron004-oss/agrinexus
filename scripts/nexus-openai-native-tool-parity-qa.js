const assert = require("node:assert");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const requiredTools = [
  "nexus_general_conversation",
  "nexus_live_knowledge",
  "nexus_deep_research",
  "nexus_file_document_analysis",
  "nexus_data_code_analysis",
  "nexus_visual_analysis",
  "nexus_memory",
  "nexus_automation_reminder",
  "nexus_email",
  "nexus_calendar",
  "nexus_browser_computer_action",
  "nexus_document_export",
  "nexus_receipts",
  "nexus_weather",
  "nexus_maps_route",
  "nexus_agriculture",
  "nexus_health_preparation",
  "nexus_workforce_learning",
  "nexus_marketplace_logistics",
  "nexus_communications",
  "nexus_workflow",
  "nexus_provider_readiness"
];

function requestJson(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const body = options.body ? JSON.stringify(options.body) : "";
    const req = http.request({
      hostname: parsed.hostname,
      port: parsed.port,
      path: parsed.pathname + parsed.search,
      method: options.method || (body ? "POST" : "GET"),
      headers: {
        "content-type": "application/json",
        "content-length": Buffer.byteLength(body),
        origin: options.origin || `http://${parsed.host}`,
        ...(options.cookie ? { cookie: options.cookie } : {})
      }
    }, res => {
      let raw = "";
      res.setEncoding("utf8");
      res.on("data", chunk => {
        raw += chunk;
      });
      res.on("end", () => {
        try {
          resolve({
            status: res.statusCode,
            body: raw ? JSON.parse(raw) : null,
            raw,
            setCookie: res.headers["set-cookie"]
          });
        } catch (error) {
          reject(new Error(`Invalid JSON from ${url}: ${raw.slice(0, 240)} (${error.message})`));
        }
      });
    });
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

async function waitForServer(baseUrl, child) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 30000) {
    if (child.exitCode !== null) throw new Error(`Server exited before readiness with code ${child.exitCode}`);
    try {
      const health = await requestJson(`${baseUrl}/api/health`);
      if (health.status === 200) return;
    } catch {
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }
  throw new Error("Nexus server did not become ready");
}

async function withNexusServer(env, callback) {
  const port = 6900 + Math.floor(Math.random() * 400);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-tool-parity-"));
  const dbPath = path.join(tmpDir, "db.json");
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      ...env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: dbPath,
      REQUIRE_LIVE_SERVICES: "false"
    },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let output = "";
  child.stdout.on("data", chunk => {
    output += chunk.toString();
  });
  child.stderr.on("data", chunk => {
    output += chunk.toString();
  });
  const baseUrl = `http://127.0.0.1:${port}`;
  try {
    await waitForServer(baseUrl, child);
    await callback(baseUrl);
  } finally {
    child.kill();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
  assert(!/test-openai-secret|sk-test|Bearer\s+test/i.test(output), "server logs must not expose secret values");
}

function assertNoSecrets(value, label) {
  const text = JSON.stringify(value);
  assert(!/test-openai-secret|sk-test|Bearer\s+|OPENAI_API_KEY=|SMTP_PASS=|SENDGRID_API_KEY=/.test(text), `${label} must not expose secrets`);
}

function staticAssertions() {
  assert(server.includes("toolGatewayCompleteness"), "OpenAI-native status should expose tool gateway completeness");
  assert(server.includes("tools-never-own-microphone"), "tools must not own microphone");
  assert(server.includes("nexusOpenAiNativeToolReceipt"), "tool results should create evidence receipts");
  assert(server.includes("nexusOpenAiNativeBlockedToolResult"), "credential-blocked tools should share a structured result");
  assert(app.includes("NexusGenesisRealtimeClientStatus"), "client should expose secret-free Realtime client status");
  assert(app.includes("legacy-transcript-routed-openai-native-fallback"), "Realtime fallback transcripts should route to backend OpenAI-native path");
  assert(app.includes("voice-realtime-unconfirmed-backend-responses"), "Realtime fallback should use the backend Responses path");
  assert(app.includes("legacy-transcript-ignored-realtime-active"), "legacy transcript path should be blocked once Realtime owns mic");
  for (const toolName of requiredTools) {
    assert(server.includes(`"${toolName}"`), `server should expose ${toolName}`);
  }
  assert.equal(
    packageJson.scripts["qa:nexus-openai-native-tool-parity"],
    "node scripts/nexus-openai-native-tool-parity-qa.js",
    "package alias should be wired"
  );
  assert(qaSuite.includes("scripts/nexus-openai-native-tool-parity-qa.js"), "qa-suite should include tool parity QA");
}

async function runtimeAssertions() {
  await withNexusServer({
    OPENAI_API_KEY: "",
    NEXUS_OPENAI_NATIVE_ENABLED: "true",
    NEXUS_FILE_UPLOAD_ENABLED: "false"
  }, async baseUrl => {
    const login = await requestJson(`${baseUrl}/api/login`, {
      body: {
        email: "admin@agrinexus.org",
        password: "Admin2026!"
      }
    });
    assert.equal(login.status, 200, "login should succeed for seeded admin");
    const cookie = (login.setCookie || []).map(item => item.split(";")[0]).join("; ");

    const status = await requestJson(`${baseUrl}/api/nexus/openai-native/status`, { cookie });
    assert.equal(status.status, 200, "OpenAI-native status should return HTTP 200");
    assert.equal(status.body.ready, false, "OpenAI-native status should be credential-blocked without OPENAI_API_KEY");
    assert.equal(status.body.toolGatewayCompleteness.realtimeCompatible, true, "tool gateway should be Realtime-compatible");
    assert.equal(status.body.toolGatewayCompleteness.microphoneOwnership, "tools-never-own-microphone");
    for (const toolName of requiredTools) {
      assert(status.body.supportedTools.some(tool => tool.name === toolName), `status should list ${toolName}`);
      assert(status.body.toolReadiness.some(tool => tool.name === toolName), `readiness should list ${toolName}`);
    }
    assertNoSecrets(status.body, "OpenAI-native status");

    const calculation = await requestJson(`${baseUrl}/api/nexus/openai-native/tool`, {
      cookie,
      body: {
        name: "nexus_data_code_analysis",
        arguments: {
          command: "Calculate 12 * 7 and summarize the numbers 3, 9, 12.",
          language: "en"
        }
      }
    });
    assert.equal(calculation.status, 200, `calculation tool should return HTTP 200: ${calculation.raw}`);
    assert.equal(calculation.body.status, "completed");
    assert.equal(calculation.body.analysis.calculation.value, 84);
    assert.equal(calculation.body.executionVerified, true);
    assertNoSecrets(calculation.body, "calculation tool");

    const documentBlocked = await requestJson(`${baseUrl}/api/nexus/openai-native/tool`, {
      cookie,
      body: {
        name: "nexus_file_document_analysis",
        arguments: {
          command: "Analyze this PDF.",
          language: "en"
        }
      }
    });
    assert.equal(documentBlocked.status, 200, "document tool should return structured blocked state");
    assert.equal(documentBlocked.body.status, "credential-or-upload-blocked");
    assert.deepEqual(documentBlocked.body.missingEnvVars, ["NEXUS_FILE_UPLOAD_ENABLED"]);
    assert.equal(documentBlocked.body.executionVerified, false);
    assertNoSecrets(documentBlocked.body, "document blocked tool");

    const reminderBlocked = await requestJson(`${baseUrl}/api/nexus/openai-native/tool`, {
      cookie,
      body: {
        name: "nexus_automation_reminder",
        arguments: {
          command: "Remind me tomorrow to check the crop prices.",
          when: "Tomorrow",
          language: "en"
        }
      }
    });
    assert.equal(reminderBlocked.status, 200, "unconfirmed reminder should return HTTP 200");
    assert.equal(reminderBlocked.body.status, "confirmation-required");
    assert.equal(reminderBlocked.body.executionVerified, false);
    assertNoSecrets(reminderBlocked.body, "unconfirmed reminder");

    const reminderCreated = await requestJson(`${baseUrl}/api/nexus/openai-native/tool`, {
      cookie,
      body: {
        name: "nexus_automation_reminder",
        arguments: {
          command: "Remind me tomorrow to check the crop prices.",
          title: "Check crop prices",
          when: "Tomorrow",
          confirmed: true,
          language: "en"
        }
      }
    });
    assert.equal(reminderCreated.status, 200, "confirmed local reminder should return HTTP 200");
    assert.equal(reminderCreated.body.status, "local-reminder-created");
    assert.equal(reminderCreated.body.localOnly, true);
    assert.equal(reminderCreated.body.executionVerified, true);
    assert(reminderCreated.body.receipt.receiptId, "confirmed local reminder should include a receipt");
    assertNoSecrets(reminderCreated.body, "confirmed reminder");

    const realtimeTool = await requestJson(`${baseUrl}/api/voice/realtime/tool`, {
      cookie,
      body: {
        name: "nexus_data_code_analysis",
        correlationId: "tool-parity-realtime-calculation",
        arguments: {
          command: "Calculate 5 + 6.",
          language: "en"
        }
      }
    });
    assert.equal(realtimeTool.status, 200, `Realtime gateway should reach the same tool: ${realtimeTool.raw}`);
    assert.equal(realtimeTool.body.status, "completed");
    assert.equal(realtimeTool.body.analysis.calculation.value, 11);
    assertNoSecrets(realtimeTool.body, "Realtime parity tool");
  });
}

async function main() {
  staticAssertions();
  await runtimeAssertions();
  console.log("Nexus OpenAI-native tool parity QA passed");
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
