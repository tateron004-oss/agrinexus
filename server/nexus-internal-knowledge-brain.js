const crypto = require("node:crypto");

const INTERNAL_KNOWLEDGE_ENTRIES = Object.freeze([
  Object.freeze({
    id: "mission-platform",
    category: "mission",
    title: "AgriNexus and Nexus mission",
    keywords: Object.freeze(["agrinexus", "nexus", "mission", "platform", "what can nexus do", "capabilities"]),
    summary: "AgriNexus/Nexus is a workforce, agriculture, marketplace, health-access, learning, and rural support prototype with a controlled voice-operated assistant layer.",
    details: Object.freeze([
      "Nexus can guide users through source-backed answers, training discovery, workforce pathways, agriculture support, AgriTrade browsing, health-access preparation, maps guidance, and controlled workflows.",
      "Nexus must distinguish preview, preparation, confirmation, and execution. It does not claim completed real-world actions unless an approved gate actually performs them."
    ])
  }),
  Object.freeze({
    id: "assistant-capabilities",
    category: "assistant-capabilities",
    title: "Nexus assistant capabilities",
    keywords: Object.freeze(["assistant", "voice", "ask", "talk", "help", "next step", "actions right now"]),
    summary: "Nexus can answer, explain, route, plan, preview, prepare, and guide. Current safe runtime behavior is source-backed or workflow-guided, not uncontrolled execution.",
    details: Object.freeze([
      "Supported low-risk behavior includes app guidance, source-backed previews, safe next steps, learning/workforce/agriculture help, read-only provider data where configured, and controlled workflow cards.",
      "High-impact actions require explicit permission, final confirmation, audit logging, provider readiness, and feature gates before execution."
    ])
  }),
  Object.freeze({
    id: "standard-user-admin",
    category: "roles",
    title: "Standard User and Admin differences",
    keywords: Object.freeze(["standard user", "admin", "full mode", "mode", "differences", "roles"]),
    summary: "Standard User is the primary safe demo/prototype path. Admin/full modes expose broader management views but still cannot bypass safety gates.",
    details: Object.freeze([
      "Standard User focuses on guided assistance, training, jobs, agriculture, health access, maps support, marketplace browse, and controlled previews.",
      "Admin/full mode can inspect broader operational surfaces, but high-risk actions remain permissioned, confirmed, and audit-controlled."
    ])
  }),
  Object.freeze({
    id: "agritrade-browse",
    category: "agritrade",
    title: "AgriTrade marketplace browsing",
    keywords: Object.freeze(["agritrade", "marketplace", "trade", "sell crop", "browse", "buyer", "seller"]),
    summary: "AgriTrade remains the marketplace/agriculture-trade module. Nexus may help users browse or prepare questions, but it must not buy, sell, contact parties, process payment, or create transactions automatically.",
    details: Object.freeze([
      "Safe AgriTrade behavior is browse/review/preparation only.",
      "Transactions, buyer/seller contact, payments, checkout, and account creation require future explicit high-risk gates."
    ])
  }),
  Object.freeze({
    id: "workforce-training",
    category: "workforce-training",
    title: "Workforce and training support",
    keywords: Object.freeze(["workforce", "training", "program", "course", "education", "technician", "job pathway", "agriculture technician", "koachlearn", "lms"]),
    summary: "Nexus can guide users toward workforce development, agriculture training, job readiness, technical pathways, and learning resources.",
    details: Object.freeze([
      "For agriculture technician pathways, Nexus should suggest practical steps: identify local training, learn crop/soil/irrigation basics, build field-support experience, prepare a resume, and compare verified programs.",
      "Koachlearn/LMS and course catalog data can be connected when present; otherwise Nexus should clearly say a verified course source is required."
    ])
  }),
  Object.freeze({
    id: "app-help-faq",
    category: "app-help",
    title: "App help and onboarding",
    keywords: Object.freeze(["help", "faq", "onboarding", "how do i", "use the app", "next step"]),
    summary: "Nexus can explain where to start, recommend safe next steps, and guide users to training, jobs, field support, health access, maps, AgriTrade, or assistant help.",
    details: Object.freeze([
      "The safest next step depends on the user's goal. Nexus should ask one clarifying question when intent is broad.",
      "If a user asks for action, Nexus should preview or prepare before any confirmation gate."
    ])
  }),
  Object.freeze({
    id: "safety-policies",
    category: "safety-policies",
    title: "Safety policies and blocked workflows",
    keywords: Object.freeze(["blocked", "blocked actions", "safety", "policy", "cannot", "not allowed", "high risk", "permission"]),
    summary: "Blocked or gated actions include calls, messages, WhatsApp/Telegram/SMS/email sending, payments, purchases, marketplace transactions, appointment booking, provider contact, medical/pharmacy execution, emergency dispatch, location sharing, camera/microphone activation, account creation, and backend writes.",
    details: Object.freeze([
      "Nexus may prepare drafts, checklists, previews, and safe next steps, but final execution requires the appropriate permission, confirmation, audit, provider, and feature-gate controls.",
      "Vague acknowledgements such as okay must not confirm high-risk execution."
    ])
  }),
  Object.freeze({
    id: "provider-status",
    category: "provider-status",
    title: "Provider and feature-flag status",
    keywords: Object.freeze(["provider", "status", "feature flag", "configured", "source", "live", "external provider"]),
    summary: "Provider-backed answers are available only when the provider connector or public source is configured. Missing providers must return a safe unavailable state.",
    details: Object.freeze([
      "Weather, agriculture context, jobs, news/security, and media discovery have read-only provider lanes.",
      "Communications, pharmacy, payments, emergency, location sharing, and marketplace transaction execution remain gated and disabled until future approved connectors are active."
    ])
  }),
  Object.freeze({
    id: "supported-workflows",
    category: "supported-workflows",
    title: "Supported controlled workflows",
    keywords: Object.freeze(["workflow", "workflows", "prepare", "plan", "review options", "continue", "controlled action"]),
    summary: "Nexus supports controlled workflow planning, preview cards, review-only next steps, and recovery guards. Workflow state is not authority to execute real-world actions.",
    details: Object.freeze([
      "Multi-step workflow helpers can classify goals, plan steps, track session state, collect artifacts, follow up, and recover safely.",
      "Execution remains separate from planning and requires explicit gates."
    ])
  })
]);

