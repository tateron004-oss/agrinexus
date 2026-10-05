"use strict";

// Real executor for the "documents.create" canonical tool, wiring the
// authoritative task engine to server/providers/exportProvider.js's
// exportDocument() (already hardened for path traversal: strict format
// allowlist checked before the path is built, UUID filenames, and the
// download route re-validates against the export root) instead of the
// scripts/provider-engines.js mock.
//
// Also registers a real nexus_documents/nexus_document_versions row (see
// nexus/data/document-repository.js) when a `documents` repository is
// supplied, so documents.read/documents.list have a real, owner-scoped
// record of what got created -- exportProvider alone only ever produced an
// anonymous file with no durable link back to who made it.
const exportProvider = require("../../server/providers/exportProvider.js");
const crypto = require("node:crypto");

// Found live: the deterministic fast-path matcher (completeDocumentPlan)
// already caps its own content at 4000 chars, but that's just an echo of
// the raw command text -- the ONLY path that produces genuinely long,
// AI-authored document content is the general LLM planning fallback, whose
// model call has no output-token cap and whose JSON-schema "input" field
// has no length limit. A documents.create step from that path could carry
// an unbounded content string straight into exportProvider's synchronous
// PDF/DOCX rendering, tying up the process's single event loop -- the same
// shape already fixed for the fast-path matcher, just reachable through
// this shared executor instead. Capped here (the one choke-point both
// planning paths funnel through) rather than per-matcher, so any future
// caller is covered too. The ceiling is generous -- large enough for a
// genuinely long report/business plan/analysis -- unlike the fast-path's
// tight 4000-char echo-text cap, since real long-form content is exactly
// what this executor is for.
const MAX_DOCUMENT_CONTENT_LENGTH = 50000;
// The file written to the app's own disk is lost whenever the app is updated (the disk is not kept between releases), and the worker that carries out an
// erasure cannot see the web server's disk. So a copy of the file's bytes is also kept in the document's version record in the database, which survives
// updates and is wiped by the same erasure that wipes the record. Only files up to this size are kept there; a bigger one stays on disk only.
const MAX_STORED_FILE_BYTES = 3 * 1024 * 1024;
// Found live (production outage, capability-testing the orb): the planning
// model's tool-call schema has no enum constraint on documents.create's
// format field -- it's free text, so the model plausibly writes "document",
// "report", "letter", or similar natural-language words for "make me a
// document" instead of one of exportProvider.exportDocument()'s tiny literal
// allowlist (json/txt/md/pdf/docx). Any format outside that exact list made
// exportDocument() return a "blocked" status instead of "completed", which
// verifyDocumentsCreateOutcome then reported as a hard, generic
// "outcome_unverified" 502 with no indication the real cause was just an
// unrecognized format word -- every single "create a document" request that
// didn't happen to say pdf/docx/json/md/txt outright failed this way.
// Normalizing common synonyms (and falling back to the always-valid txt for
// anything else) makes this robust to what the model actually says, instead
// of hard-failing the whole capability on a word choice.
const DOCUMENT_FORMAT_ALIASES = Object.freeze({
  document: "txt", doc: "txt", text: "txt", plain: "txt", report: "txt", letter: "txt", summary: "txt", note: "txt",
  markdown: "md", word: "docx"
});
const VALID_DOCUMENT_FORMATS = Object.freeze(["json", "txt", "md", "pdf", "docx"]);
function normalizeDocumentFormat(rawFormat) {
  const format = String(rawFormat || "txt").toLowerCase().trim();
  if (VALID_DOCUMENT_FORMATS.includes(format)) return format;
  return DOCUMENT_FORMAT_ALIASES[format] || "txt";
}
function createDocumentsCreateExecutor({ env = process.env, documents = null } = {}) {
  return async function execute({ input = {}, context, taskId }) {
    const rawContent = String(input.content || input.text || input.command || "");
    // Found live: this truncated over-length content with no signal anywhere in the result -- for most
    // callers a bounded echo of a long AI generation, but for a caller like healthwork/privacy.js's
    // "export all my patient records" (explicitly presented to the user as the backup to take before an
    // irreversible ERASE ALL), a silently truncated export is a silently INCOMPLETE backup: the tail of
    // the real patient data never makes it into the file at all, and nothing here or in
    // verifyDocumentsCreateOutcome ever caught it. Surfacing it honestly here, at the one choke-point
    // every documents.create caller funnels through, protects all of them at once rather than requiring
    // each caller to separately guess at the 50000-char ceiling before it even calls this executor.
    const truncated = rawContent.length > MAX_DOCUMENT_CONTENT_LENGTH;
    const body = {
      confirmed: true,
      title: input.title || "Nexus document",
      content: truncated ? rawContent.slice(0, MAX_DOCUMENT_CONTENT_LENGTH) : rawContent,
      format: normalizeDocumentFormat(input.format)
    };
    const result = await exportProvider.exportDocument(body, env);
    if (truncated && result.body?.data) result.body = { ...result.body, data: { ...result.body.data, truncated: true, originalLength: rawContent.length, savedLength: body.content.length } };
    const data = result.body?.data || {};
    if (documents && context && data.exportId && data.localPath) {
      try {
        const bytes = require("node:fs").readFileSync(data.localPath);
        const checksum = crypto.createHash("sha256").update(bytes).digest("hex");
        const document = await documents.create({ tenantId: context.tenantId, ownerId: context.userId,
          taskId, title: body.title, documentType: body.format,
          // fingerprint: an optional short label a caller can use to recognise "this exact thing was already saved" (see nexus/resume/executor.js).
          metadata: { exportId: data.exportId, filename: data.filename, bytes: data.bytes, ...(typeof input.fingerprint === "string" && input.fingerprint ? { fingerprint: input.fingerprint.slice(0, 80) } : {}) } });
        const version = await documents.addVersion({ documentId: document.document_id, tenantId: context.tenantId,
          content: { exportId: data.exportId, filename: data.filename, downloadPath: data.downloadPath, ...(bytes.length <= MAX_STORED_FILE_BYTES ? { contentBase64: bytes.toString("base64") } : {}) },
          objectKey: `local:${data.filename}`, checksum, createdBy: context.userId });
        // The "documents" capability's completion contract
        // (nexus/apps/capability-completion-contracts.js) requires
        // savedVersion and reopenVerified as real evidence, not just a
        // successful write -- genuinely reading the document back through
        // the same owner-scoped path documents.read uses is what makes
        // "reopen" a verified fact instead of an assumed one. This was the
        // one piece the plan's reopenAfterSave hint (nexus/brain/planner.js)
        // asked for but this executor never implemented, which is why the
        // live "documents-lifecycle" production acceptance probe kept
        // failing even though the underlying create/save always worked.
        // A failure here is kept separate from the create+index try above --
        // the document is already genuinely saved by this point, so a
        // read-back error must only mark reopenVerified false, not erase the
        // real documentId/savedVersion this call already earned.
        let reopenVerified = false;
        try {
          const reopened = await documents.get({ tenantId: context.tenantId, ownerId: context.userId, documentId: document.document_id });
          reopenVerified = Boolean(reopened && reopened.document_id === document.document_id && Number(reopened.version) === Number(version.version));
        } catch {
          // Leave reopenVerified honestly false; the create/save above already succeeded.
        }
        // Found live (export/document audit): result.body.downloadPath (from
        // exportProvider.exportDocument) points at the legacy /exports/:filename
        // route, which 403s for everyone -- including this document's own
        // owner -- since nothing in this governed pipeline ever records
        // ownership into the legacy db.exportOwners map that route checks.
        // Override it with the real, owner-scoped route this document is
        // actually readable through, matching read-executor.js's formatDocument.
        return { ...result.body, downloadPath: `/api/nexus/runtime/documents/${document.document_id}`,
          documentId: document.document_id, savedVersion: version.version, reopenVerified };
      } catch {
        // The real file export already succeeded; a failure to also index it
        // for later listing/reading shouldn't fail the whole create action --
        // it just won't show up in documents.list until re-created.
      }
    }
    return { ...result.body };
  };
}

function verifyDocumentsCreateOutcome({ result }) {
  const data = result?.data || {};
  const verified = result?.status === "completed" && result?.ok !== false
    && typeof data.exportId === "string" && data.exportId.length > 0
    && Number.isFinite(Number(data.bytes)) && Number(data.bytes) > 0
    && !data.truncated;
  return { verified, method: "real_local_export", reason: verified ? null : data.truncated ? "content_truncated" : "export_not_completed" };
}

module.exports = Object.freeze({ createDocumentsCreateExecutor, verifyDocumentsCreateOutcome, normalizeDocumentFormat });
