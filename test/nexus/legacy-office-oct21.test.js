"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { PassThrough } = require("node:stream");
const officeText = require("../../server/officeText.js");
const legacy = require("../../server/legacyOffice.js");
const uploads = require("../../server/uploads.js");
const documentProvider = require("../../server/providers/documentProvider.js");

// The older Word (.doc) and Excel (.xls) files, read the way a .docx and an .xlsx are (see office-upload-oct21.test.js). The five files in test/fixtures/legacy-office were saved by real Word and Excel (Word 97-2003 and
// Excel 97-2003 formats), so what is read here is what those programs wrote, not what this code expects: a sample.doc with a table, curly quotes, accents and a link; a sample.xls with dates, formulas, a true/false, a second
// sheet and a hidden one; a many.xls whose 600 rows overrun one record of the shared string table; and a password-protected copy of each.
const fixture = name => fs.readFileSync(path.join(__dirname, "../fixtures/legacy-office", name));

test("a Word 97-2003 file is read as its words: paragraphs, a table row to a line, curly quotes and accents kept, the link's address left out", () => {
  const doc = fixture("sample.doc");
  assert.equal(officeText.officeKind(doc), "doc");
  const read = officeText.readOfficeFile(doc, "doc");
  assert.equal(read.ok, true);
  assert.equal(read.kind, "doc");
  assert.equal(read.text, [
    "Mama Grace Shop - monthly report",
    "We sold 12 bags of maize and 3 sacks of beans.",
    "Smart quotes: “hello” and a dash – and Kiswahili: Habari za asubuhi, école na über.",
    "Last paragraph with euro €5 and a Kiswahili word: shamba.",
    "Item | Qty | Price", "Maize | 12 | 6000", "Beans | 3 | 4500", "", "After the table."
  ].join("\n"));
  assert.equal(read.words, read.text.split(/\s+/).filter(Boolean).length);
});

test("an Excel 97-2003 file is read sheet by sheet with its real values: text, numbers, dates, the value of a formula and true/false; a hidden sheet is left out and said so", () => {
  const xls = fixture("sample.xls");
  assert.equal(officeText.officeKind(xls), "xls");
  const read = officeText.readOfficeFile(xls, "xls");
  assert.equal(read.ok, true);
  assert.equal(read.text, [
    'Sheet "Sales": 7 rows, 5 columns',
    "Date | Item | Qty | Price | Total",
    "2026-10-06 | Maize | 12 | 500.5 | 6006",
    "2026-10-07 | Beans été | 3 | 1500 | 4500",
    " | Total |  |  | 10506",
    " | Is paid | TRUE",
    " | Big and small | 1234567.891 | 0.000123",
    " | joined Maize",
    "",
    'Sheet "Notes": 1 row, 1 column',
    "Hello from the second sheet"
  ].join("\n"));
  assert.deepEqual(read.sheets, [{ name: "Sales", rows: 7, columns: 5, truncated: false }, { name: "Notes", rows: 1, columns: 1, truncated: false }]);
  assert.equal(read.hiddenSheets, 1);
  assert.doesNotMatch(read.text, /hidden/i);
});

test("a spreadsheet whose strings overrun one record of the string table is read right to the last row, and every string whole", () => {
  const read = officeText.readOfficeFile(fixture("many.xls"), "xls");
  assert.equal(read.ok, true);
  const rows = read.text.split("\n").slice(1);
  assert.equal(rows.length, 600);
  for (const [index, row] of rows.entries()) assert.equal(row, `Row ${index + 1} name ${"x".repeat(30)} | Customer number ${index + 1} from the village of KakamegaKakamega | ${index * 7}`);
});

test("a password-protected .doc or .xls says so plainly, and a macro or encrypted package is never taken as Word or Excel", () => {
  assert.match(officeText.readOfficeFile(fixture("locked.doc"), "doc").reason, /password-protected/);
  assert.match(officeText.readOfficeFile(fixture("locked.xls"), "xls").reason, /password-protected/);
  assert.equal(legacy.legacyKind(Buffer.from("not a compound file at all, just text that goes on for a while".repeat(20))), "");
  assert.equal(legacy.openCompound(Buffer.concat([Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]), Buffer.alloc(600)])), null, "the signature alone is not a file");
  // damaged files only ever fail: cut short, or scrambled in the middle
  const doc = fixture("sample.doc");
  for (const damaged of [doc.subarray(0, 1000), doc.subarray(0, 12000), Buffer.concat([doc.subarray(0, 700), Buffer.alloc(3000, 0xff), doc.subarray(3700)])]) {
    const read = officeText.readOfficeFile(damaged, "doc");
    assert.ok(read.ok === false || typeof read.text === "string");
  }
  const xls = fixture("sample.xls");
  for (let cut = 600; cut < xls.length; cut += 3777) { const read = officeText.readOfficeFile(xls.subarray(0, cut), "xls"); assert.ok(read.ok === false || typeof read.text === "string"); }
});

