"use strict";

const { clean, titleCase, round, plural } = require("./parse.js");
const { addDays } = require("../personal/dates.js");
const { normalizeRecipient } = require("../communications/send-request.js");
const { recordMoney, NOT_FARM } = require("./money.js");
const { addStock, findItems } = require("./inventory.js");
const { findParty } = require("./parties.js");
const { findMember } = require("./coop.js");
const { askConfirmSw } = require("./swahili-land.js");
const { parseQuantitySw, unitLabelSw, parseMoneySw, moneyShown, englishItem, swahiliItem, describeDaySw, dayInEnglish, isDayWord, dayFromSw, splitDueSw, periodSw, placeName, CURRENCY_WORDS, UNIT_WORD, NUMBER } = require("../i18n/swahili-words.js");

// The farm's people and their business, in Swahili: buyers and suppliers, notes, follow-ups and orders; the cooperative's books (members, dues,
// contributions, payouts, shared equipment, deliveries); and the community board. The same records the English tools keep. Kyro records what the farmer says
// and messages no one, except that saying "nimependezwa na tangazo" tells the poster of a board listing (in Swahili and English, since it does not know
// which they read). First draft: a fluent speaker must review every word before it is relied on.
const SW = {
  // people
  askParty: "Anaitwa nani? Sema \"ongeza mnunuzi Amina, +254712345678, mahindi, Kisumu\".", partyExists: ({ name }) => `Tayari una ${name} kwenye orodha yako.`, partiesFull: "Hiyo ndiyo idadi kubwa ya watu ninayoweza kuhifadhi (elfu moja). Ondoa baadhi kwanza.",
  partyAdded: ({ name, role, products, area, first }) => `Nimemwongeza ${name} (${role}${products ? `, ${products}` : ""}${area ? `, ${area}` : ""}). Sema "andika kuhusu ${first}: …" kuhifadhi mlichozungumza, au "mfuatilie ${first} Ijumaa".`,
  roleBuyer: "mnunuzi", roleSupplier: "msambazaji", roleBoth: "hununua kwako na kukuuzia",
  partyList: ({ what, lines }) => `${what} wako: ${lines}.`, partyNone: ({ what }) => `Huna ${what} bado. Sema "ongeza mnunuzi".`, whichParty: ({ names }) => `Yupi: ${names}?`, noParty: ({ name }) => `Sina ${name} kwenye orodha yako. Sema "ongeza mnunuzi ${titleCase(name)}" kwanza.`,
  noted: ({ name, text }) => `Nimeandika kuhusu ${name}: ${text}.`,
  history: ({ head, orders, business, follow, notes }) => [head, orders, business, follow, notes].filter(Boolean).join(" "), ordersLine: ({ n, lines }) => `Maagizo ${n}: ${lines}.`, businessLine: ({ earned, spent }) => `Biashara mpaka sasa: ${earned ? `ulipata ${earned}` : ""}${earned && spent ? " na " : ""}${spent ? `ulitumia ${spent}` : ""}.`, followLine: ({ lines }) => `Ufuatiliaji: ${lines}.`, notesLine: ({ lines }) => `Kumbukumbu: ${lines}.`,
  followSet: ({ n, name, text, when }) => `Ufuatiliaji ${n}: ${name}${text ? ` — ${text}` : ""}, ${when}. Uko kwenye kalenda yako na kwenye muhtasari wako wa asubuhi siku hiyo.`,
  followNone: "Huna ufuatiliaji ulio wazi.", followList: ({ n, lines }) => `Una ufuatiliaji ${n} unaosubiri: ${lines}.`, followLate: "imechelewa, ", followMissing: "Siwezi kupata ufuatiliaji huo.", followDone: ({ name }) => `Imekamilika: ufuatiliaji wa ${name}.`,
  // orders
  askOrder: "Nipe kiasi, kitu na bei, kama \"Amina ameagiza kilo 100 za mahindi kwa shilingi 40 kwa kilo kufikia Ijumaa\".", whichNamed: ({ who }) => `${who} yupi? Sema jina kamili.`,
  saleOrder: ({ n, qty, item, name, priceLine, when }) => `Agizo ${n}: ${qty} za ${item} kwa ${name}${priceLine}${when ? `, ${when}` : ""}. Sema "agizo ${n} limetolewa" likikamilika.`,
  buyOrder: ({ n, qty, item, name, priceLine, when }) => `Agizo la ununuzi ${n}: ${qty} za ${item} kutoka kwa ${name}${priceLine}${when ? `, ${when}` : ""}. Sema "agizo ${n} limepokelewa" likikamilika.`,
  priceLine: ({ price, per, total }) => ` kwa ${price} kwa ${per}${total ? ` (${total} kwa jumla)` : ""}`,
  ordersNone: "Huna maagizo yaliyo wazi.", ordersList: ({ n, lines }) => `Maagizo ${n} yaliyo wazi: ${lines}.`, noOrder: ({ n }) => `Siwezi kupata agizo ${n}.`, orderClosed: ({ n, status }) => `Agizo ${n} tayari ${status}.`, orderCancelled: ({ n }) => `Nimefuta agizo ${n}.`,
  orderDone: ({ n, sale, notes }) => `Agizo ${n} ${sale ? "limetolewa" : "limepokelewa"}: ${notes}.`, noteIncome: ({ amount }) => `mapato ya ${amount} yamerekodiwa`, noteSpend: ({ amount }) => `matumizi ya ${amount} yamerekodiwa`, noteNoPrice: "bei haikutajwa, kwa hivyo sikurekodi pesa — sema \"nimeuza … kwa …\" kuiongeza",
  noteStockLeft: ({ left, name }) => `${left} za ${name} zimebaki ghalani`, noteStockAdded: ({ now, name }) => `imeongezwa ghalani (una ${now} za ${name})`, statusOpen: "wazi", statusDone: "limekamilika", statusCancelled: "limefutwa",
  removePartyAsk: ({ name }) => `Nimwondoe ${name} kwenye orodha yako? Rekodi za biashara ya awali ulizofanya naye zitabaki.`,
  // cooperative
  coopSet: ({ updated, name, dues, period }) => `${updated ? "Nimesasisha" : "Nimeanzisha"} ${name}${dues ? `, ada ${dues} ${period}` : ", hakuna ada za kawaida"}. Sema "ongeza mwanachama Amina" kuanza orodha ya wanachama.`,
  askCoopName: "Ushirika unaitwaje? Sema \"anzisha ushirika wetu Umoja wa Wakulima, ada 500 kila mwezi\".", askMember: "Mwanachama anaitwa nani? Sema \"ongeza mwanachama Amina\".", memberExists: ({ name }) => `${name} tayari ni mwanachama.`, membersFull: "Hiyo ndiyo idadi kubwa ya wanachama ninayoweza kuhifadhi (elfu tatu).",
  memberAdded: ({ name, n, first }) => `Nimemwongeza ${name} kama mwanachama ${n}. Sema "${first} amelipa ada 500" wanapolipa.`, membersNone: "Hakuna wanachama bado. Sema \"ongeza mwanachama Amina\".", memberList: ({ n, lines, more }) => `Wanachama ${n}: ${lines}${more ? ` na ${more} zaidi` : ""}.`,
  paid: ({ name, dues, amount, purpose, owed, period, upToDate }) => `Nimerekodi: ${name} ${dues ? "amelipa ada ya" : "amechangia"} ${amount}${purpose ? ` (${purpose})` : ""}.${owed ? ` ${owed} bado zinadaiwa ${period}.` : upToDate ? ` Ada zimelipwa zote ${period}.` : ""}`,
  payout: ({ name, amount, purpose }) => `Nimerekodi: ushirika umemlipa ${name} ${amount}${purpose ? ` kwa ${purpose}` : ""}.`, setDuesFirst: "Weka ada kwanza: \"anzisha ushirika wetu … , ada 500 kila mwezi\".", noMembers: "Huna wanachama bado.",
  owing: ({ n, period, lines }) => `Wanachama ${n} wanadaiwa ada ${period}: ${lines}.`, allPaid: ({ period }) => `Kila mtu amelipa ada zake ${period}.`, noCoopPays: ({ period }) => `Hakuna malipo ya ushirika yaliyorekodiwa ${period}.`,
  coopSums: ({ period, dues, contributions, paidOut, top }) => `${period[0].toUpperCase()}${period.slice(1)}: ada ${dues}, michango ${contributions}, zilizolipwa ${paidOut}.${top ? ` Waliolipa zaidi: ${top}.` : ""}`,
  equipAdded: ({ name }) => `Nimeongeza kifaa cha pamoja: ${name}. Sema "weka nafasi ya ${name} kwa Amina Ijumaa".`, equipExists: ({ name }) => `${name} tayari iko kwenye orodha.`, equipList: ({ lines }) => `Vifaa vya pamoja: ${lines}.`, equipNone: "Hakuna vifaa vya pamoja bado. Sema \"ongeza kifaa cha pamoja: trekta\".",
  booked: ({ name, who, when }) => `Nimeweka nafasi ya ${name}${who ? ` kwa ${who}` : ""} ${when}. Iko kwenye kalenda yako.`, clash: ({ name, when, who }) => `${name} tayari ina nafasi ${when}${who ? ` kwa ${who}` : ""}. Chagua siku nyingine.`, equipBookings: ({ name, span, lines }) => `${name} ${span}: ${lines}.`, equipFree: ({ name, span }) => `${name} haina nafasi ${span}.`, spanWeek: "katika siku 7 zijazo",
  delivered: ({ name, qty, item, total }) => `Nimerekodi: ${name} amewasilisha ${qty} za ${item}. Ushirika una ${total} za ${item} mwaka huu.`, noDeliveries: "Hakuna uwasilishaji ulioandikwa bado.", production: ({ period, lines }) => `Vilivyowasilishwa ${period}: ${lines}.`,
  coopSummary: ({ name, n, paidUp, period, equipment }) => `${name}: wanachama ${n}${paidUp !== null ? `, ${paidUp} wamelipa ada zote ${period}` : ""}, vifaa vya pamoja ${equipment}. Sema "nani hajalipa ada" au "onyesha uzalishaji wa ushirika".`, coopNothing: "Hakuna kilichowekwa bado. Sema \"anzisha ushirika wetu …\".",
  removeMemberAsk: ({ name }) => `Nimwondoe ${name} kwenye ushirika? Malipo yake yatabaki kwenye vitabu.`, dayPassed: "Siku hiyo imeshapita. Nipe siku ambayo bado iko mbele.",
  // board
  boardAsk: "Ili kutangaza, nipe kiasi, kitu na bei, kama \"weka tangazo: ninauza kilo 500 za mahindi kwa shilingi 40 kwa kilo\".", askPrice: "Bei unayotaka ni ipi? Sema kama \"kwa shilingi 40 kwa kilo\" (au \"bei shilingi 20000 kwa jumla\").", boardFull: "Una matangazo thelathini tayari. Ondoa au weka alama kuwa yameuzwa baadhi kwanza.",
  posted: ({ line, n }) => `Nimetangaza. ${line}. Kila mtu kwenye jumuiya yako anaweza kuliona (kamwe si namba yako ya simu). Sema "ondoa tangazo ${n}" au "tangazo ${n} limeuzwa" likikamilika.`,
  listing: ({ n, wanted, qty, item, price, seller, area }) => `Tangazo ${n}: ${wanted ? "linatafutwa" : "linauzwa"} — ${qty} za ${item}${price} — ${seller}${area ? ` (${area})` : ""}`, listingPrice: ({ price, per }) => ` kwa ${price} kwa ${per}`,
  boardEmpty: "Ubao ni mtupu. Sema \"weka tangazo: ninauza kilo 500 za mahindi kwa shilingi 40 kwa kilo\".", boardList: ({ n, lines, more }) => `Matangazo ${n}: ${lines}${more ? ` na ${more} zaidi (uliza kuhusu zao, kama "nani anauza mahindi")` : ""}.`,
  boardFound: ({ n, wanted, term, lines }) => `${wanted ? "Maombi" : "Matangazo"} ${n}${term ? ` ya ${term}` : ""}: ${lines}.`, boardNoneFound: ({ wanted, term }) => `Hakuna ${wanted ? "kinachotafutwa" : "kinachouzwa"}${term ? ` cha ${term}` : ""} kwenye ubao sasa hivi.`,
  mine: ({ lines }) => `Matangazo yako: ${lines}.`, mineNone: "Huna kitu kwenye ubao.", noListing: ({ n }) => `Siwezi kupata tangazo lililo wazi ${n}.`, notYours: ({ n }) => `Tangazo ${n} si lako, kwa hivyo siwezi kulibadilisha.`, sold: ({ n }) => `Nimeweka tangazo ${n} kuwa limeuzwa na kuliondoa kwenye ubao.`, removed: ({ n }) => `Nimeondoa tangazo ${n} kwenye ubao.`,
  yourOwn: "Hilo ni tangazo lako mwenyewe.", needNumber: "Nahitaji namba yako na msimbo wa nchi, kama +254712345678, au acha namba nikupe jina lako tu.", cannotSend: "Siwezi kutuma hilo sasa hivi.", alreadyTold: ({ n }) => `Tayari umemwambia kuhusu tangazo ${n} leo, kwa hivyo sitatuma tena. Jaribu kesho usipojibiwa.`,
  told: ({ buyer, n, number }) => `Nimemwambia ${buyer ? "mnunuzi" : "muuzaji"} kuwa umependezwa na tangazo ${n}. ${number ? "Nimempa namba uliyotoa." : "Nimempa jina lako tu, si namba yako; ongeza \"namba yangu ni +254…\" ukitaka wakupigie."}`,
  pushTitle: "Mtu amependezwa · Someone is interested", pushBody: ({ who, n, qty, item, phone }) => `${who} amependezwa na tangazo lako ${n} (${qty} za ${item}).${phone ? ` Ametoa namba hii: ${phone}.` : " Hakutoa namba; ukimjua, unaweza kumtumia ujumbe kupitia Kyro."}`,
  pushBodyEn: ({ who, n, qty, item, phone }) => `${who} is interested in your listing ${n} (${qty} of ${item}).${phone ? ` They gave this number: ${phone}.` : " They did not give a number; if you know them, you can text them from Kyro."}`,
  removedRecord: ({ name }) => `Sawa. Nimeondoa ${name}.`, goneItem: ({ name }) => `Simwoni ${name} tena.`
};

