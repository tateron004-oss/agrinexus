"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

// Found live (fresh-module frontend audit): several innerHTML-building renderers interpolated
// translateText(value) directly with no escapeHtml() wrapper, unlike the established correct pattern used
// throughout the rest of this file (row(), taskItem(), renderNotificationPanel()). translateText() does not
// escape HTML -- for the default "en" locale it returns the value completely unmodified -- so any of these
// sinks fed with attacker-controlled text renders as live markup. Two concrete, verified-live paths:
// (1) the Admin Users panel renders user.name, which POST /api/auth/guest-session lets ANY unauthenticated
// visitor set verbatim (only whitespace-collapsed and length-capped, never escaped) as their guest display
// name; (2) the Agent Center "What I heard" panel renders a person's own literal typed/spoken command text,
// stored unsanitized in a single shared db.profile.agentCommands blob every account (including guests, via
// permissionsForRole's "ai" grant) feeds into and every viewer (including Admin) sees. Both are genuine
// cross-account/unauthenticated-to-admin stored XSS.

function extractFunction(name, nextMarker) {
  const start = appSource.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate ${name} in app.js`);
  const end = appSource.indexOf(nextMarker, start);
  assert.ok(end > start, `could not find the end marker for ${name} in app.js`);
  return appSource.slice(start, end);
}

function fakeDom(selector) {
  const elements = {};
  return {
    $(sel) { return elements[sel] || (elements[sel] = { innerHTML: "" }); },
    get(sel) { return elements[sel]; }
  };
}

const escapeHtmlImpl = value => String(value ?? "").replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
}[character]));

test("renderWorkspace escapes panel title/summary/eyebrow/metric, not just translateText()", () => {
  const source = extractFunction("renderWorkspace", "\nfunction simpleHomeActions(");
  const dom = fakeDom();
  const sandbox = { $: dom.$, translateText: value => value, escapeHtml: escapeHtmlImpl };
  vm.createContext(sandbox);
  vm.runInContext(source + "\nthis.run = renderWorkspace;", sandbox);
  sandbox.run("#testWorkspace", [{
    eyebrow: "<img src=x onerror=alert(1)>",
    metric: "safe metric",
    title: "<script>alert(2)</script>",
    summary: "safe summary",
    items: []
  }]);
  const html = dom.get("#testWorkspace").innerHTML;
  assert.doesNotMatch(html, /<img src=x onerror=alert\(1\)>/, "eyebrow must be escaped, not rendered as a live element");
  assert.doesNotMatch(html, /<script>alert\(2\)<\/script>/, "title must be escaped, not rendered as a live script tag");
  assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/);
  assert.match(html, /&lt;script&gt;alert\(2\)&lt;\/script&gt;/);
});

test("missionStepHtml escapes module/action/result/status, not just translateText()", () => {
  const source = extractFunction("missionStepHtml", "\nfunction renderMissionDashboard(");
  const sandbox = { translateText: value => value, escapeHtml: escapeHtmlImpl };
  vm.createContext(sandbox);
  vm.runInContext(source + "\nthis.run = missionStepHtml;", sandbox);
  const html = sandbox.run({ module: "<img src=x onerror=alert(1)>", action: "send", result: "<b>done</b>", status: "executed" });
  assert.doesNotMatch(html, /<img src=x onerror=alert\(1\)>/);
  assert.doesNotMatch(html, /<b>done<\/b>/);
  assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/);
  assert.match(html, /&lt;b&gt;done&lt;\/b&gt;/);
});

// Source-shape checked (matching the established pattern in telehealth-session-create-idempotency.test.js)
// since these two sinks are inline statements inside render()/renderAgentCenter(), which reference too much
// live app state (data, permissions, DOM ids) to extract and execute standalone.
test("the Admin Users/Subscribers/Modules panels escape every dynamic field", () => {
  const start = appSource.indexOf('$("#adminUsers").innerHTML');
  assert.ok(start > 0, "could not locate the #adminUsers render in app.js");
  const end = appSource.indexOf('$("#adminModules")', start) + 400;
  const block = appSource.slice(start, end);
  assert.match(block, /escapeHtml\(user\.name\)/);
  assert.match(block, /escapeHtml\(user\.role\)/);
  assert.match(block, /escapeHtml\(user\.email\)/);
  assert.match(block, /escapeHtml\(subscriber\.name\)/);
  assert.match(block, /escapeHtml\(module\.name\)/);
});

test("the Agent Center 'What I heard' panel escapes the person's own literal command text", () => {
  const start = appSource.indexOf('$("#agentUnderstandingPanel").innerHTML');
  assert.ok(start > 0, "could not locate #agentUnderstandingPanel render in app.js");
  const end = appSource.indexOf("].join", start) + 20;
  const block = appSource.slice(start, end);
  assert.match(block, /What I heard.*escapeHtml\(translateText\(latestCommand\?\.command/);
});
