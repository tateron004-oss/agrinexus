"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { readSafetyDetailed } = require("../../nexus/companion/safety.js");

// An emergency alert is a REAL push to the people in someone's trusted circle. Found by running ordinary sentences through the reader:
// "I've fallen behind on my loan" and "tell my circle I'll be late" sent real alerts, while "I fell and can't get up" and "call an ambulance"
// were not recognised. The rule that must not change: when it is ambiguous, ALERT; only plainly-something-else phrases are carved out.

const kind = text => readSafetyDetailed(text)?.kind || null;

test("real emergencies still alert (nothing that used to alert has been lost)", () => {
  for (const phrase of [
    "emergency", "this is an emergency", "I need help now", "I need urgent help right now",
    "I've fallen", "I have fallen", "I have fallen in the kitchen and cannot get up, please send help",
    "I fell and can't get up", "I fell in the kitchen", "I slipped and hurt my back", "I tripped over the step and I think my leg is broken",
    "I can't get up", "I cannot get up", "I am unable to get up",
    "I'm in danger", "I am badly hurt", "I'm having a heart attack", "I'm having a stroke", "I'm bleeding badly", "I can't breathe",
    "alert my circle", "please alert my circle", "alert my circle now", "Kyro alert my circle please", "Alert my circle!",
    "tell my circle", "call my circle", "notify my circle", "contact my circle",
    "tell my circle I need help", "tell my circle it's an emergency", "tell my circle I've fallen", "message my circle I'm in trouble",
    "alert my circle my husband is not breathing", "notify my circle I am hurt", "tell my circle I am being attacked",
    "send an emergency alert to my circle", "send alert to my trusted circle",
    "call an ambulance", "please call an ambulance", "get an ambulance", "I need an ambulance", "please I need an ambulance",
    "I've had a fall", "I have had a fall", "I've had a bad fall", "I just had a fall", "I have had a nasty fall in the kitchen", "I had a fall just now", "I had a bad fall this morning"
  ]) assert.equal(kind(phrase), "emergency", phrase);
});

test("ordinary sentences that share words with an emergency do NOT send an alert", () => {
  for (const phrase of [
    "I've fallen behind on my loan", "I have fallen behind with my payments", "I've fallen in love", "I've fallen asleep",
    "I fell asleep early", "I fell in love with farming", "I fell for it", "I slipped up on the order", "I fell behind on rent",
    "tell my circle I'll be late", "message my circle I'm running late", "tell my circle happy birthday", "tell my circle I'm safe",
    "alert my circle that I arrived home", "notify my circle about the wedding tomorrow", "tell my circle it's not an emergency",
    "contact my circle about dinner", "text my circle I'm on my way", "alert my circle I'm fine",
    "how do I call an ambulance", "do I need an ambulance for a small cut", "what number is the ambulance",
    "I need help with my maize", "emergency contact list", "who is in my circle",
    "I've had a fall in sales this month", "I've had a fall in income", "prices have had a fall", "I had a fall last year", "I've had a fall before", "I had a fall two years ago", "I've had a fall in prices for maize"
  ]) assert.notEqual(kind(phrase), "emergency", phrase);
});

test("Kiswahili: emergencies alert, ordinary 'tell my circle ...' messages do not", () => {
  for (const phrase of ["dharura", "nimeanguka", "siwezi kuamka", "arifu mzunguko wangu", "mwambie mzunguko wangu nahitaji msaada", "tafadhali arifu watu wangu wa karibu sasa", "arifu mzunguko wangu ajali"]) {
    assert.equal(readSafetyDetailed(phrase)?.kind, "emergency", phrase);
  }
  for (const phrase of ["mwambie mzunguko wangu nimechelewa", "arifu mzunguko wangu nimefika nyumbani", "mjulishe mzunguko wangu kesho tuna harusi"]) {
    assert.notEqual(readSafetyDetailed(phrase)?.kind, "emergency", phrase);
  }
});

test("self-harm and 'ask first' handling is untouched", () => {
  assert.equal(kind("I want to kill myself"), "self_harm");
  assert.equal(kind("I don't want to live anymore"), "self_harm");
  assert.equal(kind("help"), "ask");
  assert.equal(kind("tafadhali msaada"), "ask");
});
