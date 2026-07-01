const {
  clean,
  envEnabled,
  providerResponse,
  disabledResponse,
  requireConfirmation,
  blockedResponse
} = require("./providerUtils");

const moodleProvider = require("./moodleProvider");
const remindersProvider = require("./reminderProvider");
const offlineSyncProvider = require("./offlineSyncProvider");

const SENSITIVE_PATTERN = /\b(patient|diagnos|prescri|treat(?:ment)?|symptom|medical record|insurance|ssn|date of birth|dob|payment|card|bank|credential|transcript|grade|student id)\b/i;

const LOCAL_CATALOG = Object.freeze([
  {
    id: "local-irrigation-basics",
    title: "Irrigation basics",
    category: "agriculture-training",
    level: "Beginner",
    duration: "20 minutes",
    source: "Nexus local starter catalog",
    summary: "Learn water timing, soil moisture observation, and basic irrigation planning for small farms.",
    details: "Review field moisture, crop stage, water access, and local extension guidance before changing irrigation routines.",
    keywords: ["irrigation", "water", "farm", "crop", "agriculture"]
  },
  {
    id: "local-crop-issue-observation",
    title: "Crop issue observation",
    category: "crop-issue-education",
    level: "Beginner",
    duration: "18 minutes",
    source: "Nexus local starter catalog",
    summary: "Learn how to observe leaves, soil, pests, weather, and timing before asking a local expert for review.",
    details: "Capture non-sensitive field observations and compare them with trusted agriculture guidance. Confirm findings with a local expert.",
    keywords: ["crop", "issue", "pest", "leaf", "disease", "observation"]
  },
  {
    id: "local-soil-health-basics",
    title: "Soil health basics",
    category: "agriculture-training",
    level: "Beginner",
    duration: "22 minutes",
    source: "Nexus local starter catalog",
    summary: "Understand soil cover, organic matter, compaction, drainage, and simple soil observation practices.",
    details: "Use this as education for soil stewardship and local extension follow-up. It does not replace lab testing.",
    keywords: ["soil", "health", "organic", "compaction", "drainage"]
  },
  {
    id: "local-farm-business-basics",
    title: "Farm business basics",
    category: "farm-business",
    level: "Beginner",
    duration: "25 minutes",
    source: "Nexus local starter catalog",
    summary: "Review costs, simple records, buyer questions, and planning steps for a farm enterprise.",
    details: "This resource supports preparation and record organization only; it does not process payments or contracts.",
    keywords: ["farm", "business", "cost", "buyer", "records"]
  },
  {
    id: "local-agritrade-seller-basics",
    title: "AgriTrade seller basics",
    category: "marketplace-training",
    level: "Beginner",
    duration: "16 minutes",
    source: "Nexus local starter catalog",
    summary: "Prepare listing information, quality notes, quantity, and safe buyer-review questions before using AgriTrade.",
    details: "This is marketplace education only. It does not create orders, contact buyers, or process payments.",
    keywords: ["agritrade", "seller", "marketplace", "buyer", "listing"]
  },
  {
    id: "local-digital-literacy-basics",
    title: "Digital literacy basics",
    category: "digital-literacy",
    level: "Beginner",
    duration: "20 minutes",
    source: "Nexus local starter catalog",
    summary: "Practice safe device use, forms, passwords, browser basics, and recognizing risky links.",
    details: "This resource supports general digital readiness and does not store account secrets.",
    keywords: ["digital", "literacy", "phone", "computer", "internet", "training"]
  },
  {
    id: "local-job-readiness",
    title: "Job readiness",
    category: "workforce-skills",
    level: "Beginner",
    duration: "24 minutes",
    source: "Nexus local starter catalog",
    summary: "Prepare a short work story, skills checklist, interview notes, and training next steps.",
    details: "This resource helps prepare for workforce conversations. It does not apply for jobs or contact employers.",
    keywords: ["job", "readiness", "workforce", "interview", "skills"]
  },
  {
    id: "local-health-visit-preparation",
    title: "Health visit preparation",
    category: "health-access-education",
    level: "Beginner",
    duration: "15 minutes",
    source: "Nexus local starter catalog",
    summary: "Prepare non-sensitive questions, documents to bring, and provider-review topics for a health visit.",
    details: "Health education only. Nexus does not diagnose, prescribe, treat, replace clinical judgment, or handle emergencies.",
    keywords: ["health", "visit", "provider", "clinic", "preparation"]
  },
  {
    id: "local-chronic-care-question-preparation",
    title: "Chronic care question preparation",
    category: "health-access-education",
    level: "Beginner",
    duration: "18 minutes",
    source: "Nexus local starter catalog",
    summary: "Prepare questions to discuss with a clinician about ongoing care routines and follow-up.",
    details: "Provider-review preparation only. Nexus does not diagnose, prescribe, treat, adjust medication, or manage emergencies.",
    keywords: ["chronic", "care", "questions", "doctor", "provider", "preparation"]
  },
  {
    id: "local-drone-agritech-introduction",
    title: "Drone/agritech introduction",
    category: "drone-agritech-learning",
    level: "Introductory",
    duration: "17 minutes",
    source: "Nexus local starter catalog",
    summary: "Learn basic agritech terms, safe drone-use questions, and when to ask a trained operator.",
    details: "This is education only. It does not control drones, request flights, or capture images.",
    keywords: ["drone", "agritech", "technology", "field", "remote"]
  }
]);

