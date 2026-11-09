"use strict";

// A SALES PIPELINE, TAGS AND A HISTORY FOR EACH CONTACT, by voice (9 November 2026: the owner asked that Kyro do what an all-in-one small-business platform does; the audit found the "stage" of a customer was one
// free-text word, with no board, no deals, no tags and no notes). The business workspace (client.data.editable) now carries:
//   pipelineStages  the person's own stages, in order (blank means the usual six: New, Contacted, Quoted, Booked, Won, Lost)
//   deals           one row per deal: who it is with, what it is, what it is worth, which stage it is in, when it was opened / last moved / closed
//   contactNotes    the history of a person: notes and calls the owner said, and what Kyro saw happen (a deal opened, a deal moved)
//   leads[].tags    a short list of words ("VIP, wholesale"), kept as one comma-separated text so the saved row keeps its flat shape
//
// Like crm-voice.js these are pure functions over the workspace data, so they are tested without a database; voice-dispatch.js supplies the client and the write bridge, and asks for a yes before anything is saved.
//   classifyPipeline(command) -> an intent name or null (narrow: only phrasings that are plainly about deals, the pipeline, tags or a contact's notes)
//   readPipeline(intent, ctx) -> a sentence      planPipelineWrite(intent, ctx) -> { response } to ask or refuse, or { prompt, apply, done }

const crmVoice = require("./crm-voice.js");
const { describeDay } = require("../personal/dates.js");

const DEFAULT_STAGES = Object.freeze(["New", "Contacted", "Quoted", "Booked", "Won", "Lost"]);
const MAX_STAGES = 10;
const MAX_DEALS = 400;
const MAX_NOTES = 2000;
const MAX_TAGS = 10;

const PIPELINE_READ_INTENTS = Object.freeze(["pipelineBoard", "pipelineStage", "pipelineValue", "listByTag", "contactHistory"]);
const PIPELINE_WRITE_INTENTS = Object.freeze(["addDeal", "moveDeal", "setStages", "addStage", "removeStage", "tagContact", "untagContact", "addNote"]);

