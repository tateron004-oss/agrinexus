const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const {
  clean,
  envEnabled,
  providerResponse,
  disabledResponse,
  requireConfirmation,
  blockedResponse,
  failedResponse
} = require("./providerUtils");

function status(env = process.env) {
  return {
    provider: "nexus-local-export",
    enabled: envEnabled("NEXUS_DOCUMENT_EXPORT_ENABLED", env, true),
    storageDirConfigured: Boolean(clean(env.NEXUS_EXPORT_DIR)),
    formats: ["json", "txt", "md", "pdf", "docx"]
  };
}

function parseLines(content) {
  return String(content || "").split("\n");
}

// A pipe-delimited row: "| a | b |". A separator row ("|---|---|", with
// optional alignment colons) is markdown's own way of marking the row above
// it as a header -- recognized so it can be skipped rather than rendered as
// a nonsense row of dashes.
function isTableRow(line) {
  return /^\s*\|.*\|\s*$/.test(line);
}
function isSeparatorRow(line) {
  const cells = tableCells(line);
  return cells.length > 0 && cells.every(cell => /^:?-+:?$/.test(cell));
}
function tableCells(line) {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map(cell => cell.trim());
}
// Groups consecutive table-row lines (skipping a markdown header separator)
// into { header, body } blocks, interleaved with plain-text lines, so a
// renderer can walk one linear sequence of { type: "text"|"table", ... }
// blocks instead of re-scanning the whole document per format.
function blocksFor(content) {
  const blocks = []; const lines = parseLines(content);
  let index = 0;
  while (index < lines.length) {
    if (isTableRow(lines[index])) {
      const rows = [];
      while (index < lines.length && isTableRow(lines[index])) {
        if (!(rows.length === 1 && isSeparatorRow(lines[index]))) rows.push(tableCells(lines[index]));
        index += 1;
      }
      if (rows.length) blocks.push({ type: "table", header: rows[0], body: rows.slice(1) });
    } else {
      blocks.push({ type: "text", line: lines[index] });
      index += 1;
    }
  }
  return blocks;
}

async function renderPdfBuffer(title, content) {
  const PDFDocument = require("pdfkit");
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 54 });
    const chunks = [];
    doc.on("data", chunk => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
    doc.fontSize(18).font("Helvetica-Bold").text(title, { align: "left" });
    doc.moveDown(0.75);
    doc.font("Helvetica").fontSize(11);
    const renderTable = ({ header, body }) => {
      const columns = header.length;
      const width = doc.page.width - doc.page.margins.left - doc.page.margins.right;
      const colWidth = width / columns;
      const rowHeight = 20;
      const drawRow = (cells, bold) => {
        const y = doc.y;
        doc.font(bold ? "Helvetica-Bold" : "Helvetica");
        cells.forEach((cell, column) => doc.text(cell, doc.page.margins.left + column * colWidth, y, { width: colWidth - 6, ellipsis: true }));
        doc.y = y + rowHeight;
        doc.moveTo(doc.page.margins.left, doc.y - 4).lineTo(doc.page.margins.left + width, doc.y - 4).lineWidth(bold ? 1 : 0.5).stroke();
      };
      drawRow(header, true);
      for (const row of body) drawRow(row, false);
      doc.font("Helvetica").moveDown(0.75);
    };
    for (const block of blocksFor(content)) {
      if (block.type === "table") { renderTable(block); continue; }
      const line = block.line.trimEnd();
      if (!line.trim()) {
        doc.moveDown(0.5);
      } else if (line.startsWith("## ")) {
        doc.moveDown(0.4);
        doc.font("Helvetica-Bold").fontSize(13).text(line.slice(3));
        doc.font("Helvetica").fontSize(11);
      } else if (line.startsWith("# ")) {
        doc.moveDown(0.4);
        doc.font("Helvetica-Bold").fontSize(15).text(line.slice(2));
        doc.font("Helvetica").fontSize(11);
      } else if (line.startsWith("- ")) {
        doc.text(`• ${line.slice(2)}`, { indent: 14 });
      } else {
        doc.text(line);
      }
    }
    doc.end();
  });
}

