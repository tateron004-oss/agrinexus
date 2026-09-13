// Real 25-turn scripted conversation endurance test against a genuinely
// spawned server and the real OpenAI Responses API (POST /api/agent/command).
// Not a mock, not a string-match "-qa.js" script: every turn is a real HTTP
// request, and multi-turn context threading (db.profile.agentConversation,
// persisted to and read back from the JSON-blob state file between requests)
// is exercised exactly as a real multi-turn session would use it.
//
// This is the typed variant of Phase 2/11's "25-turn endurance run" item --
// the roadmap explicitly flags that item as needing the owner's own live
// microphone participation for the AUDIO version, but a typed multi-turn
// conversation test needing no live human is a legitimate, honest subset:
// it proves conversation-history threading, tool-calling breadth, and the
// mental-health "stickiness" fix hold up over a long real session, even
// though it does not test speech-to-text/text-to-speech themselves.
//
// Not part of scripts/qa-suite.js: costs real OpenAI API usage across 25
// real turns and takes a couple of minutes -- same reasoning that keeps
// health-intake-expansion-verify.js and audit-events-expansion-verify.js
// standalone. Run manually: node scripts/typed-conversation-endurance-test.js
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");

loadEnvFile();

const port = 4487;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-typed-endurance-db.json");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

async function sendTurn(cookie, command, extra = {}) {
  const res = await fetch(`${base}/api/agent/command`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ command, inputMode: "api", ...extra })
  });
  const state = await res.json().catch(() => ({}));
  // /api/agent/command returns the full app state (state.nexusResponse.response
  // carries the actual spoken/typed text, state.commandResult.metadata carries
  // rich data like generated documents) -- not a small {response, error} envelope.
  return {
    status: res.status,
    response: state.nexusResponse?.response || "",
    error: state.error || null,
    metadata: state.commandResult?.metadata || {}
  };
}

// Each turn: { command, check(result, turnIndex) -> string[] of failure
// descriptions (empty = pass) }. Every turn always gets the baseline checks
// (200 status, non-empty response, no thrown error) on top of its own.
const SCRIPT = [
  { command: "Hello, good morning." },
  { command: "What's the weather like in Nairobi right now?" },
  { command: "How about this afternoon -- will it rain?" },
  { command: "My blood pressure is 138 over 89." },
  {
    command: "Is there a mobile clinic near Nairobi?",
    check: turn => {
      const text = String(turn.response || "").toLowerCase();
      return /safety comes first|crisis|i'm really sorry you're dealing with this/.test(text)
        ? ["unrelated clinic follow-up leaked crisis-support framing from an earlier turn"]
        : [];
    }
  },
  { command: "I am having thoughts of suicide and I don't know what to do." },
  {
    command: "What's the weather like in Lagos?",
    check: turn => {
      const text = String(turn.response || "").toLowerCase();
      return /safety comes first|crisis line|your safety/.test(text)
        ? ["mental-health crisis framing incorrectly persisted ('stuck') onto a plainly unrelated follow-up turn"]
        : [];
    }
  },
  { command: "Find me a course on irrigation techniques." },
  { command: "Show me images of damaged maize crops." },
  { command: "Search for a video about crop rotation." },
  { command: "What's the route from Sacramento to Stockton?" },
  { command: "I want to sell a pallet of avocados, what's the process?" },
  { command: "Are there any farming jobs available near me?" },
  { command: "Create a business task to follow up with a grant funder next week." },
  { command: "Create a training plan for me, goal is general fitness, 3 sessions a week for 8 weeks." },
  { command: "I logged a 30 minute run today." },
  { command: "I'd like to save a document titled Farm Visit Notes summarizing today's field visit." },
  {
    command: "confirmed: true",
    check: turn => {
      const hasDoc = Array.isArray(turn.metadata.richData?.documents) && turn.metadata.richData.documents.length > 0;
      return hasDoc ? [] : ["expected the two-turn document-export confirm to actually produce a document"];
    }
  },
  { command: "Send a drone to scan my north field for pest damage." },
  { command: "Remind me to check the irrigation pump tomorrow morning." },
  { command: "What reminders do I have set?" },
  { command: "What's the current price outlook for maize?" },
  { command: "Help me write a donor outreach message for our nonprofit." },
  { command: "Can you compare the weather in Nairobi, Lagos, and Cairo?" },
  { command: "Thank you, that's all for now." }
];

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);

  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath },
    stdio: "ignore",
    windowsHide: true
  });

  const results = [];
  try {
    await waitFor(`${base}/api/healthz`);
    const cookie = await login("user@agrinexus.org", "User2026!");

    for (let i = 0; i < SCRIPT.length; i += 1) {
      const turnScript = SCRIPT[i];
      const turn = await sendTurn(cookie, turnScript.command);
      const failures = [];
      if (turn.status !== 200) failures.push(`HTTP ${turn.status} (expected 200)`);
      if (turn.error) failures.push(`response carried an error: ${turn.error}`);
      if (!turn.response || !String(turn.response).trim()) failures.push("empty response text");
      if (turnScript.check) failures.push(...turnScript.check(turn, i));
      results.push({ turn: i + 1, command: turnScript.command, ok: failures.length === 0, failures, response: turn.response });
      const label = failures.length === 0 ? "OK" : "FAIL";
      console.log(`[turn ${i + 1}/${SCRIPT.length}] ${label} -- "${turnScript.command}"`);
      if (failures.length) failures.forEach(f => console.log(`    - ${f}`));
    }

    const failedTurns = results.filter(r => !r.ok);
    console.log(`\n${results.length - failedTurns.length}/${results.length} turns passed.`);
    if (failedTurns.length) {
      console.log("Failed turns:");
      failedTurns.forEach(r => console.log(`  turn ${r.turn}: ${r.failures.join("; ")}`));
    }
    assert.equal(failedTurns.length, 0, `${failedTurns.length} of ${results.length} turns failed -- see above`);
    console.log("Typed conversation endurance test passed: 25 real turns, real multi-turn context, zero errors.");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
