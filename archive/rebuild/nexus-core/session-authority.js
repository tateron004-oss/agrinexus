"use strict";

const crypto = require("node:crypto");

function encode(value) {
  return Buffer.from(value).toString("base64url");
}

function decode(value) {
  return Buffer.from(value, "base64url").toString("utf8");
}

class NexusSessionAuthority {
  constructor({ secret, issuer = "nexus-genesis", ttlSeconds = 8 * 60 * 60, now = () => Date.now() } = {}) {
    if (!secret || Buffer.byteLength(secret) < 32) {
      throw new Error("Nexus session secret must contain at least 32 bytes.");
    }
    this.secret = secret;
    this.issuer = issuer;
    this.ttlSeconds = ttlSeconds;
    this.now = now;
  }

  issue({ userId, roles = ["standard-user"], sessionId = crypto.randomUUID() } = {}) {
    if (!userId) throw new Error("A Nexus user id is required.");
    const issuedAt = Math.floor(this.now() / 1000);
    const payload = {
      schema: "nexus.session.v1",
      issuer: this.issuer,
      sessionId,
      userId,
      roles: [...new Set(roles)],
      issuedAt,
      expiresAt: issuedAt + this.ttlSeconds
    };
    const body = encode(JSON.stringify(payload));
    return Object.freeze({
      token: `${body}.${this.sign(body)}`,
      session: Object.freeze(payload)
    });
  }

  verify(token) {
    const [body, signature, extra] = String(token || "").split(".");
    if (!body || !signature || extra) throw new Error("Malformed Nexus session token.");
    const expected = this.sign(body);
    const actualBytes = Buffer.from(signature);
    const expectedBytes = Buffer.from(expected);
    if (actualBytes.length !== expectedBytes.length || !crypto.timingSafeEqual(actualBytes, expectedBytes)) {
      throw new Error("Invalid Nexus session signature.");
    }
    const session = JSON.parse(decode(body));
    if (session.schema !== "nexus.session.v1" || session.issuer !== this.issuer) {
      throw new Error("Invalid Nexus session contract.");
    }
    if (session.expiresAt <= Math.floor(this.now() / 1000)) {
      throw new Error("Nexus session expired.");
    }
    return Object.freeze(session);
  }

  sign(body) {
    return crypto.createHmac("sha256", this.secret).update(body).digest("base64url");
  }
}

module.exports = { NexusSessionAuthority };
