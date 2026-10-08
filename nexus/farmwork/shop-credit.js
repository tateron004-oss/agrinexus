"use strict";

const { clean, round, formatMoney, plural } = require("./parse.js");
const { startGuided } = require("./guided.js");
const { nameKey } = require("./fields.js");
const money = require("./money.js");
const amounts = require("./books-amounts.js");
const rereads = require("./rereads.js");
const books = require("./books.js");
const swahili = require("./swahili.js");
const numbers = require("../i18n/swahili-numbers.js");
const { parseMoneySw, moneyShown, swahiliItem, YES_SW } = require("../i18n/swahili-words.js");
const { describeDay } = require("../personal/dates.js");

// Money that is not income or a cost: loans (money you owe), a chama (your savings), refunds (a sale reversed) and receipts (a stored sale read back).
//   * A LOAN is a debt: "I borrowed 5000 from Mama Njeri" is kept as money you owe, never as income. Paying it back is never a cost either (the cost, if any, is the interest, which is said on its own).
//   * A CHAMA contribution is savings: it is kept as a saving, never as a cost, so it never lowers your profit. A payout from the chama is your savings coming back, never income.
//   * A REFUND must point at an earlier sale: with none, or with several it cannot choose between, Kyro asks. Kyro only keeps the record; it never sends money.
//   * A RECEIPT is read back from the stored sale. If the sale is not there, nothing is made up.
// Records live in the same "money" collection as everything else; none of these is a counted income or expense, so profit never moves because of a loan or a chama.
const scopeOf = ctx => ({ tenantId: ctx.tenantId, userId: ctx.userId });
const listMoney = ctx => ctx.store.list({ ...scopeOf(ctx), collection: "money" });
const AMT = amounts.MONEY_TOKEN;
const NAME_LAZY = "([A-Za-z][A-Za-z'.-]*(?: [A-Za-z][A-Za-z'.-]*){0,2}?)";
const NAME = "([A-Za-z][A-Za-z'.-]*(?: [A-Za-z][A-Za-z'.-]*){0,2})";
const NOT_PERSON = /^(?:i|we|you|he|she|they|it|who|someone|somebody|nobody|me|us|my|our|the|a|an|this|that|please|money|cash|some|it|rent|loan|chama|savings|policy|policies|request|requests|process|status|rules|terms|form|forms|window|desk|department|fee|fees|amount|option|options|button|page|screen|feature|help|receipt|everyone|everybody|customers?|customer)$/i;
const cleanName = raw => clean(raw).replace(/^(?:the|my|our)\s+/i, "").replace(/\s+(?:back|please|today|yesterday)$/i, "");
// a lender may be the bank or the chama
const NOT_LENDER = /^(?:i|we|you|he|she|they|it|who|someone|somebody|nobody|me|us|my|our|the|a|an|this|that|please|money|cash|some|rent|loan|savings)$/i;
const validLender = raw => { const n = cleanName(raw); return Boolean(n) && !NOT_LENDER.test(n) && !NOT_LENDER.test(n.split(" ")[0]) && n.length <= 40; };
const validParty = raw => { const n = cleanName(raw); return Boolean(n) && !NOT_PERSON.test(n) && !NOT_PERSON.test(n.split(" ")[0]) && n.length <= 40; };
const asToken = raw => { const token = amounts.readToken(raw); return token && token.amount > 0 ? token : null; };
const shown = (amount, currency) => formatMoney(amount, currency);
const sums = (rows, field = "amount") => rows.reduce((acc, record) => { const key = money.currencyKey(rows, record.data.currency); acc[key] = round((acc[key] || 0) + record.data[field]); return acc; }, {});
const isLoan = record => record.data.loan === true && record.data.type === "expense" && record.data.unpaid && record.data.owing > 0;
const isChama = record => record.data.type === "saving" && record.data.category === "chama";
const sameCurrency = (a, b) => !money.isSpecific(a) || !money.isSpecific(b) || a === b;
const showTotals = totals => money.showTotals(totals);

// An amount that could be read two ways is asked about before anything is written (the answer can be a bare amount, see rereads.js).
async function askIfUnsure(ctx, t, token, raw) {
  if (!token.unsure) return null;
  return rereads.askReread(ctx, t.replace(raw, String(token.unsure)), { says: raw, values: [token.unsure] });
}

// ---------------- loans ----------------
async function recordLoan(ctx, { party, amount, currency, installment, language }) {
  const result = await money.recordMoney({ ...ctx, anyGoods: true }, { type: "expense", category: "loan", amount, currency, party, item: "loan", note: `loan from ${party || "someone"}`, debt: true, loan: true, unpaid: true, owing: amount, ...(installment ? { installment } : {}) });
  if (result.refused) return result.refused;
  const all = result.all.filter(isLoan).filter(record => party && record.data.party && nameKey(record.data.party) === nameKey(party));
  const here = shown(amount, result.record.data.currency);
  if (language === "sw") return `Nimeandika: umekopa ${here}${party ? ` kutoka kwa ${party}` : ""}. Si mapato: ni pesa unayodaiwa. Ukilipa, sema "nimelipa mkopo ${party || "wa benki"} 2000" (au kiasi).${all.length > 1 ? ` Sasa unadaiwa ${showTotals(sums(all, "owing"))} na ${party}.` : ""}`;
  return `Recorded: you borrowed ${here}${party ? ` from ${party}` : ""}. It is not income: it is money you owe, so it does not change your profit.${installment ? ` You plan to pay back ${shown(installment.amount, installment.currency || result.record.data.currency)} ${installment.every}.` : ""} When you repay, say "I repaid ${party || "the bank"} 2000" (or the amount).${all.length > 1 ? ` You now owe ${party} ${showTotals(sums(all, "owing"))} in all.` : ""}`;
}

