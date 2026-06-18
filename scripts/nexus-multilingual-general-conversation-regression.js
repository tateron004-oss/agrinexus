const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const port = Number(process.env.NEXUS_MULTILINGUAL_CONVERSATION_PORT || 4434);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-nexus-multilingual-conversation-db.json");
let cookie = "";

const stalePattern = /Say health, learning, work, trade, map, or AI help|would you like me to do that now|AI step is ready|I reset the voice route|I heard that would you like/i;
const weakPattern = /^(ok|okay|yes|got it|done)\.?$/i;

const cases = [
  {
    prompt: "Bonjour Nexus, comment ca va aujourd'hui?",
    targetLanguage: "en",
    expectedLanguage: "fr",
    includes: ["Je suis", "etape", "parler"],
    label: "French prompt auto-answer"
  },
  {
    prompt: "Nexus, podemos hablar como personas?",
    targetLanguage: "en",
    expectedLanguage: "es",
    includes: ["podemos", "personas", "AgriNexus"],
    label: "Spanish open conversation"
  },
  {
    prompt: "Nexus, habari yako leo?",
    targetLanguage: "en",
    expectedLanguage: "sw",
    includes: ["Niko hapa", "kusikiliza", "kuzungumza"],
    label: "Kiswahili small talk"
  },
  {
    prompt: "Nexus, هل يمكننا التحدث مثل الناس؟",
    targetLanguage: "en",
    expectedLanguage: "ar",
    includes: ["نعم", "نتحدث", "AgriNexus"],
    label: "Arabic open conversation"
  },
  {
    prompt: "Nexus, podemos conversar como pessoas?",
    targetLanguage: "en",
    expectedLanguage: "pt",
    includes: ["Podemos", "pessoas", "AgriNexus"],
    label: "Portuguese open conversation"
  },
  {
    prompt: "Nexus, que penses-tu d'aider les agriculteurs ruraux?",
    targetLanguage: "en",
    expectedLanguage: "fr",
    includes: ["agriculteurs", "technologie", "decisions"],
    label: "French rural farmer conversation"
  },
  {
    prompt: "Nexus, por que es importante la educacion?",
    targetLanguage: "en",
    expectedLanguage: "es",
    includes: ["educacion", "opciones", "decisiones"],
    label: "Spanish education explanation"
  },
  {
    prompt: "Nexus, nimechoka leo",
    targetLanguage: "en",
    expectedLanguage: "sw",
    includes: ["Nimekusikia", "pumziko", "msaada"],
    label: "Kiswahili tired support"
  },
  {
    prompt: "Nexus, I am tired today",
    targetLanguage: "fr",
    expectedLanguage: "fr",
    includes: ["Respire", "fatigue", "aider"],
    label: "Selected French response"
  },
  {
    prompt: "Nexus, what do you think about helping rural farmers?",
    targetLanguage: "ar",
    expectedLanguage: "ar",
    includes: ["المزارعين", "القرى", "بسيطة"],
    label: "Selected Arabic farmer response"
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
  throw new Error("Multilingual conversation regression server did not become reachable");
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

async function runCommand(test) {
  const state = await call("/api/agent/command", {
    command: test.prompt,
    inputMode: "voice",
    outputMode: "voice",
    conversational: true,
    mode: "user",
    targetLanguage: test.targetLanguage
  });
  return state.commandResult || {};
}

function flat(text = "") {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function assertConversation(test, result) {
  const text = flat(result.response);
  assert.equal(result.intent, "conversation.general", `${test.label}: expected general conversation intent. Response: ${text}`);
  assert.equal(result.metadata?.redirectSection, "agent", `${test.label}: expected agent section. Response: ${text}`);
  assert.equal(result.metadata?.responseLanguage, test.expectedLanguage, `${test.label}: expected ${test.expectedLanguage}, got ${result.metadata?.responseLanguage}. Response: ${text}`);
  assert(text.length >= 35, `${test.label}: response too short: ${text}`);
  assert(!weakPattern.test(text), `${test.label}: weak response: ${text}`);
  assert(!stalePattern.test(text), `${test.label}: stale fallback response: ${text}`);
  assert(test.includes.some(needle => text.includes(needle)), `${test.label}: response should include one of ${test.includes.join(" | ")}. Got: ${text}`);
  assert.equal(result.metadata?.conversationMode, true, `${test.label}: must remain in conversation mode`);
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
      const result = await runCommand(test);
      assertConversation(test, result);
      results.push({
        label: test.label,
        language: result.metadata?.responseLanguage,
        provider: result.metadata?.provider,
        sample: flat(result.response).slice(0, 110)
      });
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
