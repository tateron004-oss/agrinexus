"use strict";

const { clean, parseMoney, formatMoney, parseQuantity, parsePricePer, unitLabel, round, num, CURRENCY_WORD } = require("./parse.js");
const { nameKey } = require("./fields.js");
const { addDays } = require("../personal/dates.js");

// Loan, budget and break-even arithmetic. This is only sums on the numbers the farmer gives (and, for "can I afford it", the money they
// have recorded): it does not know the lender's real terms, fees or penalties, and it says it is not financial advice every time.
const NOTE = "This is only the arithmetic on the numbers you gave; a lender's real terms, fees and penalties can differ, so ask them for the full schedule.";
const CUR = `(?:${CURRENCY_WORD}|[$€£₦])`;
const AMT = "(\\d[\\d,]*(?:\\.\\d+)?)";

// Monthly payment on a reducing-balance loan: P*r / (1 - (1+r)^-n).
function payment(principal, monthlyRate, months) {
  if (monthlyRate === 0) return principal / months;
  return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
}

function readLoan(text) {
  const t = clean(text);
  const p = new RegExp(`(?:loan|borrow(?:ing|ed)?|credit|advance)\\s+(?:of |for )?(?:about |around )?(?:(${CUR})\\s*)?${AMT}\\s*(${CURRENCY_WORD})?`, "i").exec(t);
  if (!p) return null;
  const money = parseMoney(`${p[1] || ""} ${p[2]} ${p[3] || ""}`) || { amount: num(p[2]), currency: "" };
  const r = /(\d+(?:\.\d+)?)\s*(?:%|percent|per ?cent)(?:\s*(?:per|a|each|every)\s*(month|monthly|year|yearly|annum|yr|annual))?/i.exec(t);
  const term = /(?:over|for|in|within|repay(?:ed)? (?:in|over))\s+(\d+(?:\.\d+)?)\s*(months?|years?|yrs?)/i.exec(t);
  if (!r || !term) return { principal: money.amount, currency: money.currency, missing: !r ? "rate" : "term" };
  const monthlyRate = /month/i.test(r[2] || "") ? Number(r[1]) / 100 : Number(r[1]) / 100 / 12;
  const months = Math.round(/^y/i.test(term[2]) ? Number(term[1]) * 12 : Number(term[1]));
  return { principal: money.amount, currency: money.currency, monthlyRate, months, rateText: `${r[1]}% per ${/month/i.test(r[2] || "") ? "month" : "year"}`, flat: /\bflat\b/i.test(t) };
}
function loanNumbers(loan) {
  if (loan.flat) { const years = loan.months / 12; const interest = loan.principal * (loan.monthlyRate * 12) * years; return { monthly: (loan.principal + interest) / loan.months, total: loan.principal + interest, interest }; }
  const monthly = payment(loan.principal, loan.monthlyRate, loan.months);
  return { monthly, total: monthly * loan.months, interest: monthly * loan.months - loan.principal };
}
const badLoan = loan => !(loan.principal > 0 && loan.principal <= 1e12) || !(loan.monthlyRate >= 0 && loan.monthlyRate * 12 <= 2) || !(loan.months >= 1 && loan.months <= 360);

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;

  if (/\b(?:loan|borrow(?:ing|ed)?|credit)\b/i.test(t) && /^(?:please )?(?:plan|calculate|work out|figure out|what(?:'s| is| would be)|how much (?:is|would)|can i afford|could i afford|would i afford|is it (?:ok|okay|possible) to (?:take|borrow)|loan|i (?:want|need|plan) to (?:take|borrow))/i.test(t) && /\d/.test(t)) {
    const loan = readLoan(t);
    if (!loan) return null;
    if (loan.missing) return `I have the loan amount (${formatMoney(loan.principal, loan.currency)}), but I need the ${loan.missing === "rate" ? 'interest rate, like "at 12%" (say "per month" if it is monthly)' : 'time, like "over 12 months" or "over 2 years"'}.`;
    if (badLoan(loan)) return "Those numbers don't look right (an amount, a rate under 200%, and a term of 1 to 360 months), so I haven't calculated anything.";
    const n = loanNumbers(loan);
    const line = `A ${formatMoney(loan.principal, loan.currency)} loan at ${loan.rateText} over ${loan.months} months${loan.flat ? " (flat rate)" : ""}: about ${formatMoney(round(n.monthly, 0), loan.currency)} a month, ${formatMoney(round(n.total, 0), loan.currency)} paid back in all, of which ${formatMoney(round(n.interest, 0), loan.currency)} is interest.`;
    if (!/\bafford\b|\bok to (?:take|borrow)\b/i.test(t)) return `${line} ${NOTE}`;
    const rows = (await ctx.store.list({ ...scope, collection: "money" })).filter(record => record.data.day >= addDays(ctx.today, -180) && record.data.day <= ctx.today);
    const currencies = new Set(rows.map(record => record.data.currency || ""));
    if (!rows.length) return `${line} To tell you whether it fits, I need your income and spending records; say "spent 5000 on seed" and "sold 200 kg of maize for 9000" as they happen. ${NOTE}`;
    if (currencies.size > 1) return `${line} Your records use more than one currency, so I can't compare them. ${NOTE}`;
    const profit = rows.reduce((sum, record) => sum + (record.data.type === "income" ? record.data.amount : -record.data.amount), 0);
    const first = rows.reduce((min, record) => (record.data.day < min ? record.data.day : min), ctx.today);
    const months = Math.max(1, Math.min(6, Math.round((Date.parse(ctx.today) - Date.parse(first)) / (30.4 * 86400000)) || 1));
    const perMonth = profit / months; const cur = rows[0].data.currency;
    if (perMonth <= 0) return `${line} Your recorded profit over the last ${months} month${months === 1 ? "" : "s"} was ${formatMoney(round(profit, 0), cur)}, so nothing is left over for a payment right now. This compares only what you recorded; it isn't financial advice.`;
    const share = Math.round((n.monthly / perMonth) * 100);
    return `${line} Your recorded profit averaged about ${formatMoney(round(perMonth, 0), cur)} a month over ${months} month${months === 1 ? "" : "s"}, so the payment would take about ${share}% of it${share > 60 ? " — that is a lot, and farm income can vary a great deal with the seasons" : ""}. This compares only what you recorded; it isn't financial advice.`;
  }

  if ((m = /^(?:please )?(?:what(?:'s| is)|work out|calculate|find) (?:my |the )?break[- ]?even(?: price| point)?(?: (?:per|for a|for each) (?:kg|bag|litre|unit))?(?:,|:| if| when| for| on)?\s*(.*)$/i.exec(t)) || (m = /^break[- ]?even(?: price| point)?(?: for| on| if| when)?\s*[:,-]?\s*(.*)$/i.exec(t)) || (m = /^(?:what|which) price (?:per \w+ )?do i need to break even(?:,|:| if| when| for| on)?\s*(.*)$/i.exec(t))) {
    const rest = clean(m[1] || t);
    const fields = await ctx.store.list({ ...scope, collection: "field" });
    const field = fields.find(item => nameKey(item.data.name) && new RegExp(`\\b${nameKey(item.data.name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(rest));
    let cost = null; let currency = ""; let expected = parseQuantity(rest);
    const costMatch = /(?:costs?|spent|spend|expenses?|budget|invest(?:ed|ment)?|paid)\s*(?:of |is |was |:)?\s*(?:about )?((?:[$€£₦]|(?:ksh|kes|tsh|ugx|etb|ngn|ghs)\s*)?\d[\d,]*(?:\.\d+)?(?:\s*(?:ksh|kes|tsh|ugx|etb|ngn|ghs|shillings?|birr|naira|dollars?))?)/i.exec(rest);
    if (costMatch) { const c = parseMoney(`for ${costMatch[1]}`) || { amount: num(costMatch[1].replace(/[^\d.]/g, "")), currency: "" }; cost = c.amount; currency = c.currency; }
    if (field && cost === null) {
      const rows = (await ctx.store.list({ ...scope, collection: "money" })).filter(record => record.data.type === "expense" && record.data.field === field.data.name && record.data.day >= `${ctx.today.slice(0, 4)}-01-01`);
      if (rows.length) { cost = round(rows.reduce((sum, record) => sum + record.data.amount, 0)); currency = rows[0].data.currency; }
    }
    if (field && !expected && field.data.expectedYield) expected = { value: field.data.expectedYield.value, unit: field.data.expectedYield.unit };
    if (!(cost > 0) || !expected) return `To work out a break-even price I need what it costs and what you expect to harvest, like "break even: costs 60000, expected 800 kg"${field ? `. For ${field.data.name} I ${cost === null ? "have no spending recorded yet" : "need an expected yield"} — say "expect 800 kg from ${field.data.name}".` : "."}`;
    const price = parsePricePer(rest); const be = cost / expected.value;
    const base = `To cover ${formatMoney(cost, currency)} of costs from ${unitLabel(expected.value, expected.unit)}${field ? ` (${field.data.name})` : ""}, you need to sell at about ${formatMoney(round(be, 2), currency)} per ${expected.unit}.`;
    if (!price) return `${base} Tell me a selling price and I'll work out the profit.`;
    // Found live (money-math audit): a price stated "per bag" was multiplied
    // straight against a yield expressed in kg (or vice versa) with no unit
    // check, fabricating a nonsense profit/loss figure a farmer could
    // genuinely be misled by -- executed proof: "expected 800 kg, at 5000
    // per bag" reported a 6567% profit. Ask for a matching unit instead of
    // guessing at a conversion Kyro cannot know (bag sizes vary by crop and
    // region).
    if (price.per !== expected.unit) return `${base} Tell me the selling price per ${expected.unit} (not per ${price.per}) and I'll work out the profit -- a bag/crate isn't a fixed weight, so I can't convert it myself.`;
    const revenue = price.amount * expected.value;
    return `${base} At ${formatMoney(price.amount, price.currency || currency)} per ${price.per}, you'd take in ${formatMoney(round(revenue, 0), price.currency || currency)}, a ${revenue >= cost ? "profit" : "loss"} of ${formatMoney(round(Math.abs(revenue - cost), 0), price.currency || currency)} (${Math.round(((revenue - cost) / cost) * 100)}% on cost). Prices and yields change, so treat this as a plan, not a promise.`;
  }

  if ((m = /^(?:please )?(?:plan|make|work out|calculate|do) (?:me )?(?:a |my |the )?(?:farm |crop |season )?budget(?: for (.+?))?\s*[:,-]\s*(.+)$/i.exec(t))) {
    const body = m[2]; const yieldQty = parseQuantity(/(?:expect(?:ed)?|harvest|yield|produce)\s*(?:about )?(\d[\d,.]*\s*[a-z]+)/i.exec(body)?.[1] || ""); const price = parsePricePer(body);
    const costsPart = body.replace(/(?:expect(?:ed)?|harvest|yield|produce).*$/i, "");
    const items = [...costsPart.matchAll(new RegExp(`([a-z][a-z ]{1,24}?)\\s*(?:[:=]|of|is)?\\s*(?:${CUR}\\s*)?${AMT}(?![\\d,.]*\\s*(?:kg|acres?|ha|bags?|%|percent))`, "gi"))].map(item => ({ name: clean(item[1]).toLowerCase().replace(/^(?:and|then|plus|for)\s+/, ""), amount: num(item[2]) })).filter(item => item.name && item.amount > 0);
    if (!items.length) return 'List your costs like "plan a budget: seed 5000, fertilizer 8000, labour 12000, expect 800 kg at 60 per kg".';
    const cost = items.reduce((sum, item) => sum + item.amount, 0); const cur = parseMoney(body)?.currency || "";
    const lines = [`Budget${m[1] ? ` for ${clean(m[1])}` : ""}: ${items.map(item => `${item.name} ${formatMoney(item.amount, cur)}`).join(", ")} — ${formatMoney(cost, cur)} in all.`];
    if (yieldQty) lines.push(`Expecting ${unitLabel(yieldQty.value, yieldQty.unit)}, you need to sell at about ${formatMoney(round(cost / yieldQty.value, 2), cur)} per ${yieldQty.unit} to break even.`);
    // Same unit-mismatch guard as the break-even branch above: a price "per
    // bag" multiplied against a yield in kg (or vice versa) fabricates a
    // revenue figure with no real meaning. Skip the extra line rather than
    // show a wrong number -- the break-even-per-unit line just above
    // already gives useful information regardless.
    if (yieldQty && price && price.per === yieldQty.unit) { const revenue = yieldQty.value * price.amount; lines.push(`At ${formatMoney(price.amount, price.currency || cur)} per ${price.per} that is ${formatMoney(round(revenue, 0), price.currency || cur)}, a ${revenue >= cost ? "profit" : "loss"} of ${formatMoney(round(Math.abs(revenue - cost), 0), price.currency || cur)}.`); }
    lines.push("A plan, not a promise: weather, prices and pests move every number.");
    return lines.join(" ");
  }
  return null;
}

module.exports = Object.freeze({ handle, payment, readLoan, loanNumbers });
