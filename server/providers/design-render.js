"use strict";

// Designed Word (.docx) and PDF versions of a flyer, poster, newsletter, invitation, brochure (or handout, schedule): a coloured banner with a big white headline, a details table, a boxed call to action, a small-print footer.
// Made with the `docx` and `pdfkit` libraries already in the app, from shapes, colour and type only: no pictures from the web (they may be copyrighted) and no headless browser.
//
// The TEXT stays the document: designDocx/designPdf are given the same plain text that "Save changes" edits, and read the design out of it again every time (the first line is the headline, "When: ..." lines become the details table,
// a short line followed by sentences becomes a section heading, "Questions? ..." becomes the call-to-action box). Only the design KIND (flyer, newsletter, ...) is remembered with the document. Every [bracket] stays visible and is highlighted
// in light yellow, so a blank cannot be missed and printed by mistake.
//
// designKind(x) -> "flyer"|"poster"|"newsletter"|"invitation"|"brochure"|"schedule"|"email"|""
// parseDesign(kind, title, text) -> the layout read out of the text (an object, see the end of parseDesign)
// renderDesignDocx(kind, title, text, { images }) / renderDesignPdf(...) -> Promise<Buffer>;  renderDesignHtml(...) -> Promise<Buffer> (a web page with the pictures inline, made to be copied into an email)
//
// PICTURES: `images` is a list of { buffer, mime, ext, width, height, alt, title, caption, credit, role } (see nexus/documents/pictures.js; at most three). The first picture whose role is "logo" is a small logo at the top; the next is the lead picture
// (under the banner of a flyer, poster, newsletter, brochure or email; centred under the headline of an invitation); up to two more sit between the sections, with a caption when the person gave one. A picture is only ever scaled
// to fit its box with its own shape (never stretched), and a credit line ("Picture: Wikimedia Commons, ...") is printed in small type above the footer. The document's words are never changed by a picture.

const { fitInside, sniffImage } = require("./image-info.js");
const DESIGN_KINDS = Object.freeze(["flyer", "poster", "newsletter", "invitation", "brochure", "schedule", "email"]);
// the words the person (or the planner) may use for a kind, and the design each gets
const KIND_ALIASES = Object.freeze({ handout: "brochure", "e-mail": "email", "promotional email": "email", "promo email": "email", "marketing email": "email", "meal plan": "schedule", "study schedule": "schedule", "work schedule": "schedule" });

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

// ---------- pictures ----------
// What goes where: a logo (small, at the top), the lead picture, and up to two more between the sections. `credit` is the small print line.
function layoutImages(images) {
  // what a picture is and how big, is read again from its own bytes here (what the caller said about it is not believed), and an entry that is not a PNG or JPEG is left out
  const list = (Array.isArray(images) ? images : []).map(image => {
    if (!image || !Buffer.isBuffer(image.buffer) || !image.buffer.length) return null;
    const info = sniffImage(image.buffer);
    return info ? { ...image, mime: info.mime, ext: info.ext, width: info.width, height: info.height } : null;
  }).filter(Boolean);
  const logo = list.find(image => image.role === "logo") || null;
  const rest = list.filter(image => image !== logo);
  const credit = [...new Set(list.map(image => String(image.credit || "").trim()).filter(Boolean))].join("    ");
  return { logo, lead: rest[0] || null, inline: rest.slice(1, 3), credit, count: list.length };
}
// the boxes a picture is fitted into (pixels for Word, points for the PDF: a Word pixel is 0.75 of a point), as [width, height]
const BOXES = Object.freeze({
  word: { lead: { flyer: [700, 290], poster: [700, 320], newsletter: [700, 175], brochure: [700, 175], schedule: [700, 180], email: [700, 200], invitation: [330, 230] }, inline: [330, 185], logo: [200, 70] },
  pdf: { lead: { flyer: [520, 215], poster: [520, 150], newsletter: [520, 150], brochure: [520, 150], schedule: [520, 135], email: [520, 150], invitation: [250, 170] }, inline: [285, 160], logo: [150, 60] }
});

