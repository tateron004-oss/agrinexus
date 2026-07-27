"use strict";

const crypto = require("crypto");

function parseCloudinaryUrl(env = process.env) {
  const raw = String(env.CLOUDINARY_URL || "").trim();
  if (!raw) return null;
  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    return null;
  }
  if (parsed.protocol !== "cloudinary:" || !parsed.username || !parsed.password || !parsed.hostname) return null;
  return {
    apiKey: decodeURIComponent(parsed.username),
    apiSecret: decodeURIComponent(parsed.password),
    cloudName: parsed.hostname
  };
}

function isConfigured(env = process.env) {
  return Boolean(parseCloudinaryUrl(env));
}

function signatureFor(parameters, apiSecret) {
  const canonical = Object.entries(parameters)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return crypto.createHash("sha1").update(`${canonical}${apiSecret}`).digest("hex");
}

function certificationPng() {
  // A deterministic valid PNG avoids Cloudinary accounts that intentionally
  // reject SVG delivery. The asset proves the authenticated upload/receipt
  // path; it does not need dynamic user content.
  return Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
    "base64"
  );
}

async function uploadCertificationAsset({ fetchImpl = global.fetch, env = process.env } = {}) {
  const credentials = parseCloudinaryUrl(env);
  if (!credentials) {
    return {
      ok: false,
      provider: "cloudinary",
      status: "credential-blocked",
      missingEnv: ["CLOUDINARY_URL"]
    };
  }
  const timestamp = Math.floor(Date.now() / 1000);
  const signedParameters = {
    folder: "agrinexus/system-certification",
    public_id: "nexus-genesis-voice-provider",
    timestamp
  };
  const form = new FormData();
  form.set("file", new Blob([certificationPng()], { type: "image/png" }), "nexus-genesis-cloudinary-certification.png");
  Object.entries(signedParameters).forEach(([key, value]) => form.set(key, String(value)));
  form.set("api_key", credentials.apiKey);
  form.set("signature", signatureFor(signedParameters, credentials.apiSecret));

  let response;
  try {
    response = await fetchImpl(
      `https://api.cloudinary.com/v1_1/${encodeURIComponent(credentials.cloudName)}/image/upload`,
      { method: "POST", body: form }
    );
  } catch (error) {
    return {
      ok: false,
      provider: "cloudinary",
      status: "provider-unreachable",
      error: String(error?.message || "Cloudinary request failed.").slice(0, 240)
    };
  }
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.secure_url || !payload.public_id || !payload.asset_id) {
    return {
      ok: false,
      provider: "cloudinary",
      status: "provider-error",
      httpStatus: response.status,
      error: String(payload?.error?.message || "Cloudinary did not return an asset receipt.").slice(0, 240)
    };
  }
  return {
    ok: true,
    provider: "cloudinary",
    status: "uploaded-and-verified",
    asset: {
      assetId: payload.asset_id,
      publicId: payload.public_id,
      resourceType: payload.resource_type,
      format: payload.format,
      bytes: payload.bytes,
      width: payload.width,
      height: payload.height,
      secureUrl: payload.secure_url,
      version: payload.version
    },
    receipt: {
      provider: "cloudinary",
      action: "media-upload",
      verified: true,
      publicId: payload.public_id,
      assetId: payload.asset_id,
      secureDelivery: String(payload.secure_url).startsWith("https://")
    }
  };
}

module.exports = {
  isConfigured,
  parseCloudinaryUrl,
  signatureFor,
  uploadCertificationAsset
};

// Build 497 production deployment trigger 2026-07-25.
