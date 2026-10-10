"use strict";
// These tests pin how radio stations are ranked, which only matters when radio is a source. The default is YouTube only (media-youtube-only.test.js); "all" turns the rest back on.
process.env.KYRO_MEDIA_SOURCES = "all";
// Found by the phrase sweep: "Play radio Citizen" resolved to "The People's Radio - A Star Citizen Community Radio Station" (a gaming station in the UK), not Kenya's Citizen Radio: the
// listener's country never reached the radio search and a name that merely contained the word ranked like a station called that. No test here touches the internet: the directory is
// the fake world of test/helpers/media-fake-world.js, loaded with RECORDED records (fixtures/nexus/radio-browser-citizen.recorded.json) and a few stations made up for the cases the
// live directory did not have that day.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createFakeWorld, STATIONS } = require("../helpers/media-fake-world.js");
const { resolveMedia } = require("../../server/media/resolver.js");
const { createContext } = require("../../server/media/util.js");
const { createMediaState } = require("../../server/media/state.js");
const { createTtlCache } = require("../../server/media/cache.js");
const { createMediaPlayExecutor } = require("../../nexus/media/executor.js");

const recorded = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "fixtures", "nexus", "radio-browser-citizen.recorded.json"), "utf8")).stations;
const station = (name, countrycode, clickcount, votes, extra = {}) => ({ stationuuid: `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${countrycode}-${clickcount}`.padEnd(12, "0"), name,
  url_resolved: `https://streams.example.test/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${countrycode}-${clickcount}.mp3`, tags: "", country: countrycode, countrycode, codec: "MP3", bitrate: 128, hls: 0, lastcheckok: 1, clickcount, votes, ...extra });
function setup(stations) {
  const world = createFakeWorld({ stations });
  const ctx = createContext({ env: {}, fetch: world.fetch, state: createMediaState({ filePath: "", env: {} }), cache: createTtlCache() });
  return { world, ctx };
}
const play = async (stations, request) => { const { ctx } = setup(stations); return resolveMedia({ kind: "music", ...request }, ctx); };

test("recorded directory: 'Play radio Citizen' is never the Star Citizen gaming station, with or without a country", async () => {
  for (const country of ["Kenya", "KE", "", "Nigeria"]) {
    const result = await play(recorded, { query: "Play radio Citizen", country });
    assert.equal(result.ok, true, country);
    assert.notEqual(result.candidates[0].title.includes("Star Citizen"), true, `${country}: ${result.candidates[0].title}`);
    assert.ok(!result.candidates.some(candidate => /Star Citizen/.test(candidate.title)), "the gaming station is not offered at all");
    assert.equal(result.candidates[0].title.trim(), "Citizen", "the station whose name IS the request");
  }
  // and when the gaming station is all there is, nothing is played rather than a game's radio
  const onlyGame = await play(recorded.filter(item => /Star Citizen/.test(item.name)), { query: "Play radio Citizen", country: "Kenya" });
  assert.equal(onlyGame.ok, false);
});

test("Kenya's own Citizen Radio wins for a Kenyan listener even when a gaming station abroad has far more clicks, in English and Kiswahili", async () => {
  const stations = [station("The People's Radio - A Star Citizen Community Radio Station", "GB", 90000, 9000), station("Citizen", "GR", 5000, 449, { tags: "lounge,pop" }),
    ...STATIONS.filter(item => item.name === "Citizen Radio")];
  for (const query of ["Play radio Citizen", "radio Citizen", "weka redio Citizen", "play Citizen Radio"]) {
    const result = await play(stations, { query, country: "Kenya", language: /redio/.test(query) ? "sw" : "en" });
    assert.equal(result.ok, true, query);
    assert.equal(result.candidates[0].title, "Citizen Radio", query);
    assert.equal(result.candidates[0].country, "KE");
  }
  // with no country on the request at all, Kenya and Nigeria are still preferred for these users
  const noCountry = await play(stations, { query: "Play radio Citizen" });
  assert.equal(noCountry.candidates[0].title, "Citizen Radio");
});

test("a station whose NAME is the request ranks above one that only contains the word or only carries it as a tag", async () => {
  const stations = [station("Radio Gospel Citizen Special", "KE", 9000, 900), station("Late Night Talk", "KE", 8000, 800, { tags: "citizen,talk" }), station("Citizen FM", "KE", 12, 3),
    station("Citizen Gospel", "KE", 500, 50)];
  const result = await play(stations, { query: "Citizen", kind: "radio", country: "KE" });
  assert.deepEqual(result.candidates.map(candidate => candidate.title).slice(0, 3), ["Citizen FM", "Citizen Gospel", "Radio Gospel Citizen Special"]);
});

test("'Capital FM': the listener's own country's station beats a hugely popular station of the same name abroad; frequencies in the name do not matter", async () => {
  const stations = [station("Capital FM", "GB", 500000, 60000), station("98.4 Capital FM", "KE", 5, 28)];
  const result = await play(stations, { query: "play Capital FM", country: "Kenya" });
  assert.equal(result.candidates[0].provider, "radio-browser");
  assert.equal(result.candidates[0].title, "98.4 Capital FM");
  // a Nigerian listener has no Capital FM at home: the exact-name station abroad is offered
  const nigerian = await play(stations, { query: "play Capital FM", country: "Nigeria" });
  assert.equal(nigerian.candidates[0].title, "Capital FM");
});

test("several stations of the same name: the most clicked and voted one in the preferred country is chosen", async () => {
  const stations = [station("Kameme FM", "KE", 58, 1980), station("Kameme FM", "KE", 12, 300), station("Kameme FM", "UG", 9000, 9000), station("Kameme FM", "KE", 3, 10)];
  const result = await play(stations, { query: "Kameme FM", country: "Kenya" });
  const kameme = result.candidates.filter(candidate => candidate.title === "Kameme FM");
  assert.equal(kameme.length, 1, "one entry per name");
  assert.equal(kameme[0].country, "KE");
  assert.match(kameme[0].url, /kameme-fm-KE-58\.mp3$/);
});

