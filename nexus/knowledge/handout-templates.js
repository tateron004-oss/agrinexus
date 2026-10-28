"use strict";

// A flyer, poster, newsletter, brochure, handout or invitation made from what the person said: "Make me a flyer for my bake sale on Saturday", "Create a newsletter for the church", "Write an invitation to my daughter's party on Saturday".
// It is a short FIXED layout with the person's own words filled in (what it is for, and the day if they gave it) and a [bracket] left for every detail they did not give. Kyro does not invent a place, a time, a price or a claim.
// Found on the live site on 27 October 2026: when the AI model was asked to write a flyer for a person with no business workspace it saved a description of a flyer ("create a simple, editable flyer with placeholders...") as the flyer itself.
//
// handoutRequest(text) -> { kind, subject, when } | null
// handoutTemplate({ kind, subject, when }) -> { title, content }

const KINDS = Object.freeze({ flyer: "Flyer", poster: "Poster", newsletter: "Newsletter", brochure: "Brochure", handout: "Handout", invitation: "Invitation", email: "Promotional Email" });

const LEAD = "^\\s*(?:please\\s+)?(?:(?:hey\\s+)?(?:kyro|nexus)[,.]?\\s+)?(?:(?:can|could|would|will) you\\s+)?(?:(?:i )?(?:want|need|would like|'d like) (?:you )?to\\s+)?";
const REQUEST = new RegExp(`${LEAD}(?:create|make|write|draft|prepare|generate|build|put together|compose|type up)\\s+(?:me\\s+)?(?:an?|the|my|some)?\\s*(?:[a-z'-]+\\s+){0,2}?(flyer|poster|newsletter|brochure|handout|invitation|(?:promotional|promo|marketing|sales|advertising)\\s+e-?mail)\\b(.*)$`, "i");
// "for my bake sale on Saturday" / "to my daughter's party on Saturday at 3": the subject, then the day or time if one is named (kept in the person's own words)
const SUBJECT = /^\s*(?:for|to|about)\s+(?:(?:my|our|the|a|an)\s+)?(.+?)(?:\s+((?:on|at|this|next|tomorrow|from)\b.*))?\s*$/i;
const BLANK = (what) => `[${what}]`;

function clean(text) { return String(text || "").replace(/[.!?]+$/g, "").replace(/\s+/g, " ").trim().slice(0, 80); }
function capitalise(text) { return text.replace(/(^|\s)([a-z])/g, (_, space, letter) => space + letter.toUpperCase()); }

function handoutRequest(text) {
  const match = REQUEST.exec(String(text || "").trim());
  if (!match) return null;
  const kind = /e-?mail/i.test(match[1]) ? "email" : match[1].toLowerCase();
  const rest = String(match[2] || "").replace(/\s+as\s+(?:an?\s+)?(?:pdf|word document|word|docx|markdown|md|text file|txt)\s*[.!?]*$/i, "");
  const parts = SUBJECT.exec(rest);
  let subject = parts ? clean(parts[1]) : "";
  const when = parts && parts[2] ? clean(parts[2]).replace(/^on\s+/i, "") : "";
  // "make me a flyer" has no subject: "me" is who it is for, not what it is about
  if (/^(?:me|us)$/i.test(subject)) subject = "";
  return { kind, subject, when };
}

function handoutTemplate({ kind, subject = "", when = "" }) {
  const label = KINDS[kind] || "Handout";
  const name = subject ? capitalise(subject) : "";
  const title = name ? `${name} ${label}` : label;
  const lines = [];
  const note = "Made by Kyro from what you said. Fill in each [bracket] and delete this line. Nothing here was looked up or added by Kyro.";
  if (kind === "email") {
    lines.push(`Subject: ${BLANK("a short, clear subject line")}`, "", `Hello ${BLANK("name")},`, "",
      BLANK(subject ? `what you are offering at the ${subject}, and why they will want it` : "what you are offering, and why they will want it"), "",
      `When: ${when || BLANK("day and time, or until when")}`, `Where: ${BLANK("the place, or the web page")}`, `Price: ${BLANK("the price, or free")}`, `To order or reply: ${BLANK("phone, email or address")}`, "",
      "Thank you,", BLANK("your name"));
  } else if (kind === "invitation") {
    lines.push("YOU ARE INVITED", "", name || BLANK("what the event is"), "",
      `When: ${when || BLANK("day and time")}`, `Where: ${BLANK("the place")}`, `Please tell us by ${BLANK("date")} if you can come: ${BLANK("name and phone number")}`);
  } else if (kind === "newsletter") {
    lines.push((name || BLANK("who this is from")).toUpperCase(), `${BLANK("month and year")}`, "",
      "Welcome", BLANK("a few sentences to greet your readers"), "",
      "News", BLANK("what has happened since the last issue"), "",
      "Dates to remember", BLANK("dates, times and places"), "",
      "How to reach us", BLANK("name, phone, email or address"));
  } else if (kind === "brochure") {
    lines.push((name || BLANK("who or what this is about")).toUpperCase(), "",
      "About us", BLANK("who you are, in a few sentences"), "",
      "What we offer", BLANK("the main things you do or sell"), "",
      "How to reach us", BLANK("name, phone, email or address, and hours"));
  } else if (kind === "handout") {
    lines.push((name || BLANK("the topic")).toUpperCase(), "",
      "The main points", `1. ${BLANK("first point")}`, `2. ${BLANK("second point")}`, `3. ${BLANK("third point")}`, "",
      "Where to get more help", BLANK("a name, phone number or web page"));
  } else {
    lines.push((name || BLANK("what this is for")).toUpperCase(), "",
      `When: ${when || BLANK("day and time")}`, `Where: ${BLANK("the place")}`, `What: ${BLANK("what is happening, or what is for sale")}`, `Cost: ${BLANK("the price, or free")}`, "",
      `Questions? ${BLANK("name and phone number")}`);
  }
  lines.push("", note);
  return { title, content: lines.join("\n") };
}

module.exports = Object.freeze({ KINDS, handoutRequest, handoutTemplate });
