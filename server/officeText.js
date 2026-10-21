"use strict";
const zlib = require("node:zlib");

// Reads the text of a Word (.docx) or Excel (.xlsx) file a person uploaded, so Kyro can read it to them. Both are ZIP packages of XML parts. Nothing here runs or opens anything inside the file: a macro is never
// run (macro-enabled .docm/.xlsm are not accepted at all), a link to another file or web address is never followed, and the XML is read with plain pattern matching, not an XML parser (so no external
// entity or "billion laughs" tricks). Every size is capped against zip bombs: how many parts, how big any one part is when unpacked, and how much is unpacked in total.

const DOCX_TYPE = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
const XLSX_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

const MAX_ENTRIES = 3000;
const MAX_PART_BYTES = 25 * 1024 * 1024;
const MAX_TOTAL_BYTES = 80 * 1024 * 1024;
const MAX_ROWS_PER_SHEET = 5000;
const MAX_COLUMNS = 200;
const MAX_SHEETS = 40;
const MAX_CELLS = 250000;

// The end-of-directory record, searched from the back (a ZIP may end with a comment of up to 65535 bytes).
function findEndRecord(buffer) {
  const lowest = Math.max(0, buffer.length - 22 - 65535);
  for (let at = buffer.length - 22; at >= lowest; at -= 1) {
    if (buffer.readUInt32LE(at) === 0x06054b50) return at;
  }
  return -1;
}

