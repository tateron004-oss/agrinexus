"use strict";

const { clean, round, formatMoney, plural } = require("./parse.js");
const { nameKey } = require("./fields.js");
const money = require("./money.js");
const { periodSw, moneyShown } = require("../i18n/swahili-words.js");
const { extractPeriod } = require("../personal/dates.js");

// "my summary for this month", "muhtasari wa mwezi": one plain answer for a shop or a farm, built only from what was recorded.
//   income, costs, profit (for the month); who owes you and what you owe (right now); loans you owe and your chama savings (right now).
// Everything is totalled PER CURRENCY and never added across currencies. Loans and a chama are not income or costs, so they are shown on their own lines and never touch the profit.
const scopeOf = ctx => ({ tenantId: ctx.tenantId, userId: ctx.userId });
const MONTHS = "(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sept?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)";
const owedToYou = record => record.data.type === "income" && record.data.unpaid;
const youOwe = record => record.data.type === "expense" && record.data.unpaid && record.data.owing > 0 && !record.data.loan;
const isLoan = record => record.data.loan === true && record.data.type === "expense" && record.data.unpaid && record.data.owing > 0;
const isChama = record => record.data.type === "saving" && record.data.category === "chama";
const byField = (rows, field = "amount") => rows.reduce((acc, record) => { const key = money.currencyKey(rows, record.data.currency); acc[key] = round((acc[key] || 0) + record.data[field]); return acc; }, {});
const people = (rows, field, who) => { const by = {}; for (const record of rows) (by[record.data.party || who] = by[record.data.party || who] || []).push(record); return Object.entries(by).map(([name, list]) => [name, byField(list, field)]); };

