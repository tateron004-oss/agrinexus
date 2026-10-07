"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Found while preparing the staging walkthrough: the care and safety answers (danger signs in pregnancy or for a baby, medicine doses for a baby, someone being hurt, scams, an emergency) were only given by the
// newer planner. The phone line, the older command route and the fallback when the planner cannot be reached use the older path, where "I am pregnant and my blood pressure is 160/110" was answered with
// "Hello Pregnant And My". These run a real server with no AI key and no database, so the planner is not there, and the answers must still be right.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "care-older-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie = "";
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function post(route, body, extra = {}) {
  const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}), ...extra }, body: JSON.stringify(body) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, text, setCookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const tool = async (command, language = "en") => (await post("/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `care-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, language }, language })).json?.response || "";

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "care-older-secret-for-the-test-0123456", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  const login = await post("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
  assert.equal(login.status, 200);
  cookie = login.setCookie;
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("on the older path the same care answers are given as by the planner, and none of them offers to alert anyone", async () => {
  const expected = [
    ["I am pregnant and my blood pressure is 160/110", /health worker needs to see you now[\s\S]*nearest clinic or hospital now/],
    ["I'm 7 months pregnant and my BP is 150 over 95", /top number at 140 or more, or the bottom number at 90 or more, needs a health worker the same day[\s\S]*bad headache, blurred vision/],
    ["how much paracetamol can I give my baby", /I can't give a dose[\s\S]*pharmacist, a nurse or a clinic[\s\S]*Never give aspirin to a child/],
    ["my baby is not feeding and has a fever", /A baby with these signs needs a health worker now/],
    ["Someone from the bank called asking for my PIN", /do not share your PIN, password or one-time code with anyone/i],
    ["My husband beats me", /If you are in immediate danger/],
    ["I want to end my life", /contact local emergency services/i]
  ];
  for (const [text, pattern] of expected) {
    const reply = await tool(text);
    assert.match(reply, pattern, `${text} -> ${reply.slice(0, 160)}`);
    assert.doesNotMatch(reply, /Hello Pregnant|AI copilot recommends|alert\s+\w+ right now\?/i, text);
  }
});

test("the older command route (/api/agent/command) gives them too, and Swahili stays Swahili", async () => {
  const typed = await post("/api/agent/command", { command: "I am pregnant and my blood pressure is 160/110" });
  assert.equal(typed.status, 200);
  assert.match(typed.text, /health worker needs to see you now/);
  const swahili = await tool("naweza kumpa mtoto wangu paracetamol", "sw");
  assert.ok(swahili.length > 40 && !/I can't give a dose/.test(swahili), swahili.slice(0, 160));
  assert.match(swahili, /mfamasia|kliniki|muuguzi|dawa/i, swahili.slice(0, 200));
});

test("ordinary requests are not caught: the shopping list, a price, a reminder for a baby's medicine", async () => {
  for (const text of ["Add milk to my shopping list", "how much does paracetamol cost", "remind me to give my baby his medicine at 8", "I took paracetamol for my headache"]) {
    const reply = await tool(text);
    assert.doesNotMatch(reply, /I can't give a dose|health worker needs to see you|pharmacist, a nurse or a clinic/, `${text} -> ${reply.slice(0, 120)}`);
  }
});

test("a business's phone line gets them too (the care answer does not depend on the business)", () => {
  const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
  // Both older entry points hand a care message to the same fixed answer: the AI model path steps aside, and the plain path answers.
  assert.match(source, /if \(contentGuardReply\(command\) \|\| careSafetyApplies\(command\)\) return null;/);
  assert.match(source, /const careSafe = await careSafetyReply\(text, user\);/);
  assert.match(source, /tenantId: businessSpaces\.tenantIdFor\(businessSpaces\.currentSpace\(\)\)/);
});
