"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const { compareIdentity, expectedServedBundleSha256 } = require("../../scripts/nexus-release-certification-controller.js");

// The release certification controller proves a deployment by comparing the sha-256 of what the server SERVES for /app.js with the hash it expects. The
// server rewrites two release lines of app.js on the way out (server/static-delivery.js), so the expected hash must come from the same transform.
const SHA = "89abcdef0123456789abcdef0123456789abcdef";
const sha256 = bytes => crypto.createHash("sha256").update(bytes).digest("hex");
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "cert-bundle-"));
const port = freePortSync();
let child;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

test.before(async () => {
  const db = path.join(dir, "db.json");
  fs.copyFileSync(path.join(root, "db.json"), db);
  child = spawn(process.execPath, ["server.js"], {
    cwd: root, stdio: "ignore", windowsHide: true,
    env: { ...process.env, PORT: String(port), RENDER_GIT_COMMIT: SHA, SESSION_SECRET: "cert-bundle-secret-for-the-test-0123456789", AGRINEXUS_DB_PATH: db,
      AGRINEXUS_SPACES_PATH: path.join(dir, "spaces.json"), OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" }
  });
  for (let i = 0; i < 200; i += 1) {
    try { if ((await fetch(`http://localhost:${port}/api/healthz`)).ok) return; } catch { /* not up yet */ }
    await sleep(150);
  }
  throw new Error("server did not start");
});
test.after(() => { child?.kill(); try { fs.rmSync(dir, { recursive: true, force: true }); } catch { /* temp */ } });

test("the expected hash of the repository's app.js equals the hash of what a local server serves for /app.js", async () => {
  const served = Buffer.from(await (await fetch(`http://localhost:${port}/app.js`)).arrayBuffer());
  const expected = expectedServedBundleSha256(path.join(root, "public", "app.js"), SHA);
  assert.equal(expected, sha256(served));
  // the repository file itself is NOT what is served (this is why the old comparison could not work)
  assert.notEqual(sha256(fs.readFileSync(path.join(root, "public", "app.js"))), sha256(served));
  // the exact comparison the controller makes, with the identity the unauthenticated route builds
  const identity = { schema: "nexus.certification.identity.v1", contractVersion: require("../../archive/rebuild/nexus-core/certification-identity").CERTIFICATION_CONTRACT_VERSION, releaseSha: SHA, bundleSha256: sha256(served) };
  assert.deepEqual(compareIdentity({ identity, expectedSha: SHA, expectedBundle: expected }), []);
});

test("a one-byte change in app.js changes the expected hash, and another release id elsewhere in the file changes it too", () => {
  const original = fs.readFileSync(path.join(root, "public", "app.js"));
  const base = expectedServedBundleSha256(path.join(root, "public", "app.js"), SHA);
  const edited = path.join(dir, "app.js");
  const bytes = Buffer.from(original);
  bytes[bytes.length - 1] = bytes[bytes.length - 1] === 0x0a ? 0x20 : 0x0a;
  fs.writeFileSync(edited, bytes);
  assert.notEqual(expectedServedBundleSha256(edited, SHA), base, "one changed byte");
  // an app.js that still carries the placeholder somewhere else gets the release id filled in there: a different release gives a different hash
  fs.writeFileSync(edited, Buffer.concat([original, Buffer.from('\nconst LEFTOVER = "__NEXUS_RELEASE_SHA__";\n')]));
  assert.notEqual(expectedServedBundleSha256(edited, SHA), expectedServedBundleSha256(edited, "1".repeat(40)));
  // a non-text bundle is hashed as it is
  const binary = path.join(dir, "bundle.bin");
  fs.writeFileSync(binary, Buffer.from([1, 2, 3]));
  assert.equal(expectedServedBundleSha256(binary, SHA), sha256(Buffer.from([1, 2, 3])));
});

test("compareIdentity still reports a bundle mismatch, a release mismatch and a wrong schema", async () => {
  const served = Buffer.from(await (await fetch(`http://localhost:${port}/app.js`)).arrayBuffer());
  const contractVersion = require("../../archive/rebuild/nexus-core/certification-identity").CERTIFICATION_CONTRACT_VERSION;
  const identity = { schema: "nexus.certification.identity.v1", contractVersion, releaseSha: SHA, bundleSha256: sha256(served) };
  const expected = expectedServedBundleSha256(path.join(root, "public", "app.js"), SHA);
  assert.deepEqual(compareIdentity({ identity: { ...identity, bundleSha256: sha256(Buffer.concat([served, Buffer.from(" ")])) }, expectedSha: SHA, expectedBundle: expected }), ["bundle-sha256"]);
  assert.deepEqual(compareIdentity({ identity: { ...identity, releaseSha: "f".repeat(40) }, expectedSha: SHA, expectedBundle: expected }), ["release-sha"]);
  assert.deepEqual(compareIdentity({ identity: { ...identity, schema: "x" }, expectedSha: SHA, expectedBundle: expected }), ["identity-schema"]);
  // a server serving an app.js that is not the expected file (a stale build) is a mismatch
  assert.deepEqual(compareIdentity({ identity, expectedSha: SHA, expectedBundle: sha256(Buffer.from("old build")) }), ["bundle-sha256"]);
});
