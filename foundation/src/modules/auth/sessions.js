const crypto = require("crypto");

function createSessionToken({ userId, tenantId, ttlMinutes, secret, roles = [], email, displayName }) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const now = Math.floor(Date.now() / 1000);
  const payload = Buffer.from(JSON.stringify({
    sub: userId,
    tid: tenantId,
    jti: crypto.randomUUID(),
    roles,
    email,
    name: displayName,
    iat: now,
    exp: now + ttlMinutes * 60
  })).toString("base64url");
  const signature = sign(`${header}.${payload}`, secret);
  return `${header}.${payload}.${signature}`;
}

function verifySessionToken(token, secret) {
  const [header, payload, signature] = String(token || "").split(".");
  if (!header || !payload || !signature) return null;
  const expected = sign(`${header}.${payload}`, secret);
  if (Buffer.byteLength(signature) !== Buffer.byteLength(expected)) return null;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (data.exp && data.exp < Math.floor(Date.now() / 1000)) return null;
    return data;
  } catch {
    return null;
  }
}

function sign(value, secret) {
  return crypto.createHmac("sha256", secret).update(value).digest("base64url");
}

module.exports = {
  createSessionToken,
  verifySessionToken
};
