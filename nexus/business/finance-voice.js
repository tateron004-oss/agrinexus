"use strict";

// The money side of a business or nonprofit workspace, by voice or typed: bills to pay, a bank balance, budgets, pledges, restricted funds, and two calculators (profit margin, and what a fundraising campaign raised after expenses).
// Before this, the workspace held income, expenses, invoices and grants but nothing to pay out later, no balance, no budget and no promised gifts, so "will we have enough money to cover upcoming expenses" could only be answered with
// "I cannot tell". Pure functions over the workspace data (client.data.editable) so they can be tested without a database; voice-dispatch.js supplies the client, the day and the write bridge.
//
//   classifyFinance(command) -> an intent name or null
//   planFinanceWrite(intent, ctx) -> { response } to ask or refuse, or { prompt, apply, done } (apply(editable) returns the new editable; `done` is said afterwards)
//   readFinance(intent, ctx) -> the spoken answer
//
// What each figure means is said in the answer: a bill counts as an expense only when it is marked paid, a pledge is a promise and counts as income only when it is received, and the cash balance is the one the person told us,
// moved by the income and expenses logged after that day. Nothing here is a bank connection.

const { extractDay, describeDay, addDays, addMonths, nextDayOfMonth, lastDayOfMonth } = require("../personal/dates.js");

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const lower = value => String(value || "").toLowerCase();
const plural = (count, word) => `${count} ${word}${count === 1 ? "" : "s"}`;
const isoOrNull = value => (ISO_DAY.test(String(value || "")) ? String(value) : null);
const daysUntil = (day, today) => Math.round((Date.UTC(+day.slice(0, 4), +day.slice(5, 7) - 1, +day.slice(8, 10)) - Date.UTC(+today.slice(0, 4), +today.slice(5, 7) - 1, +today.slice(8, 10))) / 86400000);
const NUMBER_WORDS = "\\d|\\b(?:hundred|thousand|million)\\b";
const ROW_LIMIT = 200;
const LEDGER_LIMIT = 200;

const FINANCE_WRITE_INTENTS = Object.freeze(["addBill", "markBillPaid", "setCashBalance", "setBudget", "addPledge", "markPledgeReceived"]);
const FINANCE_READ_INTENTS = Object.freeze(["billsDue", "budgetStatus", "fundsSummary", "pledgesOutstanding", "profitMargin", "campaignNet"]);

// ---- which request --------------------------------------------------------------------------------------------------------------------------------------------------------------
const QUESTION = /[?]|^(?:(?:hey|ok|okay|please)\s+)*(?:(?:kyro|nexus)[,.]?\s+)?(?:what|which|how|who|when|where|do|does|did|are|is|am|can|could|show|list|tell|give|any|calculate|work out|figure out|check|read)\b/i;
const ADDING = /\b(?:add|record|log|enter|create|track|new|set up|put)\b/i;

