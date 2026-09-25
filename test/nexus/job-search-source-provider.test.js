"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const jobSearch = require("../../server/nexus-job-search-source-provider.js");

const { buildJobSearchQuery, normalizeRemotivePayload, runRemotiveReadOnlyLookup } = jobSearch;

// Found live (workforce follow-up audit): the Remotive API is never actually
// filtered by the user's requested location -- only the role/keyword text is
// sent as `search` -- so labeling country/cityOrRegion with the user's
// REQUESTED location (instead of the real listing's own location field)
// fabricated a match that was never verified against the live source.
test("normalizeRemotivePayload labels country/cityOrRegion from the real listing, not the unverified requested location", () => {
  const query = buildJobSearchQuery({ query: "engineer", locationText: "Kenya" });
  const payload = { jobs: [{ id: 1, title: "Remote Engineer", company_name: "Acme", candidate_required_location: "USA only", url: "https://remotive.com/job/1" }] };
  const result = normalizeRemotivePayload(query, payload);
  assert.equal(result.jobLocation, "USA only");
  assert.equal(result.country, "USA only", "must not be overwritten with the user's requested location");
  assert.equal(result.cityOrRegion, "USA only");
});

test("normalizeRemotivePayload falls back to 'remote/unspecified' when the listing has no location, still not the requested one", () => {
  const query = buildJobSearchQuery({ query: "engineer", locationText: "Kenya" });
  const payload = { jobs: [{ id: 2, title: "Remote Engineer", company_name: "Acme", url: "https://remotive.com/job/2" }] };
  const result = normalizeRemotivePayload(query, payload);
  assert.equal(result.jobLocation, "remote/unspecified");
  assert.equal(result.country, "remote/unspecified");
  assert.equal(result.cityOrRegion, "remote/unspecified");
});

test("runRemotiveReadOnlyLookup sends only the role text to Remotive, never the location, confirming the fix's premise", async () => {
  let capturedUrl = null;
  const env = {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_FETCH_IMPL: async url => {
      capturedUrl = String(url);
      return { ok: true, json: async () => ({ jobs: [{ id: 3, title: "Farm Ops", company_name: "Acme Farms", candidate_required_location: "Nigeria" }] }) };
    }
  };
  const result = await runRemotiveReadOnlyLookup({ query: "farm operations", locationText: "Kenya" }, env);
  assert.match(capturedUrl, /search=farm/);
  assert.doesNotMatch(capturedUrl, /Kenya/i, "locationText is not actually sent as a filter");
  assert.equal(result.country, "Nigeria", "labeled from the real listing, not the requested Kenya");
});
