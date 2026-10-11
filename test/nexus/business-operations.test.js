"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vd = require("../../nexus/business/voice-dispatch.js");
const operations = require("../../nexus/business/operations-voice.js");
const csv = require("../../public/business-csv.js");
const { createBusinessApi } = require("../../nexus/business/api.js");
const { createBusinessReader } = require("../../nexus/business/authoritative-executor.js");

// Phase 3b of the business-intelligence tools, asked for by the owner on 10 October 2026: the papers that expire (licences, insurance, certifications, policies, board records, filings) with reminders; the inventory of products,
// supplies, equipment and donated goods; where donors and customers came from; what a contract or grant requires and when its reports are due; and a spreadsheet import.

const TZ = "UTC";
const day = offset => new Date(Date.now() + offset * 86400000).toISOString().slice(0, 10);

function makeWorkspace() {
  const rows = new Map(); const grants = new Map(); let n = 0;
  const repository = {
    async create(item) { const row = { record_id: "rec_" + (++n), tenant_id: item.tenantId, owner_id: item.ownerId, version: 1, data: structuredClone(item.data), updated_at: new Date().toISOString() }; rows.set(row.record_id, row); return structuredClone(row); },
    async getOwned(item) { const row = rows.get(item.recordId); if (!row) throw Object.assign(new Error("Not found"), { status: 404 }); return structuredClone(row); },
    async list() { return [...rows.values()].map(r => structuredClone(r)); },
    async update(item) { const row = rows.get(item.recordId); row.data = structuredClone(item.data); row.version++; return structuredClone(row); }
  };
  const consents = { async active(i) { return grants.get(i.scope); }, async grant(i) { const g = { ...i, consent_id: i.scope }; grants.set(i.scope, g); return g; }, async revoke() {} };
  const access = { async authorize() {} };
  const context = { tenantId: "t1", userId: "u1", timeZone: TZ };
  const api = createBusinessApi({ access, consents, agent: null }, { env: {}, repository });
  const businessRequest = ({ method, pathname, body = {} }) => api.handle({ method, pathname, context, body });
  const read = createBusinessReader({ repository, access, consents, env: {} });
  return { businessRequest, repository, access, consents, context, rows,
    async create() { return (await businessRequest({ method: "POST", pathname: "/api/nexus/runtime/business/clients", body: { businessName: "Hope Garden", businessType: "nonprofit", consent: true } })).body; },
    editable: async () => [...rows.values()][0].data.editable,
    say: text => read({ command: text, context }),
    async confirm(text) { const prompt = await read({ command: text, context }); assert.match(prompt, /Should I go ahead\?/, `${text}: ${prompt}`); return read({ command: "yes", context }); } };
}
async function ready() { const workspace = makeWorkspace(); await workspace.create(); return workspace; }

test("which sentences are about the register, the inventory, sources and contracts, and which are left to the existing intents", () => {
  const yes = {
    addCompliance: ["Add a license: food handler permit, expires March 3", "Add our liability insurance policy expiring December 1 with Acme Insurance, policy number 12345", "Add a certification: WOSB, planned", "Record a board record: annual meeting minutes"],
    updateCompliance: ["Renewed the food handler permit until March 2027", "Mark the WOSB certification as approved", "Mark the liability insurance policy expired"],
    complianceDue: ["What licenses are expiring?", "When does our insurance expire?", "What is due for renewal?", "Show compliance", "Which permits expire soon?"],
    certificationReadiness: ["What certifications do we have?", "Show certification readiness", "Are we certified?"],
    addInventory: ["Add 20 jars of candles to inventory", "Received 30 donated blankets", "Put 5 boxes of pens into inventory"],
    useInventory: ["We used 4 jars of candles from inventory", "We threw away 2 blankets from inventory", "Remove 3 pens from inventory"],
    setInventory: ["Set inventory of candles to 12", "We have 12 candles in inventory"],
    setReorderLevel: ["Set the reorder level for soil to 10", "Reorder candles when it drops to 5"],
    inventoryList: ["Show inventory", "How many candles do we have in inventory?", "What is our inventory worth?", "How much have we wasted?"],
    inventoryLow: ["What is running low in inventory?", "Is anything low on stock in inventory?"],
    setSource: ["Maria Chen came from the newsletter", "Set the source of Maria Chen to Facebook", "We got Grace Otieno from a referral"],
    sourceBreakdown: ["Where do our donors come from?", "Which marketing brings the most customers?", "How did we find our volunteers?"],
    setGrantDetails: ["The City Parks contract requires quarterly reports, first due January 15", "City Parks eligibility: nonprofits in Cook County", "Mark Green Fund as a contract"],
    reportingDue: ["What reports are due?", "Which grants have reporting requirements?"]
  };
  for (const [intent, texts] of Object.entries(yes)) for (const text of texts) assert.equal(operations.classifyOperations(text), intent, text);
  const no = ["Add a donor named Maria Chen", "Add a bill from the landlord for 800 dollars", "We came from Nairobi", "The money came from a grant", "Create a service contract for a client", "Which grants are due soon?", "Show my customers", "We used 4 bags of soil", "How many bags of maize do I have",
    "What is the weather", "Register my business as an LLC", "Add a grant from Green Fund", "Am I eligible for the 8(a) program?", "Tell me a joke", ""];
  for (const text of no) assert.equal(operations.classifyOperations(text), null, text);
  assert.equal(vd.classify("Add a contract with City Parks for 20000 dollars due December 1"), "addGrant");
  assert.equal(vd.classify("Create a service contract for a client"), "generateDocuments");
  for (const intent of operations.OPERATIONS_READ_INTENTS) assert.equal(vd.isReadIntent(intent), true, intent);
  for (const intent of operations.OPERATIONS_WRITE_INTENTS) assert.equal(vd.isReadIntent(intent), false, intent);
  assert.equal(vd.asksAboutOwnRecords("What licenses are expiring?"), true);
});

