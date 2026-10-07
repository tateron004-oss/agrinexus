"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { parseReading, parseHealthIntent, numberWordsToDigits, isYes, isNo, isDeleteConfirmed, isSwahili } = require("../../nexus/health/vitals-speech.js");

// How people really say a reading, in English and Kiswahili, by voice and by typing. Each row is a sentence and what it must be read as. The numbers are read WHOLE or not at all: an
// "8,5" is 8.5 and never 8, a "7 point 2" is 7.2 and never 7, and a sentence that cannot be read whole is asked about, not guessed.

const bp = (systolic, diastolic) => ({ vital: "bp", systolic, diastolic });

test("blood pressure: the spoken and typed forms are read as the same two numbers", () => {
  const rows = [
    // plain digits, the forms the app already understood
    ["my blood pressure is 140 over 90", 140, 90], ["my blood pressure is 150/95", 150, 95], ["blood pressure 120 over 80", 120, 80], ["bp 130/85", 130, 85], ["my BP is 118 over 76", 118, 76],
    ["my blood pressure today is 160 over 100", 160, 100], ["my blood pressure yesterday was 135 over 85", 135, 85],
    // number words
    ["my blood pressure is one forty over ninety", 140, 90], ["my blood pressure is one hundred and forty over ninety", 140, 90], ["my pressure is one fifty over ninety five", 150, 95],
    ["my blood pressure is a hundred and twenty over eighty", 120, 80], ["blood pressure one twenty over eighty", 120, 80], ["my bp is one sixty over one hundred", 160, 100],
    ["blood pressure one eighty over one ten", 180, 110], ["my blood pressure is one oh five over sixty five", 105, 65], ["my blood pressure is two hundred over one twenty", 200, 120],
    ["my blood pressure is ninety over sixty", 90, 60], ["my blood pressure is one thirty-five over eighty-five", 135, 85],
    // other joiners
    ["my blood pressure is 140 by 90", 140, 90], ["my bp is 140 and 90", 140, 90], ["my pressure 140 kwa 90", 140, 90], ["ma blood pressure is 140 or 90 uh", 140, 90], ["my blood pressure na 140 over 90", 140, 90],
    ["my BP ni 140 over 90", 140, 90], ["blood pressure 140 90", 140, 90],
    // top and bottom
    ["systolic 140 diastolic 90", 140, 90], ["top 140 bottom 90", 140, 90], ["upper 150 lower 95", 150, 95], ["top number 140 and bottom number 90", 140, 90], ["systolic is 135 and diastolic is 85", 135, 85],
    ["diastolic 85 systolic 135", 135, 85], ["juu 140 chini 90", 140, 90],
    // Kiswahili
    ["presha yangu ni 160 juu ya 100", 160, 100], ["shinikizo la damu 150 na 95", 150, 95], ["shinikizo langu la damu ni 140 kwa 90", 140, 90], ["presha ni 130 juu ya 85", 130, 85],
    ["presha yangu ni mia moja sitini juu ya mia moja", 160, 100], ["shinikizo la damu mia moja arobaini na tisini", 140, 90], ["presha mia moja na hamsini juu ya tisini na tano", 150, 95],
    ["presha yangu leo ni mia moja ishirini juu ya themanini", 120, 80], ["shinikizo la damu ni mia moja thelathini na tano juu ya themanini na tano", 135, 85],
    // a plain "numbers first" sentence, and nothing but the numbers
    ["140 over 90 is my blood pressure", 140, 90], ["140/90", 140, 90], ["one forty over ninety", 140, 90], ["it was 133/78", 133, 78], ["my reading is 128 over 82", 128, 82]
  ];
  assert.ok(rows.length >= 45);
  for (const [phrase, systolic, diastolic] of rows) {
    const read = parseReading(phrase);
    assert.ok(read && read.vital === "bp", `${phrase} -> ${JSON.stringify(read)}`);
    assert.deepEqual([read.systolic, read.diastolic], [systolic, diastolic], phrase);
  }
});

