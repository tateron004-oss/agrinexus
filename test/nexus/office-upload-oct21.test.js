"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const { PassThrough } = require("node:stream");
const officeText = require("../../server/officeText.js");
const uploads = require("../../server/uploads.js");
const documentProvider = require("../../server/providers/documentProvider.js");
const { makeZip, makeDocx, makeXlsx } = require("../helpers/make-office.js");

// Word (.docx) and Excel (.xlsx) uploads: accepted, checked for what they really are, read as text (a long file a part at a time), and nothing inside a file is ever run or followed.

test("a Word file is read as its words: a paragraph to a line, a table row to a line, &amp; and friends decoded", () => {
  const docx = makeDocx(["Farm Plan 2027", "We will plant maize & beans in March.", { table: [["Crop", "Acres"], ["Maize", "12"]] }, "Signed, Amina"]);
  assert.equal(officeText.officeKind(docx), "docx");
  const read = officeText.readOfficeFile(docx, "docx");
  assert.equal(read.ok, true);
  assert.equal(read.text, "Farm Plan 2027\nWe will plant maize & beans in March.\nCrop | Acres\nMaize | 12\nSigned, Amina");
  assert.equal(read.words, 19);
});

test("an Excel file is read sheet by sheet with its real values: text, numbers, dates and the value of a formula; a hidden sheet is left out and said so", () => {
  const xlsx = makeXlsx([
    { name: "Budget", rows: [["Item", "Qty", "Price", "Due"], ["Seed", 10, 2.5, { date: 46000 }], ["Total", "", { formula: "B2*C2", value: 25 }, ""]] },
    { name: "Notes & more", rows: [["Check the well"]] },
    { name: "Private", hidden: true, rows: [["do not read"]] }
  ]);
  assert.equal(officeText.officeKind(xlsx), "xlsx");
  const read = officeText.readOfficeFile(xlsx, "xlsx");
  assert.equal(read.ok, true);
  assert.match(read.text, /Sheet "Budget": 3 rows, 4 columns\nItem \| Qty \| Price \| Due\nSeed \| 10 \| 2\.5 \| 2025-12-09\nTotal \|  \| 25/);
  assert.match(read.text, /Sheet "Notes & more": 1 row, 1 column\nCheck the well/);
  assert.doesNotMatch(read.text, /do not read/);
  assert.equal(read.hiddenSheets, 1);
  assert.deepEqual(read.sheets.map(sheet => [sheet.name, sheet.rows, sheet.columns]), [["Budget", 3, 4], ["Notes & more", 1, 1]]);
});

test("a long file is read in parts cut at the end of a line, and a very long sheet says how much of it is read", () => {
  const lines = Array.from({ length: 900 }, (_, index) => `Line ${index + 1} of the long report about the harvest`);
  const parts = officeText.textParts(lines.join("\n"), 6000);
  assert.ok(parts.length >= 7);
  assert.equal(parts.join("\n"), lines.join("\n"));
  assert.ok(parts.every(part => part.length <= 6000));
  assert.deepEqual(officeText.textParts("short", 6000), ["short"]);
  const big = makeXlsx([{ name: "Big", rows: Array.from({ length: 5200 }, (_, index) => [`row ${index + 1}`, index]) }]);
  const read = officeText.readOfficeFile(big, "xlsx");
  assert.equal(read.sheets[0].truncated, true);
  assert.equal(read.sheets[0].rows, 5000);
  assert.match(read.text, /only the first 5000 of 5200 rows are read/);
});

test("anything that is not a real Word or Excel file is refused: another ZIP, a macro file renamed, damaged bytes, a part too big when unpacked", () => {
  assert.equal(officeText.officeKind(makeZip({ "readme.txt": "hello" })), "");
  assert.equal(officeText.officeKind(Buffer.from("PK\u0003\u0004 not really a zip")), "");
  assert.equal(officeText.officeKind(Buffer.from("plain text")), "");
  const macro = makeZip({ "[Content_Types].xml": "<Types/>", "word/document.xml": "<w:document/>", "word/vbaProject.bin": "macro" });
  assert.equal(officeText.officeKind(macro), "");
  const bomb = makeZip({ "[Content_Types].xml": "<Types/>", "word/document.xml": "a".repeat(30 * 1024 * 1024) });
  assert.ok(bomb.length < 200000, "a few bytes pack to 30 MB: the shape of a zip bomb");
  const read = officeText.readOfficeFile(bomb, "docx");
  assert.equal(read.ok, false);
  assert.match(read.reason, /could not be read/);
  assert.match(officeText.readOfficeFile(Buffer.from("junk"), "docx").reason, /could not be opened/);
  assert.match(officeText.readOfficeFile(makeDocx([""]), "docx").reason, /no text/);
});

