"use strict";

const { clean, parseQuantity, parseMoney, parsePricePer, parseEachPrice, parseCount, whenOf, formatMoney, unitLabel, titleCase, round, plural } = require("./parse.js");
const { extractPeriod, describeDay, addDays, weekdayOf } = require("../personal/dates.js");
const MONTH_LABELS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const { nameKey } = require("./fields.js");
const { findAnimal } = require("./livestock.js");
const { addStock, categoryOf, keyOf, findItems, lowNote } = require("./inventory.js");

// The farm's money: what was spent, what was earned, and the profit, by month, season, field or kind of cost. Amounts are exactly what the
// farmer says; Kyro adds nothing and estimates nothing. A sale takes the goods out of stock when they are in stock, and a purchase of
// seed, fertiliser, chemicals, feed or tools puts them in, and Kyro says so each time so nothing changes silently.
const EXPENSE_CATEGORIES = [["seed", /\b(?:seeds?|seedlings?)\b/i], ["fertiliser", /\b(?:fertili[sz]ers?|npk|urea|dap|manure|lime)\b/i], ["chemicals", /\b(?:pesticides?|herbicides?|fungicides?|insecticides?|chemicals?|spray)\b/i], ["feed", /\b(?:feed|hay|silage|bran|fodder|mineral|pellets?|mash|dairy meal|calf meal|pig meal|layers? meal)\b/i],
  ["labour", /\b(?:labou?r|wages?|worker|workers|salary|casual|weeding|ploughing|harvesting help)\b/i], ["transport", /\b(?:transport|fuel|diesel|petrol|matatu|lorry|truck|boda|delivery|fare)\b/i], ["veterinary", /\b(?:vet|veterinary|vaccine|vaccination|drugs?|medicine|treatment|dip|deworm)/i],
  ["equipment", /\b(?:tools?|repair|equipment|tractor|hoe|panga|pump|sprayer|machine|spare)/i], ["water", /\b(?:water|irrigation|borehole|pipes?)\b/i], ["rent", /\b(?:rent|lease)\b/i],
  // A shop's own costs. They come LAST so a farm word (seed, feed, fuel...) still wins: "stock" is what a shopkeeper buys to sell again, "utilities" is electricity and the like.
  ["stock", /\b(?:stock|inventory|goods|merchandise|wholesale|restock(?:ing)?|supplies)\b/i], ["utilities", /\b(?:electricity|power|kplc|tokens?|internet|wifi|airtime|bundles?|licen[sc]es?|permits?)\b/i]];
