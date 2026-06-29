const crypto = require("node:crypto");
const sessionMemory = require("../public/nexus-session-memory.js");

const SCHEMA_VERSION = "nexus.n100.memoryPersonalizationStack.v1";

const SAFE_PREFERENCE_KEYS = Object.freeze([
  "preferredLanguage",
  "responseStyle",
  "answerLength",
  "trainingFocus",
  "workforceGoal",
  "agricultureInterest"
]);

const BLOCKED_MEMORY_DOMAINS = Object.freeze([
  "provider",
  "call",
  "message",
  "payment",
  "camera",
  "medical",
  "pharmacy",
  "emergency",
  "marketplace_transaction",
  "account",
  "identity"
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function nowIso() {
  return new Date().toISOString();
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 12)}`;
}

function normalizeText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function clone(value) {
  return value && typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}

function safeText(value) {
  return sessionMemory.redactSensitiveText(normalizeText(value));
}

function safeId(value, fallback) {
  const normalized = normalizeText(value).toLowerCase().replace(/[^a-z0-9:.-]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
  return normalized || fallback;
}

function buildSafetyPosture() {
  return Object.freeze({
    inMemoryOnly: true,
    readOnlyContext: true,
    nonAuthoritative: true,
    canExecute: false,
    executionAuthority: "none",
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true,
    noLocationPermissionRequested: true,
    noImplicitLocationCapture: true,
    noSensitiveDataRetention: true,
    noExecutionFromMemory: true
  });
}

function sanitizeList(list, limit = 8) {
  return Object.freeze((Array.isArray(list) ? list : []).map(item => sessionMemory.sanitizeSessionMemoryValue(item)).filter(Boolean).slice(0, limit));
}

function createN100MemoryState(input = {}) {
  const createdAt = input.createdAt || nowIso();
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    memoryId: safeId(input.memoryId, `memory-${Date.now()}`),
    sessionContext: sessionMemory.createNexusSessionContext(input.sessionContext || {
      sessionId: input.sessionId || `session.local.${Date.now()}`,
      currentDomain: input.currentDomain || "general",
      activeTopic: input.activeTopic || "",
      safeSummary: input.safeSummary || ""
    }),
    activeWorkflow: sessionMemory.sanitizeSessionMemoryValue(input.activeWorkflow || null) || null,
    lastProviderResult: sessionMemory.sanitizeSessionMemoryValue(input.lastProviderResult || null) || null,
    selectedItem: sessionMemory.sanitizeSessionMemoryValue(input.selectedItem || null) || null,
    savedSearches: sanitizeList(input.savedSearches),
    savedPlans: sanitizeList(input.savedPlans),
    savedChecklists: sanitizeList(input.savedChecklists),
    preferences: Object.freeze(sessionMemory.sanitizeSessionMemoryValue(input.preferences || {}) || {}),
    explicitLocationPreference: input.explicitLocationConsent === true && hasText(input.explicitLocationText)
      ? Object.freeze({
        locationText: safeText(input.explicitLocationText),
        consent: "explicit-user-provided",
        createdAt
      })
      : null,
    createdAt,
    updatedAt: input.updatedAt || createdAt,
    safetyPosture: buildSafetyPosture(),
    canExecute: false,
    executionAuthority: "none"
  });
}

function updateState(state, patch = {}) {
  return createN100MemoryState(Object.assign({}, clone(state), patch, {
    memoryId: state && state.memoryId,
    createdAt: state && state.createdAt,
    updatedAt: nowIso()
  }));
}

function rememberN100ConversationEvent(state, event = {}) {
  const current = createN100MemoryState(state || {});
  const safeEvent = sessionMemory.sanitizeSessionMemoryValue(event) || {};
  const sessionContext = sessionMemory.createNexusSessionContext(Object.assign({}, current.sessionContext, {
    currentDomain: safeEvent.domain || current.sessionContext.currentDomain,
    activeTopic: safeEvent.topic || safeEvent.prompt || current.sessionContext.activeTopic,
    safeSummary: safeEvent.summary || current.sessionContext.safeSummary,
    lastIntentCategory: safeEvent.intentCategory || current.sessionContext.lastIntentCategory,
    lastSafeStep: safeEvent.nextSafeStep || current.sessionContext.lastSafeStep
  }));
  return updateState(current, {
    sessionContext,
    activeWorkflow: safeEvent.workflow || current.activeWorkflow,
    lastProviderResult: safeEvent.providerResult || current.lastProviderResult,
    selectedItem: safeEvent.selectedItem || current.selectedItem
  });
}

function saveN100Search(state, search = {}) {
  const current = createN100MemoryState(state || {});
  const query = safeText(search.query || search.prompt || "");
  if (!hasText(query)) return current;
  const entry = Object.freeze({
    searchId: safeId(search.searchId, stableId("search", query)),
    query,
    domain: safeId(search.domain || "general", "general"),
    createdAt: nowIso(),
    canExecute: false,
    executionAuthority: "none"
  });
  return updateState(current, {
    savedSearches: Object.freeze([entry].concat(current.savedSearches).slice(0, 10))
  });
}

function saveN100Plan(state, plan = {}) {
  const current = createN100MemoryState(state || {});
  const title = safeText(plan.title || plan.summary || "");
  if (!hasText(title)) return current;
  const entry = Object.freeze({
    planId: safeId(plan.planId, stableId("plan", title)),
    title,
    steps: sanitizeList(plan.steps || [], 10),
    createdAt: nowIso(),
    canExecute: false,
    executionAuthority: "none"
  });
  return updateState(current, {
    savedPlans: Object.freeze([entry].concat(current.savedPlans).slice(0, 10))
  });
}

function saveN100Checklist(state, checklist = {}) {
  const current = createN100MemoryState(state || {});
  const title = safeText(checklist.title || "");
  if (!hasText(title)) return current;
  const entry = Object.freeze({
    checklistId: safeId(checklist.checklistId, stableId("checklist", title)),
    title,
    items: sanitizeList(checklist.items || [], 12),
    createdAt: nowIso(),
    canExecute: false,
    executionAuthority: "none"
  });
  return updateState(current, {
    savedChecklists: Object.freeze([entry].concat(current.savedChecklists).slice(0, 10))
  });
}

function saveN100Preference(state, key, value, options = {}) {
  const current = createN100MemoryState(state || {});
  if (!SAFE_PREFERENCE_KEYS.includes(key)) return current;
  if (options.explicitConsent !== true) return current;
  return updateState(current, {
    preferences: Object.freeze(Object.assign({}, current.preferences, {
      [key]: safeText(value)
    }))
  });
}

function saveExplicitLocationPreference(state, locationText, options = {}) {
  const current = createN100MemoryState(state || {});
  if (options.explicitConsent !== true || !hasText(locationText)) return current;
  return updateState(current, {
    explicitLocationConsent: true,
    explicitLocationText: safeText(locationText)
  });
}

function clearN100SessionContext(state, reason = "manual_clear") {
  const current = createN100MemoryState(state || {});
  return updateState(current, {
    sessionContext: sessionMemory.clearNexusSessionContext(current.sessionContext, reason),
    activeWorkflow: null,
    lastProviderResult: null,
    selectedItem: null
  });
}

function forgetN100SavedSearch(state, searchId) {
  const current = createN100MemoryState(state || {});
  const target = safeId(searchId, "");
  return updateState(current, {
    savedSearches: Object.freeze(current.savedSearches.filter(search => search.searchId !== target))
  });
}

function clearN100Preference(state, key) {
  const current = createN100MemoryState(state || {});
  if (!SAFE_PREFERENCE_KEYS.includes(key)) return current;
  const preferences = Object.assign({}, current.preferences);
  delete preferences[key];
  return updateState(current, { preferences: Object.freeze(preferences) });
}

function answerN100MemoryPrompt(prompt, state = {}) {
  const current = createN100MemoryState(state || {});
  const lower = String(prompt || "").toLowerCase();
  let answer = "I can use safe in-memory context only. I do not have enough saved context for that yet.";
  if (/continue.*farm job search/.test(lower)) {
    const search = current.savedSearches.find(item => /farm|job|workforce/i.test(item.query));
    answer = search
      ? `We can continue this saved search: ${search.query}. I can review options, but I cannot apply or contact employers automatically.`
      : "I do not have a saved farm job search yet. I can start a new read-only search if you give the role and location.";
  } else if (/training plan/.test(lower)) {
    const plan = current.savedPlans.find(item => /training|technician|course/i.test(item.title));
    answer = plan
      ? `The saved training plan is: ${plan.title}. I can review the steps, but I cannot enroll or submit anything automatically.`
      : "I do not have a saved training plan yet. I can prepare one from source-backed training options.";
  } else if (/usual location/.test(lower)) {
    answer = current.explicitLocationPreference
      ? `Your explicitly saved location preference is ${current.explicitLocationPreference.locationText}. I can use it for read-only lookup context, not location sharing.`
      : "I do not have an explicit saved location. Please provide a location if you want me to use one for read-only lookup context.";
  } else if (/second job/.test(lower)) {
    answer = current.selectedItem && current.selectedItem.ordinal === 2
      ? `The second selected item I have in memory is ${safeText(current.selectedItem.title || current.selectedItem.summary)}. I cannot apply or contact anyone from memory.`
      : "I do not have a second job item selected yet.";
  } else if (/ask that program|needed to ask/.test(lower)) {
    const checklist = current.savedChecklists.find(item => /program|question|ask/i.test(item.title));
    answer = checklist
      ? `Saved program checklist: ${checklist.title}. Review-only items are available; no message has been sent.`
      : "I do not have saved program questions yet.";
  } else if (/forget this search/.test(lower)) {
    answer = "I can forget a saved search when you identify which one. Forgetting does not execute an external action.";
  } else if (/clear this conversation context/.test(lower)) {
    answer = "I can clear the current session context. This only clears in-memory context and does not affect providers or external systems.";
  }
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    prompt: String(prompt || ""),
    answer,
    memorySnapshot: sessionMemory.serializeNexusSessionMemory(current.sessionContext, []),
    safetyPosture: buildSafetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true,
    noProviderContactAuthorized: true,
    noLocationPermissionRequested: true
  });
}

function isSafeN100MemoryState(state) {
  return Boolean(state)
    && state.schemaVersion === SCHEMA_VERSION
    && state.canExecute === false
    && state.executionAuthority === "none"
    && state.safetyPosture
    && state.safetyPosture.inMemoryOnly === true
    && state.safetyPosture.noExecutionFromMemory === true
    && !BLOCKED_MEMORY_DOMAINS.some(term => JSON.stringify(state).includes(`"executionAuthority":"${term}"`));
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  SAFE_PREFERENCE_KEYS,
  BLOCKED_MEMORY_DOMAINS,
  createN100MemoryState,
  rememberN100ConversationEvent,
  saveN100Search,
  saveN100Plan,
  saveN100Checklist,
  saveN100Preference,
  saveExplicitLocationPreference,
  clearN100SessionContext,
  forgetN100SavedSearch,
  clearN100Preference,
  answerN100MemoryPrompt,
  isSafeN100MemoryState
});
