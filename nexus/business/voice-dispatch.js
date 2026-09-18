"use strict";

// Shared classify+extract+execute logic for business/nonprofit voice and
// typed commands (add a customer/donor, log an expense, create an invoice,
// track a grant, manage tasks/appointments, generate documents/plan/
// marketing drafts, read the performance dashboard).
//
// This started as inline logic in server.js's legacy `nexus_business_assistant`
// OpenAI-native tool handler (reached via real spoken voice through
// dispatchRealtimeToolCall/executeNexusOpenAiNativeTool). It was extracted
// here, unchanged in behavior, so the authoritative runtime's `business.manage`/
// `business.query` canonical tools (nexus/runtime/create-runtime.js, planned
// via nexus/brain/planner.js's completeBusinessPlan fast path) can reach the
// EXACT SAME tested logic instead of a real user's TYPED command (which goes
// through the authoritative runtime, not the legacy OpenAI-native path)
// falling through to the AI planner's free guess among an unrelated tool
// catalog and fabricating the wrong action -- confirmed live: "add a donor
// named X" typed into the app created a generic "documents.create" text file
// instead of adding a donor anywhere.
//
// Both callers inject a `businessRequest({method, pathname, body})` function
// bound to their own real backend bridge (server.js's
// authoritativeNexusRuntime.businessRequest with a resolved user, or the
// authoritative runtime's own createBusinessApi(...).handle with a resolved
// context) -- this module never constructs identity itself.

function sanitizeText(value = "", maxLength = 480) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function extractBusinessName(command = "", args = {}) {
  const text = String(command || "");
  const nameMatch = text.match(/\b(?:called|named|titled)\s+["']?([^"'.,\n]{2,80})["']?/i);
  return sanitizeText(args.businessName || args.title || (nameMatch ? nameMatch[1].trim() : ""), 180);
}

// Resolves which business/nonprofit workspace a voice command like "add a
// customer named X" or "log a $50 expense" should act on. Most users only
// ever have one workspace, so defaulting to it (rather than always asking
// "which business?") keeps the common case one turn instead of two; a
// business name spoken in the command still takes priority when the user has
// more than one. Falls back to the most recently updated workspace (the list
// endpoint already orders by updated_at desc) when neither a name match nor
// a lone workspace resolves it, and always names the workspace it picked in
// the response so a wrong guess is easy to notice and correct.
async function resolveBusinessClient(businessRequest, command = "") {
  const listing = await businessRequest({ method: "GET", pathname: "/api/nexus/runtime/business/clients" });
  const clients = listing?.body?.clients || [];
  if (!clients.length) return { clients, client: null };
  const text = String(command || "").toLowerCase();
  const named = clients.find(item => {
    const name = item.data?.info?.businessName;
    return name && text.includes(String(name).toLowerCase());
  });
  return { clients, client: named || clients[0] };
}

