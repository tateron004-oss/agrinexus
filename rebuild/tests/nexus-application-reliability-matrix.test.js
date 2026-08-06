"use strict";

const assert = require("node:assert/strict");
const { NexusBrowserRuntime } = require("../nexus-core/browser-runtime");
const { createOpenMapProvider } = require("../nexus-core/map-service");
const { createContentActionService } = require("../nexus-core/content-action-service");
const { createVisualDataService } = require("../nexus-core/visual-data-service");

function response(status, payload) {
  return {
    ok: status >= 200 && status < 300,
    status,
    headers: { get: () => "0" },
    body: { cancel: async () => {} },
    async json() { return payload; }
  };
}

async function verifyRealtimeRecovery() {
  const sent = [];
  const receipts = [];
  const foundation = {
    machine: { snapshot: () => ({ state: "connected" }) },
    async start() { return { connection: { sessionId: "reliability-session" } }; },
    stop() {}
  };
  const runtime = new NexusBrowserRuntime({
    foundation,
    realtime: { send: event => sent.push(event) },
    audioElement: {},
    openWorkspace: async () => ({ visible: true, populated: true, outcomeVerified: true, outcomeKind: "application" }),
    onReceipt: receipt => receipts.push(receipt),
    realtimeRetryLimit: 2,
    realtimeRetryDelayMs: 0,
    schedule(callback) { callback(); return null; }
  });
  await runtime.start({ sessionToken: "test", userGesture: true });
  runtime.requestResponse({ response: { instructions: "Explain solar panels." } }, "unfamiliar-question");
  await runtime.handleRealtimeEvent({ type: "error", error: { code: "server_error", message: "temporary" } });
  assert.equal(sent.filter(event => event.type === "response.create").length, 2, "a transient Realtime failure must replay the interrupted turn once");
  assert.ok(receipts.some(receipt => receipt.type === "realtime.response-retried"));
  await runtime.handleRealtimeEvent({ type: "response.created", response: { id: "recovered" } });
  await runtime.handleRealtimeEvent({ type: "response.done", response: { id: "recovered" } });
  assert.equal(runtime.responseRetryCount, 0);
}

async function verifyMapFallback() {
  let nominatimCalls = 0;
  const provider = createOpenMapProvider({
    fetchImpl: async url => {
      const target = String(url);
      if (target.includes("nominatim.openstreetmap.org")) {
        nominatimCalls += 1;
        return response(429, {});
      }
      if (target.includes("photon.komoot.io")) return response(200, {
        features: [{ geometry: { coordinates: [36.8172, -1.2864] }, properties: { name: "Nairobi", country: "Kenya", countrycode: "KE", type: "city" } }]
      });
      throw new Error(`Unexpected map request: ${target}`);
    }
  });
  const result = await provider("Show Nairobi, Kenya on the map");
  assert.equal(result.status, "visible-map-ready");
  assert.equal(result.location.label, "Nairobi, Kenya");
  assert.equal(nominatimCalls, 4, "the primary map provider must receive bounded retries before fallback");
}

async function verifyWeatherFallback() {
  const service = createVisualDataService({
    weatherRetryAttempts: 1,
    wait: async () => {},
    fetchImpl: async url => {
      const target = String(url);
      if (target.includes("open-meteo.com")) return response(429, {});
      if (target.includes("nominatim.openstreetmap.org")) return response(200, [{ display_name: "Nairobi, Kenya", lat: "-1.2864", lon: "36.8172" }]);
      if (target.includes("api.met.no")) return response(200, { properties: { timeseries: [{ time: "2026-08-05T12:00:00Z", data: { instant: { details: { air_temperature: 22, wind_speed: 3 } }, next_1_hours: { details: { precipitation_amount: 0, probability_of_precipitation: 10 } } } }] } });
      throw new Error(`Unexpected weather request: ${target}`);
    }
  });
  const weather = await service.weather("Show today's weather in Nairobi, Kenya");
  assert.equal(weather.sourceName, "MET Norway Locationforecast");
  assert.equal(weather.temperatureC, 22);
}

async function verifySourceFallbackAndLocalArtifacts() {
  let fallbackSearchCalls = 0;
  const fetchImpl = async url => {
    const target = String(url);
    if (target.includes("en.wikipedia.org/w/api.php")) {
      fallbackSearchCalls += 1;
      return response(200, { query: { search: [
        { title: "Solar panel" },
        { title: "Photovoltaics" }
      ] } });
    }
    throw new Error(`Unexpected provider request: ${target}`);
  };
  const service = createContentActionService({
    fetchImpl,
    goalResolver: {
      async resolve(request) {
        if (/document/i.test(request.command)) return {
          capability: "document", operation: "create", workspace: "documents", query: request.command,
          needsLiveProvider: false,
          artifact: { kind: "document", title: "Solar field brief", description: "Editable brief", sections: [{ heading: "Draft", body: "Ready", items: [] }], fields: [], items: [], links: [], media: { kind: "", state: "none" } },
          acknowledgement: "The editable document is visible."
        };
        return {
          capability: "search", operation: "search", workspace: "live-knowledge", query: request.command,
          needsLiveProvider: true,
          artifact: { kind: "list", title: "Sources", description: "", sections: [], fields: [], items: [], links: [], media: { kind: "", state: "none" } },
          acknowledgement: "The source-backed list is visible."
        };
      }
    },
    webSearchProvider: async () => { throw new Error("OpenAI search server_error"); }
  });
  const sources = await service.execute({ command: "Find current sources about solar electricity" });
  assert.equal(sources.status, "ready");
  assert.equal(sources.artifact.items.length, 2);
  assert.ok(sources.artifact.items.every(item => item.sourceUrl.startsWith("https://en.wikipedia.org/wiki/")));
  assert.equal(fallbackSearchCalls, 1);
  const document = await service.execute({ command: "Create an editable solar field document" });
  assert.equal(document.status, "ready");
  assert.equal(document.artifact.kind, "document");
  assert.equal(document.artifact.sections[0].heading, "Draft");
}

async function main() {
  for (let stabilityPass = 1; stabilityPass <= 3; stabilityPass += 1) {
    await verifyRealtimeRecovery();
    await verifyMapFallback();
    await verifyWeatherFallback();
    await verifySourceFallbackAndLocalArtifacts();
  }
  console.log("Nexus comprehensive application reliability matrix: PASS (3/3)");
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