// The period asked for, as English words the date reader knows; "monthly" is this month and "weekly" this week.
function periodOf(lower, today) {
  const named = new RegExp(`\\b(?:for|in|of)\\s+${MONTHS}(?:\\s+\\d{4})?\\b`, "i").exec(lower);
  if (named) return extractPeriod(named[0], today);
  if (/\blast month\b/.test(lower)) return extractPeriod("last month", today);
  if (/\b(?:this week|weekly)\b/.test(lower)) return extractPeriod("this week", today);
  if (/\blast week\b/.test(lower)) return extractPeriod("last week", today);
  if (/\btoday\b|\bdaily\b/.test(lower)) return extractPeriod("today", today);
  if (/\byesterday\b/.test(lower)) return extractPeriod("yesterday", today);
  if (/\b(?:this year|yearly|annual)\b/.test(lower)) return extractPeriod("this year", today);
  return extractPeriod("this month", today);
}
function askedEnglish(lower) {
  const t = lower.replace(/[?!.]+$/g, "").replace(/\b(what|how)(?:'s|’s)\b/g, "$1 is").replace(/^(?:please|kyro|hey|ok|okay)[, ]+/, "");
  const period = `(?:this month|last month|this week|last week|today|yesterday|this year|(?:for|in|of) ${MONTHS}(?: \\d{4})?)`;
  const lead = "(?:(?:give me|show me|tell me|let me see|send me|read me|get me|show|read|i want|i need|can i (?:see|get|have)|what is|what are|how is|how was)\\s+)?(?:me\\s+)?";
  const noun = "(?:(?:my|our|the|a)\\s+)?(?:(?:full|whole|simple|short|quick|business|shop|duka|stall|money|financial|farm|monthly|weekly|daily|yearly|month|week)\\s+)*(?:summary|report|overview|statement)";
  const about = "(?:\\s+(?:of|for|on)\\s+(?:my |our |the )?(?:business|shop|duka|stall|money|books|accounts?|sales|month|week))?";
  const when = `(?:\\s+${period})?`;
  const whenFor = `(?:\\s+(?:for|of|in)\\s+(?:${period.slice(3, -1)}))?`;
  return new RegExp(`^${lead}${noun}${about}${when}${whenFor}$`).test(t)
    || /^how (?:did|have) (?:i|we) (?:do|done|go|gone|fare|fared)(?: (?:this month|last month|this week|last week|today|yesterday|this year))?$/.test(t) || /^how is (?:my |our |the )?(?:business|shop|duka|stall)(?: doing)?(?: (?:this month|this week|today))?$/.test(t)
    || /^how much (?:did|have) (?:i|we) (?:make|made|earn|earned) and (?:spend|spent)(?: (?:this month|last month|this week|last week|today|yesterday|this year))?$/.test(t);
}
function askedSwahili(lower) {
  const t = lower.replace(/[?!.]+$/g, "");
  return /^(?:(?:nipe|nionyeshe|onyesha|niambie|toa|soma|nataka)\s+)?(?:muhtasari|hesabu)(?:\s+(?:wangu|wetu))?(?:\s+(?:wa|ya))?\s*(?:biashara|pesa|duka|fedha)?\s*(?:(?:wa|ya)\s+)?(?:(?:mwezi(?: huu| uliopita)?|wiki(?: hii| iliyopita)?|leo|jana|mwaka(?: huu)?|siku))?$/.test(t) && /\b(?:muhtasari|hesabu)\b/.test(t) && !/\b(?:shamba|ghala|ushirika)\b/.test(t);
}

const EN = {
  head: label => `Summary for ${label}:`,
  income: (total, n) => `Income ${total} (${plural(n, "entry", "entries")}).`, costs: (total, n) => `Costs ${total} (${plural(n, "entry", "entries")}).`,
  profit: (gain, text) => (gain ? `Profit ${text}.` : `Loss ${text}.`),
  noneThisPeriod: label => `I have no income or costs recorded for ${label}.`,
  owed: (lines, total) => `Owed to you: ${lines}${lines.includes(";") ? ` (total ${total})` : ""}.`, owedNone: "Nobody owes you anything that I know of.",
  owe: (lines, total) => `You owe: ${lines}${lines.includes(";") ? ` (total ${total})` : ""}.`, oweNone: "You owe no supplier anything that I know of.",
  loans: total => `Loans you owe: ${total}.`, chama: (put, got) => `Chama: you have put in ${put}${got ? ` and received ${got}` : ""}.`,
  note: "This is only what you recorded. Loans and chama savings are not counted as income or costs."
};
const SW = {
  head: label => `Muhtasari wa ${label}:`,
  income: (total, n) => `Mapato ${total} (maingizo ${n}).`, costs: (total, n) => `Matumizi ${total} (maingizo ${n}).`,
  profit: (gain, text) => (gain ? `Faida ${text}.` : `Hasara ${text}.`),
  noneThisPeriod: label => `Sina mapato wala matumizi yaliyorekodiwa ${label}.`,
  owed: (lines, total) => `Wanaokudai: ${lines}${lines.includes(";") ? ` (jumla ${total})` : ""}.`, owedNone: "Hakuna anayekudai ninayemjua.",
  owe: (lines, total) => `Unadaiwa na: ${lines}${lines.includes(";") ? ` (jumla ${total})` : ""}.`, oweNone: "Huna deni kwa wasambazaji ninalolijua.",
  loans: total => `Mikopo unayodaiwa: ${total}.`, chama: (put, got) => `Chama: umechangia ${put}${got ? ` na umepokea ${got}` : ""}.`,
  note: "Haya ni yale uliyorekodi tu. Mikopo na akiba ya chama havihesabiwi kama mapato au matumizi."
};

async function summary(ctx, language, period) {
  const sw = language === "sw"; const say = sw ? SW : EN;
  const all = await ctx.store.list({ ...scopeOf(ctx), collection: "money" });
  if (!all.length) return null;
  const rows = all.filter(record => record.data.day >= period.from && record.data.day <= period.to);
  const label = sw ? period.swahili : period.label;
  const show = totals => { const entries = Object.entries(totals); return entries.length ? entries.map(([currency, amount]) => (sw ? moneyShown(amount, currency) : formatMoney(amount, currency))).join(sw ? " na " : " and ") : "0"; };
  const lines = sw ? [] : [say.head(label)];
  const incomeRows = rows.filter(record => record.data.type === "income" && money.isCounted(record)); const costRows = rows.filter(record => record.data.type === "expense" && money.isCounted(record));
  if (!incomeRows.length && !costRows.length) lines.push(say.noneThisPeriod(label));
  else {
    const profit = money.profitOf(rows); const entries = Object.entries(profit);
    const gain = entries.every(([, value]) => value >= 0);
    if (sw) lines.push(`${label[0].toUpperCase()}${label.slice(1)}: mapato ${show(money.sum(rows, "income"))}, matumizi ${show(money.sum(rows, "expense"))}, kwa hivyo ${gain ? "faida ya" : "hasara ya"} ${show(Object.fromEntries(entries.map(([currency, value]) => [currency, Math.abs(value)])))}.`);
    else lines.push(say.income(show(money.sum(rows, "income")), incomeRows.length), say.costs(show(money.sum(rows, "expense")), costRows.length));
    // per currency: a profit in one money and a loss in another are each said as they are
    if (!sw) lines.push(entries.length > 1 && !gain && entries.some(([, value]) => value >= 0) ? entries.map(([currency, value]) => say.profit(value >= 0, show({ [currency]: Math.abs(value) }))).join(" ") : say.profit(gain, show(Object.fromEntries(entries.map(([currency, value]) => [currency, Math.abs(value)])))));
  }
  const owed = all.filter(owedToYou); const owe = all.filter(youOwe); const loans = all.filter(isLoan); const chama = all.filter(isChama);
  const names = (list, field, who) => people(list, field, who).map(([name, totals]) => `${name} ${show(totals)}`).join("; ");
  lines.push(owed.length ? say.owed(names(owed, "amount", sw ? "Mtu fulani" : "Someone"), show(byField(owed))) : say.owedNone);
  lines.push(owe.length ? say.owe(names(owe, "owing", sw ? "Mtu fulani" : "Someone"), show(byField(owe, "owing"))) : say.oweNone);
  if (loans.length) lines.push(say.loans(show(byField(loans, "owing"))));
  if (chama.length) lines.push(say.chama(show(byField(chama.filter(record => record.data.kind !== "payout"))), chama.some(record => record.data.kind === "payout") ? show(byField(chama.filter(record => record.data.kind === "payout"))) : ""));
  lines.push(say.note);
  return lines.join(" ");
}

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!]+$/g, "").replace(/\?+$/g, ""); const lower = t.toLowerCase();
  if (!t || t.length > 120) return null;
  const sw = askedSwahili(lower);
  if (!sw && !askedEnglish(lower)) return null;
  // "muhtasari wa mwezi" is this month, "muhtasari wa wiki" this week
  const said = sw ? lower.replace(/\bwiki\b(?! (?:hii|iliyopita))/, "wiki hii").replace(/\bmwezi\b(?! (?:huu|uliopita))/, "mwezi huu") : lower;
  const swPeriod = sw ? periodSw(said, ctx.today, "this month") : null;
  const period = sw ? swPeriod : periodOf(lower, ctx.today);
  if (!period) return null;
  return summary(ctx, sw ? "sw" : "en", sw ? { ...period, swahili: swPeriod.label } : period);
}

module.exports = Object.freeze({ handle, summary, askedEnglish, askedSwahili, nameKey });
