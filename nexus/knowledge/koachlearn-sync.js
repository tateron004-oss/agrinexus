"use strict";
// Kyro and Koach Learn, kept in step (owner, 27 Nov 2026: "Admin sign-in sync"). Koach Learn (koachlearn.com, built by SanshTech, no code and no data API) records one thing about a
// learner's progress: a CERTIFICATE when they pass a course's final quiz. Its admin pages list them (Id, Certificate Number, Student Id, Student Name, Student Email, Course Id,
// Course Name, Course Completion Date). There is no per-lesson progress, no quiz score and no enrolment list anywhere an admin can see (checked on the live site, 27 Nov 2026).
//
// So Kyro signs in to Koach Learn as an admin account made for it (KOACHLEARN_SYNC_EMAIL / KOACHLEARN_SYNC_PASSWORD, set by the owner in Render; never in the code or the logs),
// reads the certificate list at most once an hour, and keeps it in memory only. From each row it keeps the certificate number, the student id, the course id and name and
// the date -- never the student's name or email.
//
// A learner links their Koach Learn record to Kyro by saying (or typing) ONE of their certificate numbers: Kyro does not check that people own the email they sign up with,
// so matching by email would let anyone see someone else's record. The number is on the learner's own certificate. Kyro then keeps only the Koach Learn student id
// (record store, workspace koachlearn-link:<userId>) and shows that student's finished courses.
//
// The page is a Next.js app: the table rows are not in the HTML, they are in the React Server Components data the page carries (self.__next_f.push([1,"..."])),
// as ["$","tr",null,{children:[["$","td",null,{children:VALUE}], ...]}]. A date cell is a component with {date:"$D<ISO>"}. The first table drawn can be the loading
// placeholder (empty cells), so rows with no values are skipped.

const DEFAULT_BASE = "https://www.dashboard.koachlearn.com";
const CERTIFICATE_PAGE = "/dashboard/admin/certificate";
const TTL_MS = 60 * 60 * 1000;
const MAX_PAGES = 50;
const LINK = Object.freeze({ workspace: userId => `koachlearn-link:${userId}`, recordType: "koachlearn-link" });
// Certificate numbers that were once written in this public repository (27 Nov 2026; since replaced with made-up ones). Anyone could have read them, so they no longer prove
// who someone is and are never taken to link a record. Kept as SHA-256 hashes so the numbers are not published again. The learner can link with another of their certificates.
const PUBLISHED = new Set(["09260db742fad3e70cbaea7cc1c9d7a699f039ee2aa03c52df0ce231c7cdc02c","e03623a3f3210983dae0cd34bd99fa5d31822cf85ccf80783e6aefa009b3c78b","031f2c88243f2763348f5b75267f233fc3ae25b0f563d40667c26b732f21dca4"]);
const PUBLISHED_ROW = Object.freeze({ published: true });
function wasPublished(number) { return PUBLISHED.has(require("crypto").createHash("sha256").update(String(number)).digest("hex")); }

