"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { localPhoneToE164, extractContactStatement } = require("../../nexus/memory/contacts.js");
const { PARSERS } = require("../../nexus/farmwork/guided.js");
const { formatMoney } = require("../../nexus/farmwork/parse.js");

// Step 0 for US small businesses (a US catering business run through Kyro): dollars worked, but a US phone number was refused ("I need Tanya's number with the country code, like +254712345678")
// and cents were dropped ("$230.5").
test("US and Canadian phone numbers written the everyday way are read, in every common layout", () => {
  for (const text of ["404-555-0123", "(404) 555-0123", "404 555 0123", "4045550123", "1-404-555-0123", "1 (404) 555-0123"]) {
    assert.deepEqual(localPhoneToE164(text), { phone: "+14045550123", country: "United States" }, text);
  }
});

test("Kenyan and Nigerian numbers are read exactly as before, and impossible North American numbers are not guessed", () => {
  assert.deepEqual(localPhoneToE164("0712 345 678"), { phone: "+254712345678", country: "Kenya" });
  assert.deepEqual(localPhoneToE164("0803 123 4567"), { phone: "+2348031234567", country: "Nigeria" });
  assert.deepEqual(localPhoneToE164("712345678"), { phone: "+254712345678", country: "Kenya" });
  for (const text of ["123-456-7890", "555-0123", "404-155-0123", "+14045550123", "12345"]) assert.equal(localPhoneToE164(text), null, text);
});

test("'Save Tanya's number as 404-555-0123' saves +14045550123 and says it was taken as a United States number", () => {
  const statement = extractContactStatement("Save Tanya's number as 404-555-0123");
  assert.equal(statement.name, "Tanya");
  assert.equal(statement.phone, "+14045550123");
  assert.equal(statement.assumedCountry, "United States");
  assert.ok(!statement.invalid);
});

test("the guided customer question accepts a US number and keeps the old hint, with a US example added, for anything else", () => {
  assert.deepEqual(PARSERS.phone("(404) 555-0123"), { value: "+14045550123" });
  assert.deepEqual(PARSERS.phone("0712 345 678"), { value: "+254712345678" });
  assert.deepEqual(PARSERS.phone("+14045550123"), { value: "+14045550123" });
  assert.match(PARSERS.phone("not a number").hint, /like \+254712345678 or \+14045550123/);
});

test("dollars, pounds and euros show their cents when there are any, and other currencies and whole amounts are unchanged", () => {
  assert.equal(formatMoney(230.5, "$"), "$230.50");
  assert.equal(formatMoney(12.5, "£"), "£12.50");
  assert.equal(formatMoney(450, "$"), "$450");
  assert.equal(formatMoney(1250, "$"), "$1,250");
  assert.equal(formatMoney(4500, "KSh"), "KSh 4,500");
  assert.equal(formatMoney(2.5, "shillings"), "2.5 shillings");
});
