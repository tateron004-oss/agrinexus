// Language-first Koach Learn catalogue. Reads data/<lang>.json (built from Koach Learn's public course list).
(() => {
  const SIGNIN = "https://www.dashboard.koachlearn.com";
  // Kyro, the voice assistant, can teach a course alongside it, lesson by lesson, from the course itself (its study pack: packs/<lang>/<course>.json)
  const KYRO = "https://nexus-genesis-certified.onrender.com/";
  const PAGE = 24;
  const LANGS = window.KL_LANGS, TEXT = window.KL_TEXT, CATS = window.KL_CATS;
  const byCode = Object.fromEntries(LANGS.map(l => [l.code, l]));
  const $ = id => document.getElementById(id);
  const store = { get: k => { try { return localStorage.getItem(k); } catch (_) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (_) {} } };

  // search folding: lower case, no accents or tone marks, Arabic letter variants joined, so every script searches the same way
  const fold = s => String(s || "").normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase()
    .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/ؤ/g, "و").replace(/ئ/g, "ي").replace(/ـ/g, "")
    .replace(/ƙ/g, "k").replace(/ɗ/g, "d").replace(/ɓ/g, "b").replace(/ƴ/g, "y")
    .replace(/[’'`´]/g, "'").replace(/\s+/g, " ").trim();

  const state = { lang: null, cat: 0, q: "", shown: PAGE, focus: null };
  const cache = {};
  let meta = null;

  const t = (k, n) => ((TEXT[state.lang] || TEXT.en)[k] || TEXT.en[k]).replace("{n}", n == null ? "" : Number(n).toLocaleString(state.lang));
  const catName = id => (CATS[id] && (CATS[id][state.lang] || CATS[id].en)) || (meta && (meta.categories.find(c => c.id === id) || {}).name) || "";
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function readHash() {
    const p = new URLSearchParams(location.hash.slice(1));
    const lang = p.get("lang");
    if (lang && byCode[lang]) state.lang = lang;
    state.cat = Number(p.get("cat")) || 0;
    state.q = p.get("q") || "";
    state.focus = Number(p.get("c")) || null;
  }
  function writeHash() {
    const p = new URLSearchParams();
    if (state.lang) p.set("lang", state.lang);
    if (state.cat) p.set("cat", state.cat);
    if (state.q) p.set("q", state.q);
    if (state.focus) p.set("c", state.focus);
    const h = "#" + p.toString();
    if (location.hash !== h) history.replaceState(null, "", h);
  }

  async function load(lang) {
    if (!cache[lang]) {
      const r = await fetch(`data/${lang}.json`, { cache: "no-cache" });
      const list = r.ok ? await r.json() : [];
      for (const c of list) c.f = fold(`${c.n} ${c.s} ${c.d} ${catName.call(null, c.c)}`);
      cache[lang] = list;
    }
    return cache[lang];
  }

  function applyLang() {
    const L = byCode[state.lang];
    document.documentElement.lang = state.lang;
    document.documentElement.dir = L.rtl ? "rtl" : "ltr";
    document.title = t("title");
    $("title").textContent = t("title");
    $("langLabel").textContent = t("change");
    $("q").placeholder = t("search");
    $("q").setAttribute("aria-label", t("search"));
    $("clear").setAttribute("aria-label", t("clear"));
    $("more").textContent = t("more");
    $("signin").textContent = t("signin");
    $("lang").value = state.lang;
  }

  function fillLangSelect() {
    const sel = $("lang");
    sel.innerHTML = LANGS.map(l => {
      const n = meta ? meta.counts[l.code] || 0 : 1;
      return `<option value="${l.code}">${esc(l.name)}${n ? "" : " · " + esc((TEXT[l.code] || TEXT.en).soon)}</option>`;
    }).join("");
  }

  function showChooser() {
    $("main").hidden = true;
    $("chooser").hidden = false;
    const pref = (navigator.language || "en").slice(0, 2);
    $("chooseTitle").textContent = (TEXT[byCode[pref] ? pref : "en"]).choose;
    $("chooserGrid").innerHTML = LANGS.map(l => {
      const n = meta ? meta.counts[l.code] || 0 : 0;
      const tx = TEXT[l.code];
      return `<button type="button" data-lang="${l.code}" lang="${l.code}" dir="${l.rtl ? "rtl" : "ltr"}">${esc(l.name)}<small>${n ? esc(tx.count.replace("{n}", n.toLocaleString(l.code))) : esc(tx.soon)}</small></button>`;
    }).join("");
  }

  async function choose(lang, keepFocus) {
    state.lang = lang;
    store.set("kl-cat-lang", lang);
    if (!keepFocus) { state.focus = null; state.cat = 0; state.q = ""; }
    state.shown = PAGE;
    $("chooser").hidden = true;
    $("main").hidden = false;
    applyLang();
    $("q").value = state.q;
    await render();
  }

  async function render() {
    const list = await load(state.lang);
    writeHash();
    $("clear").hidden = !state.q;
    const soon = !list.length;
    $("soon").hidden = !soon;
    $("soon").textContent = soon ? t("soon") : "";
    $("topics").hidden = soon;
    $("q").parentElement.hidden = soon;

    // topics with how many courses each has in this language (and matching the search)
    const words = fold(state.q).split(" ").filter(Boolean);
    const match = c => words.every(w => c.f.includes(w));
    const hits = list.filter(match);
    const per = {};
    for (const c of hits) per[c.c] = (per[c.c] || 0) + 1;
    const cats = (meta ? meta.categories.map(c => c.id) : Object.keys(CATS).map(Number)).filter(id => per[id] || id === state.cat);
    cats.sort((a, b) => catName(a).localeCompare(catName(b), state.lang));
    $("topics").innerHTML = `<button type="button" data-cat="0" aria-pressed="${!state.cat}">${esc(t("all"))}<span>${hits.length.toLocaleString(state.lang)}</span></button>` +
      cats.map(id => `<button type="button" data-cat="${id}" aria-pressed="${state.cat === id}">${esc(catName(id))}<span>${(per[id] || 0).toLocaleString(state.lang)}</span></button>`).join("");

    let rows = state.cat ? hits.filter(c => c.c === state.cat) : hits;
    // under "All topics" a course that sits in several topics is shown once, with all its topics
    if (!state.cat) {
      const seen = new Map();
      rows = rows.filter(c => {
        const k = c.g ? c.g : `${c.n}`;
        const first = seen.get(k);
        if (first) { if (!first.cats.includes(c.c)) first.cats.push(c.c); if (c.i === state.focus) first.alias = c.i; return false; }
        c.cats = [c.c]; c.alias = null; seen.set(k, c); return true;
      });
      if (state.focus) { const f = rows.find(c => c.alias === state.focus); if (f) state.focus = f.i; }
    }
    if (state.focus) {
      const i = rows.findIndex(c => c.i === state.focus);
      if (i > 0) rows = [rows[i]].concat(rows.slice(0, i), rows.slice(i + 1));
      else if (i < 0) { const f = list.find(c => c.i === state.focus); if (f) rows = [f].concat(rows); }
    }
    $("count").textContent = soon ? "" : rows.length ? t("count", rows.length) : t("none");
    const allBtn = $("topics").querySelector('[data-cat="0"] span');
    if (allBtn && !state.cat) allBtn.textContent = rows.length.toLocaleString(state.lang);
    const show = rows.slice(0, state.shown);
    $("grid").innerHTML = show.map(card).join("");
    $("more").hidden = rows.length <= state.shown;
    if (state.focus) { const el = document.querySelector(`[data-id="${state.focus}"]`); if (el) el.scrollIntoView({ block: "center" }); }
  }

  function card(c) {
    const also = c.o ? LANGS.filter(l => c.o[l.code]).map(l => `<a href="#lang=${l.code}&c=${c.o[l.code]}" data-go="${l.code}" data-id="${c.o[l.code]}" lang="${l.code}">${esc(l.name)}</a>`).join("") : "";
    return `<article class="card${state.focus === c.i ? " hl" : ""}" data-id="${c.i}">
      <div class="cat">${esc((!state.cat && c.cats ? c.cats : [c.c]).map(catName).join(" · "))}</div>
      <h2>${esc(c.n)}</h2>
      ${c.s ? `<p class="learn"><b>${esc(t("learn"))}:</b> ${esc(c.s)}</p>` : ""}
      ${c.d ? `<p class="desc">${esc(c.d)}</p>` : ""}
      ${also ? `<div class="also"><span>${esc(t("alsoIn"))}:</span>${also}</div>` : ""}
      <div class="actions"><a class="go" href="${SIGNIN}" target="_blank" rel="noopener">${esc(t("start"))}</a>${c.g ? `<a class="kyro" href="${KYRO}?study=${state.lang}:${encodeURIComponent(c.g)}" target="_blank" rel="noopener">${esc(t("study"))}</a>` : ""}</div>
    </article>`;
  }

  // events
  $("chooserGrid").addEventListener("click", e => { const b = e.target.closest("button[data-lang]"); if (b) choose(b.dataset.lang); });
  $("lang").addEventListener("change", e => choose(e.target.value));
  $("home").addEventListener("click", e => { e.preventDefault(); showChooser(); });
  let timer;
  $("q").addEventListener("input", e => { clearTimeout(timer); timer = setTimeout(() => { state.q = e.target.value; state.shown = PAGE; state.focus = null; render(); }, 150); });
  $("clear").addEventListener("click", () => { state.q = ""; $("q").value = ""; state.focus = null; render(); $("q").focus(); });
  $("topics").addEventListener("click", e => { const b = e.target.closest("button[data-cat]"); if (!b) return; state.cat = Number(b.dataset.cat); state.shown = PAGE; state.focus = null; render(); });
  $("more").addEventListener("click", () => { state.shown += PAGE; render(); });
  $("grid").addEventListener("click", e => {
    const a = e.target.closest("a[data-go]");
    if (!a) return;
    e.preventDefault();
    state.focus = Number(a.dataset.id); state.cat = 0; state.q = "";
    choose(a.dataset.go, true);
    window.scrollTo(0, 0);
  });

  // a pasted or shared link (#lang=..&cat=..&q=..&c=..) opens that view
  window.addEventListener("hashchange", () => {
    const before = state.lang;
    readHash();
    if (state.lang && state.lang !== before) choose(state.lang, true);
    else if (state.lang) { $("q").value = state.q; render(); }
  });

  (async () => {
    try { meta = await (await fetch("data/meta.json", { cache: "no-cache" })).json(); } catch (_) { meta = null; }
    fillLangSelect();
    readHash();
    if (!state.lang) { const saved = store.get("kl-cat-lang"); if (saved && byCode[saved]) state.lang = saved; }
    if (state.lang) choose(state.lang, true); else showChooser();
  })();
})();
