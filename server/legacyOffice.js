"use strict";

// Reads the text of the older Word (.doc) and Excel (.xls) files (Word 97 to 2003 and Excel 97 to 2003) a person uploaded, so Kyro can read them out the way it reads a .docx or .xlsx (see officeText.js).
// Both older kinds are "compound files": a small file system inside one file, with a stream called WordDocument or Workbook. Nothing here runs or opens anything inside the file: a macro is never run
// (a file that carries macros is not accepted at all), a link or an embedded object is never followed, and every size and every step is capped, so a damaged or hostile file can only make the read fail.
// Not read: a password-protected file, Word before 1997 or Excel before 1997 (said plainly), pictures, charts, comments, footnotes, headers and footers.

const MAX_STREAM_BYTES = 50 * 1024 * 1024;
const MAX_TEXT_CHARS = 5_000_000;
const MAX_ROWS_PER_SHEET = 5000;
const MAX_COLUMNS = 200;
const MAX_SHEETS = 40;
const MAX_CELLS = 250000;
const MAX_DIRECTORY_ENTRIES = 20000;

const MAGIC = Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);
const END_OF_CHAIN = 0xfffffffe;
const FREE = 0xffffffff;
const MACRO_NAMES = new Set(["VBA", "_VBA_PROJECT_CUR", "Macros", "_VBA_PROJECT", "PROJECTwm"]);
const ENCRYPTED_NAMES = new Set(["EncryptedPackage", "EncryptionInfo", "\u0006DataSpaces"]);

function isCompoundFile(buffer) {
  return Buffer.isBuffer(buffer) && buffer.length >= 512 && buffer.subarray(0, 8).equals(MAGIC);
}

