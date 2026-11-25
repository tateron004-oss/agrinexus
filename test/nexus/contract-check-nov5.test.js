"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { contractReviewRequest, checkContract, reviewSpeech, contractReviewPlan, CAUTION } = require("../../nexus/documents/contract-check.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// "Check contracts" (owner, 5 November 2026): Kyro reads a contract, lease or agreement that was pasted, uploaded or saved, and says what it says about the money, the length and how to end it, what to look at closely, and what
// it could not find, with the sentence it found. A checklist found by words, never legal advice, and it says so.

const CONTRACT = `SERVICE AGREEMENT. This Service Agreement is made on 1 March 2027 between Mama Joy Catering ("Caterer") and Hope Church ("Client").
1. Term. The initial term of this agreement is twelve months. This agreement shall automatically renew for successive one-year terms unless either party gives sixty days written notice of non-renewal.
2. Fees. The Client shall pay $2,500 per month. Payment is due within 15 days of each invoice. Late payments will incur a late fee of 5% per month plus collection costs and attorney's fees.
3. Deposit. A deposit of $1,000 is non-refundable.
4. Early termination. If the Client ends this agreement early it shall pay an early termination fee equal to three months of fees.
5. Liability. The Client shall indemnify and hold harmless the Caterer from any claims. The Client waives all claims against the Caterer.
6. Exclusivity. During the term the Client shall use the Caterer exclusively and shall not compete with the Caterer.
7. Ownership. All recipes and menus developed are works made for hire and the Client assigns all rights to the Caterer.
8. Disputes. Any dispute shall be settled by binding arbitration and the parties waive the right to a jury trial. This agreement is governed by the laws of the State of Delaware.
9. Changes. The Caterer may change these terms at any time without notice.
10. Guarantee. The owner of the Client signs as personal guarantor and is personally liable. Confidential information shall not be disclosed.
Signed: ____________   Date: [date]`;

test("a request to check a contract is understood in everyday words; making one, or anything else, is not", () => {
  for (const say of ["Check my contract", "Please review this lease", "Can you look over my service agreement?", "Is my agreement okay?", "Is this contract fair", "What does my contract say?", "Read my rental agreement for me",
    "Review the contract I uploaded", "Kyro, go through my lease", "Explain my terms and conditions", "Should I sign this contract", "Is there anything risky in my contract?", "check the NDA"]) assert.ok(contractReviewRequest(say), say);
  for (const say of ["Create a service agreement for my client", "Write a contract for my caterer", "Draft a lease", "Make an agreement for the barn", "What is the weather", "Check my email", "Review my day", "Add a customer named Grace", "Check the weather in Nairobi", "Check my balance"]) assert.equal(contractReviewRequest(say), null, say);
  assert.equal(contractReviewRequest("Check my contract").pasted, "");
  assert.equal(contractReviewRequest(`Check this contract: ${CONTRACT}`).pasted.startsWith("SERVICE AGREEMENT"), true);
  assert.equal(contractReviewRequest("Check this contract: short").pasted, "", "a few words after the colon is not a contract");
});

test("the things to look at closely are found with the sentence they came from", () => {
  const review = checkContract(CONTRACT);
  const ids = review.watch.map(item => item.id);
  for (const id of ["renewal", "fee-to-leave", "late-fees", "non-refundable", "liability", "exclusive", "ownership", "disputes", "guarantee", "one-sided-change"]) assert.ok(ids.includes(id), id);
  assert.match(review.watch.find(item => item.id === "renewal").quotes[0], /automatically renew for successive one-year terms/);
  assert.match(review.watch.find(item => item.id === "late-fees").quotes[0], /late fee of 5% per month/);
  assert.match(review.watch.find(item => item.id === "guarantee").quotes[0], /personal guarantor/);
  assert.ok(review.watch.every(item => item.advice.length > 20 && item.quotes.length >= 1 && item.quotes.every(quote => quote.length <= 235)));
  assert.deepEqual(review.plain.map(item => item.id).sort(), ["ending", "law", "length", "money", "private"]);
  assert.match(review.plain.find(item => item.id === "money").quotes[0], /\$2,500 per month/);
  assert.deepEqual(review.missing, []);
  assert.equal(review.blanks, 2, "a signature line and a [date] still blank");
  assert.ok(review.words > 200);
});