function status(env = process.env) {
  const moodle = moodleProvider.status(env);
  return {
    provider: "nexus-learning-provider-bridge",
    enabled: envEnabled("NEXUS_LEARNING_BRIDGE_ENABLED", env, true),
    localCatalogReady: true,
    localCatalogCount: LOCAL_CATALOG.length,
    moodle,
    confirmationControlled: true,
    noPaidEnrollment: true,
    noCredentialIssuance: true,
    noPrivateLearnerRecords: true,
    noHealthAdviceExecution: true
  };
}

function normalizeQuery(value = "") {
  return clean(value).toLowerCase();
}

function localCatalog() {
  return LOCAL_CATALOG.map(resource => ({ ...resource, sourceType: "local_catalog", canSave: true, canQueueOffline: true }));
}

function matchesResource(resource, query, category) {
  const categoryText = normalizeQuery(category);
  const queryText = normalizeQuery(query);
  const haystack = normalizeQuery([
    resource.title,
    resource.category,
    resource.summary,
    resource.details,
    ...(resource.keywords || [])
  ].join(" "));
  const categoryMatches = !categoryText || resource.category === categoryText || haystack.includes(categoryText);
  const queryMatches = !queryText || haystack.includes(queryText);
  return categoryMatches && queryMatches;
}

function normalizeMoodleCards(result) {
  const cards = Array.isArray(result?.body?.data?.cards) ? result.body.data.cards : [];
  return cards.map(card => ({
    id: `moodle-${clean(card.courseId || card.title).replace(/\W+/g, "-").toLowerCase()}`,
    title: clean(card.title || "Moodle course"),
    category: clean(card.category || "lms-course"),
    level: "LMS",
    duration: "See LMS",
    source: "Moodle-compatible LMS",
    sourceType: "lms",
    summary: clean(card.summary || "Course from configured Moodle-compatible LMS."),
    details: "Displayed from configured LMS course lookup. Enrollment remains separately gated.",
    link: clean(card.link),
    canSave: true,
    canQueueOffline: false
  }));
}

async function search({ query = "", category = "" } = {}, env = process.env) {
  const provider = "nexus-learning-provider-bridge";
  const action = "learning.search";
  if (!envEnabled("NEXUS_LEARNING_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_LEARNING_BRIDGE_ENABLED");
  const localResults = localCatalog().filter(resource => matchesResource(resource, query, category));
  const bridgeStatus = status(env);
  let lmsResults = [];
  let lmsStatus = bridgeStatus.moodle;
  if (lmsStatus.enabled && !lmsStatus.missingConfig.length) {
    const lmsResponse = await moodleProvider.courses(env);
    lmsStatus = {
      ...lmsStatus,
      lookupStatus: lmsResponse.body?.status || "unknown"
    };
    lmsResults = normalizeMoodleCards(lmsResponse).filter(resource => matchesResource(resource, query, category));
  }
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: `Loaded ${localResults.length} local learning resource(s)${lmsResults.length ? ` and ${lmsResults.length} LMS course(s)` : ""}.`,
    data: {
      cards: [...localResults, ...lmsResults].slice(0, 24),
      localCatalogAvailable: true,
      lmsStatus,
      safety: "Learning Bridge search is read-only and preparation-only."
    }
  });
}

