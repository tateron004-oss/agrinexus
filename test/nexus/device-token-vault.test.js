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

test("decrypt reverses encrypt for the exact same value and context", () => {
  const vault = new DeviceTokenVault("production-test-key");
  const context = "tenant:user:device";
  const value = { p256dh: "public-key-material", auth: "auth-secret" };
  const sealed = vault.encrypt(value, context);
  assert.deepEqual(vault.decrypt(sealed, context), value);
});

test("decrypt rejects a mismatched context (authenticated-data check fails)", () => {
  const vault = new DeviceTokenVault("production-test-key");
  const sealed = vault.encrypt({ token: "secret" }, "tenant:user:device-1");
  assert.throws(() => vault.decrypt(sealed, "tenant:user:device-2"));
});

test("decrypt rejects tampered ciphertext", () => {
  const vault = new DeviceTokenVault("production-test-key");
  const context = "tenant:user:device";
  const sealed = vault.encrypt({ token: "secret" }, context);
  const [version, iv, tag, ciphertext] = sealed.split(".");
  const tampered = [version, iv, tag, ciphertext.slice(0, -2) + (ciphertext.slice(-2) === "AA" ? "BB" : "AA")].join(".");
  assert.throws(() => vault.decrypt(tampered, context));
});

test("decrypt rejects a malformed/unsupported ciphertext", () => {
  const vault = new DeviceTokenVault("production-test-key");
  assert.throws(() => vault.decrypt("not-a-real-ciphertext", "tenant:user:device"),
    error => error.code === "device_token_ciphertext_invalid");
});
