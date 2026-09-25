"use strict";

const { clean, formatMoney, unitLabel, round, plural } = require("./parse.js");
const { extractPeriod } = require("../personal/dates.js");
const { describeFarm } = require("./fields.js");
const { sum, profitOf, showTotals } = require("./money.js");
const { findParty } = require("./parties.js");

// Printable reports made from the farmer's own records: a farm summary, expense and income reports, a harvest record, an inventory list, a
// livestock register, a buyer receipt, a task list, and the cooperative's dues statement. The words are plain text (or a PDF or Word file when
// asked) saved through the same real, owner-only document export the rest of Kyro uses, so they can be downloaded and printed. A report
// contains only what was recorded; it never adds a figure.
const line = (width = 60) => "-".repeat(width);
const pad = (value, width) => String(value).padEnd(width).slice(0, Math.max(width, String(value).length));
function table(rows, widths) { return rows.map(row => row.map((cell, i) => (i === row.length - 1 ? String(cell) : pad(cell, widths[i]))).join("  ")).join("\n"); }
const formatOf = text => (/\bpdf\b/i.test(text) ? "pdf" : /\b(?:word|docx)\b/i.test(text) ? "docx" : "txt");

const REPORTS = [
  { id: "summary", pattern: /\b(?:farm )?(?:summary|overview|profile)\b/i, label: "farm summary" },
  { id: "expenses", pattern: /\b(?:expense|expenses|spending|costs)\b/i, label: "expense report" },
  { id: "income", pattern: /\b(?:income|sales|earnings|revenue)\b/i, label: "income report" },
  { id: "statement", pattern: /\b(?:profit|financial|profit and loss|statement|accounts)\b/i, label: "profit statement" },
  { id: "harvest", pattern: /\b(?:harvest|yield|yields)\b/i, label: "harvest record" },
  { id: "inventory", pattern: /\b(?:inventory|stock)\b/i, label: "inventory list" },
  { id: "livestock", pattern: /\b(?:livestock|animals?|herd|flock)\b/i, label: "livestock register" },
  { id: "tasks", pattern: /\b(?:tasks?|jobs|work list)\b/i, label: "task list" },
  { id: "coop", pattern: /\b(?:co-?op(?:erative)?|dues)\b/i, label: "cooperative statement" }
];

