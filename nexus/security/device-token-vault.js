"use strict";
const crypto = require("crypto");

class DeviceTokenVault {
  constructor(secret) {
    if (!secret) throw Object.assign(new Error("NEXUS_DEVICE_TOKEN_KEY is required for push registration."), { code: "device_token_key_missing" });
    this.key = crypto.createHash("sha256").update(String(secret)).digest();
  }
  encrypt(value, context) {
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv("aes-256-gcm", this.key, iv);
    cipher.setAAD(Buffer.from(String(context)));
    const ciphertext = Buffer.concat([cipher.update(JSON.stringify(value), "utf8"), cipher.final()]);
    return ["v1", iv.toString("base64url"), cipher.getAuthTag().toString("base64url"), ciphertext.toString("base64url")].join(".");
  }
}
module.exports = Object.freeze({ DeviceTokenVault });
