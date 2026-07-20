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
      NEXUS_PRESERVE_EMPTY_ENV: "1",
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
    await callback(baseUrl, { tmpDir, dbPath });
  } finally {
    child.kill();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
  assert(!/test-openai-secret|sk-test|Bearer\s+test/i.test(output), "server logs must not expose secret values");
}

function withMockProvider(callback) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let raw = "";
      req.on("data", chunk => {
        raw += chunk;
      });
      req.on("end", () => {
        const parsed = raw ? JSON.parse(raw) : {};
        const payload = req.url.includes("calendar")
          ? { id: "mock-calendar-event-1", htmlLink: "https://provider.example/calendar/mock-calendar-event-1", accepted: true }
          : req.url.includes("browser")
            ? { outcome: "mock-browser-task-completed", verified: true, evidence: { selector: "#mock", status: "observed" } }
            : req.url.includes("vision")
              ? { analysis: "Mock provider saw a user-supplied image reference and returned safe descriptive analysis.", verified: true }
              : { id: "mock-email-message-1", accepted: true };
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ ...payload, receivedKeys: Object.keys(parsed) }));
      });
    });
    server.listen(0, "127.0.0.1", async () => {
      const baseUrl = `http://127.0.0.1:${server.address().port}`;
      try {
        resolve(await callback(baseUrl));
      } catch (error) {
        reject(error);
      } finally {
        server.close();
      }
    });
  });
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
  assert(server.includes("nexusOpenAiNativeProviderToolResult"), "provider tool results should normalize verified provider outcomes");
  [
    "server/providers/emailProvider.js",
    "server/providers/calendarProvider.js",
    "server/providers/documentProvider.js",
    "server/providers/visionProvider.js",
    "server/providers/browserActionProvider.js",
    "server/providers/exportProvider.js"
  ].forEach(relativePath => assert(fs.existsSync(path.join(root, relativePath)), `${relativePath} should exist`));
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
    assert.equal(documentBlocked.body.status, "disabled");
    assert.equal(documentBlocked.body.disabled, true);
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

  await withMockProvider(async mockBaseUrl => {
    const exportDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-export-provider-"));
    await withNexusServer({
      OPENAI_API_KEY: "",
      NEXUS_OPENAI_NATIVE_ENABLED: "true",
      NEXUS_FILE_UPLOAD_ENABLED: "true",
      NEXUS_EMAIL_ENABLED: "true",
      NEXUS_EMAIL_PROVIDER: "generic",
      NEXUS_EMAIL_PROVIDER_ENDPOINT: `${mockBaseUrl}/email`,
      NEXUS_EMAIL_PROVIDER_API_KEY: "test-email-key",
      NEXUS_EMAIL_FROM: "nexus@example.test",
      NEXUS_CALENDAR_ENABLED: "true",
      NEXUS_CALENDAR_PROVIDER: "generic",
      NEXUS_CALENDAR_PROVIDER_ENDPOINT: `${mockBaseUrl}/calendar`,
      NEXUS_CALENDAR_PROVIDER_API_KEY: "test-calendar-key",
      NEXUS_VISION_ENABLED: "true",
      NEXUS_VISION_PROVIDER: "generic",
      NEXUS_VISION_PROVIDER_ENDPOINT: `${mockBaseUrl}/vision`,
      NEXUS_VISION_API_KEY: "test-vision-key",
      NEXUS_BROWSER_ACTIONS_ENABLED: "true",
      NEXUS_BROWSER_ACTIONS_ENDPOINT: `${mockBaseUrl}/browser`,
      NEXUS_BROWSER_ACTIONS_API_KEY: "test-browser-key",
      NEXUS_DOCUMENT_EXPORT_ENABLED: "true",
      NEXUS_EXPORT_DIR: exportDir
    }, async baseUrl => {
      const login = await requestJson(`${baseUrl}/api/login`, {
        body: { email: "admin@agrinexus.org", password: "Admin2026!" }
      });
      const cookie = (login.setCookie || []).map(item => item.split(";")[0]).join("; ");

      const documentDone = await requestJson(`${baseUrl}/api/nexus/openai-native/tool`, {
        cookie,
        body: {
          name: "nexus_file_document_analysis",
          arguments: { command: "Analyze this document.", text: "Nexus document content with 42 farmers and 7 clinics." }
        }
      });
      assert.equal(documentDone.body.status, "completed");
      assert.equal(documentDone.body.executionVerified, true);
      assert.equal(documentDone.body.providerData.words > 0, true);

      const emailDone = await requestJson(`${baseUrl}/api/nexus/openai-native/tool`, {
        cookie,
        body: {
          name: "nexus_email",
          arguments: { command: "Email Ron.", to: "ron@example.test", subject: "Nexus test", text: "Provider execution test.", confirmed: true }
        }
      });
      assert.equal(emailDone.body.status, "completed");
      assert.equal(emailDone.body.executionVerified, true);
      assert.equal(emailDone.body.providerData.providerMessageId, "mock-email-message-1");

      const calendarDone = await requestJson(`${baseUrl}/api/nexus/openai-native/tool`, {
        cookie,
        body: {
          name: "nexus_calendar",
          arguments: { command: "Schedule a meeting.", title: "Nexus review", start: "2026-07-19T15:00:00.000Z", confirmed: true }
        }
      });
      assert.equal(calendarDone.body.status, "completed");
      assert.equal(calendarDone.body.providerData.eventId, "mock-calendar-event-1");

      const visionDone = await requestJson(`${baseUrl}/api/nexus/openai-native/tool`, {
        cookie,
        body: {
          name: "nexus_visual_analysis",
          arguments: { command: "Review this crop photo.", imageUrl: "https://example.test/crop.jpg" }
        }
      });
      assert.equal(visionDone.body.status, "completed");
      assert.equal(visionDone.body.providerData.providerVerified, true);

      const browserDone = await requestJson(`${baseUrl}/api/nexus/openai-native/tool`, {
        cookie,
        body: {
          name: "nexus_browser_computer_action",
          arguments: { command: "Click the approved provider button.", task: "Click approved provider button", url: "https://example.test", confirmed: true }
        }
      });
      assert.equal(browserDone.body.status, "completed");
      assert.equal(browserDone.body.providerData.providerVerified, true);

      const exportDone = await requestJson(`${baseUrl}/api/nexus/openai-native/tool`, {
        cookie,
        body: {
          name: "nexus_document_export",
          arguments: { command: "Export this report.", title: "Nexus export", content: "Verified export content", format: "txt", confirmed: true }
        }
      });
      assert.equal(exportDone.body.status, "completed");
      assert.equal(exportDone.body.providerData.format, "txt");
      assert(fs.existsSync(path.join(exportDir, exportDone.body.providerData.filename)), "export file should exist in configured export dir");

      [documentDone, emailDone, calendarDone, visionDone, browserDone, exportDone].forEach((result, index) => {
        assert(result.body.receipt?.receiptId, `provider execution ${index} should include a Nexus receipt`);
        assertNoSecrets(result.body, `provider execution ${index}`);
      });
    });
    fs.rmSync(exportDir, { recursive: true, force: true });
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
