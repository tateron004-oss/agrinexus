"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const images = require("./helpers/test-images.js");
const draw = require("../../server/providers/picture-draw.js");
const pictures = require("../../nexus/documents/pictures.js");

// 7 November 2026: a picture can be DRAWN (Cloudflare Workers AI, FLUX.1 schnell) when the person asks for an illustration or a drawing. It is labelled as drawn by a computer, kept within a daily allowance, and never of real people or of harmful things.

const ENV = { CLOUDFLARE_ACCOUNT_ID: "0123456789abcdef0123456789abcdef", CLOUDFLARE_API_TOKEN: "cf-token_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123" };
const jpeg = images.sunrise(640, 360);
const answering = (seen = [], wrapped = true) => async (url, init) => { seen.push({ url: String(url), init }); const image = jpeg.toString("base64"); return { ok: true, status: 200, json: async () => (wrapped ? { result: { image }, success: true, errors: [], messages: [] } : { image }) }; };
let person = 0; const newPerson = () => `drawer-${person += 1}`;

test("the drawing is asked of Cloudflare with the server's token in a header only, the words wrapped as an illustration with no text, and the answer is a labelled picture", async () => {
  const seen = [];
  const out = await draw.drawPicture("fresh bread on a table", { env: ENV, userId: newPerson(), fetchFn: answering(seen) });
  assert.equal(seen.length, 1);
  assert.equal(seen[0].url, "https://api.cloudflare.com/client/v4/accounts/0123456789abcdef0123456789abcdef/ai/run/@cf/black-forest-labs/flux-1-schnell");
  assert.equal(seen[0].init.headers.authorization, `Bearer ${ENV.CLOUDFLARE_API_TOKEN}`);
  assert.doesNotMatch(seen[0].url + String(seen[0].init.body), new RegExp(ENV.CLOUDFLARE_API_TOKEN));
  const body = JSON.parse(seen[0].init.body);
  assert.equal(body.steps, 4);
  assert.match(body.prompt, /illustration/); assert.match(body.prompt, /no text/); assert.match(body.prompt, /fresh bread on a table/);
  assert.equal(out.mime, "image/jpeg");
  assert.match(out.credit, /drawn by a computer.*not a photograph/);
  assert.ok((await draw.drawPicture("a tractor", { env: ENV, userId: newPerson(), fetchFn: answering([], false) })).buffer.length > 0, "an answer without the wrapper is read too");
});

test("without the account number and the token nothing is asked, and the person is told", async () => {
  let asked = 0;
  await assert.rejects(draw.drawPicture("fresh bread", { env: {}, userId: newPerson(), fetchFn: async () => { asked += 1; } }), error => error.code === "draw_unavailable" && /cannot draw pictures yet/.test(error.message));
  assert.equal(asked, 0);
  assert.equal(draw.drawingConfigured({ CLOUDFLARE_ACCOUNT_ID: "short", CLOUDFLARE_API_TOKEN: ENV.CLOUDFLARE_API_TOKEN }), false);
});

test("harmful words and real people's names are refused before anything is asked or counted", async () => {
  let asked = 0; const fetchFn = async () => { asked += 1; return answering()(); };
  for (const words of ["a gun on a table", "naked people", "blood and gore", "the president waving"]) {
    await assert.rejects(draw.drawPicture(words, { env: ENV, userId: newPerson(), fetchFn }), error => /draw_refused|draw_person/.test(error.code), words);
  }
  assert.equal(asked, 0);
});

test("one person draws ten pictures a day, and a bad answer from the service is never put in a document", async () => {
  const who = newPerson(); const fetchFn = answering();
  for (let i = 0; i < draw.PER_PERSON_PER_DAY; i += 1) await draw.drawPicture(`bread ${i}`, { env: ENV, userId: who, fetchFn });
  await assert.rejects(draw.drawPicture("one more", { env: ENV, userId: who, fetchFn }), error => error.code === "draw_person_limit");
  const notAPicture = async () => ({ ok: true, status: 200, json: async () => ({ result: { image: Buffer.from("not a picture at all, just words").toString("base64") } }) });
  await assert.rejects(draw.drawPicture("bread", { env: ENV, userId: newPerson(), fetchFn: notAPicture }), error => error.code === "draw_error");
  const busy = async () => ({ ok: false, status: 429, json: async () => ({}) });
  await assert.rejects(draw.drawPicture("bread", { env: ENV, userId: newPerson(), fetchFn: busy }), error => error.code === "draw_busy");
});

test("'with an illustration of ...' and 'add a drawing of ...' ask for a drawn picture; 'a picture of ...' is still looked for on the web", () => {
  const ask = text => pictures.extractPictureRequest(text);
  assert.deepEqual(ask("Make me a flyer for my bake sale on Saturday with an illustration of fresh bread").specs, [{ source: "draw", query: "fresh bread" }]);
  assert.equal(ask("Make me a flyer for my bake sale on Saturday with an illustration of fresh bread").text, "Make me a flyer for my bake sale on Saturday");
  assert.deepEqual(ask("Make a poster for the clean-up with a drawn picture of a broom").specs, [{ source: "draw", query: "a broom" }]);
  assert.deepEqual(ask("Make a flyer with an AI picture of a market, and my logo").specs.map(spec => spec.source), ["draw", "upload"]);
  assert.deepEqual(ask("Make a flyer for the bake sale with a picture of fresh bread").specs, [{ source: "search", query: "fresh bread" }]);
  assert.deepEqual(pictures.addPictureRequest("Add a drawing of a tractor to the flyer")?.specs, [{ source: "draw", query: "a tractor" }]);
});

test("a drawn picture goes into the document with its credit and a plain note, and the web-picture ownership note is not shown for it; when drawing fails the person is told and the document is still made", async () => {
  const ok = await pictures.resolvePictures({ specs: [{ source: "draw", query: "fresh bread" }], env: ENV, context: { userId: newPerson() }, deps: { drawPicture: (q, o) => draw.drawPicture(q, { ...o, fetchFn: answering() }) } });
  assert.equal(ok.pictures.length, 1);
  assert.equal(ok.pictures[0].source, "draw");
  assert.match(ok.pictures[0].credit, /not a photograph/);
  assert.ok(ok.notes.some(note => /made by a computer from your words/.test(note)));
  assert.ok(!ok.notes.some(note => /belong to their owners/.test(note)));
  const none = await pictures.resolvePictures({ specs: [{ source: "draw", query: "fresh bread" }], env: {}, context: { userId: newPerson() }, deps: {} });
  assert.equal(none.pictures.length, 0);
  assert.ok(none.notes.some(note => /cannot draw pictures yet/.test(note)));
});