test("a friendly contract has nothing flagged, and what is not found is said plainly", () => {
  const plain = "This is a short note between two neighbours. Ahmed will water the garden of Amina every Tuesday while she is away in July and Amina will give Ahmed a basket of mangoes when she returns. If anything changes they will talk to each other first.";
  const review = checkContract(plain);
  assert.equal(review.watch.length, 0); assert.equal(review.plain.length, 0);
  assert.deepEqual(review.missing, ["how either side can end it, and how much notice is needed", "how much is paid and when it is due", "how long it lasts"]);
  const spoken = reviewSpeech(review, { name: "the note" });
  assert.match(spoken, /did not find any of the clauses I usually look at closely/);
  assert.match(spoken, /I did not find words about how either side can end it/);
});

test("the answer says it is not legal advice, quotes the contract, ends with who to ask, and never says it is safe", () => {
  const spoken = reviewSpeech(checkContract(CONTRACT), { name: '"Hope Church agreement"' });
  assert.ok(spoken.startsWith(`I read "Hope Church agreement", about `));
  assert.ok(spoken.includes(CAUTION));
  assert.match(spoken, /Look at these closely \(10\):\n1\. It may renew by itself\. It says: "/);
  assert.match(spoken, /What it says about the basics:\n- The money: "/);
  assert.match(spoken, /There are 2 blanks \(___, \[ \] or TBD\) still to be filled in\. Do not sign until each one is filled in\./);
  assert.match(spoken, /have a lawyer, a legal aid office, or a small business advisor read it\. Ask them about the items above\.$/);
  assert.match(spoken, /2\. Leaving early may cost money\. It says: "If the Client ends this agreement early it shall pay an early termination fee equal to three months of fees\."/, "the whole clause, not its heading");
  assert.doesNotMatch(spoken.replace(CAUTION, ""), /\bis safe\b|\bis fair\b|you should sign|guarantee(?:d)? to be|no risk/i);
  assert.match(reviewSpeech(checkContract("too short"), { name: "x" }), /too short for me to check \(2 words\)/);
});

// ---- through the planner, with a fake saved-document store and a fake upload store
const catalogTools = ["business.manage", "business.query", "documents.create", "lists.create"].map(tool_id => ({ tool_id, domain: tool_id.split(".")[0], description: "", risk_tier: "low", confirmation_required: false }));
function planner(documents) {
  return new OpenEndedPlanner({
    model: { plan: async () => { throw new Error("MODEL_REACHED"); }, respond: async () => { throw new Error("MODEL_REACHED"); } },
    businessWorkspaces: { count: async () => 0 },
    tools: { list: async () => catalogTools }, applications: { list: () => defaultApplicationManifests() },
    memory: Object.assign(fakeMemory(), { search: async () => [] }), documents
  });
}
const ask = (instance, text) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone: "America/Chicago" } });
const store = rows => ({ list: async () => rows.map(({ sourceText, ...row }) => row), getSource: async ({ documentId }) => ({ sourceText: rows.find(row => row.document_id === documentId)?.sourceText || "" }) });

test("the planner reads a saved contract and answers in the conversation, with no model call and no tool step", async () => {
  const plan = await ask(planner(store([{ document_id: "d2", title: "Grocery list", sourceText: "milk" }, { document_id: "d1", title: "Hope Church Service Agreement", sourceText: CONTRACT }])), "Check my contract");
  assert.equal(plan.application, "conversation"); assert.deepEqual(plan.steps, []);
  assert.match(plan.response, /^I read "Hope Church Service Agreement", about /);
  assert.match(plan.response, /It may renew by itself/);
  const pasted = await ask(planner(store([])), `Review this contract: ${CONTRACT}`);
  assert.match(pasted.response, /^I read the contract you gave me/);
  const none = await ask(planner(store([{ document_id: "d2", title: "Grocery list", sourceText: "milk" }])), "Check my lease");
  assert.match(none.response, /^I do not have a contract of yours to check\. Paste the contract here after your request, or upload it/);
  const made = await ask(planner(store([])), "Create a service agreement for my client");
  assert.doesNotMatch(made.response || "", /I read |contract of yours to check/, "making a contract is not checking one");
});

