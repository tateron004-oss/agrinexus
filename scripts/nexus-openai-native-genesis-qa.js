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
const envExample = read(".env.example");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

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
          resolve({ status: res.statusCode, body: raw ? JSON.parse(raw) : null, raw, setCookie: res.headers["set-cookie"] });
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

function listen(serverInstance) {
  return new Promise(resolve => serverInstance.listen(0, "127.0.0.1", () => resolve(serverInstance.address().port)));
}

function closeServer(serverInstance) {
  return new Promise(resolve => serverInstance.close(resolve));
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
  const port = 6100 + Math.floor(Math.random() * 500);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-openai-native-"));
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
  assert(!/test-openai-secret|test-live-knowledge-secret/.test(output), "server logs must not expose mock secret values");
}

function assertNoSecrets(value, label) {
  const text = JSON.stringify(value);
  const match = text.match(/test-openai-secret|test-live-knowledge-secret|Bearer\s+/i);
  const findPath = (node, needle, prefix = "$") => {
    if (typeof node === "string" && node.includes(needle)) return prefix;
    if (!node || typeof node !== "object") return "";
    for (const [key, child] of Object.entries(node)) {
      const found = findPath(child, needle, `${prefix}.${key}`);
      if (found) return found;
    }
    return "";
  };
  assert(!match, `${label} must not expose secret values: ${match ? match[0] : ""} at ${match ? findPath(value, match[0]) : ""}`);
}

function staticAssertions() {
  [
    "function nexusOpenAiNativeStatus",
    "function nexusOpenAiNativeToolSchemas",
    "function executeNexusOpenAiNativeTool",
    "async function runNexusOpenAiNativeAgentCommand",
    "callOpenAiNativeResponses",
    "/api/nexus/openai-native/status",
    "/api/nexus/openai-native/tool",
    "nexus_live_knowledge",
    "nexus_weather",
    "nexus_maps_route",
    "nexus_agriculture",
    "nexus_health_preparation",
    "nexus_workforce_learning",
    "nexus_marketplace_logistics",
    "nexus_communications",
    "noPermanentKeyInBrowser",
    "noFakeCitations",
    "noUngatedExecution"
  ].forEach(token => assert(server.includes(token), `server should include ${token}`));

  [
    "NEXUS_OPENAI_NATIVE_ENABLED=true",
    "OPENAI_AGENT_MODEL=gpt-5.4-mini",
    "NEXUS_OPENAI_NATIVE_TIMEOUT_MS=20000",
    "NEXUS_OPENAI_NATIVE_MAX_OUTPUT_TOKENS=900",
    "OPENAI_RESPONSES_URL="
  ].forEach(token => assert(envExample.includes(token), `.env.example should include ${token}`));

  [
    "nexusOpenAiNativeStatus",
    "/api/nexus/openai-native/status",
    "data-testid=\"nexus-openai-native-status\"",
    "OpenAI-native brain"
  ].forEach(token => assert(app.includes(token), `app should include ${token}`));

  assert.equal(
    packageJson.scripts["qa:nexus-openai-native-genesis"],
    "node scripts/nexus-openai-native-genesis-qa.js",
    "package alias should run OpenAI-native Genesis QA"
  );
  assert(qaSuite.includes("scripts/nexus-openai-native-genesis-qa.js"), "qa-suite should include OpenAI-native Genesis QA");
}

