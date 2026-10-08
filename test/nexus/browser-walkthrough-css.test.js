"use strict";
// Found by walking the real app in a browser (phone width): two stylesheet mistakes.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const css = fs.readFileSync(path.join(__dirname, "../../public/styles.css"), "utf8");

function rule(selector) {
  const at = css.indexOf(`${selector} {`);
  assert.ok(at >= 0, `rule ${selector} must exist`);
  return css.slice(at, css.indexOf("}", at));
}

test("the sign-in hero paragraph sets its own light colour (the global p rule used to paint it slate grey)", () => {
  assert.match(rule(".login-hero p"), /color:\s*rgba\(255,\s*255,\s*255/);
});

test("the function-window backdrop sits above the command-centre hero (z-index 125) so the two are not drawn on top of each other", () => {
  const hero = css.match(/body\.user-mode \.nexus-command-center-hero,[^{]*\{[^}]*z-index:\s*(\d+)/);
  const backdrop = rule("body.user-mode .nexus-workflow-modal-backdrop").match(/z-index:\s*(\d+)/);
  assert.ok(hero && backdrop);
  assert.ok(Number(backdrop[1]) > Number(hero[1]), "the window backdrop must out-rank the hero");
});

test("the minimized-window dock (with its Restore button) sits above the hero so it can be clicked", () => {
  const hero = Number(css.match(/body\.user-mode \.nexus-command-center-hero,[^{]*\{[^}]*z-index:\s*(\d+)/)[1]);
  const dock = Number(rule("body.user-mode .nexus-function-window-dock").match(/z-index:\s*(\d+)/)[1]);
  assert.ok(dock > hero);
});

test("the 'Close menu' button is hidden by default and only shown inside the open phone-width settings menu", () => {
  assert.match(rule(".top-settings-close"), /display:\s*none/);
  assert.match(css, /\.top-actions\.open \.top-settings-close \{ display: block; \}/);
});

test("only the orb-only home is 100vw wide; the mission/conversation card fits its padded parent", () => {
  const block = rule('body.user-mode .nexus-true-experience-root:not([data-nexus-true-experience-mode="home"])');
  assert.match(block, /width:\s*100%\s*!important/);
  assert.match(block, /max-width:\s*100%\s*!important/);
  // The fixed full-screen home keeps its own 100vw rule.
  assert.match(rule('body.user-mode .nexus-true-experience-root[data-nexus-true-experience-mode="home"]'), /width:\s*100vw/);
});
