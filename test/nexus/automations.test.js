"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const dns = require("node:dns");
const connection = require("../../nexus/automations/connection.js");
const { createAutomationTriggerExecutor, createAutomationsListExecutor, verifyAutomationTriggerOutcome, guardedLookup, WORKSPACE_ID, RECORD_TYPE } = require("../../nexus/automations/executor.js");
const { createAutomationsApi } = require("../../nexus/automations/api.js");
const commands = require("../../public/kyro-automation-commands.js");
const consents = require("../../nexus/consent/user-confirmable-consents.js");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { CANONICAL_PROVIDER_TOOLS } = require("../../nexus/tools/canonical-provider-definitions.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");

// In-memory stand-in for the record store (the same calls the real RecordRepository answers).
function fakeRecords(rows = []) {
  const store = rows.map((row, index) => ({ record_id: `rec_${index}`, version: 1, created_at: "2026-10-16T00:00:00Z", provenance: {}, ...row }));
  return { store,
    list: async () => store.filter(row => !row.deleted),
    update: async ({ recordId, data, expectedVersion }) => { const row = store.find(item => item.record_id === recordId); if (!row || row.version !== expectedVersion) throw new Error("conflict"); row.data = data; row.version += 1; return row; },
    createUnlessCapped: async (item, { maxCount }) => { if (store.filter(row => !row.deleted).length >= maxCount) return { capped: true }; const row = { record_id: `rec_${store.length}`, version: 1, created_at: "2026-10-16T00:00:00Z", data: item.data, provenance: item.provenance, classification: item.classification }; store.push(row); return row; },
    remove: async ({ recordId }) => { const row = store.find(item => item.record_id === recordId); if (row) row.deleted = true; return Boolean(row); } };
}
const sheet = (extra = {}) => ({ data: { name: "Sales sheet", url: "https://hooks.zapier.com/hooks/catch/123/abc/", host: "hooks.zapier.com", secret: "s3cret", ...extra } });
const context = (extra = {}) => ({ tenantId: "t1", userId: "u1", isRestrictedFrom: () => false, ...extra });

test("a link must be https, a normal host name, with no credentials, odd port, address number or private name", () => {
  assert.equal(connection.checkLink("https://hooks.zapier.com/hooks/catch/1/2/").ok, true);
  assert.equal(connection.checkLink("https://hooks.zapier.com:443/x").ok, true);
  for (const bad of ["", "not a link", "http://hooks.zapier.com/x", "https://user:pw@hooks.zapier.com/x", "https://hooks.zapier.com:8443/x", "https://127.0.0.1/x", "https://169.254.169.254/latest/meta-data", "https://[::1]/x", "https://localhost/x", "https://intranet/x", "https://printer.local/x", "https://app.internal/x", "ftp://x.com/y", "https://" + "a".repeat(2100) + ".com"])
    assert.equal(connection.checkLink(bad).ok, false, bad);
});

test("only public addresses pass: loopback, private, link-local, metadata, carrier NAT, multicast and IPv4-in-IPv6 are refused", () => {
  for (const ok of ["8.8.8.8", "104.18.0.1", "2606:4700::1"]) assert.equal(connection.isPublicAddress(ok), true, ok);
  for (const bad of ["127.0.0.1", "10.0.0.5", "172.16.0.1", "172.31.255.255", "192.168.1.1", "169.254.169.254", "100.64.0.1", "0.0.0.0", "224.0.0.1", "255.255.255.255", "::1", "::", "fe80::1", "fc00::1", "fd12::1", "ff02::1", "::ffff:127.0.0.1", "::ffff:10.0.0.1", "not an ip"])
    assert.equal(connection.isPublicAddress(bad), false, bad);
  assert.equal(connection.isPublicAddress("172.32.0.1"), true, "just outside the private range");
});

test("a host that resolves to even one private address is refused, and one that cannot be found is reported", async () => {
  assert.deepEqual(await connection.assertPublicHost("x.example.com", { lookup: async () => [{ address: "8.8.8.8" }] }), ["8.8.8.8"]);
  await assert.rejects(connection.assertPublicHost("x.example.com", { lookup: async () => [{ address: "8.8.8.8" }, { address: "10.0.0.1" }] }), { code: "automation_blocked" });
  await assert.rejects(connection.assertPublicHost("x.example.com", { lookup: async () => [] }), { code: "automation_blocked" });
  await assert.rejects(connection.assertPublicHost("x.example.com", { lookup: async () => { throw new Error("ENOTFOUND"); } }), { code: "automation_host_unreachable" });
});

