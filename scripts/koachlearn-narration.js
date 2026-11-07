"use strict";

// SPOKEN NARRATION for the Koach Learn lesson videos (owner, 7 November 2026: "i need sound in the videos").
// Each slide of a lesson video is read aloud in the course's own language, and the slide stays on screen until the voice has finished.
//
// Voices (set below; change one line to change a voice):
//   en es fr pt ar sw am   Azure Speech neural voices  (needs AZURE_SPEECH_KEY and AZURE_SPEECH_REGION)
//   ha yo ig               Spitch voices               (needs SPITCH_API_KEY)
// The keys are read from the environment or from a file named .env.narration in the repository folder (never committed).
// Every spoken line is kept in output/koachlearn-audio/<language>/ under a name made from its words and voice, so a line is paid for once,
// a rebuilt video costs nothing, and a course that changes only re-speaks the lines that changed.
//
//   narrationLines(blocks)            -> the words a slide's voice reads (pure)
//   cachedAudio(lang, text)           -> { file, seconds } | null   (synchronous: the cache only)
//   fillCache(lines, { onProgress })  -> speaks every missing line (asynchronous: calls the voice service)

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execFileSync } = require("child_process");

const AUDIO_ROOT = path.join(__dirname, "..", "output", "koachlearn-audio");

// provider: "azure" | "spitch" | "fake" (a test tone of the right length, never used for real courses)
const VOICES = {
  en: { provider: "azure", voice: "en-US-JennyNeural", locale: "en-US" },
  es: { provider: "azure", voice: "es-MX-DaliaNeural", locale: "es-MX" },
  fr: { provider: "azure", voice: "fr-FR-DeniseNeural", locale: "fr-FR" },
  pt: { provider: "azure", voice: "pt-BR-FranciscaNeural", locale: "pt-BR" },
  ar: { provider: "azure", voice: "ar-SA-ZariyahNeural", locale: "ar-SA" },
  sw: { provider: "azure", voice: "sw-KE-ZuriNeural", locale: "sw-KE" },
  am: { provider: "azure", voice: "am-ET-MekdesNeural", locale: "am-ET" },
  ha: { provider: "spitch", voice: "amina", locale: "ha" },
  yo: { provider: "spitch", voice: "sade", locale: "yo" },
  ig: { provider: "spitch", voice: "ngozi", locale: "ig" }
};

// the words a slide's voice reads: its blocks without the grey top line (course name and lesson number), without bullet marks and direction marks
function narrationLines(blocks) {
  const strip = text => String(text || "").replace(/[‎‏‪-‮]/g, "").replace(/^[\s•\-–—*]+/, "").replace(/\s+/g, " ").trim();
  const spoken = (blocks || []).slice(1).map(block => strip(block.text)).filter(Boolean);
  // a sentence that ends without a stop gets one, so the voice drops at the end of each line
  return spoken.map(line => (/[.!?؟።。…:]$/.test(line) ? line : `${line}.`)).join(" ");
}

function loadKeys() {
  const file = path.join(__dirname, "..", ".env.narration");
  if (fs.existsSync(file)) {
    for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}

const fileFor = (lang, text) => {
  const v = VOICES[lang]; if (!v) throw new Error(`no narration voice is set for "${lang}"`);
  const hash = crypto.createHash("sha1").update(`${v.provider}|${v.voice}|${text}`).digest("hex").slice(0, 24);
  return path.join(AUDIO_ROOT, lang, `${hash}.mp3`);
};

function secondsOf(file) {
  const out = execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", file], { encoding: "utf8" });
  return Number.parseFloat(out) || 0;
}

function cachedAudio(lang, text) {
  if (!text) return null;
  const file = fileFor(lang, text);
  return fs.existsSync(file) && fs.statSync(file).size > 200 ? { file, seconds: secondsOf(file) } : null;
}

// ---- the voice services ----
const xml = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

async function azureSpeak(v, text) {
  const key = process.env.AZURE_SPEECH_KEY, region = process.env.AZURE_SPEECH_REGION;
  if (!key || !region) throw new Error("AZURE_SPEECH_KEY and AZURE_SPEECH_REGION are not set (see .env.narration)");
  const ssml = `<speak version='1.0' xml:lang='${v.locale}'><voice xml:lang='${v.locale}' name='${v.voice}'><prosody rate='-8%'>${xml(text)}</prosody></voice></speak>`;
  const response = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
    method: "POST",
    headers: { "Ocp-Apim-Subscription-Key": key, "Content-Type": "application/ssml+xml", "X-Microsoft-OutputFormat": "audio-24khz-96kbitrate-mono-mp3", "User-Agent": "koachlearn-narration" },
    body: ssml, signal: AbortSignal.timeout(60000)
  });
  if (!response.ok) { const e = new Error(`Azure Speech answered ${response.status}`); e.status = response.status; throw e; }
  return Buffer.from(await response.arrayBuffer());
}