async function renderDocxBuffer(title, content) {
  const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, ShadingType } = require("docx");
  const children = [
    new Paragraph({ text: title, heading: HeadingLevel.TITLE })
  ];
  const TABLE_WIDTH_DXA = 9000;
  const buildTable = ({ header, body }) => {
    const columnWidth = Math.floor(TABLE_WIDTH_DXA / header.length);
    const columnWidths = header.map(() => columnWidth);
    const cell = (text, bold) => new TableCell({ width: { size: columnWidth, type: WidthType.DXA },
      shading: bold ? { type: ShadingType.CLEAR, fill: "E5E5E5" } : undefined,
      children: [new Paragraph({ children: [new TextRun({ text, bold: Boolean(bold) })] })] });
    const rows = [new TableRow({ children: header.map(text => cell(text, true)) }),
      ...body.map(row => new TableRow({ children: row.map(text => cell(text, false)) }))];
    return new Table({ width: { size: TABLE_WIDTH_DXA, type: WidthType.DXA }, columnWidths, rows });
  };
  for (const block of blocksFor(content)) {
    if (block.type === "table") { children.push(buildTable(block)); continue; }
    const line = block.line.trimEnd();
    if (!line.trim()) {
      children.push(new Paragraph({ text: "" }));
    } else if (line.startsWith("## ")) {
      children.push(new Paragraph({ text: line.slice(3), heading: HeadingLevel.HEADING_2 }));
    } else if (line.startsWith("# ")) {
      children.push(new Paragraph({ text: line.slice(2), heading: HeadingLevel.HEADING_1 }));
    } else if (line.startsWith("- ")) {
      children.push(new Paragraph({ text: line.slice(2), bullet: { level: 0 } }));
    } else {
      children.push(new Paragraph({ children: [new TextRun(line)] }));
    }
  }
  const doc = new Document({ sections: [{ children }] });
  return Packer.toBuffer(doc);
}

async function exportDocument(body = {}, env = process.env) {
  const provider = "nexus-local-export";
  const action = "document.export";
  if (!envEnabled("NEXUS_DOCUMENT_EXPORT_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_DOCUMENT_EXPORT_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const title = clean(body.title || "Nexus export");
  const content = clean(body.content || body.text || body.command);
  const format = clean(body.format || "txt").toLowerCase();
  if (!content) return blockedResponse(provider, action, "Export content is required.");
  if (!["json", "txt", "md", "pdf", "docx"].includes(format)) return blockedResponse(provider, action, "Only json, txt, md, pdf, and docx exports are currently enabled.");
  try {
    const root = path.resolve(clean(env.NEXUS_EXPORT_DIR || path.join(process.cwd(), "output", "nexus-exports")));
    fs.mkdirSync(root, { recursive: true });
    const id = crypto.randomUUID();
    const filename = `${id}.${format}`;
    const filePath = path.join(root, filename);
    let payload;
    if (format === "pdf") {
      payload = await renderPdfBuffer(title, content);
    } else if (format === "docx") {
      payload = await renderDocxBuffer(title, content);
    } else if (format === "json") {
      payload = JSON.stringify({ id, title, content, createdAt: new Date().toISOString(), source: "nexus-openai-native" }, null, 2);
    } else {
      payload = `# ${title}\n\n${content}\n`;
    }
    fs.writeFileSync(filePath, payload);
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: `Document export created as a real ${format.toUpperCase()} file in the configured Nexus export store.`,
      data: { exportId: id, filename, format, bytes: Buffer.byteLength(payload), downloadPath: `/exports/${filename}`, localPath: filePath }
    });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

// renderPdfBuffer/renderDocxBuffer are exported for reuse by nexus/business's
// invoice generator (and future document-template tools) so table rendering
// and print styling stay in one place rather than being reimplemented per
// caller.
module.exports = { status, exportDocument, renderPdfBuffer, renderDocxBuffer };
