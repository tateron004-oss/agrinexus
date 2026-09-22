"use strict";

const { reportDay } = require("../farm/log.js");
const { extractPeriod, addDays, describeDay } = require("../personal/dates.js");
const { localDay, validTimeZone, DEFAULT_TIME_ZONE } = require("../brief/compose.js");

// A wellness and training log a person keeps by talking, for athletes, veterans, elders, or anyone: sleep, mood, workouts (with personal
// bests for common running distances), weight and water, with summaries and personal goals. Only what the person reports is stored, in
// standard units, and a number that cannot be right is refused rather than saved. It records and summarises; it never diagnoses, and it
// never tells anyone anything: what a person logs here is theirs alone.
const NUM = "(\\d+(?:[.,]\\d+)?)";
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
const num = raw => Number(String(raw).replace(",", "."));
const round = (value, places = 1) => Number(Number(value).toFixed(places));
const MAX_ENTRIES = 5000;
const ACTIVITIES = "workout|run|walk|yoga|gym|training|swim|cycle|ride|session|strength|stretching|exercise|cardio|football|soccer|basketball|tennis|boxing|weights|pilates|hike|row";
const MOODS = { great: 5, good: 4, okay: 3, ok: 3, fine: 3, low: 2, bad: 2, awful: 1 };
const PB_DISTANCES = [1, 3, 5, 10, 21.1, 42.2];
const toKm = (value, unit) => (/^mi/i.test(unit) ? value * 1.60934 : /^m(?:etres?|eters?)?$/i.test(unit) ? value / 1000 : value);
const toMinutes = (raw, unit) => {
  if (String(raw).includes(":")) { const [a, b] = String(raw).split(":").map(Number); return /^h/i.test(unit || "") ? a * 60 + b : a + b / 60; }
  const value = num(raw); return /^h/i.test(unit || "") ? value * 60 : value;
};
const clock = minutes => { const total = Math.round(minutes * 60); return `${Math.floor(total / 3600) ? `${Math.floor(total / 3600)}:` : ""}${String(Math.floor((total % 3600) / 60)).padStart(Math.floor(total / 3600) ? 2 : 1, "0")}:${String(total % 60).padStart(2, "0")}`; };

const REFUSALS = {
  future: "That day is still ahead, and I only log what has already happened. Tell me the day it really was.",
  sleep: "That doesn't look like a night's sleep (half an hour to twenty hours), so I haven't saved it.",
  mood: "Mood is a number from 1 (awful) to 5 (great), so I haven't saved that.",
  workout: "That doesn't look right, so I haven't saved it. Say it again with the distance and the time.",
  weight: "That doesn't look like a body weight (20 to 400 kg), so I haven't saved it. Say it again with the unit.",
  water: "That is more water than a person drinks in a day, so I haven't saved it."
};