test("the lookup used by the connection itself refuses a private answer (so a name cannot be re-pointed inward after it was checked)", async () => {
  const original = dns.lookup;
  try {
    dns.lookup = (host, options, callback) => callback(null, host === "good.example.com" ? [{ address: "8.8.8.8", family: 4 }] : [{ address: "8.8.8.8", family: 4 }, { address: "127.0.0.1", family: 4 }]);
    const ask = host => new Promise(resolve => guardedLookup(host, {}, (error, address) => resolve({ error, address })));
    assert.equal((await ask("good.example.com")).address, "8.8.8.8");
    assert.equal((await ask("rebind.example.com")).error.code, "EKYROPRIVATE");
  } finally { dns.lookup = original; }
});

test("names are short labels the person can say, and match without regard to case", () => {
  assert.equal(connection.normalizeName("  Sales   sheet "), "Sales sheet");
  assert.equal(connection.normalizeName("<b>x</b>"), "bxb", "markup characters are dropped");
  assert.equal(connection.normalizeName("a"), "");
  assert.equal(connection.sameName("SALES SHEET", "sales sheet"), true);
  assert.equal(connection.sameName("sales", "sales sheet"), false);
});

test("what a person says: sending, running, testing, listing, opening", () => {
  assert.deepEqual(commands.parseTrigger("Send new customer Grace to my sales sheet automation"), { connection: "sales sheet", text: "new customer Grace" });
  assert.deepEqual(commands.parseTrigger("Kyro, post invoice 1001 paid into the books zap."), { connection: "books", text: "invoice 1001 paid" });
  assert.deepEqual(commands.parseTrigger("run my weekly report automation"), { connection: "weekly report", text: "Started from Kyro" });
  assert.deepEqual(commands.parseTrigger("test my sales sheet automation"), { connection: "sales sheet", text: "Test from Kyro" });
  assert.deepEqual(commands.parseTrigger("run my weekly report automation with sales were up"), { connection: "weekly report", text: "sales were up" });
  assert.equal(commands.isList("show my automations"), true); assert.equal(commands.isList("what automations do I have?"), true);
  assert.equal(commands.isOpen("open automations"), true); assert.equal(commands.isOpen("set up an automation"), true); assert.equal(commands.isOpen("connect Zapier"), true);
  assert.equal(commands.isOpen("show my automations"), false, "a spoken list, not the screen");
  for (const other of ["Add a client to my sales workflow", "Send a text to my mom", "Send hello to Grace", "run my errands", "Open documents", "Show my invoices", "What is automation?"]) {
    assert.equal(commands.parseTrigger(other), null, other); assert.equal(commands.isList(other), false, other); assert.equal(commands.isOpen(other), false, other);
  }
});

test("the executor posts one signed message, keeps only the result on the connection, and never puts the link or the secret in the answer", async () => {
  const records = fakeRecords([sheet()]);
  const sent = [];
  const execute = createAutomationTriggerExecutor({ records, transport: async request => { sent.push(request); return { status: 200 }; }, now: () => new Date("2026-10-16T12:00:00Z") });
  const result = await execute({ input: { connection: "sales sheet", text: "new customer Grace" }, context: context() });
  assert.deepEqual(result, { sent: true, connection: "Sales sheet", host: "hooks.zapier.com", status: 200, sentAt: "2026-10-16T12:00:00.000Z" });
  assert.equal(JSON.stringify(result).includes("s3cret"), false); assert.equal(JSON.stringify(result).includes("/hooks/catch"), false);
  assert.equal(sent.length, 1); assert.equal(sent[0].url, "https://hooks.zapier.com/hooks/catch/123/abc/");
  const body = JSON.parse(sent[0].body);
  assert.deepEqual({ source: body.source, event: body.event, connection: body.connection, text: body.text }, { source: "kyro", event: "kyro.message", connection: "Sales sheet", text: "new customer Grace" });
  assert.equal(sent[0].headers["x-kyro-signature"], connection.signBody("s3cret", sent[0].body));
  assert.equal(records.store[0].data.lastStatus, 200); assert.equal(records.store[0].data.lastSentAt, "2026-10-16T12:00:00.000Z");
  assert.equal(verifyAutomationTriggerOutcome({ result }).verified, true);
});

