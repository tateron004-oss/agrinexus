const assert = require("assert");
const { spawn } = require("child_process");

const port = Number(process.env.PRODUCTION_SMOKE_PORT || process.env.PORT || 4396);
const base = `http://localhost:${port}`;
let cookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let i = 0; i < 50; i += 1) {
    try {
      const res = await fetch(`${base}/api/healthz`);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Production smoke server did not become reachable");
}

async function call(path, body) {
  const res = await fetch(`${base}${path}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await res.json();
  if (!res.ok) throw new Error(`${path}: ${json.error || res.statusText}`);
  return json;
}

(async () => {
  const server = spawn(process.execPath, ["server.js"], {
    cwd: `${__dirname}/..`,
    env: { ...process.env, PORT: String(port) },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    const health = await call("/api/healthz");
    assert(health.ok === true);
    assert(health.checks.database === "connected");

    const login = await call("/api/login", { email: "demo@agrinexus.org", password: "Prototype2026!" });
    assert(login.user.email === "demo@agrinexus.org");
    assert(login.providers.find(provider => provider.id === "database").status === "connected");
    assert(login.admin.readiness.total >= 1);
    assert(["ready", "local-optimized", "needs-setup"].includes(login.admin.readiness.status));
    assert(login.admin.readiness.total >= login.admin.readiness.readyCount);

    console.log("Production smoke test passed");
  } finally {
    server.kill();
  }
})().catch(error => {
  console.error(error.message);
  process.exit(1);
});
