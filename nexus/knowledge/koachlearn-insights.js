"use strict";
// What the owner learns from learners studying Koach Learn courses with Kyro (owner's 30 Nov list, 19 Nov 2026):
//   - "this wording is confusing" reports: the course, the language, the lesson and the learner's own words (each kept as the learner's own record, so their data stays theirs);
//   - quick-check pass rates per language: when the learner answers one of a lesson's quick checks, Kyro's tutor marks it right or wrong on a hidden last line
//     ("CHECK: right" / "CHECK: wrong", taken off before anything is shown or spoken), and the learner's own record counts them by language and course.
// The owner asks Kyro ("show the learner reports", "pass rates by language"); only the owner may: an Admin listed in PLATFORM_OWNER_EMAILS (as for every platform-owner
// screen), or an email listed in KOACHLEARN_REPORT_EMAILS. Nothing here names a learner in the report.
// The report reads the 200 most recently active learners and the 200 newest reports, and says so when it reaches that limit.

const LANGS = ["en", "es", "fr", "ar", "sw", "ha", "am", "yo", "ig", "pt"];
const NAMES = { en: "English", es: "Spanish", fr: "French", ar: "Arabic", sw: "Kiswahili", ha: "Hausa", am: "Amharic", yo: "Yoruba", ig: "Igbo", pt: "Portuguese" };
const REPORT = Object.freeze({ workspace: "koachlearn-feedback", recordType: "koachlearn-wording-report" });
const CHECKS = Object.freeze({ workspace: userId => `koachlearn-checks:${userId}`, recordType: "koachlearn-check-counts" });
const LIMIT = 200;

// The tutor's hidden "CHECK: right|wrong" line. -> { text, check: "right" | "wrong" | null }
function readCheck(reply) {
  const text = String(reply || "");
  const hit = /(?:^|\n)[ \t>*_`-]*CHECK\s*:\s*(right|wrong)\b[^\n]*/i.exec(text);
  if (!hit) return { text, check: null };
  return { text: (text.slice(0, hit.index) + text.slice(hit.index + hit[0].length)).replace(/\n{3,}/g, "\n\n").trim(), check: hit[1].toLowerCase() };
}

function emails(value) { return String(value || "").split(",").map(item => item.trim().toLowerCase()).filter(Boolean); }
function isOwner(context, env = process.env) {
  const email = String(context?.email || "").trim().toLowerCase();
  if (!email) return false;
  if (emails(env.KOACHLEARN_REPORT_EMAILS).includes(email)) return true;
  const admin = Array.isArray(context?.roles) && context.roles.some(role => String(role).toLowerCase() === "admin");
  const owners = emails(env.PLATFORM_OWNER_EMAILS);
  return admin && owners.length > 0 && owners.includes(email);
}

function createKoachLearnInsights({ records = null, env = process.env, now = () => Date.now() } = {}) {
  const ok = scope => Boolean(records && scope && scope.tenantId && scope.userId);
  async function reportWording(scope, { slug, lang, lesson, said }) {
    if (!ok(scope) || typeof records.create !== "function") return false;
    await records.create({ tenantId: scope.tenantId, ownerId: scope.userId, workspaceId: REPORT.workspace, recordType: REPORT.recordType, classification: "standard",
      data: { slug: String(slug || ""), lang: String(lang || ""), lesson: Number(lesson) || 0, said: String(said || "").slice(0, 300), at: new Date(now()).toISOString() },
      provenance: { source: "kyro-course-tutor" } });
    return true;
  }
  async function recordCheck(scope, { lang, slug, check }) {
    if (!ok(scope) || (check !== "right" && check !== "wrong")) return false;
    for (let attempt = 0; attempt < 3; attempt += 1) {
      const rows = await records.list({ tenantId: scope.tenantId, ownerId: scope.userId, workspaceId: CHECKS.workspace(scope.userId), recordType: CHECKS.recordType, limit: 1 });
      const row = rows && rows[0];
      const data = row && row.data && typeof row.data === "object" ? JSON.parse(JSON.stringify(row.data)) : { byLang: {}, byCourse: {} };
      const bump = (bucket, key) => { bucket[key] = bucket[key] || { right: 0, wrong: 0 }; bucket[key][check] += 1; };
      bump(data.byLang, lang || "en"); bump(data.byCourse, `${lang || "en"}|${slug || ""}`);
      try {
        if (row && typeof records.update === "function" && Number.isInteger(row.version)) await records.update({ tenantId: scope.tenantId, recordId: row.record_id, expectedVersion: row.version, actorId: scope.userId, data, provenance: { source: "kyro-course-tutor" } });
        else await records.upsertSingleton({ tenantId: scope.tenantId, ownerId: scope.userId, workspaceId: CHECKS.workspace(scope.userId), recordType: CHECKS.recordType, classification: "standard", data, provenance: { source: "kyro-course-tutor" }, actorId: scope.userId });
        return true;
      } catch (error) { if (!/version conflict/i.test(String(error && error.message)) || attempt === 2) throw error; }
    }
    return false;
  }
  // For the owner: pass rates by language, and the newest wording reports. -> text
  async function ownerReport(tenantId) {
    if (!records || !tenantId) return "There is nothing to report yet.";
    const countRows = await records.list({ tenantId, recordType: CHECKS.recordType, limit: LIMIT }).catch(() => []);
    const reportRows = await records.list({ tenantId, recordType: REPORT.recordType, limit: LIMIT }).catch(() => []);
    const totals = {};
    for (const row of countRows) for (const [lang, c] of Object.entries((row.data && row.data.byLang) || {})) {
      totals[lang] = totals[lang] || { right: 0, wrong: 0, learners: 0 };
      totals[lang].right += Number(c.right) || 0; totals[lang].wrong += Number(c.wrong) || 0; totals[lang].learners += 1;
    }
    const rateLines = LANGS.filter(lang => totals[lang]).map(lang => {
      const t = totals[lang]; const n = t.right + t.wrong;
      return `• ${NAMES[lang]}: ${Math.round((t.right / n) * 100)}% right of ${n} quick-check answers, ${t.learners} learner${t.learners === 1 ? "" : "s"}`;
    });
    const byCourse = new Map();
    for (const row of reportRows) { const d = row.data || {}; const key = `${d.lang}|${d.slug}`; byCourse.set(key, (byCourse.get(key) || 0) + 1); }
    const reportLines = [...byCourse.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10).map(([key, n]) => { const [lang, slug] = key.split("|"); return `• ${slug} (${NAMES[lang] || lang}): ${n} report${n === 1 ? "" : "s"}`; });
    const parts = [];
    parts.push(rateLines.length ? ["Quick-check pass rates by language:", ...rateLines].join("\n") : "No quick-check answers yet.");
    parts.push(reportLines.length ? ["Courses with the most \"this wording is confusing\" reports:", ...reportLines].join("\n") : "No wording reports yet.");
    if (countRows.length >= LIMIT || reportRows.length >= LIMIT) parts.push(`(This reads the ${LIMIT} most recent learners and reports.)`);
    return parts.join("\n\n");
  }
  return Object.freeze({ reportWording, recordCheck, ownerReport, isOwner: context => isOwner(context, env) });
}

module.exports = Object.freeze({ createKoachLearnInsights, readCheck, isOwner, REPORT, CHECKS });