test("an uploaded Word, PDF or text file is read (the newest one, only the person's own) and a file with no readable text is said", async () => {
  const files = { f1: Buffer.from(CONTRACT, "utf8"), f2: Buffer.from("tiny", "utf8") };
  const metas = [{ fileId: "f1", originalFilename: "hope-church.txt", mimeType: "text/plain", uploadedBy: "u1", uploadedAt: "2026-11-05T10:00:00Z" },
    { fileId: "f2", originalFilename: "old.txt", mimeType: "text/plain", uploadedBy: "u1", uploadedAt: "2026-11-01T10:00:00Z" },
    { fileId: "f3", originalFilename: "other-persons.txt", mimeType: "text/plain", uploadedBy: "u2", uploadedAt: "2026-11-06T10:00:00Z" }];
  const deps = { uploads: { uploadDir: () => "dir", listUploadsForUser: () => metas, resolveUploadedFilePath: (dir, id) => (files[id] ? id : null) }, fs: { readFileSync: id => files[id] }, officeText: {} };
  const reply = await contractReviewPlan({ documents: store([]), text: "Check the contract I uploaded", tenantId: "t1", ownerId: "u1", env: {}, deps });
  assert.match(reply.response, /^I read "hope-church\.txt", about /);
  assert.match(reply.response, /It may renew by itself/);
  const empty = await contractReviewPlan({ documents: store([]), text: "Review my uploaded contract", tenantId: "t1", ownerId: "u1", env: {}, deps: { ...deps, uploads: { ...deps.uploads, listUploadsForUser: () => [{ fileId: "f9", originalFilename: "scan.txt", mimeType: "text/plain", uploadedBy: "u1", uploadedAt: "2026-11-05" }], resolveUploadedFilePath: () => "f9" }, fs: { readFileSync: () => Buffer.from("   ") } } });
  assert.match(empty.response, /could not read any text in "scan\.txt"/);
  const broken = await contractReviewPlan({ documents: store([]), text: "Review my uploaded contract", tenantId: "t1", ownerId: "u1", env: {}, deps: { ...deps, uploads: { ...deps.uploads, listUploadsForUser: () => [{ fileId: "f9", originalFilename: "scan.pdf", mimeType: "application/pdf", uploadedBy: "u1", uploadedAt: "2026-11-05" }], resolveUploadedFilePath: () => "f9" }, fs: { readFileSync: () => Buffer.from("not a pdf") } } });
  assert.match(broken.response, /found your uploaded file but could not read it/);
  const nothing = await contractReviewPlan({ documents: store([]), text: "Review my uploaded contract", tenantId: "t1", ownerId: "u1", env: {}, deps: { ...deps, uploads: { ...deps.uploads, listUploadsForUser: () => [metas[2]] } } });
  assert.match(nothing.response, /do not see an uploaded Word, PDF or text file of yours/);
});

test("a real Word file is read through the same office reader the uploads use", async () => {
  const JSZip = require("jszip");
  const zip = new JSZip();
  zip.file("[Content_Types].xml", '<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>');
  zip.file("_rels/.rels", '<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>');
  zip.file("word/document.xml", `<?xml version="1.0"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${CONTRACT.split("\n").map(line => `<w:p><w:r><w:t xml:space="preserve">${line.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</w:t></w:r></w:p>`).join("")}</w:body></w:document>`);
  const buffer = await zip.generateAsync({ type: "nodebuffer" });
  const meta = { fileId: "w1", originalFilename: "lease.docx", mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", uploadedBy: "u1", uploadedAt: "2026-11-05" };
  const deps = { uploads: { uploadDir: () => "dir", listUploadsForUser: () => [meta], resolveUploadedFilePath: () => "w1" }, fs: { readFileSync: () => buffer } };
  const reply = await contractReviewPlan({ documents: store([]), text: "Check the contract in my uploaded Word file", tenantId: "t1", ownerId: "u1", env: {}, deps });
  assert.match(reply.response, /^I read "lease\.docx", about /);
  assert.match(reply.response, /automatically renew for successive one-year terms/);
});

test("the page takes the spoken request as its own turn, in the same places as a document request", () => {
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const line = app.split("\n").find(row => row.startsWith("const KYRO_CONTRACT_CHECK"));
  assert.ok(line);
  const claim = new vm.Script(`${line}\nKYRO_CONTRACT_CHECK`).runInNewContext({});
  for (const say of ["Check my contract.", "Review this lease please", "Kyro, can you look over my service agreement", "Is my agreement okay", "What does my contract say"]) assert.ok(claim.test(say), say);
  for (const say of ["Create a service agreement", "Write a contract for my client", "Check my email", "Open my documents", "What does the weather say"]) assert.ok(!claim.test(say), say);
  assert.match(app, /if \(!options\.typed && KYRO_CONTRACT_CHECK\.test\(said\)\) \{\s+kyroTakeOverTurn\(\);\s+void handleNexusUnifiedBrainRuntimeCommand\(said, \{ source: "typed", kyroDirect: true \}\);\s+return true;\s+\}/);
  assert.match(app, /return KYRO_CONTRACT_CHECK\.test\(said\) \|\| KYRO_OPEN_RESUMES\.test\(said\)/);
});
