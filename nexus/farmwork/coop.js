"use strict";

const { clean, titleCase, parseMoney, parseQuantity, formatMoney, unitLabel, anyDay, plural, round } = require("./parse.js");
const { startGuided, askConfirm } = require("./guided.js");
const { describeDay, addDays, extractPeriod, extractRange } = require("../personal/dates.js");

// A cooperative's books, kept by whoever looks after them: members, dues and contributions, payouts, shared equipment and who has it when,
// and what each member delivered. Amounts are what the keeper says; Kyro adds nothing up except what was recorded, and it messages no one.
const templates = {
  coop: {
    collection: "coop", intro: "Let's set up your cooperative.",
    questions: [
      { key: "name", ask: "What is the cooperative called?", type: "text" },
      { key: "dues", ask: "How much are the regular dues for each member? For example 500. Say skip if there are none.", type: "money", optional: true },
      { key: "period", ask: "How often are dues paid: weekly, monthly or yearly?", type: "choice", options: [{ value: "weekly", words: ["weekly", "week", "every week"] }, { value: "monthly", words: ["monthly", "month", "every month"] }, { value: "yearly", words: ["yearly", "year", "annual", "annually", "every year"] }], optional: true }
    ],
    async finish(ctx, answers) {
      const clear = Object.fromEntries(Object.entries(answers).filter(([, value]) => value !== null && value !== undefined));
      const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
      const data = { name: titleCase(clear.name), dues: clear.dues?.amount || 0, currency: clear.dues?.currency || "", period: clear.period || "monthly" };
      const existing = (await ctx.store.list({ ...scope, collection: "coop" }))[0];
      if (existing) await ctx.store.update({ ...scope, record: { ...existing, data: { ...existing.data, ...data } } }); else await ctx.store.add({ ...scope, collection: "coop", data });
      return `${existing ? "Updated" : "Set up"} ${data.name}${data.dues ? `, dues ${formatMoney(data.dues, data.currency)} ${data.period}` : ", no regular dues"}. Say "add cooperative member Amina" to start your member list.`;
    }
  },
  member: {
    collection: "member", intro: "Let's add a member.",
    questions: [
      { key: "name", ask: "What is the member's name?", type: "text" },
      { key: "phone", ask: "Their phone number with the country code, like +254712345678?", type: "phone", optional: true },
      { key: "joined", ask: "When did they join? A day, or skip.", type: "date", pastPreferred: true, optional: true }
    ],
    async finish(ctx, answers) {
      const clear = Object.fromEntries(Object.entries(answers).filter(([, value]) => value !== null && value !== undefined));
      const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
      const members = await ctx.store.list({ ...scope, collection: "member" }); const name = titleCase(clear.name);
      if (members.some(member => member.data.name.toLowerCase() === name.toLowerCase())) return `${name} is already a member.`;
      if (members.length >= 3000) return "That's the most members I can keep (three thousand).";
      const record = await ctx.store.add({ ...scope, collection: "member", data: { ...clear, name, joined: clear.joined || ctx.today } });
      if (clear.phone && ctx.memory?.saveContact) { try { await ctx.memory.saveContact({ ...scope, name, phone: clear.phone }); } catch { /* saved either way */ } }
      return `Added ${name} as member ${record.number}. Say "${name.split(" ")[0]} paid 500 dues" when they pay.`;
    }
  }
};

