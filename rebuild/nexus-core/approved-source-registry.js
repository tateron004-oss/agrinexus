"use strict";

const DOMAIN_PROFILES = Object.freeze({
  clinical: profile("Clinical & public health", [
    "who.int", "cdc.gov", "nih.gov", "ncbi.nlm.nih.gov", "health.go.ke",
    "nice.org.uk", "cochranelibrary.com"
  ], /\b(clinician|clinical|patient|diagnos|treatment|guideline|hypertension|diabetes|medicine|medical|health)\b/i),
  government: profile("Government & public policy", [
    "president.go.ke", "parliament.go.ke", "kenyalaw.org", "knbs.or.ke",
    "worldbank.org", "un.org", "undp.org", "afdb.org"
  ], /\b(government|president|parliament|policy|ministry|governance|public sector|kenya status)\b/i),
  agriculture: profile("Agriculture & food systems", [
    "fao.org", "kilimo.go.ke", "kalro.org", "wfp.org", "worldbank.org",
    "cgiar.org", "ifad.org"
  ], /\b(agricultur|farm|crop|maize|soil|livestock|food security|drought)\b/i),
  workforce: profile("Workforce & livelihoods", [
    "ilo.org", "knbs.or.ke", "worldbank.org", "labour.go.ke", "undp.org"
  ], /\b(job|jobs|workforce|employment|unemployment|labour|labor|livelihood|skills)\b/i),
  education: profile("Education & literacy", [
    "unesco.org", "education.go.ke", "unicef.org", "worldbank.org", "knbs.or.ke"
  ], /\b(education|literacy|school|learning|training|student|teacher)\b/i),
  "cross-domain": profile("Cross-domain public evidence", [
    "who.int", "fao.org", "ilo.org", "unesco.org", "unicef.org", "worldbank.org",
    "un.org", "undp.org", "knbs.or.ke", "kenyalaw.org"
  ], /[\s\S]*/)
});

function profile(label, approvedDomains, pattern) {
  return Object.freeze({
    label,
    approvedDomains: Object.freeze([...approvedDomains]),
    pattern
  });
}

function classifyEvidenceDomain(question) {
  const text = String(question || "").trim();
  const matches = Object.keys(DOMAIN_PROFILES)
    .filter((name) => name !== "cross-domain")
    .filter((name) => DOMAIN_PROFILES[name].pattern.test(text));
  const crossDomainRequest = /\b(areas? of need|how can nexus support|across (all )?(areas|domains|sectors)|whole country)\b/i.test(text);
  const key = crossDomainRequest || matches.length > 1 ? "cross-domain" : matches[0] || "cross-domain";
  return Object.freeze({ key, ...DOMAIN_PROFILES[key] });
}

function normalizeHostname(url) {
  try {
    return new URL(url).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return "";
  }
}

function isApprovedSource(url, profileValue) {
  const hostname = normalizeHostname(url);
  return Boolean(hostname && profileValue.approvedDomains.some(
    (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
  ));
}

function approvedOrganization(url, profileValue) {
  const hostname = normalizeHostname(url);
  return profileValue.approvedDomains.find(
    (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
  ) || "";
}

module.exports = {
  DOMAIN_PROFILES,
  classifyEvidenceDomain,
  approvedOrganization,
  isApprovedSource,
  normalizeHostname
};
