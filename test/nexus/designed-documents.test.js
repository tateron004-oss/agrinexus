"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const JSZip = require("jszip");
const { PDFParse } = require("pdf-parse");
const design = require("../../server/providers/design-render.js");
const exportProvider = require("../../server/providers/exportProvider.js");
const wording = require("../../nexus/knowledge/handout-wording.js");
const { handoutRequest, handoutTemplate } = require("../../nexus/knowledge/handout-templates.js");
const { scheduleTemplate } = require("../../nexus/knowledge/schedule-templates.js");
const { createDocumentsCreateExecutor } = require("../../nexus/documents/executor.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// A flyer, poster, newsletter, invitation or brochure used to be a plain text document with a Word/PDF file made from it in one font. These are REAL files, opened here as the zip and the PDF they are:
// the Word file's own markup (shading, tables, big type, highlighted blanks) and the PDF's text read back. The text stays the document; the design is read out of it each time.

const CASES = [
  ["flyer", handoutTemplate({ kind: "flyer", subject: "bake sale", when: "Saturday at ten" }), "BAKE SALE"],
  ["poster", handoutTemplate({ kind: "poster", subject: "clean-up day", when: "Sunday at nine" }), "CLEAN-UP DAY"],
  ["newsletter", handoutTemplate({ kind: "newsletter", subject: "Grace Church" }), "GRACE CHURCH"],
  ["invitation", handoutTemplate({ kind: "invitation", subject: "daughter's party", when: "Saturday at 3" }), "Daughter's Party"],
  ["brochure", handoutTemplate({ kind: "brochure", subject: "Mama Joy Catering" }), "MAMA JOY CATERING"],
  ["schedule", scheduleTemplate({ kind: "study", detail: "my biology exam" }), "STUDY SCHEDULE"]
];
const parts = async buffer => { const zip = await JSZip.loadAsync(buffer); return { zip, xml: await zip.file("word/document.xml").async("string") }; };
const wordText = xml => (xml.match(/<w:t[ >][^<]*|<w:t>[^<]*/g) || []).map(piece => piece.replace(/^<w:t[^>]*>/, "")).join(" ").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const pdfText = async buffer => { const parser = new PDFParse({ data: buffer }); try { const result = await parser.getText(); return { text: result.text, pages: result.total }; } finally { await parser.destroy().catch(() => {}); } };
const squash = text => String(text).replace(/\s+/g, " ");

test("each kind makes a real Word file: a valid zip with shading, tables, big type and highlighted blanks", async () => {
  for (const [kind, made, headline] of CASES) {
    const buffer = await design.renderDesignDocx(kind, made.title, made.content);
    assert.equal(buffer.subarray(0, 2).toString(), "PK", kind);
    const { zip, xml } = await parts(buffer);
    for (const name of ["[Content_Types].xml", "word/document.xml", "word/styles.xml"]) assert.ok(zip.file(name), `${kind}: ${name}`);
    assert.match(xml, /<w:shd [^>]*w:fill="FFF59D"/, `${kind}: [bracket] blanks are highlighted light yellow`);
    const accent = design.parseDesign(kind, made.title, made.content).accent;
    if (kind === "invitation") assert.match(xml, new RegExp(`<w:color w:val="${accent.main}"/>`), "the invitation's headline is in the accent colour");
    else assert.match(xml, new RegExp(`<w:shd [^>]*w:fill="${accent.main}"`), `${kind}: the accent colour fills the banner`);
    if (kind !== "invitation") assert.match(xml, /<w:tbl>/, `${kind}: banner and details are tables`);
    const sizes = [...xml.matchAll(/<w:sz w:val="(\d+)"/g)].map(match => Number(match[1]));
    assert.ok(Math.max(...sizes) >= 56, `${kind}: a headline of 28 pt or more (half-points ${Math.max(...sizes)})`);
    assert.ok(sizes.filter(size => size >= 22).length > 0 && sizes.every(size => size >= 18), `${kind}: nothing smaller than 9 pt, even the small print`);
    assert.match(squash(wordText(xml)), new RegExp(headline.replace(/[-.]/g, "\\$&"), "i"), `${kind}: the headline`);
  }
});

test("the flyer's Word file has a white-on-colour banner, a two-column details table with bold labels, a bordered call-to-action box and small print", async () => {
  const made = handoutTemplate({ kind: "flyer", subject: "bake sale", when: "Saturday at ten" });
  const { xml } = await parts(await design.renderDesignDocx("flyer", made.title, made.content));
  assert.match(xml, /<w:color w:val="FFFFFF"\/>/, "white headline");
  for (const label of ["When", "Where", "What", "Cost"]) assert.match(xml, new RegExp(`<w:b\\/>(?:(?!<\\/w:r>).)*<w:t[^>]*>${label}<\\/w:t>`), `bold ${label}`);
  assert.match(xml, /<w:tblBorders>/);
  assert.match(xml, /<w:top w:val="single"[^>]*w:sz="24"/, "the call-to-action box has a thick border");
  assert.match(squash(wordText(xml)), /Questions\? .*\[name and phone number\]/);
  assert.match(xml, /<w:sz w:val="18"\/>/, "the small-print footer");
  assert.match(squash(wordText(xml)), /Saturday at ten/);
});

test("the invitation is centred, large and framed with a double page border; the newsletter has a masthead, ruled headings, a dates table and a contact box", async () => {
  const invite = handoutTemplate({ kind: "invitation", subject: "daughter's party", when: "Saturday at 3" });
  const inviteXml = (await parts(await design.renderDesignDocx("invitation", invite.title, invite.content))).xml;
  assert.match(inviteXml, /<w:pgBorders[^>]*>[\s\S]*w:val="double"/);
  assert.match(inviteXml, /<w:jc w:val="center"\/>/);
  assert.match(inviteXml, /w:ascii="Georgia"/);
  const news = handoutTemplate({ kind: "newsletter", subject: "Grace Church" });
  const newsXml = (await parts(await design.renderDesignDocx("newsletter", news.title, news.content))).xml;
  assert.match(newsXml, /<w:pBdr><w:bottom w:val="single"/, "a coloured rule under each section heading");
  const text = squash(wordText(newsXml));
  for (const heading of ["Welcome", "News", "Dates to remember", "How to reach us", "Date", "What is happening"]) assert.ok(text.includes(heading), heading);
  assert.ok((newsXml.match(/<w:tbl>/g) || []).length >= 3, "masthead, dates table and contact box");
});

test("each kind makes a real PDF from the same text: it starts %PDF, one page, and the text reads back", async () => {
  for (const [kind, made, headline] of CASES) {
    const buffer = await design.renderDesignPdf(kind, made.title, made.content);
    assert.equal(buffer.subarray(0, 5).toString(), "%PDF-", kind);
    assert.match(buffer.subarray(-8).toString(), /%%EOF/, kind);
    const { text, pages } = await pdfText(buffer);
    assert.equal(pages, kind === "schedule" ? pages : 1, `${kind}: one page`);
    assert.ok(squash(text).toLowerCase().includes(headline.toLowerCase()), `${kind}: headline in ${squash(text).slice(0, 120)}`);
    assert.match(squash(text), /\[[a-z ,]+\]/, `${kind}: a blank is still shown in its brackets`);
    assert.match(squash(text), /Made by Kyro from what you said/, `${kind}: the small print`);
  }
  const flyer = await pdfText(await design.renderDesignPdf("flyer", "x", handoutTemplate({ kind: "flyer", subject: "bake sale", when: "Saturday at ten" }).content));
  for (const word of ["When", "Saturday at ten", "Where", "Cost", "Questions?"]) assert.ok(squash(flyer.text).includes(word), word);
});

test("a long newsletter runs on to more pages and a very long headline still fits", async () => {
  const body = ["GRACE CHURCH NEWS FOR THE WHOLE COMMUNITY AND EVERYONE WHO LOVES IT", "March 2027", ""];
  for (let n = 1; n <= 14; n += 1) body.push(`Section ${n}`, "A paragraph of real words that the person typed in. ".repeat(6).trim(), "");
  const text = body.join("\n");
  const pdf = await design.renderDesignPdf("newsletter", "Newsletter", text);
  const read = await pdfText(pdf);
  assert.ok(read.pages > 1);
  assert.ok(squash(read.text).includes("Section 14"));
  const { xml } = await parts(await design.renderDesignDocx("newsletter", "Newsletter", text));
  assert.ok(squash(wordText(xml)).includes("Section 14"));
});

test("the accent colour is one of five safe colours, chosen from the headline: the same words always get the same colour", () => {
  const mains = design.PALETTE.map(colour => colour.main);
  assert.equal(mains.length, 5);
  const seen = new Set();
  for (const subject of ["bake sale", "church picnic", "clinic day", "book fair", "garage sale", "youth camp", "harvest festival", "wedding", "gospel night"]) {
    const accent = design.accentFor(subject.toUpperCase());
    assert.ok(mains.includes(accent.main));
    assert.equal(design.accentFor(subject.toUpperCase()).main, accent.main);
    seen.add(accent.main);
  }
  assert.ok(seen.size >= 3, "different subjects get different colours");
  assert.equal(design.accentFor("BAKE SALE [the place]").main, design.accentFor("BAKE SALE").main, "a [blank] does not change the colour");
});

test("what a person types into the box is read again: When/Where lines become the details table, 'Questions?' the call-to-action, a short line over sentences a heading", () => {
  const typed = "COMMUNITY BAKE SALE\nCome and join us\n\nWhen: Saturday at 10:30 am\nWhere: the church hall\nCost: free\n\nBring a friend\nEveryone is welcome.\n\nQuestions? Call Amina on 0712 345 678\n\nMade by Kyro from what you said.";
  const ir = design.parseDesign("flyer", "Flyer", typed);
  assert.equal(ir.headline, "COMMUNITY BAKE SALE");
  assert.equal(ir.subhead, "Come and join us");
  const rows = ir.sections.flatMap(section => section.items).filter(item => item.type === "row");
  assert.deepEqual(rows.map(row => [row.label, row.value]), [["When", "Saturday at 10:30 am"], ["Where", "the church hall"], ["Cost", "free"]]);
  assert.equal(ir.cta, "Questions? Call Amina on 0712 345 678");
  assert.ok(ir.sections.some(section => section.heading === "Bring a friend"));
  assert.match(ir.footer, /^Made by Kyro/);
  assert.equal(design.parseDesign("flyer", "x", "").headline, "x", "no text still has a headline");
});

test("exportDocument designs only when a known design kind is given; every other document is exactly as before", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "designed-"));
  try {
    const env = { NEXUS_EXPORT_DIR: dir };
    const made = handoutTemplate({ kind: "flyer", subject: "bake sale", when: "Saturday at ten" });
    const plain = await exportProvider.exportDocument({ confirmed: true, title: made.title, content: made.content, format: "docx" }, env);
    assert.equal(plain.body.data.design, undefined);
    assert.doesNotMatch((await parts(fs.readFileSync(plain.body.data.localPath))).xml, /FFF59D/, "the plain Word file has no design");
    const unknown = await exportProvider.exportDocument({ confirmed: true, title: made.title, content: made.content, format: "docx", design: "banana" }, env);
    assert.equal(unknown.body.data.design, undefined);
    for (const format of ["docx", "pdf"]) {
      const result = await exportProvider.exportDocument({ confirmed: true, title: made.title, content: made.content, format, design: "flyer" }, env);
      assert.equal(result.body.data.design, "flyer");
      const bytes = fs.readFileSync(result.body.data.localPath);
      if (format === "docx") assert.match((await parts(bytes)).xml, /FFF59D/); else assert.equal(bytes.subarray(0, 5).toString(), "%PDF-");
    }
    // a text file has no design to give
    const txt = await exportProvider.exportDocument({ confirmed: true, title: made.title, content: made.content, format: "txt", design: "flyer" }, env);
    assert.equal(txt.body.data.design, undefined);
    assert.match(fs.readFileSync(txt.body.data.localPath, "utf8"), /BAKE SALE/);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});

