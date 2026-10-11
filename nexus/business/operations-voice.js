"use strict";

// The running of a business or nonprofit, by voice or typed: the register of licences, insurance, certifications and other papers that expire; the inventory of products, supplies, equipment and donated goods; where
// contacts came from; and the extra things a contract or grant carries (what makes you eligible, what reports are due). Phase 3b of the business-intelligence tools asked for by the owner on 10 October 2026.
//
// Pure functions over the workspace data (client.data.editable) so they can be tested without a database; voice-dispatch.js supplies the client, the day and the write bridge.
//
//   classifyOperations(command) -> an intent name or null
//   planOperationsWrite(intent, ctx) -> { response } to ask or refuse, or { prompt, apply, done }
//   readOperations(intent, ctx) -> the spoken answer
//
// What is NOT done is said in the answers: nothing here checks that a licence or a certification is real or that an organisation is eligible for one; those come from the official pages in the checked guides. A date is
// only as good as what was said or typed, and the reminder sweep only reads dates written as year-month-day.

const { extractDay, describeDay, addDays, addMonths } = require("../personal/dates.js");
const { looseDay } = require("./finance-voice.js");

const lower = value => String(value || "").toLowerCase();
const clean = value => String(value || "").replace(/\s+/g, " ").trim().replace(/^["']+|["'.,;:!?]+$/g, "").trim();
const plural = (count, word) => `${count} ${count === 1 ? word : /y$/.test(word) ? `${word.slice(0, -1)}ies` : `${word}s`}`;
const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const isoOrNull = value => (ISO_DAY.test(String(value || "")) ? String(value) : null);
const daysUntil = (day, today) => Math.round((Date.UTC(+day.slice(0, 4), +day.slice(5, 7) - 1, +day.slice(8, 10)) - Date.UTC(+today.slice(0, 4), +today.slice(5, 7) - 1, +today.slice(8, 10))) / 86400000);
const say = list => (list.length <= 1 ? list.join("") : `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`);
const sentences = parts => parts.filter(Boolean).map((part, index) => (index ? part.charAt(0).toUpperCase() + part.slice(1) : part)).join(". ");
const COMPLIANCE_LIMIT = 200;
const INVENTORY_LIMIT = 400;
// "food boxes" and "food box" are the same words: compared with the endings taken off
const stem = value => lower(value).replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean).map(word => (word.length > 3 ? word.replace(/ies$/, "y").replace(/(?:es|s)$/, "") : word)).join(" ");
const same = (a, b) => Boolean(stem(a)) && stem(a) === stem(b);
const mentions = (haystack, needle) => Boolean(stem(needle)) && stem(haystack).includes(stem(needle));

const OPERATIONS_WRITE_INTENTS = Object.freeze(["addCompliance", "updateCompliance", "addInventory", "useInventory", "setInventory", "setReorderLevel", "setSource", "setGrantDetails"]);
const OPERATIONS_READ_INTENTS = Object.freeze(["complianceDue", "certificationReadiness", "inventoryList", "inventoryLow", "sourceBreakdown", "reportingDue"]);

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
// A day for something that expires: any day form the shared reader knows, "the 1st"/"next week" forms, and a month on its own ("March", "March 2027", "end of March") which means the last day of that month.
function expiryDay(text, today) {
  const said = String(text || "");
  const found = looseDay(said, today);
  if (found) return found.day;
  const month = MONTHS.findIndex(name => new RegExp(`\\b${name}\\b`, "i").test(said));
  if (month < 0) return "";
  const yearSaid = /\b(20\d{2})\b/.exec(said)?.[1];
  const year = Number(yearSaid || today.slice(0, 4));
  const end = new Date(Date.UTC(year, month + 1, 0)).toISOString().slice(0, 10);
  return yearSaid || end >= today ? end : new Date(Date.UTC(year + 1, month + 1, 0)).toISOString().slice(0, 10);
}

// ---- which request --------------------------------------------------------------------------------------------------------------------------------------------------------------
const QUESTION = /[?]|^(?:(?:hey|ok|okay|please)\s+)*(?:(?:kyro|nexus)[,.]?\s+)?(?:what|which|how|who|when|where|do|does|did|are|is|am|can|could|show|list|tell|give|any|check|read)\b/i;
const ADDING = /\b(?:add|record|log|enter|track|register|new|put)\b/i;
const KIND_WORDS = "licen[cs]es?|permits?|insurance|certifications?|certificates?|accreditations?|policy|policies|bylaws|filings?|annual report|board (?:minutes|records?|resolutions?|meetings?)|articles of (?:incorporation|organi[sz]ation)|(?:tax[- ]exempt|501\\(?c\\)?\\s?\\(?3\\)?) letter";
const KIND_RE = new RegExp(`\\b(${KIND_WORDS})\\b`, "i");
const INV_ITEM_WORDS = /\binventory\b/i;

function classifyOperations(command = "") {
  const text = String(command || "").replace(/\s+/g, " ").trim();
  if (!text || text.length > 320) return null;
  const asks = QUESTION.test(text);
  const hasNumber = /\d|\b(?:a|one|two|three|four|five|six|seven|eight|nine|ten|dozen|hundred)\b/i.test(text);

  // ---- reads first when asked as a question
  if (asks) {
    if (/\bcertification readiness\b|\b(?:what|which) certifications?\b|\bare we (?:ready|certified)\b|\bcertified\b.{0,30}\b(?:status|ready|readiness)\b/i.test(text) && !ADDING.test(text)) return "certificationReadiness";
    if (KIND_RE.test(text) && /\b(?:expir\w+|renew\w*|due|valid|lapse\w*|run out|coming up|soon|overdue|status)\b/i.test(text) && !/\bgrants?\b|\binvoices?\b|\bbills?\b/i.test(text)) return "complianceDue";
    if (/\bcompliance\b|\bwhat(?:'s| is) due for renewal\b|\brenewals?\b/i.test(text) && !/\bgrants?\b/i.test(text)) return "complianceDue";
    if (/\bwhere do (?:our|my) (?:donors?|customers?|volunteers?|clients?|members?|supporters?|leads?|contacts?|participants?|sponsors?)\b.{0,15}\b(?:come|coming)\b/i.test(text)
      || /\bhow did (?:we|our)\b.{0,30}\b(?:find|hear|get|reach)\b.{0,25}\b(?:donors?|customers?|volunteers?|clients?|members?|supporters?)\b/i.test(text)
      || /\b(?:which|what)\b.{0,20}\b(?:marketing|outreach|channels?|sources?|activit\w+|campaigns?)\b.{0,30}\b(?:bring|brings|brought|work|works|best|most|generat\w+|drive|drives)\b/i.test(text)) return "sourceBreakdown";
    if (/\b(?:reports?|reporting)\b.{0,25}\b(?:due|required|requirements?|owed|coming up)\b|\b(?:grants?|contracts?)\b.{0,25}\breporting\b/i.test(text)) return "reportingDue";
    // ("how much have we wasted" is about the inventory's waste count)
    if (/\bhow (?:much|many)\b.{0,25}\b(?:wasted|waste|thrown away|spoiled|spoilt)\b/i.test(text)) return "inventoryList";
    if (INV_ITEM_WORDS.test(text) || /\bwhat(?:'s| is| are) (?:running|getting) low\b/i.test(text) && /\b(?:supplies|inventory|donated)\b/i.test(text)) {
      if (/\b(?:running low|low on|low stock|reorder|restock|below|getting low|out of|short)\b/i.test(text)) return "inventoryLow";
      return "inventoryList";
    }
  }

  // ---- writes
  if (!asks || /^(?:add|record|log|set|mark|remove|use)\b/i.test(text)) {
    // inventory (the word inventory, or donated goods, so it is never mistaken for the farm and shop stock books)
    if (/\bset\b.{0,25}\b(?:reorder|re-order|restock|minimum|low[- ]stock)\b.{0,25}\b(?:level|point|amount|number|quantity)?\b.{0,20}\d/i.test(text) || /\breorder\b.{0,40}\bwhen\b.{0,25}\bdrops? to\b/i.test(text)) return "setReorderLevel";
    if ((INV_ITEM_WORDS.test(text) || /\bdonated\b/i.test(text)) && hasNumber) {
      if (/\b(?:used|use|remove|removed|take|took|taken|gave out|give out|handed out|distribut\w+|sold|wasted|waste|threw away|thrown away|spoiled|expired|lost|damaged|broke|broken)\b/i.test(text)) return "useInventory";
      if (/\b(?:set|update|change|count(?:ed)?|correct)\b.{0,30}\b(?:inventory|to)\b/i.test(text) || /\bwe (?:currently )?have\b.{0,40}\binventory\b/i.test(text) || /\binventory\b.{0,30}\b(?:is|are|=)\s*\d/i.test(text)) return "setInventory";
      if (/\b(?:add|put|received?|got|bought|purchased|stocked|donated|new)\b/i.test(text)) return "addInventory";
    }
    // the register: a licence, insurance, certification or other paper
    if (ADDING.test(text) && KIND_RE.test(text) && !/\b(?:grants?|invoices?|bills?|donat\w+|volunteer\w*|customers?|donors?)\b/i.test(text)) return "addCompliance";
    if (/^(?:we|i)?\s*(?:just\s+)?renewed\b/i.test(text) || (/\bmark\b/i.test(text) && KIND_RE.test(text) && /\b(?:applied|approved|active|expired|pending|renewed|submitted|granted|denied|lapsed)\b/i.test(text))) return "updateCompliance";
    if (/\b(?:we|i)\s+(?:were|was|got|have been)\s+(?:approved|certified|granted)\b|\bapplication\b.{0,25}\b(?:approved|denied|submitted)\b/i.test(text) && KIND_RE.test(text)) return "updateCompliance";

    // where a contact came from
    // (a named person: "Maria Chen came from the newsletter"; not "we came from Nairobi" or "the money came from a grant")
    if (/^(?!(?:We|They|He|She|It|I|The|Our|My|This|That|There)\b)[A-Z][\w'’-]+(?:\s+[A-Z][\w'’-]+){0,2}\s+(?:came|comes|found us|heard about us|learned about us|joined us|signed up)\b.{0,25}\b(?:from|through|via|on|at|by)\b/.test(text) && !/\b(?:money|donation|payment|invoice|grant)\b/i.test(text)) return "setSource";
    if (/\b(?:[Ww]e|I)\s+(?:got|found|met)\s+[A-Z][\w'’-]+(?:\s+[A-Z][\w'’-]+){0,2}\s+(?:from|through|at|via)\b/.test(text) && !/\b(?:money|donation|payment|invoice|grant)\b/i.test(text)) return "setSource";
    if (/\b(?:set|update|change|record)\b.{0,15}\b(?:source|referral source)\b.{0,15}\bof\b/i.test(text)) return "setSource";

    // what a contract or grant carries
    if (/\b(?:requires?|require|requiring)\b.{0,40}\b(?:reports?|reporting|audits?|match)\b|\b(?:reports?|reporting)\b.{0,15}\b(?:are|is)\s+due\b|\beligib\w+\s*(?:is|are|:|for|requires?)|\b(?:mark|make|set)\b.{0,40}\bas an? (?:contract|grant|loan|bid|rfp)\b/i.test(text)) return "setGrantDetails";
  }
  return null;
}

// ---- the writes ------------------------------------------------------------------------------------------------------------------------------------------------------------------
const KIND_OF = word => {
  const w = lower(word);
  if (/^licen[cs]e|^permit/.test(w)) return "license";
  if (/^insurance/.test(w)) return "insurance";
  if (/^certif|^accredit/.test(w)) return "certification";
  if (/polic/.test(w)) return "policy";
  if (/board|bylaws|articles|letter/.test(w)) return "board";
  if (/filing|annual report/.test(w)) return "filing";
  return "other";
};
const KIND_LABEL = { license: "licence", insurance: "insurance", certification: "certification", policy: "policy", board: "governance paper", filing: "filing", other: "paper" };

function complianceItem(text) {
  let body = text;
  const colon = /:\s*(.+)$/.exec(text);
  if (colon) body = colon[1];
  else body = body.replace(/^.*?\b(?:add|record|log|enter|track|register|put)\b\s+/i, "").replace(/^(?:a|an|the|our|my|new)\s+/i, "").replace(/\s+to\s+(?:the\s+)?(?:register|compliance|records?)\b.*$/i, "");
  body = body.split(/\b(?:expires?|expiring|expiry|renews?|renewing|valid\b|due\b|issued|with\s+[A-Z]|policy number|number|no\.|applied|pending|planned|approved|submitted|expired|denied|status)\b/i)[0];
  return clean(body.replace(/^(?:a|an|the|our|my)\s+/i, "").replace(/,\s*$/, ""));
}
function statusOf(text) {
  const t = lower(text);
  if (/\b(?:applied|submitted|application (?:is )?in)\b/.test(t)) return "applied";
  if (/\b(?:pending|in progress|waiting)\b/.test(t)) return "pending";
  if (/\b(?:planned|plan to|going to apply|want to get|will apply)\b/.test(t)) return "planned";
  if (/\b(?:expired|lapsed)\b/.test(t)) return "expired";
  if (/\b(?:denied|rejected)\b/.test(t)) return "denied";
  return "active";
}
function findCompliance(items, text) {
  const t = lower(text);
  const named = items.filter(item => item.item && (t.includes(lower(item.item)) || mentions(text, item.item)));
  if (named.length) { const longest = Math.max(...named.map(item => item.item.length)); const best = named.filter(item => item.item.length === longest); return best.length === 1 ? { item: best[0] } : { ambiguous: best }; }
  const kind = KIND_RE.exec(text)?.[1];
  if (kind) { const byKind = items.filter(item => KIND_OF(item.kind) === KIND_OF(kind) || item.kind === KIND_OF(kind)); if (byKind.length === 1) return { item: byKind[0] }; if (byKind.length > 1) return { ambiguous: byKind }; }
  return { none: true };
}

function parseItemQuantity(text, { drop = [] } = {}) {
  // "20 jars of candles", "5 laptops", "a dozen blankets", "30 donated blankets"
  const words = { a: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, dozen: 12 };
  let body = text;
  for (const pattern of drop) body = body.replace(pattern, " ");
  const found = /(\d[\d,]*(?:\.\d+)?|\b(?:a|one|two|three|four|five|six|seven|eight|nine|ten|dozen)\b)\s+(?:(?:more|extra|new|donated)\s+)*(?:(jars?|bags?|boxes|box|cases?|packs?|packets?|bottles?|cans?|sets?|pairs?|units?|pieces?|kg|kilos?|liters?|litres?|lbs?|pounds?|rolls?|sheets?|bundles?|crates?|cartons?|loaves|loaf|meals?)\s+of\s+)?([a-z][a-z' -]{1,40}?)(?=\s+(?:to|from|in|into|out of|of the|for|at|on|today|yesterday|last|this|that|because|as|by|after|before|and)\b|[,.]|$)/i.exec(body);
  if (!found) return null;
  const rawNumber = found[1].replace(/,/g, "");
  const quantity = Number.isFinite(Number(rawNumber)) ? Number(rawNumber) : (words[lower(rawNumber)] ?? NaN);
  const item = clean(found[3]).replace(/^(?:donated|new|more|extra)\s+/i, "");
  if (!Number.isFinite(quantity) || !item || /^(?:inventory|stock|hours?|dollars?|shillings?|people|times)$/i.test(item)) return null;
  return { quantity, unit: lower(found[2] || ""), item };
}
function findInventory(items, said) {
  const matches = items.filter(row => same(row.item, said) || mentions(row.item, said) || mentions(said, row.item));
  if (!matches.length) return { none: true };
  const exact = matches.filter(row => same(row.item, said));
  if (exact.length === 1) return { row: exact[0] };
  if (matches.length === 1) return { row: matches[0] };
  return { ambiguous: matches };
}
const kindOfInventory = (text, fallback = "product") => (/\bdonated\b|\bdonation\b/i.test(text) ? "donated" : /\bequipment\b/i.test(text) ? "equipment" : /\bsupplies\b|\bsupply\b/i.test(text) ? "supply" : fallback);

function planOperationsWrite(intent, { command, editable, workspace, today, formatMoney, normalize = value => value }) {
  const name = `"${workspace}"`;
  const text = normalize(String(command || ""));

  if (intent === "addCompliance") {
    const kindWord = KIND_RE.exec(text)?.[1] || "";
    const kind = KIND_OF(kindWord);
    let item = complianceItem(text);
    if (!item || KIND_RE.test(item) === false && item.length < 2) item = "";
    if (!item || new RegExp(`^(?:${KIND_WORDS})$`, "i").test(item)) return { response: `What is the ${KIND_LABEL[kind]} called? Say, for example, "add a licence: food handler permit, expires March 3".`, missingInformation: ["item"] };
    const expiresText = (/\b(?:expires?|expiring|expiry|renews?|renewing|valid (?:until|through|till)|due|runs out)\b(.*)$/i.exec(text) || [])[1] || "";
    const expires = expiresText ? expiryDay(expiresText, today) : "";
    const status = statusOf(text);
    const number = (/\b(?:policy number|licen[cs]e number|number|no\.|#)\s*[:#]?\s*([A-Za-z0-9-]{3,30})/i.exec(text) || [])[1] || "";
    const issuer = clean((/\b(?:with|from|issued by|through)\s+([A-Z][\w &.'-]{2,40}?)(?=[,.]|\s+(?:policy|number|expires?|expiring|renews?|valid|due)\b|$)/.exec(text) || [])[1]);
    if ((editable.compliance || []).length >= COMPLIANCE_LIMIT) return { response: `${name} already holds ${COMPLIANCE_LIMIT} papers in the register, the most one workspace keeps.`, info: true };
    const needsDate = status === "active" && !expires && ["license", "insurance", "certification"].includes(kind);
    return {
      prompt: `I can add the ${item} (${KIND_LABEL[kind]}${status !== "active" ? `, ${status}` : ""}${expires ? `, expires ${describeDay(expires, today)}` : ""}${issuer ? `, with ${issuer}` : ""}) to the register in ${name}.${needsDate ? " You did not say when it expires, so I will not be able to remind you; you can add that later." : ""} Should I go ahead?`,
      apply: current => ({ ...current, compliance: [...(current.compliance || []), { item, kind, issuer, number, expires, status, notes: "" }] }),
      done: `Added the ${item} to the register in ${name}.${expires ? " I will remind you before it expires." : ""}`
    };
  }

  if (intent === "updateCompliance") {
    const items = editable.compliance || [];
    if (!items.length) return { response: `The register in ${name} is empty. Say, for example, "add a licence: food handler permit, expires March 3".`, info: true };
    const found = findCompliance(items, text);
    if (found.ambiguous) return { response: `More than one paper matches: ${say(found.ambiguous.map(item => item.item))}. Say which one.`, missingInformation: ["item"] };
    if (found.none) return { response: `I could not tell which paper. The register has ${say(items.map(item => item.item))}. Say, for example, "renewed the ${items[0].item} until next March".`, missingInformation: ["item"] };
    const item = found.item;
    const renewed = /\brenew/i.test(text);
    const untilText = (/\b(?:until|through|till|now expires?|expires?|valid (?:until|through|till)|to)\b(.*)$/i.exec(text) || [])[1] || "";
    const expires = untilText ? expiryDay(untilText, today) : "";
    const status = renewed ? "active" : statusOf(text);
    if (renewed && !expires) return { response: `Renewed until when? Say, for example, "renewed the ${item.item} until March 2027".`, missingInformation: ["expires"] };
    return {
      prompt: `I can ${renewed ? `mark the ${item.item} renewed, expiring ${describeDay(expires, today)}` : `mark the ${item.item} as ${status}`} in ${name}. Should I go ahead?`,
      apply: current => ({ ...current, compliance: (current.compliance || []).map(row => (row.item === item.item && row.expires === item.expires ? { ...row, status, expires: expires || row.expires } : row)) }),
      done: renewed ? `Marked the ${item.item} renewed until ${describeDay(expires, today)} in ${name}.` : `Marked the ${item.item} as ${status} in ${name}.`
    };
  }

  if (intent === "addInventory" || intent === "useInventory" || intent === "setInventory") {
    // "set inventory of candles to 40" / "the inventory count for candles is 40": the item comes first and the number last
    const countFirst = intent === "setInventory" ? /\binventory\s+(?:count\s+)?(?:of|for)\s+(?:the\s+)?([a-z][a-z' -]{1,40}?)\s+(?:to|at|is|=)\s*(\d[\d,]*(?:\.\d+)?)/i.exec(text) : null;
    const parsed = countFirst ? { quantity: Number(countFirst[2].replace(/,/g, "")), unit: "", item: clean(countFirst[1]) } : parseItemQuantity(text, { drop: [/\binventory\b/ig] });
    if (!parsed) return { response: "How many, and of what? Say, for example, \"add 20 jars of candles to inventory\" or \"we used 4 bags of soil from inventory\".", missingInformation: ["item"] };
    const items = editable.inventory || [];
    const found = findInventory(items, parsed.item);
    if (found.ambiguous) return { response: `More than one item matches ${parsed.item}: ${say(found.ambiguous.map(row => row.item))}. Say which one.`, missingInformation: ["item"] };
    const existing = found.row || null;
    const label = existing?.item || parsed.item;
    const unit = existing?.unit || parsed.unit;
    if (intent === "useInventory") {
      if (!existing) return { response: `I have no ${parsed.item} in the inventory in ${name}. Say, for example, "add 20 ${parsed.item} to inventory" first.`, missingInformation: ["item"] };
      if (parsed.quantity > existing.quantity) return { response: `${name} has only ${existing.quantity} ${unit ? `${unit} of ` : ""}${label} in the inventory, so I have not taken ${parsed.quantity} out. Say the real count, for example "set inventory of ${label} to ${parsed.quantity}".`, missingInformation: ["quantity"] };
      const waste = /\b(?:wasted|waste|threw away|thrown away|spoiled|expired|lost|damaged|broke|broken)\b/i.test(text);
      const left = Math.round((existing.quantity - parsed.quantity) * 100) / 100;
      return {
        prompt: `I can take ${parsed.quantity} ${unit ? `${unit} of ` : ""}${label} out of the inventory${waste ? ", counting it as waste" : ""}, leaving ${left}, in ${name}. Should I go ahead?`,
        apply: current => ({ ...current, inventory: (current.inventory || []).map(row => (row === existing || (row.item === existing.item && row.quantity === existing.quantity) ? { ...row, quantity: left, wasted: Math.round(((Number(row.wasted) || 0) + (waste ? parsed.quantity : 0)) * 100) / 100 } : row)) }),
        done: `Took ${parsed.quantity} ${label} out of the inventory${waste ? " as waste" : ""}; ${left} left in ${name}.${existing.reorderAt && left <= existing.reorderAt ? ` That is at or below your reorder level of ${existing.reorderAt}.` : ""}`
      };
    }
    if (!existing && items.length >= INVENTORY_LIMIT) return { response: `${name} already holds ${INVENTORY_LIMIT} inventory items, the most one workspace keeps.`, info: true };
    const kind = existing ? (/\bdonated\b/i.test(text) ? "donated" : existing.kind) : kindOfInventory(text);
    const next = intent === "setInventory" ? parsed.quantity : Math.round(((existing?.quantity || 0) + parsed.quantity) * 100) / 100;
    return {
      prompt: `I can ${intent === "setInventory" ? `set the inventory of ${label} to ${parsed.quantity}` : `add ${parsed.quantity} ${unit ? `${unit} of ` : ""}${label} to the inventory${kind === "donated" ? " as donated goods" : ""}${existing ? `, making ${next}` : ""}`}${existing ? "" : `, as a new ${kind === "product" ? "" : `${kind} `}item`} in ${name}. Should I go ahead?`,
      apply: current => {
        const list = current.inventory || [];
        if (existing) return { ...current, inventory: list.map(row => (row.item === existing.item && row.quantity === existing.quantity ? { ...row, quantity: next, kind: row.kind || kind } : row)) };
        return { ...current, inventory: [...list, { item: label, kind, quantity: next, unit, reorderAt: 0, value: 0, currency: "USD", location: "", wasted: 0, notes: "" }] };
      },
      done: `${intent === "setInventory" ? "Set" : "Added to"} the inventory of ${label}: ${next} in ${name}.`
    };
  }

  if (intent === "setReorderLevel") {
    const level = Number((/\b(?:to|at|level of|below)\s+(\d[\d,]*)/i.exec(text) || /\b(\d[\d,]*)\b(?!.*\b(?:to|at)\s+\d)/.exec(text) || [])[1]?.replace(/,/g, ""));
    const itemSaid = clean((/\b(?:for|of)\s+(?:the\s+)?([a-z][a-z' -]{1,40}?)(?=\s+(?:to|at|when|is|below)\b|[,.]|$)/i.exec(text) || /\breorder\s+(?:the\s+)?([a-z][a-z' -]{1,40}?)\s+when\b/i.exec(text) || [])[1]);
    if (!Number.isFinite(level) || !itemSaid) return { response: "Which item, and at what number? Say, for example, \"set the reorder level for soil to 10\".", missingInformation: ["item"] };
    const found = findInventory(editable.inventory || [], itemSaid);
    if (found.ambiguous) return { response: `More than one item matches ${itemSaid}: ${say(found.ambiguous.map(row => row.item))}. Say which one.`, missingInformation: ["item"] };
    if (!found.row) return { response: `I have no ${itemSaid} in the inventory in ${name}. Add it first, for example "add 20 ${itemSaid} to inventory".`, missingInformation: ["item"] };
    return {
      prompt: `I can set the reorder level for ${found.row.item} to ${level} in ${name}, so I can tell you when it runs low. Should I go ahead?`,
      apply: current => ({ ...current, inventory: (current.inventory || []).map(row => (row.item === found.row.item ? { ...row, reorderAt: level } : row)) }),
      done: `Set the reorder level for ${found.row.item} to ${level} in ${name}.`
    };
  }

  if (intent === "setSource") {
    const leads = editable.leads || [];
    const who = clean((/\bsource of\s+([A-Za-z][\w'’-]*(?:\s+[A-Za-z][\w'’-]*){0,2}?)\s+(?:to|as|is)\b/i.exec(text)
      || /^([A-Z][\w'’-]+(?:\s+[A-Z][\w'’-]+){0,2})\s+(?:came|comes|found us|heard about us|learned about us|joined us|signed up)/.exec(text)
      || /\b(?:[Ww]e got|[Ww]e found|[Ww]e met)\s+([A-Z][\w'’-]+(?:\s+[A-Z][\w'’-]+){0,2})\s+(?:from|through|at|via)/.exec(text) || [])[1]);
    const source = clean((/\bsource of\s+.+?\s+(?:to|as|is)\s+(.+)$/i.exec(text) || /\b(?:came|comes|found us|heard about us|learned about us|joined us|signed up)\b.{0,25}?\b(?:from|through|via|on|at|by)\s+(?:the\s+|a\s+|our\s+)?(.+)$/i.exec(text) || /\b(?:from|through|at|via)\s+(?:the\s+|a\s+|our\s+)?(.+)$/i.exec(text) || [])[1]).replace(/^(?:the|a|an|our|my)\s+/i, "").slice(0, 80);
    if (!who) return { response: "Whose source? Say, for example, \"Maria Chen came from the newsletter\".", missingInformation: ["person"] };
    if (!source) return { response: `Where did ${who} come from, for example the newsletter, a referral, the gala or Facebook?`, missingInformation: ["source"] };
    const matches = leads.filter(lead => lower(lead.name) === lower(who) || (lower(lead.name).split(" ")[0] === lower(who).split(" ")[0] && lower(who).split(" ").length === 1));
    if (matches.length > 1) return { response: `More than one person matches ${who}: ${say(matches.map(lead => lead.name))}. Say the full name.`, missingInformation: ["person"] };
    if (!matches.length) return { response: `${who} is not on your list in ${name}. Add them first, for example "add a donor named ${who}".`, missingInformation: ["person"] };
    const lead = matches[0];
    return {
      prompt: `I can note that ${lead.name} came from ${source} in ${name}. Should I go ahead?`,
      apply: current => ({ ...current, leads: (current.leads || []).map(row => (row.name === lead.name && row.contact === lead.contact ? { ...row, source } : row)) }),
      done: `Noted that ${lead.name} came from ${source} in ${name}.`
    };
  }

  if (intent === "setGrantDetails") {
    const grants = editable.grants || [];
    if (!grants.length) return { response: `${name} has no grants or contracts tracked yet. Say, for example, "add a contract with City Parks for 20000 dollars due December 1".`, info: true };
    const t = lower(text);
    const matches = grants.filter(grant => (grant.funderName && t.includes(lower(grant.funderName))) || (grant.program && t.includes(lower(grant.program))));
    if (!matches.length) return { response: `I could not tell which grant or contract. You are tracking ${say(grants.map(grant => grant.funderName || grant.program).filter(Boolean))}. Name it, for example "the ${grants[0].funderName || grants[0].program} contract requires quarterly reports".`, missingInformation: ["funder"] };
    const longest = Math.max(...matches.map(grant => Math.max((grant.funderName || "").length, (grant.program || "").length)));
    const best = matches.filter(grant => Math.max((grant.funderName || "").length, (grant.program || "").length) === longest);
    if (best.length > 1) return { response: `More than one grant matches: ${say(best.map(grant => grant.funderName || grant.program))}. Say which one.`, missingInformation: ["funder"] };
    const grant = best[0];
    const label = grant.funderName || grant.program;
    const changes = {};
    const kind = (/\bas an? (contract|grant|loan|bid|rfp)\b/i.exec(text) || /\bthe\s+.+?\s+(contract|loan|rfp|bid)\b/i.exec(text) || [])[1];
    if (kind) changes.kind = lower(kind) === "rfp" || lower(kind) === "bid" ? "contract" : lower(kind);
    const eligibility = clean((/\beligib\w+\s*(?:is|are|:|for|requires?)?\s*(.+)$/i.exec(text) || [])[1]);
    if (eligibility) changes.eligibility = eligibility.slice(0, 200);
    const requires = clean((/\b(?:requires?|requiring)\s+(.+?)(?=,\s*(?:first|next|due)\b|\s+(?:first|next)\s+due\b|\s+due\b|$)/i.exec(text) || [])[1]);
    if (requires) changes.requirements = requires.slice(0, 200);
    const dueText = (/\b(?:first |next )?(?:report|reports|reporting)\b.{0,12}\bdue\b(.*)$/i.exec(text) || /\b(?:first|next)\s+due\b(.*)$/i.exec(text) || /,\s*(?:first|next)?\s*due\b(.*)$/i.exec(text) || [])[1];
    if (dueText) { const due = expiryDay(dueText, today); if (due) changes.reportDue = due; }
    if (!Object.keys(changes).length) return { response: `What should I note about ${label}? Say, for example, "the ${label} contract requires quarterly reports, first due January 15" or "${label} eligibility: nonprofits in Cook County".`, missingInformation: ["details"] };
    const parts = [];
    if (changes.kind) parts.push(`a ${changes.kind}`);
    if (changes.eligibility) parts.push(`eligibility: ${changes.eligibility}`);
    if (changes.requirements) parts.push(`it requires ${changes.requirements}`);
    if (changes.reportDue) parts.push(`next report due ${describeDay(changes.reportDue, today)}`);
    return {
      prompt: `I can note for ${label} in ${name}: ${parts.join("; ")}. Should I go ahead?`,
      apply: current => ({ ...current, grants: (current.grants || []).map(row => (row.funderName === grant.funderName && row.program === grant.program && row.amount === grant.amount ? { ...row, ...changes } : row)) }),
      done: `Noted the details for ${label} in ${name}.${changes.reportDue ? " I will remind you before the report is due." : ""}`
    };
  }
  return null;
}

// ---- the reads -------------------------------------------------------------------------------------------------------------------------------------------------------------------
function complianceDue({ command, editable, workspace, today }) {
  const name = `"${workspace}"`;
  const items = editable.compliance || [];
  if (!items.length) return `The register in ${name} is empty. Add your licences, insurance, certifications and board papers, for example "add a licence: food handler permit, expires March 3", and I will remind you before they expire.`;
  const asked = items.filter(item => item.item && lower(command).includes(lower(item.item)));
  const kindAsked = KIND_RE.exec(command)?.[1];
  const pool = asked.length ? asked : kindAsked ? items.filter(item => item.kind === KIND_OF(kindAsked)) : items;
  const shown = pool.length ? pool : items;
  const dated = shown.map(item => ({ item, day: isoOrNull(item.expires) })).sort((a, b) => (a.day || "9999").localeCompare(b.day || "9999"));
  const describe = entry => `${entry.item.item} (${KIND_LABEL[entry.item.kind] || entry.item.kind}${entry.item.status && entry.item.status !== "active" ? `, ${entry.item.status}` : ""})${entry.day ? `, ${daysUntil(entry.day, today) < 0 ? "expired" : "expires"} ${describeDay(entry.day, today)}` : ", no expiry date"}`;
  const expired = dated.filter(entry => entry.day && daysUntil(entry.day, today) < 0);
  const soon = dated.filter(entry => entry.day && daysUntil(entry.day, today) >= 0 && daysUntil(entry.day, today) <= 60);
  const later = dated.filter(entry => entry.day && daysUntil(entry.day, today) > 60);
  const undated = dated.filter(entry => !entry.day);
  const parts = [];
  if (expired.length) parts.push(`already expired: ${say(expired.map(describe))}`);
  if (soon.length) parts.push(`expiring in the next 60 days: ${say(soon.map(describe))}`);
  if (!expired.length && !soon.length) parts.push(`nothing expires in the next 60 days${later.length ? `; the next is ${describe(later[0])}` : ""}`);
  else if (later.length) parts.push(`${plural(later.length, "more")} later, the next ${describe(later[0])}`);
  if (undated.length) parts.push(`${plural(undated.length, "paper")} with no expiry date, so no reminder: ${say(undated.slice(0, 5).map(entry => entry.item.item))}`);
  return `Register in ${name}: ${sentences(parts)}. I can only remind you about dates written in the register; I do not check that a licence is valid.`;
}

function certificationReadiness({ editable, workspace, today }) {
  const name = `"${workspace}"`;
  const certs = (editable.compliance || []).filter(item => item.kind === "certification");
  const guide = "Which certifications you qualify for and what each one needs comes from the official pages (SBA, for example 8(a), women-owned, HUBZone, veteran-owned); ask me \"how do I get certified as a minority-owned business\" for the checked guide. I do not check your eligibility.";
  if (!certs.length) return `No certifications are tracked in ${name}. Add one you hold or are pursuing, for example "add a certification: WOSB, planned" or "add a certification: 8(a), applied". ${guide}`;
  const by = status => certs.filter(item => lower(item.status) === status);
  const describe = item => `${item.item}${isoOrNull(item.expires) ? ` (expires ${describeDay(item.expires, today)})` : ""}`;
  const parts = [];
  if (by("active").length) parts.push(`held: ${say(by("active").map(describe))}`);
  if (by("applied").length || by("pending").length) parts.push(`applied or pending: ${say([...by("applied"), ...by("pending")].map(describe))}`);
  if (by("planned").length) parts.push(`planned, not yet applied: ${say(by("planned").map(describe))}`);
  if (by("expired").length) parts.push(`expired: ${say(by("expired").map(describe))}`);
  if (by("denied").length) parts.push(`denied: ${say(by("denied").map(describe))}`);
  return `Certifications in ${name}: ${sentences(parts)}. ${guide}`;
}

function inventoryList({ command, editable, workspace, formatMoney }) {
  const name = `"${workspace}"`;
  const items = editable.inventory || [];
  if (!items.length) return `The inventory in ${name} is empty. Say, for example, "add 20 jars of candles to inventory" or "received 30 donated blankets".`;
  const named = items.filter(row => lower(command).includes(lower(row.item)) || mentions(command, row.item));
  if (named.length && /\bhow (?:many|much)\b/i.test(command)) return `In the inventory of ${name}: ${say(named.map(row => `${row.quantity} ${row.unit ? `${row.unit} of ` : ""}${row.item}`))}.`;
  if (/\bwaste|wasted|thrown away|spoil/i.test(command)) {
    const wasted = items.filter(row => Number(row.wasted) > 0);
    return wasted.length ? `Counted as waste in ${name}: ${say(wasted.map(row => `${row.wasted} ${row.item}`))}.` : `No waste is recorded in ${name}. When something is thrown away or spoils, say, for example, "we threw away 3 loaves from inventory".`;
  }
  if (/\b(?:worth|value|valu\w+)\b/i.test(command)) {
    const totals = {};
    for (const row of items) if (Number(row.value) > 0) { const currency = String(row.currency || "USD").toUpperCase(); totals[currency] = Math.round(((totals[currency] || 0) + row.value * row.quantity) * 100) / 100; }
    return Object.keys(totals).length ? `The inventory in ${name} is worth ${Object.entries(totals).map(([code, total]) => formatMoney(code, total)).join(" and ")}, counting only items that have a value per unit recorded (${items.filter(row => Number(row.value) > 0).length} of ${items.length}).` : `No item in ${name} has a value per unit recorded, so I cannot say what the inventory is worth. Set it in the Inventory section of the workspace page.`;
  }
  const byKind = {};
  for (const row of items) (byKind[row.kind || "product"] ||= []).push(row);
  const lines = Object.entries(byKind).map(([kind, rows]) => `${kind === "donated" ? "donated goods" : kind === "supply" ? "supplies" : kind === "equipment" ? "equipment" : "products"}: ${say(rows.slice(0, 8).map(row => `${row.quantity} ${row.item}`))}${rows.length > 8 ? ` and ${rows.length - 8} more` : ""}`);
  return `Inventory in ${name}, ${plural(items.length, "item")}: ${lines.join("; ")}.`;
}

function inventoryLow({ editable, workspace }) {
  const name = `"${workspace}"`;
  const items = editable.inventory || [];
  if (!items.length) return `The inventory in ${name} is empty, so nothing is running low.`;
  const withLevel = items.filter(row => Number(row.reorderAt) > 0);
  const low = withLevel.filter(row => row.quantity <= row.reorderAt);
  const out = items.filter(row => row.quantity <= 0);
  const parts = [];
  if (low.length) parts.push(`at or below the reorder level: ${say(low.map(row => `${row.item} (${row.quantity}, reorder at ${row.reorderAt})`))}`);
  if (out.length) parts.push(`out of stock: ${say(out.map(row => row.item))}`);
  const noLevel = items.length - withLevel.length;
  if (!parts.length) parts.push(`nothing is at or below its reorder level`);
  const levelNote = noLevel ? ` ${plural(noLevel, "item")} ${noLevel === 1 ? "has" : "have"} no reorder level set, so I cannot tell when ${noLevel === 1 ? "it runs" : "they run"} low; say, for example, "set the reorder level for soil to 10".` : "";
  return `Inventory in ${name}: ${sentences(parts)}.${levelNote}`;
}

function sourceBreakdown({ command, editable, workspace, formatMoney }) {
  const name = `"${workspace}"`;
  const leads = editable.leads || [];
  const kinds = [...new Set([...lower(command).matchAll(/\b(donor|customer|client|volunteer|member|supporter|sponsor|participant)s?\b/g)].map(match => match[1]))];
  const types = kinds.flatMap(kind => (kind === "supporter" ? ["donor", "sponsor"] : kind === "customer" || kind === "client" ? ["customer", "client"] : [kind]));
  const pool = types.length ? leads.filter(lead => types.includes(lower(lead.type))) : leads;
  const label = kinds.length ? `${kinds.map(kind => `${kind}s`).join(" and ")}` : "contacts";
  if (!pool.length) return `${name} has no ${label} yet.`;
  const bySource = {};
  let unknown = 0;
  for (const lead of pool) { const key = lower(clean(lead.source)); if (!key) unknown += 1; else bySource[key] = (bySource[key] || 0) + 1; }
  const ranked = Object.entries(bySource).sort((a, b) => b[1] - a[1]);
  if (!ranked.length) return `None of the ${pool.length} ${label} in ${name} has a source recorded. Say, for example, "Maria Chen came from the newsletter", and I will show you where your ${label} come from.`;
  const lines = ranked.slice(0, 6).map(([source, count]) => {
    const spent = (editable.transactions || []).filter(row => row.type === "expense" && lower(`${row.category} ${row.description}`).includes(source)).reduce((sum, row) => sum + (Number(row.amount) || 0), 0);
    const currency = (editable.transactions || []).find(row => row.type === "expense" && lower(`${row.category} ${row.description}`).includes(source))?.currency || "USD";
    return `${source} ${count}${spent > 0 ? ` (${formatMoney(currency, spent)} spent logged under that name, about ${formatMoney(currency, Math.round((spent / count) * 100) / 100)} each)` : ""}`;
  });
  return `Where your ${label} in ${name} came from: ${say(lines)}${ranked.length > 6 ? ` and ${ranked.length - 6} more sources` : ""}. ${unknown ? `${plural(unknown, "contact")} ${unknown === 1 ? "has" : "have"} no source recorded. ` : ""}The cost shown is only money you logged with the source's name in the description or category.`;
}

function reportingDue({ editable, workspace, today }) {
  const name = `"${workspace}"`;
  const grants = (editable.grants || []).filter(grant => grant.requirements || isoOrNull(grant.reportDue) || lower(grant.kind) === "contract");
  if (!grants.length) return `No grant or contract in ${name} has reporting requirements or a report date recorded. Say, for example, "the City Parks contract requires quarterly reports, first due January 15".`;
  const dated = grants.map(grant => ({ grant, day: isoOrNull(grant.reportDue) })).sort((a, b) => (a.day || "9999").localeCompare(b.day || "9999"));
  const describe = entry => `${entry.grant.funderName || entry.grant.program}${entry.grant.requirements ? ` (${entry.grant.requirements})` : ""}${entry.day ? `, ${daysUntil(entry.day, today) < 0 ? "was due" : "due"} ${describeDay(entry.day, today)}` : ", no date set"}`;
  const late = dated.filter(entry => entry.day && daysUntil(entry.day, today) < 0);
  const soon = dated.filter(entry => entry.day && daysUntil(entry.day, today) >= 0 && daysUntil(entry.day, today) <= 60);
  const rest = dated.filter(entry => !late.includes(entry) && !soon.includes(entry));
  const parts = [];
  if (late.length) parts.push(`overdue: ${say(late.map(describe))}`);
  if (soon.length) parts.push(`due in the next 60 days: ${say(soon.map(describe))}`);
  if (rest.length) parts.push(`later or with no date: ${say(rest.map(describe))}`);
  return `Reports for grants and contracts in ${name}: ${sentences(parts)}.`;
}

const READERS = Object.freeze({ complianceDue, certificationReadiness, inventoryList, inventoryLow, sourceBreakdown, reportingDue });
function readOperations(intent, context) {
  const read = READERS[intent];
  return read ? read(context) : null;
}

module.exports = Object.freeze({ classifyOperations, planOperationsWrite, readOperations, OPERATIONS_READ_INTENTS, OPERATIONS_WRITE_INTENTS, expiryDay });
