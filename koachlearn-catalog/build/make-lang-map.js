// Builds lang-map.json: for every course we uploaded, its language and the shared course slug that links its translations.
// Reads the upload bundles (output/koachlearn/.upload/queue.txt). Run once after new courses or languages are packed:
//   node koachlearn-catalog/build/make-lang-map.js
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "..", "..");
const U = path.join(ROOT, "output", "koachlearn", ".upload");
const LANGS = ["en", "es", "fr", "ar", "sw", "ha", "am", "yo", "ig", "pt"];
const suffix = new RegExp(`-(${LANGS.join("|")})$`);
const norm = s => s.normalize("NFC").replace(/\s+/g, " ").trim();

const queue = fs.readFileSync(path.join(U, "queue.txt"), "utf8").split(/\r?\n/).filter(Boolean);
const map = {};
let n = 0, clash = 0;
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
fs.writeFileSync(path.join(__dirname, "lang-map.json"), JSON.stringify(map));
console.log(`courses ${n}, map entries ${Object.keys(map).length}, same name in two languages ${clash}`);
