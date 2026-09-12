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
    for (const rawLine of parseLines(content)) {
      const line = rawLine.trimEnd();
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
  const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require("docx");
  const children = [
    new Paragraph({ text: title, heading: HeadingLevel.TITLE })
  ];
  for (const rawLine of parseLines(content)) {
    const line = rawLine.trimEnd();
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

module.exports = { status, exportDocument };
