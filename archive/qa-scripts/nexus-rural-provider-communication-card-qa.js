const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const source = fs.readFileSync("public/browser-action-controller.js", "utf8");
const created = [];
const listeners = {};
const body = {
  appendChild(node) { created.push(node); return node; }
};
function element(tagName) {
  return {
    tagName,
    dataset: {},
    style: {},
    children: [],
    appendChild(child) { this.children.push(child); return child; },
    addEventListener(name, callback) { this.listeners = { ...(this.listeners || {}), [name]: callback }; },
    querySelector() { return { focus() {} }; },
    setAttribute() {},
    remove() { this.removed = true; },
    click() {}
  };
}
const document = {
  body,
  head: { appendChild(node) { created.push(node); return node; } },
  documentElement: { lang: "en" },
  createElement: element,
  getElementById() { return null; },
  querySelector() { return null; },
  addEventListener(name, callback) { listeners[name] = callback; }
};
const storage = new Map();
const window = {
  document,
  localStorage: {
    getItem(key) { return storage.get(key) || null; },
    setItem(key, value) { storage.set(key, value); }
  },
  navigator: {},
  CustomEvent: function CustomEvent(name, options) { this.type = name; this.detail = options?.detail; },
  dispatchEvent() {},
  setTimeout,
  URL,
  Blob
};
window.window = window;

vm.runInNewContext(source, { window, document, URL, Blob, Date, Map, setTimeout, console });
const controller = window.NexusBrowserActionController;

assert.equal(controller.isRuralProviderCardRequest("Nexus, list the questions I should ask my pharmacist."), true);
assert.equal(controller.isRuralProviderCardRequest("Nexus, prepare questions for my physician."), true);
assert.equal(controller.isRuralProviderCardRequest("Explain medication safety."), false);

const result = controller.handleFinalUserTranscript({
  transcript: "Nexus, show questions for my pharmacist. I take metformin. My blood pressure is 140 over 90.",
  transcriptId: "provider-1",
  sessionId: "session-1",
  role: "user",
  isFinal: true
}, () => null);

assert.equal(result.handled, true);
assert.equal(result.providerCardOpened, true);
assert.match(created.at(-1).innerHTML, /Questions for My Pharmacist/);
assert.match(created.at(-1).innerHTML, /Blood pressure: 140\/90/);
assert.match(created.at(-1).innerHTML, /What is this medicine for/);
assert.ok(storage.get("nexus.rural-provider-cards.v1"));

const duplicate = controller.handleFinalUserTranscript({
  transcript: "Nexus, show questions for my pharmacist. I take metformin. My blood pressure is 140 over 90.",
  transcriptId: "provider-1",
  sessionId: "session-1",
  role: "user",
  isFinal: true
}, () => null);
assert.equal(duplicate.duplicate, true);

assert.match(source, /Print \/ Save PDF/);
assert.match(source, /Share with consent/);
assert.match(source, /Read aloud/);
assert.match(source, /nexus\.rural-provider-cards\.v1/);
assert.match(source, /providerContacted: false/);
assert.match(source, /diagnosisMade: false/);
assert.match(source, /medicationChanged: false/);

console.log("Nexus rural provider communication card QA passed.");
