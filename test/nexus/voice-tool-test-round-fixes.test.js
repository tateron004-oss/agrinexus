"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Found in the first round of testing by voice: a guest asking a women's health question was refused ("Sign in with a full account") whenever the model picked the health tool; "show me US maps" was spoken as "say route from US maps
// to a second place"; "play music on Spotify" was answered "Starting music on Spotify in the player" while a YouTube video played. End to end on a real server with no AI key.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "round-fixes-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie = ""; let n = 0;

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
const tool = async (name, command, extra = {}) => {
  const res = await fetch(`${base}/api/voice/realtime/tool`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": "10.15.99.2", cookie },
    body: JSON.stringify({ name, correlationId: `rf-${++n}-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, language: "en", ...extra }, language: "en" }) });
  return res.json().catch(() => ({}));
};

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "round-fixes-secret-for-the-test-0123456789", AGRINEXUS_DB_PATH: path.join(dir, "db.json"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", AGRINEXUS_TRUST_PROXY: "true",
    AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  const guest = await fetch(`${base}/api/auth/guest-session`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": "10.15.99.2" }, body: JSON.stringify({ name: "Guest Tester" }) });
  assert.equal(guest.status, 201); cookie = guest.headers.get("set-cookie").split(";")[0];
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("a woman's health question is answered from the guide before any account restriction, whichever tool the model picked (the planner needs the live database, so this is checked by the order in the code)", () => {
  const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const guide = server.indexOf("A woman's question about her own health (cervical screening");
  const restriction = server.indexOf("const restrictedToolCategory = {");
  const planner = server.indexOf("The catch-all conversation tool (the one a request with no better tool");
  assert.ok(guide > 0 && restriction > guide, "the guide is answered before the account restriction is checked");
  assert.ok(planner > 0);
  const block = server.slice(guide, restriction);
  assert.ok(block.includes("womensHealthTopic(command)") && block.includes('effectiveMentalHealthSignal.state !== "medical_emergency"') && block.includes("deterministicVoiceAnswer({ runtime: authoritativeNexusRuntime"), "only a women's health question, never a medical emergency, through the planner");
  assert.ok(!block.includes("toolName ==="), "for every tool, not one");
  assert.ok(server.includes('const { womensHealthTopic } = require("./nexus/knowledge/womens-health-topics.js");'));
  const { womensHealthTopic } = require("../../nexus/knowledge/womens-health-topics.js");
  for (const question of ["Tell me about menopause", "How often should I get a Pap smear?", "What are my birth control options?", "What is postpartum depression?"]) assert.ok(womensHealthTopic(question), question);
  for (const urgent of ["Is ibuprofen safe in pregnancy?", "I am bleeding heavily and I am pregnant", "My husband beats me"]) assert.equal(womensHealthTopic(urgent), null, urgent);
});

test("'show me US maps' opens the map without telling the person to route from 'US maps'", async () => {
  for (const command of ["show me US maps", "Open US maps", "Pull up a map of the US"]) {
    const answer = await tool("nexus_maps_route", command, { country: "United States" });
    assert.doesNotMatch(answer.response || "", /route from US maps|route from the US/i, command);
    assert.match(answer.response || "", /Maps workspace is ready/, command);
  }
  const place = await tool("nexus_maps_route", "show me Kisumu");
  assert.match(place.response || "", /I have not calculated anything for Kisumu/, "a place is still a place");
});

test("'play music on Spotify' does not say Spotify is playing", async () => {
  const answer = await tool("nexus_everyday_records", "Play music on Spotify");
  assert.doesNotMatch(answer.response || "", /spotify/i);
  assert.match(answer.response || "", /^Okay\. Starting music in the player now\.$/);
});

// Found sweeping the applications as a guest: "Find a pharmacy near Nairobi" and "Find a clinic near Kisumu" were refused with "Sign in with a full account", though they only read a directory. Writing a health record is still refused.
test("a guest may look up a pharmacy or a clinic near a place, and still may not write a health record", async () => {
  for (const command of ["Find a pharmacy near Nairobi", "Find a clinic near Kisumu", "Find a mobile clinic near Kisumu"]) {
    const answer = await tool("nexus_health_preparation", command, { timeZone: "Africa/Nairobi" });
    assert.notEqual(answer.status, "restricted", command);
    assert.doesNotMatch(answer.response || "", /Sign in with a full account/, command);
  }
  const write = await tool("nexus_health_preparation", "Save a telehealth intake for my chest pain", { timeZone: "Africa/Nairobi" });
  assert.ok(write.status === "restricted" || !/saved/i.test(write.response || ""), "a write is not done for a guest");
});
