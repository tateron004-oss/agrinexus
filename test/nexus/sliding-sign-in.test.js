"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const crypto = require("node:crypto");
const test = require("node:test");
const assert = require("node:assert/strict");

// A sign-in used to last twelve hours from the moment of signing in, busy or not; then every request failed in silence. A sign-in that is being used is now extended (the last twelve hours again, at most every ten
// minutes), with a hard stop a day after the FIRST sign-in. These run the real functions out of server.js.
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
function slice(startMarker, endMarker) {
  const start = server.indexOf(startMarker);
  assert.ok(start >= 0, startMarker);
  const end = server.indexOf(endMarker, start);
  assert.ok(end > start, endMarker);
  return server.slice(start, end);
}
const tokenSource = slice("function durableAuthSecret(", "// Session TTL in ms, shared");
const ttlSource = slice("function sessionTtlMs(", "\n}\n") + "\n}\n";
const cookieSource = slice("function setCookieHeader(", "\n}\n") + "\n}\n";
const renewSource = slice("function renewSignIn(", "\n}\n") + "\n}\n";

const HOUR = 3_600_000;
function load(env = {}) {
  const persisted = [];
  const sandbox = {
    process: { env: { SESSION_SECRET: "test-secret", ...env } }, crypto, Buffer, JSON, Math, Number, String, Date, Object, Boolean,
    sessions: new Map(), persisted,
    persistSessionToPostgres: (...args) => persisted.push(args),
    secureCookieAttribute: () => "; Secure",
    parseCookies: req => Object.fromEntries(String(req.headers.cookie || "").split(";").filter(Boolean).map(part => { const [k, ...rest] = part.trim().split("="); return [k, decodeURIComponent(rest.join("="))]; }))
  };
  vm.createContext(sandbox);
  vm.runInContext(`${tokenSource}\n${ttlSource}\n${cookieSource}\n${renewSource}\nthis.api = { issueDurableAuthToken, verifyDurableAuthToken, sessionHardMaxMs, renewSignIn, SESSION_RENEW_AFTER_MS };`, sandbox);
  return sandbox;
}
function response() { const headers = {}; return { headers, setHeader(name, value) { headers[name] = value; } }; }
const user = { id: "u1" };

test("a sign-in token remembers when the person first signed in, and can never reach past a day from then", () => {
  const { api } = load();
  const start = 1_000_000_000_000;
  const first = api.verifyDurableAuthToken(api.issueDurableAuthToken("u1", start, { SESSION_SECRET: "test-secret" }, "", null), start + 1000);
  assert.equal(first.startedAt, start); assert.equal(first.expiresAt, start + 12 * HOUR, "twelve hours, as before");
  const late = api.verifyDurableAuthToken(api.issueDurableAuthToken("u1", start + 23 * HOUR, { SESSION_SECRET: "test-secret" }, "", null, start), start + 23 * HOUR + 1000);
  assert.equal(late.startedAt, start, "the first sign-in is carried through"); assert.equal(late.expiresAt, start + 24 * HOUR, "twelve hours from now would be past the stop: it ends at the stop");
  const forged = api.verifyDurableAuthToken(api.issueDurableAuthToken("u1", start + 23 * HOUR, { SESSION_SECRET: "test-secret" }, "", null, start + 30 * HOUR), start + 23 * HOUR + 1000);
  assert.equal(forged.startedAt, start + 23 * HOUR, "a start in the future is not believed");
  assert.equal(api.sessionHardMaxMs({}), 24 * HOUR); assert.equal(api.sessionHardMaxMs({ AUTH_SESSION_HARD_MAX_MS: String(1000 * HOUR) }), 168 * HOUR, "never more than a week"); assert.equal(api.sessionHardMaxMs({ AUTH_SESSION_HARD_MAX_MS: "1000" }), 12 * HOUR, "never less than one sign-in length");
});

