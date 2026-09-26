"use strict";

const { parseTimeOfDay, formatTimeOfDay, isDueNow } = require("../brief/schedule.js");
const { validTimeZone, DEFAULT_TIME_ZONE, localDay } = require("../brief/compose.js");

// A daily check-in a person asks for ("Check in on me every morning at 8"). Kyro asks how they are; they answer in their own words. If they
// never answer AND say nothing to Kyro at all for a few hours, the members of their circle whom they chose ("share my check-ins with
// Amina") may be told, once, that the check-in was missed — and the person is told that too, and can clear it by simply saying they're okay.
// Their answers are never shown to anyone. The person can also ask Kyro to tell those members they're having a hard day.
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
const first = name => clean(name).split(" ")[0];

// "check in on me every morning at 8", "turn on daily check-ins", "stop my check-ins", "do I have check-ins?"
function parseCheckinControl(text) {
  const t = clean(text).toLowerCase().replace(/[.!?]+$/g, "");
  if (!t || t.length > 120 || !/check(?:ing)?[ -]?ins?\b|check (?:in )?(?:on|with) me\b/.test(t)) return null;
  if (/\bshar(?:e|ing)\b/.test(t)) return null; // "stop sharing my check-ins with Amina" is about the circle, not about stopping check-ins
  if (/^(?:please )?(?:stop|turn off|cancel|disable|end|no more)\b/.test(t)) return { action: "stop" };
  if (/^(?:do i have|are my|when is my|when do you|what time is my)\b/.test(t)) return { action: "status" };
  if (!/^(?:please )?(?:check (?:in )?(?:on|with) me|turn on|start|set up|enable|i want|i'd like|i would like|can you|could you|kyro,? check)\b/.test(t)) return null;
  const at = /\b(?:at|around)\s+(\d{1,2}(?:[:.]\d{2})?\s*(?:a\.?m\.?|p\.?m\.?)?)/.exec(t)?.[1];
  const timeOfDay = at ? parseTimeOfDay(at) : "08:00";
  return { action: "enable", timeOfDay, timeGiven: Boolean(at) };
}

// How a person answers a check-in: "ok" | "low" | "tell" (ask Kyro to tell their circle) | null
function readCheckinAnswer(text) {
  const t = clean(text).toLowerCase().replace(/[.!]+$/g, "");
  if (!t || t.length > 120) return null;
  if (/^(?:please )?(?:tell|let|notify) (?:them|my circle|my family|[a-z]+) know\b|^(?:please )?tell (?:them|my circle|[a-z ]+)$/.test(t) && !/^tell me\b/.test(t)) return "tell";
  if (/^(?:i'?m|i am|i feel|feeling|doing)?\s*(?:not (?:so |very |too |really )?(?:good|well|great|okay|ok|fine)|so-?so|tired|sad|lonely|struggling|down|low|rough|awful|terrible|bad|anxious|worried|stressed|unwell|sick)\b/.test(t) || /^(?:it'?s |it is )?(?:a )?(?:hard|rough|bad|tough) (?:day|night|morning)\b/.test(t) || /^i had a (?:bad|rough|hard) (?:night|day)\b/.test(t)) return "low";
  if (/^(?:i'?m |i am |i feel |feeling |doing )?(?:ok|okay|fine|good|well|great|alright|all good|all right|very well|not bad|pretty good|doing well|doing fine|doing okay)\b(?:[ ,.!]+(?:thanks|thank you|and you|how are you))?[ ,.!]*$/.test(t) || /^(?:yes,? )?i'?m (?:here|up|awake)$/.test(t)) return "ok";
  return null;
}

function createCheckinService({ settings, state, circle, push, notifications, devices = null, autonomyControl = null, memoryUserName = null, logger = null, now = () => new Date() } = {}) {
  const sharing = async ({ tenantId, userId }) => (circle?.activeMembers ? await circle.activeMembers({ tenantId, personId: userId }) : []).filter(link => link.shares?.checkins);
  const nameOf = async ({ tenantId, userId }) => (memoryUserName ? await memoryUserName({ tenantId, userId }) : "") || "Someone in your circle";

  return {
    async enable({ tenantId, userId, timeOfDay, timeZone }) {
      const saved = await settings.set({ tenantId, userId, timeOfDay, timeZone: validTimeZone(timeZone || DEFAULT_TIME_ZONE) });
      let pushable = true;
      try { pushable = devices?.listPushable ? (await devices.listPushable({ tenantId, userId })).length > 0 : true; } catch { pushable = true; }
      const members = await sharing({ tenantId, userId }).catch(() => []);
      return { ...saved, hasPushDevice: pushable, sharingWith: members.map(link => link.otherName) };
    },
    async disable({ tenantId, userId }) { return settings.stop({ tenantId, userId }); },
    async status({ tenantId, userId }) { return settings.get({ tenantId, userId }); },

    // The person's reply to today's check-in, or null when they have no check-in that is waiting (so "I'm fine" elsewhere is just talk).
    async answer({ tenantId, userId, text, at = now() }) {
      const kind = readCheckinAnswer(text);
      if (!kind) return null;
      const setting = await settings.get({ tenantId, userId });
      if (!setting) return null;
      const today = localDay(at, validTimeZone(setting.timeZone));
      const current = await state.get({ tenantId, userId, day: today });
      if (!current) return null;
      const name = await nameOf({ tenantId, userId });
      if (kind === "tell") {
        if (current.status !== "low") return null;
        const members = await sharing({ tenantId, userId });
        if (!members.length) return 'You haven\'t chosen anyone to tell yet. Say "share my check-ins with <name>" first, and then tell me again.';
        if (current.toldAt) return `I've already told ${members.map(link => link.otherName).join(", ")}.`;
        for (const link of members) { try { await push({ tenantId, userId: link.otherId, title: "A hard day", body: `${name} is having a hard day and wanted you to know. A call or a message might mean a lot.`, key: `checkin-told:${userId}:${link.otherId}:${today}` }); } catch { /* the others still go */ } }
        await state.update({ tenantId, memoryId: current.memoryId, content: { ...current, toldAt: at.toISOString() } });
        return `I've told ${members.map(link => link.otherName).join(", ")}. I'm here too.`;
      }
      if (!["pending", "alerted", "missed", "ok", "low"].includes(current.status)) return null;
      const wasAlerted = current.status === "alerted";
      await state.update({ tenantId, memoryId: current.memoryId, content: { ...current, status: kind === "ok" ? "ok" : "low", answeredAt: at.toISOString() } });
      if (wasAlerted) {
        for (const link of await sharing({ tenantId, userId })) { try { await push({ tenantId, userId: link.otherId, title: "Checked in", body: `${name} has checked in and is okay.`, key: `checkin-cleared:${userId}:${link.otherId}:${today}` }); } catch { /* best effort */ } }
      }
      if (kind === "ok") return `Glad to hear it${first(name) && name !== "Someone in your circle" ? `, ${first(name)}` : ""}.${wasAlerted ? " I've let your circle know you're fine." : ""} Have a good day.`;
      const members = await sharing({ tenantId, userId });
      return `I'm sorry it's a hard one. I'm here to listen. ${members.length ? `If you'd like, say "tell them" and I'll let ${members.map(link => link.otherName).join(", ")} know you're having a hard day.` : 'If it would help to have someone know, you can choose a person: "share my check-ins with <name>".'}${wasAlerted ? " I've let your circle know you're okay." : ""}`;
    },

    // The worker's sweep: ask people how they are when their time comes, and follow up once on the ones nobody has heard from.
    async sendDue({ at = now() } = {}) {
      const result = { checked: 0, prompted: 0, alerted: 0, cleared: 0, skippedPaused: 0, skippedNoDevice: 0 };
      if (!settings?.listActive || !notifications?.enqueue) return result;
      const paused = new Map(); const active = new Map();
      const isPaused = async tenantId => { if (!paused.has(tenantId)) paused.set(tenantId, autonomyControl?.isPaused ? await autonomyControl.isPaused({ tenantId }).catch(() => false) : false); return paused.get(tenantId); };
      for (const setting of await settings.listActive({ limit: 500 })) {
        active.set(`${setting.tenantId}:${setting.userId}`, setting);
        result.checked += 1;
        const zone = validTimeZone(setting.timeZone);
        if (!isDueNow({ timeOfDay: setting.timeOfDay, timeZone: zone, now: at, windowMinutes: 180 })) continue;
        const today = localDay(at, zone);
        if (await isPaused(setting.tenantId)) { result.skippedPaused += 1; continue; }
        if (await state.get({ tenantId: setting.tenantId, userId: setting.userId, day: today })) continue;
        let found = [];
        try { found = devices?.listPushable ? await devices.listPushable({ tenantId: setting.tenantId, userId: setting.userId }) : [{}]; } catch { found = []; }
        if (!found.length) { result.skippedNoDevice += 1; continue; } // no way to ask, so no check-in that could be "missed"
        const name = first(await nameOf({ tenantId: setting.tenantId, userId: setting.userId }));
        await state.create({ tenantId: setting.tenantId, userId: setting.userId, content: { day: today, status: "pending", promptedAt: at.toISOString() } });
        await notifications.enqueue({ tenantId: setting.tenantId, userId: setting.userId, channel: "push", scheduledAt: at, idempotencyKey: `checkin:${setting.userId}:${today}`,
          content: { title: "Kyro check-in", body: `Good day${name && name !== "Someone" ? `, ${name}` : ""}. How are you today? Say "I'm okay", or tell me if it's a hard one.`, kind: "checkin" } });
        result.prompted += 1;
      }
      for (const pending of await state.listPending({ limit: 1000 })) {
        const setting = active.get(`${pending.tenantId}:${pending.userId}`);
        if (!setting) continue; // check-ins were turned off: nothing to follow up
        if (await isPaused(pending.tenantId)) continue;
        const promptedAt = new Date(pending.promptedAt);
        if (Number.isNaN(promptedAt.getTime()) || at.getTime() < promptedAt.getTime() + setting.graceHours * 3600 * 1000) continue;
        if (await state.hasActivitySince({ tenantId: pending.tenantId, userId: pending.userId, since: promptedAt.toISOString() }).catch(() => false)) {
          await state.update({ tenantId: pending.tenantId, memoryId: pending.memoryId, content: { ...pending, status: "active", answeredAt: at.toISOString() }, expectedStatus: "pending" });
          result.cleared += 1; continue;
        }
        const members = await sharing({ tenantId: pending.tenantId, userId: pending.userId }).catch(() => []);
        if (!members.length) { await state.update({ tenantId: pending.tenantId, memoryId: pending.memoryId, content: { ...pending, status: "missed", alertedAt: at.toISOString() }, expectedStatus: "pending" }); continue; }
        // Claim the "pending" -> "alerted" transition BEFORE telling anyone,
        // so a person who answers (via answer(), a separate fresh
        // read-then-write) in the moments between hasActivitySince()'s check
        // above and here can never have a false "check-in missed" alert
        // sent about them, and their real answer is never clobbered by this
        // loop's stale snapshot.
        const claimed = await state.update({ tenantId: pending.tenantId, memoryId: pending.memoryId, content: { ...pending, status: "alerted", alertedAt: at.toISOString() }, expectedStatus: "pending" });
        if (!claimed) continue;
        const name = await nameOf({ tenantId: pending.tenantId, userId: pending.userId });
        for (const link of members) { try { await push({ tenantId: pending.tenantId, userId: link.otherId, title: "Check-in missed", body: `${name} hasn't answered their Kyro check-in today. You may want to give them a call.`, key: `checkin-miss:${pending.userId}:${link.otherId}:${pending.day}` }); } catch { /* the others still go */ } }
        try { await notifications.enqueue({ tenantId: pending.tenantId, userId: pending.userId, channel: "push", scheduledAt: at, idempotencyKey: `checkin-missed-self:${pending.userId}:${pending.day}`,
          content: { title: "Kyro check-in", body: `I couldn't reach you today, so I let ${members.map(link => link.otherName).join(", ")} know. Say "I'm okay" and I'll tell them you're fine.`, kind: "checkin" } }); } catch { /* best effort */ }
        logger?.info?.("checkin.missed", { userId: pending.userId, day: pending.day });
        result.alerted += 1;
      }
      return result;
    }
  };
}

module.exports = Object.freeze({ createCheckinService, parseCheckinControl, readCheckinAnswer, formatTimeOfDay });
