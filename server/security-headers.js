"use strict";
// Security headers that belong on EVERY response (pages, static files, API answers, errors).
//
// Set once, at the top of the request listener, with res.setHeader(): anything a handler later passes to writeHead() under the same
// name still wins, so existing per-route headers keep working. Nothing here depends on the route or on who is signed in.
//
//   X-Content-Type-Options: nosniff                       browsers must trust the declared content-type
//   Referrer-Policy: strict-origin-when-cross-origin      other sites only ever learn the origin, never a path or query
//   X-Frame-Options: SAMEORIGIN                           other sites cannot put the app in a frame (clickjacking)
//   Content-Security-Policy: frame-ancestors 'self'       same rule for current browsers; ONLY this one directive, see docs/SECURITY_HEADERS.md
//   Strict-Transport-Security: max-age=31536000           only when the request really arrived over HTTPS (never includeSubDomains / preload)
//
// Permissions-Policy is deliberately not set here (see docs/SECURITY_HEADERS.md).

const HSTS_VALUE = "max-age=31536000";

function trustProxy(env = process.env) {
  return String(env.AGRINEXUS_TRUST_PROXY || "").toLowerCase() === "true";
}

// True when the caller's connection to us (or to the trusted proxy in front of us) was HTTPS. The forwarding headers are only believed
// when AGRINEXUS_TRUST_PROXY=true, the same switch the rate limiter uses for X-Forwarded-For: without it a header is just caller input.
function requestIsHttps(req, env = process.env) {
  if (req?.socket?.encrypted) return true;
  if (!trustProxy(env)) return false;
  const forwarded = String(req?.headers?.["x-forwarded-proto"] || "").split(",")[0].trim().toLowerCase();
  if (forwarded === "https") return true;
  if (forwarded) return false;
  // Cloudflare also states the visitor's scheme as {"scheme":"https"}; only consulted when no X-Forwarded-Proto was sent.
  const visitor = String(req?.headers?.["cf-visitor"] || "");
  return /"scheme"\s*:\s*"https"/i.test(visitor);
}

function applySecurityHeaders(req, res, env = process.env) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Content-Security-Policy", "frame-ancestors 'self'");
  if (requestIsHttps(req, env)) res.setHeader("Strict-Transport-Security", HSTS_VALUE);
}

module.exports = { applySecurityHeaders, requestIsHttps, HSTS_VALUE };