// The streams of a compound file: { names: Set, stream(name) -> Buffer | null }, or null when it is not a compound file or is too odd to trust.
function openCompound(buffer) {
  if (!isCompoundFile(buffer)) return null;
  const sectorShift = buffer.readUInt16LE(0x1e);
  const miniShift = buffer.readUInt16LE(0x20);
  if ((sectorShift !== 9 && sectorShift !== 12) || miniShift !== 6) return null;
  const sectorSize = 1 << sectorShift;
  const miniSize = 1 << miniShift;
  const sectorCount = Math.floor((buffer.length - sectorSize) / sectorSize);
  if (sectorCount < 1) return null;
  const fatSectorCount = buffer.readUInt32LE(0x2c);
  const directoryStart = buffer.readUInt32LE(0x30);
  const miniCutoff = buffer.readUInt32LE(0x38);
  const miniFatStart = buffer.readUInt32LE(0x3c);
  const difatStart = buffer.readUInt32LE(0x44);
  const difatCount = buffer.readUInt32LE(0x48);
  if (fatSectorCount > sectorCount || difatCount > sectorCount) return null;

  const sectorAt = index => {
    const offset = (index + 1) * sectorSize;
    return index >= 0 && index < sectorCount && offset + sectorSize <= buffer.length ? buffer.subarray(offset, offset + sectorSize) : null;
  };

  // Which sectors hold the allocation table: the first 109 are in the header, the rest in a chain of extra sectors.
  const fatSectors = [];
  for (let i = 0; i < 109 && fatSectors.length < fatSectorCount; i += 1) {
    const id = buffer.readUInt32LE(0x4c + i * 4);
    if (id === FREE) continue;
    fatSectors.push(id);
  }
  let difat = difatStart;
  for (let i = 0; i < difatCount && fatSectors.length < fatSectorCount; i += 1) {
    if (difat === END_OF_CHAIN || difat === FREE) break;
    const sector = sectorAt(difat);
    if (!sector) return null;
    const perSector = sectorSize / 4 - 1;
    for (let k = 0; k < perSector && fatSectors.length < fatSectorCount; k += 1) {
      const id = sector.readUInt32LE(k * 4);
      if (id !== FREE) fatSectors.push(id);
    }
    difat = sector.readUInt32LE(perSector * 4);
  }
  const fat = [];
  for (const id of fatSectors) {
    const sector = sectorAt(id);
    if (!sector) return null;
    for (let k = 0; k < sectorSize / 4; k += 1) fat.push(sector.readUInt32LE(k * 4));
  }

  const chain = (start, table, count) => {
    const ids = [];
    let at = start;
    while (at !== END_OF_CHAIN) {
      if (at === FREE || at >= count || at >= table.length || ids.length > count) return null;
      ids.push(at);
      at = table[at];
    }
    return ids;
  };
  const readChain = (start, wanted) => {
    const ids = chain(start, fat, sectorCount);
    if (!ids || ids.length * sectorSize > MAX_STREAM_BYTES + sectorSize) return null;
    const parts = [];
    for (const id of ids) { const sector = sectorAt(id); if (!sector) return null; parts.push(sector); }
    const all = Buffer.concat(parts);
    return wanted === undefined ? all : all.subarray(0, Math.min(wanted, all.length));
  };

  const directoryBytes = readChain(directoryStart);
  if (!directoryBytes) return null;
  const entries = [];
  for (let at = 0; at + 128 <= directoryBytes.length && entries.length < MAX_DIRECTORY_ENTRIES; at += 128) {
    const type = directoryBytes[at + 0x42];
    const nameLength = directoryBytes.readUInt16LE(at + 0x40);
    if (type === 0 || nameLength < 2 || nameLength > 64) { entries.push(null); continue; }
    entries.push({ name: directoryBytes.toString("utf16le", at, at + nameLength - 2), type, start: directoryBytes.readUInt32LE(at + 0x74), size: directoryBytes.readUInt32LE(at + 0x78) });
  }
  const root = entries[0];
  if (!root || root.type !== 5) return null;
  const names = new Set(entries.filter(Boolean).map(entry => entry.name));

  let miniStream = null;
  let miniFat = null;
  const loadMini = () => {
    if (miniStream) return true;
    const small = readChain(root.start, root.size);
    const table = miniFatStart === END_OF_CHAIN ? null : readChain(miniFatStart);
    if (!small || !table) return false;
    miniStream = small;
    miniFat = [];
    for (let k = 0; k + 4 <= table.length; k += 4) miniFat.push(table.readUInt32LE(k));
    return true;
  };

  return {
    names,
    stream(name) {
      const entry = entries.find(candidate => candidate && candidate.type === 2 && candidate.name === name);
      if (!entry || entry.size > MAX_STREAM_BYTES) return null;
      if (entry.size < miniCutoff) {
        if (!loadMini()) return null;
        const ids = chain(entry.start, miniFat, Math.floor(miniStream.length / miniSize));
        if (!ids) return null;
        const parts = [];
        for (const id of ids) parts.push(miniStream.subarray(id * miniSize, id * miniSize + miniSize));
        return Buffer.concat(parts).subarray(0, entry.size);
      }
      const all = readChain(entry.start, entry.size);
      return all && all.length === entry.size ? all : null;
    }
  };
}

// Which older Office file this is, by what is inside: "doc", "xls", or "" for anything else, including a file that carries macros or is password-protected (those are not accepted).
function legacyKind(buffer) {
  const compound = openCompound(buffer);
  if (!compound) return "";
  for (const name of compound.names) if (MACRO_NAMES.has(name) || ENCRYPTED_NAMES.has(name)) return "";
  if (compound.names.has("WordDocument")) return "doc";
  if (compound.names.has("Workbook") || compound.names.has("Book")) return "xls";
  return "";
}

// Windows-1252 for the bytes 0x80 to 0x9f (the rest is the same as Latin-1): the curly quotes, dashes and the euro sign of a Word file.
const CP1252 = [0x20ac, 0x81, 0x201a, 0x0192, 0x201e, 0x2026, 0x2020, 0x2021, 0x02c6, 0x2030, 0x0160, 0x2039, 0x0152, 0x8d, 0x017d, 0x8f, 0x90, 0x2018, 0x2019, 0x201c, 0x201d, 0x2022, 0x2013, 0x2014, 0x02dc, 0x2122, 0x0161, 0x203a, 0x0153, 0x9d, 0x017e, 0x0178];
function cp1252(bytes) {
  let out = "";
  for (const byte of bytes) out += String.fromCharCode(byte >= 0x80 && byte < 0xa0 ? CP1252[byte - 0x80] : byte);
  return out;
}

// ------------------------------------------------------------------------------------------ Word
const WORD_PASSWORD = "That Word file is password-protected, so I cannot read it. Remove the password, save it, and choose it again.";

