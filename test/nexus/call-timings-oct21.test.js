"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createCallTimings, installFetchTiming, classifyOutbound, routeKey, percentile } = require("../../nexus/observability/call-timings.js");

// The timing record (21 October 2026): how long Kyro waits for each outside service and how long each of its own routes takes, so "it was slow" can be traced to the AI model, a free map service or Kyro's own code.

test("an address is named for the service it is for, with nothing but the service's name kept", () => {
  const cases = {
    "https://api.openai.com/v1/responses": "openai.responses", "https://api.openai.com/v1/audio/transcriptions": "openai.transcribe", "https://api.openai.com/v1/audio/speech": "openai.speech",
    "https://api.openai.com/v1/realtime/client_secrets": "openai.realtime", "https://api.openai.com/v1/chat/completions": "openai.chat", "https://api.openai.com/v1/models": "openai.other",
    "https://nominatim.openstreetmap.org/search?q=Nairobi&format=jsonv2": "map.nominatim", "https://overpass-api.de/api/interpreter": "map.overpass", "https://router.project-osrm.org/route/v1/driving/36,-1;36,0": "map.route",
    "https://api.open-meteo.com/v1/forecast?latitude=1": "weather.open-meteo", "https://geocoding-api.open-meteo.com/v1/search?name=Kisumu": "weather.open-meteo-geocoding", "https://api.met.no/weatherapi/locationforecast/2.0/compact": "weather.met-norway",
    "https://api.twilio.com/2010-04-01/Accounts/AC1/Messages.json": "phone.twilio", "https://api.sendgrid.com/v3/mail/send": "email.sendgrid", "https://example.org/some/path?key=SECRET": "other:example.org"
  };
  for (const [address, label] of Object.entries(cases)) assert.equal(classifyOutbound(address), label, address);
  assert.equal(classifyOutbound(new URL("https://api.openai.com/v1/responses")), "openai.responses");
  assert.equal(classifyOutbound({ url: "https://api.openai.com/v1/responses" }), "openai.responses");
  for (const own of ["http://localhost/api/x", "http://127.0.0.1/api/x", "not an address", ""]) assert.equal(classifyOutbound(own), null, own);
});

test("routes lose the parts that differ from call to call, so one route is one line", () => {
  assert.equal(routeKey("post", "/api/nexus/runtime/behavior/turn"), "POST /api/nexus/runtime/behavior/turn");
  assert.equal(routeKey("GET", "/api/exports/3f2a9c1e-1234-4abc-9def-0123456789ab"), "GET /api/exports/:id");
  assert.equal(routeKey("GET", "/api/uploads/0123456789abcdef0123456789abcdef/file"), "GET /api/uploads/:id/file");
  assert.equal(routeKey("GET", "/api/reports/42?x=1"), "GET /api/reports/:id");
});

test("each line keeps count, failures, timeouts, mean, median, slowest tenth and longest, and the slowest calls overall", () => {
  let clock = Date.parse("2026-10-21T10:00:00Z");
  const timings = createCallTimings({ now: () => clock });
  for (const ms of [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]) timings.recordOutbound("openai.responses", ms, { ok: true, status: 200, processingMs: ms - 50 });
  timings.recordOutbound("openai.responses", 9000, { ok: false, timeout: true });
  timings.recordOutbound("map.overpass", 4000, { ok: true, status: 200 });
  clock += 61_000;
  const snap = timings.snapshot();
  const ai = snap.outbound.find(line => line.name === "openai.responses");
  assert.equal(ai.count, 11); assert.equal(ai.errors, 1); assert.equal(ai.timeouts, 1);
  assert.deepEqual(ai.ms, { mean: Math.round((5500 + 9000) / 11), p50: 600, p90: 1000, max: 9000 });
  assert.deepEqual(ai.serviceSaidMs, { p50: 450, p90: 850 });
  assert.equal(snap.outbound[0].name, "map.overpass", "the line with the slowest tenth first (4000 against 1000)");
  assert.equal(snap.upSeconds, 61);
  assert.deepEqual(snap.slowest.slice(0, 2).map(call => [call.what, call.ms]), [["openai.responses", 9000], ["map.overpass", 4000]]);
  assert.equal(percentile([], 0.5), null);
});

