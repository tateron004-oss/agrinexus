"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const root = path.resolve(__dirname, "..", "..");
const { createStaticDelivery, APP_RELEASE_STAMPS } = require("../../server/static-delivery.js");
const { assertServedIdentity, releaseShaFromPage } = require("../../scripts/lib/release-identity-proof.js");

// The release gate (scripts/nexus-preproduction-black-box.js) proves the build through the page, the service worker and the app script.
// These tests run that proof on the real public/ files as the real server hands them out, and then break each piece in turn: nothing weaker
// than "the exact candidate SHA" may pass.
const SHA = "0123456789abcdef0123456789abcdef01234567";
const OTHER = "fedcba9876543210fedcba9876543210fedcba98";
const PLACEHOLDER = "__NEXUS_RELEASE_SHA__";

async function serve(release) {
  const mime = { ".html": "text/html", ".js": "application/javascript", ".css": "text/css" };
  const delivery = createStaticDelivery({
    publicDir: path.join(root, "public"), placeholder: PLACEHOLDER, fillRelease: text => text.replaceAll(PLACEHOLDER, release), mime,
    send: (res, status, body) => { res.writeHead(status); res.end(String(body)); }, stableStamps: { "app.js": APP_RELEASE_STAMPS }
  });
  const server = http.createServer((req, res) => delivery.serve(req, res, new URL(req.url, "http://localhost")).catch(() => { res.writeHead(500); res.end(); }));
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const get = async route => Buffer.from(await (await fetch(`${base}${route}`)).arrayBuffer());
  const served = { index: (await get("/")).toString("utf8"), app: await get("/app.js"), sw: (await get("/sw.js")).toString("utf8") };
  server.close();
  return served;
}

test("the real files, served for a release, pass the identity proof for exactly that release", async () => {
  const served = await serve(SHA);
  assert.doesNotThrow(() => assertServedIdentity({ expectedSha: SHA, ...served }));
  assert.equal(releaseShaFromPage(served.index), SHA);
  // a different candidate SHA must not be accepted by the same files
  assert.throws(() => assertServedIdentity({ expectedSha: OTHER, ...served }), /exact candidate SHA/);
});

test("negative: the page, the service worker or the app script from another release is refused", async () => {
  const good = await serve(SHA);
  const other = await serve(OTHER);
  const proof = parts => () => assertServedIdentity({ expectedSha: SHA, ...good, ...parts });
  assert.throws(proof({ index: other.index }), /exact candidate SHA/, "page from another release");
  assert.throws(proof({ sw: other.sw }), /exact candidate (cache|build)/, "service worker from another release");
  // page SHA correct but health says something else: the gate compares them directly
  assert.notEqual(releaseShaFromPage(other.index), releaseShaFromPage(good.index));
  // app script from an older build that carried its SHA inside the file (any SHA, ours or another)
  const oldStyle = sha => Buffer.from(fs.readFileSync(path.join(root, "public", "app.js"), "utf8").replaceAll(PLACEHOLDER, sha));
  assert.throws(proof({ app: oldStyle(OTHER) }), /reads its release from the page/, "old build with another SHA embedded");
  assert.throws(proof({ app: oldStyle(SHA) }), /reads its release from the page/, "old build with the candidate SHA embedded");
  // unsubstituted source
  assert.throws(proof({ app: fs.readFileSync(path.join(root, "public", "app.js")) }), /reads its release from the page/, "raw source");
  // a reader build that also embeds an id
  assert.throws(proof({ app: Buffer.concat([good.app, Buffer.from(`\nconst AGRINEXUS_BUILD_VERSION2 = "${SHA}";`)]) }), /must not contain a release id/);
});

test("negative: the app script must be the exact file the page names, and the page must name one", async () => {
  const good = await serve(SHA);
  const changed = Buffer.concat([good.app, Buffer.from("\n// one byte of difference\n")]);
  assert.throws(() => assertServedIdentity({ expectedSha: SHA, ...good, app: changed }), /exact file the page names/);
  const unnamed = good.index.replace(/<script src="\/app\.js\?v=[0-9a-f]{12}"><\/script>/, "");
  assert.notEqual(unnamed, good.index);
  assert.throws(() => assertServedIdentity({ expectedSha: SHA, ...good, index: unnamed }), /name \/app\.js by content hash/);
  assert.throws(() => assertServedIdentity({ expectedSha: "abc", ...good }), /full commit SHA/);
});

test("the black-box gate still compares the page, the health endpoint and the candidate SHA, and runs the full proof", () => {
  const source = fs.readFileSync(path.join(root, "scripts", "nexus-preproduction-black-box.js"), "utf8");
  for (const required of ["assertServedIdentity({ expectedSha, index: served[\"/\"], app: appBytes, sw: served[\"/sw.js\"] })",
    "the page's release SHA must equal the health endpoint's release SHA", "${pathname} must contain the exact candidate SHA",
    "${pathname} must not expose a placeholder or legacy identity"]) assert.ok(source.includes(required), `assertion removed: ${required}`);
  assert.doesNotMatch(source, /\/app\.js[^\n]*skip|NEXUS_SKIP|any sha/i);
});
