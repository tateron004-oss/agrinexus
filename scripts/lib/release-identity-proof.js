"use strict";
// Release identity as served to a browser: how the release gate proves that the page, the app script and the service worker
// are all the exact candidate build.
//
// The release SHA used to be written into /app.js itself. It is now written into the page (<meta name="agrinexus-release">, index.html is
// never stored) and the service worker, and /app.js carries the code that READS the id from that meta tag (server/static-delivery.js,
// APP_RELEASE_STAMPS), so its bytes do not change from release to release and phones keep their copy. The proof is no weaker for it:
//   1. the page names the exact candidate SHA in the meta tag;
//   2. the service worker names it (build id and cache name);
//   3. /app.js is the build that reads the release from that meta tag, and embeds no release id of its own: an older app.js with any other
//      SHA written into it (or an unsubstituted placeholder) fails here;
//   4. the page names /app.js by content hash, and that hash is the hash of the /app.js bytes served: the page and its app script are a pair;
//   5. the caller separately requires /api/healthz, /api/release, /api/version and the runtime status to report the same SHA (the page SHA must
//      equal the health SHA, which must equal the candidate SHA).
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const { APP_RELEASE_STAMPS } = require("../../server/static-delivery.js");

const escapeRegExp = value => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// What a served app.js must contain instead of a release id: the two stamped lines, character for character.
const APP_READER_LINES = APP_RELEASE_STAMPS.map(([, served]) => served);

function releaseShaFromPage(indexText) {
  const match = String(indexText).match(/<meta name="agrinexus-release" content="([^"]*)">/);
  return match ? match[1] : "";
}

function appFingerprintFromPage(indexText) {
  const match = String(indexText).match(/<script src="\/app\.js\?v=([0-9a-f]{12})"><\/script>/);
  return match ? match[1] : "";
}

function assertServedIdentity({ expectedSha, index, app: appInput, sw }) {
  const appBytes = Buffer.isBuffer(appInput) ? appInput : Buffer.from(String(appInput), "utf8");
  const app = appBytes.toString("utf8");
  assert.match(String(expectedSha), /^[0-9a-f]{40}$/, "candidate must be bound to a full commit SHA");
  const sha = escapeRegExp(expectedSha);
  assert.equal(releaseShaFromPage(index), expectedSha, "/ must carry the exact candidate SHA in <meta name=\"agrinexus-release\">");
  assert.match(sw, new RegExp(`const CACHE_NAME = "agrinexus-pwa-${sha}"`), "/sw.js must name the exact candidate cache");
  assert.match(sw, new RegExp(`const BUILD_VERSION = "${sha}"`), "/sw.js must name the exact candidate build");
  for (const line of APP_READER_LINES) assert.ok(app.includes(line), "/app.js must be the build that reads its release from the page");
  assert.doesNotMatch(app, /AGRINEXUS_BUILD_VERSION\s*=\s*"/, "/app.js must not embed a release id of its own");
  assert.doesNotMatch(app, /AGRINEXUS_PWA_CACHE_VERSION\s*=\s*"/, "/app.js must not embed a cache id of its own");
  assert.ok(!app.includes(expectedSha), "/app.js must not contain a release id");
  const named = appFingerprintFromPage(index);
  const served = crypto.createHash("sha256").update(appBytes).digest("hex").slice(0, 12);
  assert.ok(named, "/ must name /app.js by content hash");
  assert.equal(served, named, "/app.js must be the exact file the page names");
}

module.exports = { assertServedIdentity, releaseShaFromPage, appFingerprintFromPage, APP_READER_LINES };