// ---------- Word ----------
function headlinePt(layout, length) {
  const steps = layout === "poster" ? [[8, 84], [12, 68], [18, 54], [28, 42], [44, 34]]
    : layout === "invitation" ? [[10, 60], [16, 48], [26, 40], [44, 32]]
    : layout === "newsletter" || layout === "brochure" || layout === "schedule" ? [[14, 48], [24, 40], [40, 34]]
    : layout === "email" ? [[24, 40], [44, 34]]
    : [[10, 66], [16, 54], [26, 44], [40, 36]];
  for (const [max, pt] of steps) if (length <= max) return pt;
  return 28;
}

async function renderDesignDocx(kind, title, text, { images = [] } = {}) {
  const ir = parseDesign(kind, title, text);
  const pics = layoutImages(images);
  const docx = require("docx");
  const { ImageRun, Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, AlignmentType, VerticalAlign, PageBorderDisplay, PageBorderOffsetFrom, TableLayoutType } = docx;
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

  // a picture, scaled to fit its box with its own shape; the Word file gets its alt text (a name, and what it shows)
  let pictureNumber = 0;
  const pictureParagraph = (image, box, o = {}) => {
    pictureNumber += 1;
    const size = fitInside(image.width, image.height, box[0], box[1], { maxScale: o.maxScale || 1 });
    const description = String(image.alt || image.title || "Picture").slice(0, 200);
    return new Paragraph({ alignment: o.align || alignment, keepNext: Boolean(o.keepNext), spacing: { before: o.before || 0, after: o.after === undefined ? 140 : o.after },
      children: [new ImageRun({ type: image.ext === "jpg" ? "jpg" : "png", data: image.buffer, transformation: { width: size.width, height: size.height },
        altText: { name: `Picture ${pictureNumber}`, title: String(image.title || description).slice(0, 120), description } })] });
  };
  const inlinePictures = (queue) => { const out = []; const image = queue.shift(); if (!image) return out; out.push(pictureParagraph(image, BOXES.word.inline, { align: centred ? alignment : AlignmentType.LEFT, after: image.caption ? 40 : 160 })); if (image.caption) out.push(para(image.caption, { size: 20, italics: true, color: GREY, after: 180, align: centred ? alignment : AlignmentType.LEFT })); return out; };
  const inlineQueue = [...pics.inline];

  const children = [];
  // a logo sits small at the top, above the banner
  if (pics.logo) children.push(pictureParagraph(pics.logo, BOXES.word.logo, { align: centred ? alignment : AlignmentType.LEFT, after: 120 }));
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
  // the lead picture: under the banner (and the line under it), or centred under the invitation's headline
  if (pics.lead) children.push(pictureParagraph(pics.lead, BOXES.word.lead[layout] || BOXES.word.lead.flyer, { align: AlignmentType.CENTER, maxScale: 2, before: 80, after: 160 }));

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

  let sectionNumber = -1;
  for (const section of ir.sections) {
    sectionNumber += 1;
    // the pictures between the sections: after the first section, and after the second
    if (inlineQueue.length && sectionNumber >= 1 && sectionNumber <= 2) children.push(...inlinePictures(inlineQueue));
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

  while (inlineQueue.length) children.push(...inlinePictures(inlineQueue));
  if (ir.cta) {
    children.push(gap(120));
    children.push(table([new TableRow({ children: [cell([para(ir.cta, { size: layout === "poster" ? 40 : 32, bold: true, after: 0, align: AlignmentType.CENTER })], { fill: accent.tint, top: 260, bottom: 260, left: 280, right: 280,
      borders: { top: thick(accent.main), bottom: thick(accent.main), left: thick(accent.main), right: thick(accent.main) } })] })], [WIDTH]));
  }
  // where found pictures came from, in small type (the person's own pictures carry no credit)
  if (pics.credit) children.push(para(pics.credit, { size: 16, color: GREY, before: 240, after: 0, align: alignment }));
  if (ir.footer) children.push(para(ir.footer, { size: 18, color: GREY, before: pics.credit ? 120 : 480, after: 0, align: alignment, border: { top: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 6 } } }));
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

function renderDesignPdf(kind, title, text, { images = [] } = {}) {
  const ir = parseDesign(kind, title, text);
  const pics = layoutImages(images);
  const PDFDocument = require("pdfkit");
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: "LETTER", margin: 0, info: { Title: pdfSafe(ir.title).slice(0, 120), Creator: "Kyro", Subject: `Designed ${ir.layout}` } });
      const chunks = [];
      doc.on("data", chunk => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);
      drawPdf(doc, ir, pics);
      doc.end();
    } catch (error) { reject(error); }
  });
}

