"use strict";

// "Check my contract" (phase 5 of the small-business assistant team, 5 November 2026): Kyro reads a contract, lease or agreement the person pasted, uploaded or saved, and says in plain words what it says about the money, how long it
// lasts, how to end it and what to look at closely, with the sentence it found. It is a checklist found by the words of the contract, NOT legal advice, and it says so: a clause written in unusual words can be missed, and nothing here
// says a contract is safe or fair. Nothing is sent anywhere and nothing is changed; the text is read in this server only.
//
//   contractReviewRequest(text) -> { pasted } | null            (is this asking to check a contract, and is the contract in the sentence?)
//   checkContract(text) -> { words, watch, plain, missing, blanks }
//   reviewSpeech(review, { name }) -> the spoken and written answer
//   contractReviewPlan({ documents, text, tenantId, ownerId, env, deps }) -> a finished conversation plan, or null when this is not a contract check

const MAX_CHARS = 60000;
const lower = value => String(value || "").toLowerCase();

const VERB = "check|review|read|look (?:over|at|through)|go (?:over|through)|scan|analy[sz]e|explain|summari[sz]e|proofread|vet";
const NOUN = "contracts?|agreements?|leases?|nda|mou|terms(?: and conditions| of service)?|rental agreement|service agreement|proposal|quote";
const OPENER = "^\\s*(?:please\\s+)?(?:(?:hey\\s+)?(?:kyro|nexus)[,.]?\\s+)?(?:(?:can|could|would|will) you\\s+)?(?:(?:i )?(?:want|need|would like|'d like) (?:you )?to\\s+)?";
const REQUESTS = [
  new RegExp(`${OPENER}(?:${VERB})\\s+(?:over\\s+)?(?:for me\\s+)?(?:my|the|this|that|our|a|an|these)?\\s*(?:[a-z'-]+\\s+){0,3}?(?:${NOUN})\\b`, "i"),
  new RegExp(`${OPENER}(?:is|are)\\s+(?:my|this|the|that|our)\\s+(?:[a-z'-]+\\s+){0,2}?(?:${NOUN})\\s+(?:ok(?:ay)?|fair|safe|good|risky|a good deal|alright|all right)\\b`, "i"),
  new RegExp(`${OPENER}(?:what does|what do)\\s+(?:my|this|the|that|our)\\s+(?:[a-z'-]+\\s+){0,2}?(?:${NOUN})\\s+say\\b`, "i"),
  new RegExp(`${OPENER}(?:is there|are there|anything|find)\\b[^.?!]{0,30}\\b(?:risky|wrong|unfair|bad|tricky|hidden|catch|trap)s?\\b[^.?!]{0,30}\\b(?:${NOUN})\\b`, "i"),
  new RegExp(`${OPENER}(?:should i sign)\\s+(?:my|this|the|that)\\s+(?:[a-z'-]+\\s+){0,2}?(?:${NOUN})\\b`, "i")
];
// "Check this contract: <the text>": a long piece of text after the request is the contract itself
function contractReviewRequest(text) {
  const said = String(text || "").trim();
  if (!said) return null;
  // a request to MAKE a contract is not this
  if (/^\s*(?:please\s+)?(?:(?:can|could|would|will) you\s+)?(?:create|make|write|draft|generate|prepare)\b/i.test(said)) return null;
  if (!REQUESTS.some(pattern => pattern.test(said))) return null;
  const colon = said.search(/[:\n]/);
  const rest = colon >= 0 ? said.slice(colon + 1).trim() : "";
  return { pasted: rest.length >= 200 ? rest.slice(0, MAX_CHARS) : "" };
}

// ---- reading the contract ------------------------------------------------------------------------------------------------------------------------------------------------------
// A clause number ("4. Early termination. If the Client ...") is not the end of a sentence, and a heading on its own ("Early termination.") is not a clause: the numbers are kept with their clause, and a sentence of fewer than five words is dropped.
function sentencesOf(text) {
  return String(text || "").replace(/\r/g, "\n").replace(/(^|\n)[ \t]*(\d{1,2})\.[ \t]+/g, "$1$2) ").split(/(?<=[.;!?])\s+|\n{1,}/)
    .map(item => item.replace(/\s+/g, " ").trim().replace(/^\d{1,2}\)\s*/, "")).filter(item => item.length >= 12 && item.split(" ").length >= 5);
}
const shorten = (sentence, max = 230) => (sentence.length <= max ? sentence : `${sentence.slice(0, max - 1).replace(/\s+\S*$/, "")}...`);

