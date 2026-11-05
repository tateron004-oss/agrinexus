"use strict";
// Real PNG and JPEG files made in code, for tests and sample documents (no image library is in the app).
// makePng(width, height, colorAt(x, y) -> [r, g, b]) -> Buffer      an ordinary non-interlaced 8-bit RGB PNG
// makeJpeg(width, height, colorAt(x, y) -> [r, g, b]) -> Buffer     a baseline JPEG (4:4:4) in which every 8x8 block is one flat colour: small, valid, and a picture a viewer can decode
const zlib = require("node:zlib");

function crc32(buffer) {
  let crc = ~0;
  for (let i = 0; i < buffer.length; i += 1) { crc ^= buffer[i]; for (let k = 0; k < 8; k += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1)); }
  return (~crc) >>> 0;
}
function chunk(type, data) {
  const out = Buffer.alloc(12 + data.length);
  out.writeUInt32BE(data.length, 0); out.write(type, 4, "ascii"); data.copy(out, 8);
  out.writeUInt32BE(crc32(out.subarray(4, 8 + data.length)), 8 + data.length);
  return out;
}
function makePng(width, height, colorAt) {
  const raw = Buffer.alloc((width * 3 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    raw[y * (width * 3 + 1)] = 0;
    for (let x = 0; x < width; x += 1) { const [r, g, b] = colorAt(x, y); const o = y * (width * 3 + 1) + 1 + x * 3; raw[o] = r; raw[o + 1] = g; raw[o + 2] = b; }
  }
  const header = Buffer.alloc(13); header.writeUInt32BE(width, 0); header.writeUInt32BE(height, 4); header[8] = 8; header[9] = 2;
  return Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), chunk("IHDR", header), chunk("IDAT", zlib.deflateSync(raw)), chunk("IEND", Buffer.alloc(0))]);
}

// ---- JPEG ----
const DC_CODES = [[0b00, 2], [0b010, 3], [0b011, 3], [0b100, 3], [0b101, 3], [0b110, 3], [0b1110, 4], [0b11110, 5], [0b111110, 6], [0b1111110, 7], [0b11111110, 8], [0b111111110, 9]];
function makeJpeg(width, height, colorAt) {
  const bytes = []; const push = (...values) => { for (const value of values) bytes.push(value & 0xff); };
  const word = value => push(value >> 8, value);
  push(0xff, 0xd8);
  push(0xff, 0xdb); word(67); push(0); for (let i = 0; i < 64; i += 1) push(8);                       // every quantiser step is 8, so a DC value is the block's brightness minus 128
  push(0xff, 0xc0); word(17); push(8); word(height); word(width); push(3, 1, 0x11, 0, 2, 0x11, 0, 3, 0x11, 0);
  push(0xff, 0xc4); word(31); push(0x00); push(0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0); for (let i = 0; i < 12; i += 1) push(i); // DC table (Annex K.3)
  push(0xff, 0xc4); word(20); push(0x10); push(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); push(0x00);                         // AC table with the one symbol "end of block", code 0
  push(0xff, 0xda); word(12); push(3, 1, 0x00, 2, 0x00, 3, 0x00, 0, 63, 0);
  let accumulator = 0; let bits = 0;
  const put = (value, length) => { for (let i = length - 1; i >= 0; i -= 1) { accumulator = (accumulator << 1) | ((value >> i) & 1); bits += 1; if (bits === 8) { push(accumulator); if (accumulator === 0xff) push(0); accumulator = 0; bits = 0; } } };
  const previous = [0, 0, 0];
  const encode = (component, dc) => {
    const diff = dc - previous[component]; previous[component] = dc;
    const magnitude = Math.abs(diff); let size = 0; while ((1 << size) <= magnitude) size += 1;
    put(DC_CODES[size][0], DC_CODES[size][1]);
    if (size) put(diff < 0 ? diff + (1 << size) - 1 : diff, size);
    put(0, 1); // end of block
  };
  for (let by = 0; by < Math.ceil(height / 8); by += 1) {
    for (let bx = 0; bx < Math.ceil(width / 8); bx += 1) {
      const [r, g, b] = colorAt(Math.min(width - 1, bx * 8 + 4), Math.min(height - 1, by * 8 + 4));
      const y = 0.299 * r + 0.587 * g + 0.114 * b; const cb = 128 - 0.168736 * r - 0.331264 * g + 0.5 * b; const cr = 128 + 0.5 * r - 0.418688 * g - 0.081312 * b;
      encode(0, Math.max(-128, Math.min(127, Math.round(y - 128)))); encode(1, Math.max(-128, Math.min(127, Math.round(cb - 128)))); encode(2, Math.max(-128, Math.min(127, Math.round(cr - 128))));
    }
  }
  if (bits) put((1 << (8 - bits)) - 1, 8 - bits);
  push(0xff, 0xd9);
  return Buffer.from(bytes);
}

// ready-made pictures: a sunrise over fields (JPEG) and a round logo on white (PNG)
function sunrise(width, height) {
  return makeJpeg(width, height, (x, y) => {
    const t = y / height;
    if (t > 0.62) return [30 + Math.round(60 * (1 - t)), 110 + Math.round(50 * (t - 0.62) * 3), 40];
    const sun = Math.hypot(x - width * 0.68, y - height * 0.5) < height * 0.16;
    if (sun) return [255, 214, 90];
    return [Math.round(250 - 90 * t), Math.round(170 - 60 * t), Math.round(110 + 110 * t)];
  });
}
function logo(width, height) {
  return makePng(width, height, (x, y) => (Math.hypot(x - width / 2, y - height / 2) < Math.min(width, height) * 0.42 ? (Math.hypot(x - width / 2, y - height / 2) < Math.min(width, height) * 0.2 ? [255, 255, 255] : [22, 101, 52]) : [255, 255, 255]));
}

module.exports = Object.freeze({ makePng, makeJpeg, sunrise, logo });
