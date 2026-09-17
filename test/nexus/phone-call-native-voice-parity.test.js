"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

test("phone calls try the real OpenAI-native dispatcher before the legacy companion pipeline", () => {
  // Confirmed by the production capability audit: phone calls were the only
  // voice channel that never reached executeNexusOpenAiNativeTool's real
  // provider bridges (chronic-care vitals, mobile-clinic/pharmacy search,
  // marketplace, learning, drone/field-agent dispatch, etc.) -- they went
  // straight to runCompanionSafeAgentCommand, which falls into
  // runAgentCommand, a ~2,500-line separate legacy intent dispatcher that
  // never calls any of the real bridges. The desktop wake listener and
  // browser voice (/api/agent/command) already try the real native path
  // first; phone calls did not.
  const routeStart = source.indexOf('url.pathname === "/api/voice/phone/gather" && req.method === "POST"');
  assert.notEqual(routeStart, -1, "could not locate the phone gather route");
  const routeEnd = source.indexOf('url.pathname === "/api/nexus/provider-abstraction/status"', routeStart);
  assert.notEqual(routeEnd, -1);
  const routeBody = source.slice(routeStart, routeEnd);

  const nativeCallIndex = routeBody.indexOf("await runNexusOpenAiNativeAgentCommand(db, phoneUser,");
  const legacyCallIndex = routeBody.indexOf("await runCompanionSafeAgentCommand(db, phoneUser,");
  assert.notEqual(nativeCallIndex, -1, "phone calls must try the real native dispatcher");
  assert.notEqual(legacyCallIndex, -1, "the legacy companion pipeline must remain as a fallback");
  assert.ok(nativeCallIndex < legacyCallIndex, "the native dispatcher must be attempted before the legacy fallback");

  // The fallback must only run when the native call didn't produce a result
  // (disabled/unconfigured native voice), not unconditionally.
  const betweenCalls = routeBody.slice(nativeCallIndex, legacyCallIndex + 40);
  assert.match(betweenCalls, /const result = openAiNativeResult \|\| \(await runCompanionSafeAgentCommand/);

  assert.match(routeBody, /inputMode: "phone"/);
});