test("only the most recent calls of a line are kept, and the number of lines is capped", () => {
  const timings = createCallTimings({ ringSize: 5 });
  for (let i = 1; i <= 20; i += 1) timings.recordOutbound("a", i * 10);
  const line = timings.snapshot().outbound[0];
  assert.equal(line.count, 20, "the count is all of them"); assert.equal(line.ms.max, 200); assert.equal(line.ms.p50, 180, "the middle of the last five (160 to 200)");
  const many = createCallTimings();
  for (let i = 0; i < 400; i += 1) many.recordRoute("GET", `/api/thing-${i}/x`, 5, 200);
  assert.ok(many.snapshot().routes.length <= 151, "one line for everything past the cap");
});

test("fetch is timed without changing it: the same response comes back, a failure and a timeout are counted, and installing twice does not count twice", async () => {
  const timings = createCallTimings();
  const response = { ok: true, status: 200, headers: { get: name => (name === "openai-processing-ms" ? "420" : null) } };
  const calls = [];
  const fake = { fetch: async (input, init) => { calls.push([String(input), init]); await new Promise(resolve => setTimeout(resolve, 20)); if (/boom/.test(String(input))) throw Object.assign(new Error("The operation was aborted due to timeout"), { name: "TimeoutError" }); if (/down/.test(String(input))) throw new Error("fetch failed"); return response; } };
  assert.equal(installFetchTiming(timings, fake), true);
  assert.equal(installFetchTiming(timings, fake), false, "a second install does nothing");
  const init = { method: "POST", body: "{}" };
  assert.equal(await fake.fetch("https://api.openai.com/v1/responses?secret=1", init), response, "the very same response");
  assert.deepEqual(calls[0], ["https://api.openai.com/v1/responses?secret=1", init], "the same arguments");
  await assert.rejects(fake.fetch("https://overpass-api.de/boom"), /timeout/);
  await assert.rejects(fake.fetch("https://nominatim.openstreetmap.org/down"), /fetch failed/);
  await fake.fetch("http://localhost/api/self");
  const snap = timings.snapshot();
  const ai = snap.outbound.find(line => line.name === "openai.responses");
  assert.equal(ai.count, 1); assert.ok(ai.ms.p50 >= 15); assert.deepEqual(ai.serviceSaidMs, { p50: 420, p90: 420 }); assert.equal(ai.last.status, 200);
  assert.equal(snap.outbound.find(line => line.name === "map.overpass").timeouts, 1);
  assert.equal(snap.outbound.find(line => line.name === "map.nominatim").errors, 1);
  assert.equal(snap.outbound.some(line => /localhost/.test(line.name)), false, "a call to itself is not recorded");
  assert.doesNotMatch(JSON.stringify(snap), /secret=1|SECRET|Bearer|api_key/i, "no query, key or body is ever kept");
});

test("on the server: installed before anything else, every /api request is timed, and the numbers are for the platform owner Admin only", () => {
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  assert.ok(server.indexOf("installFetchTiming(kyroCallTimings)") > 0 && server.indexOf("installFetchTiming(kyroCallTimings)") < server.indexOf('require("./server/uploads.js")'), "installed before the other modules load");
  assert.match(server, /if \(\/\^\\\/api\\\/\/\.test\(url\.pathname\)\) \{\s+const routeStarted = performance\.now\(\);\s+res\.on\("finish"/);
  assert.match(server, /url\.pathname === "\/api\/admin\/system\/timings" && req\.method === "GET"\) \{\s+if \(!canUse\(user, "admin"\) \|\| !businessSpaces\.isPlatformOwner\(user\)\) return send\(res, 403/);
  assert.match(server, /\.\.\.kyroCallTimings\.snapshot\(\)/);
});