// ---- the upload route's module ----
const tmpDir = () => fs.mkdtempSync(path.join(os.tmpdir(), "nexus-office-upload-"));
const fakeRequest = (headers, chunks) => { const req = new PassThrough(); req.headers = headers; process.nextTick(() => { for (const chunk of chunks) req.write(chunk); req.end(); }); return req; };
function multipart(filename, mimeType, file) {
  const boundary = "----officetest" + Math.random().toString(16).slice(2);
  const pre = Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${filename}"\r\nContent-Type: ${mimeType}\r\n\r\n`);
  return { headers: { "content-type": `multipart/form-data; boundary=${boundary}` }, body: Buffer.concat([pre, file, Buffer.from(`\r\n--${boundary}--\r\n`)]) };
}
const store = (dir, filename, mimeType, file, userId = "u1") => { const sent = multipart(filename, mimeType, file); return uploads.parseAndStoreUpload(fakeRequest(sent.headers, [sent.body]), { env: { NEXUS_FILE_STORAGE_DIR: dir }, userId }); };

test("Word and Excel files are accepted and stored under their own endings; the browser's vague type is settled by the file's ending", async () => {
  const dir = tmpDir();
  const docx = await store(dir, "plan.docx", officeText.DOCX_TYPE, makeDocx(["Hello"]));
  assert.equal(docx.mimeType, officeText.DOCX_TYPE); assert.match(docx.fileId, /\.docx$/);
  const xlsx = await store(dir, "budget.xlsx", officeText.XLSX_TYPE, makeXlsx([{ name: "A", rows: [["x"]] }]));
  assert.match(xlsx.fileId, /\.xlsx$/);
  for (const vague of ["", "text/plain", "application/octet-stream", "application/zip", "application/x-zip-compressed"]) {
    const stored = await store(dir, "My Plan.DOCX", vague, makeDocx(["Hello"]));
    assert.equal(stored.mimeType, officeText.DOCX_TYPE, vague);
  }
  assert.equal(uploads.resolveDeclaredType("application/octet-stream", "notes.txt"), "application/octet-stream", "an ending that is not Word or Excel changes nothing");
  assert.ok(uploads.acceptedTypes().includes(officeText.DOCX_TYPE) && uploads.acceptedTypes().includes(officeText.XLSX_TYPE));
});

test("a file that only says it is Word or Excel is refused, and nothing is kept: a plain ZIP, text, a macro file, the older .doc and .xls, and a macro-enabled type", async () => {
  const dir = tmpDir();
  const refuse = async (filename, type, file, code) => assert.rejects(store(dir, filename, type, file), error => error.message === code, `${filename} ${type}`);
  await refuse("fake.docx", officeText.DOCX_TYPE, makeZip({ "a.txt": "hi" }), "content_does_not_match_declared_type");
  await refuse("fake.xlsx", officeText.XLSX_TYPE, Buffer.from("just some text, not a spreadsheet"), "content_does_not_match_declared_type");
  await refuse("swapped.docx", officeText.DOCX_TYPE, makeXlsx([{ name: "A", rows: [["x"]] }]), "content_does_not_match_declared_type");
  await refuse("macro.docx", officeText.DOCX_TYPE, makeZip({ "[Content_Types].xml": "<Types/>", "word/document.xml": "<w:document/>", "word/vbaProject.bin": "x" }), "content_does_not_match_declared_type");
  await refuse("old.doc", "application/msword", Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]), "unsupported_file_type");
  await refuse("old.xls", "application/vnd.ms-excel", Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]), "unsupported_file_type");
  await refuse("macro.docm", "application/vnd.ms-word.document.macroEnabled.12", makeDocx(["x"]), "unsupported_file_type");
  await refuse("old.doc", "application/octet-stream", makeDocx(["x"]), "unsupported_file_type");
  assert.deepEqual(fs.readdirSync(dir), [], "nothing is left behind by a refused file");
});

// ---- reading what was stored ----
const env = dir => ({ NEXUS_FILE_UPLOAD_ENABLED: "true", NEXUS_FILE_STORAGE_DIR: dir });