test("nothing goes out for a missing automation, a restricted account, a bad link, or an empty message, and the reason is said plainly", async () => {
  const transport = async () => assert.fail("must not be sent");
  const records = fakeRecords([sheet()]);
  const execute = createAutomationTriggerExecutor({ records, transport });
  await assert.rejects(execute({ input: { connection: "Unknown", text: "hi" }, context: context() }), { code: "automation_not_found", message: /could not find an automation called Unknown, so nothing was sent/ });
  await assert.rejects(execute({ input: { connection: "Sales sheet", text: "hi" }, context: context({ isRestrictedFrom: name => name === "communications-send" }) }), { code: "automation_restricted" });
  await assert.rejects(execute({ input: { connection: "Sales sheet", text: "   " }, context: context() }), { code: "automation_incomplete" });
  await assert.rejects(createAutomationTriggerExecutor({ records: fakeRecords([sheet({ url: "https://127.0.0.1/x" })]), transport })({ input: { connection: "Sales sheet", text: "hi" }, context: context() }), { code: "automation_blocked" });
  await assert.rejects(createAutomationTriggerExecutor({ records: fakeRecords([sheet({ url: "http://hooks.zapier.com/x" })]), transport })({ input: { connection: "Sales sheet", text: "hi" }, context: context() }), { code: "automation_blocked" });
});

test("a refusal, a timeout, an unreachable host and a private address are each reported honestly, and none counts as sent", async () => {
  const run = async transport => createAutomationTriggerExecutor({ records: fakeRecords([sheet()]), transport })({ input: { connection: "Sales sheet", text: "hi" }, context: context() });
  await assert.rejects(run(async () => ({ status: 500 })), { code: "automation_rejected", message: /answered with an error \(500\)/ });
  await assert.rejects(run(async () => ({ status: 302 })), { code: "automation_rejected" }, "a redirect is never followed or counted");
  await assert.rejects(run(async () => { throw Object.assign(new Error("t"), { code: "ETIMEDOUT" }); }), { code: "automation_timeout", message: /cannot say it arrived/ });
  await assert.rejects(run(async () => { throw Object.assign(new Error("x"), { code: "ECONNREFUSED" }); }), { code: "automation_unreachable" });
  await assert.rejects(run(async () => { throw Object.assign(new Error("p"), { code: "EKYROPRIVATE" }); }), { code: "automation_blocked" });
  assert.equal(verifyAutomationTriggerOutcome({ result: { sent: true, status: 500, connection: "x" } }).verified, false);
  assert.equal(verifyAutomationTriggerOutcome({ result: {} }).verified, false);
});

test("listing shows names and hosts only", async () => {
  const result = await createAutomationsListExecutor({ records: fakeRecords([sheet(), sheet({ name: "Books", host: "hook.eu1.make.com" })]) })({ context: context() });
  assert.equal(result.found, true); assert.deepEqual(result.automations.map(item => item.name), ["Sales sheet", "Books"]);
  assert.equal(JSON.stringify(result).includes("s3cret"), false); assert.equal(JSON.stringify(result).includes("/hooks/catch"), false);
});

test("the screen's routes: connect needs a full account and a public link, the secret is shown once, and a list never carries a link", async () => {
  const records = fakeRecords();
  const api = createAutomationsApi({ records, lookup: async host => (host === "private.example.com" ? [{ address: "10.1.1.1" }] : [{ address: "8.8.8.8" }]) });
  const as = (extra = {}) => ({ context: context(extra) });
  assert.equal((await api.create(as({ isRestrictedFrom: () => true }), { name: "Sales", url: "https://hooks.zapier.com/x" })).status, 403);
  assert.equal((await api.create(as(), { name: "", url: "https://hooks.zapier.com/x" })).body.code, "automation_name_invalid");
  assert.equal((await api.create(as(), { name: "Sales", url: "http://hooks.zapier.com/x" })).body.code, "link_not_https");
  assert.equal((await api.create(as(), { name: "Sales", url: "https://private.example.com/x" })).body.code, "automation_blocked");
  const made = await api.create(as(), { name: "Sales", url: "https://hooks.zapier.com/hooks/catch/9/z/" });
  assert.equal(made.status, 201); assert.equal(made.body.host, "hooks.zapier.com"); assert.match(made.body.signingSecret, /^[0-9a-f]{48}$/);
  assert.equal(records.store[0].classification, "sensitive");
  assert.equal((await api.create(as(), { name: "sales", url: "https://hooks.zapier.com/y" })).body.code, "automation_name_taken");
  const listed = await api.list(as());
  assert.equal(listed.status, 200); assert.deepEqual(listed.body.automations.map(item => item.name), ["Sales"]);
  assert.equal(JSON.stringify(listed.body).includes("/hooks/catch"), false); assert.equal(JSON.stringify(listed.body).includes(made.body.signingSecret), false);
  assert.equal((await api.list(as({ isRestrictedFrom: () => true }))).body.canConnect, false);
  assert.equal((await api.remove(as(), { name: "nobody" })).status, 404);
  assert.equal((await api.remove(as(), { name: "SALES" })).body.removed, "Sales");
  assert.equal((await api.list(as())).body.automations.length, 0);
});