test("the register: added with its expiry, renewed, marked, read back; a paper with no date is said to give no reminder", async () => {
  const workspace = await ready();
  assert.match(await workspace.say("What licenses are expiring?"), /The register in "Hope Garden" is empty/);
  assert.match(await workspace.say("Add a license: food handler permit, expires March 3"), /I can add the food handler permit \(licence, expires \w+ 3 March\) to the register in "Hope Garden"\. Should I go ahead\?/);
  assert.match(await workspace.say("yes"), /Added the food handler permit to the register.* I will remind you before it expires/);
  assert.match(await workspace.confirm("Add our liability insurance policy expiring December 1 with Acme Insurance, policy number 12345"), /Added the liability insurance policy/);
  const prompt = await workspace.say("Add a licence: business licence");
  assert.match(prompt, /You did not say when it expires, so I will not be able to remind you/);
  await workspace.say("yes");
  let register = (await workspace.editable()).compliance;
  assert.deepEqual(register.map(row => [row.item, row.kind, row.status]), [["food handler permit", "license", "active"], ["liability insurance policy", "insurance", "active"], ["business licence", "license", "active"]]);
  assert.equal(register[0].expires.slice(5), "03-03"); assert.equal(register[1].expires.slice(5), "12-01");
  assert.deepEqual([register[1].issuer, register[1].number], ["Acme Insurance", "12345"]);
  assert.equal(register[2].expires, "");
  const due = await workspace.say("What is due for renewal?");
  assert.match(due, /expiring in the next 60 days: liability insurance policy \(insurance\), expires/);
  assert.match(due, /1 paper with no expiry date, so no reminder: business licence/);
  assert.match(due, /I do not check that a licence is valid/);
  assert.match(await workspace.confirm("Renewed the food handler permit until March 2028"), /Marked the food handler permit renewed until \w+ 31 March in "Hope Garden"/);
  register = (await workspace.editable()).compliance;
  assert.equal(register[0].expires.slice(0, 4), "2028"); assert.equal(register[0].expires.slice(5), "03-31");
  assert.match(await workspace.say("Renewed the food handler permit"), /Renewed until when\?/);
  assert.match(await workspace.confirm("Mark the liability insurance policy expired"), /as expired/);
  assert.match(await workspace.say("When does our insurance expire?"), /liability insurance policy \(insurance, expired\)/);
  assert.match(await workspace.say("Renewed the pizza oven licence until March 2027"), /More than one paper matches: food handler permit and business licence/, "a name not in the register, with two licences there: asks which");
  assert.match(await workspace.say("Renewed the zoning certificate until March 2027"), /could not tell which paper/, "nothing of that kind at all: says so");
});