test("a stored Word file is read back; a long one in parts, with the next part asked for by number; only its owner can have it read", async () => {
  const dir = tmpDir();
  const paragraphs = Array.from({ length: 500 }, (_, index) => `Paragraph ${index + 1}: the committee agreed to buy seed, water the field and report back.`);
  const meta = await store(dir, "minutes.docx", officeText.DOCX_TYPE, makeDocx(paragraphs));
  const owner = { id: "u1", role: "Standard User" };
  const first = await documentProvider.analyze({ fileId: meta.fileId }, env(dir), owner);
  assert.equal(first.body.status, "completed");
  assert.equal(first.body.data.kind, "docx"); assert.equal(first.body.data.part, 1);
  assert.ok(first.body.data.parts >= 4);
  assert.match(first.body.data.excerpt, /^Paragraph 1:/);
  assert.match(first.body.message, /^Word document read from a real, user-uploaded file\. It is long: this is part 1 of \d+\. Ask for part 2 to continue\./);
  const second = await documentProvider.analyze({ fileId: meta.fileId, part: 2 }, env(dir), owner);
  assert.equal(second.body.data.part, 2);
  assert.doesNotMatch(second.body.data.excerpt, /^Paragraph 1:/);
  assert.equal((await documentProvider.analyze({ fileId: meta.fileId, part: 9999 }, env(dir), owner)).body.data.part, first.body.data.parts, "a part past the end is the last part");
  assert.equal((await documentProvider.analyze({ fileId: meta.fileId, part: "x" }, env(dir), owner)).body.data.part, 1);
  const stranger = await documentProvider.analyze({ fileId: meta.fileId }, env(dir), { id: "u2", role: "Standard User" });
  assert.notEqual(stranger.body.status, "completed");
  assert.match(JSON.stringify(stranger.body), /do not have access/);
});

test("a stored Excel file is read back with its sheets, and a file with nothing readable in it says so plainly", async () => {
  const dir = tmpDir();
  const owner = { id: "u1", role: "Standard User" };
  const meta = await store(dir, "budget.xlsx", officeText.XLSX_TYPE, makeXlsx([{ name: "Budget", rows: [["Item", "Cost"], ["Seed", 25], ["Tools", 40]] }]));
  const read = await documentProvider.analyze({ fileId: meta.fileId }, env(dir), owner);
  assert.equal(read.body.status, "completed");
  assert.match(read.body.message, /^Excel spreadsheet read from a real, user-uploaded file\.$/);
  assert.match(read.body.data.excerpt, /Sheet "Budget": 3 rows, 2 columns\nItem \| Cost\nSeed \| 25\nTools \| 40/);
  assert.deepEqual(read.body.data.sheets, [{ name: "Budget", rows: 3, columns: 2, truncated: false }]);
  const empty = await store(dir, "empty.xlsx", officeText.XLSX_TYPE, makeXlsx([{ name: "Blank", rows: [[""]] }]));
  const blank = await documentProvider.analyze({ fileId: empty.fileId }, env(dir), owner);
  assert.notEqual(blank.body.status, "completed");
  assert.match(JSON.stringify(blank.body), /no cells with anything in them/);
});

// ---- the page ----
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const sliceConst = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf(";\n", start) + 2); };

