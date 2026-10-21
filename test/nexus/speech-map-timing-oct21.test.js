"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const osm = require("../../server/providers/osmPlacesProvider.js");
const { createCallTimings, classifyOutbound } = require("../../nexus/observability/call-timings.js");

// The second pass on the timing numbers (21 October 2026): the record showed a pharmacy search waiting out the whole 9 seconds of a slow free map service, a spoken reply taking 6.6 seconds when OpenAI's own speech call takes
// under one (with one call that hung for 25), and a second Render service with calls up to 7 seconds. Here: the map search no longer waits for the slow service, the speech wait is short with one retry, and the places where
// Kyro's own time goes (reading and saving the stored state, building the state sent back, the speech step) and the calls to the sibling service are named in the record.
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// A stand-in for the network: a geocode, a slow or fast Overpass, and Nominatim's place search.
function network({ overpass, nominatim, geocode = { lat: "-1.29", lon: "36.82", display_name: "Nairobi, Kenya" } }) {
  const calls = [];
  const fetchImpl = async url => {
    const address = String(url); calls.push(/overpass/.test(address) ? "overpass" : /limit=1(?:&|$)/.test(address) ? "geocode" : "nominatim");
    if (/overpass/.test(address)) { await sleep(overpass.delay || 0); if (overpass.fail) throw new Error("timeout"); return { ok: true, text: async () => JSON.stringify({ elements: (overpass.places || []).map(([name, lat, lon]) => ({ tags: { name, phone: "+254 700 000000" }, lat, lon })) }) }; }
    if (/limit=1(?:&|$)/.test(address)) return { ok: true, text: async () => JSON.stringify([geocode]) };
    await sleep(nominatim.delay || 0);
    return { ok: true, text: async () => JSON.stringify((nominatim.places || []).map(([name, lat, lon]) => ({ name, lat: String(lat), lon: String(lon), display_name: name }))) };
  };
  return { calls, fetchImpl };
}
const run = (net, extra = {}) => osm.findNearbyPlaces({ locationText: "Nairobi", osmFilters: ['"amenity"="pharmacy"'], fallbackTerm: "pharmacy", fetchImpl: net.fetchImpl, hedgeMs: 30, ...extra });

test("a slow Overpass no longer costs its whole wait: Nominatim is asked after a short while and its places are used if they come first", async () => {
  const net = network({ overpass: { delay: 600, places: [["Overpass Pharmacy", -1.291, 36.821]] }, nominatim: { delay: 10, places: [["Nominatim Pharmacy", -1.292, 36.822]] } });
  const started = Date.now();
  const found = await run(net);
  assert.ok(Date.now() - started < 400, "answered long before the slow service did");
  assert.deepEqual(found.places.map(place => place.name), ["Nominatim Pharmacy"]);
  assert.deepEqual(net.calls.slice(0, 3), ["geocode", "overpass", "nominatim"]);
});

test("Overpass is still preferred when it answers in time (richer: phone and hours), and then Nominatim is never asked", async () => {
  const net = network({ overpass: { delay: 5, places: [["Overpass Pharmacy", -1.291, 36.821]] }, nominatim: { delay: 5, places: [["Nominatim Pharmacy", -1.292, 36.822]] } });
  const found = await run(net);
  assert.deepEqual(found.places.map(place => place.name), ["Overpass Pharmacy"]); assert.equal(found.places[0].phone, "+254 700 000000");
  assert.equal(net.calls.includes("nominatim"), false);
});

test("when both are asked and Overpass answers first with places, its richer answer wins", async () => {
  const net = network({ overpass: { delay: 120, places: [["Overpass Pharmacy", -1.291, 36.821]] }, nominatim: { delay: 400, places: [["Nominatim Pharmacy", -1.292, 36.822]] } });
  const found = await run(net);
  assert.deepEqual(found.places.map(place => place.name), ["Overpass Pharmacy"]);
});

test("Overpass failing, or finding nothing, goes straight to Nominatim; both finding nothing is an empty answer with the place, not an error", async () => {
  const failed = await run(network({ overpass: { fail: true }, nominatim: { places: [["Nominatim Pharmacy", -1.292, 36.822]] } }));
  assert.deepEqual(failed.places.map(place => place.name), ["Nominatim Pharmacy"]);
  const empty = await run(network({ overpass: { places: [] }, nominatim: { places: [["Nominatim Pharmacy", -1.292, 36.822]] } }));
  assert.deepEqual(empty.places.map(place => place.name), ["Nominatim Pharmacy"]);
  const none = await run(network({ overpass: { places: [] }, nominatim: { places: [] } }));
  assert.deepEqual(none.places, []); assert.equal(none.origin.label, "Nairobi, Kenya");
  const bothFail = await run(network({ overpass: { fail: true }, nominatim: { places: [] } }));
  assert.deepEqual(bothFail.places, []);
});

