"use strict";
const zlib = require("node:zlib");

// Builds small real Word (.docx) and Excel (.xlsx) files for tests, with no library: a ZIP is a few headers and deflated parts.
function makeZip(parts, { method = 8 } = {}) {
  const locals = [];
  const central = [];
  let offset = 0;
  for (const [name, content] of Object.entries(parts)) {
    const nameBytes = Buffer.from(name, "utf8");
    const raw = Buffer.from(content, "utf8");
    const packed = method === 8 ? zlib.deflateRawSync(raw) : raw;
    const crc = zlib.crc32(raw);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(20, 4); local.writeUInt16LE(0, 6); local.writeUInt16LE(method, 8);
    local.writeUInt32LE(crc >>> 0, 14); local.writeUInt32LE(packed.length, 18); local.writeUInt32LE(raw.length, 22); local.writeUInt16LE(nameBytes.length, 26);
    locals.push(local, nameBytes, packed);
    const entry = Buffer.alloc(46);
    entry.writeUInt32LE(0x02014b50, 0); entry.writeUInt16LE(20, 4); entry.writeUInt16LE(20, 6); entry.writeUInt16LE(method, 10);
    entry.writeUInt32LE(crc >>> 0, 16); entry.writeUInt32LE(packed.length, 20); entry.writeUInt32LE(raw.length, 24); entry.writeUInt16LE(nameBytes.length, 28); entry.writeUInt32LE(offset, 42);
    central.push(entry, nameBytes);
    offset += 30 + nameBytes.length + packed.length;
  }
  const directory = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(Object.keys(parts).length, 8); end.writeUInt16LE(Object.keys(parts).length, 10);
  end.writeUInt32LE(directory.length, 12); end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, directory, end]);
}

const escape = text => String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const CONTENT_TYPES = '<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml"/></Types>';

// paragraphs: ["text", ...]; a paragraph may also be { table: [["a", "b"], ["c", "d"]] }
function makeDocx(paragraphs) {
  const body = paragraphs.map(item => item && item.table
    ? `<w:tbl>${item.table.map(row => `<w:tr>${row.map(cell => `<w:tc><w:p><w:r><w:t>${escape(cell)}</w:t></w:r></w:p></w:tc>`).join("")}</w:tr>`).join("")}</w:tbl>`
    : `<w:p><w:r><w:t xml:space="preserve">${escape(item)}</w:t></w:r></w:p>`).join("");
  return makeZip({
    "[Content_Types].xml": CONTENT_TYPES,
    "word/document.xml": `<?xml version="1.0" encoding="UTF-8"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}<w:sectPr/></w:body></w:document>`
  });
}

// sheets: [{ name, rows: [[cell, ...], ...], hidden? }]; a cell is a string, a number, { date: serial } or { formula: "A1+B1", value: 3 }
function makeXlsx(sheets) {
  const strings = [];
  const stringId = text => { let at = strings.indexOf(text); if (at < 0) { strings.push(text); at = strings.length - 1; } return at; };
  const letter = index => String.fromCharCode(65 + index);
  const sheetXml = sheet => `<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${sheet.rows.map((row, r) => `<row r="${r + 1}">${row.map((cell, c) => {
    const ref = `${letter(c)}${r + 1}`;
    if (cell === null || cell === "") return "";
    if (typeof cell === "number") return `<c r="${ref}"><v>${cell}</v></c>`;
    if (cell && cell.date !== undefined) return `<c r="${ref}" s="1"><v>${cell.date}</v></c>`;
    if (cell && cell.formula) return `<c r="${ref}"><f>${escape(cell.formula)}</f><v>${cell.value}</v></c>`;
    return `<c r="${ref}" t="s"><v>${stringId(String(cell))}</v></c>`;
  }).join("")}</row>`).join("")}</sheetData></worksheet>`;
  const sheetParts = sheets.map(sheetXml);
  const parts = {
    "[Content_Types].xml": CONTENT_TYPES,
    "xl/workbook.xml": `<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${sheets.map((sheet, index) => `<sheet name="${escape(sheet.name)}" sheetId="${index + 1}"${sheet.hidden ? ' state="hidden"' : ""} r:id="rId${index + 1}"/>`).join("")}</sheets></workbook>`,
    "xl/_rels/workbook.xml.rels": `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${sheets.map((_, index) => `<Relationship Id="rId${index + 1}" Type="worksheet" Target="worksheets/sheet${index + 1}.xml"/>`).join("")}</Relationships>`,
    "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><cellXfs count="2"><xf numFmtId="0"/><xf numFmtId="14"/></cellXfs></styleSheet>'
  };
  sheetParts.forEach((xml, index) => { parts[`xl/worksheets/sheet${index + 1}.xml`] = xml; });
  parts["xl/sharedStrings.xml"] = `<?xml version="1.0" encoding="UTF-8"?><sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">${strings.map(text => `<si><t>${escape(text)}</t></si>`).join("")}</sst>`;
  return makeZip(parts);
}

module.exports = { makeZip, makeDocx, makeXlsx };
