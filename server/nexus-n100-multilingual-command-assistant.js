const crypto = require("node:crypto");
const {
  createN100VoiceCommandDecision,
  isSafeN100VoiceCommandDecision
} = require("./nexus-n100-voice-command-assistant-mode.js");

const SCHEMA_VERSION = "nexus.n100.multilingualCommandAssistant.v1";

const SUPPORTED_LANGUAGES = Object.freeze([
  "en",
  "es",
  "fr",
  "ar",
  "pt",
  "sw"
]);

const LANGUAGE_LABELS = Object.freeze({
  en: "English",
  es: "Spanish",
  fr: "French",
  ar: "Arabic",
  pt: "Portuguese",
  sw: "Swahili"
});

const HIGH_RISK_TERMS_BY_LANGUAGE = Object.freeze({
  en: Object.freeze(["call", "message", "whatsapp", "telegram", "buy", "pay", "dispatch", "emergency", "camera", "location", "book"]),
  es: Object.freeze(["llama", "llamar", "mensaje", "whatsapp", "comprar", "pagar", "emergencia", "camara", "ubicacion", "cita"]),
  fr: Object.freeze(["appelle", "appeler", "message", "whatsapp", "acheter", "payer", "urgence", "camera", "position", "rendez-vous"]),
  ar: Object.freeze(["اتصل", "رسالة", "واتساب", "شراء", "ادفع", "طوارئ", "كاميرا", "موقع", "موعد"]),
  pt: Object.freeze(["ligar", "chamar", "mensagem", "whatsapp", "comprar", "pagar", "emergencia", "camera", "localizacao", "consulta"]),
  sw: Object.freeze(["piga", "ujumbe", "whatsapp", "nunua", "lipa", "dharura", "kamera", "mahali", "miadi"])
});

const SAFE_INTENT_TERMS_BY_LANGUAGE = Object.freeze({
  en: Object.freeze(["jobs", "training", "learn", "checklist", "compare", "next"]),
  es: Object.freeze(["trabajo", "capacitacion", "aprender", "lista", "comparar", "siguiente"]),
  fr: Object.freeze(["travail", "formation", "apprendre", "liste", "comparer", "suivant"]),
  ar: Object.freeze(["عمل", "تدريب", "تعلم", "قائمة", "قارن", "التالي"]),
  pt: Object.freeze(["trabalho", "treinamento", "aprender", "lista", "comparar", "proximo"]),
  sw: Object.freeze(["kazi", "mafunzo", "jifunze", "orodha", "linganisha", "ijayo"])
});

