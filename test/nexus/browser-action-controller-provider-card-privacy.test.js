"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "../../public/browser-action-controller.js"), "utf8");

// Found live (design decision resolved with the user): saveProviderCardOffline() persists real PHI
// (symptoms, medications, allergies, readings the person just typed or said, via extractProviderCardFacts)
// to localStorage with no expiry and no notion of which account is using the browser -- so on a shared
// or community device, one person's saved health facts mixed into the next person's saved-card list, and
// nothing ever expired. Fixed with per-account storage scoping (app.js tells the controller who's
// currently signed in via setCurrentAccountKey()), a 30-day retention window, and an explicit
// "clear saved cards" action.

function fakeLocalStorage() {
  const store = new Map();
  return {
    getItem: key => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => { store.set(key, String(value)); },
    removeItem: key => { store.delete(key); }
  };
}

function fakeDocument() {
  const fakeElement = () => ({
    style: {}, dataset: {},
    classList: { add() {}, remove() {} },
    setAttribute() {}, addEventListener() {}, appendChild() {},
    querySelector() { return null; },
    focus() {}, remove() {},
    set innerHTML(_value) {}, set id(_value) {}, set className(_value) {}, set textContent(_value) {}
  });
  return {
    body: { appendChild() {} },
    head: { appendChild() {} },
    documentElement: { lang: "en" },
    getElementById() { return null; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    createElement() { return fakeElement(); },
    addEventListener() {}
  };
}

function loadController(localStorage) {
  const windowObj = { addEventListener: () => {}, dispatchEvent: () => {}, CustomEvent: function CustomEvent() {}, localStorage };
  const sandbox = { window: windowObj, document: fakeDocument() };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return sandbox.window.NexusBrowserActionController;
}

test("provider-card storage is scoped per account, not shared across the whole browser", () => {
  const localStorage = fakeLocalStorage();
  const controller = loadController(localStorage);

  controller.setCurrentAccountKey("farmer-a");
  localStorage.setItem("nexus.rural-provider-cards.v1:farmer-a", JSON.stringify([{ id: "card-a", createdAt: new Date().toISOString() }]));

  controller.setCurrentAccountKey("farmer-b");
  localStorage.setItem("nexus.rural-provider-cards.v1:farmer-b", JSON.stringify([{ id: "card-b", createdAt: new Date().toISOString() }]));

  // Clearing while scoped to farmer-b must only ever touch farmer-b's own key.
  controller.clearSavedProviderCards();
  assert.equal(localStorage.getItem("nexus.rural-provider-cards.v1:farmer-b"), null);
  assert.ok(localStorage.getItem("nexus.rural-provider-cards.v1:farmer-a"), "a different account's saved cards on the same shared device must be untouched");
});

test("with no account known yet, storage falls back to the plain (unscoped) key", () => {
  const localStorage = fakeLocalStorage();
  const controller = loadController(localStorage);
  localStorage.setItem("nexus.rural-provider-cards.v1", JSON.stringify([{ id: "guest-card", createdAt: new Date().toISOString() }]));
  controller.clearSavedProviderCards();
  assert.equal(localStorage.getItem("nexus.rural-provider-cards.v1"), null);
});

test("saved provider cards older than the 30-day retention window are purged, not kept forever", () => {
  const localStorage = fakeLocalStorage();
  const controller = loadController(localStorage);
  controller.setCurrentAccountKey("farmer-a");
  const staleDate = new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString();
  localStorage.setItem("nexus.rural-provider-cards.v1:farmer-a", JSON.stringify([{ id: "old-card", createdAt: staleDate }]));

  const result = controller.openRuralProviderCard("What questions should I ask my doctor about my symptoms?", { force: true });
  assert.equal(result.opened, true);

  const saved = JSON.parse(localStorage.getItem("nexus.rural-provider-cards.v1:farmer-a"));
  assert.equal(saved.some(entry => entry.id === "old-card"), false, "an entry older than the 30-day retention window must be purged");
  assert.equal(saved.length, 1, "only the newly-created card should remain");
});
