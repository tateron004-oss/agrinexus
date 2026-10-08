"use strict";

const { clean, titleCase, round } = require("./parse.js");
const { recordMoney, sum, NOT_FARM } = require("./money.js");
const { nameKey } = require("./fields.js");
const swahili = require("./swahili.js");
const { SW, readDeal, readName, takeDay, sellRecord, askAbout, totalsAnswer, monthOf, totalsText, describeRecord, HOUSEHOLD_SW } = swahili;
const words = require("../i18n/swahili-words.js");
const numbers = require("../i18n/swahili-numbers.js");
const { parseMoneySw, parseQuantitySw, moneyShown, englishItem, swahiliItem, expenseCategorySw, incomeCategorySw, unitLabelSw, describeDaySw } = words;

// Bookkeeping in Swahili, the part the plain sale / purchase / spending grammar (swahili.js) does not cover: who owes whom, what was paid back, corrections,
// questions about totals asked in everyday words, money that came in, casual labour, and the farm log (harvest, milk, eggs).
//
// The records are the English tools' records, written the way the English tools write them (see money.js):
//   * a sale on credit            { type: "income",  unpaid: true, party, amount, ... }        -- counted as income only when it is paid
//   * what a customer owes        the same record ("Juma ana deni kwako la 800" adds one with category "other", debt: true)
//   * a purchase on credit        { type: "expense", unpaid: true, owing, party, ... }          -- the cost counts now; `owing` is what is still to pay
//   * a debt with no purchase     { type: "expense", unpaid: true, owing, category: "household", debt: true } -- kept out of the farm's costs (it is not known what it was for)
//   * a part payment              the English "part payment from NAME" split (settleOwedToMe / settleIOwe below do exactly what money.js does)
// First draft: a fluent speaker must review every Swahili sentence here.
//
// "ananidai" is the one word that is not safe to guess: in standard Swahili "Juma ananidai" is "Juma is claiming from me" (I owe him), while many people say it for
// "Juma owes me". A sentence with it is therefore never recorded on its own: Kyro asks "Je, Juma ana deni kwako la 800?" first. "nadaiwa", "ninadaiwa" (I owe),
// "ninamdai" and "ana deni la / kwako" (he owes me) are clear and are recorded straight away. Set DIRECTION_ASK to false to record "ananidai" as "owes me" at once.
const DIRECTION_ASK = true;

const LS = {
  owedToMe: ({ who, amount }) => `Nimeandika: ${who} ana deni kwako la ${amount}. Sijahesabu kama mapato bado. ${who} akilipa, sema "${who} amelipa".`,
  iOwe: ({ who, amount }) => `Nimeandika: una deni kwa ${who} la ${amount}. Sijaliweka kwenye matumizi kwa sababu sijui lilitokana na nini. Ukilipa, sema "nimemlipa ${who}".`,
  askDirection: ({ who, amount }) => `Je, ${who} ana deni kwako la ${amount}, yaani yeye ndiye atakayekulipa? Sema ndiyo au hapana.`,
  paidMe: ({ who, paid, left, over }) => `Nimeandika: ${who} amelipa ${paid}; sasa yamehesabiwa kama mapato.${over}${left ? ` Bado ana deni kwako la ${left}.` : ` Hana deni kwako tena.`}`,
  paidMeNoDebt: ({ who }) => `Sioni deni la ${who} kwenye rekodi zako, kwa hivyo sijaandika chochote.`,
  iPaid: ({ who, paid, left, over }) => `Nimeandika: umemlipa ${who} ${paid} kwenye deni lako.${over}${left ? ` Bado una deni kwa ${who} la ${left}.` : ` Huna deni kwa ${who} tena.`}`,
  owedList: ({ lines, total, tip }) => `Wenye deni kwako: ${lines}. Jumla ${total}.${tip}`,
  owedTip: ({ who }) => ` Akilipa, sema "${who} amelipa".`,
  owedNone: "Hakuna mtu mwenye deni kwako ninayemjua.",
  owedBy: ({ who, total }) => `${who} ana deni kwako la ${total}.`,
  owedByNone: ({ who }) => `${who} hana deni kwako ninalolijua.`,
  iOweList: ({ lines, total, tip }) => `Una deni kwa: ${lines}. Jumla ${total}.${tip}`,
  iOweTip: ({ who }) => ` Ukilipa, sema "nimemlipa ${who}".`,
  iOweNone: "Huna deni kwa mtu yeyote ninayemjua.",
  unpaidNoAmount: ({ who }) => `${who} ana deni la kiasi gani? Sema, kwa mfano, "${who} ana deni kwako la 1000".`,
  income: ({ amount, what, income, when }) => `Nimerekodi: mapato ya ${amount}${what ? ` (${what})` : ""}${when}. Mapato ya mwezi huu: ${income}.`,
  changed: ({ before, amount }) => `Nimebadilisha: ${before} sasa ni ${amount}. Mabadiliko ya ghala hayajarudishwa.`,
  nothingToChange: "Hakuna cha kubadilisha.",
  tooOld: ({ before }) => `Kitu cha mwisho nilichoandika ni ${before}, cha siku kadhaa zilizopita, kwa hivyo sijakibadilisha. Sema "futa rekodi ya mwisho" kisha uandike tena.`,
  harvest: ({ crop, qty, when, total }) => `Nimeandika: mavuno ya ${crop}, ${qty}${when}.${total}`,
  harvestTotal: ({ crop, total }) => ` Jumla ya ${crop} mwaka huu: ${total}.`,
  milk: ({ qty, when }) => `Nimeandika: maziwa ${qty}${when}.`,
  eggs: ({ qty, when }) => `Nimeandika: mayai ${qty}${when}.`,
  harvestNoAmount: "Umevuna kiasi gani? Sema, kwa mfano, \"nimevuna magunia 3 ya mahindi\".",
  milkNoAmount: "Umekamua lita ngapi? Sema, kwa mfano, \"nimekamua lita 12 za maziwa\".",
  eggsNoAmount: "Umekusanya mayai mangapi? Sema, kwa mfano, \"nimekusanya mayai 50\".",
  logFull: "Daftari lako la shamba limejaa. Niombe muhtasari kwanza.",
  logOff: "Siwezi kuandika kwenye daftari la shamba sasa hivi.",
  sprayNoCost: ({ what }) => `Nimeelewa umenyunyizia ${what}. Sijaandika chochote kwa sababu sikusikia gharama. Kama ulitumia pesa, sema "nimetumia 500 kwa dawa ya kunyunyizia".`,
  recent: ({ lines }) => `Za hivi karibuni: ${lines}.`,
  retry: "Samahani, sikuweza kuandika hilo. Sema tena."
};

