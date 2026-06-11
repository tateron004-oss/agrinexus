const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.RURAL_CONVERSATION_EVAL_PORT || 4402);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-rural-conversation-eval-db.json");
let cookie = "";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForServer() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Synthetic rural conversation server did not become reachable");
}

async function call(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return json;
}

function words(text = "") {
  return String(text || "").replace(/\s+/g, " ").trim().split(/\s+/).filter(Boolean);
}

function hasAny(text = "", patterns = []) {
  const lower = String(text || "").toLowerCase();
  return patterns.some(pattern => pattern.test ? pattern.test(lower) : lower.includes(String(pattern).toLowerCase()));
}

function scoreCase(testCase, result) {
  const response = String(result.response || "");
  const metadata = result.metadata || {};
  const lower = response.toLowerCase();
  const questionCount = (response.match(/\?/g) || []).length;
  const wordCount = words(response).length;
  const frontier = metadata.frontierCommunication || null;
  let score = 0;
  const notes = [];

  if (response.length > 20) score += 12; else notes.push("response too thin");
  if (wordCount <= (testCase.maxWords || 95)) score += 12; else notes.push(`too wordy: ${wordCount} words`);
  if (questionCount <= (testCase.maxQuestions || 1)) score += 12; else notes.push(`too many questions: ${questionCount}`);
  if (!hasAny(lower, [/workflow/, /metadata/, /redirect/, /module/, /api/, /provider engine/])) score += 12; else notes.push("technical language leaked");
  if (metadata.redirectSection === testCase.section || metadata.moduleSignal?.section === testCase.section) score += 10; else notes.push(`wrong section: ${metadata.redirectSection || metadata.moduleSignal?.section || "none"}`);
  if (frontier) score += 10; else notes.push("frontier communication metadata missing");
  if (frontier?.nextQuestion || questionCount >= 1) score += 10; else notes.push("no next question");
  if (testCase.expectAny?.length) {
    if (hasAny(lower, testCase.expectAny)) score += 10; else notes.push(`missing expected language: ${testCase.expectAny.join(" | ")}`);
  } else {
    score += 10;
  }
  if (testCase.forbidAny?.length) {
    if (!hasAny(lower, testCase.forbidAny)) score += 8; else notes.push(`forbidden language found: ${testCase.forbidAny.join(" | ")}`);
  } else {
    score += 8;
  }
  if (testCase.urgent) {
    if (frontier?.urgency === "high" || hasAny(lower, [/urgent/, /emergency/, /danger/, /safe right now/, /cannot breathe/])) score += 14;
    else notes.push("urgent case did not escalate");
  } else {
    score += 14;
  }
  return { score, notes, wordCount, questionCount, frontier };
}

const cases = [
  {
    persona: "elder-caregiver",
    prompt: "Nexus my child sick cannot breathe what do I do",
    section: "health",
    urgent: true,
    expectAny: [/safe/, /urgent/, /emergency/, /where/],
    forbidAny: [/diagnos/],
    maxWords: 80
  },
  {
    persona: "medicine-access",
    prompt: "Nexus need medicine no clinic near me",
    section: "health",
    expectAny: [/medicine/, /clinic|pharmacy|health/, /where/],
    forbidAny: [/diagnos/],
    maxWords: 85
  },
  {
    persona: "farmer-imperfect-speech",
    prompt: "Nexus crop bad maize yellow help farm",
    section: "trade",
    expectAny: [/crop|farm|maize/, /where|village|area|photo|save|sell/],
    forbidAny: [/disease is/, /guarantee/],
    maxWords: 90
  },
  {
    persona: "market-seller",
    prompt: "Nexus I want sell cassava but buyer far and road not safe",
    section: "trade",
    expectAny: [/cassava|buyer|route|road/, /where|starting|farm|market/],
    maxWords: 95
  },
  {
    persona: "graduate-job-seeker",
    prompt: "Nexus I graduated university biochemistry what jobs in Kenya or South Africa can I apply",
    section: "workforce",
    expectAny: [/job|work|career|role/, /kenya|south africa|country|skill/],
    forbidAny: [/guarantee.*job/],
    maxWords: 110
  },
  {
    persona: "low-literacy-learner",
    prompt: "Nexus I no understand farming lesson explain simple",
    section: "learning",
    expectAny: [/learn|lesson|explain|skill/, /slow|caption|what/],
    maxWords: 90
  },
  {
    persona: "visual-support-user",
    prompt: "Nexus grandma cannot see well read slow and help health",
    section: "health",
    expectAny: [/slow|audio|read|health|care/, /where|need/],
    maxWords: 95
  },
  {
    persona: "route-user",
    prompt: "Nexus my driver lost going from farm to market where to go",
    section: "map",
    expectAny: [/where|starting|go|route|map/, /market|farm/],
    maxWords: 90
  },
  {
    persona: "mixed-language-farmer",
    prompt: "Nexus ayuda farm crop bad no understand",
    section: "trade",
    expectAny: [/crop|farm|help/, /what crop|where|area/],
    maxWords: 90
  },
  {
    persona: "general-low-tech",
    prompt: "Nexus I am confused I do not know what button to press",
    section: "dashboard",
    expectAny: [/health|crops|work|learning|map|market/, /tell me|what/],
    maxWords: 85
  }
];

(async () => {
  fs.copyFileSync(sourceDb, tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: process.env.OPENAI_API_KEY || ""
    },
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true
  });
  server.stdout.on("data", chunk => {
    if (process.env.RURAL_CONVERSATION_EVAL_DEBUG === "1") process.stdout.write(chunk);
  });
  server.stderr.on("data", chunk => {
    if (process.env.RURAL_CONVERSATION_EVAL_DEBUG === "1") process.stderr.write(chunk);
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    const results = [];
    for (const testCase of cases) {
      const state = await call("/api/agent/command", {
        command: testCase.prompt,
        conversational: true,
        inputMode: "voice",
        outputMode: "voice",
        mode: "user",
        targetLanguage: "en",
        note: `Synthetic rural conversation eval: ${testCase.persona}`
      });
      const scored = scoreCase(testCase, state.commandResult || {});
      results.push({ ...testCase, ...scored, intent: state.commandResult?.intent, response: state.commandResult?.response });
      assert(scored.score >= (testCase.minScore || 70), `${testCase.persona} scored ${scored.score}: ${scored.notes.join("; ")}\nResponse: ${state.commandResult?.response}`);
    }
    const average = results.reduce((sum, item) => sum + item.score, 0) / results.length;
    const lowest = results.reduce((low, item) => item.score < low.score ? item : low, results[0]);
    assert(average >= 82, `Average rural conversation score too low: ${average.toFixed(1)}`);
    assert(lowest.score >= 70, `Lowest rural conversation score too low: ${lowest.persona} ${lowest.score}`);
    console.log(`Synthetic rural conversation eval passed: ${results.length} personas, average ${average.toFixed(1)}, lowest ${lowest.persona} ${lowest.score}`);
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.message || error);
  process.exit(1);
});
