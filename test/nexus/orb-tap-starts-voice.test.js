"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const css = fs.readFileSync(path.join(__dirname, "../../public/styles.css"), "utf8");
const html = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
const from = app.indexOf("function nexusHomeOrbTapStartsVoice(");
const to = app.indexOf("installNexusHomeOrbTap();", from) + "installNexusHomeOrbTap();".length;
assert.ok(from > 0 && to > from, "the orb tap code must stay extractable");

// A tiny page: a body with a mode, a hidden mic button, and an orb at a known rectangle.
function load({ mode = "home", userMode = true, disabled = false } = {}) {
  const classes = new Set(userMode ? ["user-mode"] : []);
  const listeners = [];
  const button = { disabled, clicks: 0, click() { this.clicks += 1; } };
  const orb = { getBoundingClientRect: () => ({ left: 100, top: 100, right: 300, bottom: 300 }) };
  const document = {
    body: { dataset: { nexusGenesisMode: mode }, classList: { contains: name => classes.has(name), toggle: (name, on) => { on ? classes.add(name) : classes.delete(name); } } },
    querySelector: selector => (selector === '[data-nexus-genesis-home-orb="true"]' ? orb : null),
    addEventListener: (type, fn) => listeners.push({ type, fn })
  };
  const sandbox = { document, nexusPermanentMicrophoneElements: () => ({ button }) };
  vm.createContext(sandbox);
  vm.runInContext(app.slice(from, to), sandbox);
  const fire = (type, event) => listeners.filter(item => item.type === type).forEach(item => item.fn(event));
  const tap = (x, y, extra = {}) => fire("click", { isTrusted: true, clientX: x, clientY: y, target: { closest: () => null }, ...extra });
  return { button, classes, listeners, tap, fire };
}

test("tapping the orb does what the mic pill does; tapping anywhere else does not", () => {
  const page = load();
  page.tap(200, 200);
  assert.equal(page.button.clicks, 1, "a tap on the orb activates the mic control once");
  page.tap(50, 50); page.tap(400, 200); page.tap(200, 350);
  assert.equal(page.button.clicks, 1, "taps outside the orb never start voice");
});

test("only real taps on the orb count, never on controls, and never off the audio-only home", () => {
  const page = load();
  page.tap(200, 200, { isTrusted: false });
  assert.equal(page.button.clicks, 0, "script-generated clicks (including the button's own) are ignored");
  for (const selector of ["#nexusPermanentMicrophoneDock", "a", "button", "input", "textarea", "select", "label"])
    page.tap(200, 200, { target: { closest: probe => (probe.includes(selector) ? {} : null) } });
  assert.equal(page.button.clicks, 0, "a tap that lands on a control is that control's, not the orb's");
  for (const other of [load({ mode: "workspace" }), load({ disabled: true })]) { other.tap(200, 200); assert.equal(other.button.clicks, 0); }
});

test("the orb works as a tap-to-talk control in every experience mode, not only through the 'User' persona toggle", () => {
  // Explicit fix (2026-09-23): the orb previously only responded to taps
  // when body carried the "user-mode" class, so Admin/Investor/Workspace
  // accounts could never use it even after .user-workspace's display:none
  // override for those modes was removed. Only the "home" screen-state
  // check (already covered by the "workspace" mode case above) should gate
  // this, not which persona toggle is active.
  const nonUserMode = load({ userMode: false });
  nonUserMode.tap(200, 200);
  assert.equal(nonUserMode.button.clicks, 1, "a tap on the orb must start voice regardless of the user-mode class");
});

test("the pointer cursor follows the orb and the page is only touched when that changes", () => {
  const page = load();
  let toggles = 0; const original = page.classes.add.bind(page.classes); page.classes.add = name => { toggles += 1; return original(name); };
  page.fire("mousemove", { clientX: 200, clientY: 200 });
  assert.ok(page.classes.has("nexus-orb-hover")); assert.equal(toggles, 1);
  page.fire("mousemove", { clientX: 210, clientY: 210 }); page.fire("mousemove", { clientX: 220, clientY: 220 });
  assert.equal(toggles, 1, "moving within the orb writes nothing");
  page.fire("mousemove", { clientX: 10, clientY: 10 });
  assert.ok(!page.classes.has("nexus-orb-hover"));
  const off = load({ mode: "workspace" }); off.fire("mousemove", { clientX: 200, clientY: 200 });
  assert.ok(!off.classes.has("nexus-orb-hover"), "no pointer cursor away from the home");
});

test("the mic dock is visually hidden on the audio-only home only, and stays reachable", () => {
  const rule = css.match(/body\.user-mode\[data-nexus-genesis-mode="home"\]\s+#nexusPermanentMicrophoneDock:not\(:focus-within\)\s*\{[^}]*\}/);
  assert.ok(rule, "a home-scoped rule for the dock exists");
  assert.match(rule[0], /clip:\s*rect\(0, 0, 0, 0\)/); assert.match(rule[0], /width:\s*1px/); assert.match(rule[0], /height:\s*1px/);
  assert.doesNotMatch(rule[0], /display:\s*none/, "display:none would remove it from keyboard and screen-reader users");
  assert.doesNotMatch(rule[0], /visibility:\s*hidden/);
  assert.match(rule[0], /:not\(:focus-within\)/, "it reappears when a keyboard user focuses it");
  const unscoped = (css.match(/[^{}]*#nexusPermanentMicrophoneDock[^{}]*\{[^}]*(clip|display:\s*none)[^}]*\}/g) || []).filter(text => !/data-nexus-genesis-mode="home"/.test(text));
  assert.deepEqual(unscoped, [], "no rule hides the dock outside the home");
  assert.match(css, /body\.user-mode\[data-nexus-genesis-mode="home"\]\.nexus-orb-hover\s*\{\s*cursor:\s*pointer;/);
});

test("the mic button and its live status stay in the page, so voice and screen readers still work", () => {
  assert.match(html, /<button id="nexusPermanentMicrophoneBtn"[^>]*data-nexus-permanent-microphone-control="true"/);
  assert.match(html, /id="nexusPermanentMicrophoneStatus"[^>]*role="status" aria-live="polite"/);
  assert.match(app, /button\.addEventListener\("click", handleNexusPermanentMicrophoneClick, true\)/, "the same handler still serves the button");
});
