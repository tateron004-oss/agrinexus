"use strict";

// The people side of a nonprofit or community business, by voice or typed: volunteer hours, skills and availability; participants and their consent; the services each received; the results measured; program goals; and an
// impact report put together from those records. Before this, "log 3 volunteer hours for Joy" and "how many people did our program serve, and what results did we measure?" could only be answered with "I do not keep that yet".
//
// Pure functions over the workspace data (client.data.editable) so they can be tested without a database; voice-dispatch.js supplies the client, the day and the write bridge.
//
//   classifyPrograms(command) -> an intent name or null
//   planProgramWrite(intent, ctx) -> { response } to ask or refuse, or { prompt, apply, done }
//   readPrograms(intent, ctx) -> the spoken answer
//
// Privacy by design. A service is recorded only for a person whose consent to keep their records has been recorded ("record consent from Maria Lopez"); every read gives counts and totals, and names only when the leader asks
// for the list of who still needs to give consent. Nothing here is a clinical or case-management record: it is a count of who was helped, how, and what was measured. Who may open the workspace is decided by the account and its
// managers, as for every other record; there are no separate tiers inside it yet, and the answers say so.

const { extractDay, describeDay } = require("../personal/dates.js");
const { looseDay } = require("./finance-voice.js");

const lower = value => String(value || "").toLowerCase();
const clean = value => String(value || "").replace(/\s+/g, " ").trim().replace(/^["']+|["'.,;:!?]+$/g, "").trim();
const plural = (count, word) => `${count} ${count === 1 ? word : word === "person" ? "people" : /y$/.test(word) ? `${word.slice(0, -1)}ies` : `${word}s`}`;
// "food boxes" and "food box" are the same words: compared with the endings taken off
const stem = value => lower(value).replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean).map(word => (word.length > 3 ? word.replace(/(?:ies)$/, "y").replace(/(?:es|s)$/, "") : word)).join(" ");
const mentions = (haystack, needle) => { const h = stem(haystack); const n = stem(needle); return Boolean(n) && h.includes(n); };
const round1 = value => Math.round(value * 10) / 10;
const title = value => clean(value).replace(/\b([a-z])/g, (m, c) => c.toUpperCase());
const HOURS_LIMIT = 400;
const SERVICES_LIMIT = 400;
const OUTCOMES_LIMIT = 200;
const GOALS_LIMIT = 100;

const PROGRAM_WRITE_INTENTS = Object.freeze(["logVolunteerHours", "setVolunteerInfo", "recordConsent", "logService", "addProgramGoal", "logOutcome"]);
const PROGRAM_READ_INTENTS = Object.freeze(["peopleServed", "volunteerSummary", "listParticipants", "goalProgress", "impactReport"]);

// ---- which request -------------------------------------------------------------------------------------------------------------------------------------------------------------
const QUESTION = /[?]|^(?:(?:hey|ok|okay|please)\s+)*(?:(?:kyro|nexus)[,.]?\s+)?(?:what|which|how|who|do|does|did|are|is|am|can|could|show|list|tell|give|any|check|read|generate|make|get)\b/i;
const NOT_A_SERVICE = /\b(?:donat\w*|payments?|invoices?|pledg\w*|gifts?|grants?|bills?|money|dollars?|shillings?|\$|loan|salary|wages?)\b/i;
const NAME_AFTER_FOR = "([A-Za-z][\\w'’-]*(?:\\s+[A-Za-z][\\w'’-]*){0,2}?)";

function classifyPrograms(command = "") {
  const text = String(command || "").replace(/\s+/g, " ").trim();
  if (!text || text.length > 300) return null;
  const asks = QUESTION.test(text);

  // volunteer hours: "log 3 volunteer hours for Joy", "Joy volunteered 3 hours" (a write); "how many volunteer hours do we have" (a read)
  const hoursPhrase = /\b\d+(?:\.\d+)?\s*(?:volunteer\s+)?(?:hours?|hrs?)\b|\b(?:one|two|three|four|five|six|seven|eight|nine|ten)\s+(?:volunteer\s+)?hours?\b/i.test(text);
  if (hoursPhrase && /\bvolunteer/i.test(text) && /\b(?:log|record|add|enter|track|put|give|credit|volunteered)\b/i.test(text) && !/^(?:what|how|who|show|tell)\b/i.test(text)) return "logVolunteerHours";
  if (hoursPhrase && /^[A-Z][\w'’-]+(?:\s+[A-Z][\w'’-]+)?\s+volunteered\b/.test(text)) return "logVolunteerHours";
  // "log volunteer hours for Joy" with no number is still this request; it asks how many
  if (!hoursPhrase && !asks && /\bvolunteer hours?\b/i.test(text) && /\b(?:log|record|add|enter|track)\b/i.test(text)) return "logVolunteerHours";
  if (/\bvolunteer hours?\b/i.test(text) && asks) return "volunteerSummary";
  if (/\bwho\b.{0,25}\bvolunteer(?:ed)?\b.{0,20}\b(?:most|least|more|this|last)\b/i.test(text) || /\bhow many volunteers\b/i.test(text)) return "volunteerSummary";

  // skills and availability: "Joy's skills are cooking and driving", "Joy is available on weekends"
  if (!asks && (/\bskills?\b.{0,12}\b(?:are|include|is|to)\b/i.test(text) && /(?:^|\s)[A-Za-z][\w'’-]*(?:'s|’s)?\s+skills?\b|\bset\b.{0,25}\bskills?\b/i.test(text)
    || /^[A-Za-z][\w'’-]*(?:\s+[A-Za-z][\w'’-]*)?\s+(?:is|are)\s+available\b/i.test(text))) return "setVolunteerInfo";

  // consent to keep a person's records
  if (/\bconsent/i.test(text)) {
    if (/\bwho\b.{0,30}\b(?:has not|hasn't|have not|haven't|has no|without|missing|needs?)\b.{0,20}\bconsent/i.test(text) || /\bconsent\b.{0,20}\b(?:status|list|missing|outstanding)\b/i.test(text)) return "listParticipants";
    if (/\b(?:record|log|add|note|mark|set|gave|given|has given|have given|declined|refused|withdrew|revoked|did not give|does not give)\b/i.test(text) && !asks) return "recordConsent";
    if (asks && /\b(?:list|show|which|who)\b/i.test(text)) return "listParticipants";
  }
  if (/\b(?:list|show|which)\b.{0,12}\bparticipants\b|\bhow many participants\b/i.test(text)) return "listParticipants";

  // services delivered to a person: "log a food box service for Maria Lopez", "Maria Lopez received a food box", "we served Maria Lopez a hot meal"
  if (!asks && !NOT_A_SERVICE.test(text)) {
    if (/\b(?:log|record|add)\b[^.?!]{0,12}\bservices?\b[^.?!]*\bfor\s+[A-Za-z]/i.test(text)) return "logService";
    if (/^[A-Z][\w'’-]+(?:\s+[A-Z][\w'’-]+){0,2}\s+(?:received|attended|completed|got)\s+(?:a|an|the|one|some|our)?\s*\S/.test(text)) return "logService";
    if (/^(?:[Ww]e|I)\s+(?:served|helped|gave)\s+[A-Z][\w'’-]+/.test(text)) return "logService";
  }

  // goals and outcomes
  if (/\b(?:set|add|create|make)\b[^.?!]{0,15}\bgoals?\b/i.test(text) && /\d/.test(text) && !asks) return "addProgramGoal";
  if (/\b(?:record|log|add)\b[^.?!]{0,15}\boutcomes?\b/i.test(text) && /\d/.test(text)) return "logOutcome";
  if (asks && /\bgoals?\b/i.test(text)) return "goalProgress";

  // the impact report, and how many people were served
  if (/\b(?:impact|outcomes?|results?)\s+(?:report|summary)\b|\bour impact\b|\bhow much impact\b/i.test(text)) return "impactReport";
  if (/\bhow many\b.{0,30}\b(?:people|participants|clients|families|children|kids|youth|students|households|individuals|members|beneficiaries|patients|neighbou?rs|residents|seniors|veterans|women|men)\b.{0,50}\b(?:serv\w+|reach\w*|help\w*|attend\w*|enrol\w*|support\w*|benefit\w*|assist\w*|touch\w*)/i.test(text)
    || (/\b(?:what|which)\b.{0,20}\b(?:results|outcomes|impact)\b.{0,30}\b(?:measure\w*|achiev\w*|report\w*|have we|did we)/i.test(text))) return "peopleServed";
  return null;
}

