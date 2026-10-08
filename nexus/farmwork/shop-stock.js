"use strict";

const { clean, parseQuantity, unitLabel, round, UNIT_WORDS } = require("./parse.js");
const { findItems, keyOf, categoryOf, totals } = require("./inventory.js");
const { parseQuantitySw, unitLabelSw, englishItem, swahiliItem } = require("../i18n/swahili-words.js");
const numbers = require("../i18n/swahili-numbers.js");
const swahili = require("./swahili.js");

// A shop's stock LEVELS, said the way a shopkeeper says them: "I have 20 bags of flour", "stock: sugar 15 kg", "stock of flour is low", "how much sugar do I have", "nina gunia 20 za unga",
// "sukari inakwisha", "ni bidhaa gani zinaisha". The numbers are only what the person says they have: a level is SET to what they say (never added to, never worked out), and a sale
// takes goods out of stock only when one stock record matches (money.js and swahili.js do that). Nothing is invented: flour that is "low" with no record asks how much is left.
const scopeOf = ctx => ({ tenantId: ctx.tenantId, userId: ctx.userId });
const listStock = ctx => ctx.store.list({ ...scopeOf(ctx), collection: "stock" });
const QTY = `\\d[\\d,]*(?:\\.\\d+)?\\s*(?:${UNIT_WORDS})`;
const LAND_OR_COUNT_UNIT = new Set(["acre", "ha", "dose", "head"]);
// things that are never goods in a shop's stock
const NOT_GOODS = /^(?:animals?|livestock|cattle|cows?|bulls?|goats?|sheep|pigs?|chickens?|hens?|poultry|rabbits?|ducks?|donkeys?|fields?|plots?|acres?|hectares?|workers?|employees?|staff|customers?|buyers?|members?|tasks?|money|cash|loans?|debts?|children|kids|time|energy|work|battery|airtime balance|data|network|signal|power|light|water|mifugo|ng'ombe|mbuzi|kuku|pesa|deni|mkopo|muda|nguvu|kazi|betri|maji)$/i;
const GOODS = /\b(?:flour|sugar|rice|maize|beans|salt|soap|bread|milk|eggs?|tea|cement|charcoal|airtime|soda|sodas|mandazi|meat|cooking oil|oil|paraffin|matches|candles?|biscuits?|juice|water bottles?|sweets?|shoes|cloth|fertili[sz]er|seed|feed|potatoes|tomatoes|onions|kale|cabbage|bananas|unga|sukari|mchele|mahindi|maharagwe|maharage|chumvi|sabuni|mkate|maziwa|mayai|chai|saruji|mkaa|vocha|nyama|mafuta|mbegu|mbolea)\b/i;
// a farm input asked about by someone with no stock records is left to normal planning (as it always was)
const FARM_INPUT = /^(?:fertili[sz]ers?|seeds?|feed|mbegu|mbolea)$/i;
const BAD_ITEM_WORDS = /\b(?:to|for|and|but|that|which|because|when|if|with|from|my|your|is|are|was|were|will|would|can|could|should|have|has|had|do|does|did|not|no|how|what|why|who|where|nina|tuna|kwa|na|lakini|kwamba|kama)\b/i;

const itemName = raw => clean(raw).toLowerCase().replace(/^(?:of|more|some|the|my|our|za|ya|wa|la)\s+/, "").replace(/\s+(?:of|za|ya|wa|la)$/, "").replace(/[.,;:]+$/g, "");
const plausibleItem = name => Boolean(name) && name.length <= 40 && name.split(" ").length <= 4 && /^[\p{L}][\p{L}' -]*$/u.test(name) && !BAD_ITEM_WORDS.test(name) && !NOT_GOODS.test(name);

// A quantity, with zero allowed ("0 bags": it ran out).
function readQuantity(raw) {
  const q = parseQuantity(raw);
  if (q) return { ...q, ambiguousDot: /\d{1,3}\.\d{3}(?!\d)/.test(q.matched) };
  const zero = new RegExp(`(?<![\\d.,])0+(?:\\.0+)?\\s*(${UNIT_WORDS})\\b`, "i").exec(clean(raw));
  if (zero) { const unit = parseQuantity(`1 ${zero[1]}`); return unit ? { value: 0, unit: unit.unit, index: zero.index, matched: zero[0], ambiguousDot: false } : null; }
  return null;
}
// the text with the quantity taken out (a Swahili quantity is found in the text after its number words became digits, so that is the text it is cut from)
const without = (text, q) => { const base = q.text || text; return clean(`${base.slice(0, q.index)} ${base.slice(q.index + q.matched.length)}`); };

// Is this a thing a shop keeps? A stock record, a goods word, or something the person has already sold or bought.
async function knownGoods(ctx, name, stock) {
  if (findItems(stock, name).length || GOODS.test(name)) return true;
  try { return (await ctx.store.list({ ...scopeOf(ctx), collection: "money" })).some(record => record.data.item && keyOf(record.data.item) === keyOf(name)); } catch { return false; }
}

// Sets the level of one item. Same item and unit: the number is replaced. The same item kept in another unit is not guessed at. Returns { record, previous } | { otherUnit } | { full } | { retry }.
async function setLevel(ctx, name, quantity, extra = {}) {
  const scope = scopeOf(ctx);
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const stock = await listStock(ctx); const found = findItems(stock, name);
    const same = found.filter(item => item.data.unit === quantity.unit);
    if (!same.length && found.length) return { otherUnit: found[0] };
    if (same.length > 1) return { several: same };
    if (same.length === 1) {
      const next = { ...same[0], data: { ...same[0].data, qty: quantity.value, ...extra } };
      if (!(await ctx.store.update({ ...scope, record: next, casField: "qty", casValue: same[0].data.qty }))) continue;
      return { record: next, previous: same[0].data.qty };
    }
    if (stock.length >= 400) return { full: true };
    return { record: await ctx.store.add({ ...scope, collection: "stock", data: { name, category: categoryOf(name), qty: quantity.value, unit: quantity.unit, ...extra } }), previous: undefined };
  }
  return { retry: true };
}
const lowFlag = item => (item.data.low !== undefined && item.data.low !== null && item.data.qty <= item.data.low) || item.data.qty <= 0;

// ---------- English ----------
const EN = {
  set: ({ record, previous }) => `Noted: you have ${unitLabel(record.data.qty, record.data.unit)} of ${record.data.name} in stock${previous !== undefined && previous !== record.data.qty ? ` (I had ${unitLabel(previous, record.data.unit)})` : ""}.${lowFlag(record) && record.data.qty > 0 ? ` That is at or below your low level of ${unitLabel(record.data.low, record.data.unit)}.` : ""}${record.data.qty <= 0 ? ` I will list it when you ask "what is running low".` : ""}`,
  otherUnit: (item, name) => `You keep ${name} in ${item.data.unit === "kg" || item.data.unit === "L" ? item.data.unit : `${item.data.unit}s`} (${unitLabel(item.data.qty, item.data.unit)} now). Say it in the same unit, so I do not count one thing twice.`,
  several: name => `You have more than one ${name} in stock. Say which one.`,
  full: "That's the most kinds of stock I can keep (four hundred). Remove some first.",
  retry: "That didn't quite go through -- please try that again.",
  none: name => `I don't have ${name} in your stock yet. Say "I have 20 bags of ${name}" (with your own amount) and I will keep count.`,
  have: (found, name) => `You have ${totals(found)} of ${found.length === 1 ? found[0].data.name : name}.`,
  notInStock: name => `I don't have ${name} in your stock.`,
  low: item => `Okay, I've marked ${item.data.name} as low (${unitLabel(item.data.qty, item.data.unit)} left). It will show when you ask "what is running low".`,
  out: item => `Noted: ${item.data.name} has run out. I've set it to zero and it will show when you ask "what is running low".`,
  outNoRecord: name => `I don't have ${name} in your stock list, so there is nothing to change. When you buy more, say "I have 10 bags of ${name}" (with your own amount).`,
  askLeft: name => `How much ${name} is left? Say it with the unit, like "3 bags" or "2 kg".`,
  list: lines => `Running low: ${lines}.`,
  listNone: 'Nothing is running low or out. Say "stock of flour is low" or "warn me when flour drops below 5 bags" and I will keep watch.',
  threshold: (item, q) => `Okay. I'll flag ${item.data.name} whenever it is at or below ${unitLabel(q, item.data.unit)}, when you ask "what is running low" and in your morning brief.`,
  unclearNumber: said => `I am not sure about "${said}": is that a thousands point (like 4,500) or a decimal (4.5)? I have not changed your stock. Say it again as a plain number, like "20 bags".`
};
const stockLine = item => `${item.data.name} (${unitLabel(item.data.qty, item.data.unit)}${item.data.low !== undefined && item.data.low !== null && item.data.qty > 0 ? `, level ${unitLabel(item.data.low, item.data.unit)}` : ""})`;

async function setFromParts(ctx, parts, replies, say) {
  for (const part of parts) {
    const result = await setLevel(ctx, part.name, part.quantity);
    if (result.record) replies.push(say.set(result)); else if (result.otherUnit) replies.push(say.otherUnit(result.otherUnit, part.name)); else if (result.several) replies.push(say.several(part.name)); else replies.push(result.full ? say.full : say.retry);
  }
  return replies.join(" ");
}

// "sugar 15 kg", "15 kg of sugar", "sugar: 15 kg, flour 20 bags" -> [{ name, quantity }] | null when any part is not one
function readParts(body, readName = itemName, qtyOf = readQuantity) {
  const parts = clean(body).split(/\s*(?:,|;|\band\b|\bna\b)\s*/i).map(clean).filter(Boolean);
  if (!parts.length || parts.length > 12) return null;
  const out = [];
  for (const piece of parts) {
    const quantity = qtyOf(piece); if (!quantity) return null;
    const name = readName(without(piece, quantity).replace(/[:=-]+$/g, "").replace(/^[:=-]+/g, ""));
    if (!plausibleItem(name) || /\d/.test(name)) return null;
    out.push({ name, quantity });
  }
  return out;
}

async function handleEnglish(ctx, t, lower) {
  let m;
  const stock = () => listStock(ctx);
  // ---- what is running low ----
  if (/^(?:what|which)(?:'s| is| are)? ?(?:all |the |my )?(?:items |things |goods |products |stock )?(?:are |is )?(?:running low|low|short|finished|running out|out of stock|almost finished|nearly finished|about to run out)(?: in (?:the |my )?(?:shop|store|duka|stock|stall))?$/.test(lower)
    || /^(?:low stock|items running low|things running low|goods running low|stock running low|what(?:'s| is) out of stock|what do i need to restock in (?:the |my )?(?:shop|store|duka))$/.test(lower)) {
    const low = (await stock()).filter(lowFlag);
    return low.length ? EN.list(low.map(stockLine).join("; ")) : EN.listNone;
  }
  // ---- "flour is low", "we have run out of sugar" ----
  const outPattern = [/^(?:the )?(?:stock of )?(.+?)(?: stock)? (?:is|are|has|have) (?:all )?(?:finished|out|gone|used up|over|run out|ran out)$/, /^(?:we |i )?(?:have |has )?(?:run out of|ran out of|am out of|are out of|'m out of|'re out of) (?:the )?(.+)$/, /^(?:we're|we are|i am|i'm|we) (?:completely |totally )?out of (?:the )?(.+)$/, /^(.+?) (?:has |have )?run out$/, /^no more (.+?)(?: left)?$/];
  const lowPattern = [/^(?:the )?(?:stock of )?(.+?)(?: stock)? (?:is|are|has|have) (?:getting |very |quite |too )?(?:low|short|running low|running out|almost (?:finished|gone|out)|nearly (?:finished|gone|out)|finishing)$/, /^(?:we're|we are|i am|i'm|we) (?:running out of|almost out of|nearly out of|running low on|low on|short of) (?:the )?(.+)$/, /^(.+?) (?:is |are )?(?:running low|running out|almost finished|nearly finished)$/];
  for (const [patterns, kind] of [[outPattern, "out"], [lowPattern, "low"]]) {
    for (const pattern of patterns) {
      if (!(m = pattern.exec(lower))) continue;
      const name = itemName(m[1]); if (!plausibleItem(name)) continue;
      const items = await stock(); if (!(await knownGoods(ctx, name, items))) continue;
      const found = findItems(items, name);
      if (found.length > 1) return EN.several(name);
      if (!found.length) return kind === "out" ? EN.outNoRecord(name) : askLeft(ctx, name, "en");
      const next = { ...found[0], data: { ...found[0].data, ...(kind === "out" ? { qty: 0 } : { low: found[0].data.qty }) } };
      await ctx.store.update({ ...scopeOf(ctx), record: next });
      return kind === "out" ? EN.out(next) : EN.low(next);
    }
  }
  // ---- "warn me when rice is below 5" (the unit is the one the rice is kept in) ----
  if ((m = /^(?:please )?(?:warn|alert|tell|let|remind) me (?:when|if) (?:my |the )?(.+?) (?:drops |goes |falls |gets |is |runs |dips )?(?:below|under|lower than|less than) (\d[\d,]*(?:\.\d+)?)$/i.exec(t))) {
    const found = findItems(await stock(), itemName(m[1]));
    if (found.length !== 1) return found.length > 1 ? EN.several(itemName(m[1])) : null;
    const level = Number(m[2].replace(/,/g, "")); if (!(level > 0)) return null;
    await ctx.store.update({ ...scopeOf(ctx), record: { ...found[0], data: { ...found[0].data, low: level } } });
    return EN.threshold(found[0], level);
  }
  // ---- "stock: sugar 15 kg", "stock of flour 20 bags", "stock take: sugar 15 kg and flour 20 bags" ----
  if ((m = /^(?:the |my |our )?(?:stock ?take|stock count|stock|inventory|current stock|opening stock)(?: of| for| is| today)?\s*[:,=-]?\s*(.+)$/i.exec(t)) && /\d/.test(m[1])) {
    const parts = readParts(m[1]); if (!parts) return null;
    const dot = parts.find(part => part.quantity.ambiguousDot); if (dot) return EN.unclearNumber(dot.quantity.matched);
    return setFromParts(ctx, parts, [], EN);
  }
  // ---- "I have 20 bags of flour", "we've got 5 kg of sugar left", "I now have 0 bags of rice in stock" ----
  if ((m = new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:now |currently |still |only |just )*(?:have|got|have got|hold)\\s+(${QTY}|0+(?:\\.0+)?\\s*(?:${UNIT_WORDS}))\\s+(?:of\\s+)?(.+?)(?:\\s+(?:left|remaining|in stock|in the shop|in my shop|in the store|in my store|in the duka|in my duka|at the shop|in the stall|at the moment|now|today))*$`, "i").exec(t))) {
    const quantity = readQuantity(m[1]); const name = itemName(m[2]);
    if (!quantity || LAND_OR_COUNT_UNIT.has(quantity.unit) || !plausibleItem(name)) return null;
    if (quantity.ambiguousDot) return EN.unclearNumber(quantity.matched);
    return setFromParts(ctx, [{ name, quantity }], [], EN);
  }
  // ---- "how much sugar do I have", "do I have flour", "what is my sugar stock", "sugar left" ----
  const askName = [/^(?:how much|how many) (?:of )?(.+?) (?:do|did) (?:i|we) have(?: left| in stock| in the shop| in the store| now)*$/, /^(?:how much|how many) (?:of )?(.+?) (?:is|are) (?:there )?(?:left|remaining|in stock|in the shop|in the store)$/, /^how much is left of (?:the |my )?(.+)$/, /^what(?:'s| is) (?:my |the |our )?(.+?) (?:stock|stock level|balance)$/, /^(?:check|show|read|tell me) (?:my |the |our )?(.+?) stock$/, /^do (?:i|we) (?:still )?have (?:any )?(.+?)(?: in stock| left| in the shop| in the store)?$/, /^(?:my |our )?(.+?) (?:stock level|stock left|left in stock)$/, /^(?:stock of|stock for) (?:the |my )?(.+)$/];
  for (const pattern of askName) {
    if (!(m = pattern.exec(lower))) continue;
    const subject = itemName(m[1].replace(new RegExp(`^(?:${UNIT_WORDS})\\b(?:\\s+of)?\\s+(?=\\S)`, "i"), "")); if (!plausibleItem(subject)) continue;
    const items = await stock(); const found = findItems(items, subject);
    if (found.length) return EN.have(found, subject);
    if (items.length && !NOT_GOODS.test(subject)) return EN.notInStock(subject);
    if (!items.length && !FARM_INPUT.test(subject) && await knownGoods(ctx, subject, items)) return EN.none(subject);
    return null;
  }
  return null;
}

// ---------- Swahili ----------
// First draft: a fluent speaker must review every Swahili sentence here.
const SW = {
  set: ({ record, previous }) => `Nimeandika: una ${unitLabelSw(record.data.qty, record.data.unit)} za ${swahiliItem(record.data.name)} ghalani${previous !== undefined && previous !== record.data.qty ? ` (nilikuwa na ${unitLabelSw(previous, record.data.unit)})` : ""}.${record.data.qty <= 0 ? ` Nitaitaja ukiuliza "ni bidhaa gani zinaisha".` : ""}`,
  otherUnit: (item, name) => `Unaweka ${swahiliItem(name)} kwa ${unitLabelSw(1, item.data.unit).split(" ")[0]} (sasa ${unitLabelSw(item.data.qty, item.data.unit)}). Sema kwa kipimo kilekile, ili nisihesabu kitu kimoja mara mbili.`,
  several: name => `Una ${swahiliItem(name)} zaidi ya moja ghalani. Sema ni ipi.`,
  full: "Ghala lako limejaa (vitu mia nne). Ondoa vingine kwanza.",
  retry: "Samahani, sikuweza kuandika hilo. Sema tena.",
  none: name => `Sioni ${swahiliItem(name)} kwenye ghala lako bado. Sema, kwa mfano, "nina gunia 20 za ${swahiliItem(name)}" (kwa kiasi chako) nami nitahesabu.`,
  have: (found, name) => `Una ${found.map(item => unitLabelSw(item.data.qty, item.data.unit)).join(" na ")} za ${swahiliItem(found.length === 1 ? found[0].data.name : name)}.`,
  low: item => `Sawa, nimeweka alama ya akiba ndogo kwenye ${swahiliItem(item.data.name)} (kilichobaki: ${unitLabelSw(item.data.qty, item.data.unit)}). Itaonekana ukiuliza "ni bidhaa gani zinaisha".`,
  out: item => `Nimeandika: ${swahiliItem(item.data.name)} — hakuna kilichobaki ghalani. Nimeweka sifuri, na itaonekana ukiuliza "ni bidhaa gani zinaisha".`,
  outNoRecord: name => `Sioni ${swahiliItem(name)} kwenye ghala lako, kwa hivyo hakuna cha kubadilisha. Ukinunua zaidi, sema "nina gunia 10 za ${swahiliItem(name)}" (kwa kiasi chako).`,
  askLeft: name => `Zimebaki ${swahiliItem(name)} kiasi gani? Sema na kipimo, kwa mfano "gunia 3" au "kilo 2".`,
  list: lines => `Zinazoisha: ${lines}.`,
  listNone: 'Hakuna kinachoisha. Sema "unga unakwisha" au "nikumbushe unga ukiwa chini ya gunia 5" nami nitafuatilia.',
  threshold: (item, q) => `Sawa. Nitakuonyesha ${swahiliItem(item.data.name)} ikiwa ${unitLabelSw(q, item.data.unit)} au chini, ukiuliza "ni bidhaa gani zinaisha".`,
  unclearNumber: said => `Sina uhakika na "${said}": ni elfu (kama 4,500) au desimali (4.5)? Sijabadilisha ghala lako. Sema tena kwa namba wazi, kwa mfano "gunia 20".`
};
const stockLineSw = item => `${swahiliItem(item.data.name)} (${unitLabelSw(item.data.qty, item.data.unit)})`;
function qtySw(raw) {
  const text = numbers.normalizeNumbers(clean(raw)).text; const q = parseQuantitySw(raw);
  if (q) return { ...q, text, ambiguousDot: Boolean(q.ambiguous) };
  const zero = /(?:\b(\p{L}+)\s+0+\b|\b0+\s+(\p{L}+)\b)/u.exec(clean(raw)); // "gunia 0"
  if (zero) { const unit = parseQuantitySw(`${zero[1] || zero[2]} 1`) || parseQuantitySw(`1 ${zero[1] || zero[2]}`); if (unit) return { value: 0, unit: unit.unit, index: zero.index, matched: zero[0], text, ambiguousDot: false }; }
  return null;
}
const itemSw = raw => englishItem(itemName(raw));

async function handleSwahili(ctx, t, lower) {
  let m;
  const stock = () => listStock(ctx);
  // ---- which goods are running low ----
  if (/^(?:ni )?(?:bidhaa|vitu|mali)(?: gani)?(?: zipi)? (?:zinaisha|zinakwisha|zimeisha|zimekwisha|zinakaribia kuisha|zinapungua|zimepungua)(?: dukani| ghalani| kwenye ghala| stoo)?$/.test(lower) || /^nini (?:kinaisha|kinakwisha|kimeisha|kimekwisha|kinapungua)(?: dukani| ghalani| kwenye ghala)?$/.test(lower)
    || /^(?:orodhesha|nionyeshe|onyesha|nipe) (?:bidhaa|vitu) (?:zinazoisha|zinazokwisha|zilizoisha|zilizokwisha|zinazopungua)$/.test(lower)) {
    const low = (await stock()).filter(lowFlag);
    return low.length ? SW.list(low.map(stockLineSw).join("; ")) : SW.listNone;
  }
  // ---- "unga unakwisha", "sukari imeisha", "nimeishiwa na mafuta" ----
  const outPatterns = [/^(.+?) (?:imekwisha|umekwisha|zimekwisha|vimekwisha|imeisha|umeisha|zimeisha|vimeisha|haipo tena|hakuna tena|imemalizika|zimemalizika)$/, /^(?:nimeishiwa na|tumeishiwa na|nimeishiwa|tumeishiwa) (.+)$/, /^(?:hakuna|hatuna|sina) (.+?) tena$/];
  const lowPatterns = [/^(.+?) (?:inakwisha|unakwisha|zinakwisha|vinakwisha|inaisha|unaisha|zinaisha|vinaisha|imepungua|umepungua|zimepungua|vimepungua|inakaribia kuisha|zinakaribia kuisha|iko chini|ipo chini)$/];
  for (const [patterns, kind] of [[outPatterns, "out"], [lowPatterns, "low"]]) {
    for (const pattern of patterns) {
      if (!(m = pattern.exec(lower))) continue;
      const name = itemSw(m[1]); if (!plausibleItem(name)) continue;
      const items = await stock(); if (!(await knownGoods(ctx, name, items))) continue;
      const found = findItems(items, name);
      if (found.length > 1) return SW.several(name);
      if (!found.length) return kind === "out" ? SW.outNoRecord(name) : askLeft(ctx, name, "sw");
      const next = { ...found[0], data: { ...found[0].data, ...(kind === "out" ? { qty: 0 } : { low: found[0].data.qty }) } };
      await ctx.store.update({ ...scopeOf(ctx), record: next });
      return kind === "out" ? SW.out(next) : SW.low(next);
    }
  }
  // ---- "nikumbushe unga ukiwa chini ya gunia 5" ----
  if ((m = /^(?:niambie|nikumbushe|nionye?she|nionyeshe)\s+(.+?)\s+(?:ukiwa|ikiwa|ikishuka|ukishuka|ikipungua|ukipungua|inapokuwa|unapokuwa)\s+(?:chini ya|pungufu ya)\s+(.+)$/i.exec(t))) {
    const quantity = qtySw(m[2]); const found = findItems(await stock(), itemSw(m[1]));
    if (!quantity || !(quantity.value > 0)) return null;
    const same = found.filter(item => item.data.unit === quantity.unit);
    if (found.length && !same.length) return SW.otherUnit(found[0], itemSw(m[1]));
    if (same.length !== 1) return same.length > 1 ? SW.several(itemSw(m[1])) : null;
    await ctx.store.update({ ...scopeOf(ctx), record: { ...same[0], data: { ...same[0].data, low: quantity.value } } });
    return SW.threshold(same[0], quantity.value);
  }
  // ---- "ghala: sukari kilo 15, unga gunia 20" ----
  if ((m = /^(?:hesabu ya ghala|hesabu ya stoo|ghala|stoo|hifadhi|ghala langu|stoo yangu)\s*[:,=-]\s*(.+)$/i.exec(t)) && /\d|moja|mbili|tatu|nne|tano|kumi|ishirini|mia|elfu/i.test(m[1])) {
    const parts = readParts(m[1], itemSw, qtySw); if (!parts) return null;
    const dot = parts.find(part => part.quantity.ambiguousDot); if (dot) return SW.unclearNumber(clean(m[1]));
    return setFromParts(ctx, parts, [], SW);
  }
  // ---- "sukari iliyobaki ni kilo 15", "unga umebaki gunia 3" ----
  if ((m = /^(.+?)\s+(?:iliyobaki|zilizobaki|kilichobaki|vilivyobaki|uliobaki|imebaki|zimebaki|umebaki|vimebaki|iliyopo|zilizopo)\s+(?:ni\s+)?(.+)$/i.exec(t)) && !/\b(?:kiasi gani|ngapi)\b/i.test(m[2])) {
    const quantity = qtySw(m[2]); const name = itemSw(m[1]);
    if (quantity && !LAND_OR_COUNT_UNIT.has(quantity.unit) && plausibleItem(name) && !clean(without(m[2], quantity)).match(/\d/)) {
      if (quantity.ambiguousDot) return SW.unclearNumber(clean(m[2]));
      return setFromParts(ctx, [{ name, quantity }], [], SW);
    }
  }
  // ---- "nina gunia 20 za unga", "nina unga mifuko ishirini", "tuna sukari kilo 15", "nimebakiwa na unga gunia 3" ----
  if ((m = /^(?:kwa sasa |bado |sasa )?(?:nina|tuna|nimebakiwa na|tumebakiwa na|nimebaki na|tumebaki na|nimehifadhi)\s+(.+)$/i.exec(t)) && !/\b(?:kiasi gani|ngapi|deni|mkopo|faida|hasara|pesa|shilingi|kwa|swali|njaa|wasiwasi)\b/i.test(m[1])) {
    const quantity = qtySw(m[1]); if (!quantity || LAND_OR_COUNT_UNIT.has(quantity.unit)) return null;
    const rest = without(m[1], quantity); const name = itemSw(rest);
    if (!plausibleItem(name) || /\d/.test(rest)) return null;
    if (quantity.ambiguousDot) return SW.unclearNumber(clean(m[1]));
    return setFromParts(ctx, [{ name, quantity }], [], SW);
  }
  // ---- "nina sukari kiasi gani", "sukari iliyobaki ni kiasi gani" ----
  if ((m = /^(?:nina|tuna|nimebakiwa na|nimebaki na|tumebaki na)\s+(.+?)\s+(?:kiasi gani|ngapi)(?: (?:ghalani|kwenye ghala|stoo|dukani|bado))?$/i.exec(t)) || (m = /^(.+?)\s+(?:iliyobaki|zilizobaki|iliyopo|zilizopo|uliobaki)\s+(?:ni\s+)?(?:kiasi gani|ngapi)$/i.exec(t))) {
    const name = itemSw(m[1]); if (!plausibleItem(name)) return null;
    const items = await stock(); const found = findItems(items, name);
    if (found.length) return SW.have(found, name);
    if (items.length && GOODS.test(name)) return SW.none(name);
    if (!items.length && !FARM_INPUT.test(name) && await knownGoods(ctx, name, items)) return SW.none(name);
    return null;
  }
  return null;
}
// ---------- the question asked when something is "low" but not in stock yet ----------
const askLeft = async (ctx, name, language) => {
  await ctx.store.setSession({ ...scopeOf(ctx), session: { collection: "shop_left", answers: {}, asking: "left", extra: { name, language }, expiresAt: new Date(Date.now() + 30 * 60000).toISOString() } });
  return language === "sw" ? SW.askLeft(name) : EN.askLeft(name);
};
const templates = {
  shop_left: { collection: "shop_left", questions: [{ key: "left", ask: "How much is left?", type: "quantity",
    parse: raw => { const q = readQuantity(raw) || qtySw(raw); return q && q.value > 0 && !q.ambiguousDot ? { value: { value: q.value, unit: q.unit } } : { hint: 'Say the amount with a unit, like "3 bags" or "2 kg" (au "gunia 3").' }; } }],
    async finish(ctx, answers, extra) {
      const sw = extra.language === "sw"; const quantity = answers.left;
      const result = await setLevel(ctx, extra.name, quantity);
      if (!result.record) return sw ? SW.retry : EN.retry;
      const next = { ...result.record, data: { ...result.record.data, low: result.record.data.qty } };
      await ctx.store.update({ ...scopeOf(ctx), record: next });
      return sw ? SW.low(next) : EN.low(next);
    } }
};

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!]+$/g, "").replace(/\?+$/g, ""); const lower = t.toLowerCase();
  if (!t || t.length > 160) return null;
  // The same careful guard the other Swahili readers use: a number that could be read two ways is asked about first (swahili.askAbout).
  const looksSwahili = /\b(?:nina|tuna|nimebaki|tumebaki|nimebakiwa|tumebakiwa|uliobaki|iliyopo|zilizopo|ghala|stoo|hifadhi|iliyobaki|zilizobaki|umebaki|imebaki|zimebaki|inakwisha|unakwisha|zinakwisha|vinakwisha|inaisha|unaisha|zinaisha|imeisha|umeisha|zimeisha|imekwisha|umekwisha|zimekwisha|nimeishiwa|tumeishiwa|bidhaa|vitu|nini kinaisha|hakuna|hatuna|sina|nikumbushe|niambie)\b/i.test(lower);
  if (looksSwahili) {
    const reply = await handleSwahili(ctx, t, lower);
    if (reply) return reply;
  }
  return handleEnglish(ctx, t, lower);
}

module.exports = Object.freeze({ handle, templates, setLevel, readQuantity, plausibleItem, lowFlag, EN, SW, askAboutSw: swahili.askAbout, round });
