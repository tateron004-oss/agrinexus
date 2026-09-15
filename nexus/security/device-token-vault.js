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
  decrypt(ciphertext, context) {
    const [version, ivB64, tagB64, dataB64] = String(ciphertext || "").split(".");
    if (version !== "v1" || !ivB64 || !tagB64 || !dataB64) {
      throw Object.assign(new Error("Unsupported device token ciphertext."), { code: "device_token_ciphertext_invalid" });
    }
    const decipher = crypto.createDecipheriv("aes-256-gcm", this.key, Buffer.from(ivB64, "base64url"));
    decipher.setAAD(Buffer.from(String(context)));
    decipher.setAuthTag(Buffer.from(tagB64, "base64url"));
    const plaintext = Buffer.concat([decipher.update(Buffer.from(dataB64, "base64url")), decipher.final()]);
    return JSON.parse(plaintext.toString("utf8"));
  }
}
module.exports = Object.freeze({ DeviceTokenVault });