const expenseCategory = text => (EXPENSE_CATEGORIES.find(([, pattern]) => pattern.test(text)) || ["other"])[0];
const ON_CREDIT = /\b(?:on credit|on account|on loan|(?:will|to|promised to|promises to|said (?:he|she|they) will) pay(?: me)? (?:later|next|on|after|in|tomorrow|at the end)|pay(?:s|ing)? (?:me )?(?:later|next week|next month|tomorrow|on friday)|has not paid|hasn't paid|have not paid|haven't paid|yet to pay|not yet paid|owes? me|unpaid|pay(?:ment)? (?:is )?(?:later|pending))\b/i;
// Said about something BOUGHT: "on credit", "will pay later", "I owe him", "not paid yet".
const PURCHASE_ON_CREDIT = /\b(?:on credit|on account|on loan|(?:will|to|promised to|i(?:'ll| will)|we(?:'ll| will)) pay(?: him| her| them| it)? (?:later|next|on|after|in|tomorrow|at the end)|pay(?:ing)? (?:later|next week|next month|tomorrow|on friday)|(?:have not|haven't|not yet|yet to) paid|unpaid|i owe|we owe|owing)\b/i;
const STOCKED = new Set(["seed", "fertiliser", "chemicals", "feed", "equipment"]);
const stockCategory = { seed: "seed", fertiliser: "fertiliser", chemicals: "chemical", feed: "feed", equipment: "tool" };

function incomeCategory(text) {
  if (/\b(?:milk)\b/i.test(text)) return "milk"; if (/\b(?:eggs?)\b/i.test(text)) return "eggs";
  if (/\b(?:cows?|cattle|bulls?|heifers?|calf|goats?|sheep|pigs?|chickens?|hens?|rabbits?|animals?|livestock)\b/i.test(text)) return "livestock";
  return /\b(?:maize|beans?|cassava|rice|wheat|sorghum|millet|tomato(?:es)?|potato(?:es)?|cabbage|kale|onions?|bananas?|coffee|tea|groundnuts?|vegetables?|fruit|crops?|harvest|grain|sukuma(?: wiki)?|spinach|managu|saget|terere|cowpeas?|lettuce|coriander|dhania|capsicum|carrots?|pumpkins?|watermelons?|mangoe?s?|avocados?|passion fruits?|pineapples?|sweet potatoes?|arrow ?roots?|sugar ?cane|sunflowers?|peas|green grams?|pigeon peas)\b/i.test(text) ? "crops" : "other";
}

// An amount said with no currency takes the one the person has always used. If they have used more than one, nothing is guessed: it is recorded with no currency
// (a Kenyan farmer's "800" must not become UGX because the last entry happened to be in UGX).
// "shillings" on its own (or "bob", or "5000/=") does not say WHICH shillings, so it never counts as a currency of its own: it takes the one the person has always used. Found by the audit:
// a farmer who said "KSh 5000" once and "9000 shillings" next had two separate currency totals, and "profit" came out as two numbers.
const isSpecific = currency => Boolean(currency) && currency !== "shillings";
// Only the shilling currencies can be what a bare "shillings" means (never dollars): so "9000 shillings" next to "KSh 5000" is the same money, but next to "$20" it is not.
const SHILLING_KINDS = new Set(["KSh", "TSh", "UGX"]);
const specificCurrency = (records, among = null) => { const used = new Set(records.map(record => record.data.currency).filter(currency => isSpecific(currency) && (!among || among.has(currency)))); return used.size === 1 ? [...used][0] : ""; };
// (a dollar, euro or pound used once is a foreign sale, not the money the person normally keeps their books in)
const defaultCurrency = records => { const one = specificCurrency(records); return /^[$€£]$/.test(one) ? "" : one; };
// The bucket a record is totalled in: its own currency, or (when it names none, or only "shillings") the one the others use.
// An amount stored with no currency stays in its own (unlabelled) total: a later "$20" must never relabel what was said before it. (New amounts are labelled when they are saved, see recordMoney.)
const currencyKey = (records, currency) => {
  if (isSpecific(currency)) return currency;
  if (currency === "shillings") return specificCurrency(records, SHILLING_KINDS) || "shillings";
  return "";
};

// Not everything someone buys or sells is farm business. A sale or purchase that matches no farm word is only recorded for a person who already
// keeps farm records; for anyone else it is left to normal planning ("I sold my old car").
const NOT_FARM = Symbol("not-farm");
const MAX_AMOUNT = 100000000;

async function recordMoney(ctx, entry) {
  // `ctx.anyGoods` is set by the everyday-bookkeeping module (books.js): a shopkeeper's shoes, soap or airtime are business too, so nobody needs farm records first.
  if (entry.category === "other" && !ctx.anyGoods && !(await ctx.hasFarmData())) throw NOT_FARM;
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const all = await ctx.store.list({ ...scope, collection: "money" });
  if (all.length >= 5000) return { refused: "Your money records are full (five thousand entries). Ask me for a summary, then remove some." };
  // A mis-heard or mistyped extra digit would otherwise sit in every total for good. Nothing is saved; the person is asked to say it again.
  if (!(entry.amount > 0) || entry.amount > MAX_AMOUNT) return { refused: `${formatMoney(entry.amount, entry.currency)} looks wrong, so I have not recorded it. I only record amounts up to ${formatMoney(MAX_AMOUNT, entry.currency)}. Please say it again with the right amount.` };
  // The currency is labelled ONCE, when the amount is saved: as said, else the person's own money from their profile country, else the one (non-dollar) currency they have always used. Nothing stored is ever relabelled.
  const home = ctx.defaultCurrency || "";
  const currency = isSpecific(entry.currency) ? entry.currency : entry.currency === "shillings" ? (SHILLING_KINDS.has(home) ? home : "") || specificCurrency(all, SHILLING_KINDS) || "shillings" : home || defaultCurrency(all) || "";
  const record = await ctx.store.add({ ...scope, collection: "money", data: { ...entry, currency, day: entry.day || ctx.entryDay || ctx.today, ...(ctx.payment && !entry.payment ? { payment: ctx.payment } : {}) } });
  return { record, all: [record, ...all] };
}

// Money still owed to the farmer (a sale on credit) is not income yet: it is counted when it is paid.
// Household costs ("paid school fees 12000") are kept but are not the farm's, so they are not in its totals or profit.
const HOUSEHOLD = /^(?:school fees|fees|school|food|groceries|airtime|electricity|water bill|church|tithe|funeral|wedding|hospital|medical|doctor|shopping|bills?|dowry|bride price|harambee|contribution)$/i;
// A standalone debt ("John owes me 800", "I owe the supplier 5000", books.js) is not income or a cost until it is paid: the payment is what is counted, as its own entry.
const isCounted = record => !(record.data.type === "income" && record.data.unpaid) && !(record.data.type === "expense" && record.data.debt) && record.data.category !== "household";
const sum = (records, type) => records.filter(record => record.data.type === type && isCounted(record)).reduce((acc, record) => { const key = currencyKey(records, record.data.currency); acc[key] = round((acc[key] || 0) + record.data.amount); return acc; }, {});
const showTotals = totals => { const entries = Object.entries(totals); return entries.length ? entries.map(([currency, amount]) => formatMoney(amount, currency)).join(" and ") : "0"; };
const inPeriod = (record, period) => record.data.day >= period.from && record.data.day <= period.to;
function profitOf(records) {
  const income = sum(records, "income"); const spent = sum(records, "expense"); const out = {};
  for (const currency of new Set([...Object.keys(income), ...Object.keys(spent)])) out[currency] = round((income[currency] || 0) - (spent[currency] || 0));
  return out;
}
const fieldIn = (fields, text) => fields.find(field => nameKey(field.data.name) && new RegExp(`\\b${nameKey(field.data.name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(text));
const periodOf = (text, today, fallback) => extractPeriod(text, today) || extractPeriod(fallback, today);
// The times a question may name (what extractPeriod reads): "this month", "last year", "yesterday", "in September", "for March 2025", "in 2025", "in the last 10 days". Found by the audit: a question
// naming a month did not match, so it fell through to an answer that was not for that period.
const MONTHS = "(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sept?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)";
const PERIOD = `(?:so far )?this (?:week|month|year|season)|last (?:week|month|year)|today|yesterday|(?:in )?(?:the )?(?:last|past) \\d+ days|(?:in |for |during )${MONTHS}(?: \\d{4})?|(?:in |for |during )20\\d{2}`;

// Several things said in one sentence ("sold maize for 9000 and beans for 4000", "spent 5000 on seed and 3000 on labour"): each is its own entry. Found by the audit: only the first amount
// was kept and the rest was dropped without a word. A sentence is only split when EVERY part carries its own amount, so "sold maize and beans for 9000" stays one sale.
const SPLITTABLE = /^((?:i |we )?(?:sold|bought|purchased|spent|paid))\s+(.+)$/i;
function splitCompound(text) {
  const m = SPLITTABLE.exec(text);
  if (!m) return [text];
  const pieces = m[2].split(/\s*(?:,|;|\band\b|\bplus\b|\bthen\b)\s+(?=\S)/i).map(clean).filter(Boolean);
  if (pieces.length < 2 || pieces.length > 6) return [text];
  // A part that has its own verb ("bought seed for 2000", "paid the transporter 500") keeps it. It used to be given the first verb, so a purchase after a sale became "sold bought seed"
  // and was counted as income.
  const subject = /^(?:i|we) /i.test(m[1]) ? `${m[1].split(" ")[0]} ` : "";
  const sentences = pieces.map(piece => (/^(?:sold|bought|purchased|spent|paid)\b/i.test(piece) ? `${subject}${piece}` : `${m[1]} ${piece}`));
  return sentences.every(sentence => parseMoney(sentence)) ? sentences : [text];
}
const RECORDING = /^(?:i |we )?(?:sold|bought|purchased|spent|paid|received|got|earned|made)\b|^(?:income|expense)\s*[:,-]|^(?:mark )?[A-Za-z][A-Za-z' -]{1,30}? (?:has |have )?paid\b/i;
const withoutMonthSummary = reply => reply.replace(/ (?:Income|Spent) this month: [^]*$/, "");

async function handle(ctx) {
  try {
    let run = ctx;
    const text = clean(ctx.text).replace(/[.!?]+$/g, "");
    // The day it happened, when the person said one ("yesterday", "last Friday", "on 10 July"); otherwise today.
    if (RECORDING.test(text)) {
      const when = whenOf(text, ctx.today);
      if (when?.day && when.text) run = { ...ctx, text: when.text, entryDay: when.day };
    }
    // "sold maize some time ago for 5000": no day was given, so it is dated today, and the person is told how to change it.
    const vague = RECORDING.test(text) && !run.entryDay && /\b(?:some time ago|a while ago|long ago|a few days ago|earlier this (?:week|month)|the other day|last (?:week|month|season)|a week ago|weeks ago|months ago)\b/i.test(text);
    const dated = reply => (reply && run.entryDay && /^Recorded:/.test(reply) ? `${reply} Dated ${describeDay(run.entryDay, ctx.today)}.`
      : reply && vague && /^Recorded:/.test(reply) ? `${reply} I did not have a day, so it is dated today. Say "yesterday", "last Friday" or a date like "10 September" to give the day.` : reply);
    // "I sold maize and paid the transporter 500": the 500 is the cost, and the sale has no price. It used to be recorded as a sale of 500. Nothing is guessed: ask for the price.
    const unpriced = /^(?:i |we )?(sold|bought|purchased)\s+(.+?)\s+(?:and|then|plus)\s+(?:i |we )?(?:paid|bought|purchased|spent|sold)\b/i.exec(clean(run.text));
    if (unpriced && !/\d/.test(unpriced[2])) {
      const thing = unpriced[2].replace(/^(?:the|some|my)\s+/i, "");
      return `I can't tell what the ${thing} ${unpriced[1] === "sold" ? "sold" : "cost"} for. Nothing is recorded yet. Tell me each one on its own, like "${unpriced[1]} ${unpriced[2]} for 5000", and then the other one.`;
    }
    const parts = splitCompound(clean(run.text).replace(/[.!?]+$/g, ""));
    if (parts.length === 1) return dated(await handleMoney(run));
    const replies = []; const unread = [];
    for (const piece of parts) {
      let reply = null;
      try { reply = await handleMoney({ ...run, text: piece }); } catch (error) { if (error !== NOT_FARM) throw error; }
      if (reply) replies.push(reply); else unread.push(piece);
    }
    if (!replies.length) return null;
    const joined = replies.map((reply, index) => (index < replies.length - 1 ? withoutMonthSummary(reply) : reply)).join(" ");
    return dated(unread.length ? `${joined} I could not read this part, so it is not recorded: "${unread.join('"; "')}".` : joined);
  } catch (error) { if (error === NOT_FARM) return null; throw error; }
}

// ---- what is owed, and changing or deleting an entry ----
const NOT_A_NAME = /^(?:i|we|you|he|she|they|it|who|someone|somebody|nobody|everyone|the|my|our|your|this|that|please)$/i;
const bareAmount = text => { const m = /^\s*(\d[\d,]*(?:\.\d+)?)\s*$/.exec(text); return m ? { amount: round(Number(m[1].replace(/,/g, ""))), currency: "" } : null; };
const describeRecord = record => `${record.data.type === "income" ? "income" : record.data.type === "saving" ? (record.data.kind === "payout" ? "chama payout" : "chama contribution") : record.data.loan ? "loan" : "spending"} of ${formatMoney(record.data.amount, record.data.currency)} (${record.data.note || record.data.item || record.data.category})`;

async function ledgerFixes(ctx, t, lower) {
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const all = async () => ctx.store.list({ ...scope, collection: "money" });
  let m;
  if (/^(?:who|which customers?) (?:still )?owes? me(?: money)?$|^(?:what|how much) (?:am i|is) (?:still )?owed(?: to me)?$|^(?:show|list) (?:my )?(?:unpaid|debtors|credit sales|debts owed to me)$|^how much (?:do|does) (?:people|customers) owe me$/.test(lower)) {
    const rows = (await all()).filter(record => record.data.type === "income" && record.data.unpaid);
    if (!rows.length) return "Nobody owes you anything that I know of.";
    const by = {};
    for (const record of rows) { const who = record.data.party || "Someone"; (by[who] = by[who] || []).push(record); }
    return `Owed to you: ${Object.entries(by).map(([who, list]) => `${who} ${showTotals(list.reduce((acc, record) => { const key = currencyKey(rows, record.data.currency); acc[key] = round((acc[key] || 0) + record.data.amount); return acc; }, {}))}`).join("; ")}.${Object.keys(by).some(who => who !== "Someone") ? ` Say "${Object.keys(by).find(who => who !== "Someone")} paid" when one of them pays.` : ' Next time say who you sold to ("to Otieno") so I can tell you who owes you.'}`;
  }
  // "Otieno paid", "mark Otieno as paid", "Otieno paid me 2000": a sale on credit is counted as income when it is paid.
  const settle = /^(?:mark )?([A-Za-z][A-Za-z' -]{1,30}?)(?: has| have)? (?:paid|settled)(?: me)?(?: in full| everything| it all| back| what (?:he|she|they) owed)?$/i.exec(t) || /^mark ([A-Za-z][A-Za-z' -]{1,30}?) as paid$/i.exec(t);
  const partial = settle ? null : /^([A-Za-z][A-Za-z' -]{1,30}?)(?: has| have)? paid(?: me)? (.+?)(?: of it| so far| today| towards it| on account)?$/i.exec(t);
  const payer = (settle || partial)?.[1]?.trim();
  if (payer && !NOT_A_NAME.test(payer)) {
    const owed = (await all()).filter(record => record.data.type === "income" && record.data.unpaid && record.data.party && nameKey(record.data.party) === nameKey(payer)).sort((a, b) => String(a.data.day).localeCompare(String(b.data.day)));
    if (!owed.length) return null;
    const payDay = ctx.entryDay || ctx.today; const who = owed[0].data.party;
    let paying = settle ? Infinity : null;
    if (partial) { const said = parseMoney(partial[2]) || bareAmount(partial[2]); if (!said) return null; paying = said.amount; }
    let paid = 0;
    for (const record of owed) {
      if (!(paying > 0)) break;
      if (paying >= record.data.amount) {
        await ctx.store.update({ ...scope, record: { ...record, data: { ...record.data, unpaid: false, soldOn: record.data.day, day: payDay } } });
        paid = round(paid + record.data.amount); paying = paying === Infinity ? Infinity : round(paying - record.data.amount);
      } else {
        await ctx.store.update({ ...scope, record: { ...record, data: { ...record.data, amount: round(record.data.amount - paying) } } });
        await ctx.store.add({ ...scope, collection: "money", data: { ...record.data, unpaid: false, amount: paying, soldOn: record.data.day, day: payDay, note: `part payment from ${who}` } });
        paid = round(paid + paying); paying = 0;
      }
    }
    const left = (await all()).filter(record => record.data.type === "income" && record.data.unpaid && record.data.party === who);
    const currency = owed[0].data.currency;
    return `Recorded: ${who} paid ${formatMoney(paid, currency)}, now counted as income.${left.length ? ` ${who} still owes ${showTotals(sum(left.map(record => ({ data: { ...record.data, unpaid: false, type: "income" } })), "income"))}.` : ` ${who} owes you nothing now.`}`;
  }
  // What the farmer owes for things bought on credit. The cost counts when the thing is bought; what is still owed is tracked separately until it is paid.
  const owedByMe = async () => (await all()).filter(record => record.data.type === "expense" && record.data.unpaid && record.data.owing > 0);
  if (/^(?:who|which (?:shops?|suppliers?|sellers?)) do (?:i|we) (?:still )?owe(?: money)?$|^(?:what|how much) do (?:i|we) (?:still )?owe(?: (?:in total|altogether|them|suppliers?))?$|^(?:show|list) (?:my )?(?:debts|what i owe|unpaid bills|supplier debts|bills i owe)$/.test(lower)) {
    const rows = await owedByMe();
    if (!rows.length) return "You don't owe anyone anything that I know of.";
    const by = {};
    for (const record of rows) { const who = record.data.party || "Someone"; (by[who] = by[who] || []).push(record); }
    const total = list => list.reduce((acc, record) => { const key = currencyKey(rows, record.data.currency); acc[key] = round((acc[key] || 0) + record.data.owing); return acc; }, {});
    return `You owe: ${Object.entries(by).map(([who, list]) => `${who} ${showTotals(total(list))}`).join("; ")}. Total ${showTotals(total(rows))}.${Object.keys(by).some(who => who !== "Someone") ? ` Say "I paid ${Object.keys(by).find(who => who !== "Someone")}" when you pay.` : ""}`;
  }
  // "I paid Wanjiru", "I paid Wanjiru 5000", "I cleared my debt with Wanjiru": paying off what is owed is NOT a new cost (the cost was counted when it was bought), so it is never recorded as a second expense.
  const clearedAll = /^(?:i |we )?(?:have |'ve )?(?:paid|settled|cleared)(?: back| off)? ([A-Za-z][A-Za-z' -]{1,30}?)(?: in full| everything| it all| back| what (?:i|we) owed)?$/i.exec(t)
    || /^(?:i |we )?(?:have |'ve )?(?:paid|settled|cleared)(?: off)? (?:my |our |the )?(?:debt|bill|balance|account)(?: with| to| at) ([A-Za-z][A-Za-z' -]{1,30})$/i.exec(t);
  const clearedSome = clearedAll ? null : /^(?:i |we )?(?:have |'ve )?paid ([A-Za-z][A-Za-z' -]{1,30}?)(?: back)? (.+?)(?: of it| so far| today| towards it| on account)?$/i.exec(t);
  const creditor = (clearedAll || clearedSome)?.[1]?.trim();
  if (creditor && !NOT_A_NAME.test(creditor) && !/^(?:for|the|my|our|out|off|back|up|in|it|them|him|her)\b/i.test(creditor)) {
    const mine = (await owedByMe()).filter(record => record.data.party && nameKey(record.data.party) === nameKey(creditor)).sort((a, b) => String(a.data.day).localeCompare(String(b.data.day)));
    if (mine.length) {
      const who = mine[0].data.party;
      let paying = clearedAll ? Infinity : null;
      if (clearedSome) { const said = parseMoney(`paid ${clearedSome[2]}`) || parseMoney(clearedSome[2]) || bareAmount(clearedSome[2]); if (!said) return null; paying = said.amount; }
      let paid = 0;
      for (const record of mine) {
        if (!(paying > 0)) break;
        const take = paying === Infinity ? record.data.owing : Math.min(paying, record.data.owing);
        const owing = round(record.data.owing - take);
        await ctx.store.update({ ...scope, record: { ...record, data: { ...record.data, owing, unpaid: owing > 0, ...(owing > 0 ? {} : { paidOn: ctx.entryDay || ctx.today }) } } });
        paid = round(paid + take); paying = paying === Infinity ? Infinity : round(paying - take);
      }
      const left = (await owedByMe()).filter(record => nameKey(record.data.party || "") === nameKey(who));
      return `Recorded: you paid ${who} ${formatMoney(paid, mine[0].data.currency)} of what you owed. That is not a new cost: it was counted when you bought it.${left.length ? ` You still owe ${who} ${showTotals(left.reduce((acc, record) => { const key = currencyKey(left, record.data.currency); acc[key] = round((acc[key] || 0) + record.data.owing); return acc; }, {}))}.` : ` You owe ${who} nothing now.`}`;
    }
  }
  // "that should be 8000", "change that to 8000", "I meant 800": the last entry is corrected, only when it was made today or yesterday.
  if ((m = /^(?:no[, ]+)?(?:that should (?:be|have been)|change (?:that|it|(?:my |the )?last (?:one|entry|sale|expense|income|record|payment)) to|correct (?:that|it|(?:my |the )?last (?:one|entry|sale|expense|income|record)) to|make (?:that|it)|actually it was|actually it is|(?:sorry,? )?i meant|sorry,? it was)\s+(?!(?:an? )?(?:expense|sale|income|cost|spending)$)(.+)$/i.exec(t))) {
    const money = parseMoney(m[1]) || bareAmount(m[1]);
    if (!money || !(money.amount > 0)) return null;
    // "the last SALE" is the last sale, not whatever was recorded last: it used to change a later expense and say so as if it were the sale.
    const named = /\blast (sale|income|expense|payment)\b/i.exec(t)?.[1];
    const wantedType = named ? (/sale|income/i.test(named) ? "income" : "expense") : null;
    const last = wantedType ? (await all()).find(record => record.data.type === wantedType) : (await all())[0];
    if (!last) return wantedType ? `I have no ${wantedType === "income" ? "sale" : "expense"} recorded to change.` : "There is nothing recorded to change.";
    const age = Date.now() - Date.parse(last.createdAt);
    if (Number.isFinite(age) && age > 2 * 24 * 3600 * 1000) return `The last thing I recorded was ${describeRecord(last)}, a while ago, so I have not changed it. Say "delete the ${last.data.amount} ${last.data.type === "income" ? "sale" : "expense"}" and record it again.`;
    const before = describeRecord(last);
    await ctx.store.update({ ...scope, record: { ...last, data: { ...last.data, amount: money.amount, ...(isSpecific(money.currency) ? { currency: money.currency } : {}) } } });
    return `Changed: ${before} is now ${formatMoney(money.amount, isSpecific(money.currency) ? money.currency : last.data.currency)}. Stock changes it made are not reversed.`;
  }
  // "change my last sale to an expense", "make the last entry an expense", "the last one was an expense, not a sale": the same entry, the other kind. Not for one that is on credit.
  if ((m = /^(?:no[, ]+)?(?:(?:change|make|turn|switch|record|count)\s+(?:that|it|(?:my |the )?last (?:one|entry|sale|expense|income|record|payment))\s+(?:to |into |as )?(?:an? )?(expense|cost|spending|sale|income)|(?:that|it|(?:my |the )?last (?:one|entry|record))\s+(?:was|is)\s+(?:an? )?(expense|cost|spending|sale|income)(?:,?\s+not\s+(?:an? )?(?:expense|cost|spending|sale|income))?)$/i.exec(t))) {
    const toType = /expense|cost|spending/i.test(m[1] || m[2]) ? "expense" : "income";
    const named = /\blast (sale|income|expense|payment)\b/i.exec(t)?.[1];
    const fromType = named ? (/sale|income/i.test(named) ? "income" : "expense") : null;
    const last = fromType ? (await all()).find(record => record.data.type === fromType) : (await all())[0];
    if (!last) return "There is nothing recorded to change.";
    if (last.data.type === toType) return `It is already ${toType === "income" ? "a sale" : "an expense"}: ${describeRecord(last)}. Nothing was changed.`;
    const age = Date.now() - Date.parse(last.createdAt);
    if (Number.isFinite(age) && age > 2 * 24 * 3600 * 1000) return `The last thing I recorded was ${describeRecord(last)}, a while ago, so I have not changed it. Say "delete the ${last.data.amount} ${last.data.type === "income" ? "sale" : "expense"}" and record it again.`;
    if (last.data.unpaid || last.data.owing) return `That one is on credit (${describeRecord(last)}), so I have not changed it. Delete it and record it again the way it happened.`;
    const before = describeRecord(last);
    const words = `${last.data.item || ""} ${last.data.note || ""}`;
    await ctx.store.update({ ...scope, record: { ...last, data: { ...last.data, type: toType, category: toType === "expense" ? expenseCategory(words) : incomeCategory(words) } } });
    return `Changed: ${before} is now ${toType === "income" ? "a sale" : "an expense"}. Stock changes it made are not reversed.`;
  }
  // "delete the 5000 sale", "remove the maize sale"
  if ((m =/^(?:delete|remove|cancel|scrap) (?:the |my )?(.+?) (sales?|expenses?|income|purchases?|entry|record|payment)$/i.exec(t)) && !/^last$/i.test(m[1].trim())) {
    const what = clean(m[1]).toLowerCase(); const kind = /sale|income/i.test(m[2]) ? "income" : /expense|purchase/i.test(m[2]) ? "expense" : "";
    const amountSaid = (parseMoney(what) || bareAmount(what))?.amount;
    const rows = (await all()).filter(record => (!kind || record.data.type === kind) && (amountSaid ? record.data.amount === amountSaid : `${record.data.item || ""} ${record.data.note || ""} ${record.data.category || ""} ${record.data.party || ""}`.toLowerCase().includes(what)));
    if (!rows.length) return `I could not find ${kind === "income" ? "a sale" : kind === "expense" ? "an expense" : "an entry"} matching "${what}".`;
    if (rows.length > 1) return `I found ${rows.length} entries like that: ${rows.slice(0, 4).map(record => `${describeDay(record.data.day, ctx.today)} ${describeRecord(record)}`).join("; ")}. Tell me which, for example "delete the ${rows[0].data.amount} ${kind === "expense" ? "expense" : "sale"} from ${describeDay(rows[0].data.day, ctx.today)}", or say "undo my last ${kind === "expense" ? "expense" : "sale"}".`;
    await ctx.store.remove({ ...scope, memoryId: rows[0].memoryId });
    return `Removed: ${describeRecord(rows[0])}. Stock changes it made are not reversed; tell me if you need those corrected.`;
  }
  return null;
}

