const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const port = Number(process.env.NEXUS_OPEN_CONVERSATION_PORT || 4433);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-nexus-open-conversation-db.json");
let cookie = "";

const stalePattern = /Say health, learning, work, trade, map, or AI help|would you like me to do that now|AI step is ready|I reset the voice route|I heard that would you like/i;
const weakPattern = /^(ok|okay|yes|got it|done)\.?$/i;

const cases = [
  {
    prompt: "my baby hot no doctor",
    section: "health",
    includes: ["urgent", "doctor", "where"],
    label: "urgent child health fragment"
  },
  {
    prompt: "medicine finished village far",
    section: "health",
    includes: ["medicine", "pharmacy", "village"],
    label: "medicine access fragment"
  },
  {
    prompt: "i no read help health",
    section: "health",
    includes: ["health", "step", "where"],
    label: "low literacy health help"
  },
  {
    prompt: "crop bad rain no come",
    section: "trade",
    includes: ["crop", "problem", "what crop"],
    label: "rough crop distress"
  },
  {
    prompt: "maize leaves yellow what I do",
    section: "trade",
    includes: ["crop", "leaves", "what crop"],
    label: "crop evidence open question"
  },
  {
    prompt: "job please no certificate",
    section: "workforce",
    includes: ["work", "country", "job"],
    label: "rough work request"
  },
  {
    prompt: "I finish chemistry school want work Kenya",
    section: "workforce",
    includes: ["chemistry", "Kenya", "work"],
    label: "rough graduate career request"
  },
  {
    prompt: "lesson too hard read slow",
    section: "learning",
    includes: ["learn", "slow", "lesson"],
    label: "rough learning support"
  },
  {
    prompt: "road not safe buyer waiting",
    section: "map",
    includes: ["route", "starting", "destination"],
    label: "rough logistics safety"
  },
  {
    prompt: "clinic where I am",
    section: "map",
    includes: ["clinic", "village", "landmark"],
    label: "rough clinic location"
  },
  {
    prompt: "nexus can you hear grandma when english bad",
    section: "agent",
    includes: ["normal words", "guide", "step"],
    label: "conversation capability"
  },
  {
    prompt: "I do not know words but crop and medicine problem",
    section: "health",
    includes: ["one step", "where", "need"],
    label: "mixed ambiguous human need"
  },
  {
    prompt: "how are you today",
    section: "agent",
    includes: ["here", "listen", "talk"],
    label: "general small talk"
  },
  {
    prompt: "can we talk like people",
    section: "agent",
    includes: ["talk", "people", "mind"],
    label: "open human conversation"
  },
  {
    prompt: "tell me something encouraging",
    section: "agent",
    includes: ["one", "step", "forward"],
    label: "encouragement conversation"
  },
  {
    prompt: "who was Nelson Mandela",
    section: "agent",
    includes: ["South African", "apartheid", "leadership"],
    label: "general history question"
  },
  {
    prompt: "what is teamwork",
    section: "agent",
    includes: ["people", "goal", "trust"],
    label: "general concept question"
  },
  {
    prompt: "i am tired today",
    section: "agent",
    includes: ["rest", "water", "small next step"],
    label: "general emotional support"
  }
];

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let index = 0; index < 90; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Open conversation regression server did not become reachable");
}

async function call(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json();
  if (!response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return json;
}

async function runCommand(prompt) {
  const state = await call("/api/agent/command", {
    command: prompt,
    inputMode: "voice",
    outputMode: "voice",
    conversational: true,
    mode: "user",
    targetLanguage: "en"
  });
  return state.commandResult || {};
}

function flat(text = "") {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function assertConversation(test, result) {
  const text = flat(result.response);
  const section = result.metadata?.redirectSection;
  assert.equal(section, test.section, `${test.label}: expected section ${test.section}, got ${section}. Response: ${text}`);
  assert(text.length >= 42, `${test.label}: response is too short: ${text}`);
  assert(!weakPattern.test(text), `${test.label}: weak response: ${text}`);
  assert(!stalePattern.test(text), `${test.label}: stale menu/fallback response: ${text}`);
  assert(test.includes.some(needle => text.toLowerCase().includes(String(needle).toLowerCase())), `${test.label}: response should include one of ${test.includes.join(" | ")}. Got: ${text}`);
  assert(result.metadata?.conversationMode === true, `${test.label}: must remain in conversation mode`);
}

(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
    const results = [];
    for (const test of cases) {
      const result = await runCommand(test.prompt);
      assertConversation(test, result);
      results.push({ prompt: test.prompt, intent: result.intent, section: result.metadata?.redirectSection });
    }
    console.log(JSON.stringify({ status: "passed", score: `${results.length}/${cases.length}`, cases: results }, null, 2));
  } finally {
    server.kill();
    await wait(250);
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
