"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const KyroResultScreen = require("../../public/kyro-result-screen.js");

// Seen by eye on the live site (28 October 2026): "What should I pack for Kenya?" came back from the server as fifteen lines, "- Passport or ID", "- Travel tickets ...", and the card joined them into one paragraph:
// "- Passport or ID - Travel tickets and copies of key documents - Phone and charger ...". A reply written one item per line is now drawn as a list, one item to a line.
const PACK = ["- Passport or ID", "- Travel tickets and copies of key documents", "- Phone and charger", "- Some cash and a card", "- Light clothes for warm days", "- Comfortable walking shoes", "- Rain jacket or small umbrella",
  "- Sunscreen and a hat", "- Insect repellent", "- Basic toiletries", "- Any personal medicines in original containers", "- Reusable water bottle", "- Small day bag", "- Power adapter if needed", "", "Check the weather and any rules for the places you’re going."].join("\n");
const model = (response, extra = {}) => KyroResultScreen.buildModel({ ok: true, status: "completed", response, ...extra }, { command: "what should I pack for kenya", lang: "en" });

test("a reply written one item per line is a list with one item to a line, and its closing sentence is a note", () => {
  const built = model(PACK);
  assert.equal(built.kind, "list");
  assert.equal(built.items.length, 14);
  assert.equal(built.items[0].name, "Passport or ID");
  assert.equal(built.items[13].name, "Power adapter if needed");
  assert.deepEqual([...built.notes], ["Check the weather and any rules for the places you’re going."]);
  assert.equal(built.title, "Your list");
  assert.equal(built.headline, "");
});

test("a first line that is not an item is the title; bullets with a dot or a star count; Kiswahili gets its own default title", () => {
  const titled = model("Things to bring\n• Water\n• A hat\n* Sunscreen\n* Shoes");
  assert.equal(titled.title, "Things to bring");
  assert.deepEqual(titled.items.map(item => item.name), ["Water", "A hat", "Sunscreen", "Shoes"]);
  assert.equal(KyroResultScreen.buildModel({ ok: true, status: "completed", response: "- Maji\n- Kofia\n- Viatu" }, { command: "x", lang: "sw" }).title, "Orodha");
});

test("at most twenty items are drawn", () => {
  const many = Array.from({ length: 30 }, (_, i) => `- Item ${i + 1}`).join("\n");
  assert.equal(model(many).items.length, 20);
});

test("two bullets, or prose that happens to contain a dash, are not turned into a list", () => {
  assert.notEqual(model("- One thing\n- Another thing").kind, "list");
  assert.notEqual(model("Take the bus - it is cheaper.\nThen walk to the market - it is close.\nAsk for Amina.").kind, "list");
  assert.equal(model("I found 3 things: a; b; c.").kind, "list");
});

test("the screen draws one list item per line", () => {
  const { JSDOM } = (() => { try { return require("jsdom"); } catch { return {}; } })();
  if (!JSDOM) return;
  const dom = new JSDOM("<!doctype html><html><head></head><body></body></html>");
  KyroResultScreen.show(dom.window.document, model(PACK), {}, "en");
  const items = [...dom.window.document.querySelectorAll("[data-kyro-result] li")].map(li => li.textContent);
  assert.equal(items.length, 14);
  assert.equal(items[0], "Passport or ID");
});
