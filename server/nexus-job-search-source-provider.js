const {
  normalizeSourceResult,
  buildProviderUnavailableResult,
  getConfiguredProviderMode
} = require("../public/nexus-live-source-result-contract.js");

const JOB_PROVIDER_NAME = "job-search";
const JOB_PROVIDER_CANDIDATES = Object.freeze([
  "job board provider adapter",
  "employer career page adapter",
  "public job feed adapter",
  "workforce program/job board adapter",
  "NGO/government workforce opportunity source",
  "agriculture employment/training opportunity source",
  "mock/fixture job provider"
]);

const JOB_RESULT_FIELDS = Object.freeze([
  "jobResultId",
  "jobTitle",
  "employerName",
  "employerType",
  "jobLocation",
  "country",
  "cityOrRegion",
  "remoteOrOnsite",
  "employmentType",
  "salaryOrCompensation",
  "postedDate",
  "applicationDeadline",
  "applicationUrl",
  "applicationActionAllowed",
  "applicationSubmissionAuthority"
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function classifyJobAssistantIntent(input) {
  const lower = String(input || "").toLowerCase();
  if (/\b(apply|application|resume|cover letter|cv|draft)\b/.test(lower)) return "job-application-preparation";
  if (/\b(job|jobs|career|hiring|employment|work)\b/.test(lower)) return "job-search";
  return "unsupported";
}

function buildJobSearchQuery(request = {}) {
  const queryText = normalizeText(request.query || request.role || "");
  const locationText = normalizeText(request.locationText || request.country || request.cityOrRegion || "");
  return Object.freeze({
    requestType: classifyJobAssistantIntent(`${queryText} ${request.intentText || ""}`),
    queryText,
    locationText,
    providerCandidates: JOB_PROVIDER_CANDIDATES,
    applicationPreparationOnly: true,
    applicationActionAllowed: false,
    applicationSubmissionAuthority: false,
    employerContactAllowed: false,
    accountCreationAllowed: false,
    resumeUploadAllowed: false,
    backendJobTrackingAllowed: false,
    readOnly: true,
    noExecutionRequired: true,
    executionAuthority: false
  });
}

function resolveJobSearchProviderConfig(env = process.env) {
  const providerMode = getConfiguredProviderMode(JOB_PROVIDER_NAME, env);
  return Object.freeze({
    providerName: JOB_PROVIDER_NAME,
    providerMode,
    liveSourceEnabled: env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true",
    jobSearchProviderEnabled: env.NEXUS_JOB_SEARCH_PROVIDER_ENABLED === "true",
    hasProviderKey: hasText(env.NEXUS_JOB_SEARCH_PROVIDER_API_KEY),
    hasPublicSourceEndpoint: hasText(env.NEXUS_JOB_SEARCH_PUBLIC_SOURCE_ENDPOINT),
    providerCandidates: JOB_PROVIDER_CANDIDATES
  });
}

function attachJobFields(sourceResult, fields) {
  return Object.freeze(Object.assign({}, sourceResult, {
    jobResultId: fields.jobResultId,
    jobTitle: fields.jobTitle,
    employerName: fields.employerName,
    employerType: fields.employerType,
    jobLocation: fields.jobLocation,
    country: fields.country,
    cityOrRegion: fields.cityOrRegion,
    remoteOrOnsite: fields.remoteOrOnsite,
    employmentType: fields.employmentType,
    salaryOrCompensation: fields.salaryOrCompensation,
    postedDate: fields.postedDate,
    applicationDeadline: fields.applicationDeadline,
    applicationUrl: fields.applicationUrl,
    applicationActionAllowed: false,
    applicationSubmissionAuthority: false
  }));
}

function buildMockJobSearchResult(request = {}) {
  const query = buildJobSearchQuery(request);
  const role = hasText(query.queryText) ? query.queryText : "farm job";
  const location = hasText(query.locationText) ? query.locationText : "Kenya";
  return attachJobFields(normalizeSourceResult({
    sourceResultId: "job-search-mock-result",
    requestType: "job-search",
    providerName: JOB_PROVIDER_NAME,
    providerMode: "mock",
    sourceName: "Mock Job Search Provider",
    sourceCategory: "job-search",
    sourceUrl: "provider:mock-jobs",
    query: `${role} ${location}`,
    resultSummary: `Mock job search result for ${role} in ${location}.`,
    rawResultAvailable: false,
    freshnessStatus: "recent",
    confidenceLevel: "medium",
    limitationNotes: "Mock job result. No application submission, employer contact, account creation, or resume upload occurred.",
    evidenceStatus: "mock-backed",
    sourceStatus: "source-result-available"
  }), {
    jobResultId: "job-search-mock-result",
    jobTitle: "Source-Backed Mock Role",
    employerName: "Mock Employer",
    employerType: "workforce",
    jobLocation: location,
    country: location,
    cityOrRegion: location,
    remoteOrOnsite: "unknown",
    employmentType: "unknown",
    salaryOrCompensation: "not listed",
    postedDate: "mock-current",
    applicationDeadline: "not listed",
    applicationUrl: "provider:mock-jobs/job-search-mock-result"
  });
}

function buildApplicationPreparationPreview(request = {}) {
  const query = buildJobSearchQuery(Object.assign({}, request, { intentText: "application resume cover letter" }));
  return Object.freeze({
    requestType: "job-application-preparation",
    jobFitSummary: "Nexus can prepare a fit summary from user-provided skills and a selected source-backed job.",
    requiredSkills: Array.isArray(request.requiredSkills) ? request.requiredSkills : [],
    missingSkills: Array.isArray(request.missingSkills) ? request.missingSkills : [],
    applicationChecklist: ["review job source", "match skills", "draft cover letter", "review before submission elsewhere"],
    suggestedResumeEdits: ["tailor summary to the role", "highlight relevant training"],
    coverLetterDraftAvailable: true,
    employerContactDraftAvailable: true,
    sourceDisclosure: "Application preparation requires a selected source-backed job.",
    freshnessDisclosure: "Job freshness must be disclosed before user action.",
    applicationLimitations: "Nexus cannot submit, upload, email, contact employers, create accounts, or pay fees.",
    nextSafeOptions: ["prepare checklist", "draft cover letter", "suggest resume edits"],
    applicationActionAllowed: false,
    applicationSubmissionAuthority: false,
    backendJobTrackingAllowed: false,
    noExecutionRequired: true,
    executionAuthority: false,
    query
  });
}

function buildJobProviderUnavailableResult(reason) {
  return buildProviderUnavailableResult("job-search", reason || "job search provider flags or config are missing");
}

function getJobSearchSourceResult(request = {}, env = process.env) {
  const query = buildJobSearchQuery(request);
  if (!hasText(query.queryText) || !hasText(query.locationText)) {
    return normalizeSourceResult({
      sourceResultId: "job-search-role-location-required",
      requestType: "job-search",
      providerName: JOB_PROVIDER_NAME,
      providerMode: "fixture",
      sourceName: "Job Search Provider Required",
      sourceCategory: "job-search",
      sourceUrl: "provider-required",
      query: "job search role or location missing",
      resultSummary: "What kind of job and which city or country should I search?",
      rawResultAvailable: false,
      freshnessStatus: "unavailable",
      confidenceLevel: "low",
      limitationNotes: "Job search requires role and location. No application or employer contact occurred.",
      evidenceStatus: "source-unavailable",
      sourceStatus: "provider-required"
    });
  }

  const config = resolveJobSearchProviderConfig(env);
  if (config.providerMode === "fixture") {
    return buildJobProviderUnavailableResult("live job search retrieval is disabled or not configured");
  }

  if (config.providerMode === "mock") {
    return buildMockJobSearchResult(request);
  }

  return normalizeSourceResult({
    sourceResultId: "job-search-live-query-ready",
    requestType: "job-search",
    providerName: JOB_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Configured Job Search Provider",
    sourceCategory: "job-search",
    sourceUrl: "provider:job-search",
    query: `${query.queryText} ${query.locationText}`,
    resultSummary: "Job search provider is configured for a future read-only live query. No network request is made in this readiness phase.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "medium",
    limitationNotes: "Live job provider config is present, but this readiness module does not submit applications, contact employers, or upload resumes.",
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-query-ready"
  });
}

module.exports = Object.freeze({
  JOB_PROVIDER_NAME,
  JOB_PROVIDER_CANDIDATES,
  JOB_RESULT_FIELDS,
  classifyJobAssistantIntent,
  buildJobSearchQuery,
  resolveJobSearchProviderConfig,
  buildMockJobSearchResult,
  buildApplicationPreparationPreview,
  buildJobProviderUnavailableResult,
  getJobSearchSourceResult
});
