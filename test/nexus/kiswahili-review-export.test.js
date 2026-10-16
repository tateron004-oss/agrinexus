"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { collect, toCsv } = require("../../scripts/export-kiswahili-review.js");

// A fluent Kiswahili speaker is handed one spreadsheet of everything Kyro says in Kiswahili, next to the English: every row has both, and the distress wording is marked for care.
test("the review spreadsheet has every sentence once, in both languages, and marks the helplines and feelings replies", () => {
  const rows = collect();
  assert.ok(rows.length > 200);
  for (const row of rows) { assert.ok(row.where && row.en && row.sw, JSON.stringify(row).slice(0, 80)); assert.notEqual(row.en, row.sw); }
  assert.equal(new Set(rows.map(row => row.en + "\u0001" + row.sw)).size, rows.length, "no sentence twice");
  assert.ok(rows.some(row => /Helplines.*Kenya.*check carefully/.test(row.where))); assert.ok(rows.some(row => /Replies about feelings.*check carefully/.test(row.where)));
  assert.ok(rows.some(row => /Application screens/.test(row.where)) && rows.some(row => /Help screens/.test(row.where)) && rows.some(row => /Companion and safety/.test(row.where)));
});

test("the CSV opens in Excel: a byte-order mark, a header with the columns to fill in, quotes doubled, one row per sentence", () => {
  const csv = toCsv([{ where: "W", en: 'say "hi"', sw: "habari\nyako" }]);
  assert.ok(csv.startsWith("﻿\"Where\",\"English\",\"Kiswahili now\",\"Is it right? (Yes / No)\",\"Better Kiswahili (if No)\",\"Notes\""));
  assert.match(csv, /"say ""hi""","habari yako","","",""/); assert.equal(csv.trim().split("\r\n").length, 2);
});