test("the design is kept with the document: created with it, a 'Save changes' keeps it, and a document with no design stays plain", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "designed-docs-"));
  const created = []; const versions = []; let stored = null;
  const documents = {
    async create(args) { created.push(args); stored = { document_id: "doc_1", title: args.title, document_type: args.documentType, metadata: args.metadata, version: 1 }; return stored; },
    async addVersion(args) { versions.push(args); return { version: versions.length }; },
    async get() { return stored ? { ...stored, version: versions.length } : null; }
  };
  try {
    const execute = createDocumentsCreateExecutor({ env: { NEXUS_EXPORT_DIR: dir }, documents });
    const context = { tenantId: "t1", userId: "u1" };
    const made = handoutTemplate({ kind: "flyer", subject: "bake sale", when: "Saturday at ten" });
    const first = await execute({ input: { title: made.title, content: made.content, format: "docx", design: "flyer" }, context, taskId: "tsk_1" });
    assert.equal(first.documentId, "doc_1");
    assert.equal(created[0].metadata.design, "flyer", "the design kind is in the document's metadata");
    assert.match((await parts(Buffer.from(versions[0].content.contentBase64, "base64"))).xml, /FFF59D/, "the stored (and so downloaded) file is the designed one");
    assert.equal(versions[0].content.sourceText, made.content, "the text is the source");
    // Save changes: the same document id, only the new text, no design named: the design comes from the document
    const edited = made.content.replace("[the place]", "the church hall");
    const second = await execute({ input: { documentId: "doc_1", content: edited, reopenAfterSave: true }, context, taskId: "tsk_2" });
    assert.equal(second.updated, true);
    const { xml } = await parts(Buffer.from(versions[1].content.contentBase64, "base64"));
    assert.match(xml, /FFF59D/, "still designed after the edit");
    assert.ok(squash(wordText(xml)).includes("the church hall"), "with the edited words");
    assert.equal(versions[1].content.sourceText, edited);
    // a metadata that comes back as text still works
    stored = { ...stored, metadata: JSON.stringify({ design: "flyer" }) };
    await execute({ input: { documentId: "doc_1", content: edited }, context, taskId: "tsk_3" });
    assert.match((await parts(Buffer.from(versions[2].content.contentBase64, "base64"))).xml, /FFF59D/);
    // a document made without a design is not designed by an edit
    created.length = 0; versions.length = 0; stored = null;
    await execute({ input: { title: "Farm Plan", content: "Plant maize in March\n\nWhen: [the day]", format: "docx" }, context, taskId: "tsk_4" });
    assert.equal(created[0].metadata.design, undefined);
    await execute({ input: { documentId: "doc_1", content: "Plant maize in April" }, context, taskId: "tsk_5" });
    assert.doesNotMatch((await parts(Buffer.from(versions[1].content.contentBase64, "base64"))).xml, /FFF59D/);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});

