"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

// Four small behaviour fixes found in live walkthroughs:
//  1. a support ticket from someone who is not signed in is a clean 401 (never a 500, never an anonymous ticket);
//  2. "Remember that ..." (and "please remember ...", "don't forget that ...") is answered by what really happened: "Saved: ..." and readable back for that person only, or plainly "nothing was saved";
//  3. "Please run a drone scan of my field before I sell" stages the scan for a "yes" instead of explaining a "red area";
//  4. "Hi AgriTrade, speak French" asks for a "yes" first, the same as a free-form request to change the language.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "small-behaviour-bundle-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const marker = `zz${crypto.randomUUID().slice(0, 6)}`;
let server; let userCookie; let otherCookie;

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
const cookiesOf = res => (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ");
async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `${email} signs in`);
  return cookiesOf(res);
}
async function post(pathname, cookie, body) {
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body || {}) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, text };
}
// Spoken/typed turn through the older command route, the way the voice screen sends it.
const say = async (cookie, command) => {
  const res = await post("/api/agent/command", cookie, { command, conversational: true, inputMode: "voice", outputMode: "voice" });
  assert.equal(res.status, 200, command);
  return res.json.commandResult;
};
const sayByTool = async (cookie, command) => {
  const res = await post("/api/voice/realtime/tool", cookie, { name: "nexus_general_conversation", arguments: { command, language: "en" }, language: "en" });
  assert.equal(res.status, 200, command);
  return res.json.commandResult || res.json.result || res.json;
};
async function userLanguage(cookie) {
  const res = await fetch(`${base}/api/state`, { headers: { cookie } });
  return (await res.json()).user.language;
}

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  userCookie = await login("user@agrinexus.org", "User2026!");
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const email = `second-${crypto.randomUUID().slice(0, 8)}@example.com`; const password = crypto.randomBytes(9).toString("base64url");
  assert.equal((await post("/api/admin/test-user", adminCookie, { email, name: "Second User", password })).status, 200);
  otherCookie = await login(email, password);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("a support ticket needs a signed-in person: signed out is a clean 401 and nothing is stored", async () => {
  const anonymous = await post("/api/support/ticket", null, { subject: "Help", detail: "I cannot log in" });
  assert.equal(anonymous.status, 401);
  assert.equal(anonymous.json.error, "Please sign in to open a support ticket.");
  const signedIn = await post("/api/support/ticket", userCookie, { subject: `Ticket ${marker}`, detail: "Checking the support queue" });
  assert.equal(signedIn.status, 200);
  assert.equal(signedIn.json.profile.supportTickets[0].requester, "user@agrinexus.org");
  assert.ok(!JSON.stringify(signedIn.json.profile.supportTickets).includes("Help\""), "the anonymous attempt left no ticket behind");
});

test("'Remember that ...' says what was saved, and the saved item reads back for that person only", async () => {
  const first = await say(userCookie, `Remember that my cooperative is called ${marker} Growers`);
  assert.equal(first.intent, "conversation.mode_orchestrator.memory_preference");
  assert.equal(first.status, "completed");
  assert.match(first.response, new RegExp(`^Saved: my cooperative is called ${marker} Growers`, "i"));
  assert.doesNotMatch(first.response, /under your control/i);
  assert.equal(first.metadata.explicitRemember.saved, true);

  const variantPlease = await say(userCookie, `please remember I deliver ${marker} maize on Fridays`);
  assert.match(variantPlease.response, new RegExp(`^Saved: I deliver ${marker} maize on Fridays`, "i"));
  const variantDont = await sayByTool(userCookie, `don't forget that the ${marker} pump needs fuel`);
  assert.match(variantDont.response, new RegExp(`^Saved: the ${marker} pump needs fuel`, "i"));
  const variantShort = await say(userCookie, `Remember I keep ${marker} goats`);
  assert.match(variantShort.response, new RegExp(`^Saved: I keep ${marker} goats`, "i"));

  const readBack = await say(userCookie, "What have you learned");
  assert.equal(readBack.intent, "memory-summary");
  assert.ok(readBack.response.includes(`${marker} Growers`) || readBack.response.includes(`${marker} goats`), "the saved item is read back to the person who said it");
  const stored = (await post("/api/agent/command", userCookie, { command: "what do you remember", conversational: true })).json.profile.agentMemory;
  const mine = [...stored.preferences, ...stored.longTermFacts].filter(item => item.text.includes(marker));
  assert.ok(mine.length >= 4, "all four sentences were kept");
  assert.ok(mine.every(item => item.by === "user@agrinexus.org"), "each item records who said it");

  const other = await say(otherCookie, "What have you learned");
  assert.ok(!other.response.includes(marker), "another signed-in person is never read back what was saved");
  const otherOwn = await say(otherCookie, `Remember that I farm ${marker}2 beans`);
  assert.match(otherOwn.response, /^Saved: I farm/);
  const again = await say(userCookie, "What have you learned");
  assert.ok(!again.response.includes(`${marker}2`), "and the first person is not read back the second person's note");
});

