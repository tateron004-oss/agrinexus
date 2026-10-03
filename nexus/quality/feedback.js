"use strict";

// How Kyro learns where it is wrong: a person can say "that was wrong" (and what the right answer is) or "that helped", and an
// administrator can ask for the report. Saying "that was wrong" is an explicit act of sharing, and Kyro says so: the question and answer
// are kept for the team so they can be fixed, with phone numbers and email addresses removed. A thumbs-up keeps no words at all, only
// the fact and the day. Nothing here changes an answer by itself; it only makes the problems visible.
const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();
const clip = (value, limit) => clean(value).slice(0, limit);
const redact = value => clean(value).replace(/[^\s@<>,;"]+@[^\s@<>,;"]+\.[^\s@<>,;"]+/g, "[email removed]").replace(/\+?\d[\d\s().-]{6,}\d/g, "[number removed]");

const WRONG_WORDS = "(?:not right|wrong|incorrect|not correct|not what i asked(?: for)?|not helpful|unhelpful|nonsense|useless|a bad answer|a wrong answer)";
const NOTE = "(?:[,.:;-]+\\s*(.+))?$";
const DOWN = [
  new RegExp(`^(?:no[, ]+)?(?:that(?:'s| is| was)|this (?:is|was)|your answer (?:is|was)) ${WRONG_WORDS}${NOTE}`),
  new RegExp(`^(?:you(?:'re| are)|you were) wrong${NOTE}`),
  new RegExp(`^(?:wrong|incorrect|bad answer|bad response|wrong answer)${NOTE}`),
  /^(?:thumbs down|👎)$/
];
const UP = [
  /^(?:that(?:'s| is| was)|this (?:is|was)|your answer (?:is|was)) (?:right|correct|helpful|perfect|great|exactly (?:right|what i needed)|very helpful)$/,
  /^(?:good answer|great answer|that helped|that was useful|that is useful|thumbs up|👍)$/,
  /^(?:thanks|thank you),? (?:that|it) (?:helped|was (?:right|helpful|useful))$/
];
const SPOKEN_UP = /^(?:that|it|this) (?:really |very |truly )?(?:helped|was (?:really |very |truly )?(?:helpful|useful|right|correct))$/;
const CORRECTION =/^(?:the )?(?:correct|right) (?:answer|one|price|number|figure) (?:is|was|should be)\s+(.+)$/;
const REPORT = /^(?:show|give me|read|open) (?:me )?(?:the |my )?(?:kyro )?(?:feedback|quality) report$|^how (?:is|are) (?:kyro|the answers) doing$|^what(?:'s| is) (?:been )?flagged as wrong$/;

function readFeedback(text) {
  const t = clean(text).toLowerCase().replace(/[’]/g, "'").replace(/[.!?]+$/g, "");
  if (!t || t.length > 200) return null;
  if (REPORT.test(t)) return { action: "report" };
  let m;
  for (const pattern of DOWN) if ((m = pattern.exec(t))) return { action: "rate", rating: "down", note: clean(m[1] || "") };
  // Spoken praise comes with commas and a thank-you ("that helped, thank you", "that was really helpful").
  const spoken = t.replace(/,/g, " ").replace(/\s+/g, " ").replace(/ (?:thanks|thank you)(?: so much| very much| a lot)?$/, "").trim();
  if (UP.some(pattern => pattern.test(t) || pattern.test(spoken)) || SPOKEN_UP.test(spoken)) return { action: "rate", rating: "up" };
  if ((m = CORRECTION.exec(t))) return { action: "correct", note: clean(m[1]) };
  return null;
}

// The last thing Kyro said, and what it was answering. History is oldest first.
function lastExchange(history) {
  const turns = (history || []).filter(turn => turn && String(turn.content || "").trim());
  for (let i = turns.length - 1; i >= 0; i -= 1) {
    if (turns[i].role !== "assistant") continue;
    const question = [...turns.slice(0, i)].reverse().find(turn => turn.role === "user");
    return { answer: String(turns[i].content), question: question ? String(question.content) : "" };
  }
  return null;
}

const MAX_FEEDBACK_ITEMS = 2000;

// `addFeedback` past this person's own cap (see addFeedbackUnlessFull's own comment): stops recording
// silently rather than surfacing a "your feedback is full" message nobody would find useful. Falls back
// to the plain, uncapped addFeedback for any memory implementation that doesn't provide the capped form
// (e.g. test doubles), where there is no real unbounded-growth risk to guard against in the first place.
async function addFeedback(memory, { tenantId, userId, content }) {
  if (memory.addFeedbackUnlessFull) { await memory.addFeedbackUnlessFull({ tenantId, userId, content, maxItems: MAX_FEEDBACK_ITEMS }); return; }
  await memory.addFeedback({ tenantId, userId, content });
}

// Returns the words to answer with, or null when this is not feedback. `memory` needs addFeedback / listFeedback / updateFeedback.
async function feedbackTurn({ text, memory, tenantId, userId, history = [], roles = [], now = new Date() }) {
  if (!memory?.addFeedback || !memory?.listFeedback) return null;
  const request = readFeedback(text);
  if (!request) return null;
  const day = now.toISOString().slice(0, 10);
  try {
    if (request.action === "report") {
      if (!roles.includes("admin")) return null;
      // Found live: this used to derive "N helpful, M flagged wrong" from however many rows
      // listFeedback's own cap (500) happened to return -- silently wrong counts once a tenant's 30-day
      // feedback volume passed that cap. countFeedback(), when the memory implementation provides it, is
      // a real aggregate that's exact regardless of volume; listFeedback stays only for the "Latest
      // flagged" excerpt, which never needs more than a handful of rows.
      const counts = memory.countFeedback ? await memory.countFeedback({ tenantId, sinceDays: 30 }) : null;
      const rows = await memory.listFeedback({ tenantId, sinceDays: 30, limit: 500 });
      const down = rows.filter(row => row.content.rating === "down");
      const up = counts ? counts.up : rows.length - down.length;
      const downCount = counts ? counts.down : down.length;
      if (!(up || downCount)) return "No feedback in the last 30 days.";
      const recent = down.slice(0, 5).map(row => `"${clip(row.content.question, 90) || "(no question)"}" answered "${clip(row.content.answer, 90)}"${row.content.note ? ` — they said: ${clip(row.content.note, 90)}` : ""}`);
      return `Last 30 days: ${up} helpful, ${downCount} flagged wrong.${recent.length ? ` Latest flagged: ${recent.join("; ")}.` : ""}`;
    }
    const exchange = lastExchange(history);
    if (request.action === "correct") {
      const mine = (await memory.listFeedback({ tenantId, userId, sinceDays: 1, limit: 5 })).find(row => row.content.rating === "down" && !row.content.note);
      if (mine && memory.updateFeedback) { await memory.updateFeedback({ tenantId, userId, memoryId: mine.memory_id, content: { ...mine.content, note: clip(redact(request.note), 300) } }); return "Thank you. I've added the correct answer for the team."; }
      if (!exchange) return "Thank you. Tell me which answer that was about, or ask again and say \"that was wrong\" if I get it wrong.";
      await addFeedback(memory, { tenantId, userId, content: { kind: "feedback", rating: "down", question: clip(redact(exchange.question), 300), answer: clip(redact(exchange.answer), 300), note: clip(redact(request.note), 300), day } });
      return "Thank you. I've sent that answer and the correct one to the team so it can be fixed.";
    }
    if (request.rating === "up") {
      await addFeedback(memory, { tenantId, userId, content: { kind: "feedback", rating: "up", day } });
      return "Glad that helped. I've noted it.";
    }
    if (!exchange) return "I haven't answered anything yet that I could mark as wrong.";
    await addFeedback(memory, { tenantId, userId, content: { kind: "feedback", rating: "down", question: clip(redact(exchange.question), 300), answer: clip(redact(exchange.answer), 300), note: clip(redact(request.note), 300), day } });
    return `Thank you for telling me. I've sent that answer to the team so it can be fixed (phone numbers and emails removed). ${request.note ? "I included what you said." : 'If you tell me what was wrong, say "the correct answer is …" and I will add it.'}`;
  } catch { return null; }
}

module.exports = Object.freeze({ feedbackTurn, readFeedback, lastExchange, redact });