// ----- what the planner passes, and the wording of a person's own facts -----
const catalogTools = ["business.manage", "business.query", "documents.create", "lists.create"].map(tool_id => ({ tool_id, domain: tool_id.split(".")[0], description: "", risk_tier: "low", confirmation_required: false }));
function planner({ respond, documents, calls = [] }) {
  return new OpenEndedPlanner({
    model: { plan: async () => { throw new Error("MODEL_REACHED"); }, respond: async request => { calls.push(request); return respond ? respond(request) : null; } },
    businessWorkspaces: { count: async () => 0 },
    tools: { list: async () => catalogTools },
    applications: { list: () => defaultApplicationManifests() },
    memory: Object.assign(fakeMemory(), { search: async () => [] }),
    documents
  });
}
const ask = (instance, text) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone: "America/Chicago" } });
const input = plan => plan.steps[0].input;

test("a flyer with only a subject and a day is the fixed layout with its design kind and NO model call; the kinds map to their designs", async () => {
  const calls = [];
  const plan = await ask(planner({ calls }), "Make me a flyer for my bake sale on Saturday.");
  assert.equal(calls.length, 0);
  assert.deepEqual({ title: input(plan).title, design: input(plan).design, format: input(plan).format }, { title: "Bake Sale Flyer", design: "flyer", format: "docx" });
  assert.match(input(plan).content, /^BAKE SALE\n\nWhen: Saturday\nWhere: \[the place\]/);
  const cases = { "Make me a poster for the clinic day.": "poster", "Create a newsletter for the church.": "newsletter", "Write an invitation to my daughter's party.": "invitation", "Draft a brochure for my shop.": "brochure", "Draft a handout for the class.": "brochure", "Write a marketing email for my bake sale on Saturday.": "flyer" };
  for (const [say, kind] of Object.entries(cases)) assert.equal(input(await ask(planner({}), say)).design, kind, say);
  assert.equal(calls.length, 0);
});