// who the loan is from is asked in the language it was told in
const askLender = async (ctx, extra) => {
  await ctx.store.setSession({ ...scopeOf(ctx), session: { collection: "shop_loan_from", answers: {}, asking: "party", extra, expiresAt: new Date(Date.now() + 30 * 60000).toISOString() } });
  return extra.language === "sw" ? 'Mkopo ni kutoka kwa nani? (Sema jina, kama "benki" au "Mama Njeri", au sema skip.)' : 'Who is the loan from? (Say the name, like "the bank" or "Mama Njeri", or say skip.)';
};
const takeAmount = hint => raw => { const bare = rereads.parseBareAmount(raw); if (bare && !bare.ambiguous) return { value: { amount: bare.amount, currency: bare.currency } }; const a = books.amountAnswer(raw); if (a.value && !a.value.quantity) return a; return clean(raw).split(" ").length >= 2 && /[A-Za-z]{3,}/.test(clean(raw).replace(/\b(?:shillings?|shilingi|ksh|kshs|kes|dollars?|naira|elfu|mia|laki|milioni|bob)\b/gi, "")) ? { drop: true } : { hint }; };
const askAmountOf = async (ctx, collection, extra, en, sw) => {
  await ctx.store.setSession({ ...scopeOf(ctx), session: { collection, answers: {}, asking: "money", extra, expiresAt: new Date(Date.now() + 30 * 60000).toISOString() } });
  return extra.language === "sw" ? sw : en;
};
const templates = {
  shop_loan_from: { collection: "shop_loan_from", questions: [{ key: "party", ask: "Who is the loan from? (Say the name, like \"the bank\" or \"Mama Njeri\".)", type: "text", max: 40, optional: true,
    parse: raw => { const text = clean(raw); if (/\d/.test(text)) return { drop: true }; return text && text.split(" ").length <= 4 && /^[A-Za-z][A-Za-z'. -]*$/.test(text) ? { value: text } : { hint: 'Say just the name, like "the bank" or "Mama Njeri".' }; } }],
    async finish(ctx, answers, extra) { return recordLoan(ctx, { ...extra, party: answers.party ? books.personName(cleanName(answers.party)) : "" }); } },
  shop_repay: { collection: "shop_repay", questions: [{ key: "money", ask: "How much did you repay?", type: "money", parse: takeAmount('Say the amount, like "2000".') }],
    async finish(ctx, answers, extra) { return (await repayLoan(ctx, extra.party, answers.money, extra.language)) || (extra.language === "sw" ? "Sioni mkopo kutoka kwa mtu huyo kwenye rekodi zako." : "I could not find that loan."); } },
  shop_refund_amount: { collection: "shop_refund_amount", questions: [{ key: "money", ask: "How much did you refund?", type: "money", parse: takeAmount('Say the amount, like "300".') }],
    async finish(ctx, answers, extra) { return refund(ctx, extra.party, answers.money, extra.saleId, extra.language); } }
};

// Paying back a loan: only loan records are touched, oldest first, and NOTHING is counted as a cost (the money was borrowed).
async function repayLoan(ctx, creditor, said, language) {
  const rows = (await listMoney(ctx)).filter(isLoan).filter(record => record.data.party && nameKey(record.data.party) === nameKey(creditor)).sort((a, b) => String(a.data.day).localeCompare(String(b.data.day)) || String(a.createdAt).localeCompare(String(b.createdAt)));
  if (!rows.length) return null;
  const who = rows[0].data.party; const usable = said ? rows.filter(record => sameCurrency(said.currency, record.data.currency)) : rows;
  if (!usable.length) return language === "sw" ? `Unadaiwa ${showTotals(sums(rows, "owing"))} na ${who}, si kwa sarafu hiyo, kwa hivyo sijabadilisha chochote. Sema kiasi tena kwa sarafu ileile.` : `You owe ${who} ${showTotals(sums(rows, "owing"))}, not in that currency, so I have changed nothing. Say the amount again in the same money.`;
  let paying = said ? said.amount : Infinity; let paid = 0;
  for (const record of usable) {
    if (!(paying > 0)) break;
    const take = paying === Infinity ? record.data.owing : Math.min(paying, record.data.owing); const owing = round(record.data.owing - take);
    await ctx.store.update({ ...scopeOf(ctx), record: { ...record, data: { ...record.data, owing, unpaid: owing > 0, ...(owing > 0 ? {} : { paidOn: ctx.entryDay || ctx.today }) } } });
    paid = round(paid + take); paying = paying === Infinity ? Infinity : round(paying - take);
  }
  const left = (await listMoney(ctx)).filter(isLoan).filter(record => nameKey(record.data.party || "") === nameKey(who)); const currency = usable[0].data.currency;
  const over = said && paying > 0;
  if (language === "sw") return `Nimeandika: umemlipa ${who} ${moneyShown(paid, currency)} kwenye mkopo. Si gharama: ni pesa ulizokopa. Kama sehemu ilikuwa riba, sema "nimelipa riba 200" nami nitaihesabu kama gharama.${over ? ` Ulidaiwa ${moneyShown(paid, currency)} tu, kwa hivyo hicho ndicho nilichoandika.` : ""}${left.length ? ` Bado unadaiwa ${showTotals(sums(left, "owing"))} na ${who}.` : ` Huna deni la mkopo kwa ${who} tena.`}`;
  return `Recorded: you repaid ${who} ${shown(paid, currency)} of the loan. That is not a cost: it is money you borrowed. If part of it was interest, say "paid 200 interest to ${who}" and I will count that as a cost.${over ? ` You only owed ${who} ${shown(paid, currency)}, so that is all I recorded.` : ""}${left.length ? ` You still owe ${who} ${showTotals(sums(left, "owing"))}.` : ` You owe ${who} nothing on the loan now.`}`;
}
async function recordInterest(ctx, { amount, currency, party, language }) {
  const result = await money.recordMoney({ ...ctx, anyGoods: true }, { type: "expense", category: "interest", amount, currency, party: party || "", item: "loan interest", note: `interest${party ? ` to ${party}` : ""}` });
  if (result.refused) return result.refused;
  return language === "sw" ? `Nimeandika: riba ya ${moneyShown(amount, result.record.data.currency)}${party ? ` kwa ${party}` : ""}. Imehesabiwa kama gharama.` : `Recorded: interest of ${shown(amount, result.record.data.currency)}${party ? ` to ${party}` : ""}. It is counted as a cost.`;
}
function loanList(rows, language) {
  if (!rows.length) return language === "sw" ? "Huna mkopo ambao sijarekodi." : "You have no loans that I know of.";
  const by = {}; for (const record of rows) (by[record.data.party || (language === "sw" ? "Mtu fulani" : "Someone")] = by[record.data.party || (language === "sw" ? "Mtu fulani" : "Someone")] || []).push(record);
  const lines = Object.entries(by).map(([who, list]) => `${who} ${showTotals(sums(list, "owing"))}`).join("; ");
  return language === "sw" ? `Mikopo yako: ${lines}. Jumla ${showTotals(sums(rows, "owing"))}.` : `Your loans: ${lines}. Total ${showTotals(sums(rows, "owing"))}.`;
}

async function loans(ctx, t, lower) {
  let m;
  // ---- the loan list ----
  if (/^(?:what|which) loans do (?:i|we) (?:have|owe)$|^(?:show |list |tell me )?(?:me )?(?:my|our) loans?$|^(?:my |our )?loan (?:balance|balances|list)$|^how much (?:is|are) (?:my|our) loans?(?: balance)?$|^how much (?:do|did) (?:i|we) (?:still )?owe on (?:my|our|the) loans?$|^what is my loan balance$/.test(lower)) return loanList((await listMoney(ctx)).filter(isLoan), "en");
  if (/^(?:mikopo yangu|mikopo yetu|nina mikopo gani|salio la mkopo|salio la mikopo|deni langu la mkopo|ninadaiwa mkopo kiasi gani|orodha ya mikopo|nionyeshe mikopo yangu|mkopo wangu)$/.test(lower)) return loanList((await listMoney(ctx)).filter(isLoan), "sw");
  // ---- interest: a real cost ----
  if ((m = new RegExp(`^(?:i |we )?(?:paid|pay|spent) (${AMT}) (?:in |as |for |on )?(?:loan )?interest(?: (?:on|to|for) (?:the |my |our )?(?:loan(?: from| at| with)? )?${NAME})?$`, "i").exec(t)) || (m = new RegExp(`^(?:loan )?interest(?: payment)?(?: of| was| is)? (${AMT})(?: (?:to|on|for) (?:the |my |our )?${NAME})?$`, "i").exec(t))) {
    const token = asToken(m[1]); if (!token) return null;
    const unsure = await askIfUnsure(ctx, t, token, m[1]); if (unsure) return unsure;
    return recordInterest(ctx, { amount: token.amount, currency: token.currency, party: m[2] && validLender(m[2]) ? books.personName(cleanName(m[2])) : "", language: "en" });
  }
  if ((m = /^(?:nimelipa|nililipa|tumelipa)\s+riba(?:\s+ya mkopo)?\s+(.+)$/i.exec(t)) || (m = /^riba(?:\s+ya mkopo)?\s+(?:ni\s+)?(.+)$/i.exec(t))) {
    const said = parseMoneySw(m[1]); if (!said || !(said.amount > 0)) return null;
    if (said.ambiguous) { const doubt = await swahili.askAbout(ctx, t, { ambiguous: { kind: "money", values: said.ambiguous } }); if (doubt) return doubt; }
    return recordInterest(ctx, { amount: said.amount, currency: said.currency, party: "", language: "sw" });
  }
  // ---- borrowing ----
  let borrow = null;
  if ((m = new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:(?:just|also|now|then)\\s+)*(?:borrowed|took (?:out )?(?:a )?loan(?: out)?|taken (?:out )?(?:a )?loan|got (?:a )?loan|received (?:a )?loan|was lent|got lent|have a loan|have borrowed)\\b(.*)$`, "i").exec(t))) borrow = m[1];
  else if ((m = new RegExp(`^${NAME} (?:lent|loaned) (?:me|us)\\s+(?:a loan of\\s+)?(${AMT})(.*)$`, "i").exec(t)) && validLender(m[1])) borrow = ` ${m[2]} from ${m[1]}${m[3]}`;
  else if ((m = new RegExp(`^(?:a |my |our )?loan (?:of )?(${AMT}) (?:from|at|with) (?:the |my |our )?${NAME}(.*)$`, "i").exec(t))) borrow = ` ${m[1]} from ${m[2]}${m[3]}`;
  else if ((m = new RegExp(`^(?:a |my |our )?loan (?:from|at|with) (?:the |my |our )?${NAME_LAZY}(?: is| was| of)? (${AMT})(.*)$`, "i").exec(t))) borrow = ` ${m[2]} from ${m[1]}${m[3]}`;
  if (borrow !== null) {
    borrow = borrow.replace(new RegExp("\\s+(?:by|via|in|on|through|using|with)\\s+(?:" + amounts.PAYMENT_WORDS + ")\\b", "i"), " ").trimEnd();
    const amountMatch = new RegExp(`(?:^|\\s)(?:of\\s+)?(${AMT})(?![\\d,.]*\\d)`, "i").exec(borrow);
    if (!amountMatch) { const who = /\b(?:from|at|with)\s+(?:the |my |our )?([A-Za-z][A-Za-z'.-]*(?: [A-Za-z][A-Za-z'.-]*){0,2}?)(?=$|\s+(?:pay|to pay|and|for|monthly|at|,))/i.exec(borrow); return who && validLender(who[1]) ? askAmountOf(ctx, "shop_loan_amount", { party: books.personName(cleanName(who[1])), language: "en" }, "How much was the loan?", "") : null; }
    const token = asToken(amountMatch[1]); if (!token) return null;
    const unsure = await askIfUnsure(ctx, t, token, amountMatch[1]); if (unsure) return unsure;
    const who = new RegExp(`\\b(?:from|at|with|by)\\s+(?:the |my |our )?([A-Za-z][A-Za-z'.-]*(?: [A-Za-z][A-Za-z'.-]*){0,2}?)(?=$|\\s+(?:pay|to pay|and|for|monthly|at|,)|\\s+${AMT})`, "i").exec(borrow.replace(amountMatch[0], " "));
    const party = who && validLender(who[1]) ? books.personName(cleanName(who[1])) : "";
    const back = new RegExp(`(?:pay(?:ing)?|to pay|repay(?:ing)?)(?: it)? back (${AMT})\\s*(monthly|weekly|a month|every month|per month|each month|a week|every week|per week|each week)`, "i").exec(borrow);
    const backToken = back ? asToken(back[1]) : null;
    const installment = backToken && !backToken.unsure ? { amount: backToken.amount, currency: backToken.currency, every: /week/i.test(back[2]) ? "every week" : "every month" } : null;
    if (!party) return askLender(ctx, { amount: token.amount, currency: token.currency, installment, language: "en" });
    return recordLoan(ctx, { party, amount: token.amount, currency: token.currency, installment, language: "en" });
  }
  if ((m = /^(?:nimekopa|tumekopa|nilikopa|tulikopa|nimechukua mkopo(?: wa)?|nimepata mkopo(?: wa)?|tumepata mkopo(?: wa)?|nimekopeshwa|tumekopeshwa|nilikopeshwa)\s+(.+)$/i.exec(t))) return swahiliLoan(ctx, t, m[1]);
  if ((m = /^(?:nina mkopo|tuna mkopo)(?: wa| wa kiasi cha| wa shilingi)?\s+(.+)$/i.exec(t)) && !/\b(?:kiasi gani|ngapi|gani)\b/i.test(m[1])) return swahiliLoan(ctx, t, m[1]);
  if ((m = /^(.+?)\s+(?:amenikopesha|ametukopesha|alinikopesha|wamenikopesha)\s+(.+)$/i.exec(t))) { const named = swahili.readName(m[1]); if (named && !named.rest) return swahiliLoan(ctx, t, `${m[2]} kutoka kwa ${named.name}`); }
  // ---- paying a loan back, in Kiswahili: "nimelipa mkopo wa Mama Njeri elfu mbili", "nimerudisha elfu mbili kwa benki" (only when a loan from that person is recorded) ----
  if ((m = /^(?:nimelipa|nililipa|tumelipa|nimerudisha|nimerejesha|tumerudisha|tumerejesha|nimemaliza kulipa)\s+(?:deni la\s+|deni kwa\s+|mkopo wa\s+|mkopo kwa\s+|mkopo\s+|kiasi cha mkopo\s+)?(.+)$/i.exec(t))) {
    const rest = m[1]; let named = swahili.readName(rest); let said = named && named.rest ? parseMoneySw(named.rest) : null;
    if (!said) { const byKwa = /^(.+?)\s+(?:kwa|kwenda)\s+(?:benki ya\s+)?(.+)$/i.exec(rest); const other = byKwa ? swahili.readName(byKwa[2]) : null; if (other && !other.rest) { named = other; said = parseMoneySw(byKwa[1]); } }
    if (named && said && said.amount > 0) {
      const rows = (await listMoney(ctx)).filter(isLoan).filter(record => record.data.party && nameKey(record.data.party) === nameKey(named.name));
      if (rows.length) {
        if (said.ambiguous) { const doubt = await swahili.askAbout(ctx, t, { ambiguous: { kind: "money", values: said.ambiguous } }); if (doubt) return doubt; }
        return repayLoan(ctx, named.name, { amount: said.amount, currency: said.currency }, "sw");
      }
      if (/\bmkopo\b/i.test(t)) return `Sioni mkopo kutoka kwa ${named.name} kwenye rekodi zako, kwa hivyo sijabadilisha chochote. Kama ulikopa kwake, sema "nimekopa elfu tano kutoka kwa ${named.name}" kwanza.`;
    }
    if (named && !named.rest && /\bmkopo\b/i.test(t)) {
      const rows = (await listMoney(ctx)).filter(isLoan).filter(record => record.data.party && nameKey(record.data.party) === nameKey(named.name));
      if (rows.length) return askAmountOf(ctx, "shop_repay", { party: named.name, language: "sw" }, "", "Ulilipa kiasi gani?");
    }
  }
  // ---- paying a loan back ----
  const repay = [new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:(?:just|also|already)\\s+)*(?:repaid|paid back|paid off|returned|cleared|settled|paid)\\s+(${AMT})(?: of the loan| of my loan| on the loan)?\\s+(?:to|on|for)\\s+(?:the |my |our )?${NAME}(?: loan)?$`, "i"),
    new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:(?:just|also|already)\\s+)*(?:repaid|paid back|paid off|settled)\\s+(?:the |my |our )?${NAME}(?: back)?\\s+(${AMT})(?: of the loan)?$`, "i"),
    new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:(?:just|also|already)\\s+)*paid\\s+(?:the |my |our )?${NAME}\\s+(${AMT})\\s+(?:for|on|towards) (?:the |my |our )?loan$`, "i"),
    new RegExp(`^(?:loan )?repayment(?: of)? (${AMT}) (?:to|for|on) (?:the |my |our )?${NAME}$`, "i")];
  for (let k = 0; k < repay.length; k += 1) {
    if (!(m = repay[k].exec(t))) continue;
    const [rawAmount, rawNameFull] = k === 1 || k === 2 ? [m[2], m[1]] : [m[1], m[2]]; const rawName = rawNameFull.replace(/\s+loan$/i, "");
    if (!validParty(rawName)) continue;
    const token = asToken(rawAmount); if (!token) return null;
    const unsure = await askIfUnsure(ctx, t, token, rawAmount); if (unsure) return unsure;
    const done = await repayLoan(ctx, cleanName(rawName), token, "en");
    if (done) return done;
    // paid back someone it is not a loan from: left to the ordinary debts (books.js), unless the word loan or repaid was said and there is no debt at all
    if (/\b(?:loan|repaid|repayment)\b/i.test(t) && !(await books.partyRows(ctx, cleanName(rawName), books.owedByMeRows)).length) return `I have no loan from ${books.personName(cleanName(rawName))} recorded, so I have changed nothing. If you borrowed from them, say "I borrowed 20000 from ${books.personName(cleanName(rawName))}" first.`;
    return null;
  }
  if ((m = new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:(?:just|also|already)\\s+)*(?:repaid|paid back|paid off|cleared|settled)\\s+(?:the |my |our )?${NAME}(?:'s)?(?: loan)?(?: back)?$`, "i").exec(t)) && validParty(m[1])) {
    const who = cleanName(m[1]); const rows = (await listMoney(ctx)).filter(isLoan).filter(record => record.data.party && nameKey(record.data.party) === nameKey(who));
    if (!rows.length) return /\bloan\b/i.test(t) ? `I have no loan from ${books.personName(who)} recorded, so I have changed nothing.` : null;
    return askAmountOf(ctx, "shop_repay", { party: who, language: "en" }, "How much did you repay?", "");
  }
  return null;
}
templates.shop_loan_amount = { collection: "shop_loan_amount", questions: [{ key: "money", ask: "How much was the loan?", type: "money", parse: takeAmount('Say the amount, like "20000".') }],
  async finish(ctx, answers, extra) { return recordLoan(ctx, { party: extra.party, amount: answers.money.amount, currency: answers.money.currency, language: extra.language }); } };

// "nimekopa elfu tano kutoka kwa Mama Njeri", "nimechukua mkopo wa elfu ishirini benki", "nina mkopo wa elfu ishirini"
async function swahiliLoan(ctx, t, rest) {
  const named = /(?:kutoka kwa|kwa|na|benki ya|benki|kutoka)\s+(.+)$/i.exec(rest); let who = ""; let body = rest;
  if (named) { const read = swahili.readName(named[1].replace(/^(?:benki ya\s+)?/i, "")); if (read && !read.rest) { who = read.name; body = rest.slice(0, named.index); } else if (/^(?:benki|chama|sacco)$/i.test(clean(named[0].split(" ").pop()))) { who = books.personName(clean(named[0].split(" ").pop())); body = rest.slice(0, named.index); } }
  if (!who && /\b(?:benki|chama|sacco)\b/i.test(rest)) { who = books.personName(/\b(benki|chama|sacco)\b/i.exec(rest)[1]); body = rest.replace(/\b(?:benki|chama|sacco)\b/i, " "); }
  const said = parseMoneySw(body); if (!said || !(said.amount > 0)) return null;
  if (said.ambiguous) { const doubt = await swahili.askAbout(ctx, t, { ambiguous: { kind: "money", values: said.ambiguous } }); if (doubt) return doubt; }
  if (!who) return askLender(ctx, { amount: said.amount, currency: said.currency, installment: null, language: "sw" });
  return recordLoan(ctx, { party: who === "Benki" ? "Benki" : who, amount: said.amount, currency: said.currency, installment: null, language: "sw" });
}

// ---------------- chama ----------------
async function recordChama(ctx, { kind, amount, currency, group, language }) {
  const result = await money.recordMoney({ ...ctx, anyGoods: true }, { type: "saving", category: "chama", kind, amount, currency, group: group || "", item: kind === "payout" ? "chama payout" : "chama contribution", note: `${kind === "payout" ? "chama payout" : "chama contribution"}${group ? ` (${group})` : ""}` });
  if (result.refused) return result.refused;
  const mine = result.all.filter(isChama).filter(record => (record.data.group || "") === (group || ""));
  const put = sums(mine.filter(record => record.data.kind !== "payout"));
  const here = shown(amount, result.record.data.currency); const where = group ? ` ${group}` : "";
  if (language === "sw") return kind === "payout" ? `Nimeandika: umepokea ${moneyShown(amount, result.record.data.currency)} kutoka chama${where}. Si mapato: ni akiba yako ikirudi, kwa hivyo haiongezi faida yako.` : `Nimeandika: mchango wa chama${where} wa ${moneyShown(amount, result.record.data.currency)}. Ni akiba yako, si gharama, kwa hivyo haipunguzi faida yako. Umechangia jumla ${showTotals(put)}.`;
  return kind === "payout" ? `Recorded: you received ${here} from the chama${where}. It is your savings coming back, not income, so your profit does not change.` : `Recorded: chama${where} contribution of ${here}. It is savings, not a cost, so it does not lower your profit. You have put in ${showTotals(put)} so far.`;
}
function chamaBalance(rows, group, language) {
  const mine = rows.filter(isChama).filter(record => !group || nameKey(record.data.group || "") === nameKey(group));
  if (!mine.length) return language === "sw" ? "Sina michango ya chama kwenye rekodi zako. Sema, kwa mfano, \"nimechangia chama 500\"." : "I have no chama contributions recorded. Say, for example, \"chama contribution 500\".";
  const groups = [...new Set(mine.map(record => record.data.group || ""))];
  const line = list => { const put = sums(list.filter(record => record.data.kind !== "payout")); const got = sums(list.filter(record => record.data.kind === "payout")); const currencies = new Set([...Object.keys(put), ...Object.keys(got)]); const net = {}; for (const c of currencies) net[c] = round((put[c] || 0) - (got[c] || 0)); return { put, got, net }; };
  const describe = (name, list) => { const { put, got, net } = line(list); const hasGot = Object.keys(got).length; const negative = Object.values(net).some(v => v < 0);
    const netShown = showTotals(Object.fromEntries(Object.entries(net).map(([c, v]) => [c, Math.abs(v)])));
    if (language === "sw") return `${name ? `Chama ${name}: ` : "Chama: "}umechangia ${showTotals(put)}${hasGot ? `, umepokea ${showTotals(got)}; ${negative ? `umepokea zaidi ya ulichochangia kwa ${netShown}` : `kilichobaki kwenye chama ni ${netShown}`}` : ` (michango ${list.length})`}.`;
    return `${name ? `Chama ${name}: ` : "Chama: "}you have put in ${showTotals(put)}${hasGot ? ` and received ${showTotals(got)}; ${negative ? `you have received ${netShown} more than you put in` : `${netShown} is still in the chama`}` : ` (${plural(list.length, "payment")})`}.`; };
  return groups.length > 1 && !group ? groups.map(name => describe(name, mine.filter(record => (record.data.group || "") === name))).join(" ") : describe(groups[0], mine);
}
async function chama(ctx, t, lower) {
  let m; const groupOf = raw => (raw && validParty(raw) ? books.personName(cleanName(raw)) : "");
  // a standing amount ("chama contribution is 500 every month") is not a payment: nothing is recorded
  if (/\bchama\b/i.test(t) && /\b(?:every|each|per) (?:month|week)\b|\b(?:monthly|weekly)\b|\bkila (?:mwezi|wiki)\b/i.test(t) && /\d|\belfu\b|\bmia\b/i.test(t) && !/\b(?:paid|nimelipa|nimechangia|nimeweka|contributed)\b/i.test(t)) {
    return /\b(?:kila|mchango)\b/i.test(t) ? "Nimeelewa mchango wako wa chama. Sijaandika malipo yoyote. Ukilipa, sema \"nimelipa mchango wa chama 2000\" (au kiasi) nami nitaandika." : "I have noted how often you pay, but I have not recorded a payment. When you pay, say \"chama contribution 500\" (or the amount) and I will record it.";
  }
  // ---- how much is in the chama ----
  if (new RegExp(`^(?:what is |what's |show |tell me |check |give me |read )?(?:me )?(?:my |our |the )?(?:${NAME} )?chama (?:balance|savings|total|contributions|account)$`, "i").test(lower) && (m = new RegExp(`^(?:what is |what's |show |tell me |check |give me |read )?(?:me )?(?:my |our |the )?(?:${NAME} )?chama (?:balance|savings|total|contributions|account)$`, "i").exec(t))) return chamaBalance(await listMoney(ctx), groupOf(m[1] && !/^(?:my|our|the|me)$/i.test(m[1]) ? m[1] : ""), "en");
  if (/^how much (?:have|did) (?:i|we) (?:put|paid|pay|contributed|saved|put in|contribute) (?:in|into|to)(?: the| my| our)? chama(?: so far| in total| altogether)?$|^how much (?:is|do (?:i|we) have) (?:in|with)(?: the| my| our)? chama$|^how much is in my chama$/.test(lower)) return chamaBalance(await listMoney(ctx), "", "en");
  if (/^(?:salio la chama|salio la chama changu|salio la chama chetu|michango yangu ya chama|hesabu ya chama|chama changu|akiba yangu ya chama|nimechangia chama kiasi gani|nimeweka chama kiasi gani|nina kiasi gani (?:kwenye|katika) chama|nina akiba gani (?:kwenye|katika) chama)$/.test(lower)) return chamaBalance(await listMoney(ctx), "", "sw");
  // ---- a payout from the chama ----
  const payout = [new RegExp(`^(?:the |my |our )?chama (?:paid|gave) (?:me|us)\\s+(${AMT})$`, "i"), new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:received|got|took|collected) (?:the |my |our )?(?:${NAME} )?chama (?:payout|pay out|pot|money|share|round|payment|turn)(?: of)?\\s*(${AMT})$`, "i"), new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:received|got|took|collected) (${AMT}) (?:from|out of) (?:the |my |our )?(?:${NAME} )?chama$`, "i"), new RegExp(`^chama payout(?: of)? (${AMT})$`, "i")];
  for (let k = 0; k < payout.length; k += 1) {
    if (!(m = payout[k].exec(t))) continue;
    const rawAmount = k === 0 || k === 3 ? m[1] : k === 1 ? m[2] : m[1]; const rawGroup = k === 1 ? m[1] : k === 2 ? m[2] : "";
    const token = asToken(rawAmount); if (!token) return null;
    const unsure = await askIfUnsure(ctx, t, token, rawAmount); if (unsure) return unsure;
    return recordChama(ctx, { kind: "payout", amount: token.amount, currency: token.currency, group: groupOf(rawGroup), language: "en" });
  }
  if ((m = /^(?:nimepokea|nimepata|nimechukua|tumepokea|tumepata|nilipokea)\s+(?:pesa za chama|pesa ya chama|mchango wa chama|malipo ya chama|zamu ya chama|chama)\s+(.+)$/i.exec(t)) || (m = /^chama (?:kimenilipa|kimetulipa)\s+(.+)$/i.exec(t))) {
    const said = parseMoneySw(m[1]); if (!said || !(said.amount > 0)) return null;
    if (said.ambiguous) { const doubt = await swahili.askAbout(ctx, t, { ambiguous: { kind: "money", values: said.ambiguous } }); if (doubt) return doubt; }
    return recordChama(ctx, { kind: "payout", amount: said.amount, currency: said.currency, group: "", language: "sw" });
  }
  // ---- Kiswahili ----
  if ((m = /^(?:nimechangia|tumechangia|nilichangia|nimeweka|tumeweka|nimetoa|nimelipa|tumelipa|nimetuma|nililipa)\s+(?:kwenye |kwa |katika |ndani ya )?chama\s+(?:changu |chetu )?(.+)$/i.exec(t)) || (m = /^(?:nimelipa|tumelipa|nililipa|nimemaliza kulipa|nimetoa|nimechangia)\s+(?:mchango wa chama|mchango wa chama changu|michango ya chama|mchango wangu wa chama)\s+(?:wa\s+)?(.+)$/i.exec(t))
    || (m = /^(?:nimechangia|tumechangia|nilichangia|nimeweka|tumeweka|nimetoa|nimelipa|tumelipa)\s+(.+?)\s+(?:kwenye|kwa|katika|ndani ya|kwa ajili ya)\s+(?:chama|mchango wa chama)(?: changu| chetu)?$/i.exec(t)) || (m = /^mchango wa chama(?: changu| chetu)?\s+(?:ni\s+)?(?:nimelipa\s+)?(.+?)(?:\s+nimelipa)?$/i.exec(t))) {
    const said = parseMoneySw(m[1]); if (!said || !(said.amount > 0)) return null;
    if (said.ambiguous) { const doubt = await swahili.askAbout(ctx, t, { ambiguous: { kind: "money", values: said.ambiguous } }); if (doubt) return doubt; }
    return recordChama(ctx, { kind: "contribution", amount: said.amount, currency: said.currency, group: "", language: "sw" });
  }
  // ---- a contribution ----
  const verb = "(?:paid|put|contributed|gave|sent|deposited|saved|put in|added|pay|contribute)";
  const contribute = [new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:(?:just|also|already)\\s+)*${verb}\\s+(${AMT})\\s+(?:to|in|into|for|towards)\\s+(?:the |my |our )?(?:${NAME} )?chama(?: contribution)?(?: today| yesterday)?$`, "i"),
    new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:(?:just|also|already)\\s+)*${verb}\\s+(?:to|in|into)\\s+(?:the |my |our )?(?:${NAME} )?chama\\s+(${AMT})$`, "i"),
    new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:(?:just|also|already)\\s+)*(?:paid|made|gave|did)\\s+(?:my |our |the )?(?:${NAME} )?chama (?:contribution|savings|deposit|payment)(?: of)?\\s*(${AMT})(?: today| yesterday)?$`, "i"),
    new RegExp(`^(?:my |our |the )?(?:${NAME} )?chama (?:contribution|savings|deposit|payment)(?: of| was| is| for [a-z]+)?\\s*(${AMT})(?: paid| done| made)?$`, "i"),
    new RegExp(`^(?:${NAME} )?chama (${AMT})(?: paid| done| contribution)?$`, "i"), new RegExp(`^(?:paid|pay) chama (${AMT})$`, "i")];
  for (let k = 0; k < contribute.length; k += 1) {
    if (!(m = contribute[k].exec(t))) continue;
    // patterns with a group name capture it first and the amount second (k 0 captures amount first)
    const [rawAmount, rawGroup] = k === 0 ? [m[1], m[2]] : k === 5 ? [m[1], ""] : [m[2], m[1]];
    const token = asToken(rawAmount); if (!token) return null;
    const unsure = await askIfUnsure(ctx, t, token, rawAmount); if (unsure) return unsure;
    return recordChama(ctx, { kind: "contribution", amount: token.amount, currency: token.currency, group: groupOf(rawGroup && !/^(?:my|our|the|i|we)$/i.test(rawGroup) ? rawGroup : ""), language: "en" });
  }
  return null;
}

// ---------------- refunds ----------------
const salesFor = async (ctx, party) => (await listMoney(ctx)).filter(record => record.data.type === "income" && record.data.party && nameKey(record.data.party) === nameKey(party));
const refundsOf = async (ctx, saleId) => (await listMoney(ctx)).filter(record => record.data.category === "refund" && record.data.refundOf === saleId).reduce((total, record) => round(total + record.data.amount), 0);
const describeSale = (record, ctx, language) => `${shown(record.data.amount, record.data.currency)} ${record.data.qty ? `${record.data.qty} ${record.data.unit || ""} ${language === "sw" ? swahiliItem(record.data.item || "") : record.data.item || ""}`.replace(/\s+/g, " ").trim() : (language === "sw" ? swahiliItem(record.data.item || "") : record.data.item || "sale")} (${language === "sw" ? record.data.day : describeDay(record.data.day, ctx.today)})`;

// A sale reversed: the sale it belongs to is found, or Kyro asks. Only the record is kept; no money is sent.
async function refund(ctx, partyRaw, said, saleId, language, onSaleAmount) {
  const sw = language === "sw"; const party = books.personName(cleanName(partyRaw));
  const sales = await salesFor(ctx, party);
  if (!sales.length) return sw ? `Sioni mauzo yoyote kwa ${party} kwenye rekodi zako, kwa hivyo siwezi kuunganisha marejesho na mauzo na sijaandika chochote. Andika mauzo kwanza ("nimeuza mahindi kwa ${party} kwa 4500"), kisha marejesho.` : `I have no sale to ${party} recorded, so I cannot link a refund to one and I have recorded nothing. Record the sale first (for example "sold maize to ${party} for 4500"), then the refund.`;
  let pool = saleId ? sales.filter(record => record.memoryId === saleId) : sales;
  if (onSaleAmount) pool = pool.filter(record => record.data.amount === onSaleAmount);
  if (!pool.length) return sw ? `Sioni mauzo ya ${shown(onSaleAmount, "")} kwa ${party}. Mauzo niliyonayo ya ${party}: ${sales.slice(0, 4).map(record => describeSale(record, ctx, language)).join("; ")}.` : `I don't see a ${shown(onSaleAmount, "")} sale to ${party}. The sales I have for ${party}: ${sales.slice(0, 4).map(record => describeSale(record, ctx, language)).join("; ")}.`;
  const open = [];
  for (const record of pool) open.push({ record, left: round(record.data.amount - (record.data.unpaid ? record.data.amount : await refundsOf(ctx, record.memoryId))) });
  if (said) {
    const fits = open.filter(entry => !entry.record.data.unpaid && entry.left >= said.amount && sameCurrency(said.currency, entry.record.data.currency));
    const exact = fits.filter(entry => entry.record.data.amount === said.amount);
    const chosen = fits.length === 1 ? fits[0] : exact.length === 1 ? exact[0] : null;
    if (!chosen) {
      if (open.length && open.every(entry => entry.record.data.unpaid)) return sw ? `${party} hajalipa mauzo hayo bado (anadaiwa), kwa hivyo hakuna pesa ya kurejesha. Kama mauzo yalighairiwa, sema "futa mauzo ya ${open[0].record.data.amount}".` : `${party} has not paid for ${open.length > 1 ? "those sales" : "that sale"} yet (${party} owes you), so there is no money to refund. If the sale was cancelled, say "delete the ${open[0].record.data.amount} sale".`;
      if (!fits.length) return sw ? `Kiasi cha ${shown(said.amount, said.currency)} ni kikubwa kuliko mauzo yoyote ya ${party} yaliyobaki (${open.map(entry => describeSale(entry.record, ctx, language)).join("; ")}), kwa hivyo sijaandika chochote.` : `${shown(said.amount, said.currency)} is more than any ${party} sale that can still be refunded (${open.map(entry => `${describeSale(entry.record, ctx, language)}, ${shown(entry.left, entry.record.data.currency)} refundable`).join("; ")}), so I have recorded nothing.`;
      return sw ? `${party} ana mauzo kadhaa yanayoweza kurejeshewa: ${fits.slice(0, 4).map(entry => describeSale(entry.record, ctx, language)).join("; ")}. Yapi? Sema, kwa mfano, "nimemrudishia ${party} ${said.amount} kwa mauzo ya ${fits[0].record.data.amount}".` : `${party} has more than one sale this could be for: ${fits.slice(0, 4).map(entry => describeSale(entry.record, ctx, language)).join("; ")}. Which one? Say, for example, "refund ${party} ${said.amount} from the ${fits[0].record.data.amount} sale".`;
    }
    const sale = chosen.record;
    const result = await money.recordMoney({ ...ctx, anyGoods: true }, { type: "expense", category: "refund", amount: said.amount, currency: sale.data.currency || said.currency, party: sale.data.party, item: `refund: ${sale.data.item || "sale"}`, note: `refund to ${sale.data.party}`, refundOf: sale.memoryId, soldDay: sale.data.day });
    if (result.refused) return result.refused;
    const inCurrency = result.record.data.currency; const rest = round(chosen.left - said.amount);
    return sw ? `Nimeandika: marejesho ya ${moneyShown(said.amount, inCurrency)} kwa ${sale.data.party} (kwa mauzo ya ${describeSale(sale, ctx, language)}). Ninaandika tu: sijatuma pesa yoyote. Marejesho yanapunguza faida yako.${rest > 0 ? ` Bado unaweza kurejesha hadi ${moneyShown(rest, inCurrency)} kwa mauzo hayo.` : ""}` : `Recorded: refund of ${shown(said.amount, inCurrency)} to ${sale.data.party} (for the ${describeSale(sale, ctx, language)} sale). I only keep the record: I have not sent any money. Refunds are taken off your profit.${rest > 0 ? ` You can still refund up to ${shown(rest, inCurrency)} on that sale.` : ""} Stock is not changed.`;
  }
  // no amount said
  const paid = open.filter(entry => !entry.record.data.unpaid && entry.left > 0);
  if (paid.length === 1) return askAmountOf(ctx, "shop_refund_amount", { party, saleId: paid[0].record.memoryId, language }, `How much did you refund ${party}? The sale was ${describeSale(paid[0].record, ctx, language)}.`, `Ulimrudishia ${party} kiasi gani? Mauzo yalikuwa ${describeSale(paid[0].record, ctx, language)}.`);
  if (!paid.length) return sw ? `${party} hajalipa mauzo yake bado (anadaiwa), au tayari yamerejeshwa kikamilifu, kwa hivyo sijaandika chochote.` : `${party}'s sales are either unpaid (${party} owes you) or already fully refunded, so I have recorded nothing.`;
  return sw ? `${party} ana mauzo kadhaa: ${paid.slice(0, 4).map(entry => describeSale(entry.record, ctx, language)).join("; ")}. Sema kiasi na mauzo, kwa mfano "nimemrudishia ${party} 300 kwa mauzo ya ${paid[0].record.data.amount}".` : `${party} has more than one sale: ${paid.slice(0, 4).map(entry => describeSale(entry.record, ctx, language)).join("; ")}. Tell me the amount and which sale, for example "refund ${party} 300 from the ${paid[0].record.data.amount} sale".`;
}

