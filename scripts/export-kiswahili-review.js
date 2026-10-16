#!/usr/bin/env node
"use strict";
// Writes a spreadsheet (CSV, opens in Excel) of every Kiswahili sentence Kyro says or shows, next to its English, for a fluent Kiswahili speaker to check. All of it is a first draft written without one.
//   node scripts/export-kiswahili-review.js [output.csv]      (default: output/kiswahili-review.csv)
// Columns: Where | English | Kiswahili now | Is it right? (Yes / No) | Better Kiswahili (if No) | Notes
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.join(__dirname, "..");

function fromI18n() {
  const en = require(path.join(root, "nexus/i18n/en.js")); const sw = require(path.join(root, "nexus/i18n/sw.js"));
  return Object.keys(sw).filter(key => typeof sw[key] === "string" && typeof en[key] === "string").map(key => ({ where: `Companion and safety replies (${key})`, en: en[key], sw: sw[key] }));
}

function fromApplicationScreens() {
  const source = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
  const start = source.indexOf("const KYRO_APP_SW = Object.freeze({"); if (start < 0) return [];
  const end = source.indexOf("\n});", start);
  const table = vm.runInNewContext("(" + source.slice(source.indexOf("{", start), end + 3).replace(/\);?$/, "") + ")", {});
  return Object.keys(table).map(english => ({ where: "Application screens (buttons, forms, headings)", en: english, sw: table[english] }));
}

function fromAnswerCards() {
  const card = require(path.join(root, "public/kyro-answer-card.js"));
  const { en, sw } = card.TEXT || {};
  if (!en || !sw) return [];
  return Object.keys(sw).filter(key => typeof sw[key] === "string" && typeof en[key] === "string").map(key => ({ where: `Help screens (${key})`, en: en[key], sw: sw[key] }));
}

function fromCrisisLines() {
  const lines = require(path.join(root, "public/kyro-crisis-lines.js"));
  const rows = [];
  for (const country of ["Kenya", "Nigeria", "United States"]) { const sw = lines.linesFor(country, "sw"); const en = lines.linesFor(country, "en"); if (en && sw) rows.push({ where: `Helplines shown to someone in distress (${country}) - please check carefully`, en: en.trim(), sw: sw.trim() }); }
  return rows;
}

function fromFeelings() {
  const feelings = require(path.join(root, "public/kyro-feelings.js"));
  const rows = [];
  for (const feeling of ["sad", "anxious", "stressed", "lonely", "angry", "tired", "overwhelmed", "worried"]) {
    let en = ""; let sw = ""; try { en = feelings.reply(feeling, "en"); sw = feelings.reply(feeling, "sw"); } catch { /* not a feeling this module knows */ }
    if (en && sw && en !== sw) rows.push({ where: `Replies about feelings (${feeling}) - please check carefully`, en, sw });
  }
  return rows;
}

function collect() {
  const seen = new Set(); const rows = [];
  for (const row of [...fromCrisisLines(), ...fromFeelings(), ...fromI18n(), ...fromAnswerCards(), ...fromApplicationScreens()]) {
    const key = `${row.en}\u0001${row.sw}`; if (seen.has(key) || !row.en || !row.sw || row.en === row.sw) continue; seen.add(key); rows.push(row);
  }
  return rows;
}

const cell = value => `"${String(value ?? "").replace(/"/g, '""').replace(/\r?\n/g, " ")}"`;
function toCsv(rows) {
  const header = ["Where", "English", "Kiswahili now", "Is it right? (Yes / No)", "Better Kiswahili (if No)", "Notes"].map(cell).join(",");
  return "﻿" + [header, ...rows.map(row => [row.where, row.en, row.sw, "", "", ""].map(cell).join(","))].join("\r\n") + "\r\n";
}

function main(argv) {
  const out = argv[0] || path.join(root, "output", "kiswahili-review.csv");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const rows = collect(); fs.writeFileSync(out, toCsv(rows));
  console.log(`${rows.length} Kiswahili sentences written to ${out}`);
  return 0;
}

if (require.main === module) process.exit(main(process.argv.slice(2)));
module.exports = { collect, toCsv };
