"use strict";

// Real executor for the "documents.read" canonical tool. Genuinely new
// capability -- there was previously no way to get a document back after
// documents.create made it; the only access path was an unauthenticated
// static file route (server.js's /exports/:filename) with no ownership
// check at all. This queries the real, owner-scoped
// nexus/data/document-repository.js instead: input.documentId reads one
// document (only if it belongs to the caller), otherwise the caller's
// most recent documents are listed.
function createDocumentsReadExecutor({ documents }) {
  if (!documents?.get || !documents?.list) throw new Error("A document repository is required.");
  return async function execute({ input = {}, context }) {
    if (input.documentId) {
      const document = await documents.get({ tenantId: context.tenantId, ownerId: context.userId, documentId: input.documentId });
      if (!document) return { found: false, documentId: input.documentId };
      return { found: true, documentId: input.documentId, document: formatDocument(document) };
    }
    const list = await documents.list({ tenantId: context.tenantId, ownerId: context.userId, limit: input.limit || 20 });
    return { found: list.length > 0, documents: list.map(formatDocument) };
  };
}

function formatDocument(row) {
  return {
    documentId: row.document_id,
    title: row.title,
    documentType: row.document_type,
    version: row.version || null,
    downloadPath: row.object_key?.startsWith("local:") ? `/exports/${row.object_key.slice("local:".length)}` : null,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function verifyDocumentsReadOutcome({ result }) {
  // "found" can honestly be false (no such document, or an empty list) --
  // that's still a verified, correctly-executed lookup, not a failure. Only
  // an execute() that returned neither shape at all is unverified.
  const singleLookup = typeof result?.documentId === "string" && (result.found === false || (result.found === true && result.document));
  const listLookup = Array.isArray(result?.documents) && typeof result?.found === "boolean";
  const verified = Boolean(singleLookup || listLookup);
  return { verified, method: "real_document_lookup", reason: verified ? null : "document_lookup_incomplete" };
}

module.exports = Object.freeze({ createDocumentsReadExecutor, verifyDocumentsReadOutcome });