test("blood pressure: 'by', 'and' and 'kwa' with no other word are taken for a pressure only while health readings are being talked about", () => {
  assert.equal(parseReading("140 by 90"), null, "outside a health conversation 100 by 50 is more likely a field");
  assert.equal(parseReading("the plot is 60 by 40"), null);
  for (const phrase of ["140 by 90", "140 and 90", "140 kwa 90", "it is 140 by 90"]) {
    const read = parseReading(phrase, { context: true });
    assert.deepEqual([read?.systolic, read?.diastolic], [140, 90], phrase);
  }
});

test("blood pressure: numbers that cannot be a pressure are read as said (so the app can refuse them), and part-numbers are asked about", () => {
  assert.deepEqual(parseReading("my blood pressure is 1500 over 95"), { ...bp(1500, 95), form: "trigger", when: "today" });
  assert.equal(parseReading("my blood pressure is 120.5 over 80").ask, "bp-not-whole");
  assert.equal(parseReading("my blood pressure is 140 over 90 and my sugar is 8").ask, "several");
  assert.deepEqual(parseReading("my blood pressure is 140 over 90 and my sugar is 8").vitals, ["bp", "glucose"]);
});

test("blood sugar: decimals are read whole, in digits, with a comma, or with a spoken 'point'", () => {
  const rows = [
    ["my sugar is 9.4", 9.4, ""], ["sugar was 7.2", 7.2, ""], ["sukari yangu 7.5", 7.5, ""], ["sukari ni 8,5", 8.5, ""], ["my blood sugar is 8,5", 8.5, ""], ["blood sugar 7 point 2", 7.2, ""],
    ["my sugar is seven point two", 7.2, ""], ["sukari ni saba nukta mbili", 7.2, ""], ["my blood sugar is eight point five", 8.5, ""], ["my glucose is 6.1", 6.1, ""],
    ["my blood sugar is 7.2 mmol", 7.2, "mmol/L"], ["my blood sugar is 7.2 mmol/L", 7.2, "mmol/L"], ["blood sugar 130 mg per dl", 130, "mg/dL"], ["my sugar is 130 mg/dl", 130, "mg/dL"],
    ["blood glucose 5,6 mmol per litre", 5.6, "mmol/L"], ["my blood sugar is 9.4 millimoles per litre", 9.4, "mmol/L"], ["my sugar is 140 milligrams per decilitre", 140, "mg/dL"],
    ["my blood shuger is 130", 130, ""], ["sugar 130", 130, ""], ["my sukari ni 130", 130, ""], ["sukari yangu ni 130", 130, ""], ["my blood sugar is one hundred and thirty", 130, ""],
    ["my sugar na 130", 130, ""], ["my blood sugar is 12", 12, ""], ["sukari ya damu ni 6,8", 6.8, ""], ["my blood sugar this morning was 5.9", 5.9, ""], ["my sugar after lunch was 10.2", 10.2, ""],
    ["blood sugar 2.5", 2.5, ""], ["my sugar is 8 point 25", 8.25, ""], ["my sugar is seven point two five", 7.25, ""], ["sukari yangu ni 9,4 mmol", 9.4, "mmol/L"], ["log my sugar as 6.5", 6.5, ""]
  ];
  assert.ok(rows.length >= 30);
  for (const [phrase, value, unit] of rows) {
    const read = parseReading(phrase);
    assert.ok(read && read.vital === "glucose" && !read.ask, `${phrase} -> ${JSON.stringify(read)}`);
    assert.equal(read.value, value, phrase);
    assert.equal(read.unit, unit, phrase);
  }
});

test("blood sugar: a figure that cannot be read whole is asked about, never cut short", () => {
  for (const phrase of ["my sugar is 8 5", "my blood sugar is 7 2", "my sugar is 9 4 this morning"]) {
    const read = parseReading(phrase);
    assert.ok(read && read.ask, `${phrase} -> ${JSON.stringify(read)}`);
    assert.equal(read.value, undefined, "no value may be handed on when the figure was unclear");
  }
  assert.equal(parseReading("my blood sugar is 7.2.5").ask, "decimal");
});