async function refunds(ctx, t) {
  let m;
  const onSale = `(?:\\s+(?:for|on|from) (?:the |that |his |her |their )?(${AMT}) (?:sale|purchase|order))?`;
  const patterns = [new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:(?:just|also)\\s+)*(?:refunded|refund)\\s+${NAME}\\s+(${AMT})${onSale}$`, "i"),
    new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:(?:just|also)\\s+)*(?:refunded|refund)\\s+(${AMT})\\s+to\\s+${NAME}${onSale}$`, "i"),
    new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:(?:just|also)\\s+)*(?:gave|paid|returned)\\s+${NAME}\\s+(?:a refund of|a refund|his money back|her money back|their money back|money back)(?:\\s+(?:of\\s+)?(${AMT}))?${onSale}$`, "i"),
    new RegExp(`^(?:(?:i|we)(?:'ve| have)?\\s+)?(?:(?:just|also)\\s+)*(?:refunded|refund)\\s+${NAME}$`, "i")];
  for (let k = 0; k < patterns.length; k += 1) {
    if (!(m = patterns[k].exec(t))) continue;
    const rawName = k === 1 ? m[2] : m[1]; const rawAmount = k === 0 ? m[2] : k === 1 ? m[1] : k === 2 ? m[2] : ""; const rawOn = k === 0 ? m[3] : k === 1 ? m[3] : k === 2 ? m[3] : "";
    if (!validParty(rawName)) continue;
    let said = null;
    if (rawAmount) { const token = asToken(rawAmount); if (!token) return null; const unsure = await askIfUnsure(ctx, t, token, rawAmount); if (unsure) return unsure; said = { amount: token.amount, currency: token.currency }; }
    const on = rawOn ? asToken(rawOn) : null;
    return refund(ctx, rawName, said, "", "en", on && !on.unsure ? on.amount : 0);
  }
  if ((m = /^(?:nimemrudishia|nimemrejeshea|nilimrudishia|nilimrejeshea|tumemrudishia|tumemrejeshea|nimerudisha pesa ya|nimerejesha pesa ya|nimerudisha pesa za|nimerejesha pesa za)\s+(.+)$/i.exec(t))) {
    const named = swahili.readName(m[1]); if (!named) return null;
    // "nimemrudishia Mama Njeri 2000" is paying a LENDER back when she has lent and bought nothing, a refund when she bought and lent nothing; with both it is asked, never guessed
    const lent = (await listMoney(ctx)).filter(isLoan).filter(record => record.data.party && nameKey(record.data.party) === nameKey(named.name)).length;
    const bought = (await salesFor(ctx, named.name)).length;
    if (lent && bought) return `${named.name} amekukopesha na pia amenunua kwako, kwa hivyo sijui hii ni nini. Kwa mkopo sema "nimelipa mkopo ${named.name} 2000"; kwa marejesho ya mauzo sema "nimemrudishia ${named.name} 300 kwa mauzo ya 4500".`;
    if (lent && !bought) {
      const body = named.rest.replace(/^(?:pesa\s+)?(?:yake\s+)?/i, ""); const said = body ? parseMoneySw(body) : null;
      if (said && said.amount > 0) { if (said.ambiguous) { const doubt = await swahili.askAbout(ctx, t, { ambiguous: { kind: "money", values: said.ambiguous } }); if (doubt) return doubt; } return repayLoan(ctx, named.name, { amount: said.amount, currency: said.currency }, "sw"); }
    }
    const rest = named.rest.replace(/^(?:pesa\s+)?(?:yake\s+)?/i, "");
    const onSale = /\s+(?:kwa|kutokana na)\s+mauzo\s+ya\s+(.+)$/i.exec(rest); const body = onSale ? rest.slice(0, onSale.index) : rest;
    const said = body ? parseMoneySw(body) : null;
    if (said && said.ambiguous) { const doubt = await swahili.askAbout(ctx, t, { ambiguous: { kind: "money", values: said.ambiguous } }); if (doubt) return doubt; }
    const on = onSale ? parseMoneySw(onSale[1]) : null;
    return refund(ctx, named.name, said && said.amount > 0 ? { amount: said.amount, currency: said.currency } : null, "", "sw", on ? on.amount : 0);
  }
  return null;
}

// ---------------- receipts ----------------
const stampOf = (record, ctx, language) => (language === "sw" ? record.data.day : describeDay(record.data.day, ctx.today));
async function receiptText(ctx, sale, language) {
  const sw = language === "sw"; const d = sale.data; const owner = (ctx.nameOf ? await ctx.nameOf({ tenantId: ctx.tenantId, userId: ctx.userId }).catch(() => "") : "") || "";
  const itemName = sw ? swahiliItem(d.item || "") : d.item || "item"; const what = d.qty ? `${d.qty}${d.unit ? ` ${d.unit}` : ""} ${sw ? "za" : "of"} ${itemName}`.replace(/\s+/g, " ") : itemName;
  const refunded = await refundsOf(ctx, sale.memoryId); const lines = sw
    ? [`STAKABADHI`, owner || "Biashara", `Tarehe ya mauzo: ${d.day}`, d.party ? `Imepokelewa kutoka kwa: ${d.party}` : "", `${what}: ${moneyShown(d.amount, d.currency)}`, `JUMLA: ${moneyShown(d.amount, d.currency)}`, d.payment ? `Imelipwa kwa: ${d.payment}` : "", refunded ? `Imerejeshwa: ${moneyShown(refunded, d.currency)}` : "", "Asante.", "Imesomwa kutoka kwenye mauzo uliyorekodi."]
    : [`RECEIPT`, owner || "Shop", `Date of sale: ${d.day}`, d.party ? `Received from: ${d.party}` : "", `${what}: ${shown(d.amount, d.currency)}`, `TOTAL: ${shown(d.amount, d.currency)}`, d.payment ? `Paid by: ${d.payment}` : "", refunded ? `Refunded: ${shown(refunded, d.currency)}` : "", "Thank you.", "Read back from the sale you recorded."];
  return lines.filter(Boolean).join("\n");
}
async function receipts(ctx, t) {
  let m; let language = "en"; let party = ""; let rawAmount = ""; let last = false;
  const ask = "(?:(?:please )?(?:give me|make|print|create|prepare|show me|get me|i need|i want|can i (?:get|have)|write)(?: me)?(?: a| an| the| my)?(?: printable)? |(?:a |the |my )?)receipt";
  if ((m = new RegExp(`^${ask} (?:for|to|from) (?:the )?${NAME}(?:'s)? (${AMT})(?: sale| purchase| order)?$`, "i").exec(t)) && validParty(m[1])) { party = m[1]; rawAmount = m[2]; }
  else if ((m = new RegExp(`^${ask} (?:for|of) (?:the |my |that |this )?(?:${AMT} )?(?:sale|purchase) (?:of |for )?(${AMT}) (?:to|for) ${NAME}$`, "i").exec(t)) && validParty(m[2])) { party = m[2]; rawAmount = m[1]; }
  else if (new RegExp(`^${ask} (?:for|of) (?:the |my |that |this )?(?:last|latest|previous|most recent)(?: one| sale| entry)?$|^${ask} (?:for|of) (?:that|this) (?:sale|one)$`, "i").test(t) || /^(?:receipt|a receipt) for (?:the |my )?(?:last|latest) sale$/i.test(t)) last = true;
  else if ((m = /^(?:nipe|nitengenezee|tengeneza|andaa|nitolee|toa)\s+(?:stakabadhi|risiti)\s+(?:ya|kwa)\s+(?:mauzo ya\s+)?(?:mwisho|ya mwisho)$/i.exec(t))) { last = true; language = "sw"; }
  else if ((m = /^(?:nipe|nitengenezee|tengeneza|andaa|nitolee|toa)\s+(?:stakabadhi|risiti)\s+(?:ya|kwa)\s+(.+)$/i.exec(t))) {
    const named = swahili.readName(m[1]); const said = named && named.rest ? parseMoneySw(named.rest) : null;
    if (!named || !said || !(said.amount > 0)) return null;
    if (said.ambiguous) { const doubt = await swahili.askAbout(ctx, t, { ambiguous: { kind: "money", values: said.ambiguous } }); if (doubt) return doubt; }
    party = named.name; rawAmount = String(said.amount); language = "sw";
  } else return null;
  const sw = language === "sw";
  const incomes = (await listMoney(ctx)).filter(record => record.data.type === "income" && !String(record.data.note || "").startsWith("order "));
  let sale;
  if (last) {
    sale = incomes.find(record => !record.data.soldOn && !/^part payment/i.test(record.data.note || "")) || incomes[0];
    if (!sale) return sw ? "Sina mauzo yoyote yaliyorekodiwa, kwa hivyo siwezi kutengeneza stakabadhi." : "I have no sales recorded, so I cannot make a receipt.";
  } else {
    const token = asToken(rawAmount); if (!token) return null;
    const unsure = await askIfUnsure(ctx, t, token, rawAmount); if (unsure) return unsure;
    const mine = incomes.filter(record => record.data.party && nameKey(record.data.party) === nameKey(cleanName(party)));
    const hits = mine.filter(record => record.data.amount === token.amount && sameCurrency(token.currency, record.data.currency));
    if (!hits.length) return sw ? `Sioni mauzo ya ${shown(token.amount, token.currency)} kwa ${books.personName(cleanName(party))} kwenye rekodi zako, kwa hivyo sijatengeneza stakabadhi.${mine.length ? ` Mauzo niliyonayo ya ${books.personName(cleanName(party))}: ${mine.slice(0, 4).map(record => describeSale(record, ctx, language)).join("; ")}.` : ""}` : `I don't see a ${shown(token.amount, token.currency)} sale to ${books.personName(cleanName(party))} in your records, so I have not made a receipt.${mine.length ? ` The sales I have for ${books.personName(cleanName(party))}: ${mine.slice(0, 4).map(record => describeSale(record, ctx, language)).join("; ")}.` : ""}`;
    sale = hits[0];
  }
  if (sale.data.unpaid) return sw ? `${sale.data.party || "Mnunuzi"} bado hajalipa mauzo hayo (anadaiwa ${moneyShown(sale.data.amount, sale.data.currency)}), kwa hivyo stakabadhi ingekuwa si sahihi. Akilipa, sema "${sale.data.party || "Jina"} amelipa".` : `${sale.data.party || "The buyer"} has not paid for that sale yet (still owes ${shown(sale.data.amount, sale.data.currency)}), so a receipt would not be right. When they pay, say "${sale.data.party || "Name"} paid".`;
  return `${await receiptText(ctx, sale, language)}`;
}

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!]+$/g, "").replace(/\?+$/g, ""); const lower = t.toLowerCase();
  if (!t || t.length > 240) return null;
  if (!/\b(?:loan|loans|borrow|borrowed|lent|loaned|repaid|repay|repayment|paid back|paid off|interest|chama|refund|refunded|receipt|money back|mkopo|mikopo|nimekopa|tumekopa|nilikopa|nimekopeshwa|amenikopesha|riba|marejesho|nimemrudishia|nimemrejeshea|nilimrudishia|nimerudisha|nimerejesha|stakabadhi|risiti|kopo|nimechangia|mchango|salio)\b/i.test(lower)) return null;
  for (const read of [loans, chama, refunds, receipts]) { const answer = await read(ctx, t, lower); if (answer) return answer; }
  return null;
}

const confirms = {};
module.exports = Object.freeze({ handle, templates, confirms, repayLoan, recordLoan, recordChama, refund, isLoan, isChama, YES_SW, numbers });
