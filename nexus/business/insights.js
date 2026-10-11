"use strict";

// Questions a business or nonprofit leader asks about their own workspace, answered from the records in it: how are we doing this month, will we have enough money, who needs a follow-up, which grants are due soon, how many
// people did the programme serve, and the volunteer-hours request. Pure functions over the workspace data (client.data.editable) so they can be tested without a database; voice-dispatch.js supplies the client and the day.
//
// What this does NOT do is as important as what it does: the workspace holds no bank balance, no bills to pay, no volunteer hours and no service or outcome records yet, so those questions get an answer that says what can
// be seen and what cannot, never a guess or a made-up total. (Each of those is a planned addition; see the reply wording.)

const { describeDay } = require("../personal/dates.js");

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const WRITE_VERB = /\b(?:add|create|new|log|record|track|set|schedule|put|make|mark|update|change|remove|delete|draft|write|generate|send|remind)\b/i;
const WORKSPACE_WORDS = "organi[sz]ation|nonprofit|non-profit|charity|ngo|business|church|ministry|congregation|company|team|program(?:me)?|project";

// ---- which question -------------------------------------------------------------------------------------------------------------------------------------------------------------
// -> "howAreWeDoing" | "cashOutlook" | "followUpDue" | "deadlinesDue" | null   (people served and volunteer hours are in programs-voice.js)
function classifyInsight(command = "") {
  const text = String(command || "").replace(/\s+/g, " ").trim();
  if (!text || text.length > 240) return null;

  if (WRITE_VERB.test(text)) return null;

  // "How is my nonprofit doing this month?", "How are we doing this month?", "How's the business doing?"
  const doing = new RegExp(`\\bhow(?:'s|\\s+is|\\s+are)\\s+(?:my|our|the)\\s+(?:${WORKSPACE_WORDS})\\s+doing\\b`, "i").test(text)
    || new RegExp(`\\bhow\\s+(?:is|are)\\s+(?:my|our|the)\\s+(?:${WORKSPACE_WORDS})\\s+(?:going|performing|looking)\\b`, "i").test(text)
    // a bare "how are we doing" is only about the money when it says so (it is also ordinary talk)
    || (/\bhow are we doing\b/i.test(text) && /\b(?:(?:this|last)\s+(?:month|week|year)|today|so far|financially|money|lately|overall|numbers)\b/i.test(text));
  if (doing) return "howAreWeDoing";

  // "Will we have enough money to cover upcoming expenses?", "Can we afford payroll?", "How long will our cash last?"
  // (a question: "I need enough money for a house" is not)
  const questionShaped = /[?]/.test(text) || /^(?:(?:hey|ok|okay)\s+)?(?:(?:kyro|nexus)[,.]?\s+)?(?:will|would|do|does|did|are|is|am|can|could|how|what|have|has|should)\b/i.test(text);
  if (questionShaped && (/\b(?:enough|sufficient)\s+(?:money|cash|funds)\b/i.test(text)
    || /\b(?:can|could|will|would)\s+(?:we|i)\s+(?:afford|cover|pay)\b/i.test(text)
    || /\bhow long (?:will|can|does) (?:our|my|the|we|i)?\s*(?:money|cash|funds|savings|budget)?\s*(?:last|hold)\b/i.test(text)
    || /\b(?:cash[- ]?flow|runway)\b/i.test(text) && /\b(?:what|how|show|tell|do we|are we|is our|is my)\b/i.test(text))) return "cashOutlook";

  // "Which customers or donors need follow-up?", "Who should I follow up with?", "Who is overdue for a call?"
  if (/\bfollow[- ]?ups?\b/i.test(text) && /\b(?:need|needs|needing|due|overdue|waiting|pending|outstanding|who|which|any|should|have to|must)\b/i.test(text)) return "followUpDue";
  if (/\bwho\b.{0,25}\b(?:should|do|can|must|need to) (?:i|we)\b.{0,15}\b(?:call|contact|reach out|get back|check in)/i.test(text)) return "followUpDue";

  // "Which grants or contracts have approaching deadlines?", "What is due soon for funding?"
  if (/\b(?:grants?|contracts?|rfps?|proposals?|applications?|funding|funders?|opportunit(?:y|ies)|awards?)\b/i.test(text)
    && /\b(?:deadlines?|due|closing|closes|expir\w+|approaching|coming up|upcoming|soon|overdue|late|this month|next month|this week)\b/i.test(text)
    && /\b(?:which|what|any|do (?:we|i) have|how many|show|list|tell me|are there)\b/i.test(text)) return "deadlinesDue";

  return null;
}