test("certifications: tracked by stage, with a plain statement that eligibility is not checked and where the checked guide is", async () => {
  const workspace = await ready();
  assert.match(await workspace.say("What certifications do we have?"), /No certifications are tracked in "Hope Garden"/);
  await workspace.confirm("Add a certification: WOSB, planned");
  await workspace.confirm("Add a certification: 8(a), applied");
  await workspace.confirm("Add a certification: HUBZone expires December 1");
  const text = await workspace.say("Show certification readiness");
  assert.match(text, /held: HUBZone \(expires/); assert.match(text, /Applied or pending: 8\(a\)/); assert.match(text, /Planned, not yet applied: WOSB/);
  assert.match(text, /I do not check your eligibility/); assert.match(text, /how do I get certified as a minority-owned business/);
  assert.equal((await workspace.editable()).compliance.find(row => row.item === "WOSB").kind, "certification");
});

test("inventory: add, donated goods, use, waste, set, reorder level, low stock, worth; never takes out more than there is", async () => {
  const workspace = await ready();
  assert.match(await workspace.say("Show inventory"), /inventory in "Hope Garden" is empty/);
  assert.match(await workspace.confirm("Add 20 jars of candles to inventory"), /Added to the inventory of candles: 20/);
  assert.match(await workspace.say("Received 30 donated blankets"), /as donated goods, as a new donated item/);
  await workspace.say("yes");
  assert.match(await workspace.confirm("Add 5 more candles to inventory"), /Added to the inventory of candles: 25/);
  assert.match(await workspace.say("We used 40 jars of candles from inventory"), /has only 25 jars of candles in the inventory, so I have not taken 40 out/);
  assert.match(await workspace.confirm("We used 4 jars of candles from inventory"), /Took 4 candles out of the inventory; 21 left/);
  assert.match(await workspace.confirm("We threw away 2 jars of candles from inventory"), /as waste; 19 left/);
  assert.match(await workspace.say("Remove 3 gadgets from inventory"), /no gadgets in the inventory/);
  let items = (await workspace.editable()).inventory;
  assert.deepEqual(items.map(row => [row.item, row.kind, row.quantity, row.unit, row.wasted]), [["candles", "product", 19, "jars", 2], ["blankets", "donated", 30, "", 0]]);
  assert.match(await workspace.say("How many candles do we have in inventory?"), /19 jars of candles/);
  assert.match(await workspace.say("How much have we wasted?"), /Counted as waste in "Hope Garden": 2 candles/);
  const noLevel = await workspace.say("What is running low in inventory?");
  assert.match(noLevel, /nothing is at or below its reorder level/); assert.match(noLevel, /2 items have no reorder level set/);
  assert.match(await workspace.confirm("Set the reorder level for candles to 20"), /Set the reorder level for candles to 20/);
  assert.match(await workspace.say("What is running low in inventory?"), /at or below the reorder level: candles \(19, reorder at 20\)/);
  assert.match(await workspace.confirm("Set inventory of candles to 40"), /Set the inventory of candles: 40/);
  assert.match(await workspace.say("What is running low in inventory?"), /nothing is at or below its reorder level/);
  assert.match(await workspace.say("What is our inventory worth?"), /No item in "Hope Garden" has a value per unit recorded/);
  const [record] = [...workspace.rows.values()];
  record.data.editable.inventory[0].value = 2.5; record.data.editable.inventory[1].value = 4;
  assert.match(await workspace.say("What is our inventory worth?"), /worth \$220\.00, counting only items that have a value per unit recorded \(2 of 2\)/);
  const list = await workspace.say("Show inventory");
  assert.match(list, /products: 40 candles; donated goods: 30 blankets/);
  items = (await workspace.editable()).inventory;
  assert.equal(items.length, 2);
});

test("where contacts came from: noted on the person, counted by source, with cost only from money logged under that name", async () => {
  const workspace = await ready();
  assert.match(await workspace.say("Where do our donors come from?"), /has no donors yet/);
  await workspace.confirm("Add a donor named Maria Chen");
  await workspace.confirm("Add a donor named Sam Park");
  await workspace.confirm("Add a donor named Pat Lopez");
  assert.match(await workspace.say("Where do our donors come from?"), /None of the 3 donors in "Hope Garden" has a source recorded/);
  assert.match(await workspace.say("Maria Chen came from the newsletter"), /I can note that Maria Chen came from newsletter in "Hope Garden"/);
  await workspace.say("yes");
  await workspace.confirm("Set the source of Sam Park to the newsletter");
  await workspace.confirm("We got Pat Lopez from a referral");
  assert.match(await workspace.say("Nobody Known came from Facebook"), /is not on your list/);
  await workspace.confirm("We spent 90 dollars on the newsletter");
  const text = await workspace.say("Where do our donors come from?");
  assert.match(text, /newsletter 2 \(\$90\.00 spent logged under that name, about \$45\.00 each\) and referral 1/);
  assert.match(text, /only money you logged with the source's name/);
  assert.doesNotMatch(text, /Maria|Sam|Pat/, "a count by source names nobody");
  assert.match(await workspace.say("Which marketing brings the most customers?"), /has no customers yet/);
  assert.deepEqual((await workspace.editable()).leads.map(row => row.source), ["newsletter", "newsletter", "referral"]);
});

test("contracts and reporting: a contract is kept as a contract, with what it requires, its eligibility and its next report; reports due are read back", async () => {
  const workspace = await ready();
  assert.match(await workspace.say("What reports are due?"), /No grant or contract in "Hope Garden" has reporting requirements/);
  assert.match(await workspace.say("Add a contract with City Parks for 20000 dollars due December 1"), /I can add a \$20,000\.00 contract from "City Parks" to "Hope Garden"/);
  await workspace.say("yes");
  await workspace.confirm("Add a grant from Green Fund for 5000 dollars due November 20");
  assert.match(await workspace.say("The City Parks contract requires quarterly reports, first due January 15"), /note for City Parks in "Hope Garden": a contract; it requires quarterly reports; next report due \w+ 15 January/);
  await workspace.say("yes");
  await workspace.confirm("City Parks eligibility: nonprofits in Cook County");
  await workspace.confirm("Mark Green Fund as a loan");
  const grants = (await workspace.editable()).grants;
  const contract = grants.find(row => row.funderName === "City Parks"); const fund = grants.find(row => row.funderName === "Green Fund");
  assert.deepEqual([contract.kind, contract.requirements, contract.eligibility, contract.amount], ["contract", "quarterly reports", "nonprofits in Cook County", 20000]);
  assert.match(contract.reportDue, /^\d{4}-01-15$/); assert.equal(fund.kind, "loan");
  const reports = await workspace.say("What reports are due?");
  assert.match(reports, /City Parks \(quarterly reports\), due \w+ 15 January/);
  const deadlines = await workspace.say("Which grants or contracts have approaching deadlines?");
  assert.match(deadlines, /City Parks contract \$20,000\.00/); assert.match(deadlines, /Green Fund loan \$5,000\.00/);
  assert.match(deadlines, /Contracts and bids are tracked here with the grants/);
  assert.match(await workspace.say("The Gates contract requires audits"), /could not tell which grant or contract/);
  assert.equal(await workspace.say("Create a service contract for a client"), null, "a document request is left to the screen path, not added as a contract to track");
});

test("the schema keeps the register, the inventory and the contract fields, and reads an older workspace back with them empty", async () => {
  const workspace = await ready();
  const [record] = [...workspace.rows.values()];
  for (const key of ["compliance", "inventory"]) delete record.data.editable[key];
  const read = (await workspace.businessRequest({ method: "GET", pathname: `/api/nexus/runtime/business/clients/${record.record_id}` })).body;
  assert.deepEqual(read.data.editable.compliance, []); assert.deepEqual(read.data.editable.inventory, []);
  const editable = { ...read.data.editable,
    compliance: [{ item: "Permit", kind: "license", issuer: "City", number: "7", expires: "2027-03-03", status: "active", notes: "" }],
    inventory: [{ item: "Candles", kind: "product", quantity: 3, unit: "jars", reorderAt: 1, value: 2, currency: "USD", location: "", wasted: 0, notes: "" }],
    grants: [{ funderName: "F", program: "", amount: 1, currency: "USD", deadline: "", status: "researching", notes: "", kind: "contract", eligibility: "e", requirements: "r", reportDue: "2027-01-01" }] };
  const saved = (await workspace.businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${record.record_id}`, body: { expectedVersion: read.version, info: read.data.info, editable } })).body;
  assert.deepEqual(saved.data.editable.compliance, editable.compliance); assert.deepEqual(saved.data.editable.inventory, editable.inventory); assert.equal(saved.data.editable.grants[0].reportDue, "2027-01-01");
  await assert.rejects(workspace.businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${record.record_id}`, body: { expectedVersion: saved.version, info: saved.data.info, editable: { ...editable, inventory: [{ ...editable.inventory[0], quantity: -1 }] } } }), /./);
});

