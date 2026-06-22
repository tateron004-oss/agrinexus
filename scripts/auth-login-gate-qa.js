const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");

const appBuildMatch = app.match(/AGRINEXUS_BUILD_VERSION = "([^"]+)"/);
const appCacheMatch = app.match(/AGRINEXUS_PWA_CACHE_VERSION = "([^"]+)"/);
assert(appBuildMatch, "App build marker missing");
assert(appCacheMatch, "App cache marker missing");
const currentBuild = appBuildMatch[1];
const currentCache = appCacheMatch[1];

const checks = [
  ["build bumped", server.includes(`AGRINEXUS_WEB_BUILD_VERSION = "${currentBuild}"`) && html.includes(`app.js?v=${currentBuild}`) && sw.includes(`BUILD_VERSION = "${currentBuild}"`) && sw.includes(currentCache)],
  ["password input is not prefilled", !html.includes('id="password" value=') && html.includes('placeholder="Type password"')],
  ["profile buttons do not store password dataset", app.includes('data-login-email="${profile.email}"') && !app.includes("data-login-password")],
  ["profile selection clears password", app.includes('$("#password").value = "";') && app.includes("Type the password to enter")],
  ["frontend requires email and password", app.includes("Email and password are required.") && app.includes("!password.trim()")],
  ["boot shows login first", app.includes('$("#loginView").classList.remove("hidden");') && app.includes('$("#password")?.focus();') && !app.includes('data = await request("/api/state");\n    render();\n  } catch')],
  ["server rejects blank credentials", server.includes('if (!email || !password.trim()) return send(res, 400, { error: "Email and password are required" });')],
  ["server trims email before login", server.includes('String(body.email || "").trim().toLowerCase()') && server.includes('String(item.email || "").toLowerCase() === email')]
];

const missing = checks.filter(([, ok]) => !ok).map(([name]) => name);
assert.deepStrictEqual(missing, [], `Missing auth login gate pieces: ${missing.join(", ")}`);

console.log("Auth login gate QA passed");
for (const [name] of checks) console.log(`- ${name}`);