async function build(ctx, kind, text) {
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const period = extractPeriod(text, ctx.today) || extractPeriod("this year", ctx.today);
  const farm = (await ctx.store.list({ ...scope, collection: "farm" }))[0];
  const owner = (ctx.nameOf ? await ctx.nameOf({ tenantId: ctx.tenantId, userId: ctx.userId }).catch(() => "") : "") || "";
  const head = title => `${[title.toUpperCase(), farm?.data.farmName || "", owner ? `Prepared for: ${owner}` : "", `Date: ${ctx.today}`, line()].filter(Boolean).join("\n")}\n\n`;
  const foot = "\n\nPrepared by Kyro from the records you entered. It contains only what was recorded.";
  const money = async () => (await ctx.store.list({ ...scope, collection: "money" })).filter(record => record.data.day >= period.from && record.data.day <= period.to);

  if (kind === "summary") {
    const fields = await ctx.store.list({ ...scope, collection: "field" }); const animals = (await ctx.store.list({ ...scope, collection: "animal" })).filter(animal => animal.data.status !== "gone");
    const stock = await ctx.store.list({ ...scope, collection: "stock" }); const tasks = (await ctx.store.list({ ...scope, collection: "task" })).filter(task => task.data.status !== "done");
    const rows = (await ctx.store.list({ ...scope, collection: "money" })).filter(record => record.data.day >= `${ctx.today.slice(0, 4)}-01-01`);
    if (!farm && !fields.length && !animals.length && !rows.length) return null;
    return { title: "Farm summary", content: `${head("Farm summary")}${farm ? `Farm: ${describeFarm(farm.data)}\n\n` : ""}FIELDS (${fields.length})\n${fields.length ? fields.slice().reverse().map(field => `  ${field.data.name}${field.data.size ? ` — ${unitLabel(field.data.size.value, field.data.size.unit)}` : ""}${field.data.crop ? `, ${field.data.crop}` : ""}${field.data.planted ? `, planted ${field.data.planted}` : ""}`).join("\n") : "  none recorded"}\n\nLIVESTOCK (${animals.length} records)\n${animals.length ? animals.slice(0, 20).map(animal => `  ${animal.data.tag} — ${animal.data.species}`).join("\n") : "  none recorded"}\n\nSTOCK (${stock.length} items)\n${stock.length ? stock.slice(0, 20).map(item => `  ${item.data.name}: ${unitLabel(item.data.qty, item.data.unit)}`).join("\n") : "  none recorded"}\n\nOPEN JOBS: ${tasks.length}\n\nMONEY THIS YEAR\n  Income:   ${showTotals(sum(rows, "income"))}\n  Spending: ${showTotals(sum(rows, "expense"))}\n  Net:      ${Object.entries(profitOf(rows)).map(([currency, value]) => `${value < 0 ? "-" : ""}${formatMoney(Math.abs(value), currency)}`).join(" and ") || "0"}${foot}` };
  }
  if (kind === "expenses" || kind === "income") {
    const type = kind === "expenses" ? "expense" : "income"; const rows = (await money()).filter(record => record.data.type === type).sort((a, b) => a.data.day.localeCompare(b.data.day));
    if (!rows.length) return null;
    const by = {}; for (const record of rows) by[record.data.category] = round((by[record.data.category] || 0) + record.data.amount);
    const cur = rows[0].data.currency;
    return { title: `${kind === "expenses" ? "Expense" : "Income"} report ${period.label}`, content: `${head(`${kind === "expenses" ? "Expense" : "Income"} report`)}Period: ${period.from} to ${period.to}\n\n${table([["Date", "Amount", "What"], ...rows.map(record => [record.data.day, formatMoney(record.data.amount, record.data.currency), `${record.data.note || record.data.item || record.data.category}${record.data.party ? ` (${record.data.party})` : ""}${record.data.field ? ` [${record.data.field}]` : ""}`])], [12, 14])}\n\n${line()}\nBY KIND\n${Object.entries(by).sort((a, b) => b[1] - a[1]).map(([category, amount]) => `  ${pad(category, 14)} ${formatMoney(amount, cur)}`).join("\n")}\n\nTOTAL: ${showTotals(sum(rows, type))}  (${plural(rows.length, "entry", "entries")})${foot}` };
  }
  if (kind === "statement") {
    const rows = await money(); if (!rows.length) return null;
    return { title: `Profit statement ${period.label}`, content: `${head("Profit statement")}Period: ${period.from} to ${period.to}\n\nIncome:   ${showTotals(sum(rows, "income"))}\nSpending: ${showTotals(sum(rows, "expense"))}\n${line(30)}\nNet:      ${Object.entries(profitOf(rows)).map(([currency, value]) => `${value < 0 ? "loss of " : "profit of "}${formatMoney(Math.abs(value), currency)}`).join(" and ")}${foot}` };
  }
  if (kind === "harvest") {
    const entries = (await ctx.farmEntries()).filter(entry => entry?.kind === "reading" && entry.metric === "harvest" && entry.day >= period.from && entry.day <= period.to).sort((a, b) => a.day.localeCompare(b.day));
    if (!entries.length) return null;
    const totals = {}; for (const entry of entries) { const key = `${entry.crop}|${entry.unit}`; totals[key] = round((totals[key] || 0) + entry.value, 3); }
    return { title: `Harvest record ${period.label}`, content: `${head("Harvest record")}Period: ${period.from} to ${period.to}\n\n${table([["Date", "Crop", "Amount", "Field"], ...entries.map(entry => [entry.day, entry.crop, unitLabel(entry.value, entry.unit === "egg" ? "piece" : entry.unit), entry.place || ""])], [12, 14, 12])}\n\n${line()}\nTOTALS\n${Object.entries(totals).map(([key, value]) => { const [crop, unit] = key.split("|"); return `  ${pad(crop, 14)} ${unitLabel(value, unit === "egg" ? "piece" : unit)}`; }).join("\n")}${foot}` };
  }
  if (kind === "inventory") {
    const stock = await ctx.store.list({ ...scope, collection: "stock" }); if (!stock.length) return null;
    return { title: "Inventory list", content: `${head("Inventory list")}${table([["Item", "Kind", "Quantity", "Notes"], ...stock.slice().reverse().map(item => [item.data.name, item.data.category, unitLabel(item.data.qty, item.data.unit), [item.data.low !== undefined && item.data.low !== null ? `low level ${unitLabel(item.data.low, item.data.unit)}` : "", item.data.expiry ? `expires ${item.data.expiry}` : ""].filter(Boolean).join(", ")])], [20, 12, 14])}${foot}` };
  }
  if (kind === "livestock") {
    const animals = (await ctx.store.list({ ...scope, collection: "animal" })); if (!animals.length) return null;
    const events = await ctx.store.list({ ...scope, collection: "animal_event" });
    return { title: "Livestock register", content: `${head("Livestock register")}${table([["Tag", "Kind", "Sex", "Born", "Status", "Last recorded"], ...animals.slice().reverse().map(animal => { const last = events.find(event => event.data.animal === animal.data.tag); return [animal.data.tag, animal.data.species || "", animal.data.sex || "", animal.data.born || "", animal.data.status || "active", last ? `${last.data.type} ${last.data.day}` : ""]; })], [16, 10, 8, 12, 10])}${foot}` };
  }
  if (kind === "tasks") {
    const tasks = (await ctx.store.list({ ...scope, collection: "task" })).filter(task => task.data.status !== "done").sort((a, b) => (a.data.due || "9999").localeCompare(b.data.due || "9999")); if (!tasks.length) return null;
    return { title: "Task list", content: `${head("Task list")}${table([["No.", "Job", "Who", "Due"], ...tasks.map(task => [task.number, task.data.title, task.data.assignee || "", task.data.due || ""])], [5, 34, 14])}${foot}` };
  }
  if (kind === "coop") {
    const c = (await ctx.store.list({ ...scope, collection: "coop" }))[0]; const members = await ctx.store.list({ ...scope, collection: "member" }); if (!members.length) return null;
    const pays = (await ctx.store.list({ ...scope, collection: "coop_payment" })).filter(pay => pay.data.day >= period.from && pay.data.day <= period.to);
    return { title: `Cooperative statement ${period.label}`, content: `${head(`${c?.data.name || "Cooperative"} statement`)}Period: ${period.from} to ${period.to}\n\n${table([["Member", "Dues paid", "Contributions", "Paid out"], ...members.map(member => { const mine = pays.filter(pay => pay.data.member === member.data.name); const total = kind2 => formatMoney(round(mine.filter(pay => pay.data.kind === kind2).reduce((s, pay) => s + pay.data.amount, 0)), c?.data.currency || ""); return [member.data.name, total("dues"), total("contribution"), total("payout")]; })], [22, 14, 16])}${foot}` };
  }
  return null;
}