// { action, ... } | { action: "refuse", reason } | null
function readRequest(text, today) {
  const t = clean(text);
  if (!t || t.length > 160) return null;
  const lower = t.toLowerCase().replace(/[.!?]+$/g, "");
  let m;
  const dayOf = (source, sleep = false) => reportDay(sleep ? source.replace(/\blast night\b/gi, "") : source, today);

  // sleep
  if ((m = new RegExp(`^(?:please )?(?:(?:log|record|note) (?:that )?)?(?:i |we )?slept (?:for )?${NUM} ?(?:hours?|hrs?|h)\\b(.*)$`, "i").exec(t)) || (m = new RegExp(`^(?:please )?(?:log|record|note) (?:my )?${NUM} ?(?:hours?|hrs?|h) (?:of )?sleep\\b(.*)$`, "i").exec(t)) || (m = new RegExp(`^(?:my )?sleep (?:last night )?(?:was|is) ${NUM} ?(?:hours?|hrs?|h)\\b(.*)$`, "i").exec(t))) {
    const when = dayOf(t, true); const hours = num(m[1]);
    if (when.future) return { action: "refuse", reason: "future" };
    if (hours < 0.5 || hours > 20) return { action: "refuse", reason: "sleep" };
    return { action: "log", metric: "sleep", value: round(hours), unit: "h", day: when.day };
  }
  // mood
  if ((m = /^(?:please )?(?:(?:log|record|note) )?my mood(?: today)?(?: as| is| was| of|:)? ?(\d)(?: ?(?:out of|\/) ?5)?$/i.exec(t)) || (m = /^(?:please )?(?:log|record|note) mood ?(\d)(?: ?(?:out of|\/) ?5)?$/i.exec(t))) {
    const value = Number(m[1]); if (value < 1 || value > 5) return { action: "refuse", reason: "mood" };
    return { action: "log", metric: "mood", value, unit: "/5", day: dayOf(t).day };
  }
  if ((m = /^my mood(?: today)?(?: is| was) (great|good|okay|ok|fine|low|bad|awful)$/i.exec(t))) return { action: "log", metric: "mood", value: MOODS[m[1].toLowerCase()], unit: "/5", day: today };
  // workouts with a distance
  if ((m = new RegExp(`^(?:please )?(?:(?:log|record) )?(?:that )?(?:i |we )?(ran|jogged|walked|cycled|biked|swam|rowed|hiked) ${NUM} ?(km|kms|kilomet(?:er|re)s?|k|miles?|mi|metres|meters|m)\\b(?: in ${NUM}(?::(\\d{2}))? ?(minutes?|mins?|min|hours?|hrs?|h)?)?(.*)$`, "i").exec(t))) {
    const km = round(toKm(num(m[2]), m[3]), 2); const timeRaw = m[4] ? (m[5] ? `${m[4]}:${m[5]}` : m[4]) : "";
    const minutes = timeRaw ? round(toMinutes(timeRaw, m[6] || (m[5] ? "min" : "min")), 2) : null;
    const when = dayOf(t);
    if (when.future) return { action: "refuse", reason: "future" };
    if (!(km > 0 && km <= 300) || (minutes !== null && !(minutes >= 1 && minutes <= 1440))) return { action: "refuse", reason: "workout" };
    const activity = { ran: "run", jogged: "run", walked: "walk", cycled: "ride", biked: "ride", swam: "swim", rowed: "row", hiked: "hike" }[m[1].toLowerCase()];
    return { action: "log", metric: "workout", activity, km, minutes, unit: "min", day: when.day };
  }
  // workouts with only a duration
  if ((m = new RegExp(`^(?:please )?(?:(?:log|record) )?(?:a |an )?${NUM} ?(?:minutes?|mins?|min)(?: of)? (${ACTIVITIES})(?: session)?\\b(.*)$`, "i").exec(t)) || (m = new RegExp(`^(?:i )?(?:did|had|completed) (?:a |an )?${NUM} ?(?:minutes?|mins?|min)(?: of)? (${ACTIVITIES})\\b(.*)$`, "i").exec(t))) {
    const minutes = num(m[1]); const when = dayOf(t);
    if (when.future) return { action: "refuse", reason: "future" };
    if (!(minutes >= 1 && minutes <= 1440)) return { action: "refuse", reason: "workout" };
    return { action: "log", metric: "workout", activity: m[2].toLowerCase(), km: null, minutes: round(minutes, 2), unit: "min", day: when.day };
  }
  // weight
  if ((m = new RegExp(`^(?:please )?(?:i weigh|my weight is|my weight was|(?:log|record) my weight(?: as| is)?:?|weighed) ${NUM} ?(kg|kgs|kilos?|kilograms?|lb|lbs|pounds?|st|stone)?\\b(.*)$`, "i").exec(t))) {
    const unit = (m[2] || "kg").toLowerCase(); const raw = num(m[1]);
    const kg = /^(?:lb|lbs|pounds?)$/.test(unit) ? raw * 0.45359237 : /^(?:st|stone)$/.test(unit) ? raw * 6.35029 : raw;
    const when = dayOf(t);
    if (when.future) return { action: "refuse", reason: "future" };
    if (!(kg >= 20 && kg <= 400)) return { action: "refuse", reason: "weight" };
    return { action: "log", metric: "weight", value: round(kg), unit: "kg", day: when.day };
  }
  // water
  if ((m = new RegExp(`^(?:i )?(?:drank|had) ${NUM} ?(litres?|liters?|l|glasses?|cups?|ml)(?: of)? water\\b(.*)$`, "i").exec(t))) {
    const raw = num(m[1]); const litres = /^ml$/i.test(m[2]) ? raw / 1000 : /^(?:glass|cup)/i.test(m[2]) ? raw * 0.25 : raw;
    const when = dayOf(t);
    if (when.future) return { action: "refuse", reason: "future" };
    if (!(litres > 0 && litres <= 15)) return { action: "refuse", reason: "water" };
    return { action: "log", metric: "water", value: round(litres, 2), unit: "L", day: when.day };
  }
  // goals
  if ((m = /^my goal is (\d{1,2}) (?:workouts?|sessions|runs|training sessions) (?:a|per|each|every) week$/i.exec(t))) return { action: "goal", metric: "workouts", target: Number(m[1]) };
  if ((m = new RegExp(`^my (?:sleep )?goal is ${NUM} ?(?:hours?|hrs?|h) (?:of sleep )?(?:a|per|each|every) night$`, "i").exec(t))) return { action: "goal", metric: "sleep", target: round(num(m[1])) };
  if (/^(?:how am i doing (?:on|with) my goals?|(?:what|show) (?:are )?my goals?)$/.test(lower)) return { action: "goals" };
  // questions
  if ((m = /^how (?:did|have) i (?:been )?sleep(?:ing)?\b(.*)$/.exec(lower)) || (m = /^how(?:'s| is| was| has) my sleep(?: been)?\b(.*)$/.exec(lower))) return { action: "summary", metric: "sleep", period: extractPeriod(m[1], today) || extractPeriod("this week", today) };
  if ((m = /^how (?:has )?my mood (?:been|was|is)\b(.*)$/.exec(lower)) || (m = /^how (?:is|was|has) my mood(?: been)?\b(.*)$/.exec(lower))) return { action: "summary", metric: "mood", period: extractPeriod(m[1], today) || extractPeriod("this week", today) };
  if ((m = /^how (?:many )?(?:workouts?|sessions|runs) (?:did|have) i (?:done|had|do|logged|been to)?\b(.*)$/.exec(lower)) || (m = /^how much (?:have i|did i) (?:trained|exercised|worked out|run|ran)\b(.*)$/.exec(lower))) return { action: "summary", metric: "workout", period: extractPeriod(m[1], today) || extractPeriod("this week", today) };
  if ((m = /^(?:what(?:'s| is)|how(?:'s| is)) my weight(?: trend)?\b(.*)$/.exec(lower)) || /^am i (?:losing|gaining) weight$/.test(lower)) return { action: "summary", metric: "weight", period: extractPeriod(m?.[1] || "", today) || extractPeriod("this month", today) };
  if ((m = /^how much water (?:did|have) i (?:drink|drunk|had)\b(.*)$/.exec(lower))) return { action: "summary", metric: "water", period: extractPeriod(m[1], today) || extractPeriod("today", today) };
  if (/^(?:what are|show) my personal (?:bests?|records?|pbs?)$/.test(lower)) return { action: "bests" };
  if (/^(?:show|read) (?:me )?my (?:training|wellness|workout|fitness) log$/.test(lower)) return { action: "show" };
  if (/^(?:undo|delete|remove) (?:my )?last (?:wellness|training|workout|sleep|weight|mood|water|fitness)(?: log)?(?: entry)?$/.test(lower)) return { action: "undo" };
  // First person only, like the self-harm/safety patterns elsewhere in the
  // companion tier ("my coach is a veteran athlete" is not about the
  // speaker). "veteran"/"athlete" both carry idiomatic senses ("veteran
  // teacher", "a veteran of the tech industry") the regex cannot fully
  // disambiguate -- kept low-risk by only ever surfacing real, already-
  // built log features, never a presumptuous reply, so a false match is
  // still relevant, harmless information rather than an embarrassing guess.
  if (/\bi(?:'m| am) (?:an? )?(?:athlete|runner|cyclist|swimmer|training for (?:a |an )?(?:race|marathon|half marathon|triathlon|event))\b/i.test(t)
    || /\btraining for (?:a |an )?(?:race|marathon|half marathon|triathlon)\b/i.test(lower)) return { action: "intro" };
  return null;
}

// ---- saying it back ----
const pace = (km, minutes) => (km && minutes ? `${clock(minutes / km)} per km` : "");
const when = (day, today) => (day === today ? "today" : day === addDays(today, -1) ? "yesterday" : describeDay(day, today));
function describeEntry(entry) {
  if (entry.metric === "sleep") return `${entry.value} hours of sleep`;
  if (entry.metric === "mood") return `mood ${entry.value} out of 5`;
  if (entry.metric === "weight") return `weight ${entry.value} kg`;
  if (entry.metric === "water") return `${entry.value} L of water`;
  const bits = [entry.km ? `${entry.km} km ${entry.activity}` : entry.activity, entry.minutes ? `${round(entry.minutes)} minutes` : ""].filter(Boolean);
  return `${bits.join(" in ")}${entry.km && entry.minutes ? ` (${pace(entry.km, entry.minutes)})` : ""}`;
}
const inPeriod = (entry, period) => entry.day >= period.from && entry.day <= period.to;
const average = list => list.reduce((sum, item) => sum + item, 0) / list.length;

// The distance category a run belongs to (within 3 %), or null.
const category = km => PB_DISTANCES.find(distance => Math.abs(km - distance) / distance <= 0.03) ?? null;
function personalBests(entries) {
  const best = {};
  for (const item of entries) {
    if (item.metric !== "workout" || item.activity !== "run" || !item.km || !item.minutes) continue;
    const distance = category(item.km); if (distance === null) continue;
    const adjusted = item.minutes * (distance / item.km); // a 5.05 km run in 28:00 counts as the 5 km it nearly is
    if (!best[distance] || adjusted < best[distance].minutes) best[distance] = { minutes: adjusted, day: item.day };
  }
  return best;
}
const distanceName = distance => (distance === 21.1 ? "half marathon" : distance === 42.2 ? "marathon" : `${distance} km`);

// Returns the words to answer with, or null when this is not about the wellness log. `store` needs add/list/remove.
async function wellnessTurn({ text, store, tenantId, userId, now = new Date(), timeZone }) {
  if (!store?.addEntry || !store?.listEntries || !store?.removeEntry) return null;
  const zone = validTimeZone(timeZone || DEFAULT_TIME_ZONE);
  const today = localDay(now, zone);
  const request = readRequest(text, today);
  if (!request) return null;
  const scope = { tenantId, userId };
  try {
    if (request.action === "refuse") return REFUSALS[request.reason] || REFUSALS.workout;
    const rows = await store.listEntries(scope);
    const entries = rows.filter(row => row.content.kind === "entry").map(row => ({ ...row.content, memoryId: row.memoryId }));
    const goals = rows.filter(row => row.content.kind === "goal").map(row => row.content);
    switch (request.action) {
      case "log": {
        if (rows.length >= MAX_ENTRIES) return "Your log is full. Tell me to undo the last entry, or ask me for a summary first.";
        const entry = { kind: "entry", ...Object.fromEntries(Object.entries(request).filter(([key]) => key !== "action")) };
        const before = personalBests(entries);
        await store.addEntry({ ...scope, content: entry });
        let line = `Logged ${describeEntry(entry)} for ${when(entry.day, today)}.`;
        if (entry.metric === "workout") {
          const week = extractPeriod("this week", today);
          const count = [...entries, entry].filter(item => item.metric === "workout" && inPeriod(item, week)).length;
          const goal = goals.find(item => item.metric === "workouts");
          line += ` That's workout ${count} this week${goal ? ` of ${goal.target}` : ""}.`;
          if (entry.activity === "run" && entry.km && entry.minutes) {
            const distance = category(entry.km);
            if (distance !== null) {
              const now2 = personalBests([entry])[distance];
              if (!before[distance] || now2.minutes < before[distance].minutes) line += ` New personal best for ${distanceName(distance)}: ${clock(now2.minutes)}${before[distance] ? ` (was ${clock(before[distance].minutes)})` : ""}!`;
            }
          }
        } else if (entry.metric === "sleep") {
          const goal = goals.find(item => item.metric === "sleep");
          if (goal && entry.value < goal.target) line += ` That's ${round(goal.target - entry.value)} hours under your ${goal.target}-hour goal.`;
        } else if (entry.metric === "weight") {
          const last = entries.filter(item => item.metric === "weight" && item.day < entry.day).sort((a, b) => b.day.localeCompare(a.day))[0];
          if (last) { const change = round(entry.value - last.value); line += ` ${change === 0 ? "Unchanged" : `${change > 0 ? "Up" : "Down"} ${Math.abs(change)} kg`} since ${when(last.day, today)}.`; }
        } else if (entry.metric === "water") {
          const total = round([...entries, entry].filter(item => item.metric === "water" && item.day === entry.day).reduce((sum, item) => sum + item.value, 0), 2);
          line += ` ${total} L for the day.`;
        }
        return line;
      }
      case "summary": {
        const list = entries.filter(item => item.metric === request.metric && inPeriod(item, request.period));
        const label = request.period.label;
        if (!list.length) return `I have no ${request.metric === "workout" ? "workouts" : request.metric} logged for ${label}.`;
        if (request.metric === "sleep") { const values = list.map(item => item.value); return `Sleep ${label}: ${round(average(values))} hours a night on average over ${list.length} ${list.length === 1 ? "night" : "nights"} (least ${Math.min(...values)}, most ${Math.max(...values)}).`; }
        if (request.metric === "mood") return `Mood ${label}: ${round(average(list.map(item => item.value)))} out of 5 on average over ${list.length} ${list.length === 1 ? "day" : "days"}.`;
        if (request.metric === "water") return `Water ${label}: ${round(list.reduce((sum, item) => sum + item.value, 0), 2)} L.`;
        if (request.metric === "weight") {
          const sorted = [...list].sort((a, b) => a.day.localeCompare(b.day)); const first = sorted[0]; const last = sorted.at(-1);
          return sorted.length === 1 ? `Weight ${label}: ${last.value} kg (one reading).` : `Weight ${label}: ${first.value} kg to ${last.value} kg, ${round(last.value - first.value) === 0 ? "no change" : `${last.value > first.value ? "up" : "down"} ${Math.abs(round(last.value - first.value))} kg`}.`;
        }
        const minutes = list.reduce((sum, item) => sum + (item.minutes || 0), 0); const km = list.reduce((sum, item) => sum + (item.km || 0), 0);
        return `Training ${label}: ${list.length} ${list.length === 1 ? "workout" : "workouts"}, ${round(minutes)} minutes${km ? `, ${round(km)} km` : ""}.`;
      }
      case "bests": {
        const best = personalBests(entries); const keys = PB_DISTANCES.filter(distance => best[distance]);
        return keys.length ? `Your personal bests: ${keys.map(distance => `${distanceName(distance)} ${clock(best[distance].minutes)} (${when(best[distance].day, today)})`).join("; ")}.` : 'No personal bests yet. Log a run with a distance and time, like "I ran 5 km in 28 minutes".';
      }
      case "goal": {
        const existing = rows.find(row => row.content.kind === "goal" && row.content.metric === request.metric);
        if (existing) await store.removeEntry({ ...scope, memoryId: existing.memoryId });
        await store.addEntry({ ...scope, content: { kind: "goal", metric: request.metric, target: request.target } });
        return request.metric === "workouts" ? `Goal set: ${request.target} workouts a week. I'll tell you how you're doing whenever you log one, or ask "how am I doing on my goals?".` : `Goal set: ${request.target} hours of sleep a night. I'll mention it when a night falls short.`;
      }
      case "goals": {
        if (!goals.length) return 'You have no goals yet. Say "my goal is 4 workouts a week" or "my goal is 8 hours of sleep a night".';
        const week = extractPeriod("this week", today);
        return goals.map(goal => {
          if (goal.metric === "workouts") { const count = entries.filter(item => item.metric === "workout" && inPeriod(item, week)).length; return `Workouts: ${count} of ${goal.target} this week${count >= goal.target ? " — goal met" : ""}`; }
          const nights = entries.filter(item => item.metric === "sleep" && inPeriod(item, week)); return nights.length ? `Sleep: ${round(average(nights.map(item => item.value)))} hours a night this week against ${goal.target}` : `Sleep: nothing logged this week against ${goal.target}`;
        }).join("; ") + ".";
      }
      case "show": {
        if (!entries.length) return 'Your log is empty. Say "I slept 7 hours" or "I ran 5 km in 30 minutes".';
        return `Your latest entries: ${[...entries].sort((a, b) => b.day.localeCompare(a.day)).slice(0, 6).map(item => `${when(item.day, today)}: ${describeEntry(item)}`).join("; ")}.`;
      }
      case "undo": {
        const last = entries[0];
        if (!last) return "There is nothing in your log to undo.";
        await store.removeEntry({ ...scope, memoryId: last.memoryId });
        return `Removed your last entry: ${describeEntry(last)} for ${when(last.day, today)}.`;
      }
      // What this log actually does, said plainly -- no training plan, no coaching advice, no
      // performance analysis beyond a real personal-best comparison on common running distances.
      case "intro": return 'I can keep a real training log for you: say things like "I ran 5 km in 28 minutes" or "I did a 45 minute strength session", and I\'ll track it, tell you your pace, and call out a new personal best on common race distances. Say "my goal is 4 workouts a week" to track a weekly goal, or "show my personal bests" any time.';
      default: return null;
    }
  } catch { return null; }
}

module.exports = Object.freeze({ wellnessTurn, readRequest, personalBests, category, MAX_ENTRIES });
