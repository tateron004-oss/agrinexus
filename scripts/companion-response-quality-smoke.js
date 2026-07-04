const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = Number(process.env.COMPANION_RESPONSE_QUALITY_SMOKE_PORT || 4460);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-companion-response-quality-smoke-db.json");
let cookie = "";

const bannedPhrases = [
  "workflow is ready",
  "command completed",
  "module opened",
  "routing request",
  "metadata saved",
  "intent detected",
  "provider handoff initiated"
];

const cases = [
  { prompt: "Work", language: "en", deferred: true, includes: ["I can help", "one question", "what type of work"], languageHints: ["work"] },
  { prompt: "I need medicine", language: "en", deferred: true, includes: ["I heard you need medicine", "can't prescribe"], languageHints: ["medicine"] },
  { prompt: "My crops are failing", language: "en", deferred: true, includes: ["I'm sorry", "what crop", "symptoms"], languageHints: ["crop"] },
  { prompt: "Help me sell maize", language: "en", deferred: true, includes: ["I can help", "How much maize", "proof of delivery"], languageHints: ["maize"] },
  { prompt: "Can AgriTrade talk to me about selling crops and contacting buyers?", language: "en", deferred: true, intent: "conversation.open_reasoning", includes: ["AgriTrade can talk", "What crop are you selling"], languageHints: ["AgriTrade"] },
  { prompt: "Send the buyer a message", language: "en", confirmation: true, includes: ["message", "buyer", "Before I send anything"], languageHints: ["buyer"] },
  { prompt: "Send WhatsApp to the seller", language: "en", confirmation: true, includes: ["WhatsApp", "seller", "Before I send anything"], languageHints: ["seller"] },
  { prompt: "Call the provider", language: "en", confirmation: true, includes: ["provider", "Before I call anyone"], languageHints: ["provider"] },

  { prompt: "Necesito medicina", language: "es", deferred: true, includes: ["necesitas medicina", "no puedo recetar"], languageHints: ["medicina"] },
  { prompt: "Busco trabajo", language: "es", deferred: true, includes: ["oportunidades de trabajo", "Que tipo de trabajo"], languageHints: ["trabajo"] },
  { prompt: "Ayudame a vender maiz", language: "es", deferred: true, includes: ["Cuanto maiz", "comprador"], languageHints: ["maiz"] },

  { prompt: "Je cherche du travail", language: "fr", deferred: true, includes: ["travail", "Quel type de travail"], languageHints: ["travail"] },
  { prompt: "J ai besoin de medicaments", language: "fr", deferred: true, includes: ["besoin de medicaments", "je ne peux pas prescrire"], languageHints: ["medicaments"] },
  { prompt: "Aide moi a vendre du mais", language: "fr", deferred: true, includes: ["Quelle quantite de mais", "acheteur"], languageHints: ["mais"] },

  { prompt: "Nahitaji kazi", language: "sw", deferred: true, includes: ["nafasi za kazi", "Unatafuta kazi gani"], languageHints: ["kazi"] },
  { prompt: "Nahitaji dawa", language: "sw", deferred: true, includes: ["unahitaji dawa", "siwezi kuandika dawa"], languageHints: ["dawa"] },
  { prompt: "Nisaidie kuuza mahindi", language: "sw", deferred: true, includes: ["mahindi", "mnunuzi"], languageHints: ["mahindi"] },

  { prompt: "Preciso de trabalho", language: "pt", deferred: true, includes: ["oportunidades de trabalho", "Que tipo de trabalho"], languageHints: ["trabalho"] },
  { prompt: "Preciso de remedio", language: "pt", deferred: true, includes: ["precisa de remedio", "nao posso prescrever"], languageHints: ["remedio"] },
  { prompt: "Ajude me a vender milho", language: "pt", deferred: true, includes: ["Quanto milho", "comprador"], languageHints: ["milho"] }
];

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let index = 0; index < 80; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Companion response quality smoke server did not become reachable");
}

async function fetchWithRetry(url, options) {
  let lastError;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return await fetch(url, options);
    } catch (error) {
      lastError = error;
      const code = error?.cause?.code || error?.code;
      if (!["ECONNRESET", "ECONNREFUSED"].includes(code) || attempt === 2) throw error;
      await wait(200 + attempt * 150);
    }
  }
  throw lastError;
}

async function call(route, body) {
  const response = await fetchWithRetry(`${base}${route}`, {
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

async function command(prompt, language = "en") {
  return call("/api/agent/command", {
    command: prompt,
    inputMode: "voice",
    outputMode: "voice",
    conversational: true,
    mode: "user",
    targetLanguage: language
  });
}

function assertSpokenShape(prompt, response) {
  const text = String(response || "").trim();
  assert(text.length >= 35, `${prompt} should not be a tiny robotic response`);
  assert(text.length <= 650, `${prompt} should stay spoken-friendly`);
  const lower = text.toLowerCase();
  for (const phrase of bannedPhrases) {
    assert(!lower.includes(phrase), `${prompt} should avoid banned phrase "${phrase}"`);
  }
  const questionCount = (text.match(/\?/g) || []).length;
  assert(questionCount <= 1, `${prompt} should ask only one question`);
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

    for (const item of cases) {
      const state = await command(item.prompt, item.language);
      const result = state.commandResult || {};
      const metadata = result.metadata || {};
      const response = String(result.response || "");
      assertSpokenShape(item.prompt, response);
      if (item.intent) assert.strictEqual(result.intent, item.intent, `${item.prompt} should route to ${item.intent}`);
      if (item.deferred) {
        assert.strictEqual(metadata.workflowDeferred, true, `${item.prompt} should defer workflow`);
        assert.strictEqual(metadata.workflowOffered, true, `${item.prompt} should offer workflow after context`);
        assert.strictEqual(state.companionRouteOutcome?.workflowOpened || metadata.companionRouteOutcome?.workflowOpened, false, `${item.prompt} should not open workflow immediately`);
      }
      if (item.confirmation) {
        assert.strictEqual(metadata.confirmationRequired, true, `${item.prompt} should require confirmation`);
        assert.strictEqual(metadata.executionDeferred, true, `${item.prompt} should defer execution`);
      }
      for (const phrase of item.includes || []) {
        assert(response.toLowerCase().includes(phrase.toLowerCase()), `${item.prompt} response should include "${phrase}"`);
      }
      if (item.language !== "en") {
        assert.strictEqual(metadata.responseLanguage || metadata.translation?.targetLanguage, item.language, `${item.prompt} should preserve target language ${item.language}`);
      }
    }

    console.log("Companion response quality smoke passed");
    for (const item of cases) console.log(`- ${item.prompt} [${item.language}] -> ${item.deferred ? "conversation-first" : item.confirmation ? "confirmation-gated" : "conversation"}`);
  } finally {
    server.kill();
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Best effort cleanup for Windows file locks.
    }
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