// The main text of the document (not headers, footers, footnotes or comments), as the characters Word stored them, or { reason }.
function docMainText(compound) {
  const word = compound.stream("WordDocument");
  if (!word || word.length < 0x1a2) return { reason: "That Word file could not be read. It may be damaged." };
  if (word.readUInt16LE(0) !== 0xa5ec) return { reason: "That is a very old Word file (from before Word 97) that I cannot read. Open it, save it as .docx, and choose it again." };
  const flags = word.readUInt16LE(0x0a);
  if (flags & 0x0100) return { reason: WORD_PASSWORD };
  const table = compound.stream(flags & 0x0200 ? "1Table" : "0Table");
  if (!table) return { reason: "That Word file could not be read. It may be damaged." };
  let at = 32;
  const shortCount = word.readUInt16LE(at); at += 2 + shortCount * 2;
  const longCount = word.readUInt16LE(at); const longStart = at + 2; at += 2 + longCount * 4;
  const pairCount = word.readUInt16LE(at); const pairStart = at + 2;
  if (longCount < 4 || pairCount < 34 || pairStart + 34 * 8 > word.length) return { reason: "That Word file could not be read. It may be damaged." };
  const textLength = word.readInt32LE(longStart + 3 * 4);
  const clxStart = word.readUInt32LE(pairStart + 33 * 8);
  const clxLength = word.readUInt32LE(pairStart + 33 * 8 + 4);
  if (textLength <= 0 || textLength > MAX_TEXT_CHARS || clxLength < 5 || clxStart + clxLength > table.length) return { reason: "That Word document has no text in it that I can read." };
  const clx = table.subarray(clxStart, clxStart + clxLength);
  let i = 0;
  while (i < clx.length && clx[i] === 0x01) { if (i + 3 > clx.length) return { reason: "That Word file could not be read. It may be damaged." }; i += 3 + clx.readUInt16LE(i + 1); }
  if (i + 5 > clx.length || clx[i] !== 0x02) return { reason: "That Word file could not be read. It may be damaged." };
  const plcLength = clx.readUInt32LE(i + 1);
  const plc = clx.subarray(i + 5, i + 5 + plcLength);
  if (plc.length !== plcLength || plcLength < 16 || (plcLength - 4) % 12 !== 0) return { reason: "That Word file could not be read. It may be damaged." };
  const pieces = (plcLength - 4) / 12;
  let text = "";
  for (let k = 0; k < pieces && text.length < textLength; k += 1) {
    const from = plc.readUInt32LE(k * 4);
    const to = Math.min(plc.readUInt32LE((k + 1) * 4), textLength);
    if (to <= from) continue;
    const length = to - from;
    const fc = plc.readUInt32LE((pieces + 1) * 4 + k * 8 + 2);
    const compressed = (fc & 0x40000000) !== 0;
    const offset = compressed ? (fc & 0x3fffffff) >>> 1 : fc;
    const bytes = compressed ? length : length * 2;
    if (offset < 0 || offset + bytes > word.length) return { reason: "That Word file could not be read. It may be damaged." };
    text += compressed ? cp1252(word.subarray(offset, offset + bytes)) : word.toString("utf16le", offset, offset + bytes);
  }
  return { text };
}

