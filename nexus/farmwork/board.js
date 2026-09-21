"use strict";

const { clean, titleCase, parseQuantity, parsePricePer, parseMoney, formatMoney, unitLabel, plural, round } = require("./parse.js");
const { normalizeRecipient } = require("../communications/send-request.js");

// A simple marketplace board: farmers post what they have to sell or what they want to buy, by hand, and everyone in their community can read
// it. Nothing is fetched from outside and no price is looked up: a listing is exactly what its owner typed. A phone number is never shown on
// the board; a person who wants to deal says so, and the poster is told their NAME (and a number only if they chose to give one). Only the
// poster can change or remove a listing.
const MAX_ACTIVE_PER_PERSON = 30;

const priceWords = data => (data.price ? ` at ${formatMoney(data.price, data.currency)} per ${data.per || data.unit || "unit"}` : "");
const describeListing = record => { const d = record.data; return `Listing ${record.number}: ${d.type === "buy" ? "wanted" : "for sale"} — ${unitLabel(d.qty, d.unit)} of ${d.item}${priceWords(d)} — ${d.seller}${d.area ? ` (${d.area})` : ""}`; };

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;
  const active = async () => (await ctx.store.listPublic({ tenantId: ctx.tenantId, collection: "listing" })).filter(record => record.data.status === "active");

  if ((m = /^(?:please )?post(?: (?:a |an )?(listing|ad|advert))?(?: (?:for sale|to sell|to the board))?\s*(?:[:,-]\s*|\s+)(?:(?:i am |i'm |we are |we're )?(selling|for sale|wanted|buying|looking for|want to buy|need)\s*[:,-]?\s*)?(.+)$/i.exec(t)) || (m = /^(?:please )?(sell|list|advertise) (.+?)(?: (?:on|to) the (?:board|marketplace))$/i.exec(t)) || (m = /^(?:please )?(?:put|add) (.+?) (?:on|to) the (?:market ?place )?board(?: (?:for sale|to sell))?$/i.exec(t))) {
    const wantWord = m[2] && /^(?:wanted|buying|looking for|want to buy|need)$/i.test(m[2]);
    const body = m[3] !== undefined ? m[3] : m[2] !== undefined && m[1] && /^(?:sell|list|advertise)$/i.test(m[1]) ? m[2] : m[1];
    const quantity = parseQuantity(body); const per = parsePricePer(body);
    const item = quantity ? clean(new RegExp(`${quantity.matched.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*(?:of )?(.+?)(?:\\s+(?:at|for|@|price)\\b.*)?$`, "i").exec(body)?.[1] || "").toLowerCase() : "";
    if (!quantity && !/\b(?:for sale|wanted|selling|buying|listing|advert|board|to sell)\b/i.test(t)) return null; // "post office hours" is not this
    if (!quantity || !item || item.length > 50) return "To post, give me the amount, what it is, and the price, like \"post for sale: 500 kg maize at 40 per kg\".";
    if (!per && !parseMoney(body)) return "What price do you want? Say it like \"at 40 per kg\" (or \"price 20000 for the lot\").";
    const mine = (await ctx.store.listPublic({ tenantId: ctx.tenantId, collection: "listing" })).filter(record => record.userId === ctx.userId && record.data.status === "active");
    if (mine.length >= MAX_ACTIVE_PER_PERSON) return "You have thirty listings up already. Remove or mark some sold first.";
    const name = (ctx.nameOf ? await ctx.nameOf({ tenantId: ctx.tenantId, userId: ctx.userId }).catch(() => "") : "") || "A farmer";
    const farm = (await ctx.store.list({ ...scope, collection: "farm" }))[0];
    const lot = !per ? parseMoney(body) : null;
    const record = await ctx.store.add({ tenantId: ctx.tenantId, userId: ctx.userId, collection: "listing", data: { type: wantWord || /\b(?:wanted|buying|looking for|want to buy)\b/i.test(t) ? "buy" : "sell", item, qty: quantity.value, unit: quantity.unit, price: per ? per.amount : lot ? round(lot.amount / quantity.value, 2) : null, per: per?.per || quantity.unit, currency: per?.currency || lot?.currency || "", seller: name, area: farm?.data.location || "", day: ctx.today, status: "active" } });
    return `Posted. ${describeListing(record)}. Everyone in your community can see it (never your phone number). Say "remove listing ${record.number}" or "mark listing ${record.number} sold" when it's done.`;
  }

  if (/^(?:show|read|what(?:'s| is) on) (?:me )?(?:the )?(?:market ?place |farm )?board$/.test(lower) || /^what(?:'s| is) (?:for sale|being sold)(?: (?:near me|here|today))?$/.test(lower) || /^(?:show|list) (?:me )?(?:the )?(?:listings|things for sale)$/.test(lower)) {
    const list = await active();
    return list.length ? `${plural(list.length, "listing")}: ${list.slice(0, 8).map(describeListing).join("; ")}${list.length > 8 ? ` and ${list.length - 8} more (ask for a crop, like "what is for sale: maize")` : ""}.` : 'The board is empty. Say "post for sale: 500 kg maize at 40 per kg".';
  }
  if ((m = /^(?:what(?:'s| is) for sale|who(?:'s| is) (?:selling|buying)|who wants|who is looking for|find|search (?:the )?board for|show (?:me )?(?:the )?(?:wanted|buyers|sellers)(?: for)?)\s*(?:[:,-]|of|for)?\s*(.*)$/i.exec(t)) && (m[1] || /^who|^show/i.test(t)) && /\b(?:board|for sale|selling|buying|wants|looking for|wanted|find)\b/i.test(t) && !/^(?:what(?:'s| is) for sale)$/i.test(t)) {
    const wantBuyers = /\bbuying|wants|looking for|wanted|buyers\b/i.test(t.replace(/^find\b/i, ""));
    const term = clean(m[1]).toLowerCase().replace(/^(?:some|any|the)\s+/, "");
    const list = (await active()).filter(record => (wantBuyers ? record.data.type === "buy" : true) && (!term || record.data.item.includes(term) || term.includes(record.data.item)));
    return list.length ? `${plural(list.length, wantBuyers ? "request" : "listing")}${term ? ` for ${term}` : ""}: ${list.slice(0, 8).map(describeListing).join("; ")}.` : `Nothing ${wantBuyers ? "wanted" : "for sale"}${term ? ` for ${term}` : ""} on the board right now.`;
  }
  if (/^(?:show|list) (?:me )?my (?:listings|posts|ads)$/.test(lower) || /^what (?:have i|did i) (?:posted|listed)$/.test(lower)) {
    const mine = (await ctx.store.listPublic({ tenantId: ctx.tenantId, collection: "listing" })).filter(record => record.userId === ctx.userId && record.data.status === "active");
    return mine.length ? `Your listings: ${mine.map(describeListing).join("; ")}.` : "You have nothing on the board.";
  }

  if ((m = /^(?:please )?(remove|delete|take down|close) listing #?(\d{1,6})$/i.exec(t)) || (m = /^(?:please )?mark listing #?(\d{1,6}) (?:as )?(sold|done|closed)$/i.exec(t))) {
    const number = Number(/^\d/.test(m[1]) ? m[1] : m[2]); const sold = /sold|done/i.test(m[1] + m[2]);
    const record = (await ctx.store.listPublic({ tenantId: ctx.tenantId, collection: "listing" })).find(item => item.number === number);
    if (!record || record.data.status !== "active") return `I can't find an open listing ${number}.`;
    if (record.userId !== ctx.userId) return `Listing ${number} isn't yours, so I can't change it.`;
    await ctx.store.update({ ...scope, record: { ...record, data: { ...record.data, status: sold ? "sold" : "closed", closedOn: ctx.today } } });
    return sold ? `Marked listing ${number} as sold and taken it off the board.` : `Removed listing ${number} from the board.`;
  }

  // Showing interest: the poster is told the buyer's name, and a number only if the buyer typed one.
  if ((m = /^(?:i(?:'m| am) interested in|contact (?:the )?(?:seller|buyer|poster) (?:of|for)|message (?:the )?(?:seller|buyer|poster) (?:of|for)|tell (?:the )?(?:seller|buyer|poster) (?:of|about)) listing #?(\d{1,6})(?:[,;]?\s*(?:my (?:number|phone) is|call me on|reach me on)\s*(\+?[\d\s().-]{7,20}))?$/i.exec(t))) {
    const record = (await ctx.store.listPublic({ tenantId: ctx.tenantId, collection: "listing" })).find(item => item.number === Number(m[1]));
    if (!record || record.data.status !== "active") return `I can't find an open listing ${m[1]}.`;
    if (record.userId === ctx.userId) return "That's your own listing.";
    const phone = m[2] ? normalizeRecipient("sms", clean(m[2])) : "";
    if (m[2] && !phone) return "I need your number with the country code, like +254712345678, or leave the number out and I'll only give your name.";
    if (!ctx.notifications?.enqueue) return "I can't send that right now.";
    const buyerName = (ctx.nameOf ? await ctx.nameOf({ tenantId: ctx.tenantId, userId: ctx.userId }).catch(() => "") : "") || "Someone in your community";
    const key = `board:${record.number}:${ctx.userId}:${ctx.today}`;
    if (ctx.notifications.existsByKey && await ctx.notifications.existsByKey({ tenantId: ctx.tenantId, idempotencyKey: key }).catch(() => false)) return `You've already told them about listing ${record.number} today, so I won't send it again. Try again tomorrow if you haven't heard back.`;
    await ctx.notifications.enqueue({ tenantId: ctx.tenantId, userId: record.userId, channel: "push", scheduledAt: ctx.now, idempotencyKey: key,
      content: { title: "Someone is interested", body: `${buyerName} is interested in your listing ${record.number} (${unitLabel(record.data.qty, record.data.unit)} of ${record.data.item}).${phone ? ` They gave this number: ${phone}.` : " They did not give a number; if you know them, you can text them from Kyro."}`, kind: "board" } });
    return `I've told the ${record.data.type === "buy" ? "buyer" : "seller"} that you're interested in listing ${record.number}. ${phone ? "I passed on the number you gave." : "I only gave your name, not your number; add \"my number is +254…\" if you want them to call you."}`;
  }
  return null;
}

module.exports = Object.freeze({ handle, describeListing });
