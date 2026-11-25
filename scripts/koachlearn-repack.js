"use strict";
// Re-packs staged Koach Learn upload bundles into fewer, larger ones (22 Nov 2026: one browser file attach takes up to about 10 MB,
// so two review courses fit in one bundle and the tabs need half as many attaches). Contents and order are unchanged.
//   node scripts/koachlearn-repack.js <out-folder> <limit MB> <bundle.bin> [<bundle.bin> ...]   (or --list <file with one path per line>)
const fs = require("fs"), path = require("path");
const args = process.argv.slice(2);
const out = path.resolve(args[0]), limit = Number(args[1]) * 1024 * 1024;
let inputs = args.slice(2);
if (inputs[0] === "--list") inputs = fs.readFileSync(inputs[1], "utf8").split(/\r?\n/).filter(Boolean);
const read = f => { const b = fs.readFileSync(f); const n = b.readUInt32LE(0); return { h: JSON.parse(b.subarray(4, 4 + n).toString()), body: b.subarray(4 + n), size: b.length }; };
fs.mkdirSync(out, { recursive: true });
const tag = path.basename(out), made = [];
let cur = null;
const flush = () => {
  if (!cur) return;
  const header = Buffer.from(JSON.stringify({ uploader: cur.uploader, items: cur.items, files: cur.files }));
  const len = Buffer.alloc(4); len.writeUInt32LE(header.length);
  const file = path.join(out, `${tag}-${String(made.length + 1).padStart(4, "0")}.bin`);
  fs.writeFileSync(file, Buffer.concat([len, header, ...cur.parts]));
  made.push({ bundle: file, bytes: fs.statSync(file).size, keys: cur.items.map(i => i.key), from: cur.from });
  cur = null;
};
for (const f of inputs) {
  const { h, body, size } = read(f);
  if (cur && cur.bytes + size > limit) flush();
  if (!cur) cur = { uploader: h.uploader, items: [], files: [], parts: [], offset: 0, bytes: 0, from: [] };
  for (const x of h.files) cur.files.push({ ...x, offset: x.offset + cur.offset });
  cur.items.push(...h.items); cur.parts.push(body); cur.offset += body.length; cur.bytes += size; cur.from.push(path.basename(f));
}
flush();
fs.writeFileSync(path.join(out, "batches.json"), JSON.stringify(made, null, 1));
console.log(`${inputs.length} bundles -> ${made.length} in ${out} (largest ${(Math.max(...made.map(m => m.bytes)) / 1048576).toFixed(2)} MB)`);
