"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { person, run, runTable } = require("./bookkeeping-round-two-helper.js");

// Refunds (a sale reversed: they must point at an earlier sale or ask), receipts (read back from the stored sale, never invented) and the monthly summary for people who are not farmers.
const refund = (amount, party, extra = {}) => ({ type: "expense", category: "refund", amount, party, ...extra });
const SALE = "sold maize to John for 4500";

test("English: a refund is linked to an earlier sale, or Kyro asks; it only keeps the record", async () => {
  const failures = await runTable([
    [[SALE, "refund John 300"], { money: [{ type: "income", amount: 4500 }, refund(300, "John", { item: "refund: maize" })], reply: /^Recorded: refund of 300 to John \(for the 4,500 maize.*I only keep the record: I have not sent any money\. Refunds are taken off your profit\. You can still refund up to 4,200/ }],
    [[SALE, "refunded John 300"], { money: [{ type: "income", amount: 4500 }, refund(300, "John")] }], [[SALE, "I refunded John 300"], { money: [{ type: "income", amount: 4500 }, refund(300, "John")] }],
    [[SALE, "refund 300 to John"], { money: [{ type: "income", amount: 4500 }, refund(300, "John")] }], [[SALE, "gave John a refund of 300"], { money: [{ type: "income", amount: 4500 }, refund(300, "John")] }],
    [[SALE, "refund John 300 from the 4500 sale"], { money: [{ type: "income", amount: 4500 }, refund(300, "John")] }], [[SALE, "refund John 4500"], { money: [{ type: "income", amount: 4500 }, refund(4500, "John")], reply: /^Recorded: refund of 4,500 to John/ }],
    [[SALE, "refund john 300"], { money: [{ type: "income", amount: 4500 }, refund(300, "John")] }], [[SALE, "refund John 2k"], { money: [{ type: "income", amount: 4500 }, refund(2000, "John")] }],
    [[SALE, "refund John 300", "refund John 200"], { money: [{ type: "income", amount: 4500 }, refund(300, "John"), refund(200, "John")], more: true, reply: /You can still refund up to 4,000 on that sale/ }],
    [["refund John 300"], { money: [], reply: /^I have no sale to John recorded, so I cannot link a refund to one and I have recorded nothing/ }], [[SALE, "refund Peter 300"], { money: [{ type: "income", amount: 4500 }], reply: /I have no sale to Peter recorded/ }],
    [[SALE, "refund John 9000"], { money: [{ type: "income", amount: 4500 }], reply: /is more than any John sale that can still be refunded/ }], [[SALE, "refund John 4000", "refund John 1000"], { money: [{ type: "income", amount: 4500 }, refund(4000, "John")], reply: /more than any John sale that can still be refunded \(4,500 maize.*500 refundable\)/ }],
    [["sold maize to John for 4500 on credit", "refund John 300"], { money: [{ type: "income", amount: 4500, unpaid: true }], reply: /John has not paid for that sale yet.*no money to refund/ }],
    [[SALE, "sold beans to John for 1200", "refund John 300"], { reply: /John has more than one sale this could be for: 1,200 beans.*4,500 maize/, money: [{ type: "income", amount: 4500 }, { type: "income", amount: 1200 }] }],
    [[SALE, "sold beans to John for 1200", "refund John 1200"], { money: [{ type: "income", amount: 4500 }, { type: "income", amount: 1200 }, refund(1200, "John", { item: "refund: beans" })] }],
    [[SALE, "sold beans to John for 1200", "refund John 300 from the 4500 sale"], { money: [{ type: "income", amount: 4500 }, { type: "income", amount: 1200 }, refund(300, "John", { item: "refund: maize" })] }],
    [[SALE, "sold beans to John for 1200", "refund John 300 from the 777 sale"], { reply: /I don't see a 777 sale to John/, more: true }],
    [[SALE, "refund John", "300"], { money: [{ type: "income", amount: 4500 }, refund(300, "John")], replies: [/^Recorded/, /^How much did you refund John\? The sale was 4,500 maize/] }],
    [[SALE, "refund John", "cancel"], { money: [{ type: "income", amount: 4500 }], reply: /Nothing was saved/ }],
    [[SALE, "refund John 4.500"], { reply: /^Did you mean 4,500/, money: [{ type: "income", amount: 4500 }] }], [[SALE, "refund John 4.500", "yes"], { money: [{ type: "income", amount: 4500 }, refund(4500, "John")] }],
    [[SALE, "refund John 4.500", "300"], { money: [{ type: "income", amount: 4500 }, refund(300, "John")] }],
    [[SALE, "refund John 300", "what is my profit this month"], { reply: /income 4,500, spending 300, so a profit of 4,200\./ }],
    [[SALE, "refund John 300", "undo"], { money: [{ type: "income", amount: 4500 }], reply: /^Removed: spending of 300/ }],
    [["sold maize to John for $30", "refund John $10"], { money: [{ type: "income", amount: 30, currency: "$" }, refund(10, "John", { currency: "$" })] }],
    [["refund policy"], { replies: [null] }], [["I want to refund John"], { replies: [null] }], [["can John get a refund"], { replies: [null] }]
  ]);
  assert.deepEqual(failures, []);
  const who = person();
  await run(who, [SALE, "refund John 300"]);
  const [, sale, back] = [null, ...who.store.rows.filter(row => row.collection === "money").reverse()];
  assert.equal(back.data.refundOf, sale.memoryId, "the refund points at the sale it reverses");
});

test("English: receipts are read back from the stored sale", async () => {
  const failures = await runTable([
    [[SALE, "give me a receipt for John 4500"], { reply: /^RECEIPT\nA trader\nDate of sale: 2026-10-05\nReceived from: John\nmaize: 4,500\nTOTAL: 4,500\nThank you\./ }],
    [[SALE, "make a receipt for John 4500"], { reply: /Received from: John\nmaize: 4,500/ }], [[SALE, "receipt for John 4500"], { reply: /TOTAL: 4,500/ }], [[SALE, "print a receipt for John 4500 sale"], { reply: /TOTAL: 4,500/ }],
    [[SALE, "receipt for the last sale"], { reply: /Received from: John\nmaize: 4,500/ }], [[SALE, "give me a receipt for the last sale"], { reply: /TOTAL: 4,500/ }], [[SALE, "can I get a receipt for that sale"], { reply: /TOTAL: 4,500/ }],
    [["sold 3 sacks of maize to Mary for 9000 cash", "give me a receipt for Mary 9000"], { reply: /3 sack of maize: 9,000\nTOTAL: 9,000\nPaid by: cash/ }],
    [["sold 3 sacks of maize to Mary for 9000 by mpesa", "receipt for Mary 9000"], { reply: /Paid by: mpesa/ }],
    [[SALE, "refund John 300", "receipt for John 4500"], { reply: /TOTAL: 4,500\nRefunded: 300/ }],
    [[SALE, "give me a receipt for John 999"], { reply: /^I don't see a 999 sale to John in your records, so I have not made a receipt\. The sales I have for John: 4,500 maize/ }],
    [[SALE, "give me a receipt for Peter 4500"], { reply: /^I don't see a 4,500 sale to Peter in your records, so I have not made a receipt\.$/ }],
    ["give me a receipt for the last sale", { reply: /^I have no sales recorded, so I cannot make a receipt\.$/ }], ["receipt for John 4500", { reply: /I don't see a 4,500 sale to John/ }],
    [["sold maize to Mary for 3000 on credit", "receipt for Mary 3000"], { reply: /Mary has not paid for that sale yet \(still owes 3,000\), so a receipt would not be right/ }],
    [["sold maize to Mary for 3000 on credit", "Mary paid", "receipt for Mary 3000"], { reply: /Received from: Mary\nmaize: 3,000/ }],
    [["sold maize to John for 4.500", "no", "give me a receipt for John 4500"], { reply: /I don't see a 4,500 sale to John/ }],
    [["give me a receipt for John 4.500"], { reply: /^Did you mean 4,500/ }]
  ]);
  assert.deepEqual(failures, []);
});

test("English: the monthly summary has income, costs, profit, who owes you and what you owe, per currency, and loans and chama stay out of the profit", async () => {
  const day = ["sold maize to John for 4500", "sold milk 20 dollars", "bought seed 1200", "Mary owes me 800", "bought sugar 2000 from Mama Fatuma on credit", "I borrowed 5000 from Mama Njeri", "chama contribution 500", "refund John 300"];
  for (const phrase of ["my summary for this month", "give me my monthly summary", "monthly summary", "summary", "summary for this month", "show me my summary", "what is my summary for this month", "how did I do this month", "business summary", "shop summary this month", "give me a summary of my business"]) {
    const who = person(); await run(who, day);
    const reply = await who.say(phrase);
    assert.match(reply, /^Summary for this month: Income \$20 and 4,500 \(2 entries\)\. Costs 3,500 \(3 entries\)\. Profit \$20 and 1,000\. Owed to you: Mary 800\. You owe: Mama Fatuma 2,000\. Loans you owe: 5,000\. Chama: you have put in 500\./, `${phrase} -> ${reply}`);
  }
  const who = person(); await run(who, day);
  assert.doesNotMatch(await who.say("my summary for this month"), /7,000|5,500|6,000/, "no loan is in the income and no chama in the costs");
  // another period, nothing in it, and a person with no records at all
  assert.match(await who.say("my summary for last month"), /^Summary for last month: I have no income or costs recorded for last month\. Owed to you: Mary 800\./);
  assert.match(await who.say("weekly summary"), /^Summary for this week:/);
  assert.equal(await person().say("my summary for this month"), null, "an empty account's question is left to the rest of Kyro");
  const kes = person({ country: "Kenya" }); await run(kes, ["sold maize 4000", "bought seed 1000", "sold rice $5"]);
  assert.match(await kes.say("my summary for this month"), /Income \$5 and KSh 4,000 \(2 entries\)\. Costs KSh 1,000 \(1 entry\)\. Profit \$5 and KSh 3,000\./);
  const loss = person(); await run(loss, ["sold maize 1000", "bought seed 3000"]);
  assert.match(await loss.say("my summary for this month"), /Loss 2,000\./);
  for (const text of ["summary of the article", "my summary is that I am tired", "summary judgment"]) assert.equal(await person().say(text), null, text);
});

test("Kiswahili: marejesho, stakabadhi na muhtasari wa mwezi", async () => {
  const sale = "nimemuuzia Juma mahindi elfu nne mia tano";
  const failures = await runTable([
    [[sale, "nimemrudishia Juma 300"], { money: [{ type: "income", amount: 4500 }, refund(300, "Juma")], reply: /^Nimeandika: marejesho ya 300 kwa Juma.*Ninaandika tu: sijatuma pesa yoyote\. Marejesho yanapunguza faida yako\. Bado unaweza kurejesha hadi 4,200/ }],
    [[sale, "nimemrudishia Juma elfu moja"], { money: [{ type: "income", amount: 4500 }, refund(1000, "Juma")] }], [[sale, "nimemrejeshea Juma 300"], { money: [{ type: "income", amount: 4500 }, refund(300, "Juma")] }],
    [[sale, "nimerudisha pesa ya Juma 300"], { money: [{ type: "income", amount: 4500 }, refund(300, "Juma")] }], [[sale, "nimemrudishia Juma pesa 300 kwa mauzo ya 4500"], { money: [{ type: "income", amount: 4500 }, refund(300, "Juma")] }],
    [[sale, "nimemrudishia Juma 9000"], { money: [{ type: "income", amount: 4500 }], reply: /ni kikubwa kuliko mauzo yoyote ya Juma/ }], ["nimemrudishia Juma 300", { money: [], reply: /Sioni mauzo yoyote kwa Juma kwenye rekodi zako/ }],
    [["nimeuza mahindi kwa Juma kwa mkopo 3000", "nimemrudishia Juma 300"], { reply: /Juma hajalipa mauzo hayo bado/ }],
    [[sale, "nimemrudishia Juma"], { reply: /^Ulimrudishia Juma kiasi gani\? Mauzo yalikuwa 4,500/ }], [[sale, "nimemrudishia Juma", "elfu moja"], { money: [{ type: "income", amount: 4500 }, refund(1000, "Juma")] }],
    [[sale, "nipe stakabadhi ya Juma 4500"], { reply: /^STAKABADHI\nA trader\nTarehe ya mauzo: 2026-10-05\nImepokelewa kutoka kwa: Juma\nmahindi: 4,500\nJUMLA: 4,500\nAsante\./ }],
    [[sale, "nipe stakabadhi ya mauzo ya mwisho"], { reply: /Imepokelewa kutoka kwa: Juma/ }], [[sale, "nipe risiti ya Juma elfu nne mia tano"], { reply: /JUMLA: 4,500/ }],
    [[sale, "nipe stakabadhi ya Juma 999"], { reply: /Sioni mauzo ya 999 kwa Juma kwenye rekodi zako, kwa hivyo sijatengeneza stakabadhi/ }], ["nipe stakabadhi ya mauzo ya mwisho", { reply: /Sina mauzo yoyote yaliyorekodiwa/ }],
    [[sale, "nimeuza nyanya elfu mbili", "nimekopa elfu tano kutoka kwa Mama Njeri", "nimechangia chama 500", "muhtasari wa mwezi"], { reply: /^Mwezi huu: mapato 6,500, matumizi 0, kwa hivyo faida ya 6,500\. .*Mikopo unayodaiwa: 5,000\. Chama: umechangia 500\./ }],
    [[sale, "nipe muhtasari wa mwezi huu"], { reply: /^Mwezi huu: mapato 4,500/ }], [[sale, "muhtasari wa mwezi"], { reply: /Hakuna anayekudai ninayemjua\. Huna deni kwa wasambazaji ninalolijua\./ }],
    [["nimeuza mahindi kwa Amina kwa 3000 kwa mkopo", "muhtasari wa mwezi"], { reply: /Wanaokudai: Amina 3,000/ }], [[sale, "muhtasari wa wiki"], { reply: /^Wiki hii: mapato 4,500/ }],
    [[sale, "muhtasari wa mwezi uliopita"], { reply: /^Sina mapato wala matumizi yaliyorekodiwa mwezi uliopita\. Hakuna anayekudai/ }], ["muhtasari wa mwezi", { reply: /^Sina pesa yoyote iliyorekodiwa mwezi huu/ }]
  ]);
  assert.deepEqual(failures, []);
});
