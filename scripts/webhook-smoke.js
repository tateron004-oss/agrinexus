const assert = require("assert");
const { spawn } = require("child_process");
const http = require("http");
const fs = require("fs");
const path = require("path");

const appPort = 4273;
const webhookPort = 4274;
const base = `http://localhost:${appPort}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-webhook-smoke-db.json");
const deliveries = [];
let cookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 40; i += 1) {
    try {
      await fetch(url);
      return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

async function call(route, body) {
  const res = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await res.json();
  if (!res.ok) throw new Error(`${route}: ${json.error || res.statusText}`);
  return json;
}

function createWebhookServer() {
  return http.createServer((req, res) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
    });
    req.on("end", () => {
      deliveries.push({
        path: req.url,
        authorization: req.headers.authorization || "",
        body: body ? JSON.parse(body) : {}
      });
      res.writeHead(204);
      res.end();
    });
  });
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const webhook = createWebhookServer();
  await new Promise(resolve => webhook.listen(webhookPort, resolve));

  const app = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(appPort),
      AGRINEXUS_DB_PATH: tempDbPath,
      LEARNING_CERTIFICATE_PROVIDER: "webhook",
      LEARNING_CERTIFICATE_WEBHOOK_URL: `http://localhost:${webhookPort}/learning-certificates`,
      LEARNING_PROVIDER_API_KEY: "test-provider-key"
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitFor(`${base}/`);
    await call("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    await call("/api/integrations/test", { providerId: "learning-certificates" });
    await call("/api/learning/start", { courseId: "digital-foundations" });
    await call("/api/learning/quiz", {});
    await call("/api/learning/certificate", {});
    await wait(1500);

    assert(deliveries.some(item => item.body.action === "provider.test"));
    assert(deliveries.some(item => item.body.action === "certificate.issued"));
    assert(deliveries.every(item => item.authorization === "Bearer test-provider-key"));
    console.log("Webhook smoke test passed");
  } finally {
    app.kill();
    webhook.close();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.message);
  process.exit(1);
});
