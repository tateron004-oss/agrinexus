const fs = require("node:fs");
const assert = require("node:assert/strict");
const provider = require("../server/providers/mapsFieldVisitBridgeProvider");

const server = fs.readFileSync("server.js", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");

function pass(message) {
  console.log(`PASS ${message}`);
}

(async () => {
assert(server.includes("/api/nexus/tools/maps/field-visit/plan"));
assert(server.includes("/api/nexus/tools/maps/field-visit/route"));
assert(app.includes("data-nexus-maps-field-visit-bridge"));
const panelStart = app.indexOf("function renderNexusMapsFieldVisitPanel");
const panelEnd = app.indexOf("const NEXUS_EXTENDED_BRIDGE_CONTROLS");
const panelSource = app.slice(panelStart, panelEnd);
assert(!panelSource.includes("navigator.geolocation.getCurrentPosition"));
assert(!panelSource.includes("navigator.geolocation.watchPosition"));
  const db = { profile: {} };
  const plan = provider.createVisitPlan({ title: "Visit", origin: "Stockton, CA", destinationAddress: "Sacramento, CA", destinationLabel: "Training site" }, db, {});
  assert.equal(plan.body.status, "prepared");
  assert.match(plan.body.data.routeFallbackUrl, /google\.com\/maps\/dir/);
  const routeBlocked = await provider.routeVisitPlan({ title: "Visit", origin: "Stockton, CA", destinationAddress: "Sacramento, CA", destinationLabel: "Training site" }, db, {});
  assert.equal(routeBlocked.body.status, "confirmation_required");
  const route = await provider.routeVisitPlan({ confirmed: true, title: "Visit", origin: "Stockton, CA", destinationAddress: "Sacramento, CA", destinationLabel: "Training site" }, db, {});
  assert(["missing_config", "fallback_available", "completed"].includes(route.body.status));
  assert.equal(route.body.data.route.noLocationPermissionRequested, true);
  assert.equal(provider.saveVisitPlan({ title: "Visit", origin: "Stockton, CA", destinationAddress: "Sacramento, CA", destinationLabel: "Training site" }, db, {}).body.status, "confirmation_required");
  assert.equal(provider.saveVisitPlan({ confirmed: true, title: "Visit", origin: "Stockton, CA", destinationAddress: "Sacramento, CA", destinationLabel: "Training site" }, db, {}).body.status, "completed");
  assert.equal(provider.createVisitReminder({ title: "Visit", origin: "Stockton, CA", destinationAddress: "Sacramento, CA", destinationLabel: "Training site" }, db, {}).body.status, "confirmation_required");
  assert.equal(provider.queueVisitOffline({ confirmed: true, title: "Visit", origin: "Stockton, CA", destinationAddress: "Sacramento, CA", destinationLabel: "Training site" }, db, {}).body.status, "completed");
  pass("maps field visit bridge is typed-location only, confirmation-gated, and fallback-safe");
})();