// ---- the reads ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// names read as a plain list: "Sam Park, Joy Wanjiru and Tom Lee"
const sayNames = (names, limit = 5) => { const shown = names.slice(0, limit); const more = names.length > limit ? ` and ${names.length - limit} more` : ""; return shown.length <= 1 ? `${shown.join("")}${more}` : `${shown.slice(0, -1).join(", ")}${more ? "," : " and"} ${shown[shown.length - 1]}${more}`; };
const plural = (count, word) => `${count} ${word}${count === 1 ? "" : "s"}`;
const say = (list, limit = 6) => {
  const shown = list.slice(0, limit);
  const more = list.length > limit ? ` and ${list.length - limit} more` : "";
  return shown.length <= 1 ? `${shown.join("")}${more}` : `${shown.slice(0, -1).join("; ")}${more ? ";" : "; and"} ${shown[shown.length - 1]}${more}`;
};
function daysUntil(day, today) {
  return Math.round((Date.UTC(+day.slice(0, 4), +day.slice(5, 7) - 1, +day.slice(8, 10)) - Date.UTC(+today.slice(0, 4), +today.slice(5, 7) - 1, +today.slice(8, 10))) / 86400000);
}
const lower = value => String(value || "").toLowerCase();
// the clauses of an answer, each starting with a capital after the first full stop
const sentences = parts => parts.map((part, index) => (index ? part.charAt(0).toUpperCase() + part.slice(1) : part)).join(". ");
function isoOrNull(value) { return ISO_DAY.test(String(value || "")) ? String(value) : null; }

// The money already logged in a window, per currency (never added across currencies).
function moneyIn(transactions, from, to) {
  const totals = {};
  for (const row of transactions || []) {
    if (from && (!row.date || row.date < from)) continue;
    if (to && (!row.date || row.date > to)) continue;
    const currency = String(row.currency || "USD").toUpperCase();
    const entry = totals[currency] || (totals[currency] = { income: 0, expenses: 0 });
    if (row.type === "expense") entry.expenses += Number(row.amount) || 0; else entry.income += Number(row.amount) || 0;
  }
  return totals;
}

// "customers or donors" names two kinds of contact; "who should I follow up with" names none (everyone)
const CONTACT_KINDS = Object.freeze({ customer: ["customer", "client"], client: ["customer", "client"], donor: ["donor"], sponsor: ["sponsor"], volunteer: ["volunteer"], buyer: ["buyer"], seller: ["seller"], tenant: ["tenant"], landlord: ["landlord"], member: ["member"], congregant: ["congregant"] });
function contactKinds(command) {
  const named = [...new Set([...String(command || "").toLowerCase().matchAll(/\b(customer|client|donor|sponsor|volunteer|buyer|seller|tenant|landlord|member|congregant)s?\b/g)].map(match => match[1]))];
  if (!named.length) return { types: null, label: "contacts" };
  return { types: [...new Set(named.flatMap(kind => CONTACT_KINDS[kind]))], label: named.map(kind => `${kind}s`).join(" and ") };
}

