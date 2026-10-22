"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createCallTimings, clientLabel } = require("../../nexus/observability/call-timings.js");
const { createStartBackoff, isAutomaticStart } = require("../../public/kyro-voice-start-backoff.js");

// 21 October 2026: the timing record showed 1,293 voice starts in 3.7 hours, about one every ten seconds, from a client nobody could name, and a person's own first start after signing in took far too long. This
// adds a privacy-safe label to each voice start (so that client can be told apart), makes the page wait longer before each restart it makes by itself, and stops an anonymous guest's voice start rewriting the whole
// stored document.
const read = file => fs.readFileSync(path.join(__dirname, "../..", file), "utf8");
const CHROME_WINDOWS = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36";

test("the label is a few broad kinds picked from fixed lists, never the browser's own text, an address or a name", () => {
  assert.equal(clientLabel({ userAgent: CHROME_WINDOWS, account: "signed-in", pageStart: "user", pageVisibility: "visible" }), "chrome/windows/signed-in/start:user/tab:visible");
  assert.equal(clientLabel({ userAgent: CHROME_WINDOWS.replace("Chrome/", "HeadlessChrome/"), account: "guest", newGuest: true, pageStart: "auto", pageVisibility: "hidden" }), "automation/windows/new-guest/start:auto/tab:hidden");
  assert.equal(clientLabel({ userAgent: "node", account: "none" }), "script/other/no-account/start:none/tab:none");
  assert.equal(clientLabel({ userAgent: "python-requests/2.31", account: "guest" }).split("/")[0], "script");
  assert.equal(clientLabel({ account: "none" }), "no-agent/none/no-account/start:none/tab:none");
  assert.equal(clientLabel({ userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1", account: "signed-in" }), "safari/ios/signed-in/start:none/tab:none");
  assert.equal(clientLabel({ userAgent: CHROME_WINDOWS.replace("Chrome/141.0.0.0 Safari", "Chrome/141.0.0.0 Edg/141.0.0.0 Safari"), account: "signed-in" }).split("/")[0], "edge");
  // whatever the page claims, only the fixed words come out
  const hostile = clientLabel({ userAgent: CHROME_WINDOWS, account: "signed-in", pageStart: "ron@example.com", pageVisibility: "10.1.2.3" });
  assert.equal(hostile, "chrome/windows/signed-in/start:none/tab:none");
  assert.equal(/chrome\/141|nt 10|win64|example|10\.1/i.test(clientLabel({ userAgent: CHROME_WINDOWS, account: "signed-in" })), false);
});

test("the record counts voice starts by label, in the last minute, ten minutes and hour, with the usual gap between them", () => {
  let clock = 1_000_000;
  const timings = createCallTimings({ now: () => clock });
  for (let index = 0; index < 6; index += 1) { timings.recordVoiceStart("automation/linux/new-guest/start:auto/tab:hidden"); clock += 10_000; }
  timings.recordVoiceStart("chrome/windows/signed-in/start:user/tab:visible");
  const starts = timings.snapshot().voiceStarts;
  assert.equal(starts[0].label, "automation/linux/new-guest/start:auto/tab:hidden");
  assert.equal(starts[0].count, 6); assert.equal(starts[0].typicalGapSeconds, 10); assert.equal(starts[0].lastMinute, 6);
  const person = starts.find(line => line.label.startsWith("chrome/"));
  assert.equal(person.count, 1); assert.equal(person.typicalGapSeconds, undefined);
  clock += 2 * 3_600_000;
  const later = timings.snapshot().voiceStarts.find(line => line.label.startsWith("automation/"));
  assert.equal(later.count, 6); assert.equal(later.lastHour, 0, "old starts stop counting as recent");
});

test("a tap on the orb is never held back; a restart the page makes by itself waits longer after each start that failed or ended at once", () => {
  let clock = 0;
  const backoff = createStartBackoff({ now: () => clock });
  const restart = { source: "stall-watchdog-restart", recovery: true };
  assert.deepEqual(backoff.mayStart(restart), { ok: true, waitMs: 0 }, "the first restart goes ahead");
  backoff.attempt(restart); backoff.failed();
  clock += 1000;
  assert.equal(backoff.mayStart(restart).ok, false); assert.equal(backoff.mayStart(restart).waitMs, 4000);
  clock += 4000;
  assert.equal(backoff.mayStart(restart).ok, true);
  backoff.attempt(restart); backoff.failed();
  assert.equal(backoff.snapshot().waitMs, 10000, "5 s, then 10 s");
  clock += 9000; assert.equal(backoff.mayStart(restart).ok, false);
  // a person's tap goes ahead at once and clears the wait
  const tap = { source: "nexus-primary-visible-voice-button" };
  assert.equal(isAutomaticStart(tap), false);
  assert.deepEqual(backoff.mayStart(tap), { ok: true, waitMs: 0 });
  backoff.attempt(tap);
  assert.equal(backoff.snapshot().consecutiveBad, 0);
  assert.equal(backoff.mayStart(restart).ok, true);
  // the wait stops growing at two minutes
  const capped = createStartBackoff({ now: () => clock });
  for (let index = 0; index < 12; index += 1) { capped.attempt(restart); capped.failed(); clock += 200000; }
  assert.equal(capped.snapshot().waitMs, 120000);
});

test("the page's own auto-start does not clear the wait the way a tap does (found on the live page: it reset the back-off every minute)", () => {
  let clock = 0;
  const backoff = createStartBackoff({ now: () => clock });
  const autoStart = { source: "genesis-home-permission-granted-auto-start" };
  for (let index = 0; index < 3; index += 1) { backoff.attempt({ recovery: true }); backoff.failed(); clock += 1000; }
  assert.equal(backoff.snapshot().consecutiveBad, 3);
  backoff.attempt(autoStart);
  assert.equal(backoff.snapshot().consecutiveBad, 3, "not cleared");
  assert.equal(backoff.mayStart(autoStart).ok, false, "and held back like any other automatic start");
});

test("a session that ends within seconds counts against the next automatic restart; one that lasted does not", () => {
  let clock = 0;
  const backoff = createStartBackoff({ now: () => clock });
  const restart = { source: "voice-recovery" };
  backoff.attempt(restart); backoff.started(); clock += 5000; backoff.ended();
  assert.equal(backoff.snapshot().consecutiveBad, 1);
  backoff.attempt(restart); backoff.started(); clock += 5 * 60_000; backoff.ended();
  assert.equal(backoff.snapshot().consecutiveBad, 0, "a session that lasted clears the count");
});

test("the sources the page restarts voice with by itself are recognised, and the sources of a person's tap are not", () => {
  for (const source of ["stall-watchdog-restart", "bounded-realtime-recovery", "voice-recovery", "genesis-visible-resume", "genesis-speech-finished-restart", "safe-local-tool-restart", "nexus-authoritative-conversation-recovery", "voice-restart", "genesis-home-permission-granted-auto-start"]) {
    assert.equal(isAutomaticStart({ source }), true, source);
  }
  for (const source of ["bound-visible-voice-control", "nexus-primary-visible-voice-button", "standard-user-visible-voice-control", "automations-screen", "a100-standard-user-safe-autonomy", "start-voice-listening", ""]) {
    assert.equal(isAutomaticStart({ source }), false, source);
  }
  assert.equal(isAutomaticStart({ recovery: true }), true);
});

test("on the server: each start is labelled, an anonymous guest's start does not rewrite the stored state, a signed-in one is still written down", () => {
  const server = read("server.js");
  const handler = server.slice(server.indexOf('url.pathname === "/api/voice/realtime/session" && req.method === "POST"'));
  assert.match(handler, /kyroCallTimings\.recordVoiceStart\(kyroCallTimingsModule\.clientLabel\(\{/);
  assert.match(handler, /pageStart: String\(req\.headers\["x-kyro-start"\]/);
  assert.match(handler, /recordVoiceStart\("refused\/too-many"\)/);
  assert.match(handler, /if \(authContext\.authMechanism !== "bounded_genesis_voice_guest_cookie"\) \{\s+voiceRecord\([\s\S]{0,900}?await writeDb\(db\);\s+\}/);
});

test("on the page: the back-off script loads before the app, is cached for offline use, and the session request says whether the start was a tap and whether the tab is in view", () => {
  const html = read("public/index.html"); const sw = read("public/sw.js"); const app = read("public/app.js");
  assert.ok(html.indexOf("/kyro-voice-start-backoff.js") > 0 && html.indexOf("/kyro-voice-start-backoff.js") < html.indexOf("/app.js?v="));
  assert.match(sw, /kyro-voice-start-backoff\.js/);
  assert.match(app, /"X-Kyro-Start": automatic \? "auto" : "user", "X-Kyro-Tab": hidden \? "hidden" : "visible"/);
  assert.match(app, /\.\.\.kyroVoiceStartHints\(kyroCurrentVoiceStartOptions\)/);
  assert.match(app, /kyroCurrentVoiceStartOptions = options;\s+realtimeVoiceStarting = true;/);
  assert.match(app, /requestNexusOpenAiRealtimeSession\(status\)\]/, "the call itself is unchanged (an older check pins it)");
  assert.match(app, /const held = startBackoff\.mayStart\(options\);\s+if \(!held\.ok\) \{[\s\S]{0,300}return false;/);
  assert.match(app, /if \(!explicitShutdown\) \{ try \{ kyroVoiceStartBackoffInstance\?\.ended\(\)/);
});