const first = name => clean(name).split(" ")[0];
const NAME = "([A-Za-z][A-Za-z'-]+(?: (?!(?:amelipa|amechangia|amewasilisha|ameagiza|kwa|kwenye|na)\\b)[A-Za-z][A-Za-z'-]+)?)";
const dayShown = (day, today) => describeDaySw(day, today);
const PER_PRICE = new RegExp(`\\bkwa\\s+((?:shilingi|sh|ksh|tsh|ush)\\s*)?(${NUMBER})\\s*(shilingi|sh|ksh|tsh|ush)?\\s*(?:kwa|kila|/)\\s*(${UNIT_WORD})\\b`, "i");
const readPrice = text => { const m = PER_PRICE.exec(text); if (!m) return null; const unit = parseQuantitySw(`1 ${m[4]}`)?.unit; return unit ? { amount: Number(m[2].replace(/,/g, "")), currency: /shilingi/i.test(`${m[1] || ""}${m[3] || ""}`) ? "shillings" : "", per: unit, matched: m[0] } : null; };
const stripPrice = (text, price) => clean(price ? text.replace(price.matched, " ") : text);
const stripQuantity = (text, quantity) => clean(text.slice(0, quantity.index) + " " + text.slice(quantity.index + quantity.matched.length));
const itemOf = raw => clean(raw).replace(/^(?:za|ya|wa|la|cha|vya)\s+/i, "").toLowerCase();
const ROLE_WORDS = { buyer: SW.roleBuyer, supplier: SW.roleSupplier, both: SW.roleBoth };

