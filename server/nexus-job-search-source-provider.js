const {
  normalizeSourceResult,
  buildProviderUnavailableResult,
  getConfiguredProviderMode
} = require("../public/nexus-live-source-result-contract.js");

const JOB_PROVIDER_NAME = "job-search";
const JOB_PROVIDER_CANDIDATES = Object.freeze([
  "Remotive public jobs API",
  "job board provider adapter",
  "employer career page adapter",
  "public job feed adapter",
  "workforce program/job board adapter",
  "NGO/government workforce opportunity source",
  "agriculture employment/training opportunity source",
  "mock/fixture job provider"
]);

const REMOTIVE_JOBS_URL = "https://remotive.com/api/remote-jobs";

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
    publicProviderEnabled: env.NEXUS_JOB_SEARCH_PUBLIC_PROVIDER_ENABLED === "true",
    hasProviderKey: hasText(env.NEXUS_JOB_SEARCH_PROVIDER_API_KEY),
    hasPublicSourceEndpoint: hasText(env.NEXUS_JOB_SEARCH_PUBLIC_SOURCE_ENDPOINT),
    providerCandidates: JOB_PROVIDER_CANDIDATES
  });
}

function isRemotivePublicProviderConfigured(env = process.env) {
  return env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true"
    && env.NEXUS_JOB_SEARCH_PROVIDER_ENABLED === "true"
    && env.NEXUS_JOB_SEARCH_PUBLIC_PROVIDER_ENABLED === "true";
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

function buildRemotiveProviderErrorResult(query, errorType) {
  return normalizeSourceResult({
    sourceResultId: `job-search-remotive-error-${String(query.queryText || "job").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "job"}`,
    requestType: "job-search",
    providerName: JOB_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Remotive public jobs API",
    sourceCategory: "job-search",
    sourceUrl: "https://remotive.com/",
    query: `${query.queryText || "job"} ${query.locationText || ""}`,
    resultSummary: "Remotive public job lookup failed safely. No application, account creation, resume upload, or employer contact occurred.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "low",
    limitationNotes: `${errorType || "source-error"}; verify job details directly before taking action.`,
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-error"
  });
}

function normalizeRemotivePayload(query, payload) {
  const first = payload && Array.isArray(payload.jobs) ? payload.jobs[0] : null;
  if (!first || !hasText(first.title)) return buildRemotiveProviderErrorResult(query, "source-result-empty");
  const title = normalizeText(first.title);
  const company = hasText(first.company_name) ? normalizeText(first.company_name) : "employer not listed";
  const location = hasText(first.candidate_required_location) ? normalizeText(first.candidate_required_location) : "remote/unspecified";
  const sourceUrl = hasText(first.url) ? first.url : "https://remotive.com/";
  return attachJobFields(normalizeSourceResult({
    sourceResultId: `job-search-remotive-${String(first.id || title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "job"}`,
    requestType: "job-search",
    providerName: JOB_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Remotive public jobs API",
    sourceCategory: "job-search",
    sourceUrl,
    query: `${query.queryText} ${query.locationText}`,
    resultSummary: `Public job listing found: ${title} at ${company}. Candidate location: ${location}.`,
    rawResultAvailable: true,
    lastUpdated: hasText(first.publication_date) ? first.publication_date : new Date().toISOString(),
    freshnessStatus: "fresh",
    confidenceLevel: "medium",
    limitationNotes: "Read-only public job listing. Nexus cannot apply, upload a resume, create an account, or contact the employer.",
    evidenceStatus: "source-backed",
    sourceStatus: "source-result-available"
  }), {
    jobResultId: String(first.id || "remotive-job"),
    jobTitle: title,
    employerName: company,
    employerType: "public-job-board",
    jobLocation: location,
    country: query.locationText || location,
    cityOrRegion: query.locationText || location,
    remoteOrOnsite: "remote-or-unspecified",
    employmentType: hasText(first.job_type) ? first.job_type : "not listed",
    salaryOrCompensation: hasText(first.salary) ? first.salary : "not listed",
    postedDate: hasText(first.publication_date) ? first.publication_date : "not listed",
    applicationDeadline: "not listed",
    applicationUrl: sourceUrl
  });
}

async function fetchJson(fetchImpl, url) {
  const response = await fetchImpl(url, { method: "GET", signal: AbortSignal.timeout(8000) });
  if (!response || response.ok !== true) {
    const status = response && typeof response.status !== "undefined" ? `http-${response.status}` : "http-error";
    throw new Error(status);
  }
  return response.json();
}

async function runRemotiveReadOnlyLookup(request = {}, env = process.env) {
  const query = buildJobSearchQuery(request);
  if (!hasText(query.queryText) || !hasText(query.locationText)) return getJobSearchSourceResult(request, env);
  if (!isRemotivePublicProviderConfigured(env)) return getJobSearchSourceResult(request, env);
  const fetchImpl = typeof env.NEXUS_JOB_SEARCH_FETCH_IMPL === "function" ? env.NEXUS_JOB_SEARCH_FETCH_IMPL : globalThis.fetch;
  if (typeof fetchImpl !== "function") return buildRemotiveProviderErrorResult(query, "fetch-unavailable");
  try {
    const url = new URL(REMOTIVE_JOBS_URL);
    url.searchParams.set("search", query.queryText);
    const payload = await fetchJson(fetchImpl, url);
    return normalizeRemotivePayload(query, payload);
  } catch (error) {
    return buildRemotiveProviderErrorResult(query, error && error.message ? error.message : "source-error");
  }
}

async function getJobSearchSourceResultAsync(request = {}, env = process.env) {
  if (isRemotivePublicProviderConfigured(env)) return runRemotiveReadOnlyLookup(request, env);
  return getJobSearchSourceResult(request, env);
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
  REMOTIVE_JOBS_URL,
  classifyJobAssistantIntent,
  buildJobSearchQuery,
  resolveJobSearchProviderConfig,
  isRemotivePublicProviderConfigured,
  buildMockJobSearchResult,
  buildApplicationPreparationPreview,
  buildJobProviderUnavailableResult,
  buildRemotiveProviderErrorResult,
  normalizeRemotivePayload,
  runRemotiveReadOnlyLookup,
  getJobSearchSourceResult,
  getJobSearchSourceResultAsync
});