test("the pieces: a rk number, and the field codes a Word file keeps around what it shows", () => {
  assert.equal(legacy.rkValue((100 << 2) | 0x02), 100);
  assert.equal(legacy.rkValue((12345 << 2) | 0x03), 123.45);
  assert.equal(legacy.docPlainText("See \u0013 HYPERLINK \"https://x.org\" \u0014the shop\u0015 now\r"), "See the shop now");
  assert.equal(legacy.docPlainText("a\u0007b\u0007\u0007c\r"), "a | b\nc");
});

// ---- the upload route ----
const tmpDir = () => fs.mkdtempSync(path.join(os.tmpdir(), "nexus-legacy-upload-"));
const fakeRequest = (headers, chunks) => { const req = new PassThrough(); req.headers = headers; process.nextTick(() => { for (const chunk of chunks) req.write(chunk); req.end(); }); return req; };
function multipart(filename, mimeType, file) {
  const boundary = "----legacytest" + Math.random().toString(16).slice(2);
  const pre = Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${filename}"\r\nContent-Type: ${mimeType}\r\n\r\n`);
  return { headers: { "content-type": `multipart/form-data; boundary=${boundary}` }, body: Buffer.concat([pre, file, Buffer.from(`\r\n--${boundary}--\r\n`)]) };
}
const store = (dir, filename, mimeType, file, userId = "u1") => { const sent = multipart(filename, mimeType, file); return uploads.parseAndStoreUpload(fakeRequest(sent.headers, [sent.body]), { env: { NEXUS_FILE_STORAGE_DIR: dir }, userId }); };
const env = dir => ({ NEXUS_FILE_UPLOAD_ENABLED: "true", NEXUS_FILE_STORAGE_DIR: dir });

test("a .doc and an .xls are accepted under their own endings (even when the browser's type is vague), and a renamed or fake one is refused and nothing is kept", async () => {
  const dir = tmpDir();
  const doc = await store(dir, "report.doc", officeText.DOC_TYPE, fixture("sample.doc"));
  assert.equal(doc.mimeType, officeText.DOC_TYPE); assert.match(doc.fileId, /\.doc$/);
  const xls = await store(dir, "budget.XLS", officeText.XLS_TYPE, fixture("sample.xls"));
  assert.match(xls.fileId, /\.xls$/);
  for (const vague of ["", "text/plain", "application/octet-stream"]) {
    assert.equal((await store(dir, "old letter.DOC", vague, fixture("sample.doc"))).mimeType, officeText.DOC_TYPE, vague);
    assert.equal((await store(dir, "old budget.xls", vague, fixture("sample.xls"))).mimeType, officeText.XLS_TYPE, vague);
  }
  assert.ok(uploads.acceptedTypes().includes(officeText.DOC_TYPE) && uploads.acceptedTypes().includes(officeText.XLS_TYPE));
  const before = fs.readdirSync(dir).length;
  const refuse = async (filename, type, file) => assert.rejects(store(dir, filename, type, file), error => error.message === "content_does_not_match_declared_type", `${filename} ${type}`);
  await refuse("swapped.doc", officeText.DOC_TYPE, fixture("sample.xls"));
  await refuse("swapped.xls", officeText.XLS_TYPE, fixture("sample.doc"));
  await refuse("fake.doc", officeText.DOC_TYPE, Buffer.from("just some text, not a Word file"));
  await refuse("signature.xls", officeText.XLS_TYPE, Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]));
  assert.equal(fs.readdirSync(dir).length, before, "nothing is left behind by a refused file");
});

test("a stored .doc and .xls are read back through the document tool, like a .docx and an .xlsx", async () => {
  const dir = tmpDir();
  const owner = { id: "u1", role: "Standard User" };
  const doc = await store(dir, "report.doc", officeText.DOC_TYPE, fixture("sample.doc"));
  const readDoc = await documentProvider.analyze({ fileId: doc.fileId }, env(dir), owner);
  assert.equal(readDoc.body.status, "completed");
  assert.match(readDoc.body.message, /^Word document read from a real, user-uploaded file\.$/);
  assert.equal(readDoc.body.data.kind, "doc");
  assert.match(readDoc.body.data.excerpt, /^Mama Grace Shop - monthly report\nWe sold 12 bags of maize/);
  const xls = await store(dir, "budget.xls", officeText.XLS_TYPE, fixture("sample.xls"));
  const readXls = await documentProvider.analyze({ fileId: xls.fileId }, env(dir), owner);
  assert.equal(readXls.body.status, "completed");
  assert.match(readXls.body.message, /^Excel spreadsheet read from a real, user-uploaded file\. 1 hidden sheet was not read\.$/);
  assert.match(readXls.body.data.excerpt, /Sheet "Sales": 7 rows, 5 columns\nDate \| Item \| Qty \| Price \| Total\n2026-10-06 \| Maize/);
  const stranger = await documentProvider.analyze({ fileId: doc.fileId }, env(dir), { id: "u2", role: "Standard User" });
  assert.notEqual(stranger.body.status, "completed");
  // a password-protected one is stored (it is a real Word file) and read with a plain reason
  const locked = await store(dir, "locked.doc", officeText.DOC_TYPE, fixture("locked.doc"));
  assert.match(JSON.stringify((await documentProvider.analyze({ fileId: locked.fileId }, env(dir), owner)).body), /password-protected/);
});
