"use strict";

// Designed Word (.docx) and PDF versions of a flyer, poster, newsletter, invitation, brochure (or handout, schedule): a coloured banner with a big white headline, a details table, a boxed call to action, a small-print footer.
// Made with the `docx` and `pdfkit` libraries already in the app, from shapes, colour and type only: no pictures from the web (they may be copyrighted) and no headless browser.
//
// The TEXT stays the document: designDocx/designPdf are given the same plain text that "Save changes" edits, and read the design out of it again every time (the first line is the headline, "When: ..." lines become the details table,
// a short line followed by sentences becomes a section heading, "Questions? ..." becomes the call-to-action box). Only the design KIND (flyer, newsletter, ...) is remembered with the document. Every [bracket] stays visible and is highlighted
// in light yellow, so a blank cannot be missed and printed by mistake.
//
// designKind(x) -> "flyer"|"poster"|"newsletter"|"invitation"|"brochure"|"schedule"|""
// parseDesign(kind, title, text) -> the layout read out of the text (an object, see the end of parseDesign)
// renderDesignDocx(kind, title, text) / renderDesignPdf(kind, title, text) -> Promise<Buffer>

const DESIGN_KINDS = Object.freeze(["flyer", "poster", "newsletter", "invitation", "brochure", "schedule"]);
// the words the person (or the planner) may use for a kind, and the design each gets
const KIND_ALIASES = Object.freeze({ handout: "brochure", email: "flyer", "promotional email": "flyer", "promo email": "flyer", "meal plan": "schedule", "study schedule": "schedule", "work schedule": "schedule" });

// A small, safe palette: every main colour carries white text at WCAG AA or better, and every tint carries dark text.
const PALETTE = Object.freeze([
  Object.freeze({ name: "green", main: "166534", tint: "DCFCE7" }),
  Object.freeze({ name: "blue", main: "1D4ED8", tint: "DBEAFE" }),
  Object.freeze({ name: "orange", main: "C2410C", tint: "FFEDD5" }),
  Object.freeze({ name: "purple", main: "6D28D9", tint: "EDE9FE" }),
  Object.freeze({ name: "red", main: "B91C1C", tint: "FEE2E2" })
]);
const HIGHLIGHT = "FFF59D";
const INK = "111111";
const LABEL_INK = "1F2937";
const GREY = "595959";
const RULE = "D1D5DB";

function designKind(value) {
  const word = String(value || "").trim().toLowerCase();
  if (DESIGN_KINDS.includes(word)) return word;
  return KIND_ALIASES[word] || "";
}

// The same words always get the same colour (a hash of the letters of the headline), so editing a [blank] never changes it and re-downloading gives the same document.
function accentFor(seed) {
  const letters = String(seed || "").toLowerCase().replace(/\[[^\]]*\]/g, "").replace(/[^a-z]/g, "");
  let hash = 7;
  for (let index = 0; index < letters.length; index += 1) hash = (hash * 31 + letters.charCodeAt(index)) >>> 0;
  return PALETTE[hash % PALETTE.length];
}

// [bracket] spans and the plain text between them
function segments(text) {
  const out = []; const source = String(text || ""); const pattern = /\[[^\]\n]*\]/g;
  let last = 0; let match;
  while ((match = pattern.exec(source))) {
    if (match.index > last) out.push({ text: source.slice(last, match.index), blank: false });
    out.push({ text: match[0], blank: true });
    last = match.index + match[0].length;
  }
  if (last < source.length) out.push({ text: source.slice(last), blank: false });
  return out;
}
const hasBlank = text => /\[[^\]\n]*\]/.test(String(text || ""));