// ---- reading what was said ---------------------------------------------------------------------------------------------------------------------------------------------
const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
// "by December" means the end of December: this year's, or next year's if December has passed
function monthEnd(text, today) {
  const index = MONTHS.findIndex(month => new RegExp(`\\b${month}\\b`, "i").test(text));
  if (index < 0) return "";
  const year = Number(today.slice(0, 4));
  const candidate = new Date(Date.UTC(year, index + 1, 0)).toISOString().slice(0, 10);
  return candidate >= today ? candidate : new Date(Date.UTC(year + 1, index + 1, 0)).toISOString().slice(0, 10);
}
function periodOf(text, today) {
  const t = lower(text);
  const [year, month] = today.split("-");
  if (/\btoday\b/.test(t)) return { label: "today", from: today, to: today };
  if (/\blast month\b/.test(t)) { const prev = new Date(Date.UTC(+year, +month - 2, 1)); const end = new Date(Date.UTC(+year, +month - 1, 0)); return { label: "last month", from: prev.toISOString().slice(0, 10), to: end.toISOString().slice(0, 10) }; }
  if (/\bthis month\b/.test(t)) return { label: "this month", from: `${year}-${month}-01`, to: today };
  if (/\blast year\b/.test(t)) return { label: "last year", from: `${+year - 1}-01-01`, to: `${+year - 1}-12-31` };
  if (/\bthis year\b/.test(t)) return { label: "this year", from: `${year}-01-01`, to: today };
  return { label: "so far", from: "", to: "" };
}
const inPeriod = (date, period) => (!period.from || (date && date >= period.from)) && (!period.to || (date && date <= period.to));
const labelIn = period => (period.label === "so far" ? "so far" : period.label);

