"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { buildResume } = require("../../nexus/resume/build.js");
const { createResumeCreateExecutor, verifyResumeCreateOutcome } = require("../../nexus/resume/executor.js");
const { resumePlan } = require("../../nexus/brain/planner.js");

test("a resume states only what it was given, leaves empty sections out, and needs a name and some substance", () => {
  const resume = buildResume({ name: "amina wanjiru", location: "Kisumu", phone: "+254712345678", skills: ["crop planning", "irrigation"], experience: "5 years managing a maize farm; 2 years at a dairy", languages: ["Swahili", "English"] });
  assert.equal(resume.text, [
    "AMINA WANJIRU", "Kisumu | +254712345678", "",
    "SUMMARY", "Based in Kisumu. Skilled in crop planning, irrigation, with experience including 5 years managing a maize farm.", "",
    "SKILLS", "- crop planning", "- irrigation", "",
    "EXPERIENCE", "- 5 years managing a maize farm", "- 2 years at a dairy", "",
    "LANGUAGES", "- Swahili", "- English", ""].join("\n"));
  assert.ok(!/EDUCATION/.test(resume.text), "no empty section");
  assert.throws(() => buildResume({ skills: ["x"] }), { code: "resume_name_required" });
  assert.throws(() => buildResume({ name: "A" }), { code: "resume_content_required" });
  assert.equal(buildResume({ name: "A", education: ["Diploma"] }).text.includes("SUMMARY"), false, "no summary is invented from nothing");
  assert.equal(buildResume({ name: "A", skills: Array.from({ length: 30 }, (_, i) => `s${i}`) }).sections.skills.length, 12, "bounded");
});

const context = { tenantId: "t1", userId: "u1" };

test("the executor fills gaps only from what the person told Kyro, writes a real file, and registers a document", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "resume-test-"));
  const created = []; const versions = [];
  const documents = {
    async create(args) { created.push(args); return { document_id: "doc_1" }; },
    async addVersion(args) { versions.push(args); return { version: 1 }; },
    async get() { return { document_id: "doc_1", version: 1 }; }
  };
  const memory = { async profile() { return [{ content: { kind: "name", value: "Amina Wanjiru" } }, { content: { kind: "location", value: "Kisumu" } }, { content: { kind: "crops", value: "maize, beans" } }, { content: { kind: "language", value: "Swahili" } }]; } };
  const execute = createResumeCreateExecutor({ env: { NEXUS_EXPORT_DIR: dir, EXPORT_DIR: dir, NEXUS_EXPORT_ROOT: dir }, documents, memory });
  try {
    const result = await execute({ input: { skills: [], experience: ["5 years on a maize farm"] }, context, taskId: "tsk_1" });
    assert.equal(result.resume, true); assert.equal(result.resumeName, "Amina Wanjiru");
    assert.match(result.resumeText, /^AMINA WANJIRU\nKisumu\n/);
    assert.match(result.resumeText, /- Growing maize\n- Growing beans/); assert.match(result.resumeText, /LANGUAGES\n- Swahili/); assert.match(result.resumeText, /- 5 years on a maize farm/);
    assert.equal(result.documentId, "doc_1"); assert.equal(result.reopenVerified, true);
    assert.equal(created[0].title, "Resume - Amina Wanjiru");
    assert.equal(verifyResumeCreateOutcome({ result }).verified, true);
    assert.equal(verifyResumeCreateOutcome({ result: { ...result, resumeText: "something else" } }).verified, false);
    assert.equal(verifyResumeCreateOutcome({ result: { ...result, resume: false } }).verified, false);
    assert.equal(verifyResumeCreateOutcome({ result: { status: "failed" } }).verified, false);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});

test("without a name anywhere, or without anything to say, the executor refuses instead of inventing a resume", async () => {
  const execute = createResumeCreateExecutor({ env: {}, documents: null, memory: { async profile() { return []; } } });
  await assert.rejects(execute({ input: { skills: ["x"] }, context }), { code: "resume_name_required" });
  await assert.rejects(execute({ input: { name: "Amina" }, context }), { code: "resume_content_required" });
});

const catalog = { tools: [{ toolId: "resume.create" }], applications: [{ applicationId: "workforce" }] };

test("the planner turns a plain resume request into the tool, asks when it lacks a name or substance, and ignores questions and multi-step requests", () => {
  const full = resumePlan("Create a resume for Amina Wanjiru. Skills: crop planning, irrigation. Experience: 5 years managing a maize farm; 2 years at a dairy. Education: Diploma in Agriculture. Phone +254 712 345 678", catalog, {});
  assert.equal(full.clarification, null); assert.equal(full.steps[0].toolId, "resume.create");
  assert.deepEqual(full.steps[0].input, { name: "Amina Wanjiru", phone: "+254712345678", skills: ["crop planning", "irrigation"], experience: ["5 years managing a maize farm", "2 years at a dairy"], education: ["Diploma in Agriculture"], languages: [] });
  assert.match(resumePlan("Make my resume", catalog, {}).clarification, /What name should go on your resume/);
  assert.match(resumePlan("Make my resume", catalog, { name: "Amina" }).clarification, /What should it say/);
  assert.equal(resumePlan("Make my resume and save it", catalog, { name: "Amina", crops: "maize" }).steps[0].toolId, "resume.create");
  assert.equal(resumePlan("How do I write a resume?", catalog, { name: "Amina" }), null);
  assert.equal(resumePlan("Find farm jobs near Nakuru and make a resume", catalog, { name: "Amina", crops: "maize" }), null, "a multi-step request stays with the planner");
  assert.equal(resumePlan("Make my resume", { tools: [], applications: [] }, { name: "Amina" }), null);
});

// Found live: "Give me a resume for a warehouse job" and "I need a resume
// for a construction job" use "give"/"need," which weren't in the verb
// list, so a real, working request fell through to the free-form AI
// planner instead of this deterministic fast path.
test("'give me'/'i need' phrasing is recognized, not just make/create/build/write/prepare/draft/generate", () => {
  // Neither example gives any skills/experience substance, so -- exactly
  // like "Make my resume" above -- the real fast path is reached and asks
  // for substance, rather than falling through to the AI planner as null.
  assert.match(resumePlan("Give me a resume for a warehouse job", catalog, { name: "Amina" }).clarification, /What should it say/);
  assert.match(resumePlan("I need a resume for a construction job", catalog, { name: "Amina" }).clarification, /What should it say/);
});
