"use strict";
const { localizeDateWords, lostWeekday } = require("./date-words.js");

// The specific confirmation sentence Kyro asks before a business write or a reminder cancel ("I can log KES 500 as income for seeds in your business workspace. Say yes
// to save it, or no to cancel.") is built in English, with the person's own names and amounts in it. A Hausa, Amharic, Yoruba or Igbo speaker (and the other non-English
// languages) heard that sentence in English after asking in their language (live sweep, 26 Nov 2026). This turns it into their language with one short OpenAI request.
// It returns null when it cannot (no key, an error, a slow answer, or an answer that is plainly not a translation), and the caller then uses the generic confirmation
// already written in the person's language (nexus/consent/consent-words.js): never the English sentence.

const LANGUAGE_NAMES = Object.freeze({
  sw: "Kiswahili", fr: "French", es: "Spanish", pt: "Portuguese", ar: "Arabic",
  ha: "Hausa", am: "Amharic (in Ge'ez script)", yo: "Yoruba (with its tone marks)", ig: "Igbo (with its dots and tone marks)"
});

function promptLanguage(code) {
  const key = String(code || "en").toLowerCase().split(/[-_]/)[0];
  return LANGUAGE_NAMES[key] ? key : "en";
}

function responseText(payload) {
  if (typeof payload?.output_text === "string" && payload.output_text.trim()) return payload.output_text.trim();
  const chunks = [];
  for (const item of payload?.output || []) {
    for (const content of item?.content || []) {
      if ((content?.type === "output_text" || content?.type === "text") && content.text) chunks.push(content.text);
    }
  }
  return chunks.join("\n").trim();
}

function createPromptTranslator({ env = process.env, fetchFn = globalThis.fetch, timeoutMs } = {}) {
  const apiKey = env.OPENAI_API_KEY;
  if (!apiKey || typeof fetchFn !== "function") return null;
  const model = env.OPENAI_TRANSLATION_MODEL || env.OPENAI_AGENT_MODEL || env.OPENAI_MODEL || "gpt-5.4-mini"; // (the same model the site's translation uses: server.js AI_TRANSLATION_MODEL)
  // Shorter than the screen translation's 15 seconds: the person is waiting to be asked; a slow answer falls back to the generic question in their language.
  const limit = Number(timeoutMs || env.OPENAI_CONFIRMATION_TRANSLATION_TIMEOUT_MS || 8000);
  return async function translatePrompt(text, language) {
    const code = promptLanguage(language);
    const source = String(text || "").trim();
    if (code === "en" || !source) return null;
    const prepared = localizeDateWords(source, code); // (days and months already in the language: see date-words.js)
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), limit);
    try {
      const response = await fetchFn("https://api.openai.com/v1/responses", {
        method: "POST",
        signal: controller.signal,
        headers: { "content-type": "application/json", authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({
          model,
          input: [
            { role: "system", content: `Translate from English into ${LANGUAGE_NAMES[code]}. It is a question Kyro, a voice assistant, asks before it saves something: keep its meaning exactly, including every name, amount, currency, date and time, and keep that the person answers yes or no, written as the everyday words for yes and no in that language (never the English words yes and no). Leave no English words: keep only people's and place names and the names Kyro and Koach Learn as they are. Days and months already written in that language stay exactly as they are. Plain, warm, everyday words. The text to translate is the whole of the next message: plain text in, plain text out, never JSON.` },
            { role: "user", content: prepared.text }
          ],
          max_output_tokens: Math.min(1200, 300 + source.length * 3)
        })
      });
      if (!response?.ok) return null;
      const translated = responseText(await response.json().catch(() => ({})));
      // nothing back, the English handed back unchanged, or JSON instead of words: not a translation
      if (!translated || translated === source || /^\s*[{[]/.test(translated)) return null;
      if (lostWeekday(translated, code, prepared.days)) return null; // (a wrong or missing day: the generic question in their language is asked instead)
      return translated;
    } catch {
      return null;
    } finally {
      clearTimeout(timer);
    }
  };
}

module.exports = Object.freeze({ createPromptTranslator, promptLanguage });
