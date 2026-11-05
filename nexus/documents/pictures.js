"use strict";

// Pictures for a designed document (flyer, poster, newsletter, brochure, invitation, promotional email). Where they come from:
//   1. the person's OWN uploaded photos and logo (the real upload feature, /api/nexus/upload): "with my logo", "using the photo I uploaded", or the Add a picture button on the document card. Only the person's own files are ever used.
//   2. pictures found on the open web, for "with a picture of fresh bread" or "add a picture of the church building": open-licence pictures downloaded on the server through the strict fetch in server/providers/picture-fetch.js,
//      with a credit line in the file and a plain note on the card that found pictures belong to their owners.
// The document's TEXT stays the document; the pictures are kept beside it (the saved version keeps their bytes, the document's metadata keeps a small list), so "Save changes" and "export it as a PDF" keep them.
//
// extractPictureRequest(text) -> { text, specs }          the sentence without the picture words, and what pictures were asked for
// addPictureRequest(text) -> { specs, target } | null    "Add a picture of fresh bread to the flyer", "put my logo on it"
// resolvePictures({ specs, kept, env, context, deps }) -> { pictures, notes }     pictures = full pictures (with bytes), notes = plain sentences for what could not be done
// summariseForMetadata(pictures) / toStored(pictures) / fromStored(stored)

const MAX_PICTURES = 3;
const MAX_STORED_PICTURE_BYTES = 6 * 1024 * 1024; // all the pictures of one document together
const MAX_UPLOAD_PICTURE_BYTES = 6 * 1024 * 1024;

const A = "(?:an?\\s+|the\\s+|some\\s+|one\\s+|two\\s+|my\\s+|our\\s+)?(?:(?:nice|good|great|clear|real)\\s+)?";
const NOUN = "(?:picture|photo|image|photograph)s?";
const ASK_VERB = "(?:with|and|plus|including|include|add|adding|using|use|put|place|insert)";
const STOP = "(?=\\s*(?:[,.;!?]|$)|\\s+(?:on|at|in|for|from|by|that|which|saying|and|with|as|to|onto|under|above|below)\\s)";
const SEARCH_CLAUSE = new RegExp(`(?:,\\s*|\\s+)${ASK_VERB}\\s+${A}${NOUN}\\s+(?:of|showing|about)\\s+(?<q>[\\p{L}\\p{N}'’ -]{2,60}?)${STOP}`, "iu");
const LOGO_CLAUSE = new RegExp(`(?:,\\s*|\\s+)${ASK_VERB}\\s+(?:my|our|the)\\s+(?:(?:company|business|church|farm|shop|school|team|club)\\s+)?logo\\b`, "i");
const UPLOADED_CLAUSE = new RegExp(`(?:,\\s*|\\s+)${ASK_VERB}\\s+(?:the\\s+|my\\s+|our\\s+)?(?:${NOUN}\\s+(?:that\\s+)?(?:i|we)\\s+(?:just\\s+)?(?:uploaded|sent|added|took|saved)|(?:uploaded|own)\\s+${NOUN}|(?:my|our)\\s+(?:own\\s+)?${NOUN}(?!\\s+(?:of|showing|about)))`, "i");

function squeeze(text) { return String(text || "").replace(/\s+/g, " ").replace(/\s+([,.;!?])/g, "$1").replace(/^[\s,;]+|[\s,;]+$/g, "").trim(); }

// "Make me a flyer for my bake sale on Saturday with a picture of fresh bread and my logo" -> the same sentence with those words taken out, and the two pictures asked for.
function extractPictureRequest(text) {
  let rest = ` ${String(text || "").trim()}`; const specs = [];
  for (let guard = 0; guard < 6 && specs.length < MAX_PICTURES; guard += 1) {
    let match;
    if ((match = SEARCH_CLAUSE.exec(rest))) { specs.push({ source: "search", query: squeeze(match.groups.q) }); rest = rest.replace(match[0], ""); continue; }
    if ((match = LOGO_CLAUSE.exec(rest))) { specs.push({ source: "upload", hint: "logo", role: "logo" }); rest = rest.replace(match[0], ""); continue; }
    if ((match = UPLOADED_CLAUSE.exec(rest))) { specs.push({ source: "upload", hint: "latest" }); rest = rest.replace(match[0], ""); continue; }
    break;
  }
  return { text: specs.length ? squeeze(rest) : String(text || ""), specs };
}