function extractLeadArgs(command = "", args = {}) {
  const text = String(command || "");
  const nameMatch = text.match(/\b(?:named|called)\s+["']?([^"'.,\n]{2,80})["']?/i)
    || text.match(/\b(?:customer|donor|lead|client|sponsor|volunteer)\s+["']?([A-Z][A-Za-z .'-]{1,60})["']?/);
  const typeMatch = text.match(/\b(customer|donor|lead|sponsor|volunteer)\b/i);
  const contactMatch = text.match(/\b(?:contact|phone|email|reach(?:able)? at)\s+["']?([^"'\n,.]{3,80})/i)
    || text.match(/([+()\d\s.-]{7,}|[^\s,]+@[^\s,]+)/);
  return {
    name: sanitizeText(args.name || (nameMatch ? nameMatch[1].trim() : ""), 160),
    type: sanitizeText(args.type || (typeMatch ? typeMatch[1].toLowerCase() : "customer"), 40),
    contact: sanitizeText(args.contact || (contactMatch ? contactMatch[1].trim() : ""), 160)
  };
}

function extractTransactionArgs(command = "", args = {}) {
  const text = String(command || "");
  const amountMatch = text.match(/\$\s?(\d+(?:,\d{3})*(?:\.\d{1,2})?)|\b(\d+(?:,\d{3})*(?:\.\d{1,2})?)\s?(?:dollars|usd)\b/i);
  const amountText = amountMatch ? (amountMatch[1] || amountMatch[2]) : "";
  const type = /\b(expense|spent|spend|paid|purchase|purchased|bought|cost)\b/i.test(text) ? "expense"
    : /\b(income|revenue|donation|donated|sale|sold|payment received|earned)\b/i.test(text) ? "income" : "expense";
  const categoryMatch = text.match(/\b(?:for|on)\s+([^\n,.]{2,60})/i);
  const rawAmount = args.amount !== undefined ? Number(args.amount) : (amountText ? Number(amountText.replace(/,/g, "")) : NaN);
  return {
    amount: Number.isFinite(rawAmount) ? rawAmount : null,
    type: sanitizeText(args.type || type, 20),
    category: sanitizeText(args.category || (categoryMatch ? categoryMatch[1].trim() : ""), 160),
    description: sanitizeText(args.description || text, 500)
  };
}

function extractInvoiceArgs(command = "", args = {}) {
  const text = String(command || "");
  const clientMatch = text.match(/\bfor\s+["']?([^"'.,\n]{2,80})["']?/i);
  return { clientName: sanitizeText(args.clientName || args.name || (clientMatch ? clientMatch[1].trim() : ""), 160) };
}

function extractInvoiceItemArgs(command = "", args = {}) {
  const text = String(command || "");
  const invoiceMatch = text.match(/\b(INV-\d+)\b/i);
  let body = text;
  const colonIndex = text.lastIndexOf(":");
  if (colonIndex !== -1) {
    body = text.slice(colonIndex + 1).trim();
  } else if (invoiceMatch) {
    body = text.slice(invoiceMatch.index + invoiceMatch[0].length).trim();
  } else {
    const itemMatch = text.match(/\b(?:line[- ]?item|item)s?\b/i);
    if (itemMatch) body = text.slice(itemMatch.index + itemMatch[0].length).trim();
  }
  body = body.replace(/^(?:to|for|on|is)\s+/i, "").trim();
  const lineMatch = body.match(/^(\d+(?:\.\d+)?)?\s*(.+?)\s+at\s+\$?\s?(\d+(?:,\d{3})*(?:\.\d{1,2})?)(?:\s*(?:each|per\s+\w+))?/i);
  const rawQuantity = args.quantity !== undefined ? Number(args.quantity) : (lineMatch && lineMatch[1] ? Number(lineMatch[1]) : 1);
  const rawPrice = args.unitPrice !== undefined ? Number(args.unitPrice) : (lineMatch ? Number(lineMatch[3].replace(/,/g, "")) : NaN);
  return {
    invoiceNumber: sanitizeText(args.invoiceNumber || (invoiceMatch ? invoiceMatch[1].toUpperCase() : ""), 40),
    description: sanitizeText(args.description || (lineMatch ? lineMatch[2].trim() : body), 300),
    quantity: Number.isFinite(rawQuantity) && rawQuantity > 0 ? rawQuantity : 1,
    unitPrice: Number.isFinite(rawPrice) ? rawPrice : null
  };
}

function extractGrantArgs(command = "", args = {}) {
  const text = String(command || "");
  const funderMatch = text.match(/\b(?:from|with)\s+(?:the\s+)?([^"'.,\n]{2,80}?)(?=\s+for\b|[,.]|$)/i);
  const programMatch = text.match(/\b(?:called|named|titled)\s+["']?([^"'.,\n]{2,80})["']?/i);
  const amountMatch = text.match(/\$\s?(\d+(?:,\d{3})*(?:\.\d{1,2})?)/);
  const deadlineMatch = text.match(/\bdeadline\s+(?:is\s+|of\s+)?["']?([^"'.,\n]{3,40})["']?/i)
    || text.match(/\bdue\s+(?:by\s+|on\s+)?["']?([^"'.,\n]{3,40})["']?/i);
  const rawAmount = args.amount !== undefined ? Number(args.amount) : (amountMatch ? Number(amountMatch[1].replace(/,/g, "")) : NaN);
  return {
    funderName: sanitizeText(args.funderName || (funderMatch ? funderMatch[1].trim() : ""), 160),
    program: sanitizeText(args.program || (programMatch ? programMatch[1].trim() : ""), 160),
    amount: Number.isFinite(rawAmount) ? rawAmount : 0,
    deadline: sanitizeText(args.deadline || (deadlineMatch ? deadlineMatch[1].trim() : ""), 40)
  };
}

function extractGrantStatusArgs(command = "", args = {}) {
  const text = String(command || "");
  const statusMatch = text.match(/\bstatus\s+(?:to|as)\s+["']?([A-Za-z][A-Za-z -]{2,30})["']?/i)
    || text.match(/\b(?:as|to)\s+["']?([A-Za-z][A-Za-z -]{2,30})["']?\s*$/i);
  return { status: sanitizeText(args.status || (statusMatch ? statusMatch[1].trim() : ""), 40) };
}

function resolveGrant(grants, command = "") {
  const text = String(command || "").toLowerCase();
  return grants.find(grant => (grant.funderName && text.includes(String(grant.funderName).toLowerCase()))
    || (grant.program && text.includes(String(grant.program).toLowerCase())));
}

function extractTaskArgs(command = "", args = {}) {
  const text = String(command || "");
  const titleMatch = text.match(/\btask\s+(?:to|called|named|titled)\s+["']?([^"'.,\n]{2,120})["']?/i)
    || text.match(/\b(?:called|named|titled)\s+["']?([^"'.,\n]{2,120})["']?/i);
  const assigneeMatch = text.match(/\bassign(?:ed)?\s+to\s+["']?([A-Z][A-Za-z .'-]{1,60})["']?/i);
  const dueMatch = text.match(/\bdue\s+(?:by\s+|on\s+)?["']?([^"'.,\n]{3,40})["']?/i);
  const priorityMatch = text.match(/\b(low|medium|high|urgent)\s*priority\b/i) || text.match(/\bpriority\s*(?:is|:)?\s*(low|medium|high|urgent)\b/i);
  return {
    title: sanitizeText(args.title || (titleMatch ? titleMatch[1].trim() : ""), 200),
    assignee: sanitizeText(args.assignee || (assigneeMatch ? assigneeMatch[1].trim() : ""), 120),
    dueDate: sanitizeText(args.dueDate || (dueMatch ? dueMatch[1].trim() : ""), 40),
    priority: sanitizeText(args.priority || (priorityMatch ? priorityMatch[1].toLowerCase() : "medium"), 20)
  };
}

function extractTaskStatusArgs(command = "", args = {}) {
  const text = String(command || "");
  const statusWord = "(to ?do|in[- ]?progress|done|complete[d]?|finish(?:ed)?|blocked|on hold|cancel(?:l)?ed)";
  const specific = text.match(new RegExp(`\\b(?:status|task)\\s+(?:to|as)\\s+["']?${statusWord}["']?`, "i"));
  const generic = [...text.matchAll(new RegExp(`\\b${statusWord}\\b`, "gi"))];
  const raw = (specific ? specific[1] : (generic.length ? generic[generic.length - 1][1] : "")).toLowerCase();
  const normalized = /done|complete|finish/.test(raw) ? "done"
    : /progress/.test(raw) ? "in progress"
    : /to ?do/.test(raw) ? "todo"
    : /hold/.test(raw) ? "on hold"
    : /cancel/.test(raw) ? "cancelled"
    : /block/.test(raw) ? "blocked"
    : "";
  return { status: sanitizeText(args.status || normalized, 30) };
}

function resolveTask(tasks, command = "") {
  const text = String(command || "").toLowerCase();
  return tasks.find(task => task.title && text.includes(String(task.title).toLowerCase()));
}

function extractAppointmentArgs(command = "", args = {}) {
  const text = String(command || "");
  const titleMatch = text.match(/\bappointment\s+(?:for|with|called|named|titled)\s+["']?(.+?)["']?(?=\s+(?:on|at)\s+|[,.]|$)/i)
    || text.match(/\b(?:called|named|titled)\s+["']?(.+?)["']?(?=\s+(?:on|at)\s+|[,.]|$)/i);
  const startMatch = text.match(/\b(?:on|at)\s+([^"'.,\n]{3,60})$/i);
  return {
    title: sanitizeText(args.title || (titleMatch ? titleMatch[1].trim() : ""), 200),
    start: sanitizeText(args.start || (startMatch ? startMatch[1].trim() : ""), 60)
  };
}

function resolveAppointmentIndex(appointments, command = "") {
  const text = String(command || "").toLowerCase();
  const named = appointments.findIndex(appointment => appointment.title && text.includes(String(appointment.title).toLowerCase()));
  if (named !== -1) return named;
  const unsynced = appointments.map((appointment, index) => ({ appointment, index }))
    .filter(entry => entry.appointment.status !== "synced" && entry.appointment.status !== "synced-simulated");
  return unsynced.length === 1 ? unsynced[0].index : -1;
}

// Mirrors public/business-services.js's renderDashboard() computation
// exactly -- same field names, same filters, same reduces -- so a voice
// summary of "how's my business doing" is always numerically identical to
// what the workspace's own dashboard section shows.
function computeBusinessDashboard(editable) {
  const income = editable.transactions.filter(row => row.type !== "expense").reduce((sum, row) => sum + row.amount, 0);
  const expenses = editable.transactions.filter(row => row.type === "expense").reduce((sum, row) => sum + row.amount, 0);
  const customers = editable.leads.filter(row => row.type === "customer").length;
  const donors = editable.leads.filter(row => row.type === "donor").length;
  const sponsors = editable.leads.filter(row => row.type === "sponsor").length;
  const volunteers = editable.leads.filter(row => row.type === "volunteer").length;
  const invoiceTotal = editable.invoiceItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const unpaidInvoices = editable.invoices.filter(invoice => invoice.status !== "paid").length;
  const grantsRequested = editable.grants.reduce((sum, grant) => sum + grant.amount, 0);
  const grantsAwarded = editable.grants.filter(grant => grant.status === "awarded").reduce((sum, grant) => sum + grant.amount, 0);
  const openTasks = editable.tasks.filter(task => task.status !== "done" && task.status !== "complete").length;
  const upcomingAppointments = editable.appointments.filter(appointment => appointment.status !== "cancelled").length;
  return {
    netIncome: income - expenses, income, expenses,
    customers, donors, sponsors, volunteers,
    invoiceTotal, unpaidInvoices,
    grantsRequested, grantsAwarded,
    openTasks, totalTasks: editable.tasks.length,
    upcomingAppointments
  };
}

// Classifies a command into exactly one business sub-intent, or null if the
// command isn't business-shaped at all. The order and exclusions here are
// load-bearing -- see each flag's inline note -- and must stay in sync with
// server.js's legacy nexus_business_assistant handler, which uses this same
// function (rather than a second, hand-maintained copy of these regexes).
const READ_INTENTS = new Set(["dashboard", "list"]);

function classify(command = "") {
  const BUSINESS_WORKSPACE_NOUN = "(?:business(?:es)?|nonprofit|non-profit|ngo|admin[- ]assistant|workspace)s?";
  const wantsBusinessDashboard = /\b(business|nonprofit)\b/i.test(command) && /\b(dashboard|doing|performing|performance summary|financial summary)\b/i.test(command);
  const wantsList = (
    (/\b(list|show)\b/i.test(command) && new RegExp(`\\b${BUSINESS_WORKSPACE_NOUN}\\b`, "i").test(command))
    || new RegExp(`\\b(?:which|what)\\s+${BUSINESS_WORKSPACE_NOUN}\\b`, "i").test(command)
    || new RegExp(`\\b${BUSINESS_WORKSPACE_NOUN}\\b.{0,20}\\bdo i have\\b`, "i").test(command)
  ) && !/\b(start|create|new|set ?up|begin)\b/i.test(command);
  const wantsAddLead = /\b(?:add|create|new|log|track)\b/i.test(command) && /\b(customer|donor|lead|sponsor|volunteer)\b/i.test(command);
  const wantsLogTransaction = /\b(?:log|record|add|track)\b/i.test(command) && /\b(expense|income|transaction|payment|donation|sale|revenue)\b/i.test(command);
  const wantsAddInvoiceItem = /\binvoice\b/i.test(command) && /\b(?:line[- ]?item|item)s?\b/i.test(command) && /\b(?:add|include)\b/i.test(command);
  const wantsGenerateInvoicePdf = !wantsAddInvoiceItem && /\binvoice\b/i.test(command) && /\b(?:generate|print|export|make)\b/i.test(command) && /\b(pdf|receipt)\b/i.test(command);
  const wantsCreateInvoice = !wantsAddInvoiceItem && !wantsGenerateInvoicePdf && /\b(invoice|receipt)\b/i.test(command) && /\b(?:create|add|start|open|new)\b/i.test(command);
  const wantsAddGrant = /\b(?:add|create|new|log|track)\b/i.test(command) && /\b(grant|funding)\b/i.test(command);
  const wantsUpdateGrantStatus = /\b(?:mark|update|set|change)\b/i.test(command) && /\bgrant\b/i.test(command);
  const wantsAddTask = /\b(?:add|create|new)\b/i.test(command) && /\btask\b/i.test(command);
  const wantsUpdateTaskStatus = !wantsAddTask && /\b(?:mark|update|set|change|complete|finish)\b/i.test(command) && /\btask\b/i.test(command);
  const wantsSyncAppointment = /\bsync\b/i.test(command) && /\b(appointment|calendar)\b/i.test(command);
  const wantsAddAppointment = !wantsSyncAppointment && /\b(?:add|schedule|create|book|new)\b/i.test(command) && /\bappointment\b/i.test(command);
  const wantsGenerateDocuments = /\b(?:create|generate|draft|make)\b/i.test(command) && /\b(service agreement|contract|intake form|client intake|application checklist)\b/i.test(command);
  const wantsGenerateBusinessPlanPdf = /\bbusiness plan\b/i.test(command) && /\b(?:generate|print|export|make)\b/i.test(command) && /\b(pdf|document)\b/i.test(command);
  const wantsGenerateMarketing = /\b(?:create|generate|make|draft)\b/i.test(command) && /\b(flyer|newsletter|promotional email|marketing email|marketing material|marketing content|marketing draft)\b/i.test(command);
  // Narrower than server.js's own bare fallback (which assumes ANY command
  // reaching that handler is business-related, since the model already chose
  // the tool) -- this classifier is also reached from a deterministic fast
  // path that runs BEFORE any tool selection, against every typed command in
  // the app, so it must not swallow unrelated text into a bogus "create a
  // workspace called <command>" plan. Require an explicit start/create verb
  // alongside the business/nonprofit word.
  const wantsCreateWorkspace = /\b(business|nonprofit|non-profit|ngo)\b/i.test(command) && /\b(start|create|new|set ?up|begin)\b/i.test(command);

  if (wantsBusinessDashboard) return "dashboard";
  if (wantsList) return "list";
  if (wantsAddLead) return "addLead";
  if (wantsLogTransaction) return "logTransaction";
  if (wantsAddInvoiceItem) return "addInvoiceItem";
  if (wantsGenerateInvoicePdf) return "generateInvoicePdf";
  if (wantsCreateInvoice) return "createInvoice";
  if (wantsAddGrant) return "addGrant";
  if (wantsUpdateGrantStatus) return "updateGrantStatus";
  if (wantsAddTask) return "addTask";
  if (wantsUpdateTaskStatus) return "updateTaskStatus";
  if (wantsSyncAppointment) return "syncAppointment";
  if (wantsAddAppointment) return "addAppointment";
  if (wantsGenerateDocuments) return "generateDocuments";
  if (wantsGenerateBusinessPlanPdf) return "generateBusinessPlanPdf";
  if (wantsGenerateMarketing) return "generateMarketing";
  if (wantsCreateWorkspace) return "createWorkspace";
  return null;
}

function isReadIntent(intent) { return READ_INTENTS.has(intent); }

// Synchronous, no-database precheck for the planner's deterministic fast
// path: classifies the command and, for intents with a field that `run()`
// itself checks before ever calling businessRequest, reproduces that same
// missing-field question so the plan can carry it as `clarification`
// instead of proceeding to confirmation on an incomplete action. Must stay
// in sync with the equivalent early checks inside `run()` above -- each one
// is duplicated here only because `run()`'s checks are guard clauses ahead
// of its first `await`, not because the logic is meaningfully different.
function precheck(command = "", args = {}) {
  const intent = classify(command);
  if (!intent) return { intent: null, toolId: null, clarification: null };
  const toolId = isReadIntent(intent) ? "business.query" : "business.manage";
  let clarification = null;
  if (intent === "addLead") {
    const lead = extractLeadArgs(command, args);
    if (!lead.name) clarification = `What is the name of the ${lead.type} to add?`;
  } else if (intent === "logTransaction") {
    const transaction = extractTransactionArgs(command, args);
    if (!transaction.amount || transaction.amount <= 0) clarification = `What is the dollar amount for this ${transaction.type}?`;
  } else if (intent === "addInvoiceItem") {
    const item = extractInvoiceItemArgs(command, args);
    if (!item.unitPrice) clarification = "What is the unit price for this line item?";
  } else if (intent === "addGrant") {
    const grant = extractGrantArgs(command, args);
    if (!grant.funderName && !grant.program) clarification = "What is the name of the funder or the grant/funding program?";
  } else if (intent === "updateGrantStatus") {
    const statusArgs = extractGrantStatusArgs(command, args);
    if (!statusArgs.status) clarification = "What status should I set this grant to?";
  } else if (intent === "addTask") {
    const task = extractTaskArgs(command, args);
    if (!task.title) clarification = "What is the task?";
  } else if (intent === "updateTaskStatus") {
    const statusArgs = extractTaskStatusArgs(command, args);
    if (!statusArgs.status) clarification = "What status should I set this task to?";
  } else if (intent === "addAppointment") {
    const appointment = extractAppointmentArgs(command, args);
    if (!appointment.title) clarification = "What should I call this appointment?";
  } else if (intent === "createWorkspace") {
    const businessName = extractBusinessName(command, args);
    if (!businessName) clarification = "What should I call this business or nonprofit workspace?";
  }
  return { intent, toolId, clarification };
}

// Runs a business command end to end: classify -> extract -> (resolve via
// businessRequest) -> confirm -> execute. Returns a plain
// {status, response, ...} object; the caller adds its own envelope fields
// (e.g. server.js's {...common, capability: "business-assistant"}).
// `confirmed` mirrors the legacy handler's own `args.confirmed === true ||
// args.confirmation === true` check -- callers whose own framework already
// gates confirmation before this ever runs (the authoritative runtime's
// business.manage tool, confirmationRequired: true) should simply always
// pass `confirmed: true`.
async function run({ command = "", args = {}, confirmed, businessRequest }) {
  if (typeof businessRequest !== "function") throw new Error("A businessRequest bridge function is required.");
  const isConfirmed = confirmed !== undefined ? Boolean(confirmed) : (args.confirmed === true || args.confirmation === true);
  const intent = classify(command);

  if (intent === "dashboard") {
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) {
      return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one.", missingInformation: ["businessName"] };
    }
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const dashboard = computeBusinessDashboard(resolved.client.data.editable);
    const response = `Here is the performance summary for "${workspaceName}": net income $${dashboard.netIncome.toFixed(2)} (income $${dashboard.income.toFixed(2)}, expenses $${dashboard.expenses.toFixed(2)}); ${dashboard.customers} customers, ${dashboard.donors} donors, ${dashboard.sponsors} sponsors, ${dashboard.volunteers} volunteers; $${dashboard.invoiceTotal.toFixed(2)} invoiced with ${dashboard.unpaidInvoices} invoice${dashboard.unpaidInvoices === 1 ? "" : "s"} not marked paid; $${dashboard.grantsRequested.toFixed(2)} in grants tracked, $${dashboard.grantsAwarded.toFixed(2)} awarded; ${dashboard.openTasks} of ${dashboard.totalTasks} tasks not yet done; ${dashboard.upcomingAppointments} active appointment${dashboard.upcomingAppointments === 1 ? "" : "s"}.`;
    return { status: "completed", localOnly: true, response, businessDashboard: dashboard, summary: response };
  }

  if (intent === "list") {
    const listing = await businessRequest({ method: "GET", pathname: "/api/nexus/runtime/business/clients" });
    const clients = listing?.body?.clients || [];
    const response = clients.length
      ? `You have ${clients.length} business or nonprofit workspace${clients.length === 1 ? "" : "s"}: ${clients.map(item => item.data?.info?.businessName || "Untitled").join(", ")}.`
      : "You do not have a business or nonprofit workspace yet. Tell me its name and what it does, and I can start one.";
    return { status: "completed", localOnly: true, response, businessClients: clients, summary: response };
  }

  if (intent === "addLead") {
    const lead = extractLeadArgs(command, args);
    if (!lead.name) return { status: "needs-input", response: `What is the name of the ${lead.type} to add?`, missingInformation: ["name"] };
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before adding customers or donors.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can add ${lead.name} as a ${lead.type} to "${workspaceName}". Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, leads: [...resolved.client.data.editable.leads,
      { name: lead.name, contact: lead.contact, type: lead.type, need: "", stage: "new", nextAction: "", followUpDate: "" }] };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Added ${lead.name} as a ${lead.type} to "${workspaceName}".`;
    return { status: "completed", localOnly: true, response, businessRecord: updated?.body || null, summary: response };
  }

  if (intent === "logTransaction") {
    const transaction = extractTransactionArgs(command, args);
    if (!transaction.amount || transaction.amount <= 0) return { status: "needs-input", response: `What is the dollar amount for this ${transaction.type}?`, missingInformation: ["amount"] };
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before logging income or expenses.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const categoryPhrase = transaction.category ? ` for ${transaction.category}` : "";
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can log a $${transaction.amount.toFixed(2)} ${transaction.type}${categoryPhrase} in "${workspaceName}". Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, transactions: [...resolved.client.data.editable.transactions,
      { date: new Date().toISOString().slice(0, 10), type: transaction.type, category: transaction.category, amount: transaction.amount, description: transaction.description }] };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Logged a $${transaction.amount.toFixed(2)} ${transaction.type}${categoryPhrase} in "${workspaceName}".`;
    return { status: "completed", localOnly: true, response, businessRecord: updated?.body || null, summary: response };
  }

  if (intent === "addInvoiceItem") {
    const item = extractInvoiceItemArgs(command, args);
    if (!item.unitPrice) return { status: "needs-input", response: "What is the unit price for this line item?", missingInformation: ["unitPrice"] };
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before adding invoice line items.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const invoices = resolved.client.data.editable.invoices;
    const invoiceNumber = item.invoiceNumber || invoices.at(-1)?.invoiceNumber || "";
    if (!invoiceNumber) return { status: "needs-input", response: `"${workspaceName}" does not have any invoices yet. Create one first, then I can add line items to it.`, missingInformation: ["invoiceNumber"] };
    if (!invoices.some(invoice => invoice.invoiceNumber === invoiceNumber)) return { status: "needs-input", response: `I could not find invoice ${invoiceNumber} in "${workspaceName}".`, missingInformation: ["invoiceNumber"] };
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can add ${item.quantity} x ${item.description || "line item"} at $${item.unitPrice.toFixed(2)} to invoice ${invoiceNumber} in "${workspaceName}". Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, invoiceItems: [...resolved.client.data.editable.invoiceItems,
      { invoiceNumber, description: item.description, quantity: item.quantity, unitPrice: item.unitPrice }] };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Added ${item.quantity} x ${item.description || "line item"} at $${item.unitPrice.toFixed(2)} to invoice ${invoiceNumber} in "${workspaceName}".`;
    return { status: "completed", localOnly: true, response, businessRecord: updated?.body || null, summary: response };
  }

  if (intent === "generateInvoicePdf") {
    const invoiceMatch = command.match(/\b(INV-\d+)\b/i);
    const invoiceNumberArg = sanitizeText(args.invoiceNumber || (invoiceMatch ? invoiceMatch[1].toUpperCase() : ""), 40);
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const invoices = resolved.client.data.editable.invoices;
    const invoiceNumber = invoiceNumberArg || invoices.at(-1)?.invoiceNumber || "";
    if (!invoiceNumber) return { status: "needs-input", response: `"${workspaceName}" does not have any invoices yet.`, missingInformation: ["invoiceNumber"] };
    if (!invoices.some(invoice => invoice.invoiceNumber === invoiceNumber)) return { status: "needs-input", response: `I could not find invoice ${invoiceNumber} in "${workspaceName}".`, missingInformation: ["invoiceNumber"] };
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can generate a real, printable PDF for invoice ${invoiceNumber} in "${workspaceName}". Should I go ahead?` };
    const generated = await businessRequest({ method: "POST", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}/invoice-pdf`,
      body: { invoiceNumber, expectedVersion: resolved.client.version } });
    const response = `Generated the PDF for invoice ${invoiceNumber} in "${workspaceName}". Open Business services to download it.`;
    return { status: "completed", localOnly: true, response, businessRecord: generated?.body || null, summary: response };
  }

  if (intent === "createInvoice") {
    const invoiceArgs = extractInvoiceArgs(command, args);
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before creating an invoice.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const invoiceNumber = `INV-${resolved.client.data.editable.invoices.length + 1001}`;
    const clientPhrase = invoiceArgs.clientName ? ` for ${invoiceArgs.clientName}` : "";
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can create invoice ${invoiceNumber}${clientPhrase} in "${workspaceName}". Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, invoices: [...resolved.client.data.editable.invoices,
      { invoiceNumber, clientName: invoiceArgs.clientName, date: new Date().toISOString().slice(0, 10), dueDate: "", notes: "", status: "draft" }] };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Created invoice ${invoiceNumber}${clientPhrase} in "${workspaceName}".`;
    return { status: "completed", localOnly: true, response, businessRecord: updated?.body || null, summary: response };
  }

  if (intent === "addGrant") {
    const grant = extractGrantArgs(command, args);
    if (!grant.funderName && !grant.program) return { status: "needs-input", response: "What is the name of the funder or the grant/funding program?", missingInformation: ["funderName"] };
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before tracking a grant.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const grantLabel = grant.funderName || grant.program;
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can add a${grant.amount ? ` $${grant.amount.toFixed(2)}` : ""} grant or funding opportunity from "${grantLabel}" to "${workspaceName}". Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, grants: [...resolved.client.data.editable.grants,
      { funderName: grant.funderName, program: grant.program, amount: grant.amount, deadline: grant.deadline, status: "researching", notes: "" }] };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Added a grant or funding opportunity from "${grantLabel}" to "${workspaceName}".`;
    return { status: "completed", localOnly: true, response, businessRecord: updated?.body || null, summary: response };
  }

  if (intent === "updateGrantStatus") {
    const statusArgs = extractGrantStatusArgs(command, args);
    if (!statusArgs.status) return { status: "needs-input", response: "What status should I set this grant to?", missingInformation: ["status"] };
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const grants = resolved.client.data.editable.grants;
    const target = resolveGrant(grants, command);
    if (!target) return { status: "needs-input", response: `I could not find a grant matching that funder or program in "${workspaceName}". Name the funder or program exactly as you tracked it.`, missingInformation: ["funderName"] };
    const grantLabel = target.funderName || target.program;
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can set the "${grantLabel}" grant status to "${statusArgs.status}" in "${workspaceName}". Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, grants: grants.map(grant => grant === target ? { ...grant, status: statusArgs.status } : grant) };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Set the "${grantLabel}" grant status to "${statusArgs.status}" in "${workspaceName}".`;
    return { status: "completed", localOnly: true, response, businessRecord: updated?.body || null, summary: response };
  }

  if (intent === "addTask") {
    const task = extractTaskArgs(command, args);
    if (!task.title) return { status: "needs-input", response: "What is the task?", missingInformation: ["title"] };
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before adding tasks.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const assigneePhrase = task.assignee ? `, assigned to ${task.assignee}` : "";
    const duePhrase = task.dueDate ? `, due ${task.dueDate}` : "";
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can add a task to "${workspaceName}": ${task.title}${assigneePhrase}${duePhrase}. Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, tasks: [...resolved.client.data.editable.tasks,
      { title: task.title, status: "todo", dueDate: task.dueDate, assignee: task.assignee, priority: task.priority }] };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Added a task to "${workspaceName}": ${task.title}${assigneePhrase}${duePhrase}.`;
    return { status: "completed", localOnly: true, response, businessRecord: updated?.body || null, summary: response };
  }

  if (intent === "updateTaskStatus") {
    const statusArgs = extractTaskStatusArgs(command, args);
    if (!statusArgs.status) return { status: "needs-input", response: "What status should I set this task to?", missingInformation: ["status"] };
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const tasks = resolved.client.data.editable.tasks;
    const target = resolveTask(tasks, command);
    if (!target) return { status: "needs-input", response: `I could not find a task matching that in "${workspaceName}". Name it exactly as you created it.`, missingInformation: ["title"] };
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can set the "${target.title}" task status to "${statusArgs.status}" in "${workspaceName}". Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, tasks: tasks.map(item => item === target ? { ...item, status: statusArgs.status } : item) };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Set the "${target.title}" task status to "${statusArgs.status}" in "${workspaceName}".`;
    return { status: "completed", localOnly: true, response, businessRecord: updated?.body || null, summary: response };
  }

  if (intent === "addAppointment") {
    const appointment = extractAppointmentArgs(command, args);
    if (!appointment.title) return { status: "needs-input", response: "What should I call this appointment?", missingInformation: ["title"] };
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before adding appointments.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const startPhrase = appointment.start ? ` on ${appointment.start}` : "";
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can add an appointment "${appointment.title}"${startPhrase} to "${workspaceName}" as a local plan. This does not book anything on a real calendar until you sync it. Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, appointments: [...resolved.client.data.editable.appointments,
      { title: appointment.title, start: appointment.start, end: "", notes: "", status: "scheduled", calendarEventId: "", calendarLink: "" }] };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Added an appointment "${appointment.title}"${startPhrase} to "${workspaceName}" as a local plan. Say "sync it to my calendar" when you want a real calendar event created.`;
    return { status: "completed", localOnly: true, response, businessRecord: updated?.body || null, summary: response };
  }

  if (intent === "syncAppointment") {
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const appointments = resolved.client.data.editable.appointments;
    const index = resolveAppointmentIndex(appointments, command);
    if (index === -1) return { status: "needs-input", response: `Which appointment in "${workspaceName}" should I sync? Name it exactly as you created it.`, missingInformation: ["title"] };
    const target = appointments[index];
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can sync "${target.title}" to your configured calendar provider now, creating a real event. Should I go ahead?` };
    const synced = await businessRequest({ method: "POST", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}/appointment-sync`,
      body: { appointmentIndex: index, expectedVersion: resolved.client.version, confirmed: true } });
    const syncedAppointment = synced?.body?.data?.editable?.appointments?.[index];
    const wasReal = syncedAppointment?.status === "synced";
    const response = wasReal
      ? `Synced "${target.title}" to your real calendar provider.`
      : `Synced "${target.title}" using the local demo calendar double -- no real calendar provider is configured, so this is a labeled simulated event, not a real booking.`;
    return { status: "completed", localOnly: true, response, businessRecord: synced?.body || null, summary: response };
  }

  if (intent === "generateDocuments") {
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before generating documents.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can generate a service agreement template, a client intake form, and an application checklist for "${workspaceName}". These are draft templates only -- review them with someone qualified before use. Should I go ahead?` };
    const generated = await businessRequest({ method: "POST", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}/generate`,
      body: { operation: "documents", expectedVersion: resolved.client.version } });
    const response = `Generated a service agreement template, a client intake form, and an application checklist for "${workspaceName}". Open Business services to review and download them.`;
    return { status: "completed", localOnly: true, response, businessRecord: generated?.body || null, summary: response };
  }

  if (intent === "generateBusinessPlanPdf") {
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before generating a business plan.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can generate a real, printable PDF of the business plan document already saved in "${workspaceName}". Should I go ahead?` };
    const generated = await businessRequest({ method: "POST", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}/business-plan-pdf`,
      body: { expectedVersion: resolved.client.version } });
    const response = `Generated the business plan PDF for "${workspaceName}". Open Business services to review and download it.`;
    return { status: "completed", localOnly: true, response, businessRecord: generated?.body || null, summary: response };
  }

  if (intent === "generateMarketing") {
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before generating marketing materials.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can generate a flyer, a newsletter draft, and a promotional email draft for "${workspaceName}". These are draft files only -- nothing is published or sent. Should I go ahead?` };
    const generated = await businessRequest({ method: "POST", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}/generate`,
      body: { operation: "marketing", expectedVersion: resolved.client.version } });
    const response = `Generated a flyer, a newsletter draft, and a promotional email draft for "${workspaceName}". Open Business services to review and download them.`;
    return { status: "completed", localOnly: true, response, businessRecord: generated?.body || null, summary: response };
  }

  // Fallback: create a new workspace. Reached for `createWorkspace` and,
  // matching the legacy handler's own final fallback, anything else the
  // caller has already decided is business-related (e.g. the model chose
  // this tool) but this classifier didn't otherwise recognize.
  const businessName = extractBusinessName(command, args);
  if (!businessName) return { status: "needs-input", response: "What should I call this business or nonprofit workspace?", missingInformation: ["businessName"] };
  if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can start a new business or nonprofit workspace called "${businessName}" and save it to your account. Should I go ahead?` };
  const created = await businessRequest({ method: "POST", pathname: "/api/nexus/runtime/business/clients", body: { businessName, consent: true } });
  const response = `Started a business/nonprofit workspace called "${businessName}". Open Business services anytime to keep building it out.`;
  return { status: "completed", localOnly: true, response, businessRecord: created?.body || null, summary: response };
}

module.exports = Object.freeze({
  sanitizeText, classify, isReadIntent, precheck, run,
  extractBusinessName, resolveBusinessClient, extractLeadArgs, extractTransactionArgs,
  extractInvoiceArgs, extractInvoiceItemArgs, extractGrantArgs, extractGrantStatusArgs, resolveGrant,
  extractTaskArgs, extractTaskStatusArgs, resolveTask, extractAppointmentArgs, resolveAppointmentIndex,
  computeBusinessDashboard
});
