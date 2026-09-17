"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const { BusinessService, filesFor } = require("../../nexus/business/service");
const { BusinessRepository } = require("../../nexus/business/repository");
const { createBusinessProviders } = require("../../nexus/business/providers");
const templates = require("../../nexus/business/templates");

function fixture(providers = {}) {
  const rows = new Map(), grants = new Map(), accessCalls = [];
  const context = { tenantId: "tenant-a", userId: "owner-a", requestId: "test-request" };
  const key = item => [item.tenantId, item.subjectId, item.scope].join(":");
  const repository = {
    async create(item) { const row = { record_id: "rec_business", tenant_id: item.tenantId, owner_id: item.ownerId, subject_id: item.subjectId, version: 1, data: structuredClone(item.data) }; rows.set(row.record_id, row); return structuredClone(row); },
    async getOwned(item) { const row = rows.get(item.recordId); if (!row || row.tenant_id !== item.tenantId || row.owner_id !== item.ownerId) throw Object.assign(new Error("Not found"), { status: 404 }); return structuredClone(row); },
    async list(item) { return [...rows.values()].filter(row => row.tenant_id === item.tenantId && row.owner_id === item.ownerId); },
    async update(item) { const row = rows.get(item.recordId); if (row.version !== item.expectedVersion) throw Object.assign(new Error("Version conflict"), { status: 409 }); row.data = structuredClone(item.data); row.version++; return structuredClone(row); }
  };
  const consents = { async active(item) { return grants.get(key(item)); }, async grant(item) { const grant = { ...item, consent_id: key(item) }; grants.set(key(item), grant); return grant; }, async revoke(item) { grants.delete(item.consentId); } };
  const access = { async authorize(item) { accessCalls.push(item); if (item.actorId === "denied") throw Object.assign(new Error("Denied"), { status: 403 }); } };
  return { context, rows, grants, repository, accessCalls, service: new BusinessService({ repository, consents, access, providers }) };
}

test("business draft generation escapes HTML and does not invent leads or completed actions", () => {
  const info = templates.inferBusiness({ businessName: '<img src=x onerror="bad()">', industry: "Farming", location: "Rwanda" });
  const workspace = templates.defaultClientWorkspace(info);
  assert.deepEqual(workspace.leads, []);
  assert.ok(workspace.assistantStudio.channels.every(channel => !channel.enabled));
  const files = filesFor(info, workspace, "workflow");
  assert.ok(Object.keys(files).length >= 13);
  assert.doesNotMatch(files["website/index.html"].content, /<img src=x/i);
  assert.match(files["website/index.html"].content, /&lt;img/i);
  assert.match(files["website/index.html"].content, /Draft form/);
  assert.match(files["assistant-studio/assistant-preview.md"].content, /no AI or message was sent/);
});

test("business records use authenticated owner, explicit consent and existing access control", async () => {
  const f = fixture();
  await assert.rejects(() => f.service.create(f.context, { businessName: "Cooperative" }), error => error.code === "business_consent_required");
  assert.equal(f.rows.size, 0);
  const row = await f.service.create(f.context, { businessName: "Cooperative", consent: true, ownerId: "victim", tenantId: "other" });
  assert.equal(row.owner_id, "owner-a"); assert.equal(row.tenant_id, "tenant-a"); assert.equal(row.subject_id, "owner-a");
  await assert.rejects(() => f.service.get({ ...f.context, userId: "other" }, row.record_id), error => error.status === 404);
  await assert.rejects(() => f.service.get({ ...f.context, tenantId: "other" }, row.record_id), error => error.status === 404);
  await assert.rejects(() => f.service.list({ ...f.context, userId: "denied" }), error => error.status === 403);
  assert.ok(f.accessCalls.every(call => call.subjectId === call.actorId && call.purpose === "business-client-workspace"));
});