const MAX_LOG = 5000;
const FAR = { household: "nyumbani" };
void FAR;

// ---------- names before a verb: "Mama Njeri amelipa", "juma otieno ananidai" (capitals or not) ----------
function nameBeforeVerb(text, verb) {
  const parts = clean(text).split(" ");
  for (let k = 1; k <= 3 && k < parts.length; k += 1) {
    const candidate = parts.slice(0, k).join(" "); const after = parts.slice(k).join(" ");
    const named = readName(candidate);
    if (!named || named.rest || !verb.test(after)) continue;
    return { name: named.name, after };
  }
  return null;
}

// What is said after a person's name or a verb about money: the amount (or "all"), if any.
const ALL_WORDS = /\b(?:yote|lote|kabisa|kamili|kila kitu|deni lote|deni lake lote|deni langu lote|deni lake|deni langu|deni yote|madeni yote|kumaliza|kuimaliza)\b/i;
function amountIn(text) {
  const money = parseMoneySw(text);
  if (money) return money;
  return null;
}

// ---------- the debts family, as a pure reading (no store): the same intent object whatever hears it ----------
// { kind: "owed-to-me" | "i-owe" | "payment-received" | "payment-made" | "ask-owed-to-me" | "ask-owed-by" | "ask-i-owe" | "unpaid-no-amount",
//   party, amount, currency, all, directionAsk }
function parseDebtIntent(text) {
  const t = clean(text).replace(/[.!]+$/g, "").replace(/\?+$/g, ""); if (!t) return null;
  const norm = numbers.normalizeNumbers(t); const n = norm.text; const lower = n.toLowerCase(); let m; let hit;
  const base = { ambiguous: norm.ambiguous, invalid: norm.invalid };

  // ---- questions ----
  if (/^(?:nani|ni nani|watu gani|wateja gani|wateja wangapi|watu wangapi)\s+(?:ananidai|wananidai|hajanilipa|hawajanilipa|hajalipa|hawajalipa|ana deni nami|wana deni nami|wana madeni kwangu)(?:\s+bado)?$/.test(lower)
    || /^(?:ninamdai nani|ninawadai nani|ninadai nani|ni nani anayenidai|ni wateja gani wananidai|wadeni wangu ni kina nani|wadeni wangu|madeni ya wateja|deni la wateja|orodha ya wadeni|wanaonidai|watu wanaonidai|wanaodaiwa|kuna anayenidai)$/.test(lower)
    || /^(?:orodhesha|onyesha|nionyeshe|nipe)\s+(?:madeni(?: ya wateja| yote)?|wadeni|watu wanaonidai|wanaonidai|wateja wenye deni|wateja wanaodaiwa|orodha ya wadeni)$/.test(lower)) return { kind: "ask-owed-to-me", ...base };
  if (/^(?:nina deni (?:la|kwa) nani|ninadaiwa na nani|nadaiwa na nani|ninadaiwa kiasi gani|nadaiwa kiasi gani|nina madeni gani|madeni yangu|deni langu|deni langu ni kiasi gani|ninadaiwa na kina nani|nadaiwa na kina nani|nani ananidaiwa|ninalodaiwa|ninadaiwa)$/.test(lower)
    || /^(?:orodhesha|onyesha|nionyeshe|nipe)\s+(?:madeni yangu|deni langu|ninachodaiwa|ninachodaiwa na wasambazaji)$/.test(lower)) return { kind: "ask-i-owe", ...base };
  if ((hit = nameBeforeVerb(n, /^(?:ananidai|ana deni kwangu|ana deni kwako|ana deni nami|anadaiwa|ana deni)\s+(?:kiasi gani|shilingi ngapi|ngapi|bado kiasi gani)$/i))) return { kind: "ask-owed-by", party: hit.name, ...base };
  if ((hit = nameBeforeVerb(n, /^(?:hajanilipa|hajalipa)\s+(?:bado\s+)?(?:kiasi gani|ngapi)$/i))) return { kind: "ask-owed-by", party: hit.name, ...base };

  // ---- a customer paid ----
  if ((hit = nameBeforeVerb(n, /^(?:amelipa|amenilipa|wamelipa|wamenilipa|amenipa|amemaliza deni|amemalizia deni|ameshalipa|amelipia)(?:\s+.*)?$/i)) && !/^(?:amelipa|amenilipa) (?:kodi|ada|bili)\b/i.test(hit.after)) {
    const rest = hit.after.replace(/^(?:amelipa|amenilipa|wamelipa|wamenilipa|amenipa|amemaliza deni|amemalizia deni|ameshalipa|amelipia)\s*/i, "");
    const all = /^(?:amemaliza deni|amemalizia deni)/i.test(hit.after) || !rest || ALL_WORDS.test(rest);
    const money = rest ? amountIn(rest.replace(ALL_WORDS, " ")) : null;
    return { kind: "payment-received", party: hit.name, amount: money ? money.amount : null, currency: money ? money.currency : "", all: !money, ...base };
  }
  // "nimepokea 500 kutoka kwa Juma" is read in the income branch (it may be a payment or new income)

  // ---- I paid a supplier / a person I owe ----
  if ((m = /^(?:nimemlipa|nilimlipa|tumemlipa|nimemaliza kumlipa|nimemalizia kumlipa|nimemaliza deni la|nimemalizia deni la|nimelipa deni (?:la|kwa)|nililipa deni (?:la|kwa)|nimelipa madeni (?:ya|kwa)|nimelipa)\s+(.+)$/i.exec(n))) {
    const named = readName(m[1]);
    if (named) {
      const leftover = clean(named.rest.replace(ALL_WORDS, " ").replace(/\b(?:deni|madeni|la|ya|lake|langu|tena)\b/gi, " ").replace(/(?<![\d.,])\d[\d,]*(?:\.\d+)?/g, " ").replace(/\b(?:shillings|dollars|sh|shs|ksh|kshs|kes|tsh|ush)\b/gi, " "));
      const money = amountIn(named.rest.replace(ALL_WORDS, " "));
      if (!leftover) return { kind: "payment-made", party: named.name, amount: money ? money.amount : null, currency: money ? money.currency : "", all: !money, ...base };
    }
  }

  // ---- a customer owes me (clear words) ----
  if ((hit = nameBeforeVerb(n, /^(?:ana deni kwako|ana deni kwangu|ana deni nami|ana deni la|ana deni|anadaiwa|hajanilipa|hajalipa|hawajalipa|hawajanilipa)(?:\s+.*)?$/i))) {
    const rest = hit.after.replace(/^(?:ana deni kwako|ana deni kwangu|ana deni nami|ana deni la|ana deni|anadaiwa|hajanilipa|hajalipa|hawajalipa|hawajanilipa)\s*/i, "").replace(/^(?:la|ya|kiasi cha|bado)\s+/i, "");
    const money = rest ? amountIn(rest) : null;
    if (money) return { kind: "owed-to-me", party: hit.name, amount: money.amount, currency: money.currency, ...base };
    return { kind: "unpaid-no-amount", party: hit.name, ...base };
  }
  if ((m = /^(?:ninamdai|namdai|ninamdai)\s+(.+)$/i.exec(n))) {
    const named = readName(m[1]); const money = named ? amountIn(named.rest) : null;
    if (named && money) return { kind: "owed-to-me", party: named.name, amount: money.amount, currency: money.currency, ...base };
  }
  // ---- "ananidai": the direction is asked, not guessed ----
  if ((hit = nameBeforeVerb(n, /^(?:ananidai|wananidai)\s+.+$/i))) {
    const rest = hit.after.replace(/^(?:ananidai|wananidai)\s+/i, "").replace(/^(?:la|ya|kiasi cha|shilingi)\s+/i, "");
    const money = amountIn(rest);
    if (money) return { kind: "owed-to-me", party: hit.name, amount: money.amount, currency: money.currency, directionAsk: true, ...base };
  }
  // ---- I owe ----
  if ((m = /^(?:nadaiwa|ninadaiwa|ninadaiwa na|nadaiwa na)\s+(.+)$/i.exec(n))) {
    const body = m[1];
    const byName = /\b(?:na|kwa)\s+(.+)$/i.exec(body);
    const partyPart = byName ? byName[1] : ""; const amountPart = byName ? body.slice(0, byName.index) + " " + partyPart : body;
    const named = readName(/^(?:na|kwa)\s/i.test(body) ? body.replace(/^(?:na|kwa)\s+/i, "") : partyPart);
    const money = amountIn(named ? clean(amountPart.replace(named.name, " ")).replace(/\b(?:na|kwa)\s*$/i, "") + " " + named.rest : amountPart);
    if (money && named) return { kind: "i-owe", party: named.name, amount: money.amount, currency: money.currency, ...base };
    if (money) return { kind: "i-owe", party: "", amount: money.amount, currency: money.currency, ...base };
  }
  if ((m = /^(?:nina deni|ninadaiwa|nina madeni)\s+(?:la|kiasi cha|ya)\s+(.+?)\s+(?:kwa|na)\s+(.+)$/i.exec(n))) {
    const named = readName(m[2]); const money = amountIn(m[1]);
    if (named && money) return { kind: "i-owe", party: named.name, amount: money.amount, currency: money.currency, ...base };
  }
  if ((m = /^(?:nina deni|ninadaiwa)\s+(?:kwa|na)\s+(.+)$/i.exec(n))) {
    const named = readName(m[1]); const money = named ? amountIn(named.rest) : null;
    if (named && money) return { kind: "i-owe", party: named.name, amount: money.amount, currency: money.currency, ...base };
  }
  if ((m = /^(?:mteja wangu|mteja)\s+(.+?)\s+(?:hajalipa|hajanilipa)(?:\s+bado)?$/i.exec(n))) {
    const named = readName(m[1]); if (named && !named.rest) return { kind: "unpaid-no-amount", party: named.name, ...base };
  }
  return null;
}