function drawPdf(doc, ir, pics = layoutImages([])) {
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
  // a picture at its own shape inside its box; the PDF page's own width is 612 pt, so a full-width lead picture is 520 pt (the text width)
  const drawPicture = (image, box, o = {}) => {
    const size = fitInside(image.width, image.height, box[0], box[1], { maxScale: o.maxScale || 1 });
    ensure(size.height + 10);
    const x = o.align === "left" ? M : M + (CW - size.width) / 2;
    doc.image(image.buffer, x, ctx.y, { width: size.width, height: size.height });
    ctx.y += size.height + (o.after === undefined ? 12 : o.after);
    return size;
  };
  const drawInline = queue => {
    const image = queue.shift(); if (!image) return;
    drawPicture(image, BOXES.pdf.inline, { align: centred ? "center" : "left", after: image.caption ? 4 : 12 });
    if (image.caption) paragraph(image.caption, M, CW, { font: F.ital, size: 10, color: GREY, align: centred ? "center" : "left", after: 10 });
  };
  const inlineQueue = [...pics.inline];

  // ----- masthead -----
  let top = 0;
  // a logo sits small at the top, above the banner
  if (pics.logo) {
    const size = fitInside(pics.logo.width, pics.logo.height, BOXES.pdf.logo[0], BOXES.pdf.logo[1]);
    const y = layout === "invitation" ? 64 : 22;
    doc.image(pics.logo.buffer, centred ? (PAGE_W - size.width) / 2 : M, y, { width: size.width, height: size.height });
    top = layout === "invitation" ? 0 : y + size.height + 14;
    if (layout === "invitation") ctx.logoBottom = y + size.height;
  }
  if (layout !== "invitation") {
    const sizes = layout === "poster" ? (pics.lead ? [70, 62, 54, 46, 40, 34, 30] : [86, 74, 64, 54, 46, 40, 34, 30]) : centred ? [64, 56, 48, 42, 36, 32, 28] : [48, 42, 38, 34, 30, 28];
    // two lines if a size of 40 or more makes it fit, else the largest size that fits in three
    const twoLines = sizes.filter(candidate => candidate >= 40).find(candidate => wrap(ir.headline, F.bold, candidate, CW - 20).length <= 2);
    const size = twoLines || fit(ir.headline, F.bold, sizes, CW - 20, layout === "poster" ? 3 : 2);
    const lh = size * 1.18; const headLines = wrap(ir.headline, F.bold, size, CW - 20);
    const subLines = ir.subhead && !centred ? wrap(ir.subhead, F.reg, 15, CW - 20) : [];
    const height = 38 + (ir.kicker ? 24 : 0) + headLines.length * lh + (subLines.length ? 10 + subLines.length * 20 : 0) + 24;
    fillRect(0, top, PAGE_W, height, accent.main);
    ctx.y = top + 38;
    if (ir.kicker) { drawLine(wrap(ir.kicker.toUpperCase(), F.bold, 12, CW)[0], M, ctx.y, { font: F.bold, size: 12, color: "FFFFFF", align, width: CW }); ctx.y += 24; }
    for (const line of headLines) { drawLine(line, M, ctx.y, { font: F.bold, size, color: "FFFFFF", align, width: CW }); ctx.y += lh; }
    if (subLines.length) { ctx.y += 10; for (const line of subLines) { drawLine(line, M, ctx.y, { font: F.reg, size: 15, color: "FFFFFF", align, width: CW }); ctx.y += 20; } }
    ctx.y = top + height + 18;
    if (ir.subhead && centred) paragraph(ir.subhead, M, CW, { font: F.bold, size: layout === "poster" ? 26 : 19, color: accent.main, align, after: 10 });
  } else {
    // a double frame, then everything centred
    doc.lineWidth(3).strokeColor(hex(accent.main)).rect(26, 26, PAGE_W - 52, PAGE_H - 52).stroke();
    doc.lineWidth(1).strokeColor(hex(accent.main)).rect(33, 33, PAGE_W - 66, PAGE_H - 66).stroke();
    ctx.y = ctx.logoBottom ? ctx.logoBottom + 26 : 110;
    if (ir.kicker) { paragraph(ir.kicker.toUpperCase(), M + 20, CW - 40, { font: F.bold, size: 15, color: accent.main, align, after: 14 }); }
    const size = fit(ir.headline, F.bold, [60, 52, 46, 40, 34, 30], CW - 60, pics.lead ? 2 : 3); // (a picture leaves room for two lines of headline, not three)
    paragraph(ir.headline, M + 20, CW - 40, { font: F.bold, size, color: accent.main, align, after: 14 });
    fillRect(PAGE_W / 2 - 70, ctx.y, 140, 2.5, accent.main); ctx.y += 26;
    if (ir.subhead) paragraph(ir.subhead, M + 20, CW - 40, { font: F.ital, size: 17, align, after: 12 });
  }
  // the lead picture, centred under the banner (and the line under it) or under the invitation's headline
  // (with a logo above the banner the lead picture is a little shorter, so a flyer still fits one page)
  if (pics.lead) { const base = BOXES.pdf.lead[layout] || BOXES.pdf.lead.flyer; drawPicture(pics.lead, [base[0], pics.logo ? Math.round(base[1] * 0.72) : base[1]], { align: "center", maxScale: 2, after: 14 }); }

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

  let sectionNumber = -1;
  for (const section of ir.sections) {
    sectionNumber += 1;
    if (inlineQueue.length && sectionNumber >= 1 && sectionNumber <= 2) drawInline(inlineQueue);
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

  while (inlineQueue.length) drawInline(inlineQueue);
  if (ir.cta) {
    const size = layout === "poster" ? 22 : 17; const lines = wrap(ir.cta, F.bold, size, CW - 56); const lh = size * 1.3; const h = lines.length * lh + 36;
    ctx.y += 8; ensure(h);
    doc.lineWidth(3).rect(M, ctx.y, CW, h).fillAndStroke(hex(accent.tint), hex(accent.main));
    lines.forEach((line, index) => drawLine(line, M + 28, ctx.y + 18 + index * lh, { font: F.bold, size, align: "center", width: CW - 56 }));
    ctx.y += h + 10;
  }
  // where found pictures came from, in small type (the person's own pictures carry no credit)
  // (the credit and the footer are one block at the foot of the page, under a rule, so a picture credit never starts a page of its own)
  const creditLines = pics.credit ? wrap(pics.credit, F.reg, 8.5, CW) : [];
  const footerLines = ir.footer ? wrap(ir.footer, F.reg, 9, CW) : [];
  if (creditLines.length || footerLines.length) {
    const h = creditLines.length * 11 + (creditLines.length && footerLines.length ? 5 : 0) + footerLines.length * 12 + 14;
    const FOOT_LIMIT = PAGE_H - 26; // the foot of the page may use a little of the bottom margin
    if (ctx.y + h + 8 > FOOT_LIMIT) { doc.addPage(); ctx.y = M; }
    ctx.y = Math.max(ctx.y + 8, FOOT_LIMIT - h + 8);
    doc.lineWidth(0.6).strokeColor(hex(RULE)).moveTo(M, ctx.y).lineTo(M + CW, ctx.y).stroke();
    let y = ctx.y + 8;
    creditLines.forEach(line => { drawLine(line, M, y, { font: F.reg, size: 8.5, color: GREY, align, width: CW }); y += 11; });
    if (creditLines.length && footerLines.length) y += 5;
    footerLines.forEach(line => { drawLine(line, M, y, { font: F.reg, size: 9, color: GREY, align, width: CW }); y += 12; });
  }
}

// ---------- web page / email ----------
// One self-contained web page (tables and inline styles only, the way email programs read them) with the pictures inline as data addresses. It is made to be opened in a browser and copied into an email, or kept as a web page.
// Some email programs hide pictures that are inside the message itself: the card says so, and the Word and PDF files are there as well.
function renderDesignHtml(kind, title, text, { images = [] } = {}) {
  const ir = parseDesign(kind, title, text);
  const pics = layoutImages(images);
  const { layout, accent } = ir;
  const esc = value => String(value === undefined || value === null ? "" : value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const rich = value => segments(value).map(piece => (piece.blank ? `<span style="background:#${HIGHLIGHT};color:#${INK}">${esc(piece.text)}</span>` : esc(piece.text))).join("");
  const centred = layout === "flyer" || layout === "poster" || layout === "invitation";
  const align = centred ? "center" : "left";
  const font = layout === "invitation" ? "Georgia,'Times New Roman',serif" : "Arial,Helvetica,sans-serif";
  const WIDTH = 640;
  const picture = (image, box, o = {}) => {
    const size = fitInside(image.width, image.height, box[0], box[1], { maxScale: o.maxScale || 1 });
    const alt = String(image.alt || image.title || "Picture").slice(0, 200);
    return `<tr><td align="${o.align || "center"}" style="padding:${o.pad || "8px 0 12px"};padding-left:24px;padding-right:24px"><img src="data:${esc(image.mime)};base64,${image.buffer.toString("base64")}" width="${size.width}" height="${size.height}" alt="${esc(alt)}" style="display:block;border:0;max-width:100%;height:auto;margin:${(o.align || "center") === "center" ? "0 auto" : "0"}"></td></tr>`
      + (image.caption && o.caption !== false ? `<tr><td align="${o.align || "center"}" style="padding:0 24px 12px;font-size:13px;color:#${GREY};font-style:italic">${rich(image.caption)}</td></tr>` : "");
  };
  // every row but the banner is set in from the sides, so the words do not touch the edge of the white page
  const row = (inner, style = "", bleed = false) => `<tr><td style="${style}${bleed ? "" : ";padding-left:24px;padding-right:24px"}">${inner}</td></tr>`;
  const bodyPx = layout === "poster" ? 20 : layout === "invitation" ? 17 : 16;
  const rowsTable = rows => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">${rows.map(item => `<tr><td width="30%" style="background:#${accent.tint};padding:8px 12px;font-weight:bold;color:#${LABEL_INK};border-bottom:1px solid #${RULE}">${rich(item.label)}</td><td style="padding:8px 12px;border-bottom:1px solid #${RULE}">${rich(item.value)}</td></tr>`).join("")}</table>`;
  const gridTable = (header, body) => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tr>${header.map(cell => `<td style="background:#${accent.main};color:#fff;font-weight:bold;padding:8px 12px">${rich(cell)}</td>`).join("")}</tr>${body.map(cells => `<tr>${header.map((_, index) => `<td style="padding:8px 12px;border-bottom:1px solid #${RULE}">${rich(cells[index] || "")}</td>`).join("")}</tr>`).join("")}</table>`;
  const datesTable = items => gridTable(["Date", "What is happening"], items.map(item => {
    if (item.type === "row") return [item.label, item.value];
    const split = /^(.{1,40}?)\s+[-–—]\s+(.+)$/.exec(item.text || "");
    return split ? [split[1], split[2]] : [item.text || "", ""];
  }));
  const itemText = item => item.type === "row" ? `${item.label}: ${item.value}` : item.type === "bullet" ? `• ${item.text}` : item.text;

  const out = [];
  if (pics.logo) out.push(picture(pics.logo, BOXES.word.logo, { align: align, caption: false, pad: "0 0 12px" }));
  // the banner
  const pt = headlinePt(layout, ir.headline.length);
  if (layout !== "invitation") {
    out.push(row(`${ir.kicker ? `<div style="font-size:14px;font-weight:bold;letter-spacing:2px;color:#fff;margin-bottom:6px">${esc(ir.kicker.toUpperCase())}</div>` : ""}<div style="font-size:${Math.round(pt * 1.1)}px;line-height:1.15;font-weight:bold;color:#fff">${rich(ir.headline)}</div>${ir.subhead && !centred ? `<div style="font-size:18px;color:#fff;margin-top:8px">${rich(ir.subhead)}</div>` : ""}`, `background:#${accent.main};padding:26px 24px;text-align:${align}`, true));
    if (ir.subhead && centred) out.push(row(rich(ir.subhead), `padding:14px 0 4px;text-align:center;font-size:${layout === "poster" ? 28 : 22}px;font-weight:bold;color:#${accent.main}`));
  } else {
    out.push(row(`${ir.kicker ? `<div style="font-size:15px;font-weight:bold;letter-spacing:3px;color:#${accent.main};margin-bottom:8px">${esc(ir.kicker.toUpperCase())}</div>` : ""}<div style="font-size:${pt}px;font-weight:bold;color:#${accent.main}">${rich(ir.headline)}</div><div style="width:140px;height:3px;background:#${accent.main};margin:14px auto"></div>${ir.subhead ? `<div style="font-size:19px;font-style:italic">${rich(ir.subhead)}</div>` : ""}`, "padding:24px 0 8px;text-align:center"));
  }
  if (pics.lead) out.push(picture(pics.lead, BOXES.word.lead[layout] || BOXES.word.lead.flyer, { maxScale: 2, pad: "12px 0 14px" }));
  const queue = [...pics.inline];
  let sectionNumber = -1;
  for (const section of ir.sections) {
    sectionNumber += 1;
    if (queue.length && sectionNumber >= 1 && sectionNumber <= 2) out.push(picture(queue.shift(), BOXES.word.inline, { align: centred ? "center" : "left" }));
    if (section.heading) out.push(row(rich(section.heading), `padding:18px 0 6px;font-size:${layout === "poster" ? 26 : 21}px;font-weight:bold;color:#${accent.main};text-align:${align}${layout === "invitation" ? "" : `;border-bottom:2px solid #${accent.main}`}`));
    if (section.dates) { out.push(row(datesTable(section.items), "padding:6px 0")); continue; }
    if (section.contact) { out.push(row(section.items.map(item => `<div style="margin:2px 0">${rich(itemText(item))}</div>`).join(""), `background:#${accent.tint};border-left:6px solid #${accent.main};padding:14px 18px`)); continue; }
    let pending = [];
    const flush = () => { if (!pending.length) return; out.push(row(layout === "invitation" ? pending.map(item => `<div style="font-size:12px;font-weight:bold;letter-spacing:2px;color:#${accent.main};margin-top:14px">${esc(item.label.toUpperCase())}</div><div style="font-size:21px">${rich(item.value)}</div>`).join("") : rowsTable(pending), `padding:6px 0;text-align:${layout === "invitation" ? "center" : "left"}`)); pending = []; };
    for (const item of section.items) {
      if (item.type === "row") { pending.push(item); continue; }
      flush();
      if (item.type === "table") out.push(row(gridTable(item.header, item.body), "padding:6px 0"));
      else if (item.type === "bullet") out.push(row(`• ${rich(item.text)}`, `padding:2px 0 2px 14px;text-align:${align}`));
      else out.push(row(rich(item.text), `padding:5px 0;text-align:${align};${layout === "invitation" ? "font-style:italic;" : ""}`));
    }
    flush();
  }
  while (queue.length) out.push(picture(queue.shift(), BOXES.word.inline, { align: centred ? "center" : "left" }));
  if (ir.cta) out.push(row(`<div style="background:#${accent.tint};border:3px solid #${accent.main};padding:16px 20px;text-align:center;font-size:${layout === "poster" ? 26 : 20}px;font-weight:bold">${rich(ir.cta)}</div>`, "padding:14px 0 6px"));
  if (pics.credit) out.push(row(esc(pics.credit), `padding:14px 0 0;font-size:11px;color:#${GREY};text-align:${align}`));
  if (ir.footer) out.push(row(rich(ir.footer), `padding:12px 0 0;margin-top:10px;border-top:1px solid #${RULE};font-size:12px;color:#${GREY};text-align:${align}`));
  const page = `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(ir.title)}</title></head>`
    + `<body style="margin:0;padding:16px;background:#f3f4f6"><table role="presentation" width="${WIDTH}" align="center" cellpadding="0" cellspacing="0" style="max-width:100%;margin:0 auto;background:#ffffff;font-family:${font};font-size:${bodyPx}px;line-height:1.45;color:#${INK}"><tbody>`
    + `<tr><td style="padding:0"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tbody>${out.join("")}</tbody></table></td></tr></tbody></table></body></html>\n`;
  return Promise.resolve(Buffer.from(page, "utf8"));
}

module.exports = Object.freeze({ DESIGN_KINDS, PALETTE, designKind, accentFor, parseDesign, renderDesignDocx, renderDesignPdf, renderDesignHtml, layoutImages });
