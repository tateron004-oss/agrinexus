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
function createDocumentsCreateExecutor({ env = process.env, documents = null } = {}) {
  return async function execute({ input = {}, context, taskId }) {
    const rawContent = String(input.content || input.text || input.command || "");
    const body = {
      confirmed: true,
      title: input.title || "Nexus document",
      content: rawContent.length > MAX_DOCUMENT_CONTENT_LENGTH ? rawContent.slice(0, MAX_DOCUMENT_CONTENT_LENGTH) : rawContent,
      format: String(input.format || "txt").toLowerCase()
    };
    const result = await exportProvider.exportDocument(body, env);
    const data = result.body?.data || {};
    if (documents && context && data.exportId && data.localPath) {
      try {
        const bytes = require("node:fs").readFileSync(data.localPath);
        const checksum = crypto.createHash("sha256").update(bytes).digest("hex");
        const document = await documents.create({ tenantId: context.tenantId, ownerId: context.userId,
          taskId, title: body.title, documentType: body.format, metadata: { exportId: data.exportId, filename: data.filename } });
        const version = await documents.addVersion({ documentId: document.document_id, tenantId: context.tenantId,
          content: { exportId: data.exportId, filename: data.filename, downloadPath: data.downloadPath },
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
        return { ...result.body, documentId: document.document_id, savedVersion: version.version, reopenVerified };
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
    && Number.isFinite(Number(data.bytes)) && Number(data.bytes) > 0;
  return { verified, method: "real_local_export", reason: verified ? null : "export_not_completed" };
}

module.exports = Object.freeze({ createDocumentsCreateExecutor, verifyDocumentsCreateOutcome });