test("'as a PDF' gives the designed PDF; a schedule is designed too; 'export it as a PDF' keeps the design of the saved document", async () => {
  const pdf = await ask(planner({}), "Create a newsletter for the church as a PDF.");
  assert.deepEqual({ format: input(pdf).format, design: input(pdf).design }, { format: "pdf", design: "newsletter" });
  const schedule = await ask(planner({}), "Make a study schedule for my exam.");
  assert.equal(input(schedule).design, "schedule");
  const documents = { list: async () => [{ document_id: "doc_1", title: "Bake Sale Flyer", metadata: { design: "flyer" } }], getSource: async () => ({ title: "Bake Sale Flyer", sourceText: "BAKE SALE\n\nWhen: Saturday" }) };
  const exported = await ask(planner({ documents }), "Export it as a PDF.");
  assert.deepEqual({ format: input(exported).format, design: input(exported).design }, { format: "pdf", design: "flyer" });
  const textDoc = await ask(planner({ documents: { ...documents, list: async () => [{ document_id: "doc_2", title: "Maize Sales", metadata: {} }] } }), "Export it as a PDF.");
  assert.equal(input(textDoc).design, undefined, "a document that was never designed is not designed by an export");
});

test("the details a person gives are sorted into the layout by one model call, from their own words only", async () => {
  const say = "Make me a flyer for my bake sale on Saturday at ten at the church hall.";
  const calls = [];
  const plan = await ask(planner({ calls, respond: async () => JSON.stringify({ headline: "Bake Sale", subhead: "", when: "Saturday at ten", where: "the church hall", what: "", cost: "", contact: "", points: [] }) }), say);
  assert.equal(calls.length, 1);
  assert.match(calls[0].instructions, /never invent/);
  assert.deepEqual(calls[0].capabilities, []);
  assert.equal(input(plan).design, "flyer");
  assert.equal(input(plan).title, "Bake Sale Flyer");
  assert.match(input(plan).content, /^BAKE SALE\n\nWhen: Saturday at ten\nWhere: the church hall\nWhat: \[what is happening, or what is for sale\]\nCost: \[the price, or free\]/);
  const read = design.parseDesign("flyer", input(plan).title, input(plan).content);
  assert.equal(read.headline, "BAKE SALE");
  const rows = read.sections.flatMap(section => section.items).filter(item => item.type === "row");
  assert.deepEqual(rows.slice(0, 2).map(row => [row.label, row.value]), [["When", "Saturday at ten"], ["Where", "the church hall"]]);
});

