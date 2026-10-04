"use strict";

// Asking the business workspace for what is in it, by voice, and the two small changes an owner makes most: marking an invoice paid and setting a follow-up day.
// Before this, the business assistant could ADD a customer, a lead, an invoice or a task by voice but could not read any of them back, mark an invoice paid or
// set a follow-up date -- those only existed on the Business services web page, which a person who cannot type or read a table cannot use. ("Who are my customers",
// "who owes me money" and "mark invoice INV-1001 as paid" went to the general AI, which has no access to the workspace.)
//
// Pure functions over the workspace data (client.data.editable) so they can be tested without a database; voice-dispatch.js supplies the client and the write bridge.

const { extractDay, describeDay } = require("../personal/dates.js");

const LEAD_NOUNS = "customers?|clients?|donors?|sponsors?|volunteers?|buyers?|sellers?|tenants?|landlords?|members?|congregants?|leads?";
const READ_WORDS = "list|show|read|tell me|give me|who|what|which|how many|do i have|have i got|any";
const WRITE_WORDS = /\b(?:add|create|new|log|track|start|generate|print|export|make|sync|schedule|book|mark|update|set|change|remove|delete)\b/i;

// -> an intent name or null. Deliberately narrow: only phrasings that are unmistakably a request to READ the workspace, or to mark an invoice paid / set a follow-up day.
function classifyCrm(command = "") {
  const text = String(command || "");
  const lower = text.toLowerCase();
  if (!lower.trim()) return null;
  // writes first: they contain read-looking words ("mark invoice paid", "set a follow-up")
  const invoiceRef = /\b(?:inv-?\d+|invoice\b)/i;
  if ((/\b(?:mark|set|update|change|record)\b[^.?!]{0,50}\b(?:invoices?|inv-?\d+)\b[^.?!]{0,50}\bpaid\b/i.test(text) || /\b(?:inv-?\d+|invoice\s+(?:number\s+)?#?\d+)\b[^.?!]{0,25}\b(?:is|was|has been|have been)\s+(?:now\s+)?paid\b/i.test(text)
    // a NAMED person paying ("Grace Otieno paid her invoice"); "I paid the invoice" is the owner paying a supplier, which is not this
    || /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\s+(?:has\s+)?paid\s+(?:the|their|her|his)\s+invoice\b/.test(text)) && invoiceRef.test(text)) return "markInvoicePaid";
  if (/\b(?:set|add|schedule|put|make)\b[^.?!]{0,20}\bfollow[- ]?ups?\b/i.test(text) || /\bfollow[- ]?up\s+with\s+\S.*\b(?:on|by|next|this|tomorrow|in)\b/i.test(text)) return "setFollowUp";
  if (WRITE_WORDS.test(text)) return null;
  const asks = new RegExp(`\\b(?:${READ_WORDS})\\b`, "i").test(text);
  if (!asks) return null;
  if (/\binvoices?\b/i.test(text) || /\bwho\s+(?:owes?|still owes?|has(?:n'?t| not)\s+paid|hasn'?t\s+paid)\b/i.test(text) || /\b(?:unpaid|outstanding|overdue)\b[^.?!]{0,15}\b(?:bills?|payments?)\b/i.test(text)) return "listInvoices";
  if (/\bgrants?\b/i.test(text) && /\b(?:my|our|the|how many|which|what)\b/i.test(text)) return "listGrants";
  if (/\bappointments?\b/i.test(text) && /\b(?:my|our|the|how many|which|what|any)\b/i.test(text)) return "listAppointments";
  if (/\btasks?\b/i.test(text) && /\b(?:my|our|the|how many|which|what|any|open)\b/i.test(text)) return "listTasks";
  if (new RegExp(`\\b(?:${LEAD_NOUNS})\\b`, "i").test(text) && (/\b(?:my|our|the|all)\b/i.test(text) || /\bhow many\b/i.test(text) || /\b(?:do i have|have i got|do we have|we have)\b/i.test(text))
    && !/\b(?:did|have|do) (?:i|we)\s+(?:sell|sold|get|got|serve|served|make|made|earn|earned|lose|lost|gain|gained|visit|visited)\b/i.test(text)) return "listLeads";
  return null;
}

const say = (list, limit = 10) => {
  const shown = list.slice(0, limit);
  const more = list.length > limit ? ` and ${list.length - limit} more` : "";
  return shown.length <= 1 ? `${shown.join("")}${more}` : `${shown.slice(0, -1).join(", ")}${more ? "," : " and"} ${shown[shown.length - 1]}${more}`;
};
// Items that themselves contain commas (an invoice line, a grant, a task) are separated by semicolons, so they are not run together when read aloud.
const sayItems = (list, limit = 8) => {
  const shown = list.slice(0, limit);
  const more = list.length > limit ? list.length - limit : 0;
  if (shown.length <= 1 && !more) return shown.join("");
  return more ? `${shown.join("; ")}; and ${more} more` : `${shown.slice(0, -1).join("; ")}; and ${shown[shown.length - 1]}`;
};
const plural = (count, word) => `${count} ${word}${count === 1 ? "" : "s"}`;

// The type words a person uses -> the stored lead type ("clients" and "customers" are the same people to most owners).
function leadTypeWanted(command) {
  const lower = String(command || "").toLowerCase();
  const found = (lower.match(new RegExp(`\\b(${LEAD_NOUNS})\\b`)) || [])[1] || "leads";
  const singular = found.replace(/s$/, "").replace(/^lead$/, "");
  if (!singular) return { label: "lead", types: null };
  if (singular === "client" || singular === "customer") return { label: singular, types: ["customer", "client"] };
  return { label: singular, types: [singular] };
}

function invoiceTotals(invoice, items) {
  const totals = {};
  for (const item of items.filter(row => row.invoiceNumber === invoice.invoiceNumber)) {
    const currency = String(item.currency || "USD").toUpperCase();
    totals[currency] = Math.round(((totals[currency] || 0) + Number(item.quantity) * Number(item.unitPrice)) * 100) / 100;
  }
  return totals;
}
const moneyList = (totals, formatMoney) => Object.entries(totals).map(([currency, amount]) => formatMoney(currency, amount));
const isPaid = invoice => String(invoice.status || "").toLowerCase() === "paid";

// Reads. `workspace` is the client record's name, `editable` its data; `today` is the person's own day (YYYY-MM-DD).
function readCrm(intent, { command, editable, workspace, today, formatMoney }) {
  const name = `"${workspace}"`;
  if (intent === "listLeads") {
    const { label, types } = leadTypeWanted(command);
    const rows = (editable.leads || []).filter(row => !types || types.includes(String(row.type || "").toLowerCase()));
    if (/\bhow many\b/i.test(command) && !rows.length) return `${name} has no ${label}s yet.`;
    if (!rows.length) return `${name} has no ${label}s yet. Say something like "add a customer named Grace Otieno" to add one.`;
    const names = rows.map(row => `${row.name}${row.followUpDate && /^\d{4}-\d{2}-\d{2}$/.test(row.followUpDate) ? ` (follow up ${describeDay(row.followUpDate, today)})` : ""}`);
    return `${name} has ${plural(rows.length, label)}: ${say(names)}.`;
  }
  if (intent === "listInvoices") {
    const invoices = editable.invoices || [];
    const items = editable.invoiceItems || [];
    if (!invoices.length) return `${name} has no invoices yet. Say something like "create an invoice for Grace Otieno" to start one.`;
    const unpaidOnly = /\b(?:unpaid|not paid|outstanding|overdue|owes?|owing|hasn'?t paid|has not paid|haven'?t paid|yet to pay)\b/i.test(command);
    const rows = unpaidOnly ? invoices.filter(invoice => !isPaid(invoice)) : invoices;
    if (!rows.length) return `Every invoice in ${name} is marked paid.`;
    const lines = rows.map(invoice => {
      const totals = moneyList(invoiceTotals(invoice, items), formatMoney);
      return `${invoice.invoiceNumber}${invoice.clientName ? ` for ${invoice.clientName}` : ""}${totals.length ? `, ${totals.join(" and ")}` : ", no items yet"}${unpaidOnly ? "" : isPaid(invoice) ? ", paid" : ", not paid"}`;
    });
    const owing = {};
    for (const invoice of invoices.filter(row => !isPaid(row))) for (const [currency, amount] of Object.entries(invoiceTotals(invoice, items))) owing[currency] = Math.round(((owing[currency] || 0) + amount) * 100) / 100;
    const owingPhrase = Object.keys(owing).length ? ` In all, ${moneyList(owing, formatMoney).join(" and ")} has not been paid yet.` : "";
    return `${unpaidOnly ? `${plural(rows.length, "invoice")} in ${name} not marked paid` : `${name} has ${plural(rows.length, "invoice")}`}: ${sayItems(lines, 8)}.${owingPhrase}`;
  }
  if (intent === "listGrants") {
    const grants = editable.grants || [];
    if (!grants.length) return `${name} has no grants or funding opportunities tracked yet.`;
    const lines = grants.map(grant => `${grant.funderName || grant.program}${grant.program && grant.funderName ? ` (${grant.program})` : ""}${grant.amount ? `, ${formatMoney(grant.currency || "USD", grant.amount)}` : ""}, ${grant.status || "researching"}${grant.deadline ? `, deadline ${grant.deadline}` : ""}`);
    return `${name} is tracking ${plural(grants.length, "grant")}: ${sayItems(lines, 6)}.`;
  }
  if (intent === "listAppointments") {
    const appointments = editable.appointments || [];
    if (!appointments.length) return `${name} has no appointments yet.`;
    return `${name} has ${plural(appointments.length, "appointment")}: ${sayItems(appointments.map(item => `${item.title}${item.start ? ` on ${item.start}` : ""}`), 8)}.`;
  }
  if (intent === "listTasks") {
    const tasks = editable.tasks || [];
    const wantsAll = /\ball\b/i.test(command);
    const rows = wantsAll ? tasks : tasks.filter(task => String(task.status || "").toLowerCase() !== "done");
    if (!tasks.length) return `${name} has no tasks yet.`;
    if (!rows.length) return `Every task in ${name} is done.`;
    const lines = rows.map(task => `${task.title}${task.dueDate ? `, due ${/^\d{4}-\d{2}-\d{2}$/.test(task.dueDate) ? describeDay(task.dueDate, today) : task.dueDate}` : ""}${task.assignee ? `, for ${task.assignee}` : ""}`);
    return `${name} has ${plural(rows.length, wantsAll ? "task" : "open task")}: ${sayItems(lines, 8)}.`;
  }
  return null;
}

// Which invoice does the person mean? By number ("INV-1001", "invoice 1001"), else by the client's name. -> { invoice } | { ambiguous: [...] } | { none: true }
function findInvoice(invoices, command) {
  const text = String(command || "");
  const number = (text.match(/\binv-?(\d+)\b/i) || text.match(/\binvoice\s+(?:number\s+)?#?(\d+)\b/i) || [])[1];
  if (number) {
    const hit = invoices.find(invoice => String(invoice.invoiceNumber || "").replace(/\D/g, "").replace(/^0+/, "") === number.replace(/^0+/, ""));
    return hit ? { invoice: hit } : { none: true };
  }
  const lower = text.toLowerCase();
  const byClient = invoices.filter(invoice => invoice.clientName && lower.includes(String(invoice.clientName).toLowerCase()));
  const unpaid = byClient.filter(invoice => !isPaid(invoice));
  const pool = unpaid.length ? unpaid : byClient;
  if (pool.length === 1) return { invoice: pool[0] };
  if (pool.length > 1) return { ambiguous: pool };
  const unpaidAll = invoices.filter(invoice => !isPaid(invoice));
  if (unpaidAll.length === 1 && /\b(?:the|that|my|this)\s+invoice\b/i.test(text)) return { invoice: unpaidAll[0] };
  return { none: true };
}

function findLead(leads, command) {
  const lower = String(command || "").toLowerCase();
  const hits = leads.filter(lead => lead.name && lower.includes(String(lead.name).toLowerCase()));
  if (!hits.length) return null;
  hits.sort((a, b) => String(b.name).length - String(a.name).length);
  return hits[0];
}

// The change, ready to apply: { response } to ask or refuse, or { prompt, apply, done } where apply(editable) returns the new editable and `done` is what is said afterwards.
function planCrmWrite(intent, { command, editable, workspace, today, formatMoney }) {
  const name = `"${workspace}"`;
  if (intent === "markInvoicePaid") {
    const invoices = editable.invoices || [];
    if (!invoices.length) return { response: `${name} has no invoices yet.`, info: true };
    const found = findInvoice(invoices, command);
    if (found.ambiguous) return { response: `${found.ambiguous[0].clientName} has ${found.ambiguous.length} invoices: ${say(found.ambiguous.map(item => `${item.invoiceNumber}${isPaid(item) ? " (paid)" : ""}`))}. Which one should I mark paid? Say, for example, mark invoice ${found.ambiguous[0].invoiceNumber} as paid.`, missingInformation: ["invoiceNumber"] };
    if (found.none) return { response: `I could not find that invoice in ${name}. Say its number, for example mark invoice ${invoices[0].invoiceNumber} as paid.`, missingInformation: ["invoiceNumber"] };
    const invoice = found.invoice;
    const totals = moneyList(invoiceTotals(invoice, editable.invoiceItems || []), formatMoney);
    const label = `invoice ${invoice.invoiceNumber}${invoice.clientName ? ` for ${invoice.clientName}` : ""}${totals.length ? ` (${totals.join(" and ")})` : ""}`;
    if (isPaid(invoice)) return { response: `${label.charAt(0).toUpperCase()}${label.slice(1)} is already marked paid.`, info: true };
    return {
      prompt: `I can mark ${label} as paid in ${name}. Should I go ahead?`,
      apply: current => ({ ...current, invoices: current.invoices.map(item => item.invoiceNumber === invoice.invoiceNumber ? { ...item, status: "paid" } : item) }),
      done: `Marked ${label} as paid in ${name}.`
    };
  }
  if (intent === "setFollowUp") {
    const leads = editable.leads || [];
    const lead = findLead(leads, command);
    if (!lead) return { response: leads.length ? `I could not find that person in ${name}. Your list has ${say(leads.map(item => item.name), 6)}. Say the name exactly as it is saved.` : `${name} has no customers or leads yet. Add one first, for example: add a customer named Grace Otieno.`, missingInformation: ["name"] };
    const withoutName = String(command || "").replace(new RegExp(lead.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), " ");
    const found = extractDay(withoutName, today);
    if (!found) return { response: `Which day should I set the follow-up with ${lead.name} for? For example: tomorrow, Friday, or 15 October.`, missingInformation: ["date"] };
    if (found.day < today) return { response: `That day has already passed. Which day should I set the follow-up with ${lead.name} for?`, missingInformation: ["date"] };
    const when = describeDay(found.day, today);
    return {
      prompt: `I can set a follow-up with ${lead.name} for ${when} in ${name}. Should I go ahead?`,
      apply: current => ({ ...current, leads: current.leads.map(item => item === lead || (item.name === lead.name && item.contact === lead.contact) ? { ...item, followUpDate: found.day } : item) }),
      done: `Set a follow-up with ${lead.name} for ${when} in ${name}. I will remind you when it is due.`
    };
  }
  return null;
}

const CRM_READ_INTENTS = Object.freeze(["listLeads", "listInvoices", "listGrants", "listAppointments", "listTasks"]);
const CRM_WRITE_INTENTS = Object.freeze(["markInvoicePaid", "setFollowUp"]);

module.exports = Object.freeze({ classifyCrm, readCrm, planCrmWrite, findInvoice, findLead, leadTypeWanted, invoiceTotals, CRM_READ_INTENTS, CRM_WRITE_INTENTS });
