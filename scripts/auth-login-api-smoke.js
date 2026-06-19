const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = Number(process.env.AUTH_LOGIN_API_SMOKE_PORT || 4448);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-auth-login-api-smoke-db.json");

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForServer() {
  for (let index = 0; index < 80; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Auth smoke server did not start");
}

async function post(pathname, body) {
  const response = await fetch(`${base}${pathname}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  const json = await response.json().catch(() => ({}));
  return { status: response.status, ok: response.ok, json, cookie: response.headers.get("set-cookie") || "" };
}

(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitForServer();
    const blank = await post("/api/login", { email: "user@agrinexus.org", password: "" });
    assert.equal(blank.status, 400, "blank password should be rejected");
    assert.equal(blank.json.error, "Email and password are required");

    const wrong = await post("/api/login", { email: "user@agrinexus.org", password: "wrong" });
    assert.equal(wrong.status, 401, "wrong password should be rejected");

    const good = await post("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
    assert.equal(good.status, 200, "correct password should pass");
    assert(good.cookie.includes("agrinexus_sid="), "successful login should set session cookie");
    assert.equal(good.json.user.email, "user@agrinexus.org");
    console.log("Auth login API smoke passed");
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