test("business corrections preserve billing state and enforce optimistic concurrency", async () => {
  const f = fixture(); const row = await f.service.create(f.context, { businessName: "Cooperative", consent: true });
  const updated = await f.service.update(f.context, row.record_id, { expectedVersion: 1, info: { businessName: "Revised" }, editable: { subscription: { state: "active" }, ownerId: "other" } });
  assert.equal(updated.data.info.businessName, "Revised"); assert.equal(updated.data.subscription.state, "not_configured");
  await assert.rejects(() => f.service.update(f.context, row.record_id, { expectedVersion: 1 }), error => error.code === "business_version_conflict");
  await f.service.revokeConsent(f.context);
  await assert.rejects(() => f.service.generate(f.context, row.record_id, { expectedVersion: 2, operation: "workflow" }), error => error.code === "business_consent_required");
  assert.equal((await f.service.export(f.context, row.record_id)).info.businessName, "Revised", "revocation does not block the owner's export");
});

test("assistant and checkout require independent explicit confirmation before providers", async () => {
  let calls = 0; const f = fixture({ assistant: async () => { calls++; }, checkout: async () => { calls++; } });
  const row = await f.service.create(f.context, { businessName: "Cooperative", consent: true });
  for (const action of ["assistant", "checkout"]) await assert.rejects(() => f.service[action](f.context, row.record_id, {}), error => error.code === "business_confirmation_required");
  assert.equal(calls, 0);
  const preview = await f.service.preview(f.context, row.record_id, { message: "urgent quote" });
  assert.equal(preview.externalAction, false); assert.equal(preview.mode, "template-preview"); assert.equal(calls, 0);
});

test("disabled business providers cannot fetch even when methods are invoked", async () => {
  let calls = 0; const providers = createBusinessProviders({ env: {}, fetchFn: async () => { calls++; throw Error("Network forbidden"); } });
  await assert.rejects(() => providers.assistant({}), error => error.code === "business_provider_unavailable");
  await assert.rejects(() => providers.checkout({}), error => error.code === "business_provider_unavailable");
  await assert.rejects(() => providers.refresh({}), error => error.code === "business_provider_unavailable");
  assert.equal(calls, 0); assert.equal(providers.status().liveCertified, false);
});

test("checkout creation is not payment and provider verification is owner-bound", async () => {
  const env = { NEXUS_REAL_PROVIDER_EXECUTION_ENABLED: "true", NEXUS_BUSINESS_BILLING_ENABLED: "true", STRIPE_SECRET_KEY: "test-only", NEXUS_BUSINESS_STARTER_PRICE_ID: "price_test", NEXUS_BUSINESS_RETURN_ORIGIN: "https://example.test" };
  const requests = [];
  const providers = createBusinessProviders({ env, fetchFn: async (url, init) => { requests.push({ url, init }); return { ok: true, json: async () => ({ id: "cs_test_example", url: "https://checkout.stripe.com/test", status: "complete", payment_status: "paid", client_reference_id: "wrong-owner" }) }; } });
  const input = { tenantId: "a", ownerId: "b", recordId: "rec_c", version: 1, plan: "starter" };
  const checkout = await providers.checkout(input); assert.equal(checkout.paid, false); assert.equal(checkout.state, "checkout_created");
  await providers.checkout(input); assert.equal(requests[0].init.headers["idempotency-key"], requests[1].init.headers["idempotency-key"]);
  await assert.rejects(() => providers.refresh({ ...input, sessionId: checkout.sessionId }), error => error.code === "business_checkout_identity_mismatch");
  assert.ok(requests.every(request => request.init.redirect === "error"));
});

test("billing signatures reject tampering and stale delivery timestamps", () => {
  const timestamp = 1700000000, secret = "unit-test-webhook-secret";
  const providers = createBusinessProviders({ env: { NEXUS_REAL_PROVIDER_EXECUTION_ENABLED: "true", NEXUS_BUSINESS_BILLING_ENABLED: "true", STRIPE_SECRET_KEY: "test-only", STRIPE_WEBHOOK_SECRET: secret }, now: () => timestamp * 1000, fetchFn: async () => { throw Error("Network forbidden"); } });
  const raw = Buffer.from(JSON.stringify({ id: "evt_test", type: "test" }));
  const digest = crypto.createHmac("sha256", secret).update(`${timestamp}.`).update(raw).digest("hex");
  assert.equal(providers.verifyWebhook(raw, `t=${timestamp},v1=${digest}`).id, "evt_test");
  assert.throws(() => providers.verifyWebhook(Buffer.from("{}"), `t=${timestamp},v1=${digest}`), /signature/);
  assert.throws(() => providers.verifyWebhook(raw, `t=${timestamp - 301},v1=${digest}`), /signature/);
});

