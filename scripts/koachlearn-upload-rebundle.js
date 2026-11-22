"use strict";
// Puts the current scripts/koachlearn-uploader.js into staged bundles that have not been handed out yet (queue.txt from next.txt on), so a fix to
// the uploader reaches them without re-staging (re-staging could renumber bundles already in the queue). Each bundle keeps its items and files.
//   node scripts/koachlearn-upload-rebundle.js [from index]
const fs = require("fs"), path = require("path");
const UP = path.resolve(__dirname, "..", "output", "koachlearn", ".upload");
const queue = fs.readFileSync(path.join(UP, "queue.txt"), "utf8").split(/\r?\n/).filter(Boolean);
const from = Number(process.argv[2] ?? fs.readFileSync(path.join(UP, "next.txt"), "utf8"));
const uploader = fs.readFileSync(path.join(__dirname, "koachlearn-uploader.js"), "utf8");
let n = 0;
for (const file of queue.slice(from)) {
  const buf = fs.readFileSync(file);
  const len = buf.readUInt32LE(0);
  const h = JSON.parse(buf.subarray(4, 4 + len).toString("utf8"));
  if (h.uploader === uploader) continue;
  h.uploader = uploader;
  const head = Buffer.from(JSON.stringify(h));
  const l = Buffer.alloc(4); l.writeUInt32LE(head.length);
  fs.writeFileSync(file, Buffer.concat([l, head, buf.subarray(4 + len)]));
  n++;
}
console.log(`${n} bundles updated (from ${from} of ${queue.length})`);