// ---------- reading the layout out of the text ----------
const LABELED = /^([A-Za-z][A-Za-z0-9 '’/&-]{0,28}?)\s*:\s+(\S.*)$/;
const CTA_LINE = /^(?:questions\s*\?|please tell us\b|rsvp\b|to book\b|call (?:us|now)\b)/i;
const DATES_HEADING = /\b(?:dates?|calendar|coming up|diary|events)\b/i;
const CONTACT_HEADING = /\b(?:reach us|contact|get in touch|find us)\b/i;

function isHeadingLine(line) {
  if (!line || line.length > 40) return false;
  if (/[[\]|]/.test(line) || /[.!?:,;]$/.test(line) || line.includes(":") || /^(?:[-*•]|\d+[.)])\s/.test(line)) return false;
  return line.split(/\s+/).length <= 6;
}
const isPipeRow = line => /^\s*\|.*\|\s*$/.test(line);
const pipeCells = line => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(cell => cell.trim());

function parseItems(lines) {
  const items = []; let index = 0;
  while (index < lines.length) {
    const line = lines[index]; let match;
    if (isPipeRow(line)) {
      const rows = [];
      while (index < lines.length && isPipeRow(lines[index])) {
        const cells = pipeCells(lines[index]);
        if (!(rows.length === 1 && cells.every(cell => /^:?-+:?$/.test(cell)))) rows.push(cells);
        index += 1;
      }
      if (rows.length) items.push({ type: "table", header: rows[0], body: rows.slice(1) });
      continue;
    }
    if ((match = /^[-*•]\s+(.*)$/.exec(line))) items.push({ type: "bullet", text: match[1] });
    else if (CTA_LINE.test(line)) items.push({ type: "text", text: line, cta: true });
    else if ((match = LABELED.exec(line))) items.push({ type: "row", label: match[1].trim(), value: match[2].trim() });
    else items.push({ type: "text", text: line });
    index += 1;
  }
  return items;
}

function parseDesign(kind, title, text) {
  const layout = designKind(kind) || "flyer";
  const blocks = []; let current = [];
  for (const raw of String(text || "").replace(/\r/g, "").split("\n")) {
    const line = raw.trim();
    if (!line) { if (current.length) blocks.push(current); current = []; } else current.push(line);
  }
  if (current.length) blocks.push(current);
  let footer = "";
  if (blocks.length && /^made by kyro/i.test(blocks[blocks.length - 1][0])) footer = blocks.pop().join(" ");
  const first = blocks.shift() || [];
  const unhash = line => String(line || "").replace(/^#{1,3}\s+/, "").trim();
  let kicker = ""; let headline = unhash(first[0]); let subhead = ""; let rest = first.slice(1).map(unhash);
  if (/^you are invited\b/i.test(headline)) {
    kicker = headline;
    if (rest.length) { headline = rest[0]; rest = rest.slice(1); } else if (blocks.length) { const next = blocks.shift(); headline = unhash(next[0]); rest = next.slice(1); }
  } else if (/^subject\s*:/i.test(headline)) {
    kicker = "Promotional email"; headline = headline.replace(/^subject\s*:\s*/i, "").trim();
  }
  if (!headline) headline = String(title || "").trim() || "Untitled";
  // a line straight under the headline (no blank line between) is the sub-heading or issue line, unless it is a "Label: value" line, which belongs to the details
  if (rest.length && !LABELED.test(rest[0]) && !CTA_LINE.test(rest[0]) && !/^[-*•]\s/.test(rest[0])) { subhead = rest[0]; rest = rest.slice(1); }
  const sections = [];
  const addBlock = lines => {
    if (!lines.length) return;
    let heading = ""; let body = lines;
    if (/^#{1,3}\s+/.test(lines[0])) { heading = unhash(lines[0]); body = lines.slice(1); }
    else if (lines.length >= 2 && isHeadingLine(lines[0])) { heading = lines[0]; body = lines.slice(1); }
    const section = { heading, items: parseItems(body) };
    if (heading && layout === "newsletter" && DATES_HEADING.test(heading)) section.dates = true;
    if (heading && CONTACT_HEADING.test(heading) && ["newsletter", "brochure"].includes(layout)) section.contact = true;
    sections.push(section);
  };
  if (rest.length) addBlock(rest);
  for (const block of blocks) addBlock(block);
  let cta = "";
  for (const section of sections) {
    const found = section.items.findIndex(item => item.cta);
    if (!cta && found >= 0 && !["newsletter", "brochure"].includes(layout)) { cta = section.items[found].text; section.items.splice(found, 1); }
  }
  const live = sections.filter(section => section.heading || section.items.length);
  if (!subhead && (layout === "flyer" || layout === "poster")) {
    for (const section of live) {
      const row = section.items.find(item => item.type === "row" && /^(?:when|date|date and time)$/i.test(item.label) && !hasBlank(item.value));
      if (row) { subhead = row.value; break; }
    }
  }
  const accent = accentFor(headline);
  return { kind: layout, layout, title: String(title || headline), accent, kicker, headline, subhead, sections: live, cta, footer };
}

// ---------- Word ----------
function headlinePt(layout, length) {
  const steps = layout === "poster" ? [[8, 84], [12, 68], [18, 54], [28, 42], [44, 34]]
    : layout === "invitation" ? [[10, 60], [16, 48], [26, 40], [44, 32]]
    : layout === "newsletter" || layout === "brochure" || layout === "schedule" ? [[14, 48], [24, 40], [40, 34]]
    : [[10, 66], [16, 54], [26, 44], [40, 36]];
  for (const [max, pt] of steps) if (length <= max) return pt;
  return 28;
}

async function renderDesignDocx(kind, title, text) {
  const ir = parseDesign(kind, title, text);
  const docx = require("docx");
  const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, AlignmentType, VerticalAlign, PageBorderDisplay, PageBorderOffsetFrom, TableLayoutType } = docx;
  const { layout, accent } = ir;
  const font = layout === "invitation" ? "Georgia" : "Arial";
  const WIDTH = layout === "invitation" ? 9648 : 10512; // the text width between the margins: the invitation's margins are wider (room for its frame), so a full-width box stuck out past the frame (seen in Word, 5 Nov 2026)
  const centred = layout === "flyer" || layout === "poster" || layout === "invitation";
  const alignment = centred ? AlignmentType.CENTER : AlignmentType.LEFT;
  const bodySize = layout === "poster" ? 32 : layout === "invitation" ? 28 : layout === "flyer" ? 26 : 24; // half-points: 24 = 12 pt
  const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  const noBorders = { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };
  const shade = fill => ({ type: ShadingType.CLEAR, fill, color: "auto" });

  // a [bracket] is dark on light yellow, whatever it sits on
  const runs = (value, o = {}) => segments(value).map(piece => new TextRun({ text: piece.text, font, size: o.size || bodySize, bold: Boolean(o.bold), italics: Boolean(o.italics),
    color: piece.blank ? INK : (o.color || INK), characterSpacing: o.spacing, shading: piece.blank ? shade(HIGHLIGHT) : undefined }));
  const para = (value, o = {}) => new Paragraph({ alignment: o.align, keepNext: o.keepNext, border: o.border, indent: o.indent, spacing: { before: o.before || 0, after: o.after === undefined ? 120 : o.after }, children: runs(value, o) });
  const cell = (children, o = {}) => new TableCell({ width: { size: o.width || WIDTH, type: WidthType.DXA }, columnSpan: o.span, shading: o.fill ? shade(o.fill) : undefined, verticalAlign: VerticalAlign.CENTER, borders: o.borders,
    margins: { top: o.top === undefined ? 100 : o.top, bottom: o.bottom === undefined ? 100 : o.bottom, left: o.left === undefined ? 160 : o.left, right: o.right === undefined ? 160 : o.right }, children });
  const table = (rows, widths) => new Table({ width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: widths, layout: TableLayoutType.FIXED, borders: noBorders, rows });
  // (an empty paragraph is a line of the body size, so the extra space after it is small)
  const gap = (after = 60) => new Paragraph({ spacing: { before: 0, after } });
  const lineBelow = (color, size = 12) => ({ bottom: { style: BorderStyle.SINGLE, size, color, space: 2 } });
  const thick = color => ({ style: BorderStyle.SINGLE, size: 24, color });

  const children = [];
  // the banner (flyer, poster, newsletter, brochure, schedule): the big white headline on the accent colour
  const pt = headlinePt(layout, ir.headline.length);
  if (layout !== "invitation") {
    const inside = [];
    if (ir.kicker) inside.push(para(ir.kicker.toUpperCase(), { size: 26, bold: true, color: "FFFFFF", spacing: 40, after: 60, align: alignment }));
    inside.push(para(ir.headline, { size: pt * 2, bold: true, color: "FFFFFF", after: 0, align: alignment }));
    if (ir.subhead && !centred) inside.push(para(ir.subhead, { size: 28, color: "FFFFFF", before: 80, after: 0, align: alignment }));
    children.push(table([new TableRow({ children: [cell(inside, { fill: accent.main, top: 380, bottom: 380, left: 360, right: 360 })] })], [WIDTH]));
    if (ir.subhead && centred) children.push(para(ir.subhead, { size: layout === "poster" ? 44 : 34, bold: true, color: accent.main, before: 240, after: 120, align: alignment }));
    else children.push(gap(60));
  } else {
    children.push(gap(360));
    if (ir.kicker) children.push(para(ir.kicker.toUpperCase(), { size: 28, bold: true, color: accent.main, spacing: 80, after: 160, align: alignment }));
    children.push(para(ir.headline, { size: pt * 2, bold: true, color: accent.main, after: 160, align: alignment }));
    children.push(para("", { after: 240, align: alignment, indent: { left: 3200, right: 3200 }, border: lineBelow(accent.main, 18) }));
    if (ir.subhead) children.push(para(ir.subhead, { size: 30, italics: true, after: 200, align: alignment }));
  }

  const rowsTable = rows => table(rows.map(row => new TableRow({ children: [
    cell([para(row.label, { size: bodySize, bold: true, color: LABEL_INK, after: 0 })], { width: 3000, fill: accent.tint, borders: { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE }, top: none, left: none, right: none } }),
    cell([para(row.value, { size: bodySize, after: 0 })], { width: WIDTH - 3000, borders: { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE }, top: none, left: none, right: none } })
  ] })), [3000, WIDTH - 3000]);
  const gridTable = (header, body) => {
    const columns = Math.max(header.length, 1); const widths = header.map(() => Math.floor(WIDTH / columns));
    const edge = { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE }, top: none, left: none, right: none };
    return table([new TableRow({ tableHeader: true, children: header.map((text, index) => cell([para(text, { size: bodySize, bold: true, color: "FFFFFF", after: 0 })], { width: widths[index], fill: accent.main })) }),
      ...body.map(row => new TableRow({ children: header.map((_, index) => cell([para(row[index] || "", { size: bodySize, after: 0 })], { width: widths[index], borders: edge })) }))], widths);
  };
  const datesTable = items => {
    const left = Math.floor(WIDTH * 0.32); const right = WIDTH - left; const edge = { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE }, top: none, left: none, right: none };
    const rows = [new TableRow({ tableHeader: true, children: [cell([para("Date", { size: bodySize, bold: true, color: "FFFFFF", after: 0 })], { width: left, fill: accent.main }), cell([para("What is happening", { size: bodySize, bold: true, color: "FFFFFF", after: 0 })], { width: right, fill: accent.main })] })];
    for (const item of items) {
      if (item.type === "row") rows.push(new TableRow({ children: [cell([para(item.label, { size: bodySize, bold: true, after: 0 })], { width: left, borders: edge, fill: accent.tint }), cell([para(item.value, { size: bodySize, after: 0 })], { width: right, borders: edge })] }));
      else {
        const line = item.text || ""; const split = /^(.{1,40}?)\s+[-–—]\s+(.+)$/.exec(line);
        if (split) rows.push(new TableRow({ children: [cell([para(split[1], { size: bodySize, bold: true, after: 0 })], { width: left, borders: edge, fill: accent.tint }), cell([para(split[2], { size: bodySize, after: 0 })], { width: right, borders: edge })] }));
        else rows.push(new TableRow({ children: [cell([para(line, { size: bodySize, after: 0 })], { width: WIDTH, span: 2, borders: edge })] }));
      }
    }
    return table(rows, [left, right]);
  };
  const centredRows = rows => rows.flatMap(row => [para(row.label.toUpperCase(), { size: 22, bold: true, color: accent.main, spacing: 60, before: 240, after: 40, align: alignment, keepNext: true }), para(row.value, { size: 32, after: 80, align: alignment })]);
  const itemText = item => item.type === "row" ? `${item.label}: ${item.value}` : item.type === "bullet" ? `• ${item.text}` : item.text;

  for (const section of ir.sections) {
    if (section.heading) {
      children.push(para(section.heading, { size: layout === "poster" ? 40 : 32, bold: true, color: accent.main, before: 280, after: 120, keepNext: true, align: centred ? alignment : undefined, border: layout === "invitation" ? undefined : lineBelow(accent.main) }));
    }
    if (section.dates) { children.push(datesTable(section.items), gap(60)); continue; }
    if (section.contact) {
      const inside = section.items.map(item => para(itemText(item), { size: bodySize, after: 80 }));
      children.push(table([new TableRow({ children: [cell(inside.length ? inside : [para("", { after: 0 })], { fill: accent.tint, top: 200, bottom: 160, left: 280, right: 280, borders: { left: { style: BorderStyle.SINGLE, size: 36, color: accent.main }, top: none, bottom: none, right: none } })] })], [WIDTH]), gap(60));
      continue;
    }
    let pending = [];
    const flush = () => {
      if (!pending.length) return;
      if (layout === "invitation") children.push(...centredRows(pending)); else children.push(rowsTable(pending), gap(60));
      pending = [];
    };
    for (const item of section.items) {
      if (item.type === "row") { pending.push(item); continue; }
      flush();
      if (item.type === "table") children.push(gridTable(item.header, item.body), gap(60));
      else if (item.type === "bullet") children.push(new Paragraph({ bullet: { level: 0 }, alignment: centred ? alignment : undefined, spacing: { before: 0, after: 100 }, children: runs(item.text) }));
      else children.push(para(item.text, { size: bodySize, after: 140, align: alignment, italics: layout === "invitation" }));
    }
    flush();
  }

  if (ir.cta) {
    children.push(gap(120));
    children.push(table([new TableRow({ children: [cell([para(ir.cta, { size: layout === "poster" ? 40 : 32, bold: true, after: 0, align: AlignmentType.CENTER })], { fill: accent.tint, top: 260, bottom: 260, left: 280, right: 280,
      borders: { top: thick(accent.main), bottom: thick(accent.main), left: thick(accent.main), right: thick(accent.main) } })] })], [WIDTH]));
  }
  if (ir.footer) children.push(para(ir.footer, { size: 18, color: GREY, before: 480, after: 0, align: alignment, border: { top: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 6 } } }));
  if (!children.length) children.push(gap());

  const page = { size: { width: 12240, height: 15840 }, margin: { top: 720, right: 864, bottom: 720, left: 864 } };
  if (layout === "invitation") {
    const side = { style: BorderStyle.DOUBLE, size: 18, color: accent.main, space: 24 };
    page.borders = { pageBorders: { display: PageBorderDisplay.ALL_PAGES, offsetFrom: PageBorderOffsetFrom.PAGE }, pageBorderTop: side, pageBorderRight: side, pageBorderBottom: side, pageBorderLeft: side };
    page.margin = { top: 1080, right: 1296, bottom: 1080, left: 1296 };
  }
  const doc = new Document({ creator: "Kyro", title: ir.title, description: `Designed ${layout}`,
    styles: { default: { document: { run: { font, size: 24 } } } }, sections: [{ properties: { page }, children }] });
  return Packer.toBuffer(doc);
}

