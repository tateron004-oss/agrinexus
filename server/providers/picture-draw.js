"use strict";

// A picture DRAWN from the person's words, for a flyer, poster or post ("with an illustration of fresh bread"). It is asked of Cloudflare Workers AI (the FLUX.1 schnell model) with the server's own account number and token (CLOUDFLARE_ACCOUNT_ID and
// CLOUDFLARE_API_TOKEN); with either missing, nothing is asked and the person is told plainly. Nothing the picture service sends is trusted: the answer must be a real PNG or JPEG that a Word and a PDF file can hold, at most 6 MB.
// The cost is kept down on purpose: 4 steps is one small picture (about 45 of the 10,000 free "neurons" a day), a person may draw 10 pictures a day, and the whole site 150 (the free day is about 220), so the free allowance is not used up by one person.
// The picture is always labelled as drawn by a computer, never as a photograph: the person is told to check that it shows what they want.
//
// drawPicture(subject, { env, userId, fetchFn, now }) -> { buffer, mime, ext, width, height, title, credit }   (throws an Error with a .code and a plain message)
// drawingConfigured(env) -> true when both settings are there

const { assertDrawable } = require("./image-info.js");

const MODEL = "@cf/black-forest-labs/flux-1-schnell";
const MAX_BYTES = 6 * 1024 * 1024;
const TIMEOUT_MS = 40000;
const PER_PERSON_PER_DAY = 10;
const WHOLE_SITE_PER_DAY = 150;
const CREDIT = "Picture: drawn by a computer (Cloudflare FLUX.1), not a photograph";

const fail = (code, message) => Object.assign(new Error(message), { code });

const usage = { day: "", total: 0, people: new Map() };
const today = now => new Date(now()).toISOString().slice(0, 10);
function countOne(userId, now) {
  const day = today(now);
  if (usage.day !== day) { usage.day = day; usage.total = 0; usage.people = new Map(); }
  const mine = usage.people.get(userId) || 0;
  if (mine >= PER_PERSON_PER_DAY) throw fail("draw_person_limit", `You have drawn ${PER_PERSON_PER_DAY} pictures today, which is the most for one day. You can draw more tomorrow, or add your own picture with Add a picture.`);
  if (usage.total >= WHOLE_SITE_PER_DAY) throw fail("draw_site_limit", "I have drawn all the pictures I can for today. Please try again tomorrow, or add your own picture with Add a picture.");
  usage.people.set(userId, mine + 1); usage.total += 1;
}

// Words that are never drawn (violence, sexual content, hate, weapons, drugs) and real people, who are not drawn from a name.
const NEVER_DRAWN = /\b(?:nude|naked|nsfw|porn\w*|sex(?:ual|y)?|erotic|gore|blood\w*|kill\w*|murder\w*|corpse|dead body|suicide|self[- ]harm|torture|rape\w*|terroris\w*|bomb\w*|gun|guns|rifle|weapon\w*|nazi\w*|swastika|racist|cocaine|heroin|meth|drugs?)\b/i;
const A_REAL_PERSON = /\b(?:president|prime minister|pope|king|queen|celebrity|actor|actress|singer|politician|minister|governor|senator)\b/i;

function cleanSubject(subject) {
  return String(subject || "").replace(/[\u0000-\u001f<>{}\[\]\\`"]/g, " ").replace(/\s+/g, " ").trim().slice(0, 200);
}

function drawingConfigured(env = process.env) {
  return /^[a-f0-9]{32}$/i.test(String(env.CLOUDFLARE_ACCOUNT_ID || "").trim()) && /^[A-Za-z0-9_-]{20,120}$/.test(String(env.CLOUDFLARE_API_TOKEN || "").trim());
}

async function drawPicture(subject, { env = process.env, userId = "guest", fetchFn = globalThis.fetch, now = () => Date.now() } = {}) {
  const words = cleanSubject(subject);
  if (words.length < 2) throw fail("draw_empty", "Tell me what to draw, for example: with an illustration of fresh bread.");
  if (!drawingConfigured(env)) throw fail("draw_unavailable", "I cannot draw pictures yet. You can add your own picture with Add a picture, or ask for a picture of it from the web.");
  if (NEVER_DRAWN.test(words)) throw fail("draw_refused", "I do not draw that. Try something else, or add your own picture with Add a picture.");
  if (A_REAL_PERSON.test(String(subject || "").trim())) throw fail("draw_person", "I do not draw real people from their names. Draw the thing itself, or add your own photo with Add a picture.");
  countOne(String(userId || "guest"), now);
  const account = String(env.CLOUDFLARE_ACCOUNT_ID).trim(); const token = String(env.CLOUDFLARE_API_TOKEN).trim();
  const prompt = `A clean, friendly, colourful illustration for a flyer, no text, no letters, no words, no logos: ${words}`;
  let response;
  try {
    response = await fetchFn(`https://api.cloudflare.com/client/v4/accounts/${account}/ai/run/${MODEL}`, {
      method: "POST", headers: { authorization: `Bearer ${token}`, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({ prompt, steps: 4 }), redirect: "error", signal: AbortSignal.timeout(TIMEOUT_MS)
    });
  } catch { throw fail("draw_network", "I could not reach the drawing service just now. Please try again in a moment."); }
  if (response.status === 429) throw fail("draw_busy", "The drawing service is busy. Please try again in a minute.");
  if (!response.ok) throw fail("draw_error", "The drawing service could not draw that just now.");
  let body;
  try { body = await response.json(); } catch { throw fail("draw_error", "The drawing service gave an answer I could not read."); }
  // (the picture is the base64 text in "image", inside "result" when the answer comes wrapped)
  const encoded = String(body?.result?.image || body?.image || "");
  if (!encoded || encoded.length > MAX_BYTES * 1.4 || !/^[A-Za-z0-9+/=\s]+$/.test(encoded)) throw fail("draw_error", "The drawing service did not send a picture.");
  const buffer = Buffer.from(encoded.replace(/\s+/g, ""), "base64");
  if (!buffer.length || buffer.length > MAX_BYTES) throw fail("draw_error", "The drawing service did not send a usable picture.");
  let info;
  try { info = assertDrawable(buffer); } catch { throw fail("draw_error", "The picture the drawing service sent could not be put in a Word or PDF file."); }
  return { buffer, mime: info.mime, ext: info.ext, width: info.width, height: info.height, title: words, credit: CREDIT };
}

module.exports = Object.freeze({ MODEL, CREDIT, PER_PERSON_PER_DAY, WHOLE_SITE_PER_DAY, drawPicture, drawingConfigured, cleanSubject });
