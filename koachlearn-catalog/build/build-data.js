// Builds the catalogue's data files from Koach Learn's public course list (read-only, no sign-in).
// Writes site/data/<lang>.json (one small file per language, so a phone downloads only its own language) and site/data/meta.json.
//   node koachlearn-catalog/build/build-data.js            (fetches https://www.dashboard.koachlearn.com/api/categories)
//   node koachlearn-catalog/build/build-data.js file.json  (uses a saved copy instead)
const fs = require("fs"), path = require("path");
const API = "https://www.dashboard.koachlearn.com/api/categories";
const LANGS = ["en", "es", "fr", "ar", "sw", "ha", "am", "yo", "ig", "pt"];
const OUT = path.join(__dirname, "..", "site", "data");
const map = JSON.parse(fs.readFileSync(path.join(__dirname, "lang-map.json"), "utf8"));
const norm = s => String(s || "").normalize("NFC").replace(/\s+/g, " ").trim();
const plain = html => norm(String(html || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
const cut = (s, n) => (s.length <= n ? s : s.slice(0, n).replace(/\s+\S*$/, "") + "…");

// a course we did not upload (older hand-made ones): guess its language from its script
const guess = name => (/[؀-ۿ]/.test(name) ? "ar" : /[ሀ-፿]/.test(name) ? "am" : "en");

(async () => {
  const src = process.argv[2];
  const body = src ? JSON.parse(fs.readFileSync(src, "utf8")) : await (await fetch(API)).json();
  if (!body || !body.success || !Array.isArray(body.data)) throw new Error("unexpected answer from the course list");
  const cats = body.data.filter(c => !c.private);
  const byLang = Object.fromEntries(LANGS.map(l => [l, []]));
  const slugLangs = {};
  let guessed = 0;
  for (const c of cats) for (const co of c.Course || []) {
    if (co.private) continue;
    const hit = map[`#${co.id}`] || map[`${c.id}|${norm(co.name)}`];
    const lang = hit ? hit[0] : guess(co.name);
    if (!hit) guessed++;
    const slug = hit ? hit[1] : null;
    const rec = { i: co.id, n: norm(co.name), c: c.id, s: cut(plain(co.skills), 160), d: cut(plain(co.description), 280), t: co.createdAt ? co.createdAt.slice(0, 10) : "" };
    if (slug) { rec.g = slug; (slugLangs[slug] = slugLangs[slug] || {})[lang] = (slugLangs[slug][lang] || []).concat([[co.id, c.id]]); }
    byLang[lang].push(rec);
  }
  // translations: for each language version, the course id of the same course in the other languages (same category first)
  for (const l of LANGS) for (const r of byLang[l]) {
    if (!r.g) continue;
    const other = {};
    for (const [ol, ids] of Object.entries(slugLangs[r.g])) {
      if (ol === l) continue;
      const same = ids.find(x => x[1] === r.c) || ids[0];
      other[ol] = same[0];
    }
    if (Object.keys(other).length) r.o = other;
  }
  fs.mkdirSync(OUT, { recursive: true });
  const counts = {};
  for (const l of LANGS) {
    byLang[l].sort((a, b) => a.n.localeCompare(b.n, l));
    fs.writeFileSync(path.join(OUT, `${l}.json`), JSON.stringify(byLang[l]));
    counts[l] = byLang[l].length;
  }
  const meta = { updated: new Date().toISOString(), counts, categories: cats.map(c => ({ id: c.id, name: c.name })) };
  fs.writeFileSync(path.join(OUT, "meta.json"), JSON.stringify(meta));
  console.log("courses per language", counts, "guessed language", guessed);
})().catch(e => { console.error(e.message); process.exit(1); });
