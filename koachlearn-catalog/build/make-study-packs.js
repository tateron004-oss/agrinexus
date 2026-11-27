// Study packs for Kyro's course tutor: one small text file per course per language, read by Kyro so it can teach a learner from the course itself.
// Each pack has the course's chapters, every lesson's goal and text, and the lesson's quick-check questions with the right answer and why. It never has the videos, the
// pretest or the FINAL quiz (that quiz leads to the certificate, and these files are public).
//   node build/make-study-packs.js D:/KoachLearn-archive/output-koachlearn
// Writes site/packs/<lang>/<slug>.json, where <slug> is the course's "g" in site/data/<lang>.json (the same course across languages), and site/packs/index.json.
const fs = require("fs"), path = require("path");
const ROOT = process.argv[2];
if (!ROOT || !fs.existsSync(ROOT)) { console.error("usage: node build/make-study-packs.js <output-koachlearn folder>"); process.exit(1); }
const LANGS = ["en", "es", "fr", "ar", "sw", "ha", "am", "yo", "ig", "pt"];
const OUT = path.join(__dirname, "..", "site", "packs");
const norm = s => String(s || "").normalize("NFC").replace(/\s+/g, " ").trim();
const plain = html => (String(html || "")
  .replace(/<\/(p|li|h\d|div)>/gi, "\n").replace(/<br\s*\/?>/gi, "\n").replace(/<li[^>]*>/gi, "- ")
  .replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .split("\n").map(line => line.replace(/\s+/g, " ").trim()).filter(Boolean).join("\n")).normalize("NFC").trim();
const readJson = file => { try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch { return null; } };
const checkOf = (dir, lesson) => {
  // (the quick check is in course.json itself; an older course may name a file instead)
  const qc = lesson.quickCheck;
  const data = qc && typeof qc === "object" ? qc : typeof qc === "string" && fs.existsSync(path.join(dir, qc)) ? readJson(path.join(dir, qc)) : null;
  const questions = (data && Array.isArray(data.questions) ? data.questions : []).filter(q => q && q.q && Array.isArray(q.options))
    .map(q => ({ q: norm(q.q), options: q.options.map(norm), answer: Number(q.answer), why: norm(q.why) }));
  return questions;
};

const index = {}; let packs = 0, bytes = 0, skipped = 0;
fs.rmSync(OUT, { recursive: true, force: true });
for (const category of fs.readdirSync(ROOT, { withFileTypes: true })) {
  if (!category.isDirectory() || category.name.startsWith(".") || category.name === "plans") continue;
  const catDir = path.join(ROOT, category.name);
  for (const entry of fs.readdirSync(catDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const dir = path.join(catDir, entry.name);
    const course = readJson(path.join(dir, "course.json"));
    if (!course || !Array.isArray(course.chapters)) { skipped++; continue; }
    const lang = LANGS.includes(course.lang) ? course.lang : null;
    const slug = norm(course.translationOf || course.id);
    if (!lang || !slug) { skipped++; continue; }
    if (index[slug] && index[slug].includes(lang)) continue; // (the same course filed under two categories: one pack)
    const pack = {
      slug, lang, name: norm(course.name), category: norm(course.category),
      objectives: Array.isArray(course.objectives) ? course.objectives.map(o => norm(typeof o === "string" ? o : o ? [o.condition, o.action, o.standard].filter(Boolean).join(", ") : "")).filter(Boolean) : [],
      chapters: course.chapters.map(chapter => ({
        name: norm(chapter.name),
        lessons: (chapter.lessons || []).map(lesson => ({ title: norm(lesson.title), text: plain(lesson.descriptionHtml), check: checkOf(dir, lesson) }))
      }))
    };
    const text = JSON.stringify(pack);
    fs.mkdirSync(path.join(OUT, lang), { recursive: true });
    fs.writeFileSync(path.join(OUT, lang, `${slug}.json`), text);
    (index[slug] = index[slug] || []).push(lang);
    packs++; bytes += Buffer.byteLength(text);
  }
}
fs.writeFileSync(path.join(OUT, "index.json"), JSON.stringify({ updated: new Date().toISOString(), courses: index }));
console.log(JSON.stringify({ packs, courses: Object.keys(index).length, megabytes: Math.round(bytes / 1e5) / 10, skipped }));
