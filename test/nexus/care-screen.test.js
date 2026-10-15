"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// The medicines, the daily check-in, the trusted circle and the sleep and water log had no screen and no help line: a person had to guess the sentence. The Care and wellness screen has a button or a form for each, and each sends a sentence
// the real feature reads (checked here against the real readers).
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const med = require("../../nexus/companion/medications.js");
const checkins = require("../../nexus/companion/checkins.js");
const circle = require("../../nexus/companion/circle.js");
const wellness = require("../../nexus/wellness/log.js");

test("every button and form on the Care and wellness screen sends a sentence its feature reads", () => {
  assert.equal(med.readMedicationRequest("Show my medicines")?.action, "list");
  assert.equal(checkins.parseCheckinControl("Check in on me every day at 8 am")?.action, "enable");
  assert.equal(checkins.parseCheckinControl("Stop checking in on me")?.action, "stop");
  assert.equal(circle.readCircleRequest("Who is in my circle")?.action, "list");
  assert.equal(circle.readCircleRequest("Add amina@example.com to my circle")?.action, "invite");
  assert.equal(wellness.readRequest("I slept 7 hours", "2026-10-15")?.metric, "sleep");
  assert.equal(wellness.readRequest("I drank 4 glasses of water", "2026-10-15")?.metric, "water");
  assert.equal(wellness.readRequest("Show my wellness log", "2026-10-15")?.action, "show");
  const start = app.indexOf("  care: { title: \"Care and wellness\"");
  const block = app.slice(start, app.indexOf("  agriculture: { title:", start));
  for (const command of ["\"Show my medicines\"", "\"Check in on me every day at \" + f.time", "\"Stop checking in on me\"", "\"Who is in my circle\"", "\"Add \" + f.who + \" to my circle\"", "\"I slept \" + f.hours + \" hours\"", "\"I drank \" + f.glasses + \" glasses of water\"", "\"Show my wellness log\""]) assert.ok(block.includes(command), command);
});

test("the Health screen has a way in to it, and 'open wellness' opens it", () => {
  assert.match(app, /\{ kind: "button", label: "More care and wellness", special: "care" \}/);
  assert.match(app, /if \(special === "care"\) \{ kyroShowAppScreen\("care"\); return; \}/);
  const sliceConst = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf(";\n", start) + 2); };
  const w = new vm.Script(sliceConst("const KYRO_OPEN_LEAD") + sliceConst("const KYRO_OPEN_APP") + "KYRO_OPEN_APP").runInNewContext({});
  for (const said of ["Open wellness.", "Open the care and wellness screen", "Show me self care", "Open my wellness section"]) { const match = w.exec(said); assert.ok(match && match[16], said); }
  for (const said of ["Open the weather", "Open health"]) assert.ok(!(w.exec(said) || [])[16], said);
  assert.match(app, /openApp\[15\] \? "trade" : openApp\[16\] \? "care" : ""/);
});