test("the spreadsheet import: contacts, money and inventory are read on the device, good rows kept, bad rows listed with the reason, nothing guessed", () => {
  assert.deepEqual(csv.parseCsv('a,b\n"x, y","say ""hi"""\r\n\r\nz,\n'), [["a", "b"], ["x, y", 'say "hi"'], ["z", ""]]);
  assert.deepEqual(csv.parseCsv("﻿name\nA"), [["name"], ["A"]]);
  const contacts = csv.importRows("contacts", 'Name,Email,Type,Consent,Follow-up,Skills\n"Chen, Maria",maria@x.org,donor,yes,10/9/2026,\nSam Park,,volunteer,declined,2026-10-12,cooking\n,nobody,customer,,,\nPat,pat@x.org,donor,maybe,,\nDana,,client,given,31/31/2026,\nMaria Chen,maria@x.org,donor,,,\n', [{ name: "Maria Chen", contact: "maria@x.org" }], { limit: 200 });
  assert.deepEqual(contacts.rows.map(row => [row.name, row.type, row.consent, row.followUpDate, row.skills]), [["Chen, Maria", "donor", "given", "2026-10-09", ""], ["Sam Park", "volunteer", "declined", "2026-10-12", "cooking"]]);
  assert.deepEqual(contacts.skipped.map(item => item.line), [4, 5, 6, 7]);
  assert.match(contacts.skipped[0].reason, /no name/); assert.match(contacts.skipped[1].reason, /consent "maybe"/); assert.match(contacts.skipped[2].reason, /not a date/); assert.match(contacts.skipped[3].reason, /already on the list/);
  const money = csv.importRows("transactions", 'Date,Amount,Type,Description,Extra\n2026-10-09,"$1,250.50",income,Gala,x\n10/10/2026,(40),,Stamps,\n2026-13-01,5,expense,bad,\n2026-10-11,abc,expense,bad2,\n2026-10-12,10,transfer,bad3,\n', [], { limit: 200 });
  assert.deepEqual(money.rows.map(row => [row.date, row.type, row.amount, row.currency]), [["2026-10-09", "income", 1250.5, "USD"], ["2026-10-10", "expense", 40, "USD"]]);
  assert.equal(money.skipped.length, 3); assert.deepEqual(money.unknownColumns, ["Extra"]);
  const inventory = csv.importRows("inventory", "Item,Qty,Reorder level,Value,Kind\nCandles,20,10,5.5,product\nBlankets,x,,,donated\nSoap,3,,,supplies\n", [], { limit: 400 });
  assert.deepEqual(inventory.rows.map(row => [row.item, row.quantity, row.reorderAt, row.value, row.kind]), [["Candles", 20, 10, 5.5, "product"], ["Soap", 3, 0, 0, "supply"]]);
  // capacity, a wrong file, an empty file and a template that reads back as itself
  const full = csv.importRows("inventory", "Item\nA\nB\nC\n", Array.from({ length: 399 }, (_, i) => ({ item: `x${i}` })), { limit: 400 });
  assert.equal(full.rows.length, 1); assert.equal(full.skipped.length, 2); assert.match(full.skipped[0].reason, /already holds the most it keeps/);
  assert.equal(csv.importRows("contacts", "Foo,Bar\n1,2\n", [], { limit: 200 }).headerOk, false);
  assert.match(csv.importRows("contacts", "", [], { limit: 200 }).skipped[0].reason, /empty/);
  for (const kind of ["contacts", "transactions", "inventory"]) { const back = csv.importRows(kind, csv.template(kind), [], { limit: 400 }); assert.equal(back.rows.length, 1, `${kind} template reads back`); assert.equal(back.skipped.length, 0, kind); }
});