test("business deletion stops at legal holds and erases historical versions only after owner lock", async () => {
  const queries = []; let held = true;
  const db = { async query(sql, params) { queries.push({ sql, params }); if (sql.startsWith("select *")) return { rows: [{ version: 2 }] }; if (sql.startsWith("select hold_id")) return { rows: held ? [{ hold_id: "hold" }] : [] }; return { rows: [] }; }, async transaction(fn) { return fn(this); } };
  const repository = new BusinessRepository(db);
  const input = { tenantId: "a", ownerId: "b", recordId: "rec_c", expectedVersion: 2 };
  await assert.rejects(() => repository.deleteOwned(input), error => error.code === "business_legal_hold");
  assert.equal(queries.some(query => query.sql.startsWith("update")), false);
  held = false; const result = await repository.deleteOwned(input); assert.equal(result.versionsErased, true);
  assert.match(queries[0].sql, /owner_id=\$2/); assert.deepEqual(queries[0].params, ["a", "b", "rec_c"]);
  assert.ok(queries.some(query => query.sql.startsWith("update nexus_record_versions")));
});

test("project/task manager: tasks carry an assignee, priority and due date, backward-compatible with the seeded default checklist", () => {
  const { normalizeEditable } = require('../../nexus/business/service');
  const info = templates.inferBusiness({ businessName: 'Cooperative' });
  // The default workspace seeds four starter tasks with only title/status --
  // confirms they still normalize cleanly with the new fields defaulted.
  const seeded = templates.defaultClientWorkspace(info).tasks;
  assert.ok(seeded.length > 0);
  const normalizedSeeded = normalizeEditable(info, { tasks: seeded });
  assert.ok(normalizedSeeded.tasks.every(task => task.priority === 'medium' && task.assignee === '' && task.dueDate === ''));
  const editable = normalizeEditable(info, { tasks: [
    { title: 'File the grant application', status: 'in-progress', assignee: 'Jordan', priority: 'high', dueDate: '2026-04-01' }
  ] });
  assert.equal(editable.tasks[0].assignee, 'Jordan');
  assert.equal(editable.tasks[0].priority, 'high');
  assert.equal(editable.tasks[0].dueDate, '2026-04-01');
});

test("grant/funding tracker: opportunities, deadlines and status persist and validate like every other row list", () => {
  const { normalizeEditable } = require('../../nexus/business/service');
  const info = templates.inferBusiness({ businessName: 'Cooperative' });
  assert.deepEqual(templates.defaultClientWorkspace(info).grants, []);
  const editable = normalizeEditable(info, { grants: [
    { funderName: 'USDA Rural Development', program: 'Value-Added Producer Grant', amount: 50000, deadline: '2026-04-01', status: 'drafting', notes: 'Needs a business plan attachment' }
  ] });
  assert.equal(editable.grants[0].amount, 50000);
  assert.equal(editable.grants[0].status, 'drafting');
  assert.deepEqual(normalizeEditable(info, {}).grants, [], 'a record created before this field existed must still normalize');
  assert.throws(() => normalizeEditable(info, { grants: [{ amount: NaN }] }), error => error.code === 'business_workspace_invalid');
});

