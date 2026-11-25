"use strict";

// THE WEB CHAT'S ANSWERS (10 November 2026): a chat page (kind "chat" in nexus/business/pages-voice.js, shown by nexus/pages/public-pages.js) answers a visitor from ONLY what the owner wrote down:
//   editable.chatAnswers   { topic, answer }   the owner's own words, added by voice ("when someone asks about delivery, tell them it is free over $50") or on the Business page
//   editable.hours         the opening hours, used to answer "what time do you open" and "are you open on Sunday" (only when hours were really saved; an assumed 9 to 5 is never told to a customer)
// No model, no search, no guessing: nothing is invented, so a customer is never told a price, a promise or a time the owner did not write. A question it cannot answer says so and offers to take a message.

const lower = value => String(value || "").toLowerCase();
const STOP = new Set(("a an the and or but if so to of in on at for from with by as is are was were be been am do does did have has had can could will would should may might i me my we our us you your yours it its this that these those there here " +
  "what when where which who whom whose how why please tell about any some get got just also too very much many more most than then them they their he she his her hi hello hey thanks thank okay ok " +
  "open opens opening close closes closing closed hour hours time times day days business shop store company want need like know").split(/\s+/));
// a crude stem so "deliver", "delivery", "delivers" and "delivering" meet, and "price" meets "prices"
const stem = word => (word.length > 3 ? word.replace(/ies$/, "y").replace(/(?:ing|ed|ly|s)$/, "").replace(/e$/, "").replace(/y$/, "") : word);
const wordsOf = text => [...new Set(lower(text).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(word => word.length > 2 && !STOP.has(word)).map(stem).filter(word => word.length > 1))];

const GREETING = /^\s*(?:hi|hello|hey|hiya|good\s+(?:morning|afternoon|evening)|habari|jambo|salaam|sannu|bawo)\b[\s\S]{0,24}$/i;
const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const HOURS_QUESTION = /\b(?:open|opens|opening|close|closes|closing|closed|hours)\b|\bwhat\s+time\b|\bwhen\s+(?:are|do)\s+you\b/i;
const toMinutes = time => { const m = /^(\d{1,2}):(\d{2})$/.exec(String(time || "")); return m ? Number(m[1]) * 60 + Number(m[2]) : null; };
const clock = time => { const total = toMinutes(time); const h = Math.floor(total / 60); const m = total % 60; return `${((h + 11) % 12) + 1}${m ? `:${String(m).padStart(2, "0")}` : ""} ${h < 12 ? "AM" : "PM"}`; };
const cap = day => day.charAt(0).toUpperCase() + day.slice(1);

function hoursTable(editable) {
  const rows = Array.isArray(editable?.hours) ? editable.hours : [];
  const table = new Map();
  for (const row of rows) { const day = lower(row.day); if (DAYS.includes(day) && toMinutes(row.open) !== null && toMinutes(row.close) !== null && toMinutes(row.close) > toMinutes(row.open)) table.set(day, row); }
  return table;
}
function hoursAnswer(editable, question) {
  const table = hoursTable(editable);
  if (!table.size) return null;
  const named = DAYS.filter(day => new RegExp(String.raw`\b${day}s?\b`, "i").test(question));
  const say = day => (table.has(day) ? `${cap(day)}: ${clock(table.get(day).open)} to ${clock(table.get(day).close)}` : `${cap(day)}: closed`);
  if (named.length) return named.map(say).join(". ") + ".";
  const order = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  return `Our hours are: ${order.map(say).join("; ")}.`;
}

// -> { kind: "greeting" | "answer" | "hours" | "none", text }
function answerFor(editable, question, businessName = "") {
  const text = String(question || "").trim();
  if (!text) return { kind: "none", text: "" };
  const asked = wordsOf(text);
  let best = null; let bestScore = 0;
  for (const row of Array.isArray(editable?.chatAnswers) ? editable.chatAnswers : []) {
    if (!String(row.answer || "").trim()) continue;
    const topic = new Set(wordsOf(row.topic)); const body = new Set(wordsOf(row.answer));
    let score = 0;
    for (const word of asked) { if (topic.has(word)) score += 2; else if (body.has(word)) score += 1; }
    if (score > bestScore) { best = row; bestScore = score; }
  }
  if (best && bestScore >= 2) return { kind: "answer", text: String(best.answer).trim() };
  if (HOURS_QUESTION.test(text)) { const hours = hoursAnswer(editable, text); if (hours) return { kind: "hours", text: hours }; }
  if (GREETING.test(text)) return { kind: "greeting", text: `Hello! Welcome to ${businessName || "our page"}. Ask me a question, for example about our hours or what we offer.` };
  return { kind: "none", text: "" };
}

module.exports = Object.freeze({ answerFor, wordsOf, hoursAnswer });
