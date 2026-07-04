"use strict";

function clean(value) {
  return String(value || "").trim();
}

function present(env, name) {
  const value = clean(env?.[name]);
  return Boolean(value) && !/^<.*>$/.test(value) && !/\b(replace|changeme|todo|example|test_key)\b/i.test(value);
}

function missing(env) {
  return ["DAILY_API_KEY", "DAILY_ROOM_DOMAIN"].filter(name => !present(env, name));
}

function normalizedDomain(env) {
  return clean(env?.DAILY_ROOM_DOMAIN).replace(/^https?:\/\//i, "").replace(/\/+$/g, "");
}

function status(env = process.env) {
  const missingEnv = missing(env);
  return {
    provider: "daily",
    providerName: "Daily",
    configured: missingEnv.length === 0,
    missingEnv,
    videoCreationAllowed: missingEnv.length === 0,
    requiresConfirmation: true,
    requiresConsent: true,
    noSecretValuesReturned: true
  };
}

async function createRoom(encounter = {}, env = process.env, options = {}) {
  const providerStatus = status(env);
  if (!providerStatus.configured) {
    return {
      ok: true,
      status: "missing_config",
      provider: "daily",
      missingEnv: providerStatus.missingEnv,
      roomCreated: false,
      noFakeVideoClaim: true
    };
  }

  const fetchImpl = options.fetchImpl || globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    return {
      ok: true,
      status: "provider_unavailable",
      provider: "daily",
      roomCreated: false,
      providerError: "fetch_unavailable",
      noFakeVideoClaim: true
    };
  }

  const name = `nexus-${clean(encounter.id || Date.now()).toLowerCase().replace(/[^a-z0-9-]/g, "-").slice(0, 48)}`;
  const response = await fetchImpl("https://api.daily.co/v1/rooms", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${clean(env.DAILY_API_KEY)}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      privacy: "private",
      properties: {
        enable_chat: true,
        enable_screenshare: false,
        eject_at_room_exp: true,
        exp: Math.floor(Date.now() / 1000) + 60 * 60
      }
    })
  });

  const text = await response.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text.slice(0, 240) };
  }

  if (!response.ok) {
    return {
      ok: true,
      status: "provider_error",
      provider: "daily",
      httpStatus: response.status,
      providerError: data.error || data.info || data.message || "daily_room_create_failed",
      roomCreated: false,
      noFakeVideoClaim: true
    };
  }

  const domain = normalizedDomain(env);
  return {
    ok: true,
    status: "created",
    provider: "daily",
    roomCreated: true,
    roomName: data.name || name,
    roomUrl: data.url || (domain ? `https://${domain}/${data.name || name}` : ""),
    expiresAt: data.config?.exp ? new Date(data.config.exp * 1000).toISOString() : "",
    providerResultMetadata: {
      id: data.id || "",
      privacy: data.privacy || "private",
      createdAt: data.created_at || ""
    },
    noSecretValuesReturned: true
  };
}

module.exports = {
  status,
  createRoom
};
