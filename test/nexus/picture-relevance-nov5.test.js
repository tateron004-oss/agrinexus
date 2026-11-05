"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { EventEmitter } = require("node:events");
const images = require("./helpers/test-images.js");
const pictureFetch = require("../../server/providers/picture-fetch.js");
const pictures = require("../../nexus/documents/pictures.js");

// 5 November 2026, found by looking at the live screens: "Add a picture of a broom to the poster" put a Wikimedia picture of a BROMINE chemistry sample (an orange tube in a cube labelled Br) on a community clean-up poster, and
// "a picture of the church building" returned a night view of a ruin. A found picture must really be about the words asked for, or nothing is added and the person is told.

const publicLookup = async () => [{ address: "93.184.216.34", family: 4 }];
const jpeg = images.sunrise(640, 360);
const requester = (seen = []) => (options, onResponse) => {
  const request = new EventEmitter(); request.destroy = () => {};
  request.end = () => { seen.push(options.path); setImmediate(() => { const response = new EventEmitter(); response.statusCode = 200; response.headers = { "content-type": "image/jpeg" }; response.resume = () => {}; response.destroy = () => {}; onResponse(response); response.emit("data", jpeg); response.emit("end"); }); };
  return request;
};
const commons = (title, extra = {}) => ({ title, imageUrl: `https://upload.example-pictures.org/${encodeURIComponent(title)}.jpg`, sourceUrl: `https://commons.example-pictures.org/wiki/${encodeURIComponent(title)}`, creator: "A. Photographer", license: "CC BY-SA 4.0", sourceName: "Wikimedia Commons", description: "", categories: "", ...extra });
const find = (query, candidates, seen = []) => pictureFetch.findPicture(query, { candidates, fetchOptions: { lookup: publicLookup, requester: requester(seen) } });

// the exact candidates that went wrong, as Wikimedia Commons described them
const BROMINE = commons("Bromine sample in a cube", { creator: "Alchemist-hp (pse-mendelejew.de)", description: "Bromine (Br), an orange liquid in a tube inside a cube labelled Br", categories: "Bromine . Chemical elements . Samples of chemical elements" });
const BROMINE_TWO = commons("Brome liquide", { description: "Bromine ampoule", categories: "Bromine" });
const BROOM = commons("Straw broom leaning on a wall", { description: "A traditional broom with a wooden handle", categories: "Brooms . Cleaning tools" });
const BROOM_ONLY_IN_CATEGORIES = commons("Sweeping the yard", { description: "A woman sweeping", categories: "Brooms . Sweeping" });

test("a word is matched as a WHOLE word, with a plural folded to its singular: 'broom' is not 'bromine' or 'Broomfield', 'church' is not 'Churchill' or 'churchyard'", () => {
  assert.deepEqual(pictureFetch.queryWords("a broom"), { all: ["broom"], needed: ["broom"] });
  assert.deepEqual(pictureFetch.queryWords("the church building"), { all: ["church", "building"], needed: ["church"] }, "'building' only says what kind of thing; it ranks but is not required");
  assert.deepEqual(pictureFetch.queryWords("brooms").needed, ["broom"]);
  assert.deepEqual(pictureFetch.queryWords("fresh breads and churches").needed, ["fresh", "bread", "church"]);
  assert.deepEqual(pictureFetch.queryWords("baby glasses boxes").needed, ["baby", "glass", "box"]);
  const rank = (query, ...titles) => pictureFetch.rankCandidates(query, titles.map(title => commons(title))).map(item => item.title);
  assert.deepEqual(rank("broom", "Bromine sample", "Broomfield station", "Brome liquide", "Brooms for sale", "A BROOM"), ["Brooms for sale", "A BROOM"]);
  assert.deepEqual(rank("church", "Churchill statue", "Churchyard path", "Churches of Rhodes", "Church of the Virgin"), ["Churches of Rhodes", "Church of the Virgin"]);
  assert.deepEqual(rank("church", "Church of the virgin 14th century night", "Church of St George"), ["Church of St George", "Church of the virgin 14th century night"], "a night view is used only when nothing better matches");
  assert.deepEqual(rank("church at night", "Church of St George", "Church of the virgin night"), ["Church of the virgin night"], "...and a night view is what was asked for (and a day view does not match it)");
  assert.deepEqual(rank("", "Anything"), [], "no words, no picture");
  assert.deepEqual(rank("fresh bread", "Bread", "Fresh air", "Fresh made bread 02"), ["Fresh made bread 02"], "EVERY word, not just one");
});

