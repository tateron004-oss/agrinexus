const SAFE_NEXT_STEP_LIBRARY = Object.freeze({
  default: Object.freeze([
    "Ask a follow-up question",
    "Compare sources",
    "Explain the result in simpler language",
    "Prepare a checklist"
  ]),
  weather: Object.freeze([
    "Ask for more weather detail",
    "Compare with another source",
    "Prepare a field-readiness checklist",
    "Narrow by location or timeframe"
  ]),
  "agriculture-context": Object.freeze([
    "Explain the agriculture result",
    "Prepare a field observation checklist",
    "Show related learning resources",
    "Compare agriculture sources"
  ]),
  "news-security": Object.freeze([
    "Compare sources",
    "Explain uncertainty and limitations",
    "Prepare questions for local verification",
    "Summarize safe next steps"
  ]),
  "job-search": Object.freeze([
    "Filter by role or location",
    "Prepare a skills checklist",
    "Draft questions to review manually",
    "Compare workforce sources"
  ]),
  "music-media": Object.freeze([
    "Show related learning resources",
    "Compare media/provider availability",
    "Explain the source limitations",
    "Narrow by topic or language"
  ])
});

const BLOCKED_NEXT_STEP_TERMS = Object.freeze([
  /\bcall\b/i,
  /\bmessage\b/i,
  /\btext\b/i,
  /\bwhatsapp\b/i,
  /\btelegram\b/i,
  /\bbuy\b/i,
  /\bpurchase\b/i,
  /\bpay\b/i,
  /\bbook\b/i,
  /\bschedule\b/i,
  /\bapply\b/i,
  /\bsubmit\b/i,
  /\bdispatch\b/i,
  /\bsend\s+(my\s+)?location\b/i,
  /\bcreate\s+account\b/i,
  /\bupload\s+resume\b/i,
  /\bcontact\s+(a\s+)?provider\b/i
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function uniqueTextList(values) {
  return Object.freeze(Array.from(new Set((Array.isArray(values) ? values : [])
    .filter(value => typeof value === "string")
    .map(value => value.trim())
    .filter(Boolean))));
}

function isSafeNextStep(step) {
  return hasText(step) && BLOCKED_NEXT_STEP_TERMS.every(pattern => !pattern.test(step));
}

function sanitizeNextSteps(steps) {
  return uniqueTextList(steps).filter(isSafeNextStep);
}

function buildSafePreparationSteps() {
  return Object.freeze([
    "Explain the safety boundary",
    "Prepare information only",
    "List what the user can review manually",
    "Cancel"
  ]);
}

function buildSafeNextSteps(input = {}) {
  const allowed = input.allowed === true;
  if (!allowed) return buildSafePreparationSteps();

  const provider = hasText(input.selectedProvider) ? input.selectedProvider : "";
  const intent = hasText(input.intent) ? input.intent : "";
  const libraryKey = SAFE_NEXT_STEP_LIBRARY[provider] ? provider : intent;
  const candidateSteps = SAFE_NEXT_STEP_LIBRARY[libraryKey] || SAFE_NEXT_STEP_LIBRARY.default;
  const safeSteps = sanitizeNextSteps(candidateSteps);
  return Object.freeze(safeSteps.length > 0 ? safeSteps : SAFE_NEXT_STEP_LIBRARY.default);
}

function isSafeNextStepPlan(steps) {
  return Array.isArray(steps) && steps.length > 0 && steps.every(isSafeNextStep);
}

module.exports = Object.freeze({
  SAFE_NEXT_STEP_LIBRARY,
  BLOCKED_NEXT_STEP_TERMS,
  buildSafeNextSteps,
  isSafeNextStep,
  isSafeNextStepPlan
});