test("the record names Kyro's own time and the sibling service: steps with their size, and the second Render service by what it is asked", () => {
  assert.equal(classifyOutbound("https://agrinexus-provider-engines.onrender.com/health/telehealth?id=1"), "engines:health/telehealth");
  assert.equal(classifyOutbound("https://agrinexus-provider-engines.onrender.com/translate"), "engines:translate");
  assert.equal(classifyOutbound("https://agrinexus-provider-engines.onrender.com/"), "engines:root");
  const timings = createCallTimings();
  for (const ms of [100, 200, 300]) timings.recordStep("db.read", ms, { bytes: 1_000_000 + ms });
  timings.recordStep("db.write", 900, { bytes: 1_200_000 });
  timings.recordStep("publicState", 40);
  const snap = timings.snapshot();
  const read = snap.steps.find(line => line.name === "db.read");
  assert.equal(read.count, 3); assert.deepEqual(read.ms, { mean: 200, p50: 200, p90: 300, max: 300 }); assert.deepEqual(read.bytes, { last: 1_000_300, max: 1_000_300 });
  assert.equal(snap.steps[0].name, "db.write", "the slowest step first");
  assert.equal(snap.steps.find(line => line.name === "publicState").bytes, undefined);
});

test("on the server: the stored state, the state sent back and the speech step are timed; the speech wait is short with one retry and can still be set by hand", () => {
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  assert.match(server, /async function readDb\(\) \{\s+const startedAt = performance\.now\(\);[\s\S]{0,200}recordStep\("db\.read"/);
  assert.match(server, /async function writeDb\(db\) \{\s+const startedAt = performance\.now\(\);[\s\S]{0,200}recordStep\("db\.write"/);
  assert.match(server, /function publicState\(db, user\) \{\s+const startedAt = performance\.now\(\);[\s\S]{0,300}recordStep\("publicState"/);
  assert.match(server, /recordStep\("voice\.speak\.tts"/);
  assert.match(server, /Math\.min\(20000, 8000 \+ Math\.ceil\(spokenText\.length \/ 400\) \* 1000\)/);
  assert.match(server, /configuredTimeout > 0 \? configuredTimeout/);
  assert.match(server, /if \(attempt\.status >= 500 \|\| attempt\.status === 429\) return await createSpeech\(selectedVoice\);/);
  assert.match(server, /let response = await createSpeechOnce\(requestedVoice\);/);
});

// ---- the speech step itself, run for real against a stand-in network ----
const vm = require("node:vm");
function speechSandbox({ fetchImpl, env = {} }) {
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const start = server.indexOf("async function openAiSpeechAudio(");
  const end = server.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const context = {
    process: { env: { OPENAI_API_KEY: "test-key", ...env } }, fetch: fetchImpl, Buffer, AbortController, setTimeout, clearTimeout, URL,
    sanitizeNexusSpokenResponseText: text => String(text || ""),
    openAiVoiceProviderDiagnostics: details => ({ ...details }),
    classifyOpenAiVoiceError: error => (error && error.status >= 500 ? "server_error" : "unknown"),
    openAiVoiceErrorMessage: type => `speech failed: ${type}`
  };
  vm.runInNewContext(`${server.slice(start, end)}\nthis.speak = openAiSpeechAudio;`, context);
  return context.speak;
}
const audioResponse = { ok: true, status: 200, arrayBuffer: async () => new Uint8Array([1, 2, 3]).buffer };

test("a speech call that hangs is cut off after a short wait and tried once more, which then answers", async () => {
  let calls = 0;
  const fetchImpl = (url, init) => { calls += 1; if (calls > 1) return Promise.resolve(audioResponse); return new Promise((resolve, reject) => init.signal.addEventListener("abort", () => reject(Object.assign(new Error("This operation was aborted"), { name: "AbortError" })))); };
  const started = Date.now();
  const spoken = await speechSandbox({ fetchImpl, env: { OPENAI_TTS_TIMEOUT_MS: "60" } })({ text: "Hello there" });
  assert.equal(calls, 2); assert.ok(spoken.audioDataUrl.startsWith("data:audio/mp3;base64,"));
  assert.ok(Date.now() - started < 1500, "nowhere near the old 25 seconds");
});

test("a server error or a busy answer is tried once more; a refusal that will not change (a bad key) is not retried", async () => {
  let calls = 0;
  const busy = async () => { calls += 1; return calls === 1 ? { ok: false, status: 503, json: async () => ({}) } : audioResponse; };
  assert.equal((await speechSandbox({ fetchImpl: busy })({ text: "Hello" })).provider, "openai-audio-speech"); assert.equal(calls, 2);
  calls = 0;
  const limited = async () => { calls += 1; return calls === 1 ? { ok: false, status: 429, json: async () => ({}) } : audioResponse; };
  assert.equal((await speechSandbox({ fetchImpl: limited })({ text: "Hello" })).provider, "openai-audio-speech");
  calls = 0;
  const refused = async () => { calls += 1; return { ok: false, status: 401, json: async () => ({ error: { type: "invalid_api_key" } }) }; };
  await assert.rejects(speechSandbox({ fetchImpl: refused })({ text: "Hello", voice: "coral" }), error => error.status === 401);
  assert.equal(calls, 1, "tried once, not twice");
});

test("a call that hangs twice fails after two short waits, not one long one", async () => {
  let calls = 0;
  const hang = (url, init) => { calls += 1; return new Promise((resolve, reject) => init.signal.addEventListener("abort", () => reject(Object.assign(new Error("aborted"), { name: "AbortError" })))); };
  const started = Date.now();
  await assert.rejects(speechSandbox({ fetchImpl: hang, env: { OPENAI_TTS_TIMEOUT_MS: "40" } })({ text: "Hello" }), error => error.name === "AbortError");
  assert.equal(calls, 2); assert.ok(Date.now() - started < 1000);
});