async function partyFor(ctx, name, role) {
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const parties = await ctx.store.list({ ...scope, collection: "party" }); const found = findParty(parties, name);
  if (found?.party) return found.party; if (found?.ambiguous) return null;
  return ctx.store.add({ ...scope, collection: "party", data: { name: titleCase(name), role } });
}

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  if (!/(?:mnunuzi|wanunuzi|mteja|wateja|msambazaji|wasambazaji|muuzaji|wauzaji|kuhusu|mfuatilie|mpigie tena|mtembelee|nimfuatilie|ameagiza|nimeagiza|agizo|maagizo|ushirika|chama|mwanachama|wanachama|amelipa|amechangia|amewasilisha|kifaa cha pamoja|vifaa vya pamoja|tangazo|matangazo|ubao|ninauza|natafuta|anauza|ananunua|nimependezwa|historia|weka nafasi|nafasi ya|ufuatiliaji|kumfuatilia|uzalishaji|malipo ya ushirika|nani ana|nafasi za|ada)/i.test(lower)) return null;
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const list = collection => ctx.store.list({ ...scope, collection });
  let m;

  // =========================== buyers and suppliers ===========================
  if ((m = /^(?:tafadhali\s+)?(?:ongeza|sajili|hifadhi)\s+(mnunuzi|mteja|msambazaji|muuzaji)(?:\s+(?:mpya|anayeitwa|aitwaye))?\s*(.*)$/i.exec(t)) && !/\b(?:kwenye|katika)\s+(?:orodha|kalenda)\b/i.test(t)) {
    const role = /msambazaji|muuzaji/i.test(m[1]) ? "supplier" : "buyer"; const parts = clean(m[2]).split(/\s*,\s*/).filter(Boolean); const name = parts.shift() || "";
    if (!name || name.length > 40 || /\d/.test(name)) return SW.askParty;
    let phone = ""; let products = ""; let area = "";
    for (const part of parts) { const candidate = /^\+?[\d\s().-]{7,20}$/.test(part) ? normalizeRecipient("sms", part) : ""; if (candidate) phone = candidate; else if (!products) products = part.slice(0, 100); else if (!area) area = placeName(part); }
    const parties = await list("party"); const shown = titleCase(name);
    if (parties.some(party => party.data.name.toLowerCase() === shown.toLowerCase())) return SW.partyExists({ name: shown });
    if (parties.length >= 1000) return SW.partiesFull;
    await ctx.store.add({ ...scope, collection: "party", data: { name: shown, role, ...(phone ? { phone } : {}), ...(products ? { products: listEnglish(products) } : {}), ...(area ? { area } : {}) } });
    if (phone && ctx.memory?.saveContact) { try { await ctx.memory.saveContact({ ...scope, name: shown, phone }); } catch { /* saved either way */ } }
    return SW.partyAdded({ name: shown, role: ROLE_WORDS[role], products: products ? listSwahili(listEnglish(products)) : "", area, first: first(shown) });
  }
  if ((m = /^(?:onyesha|orodhesha|nionyeshe)\s+(wanunuzi|wateja|wasambazaji|wauzaji) wangu$/i.exec(t))) {
    const role = /wasambazaji|wauzaji/i.test(m[1]) ? "supplier" : "buyer";
    const rows = (await list("party")).filter(party => party.data.role === role || party.data.role === "both");
    return rows.length ? SW.partyList({ what: m[1].toLowerCase(), lines: rows.slice().reverse().slice(0, 12).map(party => `${party.data.name}${party.data.products ? ` (${listSwahili(party.data.products)})` : ""}${party.data.area ? `, ${party.data.area}` : ""}`).join("; ") }) : SW.partyNone({ what: m[1].toLowerCase() });
  }
  if ((m = /^(?:andika|weka)\s+(?:kumbuka\s+)?kuhusu\s+(.+?)\s*[:,-]\s*(.+)$/i.exec(t))) {
    const known = await list("party");
    if (!known.length || /^(?:wangu|yangu|langu|kalenda)\b|\b(?:kalenda|simu|shajara)\b/i.test(m[1])) return null;
    const found = findParty(known, m[1]);
    if (!found) return null; // a patient, an animal or something else: not for us
    if (found.ambiguous) return SW.whichParty({ names: found.ambiguous.map(party => party.data.name).join(" au ") });
    await ctx.store.add({ ...scope, collection: "party_note", data: { party: found.party.data.name, text: clean(m[2]).slice(0, 300), day: ctx.today } });
    return SW.noted({ name: found.party.data.name, text: clean(m[2]).slice(0, 120) });
  }
  if ((m = /^(?:nieleze kuhusu|historia ya|nionyeshe historia ya|nimekumbuka nini kuhusu)\s+(.+)$/i.exec(t))) {
    const found = findParty(await list("party"), m[1]);
    if (found?.ambiguous) return SW.whichParty({ names: found.ambiguous.map(party => party.data.name).join(" au ") });
    if (found?.party) {
      const name = found.party.data.name; const d = found.party.data;
      const notes = (await list("party_note")).filter(note => note.data.party === name).slice(0, 3); const orders = (await list("order")).filter(order => order.data.party === name);
      const money = (await list("money")).filter(record => record.data.party === name); const follow = (await list("followup")).filter(item => item.data.party === name && item.data.status === "open");
      const earned = money.filter(record => record.data.type === "income").reduce((sum, record) => sum + record.data.amount, 0); const spent = money.filter(record => record.data.type === "expense").reduce((sum, record) => sum + record.data.amount, 0);
      return SW.history({ head: `${name}${d.role ? ` (${ROLE_WORDS[d.role] || d.role})` : ""}${d.phone ? `, ${d.phone}` : ""}${d.products ? `, ${listSwahili(d.products)}` : ""}${d.area ? `, ${d.area}` : ""}.`,
        orders: orders.length ? SW.ordersLine({ n: orders.length, lines: orders.slice(0, 3).map(order => `${order.data.qty ? `${unitLabelSw(order.data.qty, order.data.unit)} ` : ""}${swahiliItem(order.data.item)} (${statusOf(order.data.status)})`).join("; ") }) : "",
        business: earned || spent ? SW.businessLine({ earned: earned ? moneyShown(earned, money[0]?.data.currency) : "", spent: spent ? moneyShown(spent, money[0]?.data.currency) : "" }) : "",
        follow: follow.length ? SW.followLine({ lines: follow.map(item => `${item.data.text || "kumtembelea"} (${dayShown(item.data.due, ctx.today)})`).join("; ") }) : "", notes: notes.length ? SW.notesLine({ lines: notes.map(note => note.data.text).join(" | ") }) : "" });
    }
  }
  // follow-ups: "Mfuatilie Amina Ijumaa: kuhusu bei"
  if ((m = /^(?:tafadhali\s+)?(?:mfuatilie|mpigie tena|mtembelee|nimfuatilie)\s+(.+?)(?:\s*[:,-]\s*(.+))?$/i.exec(t))) {
    const split = splitDueSw(m[1], ctx.today); const found = findParty(await list("party"), split.title);
    if (!found) return null;
    if (found.ambiguous) return SW.whichParty({ names: found.ambiguous.map(party => party.data.name).join(" au ") });
    const due = split.due || addDays(ctx.today, 1); const text = clean(m[2] || "").slice(0, 200);
    const item = await ctx.store.add({ ...scope, collection: "followup", data: { party: found.party.data.name, text, due, status: "open" } });
    if (ctx.personal?.add) await ctx.personal.add({ kind: "event", text: `Mfuatilie ${found.party.data.name}${text ? `: ${text}` : ""}`, day: due, time: "" });
    return SW.followSet({ n: item.number, name: found.party.data.name, text, when: dayShown(due, ctx.today) });
  }
  if (/^(?:nani nimfuatilie|nimfuatilie nani|onyesha ufuatiliaji wa wanunuzi|ufuatiliaji gani wa biashara uko wazi)$/.test(lower)) {
    const open = (await list("followup")).filter(item => item.data.status === "open" && item.data.party).sort((a, b) => a.data.due.localeCompare(b.data.due));
    return open.length ? SW.followList({ n: open.length, lines: open.slice(0, 8).map(item => `${item.number}. ${item.data.party}${item.data.text ? ` — ${item.data.text}` : ""} (${item.data.due < ctx.today ? SW.followLate : ""}${dayShown(item.data.due, ctx.today)})`).join("; ") }) : SW.followNone;
  }
  if ((m = /^ufuatiliaji wa (?:biashara|mnunuzi|msambazaji) (?:namba )?#?(\d{1,5}) umekamilika$/i.exec(t)) || (m = /^nimemaliza kumfuatilia\s+(.+)$/i.exec(t))) {
    const items = (await list("followup")).filter(item => item.data.status === "open" && item.data.party);
    const item = /^\d+$/.test(m[1]) ? items.find(entry => entry.number === Number(m[1])) : items.find(entry => entry.data.party.toLowerCase().split(" ").includes(clean(m[1]).toLowerCase()));
    if (!item) return /^\d+$/.test(m[1]) ? SW.followMissing : null;
    await ctx.store.update({ ...scope, record: { ...item, data: { ...item.data, status: "done", doneOn: ctx.today } } });
    return SW.followDone({ name: item.data.party });
  }

  // orders: "Amina ameagiza kilo 100 za mahindi kwa shilingi 40 kwa kilo kufikia Ijumaa" / "Nimeagiza gunia 2 za mbolea kutoka kwa Juma kwa shilingi 15000 kwa gunia"
  let order = null;
  if ((m = new RegExp(`^${NAME} ameagiza (.+)$`).exec(t))) order = { kind: "sale", who: m[1], rest: m[2] };
  else if ((m = new RegExp(`^(?:tafadhali\\s+)?(?:nimeagiza|tumeagiza)\\s+(.+?)\\s+kutoka kwa\\s+${NAME}(?:\\s+(.*))?$`, "i").exec(t))) order = { kind: "purchase", who: m[2], rest: `${m[1]} ${m[3] || ""}` };
  if (order) {
    const quantity = parseQuantitySw(order.rest); const price = readPrice(order.rest);
    if (!quantity) return null;
    const withoutPrice = stripPrice(order.rest, price); const split = splitDueSw(withoutPrice, ctx.today);
    const item = itemOf(stripQuantity(split.title, parseQuantitySw(split.title) || quantity));
    if (!item || item.length > 50) return null;
    const party = await partyFor(ctx, order.who, order.kind === "sale" ? "buyer" : "supplier");
    if (!party) return SW.whichNamed({ who: order.who });
    const record = await ctx.store.add({ ...scope, collection: "order", data: { kind: order.kind, party: party.data.name, item: englishItem(item), qty: quantity.value, unit: quantity.unit, price: price?.amount || null, currency: price?.currency || "", status: "open", due: split.due || null, day: ctx.today } });
    const priceLine = price ? SW.priceLine({ price: moneyShown(price.amount, price.currency), per: unitLabelSw(1, price.per).split(" ")[0], total: price.per === quantity.unit ? moneyShown(round(price.amount * quantity.value), price.currency) : "" }) : "";
    const args = { n: record.number, qty: unitLabelSw(quantity.value, quantity.unit), item, name: party.data.name, priceLine, when: split.due ? dayShown(split.due, ctx.today) : "" };
    return order.kind === "sale" ? SW.saleOrder(args) : SW.buyOrder(args);
  }
  if (/^(?:onyesha|orodhesha)\s+maagizo yangu$/.test(lower) || /^maagizo gani (?:yako wazi|yamebaki|yanasubiri)$/.test(lower)) {
    const open = (await list("order")).filter(item => item.data.status === "open");
    return open.length ? SW.ordersList({ n: open.length, lines: open.slice(0, 8).map(item => `${item.number}. ${item.data.party} — ${unitLabelSw(item.data.qty, item.data.unit)} za ${swahiliItem(item.data.item)}${item.data.due ? ` (${dayShown(item.data.due, ctx.today)})` : ""}`).join("; ") }) : SW.ordersNone;
  }
  if ((m = /^agizo (?:namba )?#?(\d{1,5}) (?:limetolewa|limepokelewa|limekamilika)$/i.exec(t))) {
    const record = (await list("order")).find(item => item.number === Number(m[1]));
    if (!record) return SW.noOrder({ n: m[1] });
    const d = record.data;
    if (d.status !== "open") return SW.orderClosed({ n: record.number, status: statusOf(d.status) });
    const notes = [];
    try {
      if (d.price) {
        const amount = round(d.price * d.qty);
        const result = await recordMoney(ctx, { type: d.kind === "sale" ? "income" : "expense", category: d.kind === "sale" ? "crops" : "other", amount, currency: d.currency, party: d.party, item: d.item, qty: d.qty, unit: d.unit, note: `order ${record.number}` });
        if (result.refused) return result.refused;
        notes.push(d.kind === "sale" ? SW.noteIncome({ amount: moneyShown(amount, result.record.data.currency) }) : SW.noteSpend({ amount: moneyShown(amount, result.record.data.currency) }));
      } else notes.push(SW.noteNoPrice);
    } catch (error) { if (error !== NOT_FARM) throw error; notes.push(SW.noteNoPrice); }
    const stock = await list("stock");
    if (d.kind === "sale") { const found = findItems(stock, d.item).filter(entry => entry.data.unit === d.unit); if (found.length === 1) { const left = round(Math.max(0, found[0].data.qty - d.qty), 3); await ctx.store.update({ ...scope, record: { ...found[0], data: { ...found[0].data, qty: left } } }); notes.push(SW.noteStockLeft({ left: unitLabelSw(left, d.unit), name: swahiliItem(found[0].data.name) })); } }
    else { const added = await addStock(ctx, d.item, { value: d.qty, unit: d.unit }); if (added) notes.push(SW.noteStockAdded({ now: unitLabelSw(added.data.qty, added.data.unit), name: swahiliItem(added.data.name) })); }
    await ctx.store.update({ ...scope, record: { ...record, data: { ...d, status: "done", doneOn: ctx.today } } });
    return SW.orderDone({ n: record.number, sale: d.kind === "sale", notes: notes.join("; ") });
  }
  if ((m = /^(?:tafadhali\s+)?(?:futa|ghairi)\s+agizo (?:namba )?#?(\d{1,5})$/i.exec(t))) {
    const record = (await list("order")).find(item => item.number === Number(m[1]));
    if (!record || record.data.status !== "open") return record ? SW.orderClosed({ n: record.number, status: statusOf(record.data.status) }) : SW.noOrder({ n: m[1] });
    await ctx.store.update({ ...scope, record: { ...record, data: { ...record.data, status: "cancelled" } } });
    return SW.orderCancelled({ n: record.number });
  }
  if ((m = /^(?:tafadhali\s+)?(?:ondoa|futa)\s+(?:mnunuzi|mteja|msambazaji|muuzaji)\s+(.+)$/i.exec(t))) {
    const found = findParty(await list("party"), m[1]);
    if (found?.party) return askConfirmSw(ctx, SW.removePartyAsk({ name: found.party.data.name }), { type: "remove-record-sw", memoryId: found.party.memoryId, label: found.party.data.name });
    return found?.ambiguous ? SW.whichParty({ names: found.ambiguous.map(party => party.data.name).join(" au ") }) : SW.noParty({ name: clean(m[1]) });
  }

  // =========================== the cooperative ===========================
  const members = () => list("member"); const coop = async () => (await list("coop"))[0];
  const periodOfCoop = c => periodSw(c?.data.period === "weekly" ? "wiki hii" : c?.data.period === "yearly" ? "mwaka huu" : "mwezi huu", ctx.today);
  if ((m = /^(?:tafadhali\s+)?(?:anzisha|weka|sajili|badilisha)\s+(?:ushirika wetu|ushirika wangu|chama chetu cha ushirika|chama changu cha ushirika|chama chetu)\s*(.*)$/i.exec(t))) {
    const parts = clean(m[1]).split(/\s*,\s*/).filter(Boolean); const name = parts.shift() || "";
    if (!name || name.length > 40 || /\d/.test(name)) return SW.askCoopName;
    let dues = 0; let currency = ""; let period = "monthly";
    for (const part of parts) {
      if (/kila wiki|kwa wiki/i.test(part)) period = "weekly"; if (/kila mwaka|kwa mwaka/i.test(part)) period = "yearly"; if (/kila mwezi|kwa mwezi/i.test(part)) period = "monthly";
      const money = /^(?:ada|kila)/i.test(part) || /\d/.test(part) ? parseMoneySw(part.replace(/kila (?:wiki|mwezi|mwaka)|kwa (?:wiki|mwezi|mwaka)/gi, "")) : null;
      if (money && money.amount > 0) { dues = money.amount; currency = money.currency; }
    }
    const data = { name: placeName(name), dues, currency, period }; const existing = await coop();
    if (existing) await ctx.store.update({ ...scope, record: { ...existing, data: { ...existing.data, ...data } } }); else await ctx.store.add({ ...scope, collection: "coop", data });
    return SW.coopSet({ updated: Boolean(existing), name: data.name, dues: dues ? moneyShown(dues, currency) : "", period: { weekly: "kila wiki", monthly: "kila mwezi", yearly: "kila mwaka" }[period] });
  }
  if ((m = /^(?:tafadhali\s+)?(?:ongeza|sajili)\s+mwanachama(?: mpya)?(?: wa ushirika)?\s*(.*)$/i.exec(t))) {
    const parts = clean(m[1]).split(/\s*,\s*/).filter(Boolean); const name = parts.shift() || "";
    if (!name || name.length > 40 || /\d/.test(name)) return SW.askMember;
    const phone = parts.map(part => (/^\+?[\d\s().-]{7,20}$/.test(part) ? normalizeRecipient("sms", part) : "")).find(Boolean) || "";
    const list2 = await members(); const shown = titleCase(name);
    if (list2.some(member => member.data.name.toLowerCase() === shown.toLowerCase())) return SW.memberExists({ name: shown });
    if (list2.length >= 3000) return SW.membersFull;
    const record = await ctx.store.add({ ...scope, collection: "member", data: { name: shown, ...(phone ? { phone } : {}), joined: ctx.today } });
    if (phone && ctx.memory?.saveContact) { try { await ctx.memory.saveContact({ ...scope, name: shown, phone }); } catch { /* saved either way */ } }
    return SW.memberAdded({ name: shown, n: record.number, first: first(shown) });
  }
  if (/^(?:onyesha|orodhesha|nionyeshe)\s+wanachama (?:wangu|wa ushirika|wetu)$/.test(lower) || /^nani wako kwenye ushirika$/.test(lower)) {
    const rows = await members();
    return rows.length ? SW.memberList({ n: rows.length, lines: rows.slice().reverse().slice(0, 15).map(member => `${member.number}. ${member.data.name}`).join("; "), more: Math.max(0, rows.length - 15) }) : SW.membersNone;
  }
  // money in and out
  if ((m = new RegExp(`^${NAME} (?:amelipa|amechangia|ametoa mchango wa) (.+?)(?: kwa (.+))?$`, "i").exec(t))) {
    const found = findMember(await members(), m[1]);
    if (found?.ambiguous) return SW.whichParty({ names: found.ambiguous.map(member => member.data.name).join(" au ") });
    const money = parseMoneySw(m[2]);
    if (found?.member && money) {
      const c = await coop(); const purpose = clean(m[3] || "").replace(/^ajili ya /i, "");
      const dues = /(?:\bada\b|mchango wa kawaida|kila mwezi|kila wiki|kila mwaka)/i.test(`${m[2]} ${purpose}`) || /amelipa/i.test(t) && !purpose; const currency = money.currency || c?.data.currency || "";
      await ctx.store.add({ ...scope, collection: "coop_payment", data: { member: found.member.data.name, kind: dues ? "dues" : "contribution", amount: money.amount, currency, purpose: purpose.slice(0, 80), day: ctx.today } });
      const period = periodOfCoop(c);
      const paid = (await list("coop_payment")).filter(pay => pay.data.member === found.member.data.name && pay.data.kind === "dues" && pay.data.day >= period.from && pay.data.day <= period.to).reduce((sum, pay) => sum + pay.data.amount, 0);
      const owed = dues && c?.data.dues ? round(c.data.dues - paid) : 0;
      return SW.paid({ name: found.member.data.name, dues, amount: moneyShown(money.amount, currency), purpose, owed: owed > 0 ? moneyShown(owed, currency) : "", period: period.label, upToDate: dues && c?.data.dues && owed <= 0 });
    }
  }
  if ((m = new RegExp(`^(?:malipo ya ushirika kwa|ushirika umemlipa)\\s+${NAME}\\s*[:,-]?\\s*(.+?)(?: kwa (.+))?$`, "i").exec(t))) {
    const found = findMember(await members(), m[1]);
    if (found?.ambiguous) return SW.whichParty({ names: found.ambiguous.map(member => member.data.name).join(" au ") });
    const money = parseMoneySw(m[2]);
    if (found?.member && money) { const c = await coop(); const currency = money.currency || c?.data.currency || ""; const purpose = clean(m[3] || "").slice(0, 80); await ctx.store.add({ ...scope, collection: "coop_payment", data: { member: found.member.data.name, kind: "payout", amount: money.amount, currency, purpose, day: ctx.today } }); return SW.payout({ name: found.member.data.name, amount: moneyShown(money.amount, currency), purpose }); }
  }
  if (/^(?:nani hajalipa ada|nani anadaiwa ada|nani hakulipa ada)(?: (?:wiki hii|mwezi huu|mwaka huu|wiki iliyopita|mwezi uliopita))?$/.test(lower)) {
    const c = await coop(); const rows = await members();
    if (!c?.data.dues) return SW.setDuesFirst; if (!rows.length) return SW.noMembers;
    const period = periodSw(lower, ctx.today, c.data.period === "weekly" ? "this week" : c.data.period === "yearly" ? "this year" : "this month");
    const pays = (await list("coop_payment")).filter(pay => pay.data.kind === "dues" && pay.data.day >= period.from && pay.data.day <= period.to);
    const owing = rows.map(member => ({ member, owed: round(c.data.dues - pays.filter(pay => pay.data.member === member.data.name).reduce((sum, pay) => sum + pay.data.amount, 0)) })).filter(item => item.owed > 0);
    return owing.length ? SW.owing({ n: owing.length, period: period.label, lines: owing.slice(0, 15).map(item => `${item.member.data.name} ${moneyShown(item.owed, c.data.currency)}`).join("; ") }) : SW.allPaid({ period: period.label });
  }
  if ((m = /^(?:onyesha|nionyeshe)\s+(?:michango|malipo) ya ushirika(?: (wiki hii|mwezi huu|mwaka huu|mwezi uliopita))?$/i.exec(t))) {
    const period = periodSw(m[1] || "mwaka huu", ctx.today, "this year"); const rows = (await list("coop_payment")).filter(pay => pay.data.day >= period.from && pay.data.day <= period.to);
    if (!rows.length) return SW.noCoopPays({ period: period.label });
    const cur = rows[0].data.currency; const sumKind = kind => round(rows.filter(pay => pay.data.kind === kind).reduce((total, pay) => total + pay.data.amount, 0));
    const top = Object.entries(rows.filter(pay => pay.data.kind !== "payout").reduce((acc, pay) => { acc[pay.data.member] = round((acc[pay.data.member] || 0) + pay.data.amount); return acc; }, {})).sort((a, b) => b[1] - a[1]).slice(0, 3);
    return SW.coopSums({ period: period.label, dues: moneyShown(sumKind("dues"), cur), contributions: moneyShown(sumKind("contribution"), cur), paidOut: moneyShown(sumKind("payout"), cur), top: top.map(([name, amount]) => `${name} ${moneyShown(amount, cur)}`).join(", ") });
  }
  // shared equipment
  if ((m = /^(?:tafadhali\s+)?(?:ongeza|sajili)\s+kifaa cha pamoja\s*[:,-]?\s*(.+)$/i.exec(t))) {
    const name = clean(m[1]).toLowerCase().slice(0, 40); const items = await list("coop_equipment");
    if (items.some(item => item.data.name === name)) return SW.equipExists({ name });
    await ctx.store.add({ ...scope, collection: "coop_equipment", data: { name } });
    return SW.equipAdded({ name });
  }
  if (/^(?:onyesha|orodhesha|nionyeshe)\s+vifaa vya pamoja$/.test(lower)) { const items = await list("coop_equipment"); return items.length ? SW.equipList({ lines: items.slice().reverse().map(item => item.data.name).join(", ") }) : SW.equipNone; }
  if ((m = /^(?:tafadhali\s+)?weka nafasi ya\s+(.+?)(?:\s+kwa\s+(.+?))?\s+(.+)$/i.exec(t))) {
    const items = await list("coop_equipment"); const wanted = clean(m[1]).toLowerCase(); const item = items.find(entry => entry.data.name === wanted || entry.data.name.split(" ").includes(wanted)); const tail = m[3];
    const day = dayFromSw(tail, ctx.today);
    if (item && day) {
      if (day < ctx.today) return SW.dayPassed;
      const who = m[2] ? findMember(await members(), m[2]) : null;
      if (m[2] && !who?.member) {
        return who?.ambiguous ? SW.whichParty({ names: who.ambiguous.map(member => member.data.name).join(" au ") }) : SW.noParty({ name: clean(m[2]) });
      }
      const name = who?.member ? who.member.data.name : "";
      const clash = (await list("coop_booking")).find(booking => booking.data.equipment === item.data.name && booking.data.day === day && booking.data.status !== "cancelled");
      if (clash) return SW.clash({ name: item.data.name, when: dayShown(day, ctx.today), who: clash.data.member });
      await ctx.store.add({ ...scope, collection: "coop_booking", data: { equipment: item.data.name, member: name, day, status: "booked" } });
      if (ctx.personal?.add) await ctx.personal.add({ kind: "event", text: `${item.data.name} imepangwa${name ? ` kwa ${name}` : ""}`, day, time: "" });
      return SW.booked({ name: item.data.name, who: name, when: dayShown(day, ctx.today) });
    }
  }
  if ((m = /^(?:nani ana|nafasi za)\s+(.+?)(?:\s+(wiki hii|leo|kesho))?$/i.exec(t)) && /^(?:nani ana|nafasi za)/i.test(t)) {
    const items = await list("coop_equipment"); const item = items.find(entry => entry.data.name === clean(m[1]).toLowerCase());
    if (item) {
      const to = m[2] === "leo" ? ctx.today : m[2] === "kesho" ? addDays(ctx.today, 1) : addDays(ctx.today, 6); const from = m[2] === "kesho" ? addDays(ctx.today, 1) : ctx.today; const span = m[2] === "leo" ? "leo" : m[2] === "kesho" ? "kesho" : SW.spanWeek;
      const bookings = (await list("coop_booking")).filter(booking => booking.data.equipment === item.data.name && booking.data.day >= from && booking.data.day <= to && booking.data.status !== "cancelled").sort((a, b) => a.data.day.localeCompare(b.data.day));
      return bookings.length ? SW.equipBookings({ name: item.data.name, span, lines: bookings.map(booking => `${dayShown(booking.data.day, ctx.today)}${booking.data.member ? ` — ${booking.data.member}` : ""}`).join("; ") }) : SW.equipFree({ name: item.data.name, span });
    }
  }
  // deliveries
  if ((m = new RegExp(`^${NAME} amewasilisha (.+?) (?:kwenye|kwa) (?:ushirika|chama)$`, "i").exec(t))) {
    const found = findMember(await members(), m[1]);
    if (found?.ambiguous) return SW.whichParty({ names: found.ambiguous.map(member => member.data.name).join(" au ") });
    const quantity = parseQuantitySw(m[2]);
    if (found?.member && quantity) {
      const item = englishItem(itemOf(stripQuantity(m[2], quantity)));
      if (item) {
        await ctx.store.add({ ...scope, collection: "coop_production", data: { member: found.member.data.name, item, qty: quantity.value, unit: quantity.unit, day: ctx.today } });
        const total = (await list("coop_production")).filter(row => row.data.item === item && row.data.unit === quantity.unit && row.data.day >= `${ctx.today.slice(0, 4)}-01-01`).reduce((sum, row) => sum + row.data.qty, 0);
        return SW.delivered({ name: found.member.data.name, qty: unitLabelSw(quantity.value, quantity.unit), item: swahiliItem(item), total: unitLabelSw(round(total, 3), quantity.unit) });
      }
    }
  }
  if (/^(?:onyesha|nionyeshe)\s+uzalishaji wa ushirika(?: (mwezi huu|mwaka huu|msimu huu))?$/.test(lower)) {
    const period = periodSw(/mwezi/.test(lower) ? "mwezi huu" : "mwaka huu", ctx.today, "this year"); const rows = (await list("coop_production")).filter(row => row.data.day >= period.from && row.data.day <= period.to);
    if (!rows.length) return SW.noDeliveries;
    const by = {}; for (const row of rows) { const key = `${row.data.item}|${row.data.unit}`; by[key] = round((by[key] || 0) + row.data.qty, 3); }
    return SW.production({ period: period.label, lines: Object.entries(by).map(([key, value]) => { const [item, unit] = key.split("|"); return `${unitLabelSw(value, unit)} za ${swahiliItem(item)}`; }).join("; ") });
  }
  if (/^(?:onyesha|nionyeshe)\s+muhtasari wa ushirika$/.test(lower)) {
    const c = await coop(); const rows = await members();
    if (!c && !rows.length) return SW.coopNothing;
    const period = periodOfCoop(c); const dues = (await list("coop_payment")).filter(pay => pay.data.kind === "dues" && pay.data.day >= period.from && pay.data.day <= period.to);
    const paidUp = c?.data.dues ? rows.filter(member => dues.filter(pay => pay.data.member === member.data.name).reduce((sum, pay) => sum + pay.data.amount, 0) >= c.data.dues).length : null;
    return SW.coopSummary({ name: c?.data.name || "Ushirika wako", n: rows.length, paidUp, period: period.label, equipment: (await list("coop_equipment")).length });
  }
  if ((m = /^(?:tafadhali\s+)?(?:ondoa|futa)\s+mwanachama\s+(.+)$/i.exec(t))) {
    const found = findMember(await members(), m[1]);
    if (found?.member) return askConfirmSw(ctx, SW.removeMemberAsk({ name: found.member.data.name }), { type: "remove-record-sw", memoryId: found.member.memoryId, label: found.member.data.name });
    return found?.ambiguous ? SW.whichParty({ names: found.ambiguous.map(member => member.data.name).join(" au ") }) : SW.noParty({ name: clean(m[1]) });
  }

  // =========================== the community board ===========================
  const active = async () => (await ctx.store.listPublic({ tenantId: ctx.tenantId, collection: "listing" })).filter(record => record.data.status === "active");
  const describeListingSw = record => { const d = record.data; return SW.listing({ n: record.number, wanted: d.type === "buy", qty: unitLabelSw(d.qty, d.unit), item: swahiliItem(d.item), price: d.price ? SW.listingPrice({ price: moneyShown(d.price, d.currency), per: unitLabelSw(1, d.per || d.unit).split(" ")[0] }) : "", seller: d.seller, area: d.area }); };
  if ((m = /^(?:tafadhali\s+)?(?:weka|toa|tuma)\s+tangazo\s*[:,-]?\s*(?:(ninauza|nauza|natafuta kununua|natafuta|nahitaji|ninanunua|ninatafuta)\s*[:,-]?\s*)?(.+)$/i.exec(t))) {
    const wantWord = /^(?:natafuta|nahitaji|ninanunua|ninatafuta)/i.test(m[1] || ""); const body = m[2];
    const quantity = parseQuantitySw(body); const price = readPrice(body);
    if (!quantity) return SW.boardAsk;
    const withoutPrice = stripPrice(body, price); const lot = !price ? /bei\s+(?:shilingi\s+)?(\d[\d,]*(?:\.\d+)?)(?:\s*(?:shilingi))?(?:\s+kwa jumla)?/i.exec(withoutPrice) : null;
    const item = itemOf(stripQuantity(withoutPrice.replace(/bei\s+(?:shilingi\s+)?\d[\d,]*(?:\.\d+)?(?:\s*shilingi)?(?:\s+kwa jumla)?/i, " "), quantity));
    if (!item || item.length > 50) return SW.boardAsk;
    if (!price && !lot) return SW.askPrice;
    const mine = (await ctx.store.listPublic({ tenantId: ctx.tenantId, collection: "listing" })).filter(record => record.userId === ctx.userId && record.data.status === "active");
    if (mine.length >= 30) return SW.boardFull;
    const name = (ctx.nameOf ? await ctx.nameOf({ tenantId: ctx.tenantId, userId: ctx.userId }).catch(() => "") : "") || "Mkulima"; const farm = (await list("farm"))[0];
    const lotAmount = lot ? Number(lot[1].replace(/,/g, "")) : 0; const lotCurrency = lot && /shilingi/i.test(lot[0]) ? "shillings" : "";
    const record = await ctx.store.add({ tenantId: ctx.tenantId, userId: ctx.userId, collection: "listing", data: { type: wantWord ? "buy" : "sell", item: englishItem(item), qty: quantity.value, unit: quantity.unit, price: price ? price.amount : round(lotAmount / quantity.value, 2), per: price?.per || quantity.unit, currency: price?.currency || lotCurrency, seller: name, area: farm?.data.location || "", day: ctx.today, status: "active" } });
    return SW.posted({ line: describeListingSw(record), n: record.number });
  }
  if (/^(?:onyesha|nionyeshe|soma)\s+ubao(?: wa soko| wa shamba)?$/.test(lower) || /^(?:nini kinauzwa|nini kinauzwa hapa|onyesha matangazo)$/.test(lower)) {
    const rows = await active();
    return rows.length ? SW.boardList({ n: rows.length, lines: rows.slice(0, 8).map(describeListingSw).join("; "), more: Math.max(0, rows.length - 8) }) : SW.boardEmpty;
  }
  if ((m = /^(nani anauza|nani ananunua|nani anatafuta|tafuta wanunuzi wa|tafuta wauzaji wa|tafuta matangazo ya)\s+(.+)$/i.exec(t))) {
    const wanted = /ananunua|anatafuta|wanunuzi/i.test(m[1]); const term = englishItem(itemOf(m[2]));
    const rows = (await active()).filter(record => (wanted ? record.data.type === "buy" : true) && (record.data.item.includes(term) || term.includes(record.data.item)));
    return rows.length ? SW.boardFound({ n: rows.length, wanted, term: swahiliItem(term), lines: rows.slice(0, 8).map(describeListingSw).join("; ") }) : SW.boardNoneFound({ wanted, term: swahiliItem(term) });
  }
  if (/^(?:onyesha|nionyeshe)\s+matangazo yangu$/.test(lower)) {
    const mine = (await active()).filter(record => record.userId === ctx.userId);
    return mine.length ? SW.mine({ lines: mine.map(describeListingSw).join("; ") }) : SW.mineNone;
  }
  if ((m = /^(?:tafadhali\s+)?(?:ondoa|futa|funga)\s+tangazo (?:namba )?#?(\d{1,6})$/i.exec(t)) || (m = /^tangazo (?:namba )?#?(\d{1,6}) limeuzwa$/i.exec(t))) {
    const n = Number(m[1]); const sold = /limeuzwa/i.test(t);
    const record = (await active()).find(item => item.number === n);
    if (!record) return SW.noListing({ n });
    if (record.userId !== ctx.userId) return SW.notYours({ n });
    await ctx.store.update({ ...scope, record: { ...record, data: { ...record.data, status: sold ? "sold" : "closed", closedOn: ctx.today } } });
    return sold ? SW.sold({ n }) : SW.removed({ n });
  }
  if ((m = /^nimependezwa na tangazo (?:namba )?#?(\d{1,6})(?:[,;]?\s*(?:namba yangu ni|nipigie kwa|nitafute kwa)\s*(\+?[\d\s().-]{7,20}))?$/i.exec(t))) {
    const record = (await active()).find(item => item.number === Number(m[1]));
    if (!record) return SW.noListing({ n: m[1] });
    if (record.userId === ctx.userId) return SW.yourOwn;
    const phone = m[2] ? normalizeRecipient("sms", clean(m[2])) : "";
    if (m[2] && !phone) return SW.needNumber;
    if (!ctx.notifications?.enqueue) return SW.cannotSend;
    const who = (ctx.nameOf ? await ctx.nameOf({ tenantId: ctx.tenantId, userId: ctx.userId }).catch(() => "") : "") || "Mtu kwenye jumuiya yako";
    const key = `board:${record.number}:${ctx.userId}:${ctx.today}`;
    if (ctx.notifications.existsByKey && await ctx.notifications.existsByKey({ tenantId: ctx.tenantId, idempotencyKey: key }).catch(() => false)) return SW.alreadyTold({ n: record.number });
    const args = { who, n: record.number, qty: unitLabelSw(record.data.qty, record.data.unit), item: swahiliItem(record.data.item), phone };
    await ctx.notifications.enqueue({ tenantId: ctx.tenantId, userId: record.userId, channel: "push", scheduledAt: ctx.now, idempotencyKey: key, content: { title: SW.pushTitle, body: `${SW.pushBody(args)}\n${SW.pushBodyEn({ ...args, qty: `${record.data.qty} ${record.data.unit}`, item: record.data.item })}`, kind: "board" } });
    return SW.told({ buyer: record.data.type === "buy", n: record.number, number: phone });
  }
  return null;
}

const statusOf = status => ({ open: SW.statusOpen, done: SW.statusDone, cancelled: SW.statusCancelled }[status] || status);
const listEnglish = text => clean(text).split(/\s*(?:,|na)\s+/i).map(part => englishItem(part)).filter(Boolean).join(", ");
const listSwahili = text => String(text || "").split(/\s*,\s*/).map(part => swahiliItem(part)).join(", ");

// After a yes: the same actions as the English tools, said in Swahili (removing a record is the shared "remove-record-sw" in swahili-land.js).
module.exports = Object.freeze({ handle, SW });