test("the screen allows at most ten connections", async () => {
  const records = fakeRecords();
  const api = createAutomationsApi({ records, lookup: async () => [{ address: "8.8.8.8" }] });
  for (let i = 1; i <= connection.MAX_CONNECTIONS_PER_ACCOUNT; i += 1) assert.equal((await api.create({ context: context() }, { name: `Tool ${i}`, url: `https://hooks.zapier.com/${i}` })).status, 201);
  assert.equal((await api.create({ context: context() }, { name: "One more", url: "https://hooks.zapier.com/x" })).body.code, "automation_cap_reached");
});

test("the planner plans a confirmed send for a connected automation only, answers lists and unknown names itself, and leaves other talk alone", async () => {
  const records = fakeRecords([sheet(), sheet({ name: "Books", host: "hook.make.com" })]);
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); } };
  const planner = new OpenEndedPlanner({ model, automationRecords: records,
    tools: { list: async () => [{ tool_id: "automations.trigger", domain: "automations", description: "", risk_tier: "regulated", confirmation_required: true }] },
    applications: { list: () => [{ applicationId: "communications", capabilities: ["automations.trigger"], riskTiers: ["regulated"] }] },
    memory: { recent: async () => [], search: async () => [] } });
  const ask = text => planner.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });
  const send = await ask("Send new customer Grace to my sales sheet automation");
  assert.equal(send.application, "communications");
  assert.deepEqual(send.steps.map(step => [step.toolId, step.input]), [["automations.trigger", { connection: "Sales sheet", text: "new customer Grace" }]]);
  assert.equal(JSON.stringify(send).includes("s3cret"), false); assert.equal(JSON.stringify(send).includes("hooks/catch"), false);
  const listed = await ask("What automations do I have?");
  assert.equal(listed.application, "conversation"); assert.match(listed.response, /You have 2 automations: Sales sheet; Books/);
  const unknown = await ask("send hello to my payroll automation");
  assert.equal(unknown.steps.length, 0); assert.match(unknown.response, /could not find an automation called payroll, so nothing was sent\. You have: Sales sheet; Books/);
  const none = new OpenEndedPlanner({ model, automationRecords: fakeRecords(), tools: { list: async () => [] }, applications: { list: () => [] }, memory: { recent: async () => [], search: async () => [] } });
  assert.match((await none.plan({ command: { text: "show my automations", tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } })).response, /no automations connected yet\. Say "open automations"/);
});