test("income/expense tracker: transactions are typed, numeric amounts are validated, and older rows without the field default cleanly", () => {
  const { normalizeEditable } = require('../../nexus/business/service');
  const info = templates.inferBusiness({ businessName: 'Cooperative' });
  assert.deepEqual(templates.defaultClientWorkspace(info).transactions, []);
  const editable = normalizeEditable(info, { transactions: [
    { date: '2026-01-15', type: 'income', category: 'Sales', amount: 250.5, description: 'Farmers market' },
    { date: '2026-01-16', type: 'expense', category: 'Supplies', amount: 40, description: 'Packaging' }
  ] });
  assert.equal(editable.transactions[0].amount, 250.5);
  assert.equal(editable.transactions[1].type, 'expense');
  // A record created before this field existed must still normalize.
  const legacy = normalizeEditable(info, {});
  assert.deepEqual(legacy.transactions, []);
  for (const bad of [NaN, Infinity, -Infinity]) {
    assert.throws(() => normalizeEditable(info, { transactions: [{ amount: bad }] }), error => error.code === 'business_workspace_invalid');
  }
});

test("customer/donor tracker: leads carry a type and a real follow-up date, backward-compatible with older rows", () => {
  const { normalizeEditable } = require('../../nexus/business/service');
  const info = templates.inferBusiness({ businessName: 'Cooperative' });
  const editable = normalizeEditable(info, { leads: [
    { name: 'Ada', contact: 'ada@example.test', type: 'donor', need: 'Annual gift renewal', stage: 'active', nextAction: 'Call to thank', followUpDate: '2026-03-01' },
    // An older stored row with no type/followUpDate at all must still normalize cleanly, not throw.
    { name: 'Old Customer', contact: '555-0100', need: 'Quote', stage: 'new', nextAction: 'Send quote' }
  ] });
  assert.equal(editable.leads[0].type, 'donor');
  assert.equal(editable.leads[0].followUpDate, '2026-03-01');
  assert.equal(editable.leads[1].type, 'customer');
  assert.equal(editable.leads[1].followUpDate, '');
});

test("document/form builder: generates a real service agreement, intake form and application checklist, each disclosing it is a template", () => {
  const info = templates.inferBusiness({ businessName: 'Cooperative' });
  const editable = templates.defaultClientWorkspace(info);
  const files = filesFor(info, editable, 'documents');
  assert.deepEqual(Object.keys(files).sort(), ['documents/Application_Checklist.md', 'documents/Client_Intake_Form.md', 'documents/Service_Agreement.md']);
  assert.match(files['documents/Service_Agreement.md'].content, /not legal advice/i);
  assert.match(files['documents/Service_Agreement.md'].content, /Cooperative/);
  assert.match(files['documents/Client_Intake_Form.md'].content, /I consent to Cooperative contacting me/);
  assert.match(files['documents/Application_Checklist.md'].content, /- \[ \] Application form completed/);
});

test("invoice/receipt generator: a real, printable PDF is produced from an invoice's header and line items", async () => {
  const f = fixture(); const row = await f.service.create(f.context, { businessName: 'Cooperative', consent: true });
  const editable = { ...row.data.editable,
    invoices: [{ invoiceNumber: 'INV-1001', clientName: 'Green Valley Co-op', date: '2026-01-15', dueDate: '2026-02-15', notes: 'Thank you', status: 'sent' }],
    invoiceItems: [
      { invoiceNumber: 'INV-1001', description: 'Farm consulting', quantity: 2, unitPrice: 50 },
      { invoiceNumber: 'INV-1001', description: 'Soil test kit', quantity: 1, unitPrice: 25 },
      { invoiceNumber: 'INV-9999', description: 'A different invoice entirely', quantity: 1, unitPrice: 999 }
    ]
  };
  const updated = await f.service.update(f.context, row.record_id, { expectedVersion: 1, editable });
  const withPdf = await f.service.exportInvoice(f.context, row.record_id, { invoiceNumber: 'INV-1001', expectedVersion: updated.version });
  const file = withPdf.data.files['invoices/INV-1001.pdf'];
  assert.ok(file, 'the generated PDF must be stored on the record');
  assert.equal(file.binary, true); assert.equal(file.contentType, 'application/pdf');
  const bytes = Buffer.from(file.content, 'base64');
  assert.equal(bytes.subarray(0, 4).toString(), '%PDF', 'the stored content must decode to a real PDF');
  assert.ok(bytes.length > 500);
  await assert.rejects(() => f.service.exportInvoice(f.context, row.record_id, { expectedVersion: withPdf.version }), error => error.code === 'business_invoice_number_required');
  await assert.rejects(() => f.service.exportInvoice(f.context, row.record_id, { invoiceNumber: 'INV-NOPE', expectedVersion: withPdf.version }), error => error.code === 'business_invoice_not_found');
  await assert.rejects(() => f.service.exportInvoice(f.context, row.record_id, { invoiceNumber: 'INV-1001', expectedVersion: 1 }), error => error.code === 'business_version_conflict');
});