// ---- reading a page ----
function rscPayload(html) {
  let out = "";
  for (const match of String(html || "").matchAll(/self\.__next_f\.push\(\[1,"((?:[^"\\]|\\.)*)"\]\)/g)) {
    try { out += JSON.parse(`"${match[1]}"`); } catch { /* a piece that is not text */ }
  }
  return out;
}
function cellValue(node) {
  if (typeof node === "string") return node.startsWith("$D") ? node.slice(2) : node.startsWith("$") ? "" : node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) {
    if (node[0] === "$") {
      const props = node[3] || {};
      if (typeof props.date === "string") return props.date.startsWith("$D") ? props.date.slice(2) : props.date;
      return cellValue(props.children);
    }
    return node.map(cellValue).join("");
  }
  return "";
}
// -> { headers: [..], rows: [[..], ..], pageCount }
function readTable(html) {
  const payload = rscPayload(html);
  let headers = null; const rows = []; let pageCount = 1;
  for (const line of payload.split("\n")) {
    const at = line.indexOf(":");
    if (at < 1) continue;
    const body = line.slice(at + 1);
    if (body[0] !== "[" && body[0] !== "{") continue;
    let tree; try { tree = JSON.parse(body); } catch { continue; }
    (function walk(node) {
      if (Array.isArray(node)) {
        if (node[0] === "$" && node[1] === "tr") {
          const kids = [].concat((node[3] && node[3].children) || []);
          const cells = (kids.length && Array.isArray(kids[0]) ? kids : [kids]).filter(k => Array.isArray(k) && k[0] === "$" && (k[1] === "td" || k[1] === "th"));
          if (!cells.length) return;
          const values = cells.map(k => cellValue(k[3] && k[3].children).trim());
          if (cells[0][1] === "th") { if (!headers) headers = values; }
          else if (values.some(Boolean)) rows.push(values);
          return;
        }
        if (node[0] === "$" && node[3] && Number.isInteger(node[3].pageCount)) pageCount = Math.max(pageCount, node[3].pageCount);
        node.forEach(walk);
      } else if (node && typeof node === "object") Object.values(node).forEach(walk);
    })(tree);
  }
  return { headers: headers || [], rows, pageCount: Math.min(pageCount, MAX_PAGES) };
}

// The certificate table's columns, found by their headings (and by place, if Koach Learn's admin language is changed and the headings are translated).
const COLUMN = Object.freeze({ number: [/certificate ?number/i, 1], studentId: [/student ?id/i, 2], courseId: [/course ?id/i, 5], courseName: [/course ?name/i, 6], completedAt: [/complet/i, 7] });
function certificatesFrom(table) {
  const index = {};
  for (const [key, [pattern, place]] of Object.entries(COLUMN)) {
    const found = table.headers.findIndex(h => pattern.test(h));
    index[key] = found >= 0 ? found : place;
  }
  return table.rows.map(row => {
    const number = normalNumber(row[index.number]);
    const studentId = Number(row[index.studentId]); const courseId = Number(row[index.courseId]);
    if (!number || !Number.isInteger(studentId) || !Number.isInteger(courseId)) return null;
    const when = Date.parse(row[index.completedAt] || "");
    return Object.freeze({ number, studentId, courseId, courseName: String(row[index.courseName] || "").trim(), completedAt: Number.isFinite(when) ? new Date(when).toISOString() : null });
  }).filter(Boolean);
}
// One letter changed, added or left out.
function oneEditApart(a, b) {
  if (a === b || Math.abs(a.length - b.length) > 1) return false;
  let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i += 1;
  if (a.length === b.length) return a.slice(i + 1) === b.slice(i + 1);
  return a.length > b.length ? a.slice(i + 1) === b.slice(i) : a.slice(i) === b.slice(i + 1);
}
function normalNumber(value) {
  const text = String(value || "").toLowerCase().replace(/[\s.\-_]+/g, "");
  return /^[a-z0-9]{5,16}$/.test(text) ? text : "";
}

// ---- signing in (Auth.js credentials, the same as the site's own sign-in form) ----
function cookieJar() {
  const jar = new Map();
  return Object.freeze({
    take(response) {
      const list = typeof response?.headers?.getSetCookie === "function" ? response.headers.getSetCookie() : String(response?.headers?.get?.("set-cookie") || "").split(/,(?=\s*[A-Za-z0-9_.-]+=)/).filter(Boolean);
      for (const cookie of list) { const pair = String(cookie).split(";")[0]; const at = pair.indexOf("="); if (at > 0) jar.set(pair.slice(0, at).trim(), pair.slice(at + 1).trim()); }
    },
    header() { return [...jar].map(([k, v]) => `${k}=${v}`).join("; "); },
    hasSession() { return [...jar.keys()].some(name => /session-token/i.test(name)); },
    clear() { jar.clear(); }
  });
}

