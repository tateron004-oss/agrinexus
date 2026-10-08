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

test("only the orb-only home is 100vw wide; the mission/conversation card fits its padded parent", () => {
  const block = rule('body.user-mode .nexus-true-experience-root:not([data-nexus-true-experience-mode="home"])');
  assert.match(block, /width:\s*100%\s*!important/);
  assert.match(block, /max-width:\s*100%\s*!important/);
  // The fixed full-screen home keeps its own 100vw rule.
  assert.match(rule('body.user-mode .nexus-true-experience-root[data-nexus-true-experience-mode="home"]'), /width:\s*100vw/);
});
