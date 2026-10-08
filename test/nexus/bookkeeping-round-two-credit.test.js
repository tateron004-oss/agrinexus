"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { person, run, runTable } = require("./bookkeeping-round-two-helper.js");

// Loans and a chama, in English and Kiswahili. A loan is money you OWE (never income); paying it back is never a cost (the interest, said on its own, is). A chama contribution is SAVINGS (never a cost) and a
// payout is your savings coming back (never income). So none of them ever moves the profit.
const loan = (party, amount, owing, extra = {}) => ({ type: "expense", category: "loan", loan: true, debt: true, unpaid: owing > 0, party, amount, owing, ...extra });
const saving = (kind, amount, extra = {}) => ({ type: "saving", category: "chama", kind, amount, ...extra });

test("English: borrowing is recorded as money owed, never as income", async () => {
  const failures = await runTable([
    ["I borrowed 5000 from Mama Njeri", { money: [loan("Mama Njeri", 5000, 5000)], reply: /^Recorded: you borrowed 5,000 from Mama Njeri\. It is not income/ }], ["borrowed 5000 from the bank", { money: [loan("Bank", 5000, 5000)] }],
    ["I took a loan of 20000 from the bank", { money: [loan("Bank", 20000, 20000)] }], ["I took out a loan of 20000 from KCB", { money: [loan("Kcb", 20000, 20000)] }], ["we got a loan of 15000 from the sacco", { money: [loan("Sacco", 15000, 15000)] }],
    ["Mama Njeri lent me 3000", { money: [loan("Mama Njeri", 3000, 3000)] }], ["John loaned us 2500", { money: [loan("John", 2500, 2500)] }], ["loan of 15000 from the sacco", { money: [loan("Sacco", 15000, 15000)] }],
    ["loan from the bank is 8000", { money: [loan("Bank", 8000, 8000)] }], ["I borrowed KSh 5,000 from Mama Njeri", { money: [loan("Mama Njeri", 5000, 5000, { currency: "KSh" })] }],
    ["I borrowed 5k from the chama", { money: [loan("Chama", 5000, 5000)] }], ["I borrowed 2000 from Otieno on mpesa", { money: [loan("Otieno", 2000, 2000)] }],
    ["I got a loan of 20000 from the chama pay back 2000 monthly", { money: [loan("Chama", 20000, 20000)], reply: /plan to pay back 2,000 every month/, check: async who => assert.deepEqual(who.money()[0].installment, { amount: 2000, currency: "", every: "every month" }) }],
    ["I borrowed 2 grand from Wanjiru", { money: [loan("Wanjiru", 2000, 2000)] }],
    ["I borrowed 5000 from Mama Njeri", { money: [loan("Mama Njeri", 5000, 5000)], check: async who => { assert.equal((await who.say("what is my profit this month")).includes("5,000"), false, "a loan is not income"); } }]
  ]);
  assert.deepEqual(failures, []);
});

test("English: a loan with no lender or no amount is asked about, and a request is not a record", async () => {
  const failures = await runTable([
    [["I borrowed 5000", "Mama Njeri"], { money: [loan("Mama Njeri", 5000, 5000)] }], [["I borrowed 5000", "skip"], { money: [loan("", 5000, 5000)] }], [["I borrowed 5000", "the bank"], { money: [loan("Bank", 5000, 5000)] }],
    [["I borrowed money from Juma", "3000"], { money: [loan("Juma", 3000, 3000)] }], [["I borrowed money from Juma", "KSh 3,000"], { money: [loan("Juma", 3000, 3000, { currency: "KSh" })] }],
    [["I borrowed 4.500 from John", "yes"], { money: [loan("John", 4500, 4500)] }], [["I borrowed 4.500 from John", "4500"], { money: [loan("John", 4500, 4500)] }], [["I borrowed 4.500 from John", "no"], { money: [] }],
    ["borrow 5000 from the bank", { replies: [null], money: [] }], ["can I borrow 5000 from the bank", { replies: [null], money: [] }], ["I want a loan of 5000", { replies: [null], money: [] }], ["should I take a loan", { replies: [null], money: [] }]
  ]);
  assert.deepEqual(failures, []);
});

