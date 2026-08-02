"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createContentActionService, emptyArtifact } = require("../nexus-core/content-action-service");

const root = path.resolve(__dirname, "..", "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");

async function main() {
  const bridge = read("rebuild/browser/nexus-production-capability-bridge.js");
  const extension = read("rebuild/browser/nexus-content-population-extension.js");
  const server = read("rebuild/production-capability-bridge-server.js");
  const physical = read("rebuild/tests/nexus-production-transaction-windows.spec.js");
  const workflow = read(".github/workflows/nexus-live-runtime-certification.yml");

  assert.doesNotMatch(extension, /Editable workspace ready while live enrichment continues/i);
  assert.match(extension, /function applicationDeadlineFallback\(detail\)\s*{\s*void detail;\s*return null;/);
  assert.match(bridge, /activeRequestId/);
  assert.match(bridge, /request\.stale-suppressed/);
  assert.match(bridge, /result owned by another request/);
  assert.match(bridge, /identity-bound capability receipt/);
  assert.match(bridge, /No verified live weather receipt/);
  assert.match(bridge, /No source-bound image receipt/);
  assert.match(bridge, /visible map does not match the requested geography/);
  assert.match(bridge, /application returned an empty workspace/);
  assert.match(server, /createVisualDataService/);
  assert.match(server, /nexus\.capability\.receipt\.v1/);
  assert.match(server, /invalid-capability-request-id/);

  for (const phrase of [
    "live weather in Nairobi", "United States on a fresh map", "maize diseases",
    "Agriculture Help and keep the visible workspace synchronized"
  ]) assert.ok(physical.includes(phrase), `Physical production contract is missing ${phrase}.`);
  assert.match(workflow, /nexus-windows-physical-certification\.spec\.js/);
  assert.match(workflow, /NEXUS_TRANSACTION_SESSION/);
  assert.match(workflow, /for \/L %%I in \(1,1,3\)/);

  const weatherGoal = {
    capability: "weather", operation: "search", workspace: "live-knowledge", query: "weather in Nairobi, Kenya",
    location: "Nairobi, Kenya", needsLiveProvider: true, artifact: emptyArtifact("card", "Nairobi weather"),
    acknowledgement: "The live Nairobi weather is visible."
  };
  const weatherService = createContentActionService({
    goalResolver: { async resolve() { return weatherGoal; } },
    fetchImpl: async () => { throw new Error("Unexpected provider path"); }
  });
  const weather = await weatherService.execute({ command: "Show current weather in Nairobi" }, {
    weather: async () => ({
      status: "live-weather-ready", location: "Nairobi, Kenya", temperatureC: 21, highC: 25, lowC: 14,
      rainChance: 30, sourceName: "Open-Meteo", sourceUrl: "https://api.open-meteo.com/v1/forecast?latitude=-1.28&longitude=36.82"
    })
  });
  assert.equal(weather.status, "ready");
  assert.equal(weather.evidence.provider, "Open-Meteo");
  assert.equal(weather.evidence.weather.temperatureC, 21);
  assert.ok(weather.artifact.links[0].url.startsWith("https://api.open-meteo.com/"));

  const appService = createContentActionService({
    goalResolver: { async resolve() { return {
      capability: "workspace", operation: "open", workspace: "agriculture", query: "open Agriculture Help",
      location: "", needsLiveProvider: false, artifact: emptyArtifact("workspace", "Agriculture Help"),
      acknowledgement: "Agriculture Help is open."
    }; } }
  });
  const application = await appService.execute({ command: "Open Agriculture Help" });
  assert.equal(application.status, "ready");
  assert.equal(application.workspace, "agriculture");
  assert.ok(application.artifact.fields.length >= 3);
  assert.match(application.acknowledgement, /visibly open and synchronized/i);

  console.log("Nexus capability transaction contract: PASS (request isolation, truthful providers, typed receipts, synchronized applications, production physical matrix)");
}

main().catch(error => { console.error(error); process.exitCode = 1; });
