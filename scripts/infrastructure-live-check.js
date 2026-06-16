const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const liveBase = (process.env.LIVE_BASE_URL || "https://agrinexus-platform.onrender.com").replace(/\/$/, "");
const providerBase = (process.env.PROVIDER_ENGINE_BASE_URL || "https://agrinexus-provider-engines.onrender.com").replace(/\/$/, "");
const loginEmail = process.env.LIVE_TEST_EMAIL || "admin@agrinexus.org";
const loginPassword = process.env.LIVE_TEST_PASSWORD || "Admin2026!";

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8");
}

function matchOrFail(label, text, pattern) {
  const match = text.match(pattern);
  if (!match) throw new Error(`Could not read ${label}`);
  return match[1];
}

async function fetchText(url, options = {}) {
  const response = await fetch(url, { cache: "no-store", ...options });
  const text = await response.text();
  if (!response.ok) throw new Error(`${url} returned ${response.status}: ${text.slice(0, 240)}`);
  return { response, text };
}

async function fetchJson(url, options = {}) {
  const { response, text } = await fetchText(url, options);
  return { response, json: JSON.parse(text) };
}

function cookieFrom(response) {
  const setCookie = response.headers.get("set-cookie");
  return setCookie ? setCookie.split(";")[0] : "";
}

function statusLine(ok, label, detail) {
  return `${ok ? "PASS" : "WARN"} ${label}${detail ? `: ${detail}` : ""}`;
}

