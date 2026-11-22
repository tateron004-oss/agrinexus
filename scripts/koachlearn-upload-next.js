"use strict";
// Hands out the next staged Koach Learn bundle(s) in order: output/koachlearn/.upload/queue.txt is the full order, next.txt how many are handed out.
// Bundles taken back from a tab (listed one per line in redo.txt) are handed out first.
//   node scripts/koachlearn-upload-next.js [count]   -> prints the next bundle paths and moves the pointer
const fs = require("fs"), path = require("path");
const UP = path.resolve(__dirname, "..", "output", "koachlearn", ".upload");
const queue = fs.readFileSync(path.join(UP, "queue.txt"), "utf8").split(/\r?\n/).filter(Boolean);
const redoFile = path.join(UP, "redo.txt");
const redo = fs.existsSync(redoFile) ? fs.readFileSync(redoFile, "utf8").split(/\r?\n/).filter(Boolean) : [];
const at = Number(fs.readFileSync(path.join(UP, "next.txt"), "utf8"));
const n = Number(process.argv[2] || 1);
const again = redo.splice(0, n);
const out = queue.slice(at, at + n - again.length);
fs.writeFileSync(redoFile, redo.join("\n"));
fs.writeFileSync(path.join(UP, "next.txt"), String(at + out.length));
console.log(JSON.stringify({ handedOut: at + out.length, of: queue.length, next: [...again, ...out] }));
