"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found on production: "Open the business workspace" got an HTTP 422 explaining what Kyro can do, and "Start a workspace" an HTTP 502, and the person saw nothing at all (the last answer stayed on the screen,
// as if Kyro had not heard). A refusal or failure the server answered is now said.
const app = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");

function slice(startMarker, endMarker) {
  const start = app.indexOf(startMarker);
  const end = app.indexOf(endMarker, start);
  assert.ok(start >= 0 && end > start, `could not find ${startMarker}`);
  return app.slice(start, end);
}

test("request() keeps the status and the code of a failed answer on the error it throws", async () => {
  const sandbox = { fetch: async () => ({ ok: false, status: 422, json: async () => ({ error: "I could not tell what to do with that.", code: "business_request_not_understood" }) }), data: {} };
  vm.createContext(sandbox);
  vm.runInContext(`${slice("async function request(", "\nasync function requestWithTimeout(")}\nthis.run = request;`, sandbox);
  await assert.rejects(() => sandbox.run("/api/x"), error => error.message === "I could not tell what to do with that." && error.status === 422 && error.code === "business_request_not_understood");
});

test("the behavior-spine command route says an explained refusal, and says plainly that a failed piece of work saved nothing", async () => {
  const body = slice("  } catch (error) {\n    // No signal: a plain record-keeping statement", "\nasync function handleNexusHealthcareCollaborationRuntimeCommand(");
  const spoken = [];
  const sandbox = {
    keepKyroOfflineNote: () => false, text: "Open the business workspace.", options: { turnToken: "t" },
    setVoiceResponse: (message, speak, opts) => spoken.push({ message, speak, opts })
  };
  vm.createContext(sandbox);
  const inner = body.slice(body.indexOf("{") + 1, body.lastIndexOf("  }\n}"));
  const handler = vm.runInContext(`(function (error) { ${inner} })`, sandbox);
  const run = status => { spoken.length = 0; return handler(Object.assign(new Error("I could not tell what to do with that in your business records."), { status })); };
  // 422: the server's own explanation, said and handled (true) so nothing else answers over it
  assert.equal(run(422), true);
  assert.equal(spoken[0].message, "I could not tell what to do with that in your business records.");
  assert.equal(spoken[0].opts.source, "nexus-authoritative-behavior-spine");
  // 502: a plain sentence, never the technical verifier message
  assert.equal(run(502), true);
  assert.match(spoken[0].message, /^I could not finish that, so nothing was saved or changed\./);
  // no status (network trouble) and a login problem keep their old behaviour: not handled here, nothing said
  assert.equal(run(0), false); assert.equal(spoken.length, 0);
  assert.equal(run(401), false); assert.equal(spoken.length, 0);
});