const DEAL = String.raw`(?:deals?|opportunit(?:y|ies))`;
const isWon = name => /\b(?:won|sold|closed won)\b/i.test(String(name || ""));
const isLost = name => /\b(?:lost|declined|closed lost)\b/i.test(String(name || ""));
const isOpen = name => !isWon(name) && !isLost(name);
const titleCase = text => String(text || "").trim().replace(/\s+/g, " ").replace(/\b[a-z]/g, letter => letter.toUpperCase());
const cleanName = text => String(text || "").replace(/[\s.,;:!?]+$/g, "").replace(/^[\s.,;:!?"']+/g, "").replace(/\s+/g, " ").trim();
const plural = (count, word) => `${count} ${word}${count === 1 ? "" : "s"}`;
const say = (list, limit = 8) => {
  const shown = list.slice(0, limit); const more = list.length > limit ? list.length - limit : 0;
  if (shown.length <= 1 && !more) return shown.join("");
  return more ? `${shown.join(", ")}, and ${more} more` : `${shown.slice(0, -1).join(", ")} and ${shown[shown.length - 1]}`;
};
// items that themselves contain commas (a deal line, a note) are separated by semicolons, so they are not run together when read aloud
const sayItems = (list, limit = 8) => {
  const shown = list.slice(0, limit); const more = list.length > limit ? list.length - limit : 0;
  if (shown.length <= 1 && !more) return shown.join("");
  return more ? `${shown.join("; ")}; and ${more} more` : `${shown.slice(0, -1).join("; ")}; and ${shown[shown.length - 1]}`;
};

// the stages in order: the person's own, or the usual six
function stagesOf(editable) {
  const own = (Array.isArray(editable?.pipelineStages) ? editable.pipelineStages : []).map(row => cleanName(row?.name)).filter(Boolean);
  return own.length ? own : [...DEFAULT_STAGES];
}

// "Won" and "Lost" may be said in other words ("sold", "closed won", "declined"); the stage the person means, as it is spelled in their own list. -> the stage name or null
function stageNamed(stages, words) {
  const said = ` ${String(words || "").toLowerCase().replace(/[^a-z0-9' -]+/g, " ").replace(/\s+/g, " ").trim()} `;
  let best = null;
  for (const stage of stages) {
    const needle = ` ${stage.toLowerCase().replace(/[^a-z0-9' -]+/g, " ").replace(/\s+/g, " ").trim()} `;
    if (needle.trim() && said.includes(needle) && (!best || stage.length > best.length)) best = stage;
  }
  if (best) return best;
  if (/\b(?:won|win|closed won|sold)\b/.test(said)) return stages.find(isWon) || null;
  if (/\b(?:lost|lose|closed lost|declined)\b/.test(said)) return stages.find(isLost) || null;
  return null;
}

// ---- reading what a sentence is asking ----
function classifyPipeline(command = "") {
  const text = String(command || "").trim();
  if (!text || text.length > 400) return null;
  if (/^\s*(?:please\s+)?(?:hey\s+)?(?:kyro\s+)?remind\b/i.test(text)) return null;
  if (/\b(?:how\s+(?:do|can|to|should|would|does)|why|should|what is a|what's a|explain|teach|tell me how)\b[^.?!]{0,40}\b(?:pipeline|deals?)\b/i.test(text) && !/\b(?:my|our)\b/i.test(text)) return null;
  const deal = new RegExp(`\\b${DEAL}\\b`, "i");
  // stages of the pipeline
  if (/\b(?:set|change|update|make|use)\b[^.?!]{0,30}\b(?:pipeline|deal)\s+stages?\b[^.?!]{0,12}\b(?:to|as|be)\b/i.test(text) || /\bmy\s+(?:pipeline|deal)\s+stages?\s+(?:are|is|will be)\b/i.test(text)) return "setStages";
  if (/\b(?:add|create|make)\s+(?:a\s+|another\s+)?(?:new\s+)?(?:pipeline\s+)?stage\b[^.?!]{0,15}\b(?:called|named)\b/i.test(text)) return "addStage";
  if (/\b(?:remove|delete|drop|take away)\b[^.?!]{0,15}\bstage\b/i.test(text)) return "removeStage";
  // deals
  if (/\b(?:we|i)\s+(?:won|lost|closed)\b[^.?!]{0,50}\b(?:deal|opportunity|sale)\b/i.test(text) || (/\b(?:move|moved|change|switch|put|advance|mark|update|set)\b/i.test(text) && deal.test(text))
    || (deal.test(text) && /\b(?:is now|is won|was won|is lost|was lost|has been won|has been lost|has moved)\b/i.test(text))) return "moveDeal";
  if (/\b(?:add|create|start|open|log|record)\b[^.?!]{0,25}\b(?:deal|opportunity)\b/i.test(text) || /^\s*(?:please\s+)?(?:a\s+)?new\s+(?:deal|opportunity)\b/i.test(text)) return "addDeal";
  // tags and notes
  if (/\buntag\b/i.test(text) || /\b(?:remove|delete|take off|clear|drop)\b[^.?!]{0,20}\b(?:tag|label)\b/i.test(text)) return "untagContact";
  if (/\btag\s+\S[^.?!]*\b(?:as|with)\s+\S/i.test(text) || /\b(?:add|put|give)\s+(?:the\s+|a\s+)?(?:tag|label)\s+\S[^.?!]*\b(?:to|on|for)\s+\S/i.test(text)) return "tagContact";
  // (the target must be a NAME, written with a capital: "add a note to my shopping list" and "a note about maize prices" are the personal notes')
  const noteTarget = (text.match(/\b(?:add|write|make|leave|save|put|log)\s+(?:a\s+|another\s+)?(?:new\s+)?(?:note|call(?:\s+note)?)\s+(?:to|on|about|for|with)\s+(\S+)/i) || text.match(/^\s*(?:please\s+)?note\s+(?:on|about|for)\s+(\S+)/i) || [])[1];
  if (noteTarget && /^\p{Lu}/u.test(noteTarget)) return "addNote";
  // reads
  if (/^\s*(?:please\s+)?(?:who|which|show|list|what)\b[^.?!]{0,40}\b(?:tagged|(?:with|has|have)\s+(?:the\s+)?tag)\b/i.test(text)) return "listByTag";
  if (/\b(?:history|timeline|notes?)\b[^.?!]{0,12}\b(?:for|on|of|about|with)\s+\S/i.test(text) && /^\s*(?:please\s+)?(?:what|show|read|list|give|tell|any)\b/i.test(text)
    || /\b(?:what\s+(?:happened|is going on)\s+with|what(?:'s| is)\s+[^.?!]{1,40}?(?:'s|’s)\s+(?:history|timeline|notes)|show\s+[^.?!]{1,40}?(?:'s|’s)\s+(?:history|notes|timeline))\b/i.test(text)) return "contactHistory";
  if (/\b(?:how much|what(?:'s| is| are))\b[^.?!]{0,30}\b(?:in\s+(?:my|the|our)\s+pipeline|(?:my|our|open)\s+deals?\s+(?:worth|total)|pipeline\s+(?:value|total))\b/i.test(text) || /\bpipeline\s+(?:value|total)\b/i.test(text)) return "pipelineValue";
  if (/^\s*(?:please\s+)?(?:which|what|show|list|who)\b[^.?!]{0,40}\b(?:in|at)\s+(?:the\s+)?(?:\w+\s+)?stage\b/i.test(text) || /\b(?:which|what)\s+deals?\s+(?:are|is)\s+(?:in|at)\s+\S/i.test(text) || /\bdeals?\s+(?:in|at)\s+(?:the\s+)?\S+(?:\s+stage)?\s*[.?!]?\s*$/i.test(text) && /^\s*(?:please\s+)?(?:show|list|what|which)\b/i.test(text)) return "pipelineStage";
  if (/\b(?:pipeline|sales funnel|kanban)\b/i.test(text) && /\b(?:show|open|read|list|what|how|see|check|give)\b/i.test(text)) return "pipelineBoard";
  if (deal.test(text) && /^\s*(?:please\s+)?(?:show|list|read|what|how many|which|do i have|have i got|give|tell|any)\b/i.test(text) && /\b(?:my|our|the|all|open|any|how many|do i have|have i got)\b/i.test(text)) return "pipelineBoard";
  return null;
}

// ---- the details said in a sentence ----
const CURRENCY_WORDS = [[/\b(?:dollars?|usd|bucks)\b|\$/i, "USD"], [/\b(?:shillings?|ksh|kes|kshs)\b/i, "KES"], [/\b(?:naira|ngn)\b|₦/i, "NGN"], [/\b(?:pounds?|gbp)\b|£/i, "GBP"], [/\b(?:euros?|eur)\b|€/i, "EUR"]];
function parseMoney(text, fallbackCurrency = "USD") {
  const source = String(text || "");
  const match = source.match(/(?:[$€£₦]\s*)?(\d{1,3}(?:,\d{3})+|\d+)(?:\.(\d{1,2}))?\s*(k\b|thousand\b)?/i);
  if (!match) return null;
  let value = Number(`${match[1].replace(/,/g, "")}${match[2] ? `.${match[2]}` : ""}`);
  if (match[3]) value *= 1000;
  if (!Number.isFinite(value) || value < 0 || value > 1e9) return null;
  const currency = (CURRENCY_WORDS.find(([pattern]) => pattern.test(source)) || [])[1] || fallbackCurrency;
  return { value, currency, matched: match[0], index: match.index };
}
const workspaceCurrency = editable => String((editable?.transactions || []).find(row => row?.currency)?.currency || "USD").toUpperCase();
const money = (currency, value) => `${currency} ${Number(value).toLocaleString("en-US", { maximumFractionDigits: 2 })}`;

// the person a sentence names: a saved contact (whole or one-word name), else a name the person says in a deal
const nameFromDeal = text => {
  const m = String(text || "").match(/\b(?:deal|opportunity)\s+(?:for|with)\s+([^,.;:]+?)(?=\s*(?:,|;|:|\bfor\b|\babout\b|\bworth\b|\bof\b|\bat\b|\bvalued\b|\bto\b|$))/i)
    || String(text || "").match(/\b(?:for|with)\s+([A-Z][\p{L}'’-]+(?:\s+[A-Z][\p{L}'’-]+){0,2})/u);
  return m ? cleanName(m[1]) : "";
};
const knownPeople = editable => [...new Set([...(editable.leads || []).map(row => row.name), ...(editable.deals || []).map(row => row.contact)].filter(Boolean))];
// ("Grace’s deal": the possessive is dropped, or the name is never found)
const withoutPossessive = text => String(text || "").replace(/(['’])s\b/gi, "");
const matchIn = (people, text) => crmVoice.matchLead(people, withoutPossessive(text));
function matchPerson(editable, command) {
  const people = knownPeople(editable).map(name => ({ name, contact: "" }));
  return matchIn(people, command) || null;
}
// a person named in a sentence that is not in the workspace ("Peter Mwangi’s deal"): a capitalised name before "’s deal" or a "deal"
const namedStranger = text => { const m = String(text || "").match(/\b([A-Z][\p{L}-]+(?:\s+[A-Z][\p{L}-]+){0,2})(?:['’]s)?\s+(?:deal|opportunity)\b/u); return m ? m[1] : ""; };
const leadOf = (editable, name) => (editable.leads || []).find(row => String(row.name || "").toLowerCase() === String(name || "").toLowerCase()) || null;
const newId = (editable, today) => { const used = new Set((editable.deals || []).map(row => row.id)); let n = (editable.deals || []).length + 1; let id; do { id = `D${today.replace(/-/g, "").slice(2)}-${n}`; n += 1; } while (used.has(id)); return id; };

const withNote = (editable, contact, kind, text, today) => {
  const notes = [...(editable.contactNotes || []), { contact, at: today, kind, text: String(text).slice(0, 1000) }];
  return notes.length > MAX_NOTES ? notes.slice(notes.length - MAX_NOTES) : notes;
};
const tagsOf = lead => String(lead?.tags || "").split(",").map(tag => tag.trim()).filter(Boolean);

// ---- reads ----
function readPipeline(intent, { command, editable, workspace, today }) {
  const name = `"${workspace}"`;
  const deals = editable.deals || [];
  const stages = stagesOf(editable);
  const owner = new Map();
  if (intent === "pipelineBoard" || intent === "pipelineValue" || intent === "pipelineStage") {
    if (!deals.length) return `${name} has no deals yet. Say, for example, "add a deal for Grace Otieno, wedding cake, 400 dollars" to start your pipeline.`;
  }
  const sums = list => { const totals = {}; for (const deal of list) totals[deal.currency || "USD"] = Math.round(((totals[deal.currency || "USD"] || 0) + Number(deal.value || 0)) * 100) / 100; return Object.entries(totals).filter(([, v]) => v > 0).map(([c, v]) => money(c, v)); };
  const stageNames = [...stages, ...[...new Set(deals.map(deal => deal.stage).filter(stage => stage && !stages.includes(stage)))]];
  if (intent === "pipelineBoard") {
    const parts = stageNames.map(stage => { const here = deals.filter(deal => deal.stage === stage); return here.length ? `${stage} ${here.length}${sums(here).length ? ` (${sums(here).join(" and ")})` : ""}` : ""; }).filter(Boolean);
    const open = deals.filter(deal => isOpen(deal.stage));
    return `${name} has ${plural(deals.length, "deal")}: ${parts.join(", ")}.${open.length && sums(open).length ? ` ${sums(open).join(" and ")} is still open.` : ""}`;
  }
  if (intent === "pipelineValue") {
    const open = deals.filter(deal => isOpen(deal.stage));
    const won = deals.filter(deal => isWon(deal.stage));
    if (!open.length) return `No deals are open in ${name}.${won.length && sums(won).length ? ` ${sums(won).join(" and ")} has been won.` : ""}`;
    return `${plural(open.length, "open deal")} in ${name}${sums(open).length ? `, worth ${sums(open).join(" and ")}` : ""}.${won.length && sums(won).length ? ` ${sums(won).join(" and ")} has been won.` : ""}`;
  }
  if (intent === "pipelineStage") {
    const stage = stageNamed(stageNames, command);
    if (!stage) return `Which stage? Your stages are ${stages.join(", ")}.`;
    const here = deals.filter(deal => deal.stage === stage);
    if (!here.length) return `No deals are in ${stage}.`;
    return `${plural(here.length, "deal")} in ${stage}: ${sayItems(here.map(deal => `${deal.contact || "no name"}, ${deal.title || "no title"}${Number(deal.value) ? `, ${money(deal.currency || "USD", deal.value)}` : ""}`), 8)}.`;
  }
  if (intent === "listByTag") {
    const tag = cleanName((String(command || "").match(/\b(?:tagged|tag)\s+(?:as\s+|with\s+)?["']?([^"'?.!]+?)["']?\s*[?.!]*$/i) || [])[1] || "");
    if (!tag) return "Which tag? For example, who is tagged VIP.";
    const people = (editable.leads || []).filter(lead => tagsOf(lead).some(item => item.toLowerCase() === tag.toLowerCase()));
    if (!people.length) return `Nobody in ${name} is tagged ${tag}. Say, for example, tag Grace as ${tag}.`;
    return `${plural(people.length, "person")} tagged ${tag}: ${say(people.map(lead => lead.name), 10)}.`;
  }
  if (intent === "contactHistory") {
    const match = matchPerson(editable, command);
    if (!match || !match.lead) return match && match.ambiguous ? `Which one: ${say(match.ambiguous.map(item => item.name), 6)}? Say the whole name.` : `I could not find that person in ${name}. Say the name as it is saved.`;
    const person = match.lead.name;
    const lead = leadOf(editable, person);
    const bits = [];
    if (lead) {
      bits.push(`${person} is a ${String(lead.type || "customer").toLowerCase()}`);
      if (tagsOf(lead).length) bits.push(`tagged ${tagsOf(lead).join(", ")}`);
      if (/^\d{4}-\d{2}-\d{2}$/.test(String(lead.followUpDate || ""))) bits.push(`follow-up ${describeDay(lead.followUpDate, today)}`);
    } else bits.push(person);
    const theirDeals = deals.filter(deal => String(deal.contact || "").toLowerCase() === person.toLowerCase());
    const notes = (editable.contactNotes || []).filter(row => String(row.contact || "").toLowerCase() === person.toLowerCase()).slice(-5).reverse();
    const sent = (editable.campaignLog || []).filter(row => String(row.customer || "").toLowerCase() === person.toLowerCase() && /^sent$/i.test(row.status || "sent")).slice(-2).reverse();
    const out = [`${bits.join(", ")}.`];
    if (theirDeals.length) out.push(`${plural(theirDeals.length, "deal")}: ${sayItems(theirDeals.map(deal => `${deal.title || "no title"} is ${deal.stage}${Number(deal.value) ? `, ${money(deal.currency || "USD", deal.value)}` : ""}`), 4)}.`);
    if (notes.length) out.push(`Latest ${notes.length === 1 ? "entry" : "entries"}: ${sayItems(notes.map(row => `${row.at ? describeDay(row.at, today) : "earlier"}, ${row.text}`), 5)}.`);
    if (sent.length) out.push(`Last message${sent.length === 1 ? "" : "s"} sent: ${sayItems(sent.map(row => `${row.campaign || "a message"}${row.at ? ` on ${String(row.at).slice(0, 10)}` : ""}`), 2)}.`);
    if (!theirDeals.length && !notes.length && !sent.length) out.push(`There is nothing in their history yet. Say, for example, add a note to ${person}: and what happened.`);
    return out.join(" ");
  }
  void owner;
  return null;
}

// ---- writes ----
function planPipelineWrite(intent, { command, editable, workspace, today }) {
  const name = `"${workspace}"`;
  const stages = stagesOf(editable);
  const deals = editable.deals || [];
  const text = String(command || "");

  if (intent === "setStages" || intent === "addStage" || intent === "removeStage") {
    if (intent === "setStages") {
      const tail = (text.match(/\b(?:to|as|be)\s+(.+)$/i) || [])[1] || "";
      const names = tail.split(/\s*(?:,|;|\band then\b|\band\b|\bthen\b)\s*/i).map(cleanName).filter(Boolean).map(titleCase);
      const unique = names.filter((stage, i) => names.findIndex(other => other.toLowerCase() === stage.toLowerCase()) === i);
      if (unique.length < 2) return { response: `Say the stages in order, for example: set my pipeline stages to New, Quoted, Won and Lost.`, missingInformation: ["stages"] };
      if (unique.length > MAX_STAGES) return { response: `A pipeline can have up to ${MAX_STAGES} stages. Say fewer.`, missingInformation: ["stages"] };
      if (unique.some(stage => stage.length > 30)) return { response: "Keep each stage name short, under 30 letters.", missingInformation: ["stages"] };
      const stranded = deals.filter(deal => !unique.some(stage => stage.toLowerCase() === String(deal.stage).toLowerCase()));
      return {
        prompt: `I will set your pipeline stages to ${unique.join(", ")} in ${name}.${stranded.length ? ` ${plural(stranded.length, "deal")} sit in a stage not on that list and will stay where they are.` : ""} Should I go ahead?`,
        apply: current => ({ ...current, pipelineStages: unique.map(stage => ({ name: stage })) }),
        done: `Your pipeline stages are now ${unique.join(", ")}.`
      };
    }
    if (intent === "addStage") {
      const stage = titleCase(cleanName((text.match(/\b(?:called|named)\s+["']?([^"'.,;!?]+)/i) || [])[1] || ""));
      if (!stage) return { response: "What should the new stage be called?", missingInformation: ["stage"] };
      if (stage.length > 30) return { response: "Keep the stage name short, under 30 letters.", missingInformation: ["stage"] };
      if (stages.some(item => item.toLowerCase() === stage.toLowerCase())) return { response: `${stage} is already a stage.`, info: true };
      if (stages.length >= MAX_STAGES) return { response: `A pipeline can have up to ${MAX_STAGES} stages.`, info: true };
      // new stages go before the closing ones (Won, Lost), so a deal still ends at the end
      const at = stages.findIndex(item => !isOpen(item));
      const next = at < 0 ? [...stages, stage] : [...stages.slice(0, at), stage, ...stages.slice(at)];
      return { prompt: `I will add a stage called ${stage}, so your stages are ${next.join(", ")}. Should I go ahead?`, apply: current => ({ ...current, pipelineStages: next.map(item => ({ name: item })) }), done: `Added the stage ${stage}. Your stages are ${next.join(", ")}.` };
    }
    const which = stageNamed(stages, text);
    if (!which) return { response: `Which stage? Your stages are ${stages.join(", ")}.`, missingInformation: ["stage"] };
    if (stages.length <= 2) return { response: "A pipeline needs at least two stages.", info: true };
    const inUse = deals.filter(deal => deal.stage === which);
    if (inUse.length) return { response: `${plural(inUse.length, "deal")} ${inUse.length === 1 ? "is" : "are"} in ${which}. Move ${inUse.length === 1 ? "it" : "them"} first, then I can remove the stage.`, info: true };
    const next = stages.filter(item => item !== which);
    return { prompt: `I will remove the stage ${which}. Your stages will be ${next.join(", ")}. Should I go ahead?`, apply: current => ({ ...current, pipelineStages: next.map(item => ({ name: item })) }), done: `Removed the stage ${which}.` };
  }

  if (intent === "addDeal") {
    if (deals.length >= MAX_DEALS) return { response: `${name} already holds ${MAX_DEALS} deals. Close some out first.`, info: true };
    const fallback = workspaceCurrency(editable);
    const amount = parseMoney(text, fallback);
    const match = matchPerson(editable, text);
    if (match && match.ambiguous) return { response: `Which one: ${say(match.ambiguous.map(item => item.name), 6)}? Say the whole name.`, missingInformation: ["name"] };
    let person = match && match.lead ? match.lead.name : titleCase(nameFromDeal(text));
    if (!person) return { response: "Who is the deal with? For example: add a deal for Grace Otieno, wedding cake, 400 dollars.", missingInformation: ["name"] };
    // what the deal is: the words after the person, without the money
    let rest = text.replace(/^.*?\b(?:deal|opportunity)\b/i, "");
    rest = rest.replace(new RegExp(String(person).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), " ");
    if (amount) rest = rest.replace(amount.matched, " ").replace(/\b(?:dollars?|usd|bucks|shillings?|ksh|kes|kshs|naira|ngn|pounds?|gbp|euros?|eur)\b/gi, " ");
    rest = rest.replace(/\b(?:for|with|about|worth|of|valued at|at|called|named|to)\b/gi, " ").replace(/[,;:]+/g, " ");
    const title = titleCase(cleanName(rest)).slice(0, 120);
    const stage = stages[0];
    const value = amount ? amount.value : 0;
    const currency = amount ? amount.currency : fallback;
    return {
      prompt: `I will add a deal for ${person}${title ? `, ${title}` : ""}${value ? `, worth ${money(currency, value)}` : ""}, at ${stage} in ${name}. Should I go ahead?`,
      apply: current => {
        const id = newId(current, today);
        const row = { id, title: title || "New deal", contact: person, value, currency, stage, openedOn: today, movedOn: today, closedOn: "", note: "" };
        return { ...current, deals: [...(current.deals || []), row], contactNotes: withNote(current, person, "deal", `Deal opened: ${row.title}${value ? `, ${money(currency, value)}` : ""} (${stage})`, today) };
      },
      done: `Added a deal for ${person}${title ? `, ${title}` : ""}${value ? `, ${money(currency, value)}` : ""}, at ${stage}.`
    };
  }

  if (intent === "moveDeal") {
    if (!deals.length) return { response: `${name} has no deals yet.`, info: true };
    let stage = stageNamed(stages, text.replace(/^.*?\b(?:to|into|in|as|now)\b(?!.*\b(?:to|into|in|as|now)\b)/i, " ")) || stageNamed(stages, text);
    // "we lost Grace's deal", "we won it"
    if (!stage && /\b(?:won|win|closed)\b/i.test(text)) stage = stages.find(isWon) || null;
    if (!stage && /\blost\b/i.test(text)) stage = stages.find(isLost) || null;
    if (!stage) return { response: `Which stage should it go to? Your stages are ${stages.join(", ")}.`, missingInformation: ["stage"] };
    const match = matchPerson(editable, text);
    let pool = deals;
    if (match && match.ambiguous) return { response: `Which one: ${say(match.ambiguous.map(item => item.name), 6)}? Say the whole name.`, missingInformation: ["name"] };
    if (match && match.lead) pool = deals.filter(deal => String(deal.contact || "").toLowerCase() === match.lead.name.toLowerCase());
    else if (namedStranger(text)) return { response: `I could not find a deal for ${namedStranger(text)}. Say the name as it is saved.`, missingInformation: ["name"] };
    else if (deals.length !== 1) return { response: `Whose deal? For example: move Grace Otieno's deal to ${stage}.`, missingInformation: ["name"] };
    if (!pool.length) return { response: `I could not find a deal for ${match.lead.name}. Say add a deal for ${match.lead.name} to open one.`, info: true };
    const lower = text.toLowerCase();
    const byTitle = pool.filter(deal => deal.title && lower.includes(String(deal.title).toLowerCase()));
    const open = (byTitle.length ? byTitle : pool).filter(deal => deal.stage !== stage);
    const candidates = open.length ? open : (byTitle.length ? byTitle : pool);
    if (candidates.length > 1) return { response: `${match && match.lead ? match.lead.name : "That person"} has ${candidates.length} deals: ${say(candidates.map(deal => deal.title || "no title"), 6)}. Which one? Say its name too.`, missingInformation: ["deal"] };
    const deal = candidates[0];
    if (deal.stage === stage) return { response: `${deal.contact}'s deal ${deal.title ? `"${deal.title}" ` : ""}is already at ${stage}.`, info: true };
    return {
      prompt: `I will move ${deal.contact}'s deal${deal.title ? ` "${deal.title}"` : ""} from ${deal.stage} to ${stage} in ${name}. Should I go ahead?`,
      apply: current => ({
        ...current,
        deals: (current.deals || []).map(row => row.id === deal.id ? { ...row, stage, movedOn: today, closedOn: isOpen(stage) ? "" : today } : row),
        contactNotes: withNote(current, deal.contact, "stage", `Deal ${deal.title ? `"${deal.title}" ` : ""}moved from ${deal.stage} to ${stage}`, today)
      }),
      done: `${deal.contact}'s deal ${deal.title ? `"${deal.title}" ` : ""}is now at ${stage}.${isWon(stage) ? " Congratulations." : ""}`
    };
  }

  if (intent === "tagContact" || intent === "untagContact") {
    const leads = editable.leads || [];
    const tagMatch = intent === "tagContact"
      ? (text.match(/\btag\s+.+?\s+(?:as|with)\s+(?:the\s+tag\s+)?["']?([^"'.,;!?]+)/i) || text.match(/\b(?:tag|label)\s+["']?([^"'.,;!?]+?)["']?\s+(?:to|on|for)\s+/i) || [])
      : (text.match(/\b(?:remove|delete|take off|clear|drop)\s+(?:the\s+)?(?:tag|label)\s+["']?([^"'.,;!?]+?)["']?\s+(?:from|off|on)\s+/i) || []);
    const tag = cleanName(tagMatch[1] || "");
    const match = matchIn(leads, text);
    if (match && match.ambiguous) return { response: `Which one: ${say(match.ambiguous.map(item => item.name), 6)}? Say the whole name.`, missingInformation: ["name"] };
    if (!match || !match.lead) return { response: leads.length ? `I could not find that person in ${name}. Your list has ${say(leads.map(item => item.name), 6)}.` : `${name} has no contacts yet. Add one first, for example: add a customer named Grace Otieno.`, missingInformation: ["name"] };
    const lead = match.lead;
    if (intent === "untagContact" && !tag) {
      // "untag Grace" with no word: say what she has
      const has = tagsOf(lead);
      return { response: has.length ? `${lead.name} is tagged ${has.join(", ")}. Say which to remove, for example: remove the tag ${has[0]} from ${lead.name}.` : `${lead.name} has no tags.`, info: !has.length, missingInformation: has.length ? ["tag"] : [] };
    }
    if (!tag) return { response: `What should I tag ${lead.name} as? For example: tag ${lead.name} as VIP.`, missingInformation: ["tag"] };
    if (tag.length > 24) return { response: "Keep a tag short, under 24 letters.", missingInformation: ["tag"] };
    const has = tagsOf(lead);
    if (intent === "tagContact") {
      if (has.some(item => item.toLowerCase() === tag.toLowerCase())) return { response: `${lead.name} is already tagged ${tag}.`, info: true };
      if (has.length >= MAX_TAGS) return { response: `${lead.name} already has ${MAX_TAGS} tags.`, info: true };
      return { prompt: `I will tag ${lead.name} as ${tag} in ${name}. Should I go ahead?`, apply: current => ({ ...current, leads: current.leads.map(row => row === lead || (row.name === lead.name && row.contact === lead.contact) ? { ...row, tags: [...has, tag].join(", ") } : row) }), done: `${lead.name} is tagged ${tag}.` };
    }
    if (!has.some(item => item.toLowerCase() === tag.toLowerCase())) return { response: `${lead.name} is not tagged ${tag}.${has.length ? ` Their tags are ${has.join(", ")}.` : ""}`, info: true };
    return { prompt: `I will remove the tag ${tag} from ${lead.name} in ${name}. Should I go ahead?`, apply: current => ({ ...current, leads: current.leads.map(row => row === lead || (row.name === lead.name && row.contact === lead.contact) ? { ...row, tags: has.filter(item => item.toLowerCase() !== tag.toLowerCase()).join(", ") } : row) }), done: `Removed the tag ${tag} from ${lead.name}.` };
  }

  if (intent === "addNote") {
    // "add a note to Grace: she wants delivery on Friday" / "log a call with Grace, she will decide next week"
    const kind = /\bcall\b/i.test((text.match(/\b(?:add|write|make|leave|save|put|log)\s+(?:a\s+|another\s+)?(?:new\s+)?(note|call(?:\s+note)?)\b/i) || [])[1] || "") ? "call" : "note";
    const split = text.match(/^(.*?\b(?:note|call(?:\s+note)?)\s+(?:to|on|about|for|with)\s+)([^:,;]+?)(?:\s*[:,;]\s*|\s+(?:saying|that|says|—|-)\s+)(.+)$/is);
    const body = split ? cleanName(split[3]) : "";
    const people = knownPeople(editable).map(personName => ({ name: personName, contact: "" }));
    const match = split ? matchIn(people, split[2]) : matchIn(people, text);
    if (match && match.ambiguous) return { response: `Which one: ${say(match.ambiguous.map(item => item.name), 6)}? Say the whole name.`, missingInformation: ["name"] };
    if (!match || !match.lead) return { response: knownPeople(editable).length ? `I could not find that person in ${name}. Your list has ${say(knownPeople(editable), 6)}.` : `${name} has no contacts yet. Add one first, for example: add a customer named Grace Otieno.`, missingInformation: ["name"] };
    if (!body) return { response: `What should the ${kind} say? For example: add a note to ${match.lead.name}: she wants delivery on Friday.`, missingInformation: ["note"] };
    const person = match.lead.name;
    return {
      prompt: `I will save this ${kind} on ${person}: "${body}". Should I go ahead?`,
      apply: current => ({ ...current, contactNotes: withNote(current, person, kind, body, today) }),
      done: `Saved the ${kind} on ${person}.`
    };
  }
  return null;
}

module.exports = Object.freeze({ classifyPipeline, readPipeline, planPipelineWrite, stagesOf, stageNamed, parseMoney, tagsOf, isOpen, isWon, isLost, DEFAULT_STAGES, PIPELINE_READ_INTENTS, PIPELINE_WRITE_INTENTS });
