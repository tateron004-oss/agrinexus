"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// 22 October 2026: every deploy since at least 18 October ended red at its last step, a headless browser that waited 90 seconds, twice, for the page to go quiet. The page had loaded long before. Reproduced with Playwright 1.55 and the
// system Chrome against the live site: the page's voice stall reports and usage reports were answered (200, about a second) but never read, and a reply nobody reads keeps the request "open" in the browser, so the page never
// looked finished (open requests after 90 s: five stall reports; with the reply read: none, and the page quiet 8 seconds after a reload). The page now reads and drops the reply of a report it does not wait for.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

function helper(fetchImpl) {
  const start = app.indexOf("function kyroSendAndForget(url, init) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start, "the helper is in the page");
  const context = { fetch: fetchImpl };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.send = kyroSendAndForget;`, context);
  return context.send;
}
const tick = () => new Promise(resolve => setImmediate(resolve));

test("the reply of a report the page does not wait for is read, so the request is finished", async () => {
  const seen = { url: null, init: null, read: 0 };
  const send = helper((url, init) => { seen.url = url; seen.init = init; return Promise.resolve({ arrayBuffer: () => { seen.read += 1; return Promise.resolve(new ArrayBuffer(0)); } }); });
  send("/api/voice/realtime/stall-report", { method: "POST", keepalive: true, body: "{}" });
  await tick();
  assert.equal(seen.url, "/api/voice/realtime/stall-report"); assert.equal(seen.init.keepalive, true, "still allowed to outlive the page");
  assert.equal(seen.read, 1, "the reply was read once");
});

test("a report never breaks the voice session: a refused, failed or odd reply is swallowed", async () => {
  helper(() => Promise.reject(new Error("offline")))("/x", {});
  helper(() => { throw new Error("blocked"); })("/x", {});
  helper(() => Promise.resolve({}))("/x", {});
  helper(() => Promise.resolve({ arrayBuffer: () => Promise.reject(new Error("reset")) }))("/x", {});
  helper(() => undefined)("/x", {});
  await tick(); await tick();
});

test("both reports the page sends and does not wait for go through it", () => {
  assert.doesNotMatch(app, /\n\s*fetch\("\/api\/voice\/realtime\/(?:stall|usage)-report"/);
  assert.match(app, /kyroSendAndForget\("\/api\/voice\/realtime\/usage-report", \{[^\n]*keepalive: true \}\);/);
  assert.match(app, /kyroSendAndForget\("\/api\/voice\/realtime\/stall-report", \{[^\n]*body, keepalive: true \}\);/);
});
