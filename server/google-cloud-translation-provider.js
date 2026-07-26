"use strict";

const crypto = require("crypto");

const GOOGLE_OAUTH_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_TRANSLATION_SCOPE = "https://www.googleapis.com/auth/cloud-translation";
const tokenCache = new Map();

function base64Url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function parseCredentials(env = process.env) {
  const raw = String(env.GOOGLE_TRANSLATION_CREDENTIALS_JSON || "").trim();
  if (!raw) return null;
  let credentials;
  try {
    credentials = JSON.parse(raw);
  } catch {
    const error = new Error("Google Translation credentials JSON is invalid.");
    error.code = "invalid-credentials-json";
    throw error;
  }
  if (
    credentials.type !== "service_account"
    || !credentials.project_id
    || !credentials.client_email
    || !credentials.private_key
  ) {
    const error = new Error("Google Translation service-account credentials are incomplete.");
    error.code = "incomplete-service-account";
    throw error;
  }
  return credentials;
}

function isConfigured(env = process.env) {
  try {
    return Boolean(parseCredentials(env));
  } catch {
    return false;
  }
}

function createServiceAccountAssertion(credentials, nowSeconds = Math.floor(Date.now() / 1000)) {
  const tokenUri = credentials.token_uri || GOOGLE_OAUTH_TOKEN_URL;
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64Url(JSON.stringify({
    iss: credentials.client_email,
    scope: GOOGLE_TRANSLATION_SCOPE,
    aud: tokenUri,
    iat: nowSeconds,
    exp: nowSeconds + 3600
  }));
  const unsigned = `${header}.${claims}`;
  const signature = crypto.sign("RSA-SHA256", Buffer.from(unsigned), credentials.private_key);
  return `${unsigned}.${base64Url(signature)}`;
}

async function accessToken(credentials, fetchImpl = global.fetch) {
  const cacheKey = `${credentials.project_id}:${credentials.client_email}`;
  const cached = tokenCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now() + 60_000) return cached.value;

  const tokenUri = credentials.token_uri || GOOGLE_OAUTH_TOKEN_URL;
  const assertion = createServiceAccountAssertion(credentials);
  const response = await fetchImpl(tokenUri, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    }).toString()
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.access_token) {
    const error = new Error(`Google OAuth token request failed (${response.status || "unknown"}).`);
    error.code = "google-oauth-failed";
    throw error;
  }
  tokenCache.set(cacheKey, {
    value: payload.access_token,
    expiresAt: Date.now() + Math.max(60, Number(payload.expires_in || 3600)) * 1000
  });
  return payload.access_token;
}

async function translateText({
  text,
  targetLanguage,
  sourceLanguage = "en",
  env = process.env,
  fetchImpl = global.fetch
}) {
  const credentials = parseCredentials(env);
  if (!credentials) {
    const error = new Error("Google Translation credentials are not configured.");
    error.code = "google-translation-not-configured";
    throw error;
  }
  const accessTokenValue = await accessToken(credentials, fetchImpl);
  const projectId = encodeURIComponent(credentials.project_id);
  const endpoint = `https://translation.googleapis.com/v3/projects/${projectId}/locations/global:translateText`;
  const response = await fetchImpl(endpoint, {
    method: "POST",
    headers: {
      authorization: `Bearer ${accessTokenValue}`,
      "content-type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      contents: [String(text || "")],
      mimeType: "text/plain",
      sourceLanguageCode: String(sourceLanguage || "en"),
      targetLanguageCode: String(targetLanguage || "en")
    })
  });
  const payload = await response.json().catch(() => ({}));
  const translatedText = String(payload?.translations?.[0]?.translatedText || "").trim();
  if (!response.ok || !translatedText) {
    const error = new Error(`Google Cloud Translation request failed (${response.status || "unknown"}).`);
    error.code = "google-translation-failed";
    throw error;
  }
  return {
    translatedText,
    provider: "google-cloud-translation",
    sourceLanguage: String(sourceLanguage || "en"),
    targetLanguage: String(targetLanguage || "en")
  };
}

function clearTokenCache() {
  tokenCache.clear();
}

module.exports = Object.freeze({
  GOOGLE_OAUTH_TOKEN_URL,
  GOOGLE_TRANSLATION_SCOPE,
  parseCredentials,
  isConfigured,
  createServiceAccountAssertion,
  translateText,
  clearTokenCache
});