// The list of parts in the package: name, how it is packed, and where it starts. null when this is not a readable ZIP (or one that is too odd to trust: ZIP64, too many parts, parts that run past the file).
function readZipDirectory(buffer) {
  if (!Buffer.isBuffer(buffer) || buffer.length < 22) return null;
  const end = findEndRecord(buffer);
  if (end < 0) return null;
  const count = buffer.readUInt16LE(end + 10);
  const directoryOffset = buffer.readUInt32LE(end + 16);
  if (count === 0xffff || directoryOffset === 0xffffffff || count > MAX_ENTRIES || directoryOffset >= buffer.length) return null;
  const entries = new Map();
  let at = directoryOffset;
  for (let index = 0; index < count; index += 1) {
    if (at + 46 > buffer.length || buffer.readUInt32LE(at) !== 0x02014b50) return null;
    const flags = buffer.readUInt16LE(at + 8);
    const method = buffer.readUInt16LE(at + 10);
    const compressedSize = buffer.readUInt32LE(at + 20);
    const size = buffer.readUInt32LE(at + 24);
    const nameLength = buffer.readUInt16LE(at + 28);
    const extraLength = buffer.readUInt16LE(at + 30);
    const commentLength = buffer.readUInt16LE(at + 32);
    const localOffset = buffer.readUInt32LE(at + 42);
    if (compressedSize === 0xffffffff || size === 0xffffffff || localOffset === 0xffffffff) return null;
    if (at + 46 + nameLength > buffer.length) return null;
    const name = buffer.toString("utf8", at + 46, at + 46 + nameLength);
    entries.set(name, { name, flags, method, compressedSize, size, localOffset });
    at += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

// The unpacked bytes of one part, or null (missing, encrypted, an unknown packing, bigger than the cap, or damaged).
function readPart(buffer, entry, budget) {
  if (!entry || (entry.flags & 1)) return null;
  if (entry.size > MAX_PART_BYTES || (budget && budget.used + entry.size > MAX_TOTAL_BYTES)) return null;
  const at = entry.localOffset;
  if (at + 30 > buffer.length || buffer.readUInt32LE(at) !== 0x04034b50) return null;
  const start = at + 30 + buffer.readUInt16LE(at + 26) + buffer.readUInt16LE(at + 28);
  const stop = start + entry.compressedSize;
  if (stop > buffer.length) return null;
  const packed = buffer.subarray(start, stop);
  try {
    const bytes = entry.method === 0 ? Buffer.from(packed) : entry.method === 8 ? zlib.inflateRawSync(packed, { maxOutputLength: Math.max(entry.size, 1) + 16 }) : null;
    if (!bytes || bytes.length > MAX_PART_BYTES) return null;
    if (budget) budget.used += bytes.length;
    return bytes;
  } catch { return null; }
}

function openPackage(buffer) {
  const entries = readZipDirectory(buffer);
  if (!entries) return null;
  const budget = { used: 0 };
  return {
    has: name => entries.has(name),
    names: () => [...entries.keys()],
    text: name => { const bytes = readPart(buffer, entries.get(name), budget); return bytes ? bytes.toString("utf8") : null; }
  };
}

// Which kind of Office file this is, by what is inside (not by what the file says it is): "docx", "xlsx", or "" for anything else (including a ZIP that is neither, or a macro-enabled file).
function officeKind(buffer) {
  const pack = openPackage(buffer);
  if (!pack || !pack.has("[Content_Types].xml")) return "";
  // a file that carries macros (a macro-enabled file renamed .docx or .xlsx) is not accepted
  if (pack.has("word/vbaProject.bin") || pack.has("xl/vbaProject.bin")) return "";
  if (pack.has("word/document.xml")) return "docx";
  if (pack.has("xl/workbook.xml")) return "xlsx";
  return "";
}

const NAMED = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" };
function decodeEntities(text) {
  return String(text).replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (whole, code) => {
    if (code[0] === "#") {
      const value = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(value) && value > 8 && value < 0x110000 && !(value >= 0xd800 && value < 0xe000) ? String.fromCodePoint(value) : "";
    }
    return NAMED[code.toLowerCase()] ?? whole;
  });
}

// Word: the words in the body, a paragraph to a line, a table row to a line with its cells separated by " | ". Text in a field code, a deleted change or a comment is not the document's text and is left out.
function docxText(xml) {
  let out = "";
  let inText = false;
  const token = /<(\/?)(w:p|w:tr|w:tc|w:t|w:tab|w:br|w:cr)\b([^>]*?)(\/?)>|([^<]+)/g;
  let match;
  while ((match = token.exec(xml))) {
    const [, closing, tag, , selfClosing, text] = match;
    if (text !== undefined) { if (inText) out += text; continue; }
    if (tag === "w:t") { inText = !closing && !selfClosing; continue; }
    if (tag === "w:tab" && !closing) out += "\t";
    else if ((tag === "w:br" || tag === "w:cr") && !closing) out += "\n";
    else if (tag === "w:p" && closing) out += "\n";
    else if (tag === "w:tc" && closing) { out = out.replace(/\n+$/, "") + " | "; }
    else if (tag === "w:tr" && closing) { out = out.replace(/(?: \| )+$/, "").replace(/\n+$/, "") + "\n"; }
  }
  return decodeEntities(out).replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

function sharedStrings(xml) {
  if (!xml) return [];
  const list = [];
  const item = /<si\b[^>]*>([\s\S]*?)<\/si>/g;
  let match;
  while ((match = item.exec(xml)) && list.length < 200000) {
    const body = match[1].replace(/<rPh\b[\s\S]*?<\/rPh>/g, "");
    const parts = [...body.matchAll(/<t\b[^>]*>([\s\S]*?)<\/t>/g)].map(part => part[1]);
    list.push(decodeEntities(parts.join("")));
  }
  return list;
}

// Number formats that show a date or a time: the built-in ones (14-22, 45-47) and any custom one with a day, month or year letter outside quotes and brackets.
function dateStyles(stylesXml) {
  const dates = new Set();
  if (!stylesXml) return dates;
  const custom = new Map();
  for (const match of stylesXml.matchAll(/<numFmt\b[^>]*numFmtId="(\d+)"[^>]*formatCode="([^"]*)"/g)) custom.set(Number(match[1]), decodeEntities(match[2]));
  const block = /<cellXfs\b[^>]*>([\s\S]*?)<\/cellXfs>/.exec(stylesXml);
  if (!block) return dates;
  let index = 0;
  for (const xf of block[1].matchAll(/<xf\b([^>]*?)(?:\/>|>[\s\S]*?<\/xf>)/g)) {
    const id = Number(/numFmtId="(\d+)"/.exec(xf[1])?.[1] || 0);
    const code = custom.get(id);
    const builtIn = (id >= 14 && id <= 22) || (id >= 45 && id <= 47);
    const customDate = code ? /[dmyhs]/i.test(code.replace(/"[^"]*"|\[[^\]]*\]|\\./g, "")) : false;
    if (builtIn || customDate) dates.add(index);
    index += 1;
  }
  return dates;
}

function serialToDate(serial) {
  const days = Math.floor(serial);
  const date = new Date(Date.UTC(1899, 11, 30) + days * 86400000);
  if (Number.isNaN(date.getTime())) return String(serial);
  const day = date.toISOString().slice(0, 10);
  const fraction = serial - days;
  if (fraction < 1e-9) return day;
  const seconds = Math.round(fraction * 86400);
  const pad = value => String(value).padStart(2, "0");
  const time = `${pad(Math.floor(seconds / 3600) % 24)}:${pad(Math.floor(seconds / 60) % 60)}`;
  return days === 0 ? time : `${day} ${time}`;
}

function columnIndex(reference) {
  const letters = /^([A-Z]+)/i.exec(reference || "")?.[1] || "";
  let index = 0;
  for (const letter of letters.toUpperCase()) index = index * 26 + (letter.charCodeAt(0) - 64);
  return index - 1;
}

function cellValue(attributes, body, strings, dates) {
  const type = /\bt="([^"]*)"/.exec(attributes)?.[1] || "n";
  const value = /<v\b[^>]*>([\s\S]*?)<\/v>/.exec(body || "")?.[1];
  if (type === "inlineStr") return decodeEntities([...String(body || "").matchAll(/<t\b[^>]*>([\s\S]*?)<\/t>/g)].map(part => part[1]).join(""));
  if (value === undefined) return "";
  if (type === "s") return strings[Number(value)] ?? "";
  if (type === "str") return decodeEntities(value);
  if (type === "b") return value === "1" ? "TRUE" : "FALSE";
  if (type === "e") return decodeEntities(value);
  const number = Number(value);
  if (!Number.isFinite(number)) return decodeEntities(value);
  const style = Number(/\bs="(\d+)"/.exec(attributes)?.[1] ?? -1);
  if (dates.has(style) && number >= 0 && number < 2958466) return serialToDate(number);
  return String(parseFloat(number.toPrecision(12)));
}

// One sheet: its rows as lines of cells separated by " | " (blank rows and trailing blanks dropped), and its true size even when only the first rows are read.
function sheetRows(xml, strings, dates, cellBudget) {
  const rows = [];
  let rowCount = 0;
  let columnCount = 0;
  let truncated = false;
  for (const row of xml.matchAll(/<row\b[^>]*?(?:\/>|>([\s\S]*?)<\/row>)/g)) {
    if (!row[1]) continue;
    rowCount += 1;
    if (rows.length >= MAX_ROWS_PER_SHEET || cellBudget.left <= 0) { truncated = true; continue; }
    const cells = [];
    for (const cell of row[1].matchAll(/<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
      const at = columnIndex(/\br="([^"]*)"/.exec(cell[1])?.[1]);
      const index = at >= 0 ? at : cells.length;
      if (index >= MAX_COLUMNS) { truncated = true; continue; }
      cellBudget.left -= 1;
      cells[index] = cellValue(cell[1], cell[2], strings, dates).replace(/\s*\n\s*/g, " ").trim();
    }
    let last = cells.length - 1;
    while (last >= 0 && !cells[last]) last -= 1;
    if (last < 0) continue;
    columnCount = Math.max(columnCount, last + 1);
    rows.push(Array.from({ length: last + 1 }, (_, index) => cells[index] || "").join(" | "));
  }
  return { rows, rowCount, columnCount, truncated };
}

function xlsxRead(pack) {
  const workbook = pack.text("xl/workbook.xml");
  if (!workbook) return null;
  const relationships = new Map();
  for (const rel of (pack.text("xl/_rels/workbook.xml.rels") || "").matchAll(/<Relationship\b([^>]*?)\/?>/g)) {
    const id = /\bId="([^"]*)"/.exec(rel[1])?.[1];
    const target = /\bTarget="([^"]*)"/.exec(rel[1])?.[1];
    if (id && target) relationships.set(id, target.startsWith("/") ? target.slice(1) : `xl/${target.replace(/^\.\//, "")}`);
  }
  const strings = sharedStrings(pack.text("xl/sharedStrings.xml"));
  const dates = dateStyles(pack.text("xl/styles.xml"));
  const cellBudget = { left: MAX_CELLS };
  const sheets = [];
  let hidden = 0;
  let listed = 0;
  for (const sheet of workbook.matchAll(/<sheet\b([^>]*?)\/?>/g)) {
    listed += 1;
    if (listed > MAX_SHEETS) break;
    const name = decodeEntities(/\bname="([^"]*)"/.exec(sheet[1])?.[1] || `Sheet ${listed}`);
    if (/\bstate="(?:hidden|veryHidden)"/.test(sheet[1])) { hidden += 1; continue; }
    const target = relationships.get(/\br:id="([^"]*)"/.exec(sheet[1])?.[1]) || `xl/worksheets/sheet${listed}.xml`;
    const xml = pack.text(target);
    if (xml === null) continue;
    sheets.push({ name, ...sheetRows(xml, strings, dates, cellBudget) });
  }
  const text = sheets.map(sheet => `Sheet "${sheet.name}": ${sheet.rows.length} row${sheet.rows.length === 1 ? "" : "s"}, ${sheet.columnCount} column${sheet.columnCount === 1 ? "" : "s"}${sheet.truncated ? ` (only the first ${sheet.rows.length} of ${sheet.rowCount} rows are read)` : ""}\n${sheet.rows.join("\n")}`).join("\n\n");
  return { sheets, hidden, text };
}

