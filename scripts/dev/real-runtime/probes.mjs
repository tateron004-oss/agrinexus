// Runs the production-acceptance probe endpoints one at a time, each with a timeout, and the black-box identity check, against a harness started with RR_COMMIT=<40-character commit>.
// (scripts/nexus-run-production-evidence-probes.js fires all of them at once with no timeout; through the harness's front door, port + 2000, it can be run as it is.)
//   node probes.mjs <commit>
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { OUT, ROOT, ports } from "./common.mjs";

const sha = process.argv[2];
if (!/^[0-9a-f]{40}$/.test(sha || "")) { console.error("usage: node probes.mjs <40-character commit the harness was started with (RR_COMMIT)>"); process.exit(2); }
const base = `http://127.0.0.1:${ports().app}`;
const headers = { authorization: "Bearer candidate-only-token", "content-type": "application/json" };
let failed = 0;
// These two cannot pass on a laptop: one needs a shared object store (S3), the other reaches the tool provider over the internet and breaks a real database connection on purpose.
const NOT_POSSIBLE_HERE = new Set(["object-storage", "fault-isolation"]);
for (const name of ["task-engine", "semantic-memory", "consent-audit", "offline-sync", "identity", "observability", "object-storage", "consolidated-brain", "realtime-voice", "documents-lifecycle", "healthcare-controls", "predictive-model", "fault-isolation"]) {
  const started = Date.now();
  try {
    const res = await fetch(`${base}/api/nexus/runtime/production-acceptance/probes/${name}`, { method: "POST", headers, body: JSON.stringify({ releaseSha: sha }), signal: AbortSignal.timeout(60000) });
    const body = await res.text();
    const expected = !res.ok && NOT_POSSIBLE_HERE.has(name);
    if (!res.ok && !expected) failed += 1;
    console.log(`${res.ok ? "PASS" : expected ? "N/A " : "FAIL"}  ${name.padEnd(20)} HTTP ${res.status} ${Date.now() - started}ms ${body.slice(0, 220)}`);
  } catch (error) { failed += 1; console.log(`FAIL  ${name.padEnd(20)} ${error.name} after ${Date.now() - started}ms`); }
}
// The identity part of the pre-production black box (page, service worker, app.js and the health/release/version/runtime endpoints all carry the exact commit). Playwright and a browser are not needed
// for it: the browser step that follows is replaced by a stub that says so, and only an error from that stub is expected.
const stub = path.join(path.dirname(fileURLToPath(import.meta.url)), "no-browser.cjs");
const box = spawnSync(process.execPath, ["--require", stub, path.join(ROOT, "scripts", "nexus-preproduction-black-box.js")], { cwd: OUT, encoding: "utf8", env: { ...process.env, NEXUS_CANDIDATE_URL: base, RENDER_GIT_COMMIT: sha } });
const identityPassed = /BROWSER-NOT-AVAILABLE-HERE/.test(`${box.stdout}${box.stderr}`) && !/AssertionError/.test(`${box.stdout}${box.stderr}`);
if (!identityPassed) failed += 1;
console.log(`${identityPassed ? "PASS" : "FAIL"}  black-box identity   ${identityPassed ? "every identity assertion passed; stopped at the browser step as expected" : `${box.stdout}${box.stderr}`.slice(0, 400)}`);
process.exitCode = failed ? 1 : 0;