test("the page offers Word and Excel files, hears 'upload a Word document' and 'upload my spreadsheet', and says plainly that an older .doc or .xls is not read", () => {
  const w = new vm.Script(sliceConst("const KYRO_OPEN_LEAD") + sliceConst("const KYRO_OPEN_UPLOAD") + sliceConst("const KYRO_OLD_OFFICE_FILE") + "({ KYRO_OPEN_UPLOAD, KYRO_OLD_OFFICE_FILE })").runInNewContext({});
  for (const said of ["Upload a Word document.", "I want to upload an Excel file", "Upload my spreadsheet", "Upload a docx", "attach an excel spreadsheet", "Upload a Word document for my loan", "Upload a picture of my crop.", "Open uploads"]) assert.ok(w.KYRO_OPEN_UPLOAD.test(said), said);
  for (const said of ["Upload speed test", "How do I upload?", "Upload a word of thanks to the team and then call Amina tomorrow morning please"]) assert.ok(!w.KYRO_OPEN_UPLOAD.test(said), said);
  for (const name of ["old report.doc", "budget.XLS", "letter.rtf", "template.dot"]) assert.ok(w.KYRO_OLD_OFFICE_FILE.test(name), name);
  for (const name of ["report.docx", "budget.xlsx", "photo.jpg", "scan.pdf", "document.docm"]) assert.ok(!w.KYRO_OLD_OFFICE_FILE.test(name), name);
  assert.match(app, /input\.accept = "image\/jpeg,image\/png,image\/webp,application\/pdf,\.docx,\.xlsx,/);
  assert.match(app, /data-nexus-file-upload-input="true" accept="application\/pdf,image\/png,image\/jpeg,image\/webp,\.docx,\.xlsx,/);
  assert.match(app, /\(\?:Word document\|Excel spreadsheet\) read from a real, user-uploaded file/);
});

test("the voice tool passes the part to read, and the upload refusal says in plain words what can be uploaded", () => {
  assert.match(server, /part: \{ type: "integer", description: "For an uploaded Word or Excel file that is read in parts/);
  assert.match(server, /text: args\.text \|\| args\.content,\s+part: args\.part,/);
  assert.match(server, /unsupported_file_type: "Only pictures \(JPEG, PNG or WebP\), PDF files, Word \(\.docx\) and Excel \(\.xlsx\) files can be uploaded\./);
});

test("the last part of a long file says it is the last, not 'ask for part 1'", async () => {
  const dir = tmpDir();
  const meta = await store(dir, "minutes.docx", officeText.DOCX_TYPE, makeDocx(Array.from({ length: 400 }, (_, index) => `Paragraph ${index + 1}: the committee agreed to buy seed, water the field and report back.`)));
  const owner = { id: "u1", role: "Standard User" };
  const parts = (await documentProvider.analyze({ fileId: meta.fileId }, env(dir), owner)).body.data.parts;
  const last = await documentProvider.analyze({ fileId: meta.fileId, part: parts }, env(dir), owner);
  assert.match(last.body.message, new RegExp(`this is part ${parts} of ${parts}\. That is the last part\.`));
  assert.doesNotMatch(last.body.message, /Ask for part/);
});

// ---- "the next part": said after a file was read ----
function loadFollowUp() {
  const names = ["let kyroLastFileReading", "const KYRO_PART_WORDS", "const KYRO_FILE_LEAD", "const KYRO_FILE_OF", "const KYRO_FILE_PART", "const KYRO_FILE_ON"];
  const code = names.map(sliceConst).join("") + app.slice(app.indexOf("function kyroFileReadingMore("), app.indexOf("async function kyroContinueFileReading(")) + "\nthis.more = kyroFileReadingMore; this.set = value => { kyroLastFileReading = value; };";
  const sandbox = { Date };
  vm.runInNewContext(code, sandbox);
  return sandbox;
}

test("'the next part', 'part 3', 'the last part' and 'read on' go on with the file just read, and mean nothing otherwise", () => {
  const page = loadFollowUp();
  const ask = said => page.more(said);
  assert.equal(ask("read the next part"), 0, "nothing was read yet");
  page.set({ at: Date.now(), part: 2, parts: 5 });
  for (const [said, part] of [["Read me the next part of that document.", 3], ["next part", 3], ["Part 4", 4], ["part four", 4], ["read part 5 of the file", 5], ["go to the last part", 5], ["the previous part", 1], ["read the third part", 3], ["Kyro, read the first part", 1], ["read on", 3], ["keep reading", 3], ["continue reading", 3], ["read the rest", 3], ["part 99", 99]]) assert.equal(ask(said), part, said);
  for (const said of ["what is the weather", "next", "continue", "read the best part", "part of the plan", "open documents", "remind me to read the next part tomorrow", "that part hurts", "play the next song"]) assert.equal(ask(said), 0, said);
  page.set({ at: Date.now() - 31 * 60 * 1000, part: 2, parts: 5 });
  assert.equal(ask("read the next part"), 0, "half an hour later it means nothing");
  page.set({ at: Date.now(), part: 0, parts: 0 });
  assert.equal(ask("read the next part"), 0, "a picture or PDF has no parts");
});

test("the page keeps its place in the file and goes on with it before 'read ... document' is taken for a document's name", () => {
  assert.match(app, /kyroLastFileReading = \{ at: Date\.now\(\), part: Number\(result\?\.providerData\?\.part\) \|\| 0, parts: Number\(result\?\.providerData\?\.parts\) \|\| 0 \};/);
  assert.match(app, /const filePart = typeof kyroFileReadingMore === "function" \? kyroFileReadingMore\(said\) : 0;\s+if \(filePart\) \{ kyroTakeOverTurn\(\); void kyroContinueFileReading\(filePart, lang\); return true; \}\s+if \(typeof kyroWalkthroughCommand/);
  assert.match(app, /KYRO_OPEN_UPLOAD\.test\(said\) \|\| \(typeof kyroFileReadingMore === "function" && kyroFileReadingMore\(said\)\) \|\| KYRO_CROP_HELP\.test\(said\)/);
});
