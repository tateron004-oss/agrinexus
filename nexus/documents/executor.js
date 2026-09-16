"use strict";

// Real executor for the "documents.create" canonical tool, wiring the
// authoritative task engine to server/providers/exportProvider.js's
// exportDocument() (already hardened for path traversal: strict format
// allowlist checked before the path is built, UUID filenames, and the
// download route re-validates against the export root) instead of the
// scripts/provider-engines.js mock.
const exportProvider = require("../../server/providers/exportProvider.js");

function createDocumentsCreateExecutor({ env = process.env } = {}) {
  return async function execute({ input = {} }) {
    const body = {
      confirmed: true,
      title: input.title || "Nexus document",
      content: input.content || input.text || input.command || "",
      format: String(input.format || "txt").toLowerCase()
    };
    const result = await exportProvider.exportDocument(body, env);
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