test("the tool needs a yes and a consent, which is capped per day, and the yes reads back the name and the exact words", async () => {
  const tool = CANONICAL_PROVIDER_TOOLS.find(item => item.toolId === "automations.trigger");
  assert.equal(tool.confirmationRequired, true); assert.equal(tool.consentScope, "automations:trigger:write");
  assert.ok(defaultApplicationManifests().some(app => app.applicationId === "communications" && app.capabilities.includes("automations.trigger")), "under Communications, which already has its confirmation-only release probe");
  assert.equal(defaultApplicationManifests().some(app => app.applicationId === "automations"), false, "no new application: that would need its own workspace, completion contract and release probes");
  const step = { step_id: "stp_1", tool_id: "automations.trigger", input: { connection: "Sales sheet", text: "new customer Grace" } };
  const scope = "automations:trigger:write";
  assert.ok(consents.userConfirmableConsent(scope, step));
  assert.equal(consents.userConfirmableConsent(scope, { input: { connection: "Sales sheet" } }), null, "no words, no consent");
  assert.equal(consents.userConfirmableConsent(scope, { input: { text: "hi" } }), null, "no automation named, no consent");
  assert.equal(consents.consentRecipient(scope, step), "Sales sheet"); assert.equal(consents.consentSendChannel(scope, step), "automation");
  assert.deepEqual(consents.dailyCaps(scope, step), [{ limit: 30, channel: null, noun: "sends to outside automations" }]);
  const prompt = consents.informedConfirmationPrompt({ scope, step });
  assert.match(prompt, /send this to your automation "Sales sheet": "new customer Grace"\. It goes to the outside service you connected, and it cannot be unsent\. Say yes to send it, or no to cancel\./);
  const spine = new BehaviorSpine({ agent: { command: async () => assert.fail("not used") }, engine: { executeTask: async () => ({}), tools: { get: async () => ({ tool_id: "automations.trigger", consent_scope: scope }) } }, tasks: { get: async () => null }, conversations: { append: async () => {} }, workspaceStates: { stage: async () => {}, acknowledge: async () => {} } });
  assert.equal(await spine.confirmationPrompt({ task: { steps: [step] }, pendingStepId: "stp_1" }), prompt);
});