test("the broom case: the bromine chemistry sample is never used, the real broom is; the candidate whose title matches best comes first", async () => {
  const seen = [];
  const found = await find("a broom", [BROMINE, BROMINE_TWO, BROOM_ONLY_IN_CATEGORIES, BROOM], seen);
  assert.equal(found.title, "Straw broom leaning on a wall", "the broom, not the bromine: the title that matches is preferred to one that only matches in its categories");
  assert.equal(found.credit, "Picture: Wikimedia Commons, A. Photographer, CC BY-SA 4.0");
  assert.ok(seen.every(path => !/Bromine|Brome/.test(decodeURIComponent(path))), "the bromine pictures were never even downloaded");
  assert.deepEqual(seen.map(path => decodeURIComponent(path).replace(/^\//, "")), ["Straw broom leaning on a wall.jpg"]);
  // a picture that is about brooms only in its categories is still a broom picture, but a worse one than a title that says so
  const second = await find("brooms", [BROMINE, BROOM_ONLY_IN_CATEGORIES]);
  assert.equal(second.title, "Sweeping the yard");
});

test("when the first source has only the wrong picture the next source is used; when NO source has a good one, nothing is added and the person is told plainly", async () => {
  const openverseBroom = { title: "Old broom", imageUrl: "https://upload.example-pictures.org/openverse-broom.jpg", sourceUrl: "https://openverse.example-pictures.org/image/1", creator: "B. Maker", license: "by", sourceName: "Openverse" };
  const fetchFn = async () => ({ ok: true, json: async () => ({ query: { pages: { 1: { title: "File:Bromine sample in a cube.jpg", imageinfo: [{ mime: "image/jpeg", thumburl: "https://upload.example-pictures.org/bromine.jpg", descriptionurl: "https://commons.example-pictures.org/wiki/File:Bromine", extmetadata: { Artist: { value: "Alchemist-hp (pse-mendelejew.de)" }, LicenseShortName: { value: "CC BY-SA 3.0" }, ImageDescription: { value: "orange tube in a cube labelled Br" }, Categories: { value: "Bromine|Chemical elements" } } }] } } } }) });
  const candidates = await pictureFetch.searchPictureCandidates("broom", { fetchFn, openImages: async () => [openverseBroom] });
  assert.equal(candidates[0].sourceName, "Wikimedia Commons"); assert.match(candidates[0].categories, /Bromine \. Chemical elements/); assert.match(candidates[0].description, /orange tube/);
  assert.ok(!candidates[1].description, "an Openverse result is judged by its title only (its description line is a fixed sentence, not a description of the picture)");
  const found = await find("broom", candidates);
  assert.equal(found.title, "Old broom", "Wikimedia Commons had only the bromine, so the next source gave the picture");
  assert.match(found.credit, /^Picture: Openverse, B\. Maker/);
  // nothing right anywhere
  const nothing = await find("broom", [BROMINE, BROMINE_TWO]);
  assert.equal(nothing, null);
  // and through the document: no picture is added, the person is told in the words asked for, and no "found on the web" note is shown
  const resolved = await pictures.resolvePictures({ specs: [{ source: "search", query: "a broom" }], env: {}, context: { tenantId: "t1", userId: "u1" }, deps: { findPicture: query => pictureFetch.findPicture(query, { candidates: [BROMINE, BROMINE_TWO], fetchOptions: { lookup: publicLookup, requester: requester() } }) } });
  assert.equal(resolved.pictures.length, 0);
  assert.deepEqual(resolved.notes, ["I could not find a good picture of a broom. You can add your own with Add a picture."]);
});

test("the church case: a picture of 'the church building' has church in its title, description or categories as a whole word; 'Churchill' and 'churchyard' and a building site do not count", async () => {
  const JEBULON = commons("Church of the virgin of the burgh Rhodes 14th century night", { creator: "Jebulon", license: "CC0", categories: "Churches in Rhodes . Ruins in Greece . Night views" });
  const candidates = [commons("Winston Churchill statue", { categories: "Statues of Winston Churchill" }), commons("Churchyard path in snow"), commons("Building site with crane", { description: "a building under construction" }), commons("Old building"), JEBULON,
    commons("Stone church building in the village", { description: "The parish church building seen from the road", categories: "Church buildings" })];
  const ranked = pictureFetch.rankCandidates("a picture of the church building", candidates).map(item => item.title);
  assert.deepEqual(ranked, ["Stone church building in the village", "Church of the virgin of the burgh Rhodes 14th century night"], "a title with church AND building first; every one of them really has a church in it");
  const found = await find("a picture of the church building", candidates);
  assert.equal(found.title, "Stone church building in the village");
  const only = await find("the church building", candidates.slice(0, 4).concat([JEBULON]));
  assert.equal(only.creator, "Jebulon", "the Rhodes church is a church: its title says so");
  assert.equal(await find("the church building", candidates.slice(0, 4)), null, "without a church among them nothing is chosen");
  // the words of a title may sit anywhere in it, in any case
  assert.equal((await find("church", [commons("THE CHURCH, from the south")])).title, "THE CHURCH, from the south");
});

test("an Openverse licence code reads as a licence in the printed credit, not as a stray word (live, 5 November 2026: 'Picture: flickr, striatic, by')", async () => {
  const { readableLicense, searchPictureCandidates, creditLine } = require("../../server/providers/picture-fetch.js");
  assert.equal(readableLicense("by"), "CC BY");
  assert.equal(readableLicense("by-sa"), "CC BY-SA");
  assert.equal(readableLicense("by-nc-nd"), "CC BY-NC-ND");
  assert.equal(readableLicense("cc0"), "CC0");
  assert.equal(readableLicense("pdm"), "Public domain");
  assert.equal(readableLicense(""), "");
  assert.equal(readableLicense("CC BY-SA 3.0"), "CC BY-SA 3.0", "a licence already written out is left alone");
  const found = await searchPictureCandidates("church building", { fetchFn: async () => { throw new Error("offline"); }, openImages: async () => [{ title: "church building", imageUrl: "https://example.org/a.jpg", sourceUrl: "https://example.org/a", creator: "striatic", license: "by", sourceName: "flickr" }] });
  assert.equal(found[0].license, "CC BY");
  assert.equal(creditLine(found[0]), "Picture: flickr, striatic, CC BY");
});
