"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const en = require("../../nexus/i18n/en.js");
const sw = require("../../nexus/i18n/sw.js");
const care = require("../../public/kyro-care-phrases.js");

// A clinician packet found places where the care wording disagreed with the code or with itself. Thresholds are NOT touched here: only the words are made to say what the code does,
// and the English and Kiswahili replies for the same trigger are checked to name the same things. The Kiswahili is machine-drafted and needs a fluent speaker's check.

const numbers = text => (String(text).replace(/\{[a-z]+\}/gi, "").match(/\d+/g) || []).sort().join(",");

test("pregnancy blood pressure: the wording says what the code does (either number), in both languages", () => {
  assert.match(en["safety.care.pregnancy_bp"], /top number at 140 or more, or the bottom number at 90 or more/);
  assert.doesNotMatch(en["safety.care.pregnancy_bp"], /140 over 90 or more/);
  assert.match(sw["safety.care.pregnancy_bp"], /namba ya juu ya 140 au zaidi, au namba ya chini ya 90 au zaidi/);
  assert.equal(numbers(en["safety.care.pregnancy_bp"]), numbers(sw["safety.care.pregnancy_bp"]));
  // the code: either number alone is enough, and just under both is not
  const sign = text => care.careSign(text)?.category || null;
  assert.equal(sign("I am pregnant and my blood pressure is 145 over 80"), "pregnancy_bp");
  assert.equal(sign("I am pregnant and my blood pressure is 130 over 95"), "pregnancy_bp");
  assert.equal(sign("I am pregnant and my blood pressure is 139 over 89"), null);
});

test("pregnancy blood pressure: the Kiswahili says how to keep the reading, like the English", () => {
  assert.match(en["safety.care.pregnancy_bp"], /I have not saved this reading: say "record my blood pressure" with the numbers if you want it kept/);
  // There is no Kiswahili phrase Kyro understands for recording a blood pressure yet (swahili.test.js requires every quoted command to be understood), so the Kiswahili says what to give
  // (both numbers) without quoting an English command; a fluent speaker / the owner should decide whether to add one.
  assert.match(sw["safety.care.pregnancy_bp"], /Sijahifadhi kipimo hiki: ukitaka kihifadhiwe, niambie pamoja na namba zote mbili/);
  assert.doesNotMatch(sw["safety.care.pregnancy_bp"], /ukitaka kikae/);
});

test("snake bite: the Kiswahili says keep the bitten limb still, like the English", () => {
  assert.match(en["safety.care.snake"], /keep the bitten arm or leg still/);
  assert.match(sw["safety.care.snake"], /usiusogeze mkono au mguu ulioumwa/);
  assert.doesNotMatch(sw["safety.care.snake"], /usogeze kidogo/);
});

test("being hurt or forced: the Kiswahili keeps the 3-day sentence and names the same people as the English", () => {
  const e = en["safety.abuse"]; const s = sw["safety.abuse"];
  assert.match(e, /ideally within 3 days/);
  assert.match(s, /ikiwezekana ndani ya siku 3/);
  assert.match(s, /kuzuia maambukizi na mimba/);
  assert.match(s, /wanaweza kutibu majeraha/);
  // the same people: a relative, a friend, a teacher, a pastor, a health worker
  assert.match(e, /a relative, a friend, a teacher, a pastor or a health worker/);
  assert.match(s, /kama ndugu, rafiki, mwalimu, mchungaji au mhudumu wa afya/);
  assert.doesNotMatch(s, /mtu mzima|mzazi/);
  assert.equal(numbers(e), numbers(s));
});

test("the danger line keeps its hedge: 'might be in danger' is 'unaweza kuwa hatarini'", () => {
  assert.match(en["safety.number"], /If you might be in danger/);
  assert.match(sw["safety.number"], /Ikiwa unaweza kuwa hatarini/);
});

test("the thresholds are untouched: the same numbers still decide, nothing was raised or lowered", () => {
  const sign = text => care.careSign(text)?.category || null;
  assert.equal(sign("I am pregnant and my blood pressure is 160/100"), "pregnancy_bp_high");
  assert.equal(sign("I am pregnant and my blood pressure is 150/110"), "pregnancy_bp_high");
  assert.equal(sign("I am pregnant and my blood pressure is 150/95"), "pregnancy_bp");
  assert.equal(sign("I am pregnant and my blood pressure is 120/80"), null);
});
