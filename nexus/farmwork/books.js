"use strict";

const { clean, parseMoney, parseQuantity, formatMoney, titleCase, round, plural, whenOf, UNIT_WORDS } = require("./parse.js");
const { startGuided, askConfirm } = require("./guided.js");
const { nameKey } = require("./fields.js");
const { findItems } = require("./inventory.js");
const money = require("./money.js");
const amounts = require("./books-amounts.js");
const { describeDay } = require("../personal/dates.js");

// Everyday bookkeeping, said the way people say it. The farm money toolkit (money.js) understands one careful phrasing ("sold 3 bags of maize for 4500"); this front door understands the rest of
// English ("sold maize 4500", "sold eggs 15 trays at 450", "sold 1 goat 12000 cash and 3 chickens 4500 mpesa", "paid rent 5000", "Peter 5 days at 500", "John owes me 800", "what did I earn today") by
// turning it into that careful phrasing, or by asking ONE short question, and then letting money.js do the recording and the arithmetic. It never guesses an amount: "4.500" and "4 5 0 0" are asked about,
// and a sale with no price is asked for the price and kept half-finished until it is given (see the `templates` below).
//
// Who it is for: a farmer, or a shopkeeper with no farm records at all. A shop's rent, electricity, labour and stock are business costs (a farmer's electricity bill stays a household cost, as before).

// ---------- small helpers ----------
const NOT_A_NAME = /^(?:sold|bought|purchased|spent|paid|got|made|earned|received|worked|gave|took|i|we|you|he|she|they|it|who|whom|someone|somebody|nobody|everyone|everybody|anyone|anybody|the|my|our|your|this|that|please|customers?|people|clients?|buyers?|nothing|how|what|which|when|where|why|and|or|but|if|so|also|then|still|just|no one|no|yes|there|here)$/i;
const NAMEP = "((?:the |my |our )?[A-Za-z][A-Za-z'.-]*(?: [A-Za-z][A-Za-z'.-]*){0,2}?)";
const AMT = amounts.MONEY_TOKEN;
const FARM_CATEGORIES = new Set(["crops", "livestock", "milk", "eggs", "seed", "fertiliser", "chemicals", "feed", "veterinary"]);
const listMoney = ctx => ctx.store.list({ tenantId: ctx.tenantId, userId: ctx.userId, collection: "money" });
const scopeOf = ctx => ({ tenantId: ctx.tenantId, userId: ctx.userId });
const runMoney = (ctx, text, extra = {}) => money.handle({ ...ctx, text, anyGoods: true, ...extra });
const personName = raw => titleCase(clean(raw).replace(/^(?:the|my|our)\s+/i, ""));
const sameCurrency = (a, b) => !money.isSpecific(a) || !money.isSpecific(b) || a === b;
const totalsOf = (rows, field = "amount") => rows.reduce((acc, record) => { const key = money.currencyKey(rows, record.data.currency); acc[key] = round((acc[key] || 0) + record.data[field]); return acc; }, {});
const withoutMonth = reply => reply.replace(/ (?:Income|Spent) this month: [^]*$/, "");

// A farmer (or anyone keeping a herd, fields or a farm log) as opposed to a shopkeeper. Decided by what they have recorded, never by asking.
async function isFarmer(ctx) {
  try {
    for (const collection of ["field", "animal", "animal_event", "activity", "pest"]) if ((await ctx.store.list({ ...scopeOf(ctx), collection })).length) return true;
    if (ctx.memory?.listFarmEntries && (await ctx.memory.listFarmEntries(scopeOf(ctx))).length) return true;
    return (await listMoney(ctx)).some(record => FARM_CATEGORIES.has(record.data.category));
  } catch { return false; }
}
async function hasMoneyRecords(ctx) { try { return (await listMoney(ctx)).length > 0; } catch { return false; } }