// ---------- PDF ----------
// pdfkit's built-in fonts cover Latin text only; anything else would print as garbage, so it prints as "?" instead
const pdfSafe = value => String(value || "").replace(/[^ -~ -ÿ‘’“”–—•…€]/g, "?");
const hex = value => `#${value}`;

function renderDesignPdf(kind, title, text) {
  const ir = parseDesign(kind, title, text);
  const PDFDocument = require("pdfkit");
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: "LETTER", margin: 0, info: { Title: pdfSafe(ir.title).slice(0, 120), Creator: "Kyro", Subject: `Designed ${ir.layout}` } });
      const chunks = [];
      doc.on("data", chunk => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);
      drawPdf(doc, ir);
      doc.end();
    } catch (error) { reject(error); }
  });
}

function drawPdf(doc, ir) {
  const { layout, accent } = ir;
  const PAGE_W = 612; const PAGE_H = 792; const M = 46; const CW = PAGE_W - 2 * M; const LIMIT = PAGE_H - 50;
  const serif = layout === "invitation";
  const F = serif ? { reg: "Times-Roman", bold: "Times-Bold", ital: "Times-Italic" } : { reg: "Helvetica", bold: "Helvetica-Bold", ital: "Helvetica-Oblique" };
  const centred = layout === "flyer" || layout === "poster" || layout === "invitation";
  const align = centred ? "center" : "left";
  const bodySize = layout === "poster" ? 17 : layout === "invitation" ? 15 : layout === "flyer" ? 13.5 : 12;
  const ctx = { y: 0 };
  const ensure = height => { if (ctx.y + height > LIMIT) { doc.addPage(); ctx.y = M; } };

  // the words of a line, with the [bracket] spans marked
  const wrap = (value, font, size, width) => {
    doc.font(font).fontSize(size);
    const tokens = [];
    for (const piece of segments(pdfSafe(value))) for (const part of piece.text.split(/(\s+)/)) if (part) tokens.push({ t: part, blank: piece.blank, space: /^\s+$/.test(part) });
    const lines = []; let line = []; let used = 0;
    const close = () => { while (line.length && line[line.length - 1].space) line.pop(); if (line.length) lines.push(line); line = []; used = 0; };
    for (const token of tokens) {
      const w = doc.widthOfString(token.t);
      if (token.space) { if (line.length) { line.push(token); used += w; } continue; }
      if (line.length && used + w > width) { close(); }
      line.push(token); used += w;
    }
    close();
    return lines.length ? lines : [[]];
  };
  const drawLine = (line, x, y, o) => {
    const runs = [];
    for (const token of line) { const last = runs[runs.length - 1]; if (last && last.blank === token.blank) last.text += token.t; else runs.push({ text: token.t, blank: token.blank }); }
    doc.font(o.font).fontSize(o.size);
    const total = runs.reduce((sum, run) => sum + doc.widthOfString(run.text), 0);
    let cx = o.align === "center" ? x + (o.width - total) / 2 : x;
    for (const run of runs) {
      const w = doc.widthOfString(run.text);
      if (run.blank) doc.rect(cx - 1.5, y - 1, w + 3, o.size * 1.22).fill(hex(HIGHLIGHT));
      doc.fillColor(run.blank ? hex(INK) : hex(o.color || INK)).text(run.text, cx, y, { lineBreak: false });
      cx += w;
    }
  };
  const paragraph = (value, x, width, o) => {
    const lh = o.size * 1.3;
    for (const line of wrap(value, o.font, o.size, width)) { ensure(lh); drawLine(line, x, ctx.y, { ...o, width }); ctx.y += lh; }
    ctx.y += o.after === undefined ? 6 : o.after;
  };
  const fit = (value, font, sizes, width, maxLines) => {
    for (const size of sizes) if (wrap(value, font, size, width).length <= maxLines) return size;
    return sizes[sizes.length - 1];
  };
  const fillRect = (x, y, w, h, color) => { doc.rect(x, y, w, h).fill(hex(color)); };

  // ----- masthead -----
  if (layout !== "invitation") {
    const sizes = layout === "poster" ? [86, 74, 64, 54, 46, 40, 34, 30] : centred ? [64, 56, 48, 42, 36, 32, 28] : [48, 42, 38, 34, 30, 28];
    // two lines if a size of 40 or more makes it fit, else the largest size that fits in three
    const twoLines = sizes.filter(candidate => candidate >= 40).find(candidate => wrap(ir.headline, F.bold, candidate, CW - 20).length <= 2);
    const size = twoLines || fit(ir.headline, F.bold, sizes, CW - 20, layout === "poster" ? 3 : 2);
    const lh = size * 1.18; const headLines = wrap(ir.headline, F.bold, size, CW - 20);
    const subLines = ir.subhead && !centred ? wrap(ir.subhead, F.reg, 15, CW - 20) : [];
    const height = 38 + (ir.kicker ? 24 : 0) + headLines.length * lh + (subLines.length ? 10 + subLines.length * 20 : 0) + 24;
    fillRect(0, 0, PAGE_W, height, accent.main);
    ctx.y = 38;
    if (ir.kicker) { drawLine(wrap(ir.kicker.toUpperCase(), F.bold, 12, CW)[0], M, ctx.y, { font: F.bold, size: 12, color: "FFFFFF", align, width: CW }); ctx.y += 24; }
    for (const line of headLines) { drawLine(line, M, ctx.y, { font: F.bold, size, color: "FFFFFF", align, width: CW }); ctx.y += lh; }
    if (subLines.length) { ctx.y += 10; for (const line of subLines) { drawLine(line, M, ctx.y, { font: F.reg, size: 15, color: "FFFFFF", align, width: CW }); ctx.y += 20; } }
    ctx.y = height + 18;
    if (ir.subhead && centred) paragraph(ir.subhead, M, CW, { font: F.bold, size: layout === "poster" ? 26 : 19, color: accent.main, align, after: 10 });
  } else {
    // a double frame, then everything centred
    doc.lineWidth(3).strokeColor(hex(accent.main)).rect(26, 26, PAGE_W - 52, PAGE_H - 52).stroke();
    doc.lineWidth(1).strokeColor(hex(accent.main)).rect(33, 33, PAGE_W - 66, PAGE_H - 66).stroke();
    ctx.y = 110;
    if (ir.kicker) { paragraph(ir.kicker.toUpperCase(), M + 20, CW - 40, { font: F.bold, size: 15, color: accent.main, align, after: 14 }); }
    const size = fit(ir.headline, F.bold, [60, 52, 46, 40, 34, 30], CW - 60, 3);
    paragraph(ir.headline, M + 20, CW - 40, { font: F.bold, size, color: accent.main, align, after: 14 });
    fillRect(PAGE_W / 2 - 70, ctx.y, 140, 2.5, accent.main); ctx.y += 26;
    if (ir.subhead) paragraph(ir.subhead, M + 20, CW - 40, { font: F.ital, size: 17, align, after: 12 });
  }

  // ----- body -----
  const itemText = item => item.type === "row" ? `${item.label}: ${item.value}` : item.type === "bullet" ? `• ${item.text}` : item.text;
  const rowsPdf = rows => {
    const labelW = Math.min(150, CW * 0.3); const lh = bodySize * 1.3;
    for (const row of rows) {
      const L = wrap(row.label, F.bold, bodySize, labelW - 18); const V = wrap(row.value, F.reg, bodySize, CW - labelW - 20);
      const h = Math.max(L.length, V.length) * lh + 14; ensure(h);
      fillRect(M, ctx.y, labelW, h, accent.tint);
      L.forEach((line, index) => drawLine(line, M + 9, ctx.y + 7 + index * lh, { font: F.bold, size: bodySize, color: LABEL_INK, align: "left", width: labelW - 18 }));
      V.forEach((line, index) => drawLine(line, M + labelW + 10, ctx.y + 7 + index * lh, { font: F.reg, size: bodySize, align: "left", width: CW - labelW - 20 }));
      doc.lineWidth(0.6).strokeColor(hex(RULE)).moveTo(M, ctx.y + h).lineTo(M + CW, ctx.y + h).stroke();
      ctx.y += h;
    }
    ctx.y += 12;
  };
  const centredRowsPdf = rows => {
    for (const row of rows) {
      paragraph(row.label.toUpperCase(), M + 20, CW - 40, { font: F.bold, size: 11.5, color: accent.main, align, after: 2 });
      paragraph(row.value, M + 20, CW - 40, { font: F.reg, size: 19, align, after: 10 });
    }
  };
  const gridPdf = (header, body, widths, headerFills) => {
    const lh = bodySize * 1.3; const xs = widths.reduce((acc, w, index) => { acc.push(index ? acc[index - 1] + widths[index - 1] : M); return acc; }, []);
    const drawRow = (cells, o) => {
      const lines = cells.map((text, index) => wrap(text.text, o.header || text.bold ? F.bold : F.reg, bodySize, (text.span ? CW : widths[index]) - 16));
      const h = Math.max(...lines.map(l => l.length)) * lh + 12; ensure(h);
      cells.forEach((cellValue, index) => {
        const w = cellValue.span ? CW : widths[index];
        if (o.header) fillRect(xs[index], ctx.y, w, h, accent.main); else if (cellValue.fill) fillRect(xs[index], ctx.y, w, h, accent.tint);
        lines[index].forEach((line, n) => drawLine(line, xs[index] + 8, ctx.y + 6 + n * lh, { font: o.header || cellValue.bold ? F.bold : F.reg, size: bodySize, color: o.header ? "FFFFFF" : INK, align: "left", width: w - 16 }));
      });
      if (!o.header) doc.lineWidth(0.6).strokeColor(hex(RULE)).moveTo(M, ctx.y + h).lineTo(M + CW, ctx.y + h).stroke();
      ctx.y += h;
    };
    if (header) drawRow(header.map(text => ({ text })), { header: true });
    for (const row of body) drawRow(row, {});
    ctx.y += 12;
  };
  const datesPdf = items => {
    const left = Math.floor(CW * 0.32);
    const rows = items.map(item => {
      if (item.type === "row") return [{ text: item.label, bold: true, fill: true }, { text: item.value }];
      const split = /^(.{1,40}?)\s+[-–—]\s+(.+)$/.exec(item.text || "");
      return split ? [{ text: split[1], bold: true, fill: true }, { text: split[2] }] : [{ text: item.text || "", span: true }];
    });
    gridPdf(["Date", "What is happening"], rows, [left, CW - left]);
  };

  for (const section of ir.sections) {
    if (section.heading) {
      const size = layout === "poster" ? 22 : 17;
      ensure(size * 1.3 + 30);
      ctx.y += 8;
      paragraph(section.heading, M, CW, { font: F.bold, size, color: accent.main, align: centred ? align : "left", after: 3 });
      if (layout !== "invitation") { fillRect(M, ctx.y, CW, 1.8, accent.main); ctx.y += 10; }
    }
    if (section.dates) { datesPdf(section.items); continue; }
    if (section.contact) {
      const lines = section.items.flatMap(item => wrap(itemText(item), F.reg, bodySize, CW - 44).concat([null]));
      const lh = bodySize * 1.3; const h = lines.reduce((sum, line) => sum + (line ? lh : 5), 0) + 26; ensure(h);
      fillRect(M, ctx.y, CW, h, accent.tint); fillRect(M, ctx.y, 6, h, accent.main);
      let y = ctx.y + 13;
      for (const line of lines) { if (line) { drawLine(line, M + 22, y, { font: F.reg, size: bodySize, align: "left", width: CW - 44 }); y += lh; } else y += 5; }
      ctx.y += h + 12;
      continue;
    }
    let pending = [];
    const flush = () => { if (!pending.length) return; if (layout === "invitation") centredRowsPdf(pending); else rowsPdf(pending); pending = []; };
    for (const item of section.items) {
      if (item.type === "row") { pending.push(item); continue; }
      flush();
      if (item.type === "table") {
        const widths = item.header.map(() => CW / Math.max(item.header.length, 1));
        gridPdf(item.header, item.body.map(row => item.header.map((_, index) => ({ text: row[index] || "" }))), widths);
      } else if (item.type === "bullet") paragraph(`• ${item.text}`, M + 8, CW - 8, { font: F.reg, size: bodySize, align: "left", after: 5 });
      else paragraph(item.text, centred ? M + 10 : M, centred ? CW - 20 : CW, { font: layout === "invitation" ? F.ital : F.reg, size: layout === "invitation" ? 17 : bodySize, align, after: 7 });
    }
    flush();
  }

  if (ir.cta) {
    const size = layout === "poster" ? 22 : 17; const lines = wrap(ir.cta, F.bold, size, CW - 56); const lh = size * 1.3; const h = lines.length * lh + 36;
    ctx.y += 8; ensure(h);
    doc.lineWidth(3).rect(M, ctx.y, CW, h).fillAndStroke(hex(accent.tint), hex(accent.main));
    lines.forEach((line, index) => drawLine(line, M + 28, ctx.y + 18 + index * lh, { font: F.bold, size, align: "center", width: CW - 56 }));
    ctx.y += h + 10;
  }
  if (ir.footer) {
    const lines = wrap(ir.footer, F.reg, 9, CW); const h = lines.length * 12 + 14;
    if (ctx.y + h + 14 > LIMIT) { doc.addPage(); ctx.y = M; }
    ctx.y = Math.max(ctx.y + 14, LIMIT - h + 8);
    doc.lineWidth(0.6).strokeColor(hex(RULE)).moveTo(M, ctx.y).lineTo(M + CW, ctx.y).stroke();
    lines.forEach((line, index) => drawLine(line, M, ctx.y + 8 + index * 12, { font: F.reg, size: 9, color: GREY, align, width: CW }));
  }
}

module.exports = Object.freeze({ DESIGN_KINDS, PALETTE, designKind, accentFor, parseDesign, renderDesignDocx, renderDesignPdf });
