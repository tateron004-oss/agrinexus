const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const port = Number(process.env.NEXUS_GENERAL_STRESS_PORT || 4435);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-nexus-general-conversation-stress-db.json");
let cookie = "";

const totalTarget = Number(process.env.NEXUS_GENERAL_STRESS_TOTAL || 10080);
const stalePattern = /Say health, learning, work, trade, map, or AI help|would you like me to do that now|AI step is ready|I reset the voice route|I heard that would you like/i;
const weakPattern = /^(ok|okay|yes|got it|done)\.?$/i;
const supportedLanguages = ["en", "es", "fr", "sw", "ar", "pt"];

const languageFixtures = {
  en: {
    targetLanguage: "en",
    phrases: [
      "Nexus, how are you today",
      "Nexus, can we talk like people",
      "Nexus, tell me something encouraging",
      "Nexus, I am tired today",
      "Nexus, what do you think about helping rural farmers",
      "Nexus, why is education important",
      "Nexus, what is teamwork",
      "Nexus, who was Nelson Mandela",
      "Nexus, tell me a short story",
      "Nexus, what is leadership",
      "Nexus, explain patience",
      "Nexus, connect this to AgriNexus"
    ],
    expectedLanguage: "en",
    expectedAny: ["listen", "farmers", "education", "teamwork", "mandela", "agrinexus", "step", "leadership", "story", "farmer"]
  },
  es: {
    targetLanguage: "en",
    phrases: [
      "Nexus, hola como estas hoy",
      "Nexus, podemos hablar como personas",
      "Nexus, estoy cansado hoy",
      "Nexus, que piensas de ayudar a agricultores rurales",
      "Nexus, por que es importante la educacion",
      "Nexus, explicame trabajo en equipo",
      "Nexus, cuentame una historia",
      "Nexus, dame motivacion",
      "Nexus, explica paciencia",
      "Nexus, que es liderazgo"
    ],
    expectedLanguage: "es",
    expectedAny: ["escuchar", "agricultores", "educacion", "equipo", "agrinexus", "opciones", "paso", "liderazgo", "historia", "cosecha"]
  },
  fr: {
    targetLanguage: "en",
    phrases: [
      "Nexus, bonjour comment ca va",
      "Nexus, pouvons nous parler comme des personnes",
      "Nexus, je suis fatigue aujourd hui",
      "Nexus, que penses tu d aider les agriculteurs ruraux",
      "Nexus, pourquoi l education est importante",
      "Nexus, explique le travail d equipe",
      "Nexus, raconte moi une histoire",
      "Nexus, encourage moi",
      "Nexus, explique la patience",
      "Nexus, qu est ce que le leadership"
    ],
    expectedLanguage: "fr",
    expectedAny: ["ecouter", "agriculteurs", "education", "equipe", "agrinexus", "choix", "etape", "leadership", "histoire", "recolte"]
  },
  sw: {
    targetLanguage: "en",
    phrases: [
      "Nexus, habari yako leo",
      "Nexus, tunaweza kuongea kama watu",
      "Nexus, nimechoka leo",
      "Nexus, unafikiri nini kuhusu kusaidia wakulima",
      "Nexus, kwa nini elimu ni muhimu",
      "Nexus, eleza kazi ya pamoja",
      "Nexus, niambie hadithi",
      "Nexus, nipe tumaini",
      "Nexus, eleza subira",
      "Nexus, uongozi ni nini"
    ],
    expectedLanguage: "sw",
    expectedAny: ["kusikiliza", "wakulima", "elimu", "pamoja", "agrinexus", "hatua", "uongozi", "msaada", "hadithi", "mavuno"]
  },
  ar: {
    targetLanguage: "en",
    phrases: [
      "Nexus, كيف حالك اليوم",
      "Nexus, هل يمكننا التحدث مثل الناس",
      "Nexus, أنا متعب اليوم",
      "Nexus, ما رأيك في مساعدة المزارعين في القرى",
      "Nexus, لماذا التعليم مهم",
      "Nexus, اشرح العمل الجماعي",
      "Nexus, احكي لي قصة",
      "Nexus, شجعني",
      "Nexus, اشرح الصبر",
      "Nexus, ما هي القيادة"
    ],
    expectedLanguage: "ar",
    expectedAny: ["أسمعك", "المزارعين", "التعليم", "الجماعي", "agrinexus", "خطوة", "القيادة", "مساعدة", "قصة", "حصادا"]
  },
  pt: {
    targetLanguage: "en",
    phrases: [
      "Nexus, ola como voce esta hoje",
      "Nexus, podemos conversar como pessoas",
      "Nexus, estou cansado hoje",
      "Nexus, o que voce pensa sobre ajudar agricultores rurais",
      "Nexus, por que a educacao e importante",
      "Nexus, explique trabalho em equipe",
      "Nexus, conte uma historia",
      "Nexus, me de coragem",
      "Nexus, explique paciencia",
      "Nexus, o que e lideranca"
    ],
    expectedLanguage: "pt",
    expectedAny: ["ouvir", "agricultores", "educacao", "equipe", "agrinexus", "passo", "lideranca", "ajudar", "colheita", "historia"]
  }
};