// ---------- the stored debts ----------
const scopeOf = ctx => ({ tenantId: ctx.tenantId, userId: ctx.userId });
const moneyRows = ctx => ctx.store.list({ ...scopeOf(ctx), collection: "money" });
const owedToMe = rows => rows.filter(record => record.data.type === "income" && record.data.unpaid);
const iOwe = rows => rows.filter(record => record.data.type === "expense" && record.data.unpaid && record.data.owing > 0);
const sameParty = (record, who) => Boolean(record.data.party) && nameKey(record.data.party) === nameKey(who);
const asIncome = records => records.map(record => ({ data: { ...record.data, unpaid: false, type: "income" } }));
// `debt: false`: money.js sum() leaves a standalone debt out of cost totals (a debt is not a cost until it is paid), but here the remaining debt itself is what is being added up.
const asOwing = records => records.map(record => ({ data: { ...record.data, unpaid: false, debt: false, type: "expense", category: "other", amount: record.data.owing } }));
const groupBy = records => { const by = {}; for (const record of records) { const who = record.data.party || "Mtu fulani"; (by[who] = by[who] || []).push(record); } return by; };

// A customer pays (all, or some): the oldest unpaid sales are settled first, exactly as the English tool does it ("Otieno paid 500").
async function settleOwedToMe(ctx, who, amount) {
  const scope = scopeOf(ctx);
  const owed = owedToMe(await moneyRows(ctx)).filter(record => sameParty(record, who)).sort((a, b) => String(a.data.day).localeCompare(String(b.data.day)));
  if (!owed.length) return null;
  const payDay = ctx.entryDay || ctx.today; const name = owed[0].data.party;
  let paying = amount === null ? Infinity : amount; let paid = 0;
  for (const record of owed) {
    if (!(paying > 0)) break;
    if (paying >= record.data.amount) {
      await ctx.store.update({ ...scope, record: { ...record, data: { ...record.data, unpaid: false, soldOn: record.data.day, day: payDay } } });
      paid = round(paid + record.data.amount); paying = paying === Infinity ? Infinity : round(paying - record.data.amount);
    } else {
      await ctx.store.update({ ...scope, record: { ...record, data: { ...record.data, amount: round(record.data.amount - paying) } } });
      await ctx.store.add({ ...scope, collection: "money", data: { ...record.data, unpaid: false, amount: paying, soldOn: record.data.day, day: payDay, note: `part payment from ${name}` } });
      paid = round(paid + paying); paying = 0;
    }
  }
  const left = owedToMe(await moneyRows(ctx)).filter(record => sameParty(record, name));
  return { name, paid, currency: owed[0].data.currency, left: left.length ? totalsText(sum(asIncome(left), "income")) : "", over: amount !== null && paying > 0 ? round(paying) : 0 };
}
// I pay someone I owe: the cost was counted when it was bought, so this is never a new expense (as in the English tool).
async function settleIOwe(ctx, who, amount) {
  const scope = scopeOf(ctx);
  const mine = iOwe(await moneyRows(ctx)).filter(record => sameParty(record, who)).sort((a, b) => String(a.data.day).localeCompare(String(b.data.day)));
  if (!mine.length) return null;
  const name = mine[0].data.party; let paying = amount === null ? Infinity : amount; let paid = 0;
  for (const record of mine) {
    if (!(paying > 0)) break;
    const take = paying === Infinity ? record.data.owing : Math.min(paying, record.data.owing);
    const owing = round(record.data.owing - take);
    await ctx.store.update({ ...scope, record: { ...record, data: { ...record.data, owing, unpaid: owing > 0, ...(owing > 0 ? {} : { paidOn: ctx.entryDay || ctx.today }) } } });
    paid = round(paid + take); paying = paying === Infinity ? Infinity : round(paying - take);
  }
  const left = iOwe(await moneyRows(ctx)).filter(record => sameParty(record, name));
  return { name, paid, currency: mine[0].data.currency, left: left.length ? totalsText(sum(asOwing(left), "expense")) : "", over: amount !== null && paying > 0 ? round(paying) : 0 };
}
const overText = (amount, over, currency) => (over > 0 ? ` Ulisema ${moneyShown(amount, currency)}, lakini deni lilikuwa dogo kuliko hilo; nimeandika kilicholipwa tu.` : "");

