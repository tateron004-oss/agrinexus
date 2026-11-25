"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const slideshow = require("../../public/kyro-slideshow.js");

// 7 November 2026: a flyer, poster or post can be made into a slideshow video, on the person's own device (no server, no paid service, no sound).

const FLYER = "BAKE SALE\n\nWhen: Saturday at 10\nWhere: the church hall\nWhat: bake sale\nCost: [the price, or free]\n\nQuestions? [name and phone number]\n\nMade by Kyro from what you said. Fill in each [bracket] and delete this line.";
const PICS = [{ n: 0, credit: "Picture: Pixabay, manfredrichter, Pixabay Content License" }, { n: 1, credit: "Picture: Pexels, Jane Doe, Pexels License" }, { n: 2, credit: "Picture: Pixabay, manfredrichter, Pixabay Content License" }];

test("a flyer becomes a title slide, a slide of its real lines, and a credits slide; the lines still to be filled in are left out", () => {
  const slides = slideshow.buildSlides({ title: "Bake Sale Flyer", text: FLYER, pictures: PICS });
  assert.deepEqual(slides.map(slide => slide.kind), ["title", "text", "credits"]);
  assert.deepEqual(slides[0].lines, ["BAKE SALE"]);
  assert.deepEqual(slides[1].lines, ["When: Saturday at 10", "Where: the church hall", "What: bake sale"]);
  assert.ok(!slides.some(slide => slide.lines.some(line => /\[|Made by Kyro|delete this line/.test(line))));
  assert.deepEqual(slides[2].lines, ["Picture: Pixabay, manfredrichter, Pixabay Content License", "Picture: Pexels, Jane Doe, Pexels License"], "each credit once");
  assert.equal(slides[0].picture.n, 0);
  assert.equal(slides[1].picture.n, 1);
  assert.equal(slides[2].picture, null);
  assert.equal(slideshow.totalSeconds(slides), 3.5 + 4 + 3.5);
});

test("with no picture the slides still work, and with no credits there is no credits slide", () => {
  const slides = slideshow.buildSlides({ title: "Bake Sale Flyer", text: FLYER, pictures: [] });
  assert.deepEqual(slides.map(slide => slide.kind), ["title", "text"]);
  assert.ok(slides.every(slide => slide.picture === null));
  const noCredit = slideshow.buildSlides({ title: "X", text: FLYER, pictures: [{ n: 0, credit: "" }] });
  assert.ok(!noCredit.some(slide => slide.kind === "credits"));
});

test("a document that starts with a 'Key: value' line uses its title as the headline; an empty document is just a title; a long one is held to eight slides", () => {
  const keyed = slideshow.buildSlides({ title: "Church Picnic", text: "When: Sunday\nWhere: the park", pictures: [] });
  assert.deepEqual(keyed[0].lines, ["Church Picnic"]);
  assert.deepEqual(keyed[1].lines, ["When: Sunday", "Where: the park"]);
  const empty = slideshow.buildSlides({ title: "Notes", text: "", pictures: [] });
  assert.deepEqual(empty.map(slide => slide.kind), ["title"]);
  const long = slideshow.buildSlides({ title: "Long", text: ["HEADLINE", ...Array.from({ length: 60 }, (_, i) => `Line number ${i}`)].join("\n"), pictures: PICS });
  assert.ok(long.length <= slideshow.MAX_SLIDES, `${long.length} slides`);
  assert.equal(long[long.length - 1].kind, "credits");
});

test("words are wrapped to the width, a word that is longer than the line stands alone, and nothing is lost", () => {
  const measure = text => text.length * 10;
  assert.deepEqual(slideshow.wrapLines(measure, "When: Saturday at 10 at the church hall", 150), ["When: Saturday", "at 10 at the", "church hall"]);
  assert.deepEqual(slideshow.wrapLines(measure, "Supercalifragilistic day", 50), ["Supercalifragilistic", "day"]);
  assert.deepEqual(slideshow.wrapLines(measure, "   ", 100), []);
});

test("mp4 is chosen where the browser can record it, then webm, and a browser that can do neither is told so", () => {
  const recorder = types => ({ isTypeSupported: type => types.includes(type) });
  assert.equal(slideshow.pickMimeType(recorder(["video/mp4", "video/webm"])), "video/mp4");
  assert.equal(slideshow.pickMimeType(recorder(["video/webm;codecs=vp9"])), "video/webm;codecs=vp9");
  assert.equal(slideshow.pickMimeType(recorder([])), "");
  assert.equal(slideshow.canMakeVideo(null), false);
  assert.equal(slideshow.canMakeVideo({ MediaRecorder: Object.assign(function () {}, { isTypeSupported: () => true }), document: { createElement: () => ({ captureStream() {} }) } }), true);
  assert.equal(slideshow.canMakeVideo({ MediaRecorder: Object.assign(function () {}, { isTypeSupported: () => false }), document: { createElement: () => ({ captureStream() {} }) } }), false);
});

test("a browser that cannot record says so in plain words instead of failing silently", async () => {
  await assert.rejects(slideshow.makeVideo({ slides: [{ kind: "title", lines: ["X"], picture: null, seconds: 1 }], windowLike: null }), /cannot make a video/);
});

test("the page has the Make a video buttons, the spoken command, and the script is loaded and cached", () => {
  const root = path.join(__dirname, "..", "..");
  const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
  const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
  const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");
  assert.match(html, /<script src="\/kyro-slideshow\.js\?v=kyro-slideshow-1"><\/script>/);
  assert.match(sw, /\/kyro-slideshow\.js\?v=kyro-slideshow-1/);
  assert.match(app, /data-kyro-doc-make-video/);
  // the spoken wording (the same expression the page uses)
  const make = app.match(/const KYRO_MAKE_VIDEO = new RegExp\(`([^`]+)`, "i"\);/);
  const not = app.match(/const KYRO_MAKE_VIDEO_NOT = (\/.+\/i);/);
  assert.ok(make && not);
  const lead = "^(?:please\\s+)?(?:(?:hey\\s+)?(?:kyro|nexus)[,.]?\\s+)?(?:(?:can|could|would|will) you\\s+)?";
  const request = new RegExp(make[1].replace("${KYRO_OPEN_LEAD}", lead).replace(/\\\\/g, "\\"), "i");
  const never = eval(not[1]);
  for (const yes of ["Make a video of it.", "Make me a slideshow video.", "Turn the flyer into a slideshow video.", "Kyro, make a short video", "Could you make a video of my poster", "Make it into a video", "Create a slideshow"]) assert.ok(request.test(yes) && !never.test(yes), yes);
  for (const no of ["Play a video about drip irrigation", "Find a video of maize farming", "Show me videos about cassava", "Make a flyer for my bake sale", "How to make a video", "Add a picture of bread to the flyer"]) assert.ok(!(request.test(no) && !never.test(no)), no);
});