function createKoachLearnSync({ fetchImpl = globalThis.fetch, email = "", password = "", base = DEFAULT_BASE, now = () => Date.now(), ttlMs = TTL_MS, timeoutMs = 20000 } = {}) {
  const configured = Boolean(email && password && typeof fetchImpl === "function");
  const jar = cookieJar();
  let cache = null; let cachedAt = 0; let inFlight = null; let lastError = null;

  const call = (path, init = {}) => fetchImpl(`${base}${path}`, { redirect: "manual", ...init, headers: { ...(init.headers || {}), cookie: jar.header(), "user-agent": "Kyro-KoachLearn-Sync/1.0" }, signal: AbortSignal.timeout(timeoutMs) });

  async function signIn() {
    jar.clear();
    const csrfResponse = await call("/api/auth/csrf");
    jar.take(csrfResponse);
    const csrfToken = (await csrfResponse.json().catch(() => ({}))).csrfToken;
    if (!csrfToken) throw new Error("koachlearn_signin_no_csrf");
    const form = new URLSearchParams({ csrfToken, email, password, callbackUrl: `${base}/dashboard` });
    const response = await call("/api/auth/callback/credentials", { method: "POST", body: form.toString(), headers: { "content-type": "application/x-www-form-urlencoded" } });
    jar.take(response);
    const location = String(response.headers?.get?.("location") || "");
    if (/\/login\b|[?&]error=/i.test(location) || !jar.hasSession()) throw new Error("koachlearn_signin_refused");
  }
  async function page(path) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      if (!jar.hasSession()) await signIn();
      const response = await call(path);
      const location = String(response.headers?.get?.("location") || "");
      if (response.status >= 300 && response.status < 400 && /\/login\b/.test(location)) { jar.clear(); continue; }
      if (!response.ok) throw new Error(`koachlearn_page_${response.status}`);
      return response.text();
    }
    throw new Error("koachlearn_signin_refused");
  }
  async function refresh() {
    const first = readTable(await page(CERTIFICATE_PAGE));
    const all = certificatesFrom(first);
    for (let n = 2; n <= first.pageCount; n += 1) all.push(...certificatesFrom(readTable(await page(`${CERTIFICATE_PAGE}?page=${n}`))));
    cache = Object.freeze(all); cachedAt = now(); lastError = null;
    return cache;
  }
  // The certificate list, read again when it is more than an hour old. One read at a time; when Koach Learn cannot be reached, the last list is kept (null if there never was one).
  async function certificates() {
    if (!configured) return null;
    if (cache && now() - cachedAt < ttlMs) return cache;
    if (!inFlight) inFlight = refresh().catch(error => { lastError = String(error?.message || error); if (cache) cachedAt = now() - ttlMs + 5 * 60 * 1000; return cache; }).finally(() => { inFlight = null; });
    return inFlight;
  }
  return Object.freeze({
    configured,
    certificates,
    // (a number said aloud is often misheard by one letter: "q4w7e2rt" came back as "q4w7e2vrt" on the live voice run of 27 Nov 2026. One letter off from exactly ONE certificate
    //  is taken as that certificate; numbers are 8 letters and digits, so a near miss does not land on someone else's by chance.)
    async byNumber(number) {
      const list = await certificates(); const wanted = normalNumber(number);
      if (!list || !wanted) return null;
      const exact = list.find(row => row.number === wanted);
      if (exact) return wasPublished(exact.number) ? PUBLISHED_ROW : exact;
      if (wanted.length < 6) return null;
      const near = list.filter(row => oneEditApart(row.number, wanted));
      return near.length === 1 ? (wasPublished(near[0].number) ? PUBLISHED_ROW : near[0]) : null;
    },
    async forStudent(studentId) { const list = await certificates(); return list ? list.filter(row => row.studentId === Number(studentId)) : null; },
    status() { return Object.freeze({ configured, cachedAt: cachedAt ? new Date(cachedAt).toISOString() : null, certificates: cache ? cache.length : null, lastError }); }
  });
}