async function handleMoney(ctx) {
  // "paid 300 for the pickup" / "paid 2000 on fuel" is a cost, the same as "spent 300 on the pickup" (it was not read at all). "paid 5000 to Wanjiru" and "paid Wanjiru 5000" are left as they are.
  // "paid 5000 till number 123456", "paid 2000 to paybill 247247 account 5521": the till or paybill is how it was paid, not who. It is a cost, and the number is not kept.
  const t = clean(ctx.text).replace(/[.!?]+$/g, "").replace(/\s+(?:to |at |via |using |through |on |by )?(?:the )?(?:till|buy ?goods|pay ?bill|lipa na m-?pesa)(?: number| no\.?)?\s*\d{4,8}(?:\s+(?:account|acc|a\/c)(?: number| no\.?)?\s*\S+)?/i, "")
    .replace(/^((?:i |we )?)paid ((?:(?:ksh|kshs|kes|tsh|ugx|usd|[$€£])\s?)?\d[\d,]*(?:\.\d+)?(?: shillings| dollars)?)$/i, "$1spent $2 on payment")
    .replace(/^((?:i |we )?)paid ((?:(?:ksh|kshs|kes|tsh|ugx|usd|[$€£])\s?)?\d[\d,]*(?:\.\d+)?(?: shillings| dollars)?) (?:for|on) (?!me\b|us\b)/i, "$1spent $2 on "); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;
  const fixed = await ledgerFixes(ctx, t, lower);
  if (fixed) return fixed;

  // ---- selling ----
  if ((m = /^(?:i |we )?sold (.+)$/i.exec(t))) {
    const rest = m[1];
    // an animal: "sold cow 12 for 40000"
    const animals = await ctx.store.list({ ...scope, collection: "animal" });
    const animalRef = /^(.+?)(?: (?:for|at|to)\b.*)?$/i.exec(rest)?.[1];
    const animal = animalRef ? findAnimal(animals, animalRef) : null;
    const money = parseMoney(rest);
    if (animal && money) {
      const buyer = /\bto (?:my |the )?([A-Za-z][A-Za-z' -]{1,30}?)(?:\s+(?:for|at)\b|$)/.exec(rest)?.[1];
      // Found live (follow-up sweep of the order-delivery race fix): this recorded income BEFORE
      // writing the animal's "gone" status, with no compare-and-swap on either. Two concurrent/retried
      // "sold cow 12 for X" messages for the same animal could both match the still-active animal and
      // each call recordMoney(), producing two real income records for one physical sale. Claim the
      // animal atomically first, matching the order-delivery pattern.
      const claimed = await ctx.store.update({ ...scope, record: { ...animal, data: { ...animal.data, status: "gone", goneOn: ctx.today, soldFor: money.amount } }, expectedStatus: animal.data.status });
      if (!claimed) return `${animal.data.tag} was already recorded as sold or removed, so I didn't record this again.`;
      const result = await recordMoney(ctx, { type: "income", category: "livestock", amount: money.amount, currency: money.currency, party: buyer ? titleCase(buyer) : "", note: `sold ${animal.data.tag}` });
      if (result.refused) { await ctx.store.update({ ...scope, record: { ...animal, data: animal.data } }); return result.refused; }
      return `Recorded: sold ${animal.data.tag} for ${formatMoney(money.amount, result.record.data.currency)}. I've taken it off your animal list (its history is kept).`;
    }
    const quantity = parseQuantity(rest); const per = parsePricePer(rest);
    // "10 bags at 3000 each", "5 chickens at 600 each": the price is for ONE, the sale is the count times it.
    const each = parseEachPrice(rest); const count = each && !quantity ? parseCount(rest) : null;
    const itemMatch = quantity ? new RegExp(`${quantity.matched.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*(?:of )?(.+?)(?:\\s+(?:for|at|to|@)\\b.*)?$`, "i").exec(rest) : /^(?:some |my )?(.+?)(?:\s+(?:for|at|to|@)\b.*)?$/i.exec(rest);
    const item = (count ? count.item.replace(/^(?:some|my|the)\s+/, "") : clean(itemMatch?.[1] || "").toLowerCase().replace(/^(?:some|my|the)\s+/, "")).replace(/\s+(?:on (?:credit|account|loan)|(?:to be )?paid later|unpaid)$/i, "");
    let amount = money?.amount; let currency = money?.currency || "";
    // Found live (money-math audit): neither branch checked that the
    // quantity's unit (bags, crates, sacks) matched the price's "per" unit
    // (usually kg) before multiplying -- unlike the "bought" branch below,
    // which already has this exact guard. Executed proof: "sold 5 crates of
    // tomatoes at 200 per kg" recorded 1,000 (5 x 200), treating crates as
    // if they were kg. A bag/crate isn't a fixed weight, so this can't be
    // silently converted -- only multiply when the units genuinely match.
    if (quantity && per && !money && quantity.unit === per.per) { amount = round(quantity.value * per.amount); currency = per.currency; }
    else if (quantity && per && money && money.amount === per.spokenAmount) {
      // money.amount === per.amount here almost always means parseMoney
      // read the SAME number out of "at 200 per kg" that parsePricePer
      // also read -- not a genuine separate flat total (confirmed live:
      // parseMoney("5 crates of tomatoes at 200 per kg") returns {amount:
      // 200}, an echo of the per-unit price, not a real total). Only trust
      // it as real money when the units actually match; otherwise there is
      // no usable total at all, so amount must stay unset rather than
      // silently recording that echoed per-unit number as if it were the
      // whole sale.
      amount = quantity.unit === per.per ? round(quantity.value * per.amount) : undefined;
      currency = per.currency || money.currency;
    }
    if (each && (quantity || count)) { amount = round((quantity || count).value * each.amount); currency = each.currency || money?.currency || ""; }
    if (!(amount > 0) || !item || item.length > 50) return null;
    const buyer = /\bto (?:my |the )?([A-Za-z][A-Za-z' -]{1,30}?)(?:\s+(?:for|at|@|on)\b|$)/.exec(rest)?.[1];
    const fields = await ctx.store.list({ ...scope, collection: "field" }); const field = fieldIn(fields, t);
    // A sale on credit is not money in hand: it is kept as owed and counted as income when it is paid.
    const onCredit = ON_CREDIT.test(rest);
    const result = await recordMoney(ctx, { type: "income", category: incomeCategory(item), amount, currency, party: buyer ? titleCase(buyer) : "", field: field?.data.name || "", item, qty: (quantity || count)?.value || null, unit: quantity?.unit || "", note: `sold ${item}`, ...(onCredit ? { unpaid: true } : {}) });
    if (result.refused) return result.refused;
    let stockNote = "";
    if (quantity) {
      // Found live (follow-up sweep): this read+wrote qty with no CAS guard, unlike inventory.js's own
      // "used X of Y" deduction, which is already protected. Two concurrent sales of the same item could
      // each read the same starting qty and each write their own deduction, silently losing one. This is
      // a secondary bookkeeping note on an already-recorded sale (not the primary action), so it retries
      // against the latest qty rather than asking the user to redo the whole sale.
      for (let attempt = 0; attempt < 5; attempt += 1) {
        const stock = await ctx.store.list({ ...scope, collection: "stock" }); // Only harvested goods (or goods of the same kind as what was sold) come out of stock: selling maize must not take kilos out of the maize SEED.
        const same = findItems(stock, item).filter(entry => entry.data.category === "other" || entry.data.category === categoryOf(item));
        const found = same.filter(entry => entry.data.unit === quantity.unit);
        // one stock record for this item, but kept in another unit (sold in sacks, kept in bags): not guessed at, and said, so the count does not drift silently
        if (same.length === 1 && !found.length) { stockNote = ` You keep ${same[0].data.name} in ${same[0].data.unit}s, so I did not change your stock. Say it in the same unit to take it out.`; break; }
        if (found.length !== 1) break;
        const left = round(Math.max(0, found[0].data.qty - quantity.value), 3);
        const applied = await ctx.store.update({ ...scope, record: { ...found[0], data: { ...found[0].data, qty: left } }, casField: "qty", casValue: found[0].data.qty });
        if (!applied) continue;
        stockNote = ` I took ${unitLabel(Math.min(quantity.value, found[0].data.qty), quantity.unit)} out of your stock${quantity.value > found[0].data.qty ? " (you had less recorded than you sold, so it is now zero)" : `; ${unitLabel(left, quantity.unit)} left`}.${lowNote({ data: { ...found[0].data, qty: left } })}`;
        break;
      }
    }
    const period = extractPeriod("this month", ctx.today);
    const month = result.all.filter(record => inPeriod(record, period));
    const soldWhat = `${quantity ? `${unitLabel(quantity.value, quantity.unit)} of ` : count ? `${count.value} ` : ""}${item}`;
    if (onCredit) return `Recorded: sold ${soldWhat}${buyer ? ` to ${titleCase(buyer)}` : ""} for ${formatMoney(amount, result.record.data.currency)} on credit.${stockNote} I have not counted it as income yet. When ${buyer ? titleCase(buyer) : "they"} pay${buyer ? "s" : ""}, say "${buyer ? titleCase(buyer) : "Name"} paid" and I will. Income this month: ${showTotals(sum(month, "income"))}.`;
    return `Recorded: sold ${soldWhat}${buyer ? ` to ${titleCase(buyer)}` : ""} for ${formatMoney(amount, result.record.data.currency)}.${stockNote} Income this month: ${showTotals(sum(month, "income"))}.`;
  }
  if ((m = /^(?:i |we )?(?:received|got|earned|made) (.+?) (?:from|for|by) (?:selling |sale of |sales of )?(.+)$/i.exec(t)) || (m = /^income\s*[:,-]\s*(.+?)\s+(.+)$/i.exec(t))) {
    const bare = /^\s*(\d[\d,]*(?:\.\d+)?)\s*$/.exec(m[1]);
    const money = parseMoney(m[1]) || (bare ? { amount: Number(bare[1].replace(/,/g, "")), currency: "" } : null) || parseMoney(t); const what = clean(m[2]).toLowerCase().replace(/^(?:the )?/, "");
    if (money && what && what.length <= 60 && (/^(?:income)/i.test(t) || /\b(?:selling|sale|sales|milk|eggs|crops?|harvest|maize|beans|produce|rent|labour|work)\b/i.test(t) || /\bfrom\b/i.test(t))) {
      const result = await recordMoney(ctx, { type: "income", category: incomeCategory(what), amount: money.amount, currency: money.currency, item: what, note: what });
      if (result.refused) return result.refused;
      const month = result.all.filter(record => inPeriod(record, extractPeriod("this month", ctx.today)));
      return `Recorded: income of ${formatMoney(money.amount, result.record.data.currency)} (${what}). Income this month: ${showTotals(sum(month, "income"))}.`;
    }
  }

  // ---- spending ----
  const spendPatterns = [/^(?:i |we )?(?:spent|paid out) (.+?) (?:on|for) (.+)$/i, /^expense\s*[:,-]\s*(.+?)\s+(.+)$/i];
  if ((m = spendPatterns[0].exec(t) || spendPatterns[1].exec(t)) && (parseMoney(m[1] || "") || parseMoney(`spent ${m[1] || ""}`))) {
    const money = parseMoney(m[1]) || parseMoney(`spent ${m[1]}`); const what = clean(m[2]).replace(/\s+\d[\d,.]*$/, "");
    const fields = await ctx.store.list({ ...scope, collection: "field" }); const field = fieldIn(fields, what);
    const category = expenseCategory(what);
    const result = await recordMoney(ctx, { type: "expense", category, amount: money.amount, currency: money.currency, field: field?.data.name || "", item: what.toLowerCase().slice(0, 60), note: what.slice(0, 80) });
    if (result.refused) return result.refused;
    const month = result.all.filter(record => inPeriod(record, extractPeriod("this month", ctx.today)));
    return `Recorded: spent ${formatMoney(money.amount, result.record.data.currency)} on ${what.toLowerCase().slice(0, 60)} (${category}${field ? `, ${field.data.name}` : ""}). Spent this month: ${showTotals(sum(month, "expense"))}.`;
  }
  if ((m = /^(?:i |we )?(?:bought|purchased|got) (.+)$/i.exec(t)) && parseMoney(m[1]) && !/\b(?:sold|selling)\b/i.test(t)) {
    const rest = m[1]; const money = parseMoney(rest); const quantity = parseQuantity(rest); const per = parsePricePer(rest);
    let amount = money.amount; let currency = money.currency;
    // Found live (export/invoice/farm-toolkit follow-up audit): the old guard
    // regexed for the literal word "for" followed by a digit to decide
    // whether a genuine separate total was stated -- but parsePricePer's own
    // connector list also accepts "for" to introduce the per-unit price
    // itself ("bought 5 bags for 3000 per bag"), so completely ordinary
    // phrasing tripped the guard and left `amount` at the per-unit price
    // (3000) instead of the real total (15,000). Mirrors the "sold" branch's
    // own, already-correct echo check a few lines up: parseMoney only ever
    // echoes the SAME number back when there is no separately-stated total,
    // so comparing money.amount to per.amount (not scanning for the word
    // "for") is what actually distinguishes the two cases.
    if (quantity && per && quantity.unit === per.per && money.amount === per.spokenAmount) { amount = round(quantity.value * per.amount); currency = per.currency || currency; }
    // "5 bags at 3000 each", "2 hoes at 500 each": the price is for ONE, the cost is the count times it.
    const each = parseEachPrice(rest); const count = each && !quantity ? parseCount(rest) : null;
    if (each && (quantity || count)) { amount = round((quantity || count).value * each.amount); currency = each.currency || currency; }
    const itemMatch = quantity ? new RegExp(`${quantity.matched.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*(?:of )?(.+?)(?:\\s+(?:for|at|from|@)\\b.*)?$`, "i").exec(rest) : /^(?:some |a |an )?(.+?)(?:\s+(?:for|at|from|@)\b.*)?$/i.exec(rest);
    const item = (count ? count.item : clean(itemMatch?.[1] || "").toLowerCase()).replace(/\s+(?:on (?:credit|account|loan)|(?:to be )?paid later|unpaid)$/i, "");
    if (!item || item.length > 60) return null;
    const seller = /\bfrom (?:my |the )?([A-Za-z][A-Za-z' -]{1,30}?)(?:\s+(?:for|at|@|on)\b|$)/.exec(rest)?.[1];
    // Bought on credit: the cost counts now, and what is still owed to the seller is tracked until it is paid.
    const onCredit = PURCHASE_ON_CREDIT.test(rest);
    const category = expenseCategory(item);
    const fields = await ctx.store.list({ ...scope, collection: "field" }); const field = fieldIn(fields, t);
    const result = await recordMoney(ctx, { type: "expense", category, amount, currency, party: seller ? titleCase(seller) : "", field: field?.data.name || "", item, qty: (quantity || count)?.value || null, unit: quantity?.unit || "", note: `bought ${item}`, ...(onCredit ? { unpaid: true, owing: amount } : {}) });
    if (result.refused) return result.refused;
    let stockNote = "";
    if (quantity && STOCKED.has(category)) { const stock = await addStock(ctx, item, quantity); if (stock) stockNote = ` I added it to your stock (you now have ${unitLabel(stock.data.qty, stock.data.unit)} of ${stock.data.name}).`; }
    const month = result.all.filter(record => inPeriod(record, extractPeriod("this month", ctx.today)));
    const boughtWhat = `${quantity ? `${unitLabel(quantity.value, quantity.unit)} of ` : count ? `${count.value} ` : ""}${item}${seller ? ` from ${titleCase(seller)}` : ""}`;
    if (onCredit) return `Recorded: bought ${boughtWhat} for ${formatMoney(amount, result.record.data.currency)} (${category}) on credit.${stockNote} It counts as a cost now, and I'll remember that you owe ${seller ? titleCase(seller) : "the seller"} ${formatMoney(amount, result.record.data.currency)}.${seller ? ` Say "I paid ${titleCase(seller)}" when you pay.` : ' Next time say who you bought it from ("from Wanjiru") so I can tell you who you owe.'} Spent this month: ${showTotals(sum(month, "expense"))}.`;
    return `Recorded: bought ${boughtWhat} for ${formatMoney(amount, result.record.data.currency)} (${category}).${stockNote} Spent this month: ${showTotals(sum(month, "expense"))}.`;
  }
  if ((m = /^(?:i |we )?paid ([A-Za-z][A-Za-z']+(?: [A-Za-z][A-Za-z']+)?) (.+)$/i.exec(t)) && !/^(?:the|my|for|to|a|an|out|off|back|attention|up|in|it|them|him|her)\b/i.test(m[1]) && parseMoney(`paid ${m[1]} ${m[2]}`)) {
    // "paid school fees 12000": the two words are not a person. Kept as a household cost, out of the farm's profit, and said so.
    if (HOUSEHOLD.test(m[1])) {
      const thing = m[1].toLowerCase(); const paid = parseMoney(`paid ${m[1]} ${m[2]}`);
      const saved = await recordMoney(ctx, { type: "expense", category: "household", amount: paid.amount, currency: paid.currency, item: thing, note: `paid ${thing}` });
      if (saved.refused) return saved.refused;
      return `Recorded: paid ${thing} ${formatMoney(paid.amount, saved.record.data.currency)} (household). I keep household costs out of your farm profit.`;
    }
    // Nobody is assumed to be labour: with no reason said it goes under "other", and the person is told how to say it.
    const who = titleCase(m[1]); const money = parseMoney(`paid ${m[1]} ${m[2]}`); const said = /\bfor (.+)$/i.exec(m[2])?.[1]; const forWhat = said || "payment";
    const result = await recordMoney(ctx, { type: "expense", category: expenseCategory(forWhat), amount: money.amount, currency: money.currency, party: who, item: forWhat.toLowerCase().slice(0, 60), note: `paid ${who}` });
    if (result.refused) return result.refused;
    return `Recorded: paid ${who} ${formatMoney(money.amount, result.record.data.currency)}${said ? ` for ${forWhat.toLowerCase().slice(0, 60)}` : ""}.${said ? "" : ' I did not have a reason, so it is under "other". Say "for labour" or "for transport" next time so it goes under the right cost.'}`;
  }

  // ---- asking ----
  const recordsOf = async () => ctx.store.list({ ...scope, collection: "money" });
  if ((m = new RegExp(String.raw`^how much (?:did|have) (?:i|we) (?:spend|spent)(?: on (.+?))?(?: (${PERIOD}))?$`, "i").exec(t)) || (m = new RegExp(String.raw`^(?:what (?:is|are)|show) my (?:total )?(?:expenses|spending|costs)(?: (${PERIOD}))?$`, "i").exec(t))) {
    // "how much did I spend ON THE FARM this month" asks about everything: "the farm" is not a kind of cost to filter by (it used to find nothing and answer "I have no the farm spending").
    const period = periodOf(`${m[2] || m[1] || ""}`, ctx.today, "this month"); let what = /^how much/i.test(t) ? m[1] : "";
    if (what && /^(?:the |my |our )?(?:farm|business|shop|stall|duka|kiosk|work|everything|all|money|farming|farm work)$/i.test(clean(what))) what = "";
    let rows = (await recordsOf()).filter(record => record.data.type === "expense" && !record.data.debt && inPeriod(record, period));
    if (what) rows = rows.filter(record => `${record.data.item || ""} ${record.data.category}`.toLowerCase().includes(clean(what).toLowerCase().replace(/^(?:the |my )/, "")) || record.data.field?.toLowerCase().includes(nameKey(what)));
    const whatShown = clean(what).replace(/^(?:the|my|our) /i, "");
    return rows.length ? `You spent ${showTotals(sum(rows, "expense"))}${what ? ` on ${whatShown}` : ""} ${period.label} (${plural(rows.length, "entry", "entries")}).` : `I have no ${what ? `${whatShown} ` : ""}spending recorded for ${period.label.replace(/^in /, "")}.`;
  }
  if ((m = new RegExp(String.raw`^how much (?:did|have) (?:i|we) (?:earn|earned|make|made|get|got|sell|sold)(?: (${PERIOD}))?$`, "i").exec(t)) || (m = new RegExp(String.raw`^(?:what (?:is|are)|show) my (?:total )?(?:income|earnings|sales|revenue)(?: (${PERIOD}))?$`, "i").exec(t))) {
    const period = periodOf(m[1] || "", ctx.today, "this month");
    const everything = await recordsOf();
    const rows = everything.filter(record => record.data.type === "income" && isCounted(record) && inPeriod(record, period));
    if (rows.length) return `You earned ${showTotals(sum(rows, "income"))} ${period.label} (${plural(rows.length, "entry", "entries")}).`;
    // Never a flat "no income" when something IS recorded for the time asked: sales still waiting to be paid are not income yet, and say so.
    const waiting = everything.filter(record => record.data.type === "income" && record.data.unpaid && inPeriod(record, period));
    if (waiting.length) return `I have no income recorded ${period.label} yet, but ${plural(waiting.length, "sale")} on credit (${showTotals(waiting.reduce((acc, record) => { const key = currencyKey(waiting, record.data.currency); acc[key] = round((acc[key] || 0) + record.data.amount); return acc; }, {}))}) ${waiting.length === 1 ? "is" : "are"} waiting to be paid. I count a credit sale as income when it is paid.`;
    return `I have no income recorded for ${period.label.replace(/^in /, "")}.`;
  }
  if ((m = new RegExp(String.raw`^(?:what(?:'s| is)|show|how much is) my (?:profit|net income|margin)(?: (${PERIOD}))?$`, "i").exec(t)) || (m = new RegExp(String.raw`^am i (?:making a )?(?:profit|money)(?: (${PERIOD}))?$`, "i").exec(t)) || /^how(?:'s| is) my (?:profit|farm)(?: doing)?$/.test(lower)) {
    const period = periodOf(m?.[1] || "", ctx.today, "this year");
    const rows = (await recordsOf()).filter(record => inPeriod(record, period));
    if (!rows.length) return `I have no money recorded for ${period.label.replace(/^in /, "")}. Say "spent 5000 on fertilizer" or "sold 200 kg of maize for 9000".`;
    const profit = profitOf(rows);
    return `${period.label[0].toUpperCase()}${period.label.slice(1)}: income ${showTotals(sum(rows, "income"))}, spending ${showTotals(sum(rows, "expense"))}, so ${Object.values(profit).every(value => value >= 0) ? "a profit of" : "a loss of"} ${Object.entries(profit).map(([currency, value]) => formatMoney(Math.abs(value), currency)).join(" and ") || "0"}.`;
  }
  if (/^(?:show|what(?:'s| is)) (?:my )?profit by (?:field|plot)(?: (?:this|last) (?:year|season|month))?$/.test(lower)) {
    const period = periodOf(lower, ctx.today, "this year");
    const rows = (await recordsOf()).filter(record => inPeriod(record, period) && record.data.field);
    if (!rows.length) return "I have no money recorded against a field yet. Add the field name when you record it, like \"spent 5000 on fertilizer for North Plot\".";
    const byField = {}; for (const record of rows) (byField[record.data.field] = byField[record.data.field] || []).push(record);
    return `By field ${period.label}: ${Object.entries(byField).map(([field, list]) => `${field} — income ${showTotals(sum(list, "income"))}, spending ${showTotals(sum(list, "expense"))}, net ${Object.entries(profitOf(list)).map(([currency, value]) => `${value < 0 ? "-" : ""}${formatMoney(Math.abs(value), currency)}`).join(" and ")}`).join("; ")}.`;
  }
  if ((m = new RegExp(String.raw`^(?:(?:what(?:'s| is)|show|how(?:'s| is)) (?:my )?)?(?:profit|net)(?: for| of| on| from) (?:my )?(?:field |plot )?(.+?)(?: field| plot)?(?: (${PERIOD}))?$`, "i").exec(t))) {
    const fields = await ctx.store.list({ ...scope, collection: "field" }); const field = fields.find(item => nameKey(item.data.name) === nameKey(m[1]));
    if (field) {
      const period = periodOf(m[2] || "", ctx.today, "this year");
      const rows = (await recordsOf()).filter(record => inPeriod(record, period) && record.data.field === field.data.name);
      return rows.length ? `${field.data.name} ${period.label}: income ${showTotals(sum(rows, "income"))}, spending ${showTotals(sum(rows, "expense"))}, net ${Object.entries(profitOf(rows)).map(([currency, value]) => `${value < 0 ? "-" : ""}${formatMoney(Math.abs(value), currency)}`).join(" and ")}.` : `I have no money recorded against ${field.data.name} for ${period.label.replace(/^in /, "")}.`;
    }
  }
  if ((m = new RegExp(String.raw`^(?:show|what are) my expenses by (?:category|kind|type)(?: (${PERIOD}))?$`, "i").exec(t))) {
    const period = periodOf(m[1] || "", ctx.today, "this year");
    const rows = (await recordsOf()).filter(record => record.data.type === "expense" && !record.data.debt && inPeriod(record, period));
    if (!rows.length) return `I have no spending recorded for ${period.label.replace(/^in /, "")}.`;
    // Found live (real-estate/GPS follow-up audit): this used to sum every
    // row's raw amount together regardless of currency, then label the
    // whole total with whichever row happened to be first -- a KES entry
    // and a USD entry in the same category silently became one fabricated
    // number under one wrong currency. Bucket by currency first, like
    // sum()/showTotals() already do everywhere else in this file.
    const by = {}; for (const record of rows) { const category = record.data.category; const currency = currencyKey(rows, record.data.currency); by[category] = by[category] || {}; by[category][currency] = round((by[category][currency] || 0) + record.data.amount); }
    const totalOf = currencies => Object.values(currencies).reduce((a, b) => a + b, 0);
    return `Spending ${period.label} by kind: ${Object.entries(by).sort((a, b) => totalOf(b[1]) - totalOf(a[1])).map(([category, currencies]) => `${category} ${showTotals(currencies)}`).join("; ")}.`;
  }
  // "show my spending by month", "income by week this year": one line per month (or week, starting Monday), each with its own total. A question about a period used to be answered with the total of
  // everything ever recorded.
  if ((m = new RegExp(String.raw`^(?:show|what (?:is|are)) my (expenses|spending|costs|income|sales|earnings|profit) by (week|month)(?: (${PERIOD}))?$`, "i").exec(t))) {
    const what = m[1].toLowerCase(); const type = /income|sales|earnings/.test(what) ? "income" : /profit/.test(what) ? "profit" : "expense";
    const period = periodOf(m[3] || "", ctx.today, "this year");
    const rows = (await recordsOf()).filter(record => inPeriod(record, period) && (type === "profit" || record.data.type === type));
    if (!rows.length) return `I have no ${type === "income" ? "income" : type === "profit" ? "money" : "spending"} recorded for ${period.label.replace(/^in /, "")}.`;
    const bucketOf = day => (m[2].toLowerCase() === "month" ? day.slice(0, 7) : addDays(day, -((weekdayOf(day) + 6) % 7)));
    const groups = {}; for (const record of rows) (groups[bucketOf(record.data.day)] = groups[bucketOf(record.data.day)] || []).push(record);
    const label = key => (m[2].toLowerCase() === "month" ? `${MONTH_LABELS[Number(key.slice(5, 7)) - 1]} ${key.slice(0, 4)}` : `week of ${describeDay(key, ctx.today)}`);
    const figure = list => (type === "profit" ? Object.entries(profitOf(list)).map(([currency, value]) => `${value < 0 ? "-" : ""}${formatMoney(Math.abs(value), currency)}`).join(" and ") || "0" : showTotals(sum(list, type)));
    return `${type === "profit" ? "Profit" : type === "income" ? "Income" : "Spending"} by ${m[2].toLowerCase()} ${period.label}: ${Object.keys(groups).sort().map(key => `${label(key)} ${figure(groups[key])}`).join("; ")}.`;
  }
  if (/^(?:show|list) (?:me )?my (?:recent )?(?:money|expenses|income|sales)(?: records| entries)?$/.test(lower)) {
    const rows = (await recordsOf()).slice(0, 8);
    return rows.length ? `Latest: ${rows.map(record => `${describeDay(record.data.day, ctx.today)} ${record.data.type === "income" ? "+" : "-"}${formatMoney(record.data.amount, record.data.currency)} ${record.data.note || record.data.item || record.data.category}`).join("; ")}.` : "You have no money records yet.";
  }
  if (/^(?:undo|delete|remove) (?:my )?last (?:money|expense|income|sale|spending|purchase)(?: entry| record)?$/.test(lower)) {
    const rows = await recordsOf(); const last = rows.find(record => /expense/.test(lower) || /spending|purchase/.test(lower) ? record.data.type === "expense" : /income|sale/.test(lower) ? record.data.type === "income" : true);
    if (!last) return "There is nothing to undo.";
    await ctx.store.remove({ ...scope, memoryId: last.memoryId });
    return `Removed: ${last.data.type === "income" ? "income" : "spending"} of ${formatMoney(last.data.amount, last.data.currency)} (${last.data.note || last.data.item || last.data.category}). Stock changes it made are not reversed; tell me if you need those corrected.`;
  }
  return null;
}

module.exports = Object.freeze({ handle, recordMoney, expenseCategory, incomeCategory, sum, profitOf, showTotals, NOT_FARM, isCounted, inPeriod, currencyKey, isSpecific, describeRecord, PERIOD });