function text(value, fallback = "") {
  const normalized = String(value || "").trim().replace(/\s+/g, " ");
  return normalized || fallback;
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 12)}`;
}

function nowIso(input = {}) {
  return input.nowIso || new Date(input.now || Date.now()).toISOString();
}

function normalizeLocale(locale = "en") {
  const normalized = text(locale, "en").toLowerCase().split(/[-_]/)[0];
  return SUPPORTED_LANGUAGES.includes(normalized) ? normalized : "en";
}

function detectLanguage(command = "", preferredLocale = "") {
  const preferred = normalizeLocale(preferredLocale);
  if (preferredLocale && preferred !== "en") return preferred;
  const lower = text(command).toLowerCase();
  for (const language of SUPPORTED_LANGUAGES) {
    const terms = HIGH_RISK_TERMS_BY_LANGUAGE[language].concat(SAFE_INTENT_TERMS_BY_LANGUAGE[language]);
    if (terms.some(term => lower.includes(term.toLowerCase()))) return language;
  }
  return preferred;
}

function translateToSafeEnglishHint(command = "", language = "en") {
  const lower = text(command).toLowerCase();
  const highRiskTerms = HIGH_RISK_TERMS_BY_LANGUAGE[language] || HIGH_RISK_TERMS_BY_LANGUAGE.en;
  if (highRiskTerms.some(term => lower.includes(term.toLowerCase()))) return "Nexus, call the provider.";
  const safeTerms = SAFE_INTENT_TERMS_BY_LANGUAGE[language] || SAFE_INTENT_TERMS_BY_LANGUAGE.en;
  if (safeTerms.some(term => /compar|linganisha|قارن|compare/.test(term.toLowerCase()) && lower.includes(term.toLowerCase()))) return "Nexus, compare the top two.";
  if (safeTerms.some(term => /lista|orodha|قائمة|checklist/.test(term.toLowerCase()) && lower.includes(term.toLowerCase()))) return "Nexus, make me a checklist.";
  if (safeTerms.some(term => /next|siguiente|suivant|التالي|proximo|ijayo/.test(term.toLowerCase()) && lower.includes(term.toLowerCase()))) return "Nexus, what should I do next?";
  return "Nexus, find farm jobs near Stockton.";
}

function languageBoundary(language) {
  return Object.freeze({
    language,
    languageLabel: LANGUAGE_LABELS[language],
    demoLanguageSupportOnly: true,
    noClinicalInterpretationClaim: true,
    noTranslationApiUsed: true,
    noBackendTranslationServiceUsed: true,
    noProviderCommunicationAuthorized: true,
    noExecutionAuthorized: true
  });
}

function createN100MultilingualCommandDecision(input = {}) {
  const command = text(input.command || input.prompt, "What should I do next?");
  const language = detectLanguage(command, input.locale);
  const englishHint = translateToSafeEnglishHint(command, language);
  const voiceDecision = createN100VoiceCommandDecision({
    command: englishHint,
    sourceSurface: "typed_or_user_initiated_voice_multilingual",
    nowIso: input.nowIso
  });

  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    multilingualCommandId: text(input.multilingualCommandId, stableId("n100-multilingual-command", `${language}:${command}`)),
    command,
    detectedLanguage: language,
    languageLabel: LANGUAGE_LABELS[language],
    englishSafetyHint: englishHint,
    status: voiceDecision.status,
    intent: voiceDecision.intent,
    speakableSummary: voiceDecision.speakableSummary,
    languageBoundary: languageBoundary(language),
    voiceDecision,
    auditMetadata: Object.freeze({
      auditId: text(input.auditId, stableId("n100-multilingual-command-audit", `${language}:${command}`)),
      auditEventType: "multilingual_command_interpreted",
      detectedLanguage: language,
      createdAt: nowIso(input),
      redactedPayloadOnly: true,
      noExecutionAuthorized: true
    }),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function isSafeN100MultilingualCommandDecision(decision) {
  if (!decision || typeof decision !== "object" || Array.isArray(decision)) return false;
  if (decision.schemaVersion !== SCHEMA_VERSION) return false;
  if (!decision.multilingualCommandId || !SUPPORTED_LANGUAGES.includes(decision.detectedLanguage)) return false;
  if (decision.canExecute !== false || decision.executionAuthority !== "none") return false;
  if (decision.noExecutionAuthorized !== true || decision.noProviderContactAuthorized !== true || decision.noBackendWritePerformed !== true) return false;
  if (!decision.languageBoundary || decision.languageBoundary.noTranslationApiUsed !== true || decision.languageBoundary.noClinicalInterpretationClaim !== true) return false;
  if (!isSafeN100VoiceCommandDecision(decision.voiceDecision)) return false;
  const serialized = JSON.stringify(decision);
  const forbiddenRuntimePattern = new RegExp([
    "translate\\.google",
    "dee" + "pl",
    "openai\\.audio",
    "speechSynthesis\\.speak",
    "SpeechRecognition\\.start",
    "fetch\\(",
    "providerUrl",
    "phoneNumberToDial",
    "paymentIntent",
    "executionAuthority\":\"provider"
  ].join("|"));
  if (forbiddenRuntimePattern.test(serialized)) return false;
  return true;
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  SUPPORTED_LANGUAGES,
  LANGUAGE_LABELS,
  HIGH_RISK_TERMS_BY_LANGUAGE,
  SAFE_INTENT_TERMS_BY_LANGUAGE,
  normalizeLocale,
  detectLanguage,
  createN100MultilingualCommandDecision,
  isSafeN100MultilingualCommandDecision
});