test("'Remember ...' that cannot be kept says so plainly: nothing is saved for a guest, a secret, or a reminder-shaped request", async () => {
  const guestRes = await fetch(`${base}/api/auth/guest-session`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: "Guest Visitor" }) });
  assert.ok([200, 201].includes(guestRes.status));
  const guestCookie = cookiesOf(guestRes);
  const guest = await say(guestCookie, `Remember that I like ${marker}3 tea`);
  assert.match(guest.response, /can't save that for you from here, nothing was saved/i);
  assert.doesNotMatch(guest.response, /saved:/i);
  assert.equal(guest.metadata.explicitRemember.saved, false);
  const memoryAfter = (await post("/api/agent/command", userCookie, { command: "what do you remember", conversational: true })).json.profile.agentMemory;
  const stateAfter = JSON.stringify(["preferences", "longTermFacts", "learnedPatterns", "safetyBoundaries", "moduleMemory", "userNeeds"].map(key => memoryAfter[key] || []));
  assert.ok(!stateAfter.includes(`${marker}3`), "nothing a guest asked to remember was stored");

  const secret = await say(userCookie, "Remember that my password is hunter2");
  // The refusal for a PIN, password or card number is the shared safety reply (safety.secretRefused), the same on every route.
  assert.match(secret.response, /I won.t save a PIN, password or card number/i);
  assert.doesNotMatch(secret.response, /saved:/i);
  const kept = (await post("/api/agent/command", userCookie, { command: "what do you remember", conversational: true })).json.profile.agentMemory;
  for (const key of ["preferences", "longTermFacts", "learnedPatterns", "safetyBoundaries", "moduleMemory", "userNeeds", "memoryTimeline"]) assert.ok(!JSON.stringify(kept[key] || []).includes("hunter2"), `${key} holds no secret`);

  const reminder = await say(userCookie, `remember to call the ${marker} buyer`);
  assert.notEqual(reminder.intent, "conversation.mode_orchestrator.memory_preference", "a reminder request is still a reminder, not a saved note");
});

test("a request to run a drone scan is staged for a yes, and is honest that it is an estimate", async () => {
  const typed = await say(userCookie, "Please run a drone scan of my field before I sell");
  assert.notEqual(typed.intent, "conversation.drone_simple_explanation");
  assert.equal(typed.intent, "conversation.pending_action");
  assert.equal(typed.status, "needs-confirmation");
  assert.ok(["drone.field_scan", "drone.intervention_task", "trade.market_review"].includes(typed.metadata.tool), `staged tool ${typed.metadata.tool}`);
  const cancelled = await say(userCookie, "no");
  assert.equal(cancelled.intent, "conversation.canceled");

  const byTool = await sayByTool(userCookie, "Please run a drone scan of my field before I sell");
  assert.equal(byTool.intent, "conversation.pending_action");
  assert.equal(byTool.status, "needs-confirmation");

  const confirmed = await say(userCookie, "yes");
  assert.equal(confirmed.intent, "conversation.confirmed");
  assert.match(confirmed.response, /estimate from your saved crop-lot records, not a live drone flight/i);

  // Describing what a drone saw is still explained, and a bare "run drone scan" keeps its ready answer.
  const described = await say(userCookie, "The drone saw a red area on my farm");
  assert.equal(described.intent, "conversation.drone_simple_explanation");
  const cleared = await say(userCookie, "Never mind");
  assert.ok(cleared);
});

test("every way of asking to change the language asks for a yes first", async () => {
  assert.equal(await userLanguage(userCookie), "en");
  for (const phrase of ["Hi AgriTrade, speak French", "AgriTrade, speak French"]) {
    const asked = await say(userCookie, phrase);
    assert.equal(asked.intent, "conversation.pending_action", phrase);
    assert.equal(asked.status, "needs-confirmation", phrase);
    assert.match(asked.response, /change your language to French.*confirm/i, phrase);
    assert.equal(await userLanguage(userCookie), "en", `${phrase}: nothing changes before the yes`);
    const declined = await say(userCookie, "no");
    assert.equal(declined.intent, "conversation.canceled");
    assert.equal(await userLanguage(userCookie), "en");
  }
  const byTool = await sayByTool(userCookie, "Hi AgriTrade, speak French");
  assert.equal(byTool.intent, "conversation.pending_action");
  assert.equal(await userLanguage(userCookie), "en");
  await say(userCookie, "no");

  const freeForm = await say(userCookie, "please change the language to French");
  assert.equal(freeForm.intent, "conversation.pending_action");
  await say(userCookie, "no");
  const spoken = await say(userCookie, "please speak French");
  assert.equal(spoken.intent, "conversation.pending_action", "a plain 'please speak French' is staged the same way");
  assert.equal(await userLanguage(userCookie), "en");

  const confirmed = await say(userCookie, "yes");
  assert.equal(confirmed.intent, "conversation.confirmed");
  assert.equal(await userLanguage(userCookie), "fr");
  // put it back through the same gate
  const back = await say(userCookie, "AgriTrade, speak English");
  assert.equal(back.intent, "conversation.pending_action");
  await say(userCookie, "yes");
  assert.equal(await userLanguage(userCookie), "en");
});