function resource(id = "", env = process.env) {
  const provider = "nexus-learning-provider-bridge";
  const action = "learning.resource";
  if (!envEnabled("NEXUS_LEARNING_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_LEARNING_BRIDGE_ENABLED");
  const found = localCatalog().find(item => item.id === clean(id));
  if (!found) return blockedResponse(provider, action, "Learning resource was not found in the local safe catalog.");
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Loaded safe learning resource details.",
    data: { resource: found }
  });
}

function ensureSavedLearningResources(db) {
  db.profile = db.profile || {};
  db.profile.nexusSavedLearningResources = db.profile.nexusSavedLearningResources || [];
  return db.profile.nexusSavedLearningResources;
}

function normalizeSavedLearningResource(body = {}) {
  return {
    resourceId: clean(body.resourceId || body.id).slice(0, 120),
    title: clean(body.title).slice(0, 180),
    category: clean(body.category).slice(0, 120),
    level: clean(body.level).slice(0, 80),
    source: clean(body.source || "Nexus local starter catalog").slice(0, 160)
  };
}

function validateLearningResourceRecord(record) {
  if (!record.title || !record.category) return "Learning resource title and category are required.";
  if (SENSITIVE_PATTERN.test(Object.values(record).join(" "))) return "Learning resource save is blocked because sensitive learner, health, credential, payment, or patient data was detected.";
  return "";
}

function saveResource(body = {}, db, env = process.env) {
  const provider = "nexus-learning-provider-bridge";
  const action = "learning.save";
  if (!envEnabled("NEXUS_LEARNING_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_LEARNING_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const record = normalizeSavedLearningResource(body);
  const error = validateLearningResourceRecord(record);
  if (error) return blockedResponse(provider, action, error);
  const saved = {
    id: `saved-learning-${Date.now()}`,
    ...record,
    savedAt: new Date().toISOString(),
    noPrivateLearnerRecord: true,
    noHealthPatientDataStored: true
  };
  ensureSavedLearningResources(db).unshift(saved);
  db.profile.nexusSavedLearningResources = db.profile.nexusSavedLearningResources.slice(0, 50);
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Learning resource saved locally after explicit confirmation. No private learner record or patient data was stored.",
    data: { resource: saved }
  });
}

function createLearningReminder(body = {}, db, env = process.env) {
  const provider = "nexus-learning-provider-bridge";
  const action = "learning.reminder";
  if (!envEnabled("NEXUS_LEARNING_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_LEARNING_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const resourceRecord = normalizeSavedLearningResource(body);
  const error = validateLearningResourceRecord(resourceRecord);
  if (error) return blockedResponse(provider, action, error);
  const reminder = remindersProvider.create({
    confirmed: true,
    title: `Review ${resourceRecord.title}`,
    dueAt: clean(body.dueAt || "next learning session"),
    note: `Learning reminder for ${resourceRecord.category}. In-app only; no OS notification permission requested.`
  }, db, env);
  if (reminder.body?.status !== "completed") return reminder;
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Learning reminder created after explicit confirmation. No OS notification permission was requested.",
    data: { reminder: reminder.body.data.reminder }
  });
}

function queueOffline(body = {}, db, env = process.env) {
  const provider = "nexus-learning-provider-bridge";
  const action = "learning.offline";
  if (!envEnabled("NEXUS_LEARNING_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_LEARNING_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const resourceRecord = normalizeSavedLearningResource(body);
  const error = validateLearningResourceRecord(resourceRecord);
  if (error) return blockedResponse(provider, action, error);
  const content = JSON.stringify({
    resourceId: resourceRecord.resourceId,
    title: resourceRecord.title,
    category: resourceRecord.category,
    source: resourceRecord.source,
    queuedAt: new Date().toISOString()
  });
  const queued = offlineSyncProvider.queueItem({
    confirmed: true,
    type: "learning_resource",
    content
  }, db, env);
  if (queued.body?.status !== "completed") return queued;
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Learning resource queued locally for offline review after explicit confirmation. Safe metadata only.",
    data: { item: queued.body.data.item }
  });
}

module.exports = {
  status,
  localCatalog,
  search,
  resource,
  saveResource,
  createLearningReminder,
  queueOffline
};