function followUpDue({ command, editable, workspace, today }) {
  const name = `"${workspace}"`;
  const wanted = contactKinds(command);
  const rows = (editable.leads || []).filter(row => !wanted.types || wanted.types.includes(lower(row.type)));
  const label = wanted.label;
  if (!rows.length) return `${name} has no ${label} recorded yet, so nothing needs a follow-up. Say, for example, "add a donor named Maria Chen" to start.`;
  const dated = rows.map(row => ({ row, day: isoOrNull(row.followUpDate) })).filter(item => item.day);
  const overdue = dated.filter(item => daysUntil(item.day, today) < 0).sort((a, b) => a.day.localeCompare(b.day));
  const soon = dated.filter(item => { const d = daysUntil(item.day, today); return d >= 0 && d <= 7; }).sort((a, b) => a.day.localeCompare(b.day));
  const later = dated.filter(item => daysUntil(item.day, today) > 7);
  const undated = rows.filter(row => !isoOrNull(row.followUpDate));
  const who = item => `${item.row.name}${item.row.type ? ` (${lower(item.row.type)})` : ""}, ${describeDay(item.day, today)}`;
  const parts = [];
  if (overdue.length) parts.push(`${plural(overdue.length, "follow-up")} overdue: ${say(overdue.map(who))}`);
  if (soon.length) parts.push(`${plural(soon.length, "follow-up")} due in the next 7 days: ${say(soon.map(who))}`);
  if (!parts.length) parts.push(`nothing is overdue or due in the next 7 days${later.length ? `; ${plural(later.length, "follow-up")} ${later.length === 1 ? "is" : "are"} set for later` : ""}`);
  const tail = undated.length ? ` ${plural(undated.length, undated.length === 1 || /\band\b/.test(label) ? "contact" : label.replace(/s$/, ""))} ${undated.length === 1 ? "has" : "have"} no follow-up day set: ${sayNames(undated.map(row => row.name))}. Say, for example, "set a follow-up with ${undated[0].name} next Tuesday".` : "";
  return `Follow-ups for ${label} in ${name}: ${sentences(parts)}.${tail}`;
}

const CLOSED_FUNDING = new Set(["awarded", "declined", "rejected", "denied", "closed", "withdrawn", "not funded", "not selected", "won", "lost", "completed"]);
function deadlinesDue({ command, editable, workspace, today, formatMoney }) {
  const name = `"${workspace}"`;
  const grants = editable.grants || [];
  const contractNote = /\bcontracts?\b|\brfps?\b/i.test(command) ? " I track contracts and bids the same way as grants, as funding opportunities with a deadline; there is no separate contract record, and I do not track eligibility, reporting duties or certification requirements yet." : "";
  if (!grants.length) return `${name} has no grants or funding opportunities tracked yet, so no deadlines.${contractNote} Say, for example, "add a grant from Green Fund for 5000 dollars due December 1".`;
  const open = grants.filter(grant => !CLOSED_FUNDING.has(lower(grant.status)));
  const dated = open.map(grant => ({ grant, day: isoOrNull(grant.deadline) })).filter(item => item.day).sort((a, b) => a.day.localeCompare(b.day));
  const noDate = open.filter(grant => !isoOrNull(grant.deadline));
  const describe = item => {
    const g = item.grant;
    const money = g.amount ? ` ${formatMoney(g.currency || "USD", g.amount)}` : "";
    return `${g.funderName || g.program || "a grant"}${g.program && g.funderName ? ` (${g.program})` : ""}${money}, ${lower(g.status || "researching")}, ${describeDay(item.day, today)}`;
  };
  const overdue = dated.filter(item => daysUntil(item.day, today) < 0);
  const week = dated.filter(item => { const d = daysUntil(item.day, today); return d >= 0 && d <= 7; });
  const month = dated.filter(item => { const d = daysUntil(item.day, today); return d > 7 && d <= 30; });
  const later = dated.filter(item => daysUntil(item.day, today) > 30);
  const parts = [];
  if (overdue.length) parts.push(`${plural(overdue.length, "deadline")} already passed and still open: ${say(overdue.map(describe))}`);
  if (week.length) parts.push(`due in the next 7 days: ${say(week.map(describe))}`);
  if (month.length) parts.push(`due in the next 30 days: ${say(month.map(describe))}`);
  if (!overdue.length && !week.length && !month.length) parts.push(`nothing is due in the next 30 days${later.length ? `; the next one is ${describe(later[0])}` : ""}`);
  else if (later.length) parts.push(`${plural(later.length, "more")} later, the next ${describe(later[0])}`);
  const tail = noDate.length ? ` ${plural(noDate.length, "open opportunity")} ${noDate.length === 1 ? "has" : "have"} no deadline recorded: ${sayNames(noDate.map(grant => grant.funderName || grant.program || "a grant"), 4)}.` : "";
  return `Funding deadlines in ${name}: ${sentences(parts)}.${tail}${contractNote}`;
}

