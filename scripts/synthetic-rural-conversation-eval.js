const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.RURAL_CONVERSATION_EVAL_PORT || 4402);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-rural-conversation-eval-db.json");
const reportDir = path.join(root, "reports");
const historyFile = path.join(reportDir, "rural-conversation-history.json");
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
  if (metadata.redirectSection === testCase.section || metadata.moduleSignal?.section === testCase.section || testCase.section === "any") score += 10; else notes.push(`wrong section: ${metadata.redirectSection || metadata.moduleSignal?.section || "none"}`);
  if (frontier || testCase.providerTruth) score += 10; else notes.push("frontier communication metadata missing");
  if (frontier?.nextQuestion || questionCount >= 1 || testCase.providerTruth) score += 10; else notes.push("no next question");
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
  if (testCase.providerTruth) {
    if (hasAny(lower, [/live|verified|current|source|provider|connect|not have|do not have|cannot verify|available/])) score += 8;
    else notes.push("provider-truth language missing");
  }
  return { score, notes, wordCount, questionCount, frontier };
}

const coreCases = [
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

const expandedCases = [
  { persona: "urgent-mother", prompt: "Nexus baby very hot and weak no doctor", section: "health", urgent: true, expectAny: [/safe|urgent|emergency|where|baby/], forbidAny: [/diagnos/], maxWords: 80 },
  { persona: "urgent-injury", prompt: "Nexus my father bleeding after farm accident help", section: "health", urgent: true, expectAny: [/safe|urgent|emergency|where|bleeding/], forbidAny: [/diagnos/], maxWords: 80 },
  { persona: "medicine-rural", prompt: "Nexus no pharmacy in village need pills for grandma", section: "health", expectAny: [/medicine|pharmacy|clinic|health|where/], forbidAny: [/diagnos/], maxWords: 90 },
  { persona: "clinic-location", prompt: "Nexus where clinic near my village I am in Kenya", section: "health", expectAny: [/clinic|where|kenya|near/], maxWords: 90 },
  { persona: "mobile-clinic", prompt: "Nexus mobile clinic coming how do I register my mother", section: "health", expectAny: [/clinic|mother|register|where|health/], forbidAny: [/diagnos/], maxWords: 95 },
  { persona: "hearing-support", prompt: "Nexus I cannot hear well give captions health help", section: "health", expectAny: [/caption|health|hear|where|need/], maxWords: 90 },
  { persona: "low-bandwidth-health", prompt: "Nexus bad internet need doctor by phone", section: "health", expectAny: [/phone|health|doctor|where/], forbidAny: [/diagnos/], maxWords: 90 },
  { persona: "pharmacy-cost", prompt: "Nexus medicine cost too much can you help me find support", section: "health", expectAny: [/medicine|pharmacy|support|where/], forbidAny: [/diagnos/], maxWords: 95 },
  { persona: "cold-provider", prompt: "Nexus who treats cold in my area", section: "health", expectAny: [/clinic|doctor|provider|care|where/], forbidAny: [/best doctor is/, /diagnos/], maxWords: 95 },
  { persona: "symptom-unclear", prompt: "Nexus body pain sick what now", section: "health", expectAny: [/safe|health|where|care/], forbidAny: [/diagnos/], maxWords: 90 },
  { persona: "incomplete-health-baby", prompt: "Nexus baby hot no doctor", section: "health", urgent: true, expectAny: [/baby|safe|where|urgent|doctor|clinic/], forbidAny: [/diagnos/], maxWords: 80 },
  { persona: "incomplete-medicine-village", prompt: "Nexus medicine finished village far", section: "health", expectAny: [/medicine|clinic|pharmacy|where|health/], forbidAny: [/diagnos/], maxWords: 90 },
  { persona: "fragment-clinic-map", prompt: "Nexus clinic map near", section: "map", expectAny: [/clinic|map|where|near/], maxWords: 90 },
  { persona: "fragment-grandma-pain", prompt: "Nexus grandma pain weak", section: "health", urgent: true, expectAny: [/grandma|safe|where|care|urgent/], forbidAny: [/diagnos/], maxWords: 80 },

  { persona: "farmer-pest", prompt: "Nexus bugs eating maize leaves what should farmer do", section: "trade", expectAny: [/maize|crop|farm|where|photo|save/], forbidAny: [/guarantee/], maxWords: 95 },
  { persona: "farmer-drought", prompt: "Nexus no rain crop dying help me", section: "trade", urgent: true, expectAny: [/crop|farm|rain|where|save/], maxWords: 95 },
  { persona: "farmer-harvest", prompt: "Nexus when harvest cassava and sell", section: "trade", expectAny: [/cassava|harvest|sell|where|market/], maxWords: 95 },
  { persona: "farmer-photo", prompt: "Nexus I can show video of crop bad can you help buyer", section: "trade", expectAny: [/video|crop|buyer|where|farm/], maxWords: 95 },
  { persona: "farmer-drone-simple", prompt: "Nexus drone saw red area in farm what mean", section: "trade", expectAny: [/farm|crop|area|photo|where|red/], forbidAny: [/ndvi.*vegetation.*index/], maxWords: 95 },
  { persona: "seller-price-truth", prompt: "Nexus what is maize price in Kenya today", section: "trade", providerTruth: true, expectAny: [/maize|price|kenya|market|live|current|verified|connect/], maxWords: 120 },
  { persona: "seller-buyer", prompt: "Nexus buyer wants beans but I don't know fair price", section: "trade", expectAny: [/buyer|beans|price|market|where/], maxWords: 100 },
  { persona: "route-risk", prompt: "Nexus road unsafe from farm to Lagos buyer what route", section: "map", expectAny: [/route|road|buyer|where|start/], maxWords: 95 },
  { persona: "delivery-late", prompt: "Nexus truck late with tomatoes buyer angry", section: "trade", expectAny: [/truck|buyer|route|tomatoes|where|message/], maxWords: 100 },
  { persona: "payment-trust", prompt: "Nexus buyer says paid but I no see money", section: "trade", expectAny: [/buyer|paid|money|payment|check/], forbidAny: [/release.*crop.*now/], maxWords: 100 },

  { persona: "job-general", prompt: "Nexus I need work but no computer", section: "workforce", expectAny: [/work|job|skill|where|country/], maxWords: 95 },
  { persona: "job-caregiver", prompt: "Nexus I take care children what job can I do", section: "workforce", expectAny: [/job|work|children|skill|country/], maxWords: 100 },
  { persona: "job-agri", prompt: "Nexus I know farming can I get paid work", section: "workforce", expectAny: [/farming|work|job|skill|where/], maxWords: 95 },
  { persona: "job-documents", prompt: "Nexus apply job but I have no certificate", section: "workforce", expectAny: [/job|certificate|apply|skill|country/], forbidAny: [/guarantee/], maxWords: 100 },
  { persona: "job-south-africa", prompt: "Nexus I want work South Africa from Kenya", section: "workforce", expectAny: [/south africa|kenya|work|job|country/], maxWords: 100 },
  { persona: "job-graduate-fast", prompt: "Nexus bio chemistry school finished job please", section: "workforce", expectAny: [/job|work|skill|country|career/], maxWords: 105 },
  { persona: "job-interview", prompt: "Nexus employer call me tomorrow I am scared", section: "workforce", expectAny: [/employer|tomorrow|interview|work|prepare/], maxWords: 100 },
  { persona: "job-local-language", prompt: "Nexus kazi tafadhali farm worker", section: "workforce", expectAny: [/work|job|farm|skill|country/], maxWords: 100 },

  { persona: "learner-no-read", prompt: "Nexus I cannot read well teach by voice", section: "learning", expectAny: [/voice|learn|lesson|slow|what/], maxWords: 95 },
  { persona: "learner-child", prompt: "Nexus my daughter wants learn farming simple", section: "learning", expectAny: [/learn|farming|daughter|simple|what/], maxWords: 95 },
  { persona: "learner-certificate", prompt: "Nexus I finished lesson how get certificate", section: "learning", expectAny: [/lesson|certificate|learn|course/], maxWords: 95 },
  { persona: "learner-language", prompt: "Nexus explain this in French slowly", section: "learning", expectAny: [/french|slow|explain|learn|language/], maxWords: 95 },
  { persona: "learner-confused", prompt: "Nexus too many words I no understand", section: "learning", expectAny: [/simple|slow|understand|what|learn/], maxWords: 85 },

  { persona: "map-clinic", prompt: "Nexus show clinic and pharmacy on map near me", section: "map", expectAny: [/map|clinic|pharmacy|where|near/], maxWords: 95 },
  { persona: "map-market", prompt: "Nexus show market from my farm", section: "map", expectAny: [/map|market|farm|where|start/], maxWords: 95 },
  { persona: "map-country-route", prompt: "Nexus route Kenya to Nigeria for crop delivery", section: "map", expectAny: [/route|kenya|nigeria|delivery|where/], maxWords: 100 },
  { persona: "map-lost", prompt: "Nexus lost driver no gps what now", section: "map", expectAny: [/driver|where|route|start|go/], maxWords: 95 },
  { persona: "map-weather-route", prompt: "Nexus rain coming is road safe to market", section: "map", expectAny: [/road|market|safe|where|route/], maxWords: 95 },

  { persona: "mixed-spanish-health", prompt: "Nexus ayuda mi mama sick clinic", section: "health", expectAny: [/clinic|health|mama|where|safe/], forbidAny: [/diagnos/], maxWords: 95 },
  { persona: "mixed-french-crop", prompt: "Nexus aide moi cassava crop bad", section: "trade", expectAny: [/cassava|crop|farm|where/], maxWords: 95 },
  { persona: "mixed-swahili-work", prompt: "Nexus nataka kazi farm job please", section: "workforce", expectAny: [/job|work|farm|skill|country/], maxWords: 100 },
  { persona: "mixed-portuguese-medicine", prompt: "Nexus preciso remedio no clinic", section: "health", expectAny: [/medicine|clinic|health|where/], forbidAny: [/diagnos/], maxWords: 95 },
  { persona: "mixed-arabic-map", prompt: "Nexus Egypt clinic map help", section: "map", expectAny: [/egypt|clinic|map|where/], maxWords: 95 },

  { persona: "recovery-wrong-area", prompt: "Nexus no not job I mean medicine for child", section: "health", expectAny: [/medicine|child|health|where|safe/], forbidAny: [/diagnos/], maxWords: 95 },
  { persona: "recovery-repeat", prompt: "Nexus you heard me wrong crop not doctor", section: "trade", expectAny: [/crop|farm|where|what/], maxWords: 90 },
  { persona: "recovery-stop-redirect", prompt: "Nexus stop I want map to clinic", section: "map", expectAny: [/map|clinic|where|start/], maxWords: 95 },
  { persona: "recovery-too-fast", prompt: "Nexus slow down explain doctor help", section: "health", expectAny: [/slow|health|doctor|where|care/], forbidAny: [/diagnos/], maxWords: 95 },
  { persona: "recovery-unknown", prompt: "Nexus thing bad help me", section: "dashboard", expectAny: [/health|crops|work|learning|map|what/], maxWords: 80 },

  { persona: "provider-truth-jobs", prompt: "Nexus are there live jobs in Rwanda today", section: "workforce", providerTruth: true, expectAny: [/live|jobs|rwanda|provider|current|connect|available/], maxWords: 120 },
  { persona: "provider-truth-clinic", prompt: "Nexus can you verify closest pharmacy in Nairobi now", section: "health", providerTruth: true, expectAny: [/pharmacy|nairobi|live|verify|provider|current|where/], forbidAny: [/diagnos/], maxWords: 120 },
  { persona: "provider-truth-course", prompt: "Nexus current courses for women farmers Ghana", section: "learning", providerTruth: true, expectAny: [/course|women|farmers|ghana|live|provider|current/], maxWords: 120 },
  { persona: "provider-truth-weather", prompt: "Nexus is it too hot for grandma to walk today", section: "dashboard", providerTruth: true, expectAny: [/weather|temperature|hot|walk|today|location|provider/], maxWords: 120 },
  { persona: "provider-truth-drone", prompt: "Nexus can drone prove crop disease today", section: "trade", providerTruth: true, expectAny: [/drone|crop|prove|photo|data|provider|cannot|connect/], forbidAny: [/disease is/], maxWords: 120 },

  { persona: "admin-like-user", prompt: "Nexus I don't know what this platform can do", section: "dashboard", expectAny: [/health|crops|work|learning|map|market|tell me/], maxWords: 95 },
  { persona: "women-support", prompt: "Nexus women farmers need help with children and crops", section: "dashboard", expectAny: [/women|farmers|children|crops|health|learn/], maxWords: 105 },
  { persona: "elder-simple", prompt: "Nexus grandma wants just one button for help", section: "dashboard", expectAny: [/health|crops|work|learning|map|one|help/], maxWords: 90 },
  { persona: "phone-call-style", prompt: "Nexus call clinic but I no know words", section: "health", expectAny: [/clinic|call|health|where|need/], forbidAny: [/diagnos/], maxWords: 95 },
  { persona: "market-buyer-language", prompt: "Nexus buyer speaks French I speak English help sale", section: "trade", expectAny: [/buyer|french|english|sale|message/], maxWords: 100 }
];

const cases = [...coreCases, ...expandedCases];

function writeScoreHistory(summary, results) {
  fs.mkdirSync(reportDir, { recursive: true });
  const previous = fs.existsSync(historyFile)
    ? JSON.parse(fs.readFileSync(historyFile, "utf8"))
    : [];
  const entry = {
    ...summary,
    createdAt: new Date().toISOString(),
    caseCount: results.length,
    weakCases: results
      .filter(item => item.score < 86 || item.notes.length)
      .map(item => ({
        persona: item.persona,
        score: item.score,
        notes: item.notes,
        intent: item.intent,
        section: item.section,
        wordCount: item.wordCount,
        questionCount: item.questionCount
      }))
      .slice(0, 20),
    categoryAverages: results.reduce((acc, item) => {
      const category = item.persona.split("-")[0] || "general";
      acc[category] = acc[category] || { total: 0, count: 0 };
      acc[category].total += item.score;
      acc[category].count += 1;
      return acc;
    }, {})
  };
  Object.keys(entry.categoryAverages).forEach(key => {
    const group = entry.categoryAverages[key];
    entry.categoryAverages[key] = Number((group.total / group.count).toFixed(1));
  });
  const history = [entry, ...previous].slice(0, 50);
  fs.writeFileSync(historyFile, `${JSON.stringify(history, null, 2)}\n`);
  return entry;
}

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
    const results = [];
    for (const testCase of cases) {
      fs.copyFileSync(sourceDb, tempDb);
      cookie = "";
      await call("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
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
    const summary = {
      average: Number(average.toFixed(1)),
      lowestPersona: lowest.persona,
      lowestScore: lowest.score,
      passThreshold: 82,
      minimumCaseThreshold: 70
    };
    const historyEntry = writeScoreHistory(summary, results);
    assert(average >= 82, `Average rural conversation score too low: ${average.toFixed(1)}`);
    assert(lowest.score >= 70, `Lowest rural conversation score too low: ${lowest.persona} ${lowest.score}`);
    console.log(`Synthetic rural conversation eval passed: ${results.length} personas, average ${average.toFixed(1)}, lowest ${lowest.persona} ${lowest.score}, history ${path.relative(root, historyFile)}`);
    if (historyEntry.weakCases.length) {
      console.log(`Watchlist: ${historyEntry.weakCases.slice(0, 5).map(item => `${item.persona} ${item.score}`).join(", ")}`);
    }
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.message || error);
  process.exit(1);
});
