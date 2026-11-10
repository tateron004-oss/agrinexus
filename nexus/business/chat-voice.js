"use strict";

// THE ANSWERS A CHAT PAGE GIVES, BY VOICE OR TYPED (10 November 2026). The owner teaches the web chat in their own words and the chat page (nexus/pages/public-pages.js, answers chosen by nexus/pages/chat-answer.js) says only that:
//   "when someone asks about delivery, tell them it is free over 50 dollars"
//   "add to my chat answers: we accept mobile money"      "teach my chat page that we close for lunch at one"
//   "what are my chat answers"                            "remove the chat answer about delivery"
// Pure functions over the workspace data (client.data.editable.chatAnswers = [{ topic, answer }]). Every change asks for a yes first, and the question says plainly that a visitor may be shown the words as written.

const lower = value => String(value || "").toLowerCase();
const clean = value => String(value || "").replace(/\s+/g, " ").trim().replace(/^["'“”]+|["'“”.,;:!?]+$/g, "").trim();
const plural = (count, word) => `${count} ${count === 1 ? word : `${word}s`}`;
const say = (list, limit = 8) => {
  const shown = list.slice(0, limit); const more = list.length > limit ? list.length - limit : 0;
  if (shown.length <= 1 && !more) return shown.join("");
  return more ? `${shown.join(", ")}, and ${more} more` : `${shown.slice(0, -1).join(", ")} and ${shown[shown.length - 1]}`;
};

const MAX_CHAT_ANSWERS = 100;
const ANSWER_MAX = 600;
const CHAT_READ_INTENTS = Object.freeze(["listChatAnswers"]);
const CHAT_WRITE_INTENTS = Object.freeze(["addChatAnswer", "deleteChatAnswer"]);
// words that mean "a chat page" (the page kind), used by pages-voice.js
const CHAT_PAGE_WORDS = /\b(?:chat\s+(?:page|widget|box|window)|web\s*chat|website\s+chat|chatbot)\b/i;

const ASKED = /\bwhen\s+(?:someone|somebody|people|customers?|visitors?|anyone|a\s+customer|a\s+visitor)\s+(?:asks?|wonders?)\s+(?:about\s+|if\s+|whether\s+|for\s+)?(.+?)\s*[,;:]?\s+(?:the\s+chat(?:\s+page)?\s+(?:should\s+|can\s+)?)?(?:say|tell(?:\s+them)?|answer|reply|respond)\s*(?:with|that|:)?\s*(.+)$/i;
const ADD_TO = /\b(?:add|put|save)\s+(?:this\s+)?(?:to|in|into)\s+(?:my|our|the)\s+chat\s+(?:answers?|page)\s*[:,-]?\s*(.+)$/i;
const ADD_X_TO = /\b(?:add|put|save)\s+(.+?)\s+(?:to|in|into)\s+(?:my|our|the)\s+chat\s+answers?\s*$/i;
const TEACH = /\bteach\s+(?:my|our|the)\s+chat(?:\s+page)?\s+(?:that\s+)?(.+)$/i;

function chatAnswerIn(text) {
  const t = String(text || "").replace(/\s+/g, " ").trim();
  let m = ASKED.exec(t);
  if (m) return { topic: clean(m[1]).slice(0, 80), answer: clean(m[2]) };
  m = ADD_TO.exec(t) || ADD_X_TO.exec(t) || TEACH.exec(t);
  return m ? { topic: "", answer: clean(m[1]) } : null;
}
const sentence = value => { const t = String(value || "").trim(); const out = t.charAt(0).toUpperCase() + t.slice(1); return /[.!?]$/.test(out) ? out : `${out}.`; };

function classifyChat(command = "") {
  const text = String(command || "").replace(/\s+/g, " ").trim();
  if (!text || text.length > 900) return null;
  const asks = /\?|^(?:(?:hey|ok|okay|please)\s+)*(?:(?:kyro|nexus)[,.]?\s+)?(?:what|which|who|how|do|does|did|are|is|any|show|tell|list|give|read)\b/i.test(text);
  if (!asks && /\b(?:remove|delete|forget|take out)\b/i.test(text) && /\bchat\s+answers?\b/i.test(text)) return "deleteChatAnswer";
  if (asks && /\bchat\s+answers?\b/i.test(text)) return "listChatAnswers";
  if (!asks && /\b(?:chat|asks?|wonders?)\b/i.test(text) && chatAnswerIn(text)) return "addChatAnswer";
  return null;
}

function readChat(intent, { editable, workspace }) {
  const name = `"${workspace}"`;
  if (intent !== "listChatAnswers") return null;
  const list = editable.chatAnswers || [];
  if (!list.length) return `${name} has no chat answers yet. Say, for example, "when someone asks about delivery, tell them it is free over 50 dollars" or "add to my chat answers: we accept mobile money".`;
  return `${name} has ${plural(list.length, "chat answer")}: ${say(list.map(row => (row.topic ? `${row.topic}: ${row.answer.replace(/[.]$/, "")}` : row.answer.replace(/[.]$/, ""))), 10)}.`;
}

function planChatWrite(intent, { command, editable, workspace }) {
  const name = `"${workspace}"`;
  const text = String(command || "");
  const list = editable.chatAnswers || [];
  if (intent === "addChatAnswer") {
    const parsed = chatAnswerIn(text);
    if (!parsed || !parsed.answer) return { response: `What should the chat say? For example: "when someone asks about delivery, tell them it is free over 50 dollars".`, missingInformation: ["answer"] };
    if (parsed.answer.length > ANSWER_MAX) return { response: `That answer is too long for the chat. Keep it under ${ANSWER_MAX} characters.`, info: true };
    if (list.length >= MAX_CHAT_ANSWERS) return { response: `${name} already holds ${MAX_CHAT_ANSWERS} chat answers. Remove one first.`, info: true };
    const answer = sentence(parsed.answer);
    if (list.some(row => lower(row.answer) === lower(answer) && lower(row.topic) === lower(parsed.topic))) return { response: "The chat already has that answer.", info: true };
    const hasChatPage = (editable.pages || []).some(item => item.kind === "chat" && item.status === "on");
    return {
      prompt: `I will add this to the chat answers in ${name}${parsed.topic ? `, for questions about ${parsed.topic}` : ""}: "${answer}" A visitor to a chat page may be shown it word for word, so it should be something you are happy to make public. Should I go ahead?`,
      apply: current => ({ ...current, chatAnswers: [...(current.chatAnswers || []), { topic: parsed.topic, answer }].slice(0, MAX_CHAT_ANSWERS) }),
      done: `Added to the chat answers${parsed.topic ? ` (${parsed.topic})` : ""}. ${list.length === 0 ? "That is your first one." : `You now have ${list.length + 1}.`}${hasChatPage ? "" : ' Say "create a chat page called Ask Us" to give customers a link.'}`
    };
  }
  if (intent === "deleteChatAnswer") {
    if (!list.length) return { response: `${name} has no chat answers.`, info: true };
    const wanted = lower(text).replace(/\b(?:remove|delete|forget|take out|the|my|our|chat|answers?|about|for|on)\b/g, " ").replace(/\s+/g, " ").trim();
    const hit = wanted ? list.filter(row => lower(row.topic).includes(wanted) || (wanted.length > 2 && lower(row.answer).includes(wanted))) : [];
    if (hit.length !== 1) return { response: hit.length ? `More than one chat answer fits. Be more specific: ${say(hit.map(row => row.topic || row.answer), 5)}.` : `Which chat answer? You have ${say(list.map(row => row.topic || row.answer), 6)}.`, missingInformation: ["chat answer"] };
    const row = hit[0];
    return {
      prompt: `I will remove this chat answer${row.topic ? ` about ${row.topic}` : ""}: "${row.answer}" Should I go ahead?`,
      apply: current => ({ ...current, chatAnswers: (current.chatAnswers || []).filter(item => !(item.topic === row.topic && item.answer === row.answer)) }),
      done: "Removed that chat answer."
    };
  }
  return null;
}

module.exports = Object.freeze({ classifyChat, readChat, planChatWrite, chatAnswerIn, CHAT_PAGE_WORDS, CHAT_READ_INTENTS, CHAT_WRITE_INTENTS, MAX_CHAT_ANSWERS, ANSWER_MAX });