// What is in the file, as plain text Kyro can read out: { ok, kind, text, words, sheets? } or { ok: false, reason } with a plain reason for the person.
function readOfficeFile(buffer, kind) {
  const pack = openPackage(buffer);
  if (!pack) return { ok: false, reason: "That file could not be opened. It may be damaged, or not a real Word or Excel file." };
  if (kind === "docx") {
    const xml = pack.text("word/document.xml");
    if (xml === null) return { ok: false, reason: "That Word file could not be read. It may be damaged or password-protected." };
    const text = docxText(xml);
    if (!text) return { ok: false, reason: "That Word document has no text in it that I can read (it may be only pictures)." };
    return { ok: true, kind, text, words: text.split(/\s+/).filter(Boolean).length };
  }
  if (kind === "xlsx") {
    const read = xlsxRead(pack);
    if (!read) return { ok: false, reason: "That Excel file could not be read. It may be damaged or password-protected." };
    if (!read.text.trim() || !read.sheets.some(sheet => sheet.rows.length)) return { ok: false, reason: "That Excel file has no cells with anything in them that I can read." };
    return { ok: true, kind, text: read.text, words: read.text.split(/\s+/).filter(Boolean).length, sheets: read.sheets.map(sheet => ({ name: sheet.name, rows: sheet.rows.length, columns: sheet.columnCount, truncated: sheet.truncated })), hiddenSheets: read.hidden };
  }
  return { ok: false, reason: "That kind of file is not one I can read." };
}

// The text in parts of about `size` characters, cut at the end of a line, for a long file that is read out a part at a time.
function textParts(text, size = 6000) {
  const parts = [];
  let rest = String(text || "");
  while (rest.length > size) {
    let cut = rest.lastIndexOf("\n", size);
    if (cut < size * 0.5) cut = size;
    parts.push(rest.slice(0, cut).trim());
    rest = rest.slice(cut).replace(/^\n+/, "");
  }
  if (rest.trim() || !parts.length) parts.push(rest.trim());
  return parts;
}

module.exports = { DOCX_TYPE, XLSX_TYPE, officeKind, readOfficeFile, textParts, openPackage, docxText, serialToDate };