// The characters Word stores around its text, turned into plain text: a paragraph to a line, a table row to a line with its cells separated by " | ", and the code of a field (a page number, a link address) left out
// while what the field shows is kept.
function docPlainText(raw) {
  let out = "";
  const fields = [];
  for (const char of raw) {
    const code = char.charCodeAt(0);
    if (code === 0x13) { fields.push(true); continue; }
    if (code === 0x14) { if (fields.length) fields[fields.length - 1] = false; continue; }
    if (code === 0x15) { fields.pop(); continue; }
    if (fields.includes(true)) continue;
    if (code === 0x0d || code === 0x0b) out += "\n";
    else if (code === 0x0c) out += "\n\n";
    else if (code === 0x07) out += "\u0007";
    else if (code === 0x1e) out += "-";
    else if (code === 0x09 || code >= 0x20) out += char;
  }
  return out.replace(/\u0007\u0007/g, "\n").replace(/\u0007/g, " | ").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

function readDoc(compound) {
  const found = docMainText(compound);
  if (found.reason) return { ok: false, reason: found.reason };
  const text = docPlainText(found.text);
  if (!text) return { ok: false, reason: "That Word document has no text in it that I can read (it may be only pictures)." };
  return { ok: true, kind: "doc", text, words: text.split(/\s+/).filter(Boolean).length };
}

// ----------------------------------------------------------------------------------------- Excel
const EXCEL_PASSWORD = "That Excel file is password-protected, so I cannot read it. Remove the password, save it, and choose it again.";
const ERROR_CODES = new Map([[0x00, "#NULL!"], [0x07, "#DIV/0!"], [0x0f, "#VALUE!"], [0x17, "#REF!"], [0x1d, "#NAME?"], [0x24, "#NUM!"], [0x2a, "#N/A"]]);

// The records of a workbook stream, in order, with their data. A stream that does not hold whole records stops where it breaks.
function* biffRecords(stream, from = 0) {
  let at = from;
  while (at + 4 <= stream.length) {
    const id = stream.readUInt16LE(at);
    const length = stream.readUInt16LE(at + 2);
    if (at + 4 + length > stream.length) return;
    yield { id, at, data: stream.subarray(at + 4, at + 4 + length) };
    at += 4 + length;
  }
}

// A string with a two-byte length and a flag byte ahead of it (the shape of a sheet name, a number format, a cell's own text), starting at `at` in `data`: { text, end }.
function xlString(data, at, lengthBytes = 2) {
  const length = lengthBytes === 1 ? data[at] : data.readUInt16LE(at);
  const flags = data[at + lengthBytes];
  let position = at + lengthBytes + 1;
  const rich = (flags & 0x08) !== 0;
  const extended = (flags & 0x04) !== 0;
  let runs = 0;
  let extra = 0;
  if (rich) { runs = data.readUInt16LE(position); position += 2; }
  if (extended) { extra = data.readUInt32LE(position); position += 4; }
  const wide = (flags & 0x01) !== 0;
  const bytes = length * (wide ? 2 : 1);
  if (position + bytes > data.length) return { text: "", end: data.length };
  const text = wide ? data.toString("utf16le", position, position + bytes) : data.toString("latin1", position, position + bytes);
  return { text, end: position + bytes + runs * 4 + extra };
}

// The shared string table: its strings may run on into the continue records after it, and when one does the continuing part starts with a flag byte of its own.
function sharedStringTable(parts) {
  const strings = [];
  let part = 0;
  let at = 8;
  const data = () => parts[part];
  const advance = () => { part += 1; at = 0; return part < parts.length; };
  const count = parts[0].length >= 8 ? parts[0].readUInt32LE(4) : 0;
  while (strings.length < Math.min(count, 200000)) {
    while (part < parts.length && at >= data().length) { if (!advance()) break; }
    if (part >= parts.length || at + 3 > data().length) break;
    const length = data().readUInt16LE(at);
    let flags = data()[at + 2];
    at += 3;
    let runs = 0;
    let extra = 0;
    if (flags & 0x08) { runs = data().readUInt16LE(at); at += 2; }
    if (flags & 0x04) { extra = data().readUInt32LE(at); at += 4; }
    let text = "";
    let left = length;
    while (left > 0) {
      const wide = (flags & 0x01) !== 0;
      const size = wide ? 2 : 1;
      let can = Math.floor((data().length - at) / size);
      if (can <= 0) {
        if (!advance()) { left = 0; break; }
        flags = data()[0]; at = 1;
        can = Math.floor((data().length - at) / size);
      }
      const take = Math.min(left, can);
      text += (flags & 0x01) ? data().toString("utf16le", at, at + take * 2) : data().toString("latin1", at, at + take);
      at += take * size;
      left -= take;
    }
    let skip = runs * 4 + extra;
    while (skip > 0) {
      const room = data().length - at;
      if (room >= skip) { at += skip; skip = 0; } else { skip -= room; if (!advance()) break; }
    }
    strings.push(text);
  }
  return strings;
}

function rkValue(rk) {
  let value;
  if (rk & 0x02) value = rk >> 2;
  else { const bits = Buffer.alloc(8); bits.writeUInt32LE((rk & 0xfffffffc) >>> 0, 4); value = bits.readDoubleLE(0); }
  return rk & 0x01 ? value / 100 : value;
}

function isDateFormat(id, code) {
  if ((id >= 14 && id <= 22) || (id >= 45 && id <= 47)) return true;
  return code ? /[dmyhs]/i.test(code.replace(/"[^"]*"|\[[^\]]*\]|\\./g, "")) : false;
}

function readXls(compound, serialToDate) {
  const stream = compound.stream("Workbook") || compound.stream("Book");
  if (!stream) return { ok: false, reason: "That Excel file could not be read. It may be damaged." };
  const sheetsFound = [];
  const formatCodes = new Map();
  const xfFormats = [];
  let strings = [];
  let sstParts = null;
  let date1904 = false;
  let started = false;
  let depth = 0;
  for (const record of biffRecords(stream)) {
    if (record.id === 0x0809) {
      if (!started) {
        started = true;
        if (record.data.length >= 2 && record.data.readUInt16LE(0) < 0x0600) return { ok: false, reason: "That is a very old Excel file (from before Excel 97) that I cannot read. Open it, save it as .xlsx, and choose it again." };
      }
      depth += 1;
      continue;
    }
    if (!started) continue;
    if (record.id === 0x000a) { depth -= 1; if (depth <= 0) break; continue; }
    if (depth !== 1) continue;
    if (record.id === 0x002f) return { ok: false, reason: EXCEL_PASSWORD };
    if (record.id === 0x0022 && record.data.length >= 2) date1904 = record.data.readUInt16LE(0) === 1;
    else if (record.id === 0x0085 && record.data.length >= 8) {
      const sheet = xlString(record.data, 6, 1);
      sheetsFound.push({ offset: record.data.readUInt32LE(0), state: record.data[4], type: record.data[5], name: sheet.text });
    } else if (record.id === 0x041e && record.data.length >= 5) formatCodes.set(record.data.readUInt16LE(0), xlString(record.data, 2).text);
    else if (record.id === 0x00e0 && record.data.length >= 4) xfFormats.push(record.data.readUInt16LE(2));
    else if (record.id === 0x00fc) sstParts = [record.data];
    else if (record.id === 0x003c && sstParts) sstParts.push(record.data);
    else if (record.id !== 0x003c) { if (sstParts) { strings = sharedStringTable(sstParts); sstParts = null; } }
  }
  if (sstParts) strings = sharedStringTable(sstParts);

  const dateXf = new Set();
  xfFormats.forEach((id, index) => { if (isDateFormat(id, formatCodes.get(id))) dateXf.add(index); });
  const shown = (number, xf) => {
    if (dateXf.has(xf) && number >= 0 && number < 2958466) return serialToDate(date1904 ? number + 1462 : number);
    return String(parseFloat(number.toPrecision(12)));
  };

  const budget = { left: MAX_CELLS };
  const sheets = [];
  let hidden = 0;
  let listed = 0;
  for (const sheet of sheetsFound) {
    listed += 1;
    if (listed > MAX_SHEETS) break;
    if (sheet.type !== 0) continue;
    if (sheet.state !== 0) { hidden += 1; continue; }
    if (sheet.offset >= stream.length) continue;
    const rows = new Map();
    let rowCount = 0;
    let truncated = false;
    const put = (row, column, value) => {
      if (value === "" || value === undefined) return;
      if (column >= MAX_COLUMNS) { truncated = true; return; }
      if (budget.left <= 0) { truncated = true; return; }
      let cells = rows.get(row);
      if (!cells) { if (rows.size >= MAX_ROWS_PER_SHEET) { truncated = true; return; } cells = []; rows.set(row, cells); }
      budget.left -= 1;
      cells[column] = String(value).replace(/\s*\n\s*/g, " ").trim();
    };
    let nested = 0;
    let waitingForString = null;
    for (const record of biffRecords(stream, sheet.offset)) {
      const data = record.data;
      if (record.id === 0x0809) { nested += 1; continue; }
      if (record.id === 0x000a) { nested -= 1; if (nested <= 0) break; continue; }
      if (nested !== 1) continue;
      if (waitingForString && record.id === 0x0207) {
        if (data.length >= 3) put(waitingForString.row, waitingForString.column, xlString(data, 0).text);
        waitingForString = null;
        continue;
      }
      waitingForString = null;
      if (record.id === 0x00fd && data.length >= 10) put(data.readUInt16LE(0), data.readUInt16LE(2), strings[data.readUInt32LE(6)] ?? "");
      else if (record.id === 0x0203 && data.length >= 14) put(data.readUInt16LE(0), data.readUInt16LE(2), shown(data.readDoubleLE(6), data.readUInt16LE(4)));
      else if (record.id === 0x027e && data.length >= 10) put(data.readUInt16LE(0), data.readUInt16LE(2), shown(rkValue(data.readInt32LE(6)), data.readUInt16LE(4)));
      else if (record.id === 0x00bd && data.length >= 6) {
        const row = data.readUInt16LE(0);
        const first = data.readUInt16LE(2);
        const count = Math.floor((data.length - 6) / 6);
        for (let k = 0; k < count; k += 1) put(row, first + k, shown(rkValue(data.readInt32LE(4 + k * 6 + 2)), data.readUInt16LE(4 + k * 6)));
      } else if (record.id === 0x0204 && data.length >= 9) put(data.readUInt16LE(0), data.readUInt16LE(2), xlString(data, 6).text);
      else if (record.id === 0x0205 && data.length >= 8) put(data.readUInt16LE(0), data.readUInt16LE(2), data[7] ? (ERROR_CODES.get(data[6]) || "#ERROR") : data[6] ? "TRUE" : "FALSE");
      else if (record.id === 0x0006 && data.length >= 14) {
        const row = data.readUInt16LE(0);
        const column = data.readUInt16LE(2);
        if (data.readUInt16LE(12) === 0xffff) {
          const kind = data[6];
          if (kind === 0) waitingForString = { row, column };
          else if (kind === 1) put(row, column, data[8] ? "TRUE" : "FALSE");
          else if (kind === 2) put(row, column, ERROR_CODES.get(data[8]) || "#ERROR");
        } else put(row, column, shown(data.readDoubleLE(6), data.readUInt16LE(4)));
      }
    }
    const lines = [];
    let columnCount = 0;
    for (const row of [...rows.keys()].sort((a, b) => a - b)) {
      const cells = rows.get(row);
      let last = cells.length - 1;
      while (last >= 0 && !cells[last]) last -= 1;
      if (last < 0) continue;
      rowCount += 1;
      columnCount = Math.max(columnCount, last + 1);
      lines.push(Array.from({ length: last + 1 }, (_, index) => cells[index] || "").join(" | "));
    }
    sheets.push({ name: sheet.name, rows: lines, rowCount, columnCount, truncated });
  }
  const text = sheets.map(sheet => `Sheet "${sheet.name}": ${sheet.rows.length} row${sheet.rows.length === 1 ? "" : "s"}, ${sheet.columnCount} column${sheet.columnCount === 1 ? "" : "s"}${sheet.truncated ? " (only part of the sheet is read)" : ""}\n${sheet.rows.join("\n")}`).join("\n\n");
  if (!text.trim() || !sheets.some(sheet => sheet.rows.length)) return { ok: false, reason: "That Excel file has no cells with anything in them that I can read." };
  return { ok: true, kind: "xls", text, words: text.split(/\s+/).filter(Boolean).length, sheets: sheets.map(sheet => ({ name: sheet.name, rows: sheet.rows.length, columns: sheet.columnCount, truncated: sheet.truncated })), hiddenSheets: hidden };
}

// What is in the file, as plain text Kyro can read out: { ok, kind, text, words, sheets? } or { ok: false, reason } with a plain reason for the person.
function readLegacyFile(buffer, kind, serialToDate) {
  const compound = openCompound(buffer);
  if (!compound) return { ok: false, reason: "That file could not be opened. It may be damaged, or not a real Word or Excel file." };
  try {
    if (kind === "doc") return readDoc(compound);
    if (kind === "xls") return readXls(compound, serialToDate);
  } catch {
    return { ok: false, reason: `That ${kind === "doc" ? "Word" : "Excel"} file could not be read. It may be damaged.` };
  }
  return { ok: false, reason: "That kind of file is not one I can read." };
}

module.exports = { isCompoundFile, openCompound, legacyKind, readLegacyFile, docPlainText, sharedStringTable, rkValue };