// A receipt for a party: their delivered orders and sales, or one order.
async function receipt(ctx, who, orderNumber) {
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const parties = await ctx.store.list({ ...scope, collection: "party" }); const found = who ? findParty(parties, who) : null; const wanted = (found?.party?.data.name || who || "").toLowerCase(); const same = name => Boolean(wanted) && String(name || "").toLowerCase() === wanted;
  const orders = (await ctx.store.list({ ...scope, collection: "order" })).filter(order => order.data.kind === "sale" && order.data.status === "done" && (orderNumber ? order.number === orderNumber : same(order.data.party)));
  const sales = orderNumber ? [] : (await ctx.store.list({ ...scope, collection: "money" })).filter(record => record.data.type === "income" && same(record.data.party) && !String(record.data.note || "").startsWith("order "));
  // Found live (business-ledger audit): this used to require record.data.qty
  // to build a line at all -- a sale recorded without a parseable quantity
  // ("I sold milk to Amina for 500") has qty:null (money.js's "selling"
  // handler), so it was silently dropped from both the line items and the
  // total. The receipt is about money received, not quantity; a real,
  // recorded income line must never be invisible on the buyer's own receipt.
  const lines = [...orders.map(order => ({ day: order.data.doneOn || order.data.day, what: `${unitLabel(order.data.qty, order.data.unit)} of ${order.data.item}`, amount: round((order.data.price || 0) * order.data.qty), currency: order.data.currency })), ...sales.map(record => ({ day: record.data.day, what: record.data.qty ? `${unitLabel(record.data.qty, record.data.unit)} of ${record.data.item}` : record.data.item, amount: record.data.amount, currency: record.data.currency }))];
  if (!lines.length) return null;
  const buyer = orders[0]?.data.party || found?.party?.data.name || who || "Buyer"; const cur = lines[0].currency; const total = round(lines.reduce((s, item) => s + item.amount, 0));
  const farm = (await ctx.store.list({ ...scope, collection: "farm" }))[0]; const owner = (ctx.nameOf ? await ctx.nameOf({ tenantId: ctx.tenantId, userId: ctx.userId }).catch(() => "") : "") || "";
  return { title: `Receipt - ${buyer}`, content: `RECEIPT\n${farm?.data.farmName || owner || "Farm"}\nDate: ${ctx.today}\nReceived from: ${buyer}\n${line()}\n${table([["Date", "Item", "Amount"], ...lines.map(item => [item.day, item.what, formatMoney(item.amount, item.currency || cur)])], [12, 30])}\n${line()}\nTOTAL: ${formatMoney(total, cur)}\n\nThank you.\n\nPrepared by Kyro from the sales you recorded.` };
}

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); let m;
  if ((m = /^(?:please )?(?:print|make|create|prepare|generate|give me|export|produce)(?: me)?(?: a| an| my| the)? (?:printable )?(?:buyer )?receipt(?: for| to| from) (.+?)(?: (?:as|in) (?:a )?(?:pdf|word|docx).*)?$/i.exec(t))) {
    const orderNo = /^(?:order )?#?(\d{1,5})$/i.exec(clean(m[1].replace(/^order\s+/i, "")));
    const made = await receipt(ctx, orderNo ? "" : m[1].replace(/^(?:my |the )/i, ""), orderNo ? Number(orderNo[1]) : 0);
    return made ? { report: { ...made, format: formatOf(t) } } : `I have no delivered orders or recorded sales for ${clean(m[1])} to put on a receipt. Record a sale ("sold 200 kg maize to Amina for 9000") or deliver an order first.`;
  }
  if ((m = /^(?:please )?(?:print|make|create|prepare|generate|give me|export|produce)(?: me)?(?: a| an| my| the| our)? (?:printable )?(.+?)(?: (?:as|in) (?:a )?(?:pdf|word|docx)(?: file)?)?$/i.exec(t)) && /\b(?:report|summary|record|list|register|statement|overview)\b/i.test(t) && /^(?:please )?(?:print|make|create|prepare|generate|give me|export|produce)/i.test(t)) {
    const what = m[1]; const kind = REPORTS.find(entry => entry.pattern.test(what));
    if (!kind) return null;
    // Only the farmer's own records: "make a summary of this article" or "a list of tasks for my trip" is not a farm report, and someone who keeps
    // no farm records is left to normal planning.
    if (!/\b(?:my|our|farm)\b/i.test(t) || /\b(?:of|about)\b/i.test(t) || (kind.id === "summary" && !/\bfarm\b/i.test(t)) || !(await ctx.hasFarmData())) return null;
    const made = await build(ctx, kind.id, t);
    return made ? { report: { ...made, format: formatOf(t) } } : `I have nothing recorded yet for your ${kind.label}${/expense|income|profit|statement|harvest|coop/.test(kind.id) ? " in that period" : ""}, so there is nothing to print.`;
  }
  return null;
}

module.exports = Object.freeze({ handle, build, receipt, REPORTS });