test("English: repaying a loan lowers what you owe and is never a cost; interest is", async () => {
  const failures = await runTable([
    [["I borrowed 5000 from the bank", "I repaid 2000 to the bank"], { money: [loan("Bank", 5000, 3000)], reply: /^Recorded: you repaid Bank 2,000 of the loan\. That is not a cost.*You still owe Bank 3,000\./ }],
    [["I borrowed 5000 from the bank", "I repaid the bank 2000"], { money: [loan("Bank", 5000, 3000)] }], [["I borrowed 5000 from the bank", "paid back the bank 1000"], { money: [loan("Bank", 5000, 4000)] }],
    [["I borrowed 5000 from the bank", "loan repayment 500 to the bank"], { money: [loan("Bank", 5000, 4500)] }], [["I borrowed 5000 from the bank", "I paid the bank 700 for the loan"], { money: [loan("Bank", 5000, 4300)] }],
    [["I borrowed 5000 from the bank", "I paid 2000 on the bank loan"], { money: [loan("Bank", 5000, 3000)] }],
    [["I borrowed 5000 from the bank", "I repaid 5000 to the bank"], { money: [loan("Bank", 5000, 0, { unpaid: false })], reply: /You owe Bank nothing on the loan now/ }],
    [["I borrowed 5000 from the bank", "I repaid 9000 to the bank"], { money: [loan("Bank", 5000, 0, { unpaid: false })], reply: /You only owed Bank 5,000/ }],
    [["I borrowed 5000 from the bank", "I repaid the bank", "2000"], { money: [loan("Bank", 5000, 3000)] }],
    [["I borrowed 5000 from the bank", "I repaid the bank", "cancel"], { money: [loan("Bank", 5000, 5000)], reply: /Nothing was saved/ }],
    [["I borrowed 5000 from the bank", "I repaid 2000 to Wanjiru"], { money: [loan("Bank", 5000, 5000)], reply: /^(?!Recorded)/ }],
    ["I repaid 2000 to the bank", { money: [], reply: /I have no loan from Bank recorded, so I have changed nothing/ }],
    [["I borrowed 5000 from the bank", "I borrowed 3000 from the bank", "I repaid 6000 to the bank"], { money: [loan("Bank", 5000, 0, { unpaid: false }), loan("Bank", 3000, 2000)] }],
    [["I borrowed 5000 from the bank", "paid 300 interest to the bank"], { money: [loan("Bank", 5000, 5000), { type: "expense", category: "interest", amount: 300 }] }],
    [["I borrowed 5000 from the bank", "I paid 300 in interest"], { money: [loan("Bank", 5000, 5000), { type: "expense", category: "interest", amount: 300 }] }],
    [["I borrowed 5000 from the bank", "interest 200"], { money: [loan("Bank", 5000, 5000), { type: "expense", category: "interest", amount: 200 }] }]
  ]);
  assert.deepEqual(failures, []);
  // the books: a loan and its repayment never reach income, costs or profit; the interest does
  const who = person();
  await run(who, ["sold maize 10000", "bought seed 3000", "I borrowed 5000 from the bank", "I repaid 2000 to the bank"]);
  assert.match(await who.say("what is my profit this month"), /income 10,000, spending 3,000, so a profit of 7,000\./);
  await who.say("paid 300 interest to the bank");
  assert.match(await who.say("what is my profit this month"), /spending 3,300, so a profit of 6,700\./);
  assert.match(await who.say("what loans do I have"), /^Your loans: Bank 3,000\. Total 3,000\.$/);
  assert.match(await who.say("how much do I owe the bank"), /You owe Bank 3,000\./);
  assert.match(await who.say("who do I owe"), /Bank 3,000/);
  assert.match(await who.say("my loans"), /Bank 3,000/);
});

test("English: loans in different currencies stay apart", async () => {
  const who = person();
  await run(who, ["I borrowed 5000 from the bank", "I borrowed $20 from Peter"]);
  assert.match(await who.say("what loans do I have"), /Total (?=.*5,000)(?=.*\$20)/);
  assert.match(await who.say("I repaid Peter $20"), /You owe Peter nothing on the loan now/);
});