async function routeAssertions() {
  let openAiRequests = 0;
  const openAiMock = http.createServer((req, res) => {
    let raw = "";
    req.on("data", chunk => {
      raw += chunk.toString();
    });
    req.on("end", () => {
      openAiRequests += 1;
      const body = raw ? JSON.parse(raw) : {};
      assert(req.headers.authorization === "Bearer test-openai-secret", "mock OpenAI should receive bearer auth server-side only");
      assert(Array.isArray(body.input), "Responses request should include input");
      assert(!JSON.stringify(body).includes("TWILIO_AUTH_TOKEN"), "Responses request should not include unrelated secret names");
      res.writeHead(200, { "content-type": "application/json" });
      if (body.previous_response_id || JSON.stringify(body.input).includes("function_call_output")) {
        res.end(JSON.stringify({
          id: "resp_final",
          output_text: "Nexus checked live sources for climate-smart agriculture and found citation-ready guidance from FAO and USDA. Review those sources before acting, and no external action was authorized."
        }));
        return;
      }
      assert(Array.isArray(body.tools) && body.tools.some(tool => tool.name === "nexus_live_knowledge"), "OpenAI-native request should expose Nexus Live Knowledge tool");
      res.end(JSON.stringify({
        id: "resp_tool",
        output: [
          {
            type: "function_call",
            call_id: "call_live_knowledge_1",
            name: "nexus_live_knowledge",
            arguments: JSON.stringify({
              command: "Research climate-smart agriculture Africa",
              query: "climate-smart agriculture Africa",
              capability: "live-knowledge",
              language: "en"
            })
          }
        ]
      }));
    });
  });

  const knowledgeMock = http.createServer((req, res) => {
    let raw = "";
    req.on("data", chunk => {
      raw += chunk.toString();
    });
    req.on("end", () => {
      assert(raw.includes("climate-smart agriculture Africa"), "generic provider should receive the source-backed query");
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({
        answer: "Climate-smart agriculture combines adaptation, mitigation, and productivity guidance.",
        results: [
          {
            title: "FAO Climate-Smart Agriculture",
            url: "https://www.fao.org/climate-smart-agriculture/en/",
            snippet: "FAO explains climate-smart agriculture principles."
          },
          {
            title: "USDA Climate Hubs",
            url: "https://www.climatehubs.usda.gov/",
            snippet: "USDA Climate Hubs provide regional climate adaptation resources."
          }
        ]
      }));
    });
  });

  const openAiPort = await listen(openAiMock);
  const knowledgePort = await listen(knowledgeMock);
  try {
    await withNexusServer({
      OPENAI_API_KEY: "",
      NEXUS_OPENAI_NATIVE_ENABLED: "true"
    }, async baseUrl => {
      const status = await requestJson(`${baseUrl}/api/nexus/openai-native/status`);
      assert.equal(status.status, 200, "OpenAI-native status should return HTTP 200");
      assert.equal(status.body.ready, false, "OpenAI-native status should be blocked without a key");
      assert.deepEqual(status.body.missingEnv, ["OPENAI_API_KEY"], "missing config should name only OPENAI_API_KEY");
      assertNoSecrets(status.body, "missing-key status");
    });

    await withNexusServer({
      OPENAI_API_KEY: "test-openai-secret",
      OPENAI_RESPONSES_URL: `http://127.0.0.1:${openAiPort}/v1/responses`,
      NEXUS_OPENAI_NATIVE_ENABLED: "true",
      NEXUS_LIVE_KNOWLEDGE_ENABLED: "true",
      NEXUS_LIVE_KNOWLEDGE_PROVIDER: "generic",
      NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT: `http://127.0.0.1:${knowledgePort}/search`,
      NEXUS_LIVE_KNOWLEDGE_API_KEY: "test-live-knowledge-secret"
    }, async baseUrl => {
      const login = await requestJson(`${baseUrl}/api/login`, {
        body: {
          email: "admin@agrinexus.org",
          password: "Admin2026!"
        }
      });
      assert.equal(login.status, 200, "login should succeed");
      const cookie = Array.isArray(login.setCookie) ? String(login.setCookie[0]).split(";")[0] : "";
      assert(cookie, "session cookie should be available");

      const status = await requestJson(`${baseUrl}/api/nexus/openai-native/status`, { cookie });
      assert.equal(status.status, 200, "configured status should return HTTP 200");
      assert.equal(status.body.ready, true, "OpenAI-native status should be ready with a key");
      assert(status.body.supportedTools.some(tool => tool.name === "nexus_live_knowledge"), "status should list live knowledge tool");
      assertNoSecrets(status.body, "configured status");

      const command = await requestJson(`${baseUrl}/api/agent/command`, {
        cookie,
        body: {
          command: "Nexus, research climate-smart agriculture in Africa and show sources.",
          inputMode: "typed",
          outputMode: "voice",
          conversational: true,
          correlationId: "openai-native-genesis-qa"
        }
      });
      assert.equal(command.status, 200, "agent command should return HTTP 200");
      assert.equal(command.body.openAiNativeAgent?.active, true, "agent command should use OpenAI-native path");
      assert(command.body.openAiNativeAgent.toolsCalled.includes("nexus_live_knowledge"), "OpenAI-native path should call Live Knowledge");
      assert.match(command.body.nexusResponse.response, /FAO and USDA/i, "final answer should be the model's natural answer after tool results");
      assert(!/prepared locally|credential-blocked$/i.test(command.body.nexusResponse.response), "internal statuses must not replace the final answer");
      assertNoSecrets(command.body, "agent command response");

      const tool = await requestJson(`${baseUrl}/api/nexus/openai-native/tool`, {
        cookie,
        body: {
          name: "nexus_provider_readiness",
          arguments: {
            command: "Nexus, what providers are configured?",
            capability: "provider-readiness",
            language: "en"
          }
        }
      });
      assert.equal(tool.status, 200, "tool gateway should return HTTP 200");
      assert.equal(tool.body.noSecretValuesReturned, true, "tool gateway must preserve no secret exposure");
      assertNoSecrets(tool.body, "tool gateway response");
    });
  } finally {
    await closeServer(openAiMock);
    await closeServer(knowledgeMock);
  }
  assert(openAiRequests >= 2, "OpenAI mock should receive initial and tool-result Responses requests");
}

async function run() {
  staticAssertions();
  await routeAssertions();
  console.log("nexus-openai-native-genesis QA passed");
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