test("other readings: weight, pulse, temperature and oxygen", () => {
  const rows = [
    ["log my weight 68 kg", "weight", 68, "kg"], ["my weight is 68 kilos", "weight", 68, "kg"], ["I weigh 72.5 kg", "weight", 72.5, "kg"], ["my weight is 150 pounds", "weight", 150, "lb"],
    ["uzito wangu ni 68 kilo", "weight", 68, "kg"], ["record my weight as 80 kg", "weight", 80, "kg"], ["my weight is sixty eight kilograms", "weight", 68, "kg"],
    ["pulse 88", "pulse", 88, "bpm"], ["my pulse is 88", "pulse", 88, "bpm"], ["my heart rate is 72", "pulse", 72, "bpm"], ["mapigo ya moyo ni 88", "pulse", 88, "bpm"], ["my pulse is eighty eight", "pulse", 88, "bpm"],
    ["temperature 38.5", "temperature", 38.5, ""], ["record my temperature 38.5", "temperature", 38.5, ""], ["my temperature is 101.2 F", "temperature", 101.2, "F"], ["joto ni 38.5", "temperature", 38.5, ""],
    ["my temperature is 37,8", "temperature", 37.8, ""], ["my temperature is thirty eight point five", "temperature", 38.5, ""],
    ["my oxygen is 96", "oxygen", 96, "%"], ["my spo2 is 94 percent", "oxygen", 94, "%"], ["my oxygen level is 97", "oxygen", 97, "%"]
  ];
  for (const [phrase, vital, value, unit] of rows) {
    const read = parseReading(phrase);
    assert.ok(read && read.vital === vital && !read.ask, `${phrase} -> ${JSON.stringify(read)}`);
    assert.equal(read.value, value, phrase);
    assert.equal(read.unit, unit, phrase);
  }
});

test("not a reading: ordinary sentences with the same words in them are left alone", () => {
  const negatives = [
    "add sugar 2 kg to my shopping list", "I need sugar 2", "buy sugar 5 bags", "sugar is expensive today", "the sugar price is 120 shillings", "split the harvest 60/40", "the plot is 60 by 40",
    "what is the temperature in Nairobi", "what is the weather like", "the temperature is 38 today and very hot", "temperature file 42", "pulse crop price 85 per kg", "I sold 3 bags of pulses",
    "my weight is a concern", "the weight of the maize is 50 kg", "I want to lose weight", "my blood pressure is high", "check my blood pressure", "what is a normal blood pressure",
    "what does a blood pressure of 140 over 90 mean", "is 7.8 a high sugar reading", "remind me at 8 am", "call me at 10 30", "I have 140 chickens and 90 goats", "the match ended 3 over 2",
    "my phone number is 0712345678", "", "   ", "hello", "sell 90 kg of maize at 140 shillings", "oxygen tank 40", "mpesa 140 na 90", "nimeuza gunia 3", "sukari kilo 2"
  ];
  assert.ok(negatives.length >= 30);
  for (const phrase of negatives) assert.equal(parseReading(phrase), null, `${JSON.stringify(phrase)} -> ${JSON.stringify(parseReading(phrase))}`);
});

test("number words become digits, in English and Kiswahili, and nothing else changes", () => {
  const rows = [
    ["one forty", "140"], ["one hundred and forty", "140"], ["a hundred and ten", "110"], ["ninety five", "95"], ["eighty-five", "85"], ["two hundred", "200"], ["one oh five", "105"], ["twenty", "20"], ["twelve", "12"],
    ["mia moja arobaini", "140"], ["mia moja na hamsini", "150"], ["mia moja sitini na tano", "165"], ["arobaini na tano", "45"], ["kumi na moja", "11"], ["tisini", "90"], ["mia mbili", "200"], ["mia moja", "100"],
    ["arobaini na tisini", "40 na 90"], ["my sugar is 8", "my sugar is 8"], ["no one came", "no 1 came"], ["Mia is here", "mia is here"]
  ];
  for (const [input, output] of rows) assert.equal(numberWordsToDigits(input.toLowerCase()), output, input);
});

