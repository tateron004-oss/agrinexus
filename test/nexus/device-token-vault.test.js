"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("crypto");
const { DeviceTokenVault } = require("../../nexus/security/device-token-vault.js");

test("device token vault refuses unconfigured encryption", () => {
  assert.throws(() => new DeviceTokenVault(""), error => error.code === "device_token_key_missing");
});

test("device token vault encrypts authenticated device material", () => {
  const secret = "production-test-key";
  const context = "tenant:user:device";
  const vault = new DeviceTokenVault(secret);
  const sealed = vault.encrypt({ keys: { auth: "sensitive" } }, context);
  assert.doesNotMatch(sealed, /sensitive/);
  const [, iv, tag, ciphertext] = sealed.split(".");
  const key = crypto.createHash("sha256").update(secret).digest();
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, Buffer.from(iv, "base64url"));
  decipher.setAAD(Buffer.from(context));
  decipher.setAuthTag(Buffer.from(tag, "base64url"));
  const plain = Buffer.concat([decipher.update(Buffer.from(ciphertext, "base64url")), decipher.final()]).toString("utf8");
  assert.deepEqual(JSON.parse(plain), { keys: { auth: "sensitive" } });
});
