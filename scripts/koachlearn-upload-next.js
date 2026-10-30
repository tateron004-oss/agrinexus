"use strict";
// Hands out the next staged Koach Learn bundle(s) in order: output/koachlearn/.upload/queue.txt is the full order, next.txt how many are handed out.
//   node scripts/koachlearn-upload-next.js [count]   -> prints the next bundle paths and moves the pointer
const fs = require("fs"), path = require("path");
const UP = path.resolve(__dirname, "..", "output", "koachlearn", ".upload");
const queue = fs.readFileSync(path.join(UP, "queue.txt"), "utf8").split(/\r?\n/).filter(Boolean);
const at = Number(fs.readFileSync(path.join(UP, "next.txt"), "utf8"));
const n = Number(process.argv[2] || 1);
const out = queue.slice(at, at + n);
fs.writeFileSync(path.join(UP, "next.txt"), String(at + out.length));
console.log(JSON.stringify({ handedOut: at + out.length, of: queue.length, next: out }));