test("malformed business editor shapes are rejected before draft generation", () => {
  const { normalizeEditable } = require('../../nexus/business/service');
  const info = templates.inferBusiness({ businessName: 'Cooperative' });
  for (const input of [ { assistantStudio: [] }, { assistantStudio: { channels: [null] } }, { assistantStudio: { knowledge: [{}] } }, { landingPage: 'bad' }, { tasks: [{ title: {} }] }, { assistantStudio: { channels: [{ enabled: 'yes' }] } } ]) {
    assert.throws(() => normalizeEditable(info, input), error => error.code === 'business_workspace_invalid');
  }
});

test("withdrawn business storage consent can be explicitly restored", async () => {
  const f = fixture(); const row = await f.service.create(f.context, { businessName: 'Cooperative', consent: true });
  await f.service.revokeConsent(f.context);
  await assert.rejects(() => f.service.grantConsent(f.context, {}), error => error.code === 'business_confirmation_required');
  await f.service.grantConsent(f.context, { confirmed: true });
  assert.equal((await f.service.generate(f.context, row.record_id, { expectedVersion: 1, operation: 'workflow' })).version, 2);
});

test("draft ZIP keeps asset directories and rejects path traversal", () => {
  const { packageFiles } = require('../../nexus/business/package');
  const archive = packageFiles({ 'website/index.html': { content: '<link href="styles.css">' }, 'website/styles.css': { content: 'body{}' } });
  assert.equal(archive.readUInt32LE(0), 0x04034b50);
  const end = archive.length - 22; assert.equal(archive.readUInt32LE(end), 0x06054b50);
  assert.equal(archive.readUInt16LE(end + 10), 2);
  const directory = archive.readUInt32LE(end + 16); assert.equal(archive.readUInt32LE(directory), 0x02014b50);
  const names = []; let offset = 0;
  while (offset < directory) { const size = archive.readUInt32LE(offset + 18), length = archive.readUInt16LE(offset + 26); names.push(archive.subarray(offset + 30, offset + 30 + length).toString()); offset += 30 + length + size; }
  assert.deepEqual(names, ['website/index.html', 'website/styles.css']);
  assert.throws(() => packageFiles({ '../escape': { content: 'x' } }), /path/);
});

test("signed checkout events bind identity and ignore paid-state rollback and replay", async () => {
  let event;
  const f = fixture({ verifyWebhook: () => event });
  const row = await f.service.create(f.context, { businessName: 'Cooperative', consent: true });
  f.rows.get(row.record_id).data.subscription = { sessionId: 'cs_test', paid: false };
  const session = { id: 'cs_test', status: 'complete', payment_status: 'paid', client_reference_id: 'tenant-a:owner-a:rec_business', metadata: { nexusTenantId: 'tenant-a', nexusOwnerId: 'owner-a', nexusRecordId: row.record_id } };
  event = { id: 'evt_first', type: 'checkout.session.completed', created: 100, data: { object: session } };
  await f.service.webhook(Buffer.alloc(0), 'fake');
  assert.equal(f.rows.get(row.record_id).data.subscription.state, 'active');
  assert.equal((await f.service.webhook(Buffer.alloc(0), 'fake')).duplicateOrStale, true);
  event = { ...event, id: 'evt_later', created: 101, data: { object: { ...session, payment_status: 'unpaid' } } };
  assert.equal((await f.service.webhook(Buffer.alloc(0), 'fake')).ignored, true);
  event = { ...event, data: { object: { ...session, client_reference_id: 'foreign' } } };
  await assert.rejects(() => f.service.webhook(Buffer.alloc(0), 'fake'), error => error.code === 'business_checkout_identity_mismatch');
});

