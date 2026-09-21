"use strict";

const { buildResume } = require("./build.js");
const { createDocumentsCreateExecutor, verifyDocumentsCreateOutcome } = require("../documents/executor.js");
const { isFact } = require("../memory/profile-facts.js");

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
const list = value => String(value || "").split(/\s*,\s*|\s+and\s+/).map(item => item.trim()).filter(Boolean);
const given = value => (Array.isArray(value) ? value : typeof value === "string" ? value.split(/\s*[;\n]\s*/) : []).filter(item => String(item || "").trim());

function createResumeCreateExecutor({ env = process.env, documents = null, memory = null } = {}) {
  const saveDocument = createDocumentsCreateExecutor({ env, documents });
  return async function execute({ input = {}, context, taskId, stepId, idempotencyKey }) {
    const known = await knownAbout(memory, context);
    const skills = given(input.skills);
    const experience = given(input.experience);
    // A person who grows or keeps something has a real, if small, set of skills; add them only when they gave no skills of their own.
    const grown = [...list(known.crops).map(crop => `Growing ${crop}`), ...list(known.livestock).map(animal => `Keeping ${animal}`)];
    const resume = buildResume({ name: input.name || known.name, phone: input.phone, email: input.email, location: input.location || known.location,
      skills: skills.length ? skills : grown, experience, education: input.education, languages: given(input.languages).length ? input.languages : list(known.language) });
    const saved = await saveDocument({ input: { title: `Resume - ${resume.name}`, content: resume.text, format: "txt" }, context, taskId, stepId, idempotencyKey });
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
