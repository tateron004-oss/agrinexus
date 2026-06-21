const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.TELEHEALTH_CONTRACT_QA_PORT || 4498);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-telehealth-contract-qa-db.json");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const nativeBridge = JSON.parse(fs.readFileSync(path.join(root, "public", "native-bridge.json"), "utf8"));

let cookie = "";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function serverRoutes() {
  return new Set([...serverSource.matchAll(/url\.pathname === "([^"]+)"/g)].map(match => match[1]));
}

function appHealthWorkflowPaths() {
  return new Set(
    [...appSource.matchAll(/["'](\/api\/(?:health\/[a-z-]+|video\/session))["']/g)]
      .map(match => match[1])
      .filter(route => route !== "/api/healthz")
  );
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
  throw new Error("Telehealth contract QA server did not become reachable");
}

async function post(route, body, options = {}) {
  const response = await fetch(`${base}${route}`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body || {})
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json().catch(() => ({}));
  if (!options.allowError && !response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return { status: response.status, json };
}

(async () => {
  const routes = serverRoutes();
  assert.equal(nativeBridge.apiEndpoints.telehealth, "/api/health/action", "native telehealth endpoint should use the supported health action route");
  assert(routes.has(nativeBridge.apiEndpoints.telehealth), "native telehealth endpoint should exist in server routes");

  for (const route of appHealthWorkflowPaths()) {
    assert(routes.has(route), `frontend health workflow route should exist on the backend: ${route}`);
  }

  fs.copyFileSync(sourceDb, tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();

    const unauthHealth = await post("/api/health/action", { type: "intake" }, { allowError: true });
    assert.equal(unauthHealth.status, 401, "unauthenticated health action should return 401");

    const unauthVideo = await post("/api/video/session", { type: "telehealth-video", module: "Healthcare" }, { allowError: true });
    assert.equal(unauthVideo.status, 401, "unauthenticated video session should return 401");

    const login = await post("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
    assert.equal(login.status, 200, "test user login should pass");

    const invalidHealth = await post("/api/health/action", { type: "not-a-health-action" }, { allowError: true });
    assert.equal(invalidHealth.status, 400, "unsupported health action should return 400");
    assert.equal(invalidHealth.json.error, "Unsupported health action", "unsupported health action should return a clear error");

    const validHealth = await post("/api/health/action", {
      type: "intake",
      patientName: "Telehealth Contract QA Patient",
      needSummary: "Contract QA intake should create a valid telehealth record"
    });
    assert.equal(validHealth.status, 200, "valid health intake action should return 200");
    assert.equal(validHealth.json.profile?.healthIntakes?.[0]?.patientName, "Telehealth Contract QA Patient", "valid health intake should update profile state");

    const invalidAdvanced = await post("/api/health/advanced", { type: "not-an-advanced-health-action" }, { allowError: true });
    assert.equal(invalidAdvanced.status, 400, "unsupported advanced health action should continue to return 400");

    console.log("Telehealth contract QA passed");
  } finally {
    server.kill();
    await wait(250);
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error);
  process.exit(1);
});