test("a request from a signed-in person that comes ten minutes after the last extension extends both the session and the cookie", () => {
  const sandbox = load(); const { api } = sandbox;
  const now = Date.now(); const startedAt = now - 5 * HOUR;
  sandbox.sessions.set("sid1", { userId: "u1", expiresAt: now + 7 * HOUR, space: "default", startedAt, renewedAt: now - 11 * 60_000 });
  const token = api.issueDurableAuthToken("u1", now - 11 * 60_000, sandbox.process.env, "", null, startedAt);
  const res = response();
  assert.equal(api.renewSignIn({ headers: { cookie: `agrinexus_sid=sid1; agrinexus_auth=${encodeURIComponent(token)}` } }, res, user, "/api/nexus/runtime/behavior/turn"), true);
  const entry = sandbox.sessions.get("sid1");
  assert.ok(Math.abs(entry.expiresAt - (now + 12 * HOUR)) < 5000, "twelve hours from now"); assert.equal(entry.startedAt, startedAt, "the first sign-in is not forgotten");
  assert.equal(sandbox.persisted.length, 1, "written through to the stored session as well");
  const cookies = res.headers["set-cookie"];
  assert.equal(cookies.length, 2); assert.match(cookies[0], /^agrinexus_sid=sid1; Max-Age=43[12]\d\d; /); assert.match(cookies[1], /^agrinexus_auth=/);
  const renewed = api.verifyDurableAuthToken(decodeURIComponent(/^agrinexus_auth=([^;]+)/.exec(cookies[1])[1]));
  assert.equal(renewed.startedAt, startedAt); assert.ok(renewed.issuedAt >= now);
});

test("it does nothing for nobody, for the sign-in routes, within ten minutes of the last extension, or at the hard stop", () => {
  const sandbox = load(); const { api } = sandbox; const now = Date.now();
  const sign = (startedAt, renewedAt) => { sandbox.sessions.set("sid1", { userId: "u1", expiresAt: now + 2 * HOUR, space: "default", startedAt, renewedAt }); return { headers: { cookie: "agrinexus_sid=sid1" } }; };
  assert.equal(api.renewSignIn(sign(now - HOUR, now - HOUR), response(), null, "/api/x"), false, "a revoked, erased or switched-off account resolves to nobody: never extended");
  for (const route of ["/api/login", "/api/logout", "/api/register", "/api/auth/guest-session", "/api/guest"]) assert.equal(api.renewSignIn(sign(now - HOUR, now - HOUR), response(), user, route), false, route);
  assert.equal(api.renewSignIn(sign(now - HOUR, now - 5 * 60_000), response(), user, "/api/x"), false, "five minutes ago: not again yet");
  assert.equal(api.renewSignIn({ headers: { cookie: "" } }, response(), user, "/api/x"), false, "no sign-in held: nothing to extend");
  const atStop = response();
  assert.equal(api.renewSignIn(sign(now - 24 * HOUR, now - HOUR), atStop, user, "/api/x"), false, "a day after the first sign-in: no more");
  assert.equal(atStop.headers["set-cookie"], undefined);
  const nearStop = response();
  assert.equal(api.renewSignIn(sign(now - 24 * HOUR + 6 * 60_000, now - HOUR), nearStop, user, "/api/x"), true);
  assert.ok(Math.abs(sandbox.sessions.get("sid1").expiresAt - (now + 6 * 60_000)) < 5000, "extended only up to the stop, six minutes away");
});

test("a guest's renewed token keeps the claims that make the guest's record again", () => {
  const sandbox = load(); const { api } = sandbox; const now = Date.now();
  const token = api.issueDurableAuthToken("guest_11111111-1111-1111-1111-111111111111", now - HOUR, sandbox.process.env, "", { guest: true, name: "Amina", language: "sw" }, now - HOUR);
  const res = response();
  assert.equal(api.renewSignIn({ headers: { cookie: `agrinexus_auth=${encodeURIComponent(token)}` } }, res, user, "/api/x"), true, "a signed cookie alone (no live session) is extended too");
  const renewed = api.verifyDurableAuthToken(decodeURIComponent(/^agrinexus_auth=([^;]+)/.exec(res.headers["set-cookie"][0])[1]));
  assert.equal(renewed.guest, true); assert.equal(renewed.name, "Amina"); assert.equal(renewed.language, "sw");
});

test("the request handler extends a sign-in right after it resolves who is signed in, and the stored session keeps when it began", () => {
  assert.match(server, /const user = currentUser\(req, db\);\s*renewSignIn\(req, res, user, url\.pathname\);/);
  assert.match(server, /add column if not exists started_at timestamptz/);
  assert.match(server, /insert into agrinexus_sessions \(sid, user_id, expires_at, space_id, started_at\) values \(\$1, \$2, \$3, \$4, \$5\)/);
  assert.match(server, /select sid, user_id, expires_at, space_id, started_at from agrinexus_sessions/);
  assert.match(server, /sessions\.set\(sid, \{ userId, expiresAt, space: space \|\| "default", startedAt, renewedAt: startedAt \}\)/);
});
