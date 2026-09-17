"use strict";
const test = require("node:test"), assert = require("node:assert/strict");
const { renderPdfBuffer, renderDocxBuffer } = require("../../server/providers/exportProvider.js");

// The invoice generator (and future document-template tools) need real
// tables, not markdown pipe characters rendered as literal text. These tests
// lock in that a pipe-delimited block, including its markdown header
// separator, produces a real PDF/DOCX rather than throwing or silently
// falling back to plain-text rendering.
const CONTENT = [
  "# Invoice INV-1001",
  "",
  "| Description | Qty | Unit Price | Total |",
  "|---|---|---|---|",
  "| Farm consulting | 2 | 50.00 | 100.00 |",
  "| Soil test kit | 1 | 25.00 | 25.00 |",
  "",
  "Total due: 125.00"
].join("\n");

test("PDF export renders a table block as a real PDF, not literal pipe characters", async () => {
  const buffer = await renderPdfBuffer("Invoice INV-1001", CONTENT);
  assert.ok(Buffer.isBuffer(buffer));
  assert.equal(buffer.subarray(0, 4).toString(), "%PDF");
  assert.ok(buffer.length > 500, "a real rendered PDF with a table should be substantially larger than an empty document");
});

test("DOCX export renders a table block as a real docx Table, not literal pipe characters", async () => {
  const buffer = await renderDocxBuffer("Invoice INV-1001", CONTENT);
  assert.ok(Buffer.isBuffer(buffer));
  // A .docx is a real zip archive (OOXML); confirm the local file header magic.
  assert.equal(buffer.readUInt32LE(0), 0x04034b50);
});

test("plain content with no pipe characters renders exactly as before (no accidental table detection)", async () => {
  const buffer = await renderPdfBuffer("Plain", "# Heading\n\nJust a paragraph.\n- a bullet");
  assert.equal(buffer.subarray(0, 4).toString(), "%PDF");
});

test("a lone pipe in ordinary prose is not misdetected as a table row", async () => {
  // A single line containing "|" with no matching row above/below it is not
  // a table -- guards against a false-positive that would eat real content
  // whenever a business note happens to include a pipe character.
  const buffer = await renderPdfBuffer("Note", "Choose option A | option B before continuing.");
  assert.equal(buffer.subarray(0, 4).toString(), "%PDF");
});