// Recording a debt. A statement of a debt is plainly bookkeeping, so the "is this farm business?" check is not applied to it.
async function recordDebt(ctx, intent) {
  const run = { ...ctx, hasFarmData: async () => true };
  const base = intent.kind === "owed-to-me"
    ? { type: "income", category: "other", amount: intent.amount, currency: intent.currency, party: intent.party, item: "", note: `owed by ${intent.party}`, debt: true, unpaid: true }
    : { type: "expense", category: "household", amount: intent.amount, currency: intent.currency, party: intent.party, item: "debt", note: `debt to ${intent.party || "someone"}`, debt: true, unpaid: true, owing: intent.amount };
  const result = await recordMoney(run, base);
  if (result.refused) return /five thousand/.test(result.refused) ? SW.full : SW.amountWrong;
  const amount = moneyShown(intent.amount, result.record.data.currency);
  return intent.kind === "owed-to-me" ? LS.owedToMe({ who: intent.party || "Mteja", amount }) : LS.iOwe({ who: intent.party || "mtu fulani", amount });
}

async function askDirection(ctx, intent, text) {
  await ctx.store.setSession({ tenantId: ctx.tenantId, userId: ctx.userId, session: { collection: "_confirm", answers: {}, asking: "confirm", action: { type: "sw-debt", intent: { ...intent, directionAsk: false }, text, language: "sw" }, expiresAt: new Date(Date.now() + 10 * 60000).toISOString() } });
  return LS.askDirection({ who: intent.party, amount: moneyShown(intent.amount, intent.currency) });
}

async function handleDebts(ctx, t) {
  const intent = parseDebtIntent(t); if (!intent) return null;
  const doubt = await askAbout(ctx, t, { ambiguous: intent.ambiguous ? { kind: "money", values: intent.ambiguous.values } : null, invalid: intent.invalid });
  if (doubt) return doubt;
  const rows = await moneyRows(ctx);
  switch (intent.kind) {
    case "owed-to-me":
      if (!(intent.amount > 0)) return null;
      if (intent.directionAsk && DIRECTION_ASK) return askDirection(ctx, intent, t);
      return recordDebt(ctx, intent);
    case "i-owe":
      if (!(intent.amount > 0)) return null;
      return recordDebt(ctx, intent);
    case "unpaid-no-amount": return LS.unpaidNoAmount({ who: intent.party });
    case "payment-received": {
      if (intent.amount !== null && !(intent.amount > 0)) return null;
      const settled = await settleOwedToMe(ctx, intent.party, intent.amount);
      if (!settled) return null; // not one of this person's debtors: left to other readings
      return LS.paidMe({ who: settled.name, paid: moneyShown(settled.paid, settled.currency), left: settled.left, over: overText(intent.amount, settled.over, settled.currency) });
    }
    case "payment-made": {
      if (intent.amount !== null && !(intent.amount > 0)) return null;
      const settled = await settleIOwe(ctx, intent.party, intent.amount);
      if (!settled) return null; // not someone this person owes: it is an ordinary payment (swahili.js)
      return LS.iPaid({ who: settled.name, paid: moneyShown(settled.paid, settled.currency), left: settled.left, over: overText(intent.amount, settled.over, settled.currency) });
    }
    case "ask-owed-to-me": {
      const owed = owedToMe(rows); if (!owed.length) return LS.owedNone;
      const by = groupBy(owed); const named = Object.keys(by).find(who => who !== "Mtu fulani");
      return LS.owedList({ lines: Object.entries(by).map(([who, list]) => `${who} ${totalsText(sum(asIncome(list), "income"))}`).join("; "), total: totalsText(sum(asIncome(owed), "income")), tip: named ? LS.owedTip({ who: named }) : "" });
    }
    case "ask-owed-by": {
      const owed = owedToMe(rows).filter(record => sameParty(record, intent.party));
      return owed.length ? LS.owedBy({ who: owed[0].data.party, total: totalsText(sum(asIncome(owed), "income")) }) : LS.owedByNone({ who: intent.party });
    }
    case "ask-i-owe": {
      const mine = iOwe(rows); if (!mine.length) return LS.iOweNone;
      const by = groupBy(mine); const named = Object.keys(by).find(who => who !== "Mtu fulani");
      return LS.iOweList({ lines: Object.entries(by).map(([who, list]) => `${who} ${totalsText(sum(asOwing(list), "expense"))}`).join("; "), total: totalsText(sum(asOwing(mine), "expense")), tip: named ? LS.iOweTip({ who: named }) : "" });
    }
    default: return null;
  }
}

