const fs = require("node:fs");
const assert = require("node:assert/strict");
const provider = require("../server/providers/droneMissionBridgeProvider");

const server = fs.readFileSync("server.js", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");

(() => {
  assert(server.includes("/api/nexus/tools/drones/bridge/mission-request"));
  assert(server.includes("/api/nexus/tools/drones/bridge/offline"));
  assert(app.includes("Drone Mission Request Bridge"));
  const db = { profile: {} };
  assert.equal(provider.missionRequest({ title: "Crop monitoring", area: "North field" }, db, {}).body.status, "confirmation_required");
  const saved = provider.missionRequest({ confirmed: true, title: "Crop monitoring", area: "North field", purpose: "Intake review" }, db, {});
  assert.equal(saved.body.status, "completed");
  assert.equal(saved.body.data.request.flightControlEnabled, false);
  assert.equal(provider.missionRequest({ confirmed: true, title: "takeoff now", area: "North field" }, db, {}).body.status, "blocked");
  assert.equal(provider.reminder({ confirmed: true, title: "Crop monitoring", area: "North field" }, db, {}).body.status, "completed");
  assert.equal(provider.offline({ confirmed: true, title: "Crop monitoring", area: "North field" }, db, {}).body.status, "completed");
  console.log("PASS drone mission bridge is intake-only with no flight control or dispatch");
})();