// Will there be enough money for what is coming? Answered only from what the person has told us: the bank balance (moved by the income and expenses logged after the day it was true), the bills not yet paid, and, as a
// separate note, invoices and pledges that may arrive. With no balance or no bills recorded it says exactly what is missing instead of guessing. It never counts an unpaid invoice or a pledge as cash in hand.
function cashOutlook({ editable, workspace, today, formatMoney }) {
  const name = `"${workspace}"`;
  const balance = editable.cashBalance || {};
  const hasBalance = ISO_DAY.test(String(balance.asOf || ""));
  const currency = hasBalance ? String(balance.currency || "USD").toUpperCase() : null;
  const inMain = row => !currency || String(row.currency || "USD").toUpperCase() === currency;
  const horizon = (() => { const d = new Date(Date.UTC(+today.slice(0, 4), +today.slice(5, 7) - 1, +today.slice(8, 10) + 30)); return d.toISOString().slice(0, 10); })();

  const unpaid = (editable.bills || []).filter(bill => lower(bill.status) !== "paid");
  const dueSoon = unpaid.filter(bill => !isoOrNull(bill.dueDate) || bill.dueDate <= horizon);
  const dueSoonMain = dueSoon.filter(inMain);
  const dueTotal = dueSoonMain.reduce((sum, bill) => sum + (Number(bill.amount) || 0), 0);
  const otherCurrencyBills = dueSoon.filter(bill => !inMain(bill));

  const seen = [];
  const monthStart = `${today.slice(0, 7)}-01`;
  const thisMonth = moneyIn(editable.transactions, monthStart, today);
  for (const code of Object.keys(thisMonth)) seen.push(`so far this month ${formatMoney(code, thisMonth[code].income)} in and ${formatMoney(code, thisMonth[code].expenses)} out`);

  if (!hasBalance) {
    const billsLine = unpaid.length ? ` I do know of ${plural(unpaid.length, "unpaid bill")} totalling ${Object.entries(unpaid.reduce((t, bill) => { const c = String(bill.currency || "USD").toUpperCase(); t[c] = (t[c] || 0) + (Number(bill.amount) || 0); return t; }, {})).map(([c, a]) => formatMoney(c, Math.round(a * 100) / 100)).join(" and ")}.` : " I also have no bills recorded.";
    return `I cannot tell you whether you will have enough, because I do not have your bank balance, and I will not guess.${billsLine}${seen.length ? ` What I can see in ${name}: ${seen.join("; ")}.` : ""} Tell me the balance, for example "set our cash balance to 5000 dollars", and add your bills, for example "add a bill from the landlord for 800 dollars due the 1st", and I will work it out.`;
  }

  // the balance, moved by what was logged after the day it was true
  let moved = 0;
  for (const row of editable.transactions || []) {
    if (!inMain(row) || !row.date || row.date <= balance.asOf) continue;
    moved += (row.type === "expense" ? -1 : 1) * (Number(row.amount) || 0);
  }
  const estimate = Math.round((Number(balance.amount) + moved) * 100) / 100;
  const base = `Your cash balance was ${formatMoney(currency, balance.amount)} ${balance.asOf === today ? "as of today" : `on ${describeDay(balance.asOf, today)}`}${moved ? `; with the income and expenses logged since, I estimate ${formatMoney(currency, estimate)} now` : ""}.`;
  const owedInvoices = {};
  const items = editable.invoiceItems || [];
  for (const invoice of (editable.invoices || []).filter(row => lower(row.status) !== "paid")) {
    for (const item of items.filter(row => row.invoiceNumber === invoice.invoiceNumber && String(row.currency || "USD").toUpperCase() === currency)) owedInvoices[currency] = Math.round(((owedInvoices[currency] || 0) + Number(item.quantity) * Number(item.unitPrice)) * 100) / 100;
  }
  const pledged = (editable.pledges || []).filter(row => lower(row.status) === "outstanding" && inMain(row)).reduce((sum, row) => sum + (Number(row.amount) || 0), 0);
  const maybe = [owedInvoices[currency] ? `${formatMoney(currency, owedInvoices[currency])} in unpaid invoices` : "", pledged ? `${formatMoney(currency, pledged)} in pledges` : ""].filter(Boolean);
  const caveat = `I have not counted ${maybe.length ? `${maybe.join(" or ")}, which may arrive, nor ` : ""}any bill, payment or income that is not recorded.`;

  if (!dueSoon.length) return `${base} I have no unpaid bills recorded for the next 30 days, so there is nothing for it to cover yet; add your bills, for example "add a bill from the landlord for 800 dollars due the 1st", and I will check. ${caveat}`;
  const overdue = dueSoonMain.filter(bill => isoOrNull(bill.dueDate) && daysUntil(bill.dueDate, today) < 0).length;
  const left = Math.round((estimate - dueTotal) * 100) / 100;
  const billsText = `The ${plural(dueSoonMain.length, "unpaid bill")} due in the next 30 days${overdue ? ` (${overdue} already overdue)` : ""} ${dueSoonMain.length === 1 ? "comes" : "come"} to ${formatMoney(currency, dueTotal)}`;
  const verdict = left >= 0 ? `Paying them would leave about ${formatMoney(currency, left)}.` : `That is ${formatMoney(currency, -left)} more than the estimated cash, so you would be short unless money comes in.`;
  const other = otherCurrencyBills.length ? ` There are also ${plural(otherCurrencyBills.length, "bill")} in another currency that I have not added.` : "";
  // how long the cash lasts at the recent pace of spending, from the last three full months of expenses in the same currency
  const first = new Date(Date.UTC(+today.slice(0, 4), +today.slice(5, 7) - 4, 1)).toISOString().slice(0, 10);
  const lastEnd = new Date(Date.UTC(+today.slice(0, 4), +today.slice(5, 7) - 1, 0)).toISOString().slice(0, 10);
  const spentBefore = (moneyIn(editable.transactions, first, lastEnd)[currency] || { expenses: 0 }).expenses / 3;
  const runway = spentBefore > 0 && estimate > 0 ? ` At your recent spending of about ${formatMoney(currency, Math.round(spentBefore * 100) / 100)} a month, ${formatMoney(currency, estimate)} lasts about ${Math.max(0, Math.round((estimate / spentBefore) * 10) / 10)} months.` : "";
  return `${base} ${billsText}. ${verdict}${other}${runway} ${caveat}`;
}

const INSIGHT_INTENTS = Object.freeze(["howAreWeDoing", "cashOutlook", "followUpDue", "deadlinesDue"]);
// "howAreWeDoing" is run by the dashboard; the rest are answered here
const READ_FUNCTIONS = Object.freeze({ cashOutlook, followUpDue, deadlinesDue });
function readInsight(intent, context) {
  const read = READ_FUNCTIONS[intent];
  return read ? read(context) : null;
}

module.exports = Object.freeze({ classifyInsight, readInsight, INSIGHT_INTENTS, moneyIn, daysUntil });
