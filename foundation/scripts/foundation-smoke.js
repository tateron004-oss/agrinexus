const { spawnSync } = require("child_process");
const path = require("path");
const { loadEnvFile } = require("../src/runtime/env-file");

loadEnvFile();

const scripts = [
  "check.js",
  "seed-coverage-smoke.js",
  "auth-routes-smoke.js",
  "auth-admin-routes-smoke.js",
  "core-routes-smoke.js",
  "learning-routes-smoke.js",
  "workforce-routes-smoke.js",
  "workforce-provider-config-smoke.js",
  "health-routes-smoke.js",
  "health-provider-config-smoke.js",
  "health-policy-smoke.js",
  "health-fhir-smoke.js",
  "trade-routes-smoke.js",
  "ai-routes-smoke.js",
  "maps-routes-smoke.js",
  "system-routes-smoke.js",
  "admin-routes-smoke.js"
];

for (const script of scripts) {
  const result = spawnSync(process.execPath, [path.join(__dirname, script)], {
    stdio: "inherit"
  });
  if (result.status !== 0) process.exit(result.status || 1);
}

console.log("Foundation smoke suite passed");
