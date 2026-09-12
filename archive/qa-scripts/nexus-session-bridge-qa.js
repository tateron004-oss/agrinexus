const fs = require("node:fs");
const assert = require("node:assert/strict");
const provider = require("../server/providers/sessionBridgeProvider");

const server = fs.readFileSync("server.js", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");

(async () => {
  assert(server.includes("/api/nexus/tools/sessions/prepare"));
  assert(server.includes("/api/nexus/tools/sessions/zoom/create"));
  assert(app.includes("Session / Zoom Bridge"));
  const db = { profile: {} };
  assert.equal(provider.prepare({ title: "Training", topic: "Irrigation" }, db, {}).body.status, "prepared");
  assert.equal(provider.prepare({ title: "patient medical record", topic: "Irrigation" }, db, {}).body.status, "blocked");
  assert.equal(provider.reminder({ confirmed: true, title: "Training", topic: "Irrigation" }, db, {}).body.status, "completed");
  assert.equal(provider.offline({ confirmed: true, title: "Training", topic: "Irrigation" }, db, {}).body.status, "completed");
  const zoom = await provider.createZoom({ title: "Training", topic: "Irrigation" }, db, {});
  assert.equal(zoom.body.status, "confirmation_required");
  console.log("PASS session bridge prepares sessions locally and gates Zoom creation");
})();