test("English: a chama contribution is savings, a payout is savings coming back, and the balance is read back", async () => {
  const failures = await runTable([
    ["chama contribution 500", { money: [saving("contribution", 500)], reply: /^Recorded: chama contribution of 500\. It is savings, not a cost, so it does not lower your profit\. You have put in 500 so far\.$/ }],
    ["chama contribution 500 paid", { money: [saving("contribution", 500)] }], ["I paid 500 to the chama", { money: [saving("contribution", 500)] }], ["I contributed 500 to chama", { money: [saving("contribution", 500)] }],
    ["paid chama 500", { money: [saving("contribution", 500)] }], ["chama 500", { money: [saving("contribution", 500)] }], ["my chama contribution was 500", { money: [saving("contribution", 500)] }],
    ["I put 500 in the chama", { money: [saving("contribution", 500)] }], ["I paid my chama contribution of 500", { money: [saving("contribution", 500)] }], ["chama contribution KSh 1,500", { money: [saving("contribution", 1500, { currency: "KSh" })] }],
    ["I paid 300 to the Umoja chama", { money: [saving("contribution", 300, { group: "Umoja" })] }], ["chama contribution 2k", { money: [saving("contribution", 2000)] }],
    ["chama contribution 4.500", { replies: [/^Did you mean 4,500/], money: [] }], [["chama contribution 4.500", "4500"], { money: [saving("contribution", 4500)] }],
    [["chama contribution 500", "chama contribution 700", "my chama balance"], { reply: /^Chama: you have put in 1,200 \(2 payments\)\.$/ }],
    [["chama contribution 500", "how much have I put in the chama"], { reply: /you have put in 500/ }], [["chama contribution 500", "chama balance"], { reply: /you have put in 500/ }],
    [["chama contribution 500", "how much is in my chama"], { reply: /you have put in 500/ }],
    [["chama contribution 1000", "the chama paid me 3000", "my chama balance"], { money: [saving("contribution", 1000), saving("payout", 3000)], reply: /put in 1,000 and received 3,000; you have received 2,000 more than you put in/ }],
    [["chama contribution 3000", "I received the chama payout 1000", "my chama balance"], { reply: /put in 3,000 and received 1,000; 2,000 is still in the chama/ }],
    ["I received the chama payout 20000", { money: [saving("payout", 20000)], reply: /^Recorded: you received 20,000 from the chama\. It is your savings coming back, not income/ }],
    ["my chama balance", { reply: /I have no chama contributions recorded/ }],
    ["chama contribution is 500 every month", { money: [], reply: /not recorded a payment/ }],
    [["chama contribution 500", "sold maize 4000", "bought seed 1000", "what is my profit this month"], { reply: /income 4,000, spending 1,000, so a profit of 3,000\./ }],
    [["chama contribution 500", "undo"], { money: [], reply: /Removed: chama contribution of 500/ }]
  ]);
  assert.deepEqual(failures, []);
  const groups = person();
  await run(groups, ["I paid 300 to the Umoja chama", "chama contribution 500"]);
  const balance = await groups.say("my chama balance");
  assert.match(balance, /Chama Umoja: you have put in 300/); assert.match(balance, /Chama: you have put in 500/);
});

