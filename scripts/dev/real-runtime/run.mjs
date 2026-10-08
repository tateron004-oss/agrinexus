// One command: boots the in-memory PostgreSQL + the real server + the stand-in model (harness.mjs), runs the journeys with stored-state checks (verify.mjs), the safety phrases on three routes
// (safety.mjs), the production user audit (audit.mjs) and the acceptance probes and black-box identity check (probes.mjs), prints a summary and stops everything.
//
//   cd scripts/dev/real-runtime && npm install && node run.mjs
//
// Needs no OpenAI key, no Chromium, no PostgreSQL install and, for the scripted journeys, no internet. Output folder: RR_OUT (default: a folder in the system temp directory).
import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { HERE, OUT, ROOT, sleep } from "./common.mjs";

const commit = process.env.RR_COMMIT || spawnSync("git", ["rev-parse", "HEAD"], { cwd: ROOT, encoding: "utf8" }).stdout.trim();
fs.mkdirSync(OUT, { recursive: true });
const harness = spawn(process.execPath, [path.join(HERE, "harness.mjs")], { cwd: HERE, env: { ...process.env, RR_COMMIT: commit }, stdio: ["ignore", "inherit", "inherit"], windowsHide: true });
let exiting = false;
const stop = () => { if (exiting) return; exiting = true; try { harness.kill(); } catch { /* gone */ } };
process.on("SIGINT", () => { stop(); process.exit(130); });

async function up() {
  for (let attempt = 0; attempt < 240; attempt += 1) {
    await sleep(500);
    try {
      const ports = JSON.parse(fs.readFileSync(path.join(OUT, "ports.json"), "utf8"));
      if ((await fetch(`http://127.0.0.1:${ports.app}/api/healthz`)).ok) return;
    } catch { /* not yet */ }
  }
  throw new Error("the server did not come up; see app.log in the output folder");
}
const step = (title, script, args = []) => {
  console.log(`\n=== ${title}`);
  const result = spawnSync(process.execPath, [path.join(HERE, script), ...args], { cwd: HERE, env: { ...process.env, RR_OUT: OUT }, stdio: "inherit" });
  return { title, ok: result.status === 0 };
};

let results = [];
try {
  await up();
  results = [
    step("journeys with stored-state checks", "verify.mjs"),
    step("safety phrases on three routes", "safety.mjs"),
    step("production user audit (layers A, B, C)", "audit.mjs"),
    step("acceptance probes and black-box identity", "probes.mjs", [commit]),
    // the phrase sweep (every phrase of the capabilities list's "What you can say", three routes) takes about half an hour: only with RR_PHRASES=1
    ...(process.env.RR_PHRASES === "1" ? [step("phrase sweep (section 14 of the capabilities list)", "phrases.mjs")] : [])
  ];
  const log = fs.existsSync(path.join(OUT, "app.log")) ? fs.readFileSync(path.join(OUT, "app.log"), "utf8") : "";
  const sqlErrors = [...new Set(log.split("\n").filter(line => line.startsWith("[pgerr]") && !line.includes("nexus_acceptance_fault")))];
  console.log(`\n=== database errors the code swallowed: ${sqlErrors.length}`);
  for (const line of sqlErrors.slice(0, 20)) console.log(`  ${line}`);
  console.log("\n=== summary");
  for (const result of results) console.log(`  ${result.ok ? "PASS" : "FAIL"}  ${result.title}`);
  console.log("  (the audit's WARN lines and the object-storage and fault-isolation probes are expected here: see docs/REAL_RUNTIME_VERIFICATION.md)");
  process.exitCode = results.every(result => result.ok) && !sqlErrors.length ? 0 : 1;
} catch (error) {
  console.error(String(error.stack || error));
  process.exitCode = 1;
} finally {
  stop();
}
