#!/usr/bin/env node
"use strict";
// Writes docs/spanish/Spanish-Review-Sheet.csv: every topic of the checked small-business guide with the English beside the Spanish and an empty column for a fluent speaker's notes.
//   node scripts/spanish-review-sheet.js
// Open the file in a spreadsheet. The reviewer changes nothing in the English; they write corrections in the last column, and the Spanish files (nexus/knowledge/us-small-business-es/) are then updated from them.
const fs = require("node:fs");
const path = require("node:path");
const guide = require("../nexus/knowledge/us-small-business.js");
const spanish = require("../nexus/knowledge/us-small-business-es/index.js");

const cell = value => `"${String(value ?? "").replace(/"/g, '""')}"`;
const rows = [["topic", "english title", "spanish title", "english text", "spanish text", "reviewer notes"].join(",")];
for (const id of Object.keys(guide.TOPICS)) {
  rows.push([cell(id), cell(guide.TOPICS[id].title), cell(spanish.TOPICS_ES[id].title), cell(guide.TOPICS[id].text), cell(spanish.TOPICS_ES[id].text), cell("")].join(","));
}
rows.push("");
rows.push(["sentence", cell("Sources label"), cell(spanish.SOURCES_LABEL), cell("Sources"), cell(spanish.SOURCES_LABEL), cell("")].join(","));
rows.push(["sentence", cell("Preliminary translation note"), cell(spanish.PRELIMINARY), cell("(none in English)"), cell(spanish.PRELIMINARY), cell("")].join(","));
rows.push(["sentence", cell("Closing warning"), cell(spanish.CLOSING), cell("This is general information, not legal, tax or financial advice, and rules change, so confirm on the official site. I cannot file or apply for anything for you."), cell(spanish.CLOSING), cell("")].join(","));
const out = path.join(__dirname, "..", "docs", "spanish", "Spanish-Review-Sheet.csv");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, `${rows.join("\n")}\n`);
console.log(`Wrote ${out} (${Object.keys(guide.TOPICS).length} topics)`);