function findMember(members, query) {
  const wanted = clean(query).toLowerCase().replace(/^(?:my |the |member )/, "");
  if (!wanted) return null;
  const exact = members.filter(member => member.data.name.toLowerCase() === wanted);
  if (exact.length === 1) return { member: exact[0] };
  const loose = members.filter(member => member.data.name.toLowerCase().split(" ").includes(wanted));
  return loose.length === 1 ? { member: loose[0] } : loose.length > 1 ? { ambiguous: loose } : null;
}
const periodFor = (coop, today) => extractPeriod(coop?.data.period === "weekly" ? "this week" : coop?.data.period === "yearly" ? "this year" : "this month", today);
const NAME = "([A-Za-z][A-Za-z'-]+(?: (?!(?:paid|contributed|delivered|for|on|to|has|booked|pays|gave)\\b)[A-Za-z][A-Za-z'-]+)?)";

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;
  const members = async () => ctx.store.list({ ...scope, collection: "member" });
  const coop = async () => (await ctx.store.list({ ...scope, collection: "coop" }))[0];

  if ((m = /^(?:please )?(?:set up|setup|create|register|start) (?:our|my|a) (?:farmers'? )?co-?op(?:erative)?(?: called| named)?\s*(.*)$/i.exec(t))) {
    const named = clean(m[1]); return startGuided(ctx, templates.coop, named && named.length <= 40 ? { name: titleCase(named) } : {});
  }
  if ((m = /^(?:please )?(?:add|register) (?:a )?(?:new )?(?:co-?op(?:erative)? )?member(?: called| named)?\s*(.*)$/i.exec(t)) && /co-?op|member/i.test(t)) {
    const named = clean(m[1]); return startGuided(ctx, templates.member, named && named.length <= 40 && !/\d/.test(named) ? { name: titleCase(named) } : {});
  }
  if (/^(?:show|list|who are) (?:me )?(?:(?:our|my|the) (?:co-?op(?:erative)? )?|co-?op(?:erative)? )members$/.test(lower) || /^who(?:'s| is) in (?:our|the) co-?op(?:erative)?$/.test(lower)) {
    const list = await members();
    return list.length ? `${plural(list.length, "member")}: ${list.slice().reverse().slice(0, 15).map(member => `${member.number}. ${member.data.name}`).join("; ")}${list.length > 15 ? ` and ${list.length - 15} more` : ""}.` : 'No members yet. Say "add cooperative member Amina".';
  }

  // ---- money in and out ----
  if ((m = new RegExp(`^${NAME} (?:paid|pays|has paid|contributed|gave|donated) (.+?)(?: for (.+))?$`, "i").exec(t)) || (m = new RegExp(`^(?:received|got) (.+?) from ${NAME}(?: for (.+))?$`, "i").exec(t))) {
    const swapped = /^(?:received|got)/i.test(t); const who = swapped ? m[2] : m[1]; const amountText = swapped ? m[1] : m[2]; const purpose = clean((swapped ? m[3] : m[3]) || "");
    const found = findMember(await members(), who);
    const money = parseMoney(`paid ${amountText}`) || parseMoney(amountText);
    if (found?.member && money) {
      if (found.ambiguous) return null;
      const c = await coop(); const kind = /\b(?:dues|subscription|fee|fees|monthly|weekly|annual)\b/i.test(`${amountText} ${purpose}`) ? "dues" : "contribution";
      const currency = money.currency || c?.data.currency || "";
      await ctx.store.add({ ...scope, collection: "coop_payment", data: { member: found.member.data.name, kind, amount: money.amount, currency, purpose: purpose.slice(0, 80), day: ctx.today } });
      const period = periodFor(c, ctx.today);
      const paid = (await ctx.store.list({ ...scope, collection: "coop_payment" })).filter(pay => pay.data.member === found.member.data.name && pay.data.kind === "dues" && pay.data.day >= period.from && pay.data.day <= period.to).reduce((sum, pay) => sum + pay.data.amount, 0);
      const owed = kind === "dues" && c?.data.dues ? round(c.data.dues - paid) : 0;
      return `Recorded: ${found.member.data.name} ${kind === "dues" ? "paid dues of" : "contributed"} ${formatMoney(money.amount, currency)}${purpose ? ` (${purpose})` : ""}.${kind === "dues" && c?.data.dues ? (owed > 0 ? ` ${formatMoney(owed, currency)} still owed ${period.label}.` : ` Dues are paid up ${period.label}.`) : ""}`;
    }
  }
  if ((m = new RegExp(`^(?:co-?op(?:erative)? )?payout (?:to )?${NAME}\\s*[:,-]?\\s*(.+)$`, "i").exec(t)) || (m = new RegExp(`^(?:paid out|pay out) (.+?) to ${NAME}(?: from the co-?op(?:erative)?)?(?: for (.+))?$`, "i").exec(t))) {
    const first = /^(?:co-?op)?.*?payout/i.test(t) && !/^(?:paid out|pay out)/i.test(t); const who = first ? m[1] : m[2]; const rest = first ? m[2] : `${m[1]} ${m[3] ? `for ${m[3]}` : ""}`;
    const found = findMember(await members(), who); const money = parseMoney(`paid ${rest}`) || parseMoney(rest);
    if (found?.member && money) {
      const c = await coop(); const currency = money.currency || c?.data.currency || ""; const purpose = clean(/\bfor (.+)$/i.exec(rest)?.[1] || "").slice(0, 80);
      await ctx.store.add({ ...scope, collection: "coop_payment", data: { member: found.member.data.name, kind: "payout", amount: money.amount, currency, purpose, day: ctx.today } });
      return `Recorded: the cooperative paid ${found.member.data.name} ${formatMoney(money.amount, currency)}${purpose ? ` for ${purpose}` : ""}.`;
    }
  }
  if (/^who (?:hasn'?t|has not|haven'?t|didn'?t|did not) paid(?: their)? dues(?: (?:this|last) (?:week|month|year))?$/.test(lower) || /^who owes(?: dues)?$/.test(lower) || /^(?:show|list) (?:the )?(?:dues )?arrears$/.test(lower)) {
    const c = await coop(); const list = await members();
    if (!c?.data.dues) return 'Set the dues first: "set up our cooperative called …", or tell me the amount when you set it up.';
    if (!list.length) return "You have no members yet.";
    const period = periodFor(c, ctx.today);
    const payments = (await ctx.store.list({ ...scope, collection: "coop_payment" })).filter(pay => pay.data.kind === "dues" && pay.data.day >= period.from && pay.data.day <= period.to);
    const owing = list.map(member => ({ member, owed: round(c.data.dues - payments.filter(pay => pay.data.member === member.data.name).reduce((sum, pay) => sum + pay.data.amount, 0)) })).filter(item => item.owed > 0);
    return owing.length ? `${plural(owing.length, "member owes", "members owe")} dues ${period.label}: ${owing.slice(0, 15).map(item => `${item.member.data.name} ${formatMoney(item.owed, c.data.currency)}`).join("; ")}.` : `Everyone has paid their dues ${period.label}.`;
  }
  if ((m = /^(?:show|what are|how much are) (?:our |the )?(?:co-?op(?:erative)? )?(?:contributions|payments|dues collected|collections)(?: (this (?:week|month|year)|last (?:month|year)))?$/i.exec(t))) {
    const period = extractPeriod(m[1] || "", ctx.today) || extractPeriod("this year", ctx.today);
    const rows = (await ctx.store.list({ ...scope, collection: "coop_payment" })).filter(pay => pay.data.day >= period.from && pay.data.day <= period.to);
    if (!rows.length) return `No cooperative payments recorded ${period.label}.`;
    const cur = rows[0].data.currency; const sum = kind => round(rows.filter(pay => pay.data.kind === kind).reduce((total, pay) => total + pay.data.amount, 0));
    const top = Object.entries(rows.filter(pay => pay.data.kind !== "payout").reduce((acc, pay) => { acc[pay.data.member] = round((acc[pay.data.member] || 0) + pay.data.amount); return acc; }, {})).sort((a, b) => b[1] - a[1]).slice(0, 3);
    return `${period.label[0].toUpperCase()}${period.label.slice(1)}: dues ${formatMoney(sum("dues"), cur)}, contributions ${formatMoney(sum("contribution"), cur)}, paid out ${formatMoney(sum("payout"), cur)}.${top.length ? ` Most paid in: ${top.map(([name, amount]) => `${name} ${formatMoney(amount, cur)}`).join(", ")}.` : ""}`;
  }

  // ---- shared equipment ----
  if ((m = /^(?:please )?(?:add|register) (?:a )?shared (?:equipment|tool|machine)\s*[:,-]?\s*(.+)$/i.exec(t))) {
    const name = clean(m[1]).toLowerCase().slice(0, 40); const items = await ctx.store.list({ ...scope, collection: "coop_equipment" });
    if (items.some(item => item.data.name === name)) return `${name} is already on the list.`;
    await ctx.store.add({ ...scope, collection: "coop_equipment", data: { name } });
    return `Added shared equipment: ${name}. Say "book the ${name} for Amina on Friday".`;
  }
  if (/^(?:show|list|what is) (?:our |the )?shared (?:equipment|tools|machines)$/.test(lower)) {
    const items = await ctx.store.list({ ...scope, collection: "coop_equipment" });
    return items.length ? `Shared equipment: ${items.slice().reverse().map(item => item.data.name).join(", ")}.` : 'No shared equipment yet. Say "add shared equipment: tractor".';
  }
  if ((m = /^(?:please )?book (?:the )?(.+?)(?: for (.+?))? (?:on|for) (.+)$/i.exec(t))) {
    const items = await ctx.store.list({ ...scope, collection: "coop_equipment" }); const item = items.find(entry => entry.data.name === clean(m[1]).toLowerCase() || entry.data.name.split(" ").includes(clean(m[1]).toLowerCase()));
    const day = anyDay(m[3], ctx.today);
    if (item && day) {
      if (day < ctx.today) return "That day has already passed. Give me a day that is still ahead.";
      const who = m[2] ? findMember(await members(), m[2]) : null; const name = who?.member ? who.member.data.name : m[2] ? titleCase(m[2]) : "";
      const clash = (await ctx.store.list({ ...scope, collection: "coop_booking" })).find(booking => booking.data.equipment === item.data.name && booking.data.day === day && booking.data.status !== "cancelled");
      if (clash) return `The ${item.data.name} is already booked ${describeDay(day, ctx.today)}${clash.data.member ? ` for ${clash.data.member}` : ""}. Pick another day.`;
      await ctx.store.add({ ...scope, collection: "coop_booking", data: { equipment: item.data.name, member: name, day, status: "booked" } });
      if (ctx.personal?.add) await ctx.personal.add({ kind: "event", text: `${item.data.name} booked${name ? ` for ${name}` : ""}`, day, time: "" });
      return `Booked the ${item.data.name}${name ? ` for ${name}` : ""} ${describeDay(day, ctx.today)}. It's on your calendar.`;
    }
  }
  if ((m = /^(?:who has|what(?:'s| is)) (?:the )?(.+?) (?:booked|reserved)(?: (this week|today|tomorrow|next week))?$/i.exec(t))) {
    const items = await ctx.store.list({ ...scope, collection: "coop_equipment" }); const item = items.find(entry => entry.data.name === clean(m[1]).toLowerCase());
    if (item) {
      // Looks forward: "this week" means the coming seven days (on a Sunday, calendar "this week" would be only today).
      const range = /^this week$/i.test(m[2] || "") ? { from: ctx.today, to: addDays(ctx.today, 6), label: "in the next 7 days" } : extractRange(m[2] || "", ctx.today);
      const bookings = (await ctx.store.list({ ...scope, collection: "coop_booking" })).filter(booking => booking.data.equipment === item.data.name && booking.data.day >= range.from && booking.data.day <= range.to && booking.data.status !== "cancelled").sort((a, b) => a.data.day.localeCompare(b.data.day));
      return bookings.length ? `The ${item.data.name} ${range.label}: ${bookings.map(booking => `${describeDay(booking.data.day, ctx.today)}${booking.data.member ? ` — ${booking.data.member}` : ""}`).join("; ")}.` : `The ${item.data.name} isn't booked ${range.label}.`;
    }
  }

  // ---- what members delivered ----
  if ((m = new RegExp(`^${NAME} delivered (.+?) to the co-?op(?:erative)?$`, "i").exec(t))) {
    const found = findMember(await members(), m[1]); const quantity = parseQuantity(m[2]);
    const item = clean(m[2].replace(quantity?.matched || "", "").replace(/^\s*of\s+/i, "")).toLowerCase();
    if (found?.member && quantity && item) {
      await ctx.store.add({ ...scope, collection: "coop_production", data: { member: found.member.data.name, item, qty: quantity.value, unit: quantity.unit, day: ctx.today } });
      const total = (await ctx.store.list({ ...scope, collection: "coop_production" })).filter(row => row.data.item === item && row.data.unit === quantity.unit && row.data.day >= `${ctx.today.slice(0, 4)}-01-01`).reduce((sum, row) => sum + row.data.qty, 0);
      return `Recorded: ${found.member.data.name} delivered ${unitLabel(quantity.value, quantity.unit)} of ${item}. The cooperative has ${unitLabel(round(total, 3), quantity.unit)} of ${item} this year.`;
    }
  }
  if (/^(?:show|what is) (?:our |the )?(?:co-?op(?:erative)? )?production(?: this (?:season|year|month))?$/.test(lower)) {
    const period = extractPeriod(/month/.test(lower) ? "this month" : "this year", ctx.today);
    const rows = (await ctx.store.list({ ...scope, collection: "coop_production" })).filter(row => row.data.day >= period.from && row.data.day <= period.to);
    if (!rows.length) return "No deliveries recorded yet.";
    const by = {}; for (const row of rows) { const key = `${row.data.item}|${row.data.unit}`; by[key] = round((by[key] || 0) + row.data.qty, 3); }
    return `Delivered ${period.label}: ${Object.entries(by).map(([key, value]) => { const [item, unit] = key.split("|"); return `${unitLabel(value, unit)} of ${item}`; }).join("; ")}.`;
  }

  if (/^(?:show|give me) (?:our |the )?(?:co-?op(?:erative)? )?(?:summary|overview|report)$/.test(lower)) {
    const c = await coop(); const list = await members();
    if (!c && !list.length) return 'Nothing set up yet. Say "set up our cooperative called …".';
    const period = periodFor(c, ctx.today);
    const pays = (await ctx.store.list({ ...scope, collection: "coop_payment" })); const dues = pays.filter(pay => pay.data.kind === "dues" && pay.data.day >= period.from && pay.data.day <= period.to);
    const paidUp = c?.data.dues ? list.filter(member => dues.filter(pay => pay.data.member === member.data.name).reduce((sum, pay) => sum + pay.data.amount, 0) >= c.data.dues).length : null;
    const equipment = await ctx.store.list({ ...scope, collection: "coop_equipment" });
    return `${c?.data.name || "Your cooperative"}: ${plural(list.length, "member")}${paidUp !== null ? `, ${paidUp} paid up on dues ${period.label}` : ""}, ${plural(equipment.length, "piece")} of shared equipment. Say "who hasn't paid dues" or "show cooperative production".`;
  }
  if ((m = /^(?:please )?(?:remove|delete) (?:cooperative )?member (.+)$/i.exec(t))) {
    const found = findMember(await members(), m[1]);
    if (found?.member) return askConfirm(ctx, `Remove ${found.member.data.name} from the cooperative? Their payments stay in the books.`, { type: "remove-record", memoryId: found.member.memoryId, label: found.member.data.name });
    return found?.ambiguous ? `Which one: ${found.ambiguous.map(member => member.data.name).join(" or ")}?` : `I don't have a member called ${clean(m[1])}.`;
  }
  return null;
}

module.exports = Object.freeze({ handle, templates, findMember });