// ---- the learner's link (only the Koach Learn student id) ----
async function readLink(records, { tenantId, userId }) {
  if (!records?.list || !tenantId || !userId) return null;
  const rows = await records.list({ tenantId, ownerId: userId, workspaceId: LINK.workspace(userId), recordType: LINK.recordType, limit: 1 }).catch(() => []);
  const data = rows && rows[0] && rows[0].data;
  return data && Number.isInteger(data.studentId) ? data : null;
}
async function saveLink(records, { tenantId, userId }, studentId) {
  if (!records?.upsertSingleton || !tenantId || !userId || !Number.isInteger(studentId)) return false;
  await records.upsertSingleton({ tenantId, ownerId: userId, workspaceId: LINK.workspace(userId), recordType: LINK.recordType, classification: "standard",
    data: { studentId, linkedAt: new Date().toISOString() }, provenance: { source: "kyro-koachlearn-link" }, actorId: userId });
  return true;
}

// ---- Kyro's sentences ----
const TEXT = Object.freeze({
  en: { off: "Kyro is not connected to Koach Learn yet.", ask: "To link your Koach Learn record, type or say one of your certificate numbers. It is printed on your Koach Learn certificate, for example q4w7e2rt.", notFound: "I could not find certificate number {number} on Koach Learn. Please check it and try again.", unavailable: "I could not reach Koach Learn just now. Please try again in a few minutes.", linked: "Linked. Your Koach Learn record is now with Kyro.", done: "On Koach Learn you have finished {count}:", none: "Your Koach Learn record is linked, and there are no certificates on it yet.", kyro: "With Kyro you are studying {course}: lesson {lesson} of {total}.", kyroDone: "With Kyro you finished every lesson of {course}.", next: "Say \"find me a course on\" and a topic to choose your next course.", already: "Already finished on Koach Learn: {courses}.", published: "That certificate number cannot be used to link your record. Please use another of your certificate numbers." },
  es: { off: "Kyro aún no está conectado a Koach Learn.", ask: "Para vincular tu registro de Koach Learn, escribe o di uno de tus números de certificado. Está impreso en tu certificado de Koach Learn, por ejemplo q4w7e2rt.", notFound: "No encontré el número de certificado {number} en Koach Learn. Revísalo e inténtalo de nuevo.", unavailable: "No pude conectar con Koach Learn ahora. Inténtalo de nuevo en unos minutos.", linked: "Vinculado. Tu registro de Koach Learn ya está con Kyro.", done: "En Koach Learn has terminado {count}:", none: "Tu registro de Koach Learn está vinculado y todavía no tiene certificados.", kyro: "Con Kyro estás estudiando {course}: lección {lesson} de {total}.", kyroDone: "Con Kyro terminaste todas las lecciones de {course}.", next: "Di «búscame un curso sobre» y un tema para elegir tu próximo curso.", already: "Ya terminado en Koach Learn: {courses}.", published: "Ese número de certificado no se puede usar para vincular tu registro. Usa otro de tus números de certificado." },
  fr: { off: "Kyro n'est pas encore connecté à Koach Learn.", ask: "Pour lier votre dossier Koach Learn, tapez ou dites un de vos numéros de certificat. Il est imprimé sur votre certificat Koach Learn, par exemple q4w7e2rt.", notFound: "Je n'ai pas trouvé le numéro de certificat {number} sur Koach Learn. Vérifiez-le et réessayez.", unavailable: "Je n'ai pas pu joindre Koach Learn pour le moment. Réessayez dans quelques minutes.", linked: "C'est lié. Votre dossier Koach Learn est maintenant avec Kyro.", done: "Sur Koach Learn, vous avez terminé {count} :", none: "Votre dossier Koach Learn est lié, et il n'a pas encore de certificat.", kyro: "Avec Kyro, vous étudiez {course} : leçon {lesson} sur {total}.", kyroDone: "Avec Kyro, vous avez terminé toutes les leçons de {course}.", next: "Dites « trouve-moi un cours sur » et un sujet pour choisir votre prochain cours.", already: "Déjà terminé sur Koach Learn : {courses}.", published: "Ce numéro de certificat ne peut pas servir à lier votre dossier. Utilisez un autre de vos numéros de certificat." },
  pt: { off: "O Kyro ainda não está ligado à Koach Learn.", ask: "Para ligar o seu registo da Koach Learn, escreva ou diga um dos seus números de certificado. Está impresso no seu certificado da Koach Learn, por exemplo q4w7e2rt.", notFound: "Não encontrei o número de certificado {number} na Koach Learn. Verifique e tente de novo.", unavailable: "Não consegui falar com a Koach Learn agora. Tente de novo daqui a alguns minutos.", linked: "Ligado. O seu registo da Koach Learn está agora com o Kyro.", done: "Na Koach Learn você terminou {count}:", none: "O seu registo da Koach Learn está ligado e ainda não tem certificados.", kyro: "Com o Kyro você está estudando {course}: lição {lesson} de {total}.", kyroDone: "Com o Kyro você terminou todas as lições de {course}.", next: "Diga \"encontre um curso sobre\" e um tema para escolher o seu próximo curso.", already: "Já concluído na Koach Learn: {courses}.", published: "Esse número de certificado não pode ser usado para ligar o seu registo. Use outro dos seus números de certificado." },
  sw: { off: "Kyro bado haijaunganishwa na Koach Learn.", ask: "Ili kuunganisha rekodi yako ya Koach Learn, andika au sema namba moja ya cheti chako. Imechapishwa kwenye cheti chako cha Koach Learn, kwa mfano q4w7e2rt.", notFound: "Sikupata namba ya cheti {number} kwenye Koach Learn. Tafadhali iangalie ujaribu tena.", unavailable: "Sikuweza kufikia Koach Learn sasa hivi. Tafadhali jaribu tena baada ya dakika chache.", linked: "Imeunganishwa. Rekodi yako ya Koach Learn sasa iko na Kyro.", done: "Kwenye Koach Learn umemaliza {count}:", none: "Rekodi yako ya Koach Learn imeunganishwa, na bado haina vyeti.", kyro: "Ukiwa na Kyro unasoma {course}: somo la {lesson} kati ya {total}.", kyroDone: "Ukiwa na Kyro umemaliza masomo yote ya {course}.", next: "Sema \"nitafutie kozi kuhusu\" na mada ili kuchagua kozi yako inayofuata.", already: "Tayari umemaliza kwenye Koach Learn: {courses}.", published: "Namba hiyo ya cheti haiwezi kutumika kuunganisha rekodi yako. Tafadhali tumia namba nyingine ya cheti chako." },
  ar: { off: "Kyro غير متصل بـ Koach Learn بعد.", ask: "لربط سجلك في Koach Learn، اكتب أو قل أحد أرقام شهاداتك. الرقم مطبوع على شهادتك من Koach Learn، مثلًا q4w7e2rt.", notFound: "لم أجد رقم الشهادة {number} في Koach Learn. تحقق منه وحاول مرة أخرى.", unavailable: "لم أتمكن من الوصول إلى Koach Learn الآن. حاول مرة أخرى بعد بضع دقائق.", linked: "تم الربط. سجلك في Koach Learn أصبح الآن مع Kyro.", done: "في Koach Learn أنهيت {count}:", none: "سجلك في Koach Learn مربوط، ولا توجد فيه شهادات بعد.", kyro: "مع Kyro تدرس {course}: الدرس {lesson} من {total}.", kyroDone: "مع Kyro أنهيت كل دروس {course}.", next: "قل «ابحث لي عن دورة عن» وموضوعًا لتختار دورتك التالية.", already: "أنهيت بالفعل على Koach Learn: {courses}.", published: "لا يمكن استخدام رقم الشهادة هذا لربط سجلك. استخدم رقمًا آخر من أرقام شهاداتك." },
  ha: { off: "Kyro bai haɗu da Koach Learn ba tukuna.", ask: "Don haɗa bayananka na Koach Learn, rubuta ko faɗi ɗaya daga cikin lambobin takardar shaidarka. Tana rubuce a kan takardar shaidarka ta Koach Learn, misali q4w7e2rt.", notFound: "Ban sami lambar takardar shaida {number} a Koach Learn ba. Da fatan ka duba ka sake gwadawa.", unavailable: "Ban iya isa Koach Learn yanzu ba. Da fatan a sake gwadawa bayan 'yan mintoci.", linked: "An haɗa. Bayananka na Koach Learn yanzu suna tare da Kyro.", done: "A Koach Learn ka gama {count}:", none: "An haɗa bayananka na Koach Learn, amma babu takardar shaida a ciki tukuna.", kyro: "Tare da Kyro kana karanta {course}: darasi na {lesson} cikin {total}.", kyroDone: "Tare da Kyro ka gama dukkan darussan {course}.", next: "Faɗi \"nemo min kwas game da\" da wani batu don zaɓar kwas ɗinka na gaba.", already: "Ka riga ka gama a Koach Learn: {courses}.", published: "Ba za a iya amfani da wannan lambar takardar shaida don haɗa bayananka ba. Da fatan ka yi amfani da wata lambar takardar shaidarka." },
  am: { off: "Kyro ገና ከKoach Learn ጋር አልተገናኘም።", ask: "የKoach Learn መዝገብዎን ለማገናኘት ከሰርተፊኬት ቁጥሮችዎ አንዱን ይጻፉ ወይም ይናገሩ። በKoach Learn ሰርተፊኬትዎ ላይ ታትሟል፣ ለምሳሌ q4w7e2rt።", notFound: "የሰርተፊኬት ቁጥር {number}ን በKoach Learn ላይ አላገኘሁትም። እባክዎ ያረጋግጡና እንደገና ይሞክሩ።", unavailable: "አሁን Koach Learnን ማግኘት አልቻልኩም። እባክዎ ከጥቂት ደቂቃዎች በኋላ እንደገና ይሞክሩ።", linked: "ተገናኝቷል። የKoach Learn መዝገብዎ አሁን ከKyro ጋር ነው።", done: "በKoach Learn ላይ {count} ጨርሰዋል፦", none: "የKoach Learn መዝገብዎ ተገናኝቷል፣ እስካሁን ምንም ሰርተፊኬት የለውም።", kyro: "ከKyro ጋር {course}ን እያጠኑ ነው፦ ከ{total} ትምህርቶች {lesson}ኛው።", kyroDone: "ከKyro ጋር የ{course}ን ትምህርቶች በሙሉ ጨርሰዋል።", next: "ቀጣዩን ኮርስዎን ለመምረጥ «ስለ … ኮርስ ፈልግልኝ» ይበሉ።", already: "በKoach Learn ላይ አስቀድመው የጨረሱት፦ {courses}።", published: "ይህ የሰርተፊኬት ቁጥር መዝገብዎን ለማገናኘት ሊያገለግል አይችልም። እባክዎ ሌላ የሰርተፊኬት ቁጥርዎን ይጠቀሙ።" },
  yo: { off: "Kyro kò tíì so pọ̀ mọ́ Koach Learn.", ask: "Láti so àkọsílẹ̀ Koach Learn rẹ pọ̀, kọ tàbí sọ ọ̀kan nínú nọ́mbà ìwé ẹ̀rí rẹ. Ó wà lórí ìwé ẹ̀rí Koach Learn rẹ, fún àpẹẹrẹ q4w7e2rt.", notFound: "Mi ò rí nọ́mbà ìwé ẹ̀rí {number} lórí Koach Learn. Jọ̀wọ́ yẹ̀ ẹ́ wò kí o tún gbìyànjú.", unavailable: "Mi ò lè dé Koach Learn báyìí. Jọ̀wọ́ gbìyànjú lẹ́ẹ̀kan sí i lẹ́yìn ìṣẹ́jú díẹ̀.", linked: "Ó ti so pọ̀. Àkọsílẹ̀ Koach Learn rẹ ti wà pẹ̀lú Kyro báyìí.", done: "Lórí Koach Learn o ti parí {count}:", none: "Àkọsílẹ̀ Koach Learn rẹ ti so pọ̀, kò sì tíì sí ìwé ẹ̀rí kankan nínú rẹ̀.", kyro: "Pẹ̀lú Kyro o ń kọ́ {course}: ẹ̀kọ́ {lesson} nínú {total}.", kyroDone: "Pẹ̀lú Kyro o ti parí gbogbo ẹ̀kọ́ inú {course}.", next: "Sọ \"wá ẹ̀kọ́ kan fún mi nípa\" àti àkòrí kan láti yan ẹ̀kọ́ rẹ tó kàn.", already: "O ti parí rẹ̀ tẹ́lẹ̀ lórí Koach Learn: {courses}.", published: "A kò lè lo nọ́mbà ìwé ẹ̀rí yẹn láti so àkọsílẹ̀ rẹ pọ̀. Jọ̀wọ́ lo nọ́mbà ìwé ẹ̀rí rẹ mìíràn." },
  ig: { off: "Kyro ejikọtabeghị na Koach Learn.", ask: "Iji jikọta ndekọ Koach Learn gị, dee ma ọ bụ kwuo otu n'ime nọmba asambodo gị. E bipụtara ya n'asambodo Koach Learn gị, dịka q4w7e2rt.", notFound: "Ahụghị m nọmba asambodo {number} na Koach Learn. Biko lelee ya ma nwaa ọzọ.", unavailable: "Enweghị m ike iru Koach Learn ugbu a. Biko nwaa ọzọ mgbe nkeji ole na ole gachara.", linked: "Ejikọtala ya. Ndekọ Koach Learn gị nọ na Kyro ugbu a.", done: "Na Koach Learn ị mụchaala {count}:", none: "Ejikọtala ndekọ Koach Learn gị, ọ nweghịkwa asambodo ọ bụla ugbu a.", kyro: "Na Kyro ị na-amụ {course}: ihe ọmụmụ {lesson} n'ime {total}.", kyroDone: "Na Kyro ị mụchaala ihe ọmụmụ niile dị na {course}.", next: "Kwuo \"chọtara m ọmụmụ ihe gbasara\" na isiokwu iji họrọ ọmụmụ ihe gị ọzọ.", already: "Ị mụchaala ya na Koach Learn: {courses}.", published: "A pụghị iji nọmba asambodo ahụ jikọta ndekọ gị. Biko jiri nọmba asambodo gị ọzọ." }
});
const COUNT = Object.freeze({ en: n => (n === 1 ? "1 course" : `${n} courses`), es: n => (n === 1 ? "1 curso" : `${n} cursos`), fr: n => (n === 1 ? "1 cours" : `${n} cours`), pt: n => (n === 1 ? "1 curso" : `${n} cursos`),
  sw: n => `kozi ${n}`, ar: n => `${n} ${n === 1 ? "دورة" : "دورات"}`, ha: n => `kwas ${n}`, am: n => `${n} ኮርስ`, yo: n => `ẹ̀kọ́ ${n}`, ig: n => `ọmụmụ ihe ${n}` });
function recordText(lang, key, values = {}) {
  const table = TEXT[lang] || TEXT.en;
  return String(table[key] || TEXT.en[key] || "").replace(/\{(\w+)\}/g, (whole, name) => (values[name] === undefined ? whole : String(values[name])));
}
function countText(lang, n) { return (COUNT[lang] || COUNT.en)(n); }

module.exports = Object.freeze({ createKoachLearnSync, readTable, certificatesFrom, normalNumber, rscPayload, readLink, saveLink, recordText, countText, TEXT, LINK, DEFAULT_BASE });