// ---------- money that came in ----------
// "Nimepata elfu mbili mia tatu leo kwa boda", "Nimepokea elfu tano kwa mpesa kutoka kwa Otieno" (a payment when Otieno owes, else income)
async function handleIncome(ctx, t) {
  const m = /^(?:nimepata|nimepokea|nimeingiza|nimepewa|nilipata|nilipokea|tumepata|tumepokea)\s+(.+)$/i.exec(t); if (!m) return null;
  if (/\b(?:ngapi|kiasi gani|gani)\b/i.test(m[1])) return null;
  const { day, text: body } = takeDay(ctx, m[1]);
  const deal = readDeal(body, "kutoka kwa", { sale: true });
  if (!deal.money || deal.quantity || !(deal.money.amount > 0)) return null;
  const doubt = await askAbout(ctx, t, deal); if (doubt) return doubt;
  if (deal.unclear) return SW.tooManyNumbers;
  const run = day === ctx.today ? ctx : { ...ctx, entryDay: day };
  if (deal.party) {
    const settled = await settleOwedToMe(run, deal.party, deal.money.amount);
    if (settled) return LS.paidMe({ who: settled.name, paid: moneyShown(settled.paid, settled.currency), left: settled.left, over: overText(deal.money.amount, settled.over, settled.currency) });
  }
  const what = clean(deal.item.replace(/^(?:kwa|kutoka)\s+/i, "")).slice(0, 60);
  // money with no item and no person named ("nimepata elfu mbili") is kept only for someone who already keeps records: it may be anything
  const result = await recordMoney(!deal.party && !what ? { ...run, anyGoods: false } : run, { type: "income", category: incomeCategorySw(what), amount: deal.money.amount, currency: deal.money.currency, party: deal.party, item: englishItem(what), note: what || "money received" });
  if (result.refused) return /five thousand/.test(result.refused) ? SW.full : SW.amountWrong;
  return LS.income({ amount: moneyShown(deal.money.amount, result.record.data.currency), what: deal.party ? `${deal.party}${what ? `, ${what}` : ""}` : what, income: totalsText(sum(monthOf(ctx, result.all), "income")), when: day === ctx.today ? "" : ` (${describeDaySw(day, ctx.today)})` });
}

// ---------- a sale told with the buyer first ----------
// "Nimemuuzia Mama Njeri mahindi elfu mbili kwa mkopo", "Amina amenunua mahindi kwa 2000"
async function handleBuyerFirst(ctx, t) {
  let m; let buyer; let rest;
  if ((m = /^(?:nimemuuzia|nimemwuzia|nilimuuzia|nilimwuzia|nimemuuza|nimewauzia|tumemuuzia|tumemwuzia)\s+(.+)$/i.exec(t))) {
    const named = readName(m[1]); if (!named) return null; buyer = named.name; rest = named.rest;
  } else {
    const hit = nameBeforeVerb(t, /^(?:amenunua|wamenunua|amechukua|wamechukua|amenunuliwa)\s+.+$/i); if (!hit) return null;
    buyer = hit.name; rest = hit.after.replace(/^(?:amenunua|wamenunua|amechukua|wamechukua|amenunuliwa)\s+/i, "");
  }
  const { day, text: body } = takeDay(ctx, rest);
  const deal = readDeal(body, "kwa", { sale: true, party: buyer, noParty: true });
  const doubt = await askAbout(ctx, t, deal); if (doubt) return doubt;
  if (!deal.item || deal.item.length > 50) return null;
  if (!deal.money) return SW.noAmount;
  if (deal.unclear) return SW.tooManyNumbers;
  if (!(deal.money.amount > 0)) return null;
  return sellRecord(ctx, deal, { day });
}

// ---------- paying a worker: "Nimemlipa kibarua 500", "Nimelipa vibarua elfu mbili", "Nimemlipa kijana wa boda elfu moja", "Kibarua 500" ----------
const ROLES = [[/^(?:kijana wa boda|boda boda|bodaboda|mwendesha boda|boda)\b/i, "kijana wa boda", "transport"], [/^(?:dereva|mwendesha gari|kondakta|utingo)\b/i, "dereva", "transport"], [/^(?:vibarua|kibarua|kibarua wa|vibarua wa)\b/i, "kibarua", "labour"],
  [/^(?:wafanyakazi|mfanyakazi|msaidizi|wasaidizi)\b/i, "mfanyakazi", "labour"], [/^(?:fundi|mafundi)\b/i, "fundi", "labour"], [/^(?:mchungaji|wachungaji|mlinzi|walinzi)\b/i, "mchungaji", "labour"]];