test("nothing is invented: a fact the person did not say is dropped back to its [bracket]; a model that fails or answers with rubbish gives the fixed layout", async () => {
  const say = "Make me a flyer for my bake sale on Saturday at ten at the church hall.";
  const invented = await ask(planner({ respond: async () => JSON.stringify({ headline: "Bake Sale", when: "Saturday at 10 am", where: "Grace Community Hall", what: "fresh delicious cakes", cost: "$5 a slice", contact: "call 555 1234", subhead: "The best bake sale in town", points: ["free parking"] }) }), say);
  assert.doesNotMatch(input(invented).content, /Grace Community|delicious|\$5|555|best bake|parking|10 am/);
  assert.match(input(invented).content, /When: Saturday at ten at the church hall\nWhere: \[the place\]\nWhat: \[what is happening, or what is for sale\]\nCost: \[the price, or free\]/);
  const fixed = handoutTemplate(handoutRequest(say)).content;
  for (const respond of [async () => { throw new Error("model down"); }, async () => null, async () => "Sure! Here is a lovely flyer for you.", async () => "{not json", async () => JSON.stringify({ unrelated: "x" }), async () => JSON.stringify(["a"])]) {
    const plan = await ask(planner({ respond }), say);
    assert.equal(input(plan).content, fixed);
    assert.equal(input(plan).design, "flyer");
  }
});