test("what else people say about their readings", () => {
  const rows = [
    // [phrase, intent, extra]
    ["delete my last reading", "delete-last", { type: null }], ["delete my last blood pressure reading I typed it wrong", "delete-last", { type: "bp" }], ["remove my last sugar reading", "delete-last", { type: "glucose" }],
    ["delete that reading", "delete-last", {}], ["erase the last blood pressure reading", "delete-last", { type: "bp" }], ["futa kipimo cha mwisho", "delete-last", {}], ["futa kipimo cha mwisho cha presha", "delete-last", { type: "bp" }],
    ["forget my BP readings", "delete-all", { type: "bp" }], ["delete my blood pressure readings", "delete-all", { type: "bp" }], ["delete all my health records", "delete-all", { type: null }],
    ["delete all my readings", "delete-all", { type: null }], ["erase all my sugar readings", "delete-all", { type: "glucose" }], ["futa taarifa zangu zote za afya", "delete-all", { type: null }], ["futa vipimo vyangu vyote", "delete-all", { type: null }],
    ["show my BP readings", "show", { type: "bp" }], ["show my blood pressure readings for this week", "show", { type: "bp", days: 7 }], ["what was my last blood pressure reading", "show", { type: "bp", one: true }],
    ["what are my sugar readings", "show", { type: "glucose" }], ["nionyeshe vipimo vyangu vya sukari", "show", { type: "glucose" }], ["show my readings", "show", { type: null }], ["what was my last sugar reading", "show", { type: "glucose", one: true }],
    ["list my weight readings", "show", { type: "weight" }], ["kipimo cha mwisho cha sukari ilikuwa nini", "show", { type: "glucose", one: true }], ["show my health records", "show", {}],
    ["share with my nurse", "share", {}], ["send to my doctor", "share", {}], ["share my blood pressure readings with my nurse", "share", {}], ["send my readings to my doctor", "share", {}], ["tuma vipimo vyangu kwa daktari", "share", {}],
    ["who can see my health information", "who-can-see", {}], ["who can see my readings", "who-can-see", {}], ["can anyone see my blood pressure readings", "who-can-see", {}], ["is my health information private", "who-can-see", {}], ["nani anaweza kuona vipimo vyangu", "who-can-see", {}],
    ["I missed my morning dose, should I take double", "medicine-missed", { double: true }], ["I forgot to take my pills", "medicine-missed", {}], ["nimesahau kumeza dawa ya presha jana", "medicine-missed", {}], ["I skipped my tablets today", "medicine-missed", {}],
    ["I am running out of my pills", "medicine-running-out", {}], ["I am running out of my blood pressure pills what should I do", "medicine-running-out", {}], ["my medicine is finishing", "medicine-running-out", {}], ["dawa zangu zinaisha", "medicine-running-out", {}],
    ["I stopped my BP pills because I feel fine", "medicine-stopped", { bp: true }], ["I stopped taking my medicine", "medicine-stopped", { bp: false }], ["nimeacha kumeza dawa za presha kwa sababu najisikia vizuri", "medicine-stopped", { bp: true }],
    ["that was wrong", "wrong", {}], ["I made a mistake", "wrong", {}], ["nimekosea", "wrong", {}]
  ];
  assert.ok(rows.length >= 45);
  for (const [phrase, intent, extra] of rows) {
    const read = parseHealthIntent(phrase);
    assert.ok(read && read.intent === intent, `${phrase} -> ${JSON.stringify(read)}`);
    for (const [key, value] of Object.entries(extra)) assert.deepEqual(read[key], value, `${phrase}: ${key}`);
  }
});