function findPerson(leads, said, kinds = null) {
  const wanted = lower(clean(said)).replace(/['’]s$/, "");
  if (!wanted) return { none: true };
  const pool = leads.filter(lead => !kinds || kinds.includes(lower(lead.type)));
  const exact = pool.filter(lead => lower(lead.name) === wanted);
  if (exact.length === 1) return { lead: exact[0] };
  const loose = (exact.length ? exact : pool.filter(lead => lower(lead.name).split(" ")[0] === wanted.split(" ")[0] && (wanted.split(" ").length === 1 || lower(lead.name).startsWith(wanted))));
  if (loose.length === 1) return { lead: loose[0] };
  if (loose.length > 1) return { ambiguous: loose };
  return { none: true };
}
const PARTICIPANT_TYPES = ["client", "participant", "member", "congregant", "beneficiary", "customer"];

function nameFor(text) {
  const forms = [
    new RegExp(`\\b(?:for|by|from)\\s+(?!the\\b|a\\b|an\\b|our\\b|my\\b)${NAME_AFTER_FOR}(?=\\s+(?:on|at|during|for|today|yesterday|last|this|helping|working|with|in)\\b|[,.:]|$)`, "i"),
    /^([A-Z][\w'’-]+(?:\s+[A-Z][\w'’-]+)?)\s+volunteered\b/
  ];
  for (const form of forms) { const found = form.exec(text); if (found) return title(found[1]); }
  return "";
}
function programIn(text) {
  const found = /\b(?:in|at|for|under|of)\s+the\s+([a-z][a-z' -]{2,40}?)\s+(?:program(?:me)?|project)\b/i.exec(text);
  return found ? lower(clean(found[1])) : "";
}

// ---- the writes --------------------------------------------------------------------------------------------------------------------------------------------------------------------
function planProgramWrite(intent, { command, editable, workspace, today, normalize = value => value }) {
  const name = `"${workspace}"`;
  const text = normalize(String(command || ""));
  const leads = editable.leads || [];

  if (intent === "logVolunteerHours") {
    const hours = Number((/(\d+(?:\.\d+)?)\s*(?:volunteer\s+)?(?:hours?|hrs?)\b/i.exec(text) || [])[1]);
    const who = nameFor(text);
    if (!(hours > 0)) return { response: "How many hours? Say, for example, \"log 3 volunteer hours for Joy\".", missingInformation: ["hours"] };
    if (hours > 24) return { response: `${hours} hours is more than a day. Log each day on its own, for example 8 hours for each day.`, missingInformation: ["hours"] };
    if (!who) return { response: "Who volunteered? Say, for example, \"log 3 volunteer hours for Joy\".", missingInformation: ["volunteer"] };
    const found = findPerson(leads, who);
    if (found.ambiguous) return { response: `More than one person on your list matches ${who}: ${found.ambiguous.map(item => item.name).join(", ")}. Say the full name.`, missingInformation: ["volunteer"] };
    const person = found.lead?.name || who;
    const when = extractDay(text, today)?.day || today;
    const rest = text.replace(/(\d+(?:\.\d+)?)\s*(?:volunteer\s+)?(?:hours?|hrs?)\b/i, " ").replace(new RegExp(`\\b(?:for|by|from)\\s+${who.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i"), " ");
    const activity = clean((/\b(?:on|at|during|helping with|working on|doing|with)\s+(?:the\s+)?([a-z][a-z' -]{2,40}?)(?=\s+(?:today|yesterday|last|this)\b|[,.]|$)/i.exec(rest) || [])[1]);
    if ((editable.volunteerHours || []).length >= HOURS_LIMIT) return { response: `${name} already holds ${HOURS_LIMIT} volunteer entries, the most one workspace keeps, so I have not added this one.`, info: true };
    const note = found.lead ? "" : ` ${person} is not on your list of contacts yet; I will log the hours anyway.`;
    return {
      prompt: `I can log ${hours} volunteer ${hours === 1 ? "hour" : "hours"} for ${person}${activity ? ` on ${activity}` : ""}, ${describeDay(when, today)}, in ${name}.${note} Should I go ahead?`,
      apply: current => ({ ...current, volunteerHours: [...(current.volunteerHours || []), { volunteer: person, hours, date: when, activity, program: programIn(text) }] }),
      done: `Logged ${hours} volunteer ${hours === 1 ? "hour" : "hours"} for ${person}${activity ? ` on ${activity}` : ""} in ${name}.`
    };
  }

  if (intent === "setVolunteerInfo") {
    const skills = /\b([A-Za-z][\w'’-]*(?:\s+[A-Za-z][\w'’-]*)?)(?:'s|’s)?\s+skills?\s+(?:are|include|is)\s+(.+)$/i.exec(text) || /\bset\s+([A-Za-z][\w'’-]*(?:\s+[A-Za-z][\w'’-]*)?)(?:'s|’s)\s+skills?\s+to\s+(.+)$/i.exec(text);
    const avail = /^([A-Za-z][\w'’-]*(?:\s+[A-Za-z][\w'’-]*)?)\s+(?:is|are)\s+available\s+(.+)$/i.exec(text);
    const hit = skills || avail;
    if (!hit) return { response: "Whose skills or availability, and what are they? Say, for example, \"Joy's skills are cooking and driving\" or \"Joy is available on weekends\".", missingInformation: ["volunteer"] };
    const field = skills ? "skills" : "availability";
    hit[1] = hit[1].replace(/['’]s$/i, "");
    const found = findPerson(leads, hit[1]);
    if (found.ambiguous) return { response: `More than one person matches ${hit[1]}: ${found.ambiguous.map(item => item.name).join(", ")}. Say the full name.`, missingInformation: ["volunteer"] };
    if (!found.lead) return { response: `${title(hit[1])} is not on your list in ${name}. Say, for example, "add a volunteer named ${title(hit[1])}" first.`, missingInformation: ["volunteer"] };
    const value = clean(hit[2]).slice(0, 200);
    const label = field === "skills" ? "skills" : "availability";
    return {
      prompt: `I can note that ${found.lead.name}'s ${label} ${field === "skills" ? "are" : "is"} ${value} in ${name}. Should I go ahead?`,
      apply: current => ({ ...current, leads: (current.leads || []).map(item => (item.name === found.lead.name && item.contact === found.lead.contact ? { ...item, [field]: value } : item)) }),
      done: `Noted ${found.lead.name}'s ${label} in ${name}.`
    };
  }

  if (intent === "recordConsent") {
    const declined = /\b(?:declin\w+|refus\w+|withdr\w+|revok\w+|did not (?:give|consent)|does not (?:give|consent)|no consent)\b/i.test(text);
    const who = clean((/\bconsent\s+(?:from|of|for)\s+([A-Za-z][\w'’-]*(?:\s+[A-Za-z][\w'’-]*){0,2}?)(?=\s+(?:to|for|on|today|yesterday)\b|[,.]|$)/i.exec(text)
      || /^(?:record|log|note|mark)\s+(?:that\s+)?([A-Za-z][\w'’-]*(?:\s+[A-Za-z][\w'’-]*){0,2}?)\s+(?:has\s+)?(?:gave|given|declined|refused|withdrew|revoked)/i.exec(text)
      || /^([A-Za-z][\w'’-]*(?:\s+[A-Za-z][\w'’-]*){0,2}?)\s+(?:has\s+|have\s+)?(?:gave|given|declined|refused|withdrew|revoked|did not|does not)/i.exec(text) || [])[1]);
    if (!who || /^(?:consent|the|a|an|my|our)$/i.test(who)) return { response: "Whose consent? Say, for example, \"record consent from Maria Lopez to keep her records\".", missingInformation: ["participant"] };
    const found = findPerson(leads, who, null);
    if (found.ambiguous) return { response: `More than one person matches ${who}: ${found.ambiguous.map(item => item.name).join(", ")}. Say the full name.`, missingInformation: ["participant"] };
    const status = declined ? "declined" : "given";
    const person = found.lead?.name || title(who);
    if (!found.lead && leads.length >= 200) return { response: `${name} already holds 200 contacts, the most one workspace keeps.`, info: true };
    return {
      prompt: `I can record that ${person} has ${status} consent to keep their records, as of today, in ${name}${found.lead ? "" : `, adding ${person} as a participant`}.${declined ? " I will not record services for them." : ""} Should I go ahead?`,
      apply: current => {
        const list = current.leads || [];
        if (found.lead) return { ...current, leads: list.map(item => (item.name === found.lead.name && item.contact === found.lead.contact ? { ...item, consent: status, consentDate: today } : item)) };
        return { ...current, leads: [...list, { name: person, contact: "", type: "client", need: "", stage: "new", nextAction: "", followUpDate: "", skills: "", availability: "", source: "", consent: status, consentDate: today }] };
      },
      done: `Recorded that ${person} has ${status} consent to keep their records, in ${name}.${declined ? " I will not record services for them." : ""}`
    };
  }

  if (intent === "logService") {
    const form = /\b(?:log|record|add)\s+(?:a|an|the|one)?\s*(.+?)\s+services?\s+for\s+([A-Za-z][\w'’-]*(?:\s+[A-Za-z][\w'’-]*){0,2}?)(?=\s+(?:on|at|in|today|yesterday|last|this)\b|[,.:]|$)/i.exec(text)
      || /\b(?:log|record|add)\s+(?:a|an|the|one)?\s*services?\s+for\s+([A-Za-z][\w'’-]*(?:\s+[A-Za-z][\w'’-]*){0,2}?)\s*[:,-]\s*(.+)$/i.exec(text);
    let person = ""; let service = "";
    if (form && /services?\s+for\s+\S+\s*[:,-]/i.test(text) && !/^.+\s+services?\s+for\s+/i.test(form[1] || "")) { person = clean(form[1]); service = clean(form[2]); }
    else if (form) { service = clean(form[1]); person = clean(form[2]); }
    if (!person) {
      const received = /^([A-Z][\w'’-]+(?:\s+[A-Z][\w'’-]+){0,2})\s+(?:received|attended|completed|got)\s+(?:a|an|the|one|some|our)?\s*(.+?)(?=\s+(?:on|at|in|today|yesterday|last|this)\b|[,.]|$)/.exec(text);
      const served = /^(?:[Ww]e|I)\s+(?:served|helped|gave)\s+([A-Z][\w'’-]+(?:\s+[A-Z][\w'’-]+)?)\s+(?:a|an|the|some)?\s*(.+?)(?=\s+(?:on|at|in|today|yesterday|last|this)\b|[,.]|$)/.exec(text);
      const hit = received || served;
      if (hit) { person = clean(hit[1]); service = clean(hit[2]); }
    }
    if (!person) return { response: "Who received the service, and what was it? Say, for example, \"Maria Lopez received a food box\".", missingInformation: ["participant"] };
    if (!service) return { response: `What service did ${title(person)} receive, for example a food box or a counselling session?`, missingInformation: ["service"] };
    const found = findPerson(leads, person, null);
    if (found.ambiguous) return { response: `More than one person matches ${person}: ${found.ambiguous.map(item => item.name).join(", ")}. Say the full name.`, missingInformation: ["participant"] };
    if (!found.lead) return { response: `${title(person)} is not on your list in ${name}. Record their consent first, which also adds them: "record consent from ${title(person)}".`, missingInformation: ["participant"] };
    if (lower(found.lead.consent) !== "given") return { response: lower(found.lead.consent) === "declined" ? `${found.lead.name} declined consent to keep records, so I have not recorded the service.` : `I need ${found.lead.name}'s consent to keep their records before I record a service. Say "record consent from ${found.lead.name}" first.`, missingInformation: ["consent"] };
    if ((editable.services || []).length >= SERVICES_LIMIT) return { response: `${name} already holds ${SERVICES_LIMIT} service records, the most one workspace keeps, so I have not added this one.`, info: true };
    const when = extractDay(text, today)?.day || today;
    const program = programIn(text);
    return {
      prompt: `I can record that ${found.lead.name} received ${/^(?:a|an|the)\b/i.test(service) ? "" : "a "}${service}${program ? ` in the ${program} program` : ""}, ${describeDay(when, today)}, in ${name}. Should I go ahead?`,
      apply: current => ({ ...current, services: [...(current.services || []), { participant: found.lead.name, service, date: when, program, hours: 0, notes: "" }] }),
      done: `Recorded a ${service} for ${found.lead.name} in ${name}.`
    };
  }

  if (intent === "addProgramGoal") {
    const hit = /\bgoals?\s+(?:of|to)\s+(?:serve\s+|reach\s+|help\s+|raise\s+|train\s+)?\$?(\d[\d,]*(?:\.\d+)?)\s+(.+?)(?=\s+(?:for|in|by|this|before|before the end)\b|[,.]|$)/i.exec(text);
    if (!hit) return { response: "What is the goal? Say, for example, \"set a goal of 500 meals served for the food program by December\".", missingInformation: ["goal"] };
    const target = Number(hit[1].replace(/,/g, ""));
    const measure = clean(hit[2]);
    if (!(target > 0) || !measure) return { response: "What is the goal? Say, for example, \"set a goal of 500 meals served for the food program by December\".", missingInformation: ["goal"] };
    const program = programIn(text);
    const deadline = /\b(?:by|before)\b(.*)$/i.test(text) ? looseDay(/\b(?:by|before)\b(.*)$/i.exec(text)[1], today)?.day || monthEnd(/\b(?:by|before)\b(.*)$/i.exec(text)[1], today) : "";
    if ((editable.programGoals || []).length >= GOALS_LIMIT) return { response: `${name} already holds ${GOALS_LIMIT} goals, the most one workspace keeps.`, info: true };
    return {
      prompt: `I can set a goal of ${target.toLocaleString("en-US")} ${measure}${program ? ` for the ${program} program` : ""}${deadline ? `, by ${describeDay(deadline, today)}` : ""} in ${name}. Should I go ahead?`,
      apply: current => ({ ...current, programGoals: [...(current.programGoals || []), { program, goal: measure, target, unit: "", deadline }] }),
      done: `Set a goal of ${target.toLocaleString("en-US")} ${measure} in ${name}. Ask me "how are we doing against our goals" any time. I count what you log: outcomes measured as that, or services with that name.`
    };
  }

  if (intent === "logOutcome") {
    const hit = /\boutcomes?\b\s*(?:of|[:,-])?\s*\$?(\d[\d,]*(?:\.\d+)?)\s+(.+?)(?=\s+(?:in|for|during|on|this|last|today|yesterday)\s+the\b|\s+(?:today|yesterday)\b|[,.]|$)/i.exec(text) || /\boutcomes?\b[^0-9]{0,20}\$?(\d[\d,]*(?:\.\d+)?)\s+(.+?)(?=[,.]|$)/i.exec(text);
    if (!hit) return { response: "What was measured? Say, for example, \"record an outcome: 42 people completed job training\".", missingInformation: ["outcome"] };
    const value = Number(hit[1].replace(/,/g, ""));
    const measure = clean(hit[2].replace(/\s+(?:in|for|during)\s+the\s+[a-z' -]+?\s+(?:program(?:me)?|project)\b.*$/i, ""));
    if (!Number.isFinite(value) || !measure) return { response: "What was measured? Say, for example, \"record an outcome: 42 people completed job training\".", missingInformation: ["outcome"] };
    if ((editable.outcomes || []).length >= OUTCOMES_LIMIT) return { response: `${name} already holds ${OUTCOMES_LIMIT} outcomes, the most one workspace keeps.`, info: true };
    const when = extractDay(text, today)?.day || today;
    const program = programIn(text);
    return {
      prompt: `I can record the result "${value.toLocaleString("en-US")} ${measure}"${program ? ` for the ${program} program` : ""}, ${describeDay(when, today)}, in ${name}. Should I go ahead?`,
      apply: current => ({ ...current, outcomes: [...(current.outcomes || []), { program, measure, value, unit: "", date: when, notes: "" }] }),
      done: `Recorded the result "${value.toLocaleString("en-US")} ${measure}" in ${name}.`
    };
  }
  return null;
}

// ---- the reads ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
function say(list) { return list.length <= 1 ? list.join("") : `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`; }
const sentences = parts => parts.filter(Boolean).map((part, index) => (index ? part.charAt(0).toUpperCase() + part.slice(1) : part)).join(". ");
const PRIVACY_NOTE = "These are counts only; I do not read out names unless you ask who still needs to give consent. Who can open this workspace is set by the account and its managers; there are no separate access levels inside it yet.";

function serviceStats(editable, period) {
  const rows = (editable.services || []).filter(row => inPeriod(row.date, period));
  const people = new Set(rows.map(row => lower(row.participant)));
  const byType = {};
  for (const row of rows) { const key = lower(clean(row.service)); byType[key] = (byType[key] || 0) + 1; }
  const types = Object.entries(byType).sort((a, b) => b[1] - a[1]);
  return { rows, people: people.size, types };
}
function volunteerStats(editable, period) {
  const rows = (editable.volunteerHours || []).filter(row => inPeriod(row.date, period));
  const total = round1(rows.reduce((sum, row) => sum + (Number(row.hours) || 0), 0));
  const by = {};
  for (const row of rows) by[row.volunteer] = round1((by[row.volunteer] || 0) + (Number(row.hours) || 0));
  const ranked = Object.entries(by).sort((a, b) => b[1] - a[1]);
  return { rows, total, ranked };
}
function goalCurrent(goal, editable) {
  const matching = (editable.outcomes || []).filter(row => mentions(row.measure, goal.goal) && (!goal.program || !row.program || lower(row.program) === lower(goal.program)));
  if (matching.length) return { current: matching.reduce((sum, row) => sum + (Number(row.value) || 0), 0), basis: "results you recorded" };
  const services = (editable.services || []).filter(row => mentions(row.service, goal.goal) && (!goal.program || !row.program || lower(row.program) === lower(goal.program)));
  return { current: services.length, basis: services.length ? "services you recorded" : "nothing recorded yet" };
}

function peopleServed({ command, editable, workspace, today }) {
  const name = `"${workspace}"`;
  const period = periodOf(command, today);
  const { rows, people, types } = serviceStats(editable, period);
  const intake = (editable.leads || []).filter(row => PARTICIPANT_TYPES.slice(0, 5).includes(lower(row.type)) || lower(row.consent));
  const outcomes = (editable.outcomes || []).filter(row => inPeriod(row.date, period));
  if (!rows.length && !outcomes.length) {
    return `${name} has no services or results recorded ${period.label === "so far" ? "yet" : period.label}${intake.length ? `, though ${plural(intake.length, "person")} ${intake.length === 1 ? "is" : "are"} on the participant list` : ""}, so I cannot give you a served-and-outcomes total, and I will not estimate one. To start: "record consent from Maria Lopez", then "Maria Lopez received a food box", and "record an outcome: 42 people completed job training".`;
  }
  const parts = [];
  if (rows.length) parts.push(`${labelIn(period)}, ${plural(people, "person")} received ${plural(rows.length, "service")}${types.length ? `: ${say(types.slice(0, 5).map(([type, count]) => `${count} ${type}`))}` : ""}`);
  if (outcomes.length) parts.push(`results you measured: ${say(outcomes.slice(0, 6).map(row => `${Number(row.value).toLocaleString("en-US")} ${row.measure}${row.program ? ` (${row.program})` : ""}`))}`);
  return `In ${name}: ${sentences(parts)}. ${PRIVACY_NOTE}`;
}

function volunteerSummary({ command, editable, workspace, today }) {
  const name = `"${workspace}"`;
  const period = periodOf(command, today);
  const { rows, total, ranked } = volunteerStats(editable, period);
  const volunteers = (editable.leads || []).filter(row => lower(row.type) === "volunteer");
  if (!rows.length) return `No volunteer hours are logged in ${name} ${period.label === "so far" ? "yet" : period.label}${volunteers.length ? `; ${plural(volunteers.length, "volunteer")} ${volunteers.length === 1 ? "is" : "are"} on your list` : ""}. Say, for example, "log 3 volunteer hours for Joy".`;
  const top = ranked.slice(0, 5).map(([who, hours]) => `${who} ${hours}`);
  return `Volunteer hours in ${name} ${labelIn(period)}: ${total} hours from ${plural(ranked.length, "volunteer")} over ${plural(rows.length, "entry")}. Most hours: ${say(top)}.`;
}

function listParticipants({ command, editable, workspace }) {
  const name = `"${workspace}"`;
  const people = (editable.leads || []).filter(row => PARTICIPANT_TYPES.slice(0, 5).includes(lower(row.type)) || lower(row.consent));
  if (!people.length) return `${name} has no participants recorded yet. Say, for example, "record consent from Maria Lopez to keep her records", which adds her.`;
  const given = people.filter(row => lower(row.consent) === "given");
  const declined = people.filter(row => lower(row.consent) === "declined");
  const none = people.filter(row => !lower(row.consent));
  const named = /\b(?:who|which|list|show|missing|needs?)\b/i.test(command) && none.length ? ` Still to ask: ${say(none.slice(0, 10).map(row => row.name))}${none.length > 10 ? ` and ${none.length - 10} more` : ""}.` : "";
  return `${name} has ${plural(people.length, "participant")}: ${given.length} with consent given, ${declined.length} declined, ${none.length} not yet asked.${named} I only record services for people whose consent is given.`;
}

function goalProgress({ editable, workspace, today }) {
  const name = `"${workspace}"`;
  const goals = editable.programGoals || [];
  if (!goals.length) return `${name} has no goals yet. Say, for example, "set a goal of 500 meals served for the food program by December", and I will tell you how you are doing.`;
  const lines = goals.map(goal => {
    const { current, basis } = goalCurrent(goal, editable);
    const pct = goal.target > 0 ? Math.round((current / goal.target) * 100) : 0;
    const due = /^\d{4}-\d{2}-\d{2}$/.test(goal.deadline || "") ? `, due ${describeDay(goal.deadline, today)}` : "";
    return `${goal.goal}${goal.program ? ` (${goal.program})` : ""}: ${Number(current).toLocaleString("en-US")} of ${Number(goal.target).toLocaleString("en-US")} (${pct}%)${due}, counted from ${basis}`;
  });
  return `Goals in ${name}: ${lines.join("; ")}.`;
}

function impactReport({ command, editable, workspace, today, formatMoney }) {
  const name = `"${workspace}"`;
  const period = periodOf(command, today);
  const { rows, people, types } = serviceStats(editable, period);
  const vol = volunteerStats(editable, period);
  const outcomes = (editable.outcomes || []).filter(row => inPeriod(row.date, period));
  const money = {};
  for (const row of editable.transactions || []) {
    if (!inPeriod(row.date, period)) continue;
    const currency = String(row.currency || "USD").toUpperCase();
    const entry = (money[currency] ||= { in: 0, out: 0 });
    if (row.type === "expense") entry.out += Number(row.amount) || 0; else entry.in += Number(row.amount) || 0;
  }
  const awarded = (editable.grants || []).filter(grant => lower(grant.status) === "awarded");
  const sections = [];
  sections.push(rows.length ? `people: ${plural(people, "person")} received ${plural(rows.length, "service")}${types.length ? ` (${say(types.slice(0, 4).map(([type, count]) => `${count} ${type}`))})` : ""}` : "people: no services recorded");
  sections.push(vol.rows.length ? `volunteers: ${vol.total} hours from ${plural(vol.ranked.length, "volunteer")}` : "volunteers: no hours recorded");
  sections.push(outcomes.length ? `results measured: ${say(outcomes.slice(0, 6).map(row => `${Number(row.value).toLocaleString("en-US")} ${row.measure}`))}` : "results measured: none recorded");
  const goals = editable.programGoals || [];
  if (goals.length) sections.push(`goals: ${goals.slice(0, 4).map(goal => { const { current } = goalCurrent(goal, editable); return `${goal.goal} ${Number(current).toLocaleString("en-US")} of ${Number(goal.target).toLocaleString("en-US")}`; }).join("; ")}`);
  const moneyParts = Object.entries(money).map(([currency, t]) => `${formatMoney(currency, t.in)} in and ${formatMoney(currency, t.out)} out`);
  sections.push(moneyParts.length ? `money: ${moneyParts.join("; ")}` : "money: nothing logged");
  if (awarded.length) sections.push(`grants awarded: ${awarded.length}`);
  return `Impact report for ${name}, ${labelIn(period)}: ${sentences(sections)}. Everything here is added up from what is recorded in the workspace; anything not logged is not counted. ${PRIVACY_NOTE}`;
}

const READERS = Object.freeze({ peopleServed, volunteerSummary, listParticipants, goalProgress, impactReport });
function readPrograms(intent, context) {
  const read = READERS[intent];
  return read ? read(context) : null;
}

module.exports = Object.freeze({ classifyPrograms, planProgramWrite, readPrograms, PROGRAM_READ_INTENTS, PROGRAM_WRITE_INTENTS, goalCurrent });
