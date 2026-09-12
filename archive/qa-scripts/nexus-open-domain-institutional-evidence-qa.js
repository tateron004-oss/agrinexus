const assert = require("node:assert");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const serverSource = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

function assertNoSecretValues(payload, label) {
  const serialized = JSON.stringify(payload);
  assert(!/sk-live|sk-proj|Bearer\s+[A-Za-z0-9._-]+|TAVILY_API_KEY_VALUE|BRAVE_SEARCH_API_KEY_VALUE|EXA_API_KEY_VALUE|NEXUS_LIVE_KNOWLEDGE_API_KEY_VALUE|real-api-key|secret-value/i.test(serialized), `${label} must not expose secret-shaped values`);
}

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
          resolve({
            status: res.statusCode,
            body: raw ? JSON.parse(raw) : null,
            raw,
            setCookie: res.headers["set-cookie"]
          });
        } catch (error) {
          reject(new Error(`Invalid JSON from ${url}: ${raw.slice(0, 200)} (${error.message})`));
        }
      });
    });
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

function listen(server) {
  return new Promise(resolve => {
    server.listen(0, "127.0.0.1", () => resolve(server.address().port));
  });
}

function closeServer(server) {
  return new Promise(resolve => server.close(resolve));
}

async function waitForServer(baseUrl, child) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 20000) {
    if (child.exitCode !== null) throw new Error(`Server exited before readiness with code ${child.exitCode}`);
    try {
      const health = await requestJson(`${baseUrl}/api/health`);
      if (health.status === 200) return;
    } catch (error) {
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }
  throw new Error("Server did not become ready in time");
}