const TEST_QUESTIONS = Object.freeze([
  "What can Nexus do?",
  "How do I use AgriTrade?",
  "Find training in the app.",
  "What programs do we offer?",
  "How do I become an agriculture technician?",
  "What is the next step for me?",
  "What actions can Nexus perform right now?",
  "What actions are blocked?"
]);

const BLOCKED_ACTIONS = Object.freeze([
  "calls/messages",
  "WhatsApp/Telegram/SMS/email sending",
  "payments/purchases",
  "marketplace transactions",
  "appointment booking",
  "provider contact",
  "medical/pharmacy execution",
  "emergency dispatch",
  "location sharing",
  "camera/microphone activation",
  "account creation",
  "backend writes"
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeText(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function tokenize(value) {
  return normalizeText(value).split(/\s+/).filter(token => token.length > 1);
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 12)}`;
}

function scoreEntry(query, entry) {
  const queryText = normalizeText(query);
  const queryTokens = new Set(tokenize(queryText));
  const haystack = normalizeText([
    entry.id,
    entry.category,
    entry.title,
    entry.summary,
    entry.details.join(" "),
    entry.keywords.join(" ")
  ].join(" "));
  let score = 0;
  entry.keywords.forEach(keyword => {
    const normalizedKeyword = normalizeText(keyword);
    if (normalizedKeyword && queryText.includes(normalizedKeyword)) score += 8;
  });
  queryTokens.forEach(token => {
    if (haystack.includes(token)) score += 1;
  });
  return score;
}

function searchInternalKnowledge(query, options = {}) {
  const limit = Number.isFinite(options.limit) ? Math.max(1, Math.min(8, Math.round(options.limit))) : 4;
  const minScore = Number.isFinite(options.minScore) ? Math.max(1, Math.round(options.minScore)) : 3;
  if (!hasText(query)) return Object.freeze([]);
  return Object.freeze(INTERNAL_KNOWLEDGE_ENTRIES
    .map(entry => Object.freeze({ entry, score: scoreEntry(query, entry) }))
    .filter(result => result.score >= minScore)
    .sort((a, b) => b.score - a.score || a.entry.id.localeCompare(b.entry.id))
    .slice(0, limit)
    .map(result => Object.freeze({
      id: result.entry.id,
      category: result.entry.category,
      title: result.entry.title,
      summary: result.entry.summary,
      details: result.entry.details,
      score: result.score,
      source: Object.freeze({
        sourceName: "Nexus Internal Knowledge Brain",
        sourceUrl: `internal:nexus-knowledge/${result.entry.id}`,
        evidenceStatus: "internal-knowledge",
        freshnessStatus: "maintained"
      })
    })));
}

function buildSafetyPosture() {
  return Object.freeze({
    readOnly: true,
    internalKnowledgeOnly: true,
    canCombineWithExternalProviders: true,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true,
    noLocationPermissionRequested: true,
    noMedicalOrPharmacyExecution: true,
    noPaymentOrMarketplaceTransaction: true,
    noEmergencyDispatch: true
  });
}

function composeKnowledgeAnswer(query, matches) {
  if (matches.length === 0) {
    return "I do not have enough internal knowledge to answer that confidently yet. I can explain supported Nexus capabilities, safe workflows, blocked actions, provider status, training, AgriTrade browsing, and app help.";
  }
  const primary = matches[0];
  const detail = primary.details && primary.details[0] ? ` ${primary.details[0]}` : "";
  const related = matches.slice(1, 3).map(match => match.title).join("; ");
  const relatedText = related ? ` Related internal topics: ${related}.` : "";
  return `${primary.summary}${detail}${relatedText}`;
}

function answerInternalKnowledgeQuestion(query, context = {}) {
  const matches = searchInternalKnowledge(query, { limit: context.limit || 4 });
  const citations = Object.freeze(matches.map(match => match.source));
  const categories = Object.freeze(Array.from(new Set(matches.map(match => match.category))));
  return Object.freeze({
    schemaVersion: "nexus.n100.internalKnowledgeBrain.v1",
    query: String(query || ""),
    answer: composeKnowledgeAnswer(query, matches),
    matches,
    matchedCategories: categories,
    citations,
    retrievedAt: new Date().toISOString(),
    confidence: matches.length > 0 ? "medium" : "low",
    trustTier: "internal-maintained",
    blockedActions: BLOCKED_ACTIONS,
    safeNextSteps: Object.freeze([
      "Ask a follow-up question",
      "Compare with source-backed provider data",
      "Open a safe workflow preview",
      "Ask what is blocked"
    ]),
    safetyPosture: buildSafetyPosture(),
    auditEvent: Object.freeze({
      auditEventType: "n100-internal-knowledge-read-only-answer",
      queryHash: stableId("knowledge-query", query),
      matchedEntryCount: matches.length,
      executionAuthority: false,
      createdAt: new Date().toISOString()
    }),
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true,
    noLocationPermissionRequested: true
  });
}

function combineInternalKnowledgeWithProviderAnswer(query, providerAnswer, context = {}) {
  const internal = answerInternalKnowledgeQuestion(query, context);
  const providerCitations = Array.isArray(providerAnswer && providerAnswer.citations) ? providerAnswer.citations : [];
  return Object.freeze(Object.assign({}, internal, {
    schemaVersion: "nexus.n100.internalKnowledgePlusProvider.v1",
    providerAnswer: providerAnswer || null,
    citations: Object.freeze(internal.citations.concat(providerCitations)),
    answer: providerAnswer && hasText(providerAnswer.answer)
      ? `${internal.answer} Source-backed context: ${providerAnswer.answer}`
      : internal.answer,
    safetyPosture: Object.freeze(Object.assign({}, internal.safetyPosture, {
      internalKnowledgeOnly: false,
      externalProviderContextIncluded: Boolean(providerAnswer)
    })),
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true,
    noLocationPermissionRequested: true
  }));
}

function isSafeInternalKnowledgeAnswer(answer) {
  return Boolean(answer)
    && /^nexus\.n100\.internalKnowledge/.test(answer.schemaVersion || "")
    && answer.noExecutionAuthorized === true
    && answer.noProviderContactAuthorized === true
    && answer.noBackendWritePerformed === true
    && answer.noLocationPermissionRequested === true
    && answer.safetyPosture
    && answer.safetyPosture.readOnly === true;
}

module.exports = Object.freeze({
  INTERNAL_KNOWLEDGE_ENTRIES,
  TEST_QUESTIONS,
  BLOCKED_ACTIONS,
  searchInternalKnowledge,
  answerInternalKnowledgeQuestion,
  combineInternalKnowledgeWithProviderAnswer,
  isSafeInternalKnowledgeAnswer
});
