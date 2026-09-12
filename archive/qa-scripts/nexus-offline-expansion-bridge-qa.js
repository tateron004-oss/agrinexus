const fs = require("node:fs");
const assert = require("node:assert/strict");
const provider = require("../server/providers/offlineExpansionBridgeProvider");

const server = fs.readFileSync("server.js", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");

(() => {
  assert(server.includes("/api/nexus/tools/offline/bridge/queue"));
  assert(server.includes("/api/nexus/tools/offline/bridge/clear-safe"));
  assert(app.includes("Offline Sync Expansion Bridge"));
  const db = { profile: {} };
  assert.equal(provider.queue({ type: "workflow_plan", title: "Safe item", summary: "safe metadata" }, db, {}).body.status, "confirmation_required");
  assert.equal(provider.queue({ confirmed: true, type: "workflow_plan", title: "Safe item", summary: "safe metadata" }, db, {}).body.status, "completed");
  assert.equal(provider.queue({ confirmed: true, type: "sms", title: "Unsafe", summary: "send message" }, db, {}).body.status, "blocked");
  assert.equal(provider.items(db, {}).body.status, "completed");
  assert.equal(provider.sync({ confirmed: true }, db, {}).body.status, "completed");
  console.log("PASS offline expansion bridge queues safe metadata only and blocks executable content");
})();