test("Kiswahili: loans (kukopa, kulipa mkopo, riba)", async () => {
  const failures = await runTable([
    ["nimekopa elfu tano kutoka kwa Mama Njeri", { money: [loan("Mama Njeri", 5000, 5000)], reply: /^Nimeandika: umekopa 5,000 kutoka kwa Mama Njeri\. Si mapato/ }], ["nimekopa 5000 kutoka kwa Juma", { money: [loan("Juma", 5000, 5000)] }],
    ["Mama Njeri amenikopesha elfu tano", { money: [loan("Mama Njeri", 5000, 5000)] }], ["nimechukua mkopo wa elfu ishirini benki", { money: [loan("Benki", 20000, 20000)] }], ["nimekopeshwa elfu mbili na Juma", { money: [loan("Juma", 2000, 2000)] }],
    ["nimepata mkopo wa elfu kumi kutoka kwa benki", { money: [loan("Benki", 10000, 10000)] }], ["nimekopa 5000 kutoka kwa Mama Njeri", { replies: [/^Nimeandika: umekopa 5,000/] }],
    [["nina mkopo wa elfu ishirini", "benki"], { money: [loan("Benki", 20000, 20000)] }], [["nimekopa elfu tano", "Mama Njeri"], { money: [loan("Mama Njeri", 5000, 5000)] }], [["nimekopa elfu tano", "skip"], { money: [loan("", 5000, 5000)] }],
    [["nimekopa elfu tano kutoka kwa Mama Njeri", "nimelipa mkopo Mama Njeri elfu mbili"], { money: [loan("Mama Njeri", 5000, 3000)], reply: /^Nimeandika: umemlipa Mama Njeri 2,000 kwenye mkopo\. Si gharama.*Bado unadaiwa 3,000 na Mama Njeri/ }],
    [["nimekopa elfu tano kutoka kwa Mama Njeri", "nimerudisha elfu mbili kwa Mama Njeri"], { money: [loan("Mama Njeri", 5000, 3000)] }], [["nimekopa elfu tano kutoka kwa Mama Njeri", "nimemrudishia Mama Njeri elfu mbili"], { money: [loan("Mama Njeri", 5000, 3000)] }],
    [["nimekopa elfu tano kutoka kwa Mama Njeri", "nimemlipa Mama Njeri elfu tano"], { money: [loan("Mama Njeri", 5000, 0, { unpaid: false })] }],
    [["nimekopa elfu tano kutoka kwa Mama Njeri", "nimelipa mkopo Mama Njeri", "elfu moja"], { money: [loan("Mama Njeri", 5000, 4000)] }],
    ["nimelipa mkopo Juma elfu mbili", { money: [], reply: /Sioni mkopo kutoka kwa Juma/ }],
    [["nimekopa elfu tano kutoka kwa Mama Njeri", "nimelipa riba 200"], { money: [loan("Mama Njeri", 5000, 5000), { type: "expense", category: "interest", amount: 200 }], reply: /^Nimeandika: riba ya 200\. Imehesabiwa kama gharama/ }],
    [["nimekopa elfu tano kutoka kwa Mama Njeri", "mikopo yangu"], { reply: /^Mikopo yako: Mama Njeri 5,000\. Jumla 5,000\.$/ }],
    ["nimekopa elfu tano kutoka kwa Mama Njeri", { check: async who => assert.match(await who.say("faida yangu mwezi huu"), /Sina pesa yoyote|0/) }],
    [["nina mkopo mkubwa"], { replies: [null] }], ["nimekopa", { replies: [null] }]
  ]);
  assert.deepEqual(failures, []);
});

test("Kiswahili: chama (kuchangia, kupokea, salio)", async () => {
  const failures = await runTable([
    ["nimechangia chama 500", { money: [saving("contribution", 500)], reply: /^Nimeandika: mchango wa chama wa 500\. Ni akiba yako, si gharama/ }], ["nimechangia chama shilingi mia tano", { money: [saving("contribution", 500, { currency: "shillings" })] }],
    ["nimelipa mchango wa chama elfu mbili", { money: [saving("contribution", 2000)] }], ["nimeweka 500 kwenye chama", { money: [saving("contribution", 500)] }], ["nimeweka chama shilingi mia tano", { money: [saving("contribution", 500, { currency: "shillings" })] }],
    ["tumechangia chama elfu moja", { money: [saving("contribution", 1000)] }], ["nilichangia chama mia mbili", { money: [saving("contribution", 200)] }], ["nimetoa 500 kwa chama", { money: [saving("contribution", 500)] }],
    ["mchango wa chama 500", { money: [saving("contribution", 500)] }], ["mchango wa chama ni elfu mbili kila mwezi", { money: [], reply: /Sijaandika malipo yoyote/ }],
    [["nimechangia chama 500", "nimechangia chama 700", "salio la chama"], { reply: /^Chama: umechangia 1,200 \(michango 2\)\.$/ }], [["nimechangia chama 500", "michango yangu ya chama"], { reply: /umechangia 500/ }],
    [["nimechangia chama 500", "nimechangia chama kiasi gani"], { reply: /umechangia 500/ }], ["salio la chama", { reply: /Sina michango ya chama/ }],
    [["nimechangia chama 1000", "nimepokea pesa za chama elfu tatu", "salio la chama"], { money: [saving("contribution", 1000), saving("payout", 3000)], reply: /umechangia 1,000, umepokea 3,000; umepokea zaidi ya ulichochangia kwa 2,000/ }],
    ["chama kimenilipa elfu tano", { money: [saving("payout", 5000)], reply: /Si mapato: ni akiba yako ikirudi/ }],
    [["nimechangia chama 500", "futa rekodi ya mwisho"], { money: [], reply: /^Nimeondoa: akiba ya 500/ }],
    ["nimechangia chama 4.500", { replies: [/^Je, ni 4,500\?/], money: [] }]
  ]);
  assert.deepEqual(failures, []);
});