test("the validator keeps only the person's own words and numbers", () => {
  const said = "Make a flyer for the youth camp, Saturday 12 July at nine at Riverside Park, it costs 5 dollars, call Amina on 0712345678";
  const facts = wording.validateWording('Here you go: {"headline":"Youth Camp","when":"Saturday 12 July at nine","where":"Riverside Park","cost":"5 dollars","contact":"call Amina on 0712345678","what":"amazing games","points":["Riverside Park","12 July","free lunch"],"subhead":"Join us"}', said);
  assert.deepEqual({ ...facts }, { headline: "Youth Camp", subhead: "Join us", when: "Saturday 12 July at nine", where: "Riverside Park", what: "", cost: "5 dollars", contact: "call Amina on 0712345678", points: ["Riverside Park", "12 July"] });
  assert.equal(wording.validateWording({ when: "Saturday 13 July at nine" }, said), null, "a number the person did not say");
  assert.equal(wording.validateWording({ cost: "$5" }, said), null, "a currency sign the person did not say");
  assert.equal(wording.validateWording({ headline: "[Youth] Camp" }, said), null, "no brackets from the model");
  assert.equal(wording.validateWording({ headline: "x".repeat(200) }, said), null);
});

test("a model call is only made when the person gave details beyond a subject and a day", () => {
  const needs = say => wording.needsWording(handoutRequest(say));
  for (const say of ["Make me a flyer.", "Make me a flyer for my bake sale on Saturday.", "Create a newsletter for the church.", "Make a poster for the clinic day.", "Make me a flyer for my bake sale on Saturday as a PDF."]) assert.equal(needs(say), false, say);
  for (const say of ["Make me a flyer for my bake sale on Saturday at ten at the church hall.", "Make a poster for the clinic day, free for everyone, at the town hall.", "Write an invitation to my daughter's party on Saturday at 3."]) assert.equal(needs(say), true, say);
  assert.equal(wording.designFor("handout"), "brochure");
  assert.equal(wording.designFor("email"), "flyer");
});

test("a newsletter with news given is worded the same way and designed", async () => {
  const say = "Create a newsletter for the church with news about the roof repair and the youth camp as a PDF.";
  const plan = await ask(planner({ respond: async () => JSON.stringify({ headline: "The Church", subhead: "", when: "", where: "", what: "", cost: "", contact: "", points: ["the roof repair", "the youth camp"] }) }), say);
  assert.equal(input(plan).format, "pdf");
  assert.equal(input(plan).design, "newsletter");
  assert.match(input(plan).content, /News\n- the roof repair\n- the youth camp/);
  const text = squash((await pdfText(await design.renderDesignPdf("newsletter", input(plan).title, input(plan).content))).text);
  assert.ok(text.includes("the roof repair") && text.includes("the youth camp"));
});