test("the page loads the shared words, opens the screen by voice, and answers sends and lists through the planner", () => {
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  assert.match(app, /window\.KyroAutomationCommands\?\.isOpen\?\.\(said\)\) \{\s+kyroTakeOverTurn\(\);\s+void kyroShowAutomationsScreen\(\);/);
  assert.match(app, /typeof kyroAutomationRequest === "function" && kyroAutomationRequest\(trimmed\)\) \{\s+if \(!heardAgain\) \{[^]*?handleNexusUnifiedBrainRuntimeCommand\(trimmed, \{ source: "typed", kyroDirect: true \}\);[^]*?\}\s+return true;/);
  assert.match(app, /"\/api\/nexus\/runtime\/automations"/);
  assert.ok(fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8").includes('src="/kyro-automation-commands.js?v=kyro-automation-commands-2"'));
  assert.ok(fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8").includes("/kyro-automation-commands.js?v=kyro-automation-commands-2"));
});

test("the runtime registers the executor and the routes exist", () => {
  const runtime = fs.readFileSync(path.join(__dirname, "../../nexus/runtime/create-runtime.js"), "utf8");
  assert.match(runtime, /"automations\.trigger": \{ create: \(\) => createAutomationTriggerExecutor\(\{ records \}\), verify: verifyAutomationTriggerOutcome, method: "real_outside_post" \}/);
  assert.match(runtime, /automationRecords: records/);
  const adapter = fs.readFileSync(path.join(__dirname, "../../nexus/compat/server-runtime-adapter.js"), "utf8");
  for (const route of ['"/api/nexus/runtime/automations" && req.method === "GET"', '"/api/nexus/runtime/automations" && req.method === "POST"', '"/api/nexus/runtime/automations/remove" && req.method === "POST"']) assert.ok(adapter.includes(route), route);
  assert.equal(WORKSPACE_ID, "automations"); assert.equal(RECORD_TYPE, "automation_connection");
});

// The real task engine, with the real executor behind it: a send is refused until the step was approved AND an active consent exists, and then goes out exactly once.
const { AuthoritativeTaskEngine } = require("../../nexus/runtime/authoritative-task-engine.js");
function engineFixture({ approved, consent }) {
  const store = { task: { tenantId: "tenant", correlationId: "trace" }, steps: [{ step_id: "stp_1", tool_id: "automations.trigger", fallback_tool_ids: [], confirmation_state: approved ? "approved" : "required", idempotency_key: "key", state: "pending", input: { connection: "Sales sheet", text: "new customer Grace" } }], execution: null, audits: [] };
  const posts = [];
  const records = fakeRecords([sheet()]);
  const engine = new AuthoritativeTaskEngine({
    conversations: { ensure: async () => ({}) },
    tools: { get: async id => ({ tool_id: id, availability: "available", required_permission: "tasks:execute", confirmation_required: true, consent_scope: "automations:trigger:write", timeout_ms: 5000, max_attempts: 1 }) },
    tasks: { get: async ({ includeSteps }) => ({ ...store.task, ...(includeSteps ? { steps: store.steps } : {}) }), getStep: async ({ stepId }) => store.steps.find(step => step.step_id === stepId), save: async task => task },
    executions: { get: async () => null,
      start: async input => { store.execution = { execution_id: "tlc_1", idempotency_key: input.idempotencyKey, state: "running" }; return { execution: store.execution, duplicate: false }; },
      finish: async input => { Object.assign(store.execution, { state: input.successful ? "completed" : "failed", receipt: input.receipt }); store.steps[0].state = input.successful ? "completed" : "failed"; return store.execution; } },
    consents: { active: async () => (consent ? { consent_id: "cns_1" } : null) },
    audit: { record: async event => { store.audits.push(event); return event; } },
    executors: { "automations.trigger": createAutomationTriggerExecutor({ records, transport: async request => { posts.push(request); return { status: 200 }; } }) },
    verifier: async input => verifyAutomationTriggerOutcome(input)
  });
  return { engine, store, posts };
}
const engineContext = { tenantId: "tenant", userId: "user", isRestrictedFrom: () => false, can: () => true, hasRole: () => false };
test("through the real task engine: nothing is sent without the yes, nothing without the consent, and with both it is sent once and verified", async () => {
  const noYes = engineFixture({ approved: false, consent: true });
  await assert.rejects(noYes.engine.execute({ context: engineContext, taskId: "tsk", stepId: "stp_1" }));
  assert.equal(noYes.posts.length, 0);
  const noConsent = engineFixture({ approved: true, consent: false });
  await assert.rejects(noConsent.engine.execute({ context: engineContext, taskId: "tsk", stepId: "stp_1" }), /consent/i);
  assert.equal(noConsent.posts.length, 0);
  const both = engineFixture({ approved: true, consent: true });
  const done = await both.engine.execute({ context: engineContext, taskId: "tsk", stepId: "stp_1" });
  assert.equal(both.posts.length, 1);
  assert.equal(done.receipt.verification.verified, true);
});

test("after an accepted send the person is told which automation and which words, and never the link", () => {
  const { automationSentResponse } = require("../../nexus/runtime/behavior-spine.js");
  const plan = { steps: [{ toolId: "automations.trigger", input: { connection: "Sales sheet", text: "new customer Grace" } }] };
  const task = { steps: [{ tool_id: "automations.trigger", output: { sent: true, connection: "Sales sheet", host: "hooks.zapier.com", status: 200 } }] };
  assert.equal(automationSentResponse(plan, task), 'Sent to your automation Sales sheet: "new customer Grace". The outside service accepted it.');
  assert.equal(automationSentResponse(plan, { steps: [{ tool_id: "automations.trigger", output: { sent: false } }] }), "");
  assert.equal(automationSentResponse({ steps: [{ toolId: "communications.send", input: {} }] }, task), "");
  assert.equal(automationSentResponse(null, null), "");
});

// Found by the first real send, to a real outside service, from the owner's own session: every send failed with "unreachable" (ERR_INVALID_IP_ADDRESS), because Node asks a connection's lookup for a LIST of addresses
// ({ all: true }) and the lookup answered with one. The stubbed tests could not see it; the answer must have the shape that was asked for.
test("the connection's lookup answers a list when a list is asked for, and one address when one is asked for", async () => {
  const original = dns.lookup;
  try {
    dns.lookup = (host, options, callback) => callback(null, [{ address: "8.8.8.8", family: 4 }, { address: "2606:4700::1", family: 6 }]);
    const ask = options => new Promise(resolve => guardedLookup("good.example.com", options, (...answer) => resolve(answer)));
    const [error, list] = await ask({ all: true });
    assert.equal(error, null); assert.deepEqual(list, [{ address: "8.8.8.8", family: 4 }, { address: "2606:4700::1", family: 6 }]);
    const [error2, address, family] = await ask({});
    assert.equal(error2, null); assert.equal(address, "8.8.8.8"); assert.equal(family, 4);
    const [error3, address3] = await new Promise(resolve => guardedLookup("good.example.com", (...answer) => resolve(answer)));
    assert.equal(error3, null); assert.equal(address3, "8.8.8.8", "the two-argument form still works");
    dns.lookup = (host, options, callback) => callback(null, [{ address: "8.8.8.8", family: 4 }, { address: "10.0.0.1", family: 4 }]);
    assert.equal((await ask({ all: true }))[0].code, "EKYROPRIVATE", "one private address among public ones still refuses the whole answer");
  } finally { dns.lookup = original; }
});