function classifyFinance(command = "") {
  const text = String(command || "").replace(/\s+/g, " ").trim();
  if (!text || text.length > 300) return null;
  const hasNumber = new RegExp(NUMBER_WORDS, "i").test(text);
  const asks = QUESTION.test(text);

  // pledges: a promise to give. "Record a pledge of 1000 dollars from Maria Chen" adds one; "Maria Chen's pledge came in" settles one; "outstanding pledges" reads them.
  if (/\bpledg(?:e|ed|es|ing)\b/i.test(text)) {
    const settle = /\b(?:received|paid|came in|come in|collected|fulfil+ed|honou?red|redeemed|arrived|has been paid|was paid|is paid)\b/i.test(text);
    const hasAmount = /\b(?:of|for|worth)\s+\S*\d|[$€₦£]\s?\d|\d[\d,.]*\s?(?:dollars?|usd|shillings?|kes|naira|ngn|cedis?|ghs|rand|zar|euros?|eur)\b/i.test(text);
    if (settle && /\b(?:the|his|her|their|[A-Z][a-z]+'s)\s+pledge\b|\bpledge\b.{0,25}\b(?:came in|was paid|has been paid|is paid|received|arrived|paid|collected)\b/i.test(text) && !(hasAmount && ADDING.test(text))) return "markPledgeReceived";
    if (hasAmount && (ADDING.test(text) || /\b(?:made|got|have|received|pledged|promised)\b/i.test(text))) return "addPledge";
    if (asks) return "pledgesOutstanding";
    return null;
  }

  // the cash balance: "set our cash balance to 5000 dollars", "we have 5000 dollars in the bank"
  if ((/\b(?:cash|bank|account)\s+balance\b/i.test(text) && /\b(?:set|update|change|record|correct|is|to|at|now|equals?)\b/i.test(text) && hasNumber && !/^(?:what|how|show|tell)\b/i.test(text))
    || (/\b(?:we|i)\s+(?:currently\s+|now\s+|only\s+)?(?:have|hold|got)\b[^.?!]{0,40}\b(?:in|at)\s+(?:the\s+|our\s+|my\s+)?(?:bank|account|cash|savings)\b/i.test(text) && hasNumber && !asks)) return "setCashBalance";

  // a bill paid: "mark the electric bill paid", "we paid the rent bill"
  if (/\b(?:mark|set|record|log)\b[^.?!]{0,40}\bbills?\b[^.?!]{0,40}\bpaid\b/i.test(text)
    || /\b(?:we|i)\s+(?:just\s+|have\s+)?paid\s+(?:the|our|my)\s+[^.?!]{1,40}?\bbill\b/i.test(text)
    || /\bbill\b[^.?!]{0,30}\b(?:is|was|has been|have been)\s+paid\b/i.test(text)) return "markBillPaid";

  // a bill to pay later: "add a bill from the electric company for 120 dollars due Friday", "we owe the landlord 800 dollars"
  if ((ADDING.test(text) && /\bbills?\b/i.test(text) && !/\binvoice/i.test(text) && hasNumber)
    || (/^(?:we|i)\s+owe\b/i.test(text) && hasNumber)) return "addBill";
  if (ADDING.test(text) && /\bbills?\b/i.test(text) && !/\binvoice/i.test(text) && !asks) return "addBill";

  // a budget: "set a budget of 500 dollars a month for supplies"
  if (/\b(?:set|create|make|add|put|change|update)\b[^.?!]{0,25}\bbudget\b/i.test(text) && hasNumber) return "setBudget";

  // the calculators and the reads (all questions or "calculate")
  if (!asks) return null;
  if (ADDING.test(text) && !/\b(?:show|list|tell|give|what|which|how|check|read|calculate)\b/i.test(text)) return null;
  if (/\b(?:profit\s+)?margins?\b|\bmark-?ups?\b/i.test(text)) return "profitMargin";
  if (/\b(?:campaign|fundrais\w+|gala|appeal|auction|walk-?a-?thon|bake sale|benefit dinner|crowdfund\w*)\b/i.test(text) && /\b(?:rais\w+|net|after (?:expenses|costs)|profit|made|cost to raise|worth it|left over|brought in)\b/i.test(text)) return "campaignNet";
  if (/\b(?:restricted|unrestricted)\b/i.test(text) && /\b(?:funds?|money|donations?|gifts?|balance|grants?|cash)\b/i.test(text)) return "fundsSummary";
  if (/\bbudgets?\b/i.test(text)) return "budgetStatus";
  if (/\b(?:bills?|payables?)\b/i.test(text) || /\bwhat (?:do|are) (?:we|i) (?:owe|supposed to pay|due to pay)\b/i.test(text) || /\bwho do (?:we|i) owe\b/i.test(text)) return "billsDue";
  return null;
}

// ---- reading what was said --------------------------------------------------------------------------------------------------------------------------------------------------------
const clean = value => String(value || "").replace(/\s+/g, " ").trim().replace(/^["']+|["'.,;:!?]+$/g, "").trim();
const titleCase = value => clean(value).replace(/\b([a-z])/g, (m, c) => c.toUpperCase());

// A day as it is said when money is due: "Friday", "15 October", "in 2 weeks", and also "the 1st", "next week", "next month", "the end of the month".
function looseDay(text, today) {
  const said = String(text || "");
  const found = extractDay(said, today);
  if (found) return found;
  const ordinal = /\b(?:the\s+)?(\d{1,2})(?:st|nd|rd|th)\b/i.exec(said);
  if (ordinal) { const day = nextDayOfMonth(Number(ordinal[1]), today); if (day) return { day }; }
  if (/\bend of next month\b/i.test(said)) return { day: lastDayOfMonth(addMonths(today, 1)) };
  if (/\b(?:the\s+)?end of (?:the|this) month\b/i.test(said)) return { day: lastDayOfMonth(today) };
  if (/\bnext week\b/i.test(said)) return { day: addDays(today, 7) };
  if (/\bnext month\b/i.test(said)) return { day: addMonths(today, 1) };
  if (/\bthe first of (?:the|next) month\b/i.test(said)) return { day: nextDayOfMonth(1, today) };
  return null;
}
function dueDay(text, today) {
  const seg = /\bdue\b(.*)$/i.exec(text)?.[1] || /\bon the\b(.*)$/i.exec(text)?.[1] || text;
  return looseDay(seg, today) || looseDay(text, today);
}
function repeating(text) {
  if (/\b(?:every month|each month|monthly|per month|a month|once a month)\b/i.test(text)) return "monthly";
  if (/\b(?:every week|each week|weekly|per week|a week)\b/i.test(text)) return "weekly";
  if (/\b(?:every year|each year|yearly|annual(?:ly)?|per year|a year)\b/i.test(text)) return "yearly";
  return "";
}
function nextDue(day, repeat) {
  return repeat === "weekly" ? addDays(day, 7) : repeat === "yearly" ? addMonths(day, 12) : addMonths(day, 1);
}
const needsAmount = what => ({ response: `What is the amount of the ${what}, and in which currency? For example 120 dollars or 5000 shillings.`, missingInformation: ["amount"] });
const needsCurrency = amount => ({ response: `Which currency is ${amount} in, for example shillings or dollars?`, missingInformation: ["currency"] });

function billPayee(text) {
  const forms = [
    /\bbills?\s+(?:from|for|to)\s+(?:the\s+)?(?![\d$€₦£])(.+?)(?=\s+(?:for|of|due|worth|amount|about|that|which|every|each|monthly|weekly|yearly|per|a\s+month|\d|[$€₦£])|[,.]|$)/i,
    /\b(?:we|i)\s+owe\s+(?:the\s+)?(?![\d$€₦£])(.+?)(?=\s+(?:for|due|every|each|monthly|\d|[$€₦£])|[,.]|$)/i,
    /\bbills?\s+(?:called|named)\s+["']?(.+?)["']?(?=\s+(?:for|due|of|\d|[$€₦£])|[,.]|$)/i
  ];
  for (const pattern of forms) { const found = pattern.exec(text); if (found && clean(found[1]) && !/^(?:a|an|the|my|our)$/i.test(clean(found[1]))) return clean(found[1]); }
  return "";
}
function pickBill(bills, command) {
  const text = lower(command);
  const open = bills.filter(bill => lower(bill.status) !== "paid");
  const named = open.filter(bill => bill.payee && text.includes(lower(bill.payee)));
  if (named.length) { const longest = Math.max(...named.map(bill => bill.payee.length)); const best = named.filter(bill => bill.payee.length === longest); return best.length === 1 ? { bill: best[0] } : { ambiguous: best }; }
  // the words of the bill ("the electric bill", "the rent bill") against the payee's words
  const words = (text.match(/\b(?:the|our|my)\s+([a-z][a-z' -]{1,30}?)\s+bill\b/) || [])[1];
  if (words) {
    const loose = open.filter(bill => lower(`${bill.payee} ${bill.description}`).includes(words.trim()) || words.trim().split(/\s+/).some(word => word.length > 3 && lower(`${bill.payee} ${bill.description}`).includes(word)));
    if (loose.length === 1) return { bill: loose[0] };
    if (loose.length > 1) return { ambiguous: loose };
  }
  if (open.length === 1 && /\b(?:the|that|this|our|my)\s+bill\b/i.test(text)) return { bill: open[0] };
  return { none: true };
}
function say(list) { return list.length <= 1 ? list.join("") : `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`; }

// ---- the writes ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function planFinanceWrite(intent, { command, editable, workspace, today, formatMoney, amountOf }) {
  const name = `"${workspace}"`;
  const text = String(command || "");
  if (intent === "addBill") {
    const amount = amountOf(text);
    if (!amount || !(amount.amount > 0)) return needsAmount("bill");
    if (!amount.currency) return needsCurrency(amount.amount);
    const payee = billPayee(text);
    if (!payee) return { response: "Who is the bill from, for example the electric company or the landlord?", missingInformation: ["payee"] };
    const found = dueDay(text, today);
    if (!found) return { response: `When is the ${formatMoney(amount.currency, amount.amount)} bill from ${payee} due? For example Friday, the 1st, or 15 October.`, missingInformation: ["dueDate"] };
    if ((editable.bills || []).length >= ROW_LIMIT) return { response: `${name} already holds ${ROW_LIMIT} bills, the most one workspace keeps, so I have not added this one.`, info: true };
    const repeat = repeating(text);
    return {
      prompt: `I can add a ${formatMoney(amount.currency, amount.amount)} bill from ${payee} due ${describeDay(found.day, today)}${repeat ? `, repeating ${repeat}` : ""}, to ${name}. Should I go ahead?`,
      apply: current => ({ ...current, bills: [...(current.bills || []), { payee, description: "", amount: amount.amount, currency: amount.currency, dueDate: found.day, status: "unpaid", recurring: repeat, paidDate: "" }] }),
      done: `Added a ${formatMoney(amount.currency, amount.amount)} bill from ${payee}, due ${describeDay(found.day, today)}${repeat ? `, repeating ${repeat}` : ""}, to ${name}. I will count it when I work out whether you can cover upcoming expenses.`
    };
  }
  if (intent === "markBillPaid") {
    const bills = editable.bills || [];
    const open = bills.filter(bill => lower(bill.status) !== "paid");
    if (!open.length) return { response: bills.length ? `Every bill in ${name} is already marked paid.` : `${name} has no bills yet. Say, for example, "add a bill from the landlord for 800 dollars due the 1st".`, info: true };
    const found = pickBill(bills, text);
    if (found.ambiguous) return { response: `More than one bill matches: ${say(found.ambiguous.map(bill => `${bill.payee} ${formatMoney(bill.currency, bill.amount)}`))}. Which one should I mark paid? Say its name.`, missingInformation: ["payee"] };
    if (found.none) return { response: `I could not tell which bill. The unpaid bills are ${say(open.map(bill => `${bill.payee} ${formatMoney(bill.currency, bill.amount)}`))}. Say, for example, "mark the ${open[0].payee} bill paid".`, missingInformation: ["payee"] };
    const bill = found.bill;
    if ((editable.transactions || []).length >= LEDGER_LIMIT) return { response: `${name} already holds ${LEDGER_LIMIT} money entries, the most one workspace keeps, so I have not marked this paid because it would need to be logged as an expense.`, info: true };
    const label = `${formatMoney(bill.currency, bill.amount)} bill from ${bill.payee}`;
    return {
      prompt: `I can mark the ${label} as paid and log it as an expense in ${name}. Should I go ahead?`,
      apply: current => {
        const bills2 = (current.bills || []).map(item => (item === bill || (item.payee === bill.payee && item.dueDate === bill.dueDate && item.amount === bill.amount && lower(item.status) !== "paid")) ? { ...item, status: "paid", paidDate: today } : item);
        const next = bill.recurring && ISO_DAY.test(bill.dueDate) ? [{ payee: bill.payee, description: bill.description || "", amount: bill.amount, currency: bill.currency, dueDate: nextDue(bill.dueDate, bill.recurring), status: "unpaid", recurring: bill.recurring, paidDate: "" }] : [];
        return { ...current, bills: [...bills2, ...next], transactions: [...(current.transactions || []), { date: today, type: "expense", category: "bills", amount: bill.amount, currency: bill.currency, description: `Bill paid: ${bill.payee}`, fund: "" }] };
      },
      done: `Marked the ${label} as paid and logged it as an expense in ${name}.${bill.recurring ? ` It repeats ${bill.recurring}, so I added the next one.` : ""}`
    };
  }
  if (intent === "setCashBalance") {
    const amount = amountOf(text);
    if (!amount || !(amount.amount >= 0)) return needsAmount("cash balance");
    if (!amount.currency) return needsCurrency(amount.amount);
    return {
      prompt: `I can set the cash balance of ${name} to ${formatMoney(amount.currency, amount.amount)} as of today, counting income and expenses dated today or earlier as already included. From then on I move it with what you log. Should I go ahead?`,
      apply: current => ({ ...current, cashBalance: { amount: amount.amount, currency: amount.currency, asOf: today } }),
      done: `Set the cash balance of ${name} to ${formatMoney(amount.currency, amount.amount)} as of today.`
    };
  }
  if (intent === "setBudget") {
    const amount = amountOf(text);
    if (!amount || !(amount.amount > 0)) return needsAmount("budget");
    if (!amount.currency) return needsCurrency(amount.amount);
    const category = clean((/\b(?:for|on)\s+(?:the\s+)?([a-z][a-z &'-]{1,40}?)(?=\s+(?:a|per|each|every|of|this|next|monthly|\d|[$€₦£])|[,.]|$)/i.exec(text) || [])[1]);
    if (!category || /^(?:month|year|week|a month|the month)$/i.test(category)) return { response: "Which category is the budget for, for example supplies, rent or food? Say, for example, \"set a budget of 500 dollars a month for supplies\".", missingInformation: ["category"] };
    const existing = (editable.budgets || []).find(item => lower(item.category) === lower(category));
    if (!existing && (editable.budgets || []).length >= 100) return { response: `${name} already holds 100 budgets, the most one workspace keeps.`, info: true };
    return {
      prompt: `I can ${existing ? "change" : "set"} the monthly budget for ${category} in ${name} to ${formatMoney(amount.currency, amount.amount)}${existing ? ` (it was ${formatMoney(existing.currency, existing.amount)})` : ""}. Should I go ahead?`,
      apply: current => ({ ...current, budgets: [...(current.budgets || []).filter(item => lower(item.category) !== lower(category)), { category: lower(category), amount: amount.amount, currency: amount.currency, period: "month" }] }),
      done: `Set the monthly budget for ${category} in ${name} to ${formatMoney(amount.currency, amount.amount)}. Ask me "how are we doing against budget" any time.`
    };
  }
  if (intent === "addPledge") {
    const amount = amountOf(text);
    if (!amount || !(amount.amount > 0)) return needsAmount("pledge");
    if (!amount.currency) return needsCurrency(amount.amount);
    const donor = clean((/\bpledges?\s+(?:of\s+.+?\s+)?from\s+([A-Z][A-Za-z .'-]{1,50}?)(?=\s+(?:for|to|expected|due|in|on|by|restricted)\b|[,.]|$)/.exec(text)
      || /\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\s+(?:has\s+)?(?:made|pledged|promised)\b/.exec(text) || /\bfrom\s+([A-Z][A-Za-z .'-]{1,50}?)(?=\s+(?:for|to|expected|due|in|on|by|restricted)\b|[,.]|$)/.exec(text) || [])[1]);
    if (!donor) return { response: "Who made the pledge? Say, for example, \"record a pledge of 1000 dollars from Maria Chen\".", missingInformation: ["donor"] };
    const purpose = clean((/\bfor\s+(?:the\s+)?([a-z][a-z' -]{2,40}?)(?=\s+(?:expected|due|in|on|by|from|restricted)\b|[,.]|$)/i.exec(text) || [])[1]);
    const restricted = /\brestricted\b/i.test(text);
    const expected = /\b(?:expected|due|by|in|on|coming)\b/i.test(text) ? looseDay(/\b(?:expected|due|by|in|on|coming)\b(.*)$/i.exec(text)?.[1] || "", today) : null;
    if ((editable.pledges || []).length >= ROW_LIMIT) return { response: `${name} already holds ${ROW_LIMIT} pledges, the most one workspace keeps.`, info: true };
    return {
      prompt: `I can record a pledge of ${formatMoney(amount.currency, amount.amount)} from ${donor}${purpose ? ` for ${purpose}` : ""}${restricted ? ", restricted" : ""}${expected ? `, expected ${describeDay(expected.day, today)}` : ""} in ${name}. A pledge is a promise, so I will not count it as income until it is received. Should I go ahead?`,
      apply: current => ({ ...current, pledges: [...(current.pledges || []), { donor, amount: amount.amount, currency: amount.currency, expectedDate: expected?.day || "", purpose, restricted, status: "outstanding", receivedDate: "" }] }),
      done: `Recorded a ${formatMoney(amount.currency, amount.amount)} pledge from ${donor} in ${name}. It is not income yet; when it arrives, say "${donor}'s pledge was paid".`
    };
  }
  if (intent === "markPledgeReceived") {
    const pledges = editable.pledges || [];
    const open = pledges.filter(item => lower(item.status) === "outstanding");
    if (!open.length) return { response: pledges.length ? `Every pledge in ${name} is already received or cancelled.` : `${name} has no pledges recorded yet.`, info: true };
    const named = open.filter(item => item.donor && lower(text).includes(lower(item.donor).split(" ")[0]) && (lower(text).includes(lower(item.donor)) || lower(item.donor).split(" ").length === 1 || lower(text).includes(lower(item.donor).split(" ")[0])));
    const pool = named.length ? named : (open.length === 1 && /\bpledge\b/i.test(text) ? open : []);
    if (!pool.length) return { response: `I could not tell which pledge. The outstanding ones are from ${say(open.map(item => item.donor))}. Say, for example, "${open[0].donor}'s pledge was paid".`, missingInformation: ["donor"] };
    if (pool.length > 1) return { response: `${pool[0].donor} has ${pool.length} outstanding pledges (${say(pool.map(item => formatMoney(item.currency, item.amount)))}). Which one came in? Say the amount.`, missingInformation: ["amount"] };
    const pledge = pool[0];
    if ((editable.transactions || []).length >= LEDGER_LIMIT) return { response: `${name} already holds ${LEDGER_LIMIT} money entries, the most one workspace keeps, so I have not marked this received.`, info: true };
    const label = `${formatMoney(pledge.currency, pledge.amount)} pledge from ${pledge.donor}`;
    return {
      prompt: `I can mark the ${label} as received and log it as a donation in ${name}${pledge.restricted ? `, restricted to ${pledge.purpose || "its purpose"}` : ""}. Should I go ahead?`,
      apply: current => ({ ...current,
        pledges: (current.pledges || []).map(item => (item === pledge || (item.donor === pledge.donor && item.amount === pledge.amount && lower(item.status) === "outstanding")) ? { ...item, status: "received", receivedDate: today } : item),
        transactions: [...(current.transactions || []), { date: today, type: "income", category: "donation", amount: pledge.amount, currency: pledge.currency, description: `Donation from ${pledge.donor}`, fund: pledge.restricted ? (pledge.purpose || "restricted") : "" }] }),
      done: `Marked the ${label} as received and logged it as a donation in ${name}.`
    };
  }
  return null;
}

// ---- the reads ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function totalsByCurrency(rows, field = "amount") {
  const totals = {};
  for (const row of rows) { const currency = String(row.currency || "USD").toUpperCase(); totals[currency] = Math.round(((totals[currency] || 0) + (Number(row[field]) || 0)) * 100) / 100; }
  return totals;
}
const moneyList = (totals, formatMoney) => Object.entries(totals).map(([currency, amount]) => formatMoney(currency, amount));
const sentences = parts => parts.filter(Boolean).map((part, index) => (index ? part.charAt(0).toUpperCase() + part.slice(1) : part)).join(". ");

function billsDue({ editable, workspace, today, formatMoney }) {
  const name = `"${workspace}"`;
  const bills = editable.bills || [];
  const open = bills.filter(bill => lower(bill.status) !== "paid");
  if (!bills.length) return `${name} has no bills recorded yet. Say, for example, "add a bill from the landlord for 800 dollars due the 1st", and I will count it when I work out whether you can cover upcoming expenses.`;
  if (!open.length) return `Every bill in ${name} is marked paid.`;
  const dated = open.map(bill => ({ bill, day: isoOrNull(bill.dueDate) })).sort((a, b) => (a.day || "9999").localeCompare(b.day || "9999"));
  const describe = item => `${item.bill.payee} ${formatMoney(item.bill.currency, item.bill.amount)}${item.day ? `, ${describeDay(item.day, today)}` : ", no due day"}${item.bill.recurring ? `, repeats ${item.bill.recurring}` : ""}`;
  const overdue = dated.filter(item => item.day && daysUntil(item.day, today) < 0);
  const week = dated.filter(item => item.day && daysUntil(item.day, today) >= 0 && daysUntil(item.day, today) <= 7);
  const month = dated.filter(item => item.day && daysUntil(item.day, today) > 7 && daysUntil(item.day, today) <= 30);
  const later = dated.filter(item => item.day && daysUntil(item.day, today) > 30);
  const undated = dated.filter(item => !item.day);
  const parts = [];
  if (overdue.length) parts.push(`${plural(overdue.length, "bill")} overdue: ${say(overdue.map(describe))}`);
  if (week.length) parts.push(`due in the next 7 days: ${say(week.map(describe))}`);
  if (month.length) parts.push(`due in the next 30 days: ${say(month.map(describe))}`);
  if (later.length) parts.push(`${plural(later.length, "more")} later, the next ${describe(later[0])}`);
  if (undated.length) parts.push(`${plural(undated.length, "bill")} with no due day: ${say(undated.map(describe))}`);
  return `Bills to pay in ${name}: ${sentences(parts)}. In all, ${moneyList(totalsByCurrency(open), formatMoney).join(" and ")} is unpaid across ${plural(open.length, "bill")}.`;
}

function monthBounds(today) { return { from: `${today.slice(0, 7)}-01`, to: today }; }
function budgetStatus({ command, editable, workspace, today, formatMoney }) {
  const name = `"${workspace}"`;
  const budgets = editable.budgets || [];
  if (!budgets.length) return `${name} has no budgets yet. Say, for example, "set a budget of 500 dollars a month for supplies", and I will tell you how you are doing against it.`;
  const asked = budgets.filter(item => lower(command).includes(lower(item.category)));
  const shown = asked.length ? asked : budgets;
  const { from, to } = monthBounds(today);
  const lines = shown.map(budget => {
    const spent = (editable.transactions || []).filter(row => row.type === "expense" && String(row.currency || "USD").toUpperCase() === String(budget.currency || "USD").toUpperCase() && row.date >= from && row.date <= to
      && lower(`${row.category} ${row.description}`).includes(lower(budget.category))).reduce((sum, row) => sum + (Number(row.amount) || 0), 0);
    const left = Math.round((budget.amount - spent) * 100) / 100;
    const pct = budget.amount > 0 ? Math.round((spent / budget.amount) * 100) : 0;
    return `${budget.category}: spent ${formatMoney(budget.currency, spent)} of ${formatMoney(budget.currency, budget.amount)} (${pct}%), ${left >= 0 ? `${formatMoney(budget.currency, left)} left` : `over budget by ${formatMoney(budget.currency, -left)}`}`;
  });
  return `Budgets in ${name} so far this month: ${lines.join("; ")}. I match an expense to a budget when its category or description contains the budget's name.`;
}

function fundsSummary({ editable, workspace, formatMoney }) {
  const name = `"${workspace}"`;
  const rows = editable.transactions || [];
  if (!rows.length) return `${name} has no income or expenses recorded yet, so there are no restricted or unrestricted funds to report. To record a restricted gift, say, for example, "record a restricted donation of 500 dollars for the youth program from Maria Chen".`;
  const byFund = {};
  for (const row of rows) {
    const key = clean(row.fund) ? lower(clean(row.fund)) : "";
    const currency = String(row.currency || "USD").toUpperCase();
    const entry = ((byFund[key] ||= {})[currency] ||= { in: 0, out: 0 });
    if (row.type === "expense") entry.out += Number(row.amount) || 0; else entry.in += Number(row.amount) || 0;
  }
  const describe = fund => Object.entries(byFund[fund]).map(([currency, t]) => {
    const net = Math.round((t.in - t.out) * 100) / 100;
    return `${net >= 0 ? `${formatMoney(currency, net)} left` : `${formatMoney(currency, -net)} more spent than received`} (${formatMoney(currency, t.in)} in, ${formatMoney(currency, t.out)} spent)`;
  }).join(" and ");
  const restricted = Object.keys(byFund).filter(fund => fund !== "");
  const parts = [];
  if (restricted.length) parts.push(`restricted: ${restricted.map(fund => `${fund} ${describe(fund)}`).join("; ")}`);
  else parts.push("nothing is marked restricted yet");
  if (byFund[""]) parts.push(`unrestricted: ${describe("")}`);
  return `Funds in ${name}: ${sentences(parts)}. An expense counts against a restricted fund only when it was logged as paid from that fund, for example "spent 100 dollars on seeds from the youth program fund"; otherwise it counts as unrestricted.`;
}

function pledgesOutstanding({ editable, workspace, today, formatMoney }) {
  const name = `"${workspace}"`;
  const pledges = editable.pledges || [];
  if (!pledges.length) return `${name} has no pledges recorded yet. A pledge is a promise to give; say, for example, "record a pledge of 1000 dollars from Maria Chen", and I will keep it apart from income until it is received.`;
  const open = pledges.filter(item => lower(item.status) === "outstanding").sort((a, b) => (a.expectedDate || "9999").localeCompare(b.expectedDate || "9999"));
  if (!open.length) return `Every pledge in ${name} has been received or cancelled.`;
  const describe = item => `${item.donor} ${formatMoney(item.currency, item.amount)}${item.purpose ? ` for ${item.purpose}` : ""}${item.restricted ? " (restricted)" : ""}${isoOrNull(item.expectedDate) ? `, expected ${describeDay(item.expectedDate, today)}${daysUntil(item.expectedDate, today) < 0 ? ", late" : ""}` : ""}`;
  return `Outstanding pledges in ${name}: ${say(open.map(describe))}. In all, ${moneyList(totalsByCurrency(open), formatMoney).join(" and ")} has been promised and not yet received; none of it is counted as income.`;
}

function numbersAfter(text, words) {
  const match = new RegExp(`\\b(?:${words})\\b[^0-9$€₦£]{0,30}[$€₦£]?\\s?(\\d[\\d,]*(?:\\.\\d+)?)`, "i").exec(text);
  return match ? Number(match[1].replace(/,/g, "")) : null;
}
function profitMargin({ command, editable, workspace, today, formatMoney, normalize = value => value }) {
  const text = normalize(String(command || ""));
  const price = numbersAfter(text, "sell|sells|selling|sold|price|priced|charge|charges|charging|sale price|retail");
  const cost = numbersAfter(text, "cost|costs|costing|buy|buys|bought|pay|paid|make|makes|made|wholesale|supplier");
  if (price !== null && cost !== null) {
    if (!(price > 0)) return "The selling price has to be more than zero to work out a margin.";
    const profit = Math.round((price - cost) * 100) / 100;
    const margin = Math.round(((price - cost) / price) * 1000) / 10;
    const markup = cost > 0 ? Math.round(((price - cost) / cost) * 1000) / 10 : null;
    return `Selling at ${price} when it costs ${cost}: ${profit >= 0 ? `profit of ${profit} on each one` : `a loss of ${-profit} on each one`}, a margin of ${margin}% of the selling price${markup !== null ? ` (a markup of ${markup}% on the cost)` : ""}. The margin leaves out your other costs, such as rent, labour and transport.`;
  }
  const name = `"${workspace}"`;
  const { from, to } = monthBounds(today);
  const useMonth = /\bthis month\b/i.test(text);
  const totals = {};
  for (const row of editable.transactions || []) {
    if (useMonth && !(row.date >= from && row.date <= to)) continue;
    const currency = String(row.currency || "USD").toUpperCase();
    const entry = totals[currency] ||= { in: 0, out: 0 };
    if (row.type === "expense") entry.out += Number(row.amount) || 0; else entry.in += Number(row.amount) || 0;
  }
  const currencies = Object.keys(totals);
  if (!currencies.length) return `${name} has no income or expenses recorded${useMonth ? " this month" : " yet"}, so there is no margin to work out. To work out one product, say, for example, "what is my margin if I sell for 25 and it costs 15".`;
  const parts = currencies.map(currency => {
    const t = totals[currency];
    if (!(t.in > 0)) return `${formatMoney(currency, t.out)} spent and no income, so there is no margin`;
    return `income ${formatMoney(currency, t.in)}, expenses ${formatMoney(currency, t.out)}, a profit margin of ${Math.round(((t.in - t.out) / t.in) * 1000) / 10}%`;
  });
  return `${useMonth ? "This month" : "So far"} in ${name}: ${parts.join("; ")}. This is the whole workspace, not one product; to work out one, say, for example, "what is my margin if I sell for 25 and it costs 15".`;
}

function campaignNet({ command, editable, workspace, formatMoney, normalize = value => value }) {
  const text = normalize(String(command || ""));
  const raised = numbersAfter(text, "raised|brought in|made|collected|took in|earned");
  const spent = numbersAfter(text, "spent|spend|cost|costs|expenses?|paid");
  if (raised !== null && spent !== null) {
    const net = Math.round((raised - spent) * 100) / 100;
    const perDollar = raised > 0 ? Math.round((spent / raised) * 100) : null;
    return `Raised ${raised}, spent ${spent}: ${net >= 0 ? `${net} left after expenses` : `${-net} short after expenses`}${perDollar !== null ? `; it cost about ${perDollar} cents to raise each dollar` : ""}.`;
  }
  const name = `"${workspace}"`;
  const EVENT_NOUN = "campaign|gala|appeal|auction|walk-?a-?thon|bake sale|benefit dinner|fundraiser|dinner|drive|event";
  const STOP = new Set(["did", "does", "do", "how", "much", "many", "what", "was", "is", "the", "our", "my", "we", "i", "a", "an", "of", "for", "from", "about", "on", "at", "in", "to", "and", "with", "that", "last", "this", "net", "raise", "raised", "make", "made"]);
  const noun = new RegExp(`\\b(${EVENT_NOUN})\\b`, "i").exec(text);
  let label = "";
  if (noun) {
    const before = text.slice(0, noun.index).split(/\s+/).filter(Boolean);
    const modifiers = [];
    for (let i = before.length - 1; i >= 0 && modifiers.length < 3; i -= 1) { const word = before[i].replace(/[^a-z'-]/gi, ""); if (!word || STOP.has(word.toLowerCase())) break; modifiers.unshift(word); }
    const named = /\b(?:called|named)\s+["']?([a-z][a-z' -]{2,30}?)["']?(?=[,.?]|$)/i.exec(text.slice(noun.index));
    label = clean(named ? named[1] : modifiers.length ? `${modifiers.join(" ")} ${noun[1]}` : noun[1]);
  }
  if (!label) return `Which campaign or event? I add up the money logged with its name in the description or category, for example "how much did the spring gala raise after expenses". Or tell me the numbers: "we raised 5000 and spent 800".`;
  const key = lower(label);
  const mentions = needle => (editable.transactions || []).filter(row => lower(`${row.category} ${row.description} ${row.fund}`).includes(needle));
  const rows = mentions(key).length ? mentions(key) : mentions(lower(noun ? noun[1] : key));
  if (!rows.length) return `I found nothing logged with "${label}" in its name in ${name}. Log the money with the campaign's name, for example "record 500 dollars donation for the ${label}", or tell me the numbers: "we raised 5000 and spent 800".`;
  const byCurrency = {};
  for (const row of rows) { const currency = String(row.currency || "USD").toUpperCase(); const entry = byCurrency[currency] ||= { in: 0, out: 0 }; if (row.type === "expense") entry.out += Number(row.amount) || 0; else entry.in += Number(row.amount) || 0; }
  const parts = Object.entries(byCurrency).map(([currency, t]) => `raised ${formatMoney(currency, t.in)}, spent ${formatMoney(currency, t.out)}, ${t.in - t.out >= 0 ? `${formatMoney(currency, t.in - t.out)} left after expenses` : `${formatMoney(currency, t.out - t.in)} short after expenses`}${t.in > 0 ? `; about ${Math.round((t.out / t.in) * 100)} cents to raise each dollar` : ""}`);
  return `The ${label}, from ${rows.length === 1 ? "1 money entry" : `${rows.length} money entries`} logged with that name in ${name}: ${parts.join("; ")}.`;
}

const READERS = Object.freeze({ billsDue, budgetStatus, fundsSummary, pledgesOutstanding, profitMargin, campaignNet });
function readFinance(intent, context) {
  const read = READERS[intent];
  return read ? read(context) : null;
}

module.exports = Object.freeze({ classifyFinance, planFinanceWrite, readFinance, FINANCE_READ_INTENTS, FINANCE_WRITE_INTENTS, daysUntil, nextDue, looseDay });