test("a correction is a reading with a marker, and carries what the person said", () => {
  const bpFix = parseHealthIntent("it was 133/78", { context: true });
  assert.equal(bpFix.intent, "correct");
  assert.deepEqual([bpFix.reading.systolic, bpFix.reading.diastolic], [133, 78]);
  assert.deepEqual(parseHealthIntent("nimekosea ilikuwa 130 juu ya 80").reading.systolic, 130);
  const lone = parseHealthIntent("it was 7.2");
  assert.equal(lone.intent, "correct");
  assert.equal(lone.reading.value, 7.2);
  assert.equal(parseHealthIntent("no, it was 133/78").intent, "correct");
});

test("not about readings: sentences that only share a word are left alone", () => {
  const negatives = [
    "what does a blood pressure of 140 over 90 mean", "is 7.8 a high sugar reading", "send a message to my doctor", "send the invoice to my nurse", "send my health insurance card to the clinic", "delete everything",
    "delete my shopping list", "forget everything you know about me", "show my records", "show me the market prices", "who can see my farm records", "who can see my location", "I took my pills", "I did not miss my dose",
    "I forgot to give the cow its dose of dewormer", "I am running out of dawa for the goats", "I stopped giving the chickens the medicine", "I missed my bus", "I am running out of money", "stop reminding me about my pills",
    "what is the weather today", "remind me to take my pills at 8 am", "what time is it", "that was wrong", "good morning", "tell me a story", "how do I lower my blood pressure", "what is a healthy weight"
  ];
  // "that was wrong" is only about a reading while readings are being talked about; the parser still names it, the conversation decides
  for (const phrase of negatives.filter(item => item !== "that was wrong")) assert.equal(parseHealthIntent(phrase), null, `${JSON.stringify(phrase)} -> ${JSON.stringify(parseHealthIntent(phrase))}`);
  // provider summaries and trend questions belong to the health tool's own report and history answers
  for (const phrase of ["Show me my saved chronic care readings", "What is the trend in my blood pressure readings?", "Give me a provider-ready report to bring to my doctor about my chronic care readings", "Prepare a provider summary of my chronic care readings"]) {
    assert.equal(parseHealthIntent(phrase), null, phrase);
  }
});

test("yes and no, in English and Kiswahili", () => {
  for (const phrase of ["yes", "Yes.", "yes please", "yeah", "sure", "correct", "save it", "yes save it", "ndiyo", "Ndio", "sawa", "hifadhi", "ndiyo hifadhi", "yes, delete all 7 readings", "yes delete it"]) assert.equal(isYes(phrase), true, phrase);
  for (const phrase of ["no", "No.", "nope", "cancel", "hapana", "siyo", "usihifadhi", "ghairi", "don't save", "keep it", "no thanks"]) assert.equal(isNo(phrase), true, phrase);
  for (const phrase of ["maybe", "ok", "what", "yes and also remind me tomorrow", "no it was 133/78", "my blood pressure is 120 over 80", ""]) { assert.equal(isYes(phrase), false, phrase); }
  assert.equal(isDeleteConfirmed("yes, delete all 7 readings"), true);
  assert.equal(isDeleteConfirmed("ndiyo futa zote"), true);
  assert.equal(isDeleteConfirmed("yes"), false, "a bare yes is not enough for the one thing that cannot be undone");
  assert.equal(isDeleteConfirmed("delete all"), false);
});

test("language: Kiswahili is recognised from its words", () => {
  for (const phrase of ["presha yangu ni 160 juu ya 100", "sukari ni 8,5", "futa kipimo cha mwisho", "ndiyo", "nionyeshe vipimo vyangu"]) assert.equal(isSwahili(phrase), true, phrase);
  for (const phrase of ["my blood pressure is 140 over 90", "delete my last reading", "yes"]) assert.equal(isSwahili(phrase), false, phrase);
});
