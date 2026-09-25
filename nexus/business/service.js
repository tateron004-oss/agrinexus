"use strict";

const templates = require("./templates");
const { NexusRuntimeError } = require("../runtime/authoritative-task-engine");
const { renderPdfBuffer } = require("../../server/providers/exportProvider");
const DATA_SCOPE = "business:client-data";
const ALLOWED_OPERATIONS = new Set(["launch-kit", "landing-page", "assistant-package", "workflow", "strategy", "documents", "marketing"]);
const INPUT_FIELDS = ["businessName", "industry", "location", "customer", "problem", "request", "objective", "audience"];

function fail(code, message, status = 400) { throw new NexusRuntimeError(code, message, status); }
function cleanInput(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) fail("business_input_invalid", "Business details are required.");
  const result = {};
  for (const key of INPUT_FIELDS) {
    if (input[key] !== undefined && typeof input[key] !== "string") fail("business_input_invalid", `${key} must be text.`);
    result[key] = String(input[key] || "").trim().slice(0, 4000);
  }
  if (!result.businessName) fail("business_name_required", "Enter a business name.");
  return result;
}
function normalizeEditable(info, input = {}) {
  const invalid = () => fail("business_workspace_invalid", "Assistant and workspace fields must use the supported text, checkbox and row formats.");
  const object = value => value && typeof value === "object" && !Array.isArray(value);
  if (!object(input) || JSON.stringify(input).length > 150000) invalid();
  const starter = templates.defaultClientWorkspace(info);
  function strings(value, defaults) {
    if (!object(value)) invalid();
    return Object.fromEntries(Object.keys(defaults).map(key => {
      const item = value[key] === undefined ? defaults[key] : value[key];
      if (typeof item !== typeof defaults[key] || (typeof item === "string" && item.length > 8000) || (typeof item === "number" && !Number.isFinite(item))) invalid();
      return [key, item];
    }));
  }
  function rows(value, shape, limit = 200) {
    if (!Array.isArray(value) || value.length > limit) invalid();
    return value.map(row => strings(row, shape));
  }
  const studioInput = input.assistantStudio === undefined ? {} : input.assistantStudio;
  if (!object(studioInput)) invalid();
  const base = starter.assistantStudio;
  const knowledge = studioInput.knowledge === undefined ? base.knowledge : studioInput.knowledge;
  if (!Array.isArray(knowledge) || knowledge.length > 100 || knowledge.some(item => typeof item !== "string" || item.length > 8000)) invalid();
  const assistantStudio = {
    ...strings(studioInput, { name: base.name, purpose: base.purpose, personality: base.personality, testMessage: base.testMessage }),
    knowledge: [...knowledge],
    channels: rows(studioInput.channels === undefined ? base.channels : studioInput.channels, { name: "", enabled: false, job: "" }, 100),
    workflows: rows(studioInput.workflows === undefined ? base.workflows : studioInput.workflows, { name: "", trigger: "", steps: "", status: "draft" }, 100),
    deployment: rows(studioInput.deployment === undefined ? base.deployment : studioInput.deployment, { item: "", done: false }, 100)
  };
  return {
    // "type" turns this into a combined customer/donor/sponsor tracker
    // rather than a leads-only list; "followUpDate" is a real date field
    // (distinct from the free-text "nextAction") so a follow-up can be
    // reminded on, not just described.
    leads: rows(input.leads === undefined ? starter.leads : input.leads, { name: "", contact: "", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "" }),
    socialPosts: rows(input.socialPosts === undefined ? starter.socialPosts : input.socialPosts, { platform: "", caption: "", status: "draft" }),
    // Tool 5: project/task management. Extended from a flat checklist
    // (title/status only) to carry a due date, an assignee, and a
    // priority -- what a "manager," not just a list, actually needs.
    tasks: rows(input.tasks === undefined ? starter.tasks : input.tasks, { title: "", status: "todo", dueDate: "", assignee: "", priority: "medium" }),
    // Tool 2 of the small-business/nonprofit suite: income and expense
    // tracking. "amount" is the first numeric field in this workspace --
    // the Number.isFinite guard above exists specifically so a stray
    // NaN/Infinity here can never silently corrupt a summed total.
    transactions: rows(input.transactions === undefined ? starter.transactions : input.transactions, { date: "", type: "income", category: "", amount: 0, currency: "USD", description: "" }),
    // Tool 3: invoices/receipts. An invoice header (client, dates, status)
    // is stored separately from its line items, joined by "invoiceNumber" --
    // the same flat-row validation this workspace already uses for every
    // other list has no concept of a nested array within one row, so a
    // real one-to-many relationship has to be modeled as two flat lists
    // rather than one row holding an embedded line-items array.
    invoices: rows(input.invoices === undefined ? starter.invoices : input.invoices, { invoiceNumber: "", clientName: "", date: "", dueDate: "", notes: "", status: "draft" }),
    invoiceItems: rows(input.invoiceItems === undefined ? starter.invoiceItems : input.invoiceItems, { invoiceNumber: "", description: "", quantity: 1, unitPrice: 0 }),
    // Tool 4: grant and funding tracking. The existing "Grant Writing Agent"
    // (strategy.js) only ever produced a one-shot text template -- nothing
    // persisted an actual funding opportunity, its deadline, or its
    // application status across visits.
    grants: rows(input.grants === undefined ? starter.grants : input.grants, { funderName: "", program: "", amount: 0, deadline: "", status: "researching", notes: "" }),
    // Tool 5 of the small-business/nonprofit suite: appointment scheduling.
    // A real Google Calendar integration already exists (server/providers/
    // calendarProvider.js, createEvent()) but was only reachable through
    // voice/typed nexus_calendar commands, never surfaced in this
    // workspace. calendarEventId/calendarLink stay empty until an
    // appointment is actually synced -- an unsynced row is honestly just a
    // local plan, never mistaken for a real calendar booking.
    appointments: rows(input.appointments === undefined ? starter.appointments : input.appointments, { title: "", start: "", end: "", notes: "", status: "scheduled", calendarEventId: "", calendarLink: "" }),
    // Core-essentials real estate support: property listings. Reuses this
    // same generic workspace/leads/invoices engine rather than a separate
    // vertical-specific system -- "leads" already tracks buyer/seller/tenant
    // people (see extractLeadArgs' typeMatch in voice-dispatch.js), so a
    // listing only needs to add the one thing leads/tasks/appointments don't
    // already cover: a property record with an address, price, and status.
    listings: rows(input.listings === undefined ? starter.listings : input.listings, { address: "", price: 0, propertyType: "", beds: 0, baths: 0, status: "active", notes: "" }),
    assistantScripts: strings(input.assistantScripts === undefined ? starter.assistantScripts : input.assistantScripts, starter.assistantScripts),
    landingPage: strings(input.landingPage === undefined ? starter.landingPage : input.landingPage, starter.landingPage),
    // Tool 1: a real, editable, versioned business plan document -- distinct
    // from the existing AI-generated `planning` field (a one-shot outline)
    // and from strategy.js's template generator (a text blob, not a
    // structured, saved document). Named sections use the same
    // fixed-key/strings() validation the landing page already uses, so
    // editing one section can never corrupt the others.
    businessPlan: strings(input.businessPlan === undefined ? starter.businessPlan : input.businessPlan, starter.businessPlan),
    assistantStudio
  };
}
function filesFor(info, editable, operation, profile = "coach") {
  const workspace = { ...templates.defaultClientWorkspace(info), ...editable, businessName: info.businessName };
  const files = {};
  const put = (name, content) => { files[name] = { content, draft: true }; };
  if (operation === "launch-kit" || operation === "workflow") {
    put("01_Launch_Kit.md", templates.businessLaunchKit(info));
    put("02_Social_Calendar.csv", templates.socialCalendar(info));
    put("03_AI_Assistant_System.md", templates.aiAssistantSystem(info));
    put("04_Customer_AI_Assistant.md", templates.assistantPrompt(info));
    put("05_Phone_Assistant_Workflow.md", templates.phoneAssistantScript(info));
    put("06_Outreach_Scripts.md", templates.outreachScripts(info));
    put("website/index.html", templates.websiteHtml(info));
    put("website/styles.css", templates.websiteCss());
  }
  if (["landing-page", "workflow"].includes(operation)) {
    put("landing-page/index.html", templates.landingPageHtml(workspace));
    put("landing-page/styles.css", templates.landingPageCss());
  }
  if (["assistant-package", "workflow"].includes(operation)) {
    put("assistant-studio/assistant-system-package.md", templates.assistantStudioPrompt(workspace));
    put("assistant-studio/assistant-config.json", JSON.stringify(workspace.assistantStudio, null, 2));
    put("assistant-studio/assistant-preview.md", "Template preview; no AI or message was sent.\n\n" + templates.testAssistantReply(workspace, workspace.assistantStudio.testMessage));
  }
  if (operation === "workflow") for (const action of ["leads", "social", "phone", "followup"]) put(`workflows/${action}.md`, templates.clientWorkflowOutput(info, action));
  if (operation === "documents") {
    put("documents/Service_Agreement.md", templates.serviceAgreementTemplate(info));
    put("documents/Client_Intake_Form.md", templates.clientIntakeFormTemplate(info));
    put("documents/Application_Checklist.md", templates.applicationChecklistTemplate(info));
  }
  if (operation === "marketing") {
    put("marketing/flyer/index.html", templates.flyerHtml(workspace));
    put("marketing/flyer/flyer.css", templates.flyerCss());
    put("marketing/Newsletter.md", templates.newsletterTemplate(info));
    put("marketing/Promotional_Email.md", templates.emailCampaignTemplate(info));
  }
  if (operation === "strategy") {
    const { agentProfiles, createResponse } = require("./strategy");
    if (!Object.hasOwn(agentProfiles, profile)) fail("business_profile_unknown", "Unknown planning template.");
    put(`strategy/${profile}.md`, createResponse({ agent: profile, request: info.request || info.problem, objective: info.objective, audience: info.audience || info.customer, memory: editable.assistantStudio.knowledge.join("\n") }));
  }
  return files;
}

