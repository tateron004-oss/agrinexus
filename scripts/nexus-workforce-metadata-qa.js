const assert = require("node:assert");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.NEXUS_WORKFORCE_METADATA_QA_PORT || 4438);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-nexus-workforce-metadata-qa-db.json");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const nativeBridge = fs.readFileSync(path.join(root, "public", "native-bridge.json"), "utf8");
let cookie = "";

function includesAll(haystack, values, label) {
  values.forEach(value => assert(haystack.includes(value), `${label}: missing ${value}`));
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
  throw new Error("Nexus Workforce metadata QA server did not become reachable");
}

async function call(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json();
  if (!response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return json;
}

function assertIdentity(identity, label) {
  assert.deepStrictEqual(identity, {
    productName: "Nexus Workforce AI",
    assistantName: "Nexus",
    edition: "workforce",
    legacyProductName: "AgriNexus"
  }, `${label}: product identity mismatch`);
}

(async () => {
  includesAll(serverSource, [
    "const PRODUCT_IDENTITY = Object.freeze({",
    'productName: "Nexus Workforce AI"',
    'assistantName: "Nexus"',
    'edition: "workforce"',
    'legacyProductName: "AgriNexus"',
    "function productIdentityMetadata()",
    "productIdentity: productIdentityMetadata()",
    'url.pathname === "/api/state" && req.method === "GET"',
    'url.pathname === "/api/config" && req.method === "GET"',
    'url.pathname === "/api/healthz" && req.method === "GET"'
  ], "Backend canonical product metadata");

  includesAll(serverSource, [
    'service: "agrinexus"',
    "AGRINEXUS_RELEASE",
    "AGRINEXUS_WEB_BUILD_VERSION",
    "AGRINEXUS_PWA_CACHE_VERSION",
    'url.pathname === "/api/agent/command" && req.method === "POST"',
    'url.pathname === "/api/health/action" && req.method === "POST"',
    'url.pathname === "/api/video/session" && req.method === "POST"',
    "outbound_call",
    "AgriTrade",
    "agriculture",
    "farmer",
    "sell my crop"
  ], "Protected backend compatibility and domain contracts");

  includesAll(appSource, [
    "const nexusProductIdentity = Object.freeze({",
    'productName: "Nexus Workforce AI"',
    'assistantName: "Nexus"',
    'edition: "workforce"',
    'legacyProductName: "AgriNexus"',
    'const assistantFullName = "AgriNexus";',
    'const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v276";',
    'localStorage.getItem("agrinexusPersona")',
    "AgriTrade",
    "Sell my crop",
    "Scan my field"
  ], "Frontend fallback identity and protected compatibility");

  includesAll(nativeBridge, [
    '"name": "AgriNexus Native Voice Bridge"',
    '"full": "AgriNexus"',
    '"short": "Nexus"',
    '"/api/health/action"',
    '"call.launch"'
  ], "Native bridge compatibility contract");

  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    const health = await call("/api/healthz");
    assert.strictEqual(health.service, "agrinexus", "Healthz service compatibility field must remain agrinexus");
    assertIdentity(health.productIdentity, "/api/healthz");

    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
    const config = await call("/api/config");
    assertIdentity(config.productIdentity, "/api/config");
    assert(config.ai && config.map && config.persistence, "/api/config should preserve existing config fields");

    const state = await call("/api/state");
    assertIdentity(state.productIdentity, "/api/state");
    assert(state.user && state.permissions && state.profile, "/api/state should preserve existing public state fields");
    assert(state.profile && JSON.stringify(state).includes("AgriTrade"), "/api/state should retain AgriTrade compatibility data");

    const platform = await call("/api/agent/command", {
      command: "What is Nexus Workforce AI?",
      inputMode: "voice",
      outputMode: "voice",
      conversational: true,
      mode: "user",
      targetLanguage: "en"
    });
    assert.strictEqual(platform.commandResult?.intent, "conversation.platform_explained", "Nexus Workforce identity prompt should route to platform explanation");
    assert(String(platform.commandResult?.response || "").includes("Nexus is the assistant inside Nexus Workforce AI"), "Platform explanation should use canonical product identity wording");

    console.log("Nexus Workforce metadata QA passed");
    console.log("- backend PRODUCT_IDENTITY is canonical");
    console.log("- /api/healthz, /api/config, and /api/state expose additive productIdentity metadata");
    console.log("- AgriNexus, AgriTrade, agriculture, route, and confirmation compatibility remain present");
  } finally {
    server.kill();
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Best effort cleanup for Windows file locks.
    }
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