// "I sold maize" is said with a lot of small words around it. Returns { verb, rest } with the subject and the filler taken off, or null.
const VERB = /^(?:(?:i|we)(?:'ve| have)?\s+)?(?:(?:just|also|already|now|then)\s+)*(sold|bought|purchased|received|got|earned|made|spent|paid|gave|took)\b\s*(.*)$/i;
function tidy(text) {
  let t = clean(text).replace(/[.!?]+$/g, "");
  t = t.replace(/^(?:(?:please|kyro|ok|okay|hey|hi|hello|now|and|so|yes|sure|then|well|um|uh)[, ]+)+/i, "");
  // "record that I sold ...", "log: sold ..."
  t = t.replace(/^(?:record|note|log|write down|enter)(?: down)?(?: that)?\s*[:,-]?\s+(?=(?:i |we )?(?:sold|bought|purchased|spent|paid|received|got)\b)/i, "");
  return clean(t);
}
// "today"/"this morning" say nothing a record needs (an entry is today's unless another day is said); the other days (yesterday, last Friday, 10 July) are read by whenOf.
const withoutToday = t => clean(t.replace(/\s*,?\s*\b(?:today|this morning|this afternoon|this evening|tonight|just now|earlier today)\b/gi, "").replace(/^(?:today|this morning|this afternoon|this evening)\s*,?\s*/i, ""));

// ---------- 1. sales and purchases without 'for' ----------
const CREDIT_TAIL = /\s+(on credit|on account|on loan|unpaid|to pay later|will pay later|pay later|paying later)$/i;

// One sale or purchase, as one piece of a sentence. verb: "sold" | "bought". Returns
//   { changed, canonical, payment }                     the careful phrasing for money.js (changed: false when it was already fine),
//   { unsure: { says, candidate }, canonical, payment } an amount that could be two things,
//   { ask: "price"|"unit", ... }                        something essential is missing,
//   null                                                not something this reads.
function readPiece(verb, restRaw) {
  let rest = clean(restRaw); let payment = ""; let credit = "";
  const pay = new RegExp(`\\s+(?:(?:by|via|in|on|through|using|with|thru|paid by|paid in|paid with)\\s+)?(${amounts.PAYMENT_WORDS})$`, "i").exec(rest);
  if (pay && /\d/.test(rest.slice(0, pay.index))) { payment = amounts.paymentLabel(pay[1]); rest = rest.slice(0, pay.index); }
  const creditMatch = CREDIT_TAIL.exec(rest);
  if (creditMatch) { credit = ` ${creditMatch[1]}`; rest = rest.slice(0, creditMatch.index); }
  if (!rest) return null;
  const unchanged = { changed: false, canonical: `${verb} ${clean(`${rest}${credit}`)}`, payment };

  // "4 5 0 0" said digit by digit
  const digits = amounts.spokenDigits(rest);
  if (digits) {
    const run = /(?<![\d.,])\d(?: \d){2,}(?![\d.,])/;
    const inner = readPiece(verb, `${clean(rest.replace(run, String(digits)))}${credit}`);
    if (!inner || inner.ask || inner.unsure || !inner.canonical) return null;
    return { ...inner, unsure: { says: rest.match(run)?.[0] || "", candidate: digits }, payment: inner.payment || payment, changed: true, incomplete: true };
  }

  // "worth": "sold 4500 worth of maize", "sold maize worth 4500"
  let m;
  if ((m = new RegExp(`^(${AMT})\\s+worth\\s+of\\s+(.+)$`, "i").exec(rest))) { const token = amounts.readToken(m[1]); if (token && !token.unsure) return { changed: true, canonical: `${verb} ${m[2]} for ${token.text}${credit}`, payment }; }
  if ((m = new RegExp(`^(.+?)\\s+worth\\s+(${AMT})$`, "i").exec(rest))) { const token = amounts.readToken(m[2]); if (token && !token.unsure) return { changed: true, canonical: `${verb} ${m[1]} for ${token.text}${credit}`, payment }; }

  // "... at 450": a price. For things counted ("15 trays of eggs at 450") it is the price of ONE, so the sale is 15 x 450; for kilos and litres nobody can tell ("20 kg at 4500"), so that is asked.
  if ((m = new RegExp(`^(.*?\\S)\\s+(?:at|@)\\s+(${AMT})(\\s+(?:to|from|on|in|by|via)\\s+\\S.*)?$`, "i").exec(rest))) {
    const token = amounts.readToken(m[2]);
    if (!token) return unchanged;
    const after = m[3] ? ` ${clean(m[3])}` : "";
    const pre = amounts.quantityFirst(m[1]);
    if (!pre.quantity && !(pre.count && pre.count.value > 1)) return { ...unchanged, changed: false };
    if (pre.quantity && !pre.item) return { ask: "item", verb, payment, quantity: pre.quantity.matched, tail: `at ${token.text} each${credit}` };
    if (token.unsure) return { unsure: { says: m[2], candidate: token.unsure }, canonical: `${verb} ${pre.quantity ? pre.phrase : clean(m[1])} at ${token.unsure} each${after}${credit}`, payment, changed: true, incomplete: true };
    if (pre.quantity && amounts.MEASURED.has(pre.quantity.unit)) return { ask: "unit", verb, payment, phrase: `${pre.phrase}${after}`, price: token.text, credit };
    if (pre.quantity && pre.quantity.value === 1) return { changed: true, canonical: `${verb} ${pre.phrase}${after} for ${token.text}${credit}`, payment };
    return { changed: true, canonical: `${verb} ${pre.quantity ? pre.phrase : clean(m[1])} at ${token.text} each${after}${credit}`, payment };
  }

  // "... 8500 each", "... 300 each", "... 45 per kg": the price of one, said after the thing without "at"
  if ((m = new RegExp(`^(.*?\\S)\\s+(${AMT})\\s+(each|apiece|a piece|per piece|per item|(?:per|a|/)\\s*(?:${UNIT_WORDS}))$`, "i").exec(rest)) && !/\b(?:for|at|@|of|to|from)$/i.test(m[1])) {
    const token = amounts.readToken(m[2]); const pre = amounts.quantityFirst(m[1]);
    if (token && token.amount > 0 && (pre.quantity || (pre.count && pre.count.value > 1))) {
      if (token.unsure) return { unsure: { says: m[2], candidate: token.unsure }, canonical: `${verb} ${pre.quantity ? pre.phrase : clean(m[1])} at ${token.unsure} ${m[3]}${credit}`, payment, changed: true, incomplete: true };
      return { changed: true, canonical: `${verb} ${pre.quantity ? pre.phrase : clean(m[1])} at ${token.text} ${m[3]}${credit}`, payment };
    }
  }

  // a trailing amount: "maize 4500", "3 sacks of maize 4500", "sukuma wiki 200 shillings", "1 goat 12000"
  // ("maize 4500 to Mary", "sugar 2000 from Mama Fatuma": who it was to or from is kept, and goes before the price)
  const who = /\s+((?:from|to)\s+(?:my |the )?[A-Za-z][A-Za-z' -]{0,30})$/i.exec(rest);
  const split = (who && amounts.splitTrailingMoney(rest.slice(0, who.index))) || amounts.splitTrailingMoney(rest);
  if (split) {
    const withWho = Boolean(who) && split.head !== undefined && !amounts.splitTrailingMoney(rest);
    const token = amounts.readToken(split.token);
    if (!token || !(token.amount > 0)) return null;
    const head = `${amounts.quantityFirst(split.head).phrase}${withWho ? ` ${clean(who[1])}` : ""}`;
    if (!/[a-z]/i.test(head)) return null;
    if (token.unsure || split.spaced) { const candidate = token.unsure || token.amount; return { unsure: { says: split.said || split.token, candidate }, canonical: `${verb} ${head} for ${candidate}${credit}`, payment: payment || split.payment, changed: true, incomplete: true }; }
    return { changed: true, canonical: `${verb} ${head} for ${token.text}${credit}`, payment: payment || split.payment };
  }

  // already says "for 4500", "KSh 4500", "4500 shillings", "per", "each": money.js reads it
  if (/(?:\bfor|@)\s*(?:about |around )?(?:[$€£₦]|ksh|kshs|kes)?\s?\d|\b(?:each|apiece|per|price)\b|(?:^|\s)(?:ksh|kshs|kes|tsh|ugx|usd)\s?\d|\d\s?(?:shillings?|bob|ksh|kshs|kes|dollars?|usd|naira)\b|[$€£₦]\s?\d/i.test(rest)) {
    // "sold 1 bag at 4500 each": a quantity and a price and no item
    const lead = parseQuantity(rest);
    if (lead && lead.index === 0 && /^\s*(?:at|@|for)\b/i.test(rest.slice(lead.matched.length))) return { ask: "item", verb, payment, quantity: lead.matched, tail: `${clean(rest.slice(lead.matched.length))}${credit}` };
    // an amount said as 4.500 still needs asking about
    const odd = /(?:\bfor|@|\bat)\s*(?:about |around )?(?:[$€£₦]|ksh|kshs|kes)?\s?(\d{1,3}\.\d{3})(?![\d])/i.exec(rest);
    if (odd) return { unsure: { says: odd[1], candidate: Number(odd[1].replace(".", "")) }, canonical: `${verb} ${rest.replace(odd[1], String(Number(odd[1].replace(".", ""))))}${credit}`, payment, changed: true, incomplete: true };
    // "eggs 15 trays at 450 each": the grammar reads the quantity first ("15 trays of eggs at 450 each"); said the other way round the item was lost
    const q = parseQuantity(rest);
    if (q && q.index > 0) {
      const before = clean(rest.slice(0, q.index));
      if (before && !/\d/.test(before) && !/\b(?:for|at|to|from|of|on|in|by|via|per|each|@)\b/i.test(before)) return { changed: true, canonical: `${verb} ${q.matched} of ${before}${rest.slice(q.index + q.matched.length)}${credit}`, payment };
    }
    return unchanged;
  }

  // no price at all: "sold maize", "bought fertiliser", "sold 3 bags of maize"
  if (!/[$€£₦]|\d{3,}/.test(rest) && rest.split(" ").length <= 6 && !/[,;:?]/.test(rest) && !/\b(?:and|but|then|plus|because|when|while|if|who|which|that)\b/i.test(rest)) {
    const pre = amounts.quantityFirst(rest);
    const item = clean(pre.quantity ? pre.item : rest).replace(/^(?:a|an|the|some|my|our|more|new|another)\s+/i, "");
    if (item && !/\d/.test(item) && item.split(" ").length <= 4) return { ask: "price", verb, item, phrase: pre.quantity ? pre.phrase : item, payment, credit };
  }
  return null;
}

// Several things said together ("sold 1 goat 12000 cash and 3 chickens 4500 mpesa"): each is its own piece, and only when every piece has its own amount.
function splitPieces(rest) {
  const pieces = clean(rest).split(/\s*(?:,|;|\band\b|\bplus\b|\bthen\b|\balso\b)\s+(?=\S)/i).map(clean).filter(Boolean);
  if (pieces.length < 2 || pieces.length > 6) return [clean(rest)];
  return pieces;
}

// The whole sentence. Returns null (not a sale/purchase this reads), or { pieces: [{ text, payment }], unsure, ask }.
function readTrade(t) {
  // "supplier Mama Fatuma delivered 20 crates of eggs 6000": bought from her
  const sup = new RegExp(`^(?:the )?supplier\\s+${NAMEP}\\s+(?:delivered|brought|supplied|sent|dropped off)\\s+(.+)$`, "i").exec(t);
  if (sup && validName(sup[1])) {
    const piece = readPiece("bought", sup[2]);
    if (!piece || piece.ask || piece.unsure) return null;
    const seller = personName(sup[1]); const at = Math.max(piece.canonical.lastIndexOf(" for "), piece.canonical.lastIndexOf(" at "));
    return { pieces: [{ ...piece, canonical: at > 0 ? `${piece.canonical.slice(0, at)} from ${seller}${piece.canonical.slice(at)}` : `${piece.canonical} from ${seller}`, changed: true }] };
  }
  const m = VERB.exec(t);
  if (!m || !/^(?:sold|bought|purchased)$/i.test(m[1])) return null;
  const firstVerb = /^sold$/i.test(m[1]) ? "sold" : "bought";
  const rest = clean(m[2]);
  if (!rest) return null;
  // pieces: later ones may carry their own verb ("sold maize 3000 and bought seed 500")
  const raw = splitPieces(rest);
  // a part with another verb ("... and paid the transporter 500") is money.js's careful business, not an item
  if (raw.slice(1).some(piece => /^(?:i |we )?(?:paid|pay|spent|received|got|earned|made|gave|took)\b/i.test(piece))) return null;
  const pieces = []; let verb = firstVerb;
  for (const piece of raw) {
    const own = /^(sold|bought|purchased)\s+(.+)$/i.exec(piece);
    if (own) { verb = /^sold$/i.test(own[1]) ? "sold" : "bought"; }
    pieces.push({ verb, body: own ? own[2] : piece });
  }
  const read = pieces.map(piece => readPiece(piece.verb, piece.body));
  // a sentence is only split into several when every part has its own amount; otherwise it is ONE ("sold maize and beans 4500")
  if (pieces.length > 1 && read.some(item => !item || item.ask)) { const whole = readPiece(firstVerb, rest); return whole ? { pieces: [whole] } : null; }
  if (read.some(item => !item)) return null;
  return { pieces: read };
}

// ---------- 2. costs: rent, electricity, labour, stock, a farm hand ----------
const COST_NOUNS = "(?:house rent|shop rent|stall rent|rent|electricity|power|kplc|water bill|labou?r|wages|salary|salaries|fuel|diesel|petrol|transport|fare|fares|airtime|data bundles?|internet|wifi|stock|packaging|repairs?|licen[sc]e|permit|insurance|tax|mpesa fees|bank charges|cleaning|security|advertising|marketing|storage|delivery)";
const FARMER_HOUSEHOLD = /^(?:electricity|power|kplc|water bill|airtime|data bundles?|internet|wifi)$/i;
const ROLE_WORDS = "(?:farm ?hand|farm ?hands|casual(?: labou?rer)?|labou?rer|worker|house ?help|shamba boy|watchman|guard|driver|cleaner|mason|fundi|boda rider|herdsman|herd boy|shop assistant|assistant|cook|tailor|barber|helper|attendant|salesperson|sales girl)";
const TIME_UNIT = "(days?|hours?|weeks?|months?)";

async function readCost(ctx, t) {
  let m; const farmer = async noun => (FARMER_HOUSEHOLD.test(clean(noun)) ? await isFarmer(ctx) : false);
  // "paid rent 5000", "paid for fuel 500", "paid electricity 1500", "rent 5000", "fuel for boda 500", "paid labour 1500"
  if ((m = new RegExp(`^(?:(?:i |we )?(?:paid|spent|gave)\\s+)?(?:for\\s+)?(?:my |the |our |a )?(${COST_NOUNS})(?:\\s+(?:for|on|of)\\s+(.+?))?\\s+(?:of |was |is |at |:)?(${AMT})$`, "i").exec(t))) {
    if (await farmer(m[1])) return null; // a farmer's electricity or airtime is a household cost, as it always was
    const token = amounts.readToken(m[3]); if (!token) return null;
    if (token.unsure) return { unsure: { says: m[3], candidate: token.unsure }, canonical: `spent ${amounts.sayAmount(token.unsure)} on ${clean(m[1])}${m[2] ? ` for ${m[2]}` : ""}`, payment: "" };
    return { canonical: `spent ${token.text} on ${clean(m[1])}${m[2] ? ` for ${clean(m[2])}` : ""}`, payment: "" };
  }
  // "paid the farm hand 200", "farm hand 200", "paid the watchman 300 today"
  if ((m = new RegExp(`^(?:(?:i |we )?(?:paid|gave)\\s+)?(?:my |the |our |a )?(${ROLE_WORDS})\\s+(?:wages |salary |pay )?(${AMT})(?:\\s+(?:wages|salary|for the day))?$`, "i").exec(t))) {
    const token = amounts.readToken(m[2]); if (!token) return null;
    if (token.unsure) return { unsure: { says: m[2], candidate: token.unsure }, canonical: `spent ${amounts.sayAmount(token.unsure)} on ${clean(m[1]).toLowerCase()} wages`, payment: "" };
    return { canonical: `spent ${token.text} on ${clean(m[1]).toLowerCase()} wages`, payment: "" };
  }
  // "Peter 5 days at 500", "paid Peter 5 days at 500", "Peter worked 5 days at 500 per day": the days times the day rate
  if ((m = new RegExp(`^(?:(?:i |we )?paid\\s+)?${NAMEP}\\s+(?:worked\\s+|for\\s+)?(\\d+(?:\\.\\d+)?)\\s+${TIME_UNIT}\\s+(?:at|@|for)\\s+(${AMT})(?:\\s+(?:per|a|each|/)\\s*(?:day|hour|week|month))?(?:\\s+(?:each|every))?$`, "i").exec(t)) && !NOT_A_NAME.test(clean(m[1]).split(" ")[0])) {
    const token = amounts.readToken(m[4]); const count = Number(m[2]);
    if (!token || !(count > 0) || !(token.amount > 0)) return null;
    if (token.unsure) return { unsure: { says: m[4], candidate: token.unsure }, canonical: `paid ${personName(m[1])} ${round(count * token.unsure)} for ${count} ${m[3].toLowerCase()} of labour`, payment: "" };
    const total = round(count * token.amount);
    const currency = token.currency ? (/^[$€£₦]$/.test(token.currency) ? token.currency : `${token.currency} `) : "";
    return { canonical: `paid ${personName(m[1])} ${currency}${total} for ${count} ${m[3].toLowerCase()} of labour`, payment: "" };
  }
  // "paid Peter 3000 wages", "paid Mary 1500 salary": a person and what for, said after the amount
  if ((m = new RegExp(`^(?:i |we )?paid\\s+${NAMEP}\\s+(${AMT})\\s+(wages|salary|pay|labou?r|transport|fare|rent|commission)$`, "i").exec(t)) && !NOT_A_NAME.test(clean(m[1]).split(" ")[0]) && !new RegExp(`^${COST_NOUNS}$`, "i").test(clean(m[1]))) {
    const token = amounts.readToken(m[2]); if (!token) return null;
    if (token.unsure) return { unsure: { says: m[2], candidate: token.unsure }, canonical: `paid ${personName(m[1])} ${amounts.sayAmount(token.unsure)} for ${m[3].toLowerCase()}`, payment: "" };
    return { canonical: `paid ${personName(m[1])} ${token.text} for ${m[3].toLowerCase()}`, payment: "" };
  }
  return null;
}

// ---------- 3. 'made 3000 selling mandazi' ----------
function readEarning(t) {
  const m = new RegExp(`^(?:(?:i|we)\\s+)?(?:just\\s+)?(received|got|earned|made|took|took in)\\s+(${AMT})\\s+(?:by\\s+|from\\s+)?selling\\s+(.+)$`, "i").exec(t);
  if (!m) return null;
  const token = amounts.readToken(m[2]); if (!token) return null;
  if (token.unsure) return { unsure: { says: m[2], candidate: token.unsure }, canonical: `got ${amounts.sayAmount(token.unsure)} from selling ${m[3]}`, payment: "" };
  return { canonical: `got ${token.text} from selling ${m[3]}`, payment: "" };
}

// ---------- 4. what did I earn today ----------
const PERIOD_RE = new RegExp(`\\b(${money.PERIOD})\\b`, "i");
function readSummary(t) {
  let lower = clean(t).toLowerCase().replace(/[?!.]+$/g, "").replace(/\b(what|how|where)(?:'s|’s)\b/g, "$1 is");
  lower = lower.replace(/^(?:(?:please|kyro|hey|can you|could you|tell me|let me know|i want to know|i would like to know|do you know|how about)[, ]+)+/, "");
  const pm = PERIOD_RE.exec(lower);
  const period = pm ? pm[1] : "";
  let core = clean(pm ? `${lower.slice(0, pm.index)} ${lower.slice(pm.index + pm[0].length)}` : lower).replace(/^'s\s*/, "").replace(/\b(?:so far|in total|altogether|in all|overall)\b/g, "").replace(/\s+/g, " ").trim();
  core = core.replace(/\s+(?:in|for|on|during|of)$/, "").replace(/^(?:in|for|on|during)\s+/, "");
  // "... from my farm", "... in the shop": the whole business is what is asked about, not a kind of sale
  core = core.replace(/\s+(?:from|on|in|with|at) (?:the |my |our )?(?:whole |entire )?(?:farm|business|shop|stall|duka|kiosk|farming|farm work)$/, "");
  // "how much income today", "how much sales this week"
  core = core.replace(/^how much (income|sales|revenue|takings|profit)$/, "what is my $1").replace(/^how much (?:money|cash)$/, "how much money did i make");
  const withPeriod = text => `${text}${period ? ` ${period}` : ""}`;
  let m;
  const earnVerbs = "(?:earn|earned|make|made|get|got|take|took|sell|sold|bring in|brought in|receive|received|collect|collected|bring|brought)";
  if (new RegExp(`^(?:what|how much)(?: money| cash| sales)? (?:(?:did|have|do|will) )?(?:i|we) ${earnVerbs}(?: in)?(?: sales| income)?$`).test(core)
    || /^(?:what (?:is|are|was|were)|show|tell me|give me|how (?:is|are|were|was)|how much (?:is|are|was|were)) (?:my |our |the )?(?:total |daily |weekly |monthly |today'?s )?(?:sales|income|earnings|takings|revenue|turnover)$/.test(core)
    || /^(?:my |our |total |the )?(?:sales|income|earnings|takings|revenue|turnover)$/.test(core)) return { kind: "income", canonical: withPeriod("how much did i earn") };
  if ((m = /^(?:what|how much)(?: money| cash)? (?:did|have|do) (?:i|we) (?:spend|spent|pay|paid out|use|used)(?: out)?(?: on (.+))?$/.exec(core))) return { kind: "expense", canonical: withPeriod(`how much did i spend${m[1] ? ` on ${m[1]}` : ""}`) };
  if ((m = /^(?:what (?:is|are|was|were)|show|tell me|give me|how (?:is|are|were|was)|how much (?:is|are|was|were)) (?:my |our |the )?(?:total |daily |weekly |monthly )?(?:expenses|expenditure|spending|costs|outgoings)$/.exec(core)) || /^(?:my |our |total |the )?(?:expenses|spending|costs|expenditure|outgoings)$/.test(core)) return { kind: "expense", canonical: withPeriod("how much did i spend") };
  if (/^(?:(?:what|how much)(?: is| was| are)? )?(?:my |our |the |total |net )*(?:profit|net profit|net income|margin|gain)$/.test(core) || /^did (?:i|we) (?:make|get) (?:a |any )?(?:profit|loss|money)$/.test(core) || /^how much profit (?:did|have) (?:i|we) (?:make|made|get|got)$/.test(core) || /^what (?:was|is) (?:my |our )?(?:profit|loss)$/.test(core)) return { kind: "profit", canonical: withPeriod("what is my profit") };
  return null;
}

// ---------- 5. standalone debts ----------
const AMOUNT_OR_NONE = `(?:\\s+(?:about |around )?(${AMT}))?`;
function ownerName(raw) { return personName(raw); }
// a person or a business, not "rent" or "the farm hand" (those are costs, read by readCost)
function validName(raw) {
  const bare = clean(raw).replace(/^(?:the|my|our)\s+/i, ""); const first = bare.split(" ")[0];
  return Boolean(first) && !NOT_A_NAME.test(first) && !NOT_A_NAME.test(clean(raw)) && !new RegExp(`^${COST_NOUNS}$`, "i").test(bare) && !new RegExp(`^${ROLE_WORDS}$`, "i").test(bare);
}

async function partyRows(ctx, name, predicate) { return (await listMoney(ctx)).filter(record => record.data.party && nameKey(record.data.party) === nameKey(name) && predicate(record)); }
const owedToMeRows = record => record.data.type === "income" && record.data.unpaid;
const owedByMeRows = record => record.data.type === "expense" && record.data.unpaid && record.data.owing > 0;
const showOwed = (rows, field = "amount") => money.showTotals(totalsOf(rows, field));

async function addDebt(ctx, direction, party, said, item) {
  const amount = said.amount; const currency = said.currency;
  const entry = direction === "owed-to-me"
    ? { type: "income", category: "other", amount, currency, party, item: item || "credit", note: `${party} owes me`, unpaid: true, debt: true }
    : { type: "expense", category: "other", amount, currency, party, item: item || "credit", note: `I owe ${party}`, unpaid: true, owing: amount, debt: true };
  const result = await money.recordMoney({ ...ctx, anyGoods: true }, entry);
  if (result.refused) return result.refused;
  const shown = formatMoney(amount, result.record.data.currency);
  if (direction === "owed-to-me") {
    const all = result.all.filter(record => record.data.party && nameKey(record.data.party) === nameKey(party) && owedToMeRows(record));
    return `Recorded: ${party} owes you ${shown}${item ? ` (${item})` : ""}. I have not counted it as income yet. When ${party.split(" ")[0]} pays, say "${party} paid 500" (or the amount) and I will count it.${all.length > 1 ? ` ${party} now owes you ${showOwed(all)} in all.` : ""}`;
  }
  const all = result.all.filter(record => record.data.party && nameKey(record.data.party) === nameKey(party) && owedByMeRows(record));
  return `Recorded: you owe ${party} ${shown}${item ? ` (${item})` : ""}. It is not counted as a cost until you pay it. When you pay, say "I paid ${party} 2000" (or the amount).${all.length > 1 ? ` You now owe ${party} ${showOwed(all, "owing")} in all.` : ""}`;
}

// "I paid the supplier 2000": paying off what is owed. A debt kept on its own (above) becomes a cost when it is paid; something bought on credit was counted when it was bought, so paying it is not a second cost.
async function payOwed(ctx, creditor, said) {
  const rows = (await partyRows(ctx, creditor, owedByMeRows)).sort((a, b) => String(a.data.day).localeCompare(String(b.data.day)));
  if (!rows.length) return null;
  const who = rows[0].data.party; const scope = scopeOf(ctx);
  const usable = said ? rows.filter(record => sameCurrency(said.currency, record.data.currency)) : rows;
  if (!usable.length) return `You owe ${who} ${showOwed(rows, "owing")}, not in ${said.currency}, so I have changed nothing. Say the amount again in the same money.`;
  let paying = said ? said.amount : Infinity; let paid = 0; let counted = 0;
  for (const record of usable) {
    if (!(paying > 0)) break;
    const take = paying === Infinity ? record.data.owing : Math.min(paying, record.data.owing);
    const owing = round(record.data.owing - take);
    await ctx.store.update({ ...scope, record: { ...record, data: { ...record.data, owing, unpaid: owing > 0, ...(owing > 0 ? {} : { paidOn: ctx.entryDay || ctx.today }) } } });
    if (record.data.debt) {
      const result = await money.recordMoney({ ...ctx, anyGoods: true }, { type: "expense", category: record.data.category || "other", amount: take, currency: record.data.currency, party: who, item: `paid ${who}`, note: `paid ${who}`, settlement: true });
      if (result.refused) return result.refused;
      counted = round(counted + take);
    }
    paid = round(paid + take); paying = paying === Infinity ? Infinity : round(paying - take);
  }
  const left = (await partyRows(ctx, creditor, owedByMeRows));
  const currency = usable[0].data.currency;
  const note = counted ? ` ${formatMoney(counted, currency)} of it is counted as a cost now.` : " That is not a new cost: it was counted when you bought it.";
  const over = said && paying > 0 ? ` You only owed ${who} ${formatMoney(paid, currency)}, so that is all I recorded.` : "";
  return `Recorded: you paid ${who} ${formatMoney(paid, currency)} of what you owed.${note}${over}${left.length ? ` You still owe ${who} ${showOwed(left, "owing")}.` : ` You owe ${who} nothing now.`}`;
}

async function readDebt(ctx, t) {
  let m;
  const money_ = raw => { const token = amounts.readToken(raw); return token && token.amount > 0 ? token : null; };
  const ask = (template, extra, question) => startGuided(ctx, template, {}, extra);
  // ---- questions ----
  if ((m = new RegExp(`^(?:how much (?:does|did|is) ${NAMEP} (?:still )?(?:owe|owing)(?: me| us)?|what (?:does|did) ${NAMEP} (?:still )?owe(?: me| us)?|does ${NAMEP} (?:still )?owe (?:me|us)(?: anything| any money| something)?|is ${NAMEP} (?:still )?owing (?:me|us)(?: anything| any money)?)(?: now| so far| altogether| in total)?$`, "i").exec(t))) {
    const name = m[1] || m[2] || m[3] || m[4];
    if (!validName(name)) return null;
    const rows = await partyRows(ctx, name, owedToMeRows);
    const who = rows[0]?.data.party || ownerName(name);
    return rows.length ? `${who} owes you ${showOwed(rows)}.` : `${who} owes you nothing that I know of.`;
  }
  if ((m = new RegExp(`^(?:how much (?:do|did) (?:i|we) (?:still )?owe|what (?:do|did) (?:i|we) (?:still )?owe|do (?:i|we) (?:still )?owe) (?:the |my |our )?${NAMEP}(?: anything| any money)?(?: now| so far| altogether)?$`, "i").exec(t))) {
    if (!validName(m[1])) return null;
    const rows = await partyRows(ctx, m[1], owedByMeRows);
    const who = rows[0]?.data.party || ownerName(m[1]);
    return rows.length ? `You owe ${who} ${showOwed(rows, "owing")}.` : `You owe ${who} nothing that I know of.`;
  }
  if ((m = new RegExp(`^(?:how much (?:has|have|did) ${NAMEP} paid(?: me| us)?|what (?:has|have|did) ${NAMEP} paid(?: me| us)?)(?: so far| in total| altogether| in all| to date| until now)?$`, "i").exec(t))) {
    const name = m[1] || m[2];
    if (!validName(name)) return null;
    const rows = (await listMoney(ctx)).filter(record => record.data.type === "income" && !record.data.unpaid && record.data.party && nameKey(record.data.party) === nameKey(name));
    const owes = await partyRows(ctx, name, owedToMeRows);
    const who = rows[0]?.data.party || owes[0]?.data.party || ownerName(name);
    if (!rows.length) return owes.length ? `${who} has not paid you anything yet. ${who} owes you ${showOwed(owes)}.` : `I have no payment from ${who} recorded.`;
    return `${who} has paid you ${money.showTotals(money.sum(rows, "income"))} so far (${plural(rows.length, "payment")}).${owes.length ? ` ${who} still owes you ${showOwed(owes)}.` : ""}`;
  }
  // ---- John owes me 800 ----
  if ((m = new RegExp(`^${NAMEP} (?:still |now )?owes? (?:me|us)(?: money| something)?${AMOUNT_OR_NONE}(?: (?:for|from|since) (.+))?$`, "i").exec(t)) && validName(m[1]) && !/\b(?:money|something)$/i.test(m[1])) {
    const party = ownerName(m[1]);
    if (!m[2]) return startGuided(ctx, templates.books_owed_me, {}, { party });
    const token = money_(m[2]); if (!token) return null;
    if (token.unsure) return askConfirm(ctx, `Did you mean ${amounts.sayAmount(token.unsure)} when ${party} owes you "${m[2]}"?`, { type: "books-debt", direction: "owed-to-me", party, amount: token.unsure, currency: token.currency, item: m[3] || "" });
    return addDebt(ctx, "owed-to-me", party, token, clean(m[3] || ""));
  }
  if ((m = new RegExp(`^${NAMEP} (?:has|have|had) (?:a |an )?(?:debt|credit|balance|unpaid bill|outstanding balance) (?:of|worth|with me of) (${AMT})$`, "i").exec(t)) && validName(m[1])) {
    const token = money_(m[2]); if (!token) return null;
    if (token.unsure) return askConfirm(ctx, `Did you mean ${amounts.sayAmount(token.unsure)} when ${ownerName(m[1])} has a debt of "${m[2]}"?`, { type: "books-debt", direction: "owed-to-me", party: ownerName(m[1]), amount: token.unsure, currency: token.currency, item: "" });
    return addDebt(ctx, "owed-to-me", ownerName(m[1]), token, "");
  }
  // ---- Mary bought on credit 2000 / Mary bought airtime on credit for 2000: a sale on credit ----
  if ((m = new RegExp(`^${NAMEP} (?:bought|took|got|picked up|collected|has taken|has bought)(?: (.+?))? on (?:credit|account|loan)(?: (?:for|worth|of|at))?${AMOUNT_OR_NONE}$`, "i").exec(t)) && validName(m[1])) {
    const party = ownerName(m[1]); const item = clean(m[2] || "").replace(/^(?:some|a|an|the)\s+/i, "");
    if (!m[3]) return startGuided(ctx, templates.books_owed_me, {}, { party, item });
    const token = money_(m[3]); if (!token) return null;
    if (token.unsure) return askConfirm(ctx, `Did you mean ${amounts.sayAmount(token.unsure)} for what ${party} bought on credit ("${m[3]}")?`, { type: "books-debt", direction: "owed-to-me", party, amount: token.unsure, currency: token.currency, item });
    if (item) return runMoney(ctx, `sold ${item} to ${party} for ${token.text} on credit`);
    return addDebt(ctx, "owed-to-me", party, token, "");
  }
  // ---- I owe the supplier 5000 ----
  if ((m = new RegExp(`^(?:i |we )?(?:still )?owe (?:the |my |our )?${NAMEP}${AMOUNT_OR_NONE}(?: (?:for|from|since) (.+))?$`, "i").exec(t)) && validName(m[1]) && !/\b(?:money|something)$/i.test(m[1])) {
    const party = ownerName(m[1]);
    if (!m[2]) return startGuided(ctx, templates.books_i_owe, {}, { party });
    const token = money_(m[2]); if (!token) return null;
    if (token.unsure) return askConfirm(ctx, `Did you mean ${amounts.sayAmount(token.unsure)} when you owe ${party} "${m[2]}"?`, { type: "books-debt", direction: "i-owe", party, amount: token.unsure, currency: token.currency, item: m[3] || "" });
    return addDebt(ctx, "i-owe", party, token, clean(m[3] || ""));
  }
  // ---- I paid the supplier 2000 / I paid Wanjiru back ----
  if ((m = new RegExp(`^(?:i |we )?(?:have |'ve )?(?:paid|repaid|settled|cleared)(?: back| off)? (?:the |my |our )?${NAMEP}(?: back)?(?: (${AMT}))?(?: of what (?:i|we) owe(?:d)?)?$`, "i").exec(t)) && validName(m[1])) {
    let said = null;
    if (m[2]) { const token = money_(m[2]); if (!token) return null; if (token.unsure) return askConfirm(ctx, `Did you mean ${amounts.sayAmount(token.unsure)} when you paid ${ownerName(m[1])} "${m[2]}"?`, { type: "books-debt", direction: "pay-creditor", party: ownerName(m[1]), amount: token.unsure, currency: token.currency }); said = token; }
    return payOwed(ctx, m[1], said);
  }
  if ((m = new RegExp(`^(?:i |we )?(?:have |'ve )?paid (${AMT}) to (?:the |my |our )?${NAMEP}$`, "i").exec(t)) && validName(m[2])) {
    const token = money_(m[1]); if (!token || token.unsure) return null;
    return payOwed(ctx, m[2], token);
  }
  // ---- John gave me 500 / John paid me back 500 : a payment from someone who owes ----
  if ((m = new RegExp(`^${NAMEP} (?:gave me|sent me|repaid me|paid me back|has paid me back|returned|brought me)(?: back)? (${AMT})$`, "i").exec(t)) && validName(m[1])) {
    const owes = await partyRows(ctx, m[1], owedToMeRows);
    if (!owes.length) return null;
    const token = money_(m[2]); if (!token || token.unsure) return null;
    return runMoney(ctx, `${owes[0].data.party} paid ${token.text}`);
  }
  return null;
}

// ---------- the questions Kyro asks (a half-finished entry is kept until it is answered) ----------
function amountAnswer(raw) {
  const text = clean(raw).replace(/^(?:it was|it is|it's|about|around|for|at|the price was|the cost was|cost|price)\s+/i, "");
  // "10 bags at 3500 each" is a quantity and a price for ONE: 35,000, never 3,500. "10 bags for 35000" is the quantity and the whole price.
  const qty = parseQuantity(text);
  if (qty || /\b(?:each|per|apiece|every|a piece)\b/i.test(text)) {
    const m = qty && new RegExp(`^${qty.matched.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s+(at|@|for)\\s+(${AMT})(?:\\s+(each|apiece|a piece))?$`, "i").exec(text);
    const token = m ? amounts.readToken(m[2]) : null;
    if (m && token && token.amount > 0 && !token.unsure && !(m[1].toLowerCase() === "for" && m[3])) return { value: { quantity: qty.matched, mode: m[1].toLowerCase() === "for" ? "total" : "each", amount: token.amount, currency: token.currency } };
    return { hint: 'Say the amount for all of it together, like "35000", or the quantity and price like "10 bags at 3500 each".' };
  }
  const token = amounts.readToken(text);
  if (token) {
    if (token.unsure) return { hint: `I wasn't sure about "${text}": do you mean ${amounts.sayAmount(token.unsure)}? Please say the whole number, like ${token.unsure}.` };
    if (token.amount > 0) return { value: { amount: token.amount, currency: token.currency } };
  }
  const spoken = amounts.spokenDigits(text);
  if (spoken) return { hint: `Did you mean ${amounts.sayAmount(spoken)}? Please say the whole number, like ${spoken}.` };
  const parsed = parseMoney(text);
  if (parsed && parsed.amount > 0) return { value: parsed };
  return { hint: 'Say the amount, like "3500" or "KSh 3,500".' };
}
const moneyText = value => (value.currency ? (/^[$€£₦]$/.test(value.currency) ? `${value.currency}${value.amount}` : `${value.currency} ${value.amount}`) : String(value.amount));

async function finishPriced(ctx, answers, extra) {
  const said = answers.money;
  let text;
  if (said.quantity) {
    // "10 bags at 3500 each": the quantity goes in front of the item, and "to Mary" / "from John" stays after it
    const parts = /^(.*?)((?:\s+(?:to|from)\s+.+)?)$/i.exec(clean(extra.phrase));
    const tail = parts ? parts[2] : ""; const head = parts ? parts[1] : extra.phrase;
    text = said.mode === "each" ? `${extra.verb} ${said.quantity} of ${head} at ${moneyText(said)} each${tail}${extra.credit || ""}` : `${extra.verb} ${said.quantity} of ${head} for ${moneyText(said)}${tail}${extra.credit || ""}`;
  } else text = `${extra.verb} ${extra.phrase} for ${moneyText(said)}${extra.credit || ""}`;
  const reply = await runMoney(ctx, text, { entryDay: extra.day || undefined, payment: extra.payment || undefined });
  return tagged(reply, extra.payment) || `I could not record that. Try "${extra.verb} ${extra.phrase} for ${said.amount}".`;
}
const templates = {
  books_price: { collection: "books_price", questions: [{ key: "money", ask: "How much did you sell it for?", type: "money", parse: amountAnswer }], finish: finishPriced },
  books_cost: { collection: "books_cost", questions: [{ key: "money", ask: "How much did it cost?", type: "money", parse: amountAnswer }], finish: finishPriced },
  books_owed_me: { collection: "books_owed_me", questions: [{ key: "money", ask: "How much do they owe you?", type: "money", parse: amountAnswer }],
    async finish(ctx, answers, extra) {
      if (extra.item) return runMoney(ctx, `sold ${extra.item} to ${extra.party} for ${moneyText(answers.money)} on credit`);
      return addDebt(ctx, "owed-to-me", extra.party, answers.money, "");
    } },
  books_i_owe: { collection: "books_i_owe", questions: [{ key: "money", ask: "How much do you owe them?", type: "money", parse: amountAnswer }], finish: (ctx, answers, extra) => addDebt(ctx, "i-owe", extra.party, answers.money, "") },
  books_unit: { collection: "books_unit",
    questions: [{ key: "basis", ask: 'Is that price for each one, or for all of it together? Say "each" or "total".', type: "choice",
      options: [{ value: "each", words: ["each", "one", "per", "every", "apiece", "a piece", "per kilo", "per kg", "per litre"] }, { value: "total", words: ["total", "all", "altogether", "whole", "lot", "in all", "together", "the lot", "all of it"] }] }],
    async finish(ctx, answers, extra) {
      const text = answers.basis === "each" ? `${extra.verb} ${extra.phrase} at ${extra.price} each` : `${extra.verb} ${extra.phrase} for ${extra.price}`;
      const reply = await runMoney(ctx, answers.basis === "each" ? `${extra.verb} ${extra.phrase} at ${extra.price} per ${/ L|litre/i.test(extra.phrase) ? "litre" : "kg"}${extra.credit || ""}` : `${text}${extra.credit || ""}`, { entryDay: extra.day || undefined, payment: extra.payment || undefined });
      return tagged(reply, extra.payment) || "I could not record that. Say it again with the price, like \"sold 20 kg of maize for 900\".";
    } },
  books_item: { collection: "books_item", questions: [{ key: "item", ask: "What was it?", type: "text", max: 50 }],
    async finish(ctx, answers, extra) {
      const reply = await runMoney(ctx, `${extra.verb} ${extra.quantity} of ${answers.item} ${extra.tail}`, { entryDay: extra.day || undefined, payment: extra.payment || undefined });
      return tagged(reply, extra.payment) || "I could not record that.";
    } }
};
const confirms = {
  // "Did you mean 4500?" -> yes: the sentence is recorded with the amount read the careful way
  "books-run": async (ctx, action) => {
    const replies = [];
    for (const piece of action.pieces) { const reply = await runMoney(ctx, piece.text, { entryDay: action.day || undefined, payment: piece.payment || undefined }); if (reply) replies.push(tagged(reply, piece.payment)); }
    if (!replies.length) return "I could not record that. Say it again with the amount.";
    return replies.map((reply, index) => (index < replies.length - 1 ? withoutMonth(reply) : reply)).join(" ");
  },
  "books-debt": async (ctx, action) => {
    const said = { amount: action.amount, currency: action.currency || "" };
    if (action.direction === "pay-creditor") return (await payOwed(ctx, action.party, said)) || `I have nothing recorded that you owe ${action.party}.`;
    return addDebt(ctx, action.direction, action.party, said, action.item || "");
  }
};
// How the customer paid is kept with the entry ("Recorded: sold 1 goat for 12,000, paid by cash."). It is a note only: nothing is sent or paid through Kyro.
const tagged = (reply, payment) => (reply && payment && /^Recorded:/.test(reply) ? reply.replace(/^(Recorded: .*?)\.(?=\s[A-Z]|$)/, `$1, paid by ${payment}.`) : reply);
// For someone with no farm records, a sale of something that is not a farm or trade word at all ("my old phone") is kept too, and they are told how to take it back out.
const NOT_BUSINESS_HINT = ' If that was not for your business, say "undo" and I will take it out.';
function otherGoods(canonical) {
  const m = /^(sold|bought) (.+?)(?: (?:for|at|to|from)\b.*)?$/i.exec(canonical);
  return Boolean(m) && (m[1] === "sold" ? money.incomeCategory(m[2]) : money.expenseCategory(m[2])) === "other";
}

// ---------- the front door ----------
async function handle(ctx) {
  const t = tidy(ctx.text);
  if (!t || t.length > 300) return null;

  // what did I earn today / profit this week / how much did I spend on the farm: only for someone who already keeps money records here (an empty account's question is left to the rest of Kyro)
  const summary = readSummary(t);
  if (summary && await hasMoneyRecords(ctx)) { const reply = await runMoney(ctx, summary.canonical); if (reply) return reply; }

  const debt = await readDebt(ctx, t);
  if (debt) return debt;

  // Only what has HAPPENED is recorded: "paid" and "sold", never "pay rent 5000" (that is a request to pay, which this never does).
  const verbal = /^(?:(?:i|we)(?:'ve| have)?\s+)?(?:(?:just|also|already|now|then)\s+)*(?:sold|bought|purchased|received|got|earned|made|spent|paid|gave|took)\b/i.test(t);
  const recording = verbal || /^(?:the )?supplier\s+[A-Za-z]/i.test(t) || /^[A-Za-z][A-Za-z'. -]{1,30}?\s+(?:worked\s+)?\d+(?:\.\d+)?\s+(?:days?|hours?|weeks?|months?)\b|^(?:house |shop |stall )?(?:rent|electricity|labou?r|wages|fuel|transport|stock|airtime|farm ?hand|watchman|casual|driver)\b/i.test(t);
  if (!recording) return null;
  // The day it happened ("yesterday", "last Friday", "on 10 July"): taken off here and given to money.js as the day of the entry.
  const dayless = withoutToday(t);
  const when = whenOf(dayless, ctx.today);
  // a day still ahead is no day for something that has happened -- unless it is when someone WILL pay ("sold maize to Mary for 9000, she will pay tomorrow"), which is not the day of the sale
  if (when?.future) return verbal && !/\b(?:pay|pays|paying|paid|later|credit|owe|owes|deliver|delivery|bring|collect|come)\b/i.test(t) ? "That day is still ahead, and I only record what has already happened. Tell me the day it really was." : null;
  const body = when?.day && when.text ? when.text : dayless;
  const day = when?.day || ctx.entryDay || "";
  const withDay = { entryDay: day || undefined };

  // costs: rent, electricity, labour, stock, a farm hand, a worker paid by the day
  const cost = await readCost(ctx, body);
  if (cost) {
    if (cost.unsure) return askConfirm(ctx, `Did you mean ${amounts.sayAmount(cost.unsure.candidate)} when you said "${cost.unsure.says}"?`, { type: "books-run", pieces: [{ text: cost.canonical, payment: "" }], day, candidate: cost.unsure.candidate });
    const reply = await runMoney(ctx, cost.canonical, withDay);
    if (reply) return reply;
  }
  const earning = readEarning(body);
  if (earning) {
    if (earning.unsure) return askConfirm(ctx, `Did you mean ${amounts.sayAmount(earning.unsure.candidate)} when you said "${earning.unsure.says}"?`, { type: "books-run", pieces: [{ text: earning.canonical, payment: "" }], day, candidate: earning.unsure.candidate });
    const reply = await runMoney(ctx, earning.canonical, withDay);
    if (reply) return reply;
  }

  // sales and purchases
  const trade = readTrade(body);
  if (!trade) return null;
  const pieces = trade.pieces;
  const unsure = pieces.find(piece => piece.unsure);
  if (unsure) return askConfirm(ctx, `Did you mean ${amounts.sayAmount(unsure.unsure.candidate)} when you said "${unsure.unsure.says}"?`, { type: "books-run", pieces: pieces.map(piece => ({ text: piece.canonical, payment: piece.payment || "" })), day, candidate: unsure.unsure.candidate });
  const needsAsk = pieces.find(piece => piece.ask);
  if (needsAsk) return pieces.length > 1 ? null : askBack(ctx, needsAsk, day);
  const replies = []; const fresh = !(await ctx.hasFarmData());
  for (const piece of pieces) {
    const reply = await runMoney(ctx, piece.canonical, { ...withDay, payment: piece.payment || undefined });
    if (reply) replies.push(tagged(reply, piece.payment));
    else if (pieces.length === 1) return null;
  }
  if (!replies.length) return null;
  const joined = replies.map((reply, index) => (index < replies.length - 1 ? withoutMonth(reply) : reply)).join(" ");
  const personal = /\b(?:my|our)\b|\b(?:car|house|land|laptop|motorbike|bicycle|furniture|jewel+ery|watch|tv|television|fridge)\b/i.test(body);
  return fresh && personal && pieces.some(piece => otherGoods(piece.canonical)) && /^Recorded:/.test(joined) ? `${joined}${NOT_BUSINESS_HINT}` : joined;
}

// something essential is missing: one short question, and the half-finished entry is kept for the answer
async function askBack(ctx, need, day) {
  const farmer = await isFarmer(ctx); const hasMoney = await hasMoneyRecords(ctx);
  if (need.ask === "price") {
    // "I bought a phone" from someone who keeps no books is chat, not bookkeeping; known farm and trade words, or an account that already keeps money records, are asked about.
    const category = need.verb === "sold" ? money.incomeCategory(need.item) : money.expenseCategory(need.item);
    // ...and so are goods the person keeps in stock records (a shopkeeper counting flour)
    const kept = category === "other" && !farmer && !hasMoney ? findItems(await ctx.store.list({ ...scopeOf(ctx), collection: "stock" }), need.item).length > 0 : false;
    if (category === "other" && !farmer && !hasMoney && !kept) return null;
    return startGuided(ctx, need.verb === "sold" ? templates.books_price : templates.books_cost, {}, { verb: need.verb, phrase: need.phrase, item: need.item, payment: need.payment || "", credit: need.credit || "", day });
  }
  if (need.ask === "unit") return startGuided(ctx, templates.books_unit, {}, { verb: need.verb, phrase: need.phrase, price: need.price, payment: need.payment || "", credit: need.credit || "", day });
  if (need.ask === "item") return startGuided(ctx, templates.books_item, {}, { verb: need.verb, quantity: need.quantity, tail: need.tail, payment: need.payment || "", day });
  return null;
}

module.exports = Object.freeze({ handle, templates, confirms, readTrade, readPiece, readCost, readSummary, isFarmer, tidy, amountAnswer, payOwed, addDebt, partyRows, owedToMeRows, owedByMeRows, totalsOf, showOwed, runMoney, listMoney, scopeOf, hasMoneyRecords, NOT_A_NAME, NAMEP, personName, tagged });