class BusinessService {
  constructor({ repository, access, consents, providers = {}, agent = null }) {
    Object.assign(this, { repository, access, consents, providers, agent });
  }
  async authorize(context, write = false) {
    if (!context?.tenantId || !context.userId) fail("business_identity_required", "Sign in to use business services.", 401);
    await this.access.authorize({ tenantId: context.tenantId, actorId: context.userId,
      subjectId: context.userId, permission: write ? "tasks:execute" : "tasks:read", purpose: "business-client-workspace" });
  }
  async consent(context, explicit = false, scope = DATA_SCOPE) {
    let consent = await this.consents.active({ tenantId: context.tenantId, subjectId: context.userId, scope });
    if (!consent && explicit === true) consent = await this.consents.grant({ tenantId: context.tenantId,
      subjectId: context.userId, scope, purpose: "User-approved business workspace operation", policyVersion: "business-services-v1",
      receipt: { userConfirmed: true, requestId: context.requestId || null } });
    if (!consent) fail("business_consent_required", "Explicit consent is required for this business operation.", 403);
    return consent;
  }
  async owned(context, recordId) {
    return this.repository.getOwned({ tenantId: context.tenantId, ownerId: context.userId, recordId });
  }
  async list(context) {
    await this.authorize(context);
    return this.repository.list({ tenantId: context.tenantId, ownerId: context.userId, workspaceId: "operations", recordType: "business-client" });
  }
  async create(context, body) {
    await this.authorize(context, true); const input = cleanInput(body);
    await this.consent(context, body.consent === true);
    const info = templates.inferBusiness(input);
    return this.repository.create({ tenantId: context.tenantId, ownerId: context.userId, subjectId: context.userId,
      workspaceId: "operations", recordType: "business-client", classification: "sensitive",
      data: { info, editable: normalizeEditable(info), files: {}, subscription: { state: "not_configured" } },
      provenance: { source: "nexusos-fa0614ce-adapted", generatedBy: "template", externalAction: false } });
  }
  async get(context, recordId) { await this.authorize(context); return this.owned(context, recordId); }
  async update(context, recordId, body) {
    await this.authorize(context, true); await this.consent(context);
    const record = await this.owned(context, recordId);
    if (!Number.isInteger(body.expectedVersion) || body.expectedVersion !== record.version) fail("business_version_conflict", "Reload the current workspace before saving.", 409);
    const info = templates.inferBusiness(cleanInput({ ...record.data.info, ...(body.info || {}) }));
    const editable = normalizeEditable(info, body.editable || record.data.editable);
    return this.repository.update({ tenantId: context.tenantId, recordId, actorId: context.userId,
      expectedVersion: body.expectedVersion, data: { ...record.data, info, editable }, provenance: { source: "owner-correction" } });
  }
  async generate(context, recordId, body) {
    await this.authorize(context, true); await this.consent(context);
    if (!ALLOWED_OPERATIONS.has(body.operation)) fail("business_operation_unknown", "Unknown draft operation.");
    const record = await this.owned(context, recordId);
    if (body.expectedVersion !== record.version) fail("business_version_conflict", "Reload the current workspace before generating.", 409);
    const files = filesFor(record.data.info, record.data.editable, body.operation, body.profile);
    return this.repository.update({ tenantId: context.tenantId, recordId, actorId: context.userId,
      expectedVersion: record.version, data: { ...record.data, files: { ...record.data.files, ...files },
        lastWorkflow: { mode: "template", steps: templates.agenticPlan(record.data.info), published: false, externalAction: false } },
      provenance: { source: "nexusos-fa0614ce-adapted", operation: body.operation, generatedBy: "template", externalAction: false } });
  }
  async exportInvoice(context, recordId, body) {
    await this.authorize(context, true); await this.consent(context);
    const record = await this.owned(context, recordId);
    if (body.expectedVersion !== record.version) fail("business_version_conflict", "Reload the current workspace before generating an invoice.", 409);
    const invoiceNumber = String(body.invoiceNumber || "").trim();
    if (!invoiceNumber) fail("business_invoice_number_required", "Provide the invoice number to generate.");
    const invoice = record.data.editable.invoices.find(item => item.invoiceNumber === invoiceNumber);
    if (!invoice) fail("business_invoice_not_found", "No invoice with that number exists in this workspace.", 404);
    const items = record.data.editable.invoiceItems.filter(item => item.invoiceNumber === invoiceNumber);
    // A "|" inside a client-entered description or name would otherwise be
    // read back as an extra table column by the shared markdown-table
    // renderer -- not a security issue (this never reaches a database
    // query or shell), but it would silently corrupt the printed invoice.
    const cell = value => String(value ?? "").replace(/\|/g, "/");
    // Found live: the footer total summed the raw, unrounded
    // quantity*unitPrice products, while each row displayed its OWN
    // independently-rounded total -- these can legitimately disagree by a
    // cent whenever a unit price has a fractional-cent component (e.g. fuel
    // at $3.999/gal, an entirely ordinary real-world price), producing a
    // client-facing invoice PDF that doesn't add up to itself. Standard
    // accounting practice: round each line to the cent first, then sum the
    // already-rounded cent values for the total.
    const rowTotals = items.map(item => Math.round(item.quantity * item.unitPrice * 100) / 100);
    const total = rowTotals.reduce((sum, rowTotal) => sum + rowTotal, 0);
    const content = [
      `Bill to: ${cell(invoice.clientName || "Client")}`,
      `Date: ${cell(invoice.date)}    Due: ${cell(invoice.dueDate)}`,
      "",
      "| Description | Qty | Unit Price | Total |",
      "|---|---|---|---|",
      ...items.map((item, index) => `| ${cell(item.description)} | ${item.quantity} | ${item.unitPrice.toFixed(2)} | ${rowTotals[index].toFixed(2)} |`),
      "",
      `Total due: ${total.toFixed(2)}`,
      invoice.notes ? invoice.notes : ""
    ].join("\n");
    const pdf = await renderPdfBuffer(`Invoice ${invoiceNumber}`, content);
    const fileName = `invoices/${invoiceNumber}.pdf`;
    return this.repository.update({ tenantId: context.tenantId, recordId, actorId: context.userId,
      expectedVersion: record.version,
      data: { ...record.data, files: { ...record.data.files, [fileName]: { content: pdf.toString("base64"), binary: true, contentType: "application/pdf" } } },
      provenance: { source: "owner-requested-invoice-pdf", invoiceNumber, externalAction: false } });
  }
  async syncAppointment(context, recordId, body) {
    await this.authorize(context, true); await this.consent(context);
    if (body.confirmed !== true) fail("business_confirmation_required", "Confirm creating a real calendar event first.", 409);
    const record = await this.owned(context, recordId);
    if (body.expectedVersion !== record.version) fail("business_version_conflict", "Reload the current workspace before syncing this appointment.", 409);
    const index = Number(body.appointmentIndex);
    const appointments = record.data.editable.appointments;
    if (!Number.isInteger(index) || !appointments[index]) fail("business_appointment_not_found", "No appointment at that position exists in this workspace.", 404);
    const appointment = appointments[index];
    if (!this.providers.calendar) fail("business_provider_unavailable", "Calendar sync is unavailable.", 503);
    const result = await this.providers.calendar({ title: appointment.title, start: appointment.start,
      end: appointment.end, notes: appointment.notes });
    // A successful sync can still be the local demo double's simulated
    // fallback (no real credentials configured) -- never label that the
    // same as a real, provider-verified booking.
    const synced = appointment => ({ ...appointment,
      calendarEventId: result.eventId || "", calendarLink: result.htmlLink || "",
      status: result.providerVerified ? "synced" : "synced-simulated" });
    const updatedAppointments = appointments.map((item, itemIndex) => itemIndex === index ? synced(item) : item);
    return this.repository.update({ tenantId: context.tenantId, recordId, actorId: context.userId, expectedVersion: record.version,
      data: { ...record.data, editable: { ...record.data.editable, appointments: updatedAppointments } },
      provenance: { source: "owner-requested-calendar-sync", externalAction: true, providerVerified: Boolean(result.providerVerified) } });
  }
  async exportBusinessPlan(context, recordId, body) {
    await this.authorize(context, true); await this.consent(context);
    const record = await this.owned(context, recordId);
    if (body.expectedVersion !== record.version) fail("business_version_conflict", "Reload the current workspace before generating the plan document.", 409);
    const plan = record.data.editable.businessPlan;
    const sections = [
      ["Executive Summary", plan.executiveSummary],
      ["Market Analysis", plan.marketAnalysis],
      ["Products & Services", plan.productsServices],
      ["Marketing & Sales", plan.marketingSales],
      ["Operations Plan", plan.operationsPlan],
      ["Financial Plan", plan.financialPlan],
      ["Funding Request", plan.fundingRequest]
    ];
    const content = sections.map(([title, body]) => `## ${title}\n\n${body?.trim() || "[Not yet written.]"}`).join("\n\n");
    const pdf = await renderPdfBuffer(`${record.data.info.businessName} - Business Plan`, content);
    const fileName = "business-plan/Business_Plan.pdf";
    return this.repository.update({ tenantId: context.tenantId, recordId, actorId: context.userId,
      expectedVersion: record.version,
      data: { ...record.data, files: { ...record.data.files, [fileName]: { content: pdf.toString("base64"), binary: true, contentType: "application/pdf" } } },
      provenance: { source: "owner-requested-business-plan-pdf", externalAction: false } });
  }
  async export(context, recordId) {
    await this.authorize(context); const record = await this.owned(context, recordId);
    return { schema: "nexus.business-export.v1", version: record.version, info: record.data.info,
      editable: record.data.editable, files: record.data.files, planning: record.data.planning || null, lastWorkflow: record.data.lastWorkflow || null, subscription: record.data.subscription, exportedAt: new Date().toISOString() };
  }
  async remove(context, recordId, body) {
    await this.authorize(context, true);
    if (body.confirmed !== true) fail("business_confirmation_required", "Confirm deletion first.", 409);
    return this.repository.deleteOwned({ tenantId: context.tenantId, ownerId: context.userId, recordId, expectedVersion: body.expectedVersion });
  }
  async preview(context, recordId, body) {
    await this.authorize(context); const record = await this.owned(context, recordId);
    const workspace = { ...record.data.editable, businessName: record.data.info.businessName };
    return { mode: "template-preview", externalAction: false, reply: templates.testAssistantReply(workspace, String(body.message || "").slice(0, 8000)) };
  }
  status() { return this.providers.status?.() || { aiConfigured: false, billingConfigured: false, liveCertified: false }; }
  async assistant(context, recordId, body) {
    await this.authorize(context, true);
    if (body.confirmed !== true) fail("business_confirmation_required", "Confirm sharing this draft with the AI provider.", 409);
    await this.consent(context, body.consent === true, "business:ai");
    const record = await this.owned(context, recordId);
    if (!this.providers.assistant) fail("business_provider_unavailable", "Business AI is unavailable.", 503);
    return this.providers.assistant({ workspace: { ...record.data.editable, businessName: record.data.info.businessName }, message: String(body.message || "").slice(0, 8000), tenantId: context.tenantId });
  }
  async plan(context, recordId, body) {
    await this.authorize(context, true);
    if (body.confirmed !== true) fail("business_confirmation_required", "Confirm sharing business details with the AI planner.", 409);
    await this.consent(context); await this.consent(context, body.consent === true, "business:ai");
    const record = await this.owned(context, recordId);
    if (record.version !== body.expectedVersion) fail("business_version_conflict", "Reload before planning.", 409);
    if (!this.providers.plan) fail("business_provider_unavailable", "Business AI planning is unavailable.", 503);
    const planning = await this.providers.plan({ info: record.data.info, tenantId: context.tenantId });
    return this.repository.update({ tenantId: context.tenantId, recordId, actorId: context.userId, expectedVersion: record.version,
      data: { ...record.data, planning }, provenance: { source: "owner-requested-business-plan", externalAction: false, providerInvoked: true } });
  }
  async checkout(context, recordId, body) {
    await this.authorize(context, true);
    if (body.confirmed !== true) fail("business_confirmation_required", "Confirm creating a provider checkout.", 409);
    await this.consent(context, body.consent === true, "business:billing");
    const record = await this.owned(context, recordId);
    if (record.version !== body.expectedVersion) fail("business_version_conflict", "Reload before creating checkout.", 409);
    if (record.data.subscription?.state === "active") fail("business_subscription_active", "This workspace already has a verified paid subscription.", 409);
    if (!this.providers.checkout) fail("business_provider_unavailable", "Business billing is unavailable.", 503);
    const subscription = await this.providers.checkout({ tenantId: context.tenantId, ownerId: context.userId, recordId, version: record.version, plan: body.plan });
    return this.repository.update({ tenantId: context.tenantId, recordId, actorId: context.userId, expectedVersion: record.version,
      data: { ...record.data, subscription }, provenance: { source: "stripe-checkout", paid: false } });
  }
  async refreshSubscription(context, recordId) {
    await this.authorize(context, true); await this.consent(context, false, "business:billing");
    const record = await this.owned(context, recordId);
    if (!this.providers.refresh) fail("business_provider_unavailable", "Business billing is unavailable.", 503);
    const verified = await this.providers.refresh({ tenantId: context.tenantId, ownerId: context.userId, recordId, sessionId: record.data.subscription?.sessionId });
    return this.repository.update({ tenantId: context.tenantId, recordId, actorId: context.userId, expectedVersion: record.version,
      data: { ...record.data, subscription: { ...record.data.subscription, ...verified } }, provenance: { source: "stripe-session-verification" } });
  }
  async grantConsent(context, body) {
    await this.authorize(context, true);
    if (body.confirmed !== true) fail("business_confirmation_required", "Confirm business storage consent first.", 409);
    await this.consent(context, true);
    return { granted: true, scope: DATA_SCOPE };
  }
  async revokeConsent(context) {
    await this.authorize(context);
    const consent = await this.consents.active({ tenantId: context.tenantId, subjectId: context.userId, scope: DATA_SCOPE });
    if (consent) await this.consents.revoke({ tenantId: context.tenantId, subjectId: context.userId, consentId: consent.consent_id });
    return { revoked: true, scope: DATA_SCOPE };
  }
  async webhook(raw, signature) {
    if (!this.providers.verifyWebhook) fail("business_provider_unavailable", "Business billing webhooks are unavailable.", 503);
    const event = this.providers.verifyWebhook(raw, signature);
    if (!["checkout.session.completed", "checkout.session.async_payment_succeeded", "checkout.session.async_payment_failed", "checkout.session.expired"].includes(event.type)) return { received: true, ignored: true };
    const session = event.data?.object;
    const meta = session?.metadata || {};
    if (!meta.nexusTenantId || !meta.nexusOwnerId || !meta.nexusRecordId || !Number.isFinite(event.created)) fail("business_webhook_invalid", "Checkout metadata is incomplete.");
    const record = await this.repository.getOwned({ tenantId: meta.nexusTenantId, ownerId: meta.nexusOwnerId, recordId: meta.nexusRecordId });
    const current = record.data.subscription || {};
    if (current.sessionId !== session.id || session.client_reference_id !== [meta.nexusTenantId, meta.nexusOwnerId, meta.nexusRecordId].join(":")) fail("business_checkout_identity_mismatch", "Checkout does not belong to this record.", 409);
    if (current.eventId === event.id || (current.eventCreated || 0) > event.created) return { received: true, duplicateOrStale: true };
    const paid = session.status === "complete" && session.payment_status === "paid";
    if (current.paid && !paid) return { received: true, ignored: true };
    const subscription = { ...current, paid, state: paid ? "active" : session.status === "expired" ? "expired" : "pending_payment",
      providerVerified: true, eventId: event.id, eventCreated: event.created };
    await this.repository.update({ tenantId: meta.nexusTenantId, recordId: record.record_id, actorId: "stripe-webhook",
      expectedVersion: record.version, data: { ...record.data, subscription }, provenance: { source: "stripe-signed-event", eventId: event.id } });
    return { received: true };
  }

}
module.exports = Object.freeze({ BusinessService, cleanInput, normalizeEditable, filesFor, DATA_SCOPE });