const modifiers = [
  "",
  " please",
  " slowly",
  " for grandma",
  " in simple words",
  " for a farmer",
  " for a village user",
  " like I am not technical",
  " with kindness",
  " one step at a time",
  " I do not have perfect words",
  " I am testing"
];

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let index = 0; index < 120; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("General conversation stress server did not become reachable");
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

function buildCases() {
  const cases = [];
  let index = 0;
  while (cases.length < totalTarget) {
    const language = supportedLanguages[index % supportedLanguages.length];
    const fixture = languageFixtures[language];
    const phrase = fixture.phrases[Math.floor(index / supportedLanguages.length) % fixture.phrases.length];
    const modifier = modifiers[Math.floor(index / (supportedLanguages.length * fixture.phrases.length)) % modifiers.length];
    cases.push({
      language,
      expectedLanguage: fixture.expectedLanguage,
      targetLanguage: fixture.targetLanguage,
      expectedAny: fixture.expectedAny,
      prompt: `${phrase}${modifier}`.replace(/\s+/g, " ").trim()
    });
    index += 1;
  }
  return cases;
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

function assertConversation(test, result, index) {
  const text = flat(result.response);
  assert.equal(result.intent, "conversation.general", `#${index} ${test.language}: expected conversation.general. Prompt: ${test.prompt}. Response: ${text}`);
  assert.equal(result.metadata?.redirectSection, "agent", `#${index} ${test.language}: expected agent section. Prompt: ${test.prompt}. Response: ${text}`);
  assert.equal(result.metadata?.responseLanguage, test.expectedLanguage, `#${index}: expected ${test.expectedLanguage}, got ${result.metadata?.responseLanguage}. Prompt: ${test.prompt}. Response: ${text}`);
  assert(text.length >= 35, `#${index}: response too short. Prompt: ${test.prompt}. Response: ${text}`);
  assert(!weakPattern.test(text), `#${index}: weak response. Prompt: ${test.prompt}. Response: ${text}`);
  assert(!stalePattern.test(text), `#${index}: stale fallback. Prompt: ${test.prompt}. Response: ${text}`);
  const lowerText = text.toLowerCase();
  assert(test.expectedAny.some(needle => lowerText.includes(String(needle).toLowerCase())), `#${index}: missing expected language content. Prompt: ${test.prompt}. Response: ${text}`);
  assert.equal(result.metadata?.conversationMode, true, `#${index}: conversationMode not true`);
}

(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb, OPENAI_API_KEY: "", AGRINEXUS_RATE_LIMIT_PER_WINDOW: String(totalTarget + 500) },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
    const cases = buildCases();
    const counts = Object.fromEntries(supportedLanguages.map(language => [language, 0]));
    const startedAt = Date.now();
    for (let index = 0; index < cases.length; index += 1) {
      const test = cases[index];
      const result = await runCommand(test);
      assertConversation(test, result, index + 1);
      counts[test.language] += 1;
      if ((index + 1) % 1000 === 0) {
        console.log(`passed ${index + 1}/${cases.length}`);
      }
    }
    const durationMs = Date.now() - startedAt;
    console.log(JSON.stringify({
      status: "passed",
      score: `${cases.length}/${cases.length}`,
      percent: 100,
      durationMs,
      languages: counts,
      rules: [
        "conversation.general intent",
        "agent section",
        "expected response language",
        "no weak one-word answers",
        "no stale menu/build fallback",
        "minimum helpful response length"
      ]
    }, null, 2));
  } finally {
    server.kill();
    await wait(250);
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
