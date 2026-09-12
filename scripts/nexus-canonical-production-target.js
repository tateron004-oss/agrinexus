"use strict";

const CANONICAL_PRODUCTION_URL = "https://nexus-genesis-certified.onrender.com";
const CANONICAL_PRODUCTION_ORIGIN = new URL(CANONICAL_PRODUCTION_URL).origin;

function normalizeUrl(value) {
  const url = new URL(String(value || "").trim());
  url.hash = "";
  url.search = "";
  url.pathname = url.pathname.replace(/\/+$/, "") || "/";
  return url;
}

function requireCanonicalProductionUrl(value, label = "production URL") {
  const url = normalizeUrl(value || CANONICAL_PRODUCTION_URL);
  if (url.origin !== CANONICAL_PRODUCTION_ORIGIN || url.pathname !== "/") {
    throw new Error(`CANONICAL_HOST_MISMATCH: ${label} must be ${CANONICAL_PRODUCTION_URL}; received ${url.href}`);
  }
  return CANONICAL_PRODUCTION_URL;
}

function productionUrlFromEnv(env = process.env) {
  return requireCanonicalProductionUrl(
    env.NEXUS_CANONICAL_PRODUCTION_URL || env.NEXUS_CLEAN_BASE_URL || env.NEXUS_LIVE_BASE_URL || CANONICAL_PRODUCTION_URL,
    "configured production URL"
  );
}

module.exports = {
  CANONICAL_PRODUCTION_ORIGIN,
  CANONICAL_PRODUCTION_URL,
  productionUrlFromEnv,
  requireCanonicalProductionUrl
};
