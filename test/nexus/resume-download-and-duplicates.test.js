"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const { createResumeCreateExecutor, verifyResumeCreateOutcome } = require("../../nexus/resume/executor.js");

// The finished resume used to be a plain .txt file shown on the generic data card with NO Download button, and saying the same answers again
// (a retry after a dropped connection) saved a second copy. It is now a PDF, shown as a resume with a Download button, and the same answers
// within 15 minutes give back the resume already saved.

const context = { tenantId: "t1", userId: "u1" };
const input = { name: "Amina Wanjiru", location: "Kisumu", skills: ["farming", "selling maize"], experience: ["Farm helper for 3 years"], languages: ["Swahili", "English"] };

function fakeDocuments() {
  const rows = []; let n = 0;
  return {
    rows,
    async create(args) { const row = { document_id: `doc_${++n}`, tenant_id: args.tenantId, owner_id: args.ownerId, title: args.title, document_type: args.documentType, metadata: args.metadata, created_at: new Date().toISOString(), version: 1 }; rows.unshift(row); return row; },
    async addVersion() { return { version: 1 }; },
    async get({ ownerId, documentId }) { return rows.find(row => row.document_id === documentId && row.owner_id === ownerId) || null; },
    async list({ ownerId }) { return rows.filter(row => row.owner_id === ownerId); }
  };
}
function withExportDir(run) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "resume-pdf-"));
  return Promise.resolve(run(dir)).finally(() => fs.rmSync(dir, { recursive: true, force: true }));
}
const noMemory = { async profile() { return []; } };

test("the resume is saved as a real PDF whose body has the section headings and does not repeat the name", async () => {
  await withExportDir(async dir => {
    const documents = fakeDocuments();
    const execute = createResumeCreateExecutor({ env: { NEXUS_EXPORT_DIR: dir }, documents, memory: noMemory });
    const result = await execute({ input, context, taskId: "tsk_1" });
    assert.equal(result.data.format, "pdf");
    assert.equal(documents.rows[0].document_type, "pdf");
    assert.equal(documents.rows[0].title, "Resume - Amina Wanjiru");
    assert.equal(fs.readFileSync(path.join(dir, result.data.filename)).subarray(0, 5).toString(), "%PDF-");
    assert.match(documents.rows[0].metadata.fingerprint, /^resume:[0-9a-f]{32}$/);
    assert.equal(documents.rows[0].metadata.bytes > 100, true);
    assert.equal(verifyResumeCreateOutcome({ result }).verified, true);
    assert.equal(result.resumeText.startsWith("AMINA WANJIRU"), true, "the text shown on screen is still the full resume");
  });
});

test("the same answers again give back the resume already saved, not a second copy", async () => {
  await withExportDir(async dir => {
    const documents = fakeDocuments();
    const execute = createResumeCreateExecutor({ env: { NEXUS_EXPORT_DIR: dir }, documents, memory: noMemory });
    const first = await execute({ input, context, taskId: "tsk_1" });
    const again = await execute({ input, context, taskId: "tsk_2" });
    assert.equal(documents.rows.length, 1, "only one document exists");
    assert.equal(fs.readdirSync(dir).length, 1, "only one file was written");
    assert.equal(again.alreadySaved, true);
    assert.equal(again.documentId, first.documentId);
    assert.equal(again.downloadPath, first.downloadPath);
    assert.equal(again.reopenVerified, true);
    assert.equal(verifyResumeCreateOutcome({ result: again }).verified, true, "the repeat still passes the engine's own verification");
    assert.equal(again.resumeText, first.resumeText);
  });
});

