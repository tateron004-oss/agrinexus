"use strict";

// FOLLOW-UP SEQUENCES (9 November 2026): a short series of messages that go out by themselves, a few days apart, to the people who agreed to get messages, and stop the moment someone replies or says stop.
// ("Quote follow-up": a text right away, an email after 2 days, a text after 5 more.) The owner builds one by voice, starts it for a person or a group, and the background worker sends each step when its day comes
// (sequence-sender.js). This file is the voice side: pure functions over the workspace data (client.data.editable), tested without a database; voice-dispatch.js supplies the client and the write bridge.
//
//   editable.sequences      { name, status (active | paused), createdOn }
//   editable.sequenceSteps  { sequence, step (1, 2, 3...), afterDays (days after the step before, or after the start for step 1), channel (sms | email), subject, message }
//   editable.sequenceRuns   { sequence, customer, startedOn, nextStep, dueOn, status (active | done | stopped | replied), lastSentOn, note, claimedAt, zone }
//
// The rules that keep it honest and kind (the same as a campaign's):
//  * only people who said yes to messages are ever enrolled or sent to; a person who says stop, or replies, is never sent another step;
//  * starting a sequence says who it goes to and when the first message goes out, and waits for a yes;
//  * a step goes out only between 8 AM and 8 PM the person's own day, is counted "sent" only when the provider says so, and is never sent twice;
//  * every message ends with the line telling the person how to stop getting them;
//  * WhatsApp is not offered: it needs an account that is not connected, so it is refused plainly, never sent as a text.

const { describeDay, addDays } = require("../personal/dates.js");
const { nameIn, leadFor } = require("./scheduling-voice.js");
const { stripWorkspaceName } = require("./workspace-name.js");
const campaignVoice = require("./campaigns-voice.js");