test("the web editor shows the register, the inventory, the contract fields and the import; and the orb is told how to handle them", () => {
  const html = fs.readFileSync(path.join(__dirname, "../../public/business-services.html"), "utf8");
  const script = fs.readFileSync(path.join(__dirname, "../../public/business-services.js"), "utf8");
  for (const id of ["compliance", "add-compliance", "compliance-summary", "inventory", "add-inventory", "inventory-summary", "import-kind", "import-file", "import-run", "import-template", "import-result"]) assert.match(html, new RegExp(`id="${id}"`), id);
  assert.ok(html.indexOf("/business-csv.js") > 0 && html.indexOf("/business-csv.js") < html.indexOf("/business-services.js"), "the import code loads first");
  for (const needle of ['rows("compliance", editable.compliance', 'rows("inventory", editable.inventory', '["reportDue", "Next report due"]', '["requirements", "What the funder requires"]', 'byId("add-compliance")', 'byId("add-inventory")', "BusinessCsv.importRows(kind", "Press Save to keep them"]) assert.ok(script.includes(needle), needle);
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  assert.match(server, /talks about the papers and goods the organization keeps -- a licence, permit, insurance policy/);
  assert.match(server, /It does not check that a licence is valid or that anyone is eligible, and you must not claim either/);
  assert.equal(server.split("talks about the papers and goods the organization keeps").length, 2, "said once");
  assert.doesNotThrow(() => new (require("node:vm").Script)(server, { filename: "server.js" }));
});