async function handleRoles(ctx, t) {
  let m; let rest;
  if ((m = /^(?:nimemlipa|nimelipa|nilimlipa|nililipa|nimewalipa|nilewalipa|tumemlipa|tumewalipa|tumelipa)\s+(.+)$/i.exec(t))) rest = m[1];
  else if ((m = /^(?:kibarua|vibarua|ujira wa kibarua|ujira wa vibarua)\s+(.+)$/i.exec(t))) rest = `kibarua ${m[1]}`;
  else return null;
  const role = ROLES.find(([pattern]) => pattern.test(rest)); if (!role) return null;
  const { day, text: body } = takeDay(ctx, rest.replace(role[0], " "));
  const deal = readDeal(body, "kwa", { sale: false, noParty: true });
  if (!deal.money || !(deal.money.amount > 0)) return null;
  const doubt = await askAbout(ctx, t, deal); if (doubt) return doubt;
  if (deal.unclear) return SW.tooManyNumbers;
  const forWhat = clean(deal.item.replace(/^(?:kwa|kulipia)\s+/i, "")).slice(0, 60);
  const run = day === ctx.today ? ctx : { ...ctx, entryDay: day };
  const result = await recordMoney(run, { type: "expense", category: role[2], amount: deal.money.amount, currency: deal.money.currency, party: "", item: englishItem(forWhat || role[1]).slice(0, 60), note: `paid ${role[1]}${forWhat ? ` (${forWhat})` : ""}` });
  if (result.refused) return /five thousand/.test(result.refused) ? SW.full : SW.amountWrong;
  return SW.paid({ who: role[1], amount: moneyShown(deal.money.amount, result.record.data.currency), what: (forWhat || "kazi").toLowerCase(), when: day === ctx.today ? "" : ` (${describeDaySw(day, ctx.today)})` });
}

// ---------- spraying: a cost is a cost; without one nothing is written ----------
async function handleSpray(ctx, t) {
  const m = /^(?:nimepulizia|nimenyunyizia|nilipulizia|nilinyunyizia|tumepulizia|tumenyunyizia|nimepulizia|nimenyunyuzia)\s+(.+)$/i.exec(t); if (!m) return null;
  const { day, text: body } = takeDay(ctx, m[1]);
  const deal = readDeal(body, "kwa", { sale: false, noParty: true });
  const what = clean(deal.item.replace(/\b(?:kwa|dawa|ya|za)\b/gi, " ")).slice(0, 50) || "shamba";
  if (!deal.money) return LS.sprayNoCost({ what });
  const doubt = await askAbout(ctx, t, deal); if (doubt) return doubt;
  if (deal.unclear) return SW.tooManyNumbers;
  if (!(deal.money.amount > 0)) return null;
  const run = day === ctx.today ? ctx : { ...ctx, entryDay: day };
  const result = await recordMoney(run, { type: "expense", category: "chemicals", amount: deal.money.amount, currency: deal.money.currency, item: "pesticide", note: `sprayed ${what}` });
  if (result.refused) return /five thousand/.test(result.refused) ? SW.full : SW.amountWrong;
  return SW.spent({ amount: moneyShown(deal.money.amount, result.record.data.currency), what: `dawa ya kunyunyizia ${what}`, category: "chemicals", spent: totalsText(sum(monthOf(ctx, result.all), "expense")), when: day === ctx.today ? "" : ` (${describeDaySw(day, ctx.today)})` });
}

// ---------- fuzzy questions about totals ----------
const PERIOD_WORD = /\b(leo|jana|wiki hii|wiki iliyopita|mwezi huu|mwezi uliopita|msimu huu|mwaka huu)\b/i;
async function handleTotals(ctx, t) {
  const lower = t.toLowerCase().replace(/\?+$/, "").trim(); let m;
  // a definition ("Faida ya elimu ni nini"), a list of records or anything else that is not about the person's own money is left to the other tools
  if (/\b(?:nini|rekodi|orodha|ghala|video|hali ya hewa|elimu|simu)\b/.test(lower)) return null;
  const period = (PERIOD_WORD.exec(lower) || [])[1] || ""; const PER = "(?:leo|jana|wiki|mwezi|msimu|mwaka)";
  const asked = /\b(?:ngapi|kiasi gani|gani)\b/.test(lower) || /\?$/.test(t);
  if (/^(?:(?:nipe|nionyeshe|onyesha|niambie)\s+)?(?:muhtasari|hesabu)(?:\s+(?:wa|ya))?\s*(?:pesa|biashara)?\s*(?:ya|wa)?\s*(?:leo|jana|wiki hii|wiki iliyopita|mwezi huu|mwezi uliopita|msimu huu|mwaka huu|mwezi|wiki|msimu|mwaka)$/.test(lower)) {
    const asking = period || (/\bwiki\b/.test(lower) ? "wiki hii" : /\bmsimu\b/.test(lower) ? "msimu huu" : /\bmwaka\b/.test(lower) ? "mwaka huu" : "mwezi huu");
    return totalsAnswer(ctx, "profit", asking);
  }
  // listing: "nionyeshe matumizi yangu", "nionyeshe mauzo yangu"
  if ((m = /^(?:nionyeshe|onyesha|nipe|orodhesha)\s+(matumizi|gharama|mauzo|mapato|manunuzi)(?: yangu| zangu| yote)?$/.exec(lower))) {
    const wantExpense = /matumizi|gharama|manunuzi/.test(m[1]);
    const rows = (await moneyRows(ctx)).filter(record => record.data.type === (wantExpense ? "expense" : "income")).slice(0, 8);
    return rows.length ? LS.recent({ lines: rows.map(record => `${describeDaySw(record.data.day, ctx.today)} ${record.data.type === "income" ? "+" : "-"}${moneyShown(record.data.amount, record.data.currency)} ${describeRecord(record)}`).join("; ") }) : SW.latestNone;
  }
  const noun = new RegExp(`^(?:(?:nipe|nionyeshe|onyesha|niambie|hesabu ya|jumla ya)\\s+)*(?:(mauzo|mapato)|(matumizi|gharama|manunuzi)|(faida|hasara))(?: yangu| yetu| zangu)?(?: ya)?(?:\\s+${PER}(?: hii| iliyopita| uliopita| huu)?)?(?:\\s+(?:ni\\s+)?(?:ngapi|kiasi gani))?$`).exec(lower);
  const profitWords = /\b(?:faida yangu|faida yetu|nimepata faida|nina faida|hasara yangu|nimepata hasara|nina hasara|faida leo|faida ya (?:leo|jana|wiki|mwezi|msimu|mwaka))\b/.test(lower);
  const spendWords = /\b(?:nimetumia|nilitumia|nimenunua|nimelipa|matumizi yangu|gharama zangu|manunuzi yangu|jumla ya matumizi)\b/.test(lower);
  const incomeWords = /\b(?:mauzo yangu|mapato yangu|nimeuza|nimepata pesa|nimepata fedha|nimepata kiasi|nimepokea|nimeingiza|nimeuzaje|jumla ya mapato|jumla ya mauzo|pesa nilizopata)\b/.test(lower);
  if (noun ? noun[3] : profitWords && asked) return totalsAnswer(ctx, "profit", period);
  if (noun ? noun[2] : spendWords && asked) {
    const what = (/\bkwa\s+(.+?)(?:\s+(?:leo|jana|wiki hii|wiki iliyopita|mwezi huu|mwezi uliopita|msimu huu|mwaka huu))?$/.exec(lower.replace(/\s+(?:ni\s+)?(?:ngapi|kiasi gani)$/, "")) || [])[1] || "";
    return totalsAnswer(ctx, "expense", period, clean(what.replace(/\b(?:pesa|ngapi|kiasi gani)\b/g, " ")));
  }
  if (noun ? noun[1] : incomeWords && asked) return totalsAnswer(ctx, "income", period);
  return null;
}