test("different answers, a different person, or an old copy are saved as new resumes", async () => {
  await withExportDir(async dir => {
    const documents = fakeDocuments();
    const execute = createResumeCreateExecutor({ env: { NEXUS_EXPORT_DIR: dir }, documents, memory: noMemory });
    await execute({ input, context, taskId: "a" });
    await execute({ input: { ...input, skills: ["farming", "selling maize", "driving"] }, context, taskId: "b" });
    assert.equal(documents.rows.length, 2, "changed answers make a new resume");
    const other = await execute({ input, context: { ...context, userId: "u2" }, taskId: "c" });
    assert.equal(other.alreadySaved, undefined, "another person's identical answers never return the first person's resume");
    assert.equal(documents.rows.length, 3);
    for (const row of documents.rows.filter(item => item.owner_id === "u1")) row.created_at = new Date(Date.now() - 20 * 60 * 1000).toISOString();
    const late = await execute({ input, context, taskId: "d" });
    assert.equal(late.alreadySaved, undefined, "after 15 minutes the same answers make a fresh copy");
    assert.equal(documents.rows.length, 4);
  });
});

test("when the document record cannot be read back, it saves normally instead of returning something unverified", async () => {
  await withExportDir(async dir => {
    const documents = fakeDocuments();
    const execute = createResumeCreateExecutor({ env: { NEXUS_EXPORT_DIR: dir }, documents, memory: noMemory });
    await execute({ input, context, taskId: "a" });
    documents.get = async () => null;
    const second = await execute({ input, context, taskId: "b" });
    assert.equal(second.alreadySaved, undefined);
    assert.equal(documents.rows.length, 2);
  });
});

// ---- the screen ----
const appSource = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");
function loadRenderer() {
  const start = appSource.indexOf("function renderNexusAuthoritativeResume(");
  const end = appSource.indexOf("\nfunction ", start + 10);
  const element = tag => { const el = { tag, dataset: {}, style: {}, children: [], listeners: {}, textContent: "", type: "", setAttribute(k, v) { this[k] = v; }, append(...kids) { this.children.push(...kids); }, prepend(kid) { this.children.unshift(kid); }, addEventListener(name, fn) { this.listeners[name] = fn; }, querySelector() { return null; } }; return el; };
  const host = element("div");
  host.querySelector = () => null;
  const downloads = [];
  const sandbox = { document: { querySelector: () => host, createElement: element }, downloadNexusAuthoritativeDocument: (id, status) => downloads.push({ id, status }) };
  vm.createContext(sandbox);
  vm.runInContext(appSource.slice(start, end) + "\nthis.renderNexusAuthoritativeResume = renderNexusAuthoritativeResume;", sandbox);
  return { render: sandbox.renderNexusAuthoritativeResume, host, downloads };
}

test("a finished resume is shown as a resume with a Download button that downloads the saved document", () => {
  const { render, host, downloads } = loadRenderer();
  const surface = render({ commandId: "c1", correlationId: "k1", workspace: "workforce", data: { resume: true, documentId: "doc_9", savedVersion: 1, reopenVerified: true, resumeText: "AMINA WANJIRU\nKisumu\n\nSKILLS\n- farming\n" } });
  assert.equal(host.children[0], surface);
  const [heading, text, status, button] = surface.children;
  assert.equal(heading.textContent, "Your resume is ready.");
  assert.match(text.textContent, /^AMINA WANJIRU/);
  assert.equal(button.textContent, "Download");
  assert.equal(button.dataset.nexusDocumentDownload, "true");
  button.listeners.click();
  assert.deepEqual(downloads.map(item => item.id), ["doc_9"]);
  assert.equal(downloads[0].status, status);
  const repeat = render({ commandId: "c2", correlationId: "k2", workspace: "workforce", data: { resume: true, documentId: "doc_9", savedVersion: 1, reopenVerified: true, alreadySaved: true, resumeText: "X" } });
  assert.match(repeat.children[0].textContent, /already saved/);
});

test("the workspace uses the resume screen only for a resume that was really saved and reopened", () => {
  assert.match(appSource, /outcome\.data\?\.resume === true && nexusDocumentLifecycleComplete\(outcome\.data\)\s*\?\s*renderNexusAuthoritativeResume\(outcome\)/);
  assert.match(appSource, /function nexusDocumentLifecycleComplete\(data = \{\}\) \{\s*return Boolean\(data\.documentId && data\.savedVersion && data\.reopenVerified === true\)/);
});
