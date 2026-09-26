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
    || text.match(/\b(?:customer|donor|lead|client|sponsor|volunteer|member|congregant|buyer|seller|tenant|landlord)\s+["']?([A-Z][A-Za-z .'-]{1,60})["']?/);
  // "member"/"congregant" -- a church or congregation's own word for the
  // person being tracked -- is kept verbatim rather than forced into an
  // existing bucket; computeBusinessDashboard below counts it too.
  // "buyer"/"seller"/"tenant"/"landlord" -- a real estate workspace's own
  // words for the person being tracked -- follow the same pattern.
  const typeMatch = text.match(/\b(customer|donor|lead|sponsor|volunteer|member|congregant|buyer|seller|tenant|landlord)\b/i);
  const contactMatch = text.match(/\b(?:contact|phone|email|reach(?:able)? at)\s+["']?([^"'\n,.]{3,80})/i)
    || text.match(/([+()\d\s.-]{7,}|[^\s,]+@[^\s,]+)/);
  return {
    name: sanitizeText(args.name || (nameMatch ? nameMatch[1].trim() : ""), 160),
    type: sanitizeText(args.type || (typeMatch ? typeMatch[1].toLowerCase() : "customer"), 40),
    contact: sanitizeText(args.contact || (contactMatch ? contactMatch[1].trim() : ""), 160)
  };
}

// A real conversational intake: name, contact and stated need captured from
// what was actually said and appended as a persisted lead row, rather than
// nexus/business/templates.js's clientIntakeFormTemplate() -- a blank
// Markdown form with underscored fields for someone to print and hand-fill,
// which captures nothing anyone said. "for NAME" is checked first so
// "take an intake for Grace Otieno" doesn't have its name swallowed by the
// looser "named/called" pattern matching something later in the sentence.
function extractIntakeArgs(command = "", args = {}) {
  const text = String(command || "");
  const nameMatch = text.match(/\bintake\s+for\s+["']?([A-Z][A-Za-z .'-]{1,60})["']?/i)
    || text.match(/\b(?:named|called)\s+["']?([^"'.,\n]{2,80})["']?/i);
  const contactMatch = text.match(/\b(?:contact|phone|email|reach(?:able)? at)\s+["']?([^"'\n,.]{3,80})/i)
    || text.match(/([+()\d\s.-]{7,}|[^\s,]+@[^\s,]+)/);
  const needMatch = text.match(/\b(?:needs?|regarding|about)\s+([^"'\n.]{3,300})(?:[.?!]|$)/i);
  return {
    name: sanitizeText(args.name || (nameMatch ? nameMatch[1].trim() : ""), 160),
    contact: sanitizeText(args.contact || (contactMatch ? contactMatch[1].trim() : ""), 160),
    need: sanitizeText(args.need || (needMatch ? needMatch[1].trim() : ""), 300)
  };
}

// Infers which of strategy.js's real agent profiles fits the request, so
// "draft an investor pitch" produces the Investor Agent template and
// "help with a grant strategy" produces the Grant Writing Agent template,
// rather than everything collapsing onto the generic "coach" profile.
const STRATEGY_PROFILE_MATCHERS = [
  ["investor", /\binvestor|pitch deck|funding pitch|raise\b/i],
  ["grants", /\bgrant\b/i],
  ["donors", /\bdonor|stewardship|fundraising\b/i],
  ["volunteers", /\bvolunteer\b/i],
  ["marketing", /\bmarketing\b/i],
  ["finance", /\bfinanc(?:e|ial)|cash flow|budget(?:ing)?\b/i],
  ["government", /\bgovernment|public[- ]sector|curriculum|institutional\b/i],
  ["research", /\bresearch|market research|competitor\b/i],
  ["product", /\bproduct|feature|roadmap\b/i],
  ["operations", /\boperations|daily execution|weekly priorit(?:y|ies)\b/i],
  ["content", /\bcontent|script|deck|one-pager|copy\b/i],
  ["partnerships", /\bpartnership|partner(?:ing)?\b/i],
  ["technical", /\btechnical|deployment|integration\b/i],
  ["business", /\blaunch (?:plan|kit)\b/i],
  ["strategy", /\bstrategy|strategic plan\b/i]
];
function inferStrategyProfile(command = "") {
  const text = String(command || "");
  for (const [profile, regex] of STRATEGY_PROFILE_MATCHERS) if (regex.test(text)) return profile;
  return "coach";
}

// Money the people using Nexus actually deal in. Order matters: the country-specific shillings come before plain "shillings".
const CURRENCY_WORDS = [
  ["UGX", "ugx|uganda(?:n)? shillings?"], ["TZS", "tzs|tsh|tanzania(?:n)? shillings?"], ["KES", "kes|kshs?|kenya(?:n)? shillings?|shillings?|shilingi"],
  ["NGN", "ngn|naira|₦"], ["GHS", "ghs|cedis?"], ["ZAR", "zar|rand"], ["USD", "usd|dollars?|\\$"], ["EUR", "eur|euros?|€"]
];
const NUMBER = "\\d[\\d,]*(?:\\.\\d+)?";
const currencyWord = ([, words]) => `(?:${words})`;
const ANY_CURRENCY = CURRENCY_WORDS.map(currencyWord).join("|");
function currencyIn(text) {
  const named = CURRENCY_WORDS.find(([, words]) => new RegExp(`(?:^|[^a-z])(?:${words})(?![a-z])`, "i").test(text));
  return named ? named[0] : "";
}
// An amount written next to its currency: "$50", "KES 6,000", "6000 shillings". Null when there is none.
function amountWithCurrency(text) {
  const adjacent = new RegExp(`(?:(?<![a-z])(?:${ANY_CURRENCY})\\s?(${NUMBER}))|(?:(${NUMBER})\\s?(?:${ANY_CURRENCY})(?![a-z]))`, "i").exec(text);
  const raw = adjacent && (adjacent[1] || adjacent[2]);
  return raw ? { amount: Number(raw.replace(/,/g, "")), currency: currencyIn(adjacent[0]) } : null;
}
function formatMoney(currency, amount) {
  return currency === "USD" || !currency ? `$${Number(amount).toFixed(2)}` : `${currency} ${Number(amount).toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
}

function extractTransactionArgs(command = "", args = {}) {
  const text = String(command || "");
  const withCurrency = amountWithCurrency(text);
  const bare = withCurrency ? null : new RegExp(`\\b(?:of|for|worth)\\s+(${NUMBER})`, "i").exec(text);
  const rawAmount = args.amount !== undefined ? Number(args.amount) : withCurrency ? withCurrency.amount : bare ? Number(bare[1].replace(/,/g, "")) : NaN;
  const currency = String(args.currency || withCurrency?.currency || "").toUpperCase().slice(0, 3);
  // Found live: bare "paid" was an unconditional expense signal, checked
  // before income words, even overriding an explicit "income" label --
  // "record income: client paid me $500" logged an EXPENSE, swinging
  // netIncome by $1,000 in the wrong direction for a single payment
  // received. "Paid" is genuinely ambiguous (I paid someone = expense;
  // someone paid me / I got paid = income) -- the passive/received-money
  // construction is now recognized as an income signal, separate from the
  // other, unambiguous expense words.
  const receivedPayment = /\b(?:paid me|pay me|got paid|was paid|is paying me|payment received|received payment)\b/i.test(text);
  const explicitIncomeWord = /\b(income|revenue|donation|donated|sale|sold|earned|received|nimeuza|nimepokea|mapato|mauzo)\b/i.test(text);
  const explicitExpenseWord = /\b(expense|spent|spend|purchase|purchased|bought|cost|nimetumia|nimenunua|nimelipa|matumizi|gharama)\b/i.test(text);
  const ambiguousPaidAsExpense = !receivedPayment && /\bpaid\b/i.test(text);
  const type = explicitExpenseWord || ambiguousPaidAsExpense ? "expense"
    : receivedPayment || explicitIncomeWord ? "income" : "expense";
  // "sold 5 bags of maize for 6000 shillings" -> maize; "spent 2000 shillings on seed" -> seed
  const soldItem = text.match(/\b(?:sold|sell|nimeuza)\s+(.+?)\s+(?:for|at|kwa)\b/i);
  const spentOn = text.match(/\b(?:on|for|kwa)\s+(?![\d$€₦]|shilingi\b)([^\n,.]{2,60})/i);
  const category = (soldItem ? soldItem[1] : spentOn ? spentOn[1] : "").replace(/\s+(?:today|yesterday|this (?:week|month|year))\s*$/i, "").trim();
  return {
    amount: Number.isFinite(rawAmount) ? rawAmount : null,
    currency,
    type: sanitizeText(args.type || type, 20),
    category: sanitizeText(args.category || category, 160),
    description: sanitizeText(args.description || text, 500)
  };
}

const startOfIsoDay = date => date.toISOString().slice(0, 10);
// "this month", "last month", "today", "this week", "this year"; anything else means everything recorded.
function periodIn(text, now = new Date()) {
  const day = startOfIsoDay(now);
  const year = now.getUTCFullYear(), month = now.getUTCMonth();
  const monthStart = new Date(Date.UTC(year, month, 1));
  if (/\btoday\b/i.test(text)) return { label: "today", from: day, to: day };
  if (/\bthis week\b/i.test(text)) { const monday = new Date(now); monday.setUTCDate(now.getUTCDate() - ((now.getUTCDay() + 6) % 7)); return { label: "this week", from: startOfIsoDay(monday), to: day }; }
  if (/\blast month\b/i.test(text)) return { label: "last month", from: startOfIsoDay(new Date(Date.UTC(year, month - 1, 1))), to: startOfIsoDay(new Date(Date.UTC(year, month, 0))) };
  if (/\bthis month\b/i.test(text)) return { label: "this month", from: startOfIsoDay(monthStart), to: day };
  if (/\bthis year\b/i.test(text)) return { label: "this year", from: `${year}-01-01`, to: day };
  return { label: "so far", from: "", to: "" };
}

// Income and expense totals per currency, so shillings and dollars are never added together.
function financeTotals(transactions = [], { from = "", to = "", match = "" } = {}) {
  const needle = String(match || "").trim().toLowerCase();
  const totals = {};
  for (const row of transactions) {
    if (from && (!row.date || row.date < from)) continue;
    if (to && (!row.date || row.date > to)) continue;
    if (needle && !`${row.category} ${row.description}`.toLowerCase().includes(needle)) continue;
    const currency = row.currency || "USD";
    const entry = totals[currency] || (totals[currency] = { income: 0, expenses: 0, incomeCount: 0, expenseCount: 0 });
    if (row.type === "expense") { entry.expenses += row.amount; entry.expenseCount += 1; } else { entry.income += row.amount; entry.incomeCount += 1; }
  }
  return totals;
}

function describeFinances(totals, { label, focus, workspaceName }) {
  const currencies = Object.keys(totals);
  if (!currencies.length) return `You have no ${focus === "expenses" ? "expenses" : focus === "income" ? "income" : "income or expenses"} recorded ${label === "so far" ? "yet" : label}. To start, say for example "I sold 5 bags of maize for 6000 shillings" or "Log a 500 shilling expense for seed".`;
  const parts = currencies.map(currency => {
    const t = totals[currency];
    const income = `${formatMoney(currency, t.income)} income (${t.incomeCount} ${t.incomeCount === 1 ? "entry" : "entries"})`;
    const expenses = `${formatMoney(currency, t.expenses)} expenses (${t.expenseCount} ${t.expenseCount === 1 ? "entry" : "entries"})`;
    if (focus === "expenses") return expenses;
    if (focus === "income") return income;
    return `${income} and ${expenses}, net ${formatMoney(currency, t.income - t.expenses)}`;
  });
  return `${label === "so far" ? "So far" : label.charAt(0).toUpperCase() + label.slice(1)}, in "${workspaceName}": ${parts.join("; ")}.`;
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
    // Found live: a negative unitPrice (reachable via direct tool-call
    // arguments, not through text parsing, which can never produce a
    // negative number here) silently reduced an invoice's total by any
    // amount a caller supplied, with only the spoken/typed confirmation
    // text as a safeguard. Rejected the same way a non-finite price already is.
    unitPrice: Number.isFinite(rawPrice) && rawPrice >= 0 ? rawPrice : null
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

// Core-essentials real estate support: property listings, reusing this same
// generic workspace engine (see the "listings" field added in
// service.js/templates.js) rather than a separate real-estate-only system.
const PROPERTY_TYPE_WORDS = ["house", "condo", "condominium", "apartment", "townhouse", "duplex", "land", "lot", "commercial", "office", "warehouse"];
const LISTING_STATUS_WORDS = "(active|pending|under contract|sold|off[- ]market|coming soon|withdrawn|expired)";

function extractListingArgs(command = "", args = {}) {
  const text = String(command || "");
  // "123 Main St", "456 Oak Avenue, Nairobi" -- a street number followed by
  // words, stopping before a price/status/bed-bath clause rather than
  // swallowing the rest of the sentence.
  const addressMatch = text.match(/\b(\d{1,6}\s+[A-Za-z0-9][A-Za-z0-9 .,'-]{2,80}?)(?=\s+(?:for|at|priced|listed|status|with|is|as)\b|[,.]|$)/i);
  // "dollars" (no $ sign, no k/K suffix) added: "List 789 Pine Rd for
  // 450,000 dollars" previously matched nothing at all and silently saved
  // the listing with price: 0, with no error or clarification shown.
  const priceMatch = text.match(/\$\s?(\d+(?:,\d{3})*(?:\.\d{1,2})?)(?:\s?[kK]\b)?/)
    || text.match(/\b(\d+(?:,\d{3})*)\s?[kK]\b/)
    || text.match(/\b(\d+(?:,\d{3})*(?:\.\d{1,2})?)\s+dollars?\b/i);
  const priceRaw = priceMatch ? Number(priceMatch[1].replace(/,/g, "")) : NaN;
  const price = Number.isFinite(priceRaw) ? (/[kK]/.test(priceMatch[0]) ? priceRaw * 1000 : priceRaw) : NaN;
  const bedsMatch = text.match(/\b(\d+)\s*(?:bed|beds|bedroom|bedrooms|br)\b/i);
  const bathsMatch = text.match(/\b(\d+(?:\.\d)?)\s*(?:bath|baths|bathroom|bathrooms|ba)\b/i);
  const typeMatch = text.match(new RegExp(`\\b(${PROPERTY_TYPE_WORDS.join("|")})\\b`, "i"));
  const statusMatch = text.match(new RegExp(`\\bstatus\\s+(?:to|as)\\s+["']?${LISTING_STATUS_WORDS}["']?`, "i")) || text.match(new RegExp(`\\b${LISTING_STATUS_WORDS}\\b`, "i"));
  return {
    address: sanitizeText(args.address || (addressMatch ? addressMatch[1].trim() : ""), 200),
    price: args.price !== undefined ? Number(args.price) : (Number.isFinite(price) ? price : 0),
    propertyType: sanitizeText(args.propertyType || (typeMatch ? typeMatch[1].toLowerCase() : ""), 40),
    beds: args.beds !== undefined ? Number(args.beds) : (bedsMatch ? Number(bedsMatch[1]) : 0),
    baths: args.baths !== undefined ? Number(args.baths) : (bathsMatch ? Number(bathsMatch[1]) : 0),
    // Found live: only the text-parsed branch normalized to lowercase --
    // args.status (a structured tool-call argument, e.g. "Active") was
    // stored verbatim, and computeBusinessDashboard's exact-case status
    // filters then silently dropped that listing from active/pending/sold
    // counts and total value, with no error. Mirrors the identical,
    // already-fixed case-sensitivity bug for grant.status.
    status: sanitizeText(String(args.status || (statusMatch ? statusMatch[1] : "")).toLowerCase().replace(/\s+/g, "-"), 30)
  };
}

function resolveListingIndex(listings, command = "") {
  const text = String(command || "").toLowerCase();
  // Found live: findIndex picked whichever matching address came FIRST in
  // the array, not the most specific one -- when one listing's address is a
  // literal prefix of another's (e.g. two units at the same street, "500
  // Elm St" and "500 Elm St Apt 2"), a command naming the more specific
  // address ("mark 500 Elm St Apt 2 as sold") could still resolve to the
  // wrong, shorter-address listing depending purely on array order. Now
  // picks the LONGEST matching address (the most specific one), not the
  // first one encountered.
  const matches = listings.map((listing, index) => ({ listing, index }))
    .filter(entry => entry.listing.address && text.includes(String(entry.listing.address).toLowerCase()));
  if (matches.length) {
    matches.sort((a, b) => String(b.listing.address).length - String(a.listing.address).length);
    return matches[0].index;
  }
  // Only fall back to "the one active listing" when the caller didn't name
  // an address-shaped token at all (real estate addresses are effectively
  // always digit-led, e.g. "123 Main St"). If they named a specific address
  // that matched nothing, that is a real mismatch to report -- silently
  // falling back to a different property would risk marking the wrong one
  // sold/pending, unlike resolveAppointmentIndex's lower-stakes equivalent.
  if (/\d/.test(text)) return -1;
  const active = listings.map((listing, index) => ({ listing, index })).filter(entry => String(entry.listing.status || "").toLowerCase() === "active");
  return active.length === 1 ? active[0].index : -1;
}

// Mirrors public/business-services.js's renderDashboard() computation
// exactly -- same field names, same filters, same reduces -- so a voice
// summary of "how's my business doing" is always numerically identical to
// what the workspace's own dashboard section shows.
function computeBusinessDashboard(editable) {
  // Shillings and dollars are never added together: the dashboard totals the currency used most, and names any others.
  const byCurrency = financeTotals(editable.transactions);
  const currencies = Object.keys(byCurrency).sort((a, b) => (byCurrency[b].incomeCount + byCurrency[b].expenseCount) - (byCurrency[a].incomeCount + byCurrency[a].expenseCount));
  const currency = currencies[0] || "USD";
  const income = byCurrency[currency]?.income || 0;
  const expenses = byCurrency[currency]?.expenses || 0;
  const customers = editable.leads.filter(row => row.type === "customer").length;
  const donors = editable.leads.filter(row => row.type === "donor").length;
  const sponsors = editable.leads.filter(row => row.type === "sponsor").length;
  const volunteers = editable.leads.filter(row => row.type === "volunteer").length;
  // Real estate lead types get their own explicit counts, same as
  // customers/donors/sponsors/volunteers, rather than falling into the
  // generic "others" bucket where a voice summary can't name them clearly.
  const buyers = editable.leads.filter(row => row.type === "buyer").length;
  const sellers = editable.leads.filter(row => row.type === "seller").length;
  const tenants = editable.leads.filter(row => row.type === "tenant").length;
  const landlords = editable.leads.filter(row => row.type === "landlord").length;
  // Any type outside the ones counted above (e.g. "member"/"congregant" for
  // a church, or "client" from a conversational intake) is still real,
  // saved data -- counted here so it never silently disappears from the
  // summary, rather than hardcoding every new church/industry word as its
  // own bucket.
  const others = editable.leads.filter(row => !["customer", "donor", "sponsor", "volunteer", "buyer", "seller", "tenant", "landlord"].includes(row.type)).length;
  // Rounds each line to the cent before summing (matches the invoice PDF
  // export's own fix) so this total can never drift from what a generated
  // invoice actually shows, even by a cent, for a fractional-cent unit price.
  const invoiceTotal = editable.invoiceItems.reduce((sum, item) => sum + Math.round(item.quantity * item.unitPrice * 100) / 100, 0);
  const unpaidInvoices = editable.invoices.filter(invoice => invoice.status !== "paid").length;
  const grantsRequested = editable.grants.reduce((sum, grant) => sum + grant.amount, 0);
  // Found live: grant.status is freeform text with no normalization --
  // "Awarded" (capitalized, exactly how a natural "set the grant status to
  // Awarded" phrase gets stored) never matches this exact-lowercase check,
  // so a correctly-marked grant's amount silently vanishes from the
  // awarded total with no error or indication.
  const grantsAwarded = editable.grants.filter(grant => String(grant.status || "").toLowerCase() === "awarded").reduce((sum, grant) => sum + grant.amount, 0);
  const openTasks = editable.tasks.filter(task => task.status !== "done" && task.status !== "complete").length;
  const upcomingAppointments = editable.appointments.filter(appointment => appointment.status !== "cancelled").length;
  const listings = editable.listings || [];
  // Case-insensitive, matching extractListingArgs' own normalization fix --
  // a defense-in-depth for any already-saved or externally-written record
  // whose status wasn't normalized at write time (e.g. a direct API write).
  const listingStatus = listing => String(listing.status || "").toLowerCase();
  const activeListings = listings.filter(listing => listingStatus(listing) === "active").length;
  const pendingListings = listings.filter(listing => listingStatus(listing) === "pending" || listingStatus(listing) === "under-contract").length;
  const soldListings = listings.filter(listing => listingStatus(listing) === "sold").length;
  const activeListingValue = listings.filter(listing => listingStatus(listing) === "active").reduce((sum, listing) => sum + (Number(listing.price) || 0), 0);
  return {
    netIncome: income - expenses, income, expenses, currency, otherCurrencies: currencies.slice(1),
    customers, donors, sponsors, volunteers, buyers, sellers, tenants, landlords, others,
    invoiceTotal, unpaidInvoices,
    grantsRequested, grantsAwarded,
    openTasks, totalTasks: editable.tasks.length,
    upcomingAppointments,
    totalListings: listings.length, activeListings, pendingListings, soldListings, activeListingValue
  };
}

// Classifies a command into exactly one business sub-intent, or null if the
// command isn't business-shaped at all. The order and exclusions here are
// load-bearing -- see each flag's inline note -- and must stay in sync with
// server.js's legacy nexus_business_assistant handler, which uses this same
// function (rather than a second, hand-maintained copy of these regexes).
const READ_INTENTS = new Set(["dashboard", "list", "financeSummary", "listListings"]);

function classify(command = "") {
  // "church"/"congregation"/"parish"/"ministry" (in the congregational sense,
  // not a government ministry -- server.js's legacy weather/safety code uses
  // "ministry" the government way, in a completely different command shape,
  // so there is no real collision here) let a church or faith community use
  // this same workspace with its own words rather than being forced to say
  // "business" or "nonprofit".
  const BUSINESS_WORKSPACE_NOUN = "(?:business(?:es)?|nonprofit|non-profit|ngo|church(?:es)?|congregation|parish|admin[- ]assistant|workspace)s?";
  const wantsBusinessDashboard = /\b(business|nonprofit|church|congregation|parish)\b/i.test(command) && /\b(dashboard|doing|performing|performance summary|financial summary)\b/i.test(command);
  const wantsList = (
    (/\b(list|show)\b/i.test(command) && new RegExp(`\\b${BUSINESS_WORKSPACE_NOUN}\\b`, "i").test(command))
    || new RegExp(`\\b(?:which|what)\\s+${BUSINESS_WORKSPACE_NOUN}\\b`, "i").test(command)
    || new RegExp(`\\b${BUSINESS_WORKSPACE_NOUN}\\b.{0,20}\\bdo i have\\b`, "i").test(command)
  ) && !/\b(start|create|new|set ?up|begin)\b/i.test(command);
  const wantsAddLead = /\b(?:add|create|new|log|track)\b/i.test(command) && /\b(customer|donor|lead|sponsor|volunteer|member|congregant|buyer|seller|tenant|landlord)\b/i.test(command);
  // "I sold 5 bags of maize for 6000 shillings", "we spent KES 2,000 on seed": first person, a money verb and an amount written with its currency.
  const saysWhatHappened = (/\b(?:i|we)\s+(?:just\s+)?(?:sold|spent|paid|bought|earned|received)\b/i.test(command) || /\bnime(?:uza|tumia|nunua|lipa|pokea)\b/i.test(command)) && amountWithCurrency(command) !== null;
  const wantsLogTransaction = (/\b(?:log|record|add|track)\b/i.test(command) && /\b(expense|income|transaction|payment|donation|sale|revenue)\b/i.test(command)) || saysWhatHappened;
  // "How much did I spend on seed this month?", "Show me my income this week": a question about the money already logged.
  const wantsFinanceSummary = !wantsLogTransaction && !/\b(?:log|record|track|create|start|new)\b|\badd\b(?!\s+up)/i.test(command)
    && /\b(?:how much|total|summary|summari[sz]e|what (?:is|are|was|were|did|have)|show|tell me|list|give me)\b/i.test(command)
    && /\b(?:my|our|i|we)\b/i.test(command) && /\b(?:expenses?|income|sales|revenue|profit|spen[dt]|earn(?:ed|ings)?|make|made|sell|sold)\b/i.test(command);
  const wantsAddInvoiceItem = /\binvoice\b/i.test(command) && /\b(?:line[- ]?item|item)s?\b/i.test(command) && /\b(?:add|include)\b/i.test(command);
  const wantsGenerateInvoicePdf = !wantsAddInvoiceItem && /\binvoice\b/i.test(command) && /\b(?:generate|print|export|make)\b/i.test(command) && /\b(pdf|receipt)\b/i.test(command);
  const wantsCreateInvoice = !wantsAddInvoiceItem && !wantsGenerateInvoicePdf && /\b(invoice|receipt)\b/i.test(command) && /\b(?:create|add|start|open|new)\b/i.test(command);
  const wantsAddGrant = /\b(?:add|create|new|log|track)\b/i.test(command) && /\b(grant|funding)\b/i.test(command);
  const wantsUpdateGrantStatus = /\b(?:mark|update|set|change)\b/i.test(command) && /\bgrant\b/i.test(command);
  const wantsAddTask = /\b(?:add|create|new)\b/i.test(command) && /\btask\b/i.test(command);
  const wantsUpdateTaskStatus = !wantsAddTask && /\b(?:mark|update|set|change|complete|finish)\b/i.test(command) && /\btask\b/i.test(command);
  const wantsSyncAppointment = /\bsync\b/i.test(command) && /\b(appointment|calendar)\b/i.test(command);
  const wantsAddAppointment = !wantsSyncAppointment && /\b(?:add|schedule|create|book|new)\b/i.test(command) && /\bappointment\b/i.test(command);
  // Core-essentials real estate support: property listings. "list a
  // property"/"add a listing" is a creation verb here, distinct from
  // wantsList's read-only "list my businesses" (a different noun entirely,
  // so there is no collision) and from wantsListListings below (excluded by
  // requiring the absence of a read-style word first).
  // Found live: the single most natural real-estate phrasing -- "List 123
  // Main Street for $450,000" -- names neither "listing" nor "property" at
  // all, so it fell through to the generic create-workspace fallback.
  // Widened with a real street-address pattern as an alternate noun signal.
  const looksLikeStreetAddress = /\b\d+\s+[a-z0-9.'-]+(?:\s+[a-z0-9.'-]+){0,4}\s+(?:street|st|avenue|ave|road|rd|drive|dr|lane|ln|way|court|ct|boulevard|blvd|place|pl)\b/i.test(command);
  const wantsAddListing = /\b(?:add|create|new|list)\b/i.test(command) && (/\b(listing|property)\b/i.test(command) || looksLikeStreetAddress) && !/\b(?:my|show|what|which)\b/i.test(command);
  const wantsUpdateListingStatus = !wantsAddListing && /\b(?:mark|update|set|change)\b/i.test(command) && /\b(listing|property)\b/i.test(command);
  const wantsListListings = !wantsAddListing && !wantsUpdateListingStatus && /\b(listings?|properties)\b/i.test(command) && /\b(?:show|list|what|which|my|do i have)\b/i.test(command);
  const wantsGenerateDocuments = /\b(?:create|generate|draft|make)\b/i.test(command) && /\b(service agreement|contract|intake form|client intake|application checklist)\b/i.test(command);
  const wantsGenerateBusinessPlanPdf = /\bbusiness plan\b/i.test(command) && /\b(?:generate|print|export|make)\b/i.test(command) && /\b(pdf|document)\b/i.test(command);
  const wantsGenerateMarketing = /\b(?:create|generate|make|draft)\b/i.test(command) && /\b(flyer|newsletter|promotional email|marketing email|marketing material|marketing content|marketing draft)\b/i.test(command);
  // Confirmed live: business.manage/business.query already existed for every
  // OTHER business operation, but "strategy" (service.js's operation===
  // "strategy", which calls strategy.js's real agent-profile templates --
  // investor pitch, marketing strategy, grant strategy, and 12 more) was only
  // ever reachable from the dashboard's own "Generate" button
  // (public/business-services.js), which posts straight to the REST endpoint
  // and never goes through this classifier. A typed/spoken "help me draft an
  // investor pitch strategy" had no route to it at all. Excludes the other
  // generate-* intents' own phrasing (an "intake form"/"business plan pdf"/
  // "marketing flyer" request should still resolve to those, not this).
  // Found live: this only ever matched a literal compound "X strategy" (or a
  // handful of other exact nouns), rejecting the tool's own marquee phrases
  // and the natural way a person actually names each of strategy.js's 12
  // real agent profiles -- "Draft a grant proposal", "Help with a financial
  // literacy plan for my business", "Create a government partnership plan",
  // "Draft a donor stewardship plan" all returned null and fell to a
  // non-sequitur "what should I call this workspace?" fallback. Widened to
  // the real profile names/purposes (grant writing, donor relations,
  // volunteer coordination, financial literacy, minority/women/black/brown-
  // owned business development, government/public-sector partnership,
  // investor/product/operations/research/technical/content) rather than
  // only their "X strategy" form.
  const wantsGenerateStrategy = !wantsGenerateDocuments && !wantsGenerateBusinessPlanPdf && !wantsGenerateMarketing &&
    /\b(?:create|generate|draft|write|make|help (?:me )?(?:with|write|draft))\b/i.test(command) &&
    /\b(strategy|strategic plan|pitch|investor pitch|pitch deck|business plan outline|marketing strategy|grant strategy|grant proposal|grant writing|donor strategy|donor relations|donor stewardship|fundraising strategy|fundraising plan|volunteer strategy|volunteer coordination|financial plan|financial literacy|partnership strategy|partnership plan|government partnership|public[\s-]?sector partnership|minority[\s-]?owned|women[\s-]?owned|black[\s-]?owned|brown[\s-]?owned|business development plan|launch plan|launch kit|product (?:plan|roadmap)|operations plan|research plan|technical plan|content (?:plan|strategy))\b/i.test(command);
  // A real, conversational client/customer/congregant intake -- captures a
  // name, contact and stated need as a persisted lead row -- is distinct from
  // wantsGenerateDocuments' "create an intake form" (a blank, unfilled
  // Markdown template for someone to print and hand-fill). Excluding "form"
  // keeps the two from colliding.
  const wantsPerformIntake = /\b(?:perform|start|take|record|do|complete|begin)\b/i.test(command) && /\bintake\b/i.test(command) && !/\bform\b/i.test(command);
  // Narrower than server.js's own bare fallback (which assumes ANY command
  // reaching that handler is business-related, since the model already chose
  // the tool) -- this classifier is also reached from a deterministic fast
  // path that runs BEFORE any tool selection, against every typed command in
  // the app, so it must not swallow unrelated text into a bogus "create a
  // workspace called <command>" plan. Require an explicit start/create verb
  // alongside the business/nonprofit/church word.
  const wantsCreateWorkspace = /\b(business|nonprofit|non-profit|ngo|church|congregation|parish)\b/i.test(command) && /\b(start|create|new|set ?up|begin)\b/i.test(command);

  if (wantsBusinessDashboard) return "dashboard";
  if (wantsFinanceSummary) return "financeSummary";
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
  if (wantsAddListing) return "addListing";
  if (wantsUpdateListingStatus) return "updateListingStatus";
  if (wantsListListings) return "listListings";
  if (wantsPerformIntake) return "performIntake";
  if (wantsGenerateDocuments) return "generateDocuments";
  if (wantsGenerateBusinessPlanPdf) return "generateBusinessPlanPdf";
  if (wantsGenerateMarketing) return "generateMarketing";
  if (wantsGenerateStrategy) return "generateStrategy";
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
  } else if (intent === "performIntake") {
    const intake = extractIntakeArgs(command, args);
    if (!intake.name) clarification = "What is the name of the person for this intake?";
  } else if (intent === "logTransaction") {
    const transaction = extractTransactionArgs(command, args);
    if (!transaction.amount || transaction.amount <= 0) clarification = `What is the amount for this ${transaction.type}, and in which currency?`;
    else if (!transaction.currency) clarification = `Which currency is ${transaction.amount} in, for example shillings or dollars?`;
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
  } else if (intent === "addListing") {
    const listing = extractListingArgs(command, args);
    if (!listing.address) clarification = "What is the address of the property to list?";
  } else if (intent === "updateListingStatus") {
    const listing = extractListingArgs(command, args);
    if (!listing.status) clarification = "What status should I set this listing to -- active, pending, sold, or off-market?";
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
    // Found live: listings have no currency field of their own and are
    // always created/shown as USD elsewhere (see the other formatMoney("USD",
    // listing.price) call sites in this file) -- but this line was labeling
    // activeListingValue with dashboard.currency, which is picked from the
    // business's transaction ledger and can be a completely different
    // currency (e.g. a business that logs its day-to-day income in KES would
    // have a $250,000 USD listing spoken back as "worth KES 250,000").
    const listingPhrase = dashboard.totalListings
      ? ` ${dashboard.activeListings} active listing${dashboard.activeListings === 1 ? "" : "s"} worth ${formatMoney("USD", dashboard.activeListingValue)}, ${dashboard.pendingListings} pending, ${dashboard.soldListings} sold;`
      : "";
    const buyerSellerPhrase = (dashboard.buyers || dashboard.sellers || dashboard.tenants || dashboard.landlords)
      ? ` ${dashboard.buyers} buyer${dashboard.buyers === 1 ? "" : "s"}, ${dashboard.sellers} seller${dashboard.sellers === 1 ? "" : "s"}${dashboard.tenants ? `, ${dashboard.tenants} tenant${dashboard.tenants === 1 ? "" : "s"}` : ""}${dashboard.landlords ? `, ${dashboard.landlords} landlord${dashboard.landlords === 1 ? "" : "s"}` : ""};`
      : "";
    const response = `Here is the performance summary for "${workspaceName}": net income ${formatMoney(dashboard.currency, dashboard.netIncome)} (income ${formatMoney(dashboard.currency, dashboard.income)}, expenses ${formatMoney(dashboard.currency, dashboard.expenses)}${dashboard.otherCurrencies.length ? `, not counting entries in ${dashboard.otherCurrencies.join(", ")}` : ""});${listingPhrase} ${dashboard.customers} customers, ${dashboard.donors} donors, ${dashboard.sponsors} sponsors, ${dashboard.volunteers} volunteers${dashboard.others ? `, ${dashboard.others} other contact${dashboard.others === 1 ? "" : "s"} (members, clients, and similar)` : ""};${buyerSellerPhrase} $${dashboard.invoiceTotal.toFixed(2)} invoiced with ${dashboard.unpaidInvoices} invoice${dashboard.unpaidInvoices === 1 ? "" : "s"} not marked paid; $${dashboard.grantsRequested.toFixed(2)} in grants tracked, $${dashboard.grantsAwarded.toFixed(2)} awarded; ${dashboard.openTasks} of ${dashboard.totalTasks} tasks not yet done; ${dashboard.upcomingAppointments} active appointment${dashboard.upcomingAppointments === 1 ? "" : "s"}.`;
    return { status: "completed", localOnly: true, response, businessDashboard: dashboard, summary: response };
  }

  if (intent === "financeSummary") {
    const resolved = await resolveBusinessClient(businessRequest, command);
    const period = periodIn(command);
    const focus = /\b(?:spen[dt]|expenses?)\b/i.test(command) && !/\b(?:income|earn|sales|revenue|sell|sold|make|made|profit)\b/i.test(command) ? "expenses"
      : /\b(?:income|earn(?:ed|ings)?|sales|revenue|sell|sold|make|made)\b/i.test(command) && !/\b(?:spen[dt]|expenses?|profit)\b/i.test(command) ? "income" : "both";
    if (!resolved.client) {
      const response = "You have not recorded any income or expenses yet, because you do not have a business or nonprofit workspace. Tell me its name and I can start one, then say for example \"I sold 5 bags of maize for 6000 shillings\".";
      return { status: "completed", localOnly: true, response, summary: response };
    }
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const item = command.match(/\b(?:spen[dt]|paid|earn(?:ed)?|made|make|sold|sell)\b.*?\b(?:on|for|from)\s+(?!this\b|last\b|today\b|the\b)([a-z][a-z ]{1,40}?)(?=\s+(?:today|this|last|so far|all time)\b|[?.!,]|$)/i)?.[1];
    const totals = financeTotals(resolved.client.data.editable.transactions, { from: period.from, to: period.to, match: item });
    const response = describeFinances(totals, { label: period.label, focus, workspaceName });
    return { status: "completed", localOnly: true, response, summary: response, businessRecord: null };
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

  if (intent === "performIntake") {
    const intake = extractIntakeArgs(command, args);
    if (!intake.name) return { status: "needs-input", response: "What is the name of the person for this intake?", missingInformation: ["name"] };
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before taking an intake.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const needPhrase = intake.need ? `, who needs ${intake.need}` : "";
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can record an intake for ${intake.name}${needPhrase} in "${workspaceName}". Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, leads: [...resolved.client.data.editable.leads,
      { name: intake.name, contact: intake.contact, type: "client", need: intake.need, stage: "new", nextAction: intake.need ? `Follow up on: ${intake.need}` : "Follow up", followUpDate: "" }] };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Recorded an intake for ${intake.name}${needPhrase} in "${workspaceName}".`;
    return { status: "completed", localOnly: true, response, businessRecord: updated?.body || null, summary: response };
  }

  if (intent === "logTransaction") {
    const transaction = extractTransactionArgs(command, args);
    if (!transaction.amount || transaction.amount <= 0) return { status: "needs-input", response: `What is the amount for this ${transaction.type}, and in which currency?`, missingInformation: ["amount"] };
    if (!transaction.currency) return { status: "needs-input", response: `Which currency is ${transaction.amount} in, for example shillings or dollars?`, missingInformation: ["currency"] };
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before logging income or expenses.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const categoryPhrase = transaction.category ? ` for ${transaction.category}` : "";
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can log a ${formatMoney(transaction.currency, transaction.amount)} ${transaction.type}${categoryPhrase} in "${workspaceName}". Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, transactions: [...resolved.client.data.editable.transactions,
      { date: new Date().toISOString().slice(0, 10), type: transaction.type, category: transaction.category, amount: transaction.amount, currency: transaction.currency, description: transaction.description }] };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Logged a ${formatMoney(transaction.currency, transaction.amount)} ${transaction.type}${categoryPhrase} in "${workspaceName}".`;
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

  if (intent === "addListing") {
    const listing = extractListingArgs(command, args);
    if (!listing.address) return { status: "needs-input", response: "What is the address of the property to list?", missingInformation: ["address"] };
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business workspace yet. Tell me its name and I can start one before adding a listing.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const status = listing.status || "active";
    const pricePhrase = listing.price ? ` at ${formatMoney("USD", listing.price)}` : "";
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can list ${listing.address}${pricePhrase} in "${workspaceName}" as ${status}. Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, listings: [...(resolved.client.data.editable.listings || []),
      { address: listing.address, price: listing.price, propertyType: listing.propertyType, beds: listing.beds, baths: listing.baths, status, notes: "" }] };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Listed ${listing.address}${pricePhrase} in "${workspaceName}" as ${status}.`;
    return { status: "completed", localOnly: true, response, businessRecord: updated?.body || null, summary: response };
  }

  if (intent === "updateListingStatus") {
    const listingArgs = extractListingArgs(command, args);
    if (!listingArgs.status) return { status: "needs-input", response: "What status should I set this listing to -- active, pending, sold, or off-market?", missingInformation: ["status"] };
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business workspace yet.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const listings = resolved.client.data.editable.listings || [];
    const index = resolveListingIndex(listings, command);
    if (index === -1) return { status: "needs-input", response: `I could not find a listing matching that address in "${workspaceName}". Name the address exactly as you listed it.`, missingInformation: ["address"] };
    const target = listings[index];
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can set ${target.address} to ${listingArgs.status} in "${workspaceName}". Should I go ahead?` };
    const editable = { ...resolved.client.data.editable, listings: listings.map((listing, itemIndex) => itemIndex === index ? { ...listing, status: listingArgs.status } : listing) };
    const updated = await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}`,
      body: { expectedVersion: resolved.client.version, info: resolved.client.data.info, editable } });
    const response = `Set ${target.address} to ${listingArgs.status} in "${workspaceName}".`;
    return { status: "completed", localOnly: true, response, businessRecord: updated?.body || null, summary: response };
  }

  if (intent === "listListings") {
    const resolved = await resolveBusinessClient(businessRequest, command);
    const listings = resolved.client?.data?.editable?.listings || [];
    const workspaceName = resolved.client?.data?.info?.businessName || "your workspace";
    const response = listings.length
      ? `"${workspaceName}" has ${listings.length} listing${listings.length === 1 ? "" : "s"}: ${listings.map(listing => `${listing.address} (${listing.status}${listing.price ? `, ${formatMoney("USD", listing.price)}` : ""})`).join("; ")}.`
      : `"${workspaceName}" has no listings yet. Say something like "list 123 Main Street for $450,000" to add one.`;
    return { status: "completed", localOnly: true, response, businessListings: listings, summary: response };
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

  if (intent === "generateStrategy") {
    const resolved = await resolveBusinessClient(businessRequest, command);
    if (!resolved.client) return { status: "needs-input", response: "You do not have a business or nonprofit workspace yet. Tell me its name and I can start one before drafting a strategy document.", missingInformation: ["businessName"] };
    const workspaceName = resolved.client.data?.info?.businessName || "your workspace";
    const profile = inferStrategyProfile(command);
    const { agentProfiles } = require("./strategy");
    const profileName = agentProfiles[profile]?.name || "Strategy Agent";
    if (!isConfirmed) return { status: "needs-confirmation", requiresConfirmation: true, response: `I can draft a ${profileName} planning outline for "${workspaceName}". This is a draft structure template, not live research or an investor assessment -- review it with someone qualified before use. Should I go ahead?` };
    const generated = await businessRequest({ method: "POST", pathname: `/api/nexus/runtime/business/clients/${resolved.client.record_id}/generate`,
      body: { operation: "strategy", profile, expectedVersion: resolved.client.version } });
    const response = `Drafted a ${profileName} planning outline for "${workspaceName}". Open Business services to review and download it.`;
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

// What the person is asked before a confirmed action is saved: exactly the amount, currency and item that will be logged.
// Null for every other business action, which keeps the generic confirmation wording.
function confirmationPrompt(command = "") {
  if (classify(command) !== "logTransaction") return null;
  const transaction = extractTransactionArgs(command, {});
  if (!transaction.amount || transaction.amount <= 0 || !transaction.currency) return null;
  return `I can log ${formatMoney(transaction.currency, transaction.amount)} as ${transaction.type === "expense" ? "an expense" : "income"}${transaction.category ? ` for ${transaction.category}` : ""} in your business workspace. Say yes to save it, or no to cancel.`;
}

module.exports = Object.freeze({
  sanitizeText, classify, isReadIntent, precheck, run, confirmationPrompt,
  extractBusinessName, resolveBusinessClient, extractLeadArgs, extractTransactionArgs,
  extractInvoiceArgs, extractInvoiceItemArgs, extractGrantArgs, extractGrantStatusArgs, resolveGrant,
  extractTaskArgs, extractTaskStatusArgs, resolveTask, extractAppointmentArgs, resolveAppointmentIndex,
  extractIntakeArgs, inferStrategyProfile, computeBusinessDashboard,
  extractListingArgs, resolveListingIndex
});