// ---------- undo and correct ----------
async function handleUndoCorrect(ctx, t) {
  const lower = t.toLowerCase().replace(/[?]+$/, "").trim(); const scope = scopeOf(ctx); let m;
  if ((m = /^(?:futa|ondoa|ghairi|batilisha)\s+(?:ile\s+|rekodi\s+|ingizo\s+|muamala\s+|mauzo\s+|matumizi\s+|manunuzi\s+)?(?:ya\s+|wa\s+)?(?:mwisho|niliyoandika sasa hivi|niliyoandika mwishoni)(?:\s+(?:ya|wa)?\s*(mauzo|matumizi|mapato|manunuzi|pesa))?$/.exec(lower)) || (m = /^(?:futa|ondoa)\s+(mauzo|matumizi|mapato|manunuzi)\s+(?:ya\s+)?(?:mwisho|ya mwisho)$/.exec(lower))) {
    const kindWord = m[1] || (/^(?:futa|ondoa|ghairi|batilisha)\s+(mauzo|matumizi|manunuzi)/.exec(lower) || [])[1] || "";
    const rows = await moneyRows(ctx);
    const last = rows.find(record => /matumizi|manunuzi/.test(kindWord) ? record.data.type === "expense" : /mauzo|mapato/.test(kindWord) ? record.data.type === "income" : true);
    if (!last) return SW.undoNone;
    await ctx.store.remove({ ...scope, memoryId: last.memoryId });
    return SW.undone({ what: describeRecord(last), amount: moneyShown(last.data.amount, last.data.currency), income: last.data.type === "income" });
  }
  // a correction of the last amount
  let said = null;
  if ((m = /^(?:badilisha|rekebisha|sahihisha|weka)\s+(?:ile\s+)?(?:ya\s+)?(?:mwisho|rekodi ya mwisho|ingizo la mwisho)\s*(?:iwe|kuwa|ni)?\s+(.+)$/.exec(lower))) said = m[1];
  else if ((m = /^(?:samahani|pole|oh|aa|aah)?[ ,.!]*(?:nimekosea[ ,.!]*)?(?:ilikuwa|ni)\s+(.+?)(?:[ ,]+(?:si|sio|siyo)\s+.+)?$/.exec(lower)) && /^(?:samahani|pole|nimekosea)/.test(lower)) said = m[1];
  else if ((m = /^(?:si|sio|siyo)\s+(.+?)[ ,]+(?:ni|ilikuwa|bali)\s+(.+)$/.exec(lower))) said = m[2];
  if (said === null) return null;
  const money = parseMoneySw(said);
  if (!money || !(money.amount > 0) || /[a-z]{4,}/.test(said.replace(/(?:elfu|laki|milioni|mia|moja|mbili|tatu|nne|tano|sita|saba|nane|tisa|kumi|ishirini|thelathini|arobaini|hamsini|sitini|sabini|themanini|tisini|shilingi|shillingi|ksh|bob|na|nusu|ngiri)/g, ""))) return null;
  if (money.ambiguous) { const doubt = await askAbout(ctx, t, { ambiguous: { kind: "money", values: money.ambiguous } }); if (doubt) return doubt; }
  const last = (await moneyRows(ctx))[0];
  if (!last) return LS.nothingToChange;
  const age = Date.now() - Date.parse(last.createdAt);
  const before = `${last.data.type === "income" ? "mapato" : "matumizi"} ya ${moneyShown(last.data.amount, last.data.currency)}${describeRecord(last) ? ` (${describeRecord(last)})` : ""}`;
  if (Number.isFinite(age) && age > 2 * 24 * 3600 * 1000) return LS.tooOld({ before });
  const currency = money.currency && money.currency !== "shillings" ? money.currency : last.data.currency;
  await ctx.store.update({ ...scope, record: { ...last, data: { ...last.data, amount: money.amount, ...(currency ? { currency } : {}), ...(last.data.owing > 0 && last.data.unpaid ? { owing: money.amount } : {}) } } });
  return LS.changed({ before, amount: moneyShown(money.amount, currency) });
}