async function withStartedNexusServer(env, callback) {
  const port = 4300 + Math.floor(Math.random() * 800);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-evidence-"));
  const dbPath = path.join(tmpDir, "db.json");
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      ...env,
      PORT: String(port),
      HOST: "127.0.0.1",
      AGRINEXUS_DB_PATH: dbPath,
      NODE_ENV: "test"
    },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let stdout = "";
  let stderr = "";
  child.stdout.on("data", chunk => {
    stdout += String(chunk);
  });
  child.stderr.on("data", chunk => {
    stderr += String(chunk);
  });
  const baseUrl = `http://127.0.0.1:${port}`;
  try {
    await waitForServer(baseUrl, child);
    return await callback(baseUrl, { dbPath, stdout: () => stdout, stderr: () => stderr });
  } finally {
    child.kill();
    await new Promise(resolve => child.once("exit", resolve));
    if (fs.existsSync(dbPath)) fs.rmSync(dbPath, { force: true });
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

function staticAssertions() {
  [
    "NEXUS_AUTHORITATIVE_SOURCE_CATALOG",
    "createInstitutionalEvidenceReceipt",
    "nexusInstitutionalEvidenceStatus",
    "/api/nexus/institutional-evidence/status",
    "nexusInstitutionalEvidenceReceipts",
    "institutionalEvidenceReceipt",
    "evidenceReceiptId",
    "nexus.institutionalEvidenceReceipt.v1",
    "claimSupport",
    "sourceOrganization",
    "sourceUrlOrInternalId",
    "sourceClassification",
    "qualityTier",
    "noFakeCitations",
    "noExecutionAuthorized"
  ].forEach(token => includes(serverSource, token, `server ${token}`));

  [
    "typed-location routing. Nexus does not use browser GPS or live location tracking unless a separate approved permission path is active.",
    "route: \"/api/agent/command\"",
    "route: \"/api/nexus/knowledge/query\""
  ].forEach(token => includes(serverSource, token, `server ${token}`));

  [
    "live location tracking when the browser allows GPS",
    "citation.example",
    "fabricated citation",
    "diagnosed the patient",
    "prescribed medication"
  ].forEach(token => excludes(serverSource, token, `server unsafe ${token}`));

  assert.strictEqual(
    packageJson.scripts["qa:nexus-open-domain-institutional-evidence"],
    "node scripts/nexus-open-domain-institutional-evidence-qa.js",
    "package alias should run institutional evidence QA"
  );
  includes(qaSuite, "scripts/nexus-open-domain-institutional-evidence-qa.js", "qa suite institutional evidence wiring");
}

async function routeAssertions() {
  const providerServer = http.createServer((req, res) => {
    let raw = "";
    req.on("data", chunk => {
      raw += String(chunk);
    });
    req.on("end", () => {
      res.setHeader("content-type", "application/json");
      res.end(JSON.stringify({
        provider: "mock-institutional-provider",
        answer: "Climate-smart agriculture uses resilient crop choices, water planning, soil health practices, and local risk review.",
        results: [
          {
            title: "FAO Climate-Smart Agriculture",
            url: "https://www.fao.org/climate-smart-agriculture/",
            snippet: "Climate-smart agriculture addresses food security and climate challenges."
          },
          {
            title: "USDA Climate Hubs",
            url: "https://www.climatehubs.usda.gov/",
            snippet: "USDA Climate Hubs provide regionally relevant climate information."
          }
        ],
        receivedRequest: raw ? "request_body_present" : "request_body_empty"
      }));
    });
  });
  const providerPort = await listen(providerServer);
  try {
    await withStartedNexusServer({
      NEXUS_LIVE_KNOWLEDGE_ENABLED: "true",
      NEXUS_LIVE_KNOWLEDGE_PROVIDER: "generic",
      NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT: `http://127.0.0.1:${providerPort}/search`,
      NEXUS_LIVE_KNOWLEDGE_API_KEY: "test-only-api-key",
      NEXUS_LIVE_KNOWLEDGE_SAFE_MODE: "true"
    }, async baseUrl => {
      const knowledge = await requestJson(`${baseUrl}/api/nexus/knowledge/query`, {
        body: {
          question: "What are current best practices for climate-smart agriculture?",
          category: "agriculture"
        }
      });
      assert.equal(knowledge.status, 200, "knowledge query should return HTTP 200");
      assert.equal(knowledge.body.ok, true, "knowledge query should succeed");
      assert.equal(knowledge.body.result.retrievalStatus, "retrieved", "knowledge query should retrieve provider sources");
      assert(Array.isArray(knowledge.body.result.citations) && knowledge.body.result.citations.length >= 2, "knowledge query should expose source citations");
      assert(knowledge.body.result.institutionalEvidenceReceipt, "knowledge query should include institutional evidence receipt");
      assert.equal(knowledge.body.result.institutionalEvidenceReceipt.status, "source_backed", "receipt should be source backed");
      assert.equal(knowledge.body.result.institutionalEvidenceReceipt.noFakeCitations, false, "receipt must not mark returned citations as fake");
      assert.equal(knowledge.body.result.institutionalEvidenceReceipt.noExecutionAuthorized, true, "receipt must preserve no execution flag");
      assert(knowledge.body.result.institutionalEvidenceReceipt.claimSupport.some(item => item.sourceUrlOrInternalId.includes("fao.org")), "receipt should support FAO source");
      assert(knowledge.body.result.institutionalEvidenceReceipt.claimSupport.some(item => item.sourceUrlOrInternalId.includes("climatehubs.usda.gov")), "receipt should support USDA source");
      assertNoSecretValues(knowledge.body, "knowledge query result");

      const status = await requestJson(`${baseUrl}/api/nexus/institutional-evidence/status`);
      assert.equal(status.status, 200, "institutional evidence status should return HTTP 200");
      assert.equal(status.body.ok, true, "institutional evidence status should be ok");
      assert.equal(status.body.receiptSchema, "nexus.institutionalEvidenceReceipt.v1", "status should expose receipt schema");
      assert(status.body.resources.some(item => item.id === "live-knowledge"), "status should inventory live knowledge resource");
      assert(status.body.resources.some(item => item.id === "weather-open-meteo"), "status should inventory Open-Meteo resource");
      assert(status.body.resources.some(item => item.id === "maps-routing"), "status should inventory maps routing resource");
      assert(status.body.recentReceipts.some(item => item.receiptId === knowledge.body.result.evidenceReceiptId), "status should include recent receipt summary");
      assertNoSecretValues(status.body, "institutional evidence status");

      const login = await requestJson(`${baseUrl}/api/login`, {
        body: {
          email: "admin@agrinexus.org",
          password: "Admin2026!"
        }
      });
      assert.equal(login.status, 200, "normal login should succeed before agent command");
      const cookie = Array.isArray(login.setCookie) ? String(login.setCookie[0]).split(";")[0] : "";
      assert(cookie, "login should return a session cookie");

      const agent = await requestJson(`${baseUrl}/api/agent/command`, {
        cookie,
        body: {
          command: "Nexus, what are the current sources about climate-smart agriculture in Africa?",
          conversational: true,
          inputMode: "typed",
          outputMode: "voice",
          correlationId: "institutional-evidence-agent-command"
        }
      });
      assert.equal(agent.status, 200, "agent command should return HTTP 200");
      const evidence = agent.body?.nexusResponse?.evidence || agent.body?.commandResult?.metadata || {};
      assert(evidence.institutionalEvidenceReceipt || evidence.receiptId || evidence.evidenceReceiptId, "agent command should preserve evidence receipt metadata");
      assertNoSecretValues(agent.body, "agent command result");
    });
  } finally {
    await closeServer(providerServer);
  }
}

async function run() {
  staticAssertions();
  await routeAssertions();
  console.log("nexus-open-domain-institutional-evidence QA passed");
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
