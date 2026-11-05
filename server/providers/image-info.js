"use strict";

// What a picture file is, read from its own bytes (no image library is in the app): PNG or JPEG, its size in pixels, and whether pdfkit can draw it.
// A picture is never trusted for what its name or its web server says: the first bytes must be a PNG or JPEG signature and the header must hold a real size.
//
// sniffImage(buffer) -> { mime: "image/png"|"image/jpeg", ext: "png"|"jpg", width, height } | null
// assertDrawable(buffer) -> { mime, ext, width, height } (throws a plain-English Error when the picture cannot be put in a Word or PDF file)
// fitInside(width, height, maxWidth, maxHeight, { maxScale }) -> { width, height } scaled to fit the box with the SAME shape (never stretched); enlarged at most maxScale times (1 = never)

const MIN_SIDE = 24;
const MAX_SIDE = 12000;

function sniffPng(buffer) {
  if (buffer.length < 33 || buffer.readUInt32BE(0) !== 0x89504e47 || buffer.readUInt32BE(4) !== 0x0d0a1a0a) return null;
  if (buffer.toString("ascii", 12, 16) !== "IHDR") return null;
  const width = buffer.readUInt32BE(16); const height = buffer.readUInt32BE(20);
  return { mime: "image/png", ext: "png", width, height, interlaced: buffer[28] === 1 };
}

function sniffJpeg(buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) { offset += 1; continue; }
    let marker = buffer[offset + 1];
    while (marker === 0xff && offset + 2 < buffer.length) { offset += 1; marker = buffer[offset + 1]; }
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { offset += 2; continue; }
    if (marker === 0xd9 || marker === 0xda) return null; // the picture's data starts before any size was found
    const length = buffer.readUInt16BE(offset + 2);
    if (length < 2) return null;
    // the start-of-frame markers (not DHT 0xC4, JPG 0xC8, DAC 0xCC) carry the size
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { mime: "image/jpeg", ext: "jpg", height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7), progressive: marker === 0xc2 };
    }
    offset += 2 + length;
  }
  return null;
}

function sniffImage(buffer) {
  if (!Buffer.isBuffer(buffer)) return null;
  const found = sniffPng(buffer) || sniffJpeg(buffer);
  if (!found || !Number.isInteger(found.width) || !Number.isInteger(found.height)) return null;
  if (found.width < 1 || found.height < 1 || found.width > 65535 || found.height > 65535) return null;
  return found;
}

// The picture must be one that both the Word and the PDF file can hold, so a picture the PDF library cannot read is refused here, with a reason a person can act on, instead of leaving a hole in one of the two files.
function assertDrawable(buffer) {
  const info = sniffImage(buffer);
  if (!info) throw Object.assign(new Error("That picture is not a PNG or JPEG file. Save it as a PNG or JPG and try again."), { code: "picture_type" });
  if (info.width < MIN_SIDE || info.height < MIN_SIDE) throw Object.assign(new Error("That picture is too small to print."), { code: "picture_small" });
  if (info.width > MAX_SIDE || info.height > MAX_SIDE) throw Object.assign(new Error("That picture is too large. Use one under 12000 pixels wide."), { code: "picture_large" });
  try {
    const PDFDocument = require("pdfkit");
    const probe = new PDFDocument({ size: "LETTER", margin: 0 });
    probe.on("data", () => {});
    probe.openImage(buffer);
    probe.end();
  } catch {
    throw Object.assign(new Error("I could not read that picture. Save it again as a normal PNG or JPG and try again."), { code: "picture_unreadable" });
  }
  return { mime: info.mime, ext: info.ext, width: info.width, height: info.height };
}

function fitInside(width, height, maxWidth, maxHeight, { maxScale = 1 } = {}) {
  const w = Number(width); const h = Number(height);
  if (!(w > 0) || !(h > 0)) return { width: 0, height: 0 };
  let scale = Math.min(maxWidth / w, maxHeight / h);
  scale = Math.min(scale, maxScale);
  return { width: Math.max(1, Math.round(w * scale)), height: Math.max(1, Math.round(h * scale)) };
}

module.exports = Object.freeze({ sniffImage, assertDrawable, fitInside, MIN_SIDE, MAX_SIDE });