// ---------- the farm log: harvest, milk, eggs ----------
const LOG_UNIT = { kg: "kg", sack: "sack", bag: "bag", crate: "crate", bunch: "bunch", L: "litres", tin: "tin", tray: "tray", piece: "piece", packet: "packet", bottle: "bottle", bucket: "bucket" };
const LOG_SHOWN = { litres: "L" };
async function writeReading(ctx, entry) {
  const memory = ctx.memory; if (!memory?.addFarmEntryUnlessCapped) return { off: true };
  const rows = memory.listFarmEntries ? (await memory.listFarmEntries({ tenantId: ctx.tenantId, userId: ctx.userId })).map(row => row.content) : [];
  const added = await memory.addFarmEntryUnlessCapped({ tenantId: ctx.tenantId, userId: ctx.userId, content: entry, maxEntries: MAX_LOG });
  return added && added.capped ? { capped: true } : { ok: true, before: rows };
}
async function handleFarmLog(ctx, t) {
  let m;
  if ((m = /^(?:nimevuna|tumevuna|nilivuna|tulivuna|nimekusanya mavuno ya|nimeokota)\s+(.+)$/i.exec(t)) && !/\b(?:mayai)\b/i.test(m[1])) {
    const { day, text: said } = takeDay(ctx, m[1]); const body = numbers.normalizeNumbers(said).text;
    const quantity = parseQuantitySw(body); if (!quantity) return LS.harvestNoAmount;
    if (quantity.ambiguous) { const doubt = await askAbout(ctx, t, { ambiguous: { kind: "quantity", values: quantity.ambiguous } }); if (doubt) return doubt; }
    const left = clean(body.replace(quantity.matched, " ")); const cleaned = clean(left).replace(/^(?:za|ya|wa|la)\s+/i, "").replace(/\s+(?:za|ya|wa|la)$/i, "").toLowerCase();
    if (!cleaned || cleaned.length > 40) return null;
    const crop = englishItem(cleaned); const unit = LOG_UNIT[quantity.unit] || quantity.unit;
    const written = await writeReading(ctx, { kind: "reading", metric: "harvest", value: quantity.value, unit, place: "", crop, day });
    if (written.off) return LS.logOff; if (written.capped) return LS.logFull;
    const year = ctx.today.slice(0, 4); const sameUnit = written.before.filter(item => item.kind === "reading" && item.metric === "harvest" && item.crop === crop && item.unit === unit && String(item.day).slice(0, 4) === year);
    const total = round(sameUnit.reduce((acc, item) => acc + item.value, 0) + quantity.value, 3);
    return LS.harvest({ crop: swahiliItem(crop), qty: unitLabelSw(quantity.value, quantity.unit), when: day === ctx.today ? " leo" : ` (${describeDaySw(day, ctx.today)})`, total: sameUnit.length ? LS.harvestTotal({ crop: swahiliItem(crop), total: unitLabelSw(total, quantity.unit) }) : "" });
  }
  if ((m = /^(?:nimekamua|tumekamua|nilikamua|tulikamua|nimepata maziwa|nimekamua maziwa)\s*(.*)$/i.exec(t)) || (m = /^(maziwa lita .+)$/i.exec(t))) {
    const { day, text: body } = takeDay(ctx, m[1]);
    const quantity = parseQuantitySw(body); if (!quantity || quantity.unit !== "L") return LS.milkNoAmount;
    if (quantity.ambiguous) { const doubt = await askAbout(ctx, t, { ambiguous: { kind: "quantity", values: quantity.ambiguous } }); if (doubt) return doubt; }
    if (quantity.value > 10000) return null;
    const written = await writeReading(ctx, { kind: "reading", metric: "harvest", value: quantity.value, unit: "litres", place: "", crop: "milk", day });
    if (written.off) return LS.logOff; if (written.capped) return LS.logFull;
    return LS.milk({ qty: unitLabelSw(quantity.value, "L"), when: day === ctx.today ? " leo" : ` (${describeDaySw(day, ctx.today)})` });
  }
  if ((m = /^(?:nimekusanya|tumekusanya|nilikusanya|tulikusanya|nimeokota|nimepata)\s+(.+)$/i.exec(t)) && /\bmayai\b/i.test(m[1])) {
    const { day, text: body } = takeDay(ctx, m[1]);
    const norm = numbers.normalizeNumbers(body);
    const quantity = parseQuantitySw(body);
    let value; let unit = "egg"; let ambiguous = norm.ambiguous;
    if (quantity && quantity.unit === "tray") { value = quantity.value; unit = "tray"; ambiguous = quantity.ambiguous ? norm.ambiguous : null; }
    else { const hit = /(?<![\d.,])(\d+)(?![\d.,]*\d)/.exec(norm.text.replace(/\bmayai\b/gi, " ")); if (!hit) return LS.eggsNoAmount; value = Number(hit[1]); }
    if (ambiguous || norm.invalid) { const doubt = await askAbout(ctx, t, { ambiguous: ambiguous ? { kind: "money", values: ambiguous.values } : null, invalid: norm.invalid }); if (doubt) return doubt; }
    if (!(value > 0) || value > 100000) return null;
    const written = await writeReading(ctx, { kind: "reading", metric: "harvest", value, unit, place: "", crop: "eggs", day });
    if (written.off) return LS.logOff; if (written.capped) return LS.logFull;
    return LS.eggs({ qty: unit === "tray" ? `trei ${value}` : String(value), when: day === ctx.today ? " leo" : ` (${describeDaySw(day, ctx.today)})` });
  }
  return null;
}
void LOG_SHOWN;

async function handle(ctx) {
  try { return await handleLedger({ ...ctx, anyGoods: true }); } catch (error) { if (error === NOT_FARM) return null; throw error; }
}

async function handleLedger(ctx) {
  const t = clean(ctx.text).replace(/[.!]+$/g, "");
  if (!t || t.length > 300) return null;
  const answers = [handleFarmLog, handleSpray, handleRoles, handleBuyerFirst, handleDebts, handleIncome, handleUndoCorrect, handleTotals];
  for (const read of answers) { const answer = await read(ctx, t); if (answer) return answer; }
  return null;
}

// "ndiyo" to a question asked here: an amount ("Je, ni 4,500?") records the sentence again with that reading; a direction ("Je, Juma ana deni kwako?") records the debt.
const confirms = {
  "sw-amount": async (ctx, action) => (await handle({ ...ctx, text: action.text })) || (await swahili.handle({ ...ctx, text: action.text })) || LS.retry,
  "sw-debt": async (ctx, action) => (await recordDebt(ctx, action.intent)) || LS.retry
};

module.exports = Object.freeze({ handle, confirms, parseDebtIntent, LS, DIRECTION_ASK });