const ADD_LEAD = /^\s*(?:please\s+)?(?:(?:hey\s+)?(?:kyro|nexus)[,.]?\s+)?(?:(?:can|could|would|will) you\s+)?(?:(?:i\s+)?(?:want|need|would like|'d like)\s+(?:you\s+)?to\s+)?(?:add|put|place|include|insert|use|attach)\b/i;
// where it goes: "to the flyer", "on it", "in the newsletter", "to this document", "to my invitation"
const TARGET_TAIL = /\s+(?:to|on|onto|in|into|for)\s+(?:(?:the|my|this|that|our|it)\s*)?(?:(?:latest|last|new|current|open)\s+)?(flyer|poster|newsletter|brochure|invitation|e-?mail|document|doc|it|this|that)?\s*[.!?]*$/i;
function addPictureRequest(text) {
  const said = String(text || "").trim();
  if (!ADD_LEAD.test(said)) return null;
  const tail = TARGET_TAIL.exec(said);
  const body = tail ? said.slice(0, tail.index) : said;
  const found = extractPictureRequest(`x ${body.replace(ADD_LEAD, "add")}`);
  if (!found.specs.length) {
    // "add a picture" / "add the picture" with no subject, or "add my logo"
    if (/^\s*(?:add|put|place|include|insert|attach|use)\s+(?:my|our|the)\s+(?:(?:company|business|church|farm|shop|school|team|club)\s+)?logo\s*[.!?]*$/i.test(body)) return { specs: [{ source: "upload", hint: "logo", role: "logo" }], target: tail ? String(tail[1] || "").toLowerCase() : "" };
    if (/^\s*(?:add|put|place|include|insert|attach|use)\s+(?:(?:an?|the|my|our)\s+)?(?:(?:uploaded|own)\s+)?(?:picture|photo|image)s?\s*(?:(?:that\s+)?(?:i|we)\s+(?:just\s+)?(?:uploaded|sent|added|took|saved))?\s*[.!?]*$/i.test(body)) return { specs: [{ source: "upload", hint: "latest" }], target: tail ? String(tail[1] || "").toLowerCase() : "" };
    return null;
  }
  return { specs: found.specs, target: tail ? String(tail[1] || "").toLowerCase() : "" };
}

// ---------- the person's own uploads ----------
function ownUploads(deps, env, userId) {
  const uploads = deps.uploads || require("../../server/uploads.js");
  const dir = uploads.uploadDir(env);
  return { uploads, dir, list: (uploads.listUploadsForUser(dir, userId) || []).filter(meta => meta && meta.fileId && String(meta.uploadedBy || "") === String(userId || "")) };
}

function readUpload(deps, env, userId, meta) {
  const { uploads, dir } = ownUploads(deps, env, userId);
  const filePath = uploads.resolveUploadedFilePath(dir, meta.fileId);
  if (!filePath) throw new Error("not_found");
  const fs = deps.fs || require("node:fs");
  const stat = fs.statSync(filePath);
  if (stat.size > MAX_UPLOAD_PICTURE_BYTES) throw Object.assign(new Error("That picture is larger than 6 MB. Use a smaller one."), { code: "picture_large" });
  return fs.readFileSync(filePath);
}

async function pictureFromUpload(spec, { env, context, deps }) {
  const userId = context?.userId;
  if (!userId) return { note: "I need you signed in to use your own pictures." };
  const { list } = ownUploads(deps, env, userId);
  const images = list.filter(meta => /^image\//i.test(String(meta.mimeType || ""))).sort((a, b) => String(b.uploadedAt || "").localeCompare(String(a.uploadedAt || "")));
  const usable = images.filter(meta => /^image\/(?:png|jpe?g)$/i.test(String(meta.mimeType || "")));
  let chosen = null;
  if (spec.fileId) chosen = images.find(meta => meta.fileId === spec.fileId) || null;
  else if (spec.hint === "logo") chosen = usable.find(meta => /logo/i.test(String(meta.originalFilename || ""))) || null;
  else if (spec.hint && spec.hint !== "latest") chosen = usable.find(meta => String(meta.originalFilename || "").toLowerCase().includes(String(spec.hint).toLowerCase())) || null;
  else chosen = usable[0] || null;
  // "my logo" with no file called logo: the newest picture the person uploaded is the best guess, and it is said so
  let guessed = false;
  if (!chosen && spec.hint === "logo" && usable.length) { chosen = usable[0]; guessed = true; }
  if (!chosen) {
    if (images.length && !usable.length) return { note: "Your uploaded pictures are in a format I cannot put in a Word or PDF file (WebP). Save the picture as a PNG or JPG and upload it again with the Add a picture button." };
    return { missing: true, note: spec.hint === "logo" ? "I do not have a logo from you yet. Use the Add a picture button on the document to upload it, and I will put it in." : "I do not have a picture from you yet. Use the Add a picture button on the document to upload one, and I will put it in." };
  }
  if (!/^image\/(?:png|jpe?g)$/i.test(String(chosen.mimeType || ""))) return { note: "That picture is a WebP file, which I cannot put in a Word or PDF file. Save it as a PNG or JPG and upload it again." };
  let buffer;
  try { buffer = readUpload(deps, env, userId, chosen); } catch (error) { return { note: error?.code === "picture_large" ? error.message : "I could not open the picture you uploaded. Please upload it again with the Add a picture button." }; }
  let info;
  try { info = (deps.image || require("../../server/providers/image-info.js")).assertDrawable(buffer); } catch (error) { return { note: error.message }; }
  const name = String(chosen.originalFilename || "your picture").replace(/\.[a-z0-9]{2,5}$/i, "").slice(0, 80);
  return { picture: { role: spec.role || (spec.hint === "logo" ? "logo" : ""), source: "upload", title: name, alt: spec.hint === "logo" ? "Logo" : name, caption: String(spec.caption || ""), credit: "", mime: info.mime, ext: info.ext, width: info.width, height: info.height, buffer,
    ref: { fileId: chosen.fileId, filename: String(chosen.originalFilename || "") } }, guessed };
}

async function pictureFromSearch(spec, { deps }) {
  const finder = deps.findPicture || require("../../server/providers/picture-fetch.js").findPicture;
  const found = await finder(spec.query, deps.fetchOptions ? { fetchOptions: deps.fetchOptions, searchOptions: deps.searchOptions || {} } : {}).catch(() => null);
  if (!found) return { note: `I could not find a good picture of ${spec.query}. You can add your own with Add a picture.` };
  return { picture: { role: spec.role || "", source: "search", title: found.title || spec.query, alt: found.title || `Picture of ${spec.query}`, caption: String(spec.caption || ""), credit: found.credit, mime: found.mime, ext: found.ext, width: found.width, height: found.height, buffer: found.buffer,
    ref: { query: spec.query, imageUrl: found.imageUrl, sourceUrl: found.sourceUrl, creator: found.creator, license: found.license } } };
}

// kept: the pictures a saved document already has (from fromStored); specs: new ones asked for now. The result never has more than three.
async function resolvePictures({ specs = [], kept = [], env = process.env, context = null, deps = {} } = {}) {
  const pictures = kept.slice(0, MAX_PICTURES); const notes = [];
  for (const spec of Array.isArray(specs) ? specs : []) {
    if (pictures.length >= MAX_PICTURES) { notes.push("A document holds at most three pictures, so one was left out."); break; }
    let result;
    try { result = spec?.source === "upload" ? await pictureFromUpload(spec, { env, context, deps }) : spec?.source === "search" && spec.query ? await pictureFromSearch(spec, { deps }) : { note: "" }; } catch { result = { note: "I could not add that picture." }; }
    if (result.picture) {
      pictures.push(result.picture);
      if (result.guessed) notes.push("I used the newest picture you uploaded as your logo.");
    } else if (result.note) notes.push(result.note);
  }
  // the total the file may carry
  let total = 0; const kept2 = [];
  for (const picture of pictures) { total += picture.buffer.length; if (total > MAX_STORED_PICTURE_BYTES) { notes.push("Those pictures together are too large for one document, so one was left out."); total -= picture.buffer.length; continue; } kept2.push(picture); }
  if (kept2.some(picture => picture.source === "search")) notes.push("Pictures found on the web belong to their owners: the credit is printed in the file, so be sure you may use them. Your own pictures need no such check.");
  return { pictures: kept2, notes, missingUpload: Boolean(specs.some(spec => spec?.source === "upload") && notes.some(note => /Add a picture button/.test(note))) };
}

const publicPart = picture => ({ role: picture.role || "", source: picture.source, title: picture.title || "", alt: picture.alt || "", caption: picture.caption || "", credit: picture.credit || "", mime: picture.mime, ext: picture.ext, width: picture.width, height: picture.height, ref: picture.ref || {} });
// what the document's metadata keeps (small, no bytes) and what the saved version keeps (with the bytes, so the document can be saved or exported again)
const summariseForMetadata = pictures => pictures.map(publicPart);
const toStored = pictures => pictures.map(picture => ({ ...publicPart(picture), dataBase64: picture.buffer.toString("base64") }));
function fromStored(stored) {
  const list = typeof stored === "string" ? (() => { try { return JSON.parse(stored); } catch { return []; } })() : stored;
  return (Array.isArray(list) ? list : []).map(item => {
    if (!item || typeof item.dataBase64 !== "string") return null;
    const buffer = Buffer.from(item.dataBase64, "base64");
    return buffer.length ? { ...publicPart(item), buffer } : null;
  }).filter(Boolean).slice(0, MAX_PICTURES);
}

module.exports = Object.freeze({ MAX_PICTURES, MAX_STORED_PICTURE_BYTES, extractPictureRequest, addPictureRequest, resolvePictures, summariseForMetadata, toStored, fromStored });
