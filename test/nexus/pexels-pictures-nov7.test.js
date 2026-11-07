"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { EventEmitter } = require("node:events");
const images = require("./helpers/test-images.js");
const pictureFetch = require("../../server/providers/picture-fetch.js");

// 7 November 2026: Pexels (free photographs, credit to the photographer) is the first place a flyer's picture is looked for when the server has a PEXELS_API_KEY. Without the key, or when Pexels fails, the open sources are used as before.

const KEY = "563492ad6f91700001000001abcdefghijklmnopqrstuvwxyz";
const publicLookup = async () => [{ address: "93.184.216.34", family: 4 }];
const jpeg = images.sunrise(640, 360);
const requester = (seen = []) => (options, onResponse) => {
  const request = new EventEmitter(); request.destroy = () => {};
  request.end = () => { seen.push(`${options.hostname}${options.path}`); setImmediate(() => { const response = new EventEmitter(); response.statusCode = 200; response.headers = { "content-type": "image/jpeg" }; response.resume = () => {}; response.destroy = () => {}; onResponse(response); response.emit("data", jpeg); response.emit("end"); }); };
  return request;
};
const photo = (id, alt, extra = {}) => ({ id, url: `https://www.pexels.com/photo/${id}/`, photographer: "Jane Doe", alt, src: { large: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?w=940`, medium: `https://images.pexels.com/photos/${id}/m.jpeg` }, ...extra });
const answer = (photos, status = 200) => async (url, init) => ({ ok: status === 200, status, json: async () => ({ photos }), url: String(url), init });

test("Pexels is asked with the server's key in a header (never in the address), landscape, and its photographs become candidates with the photographer's credit", async () => {
  const calls = [];
  const fetchFn = async (url, init) => { calls.push({ url: String(url), init }); return answer([photo(1, "Fresh bread on a wooden board")])(url, init); };
  const found = await pictureFetch.searchPexels("pexels-test-one", { fetchFn, apiKey: KEY });
  assert.equal(found.length, 1);
  assert.equal(calls.length, 1);
  assert.match(calls[0].url, /^https:\/\/api\.pexels\.com\/v1\/search\?/);
  assert.doesNotMatch(calls[0].url, new RegExp(KEY), "the key is never in the address");
  assert.equal(calls[0].init.headers.authorization, KEY);
  assert.match(calls[0].url, /orientation=landscape/);
  assert.equal(found[0].sourceName, "Pexels");
  assert.equal(found[0].creator, "Jane Doe");
  assert.equal(found[0].license, "Pexels License");
  assert.equal(pictureFetch.creditLine(found[0]), "Picture: Pexels, Jane Doe, Pexels License");
});

test("no key, a key that does not look like one, or an address that is not Pexels's own: nothing is asked and nothing is used", async () => {
  let asked = 0;
  const fetchFn = async () => { asked += 1; return answer([photo(2, "Bread")])(); };
  assert.deepEqual(await pictureFetch.searchPexels("pexels-test-two", { fetchFn, apiKey: "" }), []);
  assert.deepEqual(await pictureFetch.searchPexels("pexels-test-two", { fetchFn, apiKey: "short key with spaces" }), []);
  assert.equal(asked, 0);
  const strange = await pictureFetch.searchPexels("pexels-test-three", { fetchFn: answer([photo(3, "Bread", { src: { large: "https://evil.example.com/a.jpg" } })]), apiKey: KEY });
  assert.deepEqual(strange, [], "only images.pexels.com pictures are taken");
});

test("an answer is kept for ten minutes, so the same words do not use Pexels's hourly allowance twice", async () => {
  let asked = 0;
  const fetchFn = async (url, init) => { asked += 1; return answer([photo(4, "Bread")])(url, init); };
  let clock = 1_000_000;
  const now = () => clock;
  await pictureFetch.searchPexels("pexels-test-four", { fetchFn, apiKey: KEY, now });
  clock += 5 * 60 * 1000;
  await pictureFetch.searchPexels("pexels-test-four", { fetchFn, apiKey: KEY, now });
  assert.equal(asked, 1);
  clock += 6 * 60 * 1000;
  await pictureFetch.searchPexels("pexels-test-four", { fetchFn, apiKey: KEY, now });
  assert.equal(asked, 2);
});

test("a Pexels photograph comes before an equally good open picture, and a picture that is not about the words is still never used", async () => {
  const fetchFn = async url => {
    const target = String(url);
    if (target.startsWith("https://api.pexels.com/")) return answer([photo(5, "Fresh bread on a table"), photo(6, "A red sports car")])(url);
    if (target.startsWith("https://commons.wikimedia.org/")) return { ok: true, status: 200, json: async () => ({ query: { pages: { 1: { title: "File:Fresh bread.jpg", imageinfo: [{ mime: "image/jpeg", thumburl: "https://upload.example-pictures.org/bread.jpg", descriptionurl: "https://commons.example-pictures.org/bread", extmetadata: { Artist: { value: "Someone" }, LicenseShortName: { value: "CC BY" }, ImageDescription: { value: "fresh bread" }, Categories: { value: "Bread" } } }] } } } }) };
    return { ok: false, status: 500, json: async () => ({}) };
  };
  const candidates = await pictureFetch.searchPictureCandidates("pexels-fresh bread", { fetchFn, pexelsKey: KEY, openImages: async () => [] });
  const ranked = pictureFetch.rankCandidates("fresh bread", candidates);
  assert.equal(ranked[0].sourceName, "Pexels");
  assert.ok(!ranked.some(item => /sports car/i.test(item.title)), "the car is not about bread");
  const seen = [];
  const picture = await pictureFetch.findPicture("fresh bread", { candidates, fetchOptions: { lookup: publicLookup, requester: requester(seen) } });
  assert.match(picture.credit, /^Picture: Pexels, Jane Doe, Pexels License$/);
  assert.match(seen[0], /^images\.pexels\.com\//);
});

test("when Pexels fails (busy, wrong key) the open sources still answer", async () => {
  const fetchFn = async url => {
    const target = String(url);
    if (target.startsWith("https://api.pexels.com/")) return { ok: false, status: 429, json: async () => ({}) };
    return { ok: false, status: 500, json: async () => ({}) };
  };
  const out = await pictureFetch.searchPictureCandidates("pexels-failing-words", { fetchFn, pexelsKey: KEY, openImages: async () => [{ title: "Open bread", imageUrl: "https://upload.example-pictures.org/open.jpg", sourceUrl: "", creator: "A", license: "cc0", sourceName: "Openverse" }] });
  assert.equal(out.length, 1);
  assert.equal(out[0].sourceName, "Openverse");
});