async function spitchSpeak(v, text) {
  const key = process.env.SPITCH_API_KEY;
  if (!key) throw new Error("SPITCH_API_KEY is not set (see .env.narration)");
  const response = await fetch("https://api.spitch.app/v1/speech", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ text, voice: v.voice, language: v.locale, format: "mp3", speed: 0.95 }), signal: AbortSignal.timeout(90000)
  });
  if (!response.ok) { const e = new Error(`Spitch answered ${response.status}`); e.status = response.status; throw e; }
  return Buffer.from(await response.arrayBuffer());
}

// a quiet tone about as long as the words would take to say: only for testing the video timing without a voice service
function fakeSpeak(_v, text, file) {
  const seconds = Math.max(1, text.length / 14);
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-f", "lavfi", "-i", `sine=frequency=330:sample_rate=24000:duration=${seconds.toFixed(2)}`, "-af", "volume=0.05", "-b:a", "48k", file]);
}

async function speakOnce(lang, text) {
  const v = VOICES[lang];
  const file = fileFor(lang, text);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (v.provider === "fake") { fakeSpeak(v, text, file); return file; }
  let bytes;
  for (let attempt = 0; ; attempt += 1) {
    try { bytes = v.provider === "azure" ? await azureSpeak(v, text) : await spitchSpeak(v, text); break; }
    catch (error) {
      const again = attempt < 4 && (error.status === 429 || error.status >= 500 || /timeout|fetch failed/i.test(String(error.message)));
      if (!again) throw error;
      await new Promise(r => setTimeout(r, 1500 * 2 ** attempt));
    }
  }
  fs.writeFileSync(file, bytes);
  return file;
}

// speaks every line that is not already kept; at most three at a time (the services refuse a flood)
// what speaking the missing lines would cost, per language, BEFORE anything is spoken (about 14 characters a second; Azure bills by characters, Spitch by the second)
const SPITCH_PER_SECOND = 0.0014;                                   // from docs.spitch.app, 7 November 2026
const AZURE_PER_MILLION = Number(process.env.AZURE_PER_MILLION) || 16; // NOT confirmed from Microsoft's page: set AZURE_PER_MILLION to the price shown in the Azure portal
function plan(lines) {
  const todo = [], seen = new Set();
  for (const { lang, text } of lines) {
    if (!text) continue;
    const id = `${lang}|${text}`;
    if (seen.has(id)) continue; seen.add(id);
    if (!cachedAudio(lang, text)) todo.push({ lang, text });
  }
  const perLang = {}; let dollars = 0;
  for (const j of todo) {
    const p = (perLang[j.lang] = perLang[j.lang] || { slides: 0, characters: 0, dollars: 0 });
    p.slides += 1; p.characters += j.text.length;
    const cost = VOICES[j.lang].provider === "spitch" ? (j.text.length / 14) * SPITCH_PER_SECOND : (j.text.length / 1e6) * AZURE_PER_MILLION;
    p.dollars += cost; dollars += cost;
  }
  return { todo, perLang, dollars, unique: seen.size };
}

async function fillCache(lines, { onProgress = () => {}, concurrency = 3, maxDollars = null } = {}) {
  loadKeys();
  const { todo, unique } = plan(lines);
  const seen = { size: unique };
  if (maxDollars != null) { const { dollars } = plan(lines); if (dollars > maxDollars) throw new Error(`speaking the missing lines would cost about US$${dollars.toFixed(2)}, more than the limit of US$${maxDollars}; nothing was spoken`); }
  let done = 0, next = 0;
  async function worker() {
    while (next < todo.length) {
      const job = todo[next++];
      await speakOnce(job.lang, job.text);
      done += 1; onProgress(done, todo.length);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, todo.length) }, worker));
  return { spoken: todo.length, kept: seen.size - todo.length, characters: todo.reduce((n, j) => n + j.text.length, 0) };
}

module.exports = { plan, VOICES, narrationLines, cachedAudio, fillCache, fileFor, loadKeys, AUDIO_ROOT };
