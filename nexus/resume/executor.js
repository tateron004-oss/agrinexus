"use strict";

const { buildResume } = require("./build.js");
const { createDocumentsCreateExecutor, verifyDocumentsCreateOutcome } = require("../documents/executor.js");
const { isFact } = require("../memory/profile-facts.js");
const crypto = require("node:crypto");

// Real executor for the "resume.create" canonical tool: builds the resume text from what the person told Kyro (see build.js) and saves it
// through the same real, owner-scoped document export that documents.create uses, so it can be downloaded and reopened later.
//
// What the request leaves out is filled from what the person has already told Kyro about themselves (their name, town, what they grow or
// keep, the language they prefer) and from nothing else. If that is still not enough for a resume it fails with a plain, coded reason,
// never a made-up resume.
async function knownAbout(memory, context) {
  if (!memory?.profile || !context?.tenantId || !context?.userId) return {};
  try {
    const byKind = {};
    for (const row of [...(await memory.profile({ tenantId: context.tenantId, userId: context.userId }))].reverse()) if (isFact(row.content)) byKind[row.content.kind] = row.content.value;
    return byKind;
  } catch { return {}; }
}
// An Oxford comma before "and" ("maize, beans, and sorghum") leaves a stray "and " stuck to the
// last item since the comma already consumes the split point before it -- strip it after splitting.
const list = value => String(value || "").split(/\s*,\s*|\s+and\s+/).map(item => item.trim().replace(/^and\s+/i, "")).filter(Boolean);
// Whether the person (or the AI planner) actually gave anything for a field -- just a presence check, never a
// parse. The real splitting happens exactly once, consistently, in build.js's items() (which already handles
// both arrays and comma/"and"/semicolon-joined strings) -- this used to re-split skills/languages here first with
// a narrower, semicolon-only regex and hand build.js the already-mangled result, collapsing a plain comma-joined
// string into one run-on item before build.js ever got a chance to split it correctly.
const hasContent = value => Array.isArray(value) ? value.some(item => String(item || "").trim()) : typeof value === "string" ? value.trim().length > 0 : false;

// The same answers saved again within this long (a retry after a dropped connection, or "make my resume" said twice) give back the
// resume that was already saved instead of a second copy.
const SAME_RESUME_WINDOW_MS = 15 * 60 * 1000;
const SECTION_NAME = /^(?:SUMMARY|SKILLS|EXPERIENCE|EDUCATION|LANGUAGES)$/;

// The saved file is a PDF, which opens on any phone. The person's name is already the document title, so it is not repeated in the body,
// and the section names get the heading style the PDF renderer understands.
function fileBody(resume) {
  return resume.text.split("\n").slice(1).map(line => (SECTION_NAME.test(line) ? `## ${line}` : line)).join("\n").trim();
}

async function alreadySaved(documents, context, fingerprint, now) {
  if (!documents?.list || !documents?.get || !context?.tenantId || !context?.userId) return null;
  try {
    const rows = await documents.list({ tenantId: context.tenantId, ownerId: context.userId, limit: 20 });
    const row = rows.find(item => item?.metadata?.fingerprint === fingerprint && now - new Date(item.created_at || item.updated_at || 0).getTime() < SAME_RESUME_WINDOW_MS);
    if (!row?.metadata?.exportId) return null;
    const reopened = await documents.get({ tenantId: context.tenantId, ownerId: context.userId, documentId: row.document_id });
    if (!reopened || reopened.document_id !== row.document_id) return null;
    return { ok: true, status: "completed", message: "This resume was already saved a moment ago, so it was not saved a second time.",
      data: { exportId: row.metadata.exportId, filename: row.metadata.filename, format: row.document_type, bytes: Number(row.metadata.bytes) || 1 },
      downloadPath: `/api/nexus/runtime/documents/${row.document_id}`, documentId: row.document_id, savedVersion: Number(reopened.version) || 1, reopenVerified: true, alreadySaved: true };
  } catch { return null; }
}

function createResumeCreateExecutor({ env = process.env, documents = null, memory = null } = {}) {
  const saveDocument = createDocumentsCreateExecutor({ env, documents });
  return async function execute({ input = {}, context, taskId, stepId, idempotencyKey }) {
    const known = await knownAbout(memory, context);
    // A person who grows or keeps something has a real, if small, set of skills; add them only when they gave no skills of their own.
    const grown = [...list(known.crops).map(crop => `Growing ${crop}`), ...list(known.livestock).map(animal => `Keeping ${animal}`)];
    const resume = buildResume({ name: input.name || known.name, phone: input.phone, email: input.email, location: input.location || known.location,
      skills: hasContent(input.skills) ? input.skills : grown, experience: input.experience, education: input.education,
      languages: hasContent(input.languages) ? input.languages : list(known.language) });
    const fingerprint = `resume:${crypto.createHash("sha256").update(`${context?.userId || ""}\n${resume.text}`).digest("hex").slice(0, 32)}`;
    const saved = await alreadySaved(documents, context, fingerprint, Date.now())
      || await saveDocument({ input: { title: `Resume - ${resume.name}`, content: fileBody(resume), format: "pdf", fingerprint }, context, taskId, stepId, idempotencyKey });
    return { ...saved, resume: true, resumeName: resume.name, resumeText: resume.text, sections: Object.fromEntries(Object.entries(resume.sections).map(([key, items]) => [key, items.length])) };
  };
}

// Verified only when the file was really written and the text that was saved is a real resume for the person named.
function verifyResumeCreateOutcome({ result }) {
  const saved = verifyDocumentsCreateOutcome({ result });
  const verified = saved.verified && result?.resume === true && typeof result?.resumeName === "string" && result.resumeName.length > 0
    && typeof result?.resumeText === "string" && result.resumeText.toUpperCase().startsWith(result.resumeName.toUpperCase());
  return { verified, method: "real_resume_export", reason: verified ? null : saved.verified ? "resume_content_invalid" : saved.reason };
}

module.exports = Object.freeze({ createResumeCreateExecutor, verifyResumeCreateOutcome });
