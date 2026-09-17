"use strict";
// Uncompressed ZIP preserves generated relative asset paths without external tooling.
function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) { crc ^= byte; for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0); }
  return (crc ^ 0xffffffff) >>> 0;
}
function packageFiles(files) {
  const local = [], central = []; let offset = 0, count = 0;
  for (const [path, file] of Object.entries(files || {})) {
    if (!/^[A-Za-z0-9_./-]+$/.test(path) || path.startsWith('/') || path.split('/').some(part => !part || part === '.' || part === '..')) throw new Error('Invalid package path');
    if (typeof file.content !== 'string') throw new Error('Invalid package content');
    // A binary file (e.g. an invoice PDF) stores its real bytes as base64 --
    // confirmed the naive Buffer.from(file.content) here would embed the
    // literal base64 TEXT as the file's bytes, producing a real-looking but
    // corrupted .pdf inside the downloaded ZIP. Decode it the same way the
    // frontend's per-file "Download" button already does.
    const name = Buffer.from(path), bytes = file.binary ? Buffer.from(file.content, 'base64') : Buffer.from(file.content), crc = crc32(bytes);
    if (++count > 100 || offset + bytes.length > 10 * 1024 * 1024) throw new Error('Package exceeds size limit');
    const header = Buffer.alloc(30); header.writeUInt32LE(0x04034b50); header.writeUInt16LE(20,4); header.writeUInt16LE(0x800,6); header.writeUInt16LE(33,12);
    header.writeUInt32LE(crc,14); header.writeUInt32LE(bytes.length,18); header.writeUInt32LE(bytes.length,22); header.writeUInt16LE(name.length,26);
    local.push(header,name,bytes);
    const index = Buffer.alloc(46); index.writeUInt32LE(0x02014b50); index.writeUInt16LE(20,4); index.writeUInt16LE(20,6); index.writeUInt16LE(0x800,8); index.writeUInt16LE(33,14);
    index.writeUInt32LE(crc,16); index.writeUInt32LE(bytes.length,20); index.writeUInt32LE(bytes.length,24); index.writeUInt16LE(name.length,28); index.writeUInt32LE(offset,42);
    central.push(index,name); offset += header.length + name.length + bytes.length;
  }
  const directory = Buffer.concat(central), end = Buffer.alloc(22); end.writeUInt32LE(0x06054b50); end.writeUInt16LE(count,8); end.writeUInt16LE(count,10); end.writeUInt32LE(directory.length,12); end.writeUInt32LE(offset,16);
  return Buffer.concat([...local,directory,end]);
}
module.exports = Object.freeze({ packageFiles });
