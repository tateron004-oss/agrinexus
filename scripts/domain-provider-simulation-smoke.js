const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4472;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-domain-provider-simulation-smoke-db.json");
let userCookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

async function call(route, { method, body, cookie } = {}) {
  const res = await fetch(`${base}${route}`, {
    method: method || (body ? "POST" : "GET"),
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const json = await res.json();
  return { status: res.status, json };
}

async function callTool(name, args, cookie) {
  return call("/api/nexus/openai-native/tool", { body: { name, arguments: args }, cookie });
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDbPath,
      OPENAI_API_KEY: "",
      NEXUS_SMS_ENABLED: "true",
      NEXUS_WHATSAPP_ENABLED: "true",
      NEXUS_CALLS_ENABLED: "true",
      NEXUS_CALENDAR_ENABLED: "true",
      TWILIO_ACCOUNT_SID: "",
      TWILIO_AUTH_TOKEN: "",
      GOOGLE_CALENDAR_ACCESS_TOKEN: "",
      NEXUS_CALENDAR_PROVIDER_ENDPOINT: "",
      STRIPE_SECRET_KEY: ""
    },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);
    userCookie = await login("user@agrinexus.org", "User2026!");

    const sms = await callTool("nexus_communications", { command: "text +15550001111 the delivery is on the way", confirmed: true, to: "+15550001111", message: "on the way" }, userCookie);
    assert.equal(sms.status, 200);
    assert.equal(sms.json.providerData.simulated, true, "sms tool result should surface simulated: true so the client can label it honestly");

    const call1 = await callTool("nexus_communications", { command: "call this number", channel: "call", to: "+15550001111", confirmed: true }, userCookie);
    assert.equal(call1.status, 200);
    assert.equal(call1.json.providerData.simulated, true);

    const calendar = await callTool("nexus_calendar", { command: "schedule a farm visit", title: "Farm visit", start: "2026-10-01T10:00:00Z", confirmed: true }, userCookie);
    assert.equal(calendar.status, 200);
    assert.equal(calendar.json.providerData.simulated, true);

    // AgriTrade: create a shipment + transaction, add an item, then settle it via the
    // simulated payment path, all through the real /api/nexus/operations/command route.
    const shipment = await call("/api/nexus/operations/command", { body: { action: "create_shipment", origin: "farm", destination: "market", productType: "maize", quantity: "50 bags" }, cookie: userCookie });
    assert.equal(shipment.status, 200);
    const shipmentId = shipment.json.nexusOperationsResult.record.shipmentId;
    assert.ok(shipmentId);

    const tracking = await call("/api/nexus/operations/command", { body: { action: "add_tracking_event", shipmentId, status: "in-transit", location: "checkpoint 1" }, cookie: userCookie });
    assert.equal(tracking.status, 200);

    const transaction = await call("/api/nexus/operations/command", { body: { action: "create_transaction", shipmentId, currency: "USD" }, cookie: userCookie });
    assert.equal(transaction.status, 200);
    const transactionId = transaction.json.nexusOperationsResult.record.transactionId;
    assert.equal(transaction.json.nexusOperationsResult.record.status, "draft");

    const withItem = await call("/api/nexus/operations/command", { body: { action: "add_transaction_item", transactionId, name: "Maize, 50 bags", quantity: "50", amount: "750" }, cookie: userCookie });
    assert.equal(withItem.status, 200);
    assert.equal(withItem.json.nexusOperationsResult.record.status, "prepared");

    const settled = await call("/api/nexus/operations/command", { body: { action: "settle_transaction", transactionId }, cookie: userCookie });
    assert.equal(settled.status, 200);
    const settledRecord = settled.json.nexusOperationsResult.record;
    assert.equal(settledRecord.status, "settled");
    assert.equal(settledRecord.paymentProvider, "simulated");
    assert.equal(settledRecord.settledAmount, 750);
    assert.match(settledRecord.providerTransactionId, /^NX-SIM-TXN/);

    const doubleSettle = await call("/api/nexus/operations/command", { body: { action: "settle_transaction", transactionId }, cookie: userCookie });
    assert.equal(doubleSettle.json.ok, false, "settling an already-settled transaction again must fail cleanly, not double-count");
    assert.equal(doubleSettle.json.error, "transaction_already_settled");

    console.log("Domain provider simulation smoke test passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
