// Builds lang-map.json: for every course we uploaded, its language and the shared course slug that links its translations.
// Two sources, either or both:
//   node koachlearn-catalog/build/make-lang-map.js --plans <folder>   the review plans (<slug>-<lang>__review-plan@<cat>.json): each holds the site's own course id,
//                                                                       so the entry is keyed "#<course id>" and survives a renamed course
//   node koachlearn-catalog/build/make-lang-map.js                    the upload bundles (output/koachlearn/.upload/queue.txt), keyed "<category id>|<course name>"
// Run it after new courses or languages are uploaded. build-data.js looks a course up by its id first, then by category and name.
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "..", "..");
const U = path.join(ROOT, "output", "koachlearn", ".upload");
const LANGS = ["en", "es", "fr", "ar", "sw", "ha", "am", "yo", "ig", "pt"];
const suffix = new RegExp(`-(${LANGS.join("|")})$`);
const norm = s => s.normalize("NFC").replace(/\s+/g, " ").trim();

const args = process.argv.slice(2);
const plansAt = args.indexOf("--plans");
const map = {};
let n = 0, clash = 0;

if (plansAt >= 0) {
  const dir = path.resolve(args[plansAt + 1] || "");
  // (an English course's plan has no language ending: "<slug>__review-plan@<cat>.json")
  const plan = new RegExp(`^(.+?)(?:-(${LANGS.join("|")}))?__review-plan@(\\d+)\\.json$`);
  for (const f of fs.readdirSync(dir)) {
    const m = f.match(plan);
    if (!m) continue;
    m[2] = m[2] || "en";
    const p = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    if (!p.courseId || p.lang !== m[2]) throw new Error(`${f}: no course id, or its language is not ${m[2]}`);
    const k = `#${p.courseId}`;
    if (map[k] && map[k][0] !== p.lang) clash++;
    map[k] = [p.lang, m[1]];
    n++;
  }
} else {
  const queue = fs.readFileSync(path.join(U, "queue.txt"), "utf8").split(/\r?\n/).filter(Boolean);
  for (const p of queue) {
    const parts = p.split(/[\\/]/);
    const folder = parts[parts.length - 2];
    const lang = folder.split("-")[0];
    const b = fs.readFileSync(path.join(U, folder, parts[parts.length - 1]));
    const hl = b.readUInt32LE(0), h = JSON.parse(b.slice(4, 4 + hl).toString());
    for (const it of h.items) {
      const pf = h.files.find(x => x.name === it.plan);
      const plan = JSON.parse(b.slice(4 + hl + pf.offset, 4 + hl + pf.offset + pf.size).toString());
      const slug = it.key.split("@")[0].replace(suffix, "");
      const k = `${it.cat}|${norm(plan.name)}`;
      if (map[k] && map[k][0] !== lang) clash++;
      map[k] = [lang, slug];
      n++;
    }
  }
}
fs.writeFileSync(path.join(__dirname, "lang-map.json"), JSON.stringify(map));
console.log(`courses ${n}, map entries ${Object.keys(map).length}, same course in two languages ${clash}`);
