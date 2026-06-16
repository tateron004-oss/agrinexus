const fs = require("fs");

const liveBase = (process.env.LIVE_BASE_URL || "https://agrinexus-platform.onrender.com").replace(/\/$/, "");

function read(path) {
  return fs.readFileSync(path, "utf8");
}

function matchOrFail(label, text, pattern) {
  const match = text.match(pattern);
  if (!match) throw new Error(`Could not read ${label}`);
  return match[1];
}

async function getText(path) {
  const url = `${liveBase}${path}`;
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.text();
}

async function getJson(path) {
  return JSON.parse(await getText(path));
}

function requireIncludes(label, text, marker) {
  if (!text.includes(marker)) throw new Error(`${label} is missing ${marker}`);
}

(async () => {
  const app = read("public/app.js");
  const sw = read("public/sw.js");
  const html = read("public/index.html");
  const localBuild = matchOrFail("local app build", app, /AGRINEXUS_BUILD_VERSION = "([^"]+)"/);
  const localCache = matchOrFail("local PWA cache", app, /AGRINEXUS_PWA_CACHE_VERSION = "([^"]+)"/);

  requireIncludes("local index", html, `/app.js?v=${localBuild}`);
  requireIncludes("local service worker", sw, `BUILD_VERSION = "${localBuild}"`);
  requireIncludes("local service worker", sw, `CACHE_NAME = "${localCache}"`);

  const health = await getJson("/api/healthz");
  const liveHtml = await getText(`/?release-check=${Date.now()}`);
  const liveSw = await getText(`/sw.js?release-check=${Date.now()}`);
  const liveApp = await getText(`/app.js?v=${localBuild}&release-check=${Date.now()}`);

  const failures = [];
  if (health.webBuild !== localBuild) failures.push(`healthz webBuild=${health.webBuild || "missing"} expected ${localBuild}`);
  if (health.pwaCache !== localCache) failures.push(`healthz pwaCache=${health.pwaCache || "missing"} expected ${localCache}`);
  if (!liveHtml.includes(`/app.js?v=${localBuild}`)) failures.push("live HTML does not point to the current app.js build");
  if (!liveHtml.includes(`/styles.css?v=${localBuild}`)) failures.push("live HTML does not point to the current styles.css build");
  if (!liveSw.includes(`BUILD_VERSION = "${localBuild}"`)) failures.push("live service worker does not know the current build");
  if (!liveSw.includes(`CACHE_NAME = "${localCache}"`)) failures.push("live service worker does not know the current cache");
  if (!liveApp.includes(`AGRINEXUS_BUILD_VERSION = "${localBuild}"`)) failures.push("live app bundle is not the current build");
  if (!liveApp.includes("startGuidedHealthVoiceResponse")) failures.push("live app bundle is missing guided health voice behavior");

  if (failures.length) {
    console.error("Live release verification failed:");
    failures.forEach(item => console.error(`- ${item}`));
    console.error(`Local expected: ${localBuild} / ${localCache}`);
    console.error(`Live healthz: ${JSON.stringify({ webBuild: health.webBuild, pwaCache: health.pwaCache, release: health.release })}`);
    process.exit(1);
  }

  console.log("Live release verification passed");
  console.log(`- ${liveBase}`);
  console.log(`- build ${localBuild}`);
  console.log(`- cache ${localCache}`);
})();
