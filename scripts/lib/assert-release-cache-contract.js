"use strict";
const assert = require("node:assert/strict");
function assertReleaseCacheContract({ app, server, sw }) {
  const literal = (source, name) => source.match(new RegExp(name + '\\s*=\\s*"([^"\\n]+)"'))?.[1];
  const token = "__NEXUS_RELEASE_SHA__";
  assert.equal(literal(app, "AGRINEXUS_BUILD_VERSION"), token);
  assert.match(server, /AGRINEXUS_WEB_BUILD_VERSION\s*=\s*NEXUS_EFFECTIVE_RELEASE_SHA;/);
  assert.equal(literal(sw, "BUILD_VERSION"), token);
  assert.equal(literal(app, "AGRINEXUS_PWA_CACHE_VERSION"), "agrinexus-pwa-" + token);
  assert.equal(literal(sw, "CACHE_NAME"), "agrinexus-pwa-" + token);
  assert.ok(server.includes('AGRINEXUS_PWA_CACHE_VERSION = ' + String.fromCharCode(96) + 'agrinexus-pwa-$' + '{NEXUS_EFFECTIVE_RELEASE_SHA}' + String.fromCharCode(96)), "server cache uses the resolved immutable release SHA");
  const sha = "a".repeat(40);
  assert.equal(literal(app.replaceAll(token, sha), "AGRINEXUS_PWA_CACHE_VERSION"), "agrinexus-pwa-" + sha);
  assert.equal(literal(sw.replaceAll(token, sha), "CACHE_NAME"), "agrinexus-pwa-" + sha);
}
module.exports = { assertReleaseCacheContract };
