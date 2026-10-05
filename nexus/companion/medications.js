"use strict";

const { parseTimeOfDay, formatTimeOfDay, isDueNow, localClock } = require("../brief/schedule.js");
const { validTimeZone, DEFAULT_TIME_ZONE, localDay } = require("../brief/compose.js");

// Medication reminders a person asks for ("Add medication metformin 500mg at 8am and 8pm"). Kyro reminds them at those times, they say
// "I took my metformin", and if a dose stays unconfirmed for two hours, only the circle members they chose ("share my medication reminders
// with Amina") may be told that "a dose is waiting" — never which medicine, never the dose. Kyro only ever repeats what the person said was
// prescribed to them; it does not check doses, interactions or advice, and says so. A person's medicines are health information: stored as
// such, private to them.
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
const UNIT = "(?:mg|mcg|µg|g|ml|iu|units?|tablets?|tabs?|pills?|capsules?|caps?|drops?|puffs?)";
const NAMED_TIMES = { morning: "08:00", midday: "12:00", noon: "12:00", afternoon: "15:00", evening: "18:00", night: "21:00", bedtime: "21:00" };
const GENERIC = /^(?:meds|medication|medications|medicine|medicines|pills|tablets|capsules|doses?)$/;
// Everyday phrases ("I take the bus every day at 7", "remind me to take out the trash") must never become medicines. Unless the person says
// "add medication ...", they must give a dose (500mg) or use a medicine word.
const MEDICINE_WORD = /\b(?:medications?|medicines?|pills?|tablets?|capsules?|vitamins?|supplements?|insulin|inhalers?)\b/i;
const MAX_MEDICATIONS = 12;
const GRACE_HOURS = 2;
const MIN_GRACE_HOURS = 1; const MAX_GRACE_HOURS = 12;
// A person's own wait before the people they chose are told a dose is waiting ("tell my circle if I miss a dose for 1 hour", "wait 3 hours before
// telling my circle about a missed dose"). Applies to all of their medicines; a new medicine takes the same wait.
function readDoseWait(t) {
  let m;
  if ((m = /^(?:please )?(?:wait|give me|allow) (\d+(?:\.\d+)?) hours? before (?:telling|alerting|notifying|contacting) (?:my circle|anyone|them|my family|my people) (?:about )?(?:a |my )?(?:missed )?(?:doses?|medicines?|medications?|meds)$/i.exec(t))
    || (m = /^(?:please )?(?:tell|alert|notify|contact) (?:my circle|them|my family|my people) if i (?:miss|forget|skip|haven'?t taken|have not taken) (?:a |my )?(?:doses?|medicines?|medications?|meds)(?: for| within| after| in)? (\d+(?:\.\d+)?) hours?$/i.exec(t))
    || (m = /^(?:please )?(?:set|change|make|update) my (?:medicine|medication|dose|meds?) (?:follow-?up|wait|grace)(?: wait| time)?(?: to| at| for)? (\d+(?:\.\d+)?) hours?$/i.exec(t))) return Number(m[1]);
  return null;
}

// "8am and 8pm", "morning and evening", "8:30, 14:00" -> ["08:00","20:00"] or null when any part cannot be read.
function parseTimes(text) {
  const parts = clean(text).toLowerCase().replace(/[.!]+$/g, "").split(/\s*(?:,|&|\band\b)\s*/).filter(Boolean);
  if (!parts.length || parts.length > 6) return null;
  const times = [];
  for (const part of parts) {
    const word = part.replace(/^(?:the |every |each )/, "");
    const time = NAMED_TIMES[word] || parseTimeOfDay(part.replace(/^(?:at|around) /, ""));
    if (!time) return null;
    times.push(time);
  }
  return [...new Set(times)].sort();
}

// "metformin 500mg" -> { name: "metformin", dose: "500 mg" }
function parseNameAndDose(raw) {
  const text = clean(raw).replace(/^(?:my|the)\s+/i, "");
  const m = new RegExp(`^(.*?)\\s*(\\d{1,5}(?:\\.\\d+)?)\\s*(${UNIT})\\b(.*)$`, "i").exec(text);
  const name = clean(m ? `${m[1]} ${m[4]}` : text).toLowerCase();
  if (!/^[a-z][a-z0-9 '-]{1,40}$/.test(name)) return null;
  return { name, dose: m ? `${m[2]} ${m[3].toLowerCase()}` : "" };
}

// A dose that looks like a typing slip: well above what is usually taken at once for a common medicine ("metformin 5000mg", "amlodipine 100mg", "digoxin 2.5mg"). Kyro cannot check doses and
// says so; this only catches an extra zero or a wrong unit before it is saved as the person's reminder. Said again with "confirmed", it is saved as given. The numbers are the usual highest single
// dose in mg; a dose more than twice that is asked about, never refused.
const USUAL_HIGHEST_SINGLE_DOSE_MG = Object.freeze({ metformin: 1000, amlodipine: 10, lisinopril: 40, enalapril: 20, losartan: 100, atenolol: 100, hydrochlorothiazide: 50, simvastatin: 80, atorvastatin: 80,
  glibenclamide: 10, gliclazide: 160, aspirin: 325, paracetamol: 1000, panadol: 1000, ibuprofen: 800, amoxicillin: 1000, prednisolone: 60, furosemide: 80, warfarin: 10, digoxin: 0.25, levothyroxine: 0.3, captopril: 50, nifedipine: 60 });
const MG_PER = { mg: 1, g: 1000, mcg: 0.001, "µg": 0.001 };
function unusualDose({ name, dose }) {
  const m = /^(\d+(?:\.\d+)?)\s*(mg|g|mcg|µg)$/i.exec(String(dose || ""));
  const usual = USUAL_HIGHEST_SINGLE_DOSE_MG[String(name || "").split(" ")[0]];
  if (!m || !usual) return null;
  const mg = Number(m[1]) * MG_PER[m[2].toLowerCase()];
  return mg > usual * 2 ? { usual } : null;
}
// Said at the end of an "add medication" line to say the dose is exactly what the label says.
const DOSE_CONFIRMED = /[,;]?\s*(?:and )?(?:(?:i )?confirm(?:ed)?|that(?:'s| is) (?:correct|right)|it(?:'s| is) (?:correct|right)|as prescribed|as (?:written )?on (?:the|my) label)\s*$/i;
// Words that say WHEN or HOW a dose was taken, not which medicine ("this morning", "before breakfast", "at 8", "with food"): dropped so "I took my tablets this morning" means the tablets.
const WHEN_TAIL = /(?:\s+(?:already|just now|now|today|yet|this (?:morning|afternoon|evening)|tonight|last night|earlier|a little while ago|(?:an? )?(?:hour|few hours|while|bit) ago|before (?:breakfast|lunch|dinner|supper|bed|bedtime|eating)|after (?:breakfast|lunch|dinner|supper|eating|food)|with (?:food|water|tea|milk|breakfast|lunch|dinner|supper)|on time|as (?:usual|prescribed|normal)|at \d{1,2}(?::\d{2})?\s?(?:am|pm|o'clock)?|at (?:noon|midday|night|bedtime)))+$/i;
const NAME_LEAD = /^(?:(?:all|both)(?: of)?\s+)?(?:(?:my|the|some|those|these|our|a)\s+)?(?:(?:all|both)(?: of)?\s+)?(?:(?:morning|evening|night|midday|afternoon)\s+)?(?:one\s+|two\s+|three\s+|\d+\s+)?(?:dose of\s+)?(?:(?:my|the)\s+)?/i;
const tidyQuery = value => clean(value).toLowerCase().replace(WHEN_TAIL, "").replace(NAME_LEAD, "").replace(/\s+/g, " ").trim();
const THEM = /^(?:them|it|that|those|these|both|all)$/;

// { action: "add"|"list"|"remove"|"taken"|"missed"|"did-i", ... } or null
function readMedicationRequest(text) {
  let t = clean(text).replace(/[.!?]+$/g, "");
  if (!t || t.length > 160) return null;
  const confirmedDose = DOSE_CONFIRMED.test(t) && /\b(?:add|remind|i take|i need to take|i'?m on|i am on)\b/i.test(t);
  if (confirmedDose) t = t.replace(DOSE_CONFIRMED, "").trim();
  let m;
  if ((m = /^(?:please )?add (?:a )?(?:medication|medicine|med)(?: reminder)?:?\s+(.+?)\s+(?:(?:every ?day|daily|each day)\s+)?(?:at|around)\s+(.+)$/i.exec(t)) ||
      (m = /^(?:please )?remind me to take (?:my )?(.+?) (?:at|around) (.+?) (?:every ?day|daily|each day)$/i.exec(t)) ||
      (m = /^(?:please )?(?:remind me to take|i take|i need to take|i'?m on|i am on) (?:my )?(.+?) (?:every ?day|daily|each day) (?:at|around) (.+)$/i.exec(t))) {
    const drug = parseNameAndDose(m[1]); const times = parseTimes(m[2]);
    const explicit = /^(?:please )?add (?:a )?(?:medication|medicine|med)\b/i.test(t);
    if (!explicit && !(drug?.dose || MEDICINE_WORD.test(t))) return null;
    if (!drug) return { action: "add", invalid: "name" };
    if (!times) return { action: "add", invalid: "times", name: drug.name };
    return { action: "add", ...drug, times, ...(confirmedDose ? { confirmed: true } : {}) };
  }
  if ((m = /^(?:please )?(?:remind me to take|i take|i need to take) (?:my )?(.+?) every (morning|evening|night)$/i.exec(t))) {
    const drug = parseNameAndDose(m[1]);
    if (!(drug?.dose || MEDICINE_WORD.test(t))) return null;
    return drug ? { action: "add", ...drug, times: [NAMED_TIMES[m[2].toLowerCase()]] } : { action: "add", invalid: "name" };
  }
  const wait = readDoseWait(t);
  if (wait !== null) return { action: "grace", hours: wait };
  if (/^(?:what|which) (?:medications?|medicines?|meds|pills) (?:do i|am i) (?:take|taking|on)$/i.test(t) || /^(?:show|list|what are) my (?:medications?|medicines?|meds)$/i.test(t)) return { action: "list" };
  // A medicine the person says they no longer take. Found by the audit: only "stop reminding me about X" ended the reminders, so after "my doctor stopped my metformin" the person's circle was still told
  // "a dose is waiting" for a medicine they no longer take.
  if ((m = /^stop reminding me (?:about|to take) (?:my )?(.+)$/i.exec(t)) || (m = /^(?:remove|delete) (?:my )?(.+?) from my (?:medications?|medicines?|meds)$/i.exec(t))
    || (m = /^(?:i (?:have |'ve )?(?:stopped|quit) (?:taking )?|i(?:'m| am) no longer (?:taking |on )|i don'?t take |i do not take |my (?:doctor|clinician|nurse|pharmacist) (?:has )?(?:stopped|took me off|taken me off) )(?:my |the )?(.+?)(?: (?:now|today|already|for good))?$/i.exec(t))) {
    const stoppedByPerson = !/^(?:stop reminding|remove|delete)\b/i.test(t);
    return { action: "remove", query: clean(m[1]).toLowerCase(), ...(stoppedByPerson ? { stopped: true } : {}) };
  }
  // A dose the person says they did NOT take. Found by the audit: these fell through, so a missed dose was either not recorded or left looking unconfirmed.
  if ((m = /^(?:i |i've |i have )?(?:just |actually )?(?:missed|forgot(?: to take)?|skipped|didn'?t take|did not take|didn'?t have|did not have)(?: my| the| a| some)?\s+(.+)$/i.exec(t))) {
    const query = tidyQuery(m[1]);
    if (query && query.split(" ").length <= 4) return { action: "missed", query };
  }
  if ((m = /^(?:i(?:'ve| have)? )?(?:just |already )?(?:took|taken|have taken|'ve taken|had|swallowed)\s+(.+)$/i.exec(t))) {
    const query = tidyQuery(m[1]);
    if (query && !/^(?:half|a quarter)\b/.test(clean(m[1]).toLowerCase())) return { action: "taken", query };
  }
  if ((m = /^did i (?:take|have) (?:my |the )?(.+?)(?: (?:today|yet|already))?$/i.exec(t))) return { action: "did-i", query: tidyQuery(m[1]) };
  return null;
}

// Which of the person's medications a spoken name means.
// Found live: the raw item.name.includes(query)/query.includes(item.name)
// substring test let a spoken name that means one real medication silently
// match a different, distinct one whenever one name was a plain substring
// of the other -- "Vitamin D" is a substring of the real, different
// "Vitamin D3" -- so "I took my Vitamin D" could silently log a dose (or
// "stop reminding me about Vitamin D" could silently remove the reminder)
// for the wrong supplement. Word-token matching (every word of the shorter
// name must be a WHOLE word of the longer one, the same pattern already
// proven correct for stock/field/reminder lookups elsewhere) still resolves
// a genuine partial reference (e.g. "amoxicillin" against the stored
// "amoxicillin clavulanate") without this hazard.
const matches = (meds, query) => {
  if (GENERIC.test(query)) return meds;
  const queryWords = query.split(" ").filter(Boolean);
  return meds.filter(item => {
    if (item.name === query) return true;
    const nameWords = item.name.split(" ").filter(Boolean);
    return queryWords.every(word => nameWords.includes(word)) || nameWords.every(word => queryWords.includes(word));
  });
};

function describe(item) {
  return `${item.name}${item.dose ? ` ${item.dose}` : ""}`;
}
const timesWords = times => times.map(formatTimeOfDay).join(" and ");

function createMedicationService({ store, circle = null, push, notifications, devices = null, autonomyControl = null, memoryUserName = null, logger = null, now = () => new Date() } = {}) {
  const sharing = async ({ tenantId, userId }) => (circle?.activeMembers ? await circle.activeMembers({ tenantId, personId: userId }) : []).filter(link => link.shares?.medications);
  const nameOf = async ({ tenantId, userId }) => (memoryUserName ? await memoryUserName({ tenantId, userId }) : "") || "Someone in your circle";
  const dayFor = (at, zone) => localDay(at, validTimeZone(zone));

  return {
    // Returns the words to answer with, or null when this is nothing about medications (or the person's words match none of theirs).
    async turn({ tenantId, userId, text, timeZone, at = now() }) {
      const request = readMedicationRequest(text);
      if (!request) return null;
      const zone = validTimeZone(timeZone || DEFAULT_TIME_ZONE);
      const meds = await store.listMedications({ tenantId, userId });
      switch (request.action) {
        case "grace": {
          if (!(request.hours >= MIN_GRACE_HOURS && request.hours <= MAX_GRACE_HOURS)) return `I can wait between ${MIN_GRACE_HOURS} and ${MAX_GRACE_HOURS} hours before telling the people you chose. Nothing was changed.`;
          if (!meds.length) return 'You have no medicine reminders yet. Say "add medication metformin 500mg at 8am and 8pm" first.';
          for (const item of meds) await store.updateMedication({ tenantId, userId, memoryId: item.memoryId, content: { ...item.content, graceHours: request.hours } });
          const members = await sharing({ tenantId, userId }).catch(() => []);
          return members.length
            ? `Done. If a dose stays unconfirmed for ${request.hours} hour${request.hours === 1 ? "" : "s"}, I'll tell ${members.map(link => link.otherName).join(", ")} that a dose is waiting. Only that, never which medicine or the dose.`
            : `Done. I'll wait ${request.hours} hour${request.hours === 1 ? "" : "s"}. Nobody is told anything yet: invite someone ("add name@example.com to my circle") and say "share my medication reminders with <name>" so they can be told.`;
        }
        case "add": {
          if (request.invalid === "name") return 'Tell me the medicine like this: "add medication metformin 500mg at 8am and 8pm".';
          if (request.invalid === "times") return `I couldn't read the times for ${request.name}. Try "at 8am and 8pm" or "in the morning and evening".`;
          const odd = request.confirmed ? null : unusualDose(request);
          if (odd) return `I haven't saved ${request.name} ${request.dose} yet: that is a lot more than is usually taken at once, so it may be a typing slip (an extra zero, or mg and g mixed up). I can't check doses. Please read the dose from your label or prescription and say it again, for example "add medication ${request.name} ${odd.usual} mg at ${timesWords(request.times)}". If ${request.dose} is exactly what the label says, add the word "confirmed" at the end.`;
          const existing = meds.find(item => item.content.name === request.name);
          const inheritedWait = existing?.content.graceHours ?? meds.find(item => item.content.graceHours)?.content.graceHours;
          const content = { kind: "medication", name: request.name, dose: request.dose, times: request.times, timeZone: zone, active: true, createdAt: at.toISOString(), ...(inheritedWait ? { graceHours: inheritedWait } : {}) };
          if (existing) await store.updateMedication({ tenantId, userId, memoryId: existing.memoryId, content: { ...existing.content, ...content, createdAt: existing.content.createdAt } });
          else {
            const added = await store.addMedicationUnlessCapped({ tenantId, userId, content, maxMedications: MAX_MEDICATIONS });
            if (added.capped) return "That's the most medicines I can keep reminders for (twelve). Remove one first.";
          }
          let pushable = true;
          try { pushable = devices?.listPushable ? (await devices.listPushable({ tenantId, userId })).length > 0 : true; } catch { pushable = true; }
          const members = await sharing({ tenantId, userId }).catch(() => []);
          return [`Done. I'll remind you to take ${describe(content)} at ${timesWords(content.times)} every day${existing ? " (this replaces the times I had)" : ""}.`,
            "I only repeat what you tell me was prescribed to you; I can't check doses, so follow your clinician's advice.",
            `Say "I took my ${content.name}" when you have.`,
            members.length ? `If a dose stays unconfirmed for ${GRACE_HOURS} hours I'll tell ${members.map(link => link.otherName).join(", ")} that a dose is waiting — never which medicine.` : "",
            pushable ? "" : "Alerts are not turned on for any of your devices yet, so I can't remind you until you turn them on."].filter(Boolean).join(" ");
        }
        case "list": {
          if (!meds.length) return 'You have no medication reminders. Say "add medication metformin 500mg at 8am and 8pm".';
          return `Your medicines: ${meds.map(item => `${describe(item.content)} at ${timesWords(item.content.times)}`).join("; ")}.`;
        }
        case "remove": {
          const found = matches(meds.filter(item => item.content.active !== false).map(item => ({ ...item.content, memoryId: item.memoryId })), request.query).filter(item => !GENERIC.test(request.query));
          if (!found.length) return null; // "stop reminding me about the meeting" belongs to reminders
          if (found.length > 1) return `Which one: ${found.map(item => item.name).join(" or ")}?`;
          await store.removeMedication({ tenantId, userId, memoryId: found[0].memoryId });
          // Doses already waiting for this medicine must not stay "pending": the sweep would still tell the person's circle that "a dose is waiting" for a medicine that has been stopped.
          await store.cancelOpenDoses?.({ tenantId, userId, medId: found[0].memoryId }).catch?.(() => {});
          return request.stopped
            ? `Done. I've stopped the reminders for ${found[0].name}. Please make sure your clinician or pharmacist knows you are no longer taking it. If a dose or time changed instead, say "add medication ${found[0].name} 500mg at 8am" with the new details.`
            : `Done. I've stopped reminding you about ${found[0].name}.`;
        }
        case "taken": case "missed": case "did-i": {
          const mine = meds.map(item => ({ ...item.content, memoryId: item.memoryId }));
          const today = dayFor(at, zone);
          const doses = await store.dosesForDay({ tenantId, userId, day: today });
          const openFor = item => doses.some(dose => dose.medId === item.memoryId && ["pending", "alerted", "missed"].includes(dose.status) && !dose.reportedBy);
          // "I took them" / "I took it" means the medicines a reminder is waiting on, and nothing else ("I took it back to the shop" is just talk).
          // "I took my metformin and my insulin" is each of those.
          const queries = THEM.test(request.query) ? [] : request.query.split(/\s*(?:,|&|\band\b)\s*(?:(?:my|the)\s+)?/).map(tidyQuery).filter(Boolean);
          let found = THEM.test(request.query) ? mine.filter(openFor) : [...new Map(queries.flatMap(query => matches(mine, query)).map(item => [item.memoryId, item])).values()];
          if (!found.length) return null; // "I took a walk" is just talk
          for (const query of queries) { const these = matches(mine, query); if (!GENERIC.test(query) && these.length > 1) return `Which one: ${these.map(item => item.name).join(" or ")}?`; }
          if (request.action === "did-i") {
            return found.map(item => {
              const list = doses.filter(dose => dose.medId === item.memoryId);
              const taken = list.filter(dose => dose.status === "taken");
              if (taken.length) return `Yes — you logged ${item.name} at ${taken.map(dose => formatTimeOfDay(dose.takenLocal || dose.time)).join(" and ")} today.`;
              const toldMissed = list.find(dose => dose.status === "missed" && dose.reportedBy === "person");
              if (toldMissed) return `No — you told me you missed ${item.name} today.`;
              const waiting = list.find(dose => ["pending", "alerted", "missed"].includes(dose.status));
              return waiting ? `Not yet — the ${formatTimeOfDay(waiting.time)} dose of ${item.name} is waiting.` : `I haven't asked about ${item.name} yet today, and you haven't logged it.`;
            }).join(" ");
          }
          // Found live (companion follow-up audit): unlike "remove" just above (which asks "Which one?"
          // once more than one medicine matches), "taken" applied to every ambiguous partial-name match
          // with no disambiguation at all -- a single-word query like "insulin" is a genuine subset of
          // both "insulin glargine" and "insulin aspart" (a realistic basal+bolus case), so "I took my
          // insulin" (meaning only one of them) would also mark the OTHER, still genuinely pending dose
          // "taken" -- silently suppressing the real missed-dose alert that should reach the person's
          // trusted circle. Bulk "I took my pills"-style generic-word matches are deliberately excluded
          // from this check (GENERIC.test) since matching every active medicine there is the intended,
          // already-tested behavior -- this only disambiguates a genuinely ambiguous NAMED match.
          // (A named medicine that could mean more than one was already asked about above, per name.)
          const local = localClock(at, zone);
          const hhmm = `${String(Math.floor(local.minutes / 60)).padStart(2, "0")}:${String(local.minutes % 60).padStart(2, "0")}`;
          if (request.action === "missed") {
            // "I missed my metformin" / "I forgot my tablets": noted exactly as said, never as taken. The person has told Kyro themselves, so this is not a dose "waiting" for their circle to be asked about, and
            // Kyro does not say whether to take it late or skip it.
            const named = [];
            for (const item of found) {
              const waiting = doses.filter(dose => dose.medId === item.memoryId && ["pending", "alerted"].includes(dose.status)).sort((a, b) => a.time.localeCompare(b.time)).at(-1);
              if (waiting) await store.updateDose({ tenantId, memoryId: waiting.memoryId, content: { ...waiting, status: "missed", reportedBy: "person", reportedAt: at.toISOString() }, expectedStatus: waiting.status });
              else await store.createDose({ tenantId, userId, content: { medId: item.memoryId, name: item.name, day: today, time: hhmm, status: "missed", reportedBy: "person", reportedAt: at.toISOString(), extra: true } });
              named.push(item.name);
            }
            return `Thank you for telling me. I've noted that you missed your ${named.join(" and ")}, and I have not marked it as taken. I can't tell you whether to take it late or leave it: please ask your pharmacist or clinic, and don't double up the next dose unless they say so.`;
          }
          const notes = [];
          for (const item of found) {
            const waiting = doses.filter(dose => dose.medId === item.memoryId && ["pending", "alerted", "missed"].includes(dose.status)).sort((a, b) => a.time.localeCompare(b.time));
            if (waiting.length) {
              // Found live: this wrote the confirmation unconditionally, with the "was it alerted"
              // check reading the STALE `dose` snapshot from before the write. sendDue()'s own
              // "pending -> alerted" claim (below) is CAS-protected against clobbering an already-taken
              // dose, but that only covers one direction -- if sendDue() wins the race and claims
              // "alerted" (pushing "a dose is waiting" to the circle) in the moment between this read
              // and write, `dose.status === "alerted"` here still evaluates false against the stale
              // snapshot, silently skipping the "Dose taken" clearing push -- leaving the circle with an
              // unresolved "check on them" alert even though the dose was confirmed. Fixed by claiming
              // the transition with the record's own real prior status and re-reading on a lost race.
              let latest = waiting.at(-1); let claimed = false;
              for (let attempt = 0; attempt < 5 && !claimed; attempt += 1) {
                claimed = await store.updateDose({ tenantId, memoryId: latest.memoryId, content: { ...latest, status: "taken", takenAt: at.toISOString(), takenLocal: hhmm }, expectedStatus: latest.status });
                if (!claimed) { const fresh = await store.getDose({ tenantId, userId, medId: item.memoryId, day: today, time: latest.time }); if (!fresh) break; latest = fresh; }
              }
              if (claimed && latest.status === "alerted") for (const link of await sharing({ tenantId, userId })) { try { await push({ tenantId, userId: link.otherId, title: "Dose taken", body: `${await nameOf({ tenantId, userId })} has taken the dose that was waiting.`, key: `dose-cleared:${latest.medId}:${latest.day}:${latest.time}:${link.otherId}` }); } catch { /* best effort */ } }
            } else {
              await store.createDose({ tenantId, userId, content: { medId: item.memoryId, name: item.name, day: today, time: hhmm, status: "taken", takenAt: at.toISOString(), takenLocal: hhmm, extra: true } });
            }
            notes.push(item.name);
          }
          return `Thank you. I've logged ${notes.join(" and ")} as taken.`;
        }
        default: return null;
      }
    },

    // The worker's sweep: remind people when a dose is due, and follow up once on doses nobody has confirmed.
    async sendDue({ at = now() } = {}) {
      const result = { checked: 0, prompted: 0, alerted: 0, missed: 0, skippedPaused: 0, skippedNoDevice: 0 };
      if (!notifications?.enqueue) return result;
      const paused = new Map();
      const isPaused = async tenantId => { if (!paused.has(tenantId)) paused.set(tenantId, autonomyControl?.isPaused ? await autonomyControl.isPaused({ tenantId }).catch(() => false) : false); return paused.get(tenantId); };
      const allMedications = await store.listAllActiveMedications({ limit: 2000 });
      const graceByMedication = new Map(allMedications.map(item => [item.memoryId, Number(item.content?.graceHours) >= MIN_GRACE_HOURS ? Number(item.content.graceHours) : GRACE_HOURS]));
      for (const med of allMedications) {
        result.checked += 1;
        const zone = validTimeZone(med.content.timeZone || DEFAULT_TIME_ZONE);
        const today = dayFor(at, zone);
        for (const time of med.content.times || []) {
          if (!isDueNow({ timeOfDay: time, timeZone: zone, now: at, windowMinutes: 120 })) continue;
          if (await isPaused(med.tenantId)) { result.skippedPaused += 1; continue; }
          if (await store.getDose({ tenantId: med.tenantId, userId: med.userId, medId: med.memoryId, day: today, time })) continue;
          let found = [];
          try { found = devices?.listPushable ? await devices.listPushable({ tenantId: med.tenantId, userId: med.userId }) : [{}]; } catch { found = []; }
          if (!found.length) { result.skippedNoDevice += 1; continue; } // no way to remind, so no dose that could be "missed"
          // claimDoseSlot() atomically rechecks-and-creates under a lock, so
          // two workers racing on the same due dose can never both create a
          // row and both push -- only the winner proceeds.
          const claimed = await store.claimDoseSlot({ tenantId: med.tenantId, userId: med.userId, medId: med.memoryId, day: today, time,
            content: { medId: med.memoryId, name: med.content.name, day: today, time, status: "pending", promptedAt: at.toISOString() } });
          if (!claimed) continue;
          await push({ tenantId: med.tenantId, userId: med.userId, title: "Time for your medicine", body: `It's ${formatTimeOfDay(time)}: time for your ${describe(med.content)}. Say "I took my ${med.content.name}" once you have.`, key: `dose:${med.memoryId}:${today}:${time}` });
          result.prompted += 1;
        }
      }
      // A medicine that is no longer active (removed, or stopped) can leave a dose "pending". The sweep must never tell a circle "a dose is waiting" for it: it is closed instead. Only done when the
      // list of active medicines is complete (it is capped), so a long list can never close a real dose by mistake.
      const activeMedicationIds = new Set(allMedications.map(item => item.memoryId));
      const activeListComplete = allMedications.length < 2000;
      for (const dose of await store.listPendingDoses({ limit: 2000 })) {
        if (activeListComplete && !activeMedicationIds.has(dose.medId)) {
          await store.updateDose({ tenantId: dose.tenantId, memoryId: dose.memoryId, content: { ...dose, status: "cancelled", cancelledAt: at.toISOString() }, expectedStatus: "pending" });
          continue;
        }
        const promptedAt = new Date(dose.promptedAt);
        if (Number.isNaN(promptedAt.getTime()) || at.getTime() < promptedAt.getTime() + (graceByMedication.get(dose.medId) ?? GRACE_HOURS) * 3600 * 1000) continue;
        if (await isPaused(dose.tenantId)) continue;
        const members = await sharing({ tenantId: dose.tenantId, userId: dose.userId }).catch(() => []);
        if (!members.length) {
          const claimedMissed = await store.updateDose({ tenantId: dose.tenantId, memoryId: dose.memoryId, content: { ...dose, status: "missed", alertedAt: at.toISOString() }, expectedStatus: "pending" });
          if (claimedMissed) result.missed += 1;
          continue;
        }
        // Claim the "pending" -> "alerted" transition BEFORE telling anyone, so a person who confirms the
        // dose (via turn()'s own separate fresh read-then-write) in the moments between listPendingDoses()'s
        // stale snapshot and here can never have a false "a dose is waiting" alert sent about them, and their
        // real "taken" record is never clobbered by this loop's stale write.
        const claimed = await store.updateDose({ tenantId: dose.tenantId, memoryId: dose.memoryId, content: { ...dose, status: "alerted", alertedAt: at.toISOString() }, expectedStatus: "pending" });
        if (!claimed) continue;
        const name = await nameOf({ tenantId: dose.tenantId, userId: dose.userId });
        for (const link of members) { try { await push({ tenantId: dose.tenantId, userId: link.otherId, title: "A dose is waiting", body: `${name} asked Kyro to remind them about a dose, and it hasn't been confirmed. You may want to check in.`, key: `dose-miss:${dose.medId}:${dose.day}:${dose.time}:${link.otherId}` }); } catch { /* the others still go */ } }
        try { await push({ tenantId: dose.tenantId, userId: dose.userId, title: "Kyro", body: `You haven't confirmed your ${formatTimeOfDay(dose.time)} dose, so I let ${members.map(link => link.otherName).join(", ")} know. Say "I took my ${dose.name}" and I'll tell them it's done.`, key: `dose-miss-self:${dose.medId}:${dose.day}:${dose.time}` }); } catch { /* best effort */ }
        logger?.info?.("dose.unconfirmed", { userId: dose.userId, day: dose.day });
        result.alerted += 1;
      }
      return result;
    }
  };
}

module.exports = Object.freeze({ createMedicationService, readMedicationRequest, parseTimes, parseNameAndDose, MAX_MEDICATIONS, GRACE_HOURS });