test("AI outline planning is disabled by default and never executes proposed steps", async () => {
  let calls = 0;
  const disabled = createBusinessProviders({ env: {}, fetchFn: async () => { calls++; } });
  await assert.rejects(() => disabled.plan({ info: {} }), error => error.code === 'business_provider_unavailable');
  assert.equal(calls,0);
  const env = { NEXUS_REAL_PROVIDER_EXECUTION_ENABLED:'true', NEXUS_BUSINESS_AI_ENABLED:'true', OPENAI_API_KEY:'fake-test-only' };
  let value = { plan:[{agent:'marketing',action:'Draft a social calendar'}] };
  const providers = createBusinessProviders({ env, fetchFn: async () => { calls++; return {ok:true,json:async()=>({choices:[{message:{content:JSON.stringify(value)}}]})}; } });
  const plan = await providers.plan({info:{businessName:'Test'}});
  assert.equal(plan.mode,'provider-plan'); assert.equal(plan.executed,false);
  assert.ok(plan.plan.some(step=>step.agent==='businessBuilder'));assert.ok(plan.plan.some(step=>step.agent==='qa'));
  value = { plan:[{agent:'shell',action:'run an arbitrary command'}] };
  const fallback = await providers.plan({info:{businessName:'Test'}});
  assert.equal(fallback.mode,'template-fallback');assert.equal(fallback.executed,false);assert.ok(fallback.plan.every(step=>step.agent!=='shell'));
});

test("AI business planning requires consent, confirmation and current record version", async () => {
  let calls=0; const f=fixture({plan:async()=>{calls++;return {mode:'provider-plan',plan:[],executed:false}}});
  const row=await f.service.create(f.context,{businessName:'Test',consent:true});
  await assert.rejects(()=>f.service.plan(f.context,row.record_id,{}),error=>error.code==='business_confirmation_required');
  await assert.rejects(()=>f.service.plan(f.context,row.record_id,{confirmed:true,expectedVersion:1}),error=>error.code==='business_consent_required');
  await assert.rejects(()=>f.service.plan(f.context,row.record_id,{confirmed:true,consent:true,expectedVersion:0}),error=>error.code==='business_version_conflict');
  assert.equal(calls,0);
  const updated=await f.service.plan(f.context,row.record_id,{confirmed:true,consent:true,expectedVersion:1});
  assert.equal(updated.data.planning.executed,false);assert.equal(calls,1);
});

test('business strategy templates use supplied workspace notes and export stored planning state',async()=>{
 const {agentProfiles}=require('../../nexus/business/strategy');const info=templates.inferBusiness({businessName:'Test'}),editable=templates.defaultClientWorkspace(info);editable.assistantStudio.knowledge=['Owner-provided synthetic note'];
 const genericProfiles=['coach','strategy','investor','product','operations','research','content','partnerships','technical','business'];
 const nonprofitProfiles=['grants','donors','volunteers'];
 const developmentProfiles=['marketing','finance','government'];
 assert.deepEqual(Object.keys(agentProfiles).sort(),[...genericProfiles,...nonprofitProfiles,...developmentProfiles].sort());
 for(const profile of Object.keys(agentProfiles)){const files=filesFor(info,editable,'strategy',profile);assert.match(files[`strategy/${profile}.md`].content,/Owner-provided synthetic note/);assert.match(files[`strategy/${profile}.md`].content,/Template Outline/);}
 assert.throws(()=>filesFor(info,editable,'strategy','__proto__'),error=>error.code==='business_profile_unknown');
 const f=fixture(),row=await f.service.create(f.context,{businessName:'Test',consent:true});f.rows.get(row.record_id).data.planning={executed:false,plan:[{agent:'qa',action:'Review'}]};
 const exported=await f.service.export(f.context,row.record_id);assert.equal(exported.planning.executed,false);assert.equal(exported.subscription.state,'not_configured');
});