test("stations about gaming, games, esports or soundtracks are dropped unless that is what was asked for", async () => {
  const stations = [station("Epic Radio", "KE", 9000, 900, { tags: "gaming,electronic" }), station("Epic Gospel", "KE", 10, 1, { tags: "gospel" }), station("Boss Level FM", "KE", 700, 70, { tags: "game soundtrack,esports" }), station("Gaming Hits", "KE", 30, 3, { tags: "gaming" })];
  const result = await play(stations, { query: "Epic", kind: "radio", country: "KE" });
  assert.deepEqual(result.candidates.map(candidate => candidate.title), ["Epic Gospel"]);
  assert.ok(!(await play(stations, { query: "Boss Level", kind: "radio", country: "KE" })).ok, "a gaming-only match plays nothing");
  const asked = await play(stations, { query: "gaming radio", kind: "radio", country: "KE" });
  assert.equal(asked.ok, true);
  assert.ok(asked.candidates.some(candidate => candidate.title === "Gaming Hits"), "asked for gaming: gaming is allowed");
  // 'play radio' with no name never starts a gaming station either
  const none = await play(stations, { query: "", kind: "radio", country: "KE" });
  assert.ok(none.candidates.every(candidate => !/Epic Radio|Boss Level/.test(candidate.title)));
});

test("a stream that does not answer as audio is never offered, however well it matches", async () => {
  const stations = [station("Citizen Radio", "KE", 99999, 9999, { url_resolved: "https://streams.example.test/dead.mp3" }), station("Citizen Gospel", "KE", 5, 1)];
  const world = createFakeWorld({ stations, deadStreams: ["https://streams.example.test/dead.mp3"] });
  const ctx = createContext({ env: {}, fetch: world.fetch, state: createMediaState({ filePath: "", env: {} }), cache: createTtlCache() });
  const result = await resolveMedia({ query: "Citizen", kind: "radio", country: "KE" }, ctx);
  assert.deepEqual(result.candidates.map(candidate => candidate.title), ["Citizen Gospel"]);
});

// Found against the live directory: Kenya's Capital FM answered its stream check after the grace period, so quicker, lower-ranked stations in Italy were returned and played instead.
test("a slow but best-ranked station is waited for (up to a limit) when asked to; the default still never waits", async () => {
  const { collectVerified } = require("../../server/media/util.js");
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const tasks = () => [async () => { await sleep(250); return "best"; }, async () => { await sleep(10); return "quick"; }, async () => { await sleep(20); return "quicker"; }];
  assert.deepEqual(await collectVerified(tasks(), { want: 3, graceMs: 40 }), ["quick", "quicker"], "default: the slow best one is passed over, as before");
  assert.deepEqual(await collectVerified(tasks(), { want: 3, graceMs: 40, holdForBetterMs: 1000 }), ["best", "quick", "quicker"]);
  // a best-ranked one that never answers is not waited for beyond the limit
  const started = Date.now();
  const stuck = await collectVerified([async () => { await sleep(1200); return "never"; }, async () => "quick"], { want: 2, graceMs: 20, holdForBetterMs: 100 });
  assert.deepEqual(stuck, ["quick"]);
  assert.ok(Date.now() - started < 1000, "did not wait for the one that never answers");
  // a best-ranked one that fails quickly does not hold anyone up
  assert.deepEqual(await collectVerified([async () => null, async () => "quick"], { want: 2, graceMs: 20, holdForBetterMs: 1000 }), ["quick"]);
});

test("unchanged: 'play radio' with no name starts a local station, and 'play Capital FM' / 'weka redio Citizen' resolve through radio-browser first", async () => {
  const local = await play(STATIONS, { query: "", kind: "radio", country: "Kenya" });
  assert.equal(local.ok, true);
  assert.ok(local.candidates.every(candidate => candidate.country === "KE"));
  const capital = await play(STATIONS, { query: "play Capital FM", country: "Kenya" });
  assert.equal(capital.candidates[0].title, "Capital FM Kenya");
  assert.equal(capital.tried[0].provider, "radio-browser");
  const swahili = await play(STATIONS, { query: "weka redio Citizen", country: "Kenya", language: "sw" });
  assert.equal(swahili.candidates[0].title, "Citizen Radio");
  assert.equal(swahili.candidates[0].isPreview, false);
});

test("the typed route passes the account's country to the radio search (and an explicit country wins)", async () => {
  const seen = [];
  const execute = createMediaPlayExecutor({ resolveMedia: async request => { seen.push(request); return { ok: false, candidates: [], reason: "none" }; }, lookupPreview: undefined });
  const preview = async () => ({ ok: false, error: "no" }); const video = async () => ({ sourceStatus: "none", limitationNotes: "no" });
  const withStubs = createMediaPlayExecutor({ resolveMedia: async request => { seen.push(request); return { ok: false, candidates: [], reason: "none" }; }, lookupPreview: preview, lookupVideo: video });
  await withStubs({ input: { requestedMedia: "radio Citizen", kind: "music" }, context: { country: "Kenya" } });
  await withStubs({ input: { requestedMedia: "radio Citizen", kind: "music", country: "Nigeria" }, context: { country: "Kenya" } });
  await withStubs({ input: { requestedMedia: "radio Citizen", kind: "music" } });
  assert.deepEqual(seen.map(request => request.country), ["Kenya", "Nigeria", ""]);
  assert.equal(typeof execute, "function");
});
