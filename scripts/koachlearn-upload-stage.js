"use strict";

// Stages Koach Learn uploads: every course goes into each category catalog.js lists it under, in English, Spanish, French and Arabic (each language is its own
// course on the site). For each job it writes the upload plan and copies the course's files under unique names (<course id>__<file>) into
// output/koachlearn/.upload/files/, then packs jobs into batches small enough for one browser file upload (under 10 MB).
//   node scripts/koachlearn-upload-stage.js [--lang en] [--category "Re-Entry"]   -> output/koachlearn/.upload/batches.json
// Jobs already listed in output/koachlearn/.upload/done.json are left out.

const fs = require("fs");
const path = require("path");
const { allCourses } = require("./koachlearn-courses/catalog.js");
const { plan } = require("./koachlearn-upload-plan.js");

const OUT = path.resolve(__dirname, "..", "output", "koachlearn");
const UP = path.join(OUT, ".upload");
const FILES = path.join(UP, "files");
// dashboard category ids (read from www.dashboard.koachlearn.com/dashboard/admin/categories, 29 October 2026)
const CATEGORY_IDS = { "Artificial Intelligence": 5, "Seniors and Technology": 9, "Athletes": 10, "Leadership Development": 11, "Non Profits": 12, "Entrepreneurs": 13, "Re-Entry": 14, "Workforce Development": 15, "Youth": 16, "Veterans (military)": 17, "Undeserved Community": 23, "Small Business": 43, "Agriculture (Africa)": 46 };
const LIMIT = (Number((process.argv.find(a => a.startsWith("--mb=")) || "--mb=5").slice(5))) * 1024 * 1024;
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function courseDir(c, lang) {
  // a course's build folder is under its own (first) category, whichever categories it is placed in
  const own = require(path.join(__dirname, "koachlearn-courses", c.folder, `${c.id}.js`)).category;
  const id = lang === "en" ? c.id : `${c.id}-${lang}`;
  return path.join(OUT, slug(own), id);
}

function stage(dir) {
  const p = plan(dir);
  const pre = `${p.id}__`;
  fs.mkdirSync(FILES, { recursive: true });
  const src = { [p.picture]: path.join(dir, p.picture), [p.introVideo]: path.join(dir, p.introVideo) };
  for (const ch of p.chapters) if (ch.video) src[ch.video.file] = path.join(dir, ...(fs.existsSync(path.join(dir, "chapter-1", ch.video.file)) ? ["chapter-1", ch.video.file] : ["chapter-2", ch.video.file]));
  let bytes = 0;
  for (const [name, from] of Object.entries(src)) { const to = path.join(FILES, pre + name); if (!fs.existsSync(to)) fs.copyFileSync(from, to); bytes += fs.statSync(to).size; }
  p.picture = pre + p.picture; p.introVideo = pre + p.introVideo;
  for (const ch of p.chapters) if (ch.video) ch.video.file = pre + ch.video.file;
  p.files = p.files.map(f => pre + f);
  const planFile = path.join(FILES, `${pre}plan.json`);
  fs.writeFileSync(planFile, JSON.stringify(p));
  return { id: p.id, name: p.name, plan: planFile, files: p.files.map(f => path.join(FILES, f)), bytes: bytes + fs.statSync(planFile).size };
}

if (require.main === module) {
  const arg = k => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };
  const langs = arg("--lang") ? [arg("--lang")] : ["en", "es", "fr", "ar", "sw", "ha", "am", "yo", "ig", "pt"];
  const only = arg("--category");
  const doneFile = path.join(UP, "done.json");
  const done = new Set(fs.existsSync(doneFile) ? JSON.parse(fs.readFileSync(doneFile, "utf8")) : []);
  // --skip-staged also leaves out every job already packed into a bundle by an earlier run (any .upload/*/batches.json),
  // so a run for newly written courses never repeats what the queue already holds
  // (this run's own folder is left out: it is rebuilt from scratch below)
  if (process.argv.includes("--skip-staged")) for (const d of fs.readdirSync(UP)) {
    if (d === `${langs.join("+")}-${only ? slug(only) : "all"}`) continue;
    const bf = path.join(UP, d, "batches.json");
    if (fs.existsSync(bf)) for (const b of JSON.parse(fs.readFileSync(bf, "utf8"))) for (const k of b.keys) done.add(k);
  }
  const jobs = [];
  for (const lang of langs) for (const cat of Object.keys(CATEGORY_IDS)) {
    if (only && cat !== only) continue;
    for (const c of allCourses().filter(x => x.categories.includes(cat))) {
      const dir = courseDir(c, lang);
      if (!fs.existsSync(path.join(dir, "course.json"))) { console.error(`not built: ${dir}`); continue; }
      const s = stage(dir);
      const key = `${s.id}@${CATEGORY_IDS[cat]}`;
      if (done.has(key)) continue;
      jobs.push({ key, ...s, category: cat, cat: CATEGORY_IDS[cat] });
    }
  }
  const batches = [];
  for (const j of jobs) {
    const last = batches[batches.length - 1];
    if (last && last.bytes + j.bytes < LIMIT) { last.jobs.push(j); last.bytes += j.bytes; } else batches.push({ bytes: j.bytes, jobs: [j] });
  }
  // each batch becomes one bundle file, so one browser upload carries it: [4-byte header length][header JSON][file bytes...]
  // the header holds the uploader script, the queue and where each file sits; the page turns the bytes back into files
  const uploader = fs.readFileSync(path.join(__dirname, "koachlearn-uploader.js"), "utf8");
  // each staging run gets its own folder (for example .upload/en-youth), so batches already handed to the browser are never renumbered
  const BDIR = path.join(UP, `${langs.join("+")}-${only ? slug(only) : "all"}`);
  fs.rmSync(BDIR, { recursive: true, force: true });
  fs.mkdirSync(BDIR, { recursive: true });
  batches.forEach((b, i) => {
    const parts = [], files = [];
    let offset = 0;
    for (const j of b.jobs) for (const f of [j.plan, ...j.files]) {
      const buf = fs.readFileSync(f);
      files.push({ name: path.basename(f), type: f.endsWith(".mp4") ? "video/mp4" : f.endsWith(".png") ? "image/png" : "application/json", offset, size: buf.length });
      parts.push(buf); offset += buf.length;
    }
    const header = Buffer.from(JSON.stringify({ uploader, items: b.jobs.map(j => ({ key: j.key, plan: path.basename(j.plan), cat: j.cat })), files }));
    const len = Buffer.alloc(4); len.writeUInt32LE(header.length);
    b.bundle = path.join(BDIR, `${path.basename(BDIR)}-${String(i + 1).padStart(3, "0")}.bin`);
    fs.writeFileSync(b.bundle, Buffer.concat([len, header, ...parts]));
  });
  fs.writeFileSync(path.join(BDIR, "batches.json"), JSON.stringify(batches.map(b => ({ bundle: b.bundle, bytes: fs.statSync(b.bundle).size, keys: b.jobs.map(j => j.key) })), null, 1));
  console.log(`${jobs.length} jobs to upload (${done.size} already done) in ${batches.length} batches -> ${path.join(BDIR, "batches.json")}`);
}
