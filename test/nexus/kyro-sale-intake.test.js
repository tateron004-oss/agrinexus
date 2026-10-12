"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Forms = require("../../public/kyro-intake-forms.js");
const Intake = require("../../public/kyro-voice-intake.js");

// "I want to sell 50 bags of maize" used to open the Trade form, or ask the person to say yes to their own sentence (and the yes then went somewhere unrelated). Now Kyro asks only for what is missing, reads it back, and posts
// it to the community board after a yes -- by voice or typed. Nothing is bought, paid or delivered from here.

const root = path.join(__dirname, "../..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");

test("what counts as a request to sell, and what does not", () => {
  for (const text of ["I want to sell 50 bags of maize", "I want to sell maize", "Sell my beans", "I have 200 kg of tomatoes to sell", "Hey Kyro, I want to sell my cassava", "help me sell 5 goats at 8000 each", "put my potatoes up for sale",
    "I am selling 30 sacks of beans in Kisumu", "nataka kuuza mahindi", "list my 20 crates of eggs for sale", "I'd like to sell some onions"]) assert.equal(Forms.isSaleRequest(text), true, text);
  for (const text of ["how do I sell my maize", "where can I sell my maize", "I sold 50 bags of maize", "what is for sale", "cancel my listing", "what is the price of maize", "who buys maize", "post for sale: 50 bags of maize at 3000 per bag", "find a clinic near me", ""]) assert.equal(Forms.isSaleRequest(text), false, text);
});

test("what the first sentence already said is picked up, and turned into the board's own listing sentence", () => {
  const cases = {
    "I want to sell 50 bags of maize": [{ quantity: "50 bags", product: "maize" }, "Post for sale: 50 bags of maize"],
    "I have 200 kg of tomatoes to sell": [{ quantity: "200 kg", product: "tomatoes" }, "Post for sale: 200 kg of tomatoes"],
    "I want to sell 50 bags of maize at 3000 per bag in Nakuru": [{ price: "3000 per bag", location: "Nakuru", quantity: "50 bags", product: "maize" }, "Post for sale: 50 bags of maize at 3000 per bag in Nakuru"],
    "help me sell 5 goats at 8000 each": [{ price: "8000 each", quantity: "5", product: "goats" }, "Post for sale: 5 goats at 8000 each"],
    "put my potatoes up for sale": [{ product: "potatoes" }, "Post for sale: potatoes"],
    "nataka kuuza mahindi": [{ product: "mahindi" }, "Post for sale: mahindi"]
  };
  for (const [text, [parsed, command]] of Object.entries(cases)) {
    const got = Forms.parseSale(text);
    assert.deepEqual({ ...got }, parsed, text); assert.equal(Forms.sale.toCommand(got), command, text);
  }
  // a price said as a bare number takes the unit of the amount
  assert.equal(Forms.sale.toCommand({ product: "maize", quantity: "50 bags", price: "3000" }), "Post for sale: 50 bags of maize at 3000 per bag");
  assert.equal(Forms.sale.toCommand({ product: "beans", quantity: "200 kilograms", price: "120" }), "Post for sale: 200 kilograms of beans at 120 per kg");
});

test("the interview asks only for what is missing, reads it back, and posts only after a yes", () => {
  const first = Forms.parseSale("I want to sell 50 bags of maize");
  const engine = Intake.create(Forms.sale, { seedUtterance: { id: "", text: "I want to sell 50 bags of maize" }, language: "en", initialValues: first });
  const start = engine.start();
  assert.equal(start.action, "ask"); assert.equal(start.say, "What price do you want? For example: 3000 per bag.", "the product and the amount are not asked again");
  const where = engine.handleUtterance("3000 per bag", { utteranceId: "u1", source: "voice" });
  assert.equal(where.action, "ask"); assert.match(where.say, /Where is it\? Say a town, or say 'skip'\./);
  const confirm = engine.handleUtterance("skip", { utteranceId: "u2", source: "voice" });
  assert.equal(confirm.action, "confirm");
  assert.match(confirm.say, /I will post this for sale: 50 bags of maize at 3000 per bag\. Everyone in your community can see it, never your phone number\. Shall I post it\? Say yes, or tell me which part to change\./);
  assert.doesNotMatch(confirm.say, /résumé|make it now/i);
  const done = engine.handleUtterance("yes", { utteranceId: "u3", source: "voice" });
  assert.equal(done.action, "submit");
  assert.equal(Forms.sale.toCommand(done.values), "Post for sale: 50 bags of maize at 3000 per bag");
});

test("a change before the yes is taken, everything said at once skips the questions, and a bare 'I want to sell' asks for it all", () => {
  const all = Forms.parseSale("I want to sell 50 bags of maize at 3000 per bag in Nakuru");
  const engine = Intake.create(Forms.sale, { language: "en", initialValues: all });
  const start = engine.start();
  assert.equal(start.action, "confirm", "nothing missing: straight to the read-back");
  assert.match(start.say, /50 bags of maize at 3000 per bag in Nakuru/);
  const none = Intake.create(Forms.sale, { language: "en", initialValues: Forms.parseSale("I want to sell") });
  assert.equal(none.start().say, "What are you selling?");
  assert.equal(none.handleUtterance("maize", { utteranceId: "a", source: "voice" }).say.includes("How much do you have?"), true);
  const kiswahili = Intake.create(Forms.sale, { language: "sw", initialValues: {} });
  assert.equal(kiswahili.start().say, "Unauza nini?");
});

test("it is wired: spoken and typed requests start it, the tool-call and workspace guards leave the sentence to it, and it posts through the voice tool route", () => {
  assert.match(app, /if \(window\.KyroIntakeForms\?\.isSaleRequest\?\.\(trimmed\)\) \{\s*startKyroSaleIntake\(\{ seedUtterance: \{ id: utteranceId, text: trimmed \}, source \}\);\s*return true;/);
  assert.match(app, /if \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isSaleRequest\?\.\(text\)\) \{\s*startKyroSaleIntake\(\{ seedUtterance: \{ id: "", text \}, source: options\.source \|\| "typed" \}\);\s*return true;/);
  assert.match(app, /window\.KyroIntakeForms\?\.isResumeBuildRequest\?\.\(command\) \|\| window\.KyroIntakeForms\?\.isSaleRequest\?\.\(command\)/);
  assert.match(app, /&& !window\.KyroIntakeForms\?\.isSaleRequest\?\.\(command\); \/\/ "I want to sell 50 bags of maize" is the short interview/);
  assert.match(app, /KyroVoiceIntake\.create\(definition, \{ seedUtterance: options\.seedUtterance, language: languageCode\(\), initialValues: options\.initialValues \}\)/);
  const submit = app.slice(app.indexOf("async function submitKyroSaleIntake"), app.indexOf("// ---- Answer-first (the Jarvis way)"));
  assert.match(submit, /kyroFetchWithTimeout\("\/api\/voice\/realtime\/tool"/); assert.match(submit, /name: "nexus_everyday_records"/);
  assert.match(submit, /if \(response\.ok && \/\^Posted\\b\/i\.test\(said\)\) \{\s*kyroShowResultScreen\("nexus_everyday_records", command, result\);/, "only 'Posted.' counts as posted, and it is shown as the answer");
  assert.match(submit, /if \(\/price\/i\.test\(said\)\) return \{ ok: false, fieldKey: "price", say: said \};/, "a missing price is asked again");
  assert.match(app, /if \(id === "sale" \|\| \(!kyroActiveVoiceIntake && forms\?\.isSaleRequest\?\.\(command\)\)\) return "Kyro is already asking the person about what they want to sell/);
});
