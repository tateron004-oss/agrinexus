"use strict";
// Builds the videos of every written Koach Learn course that has none yet (no intro.mp4 in its output folder), a few at a time and at low CPU
// priority, so the browser uploads keep running smoothly on the same computer. Safe to stop and start again: built courses are skipped.
//   node scripts/koachlearn-build-missing.js [--jobs 3]   -> progress in output/koachlearn/.upload/build-log.txt
const fs = require("fs"), path = require("path"), os = require("os"), { spawn } = require("child_process");
const root = path.resolve(__dirname, ".."), C = path.join(__dirname, "koachlearn-courses"), OUT = path.join(root, "output", "koachlearn");
const LOG = path.join(OUT, ".upload", "build-log.txt");
const jobsAt = process.argv.indexOf("--jobs"); const JOBS = jobsAt > 0 ? Number(process.argv[jobsAt + 1]) : 3;
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const log = m => fs.appendFileSync(LOG, `${new Date().toLocaleString()} ${m}\n`);
const files = []; const walk = d => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (f.endsWith(".js")) files.push(p); } };
for (const d of fs.readdirSync(C)) { const p = path.join(C, d); if (fs.statSync(p).isDirectory()) walk(p); }
// English first, then the languages in the order they will be uploaded
const ORDER = ["en", "es", "fr", "ar", "sw", "ha", "am", "yo", "ig", "pt"];
const todo = [];
for (const f of files) {
  let c; try { c = require(f); } catch (_) { continue; }
  if (!c || !c.id || !c.category) continue;
  if (!fs.existsSync(path.join(OUT, slug(c.category), c.id, "intro.mp4"))) todo.push({ f, lang: c.lang || "en" });
}
todo.sort((a, b) => ORDER.indexOf(a.lang) - ORDER.indexOf(b.lang));
log(`start: ${todo.length} courses to build, ${JOBS} at a time`);
let next = 0, done = 0, failed = 0;
const one = () => new Promise(resolve => {
  if (next >= todo.length) return resolve(false);
  const { f } = todo[next++];
  const p = spawn(process.execPath, [path.join(__dirname, "koachlearn-export.js"), f], { cwd: root, stdio: ["ignore", "ignore", "pipe"] });
  try { os.setPriority(p.pid, os.constants.priority.PRIORITY_LOW); } catch (_) {}
  let err = ""; p.stderr.on("data", d => { err += d; });
  p.on("close", code => {
    if (code === 0) done++; else { failed++; log(`FAILED ${path.relative(root, f)}: ${err.trim().slice(0, 300)}`); }
    if ((done + failed) % 25 === 0) log(`${done} built, ${failed} failed, ${todo.length - next} waiting`);
    resolve(true);
  });
});
const worker = async () => { while (await one()) {} };
Promise.all(Array.from({ length: JOBS }, worker)).then(() => log(`finished: ${done} built, ${failed} failed`));