// each check: the words that find it, why it matters, and what to do. `watch` ones are things to look at closely; the rest just say what the contract says.
const CHECKS = [
  { id: "renewal", watch: true, title: "It may renew by itself", re: /\b(?:auto(?:matic(?:ally)?)?[- ]?renew\w*|renews? (?:automatically|for (?:a |an |successive )?)|successive (?:terms?|periods?)|evergreen|continues? (?:automatically|until))\b/i,
    advice: "Find out how many days before the end you must tell them you do not want to continue, and put that date in your calendar." },
  { id: "fee-to-leave", watch: true, title: "Leaving early may cost money", re: /\b(?:early[- ]termination|termination (?:fee|charge)|cancell?ation (?:fee|charge)|liquidated damages|penalt(?:y|ies)|forfeit\w*|break (?:the )?(?:lease|contract))\b/i,
    advice: "Ask exactly how much it would cost to leave early, and whether that amount is written in the contract." },
  { id: "late-fees", watch: true, title: "Late payments cost extra", re: /\b(?:late (?:fee|charge|payment|penalty)s?|interest (?:at|of|on)|(?:\d+(?:\.\d+)?)\s?% (?:per|a|each) (?:month|year|annum|week)|collection costs|attorney'?s? fees)\b/i,
    advice: "Check how many days late counts as late, and what the extra charge is, so you can plan to pay on time." },
  { id: "non-refundable", watch: true, title: "Some money may not come back", re: /\bnon-?refundable\b|\bno refunds?\b|\bwill not be refunded\b/i,
    advice: "Ask which payments cannot be returned, and in what cases." },
  { id: "liability", watch: true, title: "You may take on the other side's risks or costs", re: /\b(?:indemnif\w+|hold harmless|unlimited liability|liable for (?:all|any)|waive\w*\s+(?:all |any )?(?:claims|rights)|release of liability|assumption of risk|at (?:your|the client's|the customer's|the tenant's) (?:own )?risk)\b/i,
    advice: "This can make you pay for things that go wrong even when it is not your fault. This is a clause to have a lawyer or legal aid office read." },
  { id: "exclusive", watch: true, title: "It may limit who else you can work with", re: /\b(?:exclusive(?:ly)?|non-?compete|not (?:to )?compete|non-?solicit\w*|sole (?:supplier|provider|vendor)|right of first (?:refusal|offer))\b/i,
    advice: "Check what it stops you from doing, for how long, and where." },
  { id: "ownership", watch: true, title: "Who owns what you make", re: /\b(?:work(?:s)?[- ]?(?:made )?for[- ]hire|assigns? (?:all |any )?(?:rights|intellectual property)|intellectual property (?:shall |will )?(?:belong|vest|be owned)|(?:owns?|owned by)\s+(?:all|any) (?:rights|work|content|materials)|ownership of (?:all )?(?:work|content|materials))\b/i,
    advice: "Check whether you keep the right to use your own work, name, designs or recipes after the contract ends." },
  { id: "disputes", watch: true, title: "How disagreements are settled", re: /\b(?:arbitrat\w+|waive\w*\s+(?:the |your )?right to (?:a )?(?:jury|sue|trial|court)|class[- ]action|mediation|venue|exclusive jurisdiction)\b/i,
    advice: "Arbitration or giving up the right to go to court can make a disagreement slow or costly. Ask where it would be held and who pays." },
  { id: "guarantee", watch: true, title: "You may be personally responsible", re: /\b(?:personal(?:ly)? guarant\w+|guarantor|jointly and severally|co-?sign\w*|personally liable|liable personally)\b/i,
    advice: "A personal guarantee means your own money or home could be used if the business cannot pay. Be sure you understand this before signing." },
  { id: "one-sided-change", watch: true, title: "They may be able to change it without you", re: /\b(?:may|can|reserves? the right to|shall have the right to)\s+(?:at any time\s+)?(?:change|modify|amend|update|revise|increase)\s+(?:these |this |the |any )?(?:terms|agreement|fees?|prices?|rates?|rent|policies)|\bat (?:its|our|their|the (?:landlord|company|provider)'s) sole discretion\b|\bwithout (?:prior )?notice\b/i,
    advice: "Ask whether they must tell you first and whether you can leave if the change is one you do not accept." },
  { id: "money", watch: false, title: "The money", re: /(?:[$£€]\s?\d|\b(?:KES|KSh|NGN|USD|EUR)\s?\d|\b\d[\d,]*(?:\.\d+)?\s?(?:dollars|shillings|naira|euros)\b|\b(?:payment|fees?|price|rent|deposit|retainer|compensation|invoice|payable)\b[^.]{0,60}\b(?:due|within|per|monthly|weekly|annually|each|every)\b|\bnet\s?\d+\b|\bwithin \d+ days\b)/i,
    advice: "" },
  { id: "length", watch: false, title: "How long it lasts", re: /\b(?:term of|initial term|effective (?:date|as of)|commenc\w+ on|begins? on|expires? (?:on|at)|for a period of|period of \d+|\d+[- ](?:year|month|week)s?(?: term| lease| contract)?)\b/i, advice: "" },
  { id: "ending", watch: false, title: "How to end it", re: /\b(?:terminat\w+|cancel\w*|notice of (?:termination|non-?renewal)|\d+\s?(?:calendar |business )?days'? (?:written |prior )?notice|written notice)\b/i, advice: "" },
  { id: "private", watch: false, title: "Keeping things private", re: /\b(?:confidential\w*|non-?disclosure|trade secrets?)\b/i, advice: "" },
  { id: "law", watch: false, title: "Which law and place", re: /\b(?:governing law|governed by the laws?|laws? of the (?:state|republic|country)|jurisdiction of)\b/i, advice: "" }
];
// what a contract should say; when the words are missing it is said plainly (the contract may say it another way)
const EXPECTED = [
  { id: "ending", say: "how either side can end it, and how much notice is needed" },
  { id: "money", say: "how much is paid and when it is due" },
  { id: "length", say: "how long it lasts" }
];

function checkContract(raw) {
  const text = String(raw || "").slice(0, MAX_CHARS);
  const sentences = sentencesOf(text);
  const words = (text.match(/\S+/g) || []).length;
  const found = [];
  for (const check of CHECKS) {
    const hits = sentences.filter(sentence => check.re.test(sentence));
    if (hits.length) found.push({ id: check.id, title: check.title, watch: check.watch, advice: check.advice, quotes: hits.slice(0, check.watch ? 2 : 2).map(hit => shorten(hit)), count: hits.length });
  }
  const has = id => found.some(item => item.id === id);
  const blanks = (text.match(/_{3,}|\[[^\]\n]{0,40}\]|\bTBD\b/g) || []).length;
  return { words, watch: found.filter(item => item.watch), plain: found.filter(item => !item.watch), missing: EXPECTED.filter(item => !has(item.id)).map(item => item.say), blanks };
}

const CAUTION = "I am not a lawyer and this is not legal advice. I looked for these things by their words, so I can miss a clause that is written another way, and I cannot tell you a contract is safe or fair.";
const HELP = "Before you sign anything important, have a lawyer, a legal aid office, or a small business advisor read it. Ask them about the items above.";
function reviewSpeech(review, { name = "your contract" } = {}) {
  if (!review.words || review.words < 40) return `${name} is too short for me to check (${review.words || 0} words). Paste or upload the whole contract and ask again.`;
  const lines = [`I read ${name}, about ${review.words.toLocaleString("en-US")} words. ${CAUTION}`];
  if (review.watch.length) {
    lines.push("", `Look at these closely (${review.watch.length}):`);
    review.watch.forEach((item, index) => lines.push(`${index + 1}. ${item.title}. It says: "${item.quotes[0]}" ${item.advice}`));
  } else lines.push("", "I did not find any of the clauses I usually look at closely (renewing by itself, fees for leaving or paying late, taking on risks, limits on who you can work with, who owns your work, giving up court, personal guarantees, changes without you).");
  if (review.plain.length) {
    lines.push("", "What it says about the basics:");
    review.plain.forEach(item => lines.push(`- ${item.title}: "${item.quotes[0]}"`));
  }
  if (review.missing.length) lines.push("", `I did not find words about ${review.missing.join("; ")}. The contract may say it another way, so ask.`);
  if (review.blanks) lines.push("", `There ${review.blanks === 1 ? "is 1 blank" : `are ${review.blanks} blanks`} (___, [ ] or TBD) still to be filled in. Do not sign until each one is filled in.`);
  lines.push("", HELP);
  return lines.join("\n");
}

// ---- finding the text ---------------------------------------------------------------------------------------------------------------------------------------------------------------
async function uploadedText({ env, ownerId, deps = {} }) {
  const uploads = deps.uploads || require("../../server/uploads.js");
  const officeText = deps.officeText || require("../../server/officeText.js");
  const fs = deps.fs || require("node:fs");
  const dir = uploads.uploadDir(env);
  const mine = (uploads.listUploadsForUser(dir, ownerId) || []).filter(meta => meta && meta.fileId && String(meta.uploadedBy || "") === String(ownerId || ""))
    .filter(meta => /pdf|wordprocessing|msword|text\/plain/i.test(String(meta.mimeType || "")) || /\.(?:docx?|pdf|txt)$/i.test(String(meta.originalFilename || "")))
    .sort((a, b) => String(b.uploadedAt || "").localeCompare(String(a.uploadedAt || "")));
  const meta = mine[0];
  if (!meta) return null;
  const filePath = uploads.resolveUploadedFilePath(dir, meta.fileId);
  if (!filePath) return null;
  const buffer = fs.readFileSync(filePath);
  const mime = String(meta.mimeType || "");
  let text = "";
  if (mime === "application/pdf" || /\.pdf$/i.test(meta.originalFilename || "")) {
    const { PDFParse } = deps.pdfParse || require("pdf-parse");
    const parser = new PDFParse({ data: buffer });
    try { text = String((await parser.getText())?.text || ""); } finally { await parser.destroy().catch(() => {}); }
  } else if (/wordprocessing|msword/i.test(mime) || /\.docx?$/i.test(meta.originalFilename || "")) {
    const kind = /\.doc$/i.test(meta.originalFilename || "") && !/openxml/i.test(mime) ? "doc" : "docx";
    const read = officeText.readOfficeFile(buffer, kind);
    text = read && read.ok ? String(read.text || "") : "";
  } else text = buffer.toString("utf8");
  return { text: text.trim(), name: `"${meta.originalFilename || "your uploaded file"}"` };
}

async function contractReviewPlan({ documents, text, tenantId, ownerId, env = process.env, deps = {} }) {
  const request = contractReviewRequest(text);
  if (!request) return null;
  const goal = String(text || "").trim();
  const say = response => ({ goal, application: "conversation", riskTier: "low", clarification: null, steps: [], response, sourceRequired: false });
  const NEEDS = 'Paste the contract here after your request, or upload it with the Upload button (Word, PDF or text), or save it as a document, and then say "check my contract".';
  if (request.pasted) return say(reviewSpeech(checkContract(request.pasted), { name: "the contract you gave me" }));
  const said = lower(goal);
  const mentionsUpload = /\b(?:upload\w*|attach\w*|file|pdf|word|docx?)\b/.test(said);
  // an uploaded file, if the person said so
  if (mentionsUpload) {
    let upload = null;
    try { upload = await uploadedText({ env, ownerId, deps }); } catch { return say("I found your uploaded file but could not read it. A scan or a photo of a page has no text I can read; a Word file, a text PDF or pasted text works."); }
    if (upload && upload.text) return say(reviewSpeech(checkContract(upload.text), { name: upload.name }));
    if (upload) return say(`I could not read any text in ${upload.name}. A scan or a photo of a page has no text I can read; a Word file, a text PDF or pasted text works.`);
    return say(`I do not see an uploaded Word, PDF or text file of yours. ${NEEDS}`);
  }
  // a saved document: the latest one that looks like a contract, else the latest saved
  let rows = [];
  try { rows = documents && typeof documents.list === "function" ? await documents.list({ tenantId, ownerId, limit: 20 }) : []; } catch { rows = []; }
  const contractLike = rows.find(row => /contract|agreement|lease|terms|nda|mou|proposal|quote/i.test(String(row.title || "")));
  const row = contractLike || null;
  if (row && typeof documents.getSource === "function") {
    const source = await documents.getSource({ tenantId, ownerId, documentId: row.document_id }).catch(() => null);
    if (source?.sourceText) return say(reviewSpeech(checkContract(source.sourceText), { name: `"${row.title}"` }));
  }
  // nothing saved that looks like one: an upload is the next best place
  let upload = null;
  try { upload = await uploadedText({ env, ownerId, deps }); } catch { upload = null; }
  if (upload && upload.text) return say(reviewSpeech(checkContract(upload.text), { name: upload.name }));
  return say(`I do not have a contract of yours to check. ${NEEDS}`);
}

module.exports = Object.freeze({ contractReviewRequest, checkContract, reviewSpeech, contractReviewPlan, CHECKS, CAUTION });
