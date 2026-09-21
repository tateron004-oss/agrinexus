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

// { action: "add"|"list"|"remove"|"taken"|"did-i", ... } or null
function readMedicationRequest(text) {
  const t = clean(text).replace(/[.!?]+$/g, "");
  if (!t || t.length > 160) return null;
  let m;
  if ((m = /^(?:please )?add (?:a )?(?:medication|medicine|med)(?: reminder)?:?\s+(.+?)\s+(?:(?:every ?day|daily|each day)\s+)?(?:at|around)\s+(.+)$/i.exec(t)) ||
      (m = /^(?:please )?remind me to take (?:my )?(.+?) (?:at|around) (.+?) (?:every ?day|daily|each day)$/i.exec(t)) ||
      (m = /^(?:please )?(?:remind me to take|i take|i need to take|i'?m on|i am on) (?:my )?(.+?) (?:every ?day|daily|each day) (?:at|around) (.+)$/i.exec(t))) {
    const drug = parseNameAndDose(m[1]); const times = parseTimes(m[2]);
    const explicit = /^(?:please )?add (?:a )?(?:medication|medicine|med)\b/i.test(t);
    if (!explicit && !(drug?.dose || MEDICINE_WORD.test(t))) return null;
    if (!drug) return { action: "add", invalid: "name" };
    if (!times) return { action: "add", invalid: "times", name: drug.name };
    return { action: "add", ...drug, times };
  }
  if ((m = /^(?:please )?(?:remind me to take|i take|i need to take) (?:my )?(.+?) every (morning|evening|night)$/i.exec(t))) {
    const drug = parseNameAndDose(m[1]);
    if (!(drug?.dose || MEDICINE_WORD.test(t))) return null;
    return drug ? { action: "add", ...drug, times: [NAMED_TIMES[m[2].toLowerCase()]] } : { action: "add", invalid: "name" };
  }
  if (/^(?:what|which) (?:medications?|medicines?|meds|pills) (?:do i|am i) (?:take|taking|on)$/i.test(t) || /^(?:show|list|what are) my (?:medications?|medicines?|meds)$/i.test(t)) return { action: "list" };
  if ((m = /^stop reminding me (?:about|to take) (?:my )?(.+)$/i.exec(t)) || (m = /^(?:remove|delete) (?:my )?(.+?) from my (?:medications?|medicines?|meds)$/i.exec(t))) return { action: "remove", query: clean(m[1]).toLowerCase() };
  if ((m = /^i (?:just )?(?:took|have taken|'ve taken|had) (?:my |the |some )?(.+?)(?: (?:already|just now|now|today))?$/i.exec(t))) return { action: "taken", query: clean(m[1]).toLowerCase().replace(/^(?:morning|evening|night|midday|afternoon)\s+/, "") };
  if ((m = /^did i (?:take|have) (?:my |the )?(.+?)(?: (?:today|yet|already))?$/i.exec(t))) return { action: "did-i", query: clean(m[1]).toLowerCase().replace(/^(?:morning|evening|night|midday|afternoon)\s+/, "") };
  return null;
}

// Which of the person's medications a spoken name means.
const matches = (meds, query) => (GENERIC.test(query) ? meds : meds.filter(item => item.name === query || item.name.includes(query) || query.includes(item.name)));

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
        case "add": {
          if (request.invalid === "name") return 'Tell me the medicine like this: "add medication metformin 500mg at 8am and 8pm".';
          if (request.invalid === "times") return `I couldn't read the times for ${request.name}. Try "at 8am and 8pm" or "in the morning and evening".`;
          const existing = meds.find(item => item.content.name === request.name);
          if (!existing && meds.length >= MAX_MEDICATIONS) return "That's the most medicines I can keep reminders for (twelve). Remove one first.";
          const content = { kind: "medication", name: request.name, dose: request.dose, times: request.times, timeZone: zone, active: true, createdAt: at.toISOString() };
          if (existing) await store.updateMedication({ tenantId, userId, memoryId: existing.memoryId, content: { ...existing.content, ...content, createdAt: existing.content.createdAt } });
          else await store.addMedication({ tenantId, userId, content });
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
          return `Done. I've stopped reminding you about ${found[0].name}.`;
        }
        case "taken": case "did-i": {
          const mine = meds.map(item => ({ ...item.content, memoryId: item.memoryId }));
          const found = matches(mine, request.query);
          if (!found.length) return null; // "I took a walk" is just talk
          const today = dayFor(at, zone);
          const doses = await store.dosesForDay({ tenantId, userId, day: today });
          if (request.action === "did-i") {
            return found.map(item => {
              const list = doses.filter(dose => dose.medId === item.memoryId);
              const taken = list.filter(dose => dose.status === "taken");
              if (taken.length) return `Yes — you logged ${item.name} at ${taken.map(dose => formatTimeOfDay(dose.takenLocal || dose.time)).join(" and ")} today.`;
              const waiting = list.find(dose => ["pending", "alerted", "missed"].includes(dose.status));
              return waiting ? `Not yet — the ${formatTimeOfDay(waiting.time)} dose of ${item.name} is waiting.` : `I haven't asked about ${item.name} yet today, and you haven't logged it.`;
            }).join(" ");
          }
          const local = localClock(at, zone);
          const hhmm = `${String(Math.floor(local.minutes / 60)).padStart(2, "0")}:${String(local.minutes % 60).padStart(2, "0")}`;
          const notes = [];
          for (const item of found) {
            const waiting = doses.filter(dose => dose.medId === item.memoryId && ["pending", "alerted", "missed"].includes(dose.status)).sort((a, b) => a.time.localeCompare(b.time));
            if (waiting.length) {
              const dose = waiting.at(-1);
              await store.updateDose({ tenantId, memoryId: dose.memoryId, content: { ...dose, status: "taken", takenAt: at.toISOString(), takenLocal: hhmm } });
              if (dose.status === "alerted") for (const link of await sharing({ tenantId, userId })) { try { await push({ tenantId, userId: link.otherId, title: "Dose taken", body: `${await nameOf({ tenantId, userId })} has taken the dose that was waiting.`, key: `dose-cleared:${dose.medId}:${dose.day}:${dose.time}:${link.otherId}` }); } catch { /* best effort */ } }
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
      for (const med of await store.listAllActiveMedications({ limit: 2000 })) {
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
          await store.createDose({ tenantId: med.tenantId, userId: med.userId, content: { medId: med.memoryId, name: med.content.name, day: today, time, status: "pending", promptedAt: at.toISOString() } });
          await push({ tenantId: med.tenantId, userId: med.userId, title: "Time for your medicine", body: `It's ${formatTimeOfDay(time)}: time for your ${describe(med.content)}. Say "I took my ${med.content.name}" once you have.`, key: `dose:${med.memoryId}:${today}:${time}` });
          result.prompted += 1;
        }
      }
      for (const dose of await store.listPendingDoses({ limit: 2000 })) {
        const promptedAt = new Date(dose.promptedAt);
        if (Number.isNaN(promptedAt.getTime()) || at.getTime() < promptedAt.getTime() + GRACE_HOURS * 3600 * 1000) continue;
        if (await isPaused(dose.tenantId)) continue;
        const members = await sharing({ tenantId: dose.tenantId, userId: dose.userId }).catch(() => []);
        if (!members.length) { await store.updateDose({ tenantId: dose.tenantId, memoryId: dose.memoryId, content: { ...dose, status: "missed", alertedAt: at.toISOString() } }); result.missed += 1; continue; }
        const name = await nameOf({ tenantId: dose.tenantId, userId: dose.userId });
        for (const link of members) { try { await push({ tenantId: dose.tenantId, userId: link.otherId, title: "A dose is waiting", body: `${name} asked Kyro to remind them about a dose, and it hasn't been confirmed. You may want to check in.`, key: `dose-miss:${dose.medId}:${dose.day}:${dose.time}:${link.otherId}` }); } catch { /* the others still go */ } }
        try { await push({ tenantId: dose.tenantId, userId: dose.userId, title: "Kyro", body: `You haven't confirmed your ${formatTimeOfDay(dose.time)} dose, so I let ${members.map(link => link.otherName).join(", ")} know. Say "I took my ${dose.name}" and I'll tell them it's done.`, key: `dose-miss-self:${dose.medId}:${dose.day}:${dose.time}` }); } catch { /* best effort */ }
        await store.updateDose({ tenantId: dose.tenantId, memoryId: dose.memoryId, content: { ...dose, status: "alerted", alertedAt: at.toISOString() } });
        logger?.info?.("dose.unconfirmed", { userId: dose.userId, day: dose.day });
        result.alerted += 1;
      }
      return result;
    }
  };
}

module.exports = Object.freeze({ createMedicationService, readMedicationRequest, parseTimes, parseNameAndDose, MAX_MEDICATIONS, GRACE_HOURS });
