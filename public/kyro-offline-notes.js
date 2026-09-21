(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KyroOfflineNotes = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  // Record-keeping that works with no signal. When a farmer says "sold 200 kg of maize to Amina for 9000" and the phone cannot reach Kyro,
  // the words are kept on the phone and said to Kyro again as soon as the phone is back online.
  //
  // Only plain statements of something that already happened are kept. Anything that would send, call, pay, post, remind, delete or cancel is
  // never kept: those must happen when the person is really there, never later on their behalf. Guided questions and anything that needs an
  // answer are not kept either. A note is dated when it reaches Kyro, and the person is told so.
  const KEY = "kyro.offlineNotes.v1";
  const MAX_NOTES = 50;
  const MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000;
  const MAX_LENGTH = 200;

  const RECORDING = [
    /^(?:i |we )?(?:sold|spent|paid out|bought|purchased|used|applied|fed|harvested|planted|sowed|weeded|sprayed|vaccinated|dewormed|weighed|milked|collected)\s+\S/i,
    /^(?:it |we )?(?:rained|had rain|got rain)\b/i,
    /^(?:rainfall|rain)\s*[:,-]?\s*\d/i,
    /^(?:add|put|record|log) \d[\d.,]* .+ (?:to|in|into) (?:my |the )?(?:stock|store|inventory)$/i,
    /^[A-Za-z][A-Za-z' -]{1,30} gave \d[\d.]* ?(?:litres?|liters?|l)\b/i,
    /^(?:note|write down) (?:down )?(?:about|on) .{2,40}\s*[:,-]\s*.+$/i,
    // a health worker's visit note and stock given out (see healthwork/)
    /^(?:visit|visit note|new visit|log (?:a )?visit)\s+[A-Za-z][A-Za-z' -]{1,40}\s*[:,-]\s*\S/i,
    /^(?:dispensed|gave out|issued)\s+\d/i
  ];
  const VISIT = /^(visit|visit note|new visit|log (?:a )?visit)\s+([A-Za-z][A-Za-z' -]{1,40}?)\s*([:,-])\s*(\S.*)$/i;
  const NEVER = /\b(?:send|text|sms|email|e-mail|call|phone|ring|message|whatsapp|remind(?:er)?|alert|notify|tell|post|publish|advertise|pay(?: to)?|transfer|wire|delete|remove|cancel|forget|erase)\b/i;

  function isRecordable(text) {
    const value = String(text || "").trim();
    if (!value || value.length > MAX_LENGTH || /\?\s*$/.test(value)) return false;
    return RECORDING.some(pattern => pattern.test(value)) && !NEVER.test(value);
  }

  // Keep a note only when the phone really could not reach Kyro: no signal, or the request never got an answer. An error from the server, or
  // a request that timed out, may already have been recorded, so those are never kept (nothing would be recorded twice).
  function shouldKeep(error, text, online = typeof navigator !== "undefined" ? navigator.onLine : true) {
    if (!isRecordable(text)) return false;
    return online === false || (error instanceof TypeError && !/timed out/i.test(String(error.message || "")));
  }

  const storageOf = storage => storage || (typeof localStorage !== "undefined" ? localStorage : null);
  function read(storage) {
    try {
      const parsed = JSON.parse(storageOf(storage)?.getItem(KEY) || "[]");
      return Array.isArray(parsed) ? parsed.filter(item => item && typeof item.text === "string" && Number.isFinite(item.at)) : [];
    } catch { return []; }
  }
  function write(list, storage) { try { storageOf(storage)?.setItem(KEY, JSON.stringify(list)); return true; } catch { return false; } }

  function add(text, { storage, now = Date.now() } = {}) {
    const list = read(storage).filter(item => now - item.at < MAX_AGE_MS);
    if (list.length >= MAX_NOTES) return 0;
    list.push({ text: String(text).trim(), at: now });
    return write(list, storage) ? list.length : 0;
  }
  const pending = ({ storage, now = Date.now() } = {}) => read(storage).filter(item => now - item.at < MAX_AGE_MS).length;

  // A clinical visit keeps the day it really happened. Sent the same day it is unchanged; the next day it says "yesterday"; later it carries the
  // real date in the note itself (the record is dated when it is added, and the note says when it was really made).
  const localDay = time => { const d = new Date(time); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
  function datedText(item, now) {
    const m = VISIT.exec(item.text);
    if (!m) return item.text;
    const madeOn = localDay(item.at); const today = localDay(now);
    if (madeOn === today) return item.text;
    const daysAgo = Math.round((Date.parse(today) - Date.parse(madeOn)) / 86400000);
    if (daysAgo === 1 && !/\b(?:yesterday|today)\b/i.test(m[2])) return `${m[1]} ${m[2]} yesterday${m[3]} ${m[4]}`;
    return `${item.text} [recorded offline on ${madeOn}]`;
  }

  // Say each kept note to Kyro in the order it was made. Stops at the first one that cannot be sent (still no signal), keeping it and the rest.
  async function drain({ send, storage, now = Date.now() }) {
    const list = read(storage).filter(item => now - item.at < MAX_AGE_MS);
    let sent = 0;
    while (list.length) {
      try { await send(datedText(list[0], now)); } catch { break; }
      list.shift(); sent += 1;
      write(list, storage);
    }
    write(list, storage);
    return { sent, left: list.length };
  }

  return Object.freeze({ isRecordable, shouldKeep, add, pending, drain, datedText, KEY, MAX_NOTES });
});