function safeGitHead() {
  try {
    return execFileSync("git", ["rev-parse", "HEAD"], { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

function safeGitRemoteHead() {
  try {
    const output = execFileSync("git", ["ls-remote", "origin", "main"], { cwd: ROOT, encoding: "utf8" }).trim();
    return output.split(/\s+/)[0] || "unknown";
  } catch {
    return "unknown";
  }
}

(async () => {
  const failures = [];
  const warnings = [];
  const app = read("public/app.js");
  const sw = read("public/sw.js");
  const localBuild = matchOrFail("local app build", app, /AGRINEXUS_BUILD_VERSION = "([^"]+)"/);
  const localCache = matchOrFail("local PWA cache", app, /AGRINEXUS_PWA_CACHE_VERSION = "([^"]+)"/);
  const swBuild = matchOrFail("service worker build", sw, /BUILD_VERSION = "([^"]+)"/);
  const swCache = matchOrFail("service worker cache", sw, /CACHE_NAME = "([^"]+)"/);

  if (swBuild !== localBuild) failures.push(`Service worker build ${swBuild} does not match app build ${localBuild}.`);
  if (swCache !== localCache) failures.push(`Service worker cache ${swCache} does not match app cache ${localCache}.`);

  const localHead = safeGitHead();
  const remoteHead = safeGitRemoteHead();
  if (localHead !== "unknown" && remoteHead !== "unknown" && localHead !== remoteHead) {
    warnings.push(`GitHub origin/main is ${remoteHead.slice(0, 12)} but local HEAD is ${localHead.slice(0, 12)}. Push or deploy the intended commit before testing live.`);
  }

  const { json: health } = await fetchJson(`${liveBase}/api/healthz`);
  if (health.webBuild !== localBuild) failures.push(`Render healthz webBuild=${health.webBuild || "missing"} expected ${localBuild}.`);
  if (health.pwaCache !== localCache) failures.push(`Render healthz pwaCache=${health.pwaCache || "missing"} expected ${localCache}.`);

  const { json: providerHealth } = await fetchJson(`${providerBase}/healthz`);
  if (!providerHealth.ok) failures.push("Provider-engine bridge healthz did not return ok=true.");

  const login = await fetchJson(`${liveBase}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: loginEmail, password: loginPassword })
  });
  const cookie = cookieFrom(login.response);
  if (!cookie) failures.push("Live login did not return a session cookie.");

  const authedHeaders = { "content-type": "application/json", cookie };
  const { json: voiceState } = await fetchJson(`${liveBase}/api/voice/speak`, {
    method: "POST",
    headers: authedHeaders,
    body: JSON.stringify({ text: "Nexus voice health check.", language: "en", forceOpenAi: true, voice: "coral" })
  });
  const voice = voiceState.voiceResult || {};
  if (voice.error) failures.push(`OpenAI voice returned error: ${voice.error}`);
  if (!voice.audioDataUrl) failures.push(`OpenAI voice returned no audioDataUrl. Provider=${voice.provider || "unknown"}`);

  const { json: readiness } = await fetchJson(`${liveBase}/api/readiness`, { headers: authedHeaders });
  const readinessModel = readiness.productionReadiness || readiness.readiness || readiness;
  const readinessChecks = Array.isArray(readinessModel.checks) ? readinessModel.checks : [];
  const readinessGaps = readinessChecks.filter(check => !check.ready);
  const healthChecks = health.checks || {};
  const healthDatabase = healthChecks.database || health.database || "unknown";
  const healthAi = healthChecks.ai || health.ai || "unknown";
  const readyCount = Number.isFinite(Number(readinessModel.readyCount))
    ? Number(readinessModel.readyCount)
    : Number(healthChecks.readyCount || 0);
  const readinessTotal = Number.isFinite(Number(readinessModel.total))
    ? Number(readinessModel.total)
    : Number(healthChecks.total || 0);

  const { json: communications } = await fetchJson(`${liveBase}/api/communications/execution-readiness`, { headers: authedHeaders });
  const commChannels = communications.channels || [];
  const commProviderReady = commChannels.filter(channel => channel.providerReady).length;
  const commExecutable = commChannels.filter(channel => channel.canExecuteNow).length;
  if (commProviderReady < commChannels.length) warnings.push("One or more communication providers still need credentials.");
  if (commProviderReady === commChannels.length && commExecutable < commChannels.length) {
    warnings.push("Communication providers are ready, but one or more channels need a recipient number before live execution.");
  }

  console.log("AgriNexus live infrastructure check");
  console.log(`- live platform: ${liveBase}`);
  console.log(`- provider engines: ${providerBase}`);
  console.log(`- local build/cache: ${localBuild} / ${localCache}`);
  console.log(`- live build/cache: ${health.webBuild || "unknown"} / ${health.pwaCache || "unknown"}`);
  console.log(`- git local/origin: ${localHead.slice(0, 12)} / ${remoteHead.slice(0, 12)}`);
  console.log(statusLine(healthDatabase === "connected", "database", healthDatabase));
  console.log(statusLine(Boolean(healthAi && healthAi !== "unknown"), "AI provider", healthAi));
  console.log(statusLine(Boolean(providerHealth.ok), "provider engines", `${providerHealth.release || "unknown"} with ${providerHealth.endpoints || 0} endpoints`));
  console.log(statusLine(Boolean(voice.audioDataUrl && !voice.error), "OpenAI voice audio", `${voice.voice || "unknown"} / ${voice.model || "unknown"}`));
  console.log(statusLine(readyCount === readinessTotal, "production readiness", `${readyCount}/${readinessTotal}`));
  console.log(statusLine(commProviderReady === commChannels.length, "communication providers", `${commProviderReady}/${commChannels.length} provider cores ready; ${commExecutable}/${commChannels.length} executable with current recipients`));

  if (readinessGaps.length) {
    console.log("Remaining live-service gaps:");
    readinessGaps.slice(0, 12).forEach(check => {
      console.log(`- ${check.module || "Platform"} / ${check.label}: ${check.detail}`);
    });
  }
  if (warnings.length) {
    console.log("Warnings:");
    warnings.forEach(item => console.log(`- ${item}`));
  }
  if (failures.length) {
    console.error("Failures:");
    failures.forEach(item => console.error(`- ${item}`));
    process.exit(1);
  }
  console.log("Live infrastructure check passed.");
})().catch(error => {
  console.error(`Live infrastructure check failed: ${error.message}`);
  process.exit(1);
});