const lower = value => String(value || "").toLowerCase();
const clean = value => String(value || "").replace(/\s+/g, " ").trim().replace(/^["'“”]+|["'“”.,;:!?]+$/g, "").trim();
const plural = (count, word) => `${count} ${count === 1 ? word : `${word}s`}`;
const say = (list, limit = 8) => {
  const shown = list.slice(0, limit); const more = list.length > limit ? list.length - limit : 0;
  if (shown.length <= 1 && !more) return shown.join("");
  return more ? `${shown.join(", ")}, and ${more} more` : `${shown.slice(0, -1).join(", ")} and ${shown[shown.length - 1]}`;
};

const MAX_SEQUENCES = 20;
const MAX_STEPS = 10;
const MAX_RUNS = 600;
const MAX_DAYS = 60;
const MESSAGE_MIN = 5;
const MESSAGE_MAX = 400;
const SEQUENCE_READ_INTENTS = Object.freeze(["listSequences", "sequenceDetails", "sequenceWho"]);
const SEQUENCE_WRITE_INTENTS = Object.freeze(["createSequence", "addSequenceStep", "removeSequenceStep", "startSequence", "stopSequence", "pauseSequence", "resumeSequence", "markSequenceReply"]);

const WORD_NUMBERS = Object.freeze({ a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, twelve: 12, fourteen: 14 });

function classifySequence(command = "") {
  const text = String(command || "").replace(/\s+/g, " ").trim();
  if (!text || text.length > 700) return null;
  // a sequence is named as one ("the Quote Follow-up sequence") or built with a step ("add a step to Quote Follow-up: ...", "remove step 2 from Quote Follow-up")
  const stepPhrase = /\b(?:add|put|write|create)\s+(?:a\s+|another\s+)?(?:new\s+)?step\s+(?:to|in|for)\s+\S/i.test(text) || /\b(?:remove|delete|drop|take out)\s+step\s+\w+\s+(?:from|in|of)\s+\S/i.test(text);
  if (!/\bsequences?\b/i.test(text) && !stepPhrase) return null;
  // advice and explanations are for the general assistant
  if (/^(?:how\s+(?:do|can|to|should|would|does)|why|explain|tell me how|should|what(?:'s|’s| is| are)\s+(?:a|an)\b)/i.test(text) && !/\b(?:my|our)\b/i.test(text)) return null;
  const asks = /\?|^(?:(?:hey|ok|okay|please)\s+)*(?:(?:kyro|nexus)[,.]?\s+)?(?:what|which|who|how|do|does|did|are|is|any|show|tell|list|give|read)\b/i.test(text);
  if (/\b(?:replied|responded|answered|wrote back|got back|texted back|e-?mailed back)\b/i.test(text) && nameIn(text)) return "markSequenceReply";
  if (/\b(?:pause|hold|put on hold|suspend)\b/i.test(text) && !asks) return "pauseSequence";
  if (/\b(?:resume|restart|unpause|carry on with|continue)\b/i.test(text) && !asks) return "resumeSequence";
  if (/\b(?:stop|cancel|end|take|remove|drop)\b[^.?!]{0,50}\b(?:from|out of|for)\b/i.test(text) && !asks && !/\bstep\b/i.test(text)) return "stopSequence";
  if (/\b(?:stop|cancel|end)\b/i.test(text) && !asks && !/\bstep\b/i.test(text) && /\b(?:for|from)\s+\S/i.test(text)) return "stopSequence";
  if (/\b(?:remove|delete|drop|take out)\b[^.?!]{0,20}\bstep\b/i.test(text) && !asks) return "removeSequenceStep";
  if (/\b(?:add|create|write|put)\b[^.?!]{0,25}\b(?:step|message|text|email)\b[^.?!]{0,40}\b(?:to|in|for)\b/i.test(text) && !asks) return "addSequenceStep";
  if (/\b(?:start|begin|enrol+|enroll|run|put|add|set)\b[^.?!]{0,60}\b(?:for|on|into|in|to)\b/i.test(text) && !asks && !/\b(?:create|make|new)\b/i.test(text.replace(/\bset up\b/i, "setup"))) return "startSequence";
  if (/\b(?:create|make|start|set up|build|begin|new)\b/i.test(text) && !asks) return "createSequence";
  if (asks && /\b(?:who|which (?:people|customers|contacts)|how many people)\b/i.test(text) && /\b(?:in|on|running|enrolled|getting|receiving)\b/i.test(text)) return "sequenceWho";
  if (asks && /\b(?:what(?:'s| is| are)?\s+(?:in|the steps)|steps|details|messages)\b/i.test(text) && !/\bwho\b/i.test(text)) return "sequenceDetails";
  if (asks && /\b(?:show|list|what|which|my|any|do i have|how many)\b/i.test(text)) return "listSequences";
  return null;
}

// ---- what was said ----
const sequencesOf = editable => editable.sequences || [];
const stepsOf = (editable, name) => (editable.sequenceSteps || []).filter(row => lower(row.sequence) === lower(name)).sort((a, b) => a.step - b.step);
const runsOf = (editable, name) => (editable.sequenceRuns || []).filter(row => lower(row.sequence) === lower(name));

// the sequence a sentence names: one that exists ("the Quote Follow-up sequence", "Quote Follow-up"), else the word after "called/named", else "the X sequence"
function sequenceIn(editable, text, workspace = "") {
  const wanted = lower(text);
  const known = sequencesOf(editable).map(row => row.name).sort((a, b) => b.length - a.length);
  const hit = known.find(name => wanted.includes(lower(name)));
  if (hit) return { name: hit, exists: true };
  const named = /\bsequence\s+(?:called|named|titled)\s+["'“]?([^"'”,.:;]+?)["'”]?(?=\s+(?:with|that|which|for|and|saying|to)\b|[,:.]|$)/i.exec(text)
    || /\b(?:the|my|our|a|an)\s+["'“]?([A-Za-z][\w' -]{1,40}?)["'”]?\s+(?:follow-?up\s+)?sequence\b/i.exec(text)
    || /\b(?:add|put|write)\b[^:]{0,40}\bto\s+(?:the\s+)?["'“]?([A-Za-z][\w' -]{1,40}?)["'”]?\s*[:,]/i.exec(text);
  const name = named ? stripWorkspaceName(clean(named[1]).replace(/^(?:the|my|our|a|an|new)\s+/i, ""), workspace) : "";
  return { name: /^(?:sequence|new|this|that|it|one|follow-?up)$/i.test(name) ? "" : name.slice(0, 60), exists: false };
}

function daysIn(text) {
  const t = String(text || "");
  const week = /\bafter\s+(?:a\s+|an\s+)?(\d+|one|two|three|four|a|an)\s+weeks?\b/i.exec(t) || /\bafter\s+(?:a|1)\s+week\b/i.exec(t);
  if (week) return (WORD_NUMBERS[lower(week[1])] || Number(week[1]) || 1) * 7;
  const days = /\b(?:after|in|wait)\s+(\d+|one|two|three|four|five|six|seven|eight|nine|ten|twelve|fourteen|a|an)\s+days?\b/i.exec(t);
  if (days) return WORD_NUMBERS[lower(days[1])] || Number(days[1]) || 0;
  if (/\b(?:next day|the day after|tomorrow)\b/i.test(t)) return 1;
  if (/\b(?:right away|immediately|straight away|at once|on day (?:one|1)|the same day|today|now)\b/i.test(t)) return 0;
  return null;
}
const channelIn = text => (/\bwhats?app\b/i.test(text) ? "whatsapp" : /\be-?mails?\b/i.test(text) ? "email" : /\b(?:sms|texts?(?: messages?)?|texting)\b/i.test(text) ? "sms" : "");
const today = ctx => ctx.today;

// the people a start would enrol: one named person, everyone with a tag, everyone at a stage, or everyone who agreed to messages. -> { people, label, problem }
function audienceFor(editable, text) {
  const leads = editable.leads || [];
  const tag = (/\b(?:tagged|with the tag|with tag)\s+["']?([^"'?.!,]+?)["']?(?=\s*(?:[.!?,]|$|\s+(?:sequence|starting)\b))/i.exec(text) || [])[1];
  if (tag) {
    const people = leads.filter(row => String(row.tags || "").split(",").some(item => lower(item.trim()) === lower(clean(tag))));
    return { people, label: `everyone tagged ${clean(tag)}`, group: true };
  }
  const stage = /\b(?:everyone|everybody|all (?:the )?(?:people|customers|contacts)|people|customers)\s+(?:in|at)\s+(?:the\s+)?["']?([A-Za-z][\w -]{1,30}?)["']?(?:\s+stage)?(?=\s*(?:[.!?,]|$))/i.exec(text);
  if (stage) {
    const wanted = lower(clean(stage[1]));
    const names = new Set((editable.deals || []).filter(deal => lower(deal.stage) === wanted).map(deal => lower(deal.contact)));
    return { people: leads.filter(row => names.has(lower(row.name))), label: `everyone in ${clean(stage[1])}`, group: true };
  }
  if (/\b(?:everyone|everybody|all (?:my |the )?(?:people|customers|contacts|clients)|anyone)\b[^.?!]{0,30}\b(?:agreed|said yes|opted in|consented|get messages|receive messages)\b/i.test(text) || /\b(?:all|every)\s+(?:my\s+)?(?:customers|clients|contacts)\b/i.test(text)) {
    return { people: leads.filter(row => lower(row.messageConsent) === "yes"), label: "everyone who agreed to get messages", group: true };
  }
  const who = nameIn(text);
  const lead = who ? leadFor(editable, text, who) : null;
  return lead ? { people: [lead], label: lead.name, group: false } : { people: [], label: who || "", group: false, unknown: true };
}

// ---- reads ----
function readSequence(intent, { command, editable, workspace, today: day }) {
  const name = `"${workspace}"`;
  const all = sequencesOf(editable);
  if (intent === "listSequences") {
    if (!all.length) return `${name} has no follow-up sequences yet. Say, for example, "create a sequence called Quote Follow-up", then add steps to it.`;
    return `${name} has ${plural(all.length, "sequence")}: ${say(all.map(row => `${row.name} (${plural(stepsOf(editable, row.name).length, "step")}, ${row.status === "paused" ? "paused" : `${runsOf(editable, row.name).filter(run => run.status === "active").length} running`})`))}.`;
  }
  const found = sequenceIn(editable, command, workspace);
  if (!found.exists) return all.length ? `Which sequence? You have ${say(all.map(row => row.name))}.` : `${name} has no follow-up sequences yet.`;
  const steps = stepsOf(editable, found.name);
  if (intent === "sequenceDetails") {
    if (!steps.length) return `The ${found.name} sequence has no steps yet. Say, for example, "add a step to ${found.name}: right away, send a text saying Thanks for your enquiry."`;
    return `The ${found.name} sequence has ${plural(steps.length, "step")}: ${steps.map(step => `step ${step.step}, ${step.afterDays === 0 ? (step.step === 1 ? "right away" : "the same day") : `after ${plural(step.afterDays, "day")}`}, by ${step.channel === "sms" ? "text" : "email"}: ${step.message}`).join("; ")}.${(editable.sequences.find(row => lower(row.name) === lower(found.name)) || {}).status === "paused" ? " It is paused." : ""}`;
  }
  if (intent === "sequenceWho") {
    const runs = runsOf(editable, found.name);
    if (!runs.length) return `Nobody is in the ${found.name} sequence yet. Say, for example, "start the ${found.name} sequence for Grace Otieno."`;
    const word = run => run.status === "active" ? `step ${run.nextStep} of ${steps.length}, next ${describeDay(run.dueOn, day)}` : run.status === "done" ? "finished" : run.status === "replied" ? "replied, so it stopped" : "stopped";
    return `${plural(runs.length, "person")} in the ${found.name} sequence: ${runs.map(run => `${run.customer} (${word(run)})`).join("; ")}.`;
  }
  return null;
}

// ---- writes ----
function planSequenceWrite(intent, ctx) {
  const { command, editable, workspace } = ctx;
  const name = `"${workspace}"`;
  const text = String(command || "");

  if (intent === "createSequence") {
    const found = sequenceIn(editable, text, workspace);
    if (found.exists) return { response: `${name} already has a sequence called ${found.name}. Say "add a step to ${found.name}: ..." to build it.`, info: true };
    if (!found.name) return { response: 'What should the sequence be called? For example: "Create a sequence called Quote Follow-up".', missingInformation: ["name"] };
    if (sequencesOf(editable).length >= MAX_SEQUENCES) return { response: `${name} already holds ${MAX_SEQUENCES} sequences.`, info: true };
    return {
      prompt: `I will create a follow-up sequence called ${found.name} in ${name}. It sends nothing until you add steps and start it for someone. Should I go ahead?`,
      apply: current => ({ ...current, sequences: [...(current.sequences || []), { name: found.name, status: "active", createdOn: ctx.today }] }),
      done: `Created the ${found.name} sequence. Say "add a step to ${found.name}: right away, send a text saying ..." to build it.`
    };
  }

  const found = sequenceIn(editable, text, workspace);
  const known = sequencesOf(editable);
  if (!found.exists) return { response: known.length ? `Which sequence? You have ${say(known.map(row => row.name))}.` : `${name} has no sequences yet. Say "create a sequence called Quote Follow-up".`, missingInformation: ["sequence"] };
  const sequence = known.find(row => lower(row.name) === lower(found.name));
  const steps = stepsOf(editable, sequence.name);

  if (intent === "addSequenceStep") {
    if (steps.length >= MAX_STEPS) return { response: `A sequence can have up to ${MAX_STEPS} steps.`, info: true };
    const channel = channelIn(text);
    if (channel === "whatsapp") return { response: "WhatsApp messages need a connected WhatsApp account, which is not set up here yet, so I have not added this step. Say it again by text or by email.", info: true };
    if (!channel) return { response: "Should this step go by text or by email?", missingInformation: ["channel"] };
    const days = daysIn(text);
    if (days === null) return { response: `When should this step go out? For example: right away, or after 2 days.`, missingInformation: ["days"] };
    if (days > MAX_DAYS) return { response: `A step can wait up to ${MAX_DAYS} days.`, missingInformation: ["days"] };
    const message = campaignVoice.messageOf(text);
    if (message.length < MESSAGE_MIN) return { response: `What should the message say? For example: "add a step to ${sequence.name}: after 2 days, send a text saying Just checking in about your quote."`, missingInformation: ["message"] };
    if (message.length > MESSAGE_MAX) return { response: `That message is ${message.length} characters, and a step can be at most ${MESSAGE_MAX}. Say a shorter one.`, missingInformation: ["message"] };
    const number = steps.length + 1;
    return {
      prompt: `I will add step ${number} to the ${sequence.name} sequence: ${days === 0 ? (number === 1 ? "right away" : "the same day as the step before") : `${plural(days, "day")} after ${number === 1 ? "it starts" : "the step before"}`}, by ${channel === "sms" ? "text" : "email"}: "${message}" Should I go ahead?`,
      apply: current => ({ ...current, sequenceSteps: [...(current.sequenceSteps || []), { sequence: sequence.name, step: number, afterDays: days, channel, subject: sequence.name, message }] }),
      done: `Added step ${number} to the ${sequence.name} sequence.`
    };
  }

  if (intent === "removeSequenceStep") {
    const number = Number((/\bstep\s+(\d+|one|two|three|four|five|six|seven|eight|nine|ten)\b/i.exec(text) || [])[1] ? (WORD_NUMBERS[lower(/\bstep\s+(\w+)/i.exec(text)[1])] || Number(/\bstep\s+(\w+)/i.exec(text)[1])) : 0);
    if (!number || !steps.some(step => step.step === number)) return { response: `Which step? The ${sequence.name} sequence has ${plural(steps.length, "step")}.`, missingInformation: ["step"] };
    if (runsOf(editable, sequence.name).some(run => run.status === "active")) return { response: `People are running through the ${sequence.name} sequence, so I will not change its steps. Pause it or stop it for them first.`, info: true };
    return {
      prompt: `I will remove step ${number} from the ${sequence.name} sequence, and the steps after it move up. Should I go ahead?`,
      apply: current => ({ ...current, sequenceSteps: (current.sequenceSteps || []).filter(row => !(lower(row.sequence) === lower(sequence.name) && row.step === number)).map(row => (lower(row.sequence) === lower(sequence.name) && row.step > number ? { ...row, step: row.step - 1 } : row)) }),
      done: `Removed step ${number} from the ${sequence.name} sequence.`
    };
  }

  if (intent === "pauseSequence" || intent === "resumeSequence") {
    const pause = intent === "pauseSequence";
    if ((sequence.status === "paused") === pause) return { response: `The ${sequence.name} sequence is already ${pause ? "paused" : "running"}.`, info: true };
    return {
      prompt: `I will ${pause ? "pause" : "resume"} the ${sequence.name} sequence${pause ? ", so no step goes out until you resume it" : ""}. Should I go ahead?`,
      apply: current => ({ ...current, sequences: (current.sequences || []).map(row => (lower(row.name) === lower(sequence.name) ? { ...row, status: pause ? "paused" : "active" } : row)) }),
      done: `The ${sequence.name} sequence is ${pause ? "paused" : "running again"}.`
    };
  }

  if (intent === "startSequence") {
    if (!steps.length) return { response: `The ${sequence.name} sequence has no steps yet, so there is nothing to send. Say "add a step to ${sequence.name}: ..." first.`, info: true };
    if (steps.some(step => step.channel === "whatsapp")) return { response: "This sequence has a WhatsApp step, which cannot be sent. Remove that step first.", info: true };
    const audience = audienceFor(editable, text);
    if (audience.unknown && !audience.label) return { response: `Who should the ${sequence.name} sequence go to? For example: "start the ${sequence.name} sequence for Grace Otieno", or "for everyone tagged VIP".`, missingInformation: ["audience"] };
    if (audience.unknown) return { response: `I could not find ${audience.label} in ${name}. Say the name as it is saved.`, missingInformation: ["name"] };
    if (!audience.people.length) return { response: `Nobody matches ${audience.label} in ${name}.`, info: true };
    const first = steps[0];
    // a contact holds ONE number or address, so a person is enrolled only if it works for every step's channel (a text step and an email step need both)
    const channels = [...new Set(steps.map(step => step.channel))];
    const channelOk = person => channels.every(channel => campaignVoice.usable(channel, person.contact));
    const missingFor = person => channels.find(channel => !campaignVoice.usable(channel, person.contact));
    const wordFor = channel => (channel === "email" ? "email address" : "phone number");
    const agreed = audience.people.filter(row => lower(row.messageConsent) === "yes");
    const reachable = agreed.filter(channelOk);
    const running = new Set((editable.sequenceRuns || []).filter(run => lower(run.sequence) === lower(sequence.name) && run.status === "active").map(run => lower(run.customer)));
    const fresh = reachable.filter(row => !running.has(lower(row.name)));
    if (!audience.group && !agreed.length) return { response: `${audience.people[0].name} has not agreed to get messages yet, so I cannot start a sequence for them. Say "${audience.people[0].name} agreed to get messages" first.`, info: true };
    if (!audience.group && !reachable.length) return { response: `${audience.people[0].name} has no ${wordFor(missingFor(audience.people[0]))} saved that I can use for this sequence${channels.length > 1 ? ", which has both text and email steps, so each person needs both a phone number and an email address" : ""}.`, info: true };
    if (!fresh.length) return { response: `Nobody new to start: ${running.size ? "they are already in the sequence, " : ""}${audience.people.length - agreed.length ? `${plural(audience.people.length - agreed.length, "person")} did not agree to get messages, ` : ""}${agreed.length - reachable.length ? `${plural(agreed.length - reachable.length, "person")} cannot be reached on every step` : ""}.`.replace(/, \./, "."), info: true };
    if ((editable.sequenceRuns || []).length + fresh.length > MAX_RUNS) return { response: `${name} already holds ${MAX_RUNS} sequence entries. Stop or clear some first.`, info: true };
    const left = audience.people.length - fresh.length;
    const dueOn = addDays(ctx.today, first.afterDays);
    return {
      prompt: `I will start the ${sequence.name} sequence for ${audience.group ? `${plural(fresh.length, "person")} (${audience.label})` : fresh[0].name}${left ? `, leaving out ${left} who ${left === 1 ? "has" : "have"} not agreed to messages or cannot be reached or ${left === 1 ? "is" : "are"} already in it` : ""}. The first message goes ${first.afterDays === 0 ? "out today, between 8 AM and 8 PM" : `${describeDay(dueOn, ctx.today)}, between 8 AM and 8 PM`}, by ${first.channel === "sms" ? "text" : "email"}. It stops for anyone who replies or says stop. Should I go ahead?`,
      apply: current => ({ ...current, sequenceRuns: [...(current.sequenceRuns || []), ...fresh.map(person => ({ sequence: sequence.name, customer: person.name, startedOn: ctx.today, nextStep: 1, dueOn, status: "active", lastSentOn: "", note: "", claimedAt: "", zone: ctx.timeZone || "" }))] }),
      done: `Started the ${sequence.name} sequence for ${audience.group ? plural(fresh.length, "person") : fresh[0].name}. The first message goes ${first.afterDays === 0 ? "out today within sending hours" : describeDay(dueOn, ctx.today)}.`
    };
  }

  if (intent === "stopSequence" || intent === "markSequenceReply") {
    const runs = runsOf(editable, sequence.name).filter(run => run.status === "active");
    const reply = intent === "markSequenceReply";
    const who = nameIn(text);
    const lead = who ? leadFor(editable, text, who) : null;
    let pool = runs;
    let label = "everyone";
    if (lead) { pool = runs.filter(run => lower(run.customer) === lower(lead.name)); label = lead.name; }
    else if (reply) return { response: "Who replied? For example: Grace Otieno replied to the Quote Follow-up sequence.", missingInformation: ["name"] };
    else if (!/\b(?:everyone|everybody|all)\b/i.test(text)) return { response: `Stop it for whom? Say a name, or "stop the ${sequence.name} sequence for everyone".`, missingInformation: ["name"] };
    if (!pool.length) return { response: `${label === "everyone" ? "Nobody" : label} is not running through the ${sequence.name} sequence right now.`, info: true };
    return {
      prompt: reply ? `I will note that ${label} replied, and stop the ${sequence.name} sequence for them. Should I go ahead?` : `I will stop the ${sequence.name} sequence for ${label === "everyone" ? plural(pool.length, "person") : label}. No more steps go out to ${pool.length === 1 && label !== "everyone" ? "them" : "them"}. Should I go ahead?`,
      apply: current => ({
        ...current,
        sequenceRuns: (current.sequenceRuns || []).map(run => (lower(run.sequence) === lower(sequence.name) && run.status === "active" && pool.some(item => lower(item.customer) === lower(run.customer)) ? { ...run, status: reply ? "replied" : "stopped", note: reply ? "They replied." : "Stopped by the owner.", claimedAt: "" } : run)),
        ...(reply ? { campaignLog: [...(current.campaignLog || []), ...pool.map(run => ({ campaign: `${sequence.name} (sequence)`, customer: run.customer, channel: "sms", to: "", status: "replied", at: ctx.today, note: "replied" }))].slice(-campaignVoice.LOG_LIMIT) } : {})
      }),
      done: reply ? `Noted: ${label} replied. The ${sequence.name} sequence has stopped for them.` : `Stopped the ${sequence.name} sequence for ${label === "everyone" ? plural(pool.length, "person") : label}.`
    };
  }
  return null;
}

module.exports = Object.freeze({ classifySequence, readSequence, planSequenceWrite, sequenceIn, daysIn, channelIn, audienceFor, stepsOf, runsOf, SEQUENCE_READ_INTENTS, SEQUENCE_WRITE_INTENTS, MAX_SEQUENCES, MAX_STEPS, MAX_RUNS });
void today;
